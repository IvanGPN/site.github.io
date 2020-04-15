/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2020
 * @compiler Bridge.NET 17.9.0
 */
Bridge.assembly("CShtml", function ($asm, globals) {
    "use strict";

    Bridge.define("\u01c0\u01c0Cshtml\u01c0\u01c0Component\u01c0\u01c0App\u01c0\u01c0Xaml\u01c0\u01c0Factory", {
        statics: {
            methods: {
                Instantiate: function () {
                    var type = CShtml.App;
                    return Bridge.global.CSHTML5.Internal.TypeInstantiationHelper.Instantiate(type);
                }
            }
        }
    });

    Bridge.define("\u01c0\u01c0Cshtml\u01c0\u01c0Component\u01c0\u01c0Page1\u01c0\u01c0Xaml\u01c0\u01c0Factory", {
        statics: {
            methods: {
                Instantiate: function () {
                    var type = CShtml.Page1;
                    return Bridge.global.CSHTML5.Internal.TypeInstantiationHelper.Instantiate(type);
                }
            }
        }
    });

    Bridge.define("\u01c0\u01c0Cshtml\u01c0\u01c0Component\u01c0\u01c0Pagehome\u01c0\u01c0Xaml\u01c0\u01c0Factory", {
        statics: {
            methods: {
                Instantiate: function () {
                    var type = CShtml.PageHome;
                    return Bridge.global.CSHTML5.Internal.TypeInstantiationHelper.Instantiate(type);
                }
            }
        }
    });

    Bridge.define("\u01c0\u01c0Cshtml\u01c0\u01c0Component\u01c0\u01c0Pageupload\u01c0\u01c0Xaml\u01c0\u01c0Factory", {
        statics: {
            methods: {
                Instantiate: function () {
                    var type = CShtml.PageUpload;
                    return Bridge.global.CSHTML5.Internal.TypeInstantiationHelper.Instantiate(type);
                }
            }
        }
    });

    Bridge.define("\u01c0\u01c0Cshtml\u01c0\u01c0Component\u01c0\u01c0Secondpage\u01c0\u01c0Xaml\u01c0\u01c0Factory", {
        statics: {
            methods: {
                Instantiate: function () {
                    var type = CShtml.SecondPage;
                    return Bridge.global.CSHTML5.Internal.TypeInstantiationHelper.Instantiate(type);
                }
            }
        }
    });

    Bridge.define("CShtml.App", {
        inherits: [Windows.UI.Xaml.Application],
        main: function Main () {
            new CShtml.App();
        },
        fields: {
            _contentLoaded: false
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Windows.UI.Xaml.Application.ctor.call(this);
                this.InitializeComponent();



                var mframe = new Windows.UI.Xaml.Controls.Frame();
                mframe.Navigate(new System.Uri("PageHome.xaml", System.UriKind.Relative));
                Windows.UI.Xaml.Window.Current.Content = mframe;
            }
        },
        methods: {
            InitializeComponent: function () {
                if (this._contentLoaded) {
                    return;
                }
                this._contentLoaded = true;


                if (Bridge.is(this, Windows.UI.Xaml.UIElement)) {
                    Bridge.cast(this, Windows.UI.Xaml.UIElement).XamlSourcePath = "CShtml\\App.xaml";
                }


                Bridge.global.CSHTML5.Internal.StartupAssemblyInfo.OutputRootPath = "Output\\";
                Bridge.global.CSHTML5.Internal.StartupAssemblyInfo.OutputAppFilesPath = "app-cshtml5\\app\\";
                Bridge.global.CSHTML5.Internal.StartupAssemblyInfo.OutputLibrariesPath = "app-cshtml5\\libs\\";
                Bridge.global.CSHTML5.Internal.StartupAssemblyInfo.OutputResourcesPath = "app-cshtml5\\res\\";


                var ResourceDictionary_e8424f6bc5ed40618b05489b76ab4fce = new Bridge.global.Windows.UI.Xaml.ResourceDictionary();
                this.Resources = ResourceDictionary_e8424f6bc5ed40618b05489b76ab4fce;

                this.Resources = ResourceDictionary_e8424f6bc5ed40618b05489b76ab4fce;







            }
        }
    });

    Bridge.define("CShtml.FileClass", {
        statics: {
            fields: {
                fileText: null
            }
        }
    });

    Bridge.define("CShtml.Page1", {
        inherits: [Windows.UI.Xaml.Controls.Page],
        fields: {
            elementForList: null,
            btnCancel: null,
            btnUpload: null,
            btnProcessing: null,
            txtFile: null,
            nigaIDEF_Jpeg: null,
            borderIDEF: null,
            nigaUML_Jpeg: null,
            borderUML: null,
            LayoutGrid: null,
            element: null,
            _contentLoaded: false
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Windows.UI.Xaml.Controls.Page.ctor.call(this);

                this.InitializeComponent();
                this.txtFile.Text = CShtml.FileClass.fileText;
            }
        },
        methods: {
            Button_Click: function (sender, e) {

                var frame = new Windows.UI.Xaml.Controls.Frame();
                frame.Navigate(new System.Uri("PageHome.xaml", System.UriKind.Relative));
                Windows.UI.Xaml.Window.Current.Content = frame;
            },
            BtnUpload_Click: function (sender, e) {
                var frame = new Windows.UI.Xaml.Controls.Frame();
                frame.Navigate(new System.Uri("PageUpload.xaml", System.UriKind.Relative));
                Windows.UI.Xaml.Window.Current.Content = frame;

            },
            First_Click: function (sender, e) {
                this.btnCancel.Visibility = Windows.UI.Xaml.Visibility.Visible;
                this.btnUpload.Visibility = Windows.UI.Xaml.Visibility.Visible;
                this.btnProcessing.Visibility = Windows.UI.Xaml.Visibility.Visible;
                this.txtFile.Visibility = Windows.UI.Xaml.Visibility.Visible;

                this.borderIDEF.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.borderUML.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
            },
            Second_Click: function (sender, e) {
                this.btnCancel.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnUpload.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnProcessing.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.txtFile.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

                this.borderIDEF.Visibility = Windows.UI.Xaml.Visibility.Visible;
                this.borderUML.Visibility = Windows.UI.Xaml.Visibility.Collapsed;


            },
            Third_Click: function (sender, e) {
                this.btnCancel.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnUpload.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnProcessing.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.txtFile.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

                this.borderIDEF.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.borderUML.Visibility = Windows.UI.Xaml.Visibility.Visible;
            },
            BtnProcessing_Click: function (sender, e) {
                if (!Bridge.referenceEquals(this.txtFile.Text, "")) {
                    var bitmapIDEF = new Windows.UI.Xaml.Media.Imaging.BitmapImage.ctor();
                    bitmapIDEF.UriSource = new System.Uri("img/nigaIDEF0.jpg", System.UriKind.Relative);
                    this.nigaIDEF_Jpeg.Source = bitmapIDEF;
                    this.nigaIDEF_Jpeg.Visibility = Windows.UI.Xaml.Visibility.Visible;

                    var bitmapUML = new Windows.UI.Xaml.Media.Imaging.BitmapImage.ctor();
                    bitmapUML.UriSource = new System.Uri("img/niga.jpg", System.UriKind.Relative);
                    this.nigaUML_Jpeg.Source = bitmapUML;
                    this.nigaUML_Jpeg.Visibility = Windows.UI.Xaml.Visibility.Visible;

                    Windows.UI.Xaml.MessageBox.Show("\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e. \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0432 \u043b\u0435\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043e\u043a\u043d\u0430!");
                } else {
                    Windows.UI.Xaml.MessageBox.Show("JSON \u0444\u0430\u0439\u043b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
                }

            },
            InitializeComponent: function () {
                var $t;
                if (this._contentLoaded) {
                    return;
                }
                this._contentLoaded = true;


                if (Bridge.is(this, Windows.UI.Xaml.UIElement)) {
                    Bridge.cast(this, Windows.UI.Xaml.UIElement).XamlSourcePath = "CShtml\\Page1.xaml";
                }



                var Grid_75b9e3d94a3145ccad3ce32f30285683 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_ee0d54f96ae946768ee17a94da65cb8c = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_ee0d54f96ae946768ee17a94da65cb8c.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_ee0d54f96ae946768ee17a94da65cb8c.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_18b9c2cf0cf9444bb62806047815d438 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_18b9c2cf0cf9444bb62806047815d438.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_18b9c2cf0cf9444bb62806047815d438.Offset = 0.0;

                var GradientStop_b398197b09ca4e7fb7467469c6cf6ff0 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_b398197b09ca4e7fb7467469c6cf6ff0.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_b398197b09ca4e7fb7467469c6cf6ff0.Offset = 1.0;

                LinearGradientBrush_ee0d54f96ae946768ee17a94da65cb8c.GradientStops.add(GradientStop_18b9c2cf0cf9444bb62806047815d438);
                LinearGradientBrush_ee0d54f96ae946768ee17a94da65cb8c.GradientStops.add(GradientStop_b398197b09ca4e7fb7467469c6cf6ff0);


                Grid_75b9e3d94a3145ccad3ce32f30285683.Background = LinearGradientBrush_ee0d54f96ae946768ee17a94da65cb8c;

                var RowDefinition_43bba02304344204a7065f0ce19a71ba = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_43bba02304344204a7065f0ce19a71ba.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_1c548adaca3642629ab335c8d9a3b81d = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_1c548adaca3642629ab335c8d9a3b81d.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_9efa53a41799414ca0c5a8bec0afccc4 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_9efa53a41799414ca0c5a8bec0afccc4.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_75b9e3d94a3145ccad3ce32f30285683.RowDefinitions.add(RowDefinition_43bba02304344204a7065f0ce19a71ba);
                Grid_75b9e3d94a3145ccad3ce32f30285683.RowDefinitions.add(RowDefinition_1c548adaca3642629ab335c8d9a3b81d);
                Grid_75b9e3d94a3145ccad3ce32f30285683.RowDefinitions.add(RowDefinition_9efa53a41799414ca0c5a8bec0afccc4);

                var ColumnDefinition_20f121417daf4fb4ad2c2fc8d592187f = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();
                ColumnDefinition_20f121417daf4fb4ad2c2fc8d592187f.Width = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var ColumnDefinition_bbcdf773fee84e6a8452e83e555d8304 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_75b9e3d94a3145ccad3ce32f30285683.ColumnDefinitions.add(ColumnDefinition_20f121417daf4fb4ad2c2fc8d592187f);
                Grid_75b9e3d94a3145ccad3ce32f30285683.ColumnDefinitions.add(ColumnDefinition_bbcdf773fee84e6a8452e83e555d8304);

                var Border_4b78e8466c7e439c9ddbbbf8a153a954 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("elementForList", Border_4b78e8466c7e439c9ddbbbf8a153a954);
                Border_4b78e8466c7e439c9ddbbbf8a153a954.Name = "elementForList";
                Border_4b78e8466c7e439c9ddbbbf8a153a954.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_4b78e8466c7e439c9ddbbbf8a153a954, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_4b78e8466c7e439c9ddbbbf8a153a954, 3);
                Border_4b78e8466c7e439c9ddbbbf8a153a954.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_4b78e8466c7e439c9ddbbbf8a153a954.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_4b78e8466c7e439c9ddbbbf8a153a954.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var Grid_2760370eab094b83850db63082cb1fd8 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_b30da6b36bff4496b81cfcd3dedf5bb7 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_b30da6b36bff4496b81cfcd3dedf5bb7.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_b30da6b36bff4496b81cfcd3dedf5bb7.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_e13bbd472b9d4bb095a1ee453a85771e = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_e13bbd472b9d4bb095a1ee453a85771e.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_e13bbd472b9d4bb095a1ee453a85771e.Offset = 0.0;

                var GradientStop_a33a4f72853b4b7c9c22b8e2e331b0b7 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_a33a4f72853b4b7c9c22b8e2e331b0b7.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_a33a4f72853b4b7c9c22b8e2e331b0b7.Offset = 1.0;

                LinearGradientBrush_b30da6b36bff4496b81cfcd3dedf5bb7.GradientStops.add(GradientStop_e13bbd472b9d4bb095a1ee453a85771e);
                LinearGradientBrush_b30da6b36bff4496b81cfcd3dedf5bb7.GradientStops.add(GradientStop_a33a4f72853b4b7c9c22b8e2e331b0b7);


                Grid_2760370eab094b83850db63082cb1fd8.Background = LinearGradientBrush_b30da6b36bff4496b81cfcd3dedf5bb7;

                var RowDefinition_99992875d53e4600acbb063092ef9bf3 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_5cb474e9e3c941cbb62c6efdd5cd7940 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_5cb474e9e3c941cbb62c6efdd5cd7940.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_c9649d2aa02145f7b232e7fef9d1b631 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_c9649d2aa02145f7b232e7fef9d1b631.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_98268f01a75a4f2683304cf4f80a1d84 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_98268f01a75a4f2683304cf4f80a1d84.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_2e831baf1b41488f99a733e5d7139b66 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_2760370eab094b83850db63082cb1fd8.RowDefinitions.add(RowDefinition_99992875d53e4600acbb063092ef9bf3);
                Grid_2760370eab094b83850db63082cb1fd8.RowDefinitions.add(RowDefinition_5cb474e9e3c941cbb62c6efdd5cd7940);
                Grid_2760370eab094b83850db63082cb1fd8.RowDefinitions.add(RowDefinition_c9649d2aa02145f7b232e7fef9d1b631);
                Grid_2760370eab094b83850db63082cb1fd8.RowDefinitions.add(RowDefinition_98268f01a75a4f2683304cf4f80a1d84);
                Grid_2760370eab094b83850db63082cb1fd8.RowDefinitions.add(RowDefinition_2e831baf1b41488f99a733e5d7139b66);

                var Button_b6d800c278d64fdd81e766eb711ef04e = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_b6d800c278d64fdd81e766eb711ef04e, 1);
                Button_b6d800c278d64fdd81e766eb711ef04e.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_b6d800c278d64fdd81e766eb711ef04e.Content = "JSON";
                Button_b6d800c278d64fdd81e766eb711ef04e.FontSize = 20.0;
                Button_b6d800c278d64fdd81e766eb711ef04e.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_b6d800c278d64fdd81e766eb711ef04e.addClick(Bridge.fn.cacheBind(this, this.First_Click));

                var Button_940c0c8f60ad4201aef09b63202cd67d = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_940c0c8f60ad4201aef09b63202cd67d, 2);
                Button_940c0c8f60ad4201aef09b63202cd67d.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_940c0c8f60ad4201aef09b63202cd67d.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 IDEF0";
                Button_940c0c8f60ad4201aef09b63202cd67d.FontSize = 20.0;
                Button_940c0c8f60ad4201aef09b63202cd67d.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_940c0c8f60ad4201aef09b63202cd67d.addClick(Bridge.fn.cacheBind(this, this.Second_Click));

                var Button_0c5e394481f04a0b8c15d40773043f11 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_0c5e394481f04a0b8c15d40773043f11, 3);
                Button_0c5e394481f04a0b8c15d40773043f11.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_0c5e394481f04a0b8c15d40773043f11.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 UML";
                Button_0c5e394481f04a0b8c15d40773043f11.FontSize = 20.0;
                Button_0c5e394481f04a0b8c15d40773043f11.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_0c5e394481f04a0b8c15d40773043f11.addClick(Bridge.fn.cacheBind(this, this.Third_Click));

                Grid_2760370eab094b83850db63082cb1fd8.Children.add(Button_b6d800c278d64fdd81e766eb711ef04e);
                Grid_2760370eab094b83850db63082cb1fd8.Children.add(Button_940c0c8f60ad4201aef09b63202cd67d);
                Grid_2760370eab094b83850db63082cb1fd8.Children.add(Button_0c5e394481f04a0b8c15d40773043f11);


                Border_4b78e8466c7e439c9ddbbbf8a153a954.Child = Grid_2760370eab094b83850db63082cb1fd8;


                var Border_d752e4e094584065adc3ab55479eeb8e = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_d752e4e094584065adc3ab55479eeb8e);
                Border_d752e4e094584065adc3ab55479eeb8e.Name = "element";
                Border_d752e4e094584065adc3ab55479eeb8e.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_d752e4e094584065adc3ab55479eeb8e, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_d752e4e094584065adc3ab55479eeb8e, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_d752e4e094584065adc3ab55479eeb8e, 1);
                Border_d752e4e094584065adc3ab55479eeb8e.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_d752e4e094584065adc3ab55479eeb8e.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_d752e4e094584065adc3ab55479eeb8e.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_9b12d7737fb54572b9962817f1c4597c = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_9b12d7737fb54572b9962817f1c4597c.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_9b12d7737fb54572b9962817f1c4597c.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_c005bb1d15fe48d5a1489b8d7ab46176 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_c005bb1d15fe48d5a1489b8d7ab46176.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_c005bb1d15fe48d5a1489b8d7ab46176.Offset = 0.0;

                var GradientStop_8d5311c2493344bca10d4f426713b7aa = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_8d5311c2493344bca10d4f426713b7aa.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_8d5311c2493344bca10d4f426713b7aa.Offset = 1.0;

                LinearGradientBrush_9b12d7737fb54572b9962817f1c4597c.GradientStops.add(GradientStop_c005bb1d15fe48d5a1489b8d7ab46176);
                LinearGradientBrush_9b12d7737fb54572b9962817f1c4597c.GradientStops.add(GradientStop_8d5311c2493344bca10d4f426713b7aa);


                Border_d752e4e094584065adc3ab55479eeb8e.Background = LinearGradientBrush_9b12d7737fb54572b9962817f1c4597c;

                var Grid_4fde04f4fb1a4836a1696c56101e3bf4 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutGrid", Grid_4fde04f4fb1a4836a1696c56101e3bf4);
                Grid_4fde04f4fb1a4836a1696c56101e3bf4.Name = "LayoutGrid";
                var LinearGradientBrush_9d198537eff54936bed54561f298e6d4 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_9d198537eff54936bed54561f298e6d4.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_9d198537eff54936bed54561f298e6d4.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_9593e6a39f954fd0aa61730789482894 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_9593e6a39f954fd0aa61730789482894.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_9593e6a39f954fd0aa61730789482894.Offset = 0.0;

                var GradientStop_548fae031c124a46af91e50cf7c8d0cc = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_548fae031c124a46af91e50cf7c8d0cc.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_548fae031c124a46af91e50cf7c8d0cc.Offset = 1.0;

                LinearGradientBrush_9d198537eff54936bed54561f298e6d4.GradientStops.add(GradientStop_9593e6a39f954fd0aa61730789482894);
                LinearGradientBrush_9d198537eff54936bed54561f298e6d4.GradientStops.add(GradientStop_548fae031c124a46af91e50cf7c8d0cc);


                Grid_4fde04f4fb1a4836a1696c56101e3bf4.Background = LinearGradientBrush_9d198537eff54936bed54561f298e6d4;

                var RowDefinition_797a05596850454eb8581aa90c4cbde2 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_797a05596850454eb8581aa90c4cbde2.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_79abefbad5744ac29b45e5b30a8ae609 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_79abefbad5744ac29b45e5b30a8ae609.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_74d405b58d0641829addb0e1e8908570 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_74d405b58d0641829addb0e1e8908570.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_4fde04f4fb1a4836a1696c56101e3bf4.RowDefinitions.add(RowDefinition_797a05596850454eb8581aa90c4cbde2);
                Grid_4fde04f4fb1a4836a1696c56101e3bf4.RowDefinitions.add(RowDefinition_79abefbad5744ac29b45e5b30a8ae609);
                Grid_4fde04f4fb1a4836a1696c56101e3bf4.RowDefinitions.add(RowDefinition_74d405b58d0641829addb0e1e8908570);

                var ColumnDefinition_a0465813e64f41b1aea63029b4df2cbe = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_39f26c4c56be4dd1b1f3263559c85545 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_4fde04f4fb1a4836a1696c56101e3bf4.ColumnDefinitions.add(ColumnDefinition_a0465813e64f41b1aea63029b4df2cbe);
                Grid_4fde04f4fb1a4836a1696c56101e3bf4.ColumnDefinitions.add(ColumnDefinition_39f26c4c56be4dd1b1f3263559c85545);

                var Button_46c6dc9ec2694128956c1b60ea12d793 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnCancel", Button_46c6dc9ec2694128956c1b60ea12d793);
                Button_46c6dc9ec2694128956c1b60ea12d793.Name = "btnCancel";
                Button_46c6dc9ec2694128956c1b60ea12d793.Content = "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_46c6dc9ec2694128956c1b60ea12d793, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_46c6dc9ec2694128956c1b60ea12d793, 2);
                Button_46c6dc9ec2694128956c1b60ea12d793.Width = 280.0;
                Button_46c6dc9ec2694128956c1b60ea12d793.Height = 50.0;
                Button_46c6dc9ec2694128956c1b60ea12d793.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_46c6dc9ec2694128956c1b60ea12d793.FontSize = 25.0;
                Button_46c6dc9ec2694128956c1b60ea12d793.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_46c6dc9ec2694128956c1b60ea12d793.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_46c6dc9ec2694128956c1b60ea12d793.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                var ControlTemplate_e27ad79bd2334ac097b452ac2a961696 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_e27ad79bd2334ac097b452ac2a961696.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_e27ad79bd2334ac097b452ac2a961696.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_e27ad79bd2334ac097b452ac2a961696));

                Button_46c6dc9ec2694128956c1b60ea12d793.Template = ControlTemplate_e27ad79bd2334ac097b452ac2a961696;


                var Button_588d910c703f419ca61149d45d2d2223 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnUpload", Button_588d910c703f419ca61149d45d2d2223);
                Button_588d910c703f419ca61149d45d2d2223.Name = "btnUpload";
                Button_588d910c703f419ca61149d45d2d2223.Content = "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c JSON \u0444\u0430\u0439\u043b";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_588d910c703f419ca61149d45d2d2223, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_588d910c703f419ca61149d45d2d2223, 1);
                Button_588d910c703f419ca61149d45d2d2223.Width = 280.0;
                Button_588d910c703f419ca61149d45d2d2223.Height = 50.0;
                Button_588d910c703f419ca61149d45d2d2223.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_588d910c703f419ca61149d45d2d2223.FontSize = 25.0;
                Button_588d910c703f419ca61149d45d2d2223.addClick(Bridge.fn.cacheBind(this, this.BtnUpload_Click));
                Button_588d910c703f419ca61149d45d2d2223.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_588d910c703f419ca61149d45d2d2223.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_588d910c703f419ca61149d45d2d2223.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_588d910c703f419ca61149d45d2d2223.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                var ControlTemplate_134ae03cb6634052ab0d4a10c75f29a5 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_134ae03cb6634052ab0d4a10c75f29a5.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_134ae03cb6634052ab0d4a10c75f29a5.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_134ae03cb6634052ab0d4a10c75f29a5));

                Button_588d910c703f419ca61149d45d2d2223.Template = ControlTemplate_134ae03cb6634052ab0d4a10c75f29a5;


                var Button_c84c6bc1b6464347a11d342794e4ee9b = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnProcessing", Button_c84c6bc1b6464347a11d342794e4ee9b);
                Button_c84c6bc1b6464347a11d342794e4ee9b.Name = "btnProcessing";
                Button_c84c6bc1b6464347a11d342794e4ee9b.Content = "\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0443";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_c84c6bc1b6464347a11d342794e4ee9b, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_c84c6bc1b6464347a11d342794e4ee9b, 1);
                Button_c84c6bc1b6464347a11d342794e4ee9b.Width = 280.0;
                Button_c84c6bc1b6464347a11d342794e4ee9b.Height = 50.0;
                Button_c84c6bc1b6464347a11d342794e4ee9b.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_c84c6bc1b6464347a11d342794e4ee9b.FontSize = 25.0;
                Button_c84c6bc1b6464347a11d342794e4ee9b.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_c84c6bc1b6464347a11d342794e4ee9b.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_c84c6bc1b6464347a11d342794e4ee9b.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_c84c6bc1b6464347a11d342794e4ee9b.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_c84c6bc1b6464347a11d342794e4ee9b.addClick(Bridge.fn.cacheBind(this, this.BtnProcessing_Click));
                var ControlTemplate_4d5a932ae274459ba227b0edee5935b5 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_4d5a932ae274459ba227b0edee5935b5.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_4d5a932ae274459ba227b0edee5935b5.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_4d5a932ae274459ba227b0edee5935b5));

                Button_c84c6bc1b6464347a11d342794e4ee9b.Template = ControlTemplate_4d5a932ae274459ba227b0edee5935b5;


                var TextBox_6ebafa3ae8cc414f9044b53e78987c9c = new Bridge.global.Windows.UI.Xaml.Controls.TextBox();
                this.RegisterName$1("txtFile", TextBox_6ebafa3ae8cc414f9044b53e78987c9c);
                TextBox_6ebafa3ae8cc414f9044b53e78987c9c.Name = "txtFile";
                TextBox_6ebafa3ae8cc414f9044b53e78987c9c.TextWrapping = Bridge.global.Windows.UI.Xaml.TextWrapping.Wrap;
                TextBox_6ebafa3ae8cc414f9044b53e78987c9c.Text = "";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(TextBox_6ebafa3ae8cc414f9044b53e78987c9c, 1);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(TextBox_6ebafa3ae8cc414f9044b53e78987c9c, 2);
                TextBox_6ebafa3ae8cc414f9044b53e78987c9c.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(10, -20, 10, -20);
                TextBox_6ebafa3ae8cc414f9044b53e78987c9c.FontSize = 20.0;

                var Border_c06edd857ae04df1ae313a347e5957da = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderIDEF", Border_c06edd857ae04df1ae313a347e5957da);
                Border_c06edd857ae04df1ae313a347e5957da.Name = "borderIDEF";
                Border_c06edd857ae04df1ae313a347e5957da.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_c06edd857ae04df1ae313a347e5957da.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_c06edd857ae04df1ae313a347e5957da, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_c06edd857ae04df1ae313a347e5957da, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_c06edd857ae04df1ae313a347e5957da, 2);
                Border_c06edd857ae04df1ae313a347e5957da.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_c06edd857ae04df1ae313a347e5957da.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_c06edd857ae04df1ae313a347e5957da.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                Border_c06edd857ae04df1ae313a347e5957da.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));
                var Image_54df3125257e40a196e7a1292ff02645 = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                this.RegisterName$1("nigaIDEF_Jpeg", Image_54df3125257e40a196e7a1292ff02645);
                Image_54df3125257e40a196e7a1292ff02645.Name = "nigaIDEF_Jpeg";
                Image_54df3125257e40a196e7a1292ff02645.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Fill;
                Image_54df3125257e40a196e7a1292ff02645.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;

                Border_c06edd857ae04df1ae313a347e5957da.Child = Image_54df3125257e40a196e7a1292ff02645;


                var Border_0a9647b7a227490e86c176e41d2f0850 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderUML", Border_0a9647b7a227490e86c176e41d2f0850);
                Border_0a9647b7a227490e86c176e41d2f0850.Name = "borderUML";
                Border_0a9647b7a227490e86c176e41d2f0850.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_0a9647b7a227490e86c176e41d2f0850.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_0a9647b7a227490e86c176e41d2f0850, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_0a9647b7a227490e86c176e41d2f0850, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_0a9647b7a227490e86c176e41d2f0850, 2);
                Border_0a9647b7a227490e86c176e41d2f0850.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_0a9647b7a227490e86c176e41d2f0850.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_0a9647b7a227490e86c176e41d2f0850.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                Border_0a9647b7a227490e86c176e41d2f0850.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));
                var Image_0d078f3b3a464c27a0529193935c928a = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                this.RegisterName$1("nigaUML_Jpeg", Image_0d078f3b3a464c27a0529193935c928a);
                Image_0d078f3b3a464c27a0529193935c928a.Name = "nigaUML_Jpeg";
                Image_0d078f3b3a464c27a0529193935c928a.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Fill;
                Image_0d078f3b3a464c27a0529193935c928a.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;

                Border_0a9647b7a227490e86c176e41d2f0850.Child = Image_0d078f3b3a464c27a0529193935c928a;


                Grid_4fde04f4fb1a4836a1696c56101e3bf4.Children.add(Button_46c6dc9ec2694128956c1b60ea12d793);
                Grid_4fde04f4fb1a4836a1696c56101e3bf4.Children.add(Button_588d910c703f419ca61149d45d2d2223);
                Grid_4fde04f4fb1a4836a1696c56101e3bf4.Children.add(Button_c84c6bc1b6464347a11d342794e4ee9b);
                Grid_4fde04f4fb1a4836a1696c56101e3bf4.Children.add(TextBox_6ebafa3ae8cc414f9044b53e78987c9c);
                Grid_4fde04f4fb1a4836a1696c56101e3bf4.Children.add(Border_c06edd857ae04df1ae313a347e5957da);
                Grid_4fde04f4fb1a4836a1696c56101e3bf4.Children.add(Border_0a9647b7a227490e86c176e41d2f0850);


                Border_d752e4e094584065adc3ab55479eeb8e.Child = Grid_4fde04f4fb1a4836a1696c56101e3bf4;


                Grid_75b9e3d94a3145ccad3ce32f30285683.Children.add(Border_4b78e8466c7e439c9ddbbbf8a153a954);
                Grid_75b9e3d94a3145ccad3ce32f30285683.Children.add(Border_d752e4e094584065adc3ab55479eeb8e);


                this.Content = Grid_75b9e3d94a3145ccad3ce32f30285683;



                this.elementForList = Border_4b78e8466c7e439c9ddbbbf8a153a954;
                this.btnCancel = Button_46c6dc9ec2694128956c1b60ea12d793;
                this.btnUpload = Button_588d910c703f419ca61149d45d2d2223;
                this.btnProcessing = Button_c84c6bc1b6464347a11d342794e4ee9b;
                this.txtFile = TextBox_6ebafa3ae8cc414f9044b53e78987c9c;
                this.nigaIDEF_Jpeg = Image_54df3125257e40a196e7a1292ff02645;
                this.borderIDEF = Border_c06edd857ae04df1ae313a347e5957da;
                this.nigaUML_Jpeg = Image_0d078f3b3a464c27a0529193935c928a;
                this.borderUML = Border_0a9647b7a227490e86c176e41d2f0850;
                this.LayoutGrid = Grid_4fde04f4fb1a4836a1696c56101e3bf4;
                this.element = Border_d752e4e094584065adc3ab55479eeb8e;



            },
            accessVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_e27ad79bd2334ac097b452ac2a961696: function (templateOwner) {
                var templateInstance_c56834459926494183190689caf0b479 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_c56834459926494183190689caf0b479.TemplateOwner = templateOwner;
                var Border_b28975367bc1435b8e37b4b57ab9d68f = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_b28975367bc1435b8e37b4b57ab9d68f);
                Border_b28975367bc1435b8e37b4b57ab9d68f.Name = "OuterBorder";
                Border_b28975367bc1435b8e37b4b57ab9d68f.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_d5e1e1acd10540629fa92071fadcf9ba = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_d5e1e1acd10540629fa92071fadcf9ba);
                VisualStateGroup_d5e1e1acd10540629fa92071fadcf9ba.Name = "CommonStates";
                var VisualState_26662e9965cf464ea59a0d15a286a4b4 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_26662e9965cf464ea59a0d15a286a4b4);
                VisualState_26662e9965cf464ea59a0d15a286a4b4.Name = "Normal";

                var VisualState_e3ac2a4559814ae2aa9128b7d1a52f47 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_e3ac2a4559814ae2aa9128b7d1a52f47);
                VisualState_e3ac2a4559814ae2aa9128b7d1a52f47.Name = "PointerOver";
                var Storyboard_1387b35e94f146b5ba866e693f37b339 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_0fd66fb61d0d471fb1add96702c6f78a = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_0fd66fb61d0d471fb1add96702c6f78a, "InnerBorder");
                var DiscreteObjectKeyFrame_6480a30f1e39402586a5cf013063cba4 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_6480a30f1e39402586a5cf013063cba4.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_6480a30f1e39402586a5cf013063cba4.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_0fd66fb61d0d471fb1add96702c6f78a.KeyFrames.add(DiscreteObjectKeyFrame_6480a30f1e39402586a5cf013063cba4);


                Storyboard_1387b35e94f146b5ba866e693f37b339.Children.add(ObjectAnimationUsingKeyFrames_0fd66fb61d0d471fb1add96702c6f78a);


                VisualState_e3ac2a4559814ae2aa9128b7d1a52f47.Storyboard = Storyboard_1387b35e94f146b5ba866e693f37b339;


                var VisualState_f419776cffe347ec99f4c79a788a2e85 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_f419776cffe347ec99f4c79a788a2e85);
                VisualState_f419776cffe347ec99f4c79a788a2e85.Name = "Pressed";
                var Storyboard_4c5878a933224c96b9cde9bcdd42e382 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_4ebf52628d1f4db1ad3f3a72a727b8a9 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_4ebf52628d1f4db1ad3f3a72a727b8a9, "InnerBorder");
                var DiscreteObjectKeyFrame_0c211c81387b45c18f3fe90fcf268e3b = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_0c211c81387b45c18f3fe90fcf268e3b.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_0c211c81387b45c18f3fe90fcf268e3b.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_4ebf52628d1f4db1ad3f3a72a727b8a9.KeyFrames.add(DiscreteObjectKeyFrame_0c211c81387b45c18f3fe90fcf268e3b);


                Storyboard_4c5878a933224c96b9cde9bcdd42e382.Children.add(ObjectAnimationUsingKeyFrames_4ebf52628d1f4db1ad3f3a72a727b8a9);


                VisualState_f419776cffe347ec99f4c79a788a2e85.Storyboard = Storyboard_4c5878a933224c96b9cde9bcdd42e382;


                var VisualState_3ea40bdf7ba4402fa5c1eb44dec90a12 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_3ea40bdf7ba4402fa5c1eb44dec90a12);
                VisualState_3ea40bdf7ba4402fa5c1eb44dec90a12.Name = "Disabled";
                var Storyboard_ee7003ff9824466b81a2dfa17356a679 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_c54c7cb90be44308ab3b159a5eed69ed = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_c54c7cb90be44308ab3b159a5eed69ed, "InnerBorder");
                var DiscreteObjectKeyFrame_3b106c6b32aa4b449a885b5ac5412448 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_3b106c6b32aa4b449a885b5ac5412448.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_3b106c6b32aa4b449a885b5ac5412448.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_c54c7cb90be44308ab3b159a5eed69ed.KeyFrames.add(DiscreteObjectKeyFrame_3b106c6b32aa4b449a885b5ac5412448);


                Storyboard_ee7003ff9824466b81a2dfa17356a679.Children.add(ObjectAnimationUsingKeyFrames_c54c7cb90be44308ab3b159a5eed69ed);


                VisualState_3ea40bdf7ba4402fa5c1eb44dec90a12.Storyboard = Storyboard_ee7003ff9824466b81a2dfa17356a679;


                System.Array.add(VisualStateGroup_d5e1e1acd10540629fa92071fadcf9ba.States, VisualState_26662e9965cf464ea59a0d15a286a4b4, Object);
                System.Array.add(VisualStateGroup_d5e1e1acd10540629fa92071fadcf9ba.States, VisualState_e3ac2a4559814ae2aa9128b7d1a52f47, Object);
                System.Array.add(VisualStateGroup_d5e1e1acd10540629fa92071fadcf9ba.States, VisualState_f419776cffe347ec99f4c79a788a2e85, Object);
                System.Array.add(VisualStateGroup_d5e1e1acd10540629fa92071fadcf9ba.States, VisualState_3ea40bdf7ba4402fa5c1eb44dec90a12, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_d5e1e1acd10540629fa92071fadcf9ba);

                var Border_63af7e8dc5b94a5e8b21d5f6419863be = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_63af7e8dc5b94a5e8b21d5f6419863be);
                Border_63af7e8dc5b94a5e8b21d5f6419863be.Name = "InnerBorder";
                Border_63af7e8dc5b94a5e8b21d5f6419863be.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_3d45e39b80c544be8319ad1ac58a318d = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_3d45e39b80c544be8319ad1ac58a318d);
                ContentPresenter_3d45e39b80c544be8319ad1ac58a318d.Name = "ContentPresenter";
                var Binding_7018b7c29ac142bbb826b368074224e8 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_7018b7c29ac142bbb826b368074224e8.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_1773340361844208a9717d4348e89d36 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_1773340361844208a9717d4348e89d36.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_7018b7c29ac142bbb826b368074224e8.RelativeSource = RelativeSource_1773340361844208a9717d4348e89d36;


                Binding_7018b7c29ac142bbb826b368074224e8.TemplateOwner = templateInstance_c56834459926494183190689caf0b479;

                var Binding_d16fbe74931a449094eedb1c20ba5829 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d16fbe74931a449094eedb1c20ba5829.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_4ec89654d92b41f0a7609be3a443e739 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_4ec89654d92b41f0a7609be3a443e739.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d16fbe74931a449094eedb1c20ba5829.RelativeSource = RelativeSource_4ec89654d92b41f0a7609be3a443e739;


                Binding_d16fbe74931a449094eedb1c20ba5829.TemplateOwner = templateInstance_c56834459926494183190689caf0b479;

                var Binding_d4c72612d2664a2592d2d62b2293951d = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d4c72612d2664a2592d2d62b2293951d.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_6a5801b3771441a9a5359c70acfe0f7e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_6a5801b3771441a9a5359c70acfe0f7e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d4c72612d2664a2592d2d62b2293951d.RelativeSource = RelativeSource_6a5801b3771441a9a5359c70acfe0f7e;


                Binding_d4c72612d2664a2592d2d62b2293951d.TemplateOwner = templateInstance_c56834459926494183190689caf0b479;

                var Binding_ff05b3ebbbd146258f3a7e847424b870 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ff05b3ebbbd146258f3a7e847424b870.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_ea28789d42314265bc17e671eda43bb3 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ea28789d42314265bc17e671eda43bb3.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ff05b3ebbbd146258f3a7e847424b870.RelativeSource = RelativeSource_ea28789d42314265bc17e671eda43bb3;


                Binding_ff05b3ebbbd146258f3a7e847424b870.TemplateOwner = templateInstance_c56834459926494183190689caf0b479;

                var Binding_4f1e0b4ce369435f9cb73308253347a2 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4f1e0b4ce369435f9cb73308253347a2.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_71e8f41c8ea84d2cb1e3053c8651458b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_71e8f41c8ea84d2cb1e3053c8651458b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4f1e0b4ce369435f9cb73308253347a2.RelativeSource = RelativeSource_71e8f41c8ea84d2cb1e3053c8651458b;


                Binding_4f1e0b4ce369435f9cb73308253347a2.TemplateOwner = templateInstance_c56834459926494183190689caf0b479;


                Border_63af7e8dc5b94a5e8b21d5f6419863be.Child = ContentPresenter_3d45e39b80c544be8319ad1ac58a318d;

                var Binding_2c4e38b91aae41b6a53537fc6dbeea87 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_2c4e38b91aae41b6a53537fc6dbeea87.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_bd609dabe1564d118b773807ef6d2916 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_bd609dabe1564d118b773807ef6d2916.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_2c4e38b91aae41b6a53537fc6dbeea87.RelativeSource = RelativeSource_bd609dabe1564d118b773807ef6d2916;


                Binding_2c4e38b91aae41b6a53537fc6dbeea87.TemplateOwner = templateInstance_c56834459926494183190689caf0b479;


                Border_b28975367bc1435b8e37b4b57ab9d68f.Child = Border_63af7e8dc5b94a5e8b21d5f6419863be;

                var Binding_319e4a9bfaf844d9a0d3b56ca6a124a6 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_319e4a9bfaf844d9a0d3b56ca6a124a6.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_1d2ceb487a004ce88572da4577dfd2e9 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_1d2ceb487a004ce88572da4577dfd2e9.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_319e4a9bfaf844d9a0d3b56ca6a124a6.RelativeSource = RelativeSource_1d2ceb487a004ce88572da4577dfd2e9;


                Binding_319e4a9bfaf844d9a0d3b56ca6a124a6.TemplateOwner = templateInstance_c56834459926494183190689caf0b479;

                var Binding_d81099742bda49c4af1c6f4c8ee6f094 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d81099742bda49c4af1c6f4c8ee6f094.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_1e0ca67e707344f2a6012ae0f2c6d412 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_1e0ca67e707344f2a6012ae0f2c6d412.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d81099742bda49c4af1c6f4c8ee6f094.RelativeSource = RelativeSource_1e0ca67e707344f2a6012ae0f2c6d412;


                Binding_d81099742bda49c4af1c6f4c8ee6f094.TemplateOwner = templateInstance_c56834459926494183190689caf0b479;

                var Binding_097f94e535964f188c4300a6f17e6ab8 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_097f94e535964f188c4300a6f17e6ab8.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_89476497eb0f4341a874eeb75abffefd = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_89476497eb0f4341a874eeb75abffefd.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_097f94e535964f188c4300a6f17e6ab8.RelativeSource = RelativeSource_89476497eb0f4341a874eeb75abffefd;


                Binding_097f94e535964f188c4300a6f17e6ab8.TemplateOwner = templateInstance_c56834459926494183190689caf0b479;



                ContentPresenter_3d45e39b80c544be8319ad1ac58a318d.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_7018b7c29ac142bbb826b368074224e8);
                ContentPresenter_3d45e39b80c544be8319ad1ac58a318d.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_d16fbe74931a449094eedb1c20ba5829);
                ContentPresenter_3d45e39b80c544be8319ad1ac58a318d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_d4c72612d2664a2592d2d62b2293951d);
                ContentPresenter_3d45e39b80c544be8319ad1ac58a318d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_ff05b3ebbbd146258f3a7e847424b870);
                ContentPresenter_3d45e39b80c544be8319ad1ac58a318d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_4f1e0b4ce369435f9cb73308253347a2);
                Border_63af7e8dc5b94a5e8b21d5f6419863be.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_2c4e38b91aae41b6a53537fc6dbeea87);
                Border_b28975367bc1435b8e37b4b57ab9d68f.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_319e4a9bfaf844d9a0d3b56ca6a124a6);
                Border_b28975367bc1435b8e37b4b57ab9d68f.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_d81099742bda49c4af1c6f4c8ee6f094);
                Border_b28975367bc1435b8e37b4b57ab9d68f.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_097f94e535964f188c4300a6f17e6ab8);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_0fd66fb61d0d471fb1add96702c6f78a, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb), Bridge.fn.cacheBind(this, this.setVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb), Bridge.fn.cacheBind(this, this.getVisualStateProperty_6421b55d25f2421fb9a99730f83f41bb)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_0fd66fb61d0d471fb1add96702c6f78a, Border_63af7e8dc5b94a5e8b21d5f6419863be);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_4ebf52628d1f4db1ad3f3a72a727b8a9, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108), Bridge.fn.cacheBind(this, this.setVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108), Bridge.fn.cacheBind(this, this.getVisualStateProperty_0fd0f849a2ac4c08b3ecc05e920ee108)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_4ebf52628d1f4db1ad3f3a72a727b8a9, Border_63af7e8dc5b94a5e8b21d5f6419863be);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_c54c7cb90be44308ab3b159a5eed69ed, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a), Bridge.fn.cacheBind(this, this.setVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a), Bridge.fn.cacheBind(this, this.getVisualStateProperty_10cded8c78394976b6a7a2f4ce064f6a)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_c54c7cb90be44308ab3b159a5eed69ed, Border_63af7e8dc5b94a5e8b21d5f6419863be);

                templateInstance_c56834459926494183190689caf0b479.TemplateContent = Border_b28975367bc1435b8e37b4b57ab9d68f;
                return templateInstance_c56834459926494183190689caf0b479;
            },
            accessVisualStateProperty_572f68503ba94dfd896e2203a1c720a4: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_572f68503ba94dfd896e2203a1c720a4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_572f68503ba94dfd896e2203a1c720a4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_572f68503ba94dfd896e2203a1c720a4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_572f68503ba94dfd896e2203a1c720a4: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_14cfff3629f242efa467c37c93627951: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_14cfff3629f242efa467c37c93627951: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_14cfff3629f242efa467c37c93627951: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_14cfff3629f242efa467c37c93627951: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_14cfff3629f242efa467c37c93627951: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_134ae03cb6634052ab0d4a10c75f29a5: function (templateOwner) {
                var templateInstance_a3668913fbd44677962feb2778a29ba8 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_a3668913fbd44677962feb2778a29ba8.TemplateOwner = templateOwner;
                var Border_6f04bad9fe69471abbe4d7b4d768e044 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_6f04bad9fe69471abbe4d7b4d768e044);
                Border_6f04bad9fe69471abbe4d7b4d768e044.Name = "OuterBorder";
                Border_6f04bad9fe69471abbe4d7b4d768e044.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_ddd78d41849b44d3928249a39b958278 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_ddd78d41849b44d3928249a39b958278);
                VisualStateGroup_ddd78d41849b44d3928249a39b958278.Name = "CommonStates";
                var VisualState_541fff5fca1843eb9d04b458d2278e89 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_541fff5fca1843eb9d04b458d2278e89);
                VisualState_541fff5fca1843eb9d04b458d2278e89.Name = "Normal";

                var VisualState_6c2cf9c475bc4c649a6eed0f6ee67c1a = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_6c2cf9c475bc4c649a6eed0f6ee67c1a);
                VisualState_6c2cf9c475bc4c649a6eed0f6ee67c1a.Name = "PointerOver";
                var Storyboard_79520bd30ef54913a4a23ab70ad63c9d = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_2c67fbd1dc02442188c58b8a854865d6 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_2c67fbd1dc02442188c58b8a854865d6, "InnerBorder");
                var DiscreteObjectKeyFrame_e103625fb29c4800a7bc78c96de03a52 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_e103625fb29c4800a7bc78c96de03a52.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_e103625fb29c4800a7bc78c96de03a52.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_2c67fbd1dc02442188c58b8a854865d6.KeyFrames.add(DiscreteObjectKeyFrame_e103625fb29c4800a7bc78c96de03a52);


                Storyboard_79520bd30ef54913a4a23ab70ad63c9d.Children.add(ObjectAnimationUsingKeyFrames_2c67fbd1dc02442188c58b8a854865d6);


                VisualState_6c2cf9c475bc4c649a6eed0f6ee67c1a.Storyboard = Storyboard_79520bd30ef54913a4a23ab70ad63c9d;


                var VisualState_7e4a80529add482f9a34225dc5166538 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_7e4a80529add482f9a34225dc5166538);
                VisualState_7e4a80529add482f9a34225dc5166538.Name = "Pressed";
                var Storyboard_8894c65947aa471780284f826f94375b = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_a672d682fc8e476781f1c885b3cc6233 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_a672d682fc8e476781f1c885b3cc6233, "InnerBorder");
                var DiscreteObjectKeyFrame_eac713ddde36476ca14679ba3873caa1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_eac713ddde36476ca14679ba3873caa1.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_eac713ddde36476ca14679ba3873caa1.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_a672d682fc8e476781f1c885b3cc6233.KeyFrames.add(DiscreteObjectKeyFrame_eac713ddde36476ca14679ba3873caa1);


                Storyboard_8894c65947aa471780284f826f94375b.Children.add(ObjectAnimationUsingKeyFrames_a672d682fc8e476781f1c885b3cc6233);


                VisualState_7e4a80529add482f9a34225dc5166538.Storyboard = Storyboard_8894c65947aa471780284f826f94375b;


                var VisualState_7ec9ad50bb024ba39cc140cc416354f2 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_7ec9ad50bb024ba39cc140cc416354f2);
                VisualState_7ec9ad50bb024ba39cc140cc416354f2.Name = "Disabled";
                var Storyboard_cc16c6e64a124bbfa665149097917951 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_c80f4513a0bc457d8651b8a6edb28cfb = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_c80f4513a0bc457d8651b8a6edb28cfb, "InnerBorder");
                var DiscreteObjectKeyFrame_9e590cde668f43408fd769d4426462b6 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_9e590cde668f43408fd769d4426462b6.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_9e590cde668f43408fd769d4426462b6.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_c80f4513a0bc457d8651b8a6edb28cfb.KeyFrames.add(DiscreteObjectKeyFrame_9e590cde668f43408fd769d4426462b6);


                Storyboard_cc16c6e64a124bbfa665149097917951.Children.add(ObjectAnimationUsingKeyFrames_c80f4513a0bc457d8651b8a6edb28cfb);


                VisualState_7ec9ad50bb024ba39cc140cc416354f2.Storyboard = Storyboard_cc16c6e64a124bbfa665149097917951;


                System.Array.add(VisualStateGroup_ddd78d41849b44d3928249a39b958278.States, VisualState_541fff5fca1843eb9d04b458d2278e89, Object);
                System.Array.add(VisualStateGroup_ddd78d41849b44d3928249a39b958278.States, VisualState_6c2cf9c475bc4c649a6eed0f6ee67c1a, Object);
                System.Array.add(VisualStateGroup_ddd78d41849b44d3928249a39b958278.States, VisualState_7e4a80529add482f9a34225dc5166538, Object);
                System.Array.add(VisualStateGroup_ddd78d41849b44d3928249a39b958278.States, VisualState_7ec9ad50bb024ba39cc140cc416354f2, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_ddd78d41849b44d3928249a39b958278);

                var Border_9a276e53fbc1419cb4fd0235e0833209 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_9a276e53fbc1419cb4fd0235e0833209);
                Border_9a276e53fbc1419cb4fd0235e0833209.Name = "InnerBorder";
                Border_9a276e53fbc1419cb4fd0235e0833209.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_9dd1d4b4ba5e463ea8432a855c3bc353 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_9dd1d4b4ba5e463ea8432a855c3bc353);
                ContentPresenter_9dd1d4b4ba5e463ea8432a855c3bc353.Name = "ContentPresenter";
                var Binding_c5cf67d71a4c4aa4861a6a01e4d964c3 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c5cf67d71a4c4aa4861a6a01e4d964c3.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_b17cba7dce9244808bb1739da8d8db86 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_b17cba7dce9244808bb1739da8d8db86.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c5cf67d71a4c4aa4861a6a01e4d964c3.RelativeSource = RelativeSource_b17cba7dce9244808bb1739da8d8db86;


                Binding_c5cf67d71a4c4aa4861a6a01e4d964c3.TemplateOwner = templateInstance_a3668913fbd44677962feb2778a29ba8;

                var Binding_21968fc6ae934c86908df536b1366427 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_21968fc6ae934c86908df536b1366427.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_9234f470dd274a2a918f48ac9636dec9 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9234f470dd274a2a918f48ac9636dec9.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_21968fc6ae934c86908df536b1366427.RelativeSource = RelativeSource_9234f470dd274a2a918f48ac9636dec9;


                Binding_21968fc6ae934c86908df536b1366427.TemplateOwner = templateInstance_a3668913fbd44677962feb2778a29ba8;

                var Binding_60b323adf8494257bad5179f84f77cb3 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_60b323adf8494257bad5179f84f77cb3.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_dbb3da3987b646babb8df99f02da9a2e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_dbb3da3987b646babb8df99f02da9a2e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_60b323adf8494257bad5179f84f77cb3.RelativeSource = RelativeSource_dbb3da3987b646babb8df99f02da9a2e;


                Binding_60b323adf8494257bad5179f84f77cb3.TemplateOwner = templateInstance_a3668913fbd44677962feb2778a29ba8;

                var Binding_9b58b621d53d46d8b488ab9238c4394a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_9b58b621d53d46d8b488ab9238c4394a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_ca380bbfbad345b3b50aa5580782388e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ca380bbfbad345b3b50aa5580782388e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_9b58b621d53d46d8b488ab9238c4394a.RelativeSource = RelativeSource_ca380bbfbad345b3b50aa5580782388e;


                Binding_9b58b621d53d46d8b488ab9238c4394a.TemplateOwner = templateInstance_a3668913fbd44677962feb2778a29ba8;

                var Binding_6935bfebddc84abbb424c92a2168834b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_6935bfebddc84abbb424c92a2168834b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_ebfe654d13344306a4bab610aabee4dd = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ebfe654d13344306a4bab610aabee4dd.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_6935bfebddc84abbb424c92a2168834b.RelativeSource = RelativeSource_ebfe654d13344306a4bab610aabee4dd;


                Binding_6935bfebddc84abbb424c92a2168834b.TemplateOwner = templateInstance_a3668913fbd44677962feb2778a29ba8;


                Border_9a276e53fbc1419cb4fd0235e0833209.Child = ContentPresenter_9dd1d4b4ba5e463ea8432a855c3bc353;

                var Binding_38d4c6b3b75f4162a6aa20830bad0d78 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_38d4c6b3b75f4162a6aa20830bad0d78.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_1797c69b600740dfbe6533aeec7504d6 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_1797c69b600740dfbe6533aeec7504d6.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_38d4c6b3b75f4162a6aa20830bad0d78.RelativeSource = RelativeSource_1797c69b600740dfbe6533aeec7504d6;


                Binding_38d4c6b3b75f4162a6aa20830bad0d78.TemplateOwner = templateInstance_a3668913fbd44677962feb2778a29ba8;


                Border_6f04bad9fe69471abbe4d7b4d768e044.Child = Border_9a276e53fbc1419cb4fd0235e0833209;

                var Binding_b42c31453f044899991459b06bd1c409 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_b42c31453f044899991459b06bd1c409.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_2421385f935f4ed6b3ee5cc9e6f91bc9 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_2421385f935f4ed6b3ee5cc9e6f91bc9.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_b42c31453f044899991459b06bd1c409.RelativeSource = RelativeSource_2421385f935f4ed6b3ee5cc9e6f91bc9;


                Binding_b42c31453f044899991459b06bd1c409.TemplateOwner = templateInstance_a3668913fbd44677962feb2778a29ba8;

                var Binding_52ac6b4bd0b3405ca15105261a735af6 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_52ac6b4bd0b3405ca15105261a735af6.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_d54e06a7a3ca41849eaa17db318e1a69 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d54e06a7a3ca41849eaa17db318e1a69.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_52ac6b4bd0b3405ca15105261a735af6.RelativeSource = RelativeSource_d54e06a7a3ca41849eaa17db318e1a69;


                Binding_52ac6b4bd0b3405ca15105261a735af6.TemplateOwner = templateInstance_a3668913fbd44677962feb2778a29ba8;

                var Binding_d6b830db291f44d1a10c83d4095783b7 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d6b830db291f44d1a10c83d4095783b7.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_3394ef1e80fe441cbecf5ee1f682359a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3394ef1e80fe441cbecf5ee1f682359a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d6b830db291f44d1a10c83d4095783b7.RelativeSource = RelativeSource_3394ef1e80fe441cbecf5ee1f682359a;


                Binding_d6b830db291f44d1a10c83d4095783b7.TemplateOwner = templateInstance_a3668913fbd44677962feb2778a29ba8;



                ContentPresenter_9dd1d4b4ba5e463ea8432a855c3bc353.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_c5cf67d71a4c4aa4861a6a01e4d964c3);
                ContentPresenter_9dd1d4b4ba5e463ea8432a855c3bc353.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_21968fc6ae934c86908df536b1366427);
                ContentPresenter_9dd1d4b4ba5e463ea8432a855c3bc353.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_60b323adf8494257bad5179f84f77cb3);
                ContentPresenter_9dd1d4b4ba5e463ea8432a855c3bc353.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_9b58b621d53d46d8b488ab9238c4394a);
                ContentPresenter_9dd1d4b4ba5e463ea8432a855c3bc353.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_6935bfebddc84abbb424c92a2168834b);
                Border_9a276e53fbc1419cb4fd0235e0833209.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_38d4c6b3b75f4162a6aa20830bad0d78);
                Border_6f04bad9fe69471abbe4d7b4d768e044.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_b42c31453f044899991459b06bd1c409);
                Border_6f04bad9fe69471abbe4d7b4d768e044.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_52ac6b4bd0b3405ca15105261a735af6);
                Border_6f04bad9fe69471abbe4d7b4d768e044.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_d6b830db291f44d1a10c83d4095783b7);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_2c67fbd1dc02442188c58b8a854865d6, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_572f68503ba94dfd896e2203a1c720a4), Bridge.fn.cacheBind(this, this.setVisualStateProperty_572f68503ba94dfd896e2203a1c720a4), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_572f68503ba94dfd896e2203a1c720a4), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_572f68503ba94dfd896e2203a1c720a4), Bridge.fn.cacheBind(this, this.getVisualStateProperty_572f68503ba94dfd896e2203a1c720a4)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_2c67fbd1dc02442188c58b8a854865d6, Border_9a276e53fbc1419cb4fd0235e0833209);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_a672d682fc8e476781f1c885b3cc6233, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3), Bridge.fn.cacheBind(this, this.setVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3), Bridge.fn.cacheBind(this, this.getVisualStateProperty_6b4c31d5d72e448fb1528c376ee5f4c3)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_a672d682fc8e476781f1c885b3cc6233, Border_9a276e53fbc1419cb4fd0235e0833209);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_c80f4513a0bc457d8651b8a6edb28cfb, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_14cfff3629f242efa467c37c93627951), Bridge.fn.cacheBind(this, this.setVisualStateProperty_14cfff3629f242efa467c37c93627951), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_14cfff3629f242efa467c37c93627951), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_14cfff3629f242efa467c37c93627951), Bridge.fn.cacheBind(this, this.getVisualStateProperty_14cfff3629f242efa467c37c93627951)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_c80f4513a0bc457d8651b8a6edb28cfb, Border_9a276e53fbc1419cb4fd0235e0833209);

                templateInstance_a3668913fbd44677962feb2778a29ba8.TemplateContent = Border_6f04bad9fe69471abbe4d7b4d768e044;
                return templateInstance_a3668913fbd44677962feb2778a29ba8;
            },
            accessVisualStateProperty_e85501f40cff418e9dfc8aa541b237de: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_e85501f40cff418e9dfc8aa541b237de: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_e85501f40cff418e9dfc8aa541b237de: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_e85501f40cff418e9dfc8aa541b237de: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_e85501f40cff418e9dfc8aa541b237de: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_4d5a932ae274459ba227b0edee5935b5: function (templateOwner) {
                var templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5.TemplateOwner = templateOwner;
                var Border_70f7b52c887b41648007c539352585e1 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_70f7b52c887b41648007c539352585e1);
                Border_70f7b52c887b41648007c539352585e1.Name = "OuterBorder";
                Border_70f7b52c887b41648007c539352585e1.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_938503d53fe04a14a436eb0f94a8e9bc = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_938503d53fe04a14a436eb0f94a8e9bc);
                VisualStateGroup_938503d53fe04a14a436eb0f94a8e9bc.Name = "CommonStates";
                var VisualState_7569cc03af9741fb99c4ff91a4e94d60 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_7569cc03af9741fb99c4ff91a4e94d60);
                VisualState_7569cc03af9741fb99c4ff91a4e94d60.Name = "Normal";

                var VisualState_7dbad554781f45f8ac95b8dcf572f399 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_7dbad554781f45f8ac95b8dcf572f399);
                VisualState_7dbad554781f45f8ac95b8dcf572f399.Name = "PointerOver";
                var Storyboard_f4c7f6500c5f43989cfe3ba7a1ce6504 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_920921fd5fa4418d88a16c88cd38a61a = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_920921fd5fa4418d88a16c88cd38a61a, "InnerBorder");
                var DiscreteObjectKeyFrame_868d10954f3d471d99154ea7f49805ae = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_868d10954f3d471d99154ea7f49805ae.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_868d10954f3d471d99154ea7f49805ae.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_920921fd5fa4418d88a16c88cd38a61a.KeyFrames.add(DiscreteObjectKeyFrame_868d10954f3d471d99154ea7f49805ae);


                Storyboard_f4c7f6500c5f43989cfe3ba7a1ce6504.Children.add(ObjectAnimationUsingKeyFrames_920921fd5fa4418d88a16c88cd38a61a);


                VisualState_7dbad554781f45f8ac95b8dcf572f399.Storyboard = Storyboard_f4c7f6500c5f43989cfe3ba7a1ce6504;


                var VisualState_dcf1b27987b04857bcd1fd23e706ee22 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_dcf1b27987b04857bcd1fd23e706ee22);
                VisualState_dcf1b27987b04857bcd1fd23e706ee22.Name = "Pressed";
                var Storyboard_64c9f562074a41e2b7a2b10e5a63b23b = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_15fba79efb164af9830b3b2e5473369d = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_15fba79efb164af9830b3b2e5473369d, "InnerBorder");
                var DiscreteObjectKeyFrame_7b63cc67ff93442dbc5de6ffccca3384 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_7b63cc67ff93442dbc5de6ffccca3384.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_7b63cc67ff93442dbc5de6ffccca3384.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_15fba79efb164af9830b3b2e5473369d.KeyFrames.add(DiscreteObjectKeyFrame_7b63cc67ff93442dbc5de6ffccca3384);


                Storyboard_64c9f562074a41e2b7a2b10e5a63b23b.Children.add(ObjectAnimationUsingKeyFrames_15fba79efb164af9830b3b2e5473369d);


                VisualState_dcf1b27987b04857bcd1fd23e706ee22.Storyboard = Storyboard_64c9f562074a41e2b7a2b10e5a63b23b;


                var VisualState_46dcc3a4a46d4dc99b2771cf0d1b5d5b = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_46dcc3a4a46d4dc99b2771cf0d1b5d5b);
                VisualState_46dcc3a4a46d4dc99b2771cf0d1b5d5b.Name = "Disabled";
                var Storyboard_4da4e33cc9c34d11905e8b3100648e62 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_73bde40fab824189b4fe2cffa3434cc4 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_73bde40fab824189b4fe2cffa3434cc4, "InnerBorder");
                var DiscreteObjectKeyFrame_d4161b3e396d494fa8a2e0660f067e04 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_d4161b3e396d494fa8a2e0660f067e04.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_d4161b3e396d494fa8a2e0660f067e04.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_73bde40fab824189b4fe2cffa3434cc4.KeyFrames.add(DiscreteObjectKeyFrame_d4161b3e396d494fa8a2e0660f067e04);


                Storyboard_4da4e33cc9c34d11905e8b3100648e62.Children.add(ObjectAnimationUsingKeyFrames_73bde40fab824189b4fe2cffa3434cc4);


                VisualState_46dcc3a4a46d4dc99b2771cf0d1b5d5b.Storyboard = Storyboard_4da4e33cc9c34d11905e8b3100648e62;


                System.Array.add(VisualStateGroup_938503d53fe04a14a436eb0f94a8e9bc.States, VisualState_7569cc03af9741fb99c4ff91a4e94d60, Object);
                System.Array.add(VisualStateGroup_938503d53fe04a14a436eb0f94a8e9bc.States, VisualState_7dbad554781f45f8ac95b8dcf572f399, Object);
                System.Array.add(VisualStateGroup_938503d53fe04a14a436eb0f94a8e9bc.States, VisualState_dcf1b27987b04857bcd1fd23e706ee22, Object);
                System.Array.add(VisualStateGroup_938503d53fe04a14a436eb0f94a8e9bc.States, VisualState_46dcc3a4a46d4dc99b2771cf0d1b5d5b, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_938503d53fe04a14a436eb0f94a8e9bc);

                var Border_fcd8e071a1fc4c9d9c8b2016d2158770 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_fcd8e071a1fc4c9d9c8b2016d2158770);
                Border_fcd8e071a1fc4c9d9c8b2016d2158770.Name = "InnerBorder";
                Border_fcd8e071a1fc4c9d9c8b2016d2158770.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_0229889858cb4f6d905785112493978b = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_0229889858cb4f6d905785112493978b);
                ContentPresenter_0229889858cb4f6d905785112493978b.Name = "ContentPresenter";
                var Binding_99aef0bc6f554cf2a9db3c15fbe2eaba = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_99aef0bc6f554cf2a9db3c15fbe2eaba.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_dc2c4cb3b263405ebcbd0a92487eb31c = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_dc2c4cb3b263405ebcbd0a92487eb31c.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_99aef0bc6f554cf2a9db3c15fbe2eaba.RelativeSource = RelativeSource_dc2c4cb3b263405ebcbd0a92487eb31c;


                Binding_99aef0bc6f554cf2a9db3c15fbe2eaba.TemplateOwner = templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;

                var Binding_ab701a6056794b04bebf263d4a4ea811 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ab701a6056794b04bebf263d4a4ea811.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_11987dc5f121475ba29815e872061fd0 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_11987dc5f121475ba29815e872061fd0.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ab701a6056794b04bebf263d4a4ea811.RelativeSource = RelativeSource_11987dc5f121475ba29815e872061fd0;


                Binding_ab701a6056794b04bebf263d4a4ea811.TemplateOwner = templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;

                var Binding_ed68dbfaad2d4cc894b52c2452fef293 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ed68dbfaad2d4cc894b52c2452fef293.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_2bcd2f06d4954c3c97826a197e85a89f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_2bcd2f06d4954c3c97826a197e85a89f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ed68dbfaad2d4cc894b52c2452fef293.RelativeSource = RelativeSource_2bcd2f06d4954c3c97826a197e85a89f;


                Binding_ed68dbfaad2d4cc894b52c2452fef293.TemplateOwner = templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;

                var Binding_fa44a655a5d2439db2f9548b27fa832f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fa44a655a5d2439db2f9548b27fa832f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_8684010759394da8a37f3ca92e869959 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8684010759394da8a37f3ca92e869959.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fa44a655a5d2439db2f9548b27fa832f.RelativeSource = RelativeSource_8684010759394da8a37f3ca92e869959;


                Binding_fa44a655a5d2439db2f9548b27fa832f.TemplateOwner = templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;

                var Binding_d0797f2a8ff146c78d1dbdd15e74c661 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d0797f2a8ff146c78d1dbdd15e74c661.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_d1f4a4f3ef8c4dbf936605f3a1d60c28 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d1f4a4f3ef8c4dbf936605f3a1d60c28.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d0797f2a8ff146c78d1dbdd15e74c661.RelativeSource = RelativeSource_d1f4a4f3ef8c4dbf936605f3a1d60c28;


                Binding_d0797f2a8ff146c78d1dbdd15e74c661.TemplateOwner = templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;


                Border_fcd8e071a1fc4c9d9c8b2016d2158770.Child = ContentPresenter_0229889858cb4f6d905785112493978b;

                var Binding_b7bccf1944b84931bcfd2e8b4a290f58 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_b7bccf1944b84931bcfd2e8b4a290f58.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_eaeedc0792fe4ec8b9a31169e95a95bc = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_eaeedc0792fe4ec8b9a31169e95a95bc.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_b7bccf1944b84931bcfd2e8b4a290f58.RelativeSource = RelativeSource_eaeedc0792fe4ec8b9a31169e95a95bc;


                Binding_b7bccf1944b84931bcfd2e8b4a290f58.TemplateOwner = templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;


                Border_70f7b52c887b41648007c539352585e1.Child = Border_fcd8e071a1fc4c9d9c8b2016d2158770;

                var Binding_ffc8b84acd06452199f2b53daadf867f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ffc8b84acd06452199f2b53daadf867f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_8af5d408358140f4ba8b6f853926b3c8 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8af5d408358140f4ba8b6f853926b3c8.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ffc8b84acd06452199f2b53daadf867f.RelativeSource = RelativeSource_8af5d408358140f4ba8b6f853926b3c8;


                Binding_ffc8b84acd06452199f2b53daadf867f.TemplateOwner = templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;

                var Binding_10519520d0864bffa4ee9bb531ef41ec = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_10519520d0864bffa4ee9bb531ef41ec.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_f9858a0ae0a444e09c4efc81b6ccfc99 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f9858a0ae0a444e09c4efc81b6ccfc99.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_10519520d0864bffa4ee9bb531ef41ec.RelativeSource = RelativeSource_f9858a0ae0a444e09c4efc81b6ccfc99;


                Binding_10519520d0864bffa4ee9bb531ef41ec.TemplateOwner = templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;

                var Binding_ece4f209bb3b4af28c17cc83ad07d1a6 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ece4f209bb3b4af28c17cc83ad07d1a6.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_79083f7cf3b840da8072c79f0061a4b1 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_79083f7cf3b840da8072c79f0061a4b1.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ece4f209bb3b4af28c17cc83ad07d1a6.RelativeSource = RelativeSource_79083f7cf3b840da8072c79f0061a4b1;


                Binding_ece4f209bb3b4af28c17cc83ad07d1a6.TemplateOwner = templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;



                ContentPresenter_0229889858cb4f6d905785112493978b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_99aef0bc6f554cf2a9db3c15fbe2eaba);
                ContentPresenter_0229889858cb4f6d905785112493978b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_ab701a6056794b04bebf263d4a4ea811);
                ContentPresenter_0229889858cb4f6d905785112493978b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_ed68dbfaad2d4cc894b52c2452fef293);
                ContentPresenter_0229889858cb4f6d905785112493978b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_fa44a655a5d2439db2f9548b27fa832f);
                ContentPresenter_0229889858cb4f6d905785112493978b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_d0797f2a8ff146c78d1dbdd15e74c661);
                Border_fcd8e071a1fc4c9d9c8b2016d2158770.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_b7bccf1944b84931bcfd2e8b4a290f58);
                Border_70f7b52c887b41648007c539352585e1.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_ffc8b84acd06452199f2b53daadf867f);
                Border_70f7b52c887b41648007c539352585e1.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_10519520d0864bffa4ee9bb531ef41ec);
                Border_70f7b52c887b41648007c539352585e1.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_ece4f209bb3b4af28c17cc83ad07d1a6);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_920921fd5fa4418d88a16c88cd38a61a, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_e85501f40cff418e9dfc8aa541b237de), Bridge.fn.cacheBind(this, this.setVisualStateProperty_e85501f40cff418e9dfc8aa541b237de), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_e85501f40cff418e9dfc8aa541b237de), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_e85501f40cff418e9dfc8aa541b237de), Bridge.fn.cacheBind(this, this.getVisualStateProperty_e85501f40cff418e9dfc8aa541b237de)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_920921fd5fa4418d88a16c88cd38a61a, Border_fcd8e071a1fc4c9d9c8b2016d2158770);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_15fba79efb164af9830b3b2e5473369d, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce), Bridge.fn.cacheBind(this, this.setVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce), Bridge.fn.cacheBind(this, this.getVisualStateProperty_7193df1d9c3b45a8bb59a9edf7cb33ce)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_15fba79efb164af9830b3b2e5473369d, Border_fcd8e071a1fc4c9d9c8b2016d2158770);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_73bde40fab824189b4fe2cffa3434cc4, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8), Bridge.fn.cacheBind(this, this.setVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8), Bridge.fn.cacheBind(this, this.getVisualStateProperty_98ec53dbc4ed4a3ead3cd12748f8f4d8)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_73bde40fab824189b4fe2cffa3434cc4, Border_fcd8e071a1fc4c9d9c8b2016d2158770);

                templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5.TemplateContent = Border_70f7b52c887b41648007c539352585e1;
                return templateInstance_4d5ee77dd23e46b6a9e6243207a52ce5;
            }
        }
    });

    Bridge.define("CShtml.PageHome", {
        inherits: [Windows.UI.Xaml.Controls.Page],
        fields: {
            element: null,
            btnBegin: null,
            LayoutRoot: null,
            _contentLoaded: false
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Windows.UI.Xaml.Controls.Page.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            Button_Click: function (sender, e) {
                var frame = new Windows.UI.Xaml.Controls.Frame();
                frame.Navigate(new System.Uri("Page1.xaml", System.UriKind.Relative));
                Windows.UI.Xaml.Window.Current.Content = frame;
            },
            InitializeComponent: function () {
                var $t;
                if (this._contentLoaded) {
                    return;
                }
                this._contentLoaded = true;


                if (Bridge.is(this, Windows.UI.Xaml.UIElement)) {
                    Bridge.cast(this, Windows.UI.Xaml.UIElement).XamlSourcePath = "CShtml\\PageHome.xaml";
                }



                var Grid_c150d0e7f79742588d14ee43adac16b5 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutRoot", Grid_c150d0e7f79742588d14ee43adac16b5);
                Grid_c150d0e7f79742588d14ee43adac16b5.Name = "LayoutRoot";
                Grid_c150d0e7f79742588d14ee43adac16b5.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                var Grid_7ae9a2d0fd4e4ba5b2792f450cc6a6e2 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_5c899830b5a94dca980e8e11b5f2b31e = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_5c899830b5a94dca980e8e11b5f2b31e.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_5c899830b5a94dca980e8e11b5f2b31e.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_24a36a9313f940c2aaba2c13a7b966a5 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_24a36a9313f940c2aaba2c13a7b966a5.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_24a36a9313f940c2aaba2c13a7b966a5.Offset = 0.0;

                var GradientStop_c76172164b42499dbb094d2203143775 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_c76172164b42499dbb094d2203143775.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_c76172164b42499dbb094d2203143775.Offset = 1.0;

                LinearGradientBrush_5c899830b5a94dca980e8e11b5f2b31e.GradientStops.add(GradientStop_24a36a9313f940c2aaba2c13a7b966a5);
                LinearGradientBrush_5c899830b5a94dca980e8e11b5f2b31e.GradientStops.add(GradientStop_c76172164b42499dbb094d2203143775);


                Grid_7ae9a2d0fd4e4ba5b2792f450cc6a6e2.Background = LinearGradientBrush_5c899830b5a94dca980e8e11b5f2b31e;

                var Border_b3e894953f0e4c45a6b3f75345761b91 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_b3e894953f0e4c45a6b3f75345761b91);
                Border_b3e894953f0e4c45a6b3f75345761b91.Name = "element";
                Border_b3e894953f0e4c45a6b3f75345761b91.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Border_b3e894953f0e4c45a6b3f75345761b91.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 139, $t));
                Border_b3e894953f0e4c45a6b3f75345761b91.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_b3e894953f0e4c45a6b3f75345761b91.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_9bd8f7426e3d48a8847af9b0e8ea5314 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_9bd8f7426e3d48a8847af9b0e8ea5314.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_9bd8f7426e3d48a8847af9b0e8ea5314.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_4533fdf10442400d9e87ec19d59b75d7 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_4533fdf10442400d9e87ec19d59b75d7.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_4533fdf10442400d9e87ec19d59b75d7.Offset = 0.0;

                var GradientStop_9f0ac64a575e4cb6a8fa252e0905de73 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_9f0ac64a575e4cb6a8fa252e0905de73.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_9f0ac64a575e4cb6a8fa252e0905de73.Offset = 0.5896;

                var GradientStop_be08547c86de443592ae232b6ff915c6 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_be08547c86de443592ae232b6ff915c6.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 246, $t.G = 246, $t.B = 246, $t);
                GradientStop_be08547c86de443592ae232b6ff915c6.Offset = 1.0;

                LinearGradientBrush_9bd8f7426e3d48a8847af9b0e8ea5314.GradientStops.add(GradientStop_4533fdf10442400d9e87ec19d59b75d7);
                LinearGradientBrush_9bd8f7426e3d48a8847af9b0e8ea5314.GradientStops.add(GradientStop_9f0ac64a575e4cb6a8fa252e0905de73);
                LinearGradientBrush_9bd8f7426e3d48a8847af9b0e8ea5314.GradientStops.add(GradientStop_be08547c86de443592ae232b6ff915c6);


                Border_b3e894953f0e4c45a6b3f75345761b91.Background = LinearGradientBrush_9bd8f7426e3d48a8847af9b0e8ea5314;

                var TransformGroup_63a812f3fb6f4ce3856660a66cf4d4cb = new Bridge.global.Windows.UI.Xaml.Media.TransformGroup();
                var ScaleTransform_52ac0f81d1854876b2772a933dda8645 = new Bridge.global.Windows.UI.Xaml.Media.ScaleTransform();

                var RotateTransform_806e95419d9243ea9c4c76e7b389ff45 = new Bridge.global.Windows.UI.Xaml.Media.RotateTransform();

                TransformGroup_63a812f3fb6f4ce3856660a66cf4d4cb.Children.add(ScaleTransform_52ac0f81d1854876b2772a933dda8645);
                TransformGroup_63a812f3fb6f4ce3856660a66cf4d4cb.Children.add(RotateTransform_806e95419d9243ea9c4c76e7b389ff45);


                Border_b3e894953f0e4c45a6b3f75345761b91.RenderTransform = TransformGroup_63a812f3fb6f4ce3856660a66cf4d4cb;

                var Grid_da233e170e4f4900b741406d9887d6a2 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var ColumnDefinition_9d159c9b84fb41599fd84bb791eba100 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_19c8f15dfe6242e49f573ffd1615116b = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_090a70d4bdd34beb9c80c93c013b2c7e = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_da233e170e4f4900b741406d9887d6a2.ColumnDefinitions.add(ColumnDefinition_9d159c9b84fb41599fd84bb791eba100);
                Grid_da233e170e4f4900b741406d9887d6a2.ColumnDefinitions.add(ColumnDefinition_19c8f15dfe6242e49f573ffd1615116b);
                Grid_da233e170e4f4900b741406d9887d6a2.ColumnDefinitions.add(ColumnDefinition_090a70d4bdd34beb9c80c93c013b2c7e);

                var RowDefinition_bf5ebe64e1a843be9b691f20a822f963 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_bf5ebe64e1a843be9b691f20a822f963.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_1854be2d98074795b7ec0d82acefda73 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_1854be2d98074795b7ec0d82acefda73.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_3015b57fefb64793890ca2495c63eb22 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_3015b57fefb64793890ca2495c63eb22.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_da233e170e4f4900b741406d9887d6a2.RowDefinitions.add(RowDefinition_bf5ebe64e1a843be9b691f20a822f963);
                Grid_da233e170e4f4900b741406d9887d6a2.RowDefinitions.add(RowDefinition_1854be2d98074795b7ec0d82acefda73);
                Grid_da233e170e4f4900b741406d9887d6a2.RowDefinitions.add(RowDefinition_3015b57fefb64793890ca2495c63eb22);

                var Image_c529dc7fa73346f69b5def6b1abbd2e4 = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                Image_c529dc7fa73346f69b5def6b1abbd2e4.Source = Bridge.cast(Bridge.global.DotNetForHtml5.Core.TypeFromStringConverters.ConvertFromInvariantString(Bridge.global.Windows.UI.Xaml.Media.ImageSource, "/CShtml;component/img/HomeImage.jpg"), Windows.UI.Xaml.Media.ImageSource);
                Image_c529dc7fa73346f69b5def6b1abbd2e4.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Uniform;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Image_c529dc7fa73346f69b5def6b1abbd2e4, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Image_c529dc7fa73346f69b5def6b1abbd2e4, 3);

                Grid_da233e170e4f4900b741406d9887d6a2.Children.add(Image_c529dc7fa73346f69b5def6b1abbd2e4);


                Border_b3e894953f0e4c45a6b3f75345761b91.Child = Grid_da233e170e4f4900b741406d9887d6a2;


                var Button_a95fad4bdcc04ead9c0d507b0bdc7313 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnBegin", Button_a95fad4bdcc04ead9c0d507b0bdc7313);
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.Name = "btnBegin";
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.Content = "\u041d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443";
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.FontSize = 25.0;
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.Width = 280.0;
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_a95fad4bdcc04ead9c0d507b0bdc7313, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_a95fad4bdcc04ead9c0d507b0bdc7313, 1);
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(0, 0, 0, 50);
                Button_a95fad4bdcc04ead9c0d507b0bdc7313.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                var ControlTemplate_15527ffba5e0425cb5008c947c355188 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_15527ffba5e0425cb5008c947c355188.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_15527ffba5e0425cb5008c947c355188.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_15527ffba5e0425cb5008c947c355188));

                Button_a95fad4bdcc04ead9c0d507b0bdc7313.Template = ControlTemplate_15527ffba5e0425cb5008c947c355188;


                Grid_7ae9a2d0fd4e4ba5b2792f450cc6a6e2.Children.add(Border_b3e894953f0e4c45a6b3f75345761b91);
                Grid_7ae9a2d0fd4e4ba5b2792f450cc6a6e2.Children.add(Button_a95fad4bdcc04ead9c0d507b0bdc7313);


                Grid_c150d0e7f79742588d14ee43adac16b5.Children.add(Grid_7ae9a2d0fd4e4ba5b2792f450cc6a6e2);


                this.Content = Grid_c150d0e7f79742588d14ee43adac16b5;



                this.element = Border_b3e894953f0e4c45a6b3f75345761b91;
                this.btnBegin = Button_a95fad4bdcc04ead9c0d507b0bdc7313;
                this.LayoutRoot = Grid_c150d0e7f79742588d14ee43adac16b5;



            },
            accessVisualStateProperty_fb9f960249444872816c420c2a6497ac: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_fb9f960249444872816c420c2a6497ac: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_fb9f960249444872816c420c2a6497ac: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_fb9f960249444872816c420c2a6497ac: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_fb9f960249444872816c420c2a6497ac: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_87eab4f132124dca97495f26df447dbf: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_87eab4f132124dca97495f26df447dbf: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_87eab4f132124dca97495f26df447dbf: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_87eab4f132124dca97495f26df447dbf: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_87eab4f132124dca97495f26df447dbf: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_15527ffba5e0425cb5008c947c355188: function (templateOwner) {
                var templateInstance_1ad9e5b1ac664433a750da7b255ec518 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_1ad9e5b1ac664433a750da7b255ec518.TemplateOwner = templateOwner;
                var Border_29b2d71f72564bab90c3e48932bb0096 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_29b2d71f72564bab90c3e48932bb0096);
                Border_29b2d71f72564bab90c3e48932bb0096.Name = "OuterBorder";
                Border_29b2d71f72564bab90c3e48932bb0096.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_6ba13355181c4327b05d51889ba7fe07 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_6ba13355181c4327b05d51889ba7fe07);
                VisualStateGroup_6ba13355181c4327b05d51889ba7fe07.Name = "CommonStates";
                var VisualState_0053255b7d40443089ebbbfcb2d59cfd = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_0053255b7d40443089ebbbfcb2d59cfd);
                VisualState_0053255b7d40443089ebbbfcb2d59cfd.Name = "Normal";

                var VisualState_f6aac1a2c8c241a892f28178402a3127 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_f6aac1a2c8c241a892f28178402a3127);
                VisualState_f6aac1a2c8c241a892f28178402a3127.Name = "PointerOver";
                var Storyboard_0ffd339136964d1fb572a6d5d9d308be = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_c30568c93b3940698f26949da80d462f = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_c30568c93b3940698f26949da80d462f, "InnerBorder");
                var DiscreteObjectKeyFrame_5d5c2fa15fc540c19b549b01cc813ffa = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_5d5c2fa15fc540c19b549b01cc813ffa.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_5d5c2fa15fc540c19b549b01cc813ffa.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_c30568c93b3940698f26949da80d462f.KeyFrames.add(DiscreteObjectKeyFrame_5d5c2fa15fc540c19b549b01cc813ffa);


                Storyboard_0ffd339136964d1fb572a6d5d9d308be.Children.add(ObjectAnimationUsingKeyFrames_c30568c93b3940698f26949da80d462f);


                VisualState_f6aac1a2c8c241a892f28178402a3127.Storyboard = Storyboard_0ffd339136964d1fb572a6d5d9d308be;


                var VisualState_0dc5902565c04e60bc20e5c2aeb02251 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_0dc5902565c04e60bc20e5c2aeb02251);
                VisualState_0dc5902565c04e60bc20e5c2aeb02251.Name = "Pressed";
                var Storyboard_e042e2ca79fc4f82b0c4349bcc221941 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_d1d2688a572b4cbcb148da515dd89c65 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_d1d2688a572b4cbcb148da515dd89c65, "InnerBorder");
                var DiscreteObjectKeyFrame_1043689cd89c40749871c3d1500e0d7f = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_1043689cd89c40749871c3d1500e0d7f.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_1043689cd89c40749871c3d1500e0d7f.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_d1d2688a572b4cbcb148da515dd89c65.KeyFrames.add(DiscreteObjectKeyFrame_1043689cd89c40749871c3d1500e0d7f);


                Storyboard_e042e2ca79fc4f82b0c4349bcc221941.Children.add(ObjectAnimationUsingKeyFrames_d1d2688a572b4cbcb148da515dd89c65);


                VisualState_0dc5902565c04e60bc20e5c2aeb02251.Storyboard = Storyboard_e042e2ca79fc4f82b0c4349bcc221941;


                var VisualState_3fdcc3eef0724690bc315ebffdfd215f = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_3fdcc3eef0724690bc315ebffdfd215f);
                VisualState_3fdcc3eef0724690bc315ebffdfd215f.Name = "Disabled";
                var Storyboard_97400d1cbbc444e8be12db73e95f7001 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_9c6c5e5c290d43219a1ddaf01a098e0b = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_9c6c5e5c290d43219a1ddaf01a098e0b, "InnerBorder");
                var DiscreteObjectKeyFrame_2e30e5424e4446fc9bcd9e355b35c43e = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_2e30e5424e4446fc9bcd9e355b35c43e.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_2e30e5424e4446fc9bcd9e355b35c43e.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_9c6c5e5c290d43219a1ddaf01a098e0b.KeyFrames.add(DiscreteObjectKeyFrame_2e30e5424e4446fc9bcd9e355b35c43e);


                Storyboard_97400d1cbbc444e8be12db73e95f7001.Children.add(ObjectAnimationUsingKeyFrames_9c6c5e5c290d43219a1ddaf01a098e0b);


                VisualState_3fdcc3eef0724690bc315ebffdfd215f.Storyboard = Storyboard_97400d1cbbc444e8be12db73e95f7001;


                System.Array.add(VisualStateGroup_6ba13355181c4327b05d51889ba7fe07.States, VisualState_0053255b7d40443089ebbbfcb2d59cfd, Object);
                System.Array.add(VisualStateGroup_6ba13355181c4327b05d51889ba7fe07.States, VisualState_f6aac1a2c8c241a892f28178402a3127, Object);
                System.Array.add(VisualStateGroup_6ba13355181c4327b05d51889ba7fe07.States, VisualState_0dc5902565c04e60bc20e5c2aeb02251, Object);
                System.Array.add(VisualStateGroup_6ba13355181c4327b05d51889ba7fe07.States, VisualState_3fdcc3eef0724690bc315ebffdfd215f, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_6ba13355181c4327b05d51889ba7fe07);

                var Border_faf838c17dca454799c2cf339072a766 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_faf838c17dca454799c2cf339072a766);
                Border_faf838c17dca454799c2cf339072a766.Name = "InnerBorder";
                Border_faf838c17dca454799c2cf339072a766.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_320bd80a9be745f497ca5ed48efb11b3 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_320bd80a9be745f497ca5ed48efb11b3);
                ContentPresenter_320bd80a9be745f497ca5ed48efb11b3.Name = "ContentPresenter";
                var Binding_a2f2ecab95f24843a546a21239dcc65f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_a2f2ecab95f24843a546a21239dcc65f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_e0e556c055b744628dfde06060f92d61 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e0e556c055b744628dfde06060f92d61.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_a2f2ecab95f24843a546a21239dcc65f.RelativeSource = RelativeSource_e0e556c055b744628dfde06060f92d61;


                Binding_a2f2ecab95f24843a546a21239dcc65f.TemplateOwner = templateInstance_1ad9e5b1ac664433a750da7b255ec518;

                var Binding_1d05d609dc9647aca0dc5ab4963e8d66 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_1d05d609dc9647aca0dc5ab4963e8d66.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_6c4b3e85937443c2869def7eb9c225a2 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_6c4b3e85937443c2869def7eb9c225a2.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_1d05d609dc9647aca0dc5ab4963e8d66.RelativeSource = RelativeSource_6c4b3e85937443c2869def7eb9c225a2;


                Binding_1d05d609dc9647aca0dc5ab4963e8d66.TemplateOwner = templateInstance_1ad9e5b1ac664433a750da7b255ec518;

                var Binding_dcef591556b045499679c341875bcad9 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_dcef591556b045499679c341875bcad9.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_6e9e4bc9a6804925b385e8be46fc7d45 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_6e9e4bc9a6804925b385e8be46fc7d45.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_dcef591556b045499679c341875bcad9.RelativeSource = RelativeSource_6e9e4bc9a6804925b385e8be46fc7d45;


                Binding_dcef591556b045499679c341875bcad9.TemplateOwner = templateInstance_1ad9e5b1ac664433a750da7b255ec518;

                var Binding_00fb78772b5648d990a2a3f34417f7ba = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_00fb78772b5648d990a2a3f34417f7ba.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_93e5afb2af5f4529a7fee2b4da33bf31 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_93e5afb2af5f4529a7fee2b4da33bf31.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_00fb78772b5648d990a2a3f34417f7ba.RelativeSource = RelativeSource_93e5afb2af5f4529a7fee2b4da33bf31;


                Binding_00fb78772b5648d990a2a3f34417f7ba.TemplateOwner = templateInstance_1ad9e5b1ac664433a750da7b255ec518;

                var Binding_0fd66f530d2e40c381bf15b00df6ec06 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_0fd66f530d2e40c381bf15b00df6ec06.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_6d427a412c3d474cafc2ffe26c6ab822 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_6d427a412c3d474cafc2ffe26c6ab822.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_0fd66f530d2e40c381bf15b00df6ec06.RelativeSource = RelativeSource_6d427a412c3d474cafc2ffe26c6ab822;


                Binding_0fd66f530d2e40c381bf15b00df6ec06.TemplateOwner = templateInstance_1ad9e5b1ac664433a750da7b255ec518;


                Border_faf838c17dca454799c2cf339072a766.Child = ContentPresenter_320bd80a9be745f497ca5ed48efb11b3;

                var Binding_070fb891fc7843bfa8d74e86af770617 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_070fb891fc7843bfa8d74e86af770617.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_ce5039c877b5405c93729c667852a28a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ce5039c877b5405c93729c667852a28a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_070fb891fc7843bfa8d74e86af770617.RelativeSource = RelativeSource_ce5039c877b5405c93729c667852a28a;


                Binding_070fb891fc7843bfa8d74e86af770617.TemplateOwner = templateInstance_1ad9e5b1ac664433a750da7b255ec518;


                Border_29b2d71f72564bab90c3e48932bb0096.Child = Border_faf838c17dca454799c2cf339072a766;

                var Binding_7f4d4efcbf7840a5891590b63eae2a91 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_7f4d4efcbf7840a5891590b63eae2a91.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_3025db6927e440b19a46ed2c7846e6e3 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3025db6927e440b19a46ed2c7846e6e3.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_7f4d4efcbf7840a5891590b63eae2a91.RelativeSource = RelativeSource_3025db6927e440b19a46ed2c7846e6e3;


                Binding_7f4d4efcbf7840a5891590b63eae2a91.TemplateOwner = templateInstance_1ad9e5b1ac664433a750da7b255ec518;

                var Binding_62b0744d7418435bbe359d5b295af62c = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_62b0744d7418435bbe359d5b295af62c.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_935158615fbc4b86b33b0eb46fc821ed = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_935158615fbc4b86b33b0eb46fc821ed.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_62b0744d7418435bbe359d5b295af62c.RelativeSource = RelativeSource_935158615fbc4b86b33b0eb46fc821ed;


                Binding_62b0744d7418435bbe359d5b295af62c.TemplateOwner = templateInstance_1ad9e5b1ac664433a750da7b255ec518;

                var Binding_8c5a8a4d0cba4d0aace974403cd9b0ae = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8c5a8a4d0cba4d0aace974403cd9b0ae.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_71605afb094a4914b1d6fe20e3220e40 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_71605afb094a4914b1d6fe20e3220e40.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8c5a8a4d0cba4d0aace974403cd9b0ae.RelativeSource = RelativeSource_71605afb094a4914b1d6fe20e3220e40;


                Binding_8c5a8a4d0cba4d0aace974403cd9b0ae.TemplateOwner = templateInstance_1ad9e5b1ac664433a750da7b255ec518;



                ContentPresenter_320bd80a9be745f497ca5ed48efb11b3.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_a2f2ecab95f24843a546a21239dcc65f);
                ContentPresenter_320bd80a9be745f497ca5ed48efb11b3.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_1d05d609dc9647aca0dc5ab4963e8d66);
                ContentPresenter_320bd80a9be745f497ca5ed48efb11b3.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_dcef591556b045499679c341875bcad9);
                ContentPresenter_320bd80a9be745f497ca5ed48efb11b3.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_00fb78772b5648d990a2a3f34417f7ba);
                ContentPresenter_320bd80a9be745f497ca5ed48efb11b3.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_0fd66f530d2e40c381bf15b00df6ec06);
                Border_faf838c17dca454799c2cf339072a766.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_070fb891fc7843bfa8d74e86af770617);
                Border_29b2d71f72564bab90c3e48932bb0096.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_7f4d4efcbf7840a5891590b63eae2a91);
                Border_29b2d71f72564bab90c3e48932bb0096.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_62b0744d7418435bbe359d5b295af62c);
                Border_29b2d71f72564bab90c3e48932bb0096.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_8c5a8a4d0cba4d0aace974403cd9b0ae);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_c30568c93b3940698f26949da80d462f, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_fb9f960249444872816c420c2a6497ac), Bridge.fn.cacheBind(this, this.setVisualStateProperty_fb9f960249444872816c420c2a6497ac), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_fb9f960249444872816c420c2a6497ac), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_fb9f960249444872816c420c2a6497ac), Bridge.fn.cacheBind(this, this.getVisualStateProperty_fb9f960249444872816c420c2a6497ac)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_c30568c93b3940698f26949da80d462f, Border_faf838c17dca454799c2cf339072a766);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_d1d2688a572b4cbcb148da515dd89c65, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_87eab4f132124dca97495f26df447dbf), Bridge.fn.cacheBind(this, this.setVisualStateProperty_87eab4f132124dca97495f26df447dbf), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_87eab4f132124dca97495f26df447dbf), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_87eab4f132124dca97495f26df447dbf), Bridge.fn.cacheBind(this, this.getVisualStateProperty_87eab4f132124dca97495f26df447dbf)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_d1d2688a572b4cbcb148da515dd89c65, Border_faf838c17dca454799c2cf339072a766);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_9c6c5e5c290d43219a1ddaf01a098e0b, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa), Bridge.fn.cacheBind(this, this.setVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa), Bridge.fn.cacheBind(this, this.getVisualStateProperty_006ceabc7a4d4809a4cc1d5dc2e3ecaa)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_9c6c5e5c290d43219a1ddaf01a098e0b, Border_faf838c17dca454799c2cf339072a766);

                templateInstance_1ad9e5b1ac664433a750da7b255ec518.TemplateContent = Border_29b2d71f72564bab90c3e48932bb0096;
                return templateInstance_1ad9e5b1ac664433a750da7b255ec518;
            }
        }
    });

    Bridge.define("CShtml.PageUpload", {
        inherits: [Windows.UI.Xaml.Controls.Page],
        fields: {
            btnCancel: null,
            _contentLoaded: false
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Windows.UI.Xaml.Controls.Page.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            OnFileOpened: function (sender, e) {
                var $step = 0,
                    $jumpFromFinally, 
                    frame, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0], $step);
                            switch ($step) {
                                case 0: {
                                    CShtml.FileClass.fileText = e.Text;
                                    Windows.UI.Xaml.MessageBox.Show("\u0424\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d");
                                    frame = new Windows.UI.Xaml.Controls.Frame();
                                    frame.Navigate(new System.Uri("Page1.xaml", System.UriKind.Relative));
                                    Windows.UI.Xaml.Window.Current.Content = frame;
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            BtnCancel_Click: function (sender, e) {

                var frame = new Windows.UI.Xaml.Controls.Frame();
                frame.Navigate(new System.Uri("Page1.xaml", System.UriKind.Relative));
                Windows.UI.Xaml.Window.Current.Content = frame;

            },
            InitializeComponent: function () {
                var $t;
                if (this._contentLoaded) {
                    return;
                }
                this._contentLoaded = true;


                if (Bridge.is(this, Windows.UI.Xaml.UIElement)) {
                    Bridge.cast(this, Windows.UI.Xaml.UIElement).XamlSourcePath = "CShtml\\PageUpload.xaml";
                }



                var Grid_d3c1d8b8502444c1b63ead971142f2b6 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var RowDefinition_11be370f0e714d4bb0a75513f806ad78 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_9daaf47f43ab4dce83f24e660ed76fc6 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_d0cebe9783a64daca6b31e27e0f57902 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_09c5b5676c164cee9e3bc1dff24e5a5e = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_d3c1d8b8502444c1b63ead971142f2b6.RowDefinitions.add(RowDefinition_11be370f0e714d4bb0a75513f806ad78);
                Grid_d3c1d8b8502444c1b63ead971142f2b6.RowDefinitions.add(RowDefinition_9daaf47f43ab4dce83f24e660ed76fc6);
                Grid_d3c1d8b8502444c1b63ead971142f2b6.RowDefinitions.add(RowDefinition_d0cebe9783a64daca6b31e27e0f57902);
                Grid_d3c1d8b8502444c1b63ead971142f2b6.RowDefinitions.add(RowDefinition_09c5b5676c164cee9e3bc1dff24e5a5e);

                var Border_7dbaf7f9806e4713aa86f3012bb45f47 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                Border_7dbaf7f9806e4713aa86f3012bb45f47.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_7dbaf7f9806e4713aa86f3012bb45f47, 0);
                var ControlForDisplayingTheFileOpe_736723026a03406893b124a85344465a = new Bridge.global.CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog();
                ControlForDisplayingTheFileOpe_736723026a03406893b124a85344465a.addFileOpened(Bridge.fn.cacheBind(this, this.OnFileOpened));
                ControlForDisplayingTheFileOpe_736723026a03406893b124a85344465a.Filter = "*.json,*.txt";
                ControlForDisplayingTheFileOpe_736723026a03406893b124a85344465a.ResultKind = Bridge.global.CSHTML5.Extensions.FileOpenDialog.ResultKind.Text;

                Border_7dbaf7f9806e4713aa86f3012bb45f47.Child = ControlForDisplayingTheFileOpe_736723026a03406893b124a85344465a;


                var Button_e46edb18fff749008e33740fa7496466 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Button_e46edb18fff749008e33740fa7496466.Content = "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430";
                this.RegisterName$1("btnCancel", Button_e46edb18fff749008e33740fa7496466);
                Button_e46edb18fff749008e33740fa7496466.Name = "btnCancel";
                Button_e46edb18fff749008e33740fa7496466.addClick(Bridge.fn.cacheBind(this, this.BtnCancel_Click));
                Button_e46edb18fff749008e33740fa7496466.Width = 250.0;
                Button_e46edb18fff749008e33740fa7496466.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_e46edb18fff749008e33740fa7496466, 1);
                Button_e46edb18fff749008e33740fa7496466.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_e46edb18fff749008e33740fa7496466.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_e46edb18fff749008e33740fa7496466.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_e46edb18fff749008e33740fa7496466.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_e46edb18fff749008e33740fa7496466.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_e46edb18fff749008e33740fa7496466.FontSize = 20.0;
                var ControlTemplate_2b06f58c30964d2cb5b722119e5b93ab = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_2b06f58c30964d2cb5b722119e5b93ab.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_2b06f58c30964d2cb5b722119e5b93ab.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_2b06f58c30964d2cb5b722119e5b93ab));

                Button_e46edb18fff749008e33740fa7496466.Template = ControlTemplate_2b06f58c30964d2cb5b722119e5b93ab;


                Grid_d3c1d8b8502444c1b63ead971142f2b6.Children.add(Border_7dbaf7f9806e4713aa86f3012bb45f47);
                Grid_d3c1d8b8502444c1b63ead971142f2b6.Children.add(Button_e46edb18fff749008e33740fa7496466);


                this.Content = Grid_d3c1d8b8502444c1b63ead971142f2b6;



                this.btnCancel = Button_e46edb18fff749008e33740fa7496466;



            },
            accessVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_7aeae960f931445fb6b9b29133f45f57: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_7aeae960f931445fb6b9b29133f45f57: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_7aeae960f931445fb6b9b29133f45f57: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_7aeae960f931445fb6b9b29133f45f57: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_7aeae960f931445fb6b9b29133f45f57: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_4704cb744b244ef593664b562aca3824: function (rootTargetObjectInstance) {
                return new (Bridge.GeneratorEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function (rootTargetObjectInstance) {
                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new (Bridge.GeneratorEnumerator$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))))(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        return false;
                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                }, arguments));
            },
            setVisualStateProperty_4704cb744b244ef593664b562aca3824: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_4704cb744b244ef593664b562aca3824: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_4704cb744b244ef593664b562aca3824: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_4704cb744b244ef593664b562aca3824: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_2b06f58c30964d2cb5b722119e5b93ab: function (templateOwner) {
                var templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033.TemplateOwner = templateOwner;
                var Border_522a91546f0249d6a4ed91ca4f4abccf = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_522a91546f0249d6a4ed91ca4f4abccf);
                Border_522a91546f0249d6a4ed91ca4f4abccf.Name = "OuterBorder";
                Border_522a91546f0249d6a4ed91ca4f4abccf.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_86b216758fb042fe87f5dbe275f502bc = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_86b216758fb042fe87f5dbe275f502bc);
                VisualStateGroup_86b216758fb042fe87f5dbe275f502bc.Name = "CommonStates";
                var VisualState_7448f1d9b6ee4f2ba64a491da041e1e5 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_7448f1d9b6ee4f2ba64a491da041e1e5);
                VisualState_7448f1d9b6ee4f2ba64a491da041e1e5.Name = "Normal";

                var VisualState_8509c71a88a1495f940473eb8e2a9be5 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_8509c71a88a1495f940473eb8e2a9be5);
                VisualState_8509c71a88a1495f940473eb8e2a9be5.Name = "PointerOver";
                var Storyboard_ee3d3a682da44f638fd4d50b4f3fddb1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_54cca316c6c04774ae27e53262502fd2 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_54cca316c6c04774ae27e53262502fd2, "InnerBorder");
                var DiscreteObjectKeyFrame_1cdf344a724748778c09e6e02ed217cf = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_1cdf344a724748778c09e6e02ed217cf.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_1cdf344a724748778c09e6e02ed217cf.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_54cca316c6c04774ae27e53262502fd2.KeyFrames.add(DiscreteObjectKeyFrame_1cdf344a724748778c09e6e02ed217cf);


                Storyboard_ee3d3a682da44f638fd4d50b4f3fddb1.Children.add(ObjectAnimationUsingKeyFrames_54cca316c6c04774ae27e53262502fd2);


                VisualState_8509c71a88a1495f940473eb8e2a9be5.Storyboard = Storyboard_ee3d3a682da44f638fd4d50b4f3fddb1;


                var VisualState_8ce1af9379864fb9b906b0d0f1156bde = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_8ce1af9379864fb9b906b0d0f1156bde);
                VisualState_8ce1af9379864fb9b906b0d0f1156bde.Name = "Pressed";
                var Storyboard_e10e34fd8bed405fbbd7c504822502de = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_1f415cb41ce849c4ae4670ee27797f9f = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_1f415cb41ce849c4ae4670ee27797f9f, "InnerBorder");
                var DiscreteObjectKeyFrame_f097420685e4415c9ed7235e955e7efc = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_f097420685e4415c9ed7235e955e7efc.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_f097420685e4415c9ed7235e955e7efc.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_1f415cb41ce849c4ae4670ee27797f9f.KeyFrames.add(DiscreteObjectKeyFrame_f097420685e4415c9ed7235e955e7efc);


                Storyboard_e10e34fd8bed405fbbd7c504822502de.Children.add(ObjectAnimationUsingKeyFrames_1f415cb41ce849c4ae4670ee27797f9f);


                VisualState_8ce1af9379864fb9b906b0d0f1156bde.Storyboard = Storyboard_e10e34fd8bed405fbbd7c504822502de;


                var VisualState_43a480bfa5ff4d8ea64086754df5d68c = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_43a480bfa5ff4d8ea64086754df5d68c);
                VisualState_43a480bfa5ff4d8ea64086754df5d68c.Name = "Disabled";
                var Storyboard_eae6dbc729e1437fa7b84e08b814da27 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_a5703ff818dd4828954874ff1559fd3c = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_a5703ff818dd4828954874ff1559fd3c, "InnerBorder");
                var DiscreteObjectKeyFrame_432f6dc7ba944c18bd73447b2e37841f = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_432f6dc7ba944c18bd73447b2e37841f.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_432f6dc7ba944c18bd73447b2e37841f.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_a5703ff818dd4828954874ff1559fd3c.KeyFrames.add(DiscreteObjectKeyFrame_432f6dc7ba944c18bd73447b2e37841f);


                Storyboard_eae6dbc729e1437fa7b84e08b814da27.Children.add(ObjectAnimationUsingKeyFrames_a5703ff818dd4828954874ff1559fd3c);


                VisualState_43a480bfa5ff4d8ea64086754df5d68c.Storyboard = Storyboard_eae6dbc729e1437fa7b84e08b814da27;


                System.Array.add(VisualStateGroup_86b216758fb042fe87f5dbe275f502bc.States, VisualState_7448f1d9b6ee4f2ba64a491da041e1e5, Object);
                System.Array.add(VisualStateGroup_86b216758fb042fe87f5dbe275f502bc.States, VisualState_8509c71a88a1495f940473eb8e2a9be5, Object);
                System.Array.add(VisualStateGroup_86b216758fb042fe87f5dbe275f502bc.States, VisualState_8ce1af9379864fb9b906b0d0f1156bde, Object);
                System.Array.add(VisualStateGroup_86b216758fb042fe87f5dbe275f502bc.States, VisualState_43a480bfa5ff4d8ea64086754df5d68c, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_86b216758fb042fe87f5dbe275f502bc);

                var Border_1f7f704256504a76b67e051a3dc07378 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_1f7f704256504a76b67e051a3dc07378);
                Border_1f7f704256504a76b67e051a3dc07378.Name = "InnerBorder";
                Border_1f7f704256504a76b67e051a3dc07378.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_454e9e3baff94330b1bf3040ad29c04b = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_454e9e3baff94330b1bf3040ad29c04b);
                ContentPresenter_454e9e3baff94330b1bf3040ad29c04b.Name = "ContentPresenter";
                var Binding_d1f4436dca494038b81691a18b63236a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d1f4436dca494038b81691a18b63236a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_0e9d69a22e864bdc9fa84075759ba212 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_0e9d69a22e864bdc9fa84075759ba212.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d1f4436dca494038b81691a18b63236a.RelativeSource = RelativeSource_0e9d69a22e864bdc9fa84075759ba212;


                Binding_d1f4436dca494038b81691a18b63236a.TemplateOwner = templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;

                var Binding_30896817afab427aaed2d6fdf5a1955c = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_30896817afab427aaed2d6fdf5a1955c.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_f1a6520086aa41b09b5b85694515ba7b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f1a6520086aa41b09b5b85694515ba7b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_30896817afab427aaed2d6fdf5a1955c.RelativeSource = RelativeSource_f1a6520086aa41b09b5b85694515ba7b;


                Binding_30896817afab427aaed2d6fdf5a1955c.TemplateOwner = templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;

                var Binding_2f70829140c44f57b31d1994a35a0a8c = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_2f70829140c44f57b31d1994a35a0a8c.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_ca41f997eb7a49be8b38622fb38865f0 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ca41f997eb7a49be8b38622fb38865f0.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_2f70829140c44f57b31d1994a35a0a8c.RelativeSource = RelativeSource_ca41f997eb7a49be8b38622fb38865f0;


                Binding_2f70829140c44f57b31d1994a35a0a8c.TemplateOwner = templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;

                var Binding_f598ff7fd7734308af96c0912432bc50 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_f598ff7fd7734308af96c0912432bc50.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_e7474ff3bf2e4cda9844d74cb27ccd80 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e7474ff3bf2e4cda9844d74cb27ccd80.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_f598ff7fd7734308af96c0912432bc50.RelativeSource = RelativeSource_e7474ff3bf2e4cda9844d74cb27ccd80;


                Binding_f598ff7fd7734308af96c0912432bc50.TemplateOwner = templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;

                var Binding_1eb943aff0d848db90d67876dd7cb709 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_1eb943aff0d848db90d67876dd7cb709.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_d89eedafbcc242e487de1fdebf9d243c = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d89eedafbcc242e487de1fdebf9d243c.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_1eb943aff0d848db90d67876dd7cb709.RelativeSource = RelativeSource_d89eedafbcc242e487de1fdebf9d243c;


                Binding_1eb943aff0d848db90d67876dd7cb709.TemplateOwner = templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;


                Border_1f7f704256504a76b67e051a3dc07378.Child = ContentPresenter_454e9e3baff94330b1bf3040ad29c04b;

                var Binding_c58d75ba5af84421b890bd5e44618ae1 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c58d75ba5af84421b890bd5e44618ae1.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_ff0de22a092a4974a8cdf5b0bb85088a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ff0de22a092a4974a8cdf5b0bb85088a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c58d75ba5af84421b890bd5e44618ae1.RelativeSource = RelativeSource_ff0de22a092a4974a8cdf5b0bb85088a;


                Binding_c58d75ba5af84421b890bd5e44618ae1.TemplateOwner = templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;


                Border_522a91546f0249d6a4ed91ca4f4abccf.Child = Border_1f7f704256504a76b67e051a3dc07378;

                var Binding_7f51b3ab79f34163a2a8bfa8677f6e5f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_7f51b3ab79f34163a2a8bfa8677f6e5f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_a6de0e37b0a247638e3449e09ed0311e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a6de0e37b0a247638e3449e09ed0311e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_7f51b3ab79f34163a2a8bfa8677f6e5f.RelativeSource = RelativeSource_a6de0e37b0a247638e3449e09ed0311e;


                Binding_7f51b3ab79f34163a2a8bfa8677f6e5f.TemplateOwner = templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;

                var Binding_44472ff3726d4f0589c8b08bdbe18d53 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_44472ff3726d4f0589c8b08bdbe18d53.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_4d3b04c49a2b4af5bee38952c7e2e287 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_4d3b04c49a2b4af5bee38952c7e2e287.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_44472ff3726d4f0589c8b08bdbe18d53.RelativeSource = RelativeSource_4d3b04c49a2b4af5bee38952c7e2e287;


                Binding_44472ff3726d4f0589c8b08bdbe18d53.TemplateOwner = templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;

                var Binding_e7b5652d3f444d258711fa5a304ff64b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e7b5652d3f444d258711fa5a304ff64b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_8cd4ac2ddfa742edbf1e2b163a1d797b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8cd4ac2ddfa742edbf1e2b163a1d797b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e7b5652d3f444d258711fa5a304ff64b.RelativeSource = RelativeSource_8cd4ac2ddfa742edbf1e2b163a1d797b;


                Binding_e7b5652d3f444d258711fa5a304ff64b.TemplateOwner = templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;



                ContentPresenter_454e9e3baff94330b1bf3040ad29c04b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_d1f4436dca494038b81691a18b63236a);
                ContentPresenter_454e9e3baff94330b1bf3040ad29c04b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_30896817afab427aaed2d6fdf5a1955c);
                ContentPresenter_454e9e3baff94330b1bf3040ad29c04b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_2f70829140c44f57b31d1994a35a0a8c);
                ContentPresenter_454e9e3baff94330b1bf3040ad29c04b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_f598ff7fd7734308af96c0912432bc50);
                ContentPresenter_454e9e3baff94330b1bf3040ad29c04b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_1eb943aff0d848db90d67876dd7cb709);
                Border_1f7f704256504a76b67e051a3dc07378.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_c58d75ba5af84421b890bd5e44618ae1);
                Border_522a91546f0249d6a4ed91ca4f4abccf.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_7f51b3ab79f34163a2a8bfa8677f6e5f);
                Border_522a91546f0249d6a4ed91ca4f4abccf.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_44472ff3726d4f0589c8b08bdbe18d53);
                Border_522a91546f0249d6a4ed91ca4f4abccf.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_e7b5652d3f444d258711fa5a304ff64b);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_54cca316c6c04774ae27e53262502fd2, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07), Bridge.fn.cacheBind(this, this.setVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07), Bridge.fn.cacheBind(this, this.getVisualStateProperty_cfcc9fe202b547bf93c368edcd592f07)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_54cca316c6c04774ae27e53262502fd2, Border_1f7f704256504a76b67e051a3dc07378);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_1f415cb41ce849c4ae4670ee27797f9f, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_7aeae960f931445fb6b9b29133f45f57), Bridge.fn.cacheBind(this, this.setVisualStateProperty_7aeae960f931445fb6b9b29133f45f57), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_7aeae960f931445fb6b9b29133f45f57), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_7aeae960f931445fb6b9b29133f45f57), Bridge.fn.cacheBind(this, this.getVisualStateProperty_7aeae960f931445fb6b9b29133f45f57)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_1f415cb41ce849c4ae4670ee27797f9f, Border_1f7f704256504a76b67e051a3dc07378);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_a5703ff818dd4828954874ff1559fd3c, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_4704cb744b244ef593664b562aca3824), Bridge.fn.cacheBind(this, this.setVisualStateProperty_4704cb744b244ef593664b562aca3824), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_4704cb744b244ef593664b562aca3824), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_4704cb744b244ef593664b562aca3824), Bridge.fn.cacheBind(this, this.getVisualStateProperty_4704cb744b244ef593664b562aca3824)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_a5703ff818dd4828954874ff1559fd3c, Border_1f7f704256504a76b67e051a3dc07378);

                templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033.TemplateContent = Border_522a91546f0249d6a4ed91ca4f4abccf;
                return templateInstance_77e4609dd3dd4d2eb5178f7eb04ae033;
            }
        }
    });

    Bridge.define("CShtml.SecondPage", {
        inherits: [Windows.UI.Xaml.Controls.Page],
        fields: {
            _contentLoaded: false
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Windows.UI.Xaml.Controls.Page.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            InitializeComponent: function () {
                var $t;
                if (this._contentLoaded) {
                    return;
                }
                this._contentLoaded = true;


                if (Bridge.is(this, Windows.UI.Xaml.UIElement)) {
                    Bridge.cast(this, Windows.UI.Xaml.UIElement).XamlSourcePath = "CShtml\\SecondPage.xaml";
                }



                var Grid_930d25859f85411aa951d0b540f43dc4 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                Grid_930d25859f85411aa951d0b540f43dc4.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 0, $t));

                this.Content = Grid_930d25859f85411aa951d0b540f43dc4;







            }
        }
    });

    Bridge.define("CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog", {
        inherits: [Windows.UI.Xaml.Controls.Control],
        statics: {
            fields: {
                FilterProperty: null
            },
            ctors: {
                init: function () {
                    this.FilterProperty = Windows.UI.Xaml.DependencyProperty.Register("Filter", System.String, CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog, new Windows.UI.Xaml.PropertyMetadata.$ctor2("", CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog.Filter_Changed));
                }
            },
            methods: {
                Filter_Changed: function (d, e) {
                    var $t;
                    var control = Bridge.cast(d, CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog);
                    if (CSharpXamlForHtml5.DomManagement.IsControlInVisualTree(control)) {
                        control.SetFilter(Bridge.toString((($t = e.NewValue, $t != null ? $t : ""))));
                    }
                }
            }
        },
        fields: {
            _resultKind: 0,
            _resultKindStr: null
        },
        events: {
            FileOpened: null
        },
        props: {
            ResultKind: {
                get: function () {
                    return this._resultKind;
                },
                set: function (value) {
                    this._resultKind = value;
                    this._resultKindStr = System.Enum.toString(CSHTML5.Extensions.FileOpenDialog.ResultKind, value);
                }
            },
            Filter: {
                get: function () {
                    return Bridge.cast(this.GetValue(CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog.FilterProperty), System.String);
                },
                set: function (value) {
                    this.SetValue(CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog.FilterProperty, value);
                }
            }
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Windows.UI.Xaml.Controls.Control.ctor.call(this);
                this.ResultKind = CSHTML5.Extensions.FileOpenDialog.ResultKind.Text;

                CSharpXamlForHtml5.DomManagement.SetHtmlRepresentation(this, "<div style style='margin: 15px; position: relative; text-align: center; width: 100%; background: #1bbc9c vertical-align:middle;'><input type='file' accept='.json, .txt' id='input__file' style='margin: 65px; position: relative; text-align: center; width: 100%; visibility: hidden;' multiple><label for='input__file' style='width: 100%; max-width: 290px; height: 60px; background: #F9DEF2; display: -webkit-box; border: 1px solid grey;display: -ms-flexbox; display: flex;  -webkit-box-align: center; -ms-flex-align: center; margin: 0 auto; font-size: 1.125rem; font-weight: 700;border-radius: 3px; cursor: pointer; align-items: center; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: center; color: #000;'><span style='line-height: 1;margin-top: 1px;'>\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b</span></label></div>");


                this.addLoaded(Bridge.fn.cacheBind(this, this.ControlForDisplayingAFileOpenDialog_Loaded));
            }
        },
        methods: {
            ControlForDisplayingAFileOpenDialog_Loaded: function (sender, e) {
                var inputElement = CSHTML5.Interop.GetDiv(this);

                var onFileOpened = Bridge.fn.bind(this, function (result) {
                    if (!Bridge.staticEquals(this.FileOpened, null)) {
                        this.FileOpened(this, new CSHTML5.Extensions.FileOpenDialog.FileOpenedEventArgs(result, this.ResultKind));
                    }
                });
                var resultKindStr = this._resultKindStr;

                this.SetFilter(this.Filter);

                
                inputElement.addEventListener("change", function(e) {
                    if(!e) {
                      e = window.event;
                    }
                    var fullPath = inputElement.value;
                    var filename = '';
                    if (fullPath) {
                        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                        filename = fullPath.substring(startIndex);
                        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                            filename = filename.substring(1);
                        }
                    }
                    var input = e.target;
                    var file = input.files[0];
                    var reader = new FileReader();
                    reader.onload = function() {
                      var callback = onFileOpened;
                      var result = reader.result;
                      //if (file.type == 'text/plain')
                      callback(result);
                    };
                    var resultKind = resultKindStr;
                    if (resultKind == 'DataURL') {
                      reader.readAsDataURL(file);
                    }
                    else {
                      reader.readAsText(file);
                    }
                    var isRunningInTheSimulator = Bridge.box(CSHTML5.Interop.IsRunningInTheSimulator, System.Boolean, System.Boolean.toString);
                    
                });
            },
            SetFilter: function (filter) {
                var inputElement = CSHTML5.Interop.GetDiv(this);

                var splitted = System.String.split(filter, [124].map(function (i) {{ return String.fromCharCode(i); }}));
                var itemsKept = new (System.Collections.Generic.List$1(System.String)).ctor();
                if (splitted.length === 1) {
                    itemsKept.add(splitted[System.Array.index(0, splitted)]);
                } else {
                    for (var i = 1; i < splitted.length; i = (i + 2) | 0) {
                        itemsKept.add(splitted[System.Array.index(i, splitted)]);
                    }
                }
                var filtersInHtml5 = System.String.replaceAll(System.String.replaceAll(Bridge.toArray(itemsKept).join(","), "*", ""), ";", ",");

                if (!System.String.isNullOrWhiteSpace(filtersInHtml5)) {
                    inputElement.accept = filtersInHtml5;
                } else {
                    inputElement.accept = "";
                }
            }
        }
    });

    Bridge.define("CSHTML5.Extensions.FileOpenDialog.FileOpenedEventArgs", {
        fields: {
            /**
             * Only available if the property "ResultKind" was set to "Text"
             *
             * @instance
             * @public
             * @readonly
             * @memberof CSHTML5.Extensions.FileOpenDialog.FileOpenedEventArgs
             * @type string
             */
            PlainTextContent: null,
            /**
             * Only available if the property "ResultKind" was set to "Text".
             *
             * @instance
             * @public
             * @readonly
             * @memberof CSHTML5.Extensions.FileOpenDialog.FileOpenedEventArgs
             * @type string
             */
            Text: null,
            /**
             * Only available if the property "ResultKind" was set to "DataURL".
             *
             * @instance
             * @public
             * @readonly
             * @memberof CSHTML5.Extensions.FileOpenDialog.FileOpenedEventArgs
             * @type string
             */
            DataURL: null
        },
        ctors: {
            ctor: function (result, resultKind) {
                var $t, $t1;
                this.$initialize();
                System.Object.call(this);
                if (resultKind === CSHTML5.Extensions.FileOpenDialog.ResultKind.Text) {
                    this.Text = (this.PlainTextContent = Bridge.toString((($t = result, $t != null ? $t : ""))));
                } else if (resultKind === CSHTML5.Extensions.FileOpenDialog.ResultKind.DataURL) {
                    this.DataURL = Bridge.toString((($t1 = result, $t1 != null ? $t1 : "")));
                } else {
                    throw new System.NotSupportedException.ctor();
                }
            }
        }
    });

    Bridge.define("CSHTML5.Extensions.FileOpenDialog.ResultKind", {
        $kind: "enum",
        statics: {
            fields: {
                Text: 0,
                DataURL: 1
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDU2h0bWwuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIm9iai9SZWxlYXNlL0FwcC54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlMS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlSG9tZS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlVXBsb2FkLnhhbWwuZy5jcyIsIm9iai9SZWxlYXNlL1NlY29uZFBhZ2UueGFtbC5nLmNzIiwiQXBwLnhhbWwuY3MiLCJQYWdlMS54YW1sLmNzIiwiUGFnZUhvbWUueGFtbC5jcyIsIlBhZ2VVcGxvYWQueGFtbC5jcyIsIlNlY29uZFBhZ2UueGFtbC5jcyIsIkZpbGVPcGVuRGlhbG9nLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7b0JBUVFBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7O29CQ0RwRUEsV0FBMkJBLEFBQU9BO29CQUNsQ0EsT0FBT0EsbUVBQTZEQTs7Ozs7Ozs7OztvQkNEcEVBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7WUptRXhFQSxJQUFJQTs7Ozs7Ozs7O2dCSy9ESUE7Ozs7Z0JBT0FBLGFBQWFBLElBQUlBO2dCQUNqQkEsZ0JBQWdCQSxJQUFJQSw0QkFBcUJBO2dCQUN6Q0EseUNBQXlCQTs7Ozs7Z0JMbUJ6QkEsSUFBSUE7b0JBQ0FBOztnQkFDSkE7OztnQkFHQUEsSUFBSUE7b0JBRUFBLEFBQUNBLFlBQW1DQSxBQUFRQTs7OztnQkFLNURBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7Z0JBR0FBLDBEQUEwREEsSUFBSUE7Z0JBQzlEQSxpQkFBaUJBOztnQkFF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QkFBZ0JBLE1BQU1BLElBQUlBLHNEQUFvQkEsUUFBUUE7OztnQkFFOURBLG9CQUF1QkE7O2dCQUd2QkEsZUFBVUE7O2dCQUdWQTtnQkFnQ1VBOzs7Ozs7Ozs7Ozs7Ozs7OztxQ0FBY0E7Ozs7O3FDQUF1REE7Ozs7Ozs7a0RBQXpDQTs7OztpQ0FHM0JBO2dCQUdYQSxtQkFBbUJBLHVCQUF1QkE7O2dCQUsxQ0EsZUFBb0JBO2dCQUNwQkEsZ0JBQXlCQSxLQUFJQTtnQkFDN0JBLElBQUlBO29CQUVBQSxjQUFjQTs7b0JBSWRBLEtBQUtBLFdBQVdBLElBQUlBLGlCQUFpQkE7d0JBRWpDQSxjQUFjQSw0QkFBU0EsR0FBVEE7OztnQkFHdEJBLHFCQUF3QkEsaUVBQWlCQTs7Z0JBR3pDQSxJQUFJQSxDQUFDQSxpQ0FBMEJBO29CQUUzQkEsQUFBcURBLHNCQUFjQTs7b0JBSW5FQSxBQUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBeUNwQ0EsUUFBZUE7Ozs7Z0JBRXRDQSxJQUFJQSxlQUFjQTtvQkFFZEEsWUFBWUEseUJBQXdCQSxpQkFBQ0E7dUJBRXBDQSxJQUFJQSxlQUFjQTtvQkFFbkJBLGVBQWVBLGlCQUFDQTs7b0JBSWhCQSxNQUFNQSxJQUFJQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyA8Q1NIVE1MNT48WGFtbEhhc2g+NUEyNEZEOTRFRDU4MzZBQzZCRkM3NkY3NzVCNkVEMEY8L1hhbWxIYXNoPjxQYXNzTnVtYmVyPjI8L1Bhc3NOdW1iZXI+PENvbXBpbGF0aW9uRGF0ZT4xNS4wNC4yMDIwIDE5OjMzOjI1PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgEFwcMeAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuQXBwKTtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlR5cGVJbnN0YW50aWF0aW9uSGVscGVyLkluc3RhbnRpYXRlKHR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGF1dG8tZ2VuZXJhdGVkIGJ5IFwiQyMvWEFNTCBmb3IgSFRNTDVcIlxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxucGFydGlhbCBjbGFzcyBBcHAgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5BcHBsaWNhdGlvblxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxuXHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxBcHAueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRSb290UGF0aCA9IEBcIk91dHB1dFxcXCI7XHJcbmdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5TdGFydHVwQXNzZW1ibHlJbmZvLk91dHB1dEFwcEZpbGVzUGF0aCA9IEBcImFwcC1jc2h0bWw1XFxhcHBcXFwiO1xyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRMaWJyYXJpZXNQYXRoID0gQFwiYXBwLWNzaHRtbDVcXGxpYnNcXFwiO1xyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRSZXNvdXJjZXNQYXRoID0gQFwiYXBwLWNzaHRtbDVcXHJlc1xcXCI7XHJcblxyXG5cclxudmFyIFJlc291cmNlRGljdGlvbmFyeV9lODQyNGY2YmM1ZWQ0MDYxOGIwNTQ4OWI3NmFiNGZjZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5SZXNvdXJjZURpY3Rpb25hcnkoKTtcclxudGhpcy5SZXNvdXJjZXMgPSBSZXNvdXJjZURpY3Rpb25hcnlfZTg0MjRmNmJjNWVkNDA2MThiMDU0ODliNzZhYjRmY2U7XHJcblxyXG50aGlzLlJlc291cmNlcyA9IFJlc291cmNlRGljdGlvbmFyeV9lODQyNGY2YmM1ZWQ0MDYxOGIwNTQ4OWI3NmFiNGZjZTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG57XHJcbiAgICBuZXcgQXBwKCk7XHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD45QjU1RjE0NDk3RENFNjVENDQyMDQwQjEzMTgwRDJFMTwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgMTk6MzM6MjU8L0NvbXBpbGF0aW9uRGF0ZT48L0NTSFRNTDU+XHJcblxyXG5cclxuXHJcbnB1YmxpYyBzdGF0aWMgY2xhc3Mgx4DHgENzaHRtbMeAx4BDb21wb25lbnTHgMeAUGFnZTHHgMeAWGFtbMeAx4BGYWN0b3J5XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqZWN0IEluc3RhbnRpYXRlKClcclxuICAgIHtcclxuICAgICAgICBnbG9iYWw6OlN5c3RlbS5UeXBlIHR5cGUgPSB0eXBlb2YoQ1NodG1sLlBhZ2UxKTtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlR5cGVJbnN0YW50aWF0aW9uSGVscGVyLkluc3RhbnRpYXRlKHR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGF1dG8tZ2VuZXJhdGVkIGJ5IFwiQyMvWEFNTCBmb3IgSFRNTDVcIlxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxucGFydGlhbCBjbGFzcyBQYWdlMSA6IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlBhZ2Vcclxue1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMTY5LCA2NDksIDA2MjggLy8gUHJldmVudHMgd2FybmluZyBDUzAxNjkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgdXNlZCcpLCBDUzA2NDkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgYXNzaWduZWQgdG8sIGFuZCB3aWxsIGFsd2F5cyBoYXZlIGl0cyBkZWZhdWx0IHZhbHVlIG51bGwnKSwgYW5kIENTMDYyOCAoJ21lbWJlciA6IG5ldyBwcm90ZWN0ZWQgbWVtYmVyIGRlY2xhcmVkIGluIHNlYWxlZCBjbGFzcycpXHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIgZWxlbWVudEZvckxpc3Q7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24gYnRuQ2FuY2VsO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0blVwbG9hZDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbiBidG5Qcm9jZXNzaW5nO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuVGV4dEJveCB0eHRGaWxlO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UgbmlnYUlERUZfSnBlZztcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBib3JkZXJJREVGO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UgbmlnYVVNTF9KcGVnO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGJvcmRlclVNTDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQgTGF5b3V0R3JpZDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50O1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZTEueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfNzViOWUzZDk0YTMxNDVjY2FkM2NlMzJmMzAyODU2ODMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF9lZTBkNTRmOTZhZTk0Njc2OGVlMTdhOTRkYTY1Y2I4YyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfZWUwZDU0Zjk2YWU5NDY3NjhlZTE3YTk0ZGE2NWNiOGMuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9lZTBkNTRmOTZhZTk0Njc2OGVlMTdhOTRkYTY1Y2I4Yy5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfMThiOWMyY2YwY2Y5NDQ0YmI2MjgwNjA0NzgxNWQ0MzggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF8xOGI5YzJjZjBjZjk0NDRiYjYyODA2MDQ3ODE1ZDQzOC5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzE4YjljMmNmMGNmOTQ0NGJiNjI4MDYwNDc4MTVkNDM4Lk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF9iMzk4MTk3YjA5Y2E0ZTdmYjc0Njc0NjljNmNmNmZmMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wX2IzOTgxOTdiMDljYTRlN2ZiNzQ2NzQ2OWM2Y2Y2ZmYwLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfYjM5ODE5N2IwOWNhNGU3ZmI3NDY3NDY5YzZjZjZmZjAuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoX2VlMGQ1NGY5NmFlOTQ2NzY4ZWUxN2E5NGRhNjVjYjhjLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF8xOGI5YzJjZjBjZjk0NDRiYjYyODA2MDQ3ODE1ZDQzOCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfZWUwZDU0Zjk2YWU5NDY3NjhlZTE3YTk0ZGE2NWNiOGMuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wX2IzOTgxOTdiMDljYTRlN2ZiNzQ2NzQ2OWM2Y2Y2ZmYwKTtcclxuXHJcblxyXG5HcmlkXzc1YjllM2Q5NGEzMTQ1Y2NhZDNjZTMyZjMwMjg1NjgzLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoX2VlMGQ1NGY5NmFlOTQ2NzY4ZWUxN2E5NGRhNjVjYjhjO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNDNiYmEwMjMwNDM0NDIwNGE3MDY1ZjBjZTE5YTcxYmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzQzYmJhMDIzMDQzNDQyMDRhNzA2NWYwY2UxOWE3MWJhLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzFjNTQ4YWRhY2EzNjQyNjI5YWIzMzVjOGQ5YTNiODFkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl8xYzU0OGFkYWNhMzY0MjYyOWFiMzM1YzhkOWEzYjgxZC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzllZmE1M2E0MTc5OTQxNGNhMGM1YThiZWMwYWZjY2M0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl85ZWZhNTNhNDE3OTk0MTRjYTBjNWE4YmVjMGFmY2NjNC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkXzc1YjllM2Q5NGEzMTQ1Y2NhZDNjZTMyZjMwMjg1NjgzLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzQzYmJhMDIzMDQzNDQyMDRhNzA2NWYwY2UxOWE3MWJhKTtcclxuR3JpZF83NWI5ZTNkOTRhMzE0NWNjYWQzY2UzMmYzMDI4NTY4My5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8xYzU0OGFkYWNhMzY0MjYyOWFiMzM1YzhkOWEzYjgxZCk7XHJcbkdyaWRfNzViOWUzZDk0YTMxNDVjY2FkM2NlMzJmMzAyODU2ODMuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fOWVmYTUzYTQxNzk5NDE0Y2EwYzVhOGJlYzBhZmNjYzQpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMjBmMTIxNDE3ZGFmNGZiNGFkMmMyZmM4ZDU5MjE4N2YgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5Db2x1bW5EZWZpbml0aW9uXzIwZjEyMTQxN2RhZjRmYjRhZDJjMmZjOGQ1OTIxODdmLldpZHRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl9iYmNkZjc3M2ZlZTg0ZTZhODQ1MmU4M2U1NTVkODMwNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcblxyXG5HcmlkXzc1YjllM2Q5NGEzMTQ1Y2NhZDNjZTMyZjMwMjg1NjgzLkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzIwZjEyMTQxN2RhZjRmYjRhZDJjMmZjOGQ1OTIxODdmKTtcclxuR3JpZF83NWI5ZTNkOTRhMzE0NWNjYWQzY2UzMmYzMDI4NTY4My5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl9iYmNkZjc3M2ZlZTg0ZTZhODQ1MmU4M2U1NTVkODMwNCk7XHJcblxyXG52YXIgQm9yZGVyXzRiNzhlODQ2NmM3ZTQzOWM5ZGRiYmJmOGExNTNhOTU0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImVsZW1lbnRGb3JMaXN0XCIsIEJvcmRlcl80Yjc4ZTg0NjZjN2U0MzljOWRkYmJiZjhhMTUzYTk1NCk7XHJcbkJvcmRlcl80Yjc4ZTg0NjZjN2U0MzljOWRkYmJiZjhhMTUzYTk1NC5OYW1lID0gXCJlbGVtZW50Rm9yTGlzdFwiO1xyXG5Cb3JkZXJfNGI3OGU4NDY2YzdlNDM5YzlkZGJiYmY4YTE1M2E5NTQuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQm9yZGVyXzRiNzhlODQ2NmM3ZTQzOWM5ZGRiYmJmOGExNTNhOTU0LDApO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oQm9yZGVyXzRiNzhlODQ2NmM3ZTQzOWM5ZGRiYmJmOGExNTNhOTU0LDMpO1xyXG5Cb3JkZXJfNGI3OGU4NDY2YzdlNDM5YzlkZGJiYmY4YTE1M2E5NTQuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDAsIEcgPSAoYnl0ZSkyMDAsIEIgPSAoYnl0ZSkyMDAgfSk7XHJcbkJvcmRlcl80Yjc4ZTg0NjZjN2U0MzljOWRkYmJiZjhhMTUzYTk1NC5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfNGI3OGU4NDY2YzdlNDM5YzlkZGJiYmY4YTE1M2E5NTQuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIEdyaWRfMjc2MDM3MGVhYjA5NGI4Mzg1MGRiNjMwODJjYjFmZDggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF9iMzBkYTZiMzZiZmY0NDk2YjgxY2ZjZDNkZWRmNWJiNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYjMwZGE2YjM2YmZmNDQ5NmI4MWNmY2QzZGVkZjViYjcuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9iMzBkYTZiMzZiZmY0NDk2YjgxY2ZjZDNkZWRmNWJiNy5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfZTEzYmJkNDcyYjlkNGJiMDk1YTFlZTQ1M2E4NTc3MWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9lMTNiYmQ0NzJiOWQ0YmIwOTVhMWVlNDUzYTg1NzcxZS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wX2UxM2JiZDQ3MmI5ZDRiYjA5NWExZWU0NTNhODU3NzFlLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF9hMzNhNGY3Mjg1M2I0YjdjOWMyMmI4ZTJlMzMxYjBiNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wX2EzM2E0ZjcyODUzYjRiN2M5YzIyYjhlMmUzMzFiMGI3LkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfYTMzYTRmNzI4NTNiNGI3YzljMjJiOGUyZTMzMWIwYjcuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoX2IzMGRhNmIzNmJmZjQ0OTZiODFjZmNkM2RlZGY1YmI3LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9lMTNiYmQ0NzJiOWQ0YmIwOTVhMWVlNDUzYTg1NzcxZSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYjMwZGE2YjM2YmZmNDQ5NmI4MWNmY2QzZGVkZjViYjcuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wX2EzM2E0ZjcyODUzYjRiN2M5YzIyYjhlMmUzMzFiMGI3KTtcclxuXHJcblxyXG5HcmlkXzI3NjAzNzBlYWIwOTRiODM4NTBkYjYzMDgyY2IxZmQ4LkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoX2IzMGRhNmIzNmJmZjQ0OTZiODFjZmNkM2RlZGY1YmI3O1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fOTk5OTI4NzVkNTNlNDYwMGFjYmIwNjMwOTJlZjliZjMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNWNiNDc0ZTllM2M5NDFjYmI2MmM2ZWZkZDVjZDc5NDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzVjYjQ3NGU5ZTNjOTQxY2JiNjJjNmVmZGQ1Y2Q3OTQwLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fYzk2NDlkMmFhMDIxNDVmN2IyMzJlN2ZlZjlkMWI2MzEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uX2M5NjQ5ZDJhYTAyMTQ1ZjdiMjMyZTdmZWY5ZDFiNjMxLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fOTgyNjhmMDFhNzVhNGYyNjgzMzA0Y2Y0ZjgwYTFkODQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzk4MjY4ZjAxYTc1YTRmMjY4MzMwNGNmNGY4MGExZDg0LkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMmU4MzFiYWYxYjQxNDg4Zjk5YTczM2U1ZDcxMzliNjYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF8yNzYwMzcwZWFiMDk0YjgzODUwZGI2MzA4MmNiMWZkOC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl85OTk5Mjg3NWQ1M2U0NjAwYWNiYjA2MzA5MmVmOWJmMyk7XHJcbkdyaWRfMjc2MDM3MGVhYjA5NGI4Mzg1MGRiNjMwODJjYjFmZDguUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNWNiNDc0ZTllM2M5NDFjYmI2MmM2ZWZkZDVjZDc5NDApO1xyXG5HcmlkXzI3NjAzNzBlYWIwOTRiODM4NTBkYjYzMDgyY2IxZmQ4LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2M5NjQ5ZDJhYTAyMTQ1ZjdiMjMyZTdmZWY5ZDFiNjMxKTtcclxuR3JpZF8yNzYwMzcwZWFiMDk0YjgzODUwZGI2MzA4MmNiMWZkOC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl85ODI2OGYwMWE3NWE0ZjI2ODMzMDRjZjRmODBhMWQ4NCk7XHJcbkdyaWRfMjc2MDM3MGVhYjA5NGI4Mzg1MGRiNjMwODJjYjFmZDguUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMmU4MzFiYWYxYjQxNDg4Zjk5YTczM2U1ZDcxMzliNjYpO1xyXG5cclxudmFyIEJ1dHRvbl9iNmQ4MDBjMjc4ZDY0ZmRkODFlNzY2ZWI3MTFlZjA0ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2I2ZDgwMGMyNzhkNjRmZGQ4MWU3NjZlYjcxMWVmMDRlLDEpO1xyXG5CdXR0b25fYjZkODAwYzI3OGQ2NGZkZDgxZTc2NmViNzExZWYwNGUuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTAsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbkJ1dHRvbl9iNmQ4MDBjMjc4ZDY0ZmRkODFlNzY2ZWI3MTFlZjA0ZS5Db250ZW50ID0gQFwiSlNPTlwiO1xyXG5CdXR0b25fYjZkODAwYzI3OGQ2NGZkZDgxZTc2NmViNzExZWYwNGUuRm9udFNpemUgPSAyMEQ7XHJcbkJ1dHRvbl9iNmQ4MDBjMjc4ZDY0ZmRkODFlNzY2ZWI3MTFlZjA0ZS5Gb3JlZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5CdXR0b25fYjZkODAwYzI3OGQ2NGZkZDgxZTc2NmViNzExZWYwNGUuQ2xpY2sgKz0gRmlyc3RfQ2xpY2s7XHJcblxyXG52YXIgQnV0dG9uXzk0MGMwYzhmNjBhZDQyMDFhZWYwOWI2MzIwMmNkNjdkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fOTQwYzBjOGY2MGFkNDIwMWFlZjA5YjYzMjAyY2Q2N2QsMik7XHJcbkJ1dHRvbl85NDBjMGM4ZjYwYWQ0MjAxYWVmMDliNjMyMDJjZDY3ZC5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMCwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9KTtcclxuQnV0dG9uXzk0MGMwYzhmNjBhZDQyMDFhZWYwOWI2MzIwMmNkNjdkLkNvbnRlbnQgPSBAXCLQlNC40LDQs9GA0LDQvNC80LAgSURFRjBcIjtcclxuQnV0dG9uXzk0MGMwYzhmNjBhZDQyMDFhZWYwOWI2MzIwMmNkNjdkLkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fOTQwYzBjOGY2MGFkNDIwMWFlZjA5YjYzMjAyY2Q2N2QuRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzk0MGMwYzhmNjBhZDQyMDFhZWYwOWI2MzIwMmNkNjdkLkNsaWNrICs9IFNlY29uZF9DbGljaztcclxuXHJcbnZhciBCdXR0b25fMGM1ZTM5NDQ4MWYwNGEwYjhjMTVkNDA3NzMwNDNmMTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl8wYzVlMzk0NDgxZjA0YTBiOGMxNWQ0MDc3MzA0M2YxMSwzKTtcclxuQnV0dG9uXzBjNWUzOTQ0ODFmMDRhMGI4YzE1ZDQwNzczMDQzZjExLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkwLCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH0pO1xyXG5CdXR0b25fMGM1ZTM5NDQ4MWYwNGEwYjhjMTVkNDA3NzMwNDNmMTEuQ29udGVudCA9IEBcItCU0LjQsNCz0YDQsNC80LzQsCBVTUxcIjtcclxuQnV0dG9uXzBjNWUzOTQ0ODFmMDRhMGI4YzE1ZDQwNzczMDQzZjExLkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fMGM1ZTM5NDQ4MWYwNGEwYjhjMTVkNDA3NzMwNDNmMTEuRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzBjNWUzOTQ0ODFmMDRhMGI4YzE1ZDQwNzczMDQzZjExLkNsaWNrICs9IFRoaXJkX0NsaWNrO1xyXG5cclxuR3JpZF8yNzYwMzcwZWFiMDk0YjgzODUwZGI2MzA4MmNiMWZkOC5DaGlsZHJlbi5BZGQoQnV0dG9uX2I2ZDgwMGMyNzhkNjRmZGQ4MWU3NjZlYjcxMWVmMDRlKTtcclxuR3JpZF8yNzYwMzcwZWFiMDk0YjgzODUwZGI2MzA4MmNiMWZkOC5DaGlsZHJlbi5BZGQoQnV0dG9uXzk0MGMwYzhmNjBhZDQyMDFhZWYwOWI2MzIwMmNkNjdkKTtcclxuR3JpZF8yNzYwMzcwZWFiMDk0YjgzODUwZGI2MzA4MmNiMWZkOC5DaGlsZHJlbi5BZGQoQnV0dG9uXzBjNWUzOTQ0ODFmMDRhMGI4YzE1ZDQwNzczMDQzZjExKTtcclxuXHJcblxyXG5Cb3JkZXJfNGI3OGU4NDY2YzdlNDM5YzlkZGJiYmY4YTE1M2E5NTQuQ2hpbGQgPSBHcmlkXzI3NjAzNzBlYWIwOTRiODM4NTBkYjYzMDgyY2IxZmQ4O1xyXG5cclxuXHJcbnZhciBCb3JkZXJfZDc1MmU0ZTA5NDU4NDA2NWFkYzNhYjU1NDc5ZWViOGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfZDc1MmU0ZTA5NDU4NDA2NWFkYzNhYjU1NDc5ZWViOGUpO1xyXG5Cb3JkZXJfZDc1MmU0ZTA5NDU4NDA2NWFkYzNhYjU1NDc5ZWViOGUuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfZDc1MmU0ZTA5NDU4NDA2NWFkYzNhYjU1NDc5ZWViOGUuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3dTcGFuKEJvcmRlcl9kNzUyZTRlMDk0NTg0MDY1YWRjM2FiNTU0NzllZWI4ZSwzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJvcmRlcl9kNzUyZTRlMDk0NTg0MDY1YWRjM2FiNTU0NzllZWI4ZSwyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQm9yZGVyX2Q3NTJlNGUwOTQ1ODQwNjVhZGMzYWI1NTQ3OWVlYjhlLDEpO1xyXG5Cb3JkZXJfZDc1MmU0ZTA5NDU4NDA2NWFkYzNhYjU1NDc5ZWViOGUuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDAsIEcgPSAoYnl0ZSkyMDAsIEIgPSAoYnl0ZSkyMDAgfSk7XHJcbkJvcmRlcl9kNzUyZTRlMDk0NTg0MDY1YWRjM2FiNTU0NzllZWI4ZS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfZDc1MmU0ZTA5NDU4NDA2NWFkYzNhYjU1NDc5ZWViOGUuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfOWIxMmQ3NzM3ZmI1NDU3MmI5OTYyODE3ZjFjNDU5N2MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzliMTJkNzczN2ZiNTQ1NzJiOTk2MjgxN2YxYzQ1OTdjLkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOWIxMmQ3NzM3ZmI1NDU3MmI5OTYyODE3ZjFjNDU5N2MuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wX2MwMDViYjFkMTVmZTQ4ZDVhMTQ4OWI4ZDdhYjQ2MTc2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfYzAwNWJiMWQxNWZlNDhkNWExNDg5YjhkN2FiNDYxNzYuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF9jMDA1YmIxZDE1ZmU0OGQ1YTE0ODliOGQ3YWI0NjE3Ni5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfOGQ1MzExYzI0OTMzNDRiY2ExMGQ0ZjQyNjcxM2I3YWEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF84ZDUzMTFjMjQ5MzM0NGJjYTEwZDRmNDI2NzEzYjdhYS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wXzhkNTMxMWMyNDkzMzQ0YmNhMTBkNGY0MjY3MTNiN2FhLk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF85YjEyZDc3MzdmYjU0NTcyYjk5NjI4MTdmMWM0NTk3Yy5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfYzAwNWJiMWQxNWZlNDhkNWExNDg5YjhkN2FiNDYxNzYpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzliMTJkNzczN2ZiNTQ1NzJiOTk2MjgxN2YxYzQ1OTdjLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF84ZDUzMTFjMjQ5MzM0NGJjYTEwZDRmNDI2NzEzYjdhYSk7XHJcblxyXG5cclxuQm9yZGVyX2Q3NTJlNGUwOTQ1ODQwNjVhZGMzYWI1NTQ3OWVlYjhlLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzliMTJkNzczN2ZiNTQ1NzJiOTk2MjgxN2YxYzQ1OTdjO1xyXG5cclxudmFyIEdyaWRfNGZkZTA0ZjRmYjFhNDgzNmExNjk2YzU2MTAxZTNiZjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dEdyaWRcIiwgR3JpZF80ZmRlMDRmNGZiMWE0ODM2YTE2OTZjNTYxMDFlM2JmNCk7XHJcbkdyaWRfNGZkZTA0ZjRmYjFhNDgzNmExNjk2YzU2MTAxZTNiZjQuTmFtZSA9IFwiTGF5b3V0R3JpZFwiO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF85ZDE5ODUzN2VmZjU0OTM2YmVkNTQ1NjFmMjk4ZTZkNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOWQxOTg1MzdlZmY1NDkzNmJlZDU0NTYxZjI5OGU2ZDQuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF85ZDE5ODUzN2VmZjU0OTM2YmVkNTQ1NjFmMjk4ZTZkNC5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfOTU5M2U2YTM5Zjk1NGZkMGFhNjE3MzA3ODk0ODI4OTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF85NTkzZTZhMzlmOTU0ZmQwYWE2MTczMDc4OTQ4Mjg5NC5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzk1OTNlNmEzOWY5NTRmZDBhYTYxNzMwNzg5NDgyODk0Lk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF81NDhmYWUwMzFjMTI0YTQ2YWY5MWU1MGNmN2M4ZDBjYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzU0OGZhZTAzMWMxMjRhNDZhZjkxZTUwY2Y3YzhkMGNjLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfNTQ4ZmFlMDMxYzEyNGE0NmFmOTFlNTBjZjdjOGQwY2MuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoXzlkMTk4NTM3ZWZmNTQ5MzZiZWQ1NDU2MWYyOThlNmQ0LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF85NTkzZTZhMzlmOTU0ZmQwYWE2MTczMDc4OTQ4Mjg5NCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOWQxOTg1MzdlZmY1NDkzNmJlZDU0NTYxZjI5OGU2ZDQuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzU0OGZhZTAzMWMxMjRhNDZhZjkxZTUwY2Y3YzhkMGNjKTtcclxuXHJcblxyXG5HcmlkXzRmZGUwNGY0ZmIxYTQ4MzZhMTY5NmM1NjEwMWUzYmY0LkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzlkMTk4NTM3ZWZmNTQ5MzZiZWQ1NDU2MWYyOThlNmQ0O1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNzk3YTA1NTk2ODUwNDU0ZWI4NTgxYWE5MGM0Y2JkZTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzc5N2EwNTU5Njg1MDQ1NGViODU4MWFhOTBjNGNiZGUyLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzc5YWJlZmJhZDU3NDRhYzI5YjQ1ZTViMzBhOGFlNjA5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl83OWFiZWZiYWQ1NzQ0YWMyOWI0NWU1YjMwYThhZTYwOS5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzc0ZDQwNWI1OGQwNjQxODI5YWRkYjBlMWU4OTA4NTcwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl83NGQ0MDViNThkMDY0MTgyOWFkZGIwZTFlODkwODU3MC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkXzRmZGUwNGY0ZmIxYTQ4MzZhMTY5NmM1NjEwMWUzYmY0LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzc5N2EwNTU5Njg1MDQ1NGViODU4MWFhOTBjNGNiZGUyKTtcclxuR3JpZF80ZmRlMDRmNGZiMWE0ODM2YTE2OTZjNTYxMDFlM2JmNC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl83OWFiZWZiYWQ1NzQ0YWMyOWI0NWU1YjMwYThhZTYwOSk7XHJcbkdyaWRfNGZkZTA0ZjRmYjFhNDgzNmExNjk2YzU2MTAxZTNiZjQuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNzRkNDA1YjU4ZDA2NDE4MjlhZGRiMGUxZTg5MDg1NzApO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fYTA0NjU4MTNlNjRmNDFiMWFlYTYzMDI5YjRkZjJjYmUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMzlmMjZjNGM1NmJlNGRkMWIxZjMyNjM1NTljODU1NDUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF80ZmRlMDRmNGZiMWE0ODM2YTE2OTZjNTYxMDFlM2JmNC5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl9hMDQ2NTgxM2U2NGY0MWIxYWVhNjMwMjliNGRmMmNiZSk7XHJcbkdyaWRfNGZkZTA0ZjRmYjFhNDgzNmExNjk2YzU2MTAxZTNiZjQuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fMzlmMjZjNGM1NmJlNGRkMWIxZjMyNjM1NTljODU1NDUpO1xyXG5cclxudmFyIEJ1dHRvbl80NmM2ZGM5ZWMyNjk0MTI4OTU2YzFiNjBlYTEyZDc5MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5DYW5jZWxcIiwgQnV0dG9uXzQ2YzZkYzllYzI2OTQxMjg5NTZjMWI2MGVhMTJkNzkzKTtcclxuQnV0dG9uXzQ2YzZkYzllYzI2OTQxMjg5NTZjMWI2MGVhMTJkNzkzLk5hbWUgPSBcImJ0bkNhbmNlbFwiO1xyXG5CdXR0b25fNDZjNmRjOWVjMjY5NDEyODk1NmMxYjYwZWExMmQ3OTMuQ29udGVudCA9IEBcItCS0LXRgNC90YPRgtGM0YHRjyDQvdCwINCz0LvQsNCy0L3Rg9GOXCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl80NmM2ZGM5ZWMyNjk0MTI4OTU2YzFiNjBlYTEyZDc5MywyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJ1dHRvbl80NmM2ZGM5ZWMyNjk0MTI4OTU2YzFiNjBlYTEyZDc5MywyKTtcclxuQnV0dG9uXzQ2YzZkYzllYzI2OTQxMjg5NTZjMWI2MGVhMTJkNzkzLldpZHRoID0gMjgwRDtcclxuQnV0dG9uXzQ2YzZkYzllYzI2OTQxMjg5NTZjMWI2MGVhMTJkNzkzLkhlaWdodCA9IDUwRDtcclxuQnV0dG9uXzQ2YzZkYzllYzI2OTQxMjg5NTZjMWI2MGVhMTJkNzkzLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyMzgsIEIgPSAoYnl0ZSkyMzggfSk7XHJcbkJ1dHRvbl80NmM2ZGM5ZWMyNjk0MTI4OTU2YzFiNjBlYTEyZDc5My5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uXzQ2YzZkYzllYzI2OTQxMjg5NTZjMWI2MGVhMTJkNzkzLkNsaWNrICs9IEJ1dHRvbl9DbGljaztcclxuQnV0dG9uXzQ2YzZkYzllYzI2OTQxMjg5NTZjMWI2MGVhMTJkNzkzLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl80NmM2ZGM5ZWMyNjk0MTI4OTU2YzFiNjBlYTEyZDc5My5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfZTI3YWQ3OWJkMjMzNGFjMDk3YjQ1MmFjMmE5NjE2OTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV9lMjdhZDc5YmQyMzM0YWMwOTdiNDUyYWMyYTk2MTY5Ni5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV9lMjdhZDc5YmQyMzM0YWMwOTdiNDUyYWMyYTk2MTY5Ni5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV9lMjdhZDc5YmQyMzM0YWMwOTdiNDUyYWMyYTk2MTY5Nik7XHJcblxyXG5CdXR0b25fNDZjNmRjOWVjMjY5NDEyODk1NmMxYjYwZWExMmQ3OTMuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfZTI3YWQ3OWJkMjMzNGFjMDk3YjQ1MmFjMmE5NjE2OTY7XHJcblxyXG5cclxudmFyIEJ1dHRvbl81ODhkOTEwYzcwM2Y0MTljYTYxMTQ5ZDQ1ZDJkMjIyMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5VcGxvYWRcIiwgQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzKTtcclxuQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzLk5hbWUgPSBcImJ0blVwbG9hZFwiO1xyXG5CdXR0b25fNTg4ZDkxMGM3MDNmNDE5Y2E2MTE0OWQ0NWQyZDIyMjMuQ29udGVudCA9IEBcItCX0LDQs9GA0YPQt9C40YLRjCBKU09OINGE0LDQudC7XCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl81ODhkOTEwYzcwM2Y0MTljYTYxMTQ5ZDQ1ZDJkMjIyMywwKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJ1dHRvbl81ODhkOTEwYzcwM2Y0MTljYTYxMTQ5ZDQ1ZDJkMjIyMywxKTtcclxuQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzLldpZHRoID0gMjgwRDtcclxuQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzLkhlaWdodCA9IDUwRDtcclxuQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNDksIEcgPSAoYnl0ZSkyMjIsIEIgPSAoYnl0ZSkyNDIgfSk7XHJcbkJ1dHRvbl81ODhkOTEwYzcwM2Y0MTljYTYxMTQ5ZDQ1ZDJkMjIyMy5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzLkNsaWNrICs9IEJ0blVwbG9hZF9DbGljaztcclxuQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl81ODhkOTEwYzcwM2Y0MTljYTYxMTQ5ZDQ1ZDJkMjIyMy5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl81ODhkOTEwYzcwM2Y0MTljYTYxMTQ5ZDQ1ZDJkMjIyMy5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG52YXIgQ29udHJvbFRlbXBsYXRlXzEzNGFlMDNjYjY2MzQwNTJhYjBkNGExMGM3NWYyOWE1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2xUZW1wbGF0ZSgpO1xyXG5Db250cm9sVGVtcGxhdGVfMTM0YWUwM2NiNjYzNDA1MmFiMGQ0YTEwYzc1ZjI5YTUuVGFyZ2V0VHlwZSA9IHR5cGVvZihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24pO1xyXG5Db250cm9sVGVtcGxhdGVfMTM0YWUwM2NiNjYzNDA1MmFiMGQ0YTEwYzc1ZjI5YTUuU2V0TWV0aG9kVG9JbnN0YW50aWF0ZUZyYW1ld29ya1RlbXBsYXRlKChTeXN0ZW0uRnVuYzxXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCxXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZT4pdGhpcy5JbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfMTM0YWUwM2NiNjYzNDA1MmFiMGQ0YTEwYzc1ZjI5YTUpO1xyXG5cclxuQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzLlRlbXBsYXRlID0gQ29udHJvbFRlbXBsYXRlXzEzNGFlMDNjYjY2MzQwNTJhYjBkNGExMGM3NWYyOWE1O1xyXG5cclxuXHJcbnZhciBCdXR0b25fYzg0YzZiYzFiNjQ2NDM0N2ExMWQzNDI3OTRlNGVlOWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuUHJvY2Vzc2luZ1wiLCBCdXR0b25fYzg0YzZiYzFiNjQ2NDM0N2ExMWQzNDI3OTRlNGVlOWIpO1xyXG5CdXR0b25fYzg0YzZiYzFiNjQ2NDM0N2ExMWQzNDI3OTRlNGVlOWIuTmFtZSA9IFwiYnRuUHJvY2Vzc2luZ1wiO1xyXG5CdXR0b25fYzg0YzZiYzFiNjQ2NDM0N2ExMWQzNDI3OTRlNGVlOWIuQ29udGVudCA9IEBcItCf0L7RgdGC0YDQvtC40YLRjCDQtNC40LDQs9GA0LDQvNC80YNcIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2M4NGM2YmMxYjY0NjQzNDdhMTFkMzQyNzk0ZTRlZTliLDApO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCdXR0b25fYzg0YzZiYzFiNjQ2NDM0N2ExMWQzNDI3OTRlNGVlOWIsMSk7XHJcbkJ1dHRvbl9jODRjNmJjMWI2NDY0MzQ3YTExZDM0Mjc5NGU0ZWU5Yi5XaWR0aCA9IDI4MEQ7XHJcbkJ1dHRvbl9jODRjNmJjMWI2NDY0MzQ3YTExZDM0Mjc5NGU0ZWU5Yi5IZWlnaHQgPSA1MEQ7XHJcbkJ1dHRvbl9jODRjNmJjMWI2NDY0MzQ3YTExZDM0Mjc5NGU0ZWU5Yi5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH0pO1xyXG5CdXR0b25fYzg0YzZiYzFiNjQ2NDM0N2ExMWQzNDI3OTRlNGVlOWIuRm9udFNpemUgPSAyNUQ7XHJcbkJ1dHRvbl9jODRjNmJjMWI2NDY0MzQ3YTExZDM0Mjc5NGU0ZWU5Yi5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5CdXR0b25fYzg0YzZiYzFiNjQ2NDM0N2ExMWQzNDI3OTRlNGVlOWIuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbkJ1dHRvbl9jODRjNmJjMWI2NDY0MzQ3YTExZDM0Mjc5NGU0ZWU5Yi5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uX2M4NGM2YmMxYjY0NjQzNDdhMTFkMzQyNzk0ZTRlZTliLkhvcml6b250YWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uX2M4NGM2YmMxYjY0NjQzNDdhMTFkMzQyNzk0ZTRlZTliLkNsaWNrICs9IEJ0blByb2Nlc3NpbmdfQ2xpY2s7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfNGQ1YTkzMmFlMjc0NDU5YmEyMjdiMGVkZWU1OTM1YjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV80ZDVhOTMyYWUyNzQ0NTliYTIyN2IwZWRlZTU5MzViNS5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV80ZDVhOTMyYWUyNzQ0NTliYTIyN2IwZWRlZTU5MzViNS5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV80ZDVhOTMyYWUyNzQ0NTliYTIyN2IwZWRlZTU5MzViNSk7XHJcblxyXG5CdXR0b25fYzg0YzZiYzFiNjQ2NDM0N2ExMWQzNDI3OTRlNGVlOWIuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfNGQ1YTkzMmFlMjc0NDU5YmEyMjdiMGVkZWU1OTM1YjU7XHJcblxyXG5cclxudmFyIFRleHRCb3hfNmViYWZhM2FlOGNjNDE0ZjkwNDRiNTNlNzg5ODdjOWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuVGV4dEJveCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcInR4dEZpbGVcIiwgVGV4dEJveF82ZWJhZmEzYWU4Y2M0MTRmOTA0NGI1M2U3ODk4N2M5Yyk7XHJcblRleHRCb3hfNmViYWZhM2FlOGNjNDE0ZjkwNDRiNTNlNzg5ODdjOWMuTmFtZSA9IFwidHh0RmlsZVwiO1xyXG5UZXh0Qm94XzZlYmFmYTNhZThjYzQxNGY5MDQ0YjUzZTc4OTg3YzljLlRleHRXcmFwcGluZyA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRleHRXcmFwcGluZy5XcmFwO1xyXG5UZXh0Qm94XzZlYmFmYTNhZThjYzQxNGY5MDQ0YjUzZTc4OTg3YzljLlRleHQgPSBAXCJcIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coVGV4dEJveF82ZWJhZmEzYWU4Y2M0MTRmOTA0NGI1M2U3ODk4N2M5YywxKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKFRleHRCb3hfNmViYWZhM2FlOGNjNDE0ZjkwNDRiNTNlNzg5ODdjOWMsMik7XHJcblRleHRCb3hfNmViYWZhM2FlOGNjNDE0ZjkwNDRiNTNlNzg5ODdjOWMuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxMCwgLTIwLCAxMCwgLTIwKTtcclxuVGV4dEJveF82ZWJhZmEzYWU4Y2M0MTRmOTA0NGI1M2U3ODk4N2M5Yy5Gb250U2l6ZSA9IDIwRDtcclxuXHJcbnZhciBCb3JkZXJfYzA2ZWRkODU3YWUwNGRmMWFlMzEzYTM0N2U1OTU3ZGEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYm9yZGVySURFRlwiLCBCb3JkZXJfYzA2ZWRkODU3YWUwNGRmMWFlMzEzYTM0N2U1OTU3ZGEpO1xyXG5Cb3JkZXJfYzA2ZWRkODU3YWUwNGRmMWFlMzEzYTM0N2U1OTU3ZGEuTmFtZSA9IFwiYm9yZGVySURFRlwiO1xyXG5Cb3JkZXJfYzA2ZWRkODU3YWUwNGRmMWFlMzEzYTM0N2U1OTU3ZGEuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQm9yZGVyX2MwNmVkZDg1N2FlMDRkZjFhZTMxM2EzNDdlNTk1N2RhLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfYzA2ZWRkODU3YWUwNGRmMWFlMzEzYTM0N2U1OTU3ZGEsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihCb3JkZXJfYzA2ZWRkODU3YWUwNGRmMWFlMzEzYTM0N2U1OTU3ZGEsMyk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCb3JkZXJfYzA2ZWRkODU3YWUwNGRmMWFlMzEzYTM0N2U1OTU3ZGEsMik7XHJcbkJvcmRlcl9jMDZlZGQ4NTdhZTA0ZGYxYWUzMTNhMzQ3ZTU5NTdkYS5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEwKTtcclxuQm9yZGVyX2MwNmVkZDg1N2FlMDRkZjFhZTMxM2EzNDdlNTk1N2RhLlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuQm9yZGVyX2MwNmVkZDg1N2FlMDRkZjFhZTMxM2EzNDdlNTk1N2RhLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbkJvcmRlcl9jMDZlZGQ4NTdhZTA0ZGYxYWUzMTNhMzQ3ZTU5NTdkYS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjA0LCBHID0gKGJ5dGUpMjA0LCBCID0gKGJ5dGUpMjA0IH0pO1xyXG52YXIgSW1hZ2VfNTRkZjMxMjUyNTdlNDBhMTk2ZTdhMTI5MmZmMDI2NDUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJuaWdhSURFRl9KcGVnXCIsIEltYWdlXzU0ZGYzMTI1MjU3ZTQwYTE5NmU3YTEyOTJmZjAyNjQ1KTtcclxuSW1hZ2VfNTRkZjMxMjUyNTdlNDBhMTk2ZTdhMTI5MmZmMDI2NDUuTmFtZSA9IFwibmlnYUlERUZfSnBlZ1wiO1xyXG5JbWFnZV81NGRmMzEyNTI1N2U0MGExOTZlN2ExMjkyZmYwMjY0NS5TdHJldGNoID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU3RyZXRjaC5GaWxsO1xyXG5JbWFnZV81NGRmMzEyNTI1N2U0MGExOTZlN2ExMjkyZmYwMjY0NS5WaXNpYmlsaXR5ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcblxyXG5Cb3JkZXJfYzA2ZWRkODU3YWUwNGRmMWFlMzEzYTM0N2U1OTU3ZGEuQ2hpbGQgPSBJbWFnZV81NGRmMzEyNTI1N2U0MGExOTZlN2ExMjkyZmYwMjY0NTtcclxuXHJcblxyXG52YXIgQm9yZGVyXzBhOTY0N2I3YTIyNzQ5MGU4NmMxNzZlNDFkMmYwODUwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJvcmRlclVNTFwiLCBCb3JkZXJfMGE5NjQ3YjdhMjI3NDkwZTg2YzE3NmU0MWQyZjA4NTApO1xyXG5Cb3JkZXJfMGE5NjQ3YjdhMjI3NDkwZTg2YzE3NmU0MWQyZjA4NTAuTmFtZSA9IFwiYm9yZGVyVU1MXCI7XHJcbkJvcmRlcl8wYTk2NDdiN2EyMjc0OTBlODZjMTc2ZTQxZDJmMDg1MC5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5Cb3JkZXJfMGE5NjQ3YjdhMjI3NDkwZTg2YzE3NmU0MWQyZjA4NTAuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJvcmRlcl8wYTk2NDdiN2EyMjc0OTBlODZjMTc2ZTQxZDJmMDg1MCwwKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3dTcGFuKEJvcmRlcl8wYTk2NDdiN2EyMjc0OTBlODZjMTc2ZTQxZDJmMDg1MCwzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJvcmRlcl8wYTk2NDdiN2EyMjc0OTBlODZjMTc2ZTQxZDJmMDg1MCwyKTtcclxuQm9yZGVyXzBhOTY0N2I3YTIyNzQ5MGU4NmMxNzZlNDFkMmYwODUwLk1hcmdpbiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMTApO1xyXG5Cb3JkZXJfMGE5NjQ3YjdhMjI3NDkwZTg2YzE3NmU0MWQyZjA4NTAuVmlzaWJpbGl0eSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5Cb3JkZXJfMGE5NjQ3YjdhMjI3NDkwZTg2YzE3NmU0MWQyZjA4NTAuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxuQm9yZGVyXzBhOTY0N2I3YTIyNzQ5MGU4NmMxNzZlNDFkMmYwODUwLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDQsIEcgPSAoYnl0ZSkyMDQsIEIgPSAoYnl0ZSkyMDQgfSk7XHJcbnZhciBJbWFnZV8wZDA3OGYzYjNhNDY0YzI3YTA1MjkxOTM5MzVjOTI4YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5JbWFnZSgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIm5pZ2FVTUxfSnBlZ1wiLCBJbWFnZV8wZDA3OGYzYjNhNDY0YzI3YTA1MjkxOTM5MzVjOTI4YSk7XHJcbkltYWdlXzBkMDc4ZjNiM2E0NjRjMjdhMDUyOTE5MzkzNWM5MjhhLk5hbWUgPSBcIm5pZ2FVTUxfSnBlZ1wiO1xyXG5JbWFnZV8wZDA3OGYzYjNhNDY0YzI3YTA1MjkxOTM5MzVjOTI4YS5TdHJldGNoID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU3RyZXRjaC5GaWxsO1xyXG5JbWFnZV8wZDA3OGYzYjNhNDY0YzI3YTA1MjkxOTM5MzVjOTI4YS5WaXNpYmlsaXR5ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcblxyXG5Cb3JkZXJfMGE5NjQ3YjdhMjI3NDkwZTg2YzE3NmU0MWQyZjA4NTAuQ2hpbGQgPSBJbWFnZV8wZDA3OGYzYjNhNDY0YzI3YTA1MjkxOTM5MzVjOTI4YTtcclxuXHJcblxyXG5HcmlkXzRmZGUwNGY0ZmIxYTQ4MzZhMTY5NmM1NjEwMWUzYmY0LkNoaWxkcmVuLkFkZChCdXR0b25fNDZjNmRjOWVjMjY5NDEyODk1NmMxYjYwZWExMmQ3OTMpO1xyXG5HcmlkXzRmZGUwNGY0ZmIxYTQ4MzZhMTY5NmM1NjEwMWUzYmY0LkNoaWxkcmVuLkFkZChCdXR0b25fNTg4ZDkxMGM3MDNmNDE5Y2E2MTE0OWQ0NWQyZDIyMjMpO1xyXG5HcmlkXzRmZGUwNGY0ZmIxYTQ4MzZhMTY5NmM1NjEwMWUzYmY0LkNoaWxkcmVuLkFkZChCdXR0b25fYzg0YzZiYzFiNjQ2NDM0N2ExMWQzNDI3OTRlNGVlOWIpO1xyXG5HcmlkXzRmZGUwNGY0ZmIxYTQ4MzZhMTY5NmM1NjEwMWUzYmY0LkNoaWxkcmVuLkFkZChUZXh0Qm94XzZlYmFmYTNhZThjYzQxNGY5MDQ0YjUzZTc4OTg3YzljKTtcclxuR3JpZF80ZmRlMDRmNGZiMWE0ODM2YTE2OTZjNTYxMDFlM2JmNC5DaGlsZHJlbi5BZGQoQm9yZGVyX2MwNmVkZDg1N2FlMDRkZjFhZTMxM2EzNDdlNTk1N2RhKTtcclxuR3JpZF80ZmRlMDRmNGZiMWE0ODM2YTE2OTZjNTYxMDFlM2JmNC5DaGlsZHJlbi5BZGQoQm9yZGVyXzBhOTY0N2I3YTIyNzQ5MGU4NmMxNzZlNDFkMmYwODUwKTtcclxuXHJcblxyXG5Cb3JkZXJfZDc1MmU0ZTA5NDU4NDA2NWFkYzNhYjU1NDc5ZWViOGUuQ2hpbGQgPSBHcmlkXzRmZGUwNGY0ZmIxYTQ4MzZhMTY5NmM1NjEwMWUzYmY0O1xyXG5cclxuXHJcbkdyaWRfNzViOWUzZDk0YTMxNDVjY2FkM2NlMzJmMzAyODU2ODMuQ2hpbGRyZW4uQWRkKEJvcmRlcl80Yjc4ZTg0NjZjN2U0MzljOWRkYmJiZjhhMTUzYTk1NCk7XHJcbkdyaWRfNzViOWUzZDk0YTMxNDVjY2FkM2NlMzJmMzAyODU2ODMuQ2hpbGRyZW4uQWRkKEJvcmRlcl9kNzUyZTRlMDk0NTg0MDY1YWRjM2FiNTU0NzllZWI4ZSk7XHJcblxyXG5cclxudGhpcy5Db250ZW50ID0gR3JpZF83NWI5ZTNkOTRhMzE0NWNjYWQzY2UzMmYzMDI4NTY4MztcclxuXHJcblxyXG5cclxuZWxlbWVudEZvckxpc3QgPSBCb3JkZXJfNGI3OGU4NDY2YzdlNDM5YzlkZGJiYmY4YTE1M2E5NTQ7XHJcbmJ0bkNhbmNlbCA9IEJ1dHRvbl80NmM2ZGM5ZWMyNjk0MTI4OTU2YzFiNjBlYTEyZDc5MztcclxuYnRuVXBsb2FkID0gQnV0dG9uXzU4OGQ5MTBjNzAzZjQxOWNhNjExNDlkNDVkMmQyMjIzO1xyXG5idG5Qcm9jZXNzaW5nID0gQnV0dG9uX2M4NGM2YmMxYjY0NjQzNDdhMTFkMzQyNzk0ZTRlZTliO1xyXG50eHRGaWxlID0gVGV4dEJveF82ZWJhZmEzYWU4Y2M0MTRmOTA0NGI1M2U3ODk4N2M5YztcclxubmlnYUlERUZfSnBlZyA9IEltYWdlXzU0ZGYzMTI1MjU3ZTQwYTE5NmU3YTEyOTJmZjAyNjQ1O1xyXG5ib3JkZXJJREVGID0gQm9yZGVyX2MwNmVkZDg1N2FlMDRkZjFhZTMxM2EzNDdlNTk1N2RhO1xyXG5uaWdhVU1MX0pwZWcgPSBJbWFnZV8wZDA3OGYzYjNhNDY0YzI3YTA1MjkxOTM5MzVjOTI4YTtcclxuYm9yZGVyVU1MID0gQm9yZGVyXzBhOTY0N2I3YTIyNzQ5MGU4NmMxNzZlNDFkMmYwODUwO1xyXG5MYXlvdXRHcmlkID0gR3JpZF80ZmRlMDRmNGZiMWE0ODM2YTE2OTZjNTYxMDFlM2JmNDtcclxuZWxlbWVudCA9IEJvcmRlcl9kNzUyZTRlMDk0NTg0MDY1YWRjM2FiNTU0NzllZWI4ZTtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzY0MjFiNTVkMjVmMjQyMWZiOWE5OTczMGY4M2Y0MWJiIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNjQyMWI1NWQyNWYyNDIxZmI5YTk5NzMwZjgzZjQxYmIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV82NDIxYjU1ZDI1ZjI0MjFmYjlhOTk3MzBmODNmNDFiYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzY0MjFiNTVkMjVmMjQyMWZiOWE5OTczMGY4M2Y0MWJiIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV82NDIxYjU1ZDI1ZjI0MjFmYjlhOTk3MzBmODNmNDFiYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMGZkMGY4NDlhMmFjNGMwOGIzZWNjMDVlOTIwZWUxMDggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wZmQwZjg0OWEyYWM0YzA4YjNlY2MwNWU5MjBlZTEwOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzBmZDBmODQ5YTJhYzRjMDhiM2VjYzA1ZTkyMGVlMTA4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMGZkMGY4NDlhMmFjNGMwOGIzZWNjMDVlOTIwZWUxMDggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzBmZDBmODQ5YTJhYzRjMDhiM2VjYzA1ZTkyMGVlMTA4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8xMGNkZWQ4Yzc4Mzk0OTc2YjZhN2EyZjRjZTA2NGY2YSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzEwY2RlZDhjNzgzOTQ5NzZiNmE3YTJmNGNlMDY0ZjZhIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMTBjZGVkOGM3ODM5NDk3NmI2YTdhMmY0Y2UwNjRmNmEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8xMGNkZWQ4Yzc4Mzk0OTc2YjZhN2EyZjRjZTA2NGY2YSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMTBjZGVkOGM3ODM5NDk3NmI2YTdhMmY0Y2UwNjRmNmEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfZTI3YWQ3OWJkMjMzNGFjMDk3YjQ1MmFjMmE5NjE2OTYoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfYzU2ODM0NDU5OTI2NDk0MTgzMTkwNjg5Y2FmMGI0NzkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlX2M1NjgzNDQ1OTkyNjQ5NDE4MzE5MDY4OWNhZjBiNDc5LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyX2IyODk3NTM2N2JjMTQzNWI4ZTM3YjRiNTdhYjlkNjhmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl9iMjg5NzUzNjdiYzE0MzViOGUzN2I0YjU3YWI5ZDY4Zik7XHJcbkJvcmRlcl9iMjg5NzUzNjdiYzE0MzViOGUzN2I0YjU3YWI5ZDY4Zi5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfYjI4OTc1MzY3YmMxNDM1YjhlMzdiNGI1N2FiOWQ2OGYuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfZDVlMWUxYWNkMTA1NDA2MjlmYTkyMDcxZmFkY2Y5YmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwX2Q1ZTFlMWFjZDEwNTQwNjI5ZmE5MjA3MWZhZGNmOWJhKTtcclxuVmlzdWFsU3RhdGVHcm91cF9kNWUxZTFhY2QxMDU0MDYyOWZhOTIwNzFmYWRjZjliYS5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzI2NjYyZTk5NjVjZjQ2NGVhNTlhMGQxNWEyODZhNGI0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzI2NjYyZTk5NjVjZjQ2NGVhNTlhMGQxNWEyODZhNGI0KTtcclxuVmlzdWFsU3RhdGVfMjY2NjJlOTk2NWNmNDY0ZWE1OWEwZDE1YTI4NmE0YjQuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZTNhYzJhNDU1OTgxNGFlMmFhOTEyOGI3ZDFhNTJmNDcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV9lM2FjMmE0NTU5ODE0YWUyYWE5MTI4YjdkMWE1MmY0Nyk7XHJcblZpc3VhbFN0YXRlX2UzYWMyYTQ1NTk4MTRhZTJhYTkxMjhiN2QxYTUyZjQ3Lk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzEzODdiMzVlOTRmMTQ2YjViYTg2NmU2OTNmMzdiMzM5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18wZmQ2NmZiNjFkMGQ0NzFmYjFhZGQ5NjcwMmM2Zjc4YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18wZmQ2NmZiNjFkMGQ0NzFmYjFhZGQ5NjcwMmM2Zjc4YSxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjQ4MGEzMGYxZTM5NDAyNTg2YTVjZjAxMzA2M2NiYTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82NDgwYTMwZjFlMzk0MDI1ODZhNWNmMDEzMDYzY2JhNC5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzY0ODBhMzBmMWUzOTQwMjU4NmE1Y2YwMTMwNjNjYmE0LlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18wZmQ2NmZiNjFkMGQ0NzFmYjFhZGQ5NjcwMmM2Zjc4YS5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjQ4MGEzMGYxZTM5NDAyNTg2YTVjZjAxMzA2M2NiYTQpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMTM4N2IzNWU5NGYxNDZiNWJhODY2ZTY5M2YzN2IzMzkuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzBmZDY2ZmI2MWQwZDQ3MWZiMWFkZDk2NzAyYzZmNzhhKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9lM2FjMmE0NTU5ODE0YWUyYWE5MTI4YjdkMWE1MmY0Ny5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8xMzg3YjM1ZTk0ZjE0NmI1YmE4NjZlNjkzZjM3YjMzOTtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZjQxOTc3NmNmZmUzNDdlYzk5ZjRjNzlhNzg4YTJlODUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlX2Y0MTk3NzZjZmZlMzQ3ZWM5OWY0Yzc5YTc4OGEyZTg1KTtcclxuVmlzdWFsU3RhdGVfZjQxOTc3NmNmZmUzNDdlYzk5ZjRjNzlhNzg4YTJlODUuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF80YzU4NzhhOTMzMjI0Yzk2YjljZGU5YmNkZDQyZTM4MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGViZjUyNjI4ZDFmNGRiMWFkM2YzYTcyYTcyN2I4YTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGViZjUyNjI4ZDFmNGRiMWFkM2YzYTcyYTcyN2I4YTksQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzBjMjExYzgxMzg3YjQ1YzE4ZjNmZTkwZmNmMjY4ZTNiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMGMyMTFjODEzODdiNDVjMThmM2ZlOTBmY2YyNjhlM2IuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wYzIxMWM4MTM4N2I0NWMxOGYzZmU5MGZjZjI2OGUzYi5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGViZjUyNjI4ZDFmNGRiMWFkM2YzYTcyYTcyN2I4YTkuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzBjMjExYzgxMzg3YjQ1YzE4ZjNmZTkwZmNmMjY4ZTNiKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzRjNTg3OGE5MzMyMjRjOTZiOWNkZTliY2RkNDJlMzgyLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180ZWJmNTI2MjhkMWY0ZGIxYWQzZjNhNzJhNzI3YjhhOSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfZjQxOTc3NmNmZmUzNDdlYzk5ZjRjNzlhNzg4YTJlODUuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfNGM1ODc4YTkzMzIyNGM5NmI5Y2RlOWJjZGQ0MmUzODI7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzNlYTQwYmRmN2JhNDQwMmZhNWMxZWI0NGRlYzkwYTEyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfM2VhNDBiZGY3YmE0NDAyZmE1YzFlYjQ0ZGVjOTBhMTIpO1xyXG5WaXN1YWxTdGF0ZV8zZWE0MGJkZjdiYTQ0MDJmYTVjMWViNDRkZWM5MGExMi5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9lZTcwMDNmZjk4MjQ0NjZiODFhMmRmYTE3MzU2YTY3OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYzU0YzdjYjkwYmU0NDMwOGFiM2IxNTlhNWVlZDY5ZWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYzU0YzdjYjkwYmU0NDMwOGFiM2IxNTlhNWVlZDY5ZWQsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzNiMTA2YzZiMzJhYTRiNDQ5YTg4NWI1YWM1NDEyNDQ4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfM2IxMDZjNmIzMmFhNGI0NDlhODg1YjVhYzU0MTI0NDguS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8zYjEwNmM2YjMyYWE0YjQ0OWE4ODViNWFjNTQxMjQ0OC5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYzU0YzdjYjkwYmU0NDMwOGFiM2IxNTlhNWVlZDY5ZWQuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzNiMTA2YzZiMzJhYTRiNDQ5YTg4NWI1YWM1NDEyNDQ4KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2VlNzAwM2ZmOTgyNDQ2NmI4MWEyZGZhMTczNTZhNjc5LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jNTRjN2NiOTBiZTQ0MzA4YWIzYjE1OWE1ZWVkNjllZCk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfM2VhNDBiZGY3YmE0NDAyZmE1YzFlYjQ0ZGVjOTBhMTIuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZWU3MDAzZmY5ODI0NDY2YjgxYTJkZmExNzM1NmE2Nzk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF9kNWUxZTFhY2QxMDU0MDYyOWZhOTIwNzFmYWRjZjliYS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzI2NjYyZTk5NjVjZjQ2NGVhNTlhMGQxNWEyODZhNGI0KTtcclxuVmlzdWFsU3RhdGVHcm91cF9kNWUxZTFhY2QxMDU0MDYyOWZhOTIwNzFmYWRjZjliYS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2UzYWMyYTQ1NTk4MTRhZTJhYTkxMjhiN2QxYTUyZjQ3KTtcclxuVmlzdWFsU3RhdGVHcm91cF9kNWUxZTFhY2QxMDU0MDYyOWZhOTIwNzFmYWRjZjliYS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2Y0MTk3NzZjZmZlMzQ3ZWM5OWY0Yzc5YTc4OGEyZTg1KTtcclxuVmlzdWFsU3RhdGVHcm91cF9kNWUxZTFhY2QxMDU0MDYyOWZhOTIwNzFmYWRjZjliYS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzNlYTQwYmRmN2JhNDQwMmZhNWMxZWI0NGRlYzkwYTEyKTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfZDVlMWUxYWNkMTA1NDA2MjlmYTkyMDcxZmFkY2Y5YmEpO1xyXG5cclxudmFyIEJvcmRlcl82M2FmN2U4ZGM1Yjk0YTVlOGIyMWQ1ZjY0MTk4NjNiZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfNjNhZjdlOGRjNWI5NGE1ZThiMjFkNWY2NDE5ODYzYmUpO1xyXG5Cb3JkZXJfNjNhZjdlOGRjNWI5NGE1ZThiMjFkNWY2NDE5ODYzYmUuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyXzYzYWY3ZThkYzViOTRhNWU4YjIxZDVmNjQxOTg2M2JlLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyXzNkNDVlMzliODBjNTQ0YmU4MzE5YWQxYWM1OGEzMThkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfM2Q0NWUzOWI4MGM1NDRiZTgzMTlhZDFhYzU4YTMxOGQpO1xyXG5Db250ZW50UHJlc2VudGVyXzNkNDVlMzliODBjNTQ0YmU4MzE5YWQxYWM1OGEzMThkLk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfNzAxOGI3YzI5YWMxNDJiYmI4MjZiMzY4MDc0MjI0ZTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNzAxOGI3YzI5YWMxNDJiYmI4MjZiMzY4MDc0MjI0ZTguUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMTc3MzM0MDM2MTg0NDIwOGE5NzE3ZDQzNDhlODlkMzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8xNzczMzQwMzYxODQ0MjA4YTk3MTdkNDM0OGU4OWQzNi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ183MDE4YjdjMjlhYzE0MmJiYjgyNmIzNjgwNzQyMjRlOC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzE3NzMzNDAzNjE4NDQyMDhhOTcxN2Q0MzQ4ZTg5ZDM2O1xyXG5cclxuXHJcbkJpbmRpbmdfNzAxOGI3YzI5YWMxNDJiYmI4MjZiMzY4MDc0MjI0ZTguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzU2ODM0NDU5OTI2NDk0MTgzMTkwNjg5Y2FmMGI0Nzk7XHJcblxyXG52YXIgQmluZGluZ19kMTZmYmU3NDkzMWE0NDkwOTRlZWRiMWMyMGJhNTgyOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kMTZmYmU3NDkzMWE0NDkwOTRlZWRiMWMyMGJhNTgyOS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNGVjODk2NTRkOTJiNDFmMGE3NjA5YmUzYTQ0M2U3MzkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV80ZWM4OTY1NGQ5MmI0MWYwYTc2MDliZTNhNDQzZTczOS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kMTZmYmU3NDkzMWE0NDkwOTRlZWRiMWMyMGJhNTgyOS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzRlYzg5NjU0ZDkyYjQxZjBhNzYwOWJlM2E0NDNlNzM5O1xyXG5cclxuXHJcbkJpbmRpbmdfZDE2ZmJlNzQ5MzFhNDQ5MDk0ZWVkYjFjMjBiYTU4MjkuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzU2ODM0NDU5OTI2NDk0MTgzMTkwNjg5Y2FmMGI0Nzk7XHJcblxyXG52YXIgQmluZGluZ19kNGM3MjYxMmQyNjY0YTI1OTJkMmQ2MmIyMjkzOTUxZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kNGM3MjYxMmQyNjY0YTI1OTJkMmQ2MmIyMjkzOTUxZC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNmE1ODAxYjM3NzE0NDFhOWE1MzU5YzcwYWNmZTBmN2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82YTU4MDFiMzc3MTQ0MWE5YTUzNTljNzBhY2ZlMGY3ZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kNGM3MjYxMmQyNjY0YTI1OTJkMmQ2MmIyMjkzOTUxZC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzZhNTgwMWIzNzcxNDQxYTlhNTM1OWM3MGFjZmUwZjdlO1xyXG5cclxuXHJcbkJpbmRpbmdfZDRjNzI2MTJkMjY2NGEyNTkyZDJkNjJiMjI5Mzk1MWQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzU2ODM0NDU5OTI2NDk0MTgzMTkwNjg5Y2FmMGI0Nzk7XHJcblxyXG52YXIgQmluZGluZ19mZjA1YjNlYmJiZDE0NjI1OGYzYTdlODQ3NDI0Yjg3MCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19mZjA1YjNlYmJiZDE0NjI1OGYzYTdlODQ3NDI0Yjg3MC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2VhMjg3ODlkNDIzMTQyNjViYzE3ZTY3MWVkYTQzYmIzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZWEyODc4OWQ0MjMxNDI2NWJjMTdlNjcxZWRhNDNiYjMuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZmYwNWIzZWJiYmQxNDYyNThmM2E3ZTg0NzQyNGI4NzAuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9lYTI4Nzg5ZDQyMzE0MjY1YmMxN2U2NzFlZGE0M2JiMztcclxuXHJcblxyXG5CaW5kaW5nX2ZmMDViM2ViYmJkMTQ2MjU4ZjNhN2U4NDc0MjRiODcwLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2M1NjgzNDQ1OTkyNjQ5NDE4MzE5MDY4OWNhZjBiNDc5O1xyXG5cclxudmFyIEJpbmRpbmdfNGYxZTBiNGNlMzY5NDM1ZjljYjczMzA4MjUzMzQ3YTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNGYxZTBiNGNlMzY5NDM1ZjljYjczMzA4MjUzMzQ3YTIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNzFlOGY0MWM4ZWE4NGQyY2IxZTMwNTNjODY1MTQ1OGIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV83MWU4ZjQxYzhlYTg0ZDJjYjFlMzA1M2M4NjUxNDU4Yi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ180ZjFlMGI0Y2UzNjk0MzVmOWNiNzMzMDgyNTMzNDdhMi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzcxZThmNDFjOGVhODRkMmNiMWUzMDUzYzg2NTE0NThiO1xyXG5cclxuXHJcbkJpbmRpbmdfNGYxZTBiNGNlMzY5NDM1ZjljYjczMzA4MjUzMzQ3YTIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzU2ODM0NDU5OTI2NDk0MTgzMTkwNjg5Y2FmMGI0Nzk7XHJcblxyXG5cclxuQm9yZGVyXzYzYWY3ZThkYzViOTRhNWU4YjIxZDVmNjQxOTg2M2JlLkNoaWxkID0gQ29udGVudFByZXNlbnRlcl8zZDQ1ZTM5YjgwYzU0NGJlODMxOWFkMWFjNThhMzE4ZDtcclxuXHJcbnZhciBCaW5kaW5nXzJjNGUzOGI5MWFhZTQxYjZhNTM1MzdmYzZkYmVlYTg3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzJjNGUzOGI5MWFhZTQxYjZhNTM1MzdmYzZkYmVlYTg3LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9iZDYwOWRhYmUxNTY0ZDExOGI3NzM4MDdlZjZkMjkxNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2JkNjA5ZGFiZTE1NjRkMTE4Yjc3MzgwN2VmNmQyOTE2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzJjNGUzOGI5MWFhZTQxYjZhNTM1MzdmYzZkYmVlYTg3LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYmQ2MDlkYWJlMTU2NGQxMThiNzczODA3ZWY2ZDI5MTY7XHJcblxyXG5cclxuQmluZGluZ18yYzRlMzhiOTFhYWU0MWI2YTUzNTM3ZmM2ZGJlZWE4Ny5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9jNTY4MzQ0NTk5MjY0OTQxODMxOTA2ODljYWYwYjQ3OTtcclxuXHJcblxyXG5Cb3JkZXJfYjI4OTc1MzY3YmMxNDM1YjhlMzdiNGI1N2FiOWQ2OGYuQ2hpbGQgPSBCb3JkZXJfNjNhZjdlOGRjNWI5NGE1ZThiMjFkNWY2NDE5ODYzYmU7XHJcblxyXG52YXIgQmluZGluZ18zMTllNGE5YmZhZjg0NGQ5YTBkM2I1NmNhNmExMjRhNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18zMTllNGE5YmZhZjg0NGQ5YTBkM2I1NmNhNmExMjRhNi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMWQyY2ViNDg3YTAwNGNlODg1NzJkYTQ1NzdkZmQyZTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8xZDJjZWI0ODdhMDA0Y2U4ODU3MmRhNDU3N2RmZDJlOS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18zMTllNGE5YmZhZjg0NGQ5YTBkM2I1NmNhNmExMjRhNi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzFkMmNlYjQ4N2EwMDRjZTg4NTcyZGE0NTc3ZGZkMmU5O1xyXG5cclxuXHJcbkJpbmRpbmdfMzE5ZTRhOWJmYWY4NDRkOWEwZDNiNTZjYTZhMTI0YTYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzU2ODM0NDU5OTI2NDk0MTgzMTkwNjg5Y2FmMGI0Nzk7XHJcblxyXG52YXIgQmluZGluZ19kODEwOTk3NDJiZGE0OWM0YWYxYzZmNGM4ZWU2ZjA5NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kODEwOTk3NDJiZGE0OWM0YWYxYzZmNGM4ZWU2ZjA5NC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzFlMGNhNjdlNzA3MzQ0ZjJhNjAxMmFlMGYyYzZkNDEyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMWUwY2E2N2U3MDczNDRmMmE2MDEyYWUwZjJjNmQ0MTIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZDgxMDk5NzQyYmRhNDljNGFmMWM2ZjRjOGVlNmYwOTQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8xZTBjYTY3ZTcwNzM0NGYyYTYwMTJhZTBmMmM2ZDQxMjtcclxuXHJcblxyXG5CaW5kaW5nX2Q4MTA5OTc0MmJkYTQ5YzRhZjFjNmY0YzhlZTZmMDk0LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2M1NjgzNDQ1OTkyNjQ5NDE4MzE5MDY4OWNhZjBiNDc5O1xyXG5cclxudmFyIEJpbmRpbmdfMDk3Zjk0ZTUzNTk2NGYxODhjNDMwMGE2ZjE3ZTZhYjggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMDk3Zjk0ZTUzNTk2NGYxODhjNDMwMGE2ZjE3ZTZhYjguUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfODk0NzY0OTdlYjBmNDM0MWE4NzRlZWI3NWFiZmZlZmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV84OTQ3NjQ5N2ViMGY0MzQxYTg3NGVlYjc1YWJmZmVmZC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18wOTdmOTRlNTM1OTY0ZjE4OGM0MzAwYTZmMTdlNmFiOC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzg5NDc2NDk3ZWIwZjQzNDFhODc0ZWViNzVhYmZmZWZkO1xyXG5cclxuXHJcbkJpbmRpbmdfMDk3Zjk0ZTUzNTk2NGYxODhjNDMwMGE2ZjE3ZTZhYjguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzU2ODM0NDU5OTI2NDk0MTgzMTkwNjg5Y2FmMGI0Nzk7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfM2Q0NWUzOWI4MGM1NDRiZTgzMTlhZDFhYzU4YTMxOGQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ183MDE4YjdjMjlhYzE0MmJiYjgyNmIzNjgwNzQyMjRlOCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfM2Q0NWUzOWI4MGM1NDRiZTgzMTlhZDFhYzU4YTMxOGQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfZDE2ZmJlNzQ5MzFhNDQ5MDk0ZWVkYjFjMjBiYTU4MjkpO1xyXG5Db250ZW50UHJlc2VudGVyXzNkNDVlMzliODBjNTQ0YmU4MzE5YWQxYWM1OGEzMThkLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ19kNGM3MjYxMmQyNjY0YTI1OTJkMmQ2MmIyMjkzOTUxZCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfM2Q0NWUzOWI4MGM1NDRiZTgzMTlhZDFhYzU4YTMxOGQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19mZjA1YjNlYmJiZDE0NjI1OGYzYTdlODQ3NDI0Yjg3MCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfM2Q0NWUzOWI4MGM1NDRiZTgzMTlhZDFhYzU4YTMxOGQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfNGYxZTBiNGNlMzY5NDM1ZjljYjczMzA4MjUzMzQ3YTIpO1xyXG5Cb3JkZXJfNjNhZjdlOGRjNWI5NGE1ZThiMjFkNWY2NDE5ODYzYmUuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzJjNGUzOGI5MWFhZTQxYjZhNTM1MzdmYzZkYmVlYTg3KTtcclxuQm9yZGVyX2IyODk3NTM2N2JjMTQzNWI4ZTM3YjRiNTdhYjlkNjhmLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ18zMTllNGE5YmZhZjg0NGQ5YTBkM2I1NmNhNmExMjRhNik7XHJcbkJvcmRlcl9iMjg5NzUzNjdiYzE0MzViOGUzN2I0YjU3YWI5ZDY4Zi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nX2Q4MTA5OTc0MmJkYTQ5YzRhZjFjNmY0YzhlZTZmMDk0KTtcclxuQm9yZGVyX2IyODk3NTM2N2JjMTQzNWI4ZTM3YjRiNTdhYjlkNjhmLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nXzA5N2Y5NGU1MzU5NjRmMTg4YzQzMDBhNmYxN2U2YWI4KTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzBmZDY2ZmI2MWQwZDQ3MWZiMWFkZDk2NzAyYzZmNzhhLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzY0MjFiNTVkMjVmMjQyMWZiOWE5OTczMGY4M2Y0MWJiLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNjQyMWI1NWQyNWYyNDIxZmI5YTk5NzMwZjgzZjQxYmIsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV82NDIxYjU1ZDI1ZjI0MjFmYjlhOTk3MzBmODNmNDFiYiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzY0MjFiNTVkMjVmMjQyMWZiOWE5OTczMGY4M2Y0MWJiLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNjQyMWI1NWQyNWYyNDIxZmI5YTk5NzMwZjgzZjQxYmIpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzBmZDY2ZmI2MWQwZDQ3MWZiMWFkZDk2NzAyYzZmNzhhLCBCb3JkZXJfNjNhZjdlOGRjNWI5NGE1ZThiMjFkNWY2NDE5ODYzYmUpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRlYmY1MjYyOGQxZjRkYjFhZDNmM2E3MmE3MjdiOGE5LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzBmZDBmODQ5YTJhYzRjMDhiM2VjYzA1ZTkyMGVlMTA4LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMGZkMGY4NDlhMmFjNGMwOGIzZWNjMDVlOTIwZWUxMDgsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wZmQwZjg0OWEyYWM0YzA4YjNlY2MwNWU5MjBlZTEwOCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzBmZDBmODQ5YTJhYzRjMDhiM2VjYzA1ZTkyMGVlMTA4LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMGZkMGY4NDlhMmFjNGMwOGIzZWNjMDVlOTIwZWUxMDgpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRlYmY1MjYyOGQxZjRkYjFhZDNmM2E3MmE3MjdiOGE5LCBCb3JkZXJfNjNhZjdlOGRjNWI5NGE1ZThiMjFkNWY2NDE5ODYzYmUpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2M1NGM3Y2I5MGJlNDQzMDhhYjNiMTU5YTVlZWQ2OWVkLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzEwY2RlZDhjNzgzOTQ5NzZiNmE3YTJmNGNlMDY0ZjZhLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMTBjZGVkOGM3ODM5NDk3NmI2YTdhMmY0Y2UwNjRmNmEsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8xMGNkZWQ4Yzc4Mzk0OTc2YjZhN2EyZjRjZTA2NGY2YSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzEwY2RlZDhjNzgzOTQ5NzZiNmE3YTJmNGNlMDY0ZjZhLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMTBjZGVkOGM3ODM5NDk3NmI2YTdhMmY0Y2UwNjRmNmEpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2M1NGM3Y2I5MGJlNDQzMDhhYjNiMTU5YTVlZWQ2OWVkLCBCb3JkZXJfNjNhZjdlOGRjNWI5NGE1ZThiMjFkNWY2NDE5ODYzYmUpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV9jNTY4MzQ0NTk5MjY0OTQxODMxOTA2ODljYWYwYjQ3OS5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfYjI4OTc1MzY3YmMxNDM1YjhlMzdiNGI1N2FiOWQ2OGY7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlX2M1NjgzNDQ1OTkyNjQ5NDE4MzE5MDY4OWNhZjBiNDc5O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV81NzJmNjg1MDNiYTk0ZGZkODk2ZTIyMDNhMWM3MjBhNCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzU3MmY2ODUwM2JhOTRkZmQ4OTZlMjIwM2ExYzcyMGE0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNTcyZjY4NTAzYmE5NGRmZDg5NmUyMjAzYTFjNzIwYTQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV81NzJmNjg1MDNiYTk0ZGZkODk2ZTIyMDNhMWM3MjBhNCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNTcyZjY4NTAzYmE5NGRmZDg5NmUyMjAzYTFjNzIwYTQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzZiNGMzMWQ1ZDcyZTQ0OGZiMTUyOGMzNzZlZTVmNGMzIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNmI0YzMxZDVkNzJlNDQ4ZmIxNTI4YzM3NmVlNWY0YzMgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV82YjRjMzFkNWQ3MmU0NDhmYjE1MjhjMzc2ZWU1ZjRjMyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzZiNGMzMWQ1ZDcyZTQ0OGZiMTUyOGMzNzZlZTVmNGMzIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV82YjRjMzFkNWQ3MmU0NDhmYjE1MjhjMzc2ZWU1ZjRjMyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMTRjZmZmMzYyOWYyNDJlZmE0NjdjMzdjOTM2Mjc5NTEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8xNGNmZmYzNjI5ZjI0MmVmYTQ2N2MzN2M5MzYyNzk1MSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzE0Y2ZmZjM2MjlmMjQyZWZhNDY3YzM3YzkzNjI3OTUxIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMTRjZmZmMzYyOWYyNDJlZmE0NjdjMzdjOTM2Mjc5NTEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzE0Y2ZmZjM2MjlmMjQyZWZhNDY3YzM3YzkzNjI3OTUxIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UgSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzEzNGFlMDNjYjY2MzQwNTJhYjBkNGExMGM3NWYyOWE1KGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wgdGVtcGxhdGVPd25lcilcclxuICAgICAgICB7XHJcbnZhciB0ZW1wbGF0ZUluc3RhbmNlX2EzNjY4OTEzZmJkNDQ2Nzc5NjJmZWIyNzc4YTI5YmE4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UoKTtcclxudGVtcGxhdGVJbnN0YW5jZV9hMzY2ODkxM2ZiZDQ0Njc3OTYyZmViMjc3OGEyOWJhOC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVPd25lcjtcclxudmFyIEJvcmRlcl82ZjA0YmFkOWZlNjk0NzFhYmJlNGQ3YjRkNzY4ZTA0NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJPdXRlckJvcmRlclwiLCBCb3JkZXJfNmYwNGJhZDlmZTY5NDcxYWJiZTRkN2I0ZDc2OGUwNDQpO1xyXG5Cb3JkZXJfNmYwNGJhZDlmZTY5NDcxYWJiZTRkN2I0ZDc2OGUwNDQuTmFtZSA9IFwiT3V0ZXJCb3JkZXJcIjtcclxuQm9yZGVyXzZmMDRiYWQ5ZmU2OTQ3MWFiYmU0ZDdiNGQ3NjhlMDQ0LkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBWaXN1YWxTdGF0ZUdyb3VwX2RkZDc4ZDQxODQ5YjQ0ZDM5MjgyNDlhMzliOTU4Mjc4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlR3JvdXAoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb21tb25TdGF0ZXNcIiwgVmlzdWFsU3RhdGVHcm91cF9kZGQ3OGQ0MTg0OWI0NGQzOTI4MjQ5YTM5Yjk1ODI3OCk7XHJcblZpc3VhbFN0YXRlR3JvdXBfZGRkNzhkNDE4NDliNDRkMzkyODI0OWEzOWI5NTgyNzguTmFtZSA9IFwiQ29tbW9uU3RhdGVzXCI7XHJcbnZhciBWaXN1YWxTdGF0ZV81NDFmZmY1ZmNhMTg0M2ViOWQwNGI0NThkMjI3OGU4OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk5vcm1hbFwiLCBWaXN1YWxTdGF0ZV81NDFmZmY1ZmNhMTg0M2ViOWQwNGI0NThkMjI3OGU4OSk7XHJcblZpc3VhbFN0YXRlXzU0MWZmZjVmY2ExODQzZWI5ZDA0YjQ1OGQyMjc4ZTg5Lk5hbWUgPSBcIk5vcm1hbFwiO1xyXG5cclxudmFyIFZpc3VhbFN0YXRlXzZjMmNmOWM0NzViYzRjNjQ5YTZlZWQwZjZlZTY3YzFhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUG9pbnRlck92ZXJcIiwgVmlzdWFsU3RhdGVfNmMyY2Y5YzQ3NWJjNGM2NDlhNmVlZDBmNmVlNjdjMWEpO1xyXG5WaXN1YWxTdGF0ZV82YzJjZjljNDc1YmM0YzY0OWE2ZWVkMGY2ZWU2N2MxYS5OYW1lID0gXCJQb2ludGVyT3ZlclwiO1xyXG52YXIgU3Rvcnlib2FyZF83OTUyMGJkMzBlZjU0OTEzYTRhMjNhYjcwYWQ2M2M5ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmM2N2ZiZDFkYzAyNDQyMTg4YzU4YjhhODU0ODY1ZDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmM2N2ZiZDFkYzAyNDQyMTg4YzU4YjhhODU0ODY1ZDYsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2UxMDM2MjVmYjI5YzQ4MDBhN2JjNzhjOTZkZTAzYTUyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZTEwMzYyNWZiMjljNDgwMGE3YmM3OGM5NmRlMDNhNTIuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9lMTAzNjI1ZmIyOWM0ODAwYTdiYzc4Yzk2ZGUwM2E1Mi5WYWx1ZSA9IEBcIiMxMTAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmM2N2ZiZDFkYzAyNDQyMTg4YzU4YjhhODU0ODY1ZDYuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2UxMDM2MjVmYjI5YzQ4MDBhN2JjNzhjOTZkZTAzYTUyKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzc5NTIwYmQzMGVmNTQ5MTNhNGEyM2FiNzBhZDYzYzlkLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYzY3ZmJkMWRjMDI0NDIxODhjNThiOGE4NTQ4NjVkNik7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNmMyY2Y5YzQ3NWJjNGM2NDlhNmVlZDBmNmVlNjdjMWEuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfNzk1MjBiZDMwZWY1NDkxM2E0YTIzYWI3MGFkNjNjOWQ7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzdlNGE4MDUyOWFkZDQ4MmY5YTM0MjI1ZGM1MTY2NTM4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUHJlc3NlZFwiLCBWaXN1YWxTdGF0ZV83ZTRhODA1MjlhZGQ0ODJmOWEzNDIyNWRjNTE2NjUzOCk7XHJcblZpc3VhbFN0YXRlXzdlNGE4MDUyOWFkZDQ4MmY5YTM0MjI1ZGM1MTY2NTM4Lk5hbWUgPSBcIlByZXNzZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfODg5NGM2NTk0N2FhNDcxNzgwMjg0ZjgyNmY5NDM3NWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E2NzJkNjgyZmM4ZTQ3Njc4MWYxYzg4NWIzY2M2MjMzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E2NzJkNjgyZmM4ZTQ3Njc4MWYxYzg4NWIzY2M2MjMzLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV9lYWM3MTNkZGRlMzY0NzZjYTE0Njc5YmEzODczY2FhMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2VhYzcxM2RkZGUzNjQ3NmNhMTQ2NzliYTM4NzNjYWExLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZWFjNzEzZGRkZTM2NDc2Y2ExNDY3OWJhMzg3M2NhYTEuVmFsdWUgPSBAXCIjMjIwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E2NzJkNjgyZmM4ZTQ3Njc4MWYxYzg4NWIzY2M2MjMzLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV9lYWM3MTNkZGRlMzY0NzZjYTE0Njc5YmEzODczY2FhMSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF84ODk0YzY1OTQ3YWE0NzE3ODAyODRmODI2Zjk0Mzc1Yi5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYTY3MmQ2ODJmYzhlNDc2NzgxZjFjODg1YjNjYzYyMzMpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzdlNGE4MDUyOWFkZDQ4MmY5YTM0MjI1ZGM1MTY2NTM4LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzg4OTRjNjU5NDdhYTQ3MTc4MDI4NGY4MjZmOTQzNzViO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV83ZWM5YWQ1MGJiMDI0YmEzOWNjMTQwY2M0MTYzNTRmMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkRpc2FibGVkXCIsIFZpc3VhbFN0YXRlXzdlYzlhZDUwYmIwMjRiYTM5Y2MxNDBjYzQxNjM1NGYyKTtcclxuVmlzdWFsU3RhdGVfN2VjOWFkNTBiYjAyNGJhMzljYzE0MGNjNDE2MzU0ZjIuTmFtZSA9IFwiRGlzYWJsZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfY2MxNmM2ZTY0YTEyNGJiZmE2NjUxNDkwOTc5MTc5NTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2M4MGY0NTEzYTBiYzQ1N2Q4NjUxYjhhNmVkYjI4Y2ZiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2M4MGY0NTEzYTBiYzQ1N2Q4NjUxYjhhNmVkYjI4Y2ZiLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV85ZTU5MGNkZTY2OGY0MzQwOGZkNzY5ZDQ0MjY0NjJiNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzllNTkwY2RlNjY4ZjQzNDA4ZmQ3NjlkNDQyNjQ2MmI2LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfOWU1OTBjZGU2NjhmNDM0MDhmZDc2OWQ0NDI2NDYyYjYuVmFsdWUgPSBAXCIjMzNGRkZGRkZcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2M4MGY0NTEzYTBiYzQ1N2Q4NjUxYjhhNmVkYjI4Y2ZiLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV85ZTU5MGNkZTY2OGY0MzQwOGZkNzY5ZDQ0MjY0NjJiNik7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9jYzE2YzZlNjRhMTI0YmJmYTY2NTE0OTA5NzkxNzk1MS5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYzgwZjQ1MTNhMGJjNDU3ZDg2NTFiOGE2ZWRiMjhjZmIpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzdlYzlhZDUwYmIwMjRiYTM5Y2MxNDBjYzQxNjM1NGYyLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2NjMTZjNmU2NGExMjRiYmZhNjY1MTQ5MDk3OTE3OTUxO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlR3JvdXBfZGRkNzhkNDE4NDliNDRkMzkyODI0OWEzOWI5NTgyNzguU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV81NDFmZmY1ZmNhMTg0M2ViOWQwNGI0NThkMjI3OGU4OSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfZGRkNzhkNDE4NDliNDRkMzkyODI0OWEzOWI5NTgyNzguU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV82YzJjZjljNDc1YmM0YzY0OWE2ZWVkMGY2ZWU2N2MxYSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfZGRkNzhkNDE4NDliNDRkMzkyODI0OWEzOWI5NTgyNzguU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV83ZTRhODA1MjlhZGQ0ODJmOWEzNDIyNWRjNTE2NjUzOCk7XHJcblZpc3VhbFN0YXRlR3JvdXBfZGRkNzhkNDE4NDliNDRkMzkyODI0OWEzOWI5NTgyNzguU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV83ZWM5YWQ1MGJiMDI0YmEzOWNjMTQwY2M0MTYzNTRmMik7XHJcblxyXG5cclxudGVtcGxhdGVPd25lci5JTlRFUk5BTF9HZXRWaXN1YWxTdGF0ZUdyb3VwcygpLkFkZChWaXN1YWxTdGF0ZUdyb3VwX2RkZDc4ZDQxODQ5YjQ0ZDM5MjgyNDlhMzliOTU4Mjc4KTtcclxuXHJcbnZhciBCb3JkZXJfOWEyNzZlNTNmYmMxNDE5Y2I0ZmQwMjM1ZTA4MzMyMDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiSW5uZXJCb3JkZXJcIiwgQm9yZGVyXzlhMjc2ZTUzZmJjMTQxOWNiNGZkMDIzNWUwODMzMjA5KTtcclxuQm9yZGVyXzlhMjc2ZTUzZmJjMTQxOWNiNGZkMDIzNWUwODMzMjA5Lk5hbWUgPSBcIklubmVyQm9yZGVyXCI7XHJcbkJvcmRlcl85YTI3NmU1M2ZiYzE0MTljYjRmZDAyMzVlMDgzMzIwOS5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgQ29udGVudFByZXNlbnRlcl85ZGQxZDRiNGJhNWU0NjNlYTg0MzJhODU1YzNiYzM1MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50UHJlc2VudGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29udGVudFByZXNlbnRlclwiLCBDb250ZW50UHJlc2VudGVyXzlkZDFkNGI0YmE1ZTQ2M2VhODQzMmE4NTVjM2JjMzUzKTtcclxuQ29udGVudFByZXNlbnRlcl85ZGQxZDRiNGJhNWU0NjNlYTg0MzJhODU1YzNiYzM1My5OYW1lID0gXCJDb250ZW50UHJlc2VudGVyXCI7XHJcbnZhciBCaW5kaW5nX2M1Y2Y2N2Q3MWE0YzRhYTQ4NjFhNmEwMWU0ZDk2NGMzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2M1Y2Y2N2Q3MWE0YzRhYTQ4NjFhNmEwMWU0ZDk2NGMzLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRUZW1wbGF0ZVwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2IxN2NiYTdkY2U5MjQ0ODA4YmIxNzM5ZGE4ZDhkYjg2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYjE3Y2JhN2RjZTkyNDQ4MDhiYjE3MzlkYThkOGRiODYuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYzVjZjY3ZDcxYTRjNGFhNDg2MWE2YTAxZTRkOTY0YzMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9iMTdjYmE3ZGNlOTI0NDgwOGJiMTczOWRhOGQ4ZGI4NjtcclxuXHJcblxyXG5CaW5kaW5nX2M1Y2Y2N2Q3MWE0YzRhYTQ4NjFhNmEwMWU0ZDk2NGMzLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2EzNjY4OTEzZmJkNDQ2Nzc5NjJmZWIyNzc4YTI5YmE4O1xyXG5cclxudmFyIEJpbmRpbmdfMjE5NjhmYzZhZTkzNGM4NjkwOGRmNTM2YjEzNjY0MjcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMjE5NjhmYzZhZTkzNGM4NjkwOGRmNTM2YjEzNjY0MjcuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzkyMzRmNDcwZGQyNzRhMmE5MThmNDhhYzk2MzZkZWM5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOTIzNGY0NzBkZDI3NGEyYTkxOGY0OGFjOTYzNmRlYzkuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMjE5NjhmYzZhZTkzNGM4NjkwOGRmNTM2YjEzNjY0MjcuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85MjM0ZjQ3MGRkMjc0YTJhOTE4ZjQ4YWM5NjM2ZGVjOTtcclxuXHJcblxyXG5CaW5kaW5nXzIxOTY4ZmM2YWU5MzRjODY5MDhkZjUzNmIxMzY2NDI3LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2EzNjY4OTEzZmJkNDQ2Nzc5NjJmZWIyNzc4YTI5YmE4O1xyXG5cclxudmFyIEJpbmRpbmdfNjBiMzIzYWRmODQ5NDI1N2JhZDUxNzlmODRmNzdjYjMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNjBiMzIzYWRmODQ5NDI1N2JhZDUxNzlmODRmNzdjYjMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiUGFkZGluZ1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2RiYjNkYTM5ODdiNjQ2YmFiYjhkZjk5ZjAyZGE5YTJlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZGJiM2RhMzk4N2I2NDZiYWJiOGRmOTlmMDJkYTlhMmUuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNjBiMzIzYWRmODQ5NDI1N2JhZDUxNzlmODRmNzdjYjMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9kYmIzZGEzOTg3YjY0NmJhYmI4ZGY5OWYwMmRhOWEyZTtcclxuXHJcblxyXG5CaW5kaW5nXzYwYjMyM2FkZjg0OTQyNTdiYWQ1MTc5Zjg0Zjc3Y2IzLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2EzNjY4OTEzZmJkNDQ2Nzc5NjJmZWIyNzc4YTI5YmE4O1xyXG5cclxudmFyIEJpbmRpbmdfOWI1OGI2MjFkNTNkNDZkOGI0ODhhYjkyMzhjNDM5NGEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOWI1OGI2MjFkNTNkNDZkOGI0ODhhYjkyMzhjNDM5NGEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiSG9yaXpvbnRhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jYTM4MGJiZmJhZDM0NWIzYjUwYWE1NTgwNzgyMzg4ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2NhMzgwYmJmYmFkMzQ1YjNiNTBhYTU1ODA3ODIzODhlLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzliNThiNjIxZDUzZDQ2ZDhiNDg4YWI5MjM4YzQzOTRhLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfY2EzODBiYmZiYWQzNDViM2I1MGFhNTU4MDc4MjM4OGU7XHJcblxyXG5cclxuQmluZGluZ185YjU4YjYyMWQ1M2Q0NmQ4YjQ4OGFiOTIzOGM0Mzk0YS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9hMzY2ODkxM2ZiZDQ0Njc3OTYyZmViMjc3OGEyOWJhODtcclxuXHJcbnZhciBCaW5kaW5nXzY5MzViZmViZGRjODRhYmJiNDI0YzkyYTIxNjg4MzRiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzY5MzViZmViZGRjODRhYmJiNDI0YzkyYTIxNjg4MzRiLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2ViZmU2NTRkMTMzNDQzMDZhNGJhYjYxMGFhYmVlNGRkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZWJmZTY1NGQxMzM0NDMwNmE0YmFiNjEwYWFiZWU0ZGQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNjkzNWJmZWJkZGM4NGFiYmI0MjRjOTJhMjE2ODgzNGIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9lYmZlNjU0ZDEzMzQ0MzA2YTRiYWI2MTBhYWJlZTRkZDtcclxuXHJcblxyXG5CaW5kaW5nXzY5MzViZmViZGRjODRhYmJiNDI0YzkyYTIxNjg4MzRiLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2EzNjY4OTEzZmJkNDQ2Nzc5NjJmZWIyNzc4YTI5YmE4O1xyXG5cclxuXHJcbkJvcmRlcl85YTI3NmU1M2ZiYzE0MTljYjRmZDAyMzVlMDgzMzIwOS5DaGlsZCA9IENvbnRlbnRQcmVzZW50ZXJfOWRkMWQ0YjRiYTVlNDYzZWE4NDMyYTg1NWMzYmMzNTM7XHJcblxyXG52YXIgQmluZGluZ18zOGQ0YzZiM2I3NWY0MTYyYTZhYTIwODMwYmFkMGQ3OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18zOGQ0YzZiM2I3NWY0MTYyYTZhYTIwODMwYmFkMGQ3OC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMTc5N2M2OWI2MDA3NDBkZmJlNjUzM2FlZWM3NTA0ZDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8xNzk3YzY5YjYwMDc0MGRmYmU2NTMzYWVlYzc1MDRkNi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18zOGQ0YzZiM2I3NWY0MTYyYTZhYTIwODMwYmFkMGQ3OC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzE3OTdjNjliNjAwNzQwZGZiZTY1MzNhZWVjNzUwNGQ2O1xyXG5cclxuXHJcbkJpbmRpbmdfMzhkNGM2YjNiNzVmNDE2MmE2YWEyMDgzMGJhZDBkNzguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTM2Njg5MTNmYmQ0NDY3Nzk2MmZlYjI3NzhhMjliYTg7XHJcblxyXG5cclxuQm9yZGVyXzZmMDRiYWQ5ZmU2OTQ3MWFiYmU0ZDdiNGQ3NjhlMDQ0LkNoaWxkID0gQm9yZGVyXzlhMjc2ZTUzZmJjMTQxOWNiNGZkMDIzNWUwODMzMjA5O1xyXG5cclxudmFyIEJpbmRpbmdfYjQyYzMxNDUzZjA0NDg5OTk5MTQ1OWIwNmJkMWM0MDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYjQyYzMxNDUzZjA0NDg5OTk5MTQ1OWIwNmJkMWM0MDkuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzI0MjEzODVmOTM1ZjRlZDZiM2VlNWNjOWU2ZjkxYmM5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMjQyMTM4NWY5MzVmNGVkNmIzZWU1Y2M5ZTZmOTFiYzkuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYjQyYzMxNDUzZjA0NDg5OTk5MTQ1OWIwNmJkMWM0MDkuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8yNDIxMzg1ZjkzNWY0ZWQ2YjNlZTVjYzllNmY5MWJjOTtcclxuXHJcblxyXG5CaW5kaW5nX2I0MmMzMTQ1M2YwNDQ4OTk5OTE0NTliMDZiZDFjNDA5LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2EzNjY4OTEzZmJkNDQ2Nzc5NjJmZWIyNzc4YTI5YmE4O1xyXG5cclxudmFyIEJpbmRpbmdfNTJhYzZiNGJkMGIzNDA1Y2ExNTEwNTI2MWE3MzVhZjYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNTJhYzZiNGJkMGIzNDA1Y2ExNTEwNTI2MWE3MzVhZjYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyQnJ1c2hcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kNTRlMDZhN2EzY2E0MTg0OWVhYTE3ZGIzMThlMWE2OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2Q1NGUwNmE3YTNjYTQxODQ5ZWFhMTdkYjMxOGUxYTY5Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzUyYWM2YjRiZDBiMzQwNWNhMTUxMDUyNjFhNzM1YWY2LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZDU0ZTA2YTdhM2NhNDE4NDllYWExN2RiMzE4ZTFhNjk7XHJcblxyXG5cclxuQmluZGluZ181MmFjNmI0YmQwYjM0MDVjYTE1MTA1MjYxYTczNWFmNi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9hMzY2ODkxM2ZiZDQ0Njc3OTYyZmViMjc3OGEyOWJhODtcclxuXHJcbnZhciBCaW5kaW5nX2Q2YjgzMGRiMjkxZjQ0ZDFhMTBjODNkNDA5NTc4M2I3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2Q2YjgzMGRiMjkxZjQ0ZDFhMTBjODNkNDA5NTc4M2I3LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlclRoaWNrbmVzc1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzMzOTRlZjFlODBmZTQ0MWNiZWNmNWVlMWY2ODIzNTlhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMzM5NGVmMWU4MGZlNDQxY2JlY2Y1ZWUxZjY4MjM1OWEuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZDZiODMwZGIyOTFmNDRkMWExMGM4M2Q0MDk1NzgzYjcuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8zMzk0ZWYxZTgwZmU0NDFjYmVjZjVlZTFmNjgyMzU5YTtcclxuXHJcblxyXG5CaW5kaW5nX2Q2YjgzMGRiMjkxZjQ0ZDFhMTBjODNkNDA5NTc4M2I3LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2EzNjY4OTEzZmJkNDQ2Nzc5NjJmZWIyNzc4YTI5YmE4O1xyXG5cclxuXHJcblxyXG5Db250ZW50UHJlc2VudGVyXzlkZDFkNGI0YmE1ZTQ2M2VhODQzMmE4NTVjM2JjMzUzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFRlbXBsYXRlUHJvcGVydHksIEJpbmRpbmdfYzVjZjY3ZDcxYTRjNGFhNDg2MWE2YTAxZTRkOTY0YzMpO1xyXG5Db250ZW50UHJlc2VudGVyXzlkZDFkNGI0YmE1ZTQ2M2VhODQzMmE4NTVjM2JjMzUzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFByb3BlcnR5LCBCaW5kaW5nXzIxOTY4ZmM2YWU5MzRjODY5MDhkZjUzNmIxMzY2NDI3KTtcclxuQ29udGVudFByZXNlbnRlcl85ZGQxZDRiNGJhNWU0NjNlYTg0MzJhODU1YzNiYzM1My5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuTWFyZ2luUHJvcGVydHksIEJpbmRpbmdfNjBiMzIzYWRmODQ5NDI1N2JhZDUxNzlmODRmNzdjYjMpO1xyXG5Db250ZW50UHJlc2VudGVyXzlkZDFkNGI0YmE1ZTQ2M2VhODQzMmE4NTVjM2JjMzUzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5Ib3Jpem9udGFsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfOWI1OGI2MjFkNTNkNDZkOGI0ODhhYjkyMzhjNDM5NGEpO1xyXG5Db250ZW50UHJlc2VudGVyXzlkZDFkNGI0YmE1ZTQ2M2VhODQzMmE4NTVjM2JjMzUzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5WZXJ0aWNhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nXzY5MzViZmViZGRjODRhYmJiNDI0YzkyYTIxNjg4MzRiKTtcclxuQm9yZGVyXzlhMjc2ZTUzZmJjMTQxOWNiNGZkMDIzNWUwODMzMjA5LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ18zOGQ0YzZiM2I3NWY0MTYyYTZhYTIwODMwYmFkMGQ3OCk7XHJcbkJvcmRlcl82ZjA0YmFkOWZlNjk0NzFhYmJlNGQ3YjRkNzY4ZTA0NC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfYjQyYzMxNDUzZjA0NDg5OTk5MTQ1OWIwNmJkMWM0MDkpO1xyXG5Cb3JkZXJfNmYwNGJhZDlmZTY5NDcxYWJiZTRkN2I0ZDc2OGUwNDQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyQnJ1c2hQcm9wZXJ0eSwgQmluZGluZ181MmFjNmI0YmQwYjM0MDVjYTE1MTA1MjYxYTczNWFmNik7XHJcbkJvcmRlcl82ZjA0YmFkOWZlNjk0NzFhYmJlNGQ3YjRkNzY4ZTA0NC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJUaGlja25lc3NQcm9wZXJ0eSwgQmluZGluZ19kNmI4MzBkYjI5MWY0NGQxYTEwYzgzZDQwOTU3ODNiNyk7XHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYzY3ZmJkMWRjMDI0NDIxODhjNThiOGE4NTQ4NjVkNixcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV81NzJmNjg1MDNiYTk0ZGZkODk2ZTIyMDNhMWM3MjBhNCxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzU3MmY2ODUwM2JhOTRkZmQ4OTZlMjIwM2ExYzcyMGE0LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNTcyZjY4NTAzYmE5NGRmZDg5NmUyMjAzYTFjNzIwYTQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV81NzJmNjg1MDNiYTk0ZGZkODk2ZTIyMDNhMWM3MjBhNCxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzU3MmY2ODUwM2JhOTRkZmQ4OTZlMjIwM2ExYzcyMGE0KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYzY3ZmJkMWRjMDI0NDIxODhjNThiOGE4NTQ4NjVkNiwgQm9yZGVyXzlhMjc2ZTUzZmJjMTQxOWNiNGZkMDIzNWUwODMzMjA5KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hNjcyZDY4MmZjOGU0NzY3ODFmMWM4ODViM2NjNjIzMyxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV82YjRjMzFkNWQ3MmU0NDhmYjE1MjhjMzc2ZWU1ZjRjMyxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzZiNGMzMWQ1ZDcyZTQ0OGZiMTUyOGMzNzZlZTVmNGMzLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNmI0YzMxZDVkNzJlNDQ4ZmIxNTI4YzM3NmVlNWY0YzMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV82YjRjMzFkNWQ3MmU0NDhmYjE1MjhjMzc2ZWU1ZjRjMyxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzZiNGMzMWQ1ZDcyZTQ0OGZiMTUyOGMzNzZlZTVmNGMzKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hNjcyZDY4MmZjOGU0NzY3ODFmMWM4ODViM2NjNjIzMywgQm9yZGVyXzlhMjc2ZTUzZmJjMTQxOWNiNGZkMDIzNWUwODMzMjA5KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jODBmNDUxM2EwYmM0NTdkODY1MWI4YTZlZGIyOGNmYixcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8xNGNmZmYzNjI5ZjI0MmVmYTQ2N2MzN2M5MzYyNzk1MSxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzE0Y2ZmZjM2MjlmMjQyZWZhNDY3YzM3YzkzNjI3OTUxLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMTRjZmZmMzYyOWYyNDJlZmE0NjdjMzdjOTM2Mjc5NTEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8xNGNmZmYzNjI5ZjI0MmVmYTQ2N2MzN2M5MzYyNzk1MSxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzE0Y2ZmZjM2MjlmMjQyZWZhNDY3YzM3YzkzNjI3OTUxKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jODBmNDUxM2EwYmM0NTdkODY1MWI4YTZlZGIyOGNmYiwgQm9yZGVyXzlhMjc2ZTUzZmJjMTQxOWNiNGZkMDIzNWUwODMzMjA5KTtcclxuXHJcbnRlbXBsYXRlSW5zdGFuY2VfYTM2Njg5MTNmYmQ0NDY3Nzk2MmZlYjI3NzhhMjliYTguVGVtcGxhdGVDb250ZW50ID0gQm9yZGVyXzZmMDRiYWQ5ZmU2OTQ3MWFiYmU0ZDdiNGQ3NjhlMDQ0O1xyXG5yZXR1cm4gdGVtcGxhdGVJbnN0YW5jZV9hMzY2ODkxM2ZiZDQ0Njc3OTYyZmViMjc3OGEyOWJhODtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZTg1NTAxZjQwY2ZmNDE4ZTlkZmM4YWE1NDFiMjM3ZGUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lODU1MDFmNDBjZmY0MThlOWRmYzhhYTU0MWIyMzdkZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2U4NTUwMWY0MGNmZjQxOGU5ZGZjOGFhNTQxYjIzN2RlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZTg1NTAxZjQwY2ZmNDE4ZTlkZmM4YWE1NDFiMjM3ZGUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2U4NTUwMWY0MGNmZjQxOGU5ZGZjOGFhNTQxYjIzN2RlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV83MTkzZGYxZDljM2I0NWE4YmI1OWE5ZWRmN2NiMzNjZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzcxOTNkZjFkOWMzYjQ1YThiYjU5YTllZGY3Y2IzM2NlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNzE5M2RmMWQ5YzNiNDVhOGJiNTlhOWVkZjdjYjMzY2UgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV83MTkzZGYxZDljM2I0NWE4YmI1OWE5ZWRmN2NiMzNjZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNzE5M2RmMWQ5YzNiNDVhOGJiNTlhOWVkZjdjYjMzY2UgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5Xzk4ZWM1M2RiYzRlZDRhM2VhZDNjZDEyNzQ4ZjhmNGQ4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfOThlYzUzZGJjNGVkNGEzZWFkM2NkMTI3NDhmOGY0ZDggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV85OGVjNTNkYmM0ZWQ0YTNlYWQzY2QxMjc0OGY4ZjRkOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5Xzk4ZWM1M2RiYzRlZDRhM2VhZDNjZDEyNzQ4ZjhmNGQ4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV85OGVjNTNkYmM0ZWQ0YTNlYWQzY2QxMjc0OGY4ZjRkOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlIEluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV80ZDVhOTMyYWUyNzQ0NTliYTIyN2IwZWRlZTU5MzViNShnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sIHRlbXBsYXRlT3duZXIpXHJcbiAgICAgICAge1xyXG52YXIgdGVtcGxhdGVJbnN0YW5jZV80ZDVlZTc3ZGQyM2U0NmI2YTllNjI0MzIwN2E1MmNlNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlKCk7XHJcbnRlbXBsYXRlSW5zdGFuY2VfNGQ1ZWU3N2RkMjNlNDZiNmE5ZTYyNDMyMDdhNTJjZTUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlT3duZXI7XHJcbnZhciBCb3JkZXJfNzBmN2I1MmM4ODdiNDE2NDgwMDdjNTM5MzUyNTg1ZTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiT3V0ZXJCb3JkZXJcIiwgQm9yZGVyXzcwZjdiNTJjODg3YjQxNjQ4MDA3YzUzOTM1MjU4NWUxKTtcclxuQm9yZGVyXzcwZjdiNTJjODg3YjQxNjQ4MDA3YzUzOTM1MjU4NWUxLk5hbWUgPSBcIk91dGVyQm9yZGVyXCI7XHJcbkJvcmRlcl83MGY3YjUyYzg4N2I0MTY0ODAwN2M1MzkzNTI1ODVlMS5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgVmlzdWFsU3RhdGVHcm91cF85Mzg1MDNkNTNmZTA0YTE0YTQzNmViMGY5NGE4ZTliYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZUdyb3VwKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29tbW9uU3RhdGVzXCIsIFZpc3VhbFN0YXRlR3JvdXBfOTM4NTAzZDUzZmUwNGExNGE0MzZlYjBmOTRhOGU5YmMpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzkzODUwM2Q1M2ZlMDRhMTRhNDM2ZWIwZjk0YThlOWJjLk5hbWUgPSBcIkNvbW1vblN0YXRlc1wiO1xyXG52YXIgVmlzdWFsU3RhdGVfNzU2OWNjMDNhZjk3NDFmYjk5YzRmZjkxYTRlOTRkNjAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJOb3JtYWxcIiwgVmlzdWFsU3RhdGVfNzU2OWNjMDNhZjk3NDFmYjk5YzRmZjkxYTRlOTRkNjApO1xyXG5WaXN1YWxTdGF0ZV83NTY5Y2MwM2FmOTc0MWZiOTljNGZmOTFhNGU5NGQ2MC5OYW1lID0gXCJOb3JtYWxcIjtcclxuXHJcbnZhciBWaXN1YWxTdGF0ZV83ZGJhZDU1NDc4MWY0NWY4YWM5NWI4ZGNmNTcyZjM5OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlBvaW50ZXJPdmVyXCIsIFZpc3VhbFN0YXRlXzdkYmFkNTU0NzgxZjQ1ZjhhYzk1YjhkY2Y1NzJmMzk5KTtcclxuVmlzdWFsU3RhdGVfN2RiYWQ1NTQ3ODFmNDVmOGFjOTViOGRjZjU3MmYzOTkuTmFtZSA9IFwiUG9pbnRlck92ZXJcIjtcclxudmFyIFN0b3J5Ym9hcmRfZjRjN2Y2NTAwYzVmNDM5ODljZmUzYmE3YTFjZTY1MDQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzkyMDkyMWZkNWZhNDQxOGQ4OGExNmM4OGNkMzhhNjFhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzkyMDkyMWZkNWZhNDQxOGQ4OGExNmM4OGNkMzhhNjFhLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV84NjhkMTA5NTRmM2Q0NzFkOTkxNTRlYTdmNDk4MDVhZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzg2OGQxMDk1NGYzZDQ3MWQ5OTE1NGVhN2Y0OTgwNWFlLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfODY4ZDEwOTU0ZjNkNDcxZDk5MTU0ZWE3ZjQ5ODA1YWUuVmFsdWUgPSBAXCIjMTEwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzkyMDkyMWZkNWZhNDQxOGQ4OGExNmM4OGNkMzhhNjFhLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV84NjhkMTA5NTRmM2Q0NzFkOTkxNTRlYTdmNDk4MDVhZSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9mNGM3ZjY1MDBjNWY0Mzk4OWNmZTNiYTdhMWNlNjUwNC5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOTIwOTIxZmQ1ZmE0NDE4ZDg4YTE2Yzg4Y2QzOGE2MWEpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzdkYmFkNTU0NzgxZjQ1ZjhhYzk1YjhkY2Y1NzJmMzk5LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2Y0YzdmNjUwMGM1ZjQzOTg5Y2ZlM2JhN2ExY2U2NTA0O1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV9kY2YxYjI3OTg3YjA0ODU3YmNkMWZkMjNlNzA2ZWUyMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlByZXNzZWRcIiwgVmlzdWFsU3RhdGVfZGNmMWIyNzk4N2IwNDg1N2JjZDFmZDIzZTcwNmVlMjIpO1xyXG5WaXN1YWxTdGF0ZV9kY2YxYjI3OTg3YjA0ODU3YmNkMWZkMjNlNzA2ZWUyMi5OYW1lID0gXCJQcmVzc2VkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzY0YzlmNTYyMDc0YTQxZTJiN2EyYjEwZTVhNjNiMjNiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xNWZiYTc5ZWZiMTY0YWY5ODMwYjNiMmU1NDczMzY5ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xNWZiYTc5ZWZiMTY0YWY5ODMwYjNiMmU1NDczMzY5ZCxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfN2I2M2NjNjdmZjkzNDQyZGJjNWRlNmZmY2NjYTMzODQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV83YjYzY2M2N2ZmOTM0NDJkYmM1ZGU2ZmZjY2NhMzM4NC5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzdiNjNjYzY3ZmY5MzQ0MmRiYzVkZTZmZmNjY2EzMzg0LlZhbHVlID0gQFwiIzIyMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xNWZiYTc5ZWZiMTY0YWY5ODMwYjNiMmU1NDczMzY5ZC5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfN2I2M2NjNjdmZjkzNDQyZGJjNWRlNmZmY2NjYTMzODQpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNjRjOWY1NjIwNzRhNDFlMmI3YTJiMTBlNWE2M2IyM2IuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE1ZmJhNzllZmIxNjRhZjk4MzBiM2IyZTU0NzMzNjlkKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9kY2YxYjI3OTg3YjA0ODU3YmNkMWZkMjNlNzA2ZWUyMi5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF82NGM5ZjU2MjA3NGE0MWUyYjdhMmIxMGU1YTYzYjIzYjtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfNDZkY2MzYTRhNDZkNGRjOTliMjc3MWNmMGQxYjVkNWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJEaXNhYmxlZFwiLCBWaXN1YWxTdGF0ZV80NmRjYzNhNGE0NmQ0ZGM5OWIyNzcxY2YwZDFiNWQ1Yik7XHJcblZpc3VhbFN0YXRlXzQ2ZGNjM2E0YTQ2ZDRkYzk5YjI3NzFjZjBkMWI1ZDViLk5hbWUgPSBcIkRpc2FibGVkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzRkYTRlMzNjYzljMzRkMTE5MDVlOGIzMTAwNjQ4ZTYyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183M2JkZTQwZmFiODI0MTg5YjRmZTJjZmZhMzQzNGNjNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183M2JkZTQwZmFiODI0MTg5YjRmZTJjZmZhMzQzNGNjNCxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZDQxNjFiM2UzOTZkNDk0ZmE4YTJlMDY2MGYwNjdlMDQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9kNDE2MWIzZTM5NmQ0OTRmYThhMmUwNjYwZjA2N2UwNC5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2Q0MTYxYjNlMzk2ZDQ5NGZhOGEyZTA2NjBmMDY3ZTA0LlZhbHVlID0gQFwiIzMzRkZGRkZGXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183M2JkZTQwZmFiODI0MTg5YjRmZTJjZmZhMzQzNGNjNC5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZDQxNjFiM2UzOTZkNDk0ZmE4YTJlMDY2MGYwNjdlMDQpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNGRhNGUzM2NjOWMzNGQxMTkwNWU4YjMxMDA2NDhlNjIuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzczYmRlNDBmYWI4MjQxODliNGZlMmNmZmEzNDM0Y2M0KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV80NmRjYzNhNGE0NmQ0ZGM5OWIyNzcxY2YwZDFiNWQ1Yi5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF80ZGE0ZTMzY2M5YzM0ZDExOTA1ZThiMzEwMDY0OGU2MjtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZUdyb3VwXzkzODUwM2Q1M2ZlMDRhMTRhNDM2ZWIwZjk0YThlOWJjLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNzU2OWNjMDNhZjk3NDFmYjk5YzRmZjkxYTRlOTRkNjApO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzkzODUwM2Q1M2ZlMDRhMTRhNDM2ZWIwZjk0YThlOWJjLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfN2RiYWQ1NTQ3ODFmNDVmOGFjOTViOGRjZjU3MmYzOTkpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzkzODUwM2Q1M2ZlMDRhMTRhNDM2ZWIwZjk0YThlOWJjLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfZGNmMWIyNzk4N2IwNDg1N2JjZDFmZDIzZTcwNmVlMjIpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzkzODUwM2Q1M2ZlMDRhMTRhNDM2ZWIwZjk0YThlOWJjLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNDZkY2MzYTRhNDZkNGRjOTliMjc3MWNmMGQxYjVkNWIpO1xyXG5cclxuXHJcbnRlbXBsYXRlT3duZXIuSU5URVJOQUxfR2V0VmlzdWFsU3RhdGVHcm91cHMoKS5BZGQoVmlzdWFsU3RhdGVHcm91cF85Mzg1MDNkNTNmZTA0YTE0YTQzNmViMGY5NGE4ZTliYyk7XHJcblxyXG52YXIgQm9yZGVyX2ZjZDhlMDcxYTFmYzRjOWQ5YzhiMjAxNmQyMTU4NzcwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIklubmVyQm9yZGVyXCIsIEJvcmRlcl9mY2Q4ZTA3MWExZmM0YzlkOWM4YjIwMTZkMjE1ODc3MCk7XHJcbkJvcmRlcl9mY2Q4ZTA3MWExZmM0YzlkOWM4YjIwMTZkMjE1ODc3MC5OYW1lID0gXCJJbm5lckJvcmRlclwiO1xyXG5Cb3JkZXJfZmNkOGUwNzFhMWZjNGM5ZDljOGIyMDE2ZDIxNTg3NzAuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENvbnRlbnRQcmVzZW50ZXJfMDIyOTg4OTg1OGNiNGY2ZDkwNTc4NTExMjQ5Mzk3OGIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudFByZXNlbnRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbnRlbnRQcmVzZW50ZXJcIiwgQ29udGVudFByZXNlbnRlcl8wMjI5ODg5ODU4Y2I0ZjZkOTA1Nzg1MTEyNDkzOTc4Yik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMDIyOTg4OTg1OGNiNGY2ZDkwNTc4NTExMjQ5Mzk3OGIuTmFtZSA9IFwiQ29udGVudFByZXNlbnRlclwiO1xyXG52YXIgQmluZGluZ185OWFlZjBiYzZmNTU0Y2YyYTlkYjNjMTVmYmUyZWFiYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ185OWFlZjBiYzZmNTU0Y2YyYTlkYjNjMTVmYmUyZWFiYS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50VGVtcGxhdGVcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kYzJjNGNiM2IyNjM0MDVlYmNiZDBhOTI0ODdlYjMxYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2RjMmM0Y2IzYjI2MzQwNWViY2JkMGE5MjQ4N2ViMzFjLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzk5YWVmMGJjNmY1NTRjZjJhOWRiM2MxNWZiZTJlYWJhLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZGMyYzRjYjNiMjYzNDA1ZWJjYmQwYTkyNDg3ZWIzMWM7XHJcblxyXG5cclxuQmluZGluZ185OWFlZjBiYzZmNTU0Y2YyYTlkYjNjMTVmYmUyZWFiYS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV80ZDVlZTc3ZGQyM2U0NmI2YTllNjI0MzIwN2E1MmNlNTtcclxuXHJcbnZhciBCaW5kaW5nX2FiNzAxYTYwNTY3OTRiMDRiZWJmMjYzZDRhNGVhODExID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2FiNzAxYTYwNTY3OTRiMDRiZWJmMjYzZDRhNGVhODExLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8xMTk4N2RjNWYxMjE0NzViYTI5ODE1ZTg3MjA2MWZkMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzExOTg3ZGM1ZjEyMTQ3NWJhMjk4MTVlODcyMDYxZmQwLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2FiNzAxYTYwNTY3OTRiMDRiZWJmMjYzZDRhNGVhODExLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMTE5ODdkYzVmMTIxNDc1YmEyOTgxNWU4NzIwNjFmZDA7XHJcblxyXG5cclxuQmluZGluZ19hYjcwMWE2MDU2Nzk0YjA0YmViZjI2M2Q0YTRlYTgxMS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV80ZDVlZTc3ZGQyM2U0NmI2YTllNjI0MzIwN2E1MmNlNTtcclxuXHJcbnZhciBCaW5kaW5nX2VkNjhkYmZhYWQyZDRjYzg5NGI1MmMyNDUyZmVmMjkzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2VkNjhkYmZhYWQyZDRjYzg5NGI1MmMyNDUyZmVmMjkzLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlBhZGRpbmdcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8yYmNkMmYwNmQ0OTU0YzNjOTc4MjZhMTk3ZTg1YTg5ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzJiY2QyZjA2ZDQ5NTRjM2M5NzgyNmExOTdlODVhODlmLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2VkNjhkYmZhYWQyZDRjYzg5NGI1MmMyNDUyZmVmMjkzLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMmJjZDJmMDZkNDk1NGMzYzk3ODI2YTE5N2U4NWE4OWY7XHJcblxyXG5cclxuQmluZGluZ19lZDY4ZGJmYWFkMmQ0Y2M4OTRiNTJjMjQ1MmZlZjI5My5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV80ZDVlZTc3ZGQyM2U0NmI2YTllNjI0MzIwN2E1MmNlNTtcclxuXHJcbnZhciBCaW5kaW5nX2ZhNDRhNjU1YTVkMjQzOWRiMmY5NTQ4YjI3ZmE4MzJmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2ZhNDRhNjU1YTVkMjQzOWRiMmY5NTQ4YjI3ZmE4MzJmLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkhvcml6b250YWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfODY4NDAxMDc1OTM5NGRhOGEzN2YzY2E5MmU4Njk5NTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV84Njg0MDEwNzU5Mzk0ZGE4YTM3ZjNjYTkyZTg2OTk1OS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19mYTQ0YTY1NWE1ZDI0MzlkYjJmOTU0OGIyN2ZhODMyZi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzg2ODQwMTA3NTkzOTRkYThhMzdmM2NhOTJlODY5OTU5O1xyXG5cclxuXHJcbkJpbmRpbmdfZmE0NGE2NTVhNWQyNDM5ZGIyZjk1NDhiMjdmYTgzMmYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNGQ1ZWU3N2RkMjNlNDZiNmE5ZTYyNDMyMDdhNTJjZTU7XHJcblxyXG52YXIgQmluZGluZ19kMDc5N2YyYThmZjE0NmM3OGQxZGJkZDE1ZTc0YzY2MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kMDc5N2YyYThmZjE0NmM3OGQxZGJkZDE1ZTc0YzY2MS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJWZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kMWY0YTRmM2VmOGM0ZGJmOTM2NjA1ZjNhMWQ2MGMyOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2QxZjRhNGYzZWY4YzRkYmY5MzY2MDVmM2ExZDYwYzI4Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2QwNzk3ZjJhOGZmMTQ2Yzc4ZDFkYmRkMTVlNzRjNjYxLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZDFmNGE0ZjNlZjhjNGRiZjkzNjYwNWYzYTFkNjBjMjg7XHJcblxyXG5cclxuQmluZGluZ19kMDc5N2YyYThmZjE0NmM3OGQxZGJkZDE1ZTc0YzY2MS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV80ZDVlZTc3ZGQyM2U0NmI2YTllNjI0MzIwN2E1MmNlNTtcclxuXHJcblxyXG5Cb3JkZXJfZmNkOGUwNzFhMWZjNGM5ZDljOGIyMDE2ZDIxNTg3NzAuQ2hpbGQgPSBDb250ZW50UHJlc2VudGVyXzAyMjk4ODk4NThjYjRmNmQ5MDU3ODUxMTI0OTM5NzhiO1xyXG5cclxudmFyIEJpbmRpbmdfYjdiY2NmMTk0NGI4NDkzMWJjZmQyZThiNGEyOTBmNTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYjdiY2NmMTk0NGI4NDkzMWJjZmQyZThiNGEyOTBmNTguUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2VhZWVkYzA3OTJmZTRlYzhiOWEzMTE2OWU5NWE5NWJjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZWFlZWRjMDc5MmZlNGVjOGI5YTMxMTY5ZTk1YTk1YmMuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYjdiY2NmMTk0NGI4NDkzMWJjZmQyZThiNGEyOTBmNTguUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9lYWVlZGMwNzkyZmU0ZWM4YjlhMzExNjllOTVhOTViYztcclxuXHJcblxyXG5CaW5kaW5nX2I3YmNjZjE5NDRiODQ5MzFiY2ZkMmU4YjRhMjkwZjU4LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzRkNWVlNzdkZDIzZTQ2YjZhOWU2MjQzMjA3YTUyY2U1O1xyXG5cclxuXHJcbkJvcmRlcl83MGY3YjUyYzg4N2I0MTY0ODAwN2M1MzkzNTI1ODVlMS5DaGlsZCA9IEJvcmRlcl9mY2Q4ZTA3MWExZmM0YzlkOWM4YjIwMTZkMjE1ODc3MDtcclxuXHJcbnZhciBCaW5kaW5nX2ZmYzhiODRhY2QwNjQ1MjE5OWYyYjUzZGFhZGY4NjdmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2ZmYzhiODRhY2QwNjQ1MjE5OWYyYjUzZGFhZGY4NjdmLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV84YWY1ZDQwODM1ODE0MGY0YmE4YjZmODUzOTI2YjNjOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzhhZjVkNDA4MzU4MTQwZjRiYThiNmY4NTM5MjZiM2M4Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2ZmYzhiODRhY2QwNjQ1MjE5OWYyYjUzZGFhZGY4NjdmLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOGFmNWQ0MDgzNTgxNDBmNGJhOGI2Zjg1MzkyNmIzYzg7XHJcblxyXG5cclxuQmluZGluZ19mZmM4Yjg0YWNkMDY0NTIxOTlmMmI1M2RhYWRmODY3Zi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV80ZDVlZTc3ZGQyM2U0NmI2YTllNjI0MzIwN2E1MmNlNTtcclxuXHJcbnZhciBCaW5kaW5nXzEwNTE5NTIwZDA4NjRiZmZhNGVlOWJiNTMxZWY0MWVjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzEwNTE5NTIwZDA4NjRiZmZhNGVlOWJiNTMxZWY0MWVjLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlckJydXNoXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZjk4NThhMGFlMGE0NDRlMDljNGVmYzgxYjZjY2ZjOTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9mOTg1OGEwYWUwYTQ0NGUwOWM0ZWZjODFiNmNjZmM5OS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18xMDUxOTUyMGQwODY0YmZmYTRlZTliYjUzMWVmNDFlYy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2Y5ODU4YTBhZTBhNDQ0ZTA5YzRlZmM4MWI2Y2NmYzk5O1xyXG5cclxuXHJcbkJpbmRpbmdfMTA1MTk1MjBkMDg2NGJmZmE0ZWU5YmI1MzFlZjQxZWMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNGQ1ZWU3N2RkMjNlNDZiNmE5ZTYyNDMyMDdhNTJjZTU7XHJcblxyXG52YXIgQmluZGluZ19lY2U0ZjIwOWJiM2I0YWYyOGMxN2NjODNhZDA3ZDFhNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lY2U0ZjIwOWJiM2I0YWYyOGMxN2NjODNhZDA3ZDFhNi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJUaGlja25lc3NcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV83OTA4M2Y3Y2YzYjg0MGRhODA3MmM3OWYwMDYxYTRiMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzc5MDgzZjdjZjNiODQwZGE4MDcyYzc5ZjAwNjFhNGIxLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2VjZTRmMjA5YmIzYjRhZjI4YzE3Y2M4M2FkMDdkMWE2LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNzkwODNmN2NmM2I4NDBkYTgwNzJjNzlmMDA2MWE0YjE7XHJcblxyXG5cclxuQmluZGluZ19lY2U0ZjIwOWJiM2I0YWYyOGMxN2NjODNhZDA3ZDFhNi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV80ZDVlZTc3ZGQyM2U0NmI2YTllNjI0MzIwN2E1MmNlNTtcclxuXHJcblxyXG5cclxuQ29udGVudFByZXNlbnRlcl8wMjI5ODg5ODU4Y2I0ZjZkOTA1Nzg1MTEyNDkzOTc4Yi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRUZW1wbGF0ZVByb3BlcnR5LCBCaW5kaW5nXzk5YWVmMGJjNmY1NTRjZjJhOWRiM2MxNWZiZTJlYWJhKTtcclxuQ29udGVudFByZXNlbnRlcl8wMjI5ODg5ODU4Y2I0ZjZkOTA1Nzg1MTEyNDkzOTc4Yi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRQcm9wZXJ0eSwgQmluZGluZ19hYjcwMWE2MDU2Nzk0YjA0YmViZjI2M2Q0YTRlYTgxMSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMDIyOTg4OTg1OGNiNGY2ZDkwNTc4NTExMjQ5Mzk3OGIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lk1hcmdpblByb3BlcnR5LCBCaW5kaW5nX2VkNjhkYmZhYWQyZDRjYzg5NGI1MmMyNDUyZmVmMjkzKTtcclxuQ29udGVudFByZXNlbnRlcl8wMjI5ODg5ODU4Y2I0ZjZkOTA1Nzg1MTEyNDkzOTc4Yi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuSG9yaXpvbnRhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nX2ZhNDRhNjU1YTVkMjQzOWRiMmY5NTQ4YjI3ZmE4MzJmKTtcclxuQ29udGVudFByZXNlbnRlcl8wMjI5ODg5ODU4Y2I0ZjZkOTA1Nzg1MTEyNDkzOTc4Yi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuVmVydGljYWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19kMDc5N2YyYThmZjE0NmM3OGQxZGJkZDE1ZTc0YzY2MSk7XHJcbkJvcmRlcl9mY2Q4ZTA3MWExZmM0YzlkOWM4YjIwMTZkMjE1ODc3MC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfYjdiY2NmMTk0NGI4NDkzMWJjZmQyZThiNGEyOTBmNTgpO1xyXG5Cb3JkZXJfNzBmN2I1MmM4ODdiNDE2NDgwMDdjNTM5MzUyNTg1ZTEuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2ZmYzhiODRhY2QwNjQ1MjE5OWYyYjUzZGFhZGY4NjdmKTtcclxuQm9yZGVyXzcwZjdiNTJjODg3YjQxNjQ4MDA3YzUzOTM1MjU4NWUxLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlckJydXNoUHJvcGVydHksIEJpbmRpbmdfMTA1MTk1MjBkMDg2NGJmZmE0ZWU5YmI1MzFlZjQxZWMpO1xyXG5Cb3JkZXJfNzBmN2I1MmM4ODdiNDE2NDgwMDdjNTM5MzUyNTg1ZTEuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyVGhpY2tuZXNzUHJvcGVydHksIEJpbmRpbmdfZWNlNGYyMDliYjNiNGFmMjhjMTdjYzgzYWQwN2QxYTYpO1xyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOTIwOTIxZmQ1ZmE0NDE4ZDg4YTE2Yzg4Y2QzOGE2MWEsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZTg1NTAxZjQwY2ZmNDE4ZTlkZmM4YWE1NDFiMjM3ZGUsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lODU1MDFmNDBjZmY0MThlOWRmYzhhYTU0MWIyMzdkZSxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2U4NTUwMWY0MGNmZjQxOGU5ZGZjOGFhNTQxYjIzN2RlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZTg1NTAxZjQwY2ZmNDE4ZTlkZmM4YWE1NDFiMjM3ZGUsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lODU1MDFmNDBjZmY0MThlOWRmYzhhYTU0MWIyMzdkZSkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOTIwOTIxZmQ1ZmE0NDE4ZDg4YTE2Yzg4Y2QzOGE2MWEsIEJvcmRlcl9mY2Q4ZTA3MWExZmM0YzlkOWM4YjIwMTZkMjE1ODc3MCk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTVmYmE3OWVmYjE2NGFmOTgzMGIzYjJlNTQ3MzM2OWQsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNzE5M2RmMWQ5YzNiNDVhOGJiNTlhOWVkZjdjYjMzY2UsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV83MTkzZGYxZDljM2I0NWE4YmI1OWE5ZWRmN2NiMzNjZSxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzcxOTNkZjFkOWMzYjQ1YThiYjU5YTllZGY3Y2IzM2NlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNzE5M2RmMWQ5YzNiNDVhOGJiNTlhOWVkZjdjYjMzY2UsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV83MTkzZGYxZDljM2I0NWE4YmI1OWE5ZWRmN2NiMzNjZSkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTVmYmE3OWVmYjE2NGFmOTgzMGIzYjJlNTQ3MzM2OWQsIEJvcmRlcl9mY2Q4ZTA3MWExZmM0YzlkOWM4YjIwMTZkMjE1ODc3MCk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzNiZGU0MGZhYjgyNDE4OWI0ZmUyY2ZmYTM0MzRjYzQsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfOThlYzUzZGJjNGVkNGEzZWFkM2NkMTI3NDhmOGY0ZDgsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV85OGVjNTNkYmM0ZWQ0YTNlYWQzY2QxMjc0OGY4ZjRkOCxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzk4ZWM1M2RiYzRlZDRhM2VhZDNjZDEyNzQ4ZjhmNGQ4LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfOThlYzUzZGJjNGVkNGEzZWFkM2NkMTI3NDhmOGY0ZDgsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV85OGVjNTNkYmM0ZWQ0YTNlYWQzY2QxMjc0OGY4ZjRkOCkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzNiZGU0MGZhYjgyNDE4OWI0ZmUyY2ZmYTM0MzRjYzQsIEJvcmRlcl9mY2Q4ZTA3MWExZmM0YzlkOWM4YjIwMTZkMjE1ODc3MCk7XHJcblxyXG50ZW1wbGF0ZUluc3RhbmNlXzRkNWVlNzdkZDIzZTQ2YjZhOWU2MjQzMjA3YTUyY2U1LlRlbXBsYXRlQ29udGVudCA9IEJvcmRlcl83MGY3YjUyYzg4N2I0MTY0ODAwN2M1MzkzNTI1ODVlMTtcclxucmV0dXJuIHRlbXBsYXRlSW5zdGFuY2VfNGQ1ZWU3N2RkMjNlNDZiNmE5ZTYyNDMyMDdhNTJjZTU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwiLy8gPENTSFRNTDU+PFhhbWxIYXNoPkFCRkUzMDUzNDJGRUYzOTkyRjQ2QTM5MDMyQjVBNTEzPC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTUuMDQuMjAyMCAxOTozMzoyNTwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BQYWdlaG9tZceAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuUGFnZUhvbWUpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFBhZ2VIb21lIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50O1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0bkJlZ2luO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCBMYXlvdXRSb290O1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZUhvbWUueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfYzE1MGQwZTdmNzk3NDI1ODhkMTRlZTQzYWRhYzE2YjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dFJvb3RcIiwgR3JpZF9jMTUwZDBlN2Y3OTc0MjU4OGQxNGVlNDNhZGFjMTZiNSk7XHJcbkdyaWRfYzE1MGQwZTdmNzk3NDI1ODhkMTRlZTQzYWRhYzE2YjUuTmFtZSA9IFwiTGF5b3V0Um9vdFwiO1xyXG5HcmlkX2MxNTBkMGU3Zjc5NzQyNTg4ZDE0ZWU0M2FkYWMxNmI1LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbnZhciBHcmlkXzdhZTlhMmQwZmQ0ZTRiYTViMjc5MmY0NTBjYzZhNmUyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfNWM4OTk4MzBiNWE5NGRjYTk4MGU4ZTExYjVmMmIzMWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzVjODk5ODMwYjVhOTRkY2E5ODBlOGUxMWI1ZjJiMzFlLkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNWM4OTk4MzBiNWE5NGRjYTk4MGU4ZTExYjVmMmIzMWUuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wXzI0YTM2YTkzMTNmOTQwYzJhYWJhMmMxM2E3Yjk2NmE1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfMjRhMzZhOTMxM2Y5NDBjMmFhYmEyYzEzYTdiOTY2YTUuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF8yNGEzNmE5MzEzZjk0MGMyYWFiYTJjMTNhN2I5NjZhNS5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfYzc2MTcyMTY0YjQyNDk5ZGJiMDk0ZDIyMDMxNDM3NzUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9jNzYxNzIxNjRiNDI0OTlkYmIwOTRkMjIwMzE0Mzc3NS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wX2M3NjE3MjE2NGI0MjQ5OWRiYjA5NGQyMjAzMTQzNzc1Lk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF81Yzg5OTgzMGI1YTk0ZGNhOTgwZThlMTFiNWYyYjMxZS5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfMjRhMzZhOTMxM2Y5NDBjMmFhYmEyYzEzYTdiOTY2YTUpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzVjODk5ODMwYjVhOTRkY2E5ODBlOGUxMWI1ZjJiMzFlLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9jNzYxNzIxNjRiNDI0OTlkYmIwOTRkMjIwMzE0Mzc3NSk7XHJcblxyXG5cclxuR3JpZF83YWU5YTJkMGZkNGU0YmE1YjI3OTJmNDUwY2M2YTZlMi5CYWNrZ3JvdW5kID0gTGluZWFyR3JhZGllbnRCcnVzaF81Yzg5OTgzMGI1YTk0ZGNhOTgwZThlMTFiNWYyYjMxZTtcclxuXHJcbnZhciBCb3JkZXJfYjNlODk0OTUzZjBlNGM0NWE2YjNmNzUzNDU3NjFiOTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfYjNlODk0OTUzZjBlNGM0NWE2YjNmNzUzNDU3NjFiOTEpO1xyXG5Cb3JkZXJfYjNlODk0OTUzZjBlNGM0NWE2YjNmNzUzNDU3NjFiOTEuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfYjNlODk0OTUzZjBlNGM0NWE2YjNmNzUzNDU3NjFiOTEuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuQm9yZGVyX2IzZTg5NDk1M2YwZTRjNDVhNmIzZjc1MzQ1NzYxYjkxLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMCwgRyA9IChieXRlKTAsIEIgPSAoYnl0ZSkxMzkgfSk7XHJcbkJvcmRlcl9iM2U4OTQ5NTNmMGU0YzQ1YTZiM2Y3NTM0NTc2MWI5MS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfYjNlODk0OTUzZjBlNGM0NWE2YjNmNzUzNDU3NjFiOTEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfOWJkOGY3NDI2ZTNkNDhhODg0N2FmOWIwZThlYTUzMTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzliZDhmNzQyNmUzZDQ4YTg4NDdhZjliMGU4ZWE1MzE0LkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOWJkOGY3NDI2ZTNkNDhhODg0N2FmOWIwZThlYTUzMTQuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wXzQ1MzNmZGYxMDQ0MjQwMGQ5ZTg3ZWMxOWQ1OWI3NWQ3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfNDUzM2ZkZjEwNDQyNDAwZDllODdlYzE5ZDU5Yjc1ZDcuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF80NTMzZmRmMTA0NDI0MDBkOWU4N2VjMTlkNTliNzVkNy5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfOWYwYWM2NGE1NzVlNGNiNmE4ZmEyNTJlMDkwNWRlNzMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF85ZjBhYzY0YTU3NWU0Y2I2YThmYTI1MmUwOTA1ZGU3My5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wXzlmMGFjNjRhNTc1ZTRjYjZhOGZhMjUyZTA5MDVkZTczLk9mZnNldCA9IDAuNTg5NkQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wX2JlMDg1NDdjODZkZTQ0MzU5MmFlMjMyYjZmZjkxNWM2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfYmUwODU0N2M4NmRlNDQzNTkyYWUyMzJiNmZmOTE1YzYuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjQ2LCBHID0gKGJ5dGUpMjQ2LCBCID0gKGJ5dGUpMjQ2IH07XHJcbkdyYWRpZW50U3RvcF9iZTA4NTQ3Yzg2ZGU0NDM1OTJhZTIzMmI2ZmY5MTVjNi5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOWJkOGY3NDI2ZTNkNDhhODg0N2FmOWIwZThlYTUzMTQuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzQ1MzNmZGYxMDQ0MjQwMGQ5ZTg3ZWMxOWQ1OWI3NWQ3KTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF85YmQ4Zjc0MjZlM2Q0OGE4ODQ3YWY5YjBlOGVhNTMxNC5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfOWYwYWM2NGE1NzVlNGNiNmE4ZmEyNTJlMDkwNWRlNzMpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzliZDhmNzQyNmUzZDQ4YTg4NDdhZjliMGU4ZWE1MzE0LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9iZTA4NTQ3Yzg2ZGU0NDM1OTJhZTIzMmI2ZmY5MTVjNik7XHJcblxyXG5cclxuQm9yZGVyX2IzZTg5NDk1M2YwZTRjNDVhNmIzZjc1MzQ1NzYxYjkxLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzliZDhmNzQyNmUzZDQ4YTg4NDdhZjliMGU4ZWE1MzE0O1xyXG5cclxudmFyIFRyYW5zZm9ybUdyb3VwXzYzYTgxMmYzZmI2ZjRjZTM4NTY2NjBhNjZjZjRkNGNiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlRyYW5zZm9ybUdyb3VwKCk7XHJcbnZhciBTY2FsZVRyYW5zZm9ybV81MmFjMGY4MWQxODU0ODc2YjI3NzJhOTMzZGRhODY0NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5TY2FsZVRyYW5zZm9ybSgpO1xyXG5cclxudmFyIFJvdGF0ZVRyYW5zZm9ybV84MDZlOTU0MTlkOTI0M2VhOWM0Yzc2ZTdiMzg5ZmY0NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Sb3RhdGVUcmFuc2Zvcm0oKTtcclxuXHJcblRyYW5zZm9ybUdyb3VwXzYzYTgxMmYzZmI2ZjRjZTM4NTY2NjBhNjZjZjRkNGNiLkNoaWxkcmVuLkFkZChTY2FsZVRyYW5zZm9ybV81MmFjMGY4MWQxODU0ODc2YjI3NzJhOTMzZGRhODY0NSk7XHJcblRyYW5zZm9ybUdyb3VwXzYzYTgxMmYzZmI2ZjRjZTM4NTY2NjBhNjZjZjRkNGNiLkNoaWxkcmVuLkFkZChSb3RhdGVUcmFuc2Zvcm1fODA2ZTk1NDE5ZDkyNDNlYTljNGM3NmU3YjM4OWZmNDUpO1xyXG5cclxuXHJcbkJvcmRlcl9iM2U4OTQ5NTNmMGU0YzQ1YTZiM2Y3NTM0NTc2MWI5MS5SZW5kZXJUcmFuc2Zvcm0gPSBUcmFuc2Zvcm1Hcm91cF82M2E4MTJmM2ZiNmY0Y2UzODU2NjYwYTY2Y2Y0ZDRjYjtcclxuXHJcbnZhciBHcmlkX2RhMjMzZTE3MGU0ZjQ5MDBiNzQxNDA2ZDk4ODdkNmEyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIENvbHVtbkRlZmluaXRpb25fOWQxNTljOWI4NGZiNDE1OTlmZDg0YmI3OTFlYmExMDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMTljOGYxNWRmZTYyNDJlNDlmNTczZmZkMTYxNTExNmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMDkwYTcwZDRiZGQzNGJlYjljODBjOTNjMDEzYjJjN2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF9kYTIzM2UxNzBlNGY0OTAwYjc0MTQwNmQ5ODg3ZDZhMi5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl85ZDE1OWM5Yjg0ZmI0MTU5OWZkODRiYjc5MWViYTEwMCk7XHJcbkdyaWRfZGEyMzNlMTcwZTRmNDkwMGI3NDE0MDZkOTg4N2Q2YTIuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fMTljOGYxNWRmZTYyNDJlNDlmNTczZmZkMTYxNTExNmIpO1xyXG5HcmlkX2RhMjMzZTE3MGU0ZjQ5MDBiNzQxNDA2ZDk4ODdkNmEyLkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzA5MGE3MGQ0YmRkMzRiZWI5YzgwYzkzYzAxM2IyYzdlKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2JmNWViZTY0ZTFhODQzYmU5YjY5MWYyMGE4MjJmOTYzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl9iZjVlYmU2NGUxYTg0M2JlOWI2OTFmMjBhODIyZjk2My5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl8xODU0YmUyZDk4MDc0Nzk1YjdlYzBkODJhY2VmZGE3MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fMTg1NGJlMmQ5ODA3NDc5NWI3ZWMwZDgyYWNlZmRhNzMuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC41LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl8zMDE1YjU3ZmVmYjY0NzkzODkwY2EyNDk1YzYzZWIyMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fMzAxNWI1N2ZlZmI2NDc5Mzg5MGNhMjQ5NWM2M2ViMjIuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4yNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxuR3JpZF9kYTIzM2UxNzBlNGY0OTAwYjc0MTQwNmQ5ODg3ZDZhMi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl9iZjVlYmU2NGUxYTg0M2JlOWI2OTFmMjBhODIyZjk2Myk7XHJcbkdyaWRfZGEyMzNlMTcwZTRmNDkwMGI3NDE0MDZkOTg4N2Q2YTIuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMTg1NGJlMmQ5ODA3NDc5NWI3ZWMwZDgyYWNlZmRhNzMpO1xyXG5HcmlkX2RhMjMzZTE3MGU0ZjQ5MDBiNzQxNDA2ZDk4ODdkNmEyLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzMwMTViNTdmZWZiNjQ3OTM4OTBjYTI0OTVjNjNlYjIyKTtcclxuXHJcbnZhciBJbWFnZV9jNTI5ZGM3ZmE3MzM0NmY2OWI1ZGVmNmIxYWJiZDJlNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5JbWFnZSgpO1xyXG5JbWFnZV9jNTI5ZGM3ZmE3MzM0NmY2OWI1ZGVmNmIxYWJiZDJlNC5Tb3VyY2UgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpZ2xvYmFsOjpEb3ROZXRGb3JIdG1sNS5Db3JlLlR5cGVGcm9tU3RyaW5nQ29udmVydGVycy5Db252ZXJ0RnJvbUludmFyaWFudFN0cmluZyh0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpLCBAXCIvQ1NodG1sO2NvbXBvbmVudC9pbWcvSG9tZUltYWdlLmpwZ1wiKTtcclxuSW1hZ2VfYzUyOWRjN2ZhNzMzNDZmNjliNWRlZjZiMWFiYmQyZTQuU3RyZXRjaCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlN0cmV0Y2guVW5pZm9ybTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEltYWdlX2M1MjlkYzdmYTczMzQ2ZjY5YjVkZWY2YjFhYmJkMmU0LDMpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oSW1hZ2VfYzUyOWRjN2ZhNzMzNDZmNjliNWRlZjZiMWFiYmQyZTQsMyk7XHJcblxyXG5HcmlkX2RhMjMzZTE3MGU0ZjQ5MDBiNzQxNDA2ZDk4ODdkNmEyLkNoaWxkcmVuLkFkZChJbWFnZV9jNTI5ZGM3ZmE3MzM0NmY2OWI1ZGVmNmIxYWJiZDJlNCk7XHJcblxyXG5cclxuQm9yZGVyX2IzZTg5NDk1M2YwZTRjNDVhNmIzZjc1MzQ1NzYxYjkxLkNoaWxkID0gR3JpZF9kYTIzM2UxNzBlNGY0OTAwYjc0MTQwNmQ5ODg3ZDZhMjtcclxuXHJcblxyXG52YXIgQnV0dG9uX2E5NWZhZDRiZGNjMDRlYWQ5YzBkNTA3YjBiZGM3MzEzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0bkJlZ2luXCIsIEJ1dHRvbl9hOTVmYWQ0YmRjYzA0ZWFkOWMwZDUwN2IwYmRjNzMxMyk7XHJcbkJ1dHRvbl9hOTVmYWQ0YmRjYzA0ZWFkOWMwZDUwN2IwYmRjNzMxMy5OYW1lID0gXCJidG5CZWdpblwiO1xyXG5CdXR0b25fYTk1ZmFkNGJkY2MwNGVhZDljMGQ1MDdiMGJkYzczMTMuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fYTk1ZmFkNGJkY2MwNGVhZDljMGQ1MDdiMGJkYzczMTMuQ29udGVudCA9IEBcItCd0LDRh9Cw0YLRjCDRgNCw0LHQvtGC0YNcIjtcclxuQnV0dG9uX2E5NWZhZDRiZGNjMDRlYWQ5YzBkNTA3YjBiZGM3MzEzLkZvbnRTaXplID0gMjVEO1xyXG5CdXR0b25fYTk1ZmFkNGJkY2MwNGVhZDljMGQ1MDdiMGJkYzczMTMuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTIzOCwgQiA9IChieXRlKTIzOCB9KTtcclxuQnV0dG9uX2E5NWZhZDRiZGNjMDRlYWQ5YzBkNTA3YjBiZGM3MzEzLldpZHRoID0gMjgwRDtcclxuQnV0dG9uX2E5NWZhZDRiZGNjMDRlYWQ5YzBkNTA3YjBiZGM3MzEzLkhlaWdodCA9IDUwRDtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2E5NWZhZDRiZGNjMDRlYWQ5YzBkNTA3YjBiZGM3MzEzLDIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCdXR0b25fYTk1ZmFkNGJkY2MwNGVhZDljMGQ1MDdiMGJkYzczMTMsMSk7XHJcbkJ1dHRvbl9hOTVmYWQ0YmRjYzA0ZWFkOWMwZDUwN2IwYmRjNzMxMy5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbTtcclxuQnV0dG9uX2E5NWZhZDRiZGNjMDRlYWQ5YzBkNTA3YjBiZGM3MzEzLkNsaWNrICs9IEJ1dHRvbl9DbGljaztcclxuQnV0dG9uX2E5NWZhZDRiZGNjMDRlYWQ5YzBkNTA3YjBiZGM3MzEzLk1hcmdpbiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMCwgMCwgMCwgNTApO1xyXG5CdXR0b25fYTk1ZmFkNGJkY2MwNGVhZDljMGQ1MDdiMGJkYzczMTMuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV8xNTUyN2ZmYmE1ZTA0MjVjYjUwMDhjOTQ3YzM1NTE4OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlXzE1NTI3ZmZiYTVlMDQyNWNiNTAwOGM5NDdjMzU1MTg4LlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlXzE1NTI3ZmZiYTVlMDQyNWNiNTAwOGM5NDdjMzU1MTg4LlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzE1NTI3ZmZiYTVlMDQyNWNiNTAwOGM5NDdjMzU1MTg4KTtcclxuXHJcbkJ1dHRvbl9hOTVmYWQ0YmRjYzA0ZWFkOWMwZDUwN2IwYmRjNzMxMy5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV8xNTUyN2ZmYmE1ZTA0MjVjYjUwMDhjOTQ3YzM1NTE4ODtcclxuXHJcblxyXG5HcmlkXzdhZTlhMmQwZmQ0ZTRiYTViMjc5MmY0NTBjYzZhNmUyLkNoaWxkcmVuLkFkZChCb3JkZXJfYjNlODk0OTUzZjBlNGM0NWE2YjNmNzUzNDU3NjFiOTEpO1xyXG5HcmlkXzdhZTlhMmQwZmQ0ZTRiYTViMjc5MmY0NTBjYzZhNmUyLkNoaWxkcmVuLkFkZChCdXR0b25fYTk1ZmFkNGJkY2MwNGVhZDljMGQ1MDdiMGJkYzczMTMpO1xyXG5cclxuXHJcbkdyaWRfYzE1MGQwZTdmNzk3NDI1ODhkMTRlZTQzYWRhYzE2YjUuQ2hpbGRyZW4uQWRkKEdyaWRfN2FlOWEyZDBmZDRlNGJhNWIyNzkyZjQ1MGNjNmE2ZTIpO1xyXG5cclxuXHJcbnRoaXMuQ29udGVudCA9IEdyaWRfYzE1MGQwZTdmNzk3NDI1ODhkMTRlZTQzYWRhYzE2YjU7XHJcblxyXG5cclxuXHJcbmVsZW1lbnQgPSBCb3JkZXJfYjNlODk0OTUzZjBlNGM0NWE2YjNmNzUzNDU3NjFiOTE7XHJcbmJ0bkJlZ2luID0gQnV0dG9uX2E5NWZhZDRiZGNjMDRlYWQ5YzBkNTA3YjBiZGM3MzEzO1xyXG5MYXlvdXRSb290ID0gR3JpZF9jMTUwZDBlN2Y3OTc0MjU4OGQxNGVlNDNhZGFjMTZiNTtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2ZiOWY5NjAyNDk0NDQ4NzI4MTZjNDIwYzJhNjQ5N2FjIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfZmI5Zjk2MDI0OTQ0NDg3MjgxNmM0MjBjMmE2NDk3YWMgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9mYjlmOTYwMjQ5NDQ0ODcyODE2YzQyMGMyYTY0OTdhYyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2ZiOWY5NjAyNDk0NDQ4NzI4MTZjNDIwYzJhNjQ5N2FjIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9mYjlmOTYwMjQ5NDQ0ODcyODE2YzQyMGMyYTY0OTdhYyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfODdlYWI0ZjEzMjEyNGRjYTk3NDk1ZjI2ZGY0NDdkYmYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV84N2VhYjRmMTMyMTI0ZGNhOTc0OTVmMjZkZjQ0N2RiZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzg3ZWFiNGYxMzIxMjRkY2E5NzQ5NWYyNmRmNDQ3ZGJmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfODdlYWI0ZjEzMjEyNGRjYTk3NDk1ZjI2ZGY0NDdkYmYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5Xzg3ZWFiNGYxMzIxMjRkY2E5NzQ5NWYyNmRmNDQ3ZGJmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8wMDZjZWFiYzdhNGQ0ODA5YTRjYzFkNWRjMmUzZWNhYSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzAwNmNlYWJjN2E0ZDQ4MDlhNGNjMWQ1ZGMyZTNlY2FhIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMDA2Y2VhYmM3YTRkNDgwOWE0Y2MxZDVkYzJlM2VjYWEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8wMDZjZWFiYzdhNGQ0ODA5YTRjYzFkNWRjMmUzZWNhYSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMDA2Y2VhYmM3YTRkNDgwOWE0Y2MxZDVkYzJlM2VjYWEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfMTU1MjdmZmJhNWUwNDI1Y2I1MDA4Yzk0N2MzNTUxODgoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfMWFkOWU1YjFhYzY2NDQzM2E3NTBkYTdiMjU1ZWM1MTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlXzFhZDllNWIxYWM2NjQ0MzNhNzUwZGE3YjI1NWVjNTE4LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyXzI5YjJkNzFmNzI1NjRiYWI5MGMzZTQ4OTMyYmIwMDk2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl8yOWIyZDcxZjcyNTY0YmFiOTBjM2U0ODkzMmJiMDA5Nik7XHJcbkJvcmRlcl8yOWIyZDcxZjcyNTY0YmFiOTBjM2U0ODkzMmJiMDA5Ni5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfMjliMmQ3MWY3MjU2NGJhYjkwYzNlNDg5MzJiYjAwOTYuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfNmJhMTMzNTUxODFjNDMyN2IwNWQ1MTg4OWJhN2ZlMDcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwXzZiYTEzMzU1MTgxYzQzMjdiMDVkNTE4ODliYTdmZTA3KTtcclxuVmlzdWFsU3RhdGVHcm91cF82YmExMzM1NTE4MWM0MzI3YjA1ZDUxODg5YmE3ZmUwNy5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzAwNTMyNTViN2Q0MDQ0MzA4OWViYmJmY2IyZDU5Y2ZkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzAwNTMyNTViN2Q0MDQ0MzA4OWViYmJmY2IyZDU5Y2ZkKTtcclxuVmlzdWFsU3RhdGVfMDA1MzI1NWI3ZDQwNDQzMDg5ZWJiYmZjYjJkNTljZmQuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZjZhYWMxYTJjOGMyNDFhODkyZjI4MTc4NDAyYTMxMjcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV9mNmFhYzFhMmM4YzI0MWE4OTJmMjgxNzg0MDJhMzEyNyk7XHJcblZpc3VhbFN0YXRlX2Y2YWFjMWEyYzhjMjQxYTg5MmYyODE3ODQwMmEzMTI3Lk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzBmZmQzMzkxMzY5NjRkMWZiNTcyYTZkNWQ5ZDMwOGJlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jMzA1NjhjOTNiMzk0MDY5OGYyNjk0OWRhODBkNDYyZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jMzA1NjhjOTNiMzk0MDY5OGYyNjk0OWRhODBkNDYyZixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNWQ1YzJmYTE1ZmM1NDBjMTliNTQ5YjAxY2M4MTNmZmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV81ZDVjMmZhMTVmYzU0MGMxOWI1NDliMDFjYzgxM2ZmYS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzVkNWMyZmExNWZjNTQwYzE5YjU0OWIwMWNjODEzZmZhLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jMzA1NjhjOTNiMzk0MDY5OGYyNjk0OWRhODBkNDYyZi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNWQ1YzJmYTE1ZmM1NDBjMTliNTQ5YjAxY2M4MTNmZmEpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMGZmZDMzOTEzNjk2NGQxZmI1NzJhNmQ1ZDlkMzA4YmUuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2MzMDU2OGM5M2IzOTQwNjk4ZjI2OTQ5ZGE4MGQ0NjJmKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9mNmFhYzFhMmM4YzI0MWE4OTJmMjgxNzg0MDJhMzEyNy5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8wZmZkMzM5MTM2OTY0ZDFmYjU3MmE2ZDVkOWQzMDhiZTtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMGRjNTkwMjU2NWMwNGU2MGJjMjBlNWMyYWViMDIyNTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlXzBkYzU5MDI1NjVjMDRlNjBiYzIwZTVjMmFlYjAyMjUxKTtcclxuVmlzdWFsU3RhdGVfMGRjNTkwMjU2NWMwNGU2MGJjMjBlNWMyYWViMDIyNTEuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9lMDQyZTJjYTc5ZmM0ZjgyYjBjNDM0OWJjYzIyMTk0MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZDFkMjY4OGE1NzJiNGNiY2IxNDhkYTUxNWRkODljNjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZDFkMjY4OGE1NzJiNGNiY2IxNDhkYTUxNWRkODljNjUsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzEwNDM2ODljZDg5YzQwNzQ5ODcxYzNkMTUwMGUwZDdmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMTA0MzY4OWNkODljNDA3NDk4NzFjM2QxNTAwZTBkN2YuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8xMDQzNjg5Y2Q4OWM0MDc0OTg3MWMzZDE1MDBlMGQ3Zi5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZDFkMjY4OGE1NzJiNGNiY2IxNDhkYTUxNWRkODljNjUuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzEwNDM2ODljZDg5YzQwNzQ5ODcxYzNkMTUwMGUwZDdmKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2UwNDJlMmNhNzlmYzRmODJiMGM0MzQ5YmNjMjIxOTQxLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19kMWQyNjg4YTU3MmI0Y2JjYjE0OGRhNTE1ZGQ4OWM2NSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMGRjNTkwMjU2NWMwNGU2MGJjMjBlNWMyYWViMDIyNTEuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZTA0MmUyY2E3OWZjNGY4MmIwYzQzNDliY2MyMjE5NDE7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzNmZGNjM2VlZjA3MjQ2OTBiYzMxNWViZmZkZmQyMTVmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfM2ZkY2MzZWVmMDcyNDY5MGJjMzE1ZWJmZmRmZDIxNWYpO1xyXG5WaXN1YWxTdGF0ZV8zZmRjYzNlZWYwNzI0NjkwYmMzMTVlYmZmZGZkMjE1Zi5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF85NzQwMGQxY2JiYzQ0NGU4YmUxMmRiNzNlOTVmNzAwMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWM2YzVlNWMyOTBkNDMyMTlhMWRkYWYwMWEwOThlMGIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWM2YzVlNWMyOTBkNDMyMTlhMWRkYWYwMWEwOThlMGIsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzJlMzBlNTQyNGU0NDQ2ZmM5YmNkOWUzNTViMzVjNDNlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMmUzMGU1NDI0ZTQ0NDZmYzliY2Q5ZTM1NWIzNWM0M2UuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8yZTMwZTU0MjRlNDQ0NmZjOWJjZDllMzU1YjM1YzQzZS5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWM2YzVlNWMyOTBkNDMyMTlhMWRkYWYwMWEwOThlMGIuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzJlMzBlNTQyNGU0NDQ2ZmM5YmNkOWUzNTViMzVjNDNlKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzk3NDAwZDFjYmJjNDQ0ZThiZTEyZGI3M2U5NWY3MDAxLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185YzZjNWU1YzI5MGQ0MzIxOWExZGRhZjAxYTA5OGUwYik7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfM2ZkY2MzZWVmMDcyNDY5MGJjMzE1ZWJmZmRmZDIxNWYuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfOTc0MDBkMWNiYmM0NDRlOGJlMTJkYjczZTk1ZjcwMDE7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF82YmExMzM1NTE4MWM0MzI3YjA1ZDUxODg5YmE3ZmUwNy5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzAwNTMyNTViN2Q0MDQ0MzA4OWViYmJmY2IyZDU5Y2ZkKTtcclxuVmlzdWFsU3RhdGVHcm91cF82YmExMzM1NTE4MWM0MzI3YjA1ZDUxODg5YmE3ZmUwNy5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2Y2YWFjMWEyYzhjMjQxYTg5MmYyODE3ODQwMmEzMTI3KTtcclxuVmlzdWFsU3RhdGVHcm91cF82YmExMzM1NTE4MWM0MzI3YjA1ZDUxODg5YmE3ZmUwNy5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzBkYzU5MDI1NjVjMDRlNjBiYzIwZTVjMmFlYjAyMjUxKTtcclxuVmlzdWFsU3RhdGVHcm91cF82YmExMzM1NTE4MWM0MzI3YjA1ZDUxODg5YmE3ZmUwNy5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzNmZGNjM2VlZjA3MjQ2OTBiYzMxNWViZmZkZmQyMTVmKTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfNmJhMTMzNTUxODFjNDMyN2IwNWQ1MTg4OWJhN2ZlMDcpO1xyXG5cclxudmFyIEJvcmRlcl9mYWY4MzhjMTdkY2E0NTQ3OTljMmNmMzM5MDcyYTc2NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfZmFmODM4YzE3ZGNhNDU0Nzk5YzJjZjMzOTA3MmE3NjYpO1xyXG5Cb3JkZXJfZmFmODM4YzE3ZGNhNDU0Nzk5YzJjZjMzOTA3MmE3NjYuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyX2ZhZjgzOGMxN2RjYTQ1NDc5OWMyY2YzMzkwNzJhNzY2LkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyXzMyMGJkODBhOWJlNzQ1ZjQ5N2NhNWVkNDhlZmIxMWIzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfMzIwYmQ4MGE5YmU3NDVmNDk3Y2E1ZWQ0OGVmYjExYjMpO1xyXG5Db250ZW50UHJlc2VudGVyXzMyMGJkODBhOWJlNzQ1ZjQ5N2NhNWVkNDhlZmIxMWIzLk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfYTJmMmVjYWI5NWYyNDg0M2E1NDZhMjEyMzlkY2M2NWYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYTJmMmVjYWI5NWYyNDg0M2E1NDZhMjEyMzlkY2M2NWYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZTBlNTU2YzA1NWI3NDQ2MjhkZmRlMDYwNjBmOTJkNjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9lMGU1NTZjMDU1Yjc0NDYyOGRmZGUwNjA2MGY5MmQ2MS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19hMmYyZWNhYjk1ZjI0ODQzYTU0NmEyMTIzOWRjYzY1Zi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2UwZTU1NmMwNTViNzQ0NjI4ZGZkZTA2MDYwZjkyZDYxO1xyXG5cclxuXHJcbkJpbmRpbmdfYTJmMmVjYWI5NWYyNDg0M2E1NDZhMjEyMzlkY2M2NWYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMWFkOWU1YjFhYzY2NDQzM2E3NTBkYTdiMjU1ZWM1MTg7XHJcblxyXG52YXIgQmluZGluZ18xZDA1ZDYwOWRjOTY0N2FjYTBkYzVhYjQ5NjNlOGQ2NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18xZDA1ZDYwOWRjOTY0N2FjYTBkYzVhYjQ5NjNlOGQ2Ni5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNmM0YjNlODU5Mzc0NDNjMjg2OWRlZjdlYjljMjI1YTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82YzRiM2U4NTkzNzQ0M2MyODY5ZGVmN2ViOWMyMjVhMi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18xZDA1ZDYwOWRjOTY0N2FjYTBkYzVhYjQ5NjNlOGQ2Ni5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzZjNGIzZTg1OTM3NDQzYzI4NjlkZWY3ZWI5YzIyNWEyO1xyXG5cclxuXHJcbkJpbmRpbmdfMWQwNWQ2MDlkYzk2NDdhY2EwZGM1YWI0OTYzZThkNjYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMWFkOWU1YjFhYzY2NDQzM2E3NTBkYTdiMjU1ZWM1MTg7XHJcblxyXG52YXIgQmluZGluZ19kY2VmNTkxNTU2YjA0NTQ5OTY3OWMzNDE4NzViY2FkOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kY2VmNTkxNTU2YjA0NTQ5OTY3OWMzNDE4NzViY2FkOS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNmU5ZTRiYzlhNjgwNDkyNWIzODVlOGJlNDZmYzdkNDUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82ZTllNGJjOWE2ODA0OTI1YjM4NWU4YmU0NmZjN2Q0NS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kY2VmNTkxNTU2YjA0NTQ5OTY3OWMzNDE4NzViY2FkOS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzZlOWU0YmM5YTY4MDQ5MjViMzg1ZThiZTQ2ZmM3ZDQ1O1xyXG5cclxuXHJcbkJpbmRpbmdfZGNlZjU5MTU1NmIwNDU0OTk2NzljMzQxODc1YmNhZDkuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMWFkOWU1YjFhYzY2NDQzM2E3NTBkYTdiMjU1ZWM1MTg7XHJcblxyXG52YXIgQmluZGluZ18wMGZiNzg3NzJiNTY0OGQ5OTBhMmEzZjM0NDE3ZjdiYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18wMGZiNzg3NzJiNTY0OGQ5OTBhMmEzZjM0NDE3ZjdiYS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzkzZTVhZmIyYWY1ZjQ1MjlhN2ZlZTJiNGRhMzNiZjMxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOTNlNWFmYjJhZjVmNDUyOWE3ZmVlMmI0ZGEzM2JmMzEuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMDBmYjc4NzcyYjU2NDhkOTkwYTJhM2YzNDQxN2Y3YmEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85M2U1YWZiMmFmNWY0NTI5YTdmZWUyYjRkYTMzYmYzMTtcclxuXHJcblxyXG5CaW5kaW5nXzAwZmI3ODc3MmI1NjQ4ZDk5MGEyYTNmMzQ0MTdmN2JhLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzFhZDllNWIxYWM2NjQ0MzNhNzUwZGE3YjI1NWVjNTE4O1xyXG5cclxudmFyIEJpbmRpbmdfMGZkNjZmNTMwZDJlNDBjMzgxYmYxNWIwMGRmNmVjMDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMGZkNjZmNTMwZDJlNDBjMzgxYmYxNWIwMGRmNmVjMDYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNmQ0MjdhNDEyYzNkNDc0Y2FmYzJmZmUyNmM2YWI4MjIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82ZDQyN2E0MTJjM2Q0NzRjYWZjMmZmZTI2YzZhYjgyMi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18wZmQ2NmY1MzBkMmU0MGMzODFiZjE1YjAwZGY2ZWMwNi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzZkNDI3YTQxMmMzZDQ3NGNhZmMyZmZlMjZjNmFiODIyO1xyXG5cclxuXHJcbkJpbmRpbmdfMGZkNjZmNTMwZDJlNDBjMzgxYmYxNWIwMGRmNmVjMDYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMWFkOWU1YjFhYzY2NDQzM2E3NTBkYTdiMjU1ZWM1MTg7XHJcblxyXG5cclxuQm9yZGVyX2ZhZjgzOGMxN2RjYTQ1NDc5OWMyY2YzMzkwNzJhNzY2LkNoaWxkID0gQ29udGVudFByZXNlbnRlcl8zMjBiZDgwYTliZTc0NWY0OTdjYTVlZDQ4ZWZiMTFiMztcclxuXHJcbnZhciBCaW5kaW5nXzA3MGZiODkxZmM3ODQzYmZhOGQ3NGU4NmFmNzcwNjE3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzA3MGZiODkxZmM3ODQzYmZhOGQ3NGU4NmFmNzcwNjE3LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jZTUwMzljODc3YjU0MDVjOTM3MjljNjY3ODUyYTI4YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2NlNTAzOWM4NzdiNTQwNWM5MzcyOWM2Njc4NTJhMjhhLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzA3MGZiODkxZmM3ODQzYmZhOGQ3NGU4NmFmNzcwNjE3LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfY2U1MDM5Yzg3N2I1NDA1YzkzNzI5YzY2Nzg1MmEyOGE7XHJcblxyXG5cclxuQmluZGluZ18wNzBmYjg5MWZjNzg0M2JmYThkNzRlODZhZjc3MDYxNy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8xYWQ5ZTViMWFjNjY0NDMzYTc1MGRhN2IyNTVlYzUxODtcclxuXHJcblxyXG5Cb3JkZXJfMjliMmQ3MWY3MjU2NGJhYjkwYzNlNDg5MzJiYjAwOTYuQ2hpbGQgPSBCb3JkZXJfZmFmODM4YzE3ZGNhNDU0Nzk5YzJjZjMzOTA3MmE3NjY7XHJcblxyXG52YXIgQmluZGluZ183ZjRkNGVmY2JmNzg0MGE1ODkxNTkwYjYzZWFlMmE5MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ183ZjRkNGVmY2JmNzg0MGE1ODkxNTkwYjYzZWFlMmE5MS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMzAyNWRiNjkyN2U0NDBiMTlhNDZlZDJjNzg0NmU2ZTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8zMDI1ZGI2OTI3ZTQ0MGIxOWE0NmVkMmM3ODQ2ZTZlMy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ183ZjRkNGVmY2JmNzg0MGE1ODkxNTkwYjYzZWFlMmE5MS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzMwMjVkYjY5MjdlNDQwYjE5YTQ2ZWQyYzc4NDZlNmUzO1xyXG5cclxuXHJcbkJpbmRpbmdfN2Y0ZDRlZmNiZjc4NDBhNTg5MTU5MGI2M2VhZTJhOTEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMWFkOWU1YjFhYzY2NDQzM2E3NTBkYTdiMjU1ZWM1MTg7XHJcblxyXG52YXIgQmluZGluZ182MmIwNzQ0ZDc0MTg0MzViYmUzNTlkNWIyOTVhZjYyYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ182MmIwNzQ0ZDc0MTg0MzViYmUzNTlkNWIyOTVhZjYyYy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzkzNTE1ODYxNWZiYzRiODZiMzNiMGViNDZmYzgyMWVkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOTM1MTU4NjE1ZmJjNGI4NmIzM2IwZWI0NmZjODIxZWQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNjJiMDc0NGQ3NDE4NDM1YmJlMzU5ZDViMjk1YWY2MmMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85MzUxNTg2MTVmYmM0Yjg2YjMzYjBlYjQ2ZmM4MjFlZDtcclxuXHJcblxyXG5CaW5kaW5nXzYyYjA3NDRkNzQxODQzNWJiZTM1OWQ1YjI5NWFmNjJjLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzFhZDllNWIxYWM2NjQ0MzNhNzUwZGE3YjI1NWVjNTE4O1xyXG5cclxudmFyIEJpbmRpbmdfOGM1YThhNGQwY2JhNGQwYWFjZTk3NDQwM2NkOWIwYWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOGM1YThhNGQwY2JhNGQwYWFjZTk3NDQwM2NkOWIwYWUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNzE2MDVhZmIwOTRhNDkxNGIxZDZmZTIwZTMyMjBlNDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV83MTYwNWFmYjA5NGE0OTE0YjFkNmZlMjBlMzIyMGU0MC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184YzVhOGE0ZDBjYmE0ZDBhYWNlOTc0NDAzY2Q5YjBhZS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzcxNjA1YWZiMDk0YTQ5MTRiMWQ2ZmUyMGUzMjIwZTQwO1xyXG5cclxuXHJcbkJpbmRpbmdfOGM1YThhNGQwY2JhNGQwYWFjZTk3NDQwM2NkOWIwYWUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMWFkOWU1YjFhYzY2NDQzM2E3NTBkYTdiMjU1ZWM1MTg7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfMzIwYmQ4MGE5YmU3NDVmNDk3Y2E1ZWQ0OGVmYjExYjMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ19hMmYyZWNhYjk1ZjI0ODQzYTU0NmEyMTIzOWRjYzY1Zik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMzIwYmQ4MGE5YmU3NDVmNDk3Y2E1ZWQ0OGVmYjExYjMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfMWQwNWQ2MDlkYzk2NDdhY2EwZGM1YWI0OTYzZThkNjYpO1xyXG5Db250ZW50UHJlc2VudGVyXzMyMGJkODBhOWJlNzQ1ZjQ5N2NhNWVkNDhlZmIxMWIzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ19kY2VmNTkxNTU2YjA0NTQ5OTY3OWMzNDE4NzViY2FkOSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMzIwYmQ4MGE5YmU3NDVmNDk3Y2E1ZWQ0OGVmYjExYjMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ18wMGZiNzg3NzJiNTY0OGQ5OTBhMmEzZjM0NDE3ZjdiYSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMzIwYmQ4MGE5YmU3NDVmNDk3Y2E1ZWQ0OGVmYjExYjMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfMGZkNjZmNTMwZDJlNDBjMzgxYmYxNWIwMGRmNmVjMDYpO1xyXG5Cb3JkZXJfZmFmODM4YzE3ZGNhNDU0Nzk5YzJjZjMzOTA3MmE3NjYuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzA3MGZiODkxZmM3ODQzYmZhOGQ3NGU4NmFmNzcwNjE3KTtcclxuQm9yZGVyXzI5YjJkNzFmNzI1NjRiYWI5MGMzZTQ4OTMyYmIwMDk2LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ183ZjRkNGVmY2JmNzg0MGE1ODkxNTkwYjYzZWFlMmE5MSk7XHJcbkJvcmRlcl8yOWIyZDcxZjcyNTY0YmFiOTBjM2U0ODkzMmJiMDA5Ni5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nXzYyYjA3NDRkNzQxODQzNWJiZTM1OWQ1YjI5NWFmNjJjKTtcclxuQm9yZGVyXzI5YjJkNzFmNzI1NjRiYWI5MGMzZTQ4OTMyYmIwMDk2LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nXzhjNWE4YTRkMGNiYTRkMGFhY2U5NzQ0MDNjZDliMGFlKTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2MzMDU2OGM5M2IzOTQwNjk4ZjI2OTQ5ZGE4MGQ0NjJmLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2ZiOWY5NjAyNDk0NDQ4NzI4MTZjNDIwYzJhNjQ5N2FjLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfZmI5Zjk2MDI0OTQ0NDg3MjgxNmM0MjBjMmE2NDk3YWMsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9mYjlmOTYwMjQ5NDQ0ODcyODE2YzQyMGMyYTY0OTdhYywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2ZiOWY5NjAyNDk0NDQ4NzI4MTZjNDIwYzJhNjQ5N2FjLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfZmI5Zjk2MDI0OTQ0NDg3MjgxNmM0MjBjMmE2NDk3YWMpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2MzMDU2OGM5M2IzOTQwNjk4ZjI2OTQ5ZGE4MGQ0NjJmLCBCb3JkZXJfZmFmODM4YzE3ZGNhNDU0Nzk5YzJjZjMzOTA3MmE3NjYpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2QxZDI2ODhhNTcyYjRjYmNiMTQ4ZGE1MTVkZDg5YzY1LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5Xzg3ZWFiNGYxMzIxMjRkY2E5NzQ5NWYyNmRmNDQ3ZGJmLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfODdlYWI0ZjEzMjEyNGRjYTk3NDk1ZjI2ZGY0NDdkYmYsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV84N2VhYjRmMTMyMTI0ZGNhOTc0OTVmMjZkZjQ0N2RiZiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5Xzg3ZWFiNGYxMzIxMjRkY2E5NzQ5NWYyNmRmNDQ3ZGJmLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfODdlYWI0ZjEzMjEyNGRjYTk3NDk1ZjI2ZGY0NDdkYmYpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2QxZDI2ODhhNTcyYjRjYmNiMTQ4ZGE1MTVkZDg5YzY1LCBCb3JkZXJfZmFmODM4YzE3ZGNhNDU0Nzk5YzJjZjMzOTA3MmE3NjYpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzljNmM1ZTVjMjkwZDQzMjE5YTFkZGFmMDFhMDk4ZTBiLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzAwNmNlYWJjN2E0ZDQ4MDlhNGNjMWQ1ZGMyZTNlY2FhLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMDA2Y2VhYmM3YTRkNDgwOWE0Y2MxZDVkYzJlM2VjYWEsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wMDZjZWFiYzdhNGQ0ODA5YTRjYzFkNWRjMmUzZWNhYSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzAwNmNlYWJjN2E0ZDQ4MDlhNGNjMWQ1ZGMyZTNlY2FhLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMDA2Y2VhYmM3YTRkNDgwOWE0Y2MxZDVkYzJlM2VjYWEpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzljNmM1ZTVjMjkwZDQzMjE5YTFkZGFmMDFhMDk4ZTBiLCBCb3JkZXJfZmFmODM4YzE3ZGNhNDU0Nzk5YzJjZjMzOTA3MmE3NjYpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV8xYWQ5ZTViMWFjNjY0NDMzYTc1MGRhN2IyNTVlYzUxOC5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfMjliMmQ3MWY3MjU2NGJhYjkwYzNlNDg5MzJiYjAwOTY7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlXzFhZDllNWIxYWM2NjQ0MzNhNzUwZGE3YjI1NWVjNTE4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD43MjAyQkE0OUVBN0RDMDVCNkI5QTYyMkVGNjRCMDlDRDwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgMTk6MzM6MjU8L0NvbXBpbGF0aW9uRGF0ZT48L0NTSFRNTDU+XHJcblxyXG5cclxuXHJcbnB1YmxpYyBzdGF0aWMgY2xhc3Mgx4DHgENzaHRtbMeAx4BDb21wb25lbnTHgMeAUGFnZXVwbG9hZMeAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuUGFnZVVwbG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5UeXBlSW5zdGFudGlhdGlvbkhlbHBlci5JbnN0YW50aWF0ZSh0eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBhdXRvLWdlbmVyYXRlZCBieSBcIkMjL1hBTUwgZm9yIEhUTUw1XCJcclxuLy9cclxuLy8gICAgIENoYW5nZXMgdG8gdGhpcyBmaWxlIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IgYW5kIHdpbGwgYmUgbG9zdCBpZlxyXG4vLyAgICAgdGhlIGNvZGUgaXMgcmVnZW5lcmF0ZWQuXHJcbi8vIDwvYXV0by1nZW5lcmF0ZWQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbnBhcnRpYWwgY2xhc3MgUGFnZVVwbG9hZCA6IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlBhZ2Vcclxue1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMTY5LCA2NDksIDA2MjggLy8gUHJldmVudHMgd2FybmluZyBDUzAxNjkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgdXNlZCcpLCBDUzA2NDkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgYXNzaWduZWQgdG8sIGFuZCB3aWxsIGFsd2F5cyBoYXZlIGl0cyBkZWZhdWx0IHZhbHVlIG51bGwnKSwgYW5kIENTMDYyOCAoJ21lbWJlciA6IG5ldyBwcm90ZWN0ZWQgbWVtYmVyIGRlY2xhcmVkIGluIHNlYWxlZCBjbGFzcycpXHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24gYnRuQ2FuY2VsO1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZVVwbG9hZC54YW1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMDE4NFxyXG5cclxuXHJcblxyXG52YXIgR3JpZF9kM2MxZDhiODUwMjQ0NGMxYjYzZWFkOTcxMTQyZjJiNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkKCk7XHJcbnZhciBSb3dEZWZpbml0aW9uXzExYmUzNzBmMGU3MTRkNGJiMGE3NTUxM2Y4MDZhZDc4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzlkYWFmNDdmNDNhYjRkY2U4M2YyNGU2NjBlZDc2ZmM2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2QwY2ViZTk3ODNhNjRkYWNhNmIzMWUyN2UwZjU3OTAyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzA5YzViNTY3NmMxNjRjZWU5ZTNiYzFkZmYyNGU1YTVlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbkdyaWRfZDNjMWQ4Yjg1MDI0NDRjMWI2M2VhZDk3MTE0MmYyYjYuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMTFiZTM3MGYwZTcxNGQ0YmIwYTc1NTEzZjgwNmFkNzgpO1xyXG5HcmlkX2QzYzFkOGI4NTAyNDQ0YzFiNjNlYWQ5NzExNDJmMmI2LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzlkYWFmNDdmNDNhYjRkY2U4M2YyNGU2NjBlZDc2ZmM2KTtcclxuR3JpZF9kM2MxZDhiODUwMjQ0NGMxYjYzZWFkOTcxMTQyZjJiNi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl9kMGNlYmU5NzgzYTY0ZGFjYTZiMzFlMjdlMGY1NzkwMik7XHJcbkdyaWRfZDNjMWQ4Yjg1MDI0NDRjMWI2M2VhZDk3MTE0MmYyYjYuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMDljNWI1Njc2YzE2NGNlZTllM2JjMWRmZjI0ZTVhNWUpO1xyXG5cclxudmFyIEJvcmRlcl83ZGJhZjdmOTgwNmU0NzEzYWE4NmYzMDEyYmI0NWY0NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxuQm9yZGVyXzdkYmFmN2Y5ODA2ZTQ3MTNhYTg2ZjMwMTJiYjQ1ZjQ3LlZlcnRpY2FsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmVydGljYWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfN2RiYWY3Zjk4MDZlNDcxM2FhODZmMzAxMmJiNDVmNDcsMCk7XHJcbnZhciBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfNzM2NzIzMDI2YTAzNDA2ODkzYjEyNGE4NTM0NDQ2NWEgPSBuZXcgZ2xvYmFsOjpDU0hUTUw1LkV4dGVuc2lvbnMuRmlsZU9wZW5EaWFsb2cuQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlbkRpYWxvZygpO1xyXG5Db250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfNzM2NzIzMDI2YTAzNDA2ODkzYjEyNGE4NTM0NDQ2NWEuRmlsZU9wZW5lZCArPSBPbkZpbGVPcGVuZWQ7XHJcbkNvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV83MzY3MjMwMjZhMDM0MDY4OTNiMTI0YTg1MzQ0NDY1YS5GaWx0ZXIgPSBAXCIqLmpzb24sKi50eHRcIjtcclxuQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlXzczNjcyMzAyNmEwMzQwNjg5M2IxMjRhODUzNDQ0NjVhLlJlc3VsdEtpbmQgPSBnbG9iYWw6OkNTSFRNTDUuRXh0ZW5zaW9ucy5GaWxlT3BlbkRpYWxvZy5SZXN1bHRLaW5kLlRleHQ7XHJcblxyXG5Cb3JkZXJfN2RiYWY3Zjk4MDZlNDcxM2FhODZmMzAxMmJiNDVmNDcuQ2hpbGQgPSBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfNzM2NzIzMDI2YTAzNDA2ODkzYjEyNGE4NTM0NDQ2NWE7XHJcblxyXG5cclxudmFyIEJ1dHRvbl9lNDZlZGIxOGZmZjc0OTAwOGUzMzc0MGZhNzQ5NjQ2NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuQnV0dG9uX2U0NmVkYjE4ZmZmNzQ5MDA4ZTMzNzQwZmE3NDk2NDY2LkNvbnRlbnQgPSBAXCLQn9GA0LXQtNGL0LTRg9GJ0LDRjyDRgdGC0YDQsNC90LjRhtCwXCI7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuQ2FuY2VsXCIsIEJ1dHRvbl9lNDZlZGIxOGZmZjc0OTAwOGUzMzc0MGZhNzQ5NjQ2Nik7XHJcbkJ1dHRvbl9lNDZlZGIxOGZmZjc0OTAwOGUzMzc0MGZhNzQ5NjQ2Ni5OYW1lID0gXCJidG5DYW5jZWxcIjtcclxuQnV0dG9uX2U0NmVkYjE4ZmZmNzQ5MDA4ZTMzNzQwZmE3NDk2NDY2LkNsaWNrICs9IEJ0bkNhbmNlbF9DbGljaztcclxuQnV0dG9uX2U0NmVkYjE4ZmZmNzQ5MDA4ZTMzNzQwZmE3NDk2NDY2LldpZHRoID0gMjUwRDtcclxuQnV0dG9uX2U0NmVkYjE4ZmZmNzQ5MDA4ZTMzNzQwZmE3NDk2NDY2LkhlaWdodCA9IDUwRDtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2U0NmVkYjE4ZmZmNzQ5MDA4ZTMzNzQwZmE3NDk2NDY2LDEpO1xyXG5CdXR0b25fZTQ2ZWRiMThmZmY3NDkwMDhlMzM3NDBmYTc0OTY0NjYuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI0OSwgRyA9IChieXRlKTIyMiwgQiA9IChieXRlKTI0MiB9KTtcclxuQnV0dG9uX2U0NmVkYjE4ZmZmNzQ5MDA4ZTMzNzQwZmE3NDk2NDY2LkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl9lNDZlZGIxOGZmZjc0OTAwOGUzMzc0MGZhNzQ5NjQ2Ni5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uX2U0NmVkYjE4ZmZmNzQ5MDA4ZTMzNzQwZmE3NDk2NDY2LlZlcnRpY2FsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmVydGljYWxBbGlnbm1lbnQuQm90dG9tO1xyXG5CdXR0b25fZTQ2ZWRiMThmZmY3NDkwMDhlMzM3NDBmYTc0OTY0NjYuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fZTQ2ZWRiMThmZmY3NDkwMDhlMzM3NDBmYTc0OTY0NjYuRm9udFNpemUgPSAyMEQ7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfMmIwNmY1OGMzMDk2NGQyY2I1YjcyMjExOWU1YjkzYWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV8yYjA2ZjU4YzMwOTY0ZDJjYjViNzIyMTE5ZTViOTNhYi5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV8yYjA2ZjU4YzMwOTY0ZDJjYjViNzIyMTE5ZTViOTNhYi5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV8yYjA2ZjU4YzMwOTY0ZDJjYjViNzIyMTE5ZTViOTNhYik7XHJcblxyXG5CdXR0b25fZTQ2ZWRiMThmZmY3NDkwMDhlMzM3NDBmYTc0OTY0NjYuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfMmIwNmY1OGMzMDk2NGQyY2I1YjcyMjExOWU1YjkzYWI7XHJcblxyXG5cclxuR3JpZF9kM2MxZDhiODUwMjQ0NGMxYjYzZWFkOTcxMTQyZjJiNi5DaGlsZHJlbi5BZGQoQm9yZGVyXzdkYmFmN2Y5ODA2ZTQ3MTNhYTg2ZjMwMTJiYjQ1ZjQ3KTtcclxuR3JpZF9kM2MxZDhiODUwMjQ0NGMxYjYzZWFkOTcxMTQyZjJiNi5DaGlsZHJlbi5BZGQoQnV0dG9uX2U0NmVkYjE4ZmZmNzQ5MDA4ZTMzNzQwZmE3NDk2NDY2KTtcclxuXHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkX2QzYzFkOGI4NTAyNDQ0YzFiNjNlYWQ5NzExNDJmMmI2O1xyXG5cclxuXHJcblxyXG5idG5DYW5jZWwgPSBCdXR0b25fZTQ2ZWRiMThmZmY3NDkwMDhlMzM3NDBmYTc0OTY0NjY7XHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9jZmNjOWZlMjAyYjU0N2JmOTNjMzY4ZWRjZDU5MmYwNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2NmY2M5ZmUyMDJiNTQ3YmY5M2MzNjhlZGNkNTkyZjA3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfY2ZjYzlmZTIwMmI1NDdiZjkzYzM2OGVkY2Q1OTJmMDcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9jZmNjOWZlMjAyYjU0N2JmOTNjMzY4ZWRjZDU5MmYwNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfY2ZjYzlmZTIwMmI1NDdiZjkzYzM2OGVkY2Q1OTJmMDcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzdhZWFlOTYwZjkzMTQ0NWZiNmI5YjI5MTMzZjQ1ZjU3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfN2FlYWU5NjBmOTMxNDQ1ZmI2YjliMjkxMzNmNDVmNTcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV83YWVhZTk2MGY5MzE0NDVmYjZiOWIyOTEzM2Y0NWY1NyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzdhZWFlOTYwZjkzMTQ0NWZiNmI5YjI5MTMzZjQ1ZjU3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV83YWVhZTk2MGY5MzE0NDVmYjZiOWIyOTEzM2Y0NWY1NyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNDcwNGNiNzQ0YjI0NGVmNTkzNjY0YjU2MmFjYTM4MjQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV80NzA0Y2I3NDRiMjQ0ZWY1OTM2NjRiNTYyYWNhMzgyNCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzQ3MDRjYjc0NGIyNDRlZjU5MzY2NGI1NjJhY2EzODI0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNDcwNGNiNzQ0YjI0NGVmNTkzNjY0YjU2MmFjYTM4MjQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzQ3MDRjYjc0NGIyNDRlZjU5MzY2NGI1NjJhY2EzODI0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UgSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzJiMDZmNThjMzA5NjRkMmNiNWI3MjIxMTllNWI5M2FiKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wgdGVtcGxhdGVPd25lcilcclxuICAgICAgICB7XHJcbnZhciB0ZW1wbGF0ZUluc3RhbmNlXzc3ZTQ2MDlkZDNkZDRkMmViNTE3OGY3ZWIwNGFlMDMzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UoKTtcclxudGVtcGxhdGVJbnN0YW5jZV83N2U0NjA5ZGQzZGQ0ZDJlYjUxNzhmN2ViMDRhZTAzMy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVPd25lcjtcclxudmFyIEJvcmRlcl81MjJhOTE1NDZmMDI0OWQ2YTRlZDkxY2E0ZjRhYmNjZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJPdXRlckJvcmRlclwiLCBCb3JkZXJfNTIyYTkxNTQ2ZjAyNDlkNmE0ZWQ5MWNhNGY0YWJjY2YpO1xyXG5Cb3JkZXJfNTIyYTkxNTQ2ZjAyNDlkNmE0ZWQ5MWNhNGY0YWJjY2YuTmFtZSA9IFwiT3V0ZXJCb3JkZXJcIjtcclxuQm9yZGVyXzUyMmE5MTU0NmYwMjQ5ZDZhNGVkOTFjYTRmNGFiY2NmLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBWaXN1YWxTdGF0ZUdyb3VwXzg2YjIxNjc1OGZiMDQyZmU4N2Y1ZGJlMjc1ZjUwMmJjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlR3JvdXAoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb21tb25TdGF0ZXNcIiwgVmlzdWFsU3RhdGVHcm91cF84NmIyMTY3NThmYjA0MmZlODdmNWRiZTI3NWY1MDJiYyk7XHJcblZpc3VhbFN0YXRlR3JvdXBfODZiMjE2NzU4ZmIwNDJmZTg3ZjVkYmUyNzVmNTAyYmMuTmFtZSA9IFwiQ29tbW9uU3RhdGVzXCI7XHJcbnZhciBWaXN1YWxTdGF0ZV83NDQ4ZjFkOWI2ZWU0ZjJiYTY0YTQ5MWRhMDQxZTFlNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk5vcm1hbFwiLCBWaXN1YWxTdGF0ZV83NDQ4ZjFkOWI2ZWU0ZjJiYTY0YTQ5MWRhMDQxZTFlNSk7XHJcblZpc3VhbFN0YXRlXzc0NDhmMWQ5YjZlZTRmMmJhNjRhNDkxZGEwNDFlMWU1Lk5hbWUgPSBcIk5vcm1hbFwiO1xyXG5cclxudmFyIFZpc3VhbFN0YXRlXzg1MDljNzFhODhhMTQ5NWY5NDA0NzNlYjhlMmE5YmU1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUG9pbnRlck92ZXJcIiwgVmlzdWFsU3RhdGVfODUwOWM3MWE4OGExNDk1Zjk0MDQ3M2ViOGUyYTliZTUpO1xyXG5WaXN1YWxTdGF0ZV84NTA5YzcxYTg4YTE0OTVmOTQwNDczZWI4ZTJhOWJlNS5OYW1lID0gXCJQb2ludGVyT3ZlclwiO1xyXG52YXIgU3Rvcnlib2FyZF9lZTNkM2E2ODJkYTQ0ZjYzOGZkNGQ1MGI0ZjNmZGRiMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNTRjY2EzMTZjNmMwNDc3NGFlMjdlNTMyNjI1MDJmZDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNTRjY2EzMTZjNmMwNDc3NGFlMjdlNTMyNjI1MDJmZDIsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzFjZGYzNDRhNzI0NzQ4Nzc4YzA5ZTZlMDJlZDIxN2NmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMWNkZjM0NGE3MjQ3NDg3NzhjMDllNmUwMmVkMjE3Y2YuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8xY2RmMzQ0YTcyNDc0ODc3OGMwOWU2ZTAyZWQyMTdjZi5WYWx1ZSA9IEBcIiMxMTAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNTRjY2EzMTZjNmMwNDc3NGFlMjdlNTMyNjI1MDJmZDIuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzFjZGYzNDRhNzI0NzQ4Nzc4YzA5ZTZlMDJlZDIxN2NmKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2VlM2QzYTY4MmRhNDRmNjM4ZmQ0ZDUwYjRmM2ZkZGIxLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181NGNjYTMxNmM2YzA0Nzc0YWUyN2U1MzI2MjUwMmZkMik7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfODUwOWM3MWE4OGExNDk1Zjk0MDQ3M2ViOGUyYTliZTUuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZWUzZDNhNjgyZGE0NGY2MzhmZDRkNTBiNGYzZmRkYjE7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzhjZTFhZjkzNzk4NjRmYjliOTA2YjBkMGYxMTU2YmRlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUHJlc3NlZFwiLCBWaXN1YWxTdGF0ZV84Y2UxYWY5Mzc5ODY0ZmI5YjkwNmIwZDBmMTE1NmJkZSk7XHJcblZpc3VhbFN0YXRlXzhjZTFhZjkzNzk4NjRmYjliOTA2YjBkMGYxMTU2YmRlLk5hbWUgPSBcIlByZXNzZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfZTEwZTM0ZmQ4YmVkNDA1ZmJiZDdjNTA0ODIyNTAyZGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzFmNDE1Y2I0MWNlODQ5YzRhZTQ2NzBlZTI3Nzk3ZjlmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzFmNDE1Y2I0MWNlODQ5YzRhZTQ2NzBlZTI3Nzk3ZjlmLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mMDk3NDIwNjg1ZTQ0MTVjOWVkNzIzNWU5NTVlN2VmYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2YwOTc0MjA2ODVlNDQxNWM5ZWQ3MjM1ZTk1NWU3ZWZjLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZjA5NzQyMDY4NWU0NDE1YzllZDcyMzVlOTU1ZTdlZmMuVmFsdWUgPSBAXCIjMjIwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzFmNDE1Y2I0MWNlODQ5YzRhZTQ2NzBlZTI3Nzk3ZjlmLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mMDk3NDIwNjg1ZTQ0MTVjOWVkNzIzNWU5NTVlN2VmYyk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9lMTBlMzRmZDhiZWQ0MDVmYmJkN2M1MDQ4MjI1MDJkZS5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMWY0MTVjYjQxY2U4NDljNGFlNDY3MGVlMjc3OTdmOWYpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzhjZTFhZjkzNzk4NjRmYjliOTA2YjBkMGYxMTU2YmRlLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2UxMGUzNGZkOGJlZDQwNWZiYmQ3YzUwNDgyMjUwMmRlO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV80M2E0ODBiZmE1ZmY0ZDhlYTY0MDg2NzU0ZGY1ZDY4YyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkRpc2FibGVkXCIsIFZpc3VhbFN0YXRlXzQzYTQ4MGJmYTVmZjRkOGVhNjQwODY3NTRkZjVkNjhjKTtcclxuVmlzdWFsU3RhdGVfNDNhNDgwYmZhNWZmNGQ4ZWE2NDA4Njc1NGRmNWQ2OGMuTmFtZSA9IFwiRGlzYWJsZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfZWFlNmRiYzcyOWUxNDM3ZmE3Yjg0ZTA4YjgxNGRhMjcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E1NzAzZmY4MThkZDQ4Mjg5NTQ4NzRmZjE1NTlmZDNjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E1NzAzZmY4MThkZDQ4Mjg5NTQ4NzRmZjE1NTlmZDNjLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV80MzJmNmRjN2JhOTQ0YzE4YmQ3MzQ0N2IyZTM3ODQxZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzQzMmY2ZGM3YmE5NDRjMThiZDczNDQ3YjJlMzc4NDFmLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNDMyZjZkYzdiYTk0NGMxOGJkNzM0NDdiMmUzNzg0MWYuVmFsdWUgPSBAXCIjMzNGRkZGRkZcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E1NzAzZmY4MThkZDQ4Mjg5NTQ4NzRmZjE1NTlmZDNjLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV80MzJmNmRjN2JhOTQ0YzE4YmQ3MzQ0N2IyZTM3ODQxZik7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9lYWU2ZGJjNzI5ZTE0MzdmYTdiODRlMDhiODE0ZGEyNy5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYTU3MDNmZjgxOGRkNDgyODk1NDg3NGZmMTU1OWZkM2MpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzQzYTQ4MGJmYTVmZjRkOGVhNjQwODY3NTRkZjVkNjhjLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2VhZTZkYmM3MjllMTQzN2ZhN2I4NGUwOGI4MTRkYTI3O1xyXG5cclxuXHJcblZpc3VhbFN0YXRlR3JvdXBfODZiMjE2NzU4ZmIwNDJmZTg3ZjVkYmUyNzVmNTAyYmMuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV83NDQ4ZjFkOWI2ZWU0ZjJiYTY0YTQ5MWRhMDQxZTFlNSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfODZiMjE2NzU4ZmIwNDJmZTg3ZjVkYmUyNzVmNTAyYmMuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV84NTA5YzcxYTg4YTE0OTVmOTQwNDczZWI4ZTJhOWJlNSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfODZiMjE2NzU4ZmIwNDJmZTg3ZjVkYmUyNzVmNTAyYmMuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV84Y2UxYWY5Mzc5ODY0ZmI5YjkwNmIwZDBmMTE1NmJkZSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfODZiMjE2NzU4ZmIwNDJmZTg3ZjVkYmUyNzVmNTAyYmMuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV80M2E0ODBiZmE1ZmY0ZDhlYTY0MDg2NzU0ZGY1ZDY4Yyk7XHJcblxyXG5cclxudGVtcGxhdGVPd25lci5JTlRFUk5BTF9HZXRWaXN1YWxTdGF0ZUdyb3VwcygpLkFkZChWaXN1YWxTdGF0ZUdyb3VwXzg2YjIxNjc1OGZiMDQyZmU4N2Y1ZGJlMjc1ZjUwMmJjKTtcclxuXHJcbnZhciBCb3JkZXJfMWY3ZjcwNDI1NjUwNGE3NmI2N2UwNTFhM2RjMDczNzggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiSW5uZXJCb3JkZXJcIiwgQm9yZGVyXzFmN2Y3MDQyNTY1MDRhNzZiNjdlMDUxYTNkYzA3Mzc4KTtcclxuQm9yZGVyXzFmN2Y3MDQyNTY1MDRhNzZiNjdlMDUxYTNkYzA3Mzc4Lk5hbWUgPSBcIklubmVyQm9yZGVyXCI7XHJcbkJvcmRlcl8xZjdmNzA0MjU2NTA0YTc2YjY3ZTA1MWEzZGMwNzM3OC5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgQ29udGVudFByZXNlbnRlcl80NTRlOWUzYmFmZjk0MzMwYjFiZjMwNDBhZDI5YzA0YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50UHJlc2VudGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29udGVudFByZXNlbnRlclwiLCBDb250ZW50UHJlc2VudGVyXzQ1NGU5ZTNiYWZmOTQzMzBiMWJmMzA0MGFkMjljMDRiKTtcclxuQ29udGVudFByZXNlbnRlcl80NTRlOWUzYmFmZjk0MzMwYjFiZjMwNDBhZDI5YzA0Yi5OYW1lID0gXCJDb250ZW50UHJlc2VudGVyXCI7XHJcbnZhciBCaW5kaW5nX2QxZjQ0MzZkY2E0OTQwMzhiODE2OTFhMThiNjMyMzZhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2QxZjQ0MzZkY2E0OTQwMzhiODE2OTFhMThiNjMyMzZhLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRUZW1wbGF0ZVwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzBlOWQ2OWEyMmU4NjRiZGM5ZmE4NDA3NTc1OWJhMjEyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMGU5ZDY5YTIyZTg2NGJkYzlmYTg0MDc1NzU5YmEyMTIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZDFmNDQzNmRjYTQ5NDAzOGI4MTY5MWExOGI2MzIzNmEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8wZTlkNjlhMjJlODY0YmRjOWZhODQwNzU3NTliYTIxMjtcclxuXHJcblxyXG5CaW5kaW5nX2QxZjQ0MzZkY2E0OTQwMzhiODE2OTFhMThiNjMyMzZhLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc3ZTQ2MDlkZDNkZDRkMmViNTE3OGY3ZWIwNGFlMDMzO1xyXG5cclxudmFyIEJpbmRpbmdfMzA4OTY4MTdhZmFiNDI3YWFlZDJkNmZkZjVhMTk1NWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMzA4OTY4MTdhZmFiNDI3YWFlZDJkNmZkZjVhMTk1NWMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2YxYTY1MjAwODZhYTQxYjA5YjViODU2OTQ1MTViYTdiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZjFhNjUyMDA4NmFhNDFiMDliNWI4NTY5NDUxNWJhN2IuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMzA4OTY4MTdhZmFiNDI3YWFlZDJkNmZkZjVhMTk1NWMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9mMWE2NTIwMDg2YWE0MWIwOWI1Yjg1Njk0NTE1YmE3YjtcclxuXHJcblxyXG5CaW5kaW5nXzMwODk2ODE3YWZhYjQyN2FhZWQyZDZmZGY1YTE5NTVjLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc3ZTQ2MDlkZDNkZDRkMmViNTE3OGY3ZWIwNGFlMDMzO1xyXG5cclxudmFyIEJpbmRpbmdfMmY3MDgyOTE0MGM0NGY1N2IzMWQxOTk0YTM1YTBhOGMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMmY3MDgyOTE0MGM0NGY1N2IzMWQxOTk0YTM1YTBhOGMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiUGFkZGluZ1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2NhNDFmOTk3ZWI3YTQ5YmU4YjM4NjIyZmIzODg2NWYwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfY2E0MWY5OTdlYjdhNDliZThiMzg2MjJmYjM4ODY1ZjAuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMmY3MDgyOTE0MGM0NGY1N2IzMWQxOTk0YTM1YTBhOGMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9jYTQxZjk5N2ViN2E0OWJlOGIzODYyMmZiMzg4NjVmMDtcclxuXHJcblxyXG5CaW5kaW5nXzJmNzA4MjkxNDBjNDRmNTdiMzFkMTk5NGEzNWEwYThjLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc3ZTQ2MDlkZDNkZDRkMmViNTE3OGY3ZWIwNGFlMDMzO1xyXG5cclxudmFyIEJpbmRpbmdfZjU5OGZmN2ZkNzczNDMwOGFmOTZjMDkxMjQzMmJjNTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZjU5OGZmN2ZkNzczNDMwOGFmOTZjMDkxMjQzMmJjNTAuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiSG9yaXpvbnRhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lNzQ3NGZmM2JmMmU0Y2RhOTg0NGQ3NGNiMjdjY2Q4MCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2U3NDc0ZmYzYmYyZTRjZGE5ODQ0ZDc0Y2IyN2NjZDgwLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2Y1OThmZjdmZDc3MzQzMDhhZjk2YzA5MTI0MzJiYzUwLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZTc0NzRmZjNiZjJlNGNkYTk4NDRkNzRjYjI3Y2NkODA7XHJcblxyXG5cclxuQmluZGluZ19mNTk4ZmY3ZmQ3NzM0MzA4YWY5NmMwOTEyNDMyYmM1MC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV83N2U0NjA5ZGQzZGQ0ZDJlYjUxNzhmN2ViMDRhZTAzMztcclxuXHJcbnZhciBCaW5kaW5nXzFlYjk0M2FmZjBkODQ4ZGI5MGQ2Nzg3NmRkN2NiNzA5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzFlYjk0M2FmZjBkODQ4ZGI5MGQ2Nzg3NmRkN2NiNzA5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2Q4OWVlZGFmYmNjMjQyZTQ4N2RlMWZkZWJmOWQyNDNjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZDg5ZWVkYWZiY2MyNDJlNDg3ZGUxZmRlYmY5ZDI0M2MuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMWViOTQzYWZmMGQ4NDhkYjkwZDY3ODc2ZGQ3Y2I3MDkuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9kODllZWRhZmJjYzI0MmU0ODdkZTFmZGViZjlkMjQzYztcclxuXHJcblxyXG5CaW5kaW5nXzFlYjk0M2FmZjBkODQ4ZGI5MGQ2Nzg3NmRkN2NiNzA5LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc3ZTQ2MDlkZDNkZDRkMmViNTE3OGY3ZWIwNGFlMDMzO1xyXG5cclxuXHJcbkJvcmRlcl8xZjdmNzA0MjU2NTA0YTc2YjY3ZTA1MWEzZGMwNzM3OC5DaGlsZCA9IENvbnRlbnRQcmVzZW50ZXJfNDU0ZTllM2JhZmY5NDMzMGIxYmYzMDQwYWQyOWMwNGI7XHJcblxyXG52YXIgQmluZGluZ19jNThkNzViYTVhZjg0NDIxYjg5MGJkNWU0NDYxOGFlMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19jNThkNzViYTVhZjg0NDIxYjg5MGJkNWU0NDYxOGFlMS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZmYwZGUyMmEwOTJhNDk3NGE4Y2RmNWIwYmI4NTA4OGEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9mZjBkZTIyYTA5MmE0OTc0YThjZGY1YjBiYjg1MDg4YS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jNThkNzViYTVhZjg0NDIxYjg5MGJkNWU0NDYxOGFlMS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2ZmMGRlMjJhMDkyYTQ5NzRhOGNkZjViMGJiODUwODhhO1xyXG5cclxuXHJcbkJpbmRpbmdfYzU4ZDc1YmE1YWY4NDQyMWI4OTBiZDVlNDQ2MThhZTEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNzdlNDYwOWRkM2RkNGQyZWI1MTc4ZjdlYjA0YWUwMzM7XHJcblxyXG5cclxuQm9yZGVyXzUyMmE5MTU0NmYwMjQ5ZDZhNGVkOTFjYTRmNGFiY2NmLkNoaWxkID0gQm9yZGVyXzFmN2Y3MDQyNTY1MDRhNzZiNjdlMDUxYTNkYzA3Mzc4O1xyXG5cclxudmFyIEJpbmRpbmdfN2Y1MWIzYWI3OWYzNDE2M2EyYThiZmE4Njc3ZjZlNWYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfN2Y1MWIzYWI3OWYzNDE2M2EyYThiZmE4Njc3ZjZlNWYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2E2ZGUwZTM3YjBhMjQ3NjM4ZTM0NDllMDllZDAzMTFlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYTZkZTBlMzdiMGEyNDc2MzhlMzQ0OWUwOWVkMDMxMWUuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfN2Y1MWIzYWI3OWYzNDE2M2EyYThiZmE4Njc3ZjZlNWYuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9hNmRlMGUzN2IwYTI0NzYzOGUzNDQ5ZTA5ZWQwMzExZTtcclxuXHJcblxyXG5CaW5kaW5nXzdmNTFiM2FiNzlmMzQxNjNhMmE4YmZhODY3N2Y2ZTVmLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc3ZTQ2MDlkZDNkZDRkMmViNTE3OGY3ZWIwNGFlMDMzO1xyXG5cclxudmFyIEJpbmRpbmdfNDQ0NzJmZjM3MjZkNGYwNTg5YzhiMDhiZGJlMThkNTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNDQ0NzJmZjM3MjZkNGYwNTg5YzhiMDhiZGJlMThkNTMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyQnJ1c2hcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV80ZDNiMDRjNDlhMmI0YWY1YmVlMzg5NTJjN2UyZTI4NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzRkM2IwNGM0OWEyYjRhZjViZWUzODk1MmM3ZTJlMjg3Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzQ0NDcyZmYzNzI2ZDRmMDU4OWM4YjA4YmRiZTE4ZDUzLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNGQzYjA0YzQ5YTJiNGFmNWJlZTM4OTUyYzdlMmUyODc7XHJcblxyXG5cclxuQmluZGluZ180NDQ3MmZmMzcyNmQ0ZjA1ODljOGIwOGJkYmUxOGQ1My5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV83N2U0NjA5ZGQzZGQ0ZDJlYjUxNzhmN2ViMDRhZTAzMztcclxuXHJcbnZhciBCaW5kaW5nX2U3YjU2NTJkM2Y0NDRkMjU4NzExZmE1YTMwNGZmNjRiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2U3YjU2NTJkM2Y0NDRkMjU4NzExZmE1YTMwNGZmNjRiLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlclRoaWNrbmVzc1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzhjZDRhYzJkZGZhNzQyZWRiZjFlMmIxNjNhMWQ3OTdiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOGNkNGFjMmRkZmE3NDJlZGJmMWUyYjE2M2ExZDc5N2IuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZTdiNTY1MmQzZjQ0NGQyNTg3MTFmYTVhMzA0ZmY2NGIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV84Y2Q0YWMyZGRmYTc0MmVkYmYxZTJiMTYzYTFkNzk3YjtcclxuXHJcblxyXG5CaW5kaW5nX2U3YjU2NTJkM2Y0NDRkMjU4NzExZmE1YTMwNGZmNjRiLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc3ZTQ2MDlkZDNkZDRkMmViNTE3OGY3ZWIwNGFlMDMzO1xyXG5cclxuXHJcblxyXG5Db250ZW50UHJlc2VudGVyXzQ1NGU5ZTNiYWZmOTQzMzBiMWJmMzA0MGFkMjljMDRiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFRlbXBsYXRlUHJvcGVydHksIEJpbmRpbmdfZDFmNDQzNmRjYTQ5NDAzOGI4MTY5MWExOGI2MzIzNmEpO1xyXG5Db250ZW50UHJlc2VudGVyXzQ1NGU5ZTNiYWZmOTQzMzBiMWJmMzA0MGFkMjljMDRiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFByb3BlcnR5LCBCaW5kaW5nXzMwODk2ODE3YWZhYjQyN2FhZWQyZDZmZGY1YTE5NTVjKTtcclxuQ29udGVudFByZXNlbnRlcl80NTRlOWUzYmFmZjk0MzMwYjFiZjMwNDBhZDI5YzA0Yi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuTWFyZ2luUHJvcGVydHksIEJpbmRpbmdfMmY3MDgyOTE0MGM0NGY1N2IzMWQxOTk0YTM1YTBhOGMpO1xyXG5Db250ZW50UHJlc2VudGVyXzQ1NGU5ZTNiYWZmOTQzMzBiMWJmMzA0MGFkMjljMDRiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5Ib3Jpem9udGFsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfZjU5OGZmN2ZkNzczNDMwOGFmOTZjMDkxMjQzMmJjNTApO1xyXG5Db250ZW50UHJlc2VudGVyXzQ1NGU5ZTNiYWZmOTQzMzBiMWJmMzA0MGFkMjljMDRiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5WZXJ0aWNhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nXzFlYjk0M2FmZjBkODQ4ZGI5MGQ2Nzg3NmRkN2NiNzA5KTtcclxuQm9yZGVyXzFmN2Y3MDQyNTY1MDRhNzZiNjdlMDUxYTNkYzA3Mzc4LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19jNThkNzViYTVhZjg0NDIxYjg5MGJkNWU0NDYxOGFlMSk7XHJcbkJvcmRlcl81MjJhOTE1NDZmMDI0OWQ2YTRlZDkxY2E0ZjRhYmNjZi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfN2Y1MWIzYWI3OWYzNDE2M2EyYThiZmE4Njc3ZjZlNWYpO1xyXG5Cb3JkZXJfNTIyYTkxNTQ2ZjAyNDlkNmE0ZWQ5MWNhNGY0YWJjY2YuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyQnJ1c2hQcm9wZXJ0eSwgQmluZGluZ180NDQ3MmZmMzcyNmQ0ZjA1ODljOGIwOGJkYmUxOGQ1Myk7XHJcbkJvcmRlcl81MjJhOTE1NDZmMDI0OWQ2YTRlZDkxY2E0ZjRhYmNjZi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJUaGlja25lc3NQcm9wZXJ0eSwgQmluZGluZ19lN2I1NjUyZDNmNDQ0ZDI1ODcxMWZhNWEzMDRmZjY0Yik7XHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181NGNjYTMxNmM2YzA0Nzc0YWUyN2U1MzI2MjUwMmZkMixcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9jZmNjOWZlMjAyYjU0N2JmOTNjMzY4ZWRjZDU5MmYwNyxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2NmY2M5ZmUyMDJiNTQ3YmY5M2MzNjhlZGNkNTkyZjA3LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfY2ZjYzlmZTIwMmI1NDdiZjkzYzM2OGVkY2Q1OTJmMDcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9jZmNjOWZlMjAyYjU0N2JmOTNjMzY4ZWRjZDU5MmYwNyxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2NmY2M5ZmUyMDJiNTQ3YmY5M2MzNjhlZGNkNTkyZjA3KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181NGNjYTMxNmM2YzA0Nzc0YWUyN2U1MzI2MjUwMmZkMiwgQm9yZGVyXzFmN2Y3MDQyNTY1MDRhNzZiNjdlMDUxYTNkYzA3Mzc4KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xZjQxNWNiNDFjZTg0OWM0YWU0NjcwZWUyNzc5N2Y5ZixcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV83YWVhZTk2MGY5MzE0NDVmYjZiOWIyOTEzM2Y0NWY1NyxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzdhZWFlOTYwZjkzMTQ0NWZiNmI5YjI5MTMzZjQ1ZjU3LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfN2FlYWU5NjBmOTMxNDQ1ZmI2YjliMjkxMzNmNDVmNTcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV83YWVhZTk2MGY5MzE0NDVmYjZiOWIyOTEzM2Y0NWY1NyxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzdhZWFlOTYwZjkzMTQ0NWZiNmI5YjI5MTMzZjQ1ZjU3KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xZjQxNWNiNDFjZTg0OWM0YWU0NjcwZWUyNzc5N2Y5ZiwgQm9yZGVyXzFmN2Y3MDQyNTY1MDRhNzZiNjdlMDUxYTNkYzA3Mzc4KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hNTcwM2ZmODE4ZGQ0ODI4OTU0ODc0ZmYxNTU5ZmQzYyxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV80NzA0Y2I3NDRiMjQ0ZWY1OTM2NjRiNTYyYWNhMzgyNCxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzQ3MDRjYjc0NGIyNDRlZjU5MzY2NGI1NjJhY2EzODI0LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNDcwNGNiNzQ0YjI0NGVmNTkzNjY0YjU2MmFjYTM4MjQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV80NzA0Y2I3NDRiMjQ0ZWY1OTM2NjRiNTYyYWNhMzgyNCxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzQ3MDRjYjc0NGIyNDRlZjU5MzY2NGI1NjJhY2EzODI0KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hNTcwM2ZmODE4ZGQ0ODI4OTU0ODc0ZmYxNTU5ZmQzYywgQm9yZGVyXzFmN2Y3MDQyNTY1MDRhNzZiNjdlMDUxYTNkYzA3Mzc4KTtcclxuXHJcbnRlbXBsYXRlSW5zdGFuY2VfNzdlNDYwOWRkM2RkNGQyZWI1MTc4ZjdlYjA0YWUwMzMuVGVtcGxhdGVDb250ZW50ID0gQm9yZGVyXzUyMmE5MTU0NmYwMjQ5ZDZhNGVkOTFjYTRmNGFiY2NmO1xyXG5yZXR1cm4gdGVtcGxhdGVJbnN0YW5jZV83N2U0NjA5ZGQzZGQ0ZDJlYjUxNzhmN2ViMDRhZTAzMztcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxufVxyXG4iLCIvLyA8Q1NIVE1MNT48WGFtbEhhc2g+RENCMTY1NzUyM0U3OEU3QUFERUU1N0NERTE0NDZCNzU8L1hhbWxIYXNoPjxQYXNzTnVtYmVyPjI8L1Bhc3NOdW1iZXI+PENvbXBpbGF0aW9uRGF0ZT4xNS4wNC4yMDIwIDE5OjMzOjI1PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgFNlY29uZHBhZ2XHgMeAWGFtbMeAx4BGYWN0b3J5XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqZWN0IEluc3RhbnRpYXRlKClcclxuICAgIHtcclxuICAgICAgICBnbG9iYWw6OlN5c3RlbS5UeXBlIHR5cGUgPSB0eXBlb2YoQ1NodG1sLlNlY29uZFBhZ2UpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFNlY29uZFBhZ2UgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QYWdlXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5cclxuXHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAxNjksIDY0OSwgMDYyOFxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9jb250ZW50TG9hZGVkO1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jb250ZW50TG9hZGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfY29udGVudExvYWRlZCA9IHRydWU7XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAwMTg0IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTg0ICgnVGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgbmV2ZXIgb2YgdGhlIHByb3ZpZGVkICgndHlwZScpIHR5cGUnKVxyXG4gICAgICAgICAgICBpZiAodGhpcyBpcyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KShvYmplY3QpdGhpcykuWGFtbFNvdXJjZVBhdGggPSBAXCJDU2h0bWxcXFNlY29uZFBhZ2UueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfOTMwZDI1ODU5Zjg1NDExYWE5NTFkMGI1NDBmNDNkYzQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG5HcmlkXzkzMGQyNTg1OWY4NTQxMWFhOTUxZDBiNTQwZjQzZGM0LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkwLCBHID0gKGJ5dGUpMCwgQiA9IChieXRlKTAgfSk7XHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkXzkzMGQyNTg1OWY4NTQxMWFhOTUxZDBiNTQwZjQzZGM0O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBzZWFsZWQgcGFydGlhbCBjbGFzcyBBcHAgOiBBcHBsaWNhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBBcHAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbnRlciBjb25zdHJ1Y3Rpb24gbG9naWMgaGVyZS4uLlxyXG5cclxuICAgICAgICAgICAgLy92YXIgcGFnZUhvbWUgPSBuZXcgUGFnZUhvbWUoKTtcclxuICAgICAgICAgICAgLy9XaW5kb3cuQ3VycmVudC5Db250ZW50ID0gcGFnZUhvbWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIG1mcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZUhvbWUueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBtZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYWdlMSA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFnZTEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlRleHQgPSBGaWxlQ2xhc3MuZmlsZVRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnV0dG9uX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9QYWdlSG9tZSBwYWdlSG9tZSA9IG5ldyBQYWdlSG9tZSgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuTmF2aWdhdGlvblNlcnZpY2UuTmF2aWdhdGUocGFnZUhvbWUpO1xyXG4gICAgICAgICAgICAvL3BhZ2VIb21lLmJ0bkJlZ2luLklzRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2VIb21lLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ0blVwbG9hZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZVVwbG9hZC54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBGaXJzdF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICBidG5VcGxvYWQuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYnRuUHJvY2Vzc2luZy5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcblxyXG4gICAgICAgICAgICBib3JkZXJJREVGLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYm9yZGVyVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgLy9idG5VcGxvYWRVTUwuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZElERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFNlY29uZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blVwbG9hZC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blByb2Nlc3NpbmcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlcklERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYm9yZGVyVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2J0blVwbG9hZFVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIC8vYnRuVXBsb2FkSURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFRoaXJkX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnRuQ2FuY2VsLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuVXBsb2FkLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuUHJvY2Vzc2luZy5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIHR4dEZpbGUuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVySURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJvcmRlclVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZFVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZElERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ0blByb2Nlc3NpbmdfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHh0RmlsZS5UZXh0ICE9IFN0cmluZy5FbXB0eSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgV2luZG93cy5VSS5YYW1sLk1lZGlhLkltYWdpbmcuQml0bWFwSW1hZ2UgYml0bWFwSURFRiA9IG5ldyBXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2luZy5CaXRtYXBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYml0bWFwSURFRi5VcmlTb3VyY2UgPSBuZXcgVXJpKFwiaW1nL25pZ2FJREVGMC5qcGdcIiwgVXJpS2luZC5SZWxhdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICBuaWdhSURFRl9KcGVnLlNvdXJjZSA9IGJpdG1hcElERUY7XHJcbiAgICAgICAgICAgICAgICBuaWdhSURFRl9KcGVnLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcblxyXG4gICAgICAgICAgICAgICAgV2luZG93cy5VSS5YYW1sLk1lZGlhLkltYWdpbmcuQml0bWFwSW1hZ2UgYml0bWFwVU1MID0gbmV3IFdpbmRvd3MuVUkuWGFtbC5NZWRpYS5JbWFnaW5nLkJpdG1hcEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBiaXRtYXBVTUwuVXJpU291cmNlID0gbmV3IFVyaShcImltZy9uaWdhLmpwZ1wiLCBVcmlLaW5kLlJlbGF0aXZlKTtcclxuICAgICAgICAgICAgICAgIG5pZ2FVTUxfSnBlZy5Tb3VyY2UgPSBiaXRtYXBVTUw7XHJcbiAgICAgICAgICAgICAgICBuaWdhVU1MX0pwZWcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlQm94LlNob3coXCLQn9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC30LDQstC10YDRiNC10L3Qvi4g0J/QtdGA0LXQudC00LjRgtC1INC/0L4g0L3QsNCy0LjQs9Cw0YbQuNC4INCyINC70LXQstC+0Lkg0YfQsNGB0YLQuCDQvtC60L3QsCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IE1lc3NhZ2VCb3guU2hvdyhcIkpTT04g0YTQsNC50Lsg0L7RgtGB0YPRgtGB0YLQstGD0LXRglwiKTsgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9wcml2YXRlIHZvaWQgQnRuVXBsb2FkVU1MX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy9wcml2YXRlIHZvaWQgQnRuVXBsb2FkSURFRl9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICAvL3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5Gb3VuZGF0aW9uO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWw7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlByaW1pdGl2ZXM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5EYXRhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuSW5wdXQ7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5NZWRpYTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk5hdmlnYXRpb247XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFBhZ2VIb21lIDogUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBQYWdlSG9tZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBCdXR0b25fQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1BhZ2UxIHBhZ2VIb21lID0gbmV3IFBhZ2UxKCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5OYXZpZ2F0aW9uU2VydmljZS5OYXZpZ2F0ZShwYWdlSG9tZSk7XHJcbiAgICAgICAgICAgIC8vYnRuQmVnaW4uSXNFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZTEueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBmcmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5Gb3VuZGF0aW9uO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWw7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlByaW1pdGl2ZXM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5EYXRhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuSW5wdXQ7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5NZWRpYTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk5hdmlnYXRpb247XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFBhZ2VVcGxvYWQgOiBQYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFBhZ2VVcGxvYWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyB2b2lkIE9uRmlsZU9wZW5lZChvYmplY3Qgc2VuZGVyLCBDU0hUTUw1LkV4dGVuc2lvbnMuRmlsZU9wZW5EaWFsb2cuRmlsZU9wZW5lZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRmlsZUNsYXNzLmZpbGVUZXh0ID0gZS5UZXh0O1xyXG4gICAgICAgICAgICBNZXNzYWdlQm94LlNob3coXCLQpNCw0LnQuyDQt9Cw0LPRgNGD0LbQtdC9XCIpO1xyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2UxLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnRuQ2FuY2VsX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZTEueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBmcmFtZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTZWNvbmRQYWdlIDogUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBTZWNvbmRQYWdlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG4jaWYgU0xNSUdSQVRJT05cclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkNvbnRyb2xzO1xyXG4jZWxzZVxyXG51c2luZyBXaW5kb3dzLlVJLlhhbWw7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scztcclxuI2VuZGlmXHJcblxyXG5uYW1lc3BhY2UgQ1NIVE1MNS5FeHRlbnNpb25zLkZpbGVPcGVuRGlhbG9nXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBldmVudCBFdmVudEhhbmRsZXI8RmlsZU9wZW5lZEV2ZW50QXJncz4gRmlsZU9wZW5lZDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBSZXN1bHRLaW5kIF9yZXN1bHRLaW5kO1xyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIF9yZXN1bHRLaW5kU3RyO1xyXG4gICAgICAgIHB1YmxpYyBSZXN1bHRLaW5kIFJlc3VsdEtpbmRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfcmVzdWx0S2luZDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdEtpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIF9yZXN1bHRLaW5kU3RyID0gdmFsdWUuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2coKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmVzdWx0S2luZCA9IEZpbGVPcGVuRGlhbG9nLlJlc3VsdEtpbmQuVGV4dDsgLy9Ob3RlOiB0aGlzIGlzIHRvIHNldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuXHJcblxyXG4gICAgICAgICAgICBDU2hhcnBYYW1sRm9ySHRtbDUuRG9tTWFuYWdlbWVudC5TZXRIdG1sUmVwcmVzZW50YXRpb24odGhpcyxcclxuICAgICAgICAgICAgICAgIFwiPGRpdiBzdHlsZSBzdHlsZT0nbWFyZ2luOiAxNXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6ICMxYmJjOWMgdmVydGljYWwtYWxpZ246bWlkZGxlOyc+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8aW5wdXQgdHlwZT0nZmlsZScgYWNjZXB0PScuanNvbiwgLnR4dCcgaWQ9J2lucHV0X19maWxlJyBzdHlsZT0nbWFyZ2luOiA2NXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7IHZpc2liaWxpdHk6IGhpZGRlbjsnIG11bHRpcGxlPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPGxhYmVsIGZvcj0naW5wdXRfX2ZpbGUnIHN0eWxlPSd3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAyOTBweDsgaGVpZ2h0OiA2MHB4OyBiYWNrZ3JvdW5kOiAjRjlERUYyOyBkaXNwbGF5OiAtd2Via2l0LWJveDsgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcIiArXHJcbiAgICAgICAgICAgICAgICBcImRpc3BsYXk6IC1tcy1mbGV4Ym94OyBkaXNwbGF5OiBmbGV4OyAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjsgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwIGF1dG87IGZvbnQtc2l6ZTogMS4xMjVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7XCIgK1xyXG4gICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzOiAzcHg7IGN1cnNvcjogcG9pbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7IC1tcy1mbGV4LXBhY2s6IHN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgY29sb3I6ICMwMDA7Jz5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuIHN0eWxlPSdsaW5lLWhlaWdodDogMTttYXJnaW4tdG9wOiAxcHg7Jz7QktGL0LHQtdGA0LjRgtC1INGE0LDQudC7PC9zcGFuPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPC9sYWJlbD5cIitcclxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2lucHV0X193cmFwcGVyJz5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8aW5wdXQgdHlwZSA9ICdmaWxlJyAgaWQgPSAnaW5wdXRfX2ZpbGUnIGNsYXNzPSdpbnB1dCBpbnB1dF9fZmlsZScgbXVsdGlwbGU+XCIgK1xyXG4gICAgICAgICAgICAvLyAgIFwiPGxhYmVsIGZvcj0naW5wdXRfX2ZpbGUnIGNsYXNzPSdpbnB1dF9fZmlsZS1idXR0b24nPlwiICtcclxuICAgICAgICAgICAgLy8gICAgICBcIjxzcGFuIGNsYXNzPSdpbnB1dF9fZmlsZS1idXR0b24tdGV4dCc+0JLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQuzwvc3Bhbj5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8L2xhYmVsPlwiICtcclxuICAgICAgICAgICAgLy9cIjwvZGl2PlwiXHJcblxyXG4gICAgICAgICAgICB0aGlzLkxvYWRlZCArPSBDb250cm9sRm9yRGlzcGxheWluZ0FGaWxlT3BlbkRpYWxvZ19Mb2FkZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIENvbnRyb2xGb3JEaXNwbGF5aW5nQUZpbGVPcGVuRGlhbG9nX0xvYWRlZChvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBcImlucHV0XCIgZWxlbWVudDpcclxuICAgICAgICAgICAgdmFyIGlucHV0RWxlbWVudCA9IENTSFRNTDUuSW50ZXJvcC5HZXREaXYodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBBY3Rpb248b2JqZWN0PiBvbkZpbGVPcGVuZWQgPSAocmVzdWx0KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5GaWxlT3BlbmVkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GaWxlT3BlbmVkKHRoaXMsIG5ldyBGaWxlT3BlbmVkRXZlbnRBcmdzKHJlc3VsdCwgdGhpcy5SZXN1bHRLaW5kKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHRLaW5kU3RyID0gX3Jlc3VsdEtpbmRTdHI7IC8vIE5vdGU6IHRoaXMgaXMgaGVyZSB0byBcImNhcHR1cmVcIiB0aGUgdmFyaWFibGUgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBpbnNpZGUgdGhlIFwiYWRkRXZlbnRMaXN0ZW5lclwiIGJlbG93LlxyXG5cclxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIFwiRmlsdGVyXCIgcHJvcGVydHkgdG8gbGltaXQgdGhlIGNob2ljZSBvZiB0aGUgdXNlciB0byB0aGUgc3BlY2lmaWVkIGV4dGVuc2lvbnM6XHJcbiAgICAgICAgICAgIFNldEZpbHRlcih0aGlzLkZpbHRlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlIFwiY2hhbmdlXCIgcHJvcGVydHkgb2YgdGhlIFwiaW5wdXRcIiBlbGVtZW50LCBhbmQgY2FsbCB0aGUgY2FsbGJhY2s6XHJcbiAgICAgICAgICAgIENTSFRNTDUuSW50ZXJvcC5FeGVjdXRlSmF2YVNjcmlwdChAXCJcclxuICAgICAgICAgICAgICAgICQwLmFkZEV2ZW50TGlzdGVuZXIoXCJcImNoYW5nZVwiXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZ1bGxQYXRoID0gJDAudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bGxQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gKGZ1bGxQYXRoLmluZGV4T2YoJ1xcXFwnKSA+PSAwID8gZnVsbFBhdGgubGFzdEluZGV4T2YoJ1xcXFwnKSA6IGZ1bGxQYXRoLmxhc3RJbmRleE9mKCcvJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IGZ1bGxQYXRoLnN1YnN0cmluZyhzdGFydEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVuYW1lLmluZGV4T2YoJ1xcXFwnKSA9PT0gMCB8fCBmaWxlbmFtZS5pbmRleE9mKCcvJykgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZmlsZW5hbWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gJDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKGZpbGUudHlwZSA9PSAndGV4dC9wbGFpbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEtpbmQgPSAkMztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0S2luZCA9PSAnRGF0YVVSTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNSdW5uaW5nSW5UaGVTaW11bGF0b3IgPSAkMjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1wiLCBpbnB1dEVsZW1lbnQsIG9uRmlsZU9wZW5lZCwgQ1NIVE1MNS5JbnRlcm9wLklzUnVubmluZ0luVGhlU2ltdWxhdG9yLCByZXN1bHRLaW5kU3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgU2V0RmlsdGVyKHN0cmluZyBmaWx0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHJlZmVyZW5jZSB0byB0aGUgXCJpbnB1dFwiIGVsZW1lbnQ6XHJcbiAgICAgICAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSBDU0hUTUw1LkludGVyb3AuR2V0RGl2KHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgZmlsdGVyIGxpc3QgdG8gY29udmVydCB0aGUgc3ludGF4IGZyb20gWEFNTCB0byBIVE1MNTpcclxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBzeW50YXggaW4gU2lsdmVybGlnaHQ6IEltYWdlIEZpbGVzICgqLmJtcCwgKi5qcGcpfCouYm1wOyouanBnfEFsbCBGaWxlcyAoKi4qKXwqLipcclxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBzeW50YXggaW4gSFRNTDU6IC5naWYsIC5qcGcsIC5wbmcsIC5kb2NcclxuICAgICAgICAgICAgc3RyaW5nW10gc3BsaXR0ZWQgPSBmaWx0ZXIuU3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgTGlzdDxzdHJpbmc+IGl0ZW1zS2VwdCA9IG5ldyBMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0dGVkLkxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0tlcHQuQWRkKHNwbGl0dGVkWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAxOyBpIDwgc3BsaXR0ZWQuTGVuZ3RoOyBpICs9IDIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNLZXB0LkFkZChzcGxpdHRlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyaW5nIGZpbHRlcnNJbkh0bWw1ID0gU3RyaW5nLkpvaW4oXCIsXCIsIGl0ZW1zS2VwdCkuUmVwbGFjZShcIipcIiwgXCJcIikuUmVwbGFjZShcIjtcIiwgXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlcjpcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKGZpbHRlcnNJbkh0bWw1KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIiQwLmFjY2VwdCA9ICQxXCIsIGlucHV0RWxlbWVudCwgZmlsdGVyc0luSHRtbDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIiQwLmFjY2VwdCA9IFwiXCJcIlwiXCIsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEZpbHRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIChzdHJpbmcpR2V0VmFsdWUoRmlsdGVyUHJvcGVydHkpOyB9XHJcbiAgICAgICAgICAgIHNldCB7IFNldFZhbHVlKEZpbHRlclByb3BlcnR5LCB2YWx1ZSk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZXBlbmRlbmN5UHJvcGVydHkgRmlsdGVyUHJvcGVydHkgPVxyXG4gICAgICAgICAgICBEZXBlbmRlbmN5UHJvcGVydHkuUmVnaXN0ZXIoXCJGaWx0ZXJcIiwgdHlwZW9mKHN0cmluZyksIHR5cGVvZihDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKSwgbmV3IFByb3BlcnR5TWV0YWRhdGEoXCJcIiwgRmlsdGVyX0NoYW5nZWQpKTtcclxuXHJcbiAgICAgICAgc3RhdGljIHZvaWQgRmlsdGVyX0NoYW5nZWQoRGVwZW5kZW5jeU9iamVjdCBkLCBEZXBlbmRlbmN5UHJvcGVydHlDaGFuZ2VkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbCA9IChDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKWQ7XHJcbiAgICAgICAgICAgIGlmIChDU2hhcnBYYW1sRm9ySHRtbDUuRG9tTWFuYWdlbWVudC5Jc0NvbnRyb2xJblZpc3VhbFRyZWUoY29udHJvbCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuU2V0RmlsdGVyKChlLk5ld1ZhbHVlID8/IFwiXCIpLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaWxlT3BlbmVkRXZlbnRBcmdzIDogRXZlbnRBcmdzXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIlRleHRcIlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW09ic29sZXRlXVxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgUGxhaW5UZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIlRleHRcIi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgVGV4dDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIkRhdGFVUkxcIi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgRGF0YVVSTDtcclxuXHJcbiAgICAgICAgcHVibGljIEZpbGVPcGVuZWRFdmVudEFyZ3Mob2JqZWN0IHJlc3VsdCwgUmVzdWx0S2luZCByZXN1bHRLaW5kKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdEtpbmQgPT0gUmVzdWx0S2luZC5UZXh0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRleHQgPSB0aGlzLlBsYWluVGV4dENvbnRlbnQgPSAocmVzdWx0ID8/IFwiXCIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0S2luZCA9PSBSZXN1bHRLaW5kLkRhdGFVUkwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGF0YVVSTCA9IChyZXN1bHQgPz8gXCJcIikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RTdXBwb3J0ZWRFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBSZXN1bHRLaW5kXHJcbiAgICB7XHJcbiAgICAgICAgVGV4dCwgRGF0YVVSTFxyXG4gICAgfVxyXG59XHJcbiJdCn0K
