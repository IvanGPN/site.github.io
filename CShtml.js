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


                var ResourceDictionary_a2c6b25102914d68ac5f18a8aee97b1a = new Bridge.global.Windows.UI.Xaml.ResourceDictionary();
                this.Resources = ResourceDictionary_a2c6b25102914d68ac5f18a8aee97b1a;

                this.Resources = ResourceDictionary_a2c6b25102914d68ac5f18a8aee97b1a;







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



                var Grid_6e2a897cfc7b4b80ad80b756f7ac77e4 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_a2218777714b4d718829fb28664a05d4 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_a2218777714b4d718829fb28664a05d4.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_a2218777714b4d718829fb28664a05d4.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_ee20431bc4d84bb7b0dbbc5f643e0f53 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_ee20431bc4d84bb7b0dbbc5f643e0f53.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_ee20431bc4d84bb7b0dbbc5f643e0f53.Offset = 0.0;

                var GradientStop_3d4835ce99c6445589a15b670b3b90d0 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_3d4835ce99c6445589a15b670b3b90d0.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_3d4835ce99c6445589a15b670b3b90d0.Offset = 1.0;

                LinearGradientBrush_a2218777714b4d718829fb28664a05d4.GradientStops.add(GradientStop_ee20431bc4d84bb7b0dbbc5f643e0f53);
                LinearGradientBrush_a2218777714b4d718829fb28664a05d4.GradientStops.add(GradientStop_3d4835ce99c6445589a15b670b3b90d0);


                Grid_6e2a897cfc7b4b80ad80b756f7ac77e4.Background = LinearGradientBrush_a2218777714b4d718829fb28664a05d4;

                var RowDefinition_5c9b503e34914b17bb2925e4a6c59d42 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_5c9b503e34914b17bb2925e4a6c59d42.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_66869447507b437a83337165ffdcc413 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_66869447507b437a83337165ffdcc413.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_52b05dcf55604875bb52ab85d1eff214 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_52b05dcf55604875bb52ab85d1eff214.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_6e2a897cfc7b4b80ad80b756f7ac77e4.RowDefinitions.add(RowDefinition_5c9b503e34914b17bb2925e4a6c59d42);
                Grid_6e2a897cfc7b4b80ad80b756f7ac77e4.RowDefinitions.add(RowDefinition_66869447507b437a83337165ffdcc413);
                Grid_6e2a897cfc7b4b80ad80b756f7ac77e4.RowDefinitions.add(RowDefinition_52b05dcf55604875bb52ab85d1eff214);

                var ColumnDefinition_1f1419f4bd2540af89e602c8d59e61b0 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();
                ColumnDefinition_1f1419f4bd2540af89e602c8d59e61b0.Width = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var ColumnDefinition_3f28eab691f74e6794e2c84842d2171b = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_6e2a897cfc7b4b80ad80b756f7ac77e4.ColumnDefinitions.add(ColumnDefinition_1f1419f4bd2540af89e602c8d59e61b0);
                Grid_6e2a897cfc7b4b80ad80b756f7ac77e4.ColumnDefinitions.add(ColumnDefinition_3f28eab691f74e6794e2c84842d2171b);

                var Border_6f21227ec8c74f5799af0c241b871221 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("elementForList", Border_6f21227ec8c74f5799af0c241b871221);
                Border_6f21227ec8c74f5799af0c241b871221.Name = "elementForList";
                Border_6f21227ec8c74f5799af0c241b871221.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_6f21227ec8c74f5799af0c241b871221, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_6f21227ec8c74f5799af0c241b871221, 3);
                Border_6f21227ec8c74f5799af0c241b871221.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_6f21227ec8c74f5799af0c241b871221.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_6f21227ec8c74f5799af0c241b871221.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var Grid_1d2fad13e71344b0954d3810682f5ecd = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_79bb36fe85a5496983ec0f17b30d6dde = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_79bb36fe85a5496983ec0f17b30d6dde.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_79bb36fe85a5496983ec0f17b30d6dde.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_adb1d29fb83c404c8e01978a31b9037e = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_adb1d29fb83c404c8e01978a31b9037e.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_adb1d29fb83c404c8e01978a31b9037e.Offset = 0.0;

                var GradientStop_5fa21364b7d2439d8ee037d4933d8fa1 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_5fa21364b7d2439d8ee037d4933d8fa1.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_5fa21364b7d2439d8ee037d4933d8fa1.Offset = 1.0;

                LinearGradientBrush_79bb36fe85a5496983ec0f17b30d6dde.GradientStops.add(GradientStop_adb1d29fb83c404c8e01978a31b9037e);
                LinearGradientBrush_79bb36fe85a5496983ec0f17b30d6dde.GradientStops.add(GradientStop_5fa21364b7d2439d8ee037d4933d8fa1);


                Grid_1d2fad13e71344b0954d3810682f5ecd.Background = LinearGradientBrush_79bb36fe85a5496983ec0f17b30d6dde;

                var RowDefinition_b8307def92974f9fa90f4a234b66d7ca = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_35bd88d36fd146b3ae12281d6b491084 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_35bd88d36fd146b3ae12281d6b491084.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_dcfd09301bf74526a9c7128f6ce6ead6 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_dcfd09301bf74526a9c7128f6ce6ead6.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_5787527336a347508d13754afa696895 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_5787527336a347508d13754afa696895.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_2381ef5ae006478a8323bb1f0fcb0b6b = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_1d2fad13e71344b0954d3810682f5ecd.RowDefinitions.add(RowDefinition_b8307def92974f9fa90f4a234b66d7ca);
                Grid_1d2fad13e71344b0954d3810682f5ecd.RowDefinitions.add(RowDefinition_35bd88d36fd146b3ae12281d6b491084);
                Grid_1d2fad13e71344b0954d3810682f5ecd.RowDefinitions.add(RowDefinition_dcfd09301bf74526a9c7128f6ce6ead6);
                Grid_1d2fad13e71344b0954d3810682f5ecd.RowDefinitions.add(RowDefinition_5787527336a347508d13754afa696895);
                Grid_1d2fad13e71344b0954d3810682f5ecd.RowDefinitions.add(RowDefinition_2381ef5ae006478a8323bb1f0fcb0b6b);

                var Button_97fa598670504eaab9ad2dd097e801dc = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_97fa598670504eaab9ad2dd097e801dc, 1);
                Button_97fa598670504eaab9ad2dd097e801dc.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_97fa598670504eaab9ad2dd097e801dc.Content = "JSON";
                Button_97fa598670504eaab9ad2dd097e801dc.FontSize = 20.0;
                Button_97fa598670504eaab9ad2dd097e801dc.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_97fa598670504eaab9ad2dd097e801dc.addClick(Bridge.fn.cacheBind(this, this.First_Click));

                var Button_fc3284bbf91a4c259d8ebbeaee9a8f96 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_fc3284bbf91a4c259d8ebbeaee9a8f96, 2);
                Button_fc3284bbf91a4c259d8ebbeaee9a8f96.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_fc3284bbf91a4c259d8ebbeaee9a8f96.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 IDEF0";
                Button_fc3284bbf91a4c259d8ebbeaee9a8f96.FontSize = 20.0;
                Button_fc3284bbf91a4c259d8ebbeaee9a8f96.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_fc3284bbf91a4c259d8ebbeaee9a8f96.addClick(Bridge.fn.cacheBind(this, this.Second_Click));

                var Button_fabad74e87e8424b8c3bc3482d55220e = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_fabad74e87e8424b8c3bc3482d55220e, 3);
                Button_fabad74e87e8424b8c3bc3482d55220e.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_fabad74e87e8424b8c3bc3482d55220e.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 UML";
                Button_fabad74e87e8424b8c3bc3482d55220e.FontSize = 20.0;
                Button_fabad74e87e8424b8c3bc3482d55220e.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_fabad74e87e8424b8c3bc3482d55220e.addClick(Bridge.fn.cacheBind(this, this.Third_Click));

                Grid_1d2fad13e71344b0954d3810682f5ecd.Children.add(Button_97fa598670504eaab9ad2dd097e801dc);
                Grid_1d2fad13e71344b0954d3810682f5ecd.Children.add(Button_fc3284bbf91a4c259d8ebbeaee9a8f96);
                Grid_1d2fad13e71344b0954d3810682f5ecd.Children.add(Button_fabad74e87e8424b8c3bc3482d55220e);


                Border_6f21227ec8c74f5799af0c241b871221.Child = Grid_1d2fad13e71344b0954d3810682f5ecd;


                var Border_8f552e224cea416ba684094d080e17fa = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_8f552e224cea416ba684094d080e17fa);
                Border_8f552e224cea416ba684094d080e17fa.Name = "element";
                Border_8f552e224cea416ba684094d080e17fa.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_8f552e224cea416ba684094d080e17fa, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_8f552e224cea416ba684094d080e17fa, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_8f552e224cea416ba684094d080e17fa, 1);
                Border_8f552e224cea416ba684094d080e17fa.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_8f552e224cea416ba684094d080e17fa.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_8f552e224cea416ba684094d080e17fa.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_cecbb0332ef84a4899752882941ae713 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_cecbb0332ef84a4899752882941ae713.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_cecbb0332ef84a4899752882941ae713.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_27054ec6dcb14115951fe61bef0498ed = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_27054ec6dcb14115951fe61bef0498ed.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_27054ec6dcb14115951fe61bef0498ed.Offset = 0.0;

                var GradientStop_3899c32b4de549d5ab7beb6f44e71743 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_3899c32b4de549d5ab7beb6f44e71743.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_3899c32b4de549d5ab7beb6f44e71743.Offset = 1.0;

                LinearGradientBrush_cecbb0332ef84a4899752882941ae713.GradientStops.add(GradientStop_27054ec6dcb14115951fe61bef0498ed);
                LinearGradientBrush_cecbb0332ef84a4899752882941ae713.GradientStops.add(GradientStop_3899c32b4de549d5ab7beb6f44e71743);


                Border_8f552e224cea416ba684094d080e17fa.Background = LinearGradientBrush_cecbb0332ef84a4899752882941ae713;

                var Grid_60051f4357da406fbaf44bb3c371f142 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutGrid", Grid_60051f4357da406fbaf44bb3c371f142);
                Grid_60051f4357da406fbaf44bb3c371f142.Name = "LayoutGrid";
                var LinearGradientBrush_8ae427ca917a4eb680210fb28542703b = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_8ae427ca917a4eb680210fb28542703b.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_8ae427ca917a4eb680210fb28542703b.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_2c7bd8d9f0c94adea788e1a12184dd87 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_2c7bd8d9f0c94adea788e1a12184dd87.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_2c7bd8d9f0c94adea788e1a12184dd87.Offset = 0.0;

                var GradientStop_6d6135378b374373a895640f6e50424e = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_6d6135378b374373a895640f6e50424e.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_6d6135378b374373a895640f6e50424e.Offset = 1.0;

                LinearGradientBrush_8ae427ca917a4eb680210fb28542703b.GradientStops.add(GradientStop_2c7bd8d9f0c94adea788e1a12184dd87);
                LinearGradientBrush_8ae427ca917a4eb680210fb28542703b.GradientStops.add(GradientStop_6d6135378b374373a895640f6e50424e);


                Grid_60051f4357da406fbaf44bb3c371f142.Background = LinearGradientBrush_8ae427ca917a4eb680210fb28542703b;

                var RowDefinition_910d57d3cadf407f84d00ebf61301fd3 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_910d57d3cadf407f84d00ebf61301fd3.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_9c4e7c2345e443f8961c715b4f8e17a4 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_9c4e7c2345e443f8961c715b4f8e17a4.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_d291e8dae5aa460692c4a88f73bf1125 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_d291e8dae5aa460692c4a88f73bf1125.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_60051f4357da406fbaf44bb3c371f142.RowDefinitions.add(RowDefinition_910d57d3cadf407f84d00ebf61301fd3);
                Grid_60051f4357da406fbaf44bb3c371f142.RowDefinitions.add(RowDefinition_9c4e7c2345e443f8961c715b4f8e17a4);
                Grid_60051f4357da406fbaf44bb3c371f142.RowDefinitions.add(RowDefinition_d291e8dae5aa460692c4a88f73bf1125);

                var ColumnDefinition_97fee7872988421ab14171f595161735 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_5f5a1475cae54c2187e14b1050cc5e2b = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_60051f4357da406fbaf44bb3c371f142.ColumnDefinitions.add(ColumnDefinition_97fee7872988421ab14171f595161735);
                Grid_60051f4357da406fbaf44bb3c371f142.ColumnDefinitions.add(ColumnDefinition_5f5a1475cae54c2187e14b1050cc5e2b);

                var Button_db349f6b42254d9b9bb36c30f9ac7abe = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnCancel", Button_db349f6b42254d9b9bb36c30f9ac7abe);
                Button_db349f6b42254d9b9bb36c30f9ac7abe.Name = "btnCancel";
                Button_db349f6b42254d9b9bb36c30f9ac7abe.Content = "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_db349f6b42254d9b9bb36c30f9ac7abe, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_db349f6b42254d9b9bb36c30f9ac7abe, 2);
                Button_db349f6b42254d9b9bb36c30f9ac7abe.Width = 280.0;
                Button_db349f6b42254d9b9bb36c30f9ac7abe.Height = 50.0;
                Button_db349f6b42254d9b9bb36c30f9ac7abe.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_db349f6b42254d9b9bb36c30f9ac7abe.FontSize = 25.0;
                Button_db349f6b42254d9b9bb36c30f9ac7abe.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_db349f6b42254d9b9bb36c30f9ac7abe.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_db349f6b42254d9b9bb36c30f9ac7abe.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                var ControlTemplate_7fd1fbb663b04876843ee47e550f81f7 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_7fd1fbb663b04876843ee47e550f81f7.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_7fd1fbb663b04876843ee47e550f81f7.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_7fd1fbb663b04876843ee47e550f81f7));

                Button_db349f6b42254d9b9bb36c30f9ac7abe.Template = ControlTemplate_7fd1fbb663b04876843ee47e550f81f7;


                var Button_c2e6c4897ad14b2fa89b9cef9f05ee67 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnUpload", Button_c2e6c4897ad14b2fa89b9cef9f05ee67);
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.Name = "btnUpload";
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.Content = "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c JSON \u0444\u0430\u0439\u043b";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_c2e6c4897ad14b2fa89b9cef9f05ee67, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_c2e6c4897ad14b2fa89b9cef9f05ee67, 1);
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.Width = 280.0;
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.Height = 50.0;
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.FontSize = 25.0;
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.addClick(Bridge.fn.cacheBind(this, this.BtnUpload_Click));
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                var ControlTemplate_6155b294008547e59391518f9486ac6d = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_6155b294008547e59391518f9486ac6d.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_6155b294008547e59391518f9486ac6d.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_6155b294008547e59391518f9486ac6d));

                Button_c2e6c4897ad14b2fa89b9cef9f05ee67.Template = ControlTemplate_6155b294008547e59391518f9486ac6d;


                var Button_8013514bb33a4b32bf885fcf75ffe821 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnProcessing", Button_8013514bb33a4b32bf885fcf75ffe821);
                Button_8013514bb33a4b32bf885fcf75ffe821.Name = "btnProcessing";
                Button_8013514bb33a4b32bf885fcf75ffe821.Content = "\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0443";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_8013514bb33a4b32bf885fcf75ffe821, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_8013514bb33a4b32bf885fcf75ffe821, 1);
                Button_8013514bb33a4b32bf885fcf75ffe821.Width = 280.0;
                Button_8013514bb33a4b32bf885fcf75ffe821.Height = 50.0;
                Button_8013514bb33a4b32bf885fcf75ffe821.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_8013514bb33a4b32bf885fcf75ffe821.FontSize = 25.0;
                Button_8013514bb33a4b32bf885fcf75ffe821.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_8013514bb33a4b32bf885fcf75ffe821.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_8013514bb33a4b32bf885fcf75ffe821.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_8013514bb33a4b32bf885fcf75ffe821.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_8013514bb33a4b32bf885fcf75ffe821.addClick(Bridge.fn.cacheBind(this, this.BtnProcessing_Click));
                var ControlTemplate_b185ffbdd073492797a893d99a28e211 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_b185ffbdd073492797a893d99a28e211.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_b185ffbdd073492797a893d99a28e211.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_b185ffbdd073492797a893d99a28e211));

                Button_8013514bb33a4b32bf885fcf75ffe821.Template = ControlTemplate_b185ffbdd073492797a893d99a28e211;


                var TextBox_acce5a2a97c64a87bb6ecbfd70abfb10 = new Bridge.global.Windows.UI.Xaml.Controls.TextBox();
                this.RegisterName$1("txtFile", TextBox_acce5a2a97c64a87bb6ecbfd70abfb10);
                TextBox_acce5a2a97c64a87bb6ecbfd70abfb10.Name = "txtFile";
                TextBox_acce5a2a97c64a87bb6ecbfd70abfb10.TextWrapping = Bridge.global.Windows.UI.Xaml.TextWrapping.Wrap;
                TextBox_acce5a2a97c64a87bb6ecbfd70abfb10.Text = "";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(TextBox_acce5a2a97c64a87bb6ecbfd70abfb10, 1);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(TextBox_acce5a2a97c64a87bb6ecbfd70abfb10, 2);
                TextBox_acce5a2a97c64a87bb6ecbfd70abfb10.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(10, -20, 10, -20);
                TextBox_acce5a2a97c64a87bb6ecbfd70abfb10.FontSize = 20.0;

                var Border_d5fab370b6ad4a2a8b64e5ce9af97373 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderIDEF", Border_d5fab370b6ad4a2a8b64e5ce9af97373);
                Border_d5fab370b6ad4a2a8b64e5ce9af97373.Name = "borderIDEF";
                Border_d5fab370b6ad4a2a8b64e5ce9af97373.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_d5fab370b6ad4a2a8b64e5ce9af97373.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_d5fab370b6ad4a2a8b64e5ce9af97373, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_d5fab370b6ad4a2a8b64e5ce9af97373, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_d5fab370b6ad4a2a8b64e5ce9af97373, 2);
                Border_d5fab370b6ad4a2a8b64e5ce9af97373.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_d5fab370b6ad4a2a8b64e5ce9af97373.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_d5fab370b6ad4a2a8b64e5ce9af97373.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                Border_d5fab370b6ad4a2a8b64e5ce9af97373.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));
                var Image_2a5f05a050594375a56da190b1031a8b = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                this.RegisterName$1("nigaIDEF_Jpeg", Image_2a5f05a050594375a56da190b1031a8b);
                Image_2a5f05a050594375a56da190b1031a8b.Name = "nigaIDEF_Jpeg";
                Image_2a5f05a050594375a56da190b1031a8b.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Fill;
                Image_2a5f05a050594375a56da190b1031a8b.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;

                Border_d5fab370b6ad4a2a8b64e5ce9af97373.Child = Image_2a5f05a050594375a56da190b1031a8b;


                var Border_80d01c58a16b4647befa6a267b37b6dc = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderUML", Border_80d01c58a16b4647befa6a267b37b6dc);
                Border_80d01c58a16b4647befa6a267b37b6dc.Name = "borderUML";
                Border_80d01c58a16b4647befa6a267b37b6dc.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_80d01c58a16b4647befa6a267b37b6dc.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_80d01c58a16b4647befa6a267b37b6dc, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_80d01c58a16b4647befa6a267b37b6dc, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_80d01c58a16b4647befa6a267b37b6dc, 2);
                Border_80d01c58a16b4647befa6a267b37b6dc.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_80d01c58a16b4647befa6a267b37b6dc.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_80d01c58a16b4647befa6a267b37b6dc.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                Border_80d01c58a16b4647befa6a267b37b6dc.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));
                var Image_1d530aabe2e648c6adaed032ab0ef7f8 = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                this.RegisterName$1("nigaUML_Jpeg", Image_1d530aabe2e648c6adaed032ab0ef7f8);
                Image_1d530aabe2e648c6adaed032ab0ef7f8.Name = "nigaUML_Jpeg";
                Image_1d530aabe2e648c6adaed032ab0ef7f8.Source = Bridge.cast(Bridge.global.DotNetForHtml5.Core.TypeFromStringConverters.ConvertFromInvariantString(Bridge.global.Windows.UI.Xaml.Media.ImageSource, "/CShtml;component/img/niga.jpg"), Windows.UI.Xaml.Media.ImageSource);
                Image_1d530aabe2e648c6adaed032ab0ef7f8.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Fill;

                Border_80d01c58a16b4647befa6a267b37b6dc.Child = Image_1d530aabe2e648c6adaed032ab0ef7f8;


                Grid_60051f4357da406fbaf44bb3c371f142.Children.add(Button_db349f6b42254d9b9bb36c30f9ac7abe);
                Grid_60051f4357da406fbaf44bb3c371f142.Children.add(Button_c2e6c4897ad14b2fa89b9cef9f05ee67);
                Grid_60051f4357da406fbaf44bb3c371f142.Children.add(Button_8013514bb33a4b32bf885fcf75ffe821);
                Grid_60051f4357da406fbaf44bb3c371f142.Children.add(TextBox_acce5a2a97c64a87bb6ecbfd70abfb10);
                Grid_60051f4357da406fbaf44bb3c371f142.Children.add(Border_d5fab370b6ad4a2a8b64e5ce9af97373);
                Grid_60051f4357da406fbaf44bb3c371f142.Children.add(Border_80d01c58a16b4647befa6a267b37b6dc);


                Border_8f552e224cea416ba684094d080e17fa.Child = Grid_60051f4357da406fbaf44bb3c371f142;


                Grid_6e2a897cfc7b4b80ad80b756f7ac77e4.Children.add(Border_6f21227ec8c74f5799af0c241b871221);
                Grid_6e2a897cfc7b4b80ad80b756f7ac77e4.Children.add(Border_8f552e224cea416ba684094d080e17fa);


                this.Content = Grid_6e2a897cfc7b4b80ad80b756f7ac77e4;



                this.elementForList = Border_6f21227ec8c74f5799af0c241b871221;
                this.btnCancel = Button_db349f6b42254d9b9bb36c30f9ac7abe;
                this.btnUpload = Button_c2e6c4897ad14b2fa89b9cef9f05ee67;
                this.btnProcessing = Button_8013514bb33a4b32bf885fcf75ffe821;
                this.txtFile = TextBox_acce5a2a97c64a87bb6ecbfd70abfb10;
                this.nigaIDEF_Jpeg = Image_2a5f05a050594375a56da190b1031a8b;
                this.borderIDEF = Border_d5fab370b6ad4a2a8b64e5ce9af97373;
                this.nigaUML_Jpeg = Image_1d530aabe2e648c6adaed032ab0ef7f8;
                this.borderUML = Border_80d01c58a16b4647befa6a267b37b6dc;
                this.LayoutGrid = Grid_60051f4357da406fbaf44bb3c371f142;
                this.element = Border_8f552e224cea416ba684094d080e17fa;



            },
            accessVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_9fbba6f2bdbd45db824c52183447de48: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_9fbba6f2bdbd45db824c52183447de48: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_9fbba6f2bdbd45db824c52183447de48: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_9fbba6f2bdbd45db824c52183447de48: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_9fbba6f2bdbd45db824c52183447de48: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_7fd1fbb663b04876843ee47e550f81f7: function (templateOwner) {
                var templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3.TemplateOwner = templateOwner;
                var Border_ff84ee8a2d734b2995f3bfc4d75a9467 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_ff84ee8a2d734b2995f3bfc4d75a9467);
                Border_ff84ee8a2d734b2995f3bfc4d75a9467.Name = "OuterBorder";
                Border_ff84ee8a2d734b2995f3bfc4d75a9467.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_d0ac43cfb0274fb488613ac92af84036 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_d0ac43cfb0274fb488613ac92af84036);
                VisualStateGroup_d0ac43cfb0274fb488613ac92af84036.Name = "CommonStates";
                var VisualState_2c0b6322959e4bd59912d8025c066b7f = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_2c0b6322959e4bd59912d8025c066b7f);
                VisualState_2c0b6322959e4bd59912d8025c066b7f.Name = "Normal";

                var VisualState_ef10fc98b9644efca193cd8d06e2f259 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_ef10fc98b9644efca193cd8d06e2f259);
                VisualState_ef10fc98b9644efca193cd8d06e2f259.Name = "PointerOver";
                var Storyboard_9c39980b343a45e7822c2061a8a6829f = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_e42cf83dc19646178cb210eadc947212 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_e42cf83dc19646178cb210eadc947212, "InnerBorder");
                var DiscreteObjectKeyFrame_5bb206a2fac2492fbdcee139504dc7a7 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_5bb206a2fac2492fbdcee139504dc7a7.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_5bb206a2fac2492fbdcee139504dc7a7.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_e42cf83dc19646178cb210eadc947212.KeyFrames.add(DiscreteObjectKeyFrame_5bb206a2fac2492fbdcee139504dc7a7);


                Storyboard_9c39980b343a45e7822c2061a8a6829f.Children.add(ObjectAnimationUsingKeyFrames_e42cf83dc19646178cb210eadc947212);


                VisualState_ef10fc98b9644efca193cd8d06e2f259.Storyboard = Storyboard_9c39980b343a45e7822c2061a8a6829f;


                var VisualState_afd07c7cc77342518331e35bc694f3b0 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_afd07c7cc77342518331e35bc694f3b0);
                VisualState_afd07c7cc77342518331e35bc694f3b0.Name = "Pressed";
                var Storyboard_9c2c3a5f78b94fe69970a835edf0bc79 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_0d8af060e0e54dc58ead0d3c5a033a40 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_0d8af060e0e54dc58ead0d3c5a033a40, "InnerBorder");
                var DiscreteObjectKeyFrame_05490b8ce55d4bfebbba6ba514fa56cf = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_05490b8ce55d4bfebbba6ba514fa56cf.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_05490b8ce55d4bfebbba6ba514fa56cf.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_0d8af060e0e54dc58ead0d3c5a033a40.KeyFrames.add(DiscreteObjectKeyFrame_05490b8ce55d4bfebbba6ba514fa56cf);


                Storyboard_9c2c3a5f78b94fe69970a835edf0bc79.Children.add(ObjectAnimationUsingKeyFrames_0d8af060e0e54dc58ead0d3c5a033a40);


                VisualState_afd07c7cc77342518331e35bc694f3b0.Storyboard = Storyboard_9c2c3a5f78b94fe69970a835edf0bc79;


                var VisualState_fef6dbe9cf2b455982fa5d4d4f72d591 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_fef6dbe9cf2b455982fa5d4d4f72d591);
                VisualState_fef6dbe9cf2b455982fa5d4d4f72d591.Name = "Disabled";
                var Storyboard_2fe390cc0fea44bca85a7e343907308c = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_9e77489805464b3fa005b4cd010d0c9c = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_9e77489805464b3fa005b4cd010d0c9c, "InnerBorder");
                var DiscreteObjectKeyFrame_a4ad389ad6a742f98fea89cab3310b17 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_a4ad389ad6a742f98fea89cab3310b17.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_a4ad389ad6a742f98fea89cab3310b17.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_9e77489805464b3fa005b4cd010d0c9c.KeyFrames.add(DiscreteObjectKeyFrame_a4ad389ad6a742f98fea89cab3310b17);


                Storyboard_2fe390cc0fea44bca85a7e343907308c.Children.add(ObjectAnimationUsingKeyFrames_9e77489805464b3fa005b4cd010d0c9c);


                VisualState_fef6dbe9cf2b455982fa5d4d4f72d591.Storyboard = Storyboard_2fe390cc0fea44bca85a7e343907308c;


                System.Array.add(VisualStateGroup_d0ac43cfb0274fb488613ac92af84036.States, VisualState_2c0b6322959e4bd59912d8025c066b7f, Object);
                System.Array.add(VisualStateGroup_d0ac43cfb0274fb488613ac92af84036.States, VisualState_ef10fc98b9644efca193cd8d06e2f259, Object);
                System.Array.add(VisualStateGroup_d0ac43cfb0274fb488613ac92af84036.States, VisualState_afd07c7cc77342518331e35bc694f3b0, Object);
                System.Array.add(VisualStateGroup_d0ac43cfb0274fb488613ac92af84036.States, VisualState_fef6dbe9cf2b455982fa5d4d4f72d591, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_d0ac43cfb0274fb488613ac92af84036);

                var Border_77ec790e039f46308f00d9c062ef3a1e = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_77ec790e039f46308f00d9c062ef3a1e);
                Border_77ec790e039f46308f00d9c062ef3a1e.Name = "InnerBorder";
                Border_77ec790e039f46308f00d9c062ef3a1e.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_5d3f04d6f5fd47b192e7f14760249732 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_5d3f04d6f5fd47b192e7f14760249732);
                ContentPresenter_5d3f04d6f5fd47b192e7f14760249732.Name = "ContentPresenter";
                var Binding_562d7c9c7e6e47989498ba878a004edc = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_562d7c9c7e6e47989498ba878a004edc.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_3e8b73d592844c11bf1b90724d81fed4 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3e8b73d592844c11bf1b90724d81fed4.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_562d7c9c7e6e47989498ba878a004edc.RelativeSource = RelativeSource_3e8b73d592844c11bf1b90724d81fed4;


                Binding_562d7c9c7e6e47989498ba878a004edc.TemplateOwner = templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;

                var Binding_81d347215d05455b8d0ef5745e6cc175 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_81d347215d05455b8d0ef5745e6cc175.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_deb457ed327c4068938226decc7eb22e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_deb457ed327c4068938226decc7eb22e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_81d347215d05455b8d0ef5745e6cc175.RelativeSource = RelativeSource_deb457ed327c4068938226decc7eb22e;


                Binding_81d347215d05455b8d0ef5745e6cc175.TemplateOwner = templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;

                var Binding_8ee8f63ee041414d986d191d65124fcc = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8ee8f63ee041414d986d191d65124fcc.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_fd509433db7f40db94e37e8bea1f6be7 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_fd509433db7f40db94e37e8bea1f6be7.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8ee8f63ee041414d986d191d65124fcc.RelativeSource = RelativeSource_fd509433db7f40db94e37e8bea1f6be7;


                Binding_8ee8f63ee041414d986d191d65124fcc.TemplateOwner = templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;

                var Binding_3d50c28b160540699b05ddd2e9064fb7 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_3d50c28b160540699b05ddd2e9064fb7.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_28cac7dcf72249c698c6444ade4d0ad2 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_28cac7dcf72249c698c6444ade4d0ad2.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_3d50c28b160540699b05ddd2e9064fb7.RelativeSource = RelativeSource_28cac7dcf72249c698c6444ade4d0ad2;


                Binding_3d50c28b160540699b05ddd2e9064fb7.TemplateOwner = templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;

                var Binding_d5b690b292a64550a8c5ca29d3613eee = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d5b690b292a64550a8c5ca29d3613eee.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_07835dc221834fd6ae7925699c4a5129 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_07835dc221834fd6ae7925699c4a5129.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d5b690b292a64550a8c5ca29d3613eee.RelativeSource = RelativeSource_07835dc221834fd6ae7925699c4a5129;


                Binding_d5b690b292a64550a8c5ca29d3613eee.TemplateOwner = templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;


                Border_77ec790e039f46308f00d9c062ef3a1e.Child = ContentPresenter_5d3f04d6f5fd47b192e7f14760249732;

                var Binding_c38d3c01ea16435988c2d000d23b3581 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c38d3c01ea16435988c2d000d23b3581.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_6787b500e84d42f1a623c7ba77a7dbdf = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_6787b500e84d42f1a623c7ba77a7dbdf.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c38d3c01ea16435988c2d000d23b3581.RelativeSource = RelativeSource_6787b500e84d42f1a623c7ba77a7dbdf;


                Binding_c38d3c01ea16435988c2d000d23b3581.TemplateOwner = templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;


                Border_ff84ee8a2d734b2995f3bfc4d75a9467.Child = Border_77ec790e039f46308f00d9c062ef3a1e;

                var Binding_4e40a5ded6a14f53bab187de8e8e49aa = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4e40a5ded6a14f53bab187de8e8e49aa.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_eb77b95e0c6b47b3aecbff52aa93446f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_eb77b95e0c6b47b3aecbff52aa93446f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4e40a5ded6a14f53bab187de8e8e49aa.RelativeSource = RelativeSource_eb77b95e0c6b47b3aecbff52aa93446f;


                Binding_4e40a5ded6a14f53bab187de8e8e49aa.TemplateOwner = templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;

                var Binding_d7e1c0095c1a48cba451b1f222c82d87 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d7e1c0095c1a48cba451b1f222c82d87.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_a1436e68aba448ddb7c654e21f650af0 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a1436e68aba448ddb7c654e21f650af0.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d7e1c0095c1a48cba451b1f222c82d87.RelativeSource = RelativeSource_a1436e68aba448ddb7c654e21f650af0;


                Binding_d7e1c0095c1a48cba451b1f222c82d87.TemplateOwner = templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;

                var Binding_ce0801a8d8f94bb2a5d5e2e6bf14370a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ce0801a8d8f94bb2a5d5e2e6bf14370a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_ca74cdb7fb634085870364c73e84ae9b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ca74cdb7fb634085870364c73e84ae9b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ce0801a8d8f94bb2a5d5e2e6bf14370a.RelativeSource = RelativeSource_ca74cdb7fb634085870364c73e84ae9b;


                Binding_ce0801a8d8f94bb2a5d5e2e6bf14370a.TemplateOwner = templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;



                ContentPresenter_5d3f04d6f5fd47b192e7f14760249732.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_562d7c9c7e6e47989498ba878a004edc);
                ContentPresenter_5d3f04d6f5fd47b192e7f14760249732.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_81d347215d05455b8d0ef5745e6cc175);
                ContentPresenter_5d3f04d6f5fd47b192e7f14760249732.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_8ee8f63ee041414d986d191d65124fcc);
                ContentPresenter_5d3f04d6f5fd47b192e7f14760249732.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_3d50c28b160540699b05ddd2e9064fb7);
                ContentPresenter_5d3f04d6f5fd47b192e7f14760249732.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_d5b690b292a64550a8c5ca29d3613eee);
                Border_77ec790e039f46308f00d9c062ef3a1e.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_c38d3c01ea16435988c2d000d23b3581);
                Border_ff84ee8a2d734b2995f3bfc4d75a9467.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_4e40a5ded6a14f53bab187de8e8e49aa);
                Border_ff84ee8a2d734b2995f3bfc4d75a9467.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_d7e1c0095c1a48cba451b1f222c82d87);
                Border_ff84ee8a2d734b2995f3bfc4d75a9467.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_ce0801a8d8f94bb2a5d5e2e6bf14370a);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_e42cf83dc19646178cb210eadc947212, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0), Bridge.fn.cacheBind(this, this.setVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0), Bridge.fn.cacheBind(this, this.getVisualStateProperty_030cf69c0fef4e18bded86bf0158abf0)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_e42cf83dc19646178cb210eadc947212, Border_77ec790e039f46308f00d9c062ef3a1e);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_0d8af060e0e54dc58ead0d3c5a033a40, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e), Bridge.fn.cacheBind(this, this.setVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e), Bridge.fn.cacheBind(this, this.getVisualStateProperty_3a5fb8f7265b46918ea86ffaaa9e014e)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_0d8af060e0e54dc58ead0d3c5a033a40, Border_77ec790e039f46308f00d9c062ef3a1e);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_9e77489805464b3fa005b4cd010d0c9c, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_9fbba6f2bdbd45db824c52183447de48), Bridge.fn.cacheBind(this, this.setVisualStateProperty_9fbba6f2bdbd45db824c52183447de48), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_9fbba6f2bdbd45db824c52183447de48), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_9fbba6f2bdbd45db824c52183447de48), Bridge.fn.cacheBind(this, this.getVisualStateProperty_9fbba6f2bdbd45db824c52183447de48)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_9e77489805464b3fa005b4cd010d0c9c, Border_77ec790e039f46308f00d9c062ef3a1e);

                templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3.TemplateContent = Border_ff84ee8a2d734b2995f3bfc4d75a9467;
                return templateInstance_c5aee6fd98164680a8bf5a5fbaf34db3;
            },
            accessVisualStateProperty_704081faefc246babf4d408a464814e8: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_704081faefc246babf4d408a464814e8: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_704081faefc246babf4d408a464814e8: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_704081faefc246babf4d408a464814e8: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_704081faefc246babf4d408a464814e8: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_04a9959122534d1584b4727e3d3ba22d: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_04a9959122534d1584b4727e3d3ba22d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_04a9959122534d1584b4727e3d3ba22d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_04a9959122534d1584b4727e3d3ba22d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_04a9959122534d1584b4727e3d3ba22d: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_6155b294008547e59391518f9486ac6d: function (templateOwner) {
                var templateInstance_941055ff97974a7c88f8fc35288951e9 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_941055ff97974a7c88f8fc35288951e9.TemplateOwner = templateOwner;
                var Border_f04f6260422f4f0292d0265d9136aa01 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_f04f6260422f4f0292d0265d9136aa01);
                Border_f04f6260422f4f0292d0265d9136aa01.Name = "OuterBorder";
                Border_f04f6260422f4f0292d0265d9136aa01.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_cec331b0083e4a76b976e9a7c506d19a = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_cec331b0083e4a76b976e9a7c506d19a);
                VisualStateGroup_cec331b0083e4a76b976e9a7c506d19a.Name = "CommonStates";
                var VisualState_1b63177d8b3c4d32a1ffd549cbf6fe7a = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_1b63177d8b3c4d32a1ffd549cbf6fe7a);
                VisualState_1b63177d8b3c4d32a1ffd549cbf6fe7a.Name = "Normal";

                var VisualState_6aee96ca9d3446b392de896780968027 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_6aee96ca9d3446b392de896780968027);
                VisualState_6aee96ca9d3446b392de896780968027.Name = "PointerOver";
                var Storyboard_c12f7af6dca24d15927b7c32d1ce1316 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_ea2180a2bc7b4bf0877bcbb71b01140a = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_ea2180a2bc7b4bf0877bcbb71b01140a, "InnerBorder");
                var DiscreteObjectKeyFrame_ad2d73548f9145a79ea0c4f7c99c33bc = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_ad2d73548f9145a79ea0c4f7c99c33bc.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_ad2d73548f9145a79ea0c4f7c99c33bc.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_ea2180a2bc7b4bf0877bcbb71b01140a.KeyFrames.add(DiscreteObjectKeyFrame_ad2d73548f9145a79ea0c4f7c99c33bc);


                Storyboard_c12f7af6dca24d15927b7c32d1ce1316.Children.add(ObjectAnimationUsingKeyFrames_ea2180a2bc7b4bf0877bcbb71b01140a);


                VisualState_6aee96ca9d3446b392de896780968027.Storyboard = Storyboard_c12f7af6dca24d15927b7c32d1ce1316;


                var VisualState_3507a505917944aea950ba631ae28a42 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_3507a505917944aea950ba631ae28a42);
                VisualState_3507a505917944aea950ba631ae28a42.Name = "Pressed";
                var Storyboard_e96ff3d38f6f470a8ca2d91214cb74b1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_87b3e482f2e34bf983d3aa3896d73464 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_87b3e482f2e34bf983d3aa3896d73464, "InnerBorder");
                var DiscreteObjectKeyFrame_f7342069db83472fb1b841c86218b7d9 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_f7342069db83472fb1b841c86218b7d9.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_f7342069db83472fb1b841c86218b7d9.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_87b3e482f2e34bf983d3aa3896d73464.KeyFrames.add(DiscreteObjectKeyFrame_f7342069db83472fb1b841c86218b7d9);


                Storyboard_e96ff3d38f6f470a8ca2d91214cb74b1.Children.add(ObjectAnimationUsingKeyFrames_87b3e482f2e34bf983d3aa3896d73464);


                VisualState_3507a505917944aea950ba631ae28a42.Storyboard = Storyboard_e96ff3d38f6f470a8ca2d91214cb74b1;


                var VisualState_8aec5b5ad75e4be9a9a05ee844f04d8f = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_8aec5b5ad75e4be9a9a05ee844f04d8f);
                VisualState_8aec5b5ad75e4be9a9a05ee844f04d8f.Name = "Disabled";
                var Storyboard_c0e88eb549004d04b635c496f06ddc49 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_19cbf81f58734a5e9a70b06a938339ef = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_19cbf81f58734a5e9a70b06a938339ef, "InnerBorder");
                var DiscreteObjectKeyFrame_10f2c61e4f7e470792c04fb2604f39fc = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_10f2c61e4f7e470792c04fb2604f39fc.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_10f2c61e4f7e470792c04fb2604f39fc.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_19cbf81f58734a5e9a70b06a938339ef.KeyFrames.add(DiscreteObjectKeyFrame_10f2c61e4f7e470792c04fb2604f39fc);


                Storyboard_c0e88eb549004d04b635c496f06ddc49.Children.add(ObjectAnimationUsingKeyFrames_19cbf81f58734a5e9a70b06a938339ef);


                VisualState_8aec5b5ad75e4be9a9a05ee844f04d8f.Storyboard = Storyboard_c0e88eb549004d04b635c496f06ddc49;


                System.Array.add(VisualStateGroup_cec331b0083e4a76b976e9a7c506d19a.States, VisualState_1b63177d8b3c4d32a1ffd549cbf6fe7a, Object);
                System.Array.add(VisualStateGroup_cec331b0083e4a76b976e9a7c506d19a.States, VisualState_6aee96ca9d3446b392de896780968027, Object);
                System.Array.add(VisualStateGroup_cec331b0083e4a76b976e9a7c506d19a.States, VisualState_3507a505917944aea950ba631ae28a42, Object);
                System.Array.add(VisualStateGroup_cec331b0083e4a76b976e9a7c506d19a.States, VisualState_8aec5b5ad75e4be9a9a05ee844f04d8f, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_cec331b0083e4a76b976e9a7c506d19a);

                var Border_4233c2e7a70d4fe6b9e62c9b459f547c = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_4233c2e7a70d4fe6b9e62c9b459f547c);
                Border_4233c2e7a70d4fe6b9e62c9b459f547c.Name = "InnerBorder";
                Border_4233c2e7a70d4fe6b9e62c9b459f547c.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_dad68765ec6542ecac520b0eea74ef3a = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_dad68765ec6542ecac520b0eea74ef3a);
                ContentPresenter_dad68765ec6542ecac520b0eea74ef3a.Name = "ContentPresenter";
                var Binding_04acd8d4aa93414daffc47efd8391f95 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_04acd8d4aa93414daffc47efd8391f95.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_ce35832df70d489cafc6142c046fa6e2 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ce35832df70d489cafc6142c046fa6e2.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_04acd8d4aa93414daffc47efd8391f95.RelativeSource = RelativeSource_ce35832df70d489cafc6142c046fa6e2;


                Binding_04acd8d4aa93414daffc47efd8391f95.TemplateOwner = templateInstance_941055ff97974a7c88f8fc35288951e9;

                var Binding_7dd0e91f402448fba45097fc2c2b4e77 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_7dd0e91f402448fba45097fc2c2b4e77.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_64b8672be9424874917f993bd95388c6 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_64b8672be9424874917f993bd95388c6.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_7dd0e91f402448fba45097fc2c2b4e77.RelativeSource = RelativeSource_64b8672be9424874917f993bd95388c6;


                Binding_7dd0e91f402448fba45097fc2c2b4e77.TemplateOwner = templateInstance_941055ff97974a7c88f8fc35288951e9;

                var Binding_19d647870b174c78a2c3b9b0dec615d5 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_19d647870b174c78a2c3b9b0dec615d5.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_06cbf558f8a94e1d9f60437aefdf2af2 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_06cbf558f8a94e1d9f60437aefdf2af2.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_19d647870b174c78a2c3b9b0dec615d5.RelativeSource = RelativeSource_06cbf558f8a94e1d9f60437aefdf2af2;


                Binding_19d647870b174c78a2c3b9b0dec615d5.TemplateOwner = templateInstance_941055ff97974a7c88f8fc35288951e9;

                var Binding_cc197f270f8843c7ab6d2f4c22057632 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_cc197f270f8843c7ab6d2f4c22057632.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_8e5d6fbd3aed4fc1accd1e1c92478462 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8e5d6fbd3aed4fc1accd1e1c92478462.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_cc197f270f8843c7ab6d2f4c22057632.RelativeSource = RelativeSource_8e5d6fbd3aed4fc1accd1e1c92478462;


                Binding_cc197f270f8843c7ab6d2f4c22057632.TemplateOwner = templateInstance_941055ff97974a7c88f8fc35288951e9;

                var Binding_d0cdb095032b4e1e8aceda5b3debfa59 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d0cdb095032b4e1e8aceda5b3debfa59.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_2914c8179d704ff68c4325134005c454 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_2914c8179d704ff68c4325134005c454.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d0cdb095032b4e1e8aceda5b3debfa59.RelativeSource = RelativeSource_2914c8179d704ff68c4325134005c454;


                Binding_d0cdb095032b4e1e8aceda5b3debfa59.TemplateOwner = templateInstance_941055ff97974a7c88f8fc35288951e9;


                Border_4233c2e7a70d4fe6b9e62c9b459f547c.Child = ContentPresenter_dad68765ec6542ecac520b0eea74ef3a;

                var Binding_911022d3f09b400e8064c325f9622cd6 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_911022d3f09b400e8064c325f9622cd6.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_9e9939c9f18544f29e005759c41c98b9 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9e9939c9f18544f29e005759c41c98b9.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_911022d3f09b400e8064c325f9622cd6.RelativeSource = RelativeSource_9e9939c9f18544f29e005759c41c98b9;


                Binding_911022d3f09b400e8064c325f9622cd6.TemplateOwner = templateInstance_941055ff97974a7c88f8fc35288951e9;


                Border_f04f6260422f4f0292d0265d9136aa01.Child = Border_4233c2e7a70d4fe6b9e62c9b459f547c;

                var Binding_4eea5531d70943a4bd57455be26a7bf6 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4eea5531d70943a4bd57455be26a7bf6.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_dcdfd3e0e019454fab73b5ac74e6d072 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_dcdfd3e0e019454fab73b5ac74e6d072.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4eea5531d70943a4bd57455be26a7bf6.RelativeSource = RelativeSource_dcdfd3e0e019454fab73b5ac74e6d072;


                Binding_4eea5531d70943a4bd57455be26a7bf6.TemplateOwner = templateInstance_941055ff97974a7c88f8fc35288951e9;

                var Binding_4fc47a77ceae4494b331959999dfbd92 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4fc47a77ceae4494b331959999dfbd92.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_71c4afd9cc4445728ac3a444eb78db34 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_71c4afd9cc4445728ac3a444eb78db34.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4fc47a77ceae4494b331959999dfbd92.RelativeSource = RelativeSource_71c4afd9cc4445728ac3a444eb78db34;


                Binding_4fc47a77ceae4494b331959999dfbd92.TemplateOwner = templateInstance_941055ff97974a7c88f8fc35288951e9;

                var Binding_7bb8b380dea24bf7819db8c86adff1fc = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_7bb8b380dea24bf7819db8c86adff1fc.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_01ce739fcf77467db102afb53da3d433 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_01ce739fcf77467db102afb53da3d433.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_7bb8b380dea24bf7819db8c86adff1fc.RelativeSource = RelativeSource_01ce739fcf77467db102afb53da3d433;


                Binding_7bb8b380dea24bf7819db8c86adff1fc.TemplateOwner = templateInstance_941055ff97974a7c88f8fc35288951e9;



                ContentPresenter_dad68765ec6542ecac520b0eea74ef3a.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_04acd8d4aa93414daffc47efd8391f95);
                ContentPresenter_dad68765ec6542ecac520b0eea74ef3a.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_7dd0e91f402448fba45097fc2c2b4e77);
                ContentPresenter_dad68765ec6542ecac520b0eea74ef3a.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_19d647870b174c78a2c3b9b0dec615d5);
                ContentPresenter_dad68765ec6542ecac520b0eea74ef3a.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_cc197f270f8843c7ab6d2f4c22057632);
                ContentPresenter_dad68765ec6542ecac520b0eea74ef3a.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_d0cdb095032b4e1e8aceda5b3debfa59);
                Border_4233c2e7a70d4fe6b9e62c9b459f547c.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_911022d3f09b400e8064c325f9622cd6);
                Border_f04f6260422f4f0292d0265d9136aa01.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_4eea5531d70943a4bd57455be26a7bf6);
                Border_f04f6260422f4f0292d0265d9136aa01.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_4fc47a77ceae4494b331959999dfbd92);
                Border_f04f6260422f4f0292d0265d9136aa01.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_7bb8b380dea24bf7819db8c86adff1fc);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_ea2180a2bc7b4bf0877bcbb71b01140a, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_704081faefc246babf4d408a464814e8), Bridge.fn.cacheBind(this, this.setVisualStateProperty_704081faefc246babf4d408a464814e8), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_704081faefc246babf4d408a464814e8), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_704081faefc246babf4d408a464814e8), Bridge.fn.cacheBind(this, this.getVisualStateProperty_704081faefc246babf4d408a464814e8)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_ea2180a2bc7b4bf0877bcbb71b01140a, Border_4233c2e7a70d4fe6b9e62c9b459f547c);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_87b3e482f2e34bf983d3aa3896d73464, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_04a9959122534d1584b4727e3d3ba22d), Bridge.fn.cacheBind(this, this.setVisualStateProperty_04a9959122534d1584b4727e3d3ba22d), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_04a9959122534d1584b4727e3d3ba22d), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_04a9959122534d1584b4727e3d3ba22d), Bridge.fn.cacheBind(this, this.getVisualStateProperty_04a9959122534d1584b4727e3d3ba22d)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_87b3e482f2e34bf983d3aa3896d73464, Border_4233c2e7a70d4fe6b9e62c9b459f547c);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_19cbf81f58734a5e9a70b06a938339ef, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00), Bridge.fn.cacheBind(this, this.setVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00), Bridge.fn.cacheBind(this, this.getVisualStateProperty_35de99f9454a4835a85a36a6a41d9a00)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_19cbf81f58734a5e9a70b06a938339ef, Border_4233c2e7a70d4fe6b9e62c9b459f547c);

                templateInstance_941055ff97974a7c88f8fc35288951e9.TemplateContent = Border_f04f6260422f4f0292d0265d9136aa01;
                return templateInstance_941055ff97974a7c88f8fc35288951e9;
            },
            accessVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_e518db92297d48678226dde460d56fc2: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_e518db92297d48678226dde460d56fc2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_e518db92297d48678226dde460d56fc2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_e518db92297d48678226dde460d56fc2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_e518db92297d48678226dde460d56fc2: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_b185ffbdd073492797a893d99a28e211: function (templateOwner) {
                var templateInstance_6b1300ef954a46e6b0b2426d3f543877 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_6b1300ef954a46e6b0b2426d3f543877.TemplateOwner = templateOwner;
                var Border_9817765592ab4c538823ab325dca06f3 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_9817765592ab4c538823ab325dca06f3);
                Border_9817765592ab4c538823ab325dca06f3.Name = "OuterBorder";
                Border_9817765592ab4c538823ab325dca06f3.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_1ca7bcbe669444a2a0755cf6916700c3 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_1ca7bcbe669444a2a0755cf6916700c3);
                VisualStateGroup_1ca7bcbe669444a2a0755cf6916700c3.Name = "CommonStates";
                var VisualState_455a277ad89446c0bdaa47e71c3f8498 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_455a277ad89446c0bdaa47e71c3f8498);
                VisualState_455a277ad89446c0bdaa47e71c3f8498.Name = "Normal";

                var VisualState_1c7820436181456b8200f0069966e3fd = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_1c7820436181456b8200f0069966e3fd);
                VisualState_1c7820436181456b8200f0069966e3fd.Name = "PointerOver";
                var Storyboard_b354b9cee34d4ec3af17d58b9defda9d = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_19288ae3553e42cf8169dab1b770d8c8 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_19288ae3553e42cf8169dab1b770d8c8, "InnerBorder");
                var DiscreteObjectKeyFrame_aca522c3ae8e443097b74af36e9424f7 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_aca522c3ae8e443097b74af36e9424f7.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_aca522c3ae8e443097b74af36e9424f7.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_19288ae3553e42cf8169dab1b770d8c8.KeyFrames.add(DiscreteObjectKeyFrame_aca522c3ae8e443097b74af36e9424f7);


                Storyboard_b354b9cee34d4ec3af17d58b9defda9d.Children.add(ObjectAnimationUsingKeyFrames_19288ae3553e42cf8169dab1b770d8c8);


                VisualState_1c7820436181456b8200f0069966e3fd.Storyboard = Storyboard_b354b9cee34d4ec3af17d58b9defda9d;


                var VisualState_cf8c9a2533174c63a1df593e30ba32e3 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_cf8c9a2533174c63a1df593e30ba32e3);
                VisualState_cf8c9a2533174c63a1df593e30ba32e3.Name = "Pressed";
                var Storyboard_72fd4a9f98c74872b4b5f21bd0c588a8 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_7821aaf695d140fab65c653c2ac28d9f = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_7821aaf695d140fab65c653c2ac28d9f, "InnerBorder");
                var DiscreteObjectKeyFrame_3d5d5ec37a2f4bc89882e7819d336287 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_3d5d5ec37a2f4bc89882e7819d336287.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_3d5d5ec37a2f4bc89882e7819d336287.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_7821aaf695d140fab65c653c2ac28d9f.KeyFrames.add(DiscreteObjectKeyFrame_3d5d5ec37a2f4bc89882e7819d336287);


                Storyboard_72fd4a9f98c74872b4b5f21bd0c588a8.Children.add(ObjectAnimationUsingKeyFrames_7821aaf695d140fab65c653c2ac28d9f);


                VisualState_cf8c9a2533174c63a1df593e30ba32e3.Storyboard = Storyboard_72fd4a9f98c74872b4b5f21bd0c588a8;


                var VisualState_21f5719a6a4a4cab9292d6adcedf24a1 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_21f5719a6a4a4cab9292d6adcedf24a1);
                VisualState_21f5719a6a4a4cab9292d6adcedf24a1.Name = "Disabled";
                var Storyboard_4655e15fb94b4d1aab7991ba130d5b71 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_22eb0e85f2d34fc7aff4330be1889d9a = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_22eb0e85f2d34fc7aff4330be1889d9a, "InnerBorder");
                var DiscreteObjectKeyFrame_ec7aab1ec87c4251ad28eb5658508f82 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_ec7aab1ec87c4251ad28eb5658508f82.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_ec7aab1ec87c4251ad28eb5658508f82.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_22eb0e85f2d34fc7aff4330be1889d9a.KeyFrames.add(DiscreteObjectKeyFrame_ec7aab1ec87c4251ad28eb5658508f82);


                Storyboard_4655e15fb94b4d1aab7991ba130d5b71.Children.add(ObjectAnimationUsingKeyFrames_22eb0e85f2d34fc7aff4330be1889d9a);


                VisualState_21f5719a6a4a4cab9292d6adcedf24a1.Storyboard = Storyboard_4655e15fb94b4d1aab7991ba130d5b71;


                System.Array.add(VisualStateGroup_1ca7bcbe669444a2a0755cf6916700c3.States, VisualState_455a277ad89446c0bdaa47e71c3f8498, Object);
                System.Array.add(VisualStateGroup_1ca7bcbe669444a2a0755cf6916700c3.States, VisualState_1c7820436181456b8200f0069966e3fd, Object);
                System.Array.add(VisualStateGroup_1ca7bcbe669444a2a0755cf6916700c3.States, VisualState_cf8c9a2533174c63a1df593e30ba32e3, Object);
                System.Array.add(VisualStateGroup_1ca7bcbe669444a2a0755cf6916700c3.States, VisualState_21f5719a6a4a4cab9292d6adcedf24a1, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_1ca7bcbe669444a2a0755cf6916700c3);

                var Border_6391f3430f9147e990ae422bb65cafc7 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_6391f3430f9147e990ae422bb65cafc7);
                Border_6391f3430f9147e990ae422bb65cafc7.Name = "InnerBorder";
                Border_6391f3430f9147e990ae422bb65cafc7.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_fb98a4ff26b541199a148fe7f24a931d = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_fb98a4ff26b541199a148fe7f24a931d);
                ContentPresenter_fb98a4ff26b541199a148fe7f24a931d.Name = "ContentPresenter";
                var Binding_e2a3e60db6ce4b00a9f5c04c887808a7 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e2a3e60db6ce4b00a9f5c04c887808a7.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_d2c607ad40f849b195da06b5b32c6ed7 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d2c607ad40f849b195da06b5b32c6ed7.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e2a3e60db6ce4b00a9f5c04c887808a7.RelativeSource = RelativeSource_d2c607ad40f849b195da06b5b32c6ed7;


                Binding_e2a3e60db6ce4b00a9f5c04c887808a7.TemplateOwner = templateInstance_6b1300ef954a46e6b0b2426d3f543877;

                var Binding_b27be5bf5c114a3fae38f820da325b19 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_b27be5bf5c114a3fae38f820da325b19.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_e111d232dfa944899b899e233b52fc60 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e111d232dfa944899b899e233b52fc60.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_b27be5bf5c114a3fae38f820da325b19.RelativeSource = RelativeSource_e111d232dfa944899b899e233b52fc60;


                Binding_b27be5bf5c114a3fae38f820da325b19.TemplateOwner = templateInstance_6b1300ef954a46e6b0b2426d3f543877;

                var Binding_fc9b7408a1ae4845ae6bb291a4f41267 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fc9b7408a1ae4845ae6bb291a4f41267.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_41707e964638407cad9aabb4c4590e9b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_41707e964638407cad9aabb4c4590e9b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fc9b7408a1ae4845ae6bb291a4f41267.RelativeSource = RelativeSource_41707e964638407cad9aabb4c4590e9b;


                Binding_fc9b7408a1ae4845ae6bb291a4f41267.TemplateOwner = templateInstance_6b1300ef954a46e6b0b2426d3f543877;

                var Binding_aa408d3258654de2a8040a44ef8887f0 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_aa408d3258654de2a8040a44ef8887f0.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_cf6f1daea3064b52b8730f069a05f8ac = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_cf6f1daea3064b52b8730f069a05f8ac.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_aa408d3258654de2a8040a44ef8887f0.RelativeSource = RelativeSource_cf6f1daea3064b52b8730f069a05f8ac;


                Binding_aa408d3258654de2a8040a44ef8887f0.TemplateOwner = templateInstance_6b1300ef954a46e6b0b2426d3f543877;

                var Binding_2e20ba109a2f4f8896069f982f5f59cd = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_2e20ba109a2f4f8896069f982f5f59cd.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_8bba7d47cbe7453fa2f21cd5dba3fdb9 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8bba7d47cbe7453fa2f21cd5dba3fdb9.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_2e20ba109a2f4f8896069f982f5f59cd.RelativeSource = RelativeSource_8bba7d47cbe7453fa2f21cd5dba3fdb9;


                Binding_2e20ba109a2f4f8896069f982f5f59cd.TemplateOwner = templateInstance_6b1300ef954a46e6b0b2426d3f543877;


                Border_6391f3430f9147e990ae422bb65cafc7.Child = ContentPresenter_fb98a4ff26b541199a148fe7f24a931d;

                var Binding_14d9992b298f4da2a9010371e578d957 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_14d9992b298f4da2a9010371e578d957.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_b95eaf13f0ec473e9f05594bc5898b1d = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_b95eaf13f0ec473e9f05594bc5898b1d.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_14d9992b298f4da2a9010371e578d957.RelativeSource = RelativeSource_b95eaf13f0ec473e9f05594bc5898b1d;


                Binding_14d9992b298f4da2a9010371e578d957.TemplateOwner = templateInstance_6b1300ef954a46e6b0b2426d3f543877;


                Border_9817765592ab4c538823ab325dca06f3.Child = Border_6391f3430f9147e990ae422bb65cafc7;

                var Binding_c3319c4851cb4977be7f2a3b7eb5c35e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c3319c4851cb4977be7f2a3b7eb5c35e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_427b31c0f5eb4bf3b48b48fa8920757a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_427b31c0f5eb4bf3b48b48fa8920757a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c3319c4851cb4977be7f2a3b7eb5c35e.RelativeSource = RelativeSource_427b31c0f5eb4bf3b48b48fa8920757a;


                Binding_c3319c4851cb4977be7f2a3b7eb5c35e.TemplateOwner = templateInstance_6b1300ef954a46e6b0b2426d3f543877;

                var Binding_a30492e24e6e44268fd10d632bbb79c8 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_a30492e24e6e44268fd10d632bbb79c8.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_de0754b61dcc4372a35b631050ed81d7 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_de0754b61dcc4372a35b631050ed81d7.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_a30492e24e6e44268fd10d632bbb79c8.RelativeSource = RelativeSource_de0754b61dcc4372a35b631050ed81d7;


                Binding_a30492e24e6e44268fd10d632bbb79c8.TemplateOwner = templateInstance_6b1300ef954a46e6b0b2426d3f543877;

                var Binding_eddd6f9f7dd341bf8fd15f61f74601de = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_eddd6f9f7dd341bf8fd15f61f74601de.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_ebd8f9c5e25c45fdb7059de5ffd4593d = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ebd8f9c5e25c45fdb7059de5ffd4593d.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_eddd6f9f7dd341bf8fd15f61f74601de.RelativeSource = RelativeSource_ebd8f9c5e25c45fdb7059de5ffd4593d;


                Binding_eddd6f9f7dd341bf8fd15f61f74601de.TemplateOwner = templateInstance_6b1300ef954a46e6b0b2426d3f543877;



                ContentPresenter_fb98a4ff26b541199a148fe7f24a931d.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_e2a3e60db6ce4b00a9f5c04c887808a7);
                ContentPresenter_fb98a4ff26b541199a148fe7f24a931d.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_b27be5bf5c114a3fae38f820da325b19);
                ContentPresenter_fb98a4ff26b541199a148fe7f24a931d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_fc9b7408a1ae4845ae6bb291a4f41267);
                ContentPresenter_fb98a4ff26b541199a148fe7f24a931d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_aa408d3258654de2a8040a44ef8887f0);
                ContentPresenter_fb98a4ff26b541199a148fe7f24a931d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_2e20ba109a2f4f8896069f982f5f59cd);
                Border_6391f3430f9147e990ae422bb65cafc7.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_14d9992b298f4da2a9010371e578d957);
                Border_9817765592ab4c538823ab325dca06f3.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_c3319c4851cb4977be7f2a3b7eb5c35e);
                Border_9817765592ab4c538823ab325dca06f3.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_a30492e24e6e44268fd10d632bbb79c8);
                Border_9817765592ab4c538823ab325dca06f3.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_eddd6f9f7dd341bf8fd15f61f74601de);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_19288ae3553e42cf8169dab1b770d8c8, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9), Bridge.fn.cacheBind(this, this.setVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9), Bridge.fn.cacheBind(this, this.getVisualStateProperty_de1d54beaeef4e8c8843a91e8bc386d9)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_19288ae3553e42cf8169dab1b770d8c8, Border_6391f3430f9147e990ae422bb65cafc7);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_7821aaf695d140fab65c653c2ac28d9f, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d), Bridge.fn.cacheBind(this, this.setVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d), Bridge.fn.cacheBind(this, this.getVisualStateProperty_35b844157c4e4c869b76b6cebe0b668d)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_7821aaf695d140fab65c653c2ac28d9f, Border_6391f3430f9147e990ae422bb65cafc7);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_22eb0e85f2d34fc7aff4330be1889d9a, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_e518db92297d48678226dde460d56fc2), Bridge.fn.cacheBind(this, this.setVisualStateProperty_e518db92297d48678226dde460d56fc2), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_e518db92297d48678226dde460d56fc2), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_e518db92297d48678226dde460d56fc2), Bridge.fn.cacheBind(this, this.getVisualStateProperty_e518db92297d48678226dde460d56fc2)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_22eb0e85f2d34fc7aff4330be1889d9a, Border_6391f3430f9147e990ae422bb65cafc7);

                templateInstance_6b1300ef954a46e6b0b2426d3f543877.TemplateContent = Border_9817765592ab4c538823ab325dca06f3;
                return templateInstance_6b1300ef954a46e6b0b2426d3f543877;
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



                var Grid_0e95ddd2bce4409ebb279d804cc92553 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutRoot", Grid_0e95ddd2bce4409ebb279d804cc92553);
                Grid_0e95ddd2bce4409ebb279d804cc92553.Name = "LayoutRoot";
                Grid_0e95ddd2bce4409ebb279d804cc92553.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                var Grid_e9374c0bdc5543678e913cb99b75747e = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_8fd0fe67159d4ee6936c461669584337 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_8fd0fe67159d4ee6936c461669584337.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_8fd0fe67159d4ee6936c461669584337.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_fe30a3edc02d48babd8ef620c1cb4b25 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_fe30a3edc02d48babd8ef620c1cb4b25.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_fe30a3edc02d48babd8ef620c1cb4b25.Offset = 0.0;

                var GradientStop_fc80fca248e542fd84a0d0b0355746df = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_fc80fca248e542fd84a0d0b0355746df.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_fc80fca248e542fd84a0d0b0355746df.Offset = 1.0;

                LinearGradientBrush_8fd0fe67159d4ee6936c461669584337.GradientStops.add(GradientStop_fe30a3edc02d48babd8ef620c1cb4b25);
                LinearGradientBrush_8fd0fe67159d4ee6936c461669584337.GradientStops.add(GradientStop_fc80fca248e542fd84a0d0b0355746df);


                Grid_e9374c0bdc5543678e913cb99b75747e.Background = LinearGradientBrush_8fd0fe67159d4ee6936c461669584337;

                var Border_84cf446565bd40aebdcddf23820ab46f = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_84cf446565bd40aebdcddf23820ab46f);
                Border_84cf446565bd40aebdcddf23820ab46f.Name = "element";
                Border_84cf446565bd40aebdcddf23820ab46f.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Border_84cf446565bd40aebdcddf23820ab46f.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 139, $t));
                Border_84cf446565bd40aebdcddf23820ab46f.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_84cf446565bd40aebdcddf23820ab46f.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_dd4ddfe6ddd547fca20f1c9ee4ec20c1 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_dd4ddfe6ddd547fca20f1c9ee4ec20c1.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_dd4ddfe6ddd547fca20f1c9ee4ec20c1.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_55599217d9ca4e6aa753a29f3e527fe6 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_55599217d9ca4e6aa753a29f3e527fe6.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_55599217d9ca4e6aa753a29f3e527fe6.Offset = 0.0;

                var GradientStop_68cef9f9be70464a87a75bc7982d327e = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_68cef9f9be70464a87a75bc7982d327e.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_68cef9f9be70464a87a75bc7982d327e.Offset = 0.5896;

                var GradientStop_28f0e866a4e74c6ba4ebb9847cbd2921 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_28f0e866a4e74c6ba4ebb9847cbd2921.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 246, $t.G = 246, $t.B = 246, $t);
                GradientStop_28f0e866a4e74c6ba4ebb9847cbd2921.Offset = 1.0;

                LinearGradientBrush_dd4ddfe6ddd547fca20f1c9ee4ec20c1.GradientStops.add(GradientStop_55599217d9ca4e6aa753a29f3e527fe6);
                LinearGradientBrush_dd4ddfe6ddd547fca20f1c9ee4ec20c1.GradientStops.add(GradientStop_68cef9f9be70464a87a75bc7982d327e);
                LinearGradientBrush_dd4ddfe6ddd547fca20f1c9ee4ec20c1.GradientStops.add(GradientStop_28f0e866a4e74c6ba4ebb9847cbd2921);


                Border_84cf446565bd40aebdcddf23820ab46f.Background = LinearGradientBrush_dd4ddfe6ddd547fca20f1c9ee4ec20c1;

                var TransformGroup_113af46106d248a0aa4d5c1e2d6f60ed = new Bridge.global.Windows.UI.Xaml.Media.TransformGroup();
                var ScaleTransform_b69f4df2cf5347b1a74d4b1464ad0e5d = new Bridge.global.Windows.UI.Xaml.Media.ScaleTransform();

                var RotateTransform_a0687088959242b69863c1ad303e9b7d = new Bridge.global.Windows.UI.Xaml.Media.RotateTransform();

                TransformGroup_113af46106d248a0aa4d5c1e2d6f60ed.Children.add(ScaleTransform_b69f4df2cf5347b1a74d4b1464ad0e5d);
                TransformGroup_113af46106d248a0aa4d5c1e2d6f60ed.Children.add(RotateTransform_a0687088959242b69863c1ad303e9b7d);


                Border_84cf446565bd40aebdcddf23820ab46f.RenderTransform = TransformGroup_113af46106d248a0aa4d5c1e2d6f60ed;

                var Grid_b80700d9a1504d66ac9daa7177099eac = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var ColumnDefinition_34fa9a5a1bed4e78b126e2099525d691 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_85529ba47c35451f96c4c31be32f2fce = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_3fb855ddf0fb4c7cb545faa4f1697e5d = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_b80700d9a1504d66ac9daa7177099eac.ColumnDefinitions.add(ColumnDefinition_34fa9a5a1bed4e78b126e2099525d691);
                Grid_b80700d9a1504d66ac9daa7177099eac.ColumnDefinitions.add(ColumnDefinition_85529ba47c35451f96c4c31be32f2fce);
                Grid_b80700d9a1504d66ac9daa7177099eac.ColumnDefinitions.add(ColumnDefinition_3fb855ddf0fb4c7cb545faa4f1697e5d);

                var RowDefinition_a0592e09fccb4ce789cdc3600223d013 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_a0592e09fccb4ce789cdc3600223d013.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_d8636b6a7efe481f937d9b70d63961ca = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_d8636b6a7efe481f937d9b70d63961ca.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_bff920c1f61543dd8bc3a89ad1d70fd8 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_bff920c1f61543dd8bc3a89ad1d70fd8.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_b80700d9a1504d66ac9daa7177099eac.RowDefinitions.add(RowDefinition_a0592e09fccb4ce789cdc3600223d013);
                Grid_b80700d9a1504d66ac9daa7177099eac.RowDefinitions.add(RowDefinition_d8636b6a7efe481f937d9b70d63961ca);
                Grid_b80700d9a1504d66ac9daa7177099eac.RowDefinitions.add(RowDefinition_bff920c1f61543dd8bc3a89ad1d70fd8);

                var Image_6ad439809dbc4dcd9509350ac4d38395 = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                Image_6ad439809dbc4dcd9509350ac4d38395.Source = Bridge.cast(Bridge.global.DotNetForHtml5.Core.TypeFromStringConverters.ConvertFromInvariantString(Bridge.global.Windows.UI.Xaml.Media.ImageSource, "/CShtml;component/img/HomeImage.jpg"), Windows.UI.Xaml.Media.ImageSource);
                Image_6ad439809dbc4dcd9509350ac4d38395.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Uniform;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Image_6ad439809dbc4dcd9509350ac4d38395, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Image_6ad439809dbc4dcd9509350ac4d38395, 3);

                Grid_b80700d9a1504d66ac9daa7177099eac.Children.add(Image_6ad439809dbc4dcd9509350ac4d38395);


                Border_84cf446565bd40aebdcddf23820ab46f.Child = Grid_b80700d9a1504d66ac9daa7177099eac;


                var Button_a0eefe1cf9a64dea9ac7de17bd37298f = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnBegin", Button_a0eefe1cf9a64dea9ac7de17bd37298f);
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.Name = "btnBegin";
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.Content = "\u041d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443";
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.FontSize = 25.0;
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.Width = 280.0;
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_a0eefe1cf9a64dea9ac7de17bd37298f, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_a0eefe1cf9a64dea9ac7de17bd37298f, 1);
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(0, 0, 0, 50);
                Button_a0eefe1cf9a64dea9ac7de17bd37298f.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                var ControlTemplate_77aca1aa727d465cae06508692d78571 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_77aca1aa727d465cae06508692d78571.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_77aca1aa727d465cae06508692d78571.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_77aca1aa727d465cae06508692d78571));

                Button_a0eefe1cf9a64dea9ac7de17bd37298f.Template = ControlTemplate_77aca1aa727d465cae06508692d78571;


                Grid_e9374c0bdc5543678e913cb99b75747e.Children.add(Border_84cf446565bd40aebdcddf23820ab46f);
                Grid_e9374c0bdc5543678e913cb99b75747e.Children.add(Button_a0eefe1cf9a64dea9ac7de17bd37298f);


                Grid_0e95ddd2bce4409ebb279d804cc92553.Children.add(Grid_e9374c0bdc5543678e913cb99b75747e);


                this.Content = Grid_0e95ddd2bce4409ebb279d804cc92553;



                this.element = Border_84cf446565bd40aebdcddf23820ab46f;
                this.btnBegin = Button_a0eefe1cf9a64dea9ac7de17bd37298f;
                this.LayoutRoot = Grid_0e95ddd2bce4409ebb279d804cc92553;



            },
            accessVisualStateProperty_408f8004d6f045eda0647cf5ad90a608: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_408f8004d6f045eda0647cf5ad90a608: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_408f8004d6f045eda0647cf5ad90a608: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_408f8004d6f045eda0647cf5ad90a608: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_408f8004d6f045eda0647cf5ad90a608: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_77aca1aa727d465cae06508692d78571: function (templateOwner) {
                var templateInstance_b77e7c553b1b427d9153975c62c6e0e3 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_b77e7c553b1b427d9153975c62c6e0e3.TemplateOwner = templateOwner;
                var Border_617ef6b7c5b842a48eb0a478c204600c = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_617ef6b7c5b842a48eb0a478c204600c);
                Border_617ef6b7c5b842a48eb0a478c204600c.Name = "OuterBorder";
                Border_617ef6b7c5b842a48eb0a478c204600c.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_35d5722e37d94147a8e35bf4cd517f3c = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_35d5722e37d94147a8e35bf4cd517f3c);
                VisualStateGroup_35d5722e37d94147a8e35bf4cd517f3c.Name = "CommonStates";
                var VisualState_81219ea8981344258986e002cd328572 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_81219ea8981344258986e002cd328572);
                VisualState_81219ea8981344258986e002cd328572.Name = "Normal";

                var VisualState_74bfecde534c4b1cb92f7c8d6fa6616b = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_74bfecde534c4b1cb92f7c8d6fa6616b);
                VisualState_74bfecde534c4b1cb92f7c8d6fa6616b.Name = "PointerOver";
                var Storyboard_4ddf0b28155c441e8530feb32e236923 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_8adcc209b4124aa29ecfc298a1c4dec7 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_8adcc209b4124aa29ecfc298a1c4dec7, "InnerBorder");
                var DiscreteObjectKeyFrame_41589de5d1884eefabb7dd49dce2271a = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_41589de5d1884eefabb7dd49dce2271a.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_41589de5d1884eefabb7dd49dce2271a.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_8adcc209b4124aa29ecfc298a1c4dec7.KeyFrames.add(DiscreteObjectKeyFrame_41589de5d1884eefabb7dd49dce2271a);


                Storyboard_4ddf0b28155c441e8530feb32e236923.Children.add(ObjectAnimationUsingKeyFrames_8adcc209b4124aa29ecfc298a1c4dec7);


                VisualState_74bfecde534c4b1cb92f7c8d6fa6616b.Storyboard = Storyboard_4ddf0b28155c441e8530feb32e236923;


                var VisualState_09d68012e4c34dd383d86d293997d040 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_09d68012e4c34dd383d86d293997d040);
                VisualState_09d68012e4c34dd383d86d293997d040.Name = "Pressed";
                var Storyboard_606b9f758a794014af887db567c42dee = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_c71facbd95ab4b99b739e32158ad963e = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_c71facbd95ab4b99b739e32158ad963e, "InnerBorder");
                var DiscreteObjectKeyFrame_c7589536460643c386dbf1dbe75fd35b = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_c7589536460643c386dbf1dbe75fd35b.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_c7589536460643c386dbf1dbe75fd35b.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_c71facbd95ab4b99b739e32158ad963e.KeyFrames.add(DiscreteObjectKeyFrame_c7589536460643c386dbf1dbe75fd35b);


                Storyboard_606b9f758a794014af887db567c42dee.Children.add(ObjectAnimationUsingKeyFrames_c71facbd95ab4b99b739e32158ad963e);


                VisualState_09d68012e4c34dd383d86d293997d040.Storyboard = Storyboard_606b9f758a794014af887db567c42dee;


                var VisualState_4a5cd2c6e4d748818c4294ffc228b1ca = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_4a5cd2c6e4d748818c4294ffc228b1ca);
                VisualState_4a5cd2c6e4d748818c4294ffc228b1ca.Name = "Disabled";
                var Storyboard_13d46d4460d04adc8b2108bbd527f822 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_7929b2681cb041ca8cfa29cf5e582f27 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_7929b2681cb041ca8cfa29cf5e582f27, "InnerBorder");
                var DiscreteObjectKeyFrame_4eaa9b5a8cf2464eb5c81b7707217251 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_4eaa9b5a8cf2464eb5c81b7707217251.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_4eaa9b5a8cf2464eb5c81b7707217251.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_7929b2681cb041ca8cfa29cf5e582f27.KeyFrames.add(DiscreteObjectKeyFrame_4eaa9b5a8cf2464eb5c81b7707217251);


                Storyboard_13d46d4460d04adc8b2108bbd527f822.Children.add(ObjectAnimationUsingKeyFrames_7929b2681cb041ca8cfa29cf5e582f27);


                VisualState_4a5cd2c6e4d748818c4294ffc228b1ca.Storyboard = Storyboard_13d46d4460d04adc8b2108bbd527f822;


                System.Array.add(VisualStateGroup_35d5722e37d94147a8e35bf4cd517f3c.States, VisualState_81219ea8981344258986e002cd328572, Object);
                System.Array.add(VisualStateGroup_35d5722e37d94147a8e35bf4cd517f3c.States, VisualState_74bfecde534c4b1cb92f7c8d6fa6616b, Object);
                System.Array.add(VisualStateGroup_35d5722e37d94147a8e35bf4cd517f3c.States, VisualState_09d68012e4c34dd383d86d293997d040, Object);
                System.Array.add(VisualStateGroup_35d5722e37d94147a8e35bf4cd517f3c.States, VisualState_4a5cd2c6e4d748818c4294ffc228b1ca, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_35d5722e37d94147a8e35bf4cd517f3c);

                var Border_d4ce0915d8964c84a843ecedefd2ae45 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_d4ce0915d8964c84a843ecedefd2ae45);
                Border_d4ce0915d8964c84a843ecedefd2ae45.Name = "InnerBorder";
                Border_d4ce0915d8964c84a843ecedefd2ae45.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_babc09983d5e4a7fbb70aefb93f034cb = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_babc09983d5e4a7fbb70aefb93f034cb);
                ContentPresenter_babc09983d5e4a7fbb70aefb93f034cb.Name = "ContentPresenter";
                var Binding_93f7cf6d58034f69a541a0b7486488a9 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_93f7cf6d58034f69a541a0b7486488a9.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_d90e194798984e8ca399fb80eeb800fc = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d90e194798984e8ca399fb80eeb800fc.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_93f7cf6d58034f69a541a0b7486488a9.RelativeSource = RelativeSource_d90e194798984e8ca399fb80eeb800fc;


                Binding_93f7cf6d58034f69a541a0b7486488a9.TemplateOwner = templateInstance_b77e7c553b1b427d9153975c62c6e0e3;

                var Binding_e4946bf98a494dbb886c2aa151e6234d = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e4946bf98a494dbb886c2aa151e6234d.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_db89ace8104e4912a4ceefb8ad14cdb8 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_db89ace8104e4912a4ceefb8ad14cdb8.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e4946bf98a494dbb886c2aa151e6234d.RelativeSource = RelativeSource_db89ace8104e4912a4ceefb8ad14cdb8;


                Binding_e4946bf98a494dbb886c2aa151e6234d.TemplateOwner = templateInstance_b77e7c553b1b427d9153975c62c6e0e3;

                var Binding_c8047d4e3d0e4f10bd424923a76af142 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c8047d4e3d0e4f10bd424923a76af142.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_65659ee4f53541459f7c6402bf1e4aed = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_65659ee4f53541459f7c6402bf1e4aed.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c8047d4e3d0e4f10bd424923a76af142.RelativeSource = RelativeSource_65659ee4f53541459f7c6402bf1e4aed;


                Binding_c8047d4e3d0e4f10bd424923a76af142.TemplateOwner = templateInstance_b77e7c553b1b427d9153975c62c6e0e3;

                var Binding_ccfea49ef92743e58bb36758e2f87775 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ccfea49ef92743e58bb36758e2f87775.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_affb57d4849041b898c66af893d12d04 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_affb57d4849041b898c66af893d12d04.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ccfea49ef92743e58bb36758e2f87775.RelativeSource = RelativeSource_affb57d4849041b898c66af893d12d04;


                Binding_ccfea49ef92743e58bb36758e2f87775.TemplateOwner = templateInstance_b77e7c553b1b427d9153975c62c6e0e3;

                var Binding_e0113ebcaa384db7842a17678dd03ec6 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e0113ebcaa384db7842a17678dd03ec6.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_b11d3c3741d04e12a05563dc02e0ce5a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_b11d3c3741d04e12a05563dc02e0ce5a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e0113ebcaa384db7842a17678dd03ec6.RelativeSource = RelativeSource_b11d3c3741d04e12a05563dc02e0ce5a;


                Binding_e0113ebcaa384db7842a17678dd03ec6.TemplateOwner = templateInstance_b77e7c553b1b427d9153975c62c6e0e3;


                Border_d4ce0915d8964c84a843ecedefd2ae45.Child = ContentPresenter_babc09983d5e4a7fbb70aefb93f034cb;

                var Binding_fd58674e1a824c648b37240579f5925e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fd58674e1a824c648b37240579f5925e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_9add94ed7b2f49ca8eb8c4808cfc560f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9add94ed7b2f49ca8eb8c4808cfc560f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fd58674e1a824c648b37240579f5925e.RelativeSource = RelativeSource_9add94ed7b2f49ca8eb8c4808cfc560f;


                Binding_fd58674e1a824c648b37240579f5925e.TemplateOwner = templateInstance_b77e7c553b1b427d9153975c62c6e0e3;


                Border_617ef6b7c5b842a48eb0a478c204600c.Child = Border_d4ce0915d8964c84a843ecedefd2ae45;

                var Binding_5baa86bdde62405d82855e4c401ccbdd = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5baa86bdde62405d82855e4c401ccbdd.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_8d0494f915e14249aacd7f7a56bf4d7e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8d0494f915e14249aacd7f7a56bf4d7e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5baa86bdde62405d82855e4c401ccbdd.RelativeSource = RelativeSource_8d0494f915e14249aacd7f7a56bf4d7e;


                Binding_5baa86bdde62405d82855e4c401ccbdd.TemplateOwner = templateInstance_b77e7c553b1b427d9153975c62c6e0e3;

                var Binding_fcd476cc876e4249a6a962d6e7cafc37 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fcd476cc876e4249a6a962d6e7cafc37.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_89fac4edd7db4fe2b0fabd748730b287 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_89fac4edd7db4fe2b0fabd748730b287.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fcd476cc876e4249a6a962d6e7cafc37.RelativeSource = RelativeSource_89fac4edd7db4fe2b0fabd748730b287;


                Binding_fcd476cc876e4249a6a962d6e7cafc37.TemplateOwner = templateInstance_b77e7c553b1b427d9153975c62c6e0e3;

                var Binding_32f8efc1164c4cbd966607a1c68229b3 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_32f8efc1164c4cbd966607a1c68229b3.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_5c97926ccd7e439d85e39697f9cedc96 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_5c97926ccd7e439d85e39697f9cedc96.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_32f8efc1164c4cbd966607a1c68229b3.RelativeSource = RelativeSource_5c97926ccd7e439d85e39697f9cedc96;


                Binding_32f8efc1164c4cbd966607a1c68229b3.TemplateOwner = templateInstance_b77e7c553b1b427d9153975c62c6e0e3;



                ContentPresenter_babc09983d5e4a7fbb70aefb93f034cb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_93f7cf6d58034f69a541a0b7486488a9);
                ContentPresenter_babc09983d5e4a7fbb70aefb93f034cb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_e4946bf98a494dbb886c2aa151e6234d);
                ContentPresenter_babc09983d5e4a7fbb70aefb93f034cb.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_c8047d4e3d0e4f10bd424923a76af142);
                ContentPresenter_babc09983d5e4a7fbb70aefb93f034cb.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_ccfea49ef92743e58bb36758e2f87775);
                ContentPresenter_babc09983d5e4a7fbb70aefb93f034cb.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_e0113ebcaa384db7842a17678dd03ec6);
                Border_d4ce0915d8964c84a843ecedefd2ae45.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_fd58674e1a824c648b37240579f5925e);
                Border_617ef6b7c5b842a48eb0a478c204600c.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_5baa86bdde62405d82855e4c401ccbdd);
                Border_617ef6b7c5b842a48eb0a478c204600c.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_fcd476cc876e4249a6a962d6e7cafc37);
                Border_617ef6b7c5b842a48eb0a478c204600c.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_32f8efc1164c4cbd966607a1c68229b3);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_8adcc209b4124aa29ecfc298a1c4dec7, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_408f8004d6f045eda0647cf5ad90a608), Bridge.fn.cacheBind(this, this.setVisualStateProperty_408f8004d6f045eda0647cf5ad90a608), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_408f8004d6f045eda0647cf5ad90a608), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_408f8004d6f045eda0647cf5ad90a608), Bridge.fn.cacheBind(this, this.getVisualStateProperty_408f8004d6f045eda0647cf5ad90a608)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_8adcc209b4124aa29ecfc298a1c4dec7, Border_d4ce0915d8964c84a843ecedefd2ae45);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_c71facbd95ab4b99b739e32158ad963e, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da), Bridge.fn.cacheBind(this, this.setVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da), Bridge.fn.cacheBind(this, this.getVisualStateProperty_1b64a40c645247ac9652c1beebc1c8da)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_c71facbd95ab4b99b739e32158ad963e, Border_d4ce0915d8964c84a843ecedefd2ae45);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_7929b2681cb041ca8cfa29cf5e582f27, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f), Bridge.fn.cacheBind(this, this.setVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f), Bridge.fn.cacheBind(this, this.getVisualStateProperty_cb2d4ad978014fa9b44beaf58301832f)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_7929b2681cb041ca8cfa29cf5e582f27, Border_d4ce0915d8964c84a843ecedefd2ae45);

                templateInstance_b77e7c553b1b427d9153975c62c6e0e3.TemplateContent = Border_617ef6b7c5b842a48eb0a478c204600c;
                return templateInstance_b77e7c553b1b427d9153975c62c6e0e3;
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



                var Grid_9adc6fbb109f47c6867f93641b0b5daf = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var RowDefinition_0d06561e92cb4a988ca33f2e3134d2d4 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_8251e7b623c44b3aa456027c8ae22512 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_e12c9502df854c4c96362fa3904bee9d = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_25672c15e538472f88cc72c7744779e8 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_9adc6fbb109f47c6867f93641b0b5daf.RowDefinitions.add(RowDefinition_0d06561e92cb4a988ca33f2e3134d2d4);
                Grid_9adc6fbb109f47c6867f93641b0b5daf.RowDefinitions.add(RowDefinition_8251e7b623c44b3aa456027c8ae22512);
                Grid_9adc6fbb109f47c6867f93641b0b5daf.RowDefinitions.add(RowDefinition_e12c9502df854c4c96362fa3904bee9d);
                Grid_9adc6fbb109f47c6867f93641b0b5daf.RowDefinitions.add(RowDefinition_25672c15e538472f88cc72c7744779e8);

                var Border_e6aacf2bfbee440eb02b572abe15e3eb = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                Border_e6aacf2bfbee440eb02b572abe15e3eb.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_e6aacf2bfbee440eb02b572abe15e3eb, 0);
                var ControlForDisplayingTheFileOpe_98ca96390741432db83b4b873e9abd4f = new Bridge.global.CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog();
                ControlForDisplayingTheFileOpe_98ca96390741432db83b4b873e9abd4f.addFileOpened(Bridge.fn.cacheBind(this, this.OnFileOpened));
                ControlForDisplayingTheFileOpe_98ca96390741432db83b4b873e9abd4f.Filter = "*.json,*.txt";
                ControlForDisplayingTheFileOpe_98ca96390741432db83b4b873e9abd4f.ResultKind = Bridge.global.CSHTML5.Extensions.FileOpenDialog.ResultKind.Text;

                Border_e6aacf2bfbee440eb02b572abe15e3eb.Child = ControlForDisplayingTheFileOpe_98ca96390741432db83b4b873e9abd4f;


                var Button_f435cf2d23944c6b87156b5f1b928b12 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Button_f435cf2d23944c6b87156b5f1b928b12.Content = "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430";
                this.RegisterName$1("btnCancel", Button_f435cf2d23944c6b87156b5f1b928b12);
                Button_f435cf2d23944c6b87156b5f1b928b12.Name = "btnCancel";
                Button_f435cf2d23944c6b87156b5f1b928b12.addClick(Bridge.fn.cacheBind(this, this.BtnCancel_Click));
                Button_f435cf2d23944c6b87156b5f1b928b12.Width = 250.0;
                Button_f435cf2d23944c6b87156b5f1b928b12.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_f435cf2d23944c6b87156b5f1b928b12, 1);
                Button_f435cf2d23944c6b87156b5f1b928b12.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_f435cf2d23944c6b87156b5f1b928b12.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_f435cf2d23944c6b87156b5f1b928b12.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_f435cf2d23944c6b87156b5f1b928b12.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_f435cf2d23944c6b87156b5f1b928b12.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_f435cf2d23944c6b87156b5f1b928b12.FontSize = 20.0;
                var ControlTemplate_4790f8a0ff0e43d6a3238460d3aad6e2 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_4790f8a0ff0e43d6a3238460d3aad6e2.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_4790f8a0ff0e43d6a3238460d3aad6e2.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_4790f8a0ff0e43d6a3238460d3aad6e2));

                Button_f435cf2d23944c6b87156b5f1b928b12.Template = ControlTemplate_4790f8a0ff0e43d6a3238460d3aad6e2;


                Grid_9adc6fbb109f47c6867f93641b0b5daf.Children.add(Border_e6aacf2bfbee440eb02b572abe15e3eb);
                Grid_9adc6fbb109f47c6867f93641b0b5daf.Children.add(Button_f435cf2d23944c6b87156b5f1b928b12);


                this.Content = Grid_9adc6fbb109f47c6867f93641b0b5daf;



                this.btnCancel = Button_f435cf2d23944c6b87156b5f1b928b12;



            },
            accessVisualStateProperty_f6e905125d364e159ed98dd09bb0881b: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_f6e905125d364e159ed98dd09bb0881b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_f6e905125d364e159ed98dd09bb0881b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_f6e905125d364e159ed98dd09bb0881b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_f6e905125d364e159ed98dd09bb0881b: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_4790f8a0ff0e43d6a3238460d3aad6e2: function (templateOwner) {
                var templateInstance_feca63c6e6054079b51f5d2c3384e8a9 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_feca63c6e6054079b51f5d2c3384e8a9.TemplateOwner = templateOwner;
                var Border_57cfc3ab3f91400eb0d051c1446060cc = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_57cfc3ab3f91400eb0d051c1446060cc);
                Border_57cfc3ab3f91400eb0d051c1446060cc.Name = "OuterBorder";
                Border_57cfc3ab3f91400eb0d051c1446060cc.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_324921f3924d45ba8d0b8ca57b3d501f = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_324921f3924d45ba8d0b8ca57b3d501f);
                VisualStateGroup_324921f3924d45ba8d0b8ca57b3d501f.Name = "CommonStates";
                var VisualState_e8d36b575b0d40eba070627b3a32fd8e = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_e8d36b575b0d40eba070627b3a32fd8e);
                VisualState_e8d36b575b0d40eba070627b3a32fd8e.Name = "Normal";

                var VisualState_639420d829b6491ab9ec0cf11da82273 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_639420d829b6491ab9ec0cf11da82273);
                VisualState_639420d829b6491ab9ec0cf11da82273.Name = "PointerOver";
                var Storyboard_f9be33a9bfda4911a7128170735a5324 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_112193b7c81c4690a99904be890f625f = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_112193b7c81c4690a99904be890f625f, "InnerBorder");
                var DiscreteObjectKeyFrame_72079d4f2ff84028aabf4c211c479630 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_72079d4f2ff84028aabf4c211c479630.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_72079d4f2ff84028aabf4c211c479630.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_112193b7c81c4690a99904be890f625f.KeyFrames.add(DiscreteObjectKeyFrame_72079d4f2ff84028aabf4c211c479630);


                Storyboard_f9be33a9bfda4911a7128170735a5324.Children.add(ObjectAnimationUsingKeyFrames_112193b7c81c4690a99904be890f625f);


                VisualState_639420d829b6491ab9ec0cf11da82273.Storyboard = Storyboard_f9be33a9bfda4911a7128170735a5324;


                var VisualState_43b343dafba649219e833df312c2ae96 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_43b343dafba649219e833df312c2ae96);
                VisualState_43b343dafba649219e833df312c2ae96.Name = "Pressed";
                var Storyboard_05bc1b399cd04172a43db3096d467c1e = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_be0d5ce6bbcd494a9aaaf3287d6fce3a = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_be0d5ce6bbcd494a9aaaf3287d6fce3a, "InnerBorder");
                var DiscreteObjectKeyFrame_242ac90d195c4d8aaafb61274b58ebcc = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_242ac90d195c4d8aaafb61274b58ebcc.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_242ac90d195c4d8aaafb61274b58ebcc.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_be0d5ce6bbcd494a9aaaf3287d6fce3a.KeyFrames.add(DiscreteObjectKeyFrame_242ac90d195c4d8aaafb61274b58ebcc);


                Storyboard_05bc1b399cd04172a43db3096d467c1e.Children.add(ObjectAnimationUsingKeyFrames_be0d5ce6bbcd494a9aaaf3287d6fce3a);


                VisualState_43b343dafba649219e833df312c2ae96.Storyboard = Storyboard_05bc1b399cd04172a43db3096d467c1e;


                var VisualState_c12244ed1852449abd85a01b22e3343b = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_c12244ed1852449abd85a01b22e3343b);
                VisualState_c12244ed1852449abd85a01b22e3343b.Name = "Disabled";
                var Storyboard_0f532bae985a4e4baa3167dcaf7c3733 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_a7f83f93f06e440d87da78936336d331 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_a7f83f93f06e440d87da78936336d331, "InnerBorder");
                var DiscreteObjectKeyFrame_7a2f614b96b74d8ab56b22cc0572d14d = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_7a2f614b96b74d8ab56b22cc0572d14d.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_7a2f614b96b74d8ab56b22cc0572d14d.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_a7f83f93f06e440d87da78936336d331.KeyFrames.add(DiscreteObjectKeyFrame_7a2f614b96b74d8ab56b22cc0572d14d);


                Storyboard_0f532bae985a4e4baa3167dcaf7c3733.Children.add(ObjectAnimationUsingKeyFrames_a7f83f93f06e440d87da78936336d331);


                VisualState_c12244ed1852449abd85a01b22e3343b.Storyboard = Storyboard_0f532bae985a4e4baa3167dcaf7c3733;


                System.Array.add(VisualStateGroup_324921f3924d45ba8d0b8ca57b3d501f.States, VisualState_e8d36b575b0d40eba070627b3a32fd8e, Object);
                System.Array.add(VisualStateGroup_324921f3924d45ba8d0b8ca57b3d501f.States, VisualState_639420d829b6491ab9ec0cf11da82273, Object);
                System.Array.add(VisualStateGroup_324921f3924d45ba8d0b8ca57b3d501f.States, VisualState_43b343dafba649219e833df312c2ae96, Object);
                System.Array.add(VisualStateGroup_324921f3924d45ba8d0b8ca57b3d501f.States, VisualState_c12244ed1852449abd85a01b22e3343b, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_324921f3924d45ba8d0b8ca57b3d501f);

                var Border_5a49bf383c1e48fdaeeb3bcb5b2f1441 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_5a49bf383c1e48fdaeeb3bcb5b2f1441);
                Border_5a49bf383c1e48fdaeeb3bcb5b2f1441.Name = "InnerBorder";
                Border_5a49bf383c1e48fdaeeb3bcb5b2f1441.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_ec9a4ef3e09e41b3aa9d1d017e2554a2 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_ec9a4ef3e09e41b3aa9d1d017e2554a2);
                ContentPresenter_ec9a4ef3e09e41b3aa9d1d017e2554a2.Name = "ContentPresenter";
                var Binding_3430131a70a544239f750f4add50a472 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_3430131a70a544239f750f4add50a472.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_f25f11ccc0e44bc59866f2b9590ba91f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f25f11ccc0e44bc59866f2b9590ba91f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_3430131a70a544239f750f4add50a472.RelativeSource = RelativeSource_f25f11ccc0e44bc59866f2b9590ba91f;


                Binding_3430131a70a544239f750f4add50a472.TemplateOwner = templateInstance_feca63c6e6054079b51f5d2c3384e8a9;

                var Binding_e4b0f704606d4af986790c6ca71081d1 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e4b0f704606d4af986790c6ca71081d1.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_7fd6322b85f047519c6b1fdfc0cc7881 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_7fd6322b85f047519c6b1fdfc0cc7881.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e4b0f704606d4af986790c6ca71081d1.RelativeSource = RelativeSource_7fd6322b85f047519c6b1fdfc0cc7881;


                Binding_e4b0f704606d4af986790c6ca71081d1.TemplateOwner = templateInstance_feca63c6e6054079b51f5d2c3384e8a9;

                var Binding_5b1db0690f2844b0a2fc9afb6f922771 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5b1db0690f2844b0a2fc9afb6f922771.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_4b446c1c49b847c4a61a6ad4ac6f0f25 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_4b446c1c49b847c4a61a6ad4ac6f0f25.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5b1db0690f2844b0a2fc9afb6f922771.RelativeSource = RelativeSource_4b446c1c49b847c4a61a6ad4ac6f0f25;


                Binding_5b1db0690f2844b0a2fc9afb6f922771.TemplateOwner = templateInstance_feca63c6e6054079b51f5d2c3384e8a9;

                var Binding_1884cdf60e2e4fe2bcbff60d947bc764 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_1884cdf60e2e4fe2bcbff60d947bc764.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_3155a8c7a4604a1fa3c34e8687bd00ff = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3155a8c7a4604a1fa3c34e8687bd00ff.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_1884cdf60e2e4fe2bcbff60d947bc764.RelativeSource = RelativeSource_3155a8c7a4604a1fa3c34e8687bd00ff;


                Binding_1884cdf60e2e4fe2bcbff60d947bc764.TemplateOwner = templateInstance_feca63c6e6054079b51f5d2c3384e8a9;

                var Binding_fb06ac6cb67345f6a79e863a3edfe5be = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fb06ac6cb67345f6a79e863a3edfe5be.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_d0a7e6b6b3664d0991e798fe8108734d = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d0a7e6b6b3664d0991e798fe8108734d.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fb06ac6cb67345f6a79e863a3edfe5be.RelativeSource = RelativeSource_d0a7e6b6b3664d0991e798fe8108734d;


                Binding_fb06ac6cb67345f6a79e863a3edfe5be.TemplateOwner = templateInstance_feca63c6e6054079b51f5d2c3384e8a9;


                Border_5a49bf383c1e48fdaeeb3bcb5b2f1441.Child = ContentPresenter_ec9a4ef3e09e41b3aa9d1d017e2554a2;

                var Binding_a327244b62e344a2bd5555300ac93724 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_a327244b62e344a2bd5555300ac93724.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_903eb7e2f57e47cb982f551ba5110f36 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_903eb7e2f57e47cb982f551ba5110f36.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_a327244b62e344a2bd5555300ac93724.RelativeSource = RelativeSource_903eb7e2f57e47cb982f551ba5110f36;


                Binding_a327244b62e344a2bd5555300ac93724.TemplateOwner = templateInstance_feca63c6e6054079b51f5d2c3384e8a9;


                Border_57cfc3ab3f91400eb0d051c1446060cc.Child = Border_5a49bf383c1e48fdaeeb3bcb5b2f1441;

                var Binding_039c3e89a13b4c95a4a355c42336538f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_039c3e89a13b4c95a4a355c42336538f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_e3590706ced84ace88cedc23dc048b4a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e3590706ced84ace88cedc23dc048b4a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_039c3e89a13b4c95a4a355c42336538f.RelativeSource = RelativeSource_e3590706ced84ace88cedc23dc048b4a;


                Binding_039c3e89a13b4c95a4a355c42336538f.TemplateOwner = templateInstance_feca63c6e6054079b51f5d2c3384e8a9;

                var Binding_041df69acefa4ebbb57791c7f1f565f7 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_041df69acefa4ebbb57791c7f1f565f7.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_cd5730e9cb92465ea7ec6371848cfb04 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_cd5730e9cb92465ea7ec6371848cfb04.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_041df69acefa4ebbb57791c7f1f565f7.RelativeSource = RelativeSource_cd5730e9cb92465ea7ec6371848cfb04;


                Binding_041df69acefa4ebbb57791c7f1f565f7.TemplateOwner = templateInstance_feca63c6e6054079b51f5d2c3384e8a9;

                var Binding_3e69385cfe5a42e5956a4b2134b27793 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_3e69385cfe5a42e5956a4b2134b27793.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_f4469c262b9e4c4e8c8ee5fca1f15980 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f4469c262b9e4c4e8c8ee5fca1f15980.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_3e69385cfe5a42e5956a4b2134b27793.RelativeSource = RelativeSource_f4469c262b9e4c4e8c8ee5fca1f15980;


                Binding_3e69385cfe5a42e5956a4b2134b27793.TemplateOwner = templateInstance_feca63c6e6054079b51f5d2c3384e8a9;



                ContentPresenter_ec9a4ef3e09e41b3aa9d1d017e2554a2.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_3430131a70a544239f750f4add50a472);
                ContentPresenter_ec9a4ef3e09e41b3aa9d1d017e2554a2.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_e4b0f704606d4af986790c6ca71081d1);
                ContentPresenter_ec9a4ef3e09e41b3aa9d1d017e2554a2.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_5b1db0690f2844b0a2fc9afb6f922771);
                ContentPresenter_ec9a4ef3e09e41b3aa9d1d017e2554a2.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_1884cdf60e2e4fe2bcbff60d947bc764);
                ContentPresenter_ec9a4ef3e09e41b3aa9d1d017e2554a2.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_fb06ac6cb67345f6a79e863a3edfe5be);
                Border_5a49bf383c1e48fdaeeb3bcb5b2f1441.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_a327244b62e344a2bd5555300ac93724);
                Border_57cfc3ab3f91400eb0d051c1446060cc.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_039c3e89a13b4c95a4a355c42336538f);
                Border_57cfc3ab3f91400eb0d051c1446060cc.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_041df69acefa4ebbb57791c7f1f565f7);
                Border_57cfc3ab3f91400eb0d051c1446060cc.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_3e69385cfe5a42e5956a4b2134b27793);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_112193b7c81c4690a99904be890f625f, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_f6e905125d364e159ed98dd09bb0881b), Bridge.fn.cacheBind(this, this.setVisualStateProperty_f6e905125d364e159ed98dd09bb0881b), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_f6e905125d364e159ed98dd09bb0881b), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_f6e905125d364e159ed98dd09bb0881b), Bridge.fn.cacheBind(this, this.getVisualStateProperty_f6e905125d364e159ed98dd09bb0881b)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_112193b7c81c4690a99904be890f625f, Border_5a49bf383c1e48fdaeeb3bcb5b2f1441);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_be0d5ce6bbcd494a9aaaf3287d6fce3a, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2), Bridge.fn.cacheBind(this, this.setVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2), Bridge.fn.cacheBind(this, this.getVisualStateProperty_80333439cd63422ebb60d5f9c00b88c2)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_be0d5ce6bbcd494a9aaaf3287d6fce3a, Border_5a49bf383c1e48fdaeeb3bcb5b2f1441);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_a7f83f93f06e440d87da78936336d331, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0), Bridge.fn.cacheBind(this, this.setVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0), Bridge.fn.cacheBind(this, this.getVisualStateProperty_f9df3a47de1e4046902ed0913285e1f0)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_a7f83f93f06e440d87da78936336d331, Border_5a49bf383c1e48fdaeeb3bcb5b2f1441);

                templateInstance_feca63c6e6054079b51f5d2c3384e8a9.TemplateContent = Border_57cfc3ab3f91400eb0d051c1446060cc;
                return templateInstance_feca63c6e6054079b51f5d2c3384e8a9;
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



                var Grid_4bf8e6daf35948fe8b21469a0deb03c2 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                Grid_4bf8e6daf35948fe8b21469a0deb03c2.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 0, $t));

                this.Content = Grid_4bf8e6daf35948fe8b21469a0deb03c2;







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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDU2h0bWwuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIm9iai9SZWxlYXNlL0FwcC54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlMS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlSG9tZS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlVXBsb2FkLnhhbWwuZy5jcyIsIm9iai9SZWxlYXNlL1NlY29uZFBhZ2UueGFtbC5nLmNzIiwiQXBwLnhhbWwuY3MiLCJQYWdlMS54YW1sLmNzIiwiUGFnZUhvbWUueGFtbC5jcyIsIlBhZ2VVcGxvYWQueGFtbC5jcyIsIlNlY29uZFBhZ2UueGFtbC5jcyIsIkZpbGVPcGVuRGlhbG9nLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7b0JBUVFBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7O29CQ0RwRUEsV0FBMkJBLEFBQU9BO29CQUNsQ0EsT0FBT0EsbUVBQTZEQTs7Ozs7Ozs7OztvQkNEcEVBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7WUptRXhFQSxJQUFJQTs7Ozs7Ozs7O2dCSy9ESUE7Ozs7Z0JBT0FBLGFBQWFBLElBQUlBO2dCQUNqQkEsZ0JBQWdCQSxJQUFJQSw0QkFBcUJBO2dCQUN6Q0EseUNBQXlCQTs7Ozs7Z0JMbUJ6QkEsSUFBSUE7b0JBQ0FBOztnQkFDSkE7OztnQkFHQUEsSUFBSUE7b0JBRUFBLEFBQUNBLFlBQW1DQSxBQUFRQTs7OztnQkFLNURBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7Z0JBR0FBLDBEQUEwREEsSUFBSUE7Z0JBQzlEQSxpQkFBaUJBOztnQkFF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QUlBLHNDQUFtQkE7d0JBQ25CQSxnQkFBZ0JBLE1BQU1BLElBQUlBLHNEQUFvQkEsUUFBUUE7OztnQkFFOURBLG9CQUF1QkE7O2dCQUd2QkEsZUFBVUE7O2dCQUdWQTtnQkFnQ1VBOzs7Ozs7Ozs7Ozs7Ozs7OztxQ0FBY0E7Ozs7O3FDQUF1REE7Ozs7Ozs7a0RBQXpDQTs7OztpQ0FHM0JBO2dCQUdYQSxtQkFBbUJBLHVCQUF1QkE7O2dCQUsxQ0EsZUFBb0JBO2dCQUNwQkEsZ0JBQXlCQSxLQUFJQTtnQkFDN0JBLElBQUlBO29CQUVBQSxjQUFjQTs7b0JBSWRBLEtBQUtBLFdBQVdBLElBQUlBLGlCQUFpQkE7d0JBRWpDQSxjQUFjQSw0QkFBU0EsR0FBVEE7OztnQkFHdEJBLHFCQUF3QkEsaUVBQWlCQTs7Z0JBR3pDQSxJQUFJQSxDQUFDQSxpQ0FBMEJBO29CQUUzQkEsQUFBcURBLHNCQUFjQTs7b0JBSW5FQSxBQUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBeUNwQ0EsUUFBZUE7Ozs7Z0JBRXRDQSxJQUFJQSxlQUFjQTtvQkFFZEEsWUFBWUEseUJBQXdCQSxpQkFBQ0E7dUJBRXBDQSxJQUFJQSxlQUFjQTtvQkFFbkJBLGVBQWVBLGlCQUFDQTs7b0JBSWhCQSxNQUFNQSxJQUFJQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyA8Q1NIVE1MNT48WGFtbEhhc2g+NUEyNEZEOTRFRDU4MzZBQzZCRkM3NkY3NzVCNkVEMEY8L1hhbWxIYXNoPjxQYXNzTnVtYmVyPjI8L1Bhc3NOdW1iZXI+PENvbXBpbGF0aW9uRGF0ZT4xNS4wNC4yMDIwIDE5OjE4OjE0PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgEFwcMeAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuQXBwKTtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlR5cGVJbnN0YW50aWF0aW9uSGVscGVyLkluc3RhbnRpYXRlKHR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGF1dG8tZ2VuZXJhdGVkIGJ5IFwiQyMvWEFNTCBmb3IgSFRNTDVcIlxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxucGFydGlhbCBjbGFzcyBBcHAgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5BcHBsaWNhdGlvblxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxuXHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxBcHAueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRSb290UGF0aCA9IEBcIk91dHB1dFxcXCI7XHJcbmdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5TdGFydHVwQXNzZW1ibHlJbmZvLk91dHB1dEFwcEZpbGVzUGF0aCA9IEBcImFwcC1jc2h0bWw1XFxhcHBcXFwiO1xyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRMaWJyYXJpZXNQYXRoID0gQFwiYXBwLWNzaHRtbDVcXGxpYnNcXFwiO1xyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRSZXNvdXJjZXNQYXRoID0gQFwiYXBwLWNzaHRtbDVcXHJlc1xcXCI7XHJcblxyXG5cclxudmFyIFJlc291cmNlRGljdGlvbmFyeV9hMmM2YjI1MTAyOTE0ZDY4YWM1ZjE4YThhZWU5N2IxYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5SZXNvdXJjZURpY3Rpb25hcnkoKTtcclxudGhpcy5SZXNvdXJjZXMgPSBSZXNvdXJjZURpY3Rpb25hcnlfYTJjNmIyNTEwMjkxNGQ2OGFjNWYxOGE4YWVlOTdiMWE7XHJcblxyXG50aGlzLlJlc291cmNlcyA9IFJlc291cmNlRGljdGlvbmFyeV9hMmM2YjI1MTAyOTE0ZDY4YWM1ZjE4YThhZWU5N2IxYTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG57XHJcbiAgICBuZXcgQXBwKCk7XHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD5COTlBNjUyMDczN0IwNzFDMDYxQjcyRDMzNDg4RDg0NzwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgMTk6MTg6MTQ8L0NvbXBpbGF0aW9uRGF0ZT48L0NTSFRNTDU+XHJcblxyXG5cclxuXHJcbnB1YmxpYyBzdGF0aWMgY2xhc3Mgx4DHgENzaHRtbMeAx4BDb21wb25lbnTHgMeAUGFnZTHHgMeAWGFtbMeAx4BGYWN0b3J5XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqZWN0IEluc3RhbnRpYXRlKClcclxuICAgIHtcclxuICAgICAgICBnbG9iYWw6OlN5c3RlbS5UeXBlIHR5cGUgPSB0eXBlb2YoQ1NodG1sLlBhZ2UxKTtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlR5cGVJbnN0YW50aWF0aW9uSGVscGVyLkluc3RhbnRpYXRlKHR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGF1dG8tZ2VuZXJhdGVkIGJ5IFwiQyMvWEFNTCBmb3IgSFRNTDVcIlxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxucGFydGlhbCBjbGFzcyBQYWdlMSA6IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlBhZ2Vcclxue1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMTY5LCA2NDksIDA2MjggLy8gUHJldmVudHMgd2FybmluZyBDUzAxNjkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgdXNlZCcpLCBDUzA2NDkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgYXNzaWduZWQgdG8sIGFuZCB3aWxsIGFsd2F5cyBoYXZlIGl0cyBkZWZhdWx0IHZhbHVlIG51bGwnKSwgYW5kIENTMDYyOCAoJ21lbWJlciA6IG5ldyBwcm90ZWN0ZWQgbWVtYmVyIGRlY2xhcmVkIGluIHNlYWxlZCBjbGFzcycpXHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIgZWxlbWVudEZvckxpc3Q7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24gYnRuQ2FuY2VsO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0blVwbG9hZDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbiBidG5Qcm9jZXNzaW5nO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuVGV4dEJveCB0eHRGaWxlO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UgbmlnYUlERUZfSnBlZztcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBib3JkZXJJREVGO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UgbmlnYVVNTF9KcGVnO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGJvcmRlclVNTDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQgTGF5b3V0R3JpZDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50O1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZTEueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfNmUyYTg5N2NmYzdiNGI4MGFkODBiNzU2ZjdhYzc3ZTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF9hMjIxODc3NzcxNGI0ZDcxODgyOWZiMjg2NjRhMDVkNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYTIyMTg3Nzc3MTRiNGQ3MTg4MjlmYjI4NjY0YTA1ZDQuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9hMjIxODc3NzcxNGI0ZDcxODgyOWZiMjg2NjRhMDVkNC5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfZWUyMDQzMWJjNGQ4NGJiN2IwZGJiYzVmNjQzZTBmNTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9lZTIwNDMxYmM0ZDg0YmI3YjBkYmJjNWY2NDNlMGY1My5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wX2VlMjA0MzFiYzRkODRiYjdiMGRiYmM1ZjY0M2UwZjUzLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF8zZDQ4MzVjZTk5YzY0NDU1ODlhMTViNjcwYjNiOTBkMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzNkNDgzNWNlOTljNjQ0NTU4OWExNWI2NzBiM2I5MGQwLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfM2Q0ODM1Y2U5OWM2NDQ1NTg5YTE1YjY3MGIzYjkwZDAuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoX2EyMjE4Nzc3NzE0YjRkNzE4ODI5ZmIyODY2NGEwNWQ0LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9lZTIwNDMxYmM0ZDg0YmI3YjBkYmJjNWY2NDNlMGY1Myk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYTIyMTg3Nzc3MTRiNGQ3MTg4MjlmYjI4NjY0YTA1ZDQuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzNkNDgzNWNlOTljNjQ0NTU4OWExNWI2NzBiM2I5MGQwKTtcclxuXHJcblxyXG5HcmlkXzZlMmE4OTdjZmM3YjRiODBhZDgwYjc1NmY3YWM3N2U0LkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoX2EyMjE4Nzc3NzE0YjRkNzE4ODI5ZmIyODY2NGEwNWQ0O1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNWM5YjUwM2UzNDkxNGIxN2JiMjkyNWU0YTZjNTlkNDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzVjOWI1MDNlMzQ5MTRiMTdiYjI5MjVlNGE2YzU5ZDQyLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzY2ODY5NDQ3NTA3YjQzN2E4MzMzNzE2NWZmZGNjNDEzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl82Njg2OTQ0NzUwN2I0MzdhODMzMzcxNjVmZmRjYzQxMy5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzUyYjA1ZGNmNTU2MDQ4NzViYjUyYWI4NWQxZWZmMjE0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl81MmIwNWRjZjU1NjA0ODc1YmI1MmFiODVkMWVmZjIxNC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkXzZlMmE4OTdjZmM3YjRiODBhZDgwYjc1NmY3YWM3N2U0LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzVjOWI1MDNlMzQ5MTRiMTdiYjI5MjVlNGE2YzU5ZDQyKTtcclxuR3JpZF82ZTJhODk3Y2ZjN2I0YjgwYWQ4MGI3NTZmN2FjNzdlNC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl82Njg2OTQ0NzUwN2I0MzdhODMzMzcxNjVmZmRjYzQxMyk7XHJcbkdyaWRfNmUyYTg5N2NmYzdiNGI4MGFkODBiNzU2ZjdhYzc3ZTQuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNTJiMDVkY2Y1NTYwNDg3NWJiNTJhYjg1ZDFlZmYyMTQpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMWYxNDE5ZjRiZDI1NDBhZjg5ZTYwMmM4ZDU5ZTYxYjAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5Db2x1bW5EZWZpbml0aW9uXzFmMTQxOWY0YmQyNTQwYWY4OWU2MDJjOGQ1OWU2MWIwLldpZHRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl8zZjI4ZWFiNjkxZjc0ZTY3OTRlMmM4NDg0MmQyMTcxYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcblxyXG5HcmlkXzZlMmE4OTdjZmM3YjRiODBhZDgwYjc1NmY3YWM3N2U0LkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzFmMTQxOWY0YmQyNTQwYWY4OWU2MDJjOGQ1OWU2MWIwKTtcclxuR3JpZF82ZTJhODk3Y2ZjN2I0YjgwYWQ4MGI3NTZmN2FjNzdlNC5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl8zZjI4ZWFiNjkxZjc0ZTY3OTRlMmM4NDg0MmQyMTcxYik7XHJcblxyXG52YXIgQm9yZGVyXzZmMjEyMjdlYzhjNzRmNTc5OWFmMGMyNDFiODcxMjIxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImVsZW1lbnRGb3JMaXN0XCIsIEJvcmRlcl82ZjIxMjI3ZWM4Yzc0ZjU3OTlhZjBjMjQxYjg3MTIyMSk7XHJcbkJvcmRlcl82ZjIxMjI3ZWM4Yzc0ZjU3OTlhZjBjMjQxYjg3MTIyMS5OYW1lID0gXCJlbGVtZW50Rm9yTGlzdFwiO1xyXG5Cb3JkZXJfNmYyMTIyN2VjOGM3NGY1Nzk5YWYwYzI0MWI4NzEyMjEuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQm9yZGVyXzZmMjEyMjdlYzhjNzRmNTc5OWFmMGMyNDFiODcxMjIxLDApO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oQm9yZGVyXzZmMjEyMjdlYzhjNzRmNTc5OWFmMGMyNDFiODcxMjIxLDMpO1xyXG5Cb3JkZXJfNmYyMTIyN2VjOGM3NGY1Nzk5YWYwYzI0MWI4NzEyMjEuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDAsIEcgPSAoYnl0ZSkyMDAsIEIgPSAoYnl0ZSkyMDAgfSk7XHJcbkJvcmRlcl82ZjIxMjI3ZWM4Yzc0ZjU3OTlhZjBjMjQxYjg3MTIyMS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfNmYyMTIyN2VjOGM3NGY1Nzk5YWYwYzI0MWI4NzEyMjEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIEdyaWRfMWQyZmFkMTNlNzEzNDRiMDk1NGQzODEwNjgyZjVlY2QgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF83OWJiMzZmZTg1YTU0OTY5ODNlYzBmMTdiMzBkNmRkZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNzliYjM2ZmU4NWE1NDk2OTgzZWMwZjE3YjMwZDZkZGUuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF83OWJiMzZmZTg1YTU0OTY5ODNlYzBmMTdiMzBkNmRkZS5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfYWRiMWQyOWZiODNjNDA0YzhlMDE5NzhhMzFiOTAzN2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9hZGIxZDI5ZmI4M2M0MDRjOGUwMTk3OGEzMWI5MDM3ZS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wX2FkYjFkMjlmYjgzYzQwNGM4ZTAxOTc4YTMxYjkwMzdlLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF81ZmEyMTM2NGI3ZDI0MzlkOGVlMDM3ZDQ5MzNkOGZhMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzVmYTIxMzY0YjdkMjQzOWQ4ZWUwMzdkNDkzM2Q4ZmExLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfNWZhMjEzNjRiN2QyNDM5ZDhlZTAzN2Q0OTMzZDhmYTEuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoXzc5YmIzNmZlODVhNTQ5Njk4M2VjMGYxN2IzMGQ2ZGRlLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9hZGIxZDI5ZmI4M2M0MDRjOGUwMTk3OGEzMWI5MDM3ZSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNzliYjM2ZmU4NWE1NDk2OTgzZWMwZjE3YjMwZDZkZGUuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzVmYTIxMzY0YjdkMjQzOWQ4ZWUwMzdkNDkzM2Q4ZmExKTtcclxuXHJcblxyXG5HcmlkXzFkMmZhZDEzZTcxMzQ0YjA5NTRkMzgxMDY4MmY1ZWNkLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzc5YmIzNmZlODVhNTQ5Njk4M2VjMGYxN2IzMGQ2ZGRlO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fYjgzMDdkZWY5Mjk3NGY5ZmE5MGY0YTIzNGI2NmQ3Y2EgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMzViZDg4ZDM2ZmQxNDZiM2FlMTIyODFkNmI0OTEwODQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzM1YmQ4OGQzNmZkMTQ2YjNhZTEyMjgxZDZiNDkxMDg0LkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fZGNmZDA5MzAxYmY3NDUyNmE5YzcxMjhmNmNlNmVhZDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uX2RjZmQwOTMwMWJmNzQ1MjZhOWM3MTI4ZjZjZTZlYWQ2LkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNTc4NzUyNzMzNmEzNDc1MDhkMTM3NTRhZmE2OTY4OTUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzU3ODc1MjczMzZhMzQ3NTA4ZDEzNzU0YWZhNjk2ODk1LkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMjM4MWVmNWFlMDA2NDc4YTgzMjNiYjFmMGZjYjBiNmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF8xZDJmYWQxM2U3MTM0NGIwOTU0ZDM4MTA2ODJmNWVjZC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl9iODMwN2RlZjkyOTc0ZjlmYTkwZjRhMjM0YjY2ZDdjYSk7XHJcbkdyaWRfMWQyZmFkMTNlNzEzNDRiMDk1NGQzODEwNjgyZjVlY2QuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMzViZDg4ZDM2ZmQxNDZiM2FlMTIyODFkNmI0OTEwODQpO1xyXG5HcmlkXzFkMmZhZDEzZTcxMzQ0YjA5NTRkMzgxMDY4MmY1ZWNkLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2RjZmQwOTMwMWJmNzQ1MjZhOWM3MTI4ZjZjZTZlYWQ2KTtcclxuR3JpZF8xZDJmYWQxM2U3MTM0NGIwOTU0ZDM4MTA2ODJmNWVjZC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl81Nzg3NTI3MzM2YTM0NzUwOGQxMzc1NGFmYTY5Njg5NSk7XHJcbkdyaWRfMWQyZmFkMTNlNzEzNDRiMDk1NGQzODEwNjgyZjVlY2QuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMjM4MWVmNWFlMDA2NDc4YTgzMjNiYjFmMGZjYjBiNmIpO1xyXG5cclxudmFyIEJ1dHRvbl85N2ZhNTk4NjcwNTA0ZWFhYjlhZDJkZDA5N2U4MDFkYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uXzk3ZmE1OTg2NzA1MDRlYWFiOWFkMmRkMDk3ZTgwMWRjLDEpO1xyXG5CdXR0b25fOTdmYTU5ODY3MDUwNGVhYWI5YWQyZGQwOTdlODAxZGMuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTAsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbkJ1dHRvbl85N2ZhNTk4NjcwNTA0ZWFhYjlhZDJkZDA5N2U4MDFkYy5Db250ZW50ID0gQFwiSlNPTlwiO1xyXG5CdXR0b25fOTdmYTU5ODY3MDUwNGVhYWI5YWQyZGQwOTdlODAxZGMuRm9udFNpemUgPSAyMEQ7XHJcbkJ1dHRvbl85N2ZhNTk4NjcwNTA0ZWFhYjlhZDJkZDA5N2U4MDFkYy5Gb3JlZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5CdXR0b25fOTdmYTU5ODY3MDUwNGVhYWI5YWQyZGQwOTdlODAxZGMuQ2xpY2sgKz0gRmlyc3RfQ2xpY2s7XHJcblxyXG52YXIgQnV0dG9uX2ZjMzI4NGJiZjkxYTRjMjU5ZDhlYmJlYWVlOWE4Zjk2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fZmMzMjg0YmJmOTFhNGMyNTlkOGViYmVhZWU5YThmOTYsMik7XHJcbkJ1dHRvbl9mYzMyODRiYmY5MWE0YzI1OWQ4ZWJiZWFlZTlhOGY5Ni5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMCwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9KTtcclxuQnV0dG9uX2ZjMzI4NGJiZjkxYTRjMjU5ZDhlYmJlYWVlOWE4Zjk2LkNvbnRlbnQgPSBAXCLQlNC40LDQs9GA0LDQvNC80LAgSURFRjBcIjtcclxuQnV0dG9uX2ZjMzI4NGJiZjkxYTRjMjU5ZDhlYmJlYWVlOWE4Zjk2LkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fZmMzMjg0YmJmOTFhNGMyNTlkOGViYmVhZWU5YThmOTYuRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uX2ZjMzI4NGJiZjkxYTRjMjU5ZDhlYmJlYWVlOWE4Zjk2LkNsaWNrICs9IFNlY29uZF9DbGljaztcclxuXHJcbnZhciBCdXR0b25fZmFiYWQ3NGU4N2U4NDI0YjhjM2JjMzQ4MmQ1NTIyMGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl9mYWJhZDc0ZTg3ZTg0MjRiOGMzYmMzNDgyZDU1MjIwZSwzKTtcclxuQnV0dG9uX2ZhYmFkNzRlODdlODQyNGI4YzNiYzM0ODJkNTUyMjBlLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkwLCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH0pO1xyXG5CdXR0b25fZmFiYWQ3NGU4N2U4NDI0YjhjM2JjMzQ4MmQ1NTIyMGUuQ29udGVudCA9IEBcItCU0LjQsNCz0YDQsNC80LzQsCBVTUxcIjtcclxuQnV0dG9uX2ZhYmFkNzRlODdlODQyNGI4YzNiYzM0ODJkNTUyMjBlLkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fZmFiYWQ3NGU4N2U4NDI0YjhjM2JjMzQ4MmQ1NTIyMGUuRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uX2ZhYmFkNzRlODdlODQyNGI4YzNiYzM0ODJkNTUyMjBlLkNsaWNrICs9IFRoaXJkX0NsaWNrO1xyXG5cclxuR3JpZF8xZDJmYWQxM2U3MTM0NGIwOTU0ZDM4MTA2ODJmNWVjZC5DaGlsZHJlbi5BZGQoQnV0dG9uXzk3ZmE1OTg2NzA1MDRlYWFiOWFkMmRkMDk3ZTgwMWRjKTtcclxuR3JpZF8xZDJmYWQxM2U3MTM0NGIwOTU0ZDM4MTA2ODJmNWVjZC5DaGlsZHJlbi5BZGQoQnV0dG9uX2ZjMzI4NGJiZjkxYTRjMjU5ZDhlYmJlYWVlOWE4Zjk2KTtcclxuR3JpZF8xZDJmYWQxM2U3MTM0NGIwOTU0ZDM4MTA2ODJmNWVjZC5DaGlsZHJlbi5BZGQoQnV0dG9uX2ZhYmFkNzRlODdlODQyNGI4YzNiYzM0ODJkNTUyMjBlKTtcclxuXHJcblxyXG5Cb3JkZXJfNmYyMTIyN2VjOGM3NGY1Nzk5YWYwYzI0MWI4NzEyMjEuQ2hpbGQgPSBHcmlkXzFkMmZhZDEzZTcxMzQ0YjA5NTRkMzgxMDY4MmY1ZWNkO1xyXG5cclxuXHJcbnZhciBCb3JkZXJfOGY1NTJlMjI0Y2VhNDE2YmE2ODQwOTRkMDgwZTE3ZmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfOGY1NTJlMjI0Y2VhNDE2YmE2ODQwOTRkMDgwZTE3ZmEpO1xyXG5Cb3JkZXJfOGY1NTJlMjI0Y2VhNDE2YmE2ODQwOTRkMDgwZTE3ZmEuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfOGY1NTJlMjI0Y2VhNDE2YmE2ODQwOTRkMDgwZTE3ZmEuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3dTcGFuKEJvcmRlcl84ZjU1MmUyMjRjZWE0MTZiYTY4NDA5NGQwODBlMTdmYSwzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJvcmRlcl84ZjU1MmUyMjRjZWE0MTZiYTY4NDA5NGQwODBlMTdmYSwyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQm9yZGVyXzhmNTUyZTIyNGNlYTQxNmJhNjg0MDk0ZDA4MGUxN2ZhLDEpO1xyXG5Cb3JkZXJfOGY1NTJlMjI0Y2VhNDE2YmE2ODQwOTRkMDgwZTE3ZmEuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDAsIEcgPSAoYnl0ZSkyMDAsIEIgPSAoYnl0ZSkyMDAgfSk7XHJcbkJvcmRlcl84ZjU1MmUyMjRjZWE0MTZiYTY4NDA5NGQwODBlMTdmYS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfOGY1NTJlMjI0Y2VhNDE2YmE2ODQwOTRkMDgwZTE3ZmEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfY2VjYmIwMzMyZWY4NGE0ODk5NzUyODgyOTQxYWU3MTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2NlY2JiMDMzMmVmODRhNDg5OTc1Mjg4Mjk0MWFlNzEzLkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfY2VjYmIwMzMyZWY4NGE0ODk5NzUyODgyOTQxYWU3MTMuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wXzI3MDU0ZWM2ZGNiMTQxMTU5NTFmZTYxYmVmMDQ5OGVkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfMjcwNTRlYzZkY2IxNDExNTk1MWZlNjFiZWYwNDk4ZWQuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF8yNzA1NGVjNmRjYjE0MTE1OTUxZmU2MWJlZjA0OThlZC5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfMzg5OWMzMmI0ZGU1NDlkNWFiN2JlYjZmNDRlNzE3NDMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF8zODk5YzMyYjRkZTU0OWQ1YWI3YmViNmY0NGU3MTc0My5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wXzM4OTljMzJiNGRlNTQ5ZDVhYjdiZWI2ZjQ0ZTcxNzQzLk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF9jZWNiYjAzMzJlZjg0YTQ4OTk3NTI4ODI5NDFhZTcxMy5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfMjcwNTRlYzZkY2IxNDExNTk1MWZlNjFiZWYwNDk4ZWQpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2NlY2JiMDMzMmVmODRhNDg5OTc1Mjg4Mjk0MWFlNzEzLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF8zODk5YzMyYjRkZTU0OWQ1YWI3YmViNmY0NGU3MTc0Myk7XHJcblxyXG5cclxuQm9yZGVyXzhmNTUyZTIyNGNlYTQxNmJhNjg0MDk0ZDA4MGUxN2ZhLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoX2NlY2JiMDMzMmVmODRhNDg5OTc1Mjg4Mjk0MWFlNzEzO1xyXG5cclxudmFyIEdyaWRfNjAwNTFmNDM1N2RhNDA2ZmJhZjQ0YmIzYzM3MWYxNDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dEdyaWRcIiwgR3JpZF82MDA1MWY0MzU3ZGE0MDZmYmFmNDRiYjNjMzcxZjE0Mik7XHJcbkdyaWRfNjAwNTFmNDM1N2RhNDA2ZmJhZjQ0YmIzYzM3MWYxNDIuTmFtZSA9IFwiTGF5b3V0R3JpZFwiO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF84YWU0MjdjYTkxN2E0ZWI2ODAyMTBmYjI4NTQyNzAzYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOGFlNDI3Y2E5MTdhNGViNjgwMjEwZmIyODU0MjcwM2IuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF84YWU0MjdjYTkxN2E0ZWI2ODAyMTBmYjI4NTQyNzAzYi5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfMmM3YmQ4ZDlmMGM5NGFkZWE3ODhlMWExMjE4NGRkODcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF8yYzdiZDhkOWYwYzk0YWRlYTc4OGUxYTEyMTg0ZGQ4Ny5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzJjN2JkOGQ5ZjBjOTRhZGVhNzg4ZTFhMTIxODRkZDg3Lk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF82ZDYxMzUzNzhiMzc0MzczYTg5NTY0MGY2ZTUwNDI0ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzZkNjEzNTM3OGIzNzQzNzNhODk1NjQwZjZlNTA0MjRlLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfNmQ2MTM1Mzc4YjM3NDM3M2E4OTU2NDBmNmU1MDQyNGUuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoXzhhZTQyN2NhOTE3YTRlYjY4MDIxMGZiMjg1NDI3MDNiLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF8yYzdiZDhkOWYwYzk0YWRlYTc4OGUxYTEyMTg0ZGQ4Nyk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOGFlNDI3Y2E5MTdhNGViNjgwMjEwZmIyODU0MjcwM2IuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzZkNjEzNTM3OGIzNzQzNzNhODk1NjQwZjZlNTA0MjRlKTtcclxuXHJcblxyXG5HcmlkXzYwMDUxZjQzNTdkYTQwNmZiYWY0NGJiM2MzNzFmMTQyLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzhhZTQyN2NhOTE3YTRlYjY4MDIxMGZiMjg1NDI3MDNiO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fOTEwZDU3ZDNjYWRmNDA3Zjg0ZDAwZWJmNjEzMDFmZDMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzkxMGQ1N2QzY2FkZjQwN2Y4NGQwMGViZjYxMzAxZmQzLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzljNGU3YzIzNDVlNDQzZjg5NjFjNzE1YjRmOGUxN2E0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl85YzRlN2MyMzQ1ZTQ0M2Y4OTYxYzcxNWI0ZjhlMTdhNC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2QyOTFlOGRhZTVhYTQ2MDY5MmM0YTg4ZjczYmYxMTI1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl9kMjkxZThkYWU1YWE0NjA2OTJjNGE4OGY3M2JmMTEyNS5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkXzYwMDUxZjQzNTdkYTQwNmZiYWY0NGJiM2MzNzFmMTQyLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzkxMGQ1N2QzY2FkZjQwN2Y4NGQwMGViZjYxMzAxZmQzKTtcclxuR3JpZF82MDA1MWY0MzU3ZGE0MDZmYmFmNDRiYjNjMzcxZjE0Mi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl85YzRlN2MyMzQ1ZTQ0M2Y4OTYxYzcxNWI0ZjhlMTdhNCk7XHJcbkdyaWRfNjAwNTFmNDM1N2RhNDA2ZmJhZjQ0YmIzYzM3MWYxNDIuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fZDI5MWU4ZGFlNWFhNDYwNjkyYzRhODhmNzNiZjExMjUpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fOTdmZWU3ODcyOTg4NDIxYWIxNDE3MWY1OTUxNjE3MzUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fNWY1YTE0NzVjYWU1NGMyMTg3ZTE0YjEwNTBjYzVlMmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF82MDA1MWY0MzU3ZGE0MDZmYmFmNDRiYjNjMzcxZjE0Mi5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl85N2ZlZTc4NzI5ODg0MjFhYjE0MTcxZjU5NTE2MTczNSk7XHJcbkdyaWRfNjAwNTFmNDM1N2RhNDA2ZmJhZjQ0YmIzYzM3MWYxNDIuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fNWY1YTE0NzVjYWU1NGMyMTg3ZTE0YjEwNTBjYzVlMmIpO1xyXG5cclxudmFyIEJ1dHRvbl9kYjM0OWY2YjQyMjU0ZDliOWJiMzZjMzBmOWFjN2FiZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5DYW5jZWxcIiwgQnV0dG9uX2RiMzQ5ZjZiNDIyNTRkOWI5YmIzNmMzMGY5YWM3YWJlKTtcclxuQnV0dG9uX2RiMzQ5ZjZiNDIyNTRkOWI5YmIzNmMzMGY5YWM3YWJlLk5hbWUgPSBcImJ0bkNhbmNlbFwiO1xyXG5CdXR0b25fZGIzNDlmNmI0MjI1NGQ5YjliYjM2YzMwZjlhYzdhYmUuQ29udGVudCA9IEBcItCS0LXRgNC90YPRgtGM0YHRjyDQvdCwINCz0LvQsNCy0L3Rg9GOXCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl9kYjM0OWY2YjQyMjU0ZDliOWJiMzZjMzBmOWFjN2FiZSwyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJ1dHRvbl9kYjM0OWY2YjQyMjU0ZDliOWJiMzZjMzBmOWFjN2FiZSwyKTtcclxuQnV0dG9uX2RiMzQ5ZjZiNDIyNTRkOWI5YmIzNmMzMGY5YWM3YWJlLldpZHRoID0gMjgwRDtcclxuQnV0dG9uX2RiMzQ5ZjZiNDIyNTRkOWI5YmIzNmMzMGY5YWM3YWJlLkhlaWdodCA9IDUwRDtcclxuQnV0dG9uX2RiMzQ5ZjZiNDIyNTRkOWI5YmIzNmMzMGY5YWM3YWJlLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyMzgsIEIgPSAoYnl0ZSkyMzggfSk7XHJcbkJ1dHRvbl9kYjM0OWY2YjQyMjU0ZDliOWJiMzZjMzBmOWFjN2FiZS5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uX2RiMzQ5ZjZiNDIyNTRkOWI5YmIzNmMzMGY5YWM3YWJlLkNsaWNrICs9IEJ1dHRvbl9DbGljaztcclxuQnV0dG9uX2RiMzQ5ZjZiNDIyNTRkOWI5YmIzNmMzMGY5YWM3YWJlLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl9kYjM0OWY2YjQyMjU0ZDliOWJiMzZjMzBmOWFjN2FiZS5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfN2ZkMWZiYjY2M2IwNDg3Njg0M2VlNDdlNTUwZjgxZjcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV83ZmQxZmJiNjYzYjA0ODc2ODQzZWU0N2U1NTBmODFmNy5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV83ZmQxZmJiNjYzYjA0ODc2ODQzZWU0N2U1NTBmODFmNy5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV83ZmQxZmJiNjYzYjA0ODc2ODQzZWU0N2U1NTBmODFmNyk7XHJcblxyXG5CdXR0b25fZGIzNDlmNmI0MjI1NGQ5YjliYjM2YzMwZjlhYzdhYmUuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfN2ZkMWZiYjY2M2IwNDg3Njg0M2VlNDdlNTUwZjgxZjc7XHJcblxyXG5cclxudmFyIEJ1dHRvbl9jMmU2YzQ4OTdhZDE0YjJmYTg5YjljZWY5ZjA1ZWU2NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5VcGxvYWRcIiwgQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3KTtcclxuQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3Lk5hbWUgPSBcImJ0blVwbG9hZFwiO1xyXG5CdXR0b25fYzJlNmM0ODk3YWQxNGIyZmE4OWI5Y2VmOWYwNWVlNjcuQ29udGVudCA9IEBcItCX0LDQs9GA0YPQt9C40YLRjCBKU09OINGE0LDQudC7XCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl9jMmU2YzQ4OTdhZDE0YjJmYTg5YjljZWY5ZjA1ZWU2NywwKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJ1dHRvbl9jMmU2YzQ4OTdhZDE0YjJmYTg5YjljZWY5ZjA1ZWU2NywxKTtcclxuQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3LldpZHRoID0gMjgwRDtcclxuQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3LkhlaWdodCA9IDUwRDtcclxuQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNDksIEcgPSAoYnl0ZSkyMjIsIEIgPSAoYnl0ZSkyNDIgfSk7XHJcbkJ1dHRvbl9jMmU2YzQ4OTdhZDE0YjJmYTg5YjljZWY5ZjA1ZWU2Ny5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3LkNsaWNrICs9IEJ0blVwbG9hZF9DbGljaztcclxuQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3LkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl9jMmU2YzQ4OTdhZDE0YjJmYTg5YjljZWY5ZjA1ZWU2Ny5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl9jMmU2YzQ4OTdhZDE0YjJmYTg5YjljZWY5ZjA1ZWU2Ny5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3LkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG52YXIgQ29udHJvbFRlbXBsYXRlXzYxNTViMjk0MDA4NTQ3ZTU5MzkxNTE4Zjk0ODZhYzZkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2xUZW1wbGF0ZSgpO1xyXG5Db250cm9sVGVtcGxhdGVfNjE1NWIyOTQwMDg1NDdlNTkzOTE1MThmOTQ4NmFjNmQuVGFyZ2V0VHlwZSA9IHR5cGVvZihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24pO1xyXG5Db250cm9sVGVtcGxhdGVfNjE1NWIyOTQwMDg1NDdlNTkzOTE1MThmOTQ4NmFjNmQuU2V0TWV0aG9kVG9JbnN0YW50aWF0ZUZyYW1ld29ya1RlbXBsYXRlKChTeXN0ZW0uRnVuYzxXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCxXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZT4pdGhpcy5JbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfNjE1NWIyOTQwMDg1NDdlNTkzOTE1MThmOTQ4NmFjNmQpO1xyXG5cclxuQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3LlRlbXBsYXRlID0gQ29udHJvbFRlbXBsYXRlXzYxNTViMjk0MDA4NTQ3ZTU5MzkxNTE4Zjk0ODZhYzZkO1xyXG5cclxuXHJcbnZhciBCdXR0b25fODAxMzUxNGJiMzNhNGIzMmJmODg1ZmNmNzVmZmU4MjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuUHJvY2Vzc2luZ1wiLCBCdXR0b25fODAxMzUxNGJiMzNhNGIzMmJmODg1ZmNmNzVmZmU4MjEpO1xyXG5CdXR0b25fODAxMzUxNGJiMzNhNGIzMmJmODg1ZmNmNzVmZmU4MjEuTmFtZSA9IFwiYnRuUHJvY2Vzc2luZ1wiO1xyXG5CdXR0b25fODAxMzUxNGJiMzNhNGIzMmJmODg1ZmNmNzVmZmU4MjEuQ29udGVudCA9IEBcItCf0L7RgdGC0YDQvtC40YLRjCDQtNC40LDQs9GA0LDQvNC80YNcIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uXzgwMTM1MTRiYjMzYTRiMzJiZjg4NWZjZjc1ZmZlODIxLDApO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCdXR0b25fODAxMzUxNGJiMzNhNGIzMmJmODg1ZmNmNzVmZmU4MjEsMSk7XHJcbkJ1dHRvbl84MDEzNTE0YmIzM2E0YjMyYmY4ODVmY2Y3NWZmZTgyMS5XaWR0aCA9IDI4MEQ7XHJcbkJ1dHRvbl84MDEzNTE0YmIzM2E0YjMyYmY4ODVmY2Y3NWZmZTgyMS5IZWlnaHQgPSA1MEQ7XHJcbkJ1dHRvbl84MDEzNTE0YmIzM2E0YjMyYmY4ODVmY2Y3NWZmZTgyMS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH0pO1xyXG5CdXR0b25fODAxMzUxNGJiMzNhNGIzMmJmODg1ZmNmNzVmZmU4MjEuRm9udFNpemUgPSAyNUQ7XHJcbkJ1dHRvbl84MDEzNTE0YmIzM2E0YjMyYmY4ODVmY2Y3NWZmZTgyMS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5CdXR0b25fODAxMzUxNGJiMzNhNGIzMmJmODg1ZmNmNzVmZmU4MjEuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbkJ1dHRvbl84MDEzNTE0YmIzM2E0YjMyYmY4ODVmY2Y3NWZmZTgyMS5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uXzgwMTM1MTRiYjMzYTRiMzJiZjg4NWZjZjc1ZmZlODIxLkhvcml6b250YWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uXzgwMTM1MTRiYjMzYTRiMzJiZjg4NWZjZjc1ZmZlODIxLkNsaWNrICs9IEJ0blByb2Nlc3NpbmdfQ2xpY2s7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfYjE4NWZmYmRkMDczNDkyNzk3YTg5M2Q5OWEyOGUyMTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV9iMTg1ZmZiZGQwNzM0OTI3OTdhODkzZDk5YTI4ZTIxMS5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV9iMTg1ZmZiZGQwNzM0OTI3OTdhODkzZDk5YTI4ZTIxMS5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV9iMTg1ZmZiZGQwNzM0OTI3OTdhODkzZDk5YTI4ZTIxMSk7XHJcblxyXG5CdXR0b25fODAxMzUxNGJiMzNhNGIzMmJmODg1ZmNmNzVmZmU4MjEuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfYjE4NWZmYmRkMDczNDkyNzk3YTg5M2Q5OWEyOGUyMTE7XHJcblxyXG5cclxudmFyIFRleHRCb3hfYWNjZTVhMmE5N2M2NGE4N2JiNmVjYmZkNzBhYmZiMTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuVGV4dEJveCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcInR4dEZpbGVcIiwgVGV4dEJveF9hY2NlNWEyYTk3YzY0YTg3YmI2ZWNiZmQ3MGFiZmIxMCk7XHJcblRleHRCb3hfYWNjZTVhMmE5N2M2NGE4N2JiNmVjYmZkNzBhYmZiMTAuTmFtZSA9IFwidHh0RmlsZVwiO1xyXG5UZXh0Qm94X2FjY2U1YTJhOTdjNjRhODdiYjZlY2JmZDcwYWJmYjEwLlRleHRXcmFwcGluZyA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRleHRXcmFwcGluZy5XcmFwO1xyXG5UZXh0Qm94X2FjY2U1YTJhOTdjNjRhODdiYjZlY2JmZDcwYWJmYjEwLlRleHQgPSBAXCJcIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coVGV4dEJveF9hY2NlNWEyYTk3YzY0YTg3YmI2ZWNiZmQ3MGFiZmIxMCwxKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKFRleHRCb3hfYWNjZTVhMmE5N2M2NGE4N2JiNmVjYmZkNzBhYmZiMTAsMik7XHJcblRleHRCb3hfYWNjZTVhMmE5N2M2NGE4N2JiNmVjYmZkNzBhYmZiMTAuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxMCwgLTIwLCAxMCwgLTIwKTtcclxuVGV4dEJveF9hY2NlNWEyYTk3YzY0YTg3YmI2ZWNiZmQ3MGFiZmIxMC5Gb250U2l6ZSA9IDIwRDtcclxuXHJcbnZhciBCb3JkZXJfZDVmYWIzNzBiNmFkNGEyYThiNjRlNWNlOWFmOTczNzMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYm9yZGVySURFRlwiLCBCb3JkZXJfZDVmYWIzNzBiNmFkNGEyYThiNjRlNWNlOWFmOTczNzMpO1xyXG5Cb3JkZXJfZDVmYWIzNzBiNmFkNGEyYThiNjRlNWNlOWFmOTczNzMuTmFtZSA9IFwiYm9yZGVySURFRlwiO1xyXG5Cb3JkZXJfZDVmYWIzNzBiNmFkNGEyYThiNjRlNWNlOWFmOTczNzMuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQm9yZGVyX2Q1ZmFiMzcwYjZhZDRhMmE4YjY0ZTVjZTlhZjk3MzczLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfZDVmYWIzNzBiNmFkNGEyYThiNjRlNWNlOWFmOTczNzMsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihCb3JkZXJfZDVmYWIzNzBiNmFkNGEyYThiNjRlNWNlOWFmOTczNzMsMyk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCb3JkZXJfZDVmYWIzNzBiNmFkNGEyYThiNjRlNWNlOWFmOTczNzMsMik7XHJcbkJvcmRlcl9kNWZhYjM3MGI2YWQ0YTJhOGI2NGU1Y2U5YWY5NzM3My5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEwKTtcclxuQm9yZGVyX2Q1ZmFiMzcwYjZhZDRhMmE4YjY0ZTVjZTlhZjk3MzczLlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuQm9yZGVyX2Q1ZmFiMzcwYjZhZDRhMmE4YjY0ZTVjZTlhZjk3MzczLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbkJvcmRlcl9kNWZhYjM3MGI2YWQ0YTJhOGI2NGU1Y2U5YWY5NzM3My5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjA0LCBHID0gKGJ5dGUpMjA0LCBCID0gKGJ5dGUpMjA0IH0pO1xyXG52YXIgSW1hZ2VfMmE1ZjA1YTA1MDU5NDM3NWE1NmRhMTkwYjEwMzFhOGIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJuaWdhSURFRl9KcGVnXCIsIEltYWdlXzJhNWYwNWEwNTA1OTQzNzVhNTZkYTE5MGIxMDMxYThiKTtcclxuSW1hZ2VfMmE1ZjA1YTA1MDU5NDM3NWE1NmRhMTkwYjEwMzFhOGIuTmFtZSA9IFwibmlnYUlERUZfSnBlZ1wiO1xyXG5JbWFnZV8yYTVmMDVhMDUwNTk0Mzc1YTU2ZGExOTBiMTAzMWE4Yi5TdHJldGNoID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU3RyZXRjaC5GaWxsO1xyXG5JbWFnZV8yYTVmMDVhMDUwNTk0Mzc1YTU2ZGExOTBiMTAzMWE4Yi5WaXNpYmlsaXR5ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcblxyXG5Cb3JkZXJfZDVmYWIzNzBiNmFkNGEyYThiNjRlNWNlOWFmOTczNzMuQ2hpbGQgPSBJbWFnZV8yYTVmMDVhMDUwNTk0Mzc1YTU2ZGExOTBiMTAzMWE4YjtcclxuXHJcblxyXG52YXIgQm9yZGVyXzgwZDAxYzU4YTE2YjQ2NDdiZWZhNmEyNjdiMzdiNmRjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJvcmRlclVNTFwiLCBCb3JkZXJfODBkMDFjNThhMTZiNDY0N2JlZmE2YTI2N2IzN2I2ZGMpO1xyXG5Cb3JkZXJfODBkMDFjNThhMTZiNDY0N2JlZmE2YTI2N2IzN2I2ZGMuTmFtZSA9IFwiYm9yZGVyVU1MXCI7XHJcbkJvcmRlcl84MGQwMWM1OGExNmI0NjQ3YmVmYTZhMjY3YjM3YjZkYy5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5Cb3JkZXJfODBkMDFjNThhMTZiNDY0N2JlZmE2YTI2N2IzN2I2ZGMuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJvcmRlcl84MGQwMWM1OGExNmI0NjQ3YmVmYTZhMjY3YjM3YjZkYywwKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3dTcGFuKEJvcmRlcl84MGQwMWM1OGExNmI0NjQ3YmVmYTZhMjY3YjM3YjZkYywzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJvcmRlcl84MGQwMWM1OGExNmI0NjQ3YmVmYTZhMjY3YjM3YjZkYywyKTtcclxuQm9yZGVyXzgwZDAxYzU4YTE2YjQ2NDdiZWZhNmEyNjdiMzdiNmRjLk1hcmdpbiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMTApO1xyXG5Cb3JkZXJfODBkMDFjNThhMTZiNDY0N2JlZmE2YTI2N2IzN2I2ZGMuVmlzaWJpbGl0eSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5Cb3JkZXJfODBkMDFjNThhMTZiNDY0N2JlZmE2YTI2N2IzN2I2ZGMuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxuQm9yZGVyXzgwZDAxYzU4YTE2YjQ2NDdiZWZhNmEyNjdiMzdiNmRjLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDQsIEcgPSAoYnl0ZSkyMDQsIEIgPSAoYnl0ZSkyMDQgfSk7XHJcbnZhciBJbWFnZV8xZDUzMGFhYmUyZTY0OGM2YWRhZWQwMzJhYjBlZjdmOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5JbWFnZSgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIm5pZ2FVTUxfSnBlZ1wiLCBJbWFnZV8xZDUzMGFhYmUyZTY0OGM2YWRhZWQwMzJhYjBlZjdmOCk7XHJcbkltYWdlXzFkNTMwYWFiZTJlNjQ4YzZhZGFlZDAzMmFiMGVmN2Y4Lk5hbWUgPSBcIm5pZ2FVTUxfSnBlZ1wiO1xyXG5JbWFnZV8xZDUzMGFhYmUyZTY0OGM2YWRhZWQwMzJhYjBlZjdmOC5Tb3VyY2UgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpZ2xvYmFsOjpEb3ROZXRGb3JIdG1sNS5Db3JlLlR5cGVGcm9tU3RyaW5nQ29udmVydGVycy5Db252ZXJ0RnJvbUludmFyaWFudFN0cmluZyh0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpLCBAXCIvQ1NodG1sO2NvbXBvbmVudC9pbWcvbmlnYS5qcGdcIik7XHJcbkltYWdlXzFkNTMwYWFiZTJlNjQ4YzZhZGFlZDAzMmFiMGVmN2Y4LlN0cmV0Y2ggPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5TdHJldGNoLkZpbGw7XHJcblxyXG5Cb3JkZXJfODBkMDFjNThhMTZiNDY0N2JlZmE2YTI2N2IzN2I2ZGMuQ2hpbGQgPSBJbWFnZV8xZDUzMGFhYmUyZTY0OGM2YWRhZWQwMzJhYjBlZjdmODtcclxuXHJcblxyXG5HcmlkXzYwMDUxZjQzNTdkYTQwNmZiYWY0NGJiM2MzNzFmMTQyLkNoaWxkcmVuLkFkZChCdXR0b25fZGIzNDlmNmI0MjI1NGQ5YjliYjM2YzMwZjlhYzdhYmUpO1xyXG5HcmlkXzYwMDUxZjQzNTdkYTQwNmZiYWY0NGJiM2MzNzFmMTQyLkNoaWxkcmVuLkFkZChCdXR0b25fYzJlNmM0ODk3YWQxNGIyZmE4OWI5Y2VmOWYwNWVlNjcpO1xyXG5HcmlkXzYwMDUxZjQzNTdkYTQwNmZiYWY0NGJiM2MzNzFmMTQyLkNoaWxkcmVuLkFkZChCdXR0b25fODAxMzUxNGJiMzNhNGIzMmJmODg1ZmNmNzVmZmU4MjEpO1xyXG5HcmlkXzYwMDUxZjQzNTdkYTQwNmZiYWY0NGJiM2MzNzFmMTQyLkNoaWxkcmVuLkFkZChUZXh0Qm94X2FjY2U1YTJhOTdjNjRhODdiYjZlY2JmZDcwYWJmYjEwKTtcclxuR3JpZF82MDA1MWY0MzU3ZGE0MDZmYmFmNDRiYjNjMzcxZjE0Mi5DaGlsZHJlbi5BZGQoQm9yZGVyX2Q1ZmFiMzcwYjZhZDRhMmE4YjY0ZTVjZTlhZjk3MzczKTtcclxuR3JpZF82MDA1MWY0MzU3ZGE0MDZmYmFmNDRiYjNjMzcxZjE0Mi5DaGlsZHJlbi5BZGQoQm9yZGVyXzgwZDAxYzU4YTE2YjQ2NDdiZWZhNmEyNjdiMzdiNmRjKTtcclxuXHJcblxyXG5Cb3JkZXJfOGY1NTJlMjI0Y2VhNDE2YmE2ODQwOTRkMDgwZTE3ZmEuQ2hpbGQgPSBHcmlkXzYwMDUxZjQzNTdkYTQwNmZiYWY0NGJiM2MzNzFmMTQyO1xyXG5cclxuXHJcbkdyaWRfNmUyYTg5N2NmYzdiNGI4MGFkODBiNzU2ZjdhYzc3ZTQuQ2hpbGRyZW4uQWRkKEJvcmRlcl82ZjIxMjI3ZWM4Yzc0ZjU3OTlhZjBjMjQxYjg3MTIyMSk7XHJcbkdyaWRfNmUyYTg5N2NmYzdiNGI4MGFkODBiNzU2ZjdhYzc3ZTQuQ2hpbGRyZW4uQWRkKEJvcmRlcl84ZjU1MmUyMjRjZWE0MTZiYTY4NDA5NGQwODBlMTdmYSk7XHJcblxyXG5cclxudGhpcy5Db250ZW50ID0gR3JpZF82ZTJhODk3Y2ZjN2I0YjgwYWQ4MGI3NTZmN2FjNzdlNDtcclxuXHJcblxyXG5cclxuZWxlbWVudEZvckxpc3QgPSBCb3JkZXJfNmYyMTIyN2VjOGM3NGY1Nzk5YWYwYzI0MWI4NzEyMjE7XHJcbmJ0bkNhbmNlbCA9IEJ1dHRvbl9kYjM0OWY2YjQyMjU0ZDliOWJiMzZjMzBmOWFjN2FiZTtcclxuYnRuVXBsb2FkID0gQnV0dG9uX2MyZTZjNDg5N2FkMTRiMmZhODliOWNlZjlmMDVlZTY3O1xyXG5idG5Qcm9jZXNzaW5nID0gQnV0dG9uXzgwMTM1MTRiYjMzYTRiMzJiZjg4NWZjZjc1ZmZlODIxO1xyXG50eHRGaWxlID0gVGV4dEJveF9hY2NlNWEyYTk3YzY0YTg3YmI2ZWNiZmQ3MGFiZmIxMDtcclxubmlnYUlERUZfSnBlZyA9IEltYWdlXzJhNWYwNWEwNTA1OTQzNzVhNTZkYTE5MGIxMDMxYThiO1xyXG5ib3JkZXJJREVGID0gQm9yZGVyX2Q1ZmFiMzcwYjZhZDRhMmE4YjY0ZTVjZTlhZjk3MzczO1xyXG5uaWdhVU1MX0pwZWcgPSBJbWFnZV8xZDUzMGFhYmUyZTY0OGM2YWRhZWQwMzJhYjBlZjdmODtcclxuYm9yZGVyVU1MID0gQm9yZGVyXzgwZDAxYzU4YTE2YjQ2NDdiZWZhNmEyNjdiMzdiNmRjO1xyXG5MYXlvdXRHcmlkID0gR3JpZF82MDA1MWY0MzU3ZGE0MDZmYmFmNDRiYjNjMzcxZjE0MjtcclxuZWxlbWVudCA9IEJvcmRlcl84ZjU1MmUyMjRjZWE0MTZiYTY4NDA5NGQwODBlMTdmYTtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzAzMGNmNjljMGZlZjRlMThiZGVkODZiZjAxNThhYmYwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMDMwY2Y2OWMwZmVmNGUxOGJkZWQ4NmJmMDE1OGFiZjAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wMzBjZjY5YzBmZWY0ZTE4YmRlZDg2YmYwMTU4YWJmMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzAzMGNmNjljMGZlZjRlMThiZGVkODZiZjAxNThhYmYwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wMzBjZjY5YzBmZWY0ZTE4YmRlZDg2YmYwMTU4YWJmMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfM2E1ZmI4ZjcyNjViNDY5MThlYTg2ZmZhYWE5ZTAxNGUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8zYTVmYjhmNzI2NWI0NjkxOGVhODZmZmFhYTllMDE0ZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzNhNWZiOGY3MjY1YjQ2OTE4ZWE4NmZmYWFhOWUwMTRlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfM2E1ZmI4ZjcyNjViNDY5MThlYTg2ZmZhYWE5ZTAxNGUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzNhNWZiOGY3MjY1YjQ2OTE4ZWE4NmZmYWFhOWUwMTRlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV85ZmJiYTZmMmJkYmQ0NWRiODI0YzUyMTgzNDQ3ZGU0OCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzlmYmJhNmYyYmRiZDQ1ZGI4MjRjNTIxODM0NDdkZTQ4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfOWZiYmE2ZjJiZGJkNDVkYjgyNGM1MjE4MzQ0N2RlNDggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV85ZmJiYTZmMmJkYmQ0NWRiODI0YzUyMTgzNDQ3ZGU0OCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfOWZiYmE2ZjJiZGJkNDVkYjgyNGM1MjE4MzQ0N2RlNDggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfN2ZkMWZiYjY2M2IwNDg3Njg0M2VlNDdlNTUwZjgxZjcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfYzVhZWU2ZmQ5ODE2NDY4MGE4YmY1YTVmYmFmMzRkYjMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlX2M1YWVlNmZkOTgxNjQ2ODBhOGJmNWE1ZmJhZjM0ZGIzLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyX2ZmODRlZThhMmQ3MzRiMjk5NWYzYmZjNGQ3NWE5NDY3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl9mZjg0ZWU4YTJkNzM0YjI5OTVmM2JmYzRkNzVhOTQ2Nyk7XHJcbkJvcmRlcl9mZjg0ZWU4YTJkNzM0YjI5OTVmM2JmYzRkNzVhOTQ2Ny5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfZmY4NGVlOGEyZDczNGIyOTk1ZjNiZmM0ZDc1YTk0NjcuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfZDBhYzQzY2ZiMDI3NGZiNDg4NjEzYWM5MmFmODQwMzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwX2QwYWM0M2NmYjAyNzRmYjQ4ODYxM2FjOTJhZjg0MDM2KTtcclxuVmlzdWFsU3RhdGVHcm91cF9kMGFjNDNjZmIwMjc0ZmI0ODg2MTNhYzkyYWY4NDAzNi5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzJjMGI2MzIyOTU5ZTRiZDU5OTEyZDgwMjVjMDY2YjdmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzJjMGI2MzIyOTU5ZTRiZDU5OTEyZDgwMjVjMDY2YjdmKTtcclxuVmlzdWFsU3RhdGVfMmMwYjYzMjI5NTllNGJkNTk5MTJkODAyNWMwNjZiN2YuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZWYxMGZjOThiOTY0NGVmY2ExOTNjZDhkMDZlMmYyNTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV9lZjEwZmM5OGI5NjQ0ZWZjYTE5M2NkOGQwNmUyZjI1OSk7XHJcblZpc3VhbFN0YXRlX2VmMTBmYzk4Yjk2NDRlZmNhMTkzY2Q4ZDA2ZTJmMjU5Lk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzljMzk5ODBiMzQzYTQ1ZTc4MjJjMjA2MWE4YTY4MjlmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lNDJjZjgzZGMxOTY0NjE3OGNiMjEwZWFkYzk0NzIxMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lNDJjZjgzZGMxOTY0NjE3OGNiMjEwZWFkYzk0NzIxMixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNWJiMjA2YTJmYWMyNDkyZmJkY2VlMTM5NTA0ZGM3YTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV81YmIyMDZhMmZhYzI0OTJmYmRjZWUxMzk1MDRkYzdhNy5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzViYjIwNmEyZmFjMjQ5MmZiZGNlZTEzOTUwNGRjN2E3LlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lNDJjZjgzZGMxOTY0NjE3OGNiMjEwZWFkYzk0NzIxMi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNWJiMjA2YTJmYWMyNDkyZmJkY2VlMTM5NTA0ZGM3YTcpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfOWMzOTk4MGIzNDNhNDVlNzgyMmMyMDYxYThhNjgyOWYuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2U0MmNmODNkYzE5NjQ2MTc4Y2IyMTBlYWRjOTQ3MjEyKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9lZjEwZmM5OGI5NjQ0ZWZjYTE5M2NkOGQwNmUyZjI1OS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF85YzM5OTgwYjM0M2E0NWU3ODIyYzIwNjFhOGE2ODI5ZjtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfYWZkMDdjN2NjNzczNDI1MTgzMzFlMzViYzY5NGYzYjAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlX2FmZDA3YzdjYzc3MzQyNTE4MzMxZTM1YmM2OTRmM2IwKTtcclxuVmlzdWFsU3RhdGVfYWZkMDdjN2NjNzczNDI1MTgzMzFlMzViYzY5NGYzYjAuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF85YzJjM2E1Zjc4Yjk0ZmU2OTk3MGE4MzVlZGYwYmM3OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMGQ4YWYwNjBlMGU1NGRjNThlYWQwZDNjNWEwMzNhNDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMGQ4YWYwNjBlMGU1NGRjNThlYWQwZDNjNWEwMzNhNDAsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzA1NDkwYjhjZTU1ZDRiZmViYmJhNmJhNTE0ZmE1NmNmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMDU0OTBiOGNlNTVkNGJmZWJiYmE2YmE1MTRmYTU2Y2YuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wNTQ5MGI4Y2U1NWQ0YmZlYmJiYTZiYTUxNGZhNTZjZi5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMGQ4YWYwNjBlMGU1NGRjNThlYWQwZDNjNWEwMzNhNDAuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzA1NDkwYjhjZTU1ZDRiZmViYmJhNmJhNTE0ZmE1NmNmKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzljMmMzYTVmNzhiOTRmZTY5OTcwYTgzNWVkZjBiYzc5LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18wZDhhZjA2MGUwZTU0ZGM1OGVhZDBkM2M1YTAzM2E0MCk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfYWZkMDdjN2NjNzczNDI1MTgzMzFlMzViYzY5NGYzYjAuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfOWMyYzNhNWY3OGI5NGZlNjk5NzBhODM1ZWRmMGJjNzk7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlX2ZlZjZkYmU5Y2YyYjQ1NTk4MmZhNWQ0ZDRmNzJkNTkxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfZmVmNmRiZTljZjJiNDU1OTgyZmE1ZDRkNGY3MmQ1OTEpO1xyXG5WaXN1YWxTdGF0ZV9mZWY2ZGJlOWNmMmI0NTU5ODJmYTVkNGQ0ZjcyZDU5MS5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF8yZmUzOTBjYzBmZWE0NGJjYTg1YTdlMzQzOTA3MzA4YyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWU3NzQ4OTgwNTQ2NGIzZmEwMDViNGNkMDEwZDBjOWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWU3NzQ4OTgwNTQ2NGIzZmEwMDViNGNkMDEwZDBjOWMsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2E0YWQzODlhZDZhNzQyZjk4ZmVhODljYWIzMzEwYjE3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYTRhZDM4OWFkNmE3NDJmOThmZWE4OWNhYjMzMTBiMTcuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9hNGFkMzg5YWQ2YTc0MmY5OGZlYTg5Y2FiMzMxMGIxNy5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWU3NzQ4OTgwNTQ2NGIzZmEwMDViNGNkMDEwZDBjOWMuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2E0YWQzODlhZDZhNzQyZjk4ZmVhODljYWIzMzEwYjE3KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzJmZTM5MGNjMGZlYTQ0YmNhODVhN2UzNDM5MDczMDhjLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZTc3NDg5ODA1NDY0YjNmYTAwNWI0Y2QwMTBkMGM5Yyk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfZmVmNmRiZTljZjJiNDU1OTgyZmE1ZDRkNGY3MmQ1OTEuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfMmZlMzkwY2MwZmVhNDRiY2E4NWE3ZTM0MzkwNzMwOGM7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF9kMGFjNDNjZmIwMjc0ZmI0ODg2MTNhYzkyYWY4NDAzNi5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzJjMGI2MzIyOTU5ZTRiZDU5OTEyZDgwMjVjMDY2YjdmKTtcclxuVmlzdWFsU3RhdGVHcm91cF9kMGFjNDNjZmIwMjc0ZmI0ODg2MTNhYzkyYWY4NDAzNi5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2VmMTBmYzk4Yjk2NDRlZmNhMTkzY2Q4ZDA2ZTJmMjU5KTtcclxuVmlzdWFsU3RhdGVHcm91cF9kMGFjNDNjZmIwMjc0ZmI0ODg2MTNhYzkyYWY4NDAzNi5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2FmZDA3YzdjYzc3MzQyNTE4MzMxZTM1YmM2OTRmM2IwKTtcclxuVmlzdWFsU3RhdGVHcm91cF9kMGFjNDNjZmIwMjc0ZmI0ODg2MTNhYzkyYWY4NDAzNi5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2ZlZjZkYmU5Y2YyYjQ1NTk4MmZhNWQ0ZDRmNzJkNTkxKTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfZDBhYzQzY2ZiMDI3NGZiNDg4NjEzYWM5MmFmODQwMzYpO1xyXG5cclxudmFyIEJvcmRlcl83N2VjNzkwZTAzOWY0NjMwOGYwMGQ5YzA2MmVmM2ExZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfNzdlYzc5MGUwMzlmNDYzMDhmMDBkOWMwNjJlZjNhMWUpO1xyXG5Cb3JkZXJfNzdlYzc5MGUwMzlmNDYzMDhmMDBkOWMwNjJlZjNhMWUuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyXzc3ZWM3OTBlMDM5ZjQ2MzA4ZjAwZDljMDYyZWYzYTFlLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyXzVkM2YwNGQ2ZjVmZDQ3YjE5MmU3ZjE0NzYwMjQ5NzMyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfNWQzZjA0ZDZmNWZkNDdiMTkyZTdmMTQ3NjAyNDk3MzIpO1xyXG5Db250ZW50UHJlc2VudGVyXzVkM2YwNGQ2ZjVmZDQ3YjE5MmU3ZjE0NzYwMjQ5NzMyLk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfNTYyZDdjOWM3ZTZlNDc5ODk0OThiYTg3OGEwMDRlZGMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNTYyZDdjOWM3ZTZlNDc5ODk0OThiYTg3OGEwMDRlZGMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfM2U4YjczZDU5Mjg0NGMxMWJmMWI5MDcyNGQ4MWZlZDQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8zZThiNzNkNTkyODQ0YzExYmYxYjkwNzI0ZDgxZmVkNC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ181NjJkN2M5YzdlNmU0Nzk4OTQ5OGJhODc4YTAwNGVkYy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzNlOGI3M2Q1OTI4NDRjMTFiZjFiOTA3MjRkODFmZWQ0O1xyXG5cclxuXHJcbkJpbmRpbmdfNTYyZDdjOWM3ZTZlNDc5ODk0OThiYTg3OGEwMDRlZGMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzVhZWU2ZmQ5ODE2NDY4MGE4YmY1YTVmYmFmMzRkYjM7XHJcblxyXG52YXIgQmluZGluZ184MWQzNDcyMTVkMDU0NTViOGQwZWY1NzQ1ZTZjYzE3NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184MWQzNDcyMTVkMDU0NTViOGQwZWY1NzQ1ZTZjYzE3NS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZGViNDU3ZWQzMjdjNDA2ODkzODIyNmRlY2M3ZWIyMmUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kZWI0NTdlZDMyN2M0MDY4OTM4MjI2ZGVjYzdlYjIyZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184MWQzNDcyMTVkMDU0NTViOGQwZWY1NzQ1ZTZjYzE3NS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2RlYjQ1N2VkMzI3YzQwNjg5MzgyMjZkZWNjN2ViMjJlO1xyXG5cclxuXHJcbkJpbmRpbmdfODFkMzQ3MjE1ZDA1NDU1YjhkMGVmNTc0NWU2Y2MxNzUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzVhZWU2ZmQ5ODE2NDY4MGE4YmY1YTVmYmFmMzRkYjM7XHJcblxyXG52YXIgQmluZGluZ184ZWU4ZjYzZWUwNDE0MTRkOTg2ZDE5MWQ2NTEyNGZjYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184ZWU4ZjYzZWUwNDE0MTRkOTg2ZDE5MWQ2NTEyNGZjYy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZmQ1MDk0MzNkYjdmNDBkYjk0ZTM3ZThiZWExZjZiZTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9mZDUwOTQzM2RiN2Y0MGRiOTRlMzdlOGJlYTFmNmJlNy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184ZWU4ZjYzZWUwNDE0MTRkOTg2ZDE5MWQ2NTEyNGZjYy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2ZkNTA5NDMzZGI3ZjQwZGI5NGUzN2U4YmVhMWY2YmU3O1xyXG5cclxuXHJcbkJpbmRpbmdfOGVlOGY2M2VlMDQxNDE0ZDk4NmQxOTFkNjUxMjRmY2MuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzVhZWU2ZmQ5ODE2NDY4MGE4YmY1YTVmYmFmMzRkYjM7XHJcblxyXG52YXIgQmluZGluZ18zZDUwYzI4YjE2MDU0MDY5OWIwNWRkZDJlOTA2NGZiNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18zZDUwYzI4YjE2MDU0MDY5OWIwNWRkZDJlOTA2NGZiNy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzI4Y2FjN2RjZjcyMjQ5YzY5OGM2NDQ0YWRlNGQwYWQyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMjhjYWM3ZGNmNzIyNDljNjk4YzY0NDRhZGU0ZDBhZDIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfM2Q1MGMyOGIxNjA1NDA2OTliMDVkZGQyZTkwNjRmYjcuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8yOGNhYzdkY2Y3MjI0OWM2OThjNjQ0NGFkZTRkMGFkMjtcclxuXHJcblxyXG5CaW5kaW5nXzNkNTBjMjhiMTYwNTQwNjk5YjA1ZGRkMmU5MDY0ZmI3LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2M1YWVlNmZkOTgxNjQ2ODBhOGJmNWE1ZmJhZjM0ZGIzO1xyXG5cclxudmFyIEJpbmRpbmdfZDViNjkwYjI5MmE2NDU1MGE4YzVjYTI5ZDM2MTNlZWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZDViNjkwYjI5MmE2NDU1MGE4YzVjYTI5ZDM2MTNlZWUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMDc4MzVkYzIyMTgzNGZkNmFlNzkyNTY5OWM0YTUxMjkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8wNzgzNWRjMjIxODM0ZmQ2YWU3OTI1Njk5YzRhNTEyOS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kNWI2OTBiMjkyYTY0NTUwYThjNWNhMjlkMzYxM2VlZS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzA3ODM1ZGMyMjE4MzRmZDZhZTc5MjU2OTljNGE1MTI5O1xyXG5cclxuXHJcbkJpbmRpbmdfZDViNjkwYjI5MmE2NDU1MGE4YzVjYTI5ZDM2MTNlZWUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzVhZWU2ZmQ5ODE2NDY4MGE4YmY1YTVmYmFmMzRkYjM7XHJcblxyXG5cclxuQm9yZGVyXzc3ZWM3OTBlMDM5ZjQ2MzA4ZjAwZDljMDYyZWYzYTFlLkNoaWxkID0gQ29udGVudFByZXNlbnRlcl81ZDNmMDRkNmY1ZmQ0N2IxOTJlN2YxNDc2MDI0OTczMjtcclxuXHJcbnZhciBCaW5kaW5nX2MzOGQzYzAxZWExNjQzNTk4OGMyZDAwMGQyM2IzNTgxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2MzOGQzYzAxZWExNjQzNTk4OGMyZDAwMGQyM2IzNTgxLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV82Nzg3YjUwMGU4NGQ0MmYxYTYyM2M3YmE3N2E3ZGJkZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzY3ODdiNTAwZTg0ZDQyZjFhNjIzYzdiYTc3YTdkYmRmLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2MzOGQzYzAxZWExNjQzNTk4OGMyZDAwMGQyM2IzNTgxLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNjc4N2I1MDBlODRkNDJmMWE2MjNjN2JhNzdhN2RiZGY7XHJcblxyXG5cclxuQmluZGluZ19jMzhkM2MwMWVhMTY0MzU5ODhjMmQwMDBkMjNiMzU4MS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9jNWFlZTZmZDk4MTY0NjgwYThiZjVhNWZiYWYzNGRiMztcclxuXHJcblxyXG5Cb3JkZXJfZmY4NGVlOGEyZDczNGIyOTk1ZjNiZmM0ZDc1YTk0NjcuQ2hpbGQgPSBCb3JkZXJfNzdlYzc5MGUwMzlmNDYzMDhmMDBkOWMwNjJlZjNhMWU7XHJcblxyXG52YXIgQmluZGluZ180ZTQwYTVkZWQ2YTE0ZjUzYmFiMTg3ZGU4ZThlNDlhYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ180ZTQwYTVkZWQ2YTE0ZjUzYmFiMTg3ZGU4ZThlNDlhYS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZWI3N2I5NWUwYzZiNDdiM2FlY2JmZjUyYWE5MzQ0NmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9lYjc3Yjk1ZTBjNmI0N2IzYWVjYmZmNTJhYTkzNDQ2Zi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ180ZTQwYTVkZWQ2YTE0ZjUzYmFiMTg3ZGU4ZThlNDlhYS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2ViNzdiOTVlMGM2YjQ3YjNhZWNiZmY1MmFhOTM0NDZmO1xyXG5cclxuXHJcbkJpbmRpbmdfNGU0MGE1ZGVkNmExNGY1M2JhYjE4N2RlOGU4ZTQ5YWEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzVhZWU2ZmQ5ODE2NDY4MGE4YmY1YTVmYmFmMzRkYjM7XHJcblxyXG52YXIgQmluZGluZ19kN2UxYzAwOTVjMWE0OGNiYTQ1MWIxZjIyMmM4MmQ4NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kN2UxYzAwOTVjMWE0OGNiYTQ1MWIxZjIyMmM4MmQ4Ny5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2ExNDM2ZTY4YWJhNDQ4ZGRiN2M2NTRlMjFmNjUwYWYwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYTE0MzZlNjhhYmE0NDhkZGI3YzY1NGUyMWY2NTBhZjAuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZDdlMWMwMDk1YzFhNDhjYmE0NTFiMWYyMjJjODJkODcuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9hMTQzNmU2OGFiYTQ0OGRkYjdjNjU0ZTIxZjY1MGFmMDtcclxuXHJcblxyXG5CaW5kaW5nX2Q3ZTFjMDA5NWMxYTQ4Y2JhNDUxYjFmMjIyYzgyZDg3LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2M1YWVlNmZkOTgxNjQ2ODBhOGJmNWE1ZmJhZjM0ZGIzO1xyXG5cclxudmFyIEJpbmRpbmdfY2UwODAxYThkOGY5NGJiMmE1ZDVlMmU2YmYxNDM3MGEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfY2UwODAxYThkOGY5NGJiMmE1ZDVlMmU2YmYxNDM3MGEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfY2E3NGNkYjdmYjYzNDA4NTg3MDM2NGM3M2U4NGFlOWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9jYTc0Y2RiN2ZiNjM0MDg1ODcwMzY0YzczZTg0YWU5Yi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jZTA4MDFhOGQ4Zjk0YmIyYTVkNWUyZTZiZjE0MzcwYS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2NhNzRjZGI3ZmI2MzQwODU4NzAzNjRjNzNlODRhZTliO1xyXG5cclxuXHJcbkJpbmRpbmdfY2UwODAxYThkOGY5NGJiMmE1ZDVlMmU2YmYxNDM3MGEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYzVhZWU2ZmQ5ODE2NDY4MGE4YmY1YTVmYmFmMzRkYjM7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfNWQzZjA0ZDZmNWZkNDdiMTkyZTdmMTQ3NjAyNDk3MzIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ181NjJkN2M5YzdlNmU0Nzk4OTQ5OGJhODc4YTAwNGVkYyk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNWQzZjA0ZDZmNWZkNDdiMTkyZTdmMTQ3NjAyNDk3MzIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfODFkMzQ3MjE1ZDA1NDU1YjhkMGVmNTc0NWU2Y2MxNzUpO1xyXG5Db250ZW50UHJlc2VudGVyXzVkM2YwNGQ2ZjVmZDQ3YjE5MmU3ZjE0NzYwMjQ5NzMyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ184ZWU4ZjYzZWUwNDE0MTRkOTg2ZDE5MWQ2NTEyNGZjYyk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNWQzZjA0ZDZmNWZkNDdiMTkyZTdmMTQ3NjAyNDk3MzIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ18zZDUwYzI4YjE2MDU0MDY5OWIwNWRkZDJlOTA2NGZiNyk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNWQzZjA0ZDZmNWZkNDdiMTkyZTdmMTQ3NjAyNDk3MzIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfZDViNjkwYjI5MmE2NDU1MGE4YzVjYTI5ZDM2MTNlZWUpO1xyXG5Cb3JkZXJfNzdlYzc5MGUwMzlmNDYzMDhmMDBkOWMwNjJlZjNhMWUuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2MzOGQzYzAxZWExNjQzNTk4OGMyZDAwMGQyM2IzNTgxKTtcclxuQm9yZGVyX2ZmODRlZThhMmQ3MzRiMjk5NWYzYmZjNGQ3NWE5NDY3LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ180ZTQwYTVkZWQ2YTE0ZjUzYmFiMTg3ZGU4ZThlNDlhYSk7XHJcbkJvcmRlcl9mZjg0ZWU4YTJkNzM0YjI5OTVmM2JmYzRkNzVhOTQ2Ny5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nX2Q3ZTFjMDA5NWMxYTQ4Y2JhNDUxYjFmMjIyYzgyZDg3KTtcclxuQm9yZGVyX2ZmODRlZThhMmQ3MzRiMjk5NWYzYmZjNGQ3NWE5NDY3LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nX2NlMDgwMWE4ZDhmOTRiYjJhNWQ1ZTJlNmJmMTQzNzBhKTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2U0MmNmODNkYzE5NjQ2MTc4Y2IyMTBlYWRjOTQ3MjEyLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzAzMGNmNjljMGZlZjRlMThiZGVkODZiZjAxNThhYmYwLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMDMwY2Y2OWMwZmVmNGUxOGJkZWQ4NmJmMDE1OGFiZjAsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wMzBjZjY5YzBmZWY0ZTE4YmRlZDg2YmYwMTU4YWJmMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzAzMGNmNjljMGZlZjRlMThiZGVkODZiZjAxNThhYmYwLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMDMwY2Y2OWMwZmVmNGUxOGJkZWQ4NmJmMDE1OGFiZjApKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2U0MmNmODNkYzE5NjQ2MTc4Y2IyMTBlYWRjOTQ3MjEyLCBCb3JkZXJfNzdlYzc5MGUwMzlmNDYzMDhmMDBkOWMwNjJlZjNhMWUpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzBkOGFmMDYwZTBlNTRkYzU4ZWFkMGQzYzVhMDMzYTQwLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzNhNWZiOGY3MjY1YjQ2OTE4ZWE4NmZmYWFhOWUwMTRlLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfM2E1ZmI4ZjcyNjViNDY5MThlYTg2ZmZhYWE5ZTAxNGUsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8zYTVmYjhmNzI2NWI0NjkxOGVhODZmZmFhYTllMDE0ZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzNhNWZiOGY3MjY1YjQ2OTE4ZWE4NmZmYWFhOWUwMTRlLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfM2E1ZmI4ZjcyNjViNDY5MThlYTg2ZmZhYWE5ZTAxNGUpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzBkOGFmMDYwZTBlNTRkYzU4ZWFkMGQzYzVhMDMzYTQwLCBCb3JkZXJfNzdlYzc5MGUwMzlmNDYzMDhmMDBkOWMwNjJlZjNhMWUpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzllNzc0ODk4MDU0NjRiM2ZhMDA1YjRjZDAxMGQwYzljLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzlmYmJhNmYyYmRiZDQ1ZGI4MjRjNTIxODM0NDdkZTQ4LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfOWZiYmE2ZjJiZGJkNDVkYjgyNGM1MjE4MzQ0N2RlNDgsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV85ZmJiYTZmMmJkYmQ0NWRiODI0YzUyMTgzNDQ3ZGU0OCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzlmYmJhNmYyYmRiZDQ1ZGI4MjRjNTIxODM0NDdkZTQ4LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfOWZiYmE2ZjJiZGJkNDVkYjgyNGM1MjE4MzQ0N2RlNDgpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzllNzc0ODk4MDU0NjRiM2ZhMDA1YjRjZDAxMGQwYzljLCBCb3JkZXJfNzdlYzc5MGUwMzlmNDYzMDhmMDBkOWMwNjJlZjNhMWUpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV9jNWFlZTZmZDk4MTY0NjgwYThiZjVhNWZiYWYzNGRiMy5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfZmY4NGVlOGEyZDczNGIyOTk1ZjNiZmM0ZDc1YTk0Njc7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlX2M1YWVlNmZkOTgxNjQ2ODBhOGJmNWE1ZmJhZjM0ZGIzO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV83MDQwODFmYWVmYzI0NmJhYmY0ZDQwOGE0NjQ4MTRlOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzcwNDA4MWZhZWZjMjQ2YmFiZjRkNDA4YTQ2NDgxNGU4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNzA0MDgxZmFlZmMyNDZiYWJmNGQ0MDhhNDY0ODE0ZTggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV83MDQwODFmYWVmYzI0NmJhYmY0ZDQwOGE0NjQ4MTRlOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNzA0MDgxZmFlZmMyNDZiYWJmNGQ0MDhhNDY0ODE0ZTggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzA0YTk5NTkxMjI1MzRkMTU4NGI0NzI3ZTNkM2JhMjJkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMDRhOTk1OTEyMjUzNGQxNTg0YjQ3MjdlM2QzYmEyMmQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wNGE5OTU5MTIyNTM0ZDE1ODRiNDcyN2UzZDNiYTIyZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzA0YTk5NTkxMjI1MzRkMTU4NGI0NzI3ZTNkM2JhMjJkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wNGE5OTU5MTIyNTM0ZDE1ODRiNDcyN2UzZDNiYTIyZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMzVkZTk5Zjk0NTRhNDgzNWE4NWEzNmE2YTQxZDlhMDAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8zNWRlOTlmOTQ1NGE0ODM1YTg1YTM2YTZhNDFkOWEwMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzM1ZGU5OWY5NDU0YTQ4MzVhODVhMzZhNmE0MWQ5YTAwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMzVkZTk5Zjk0NTRhNDgzNWE4NWEzNmE2YTQxZDlhMDAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzM1ZGU5OWY5NDU0YTQ4MzVhODVhMzZhNmE0MWQ5YTAwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UgSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzYxNTViMjk0MDA4NTQ3ZTU5MzkxNTE4Zjk0ODZhYzZkKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wgdGVtcGxhdGVPd25lcilcclxuICAgICAgICB7XHJcbnZhciB0ZW1wbGF0ZUluc3RhbmNlXzk0MTA1NWZmOTc5NzRhN2M4OGY4ZmMzNTI4ODk1MWU5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UoKTtcclxudGVtcGxhdGVJbnN0YW5jZV85NDEwNTVmZjk3OTc0YTdjODhmOGZjMzUyODg5NTFlOS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVPd25lcjtcclxudmFyIEJvcmRlcl9mMDRmNjI2MDQyMmY0ZjAyOTJkMDI2NWQ5MTM2YWEwMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJPdXRlckJvcmRlclwiLCBCb3JkZXJfZjA0ZjYyNjA0MjJmNGYwMjkyZDAyNjVkOTEzNmFhMDEpO1xyXG5Cb3JkZXJfZjA0ZjYyNjA0MjJmNGYwMjkyZDAyNjVkOTEzNmFhMDEuTmFtZSA9IFwiT3V0ZXJCb3JkZXJcIjtcclxuQm9yZGVyX2YwNGY2MjYwNDIyZjRmMDI5MmQwMjY1ZDkxMzZhYTAxLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBWaXN1YWxTdGF0ZUdyb3VwX2NlYzMzMWIwMDgzZTRhNzZiOTc2ZTlhN2M1MDZkMTlhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlR3JvdXAoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb21tb25TdGF0ZXNcIiwgVmlzdWFsU3RhdGVHcm91cF9jZWMzMzFiMDA4M2U0YTc2Yjk3NmU5YTdjNTA2ZDE5YSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfY2VjMzMxYjAwODNlNGE3NmI5NzZlOWE3YzUwNmQxOWEuTmFtZSA9IFwiQ29tbW9uU3RhdGVzXCI7XHJcbnZhciBWaXN1YWxTdGF0ZV8xYjYzMTc3ZDhiM2M0ZDMyYTFmZmQ1NDljYmY2ZmU3YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk5vcm1hbFwiLCBWaXN1YWxTdGF0ZV8xYjYzMTc3ZDhiM2M0ZDMyYTFmZmQ1NDljYmY2ZmU3YSk7XHJcblZpc3VhbFN0YXRlXzFiNjMxNzdkOGIzYzRkMzJhMWZmZDU0OWNiZjZmZTdhLk5hbWUgPSBcIk5vcm1hbFwiO1xyXG5cclxudmFyIFZpc3VhbFN0YXRlXzZhZWU5NmNhOWQzNDQ2YjM5MmRlODk2NzgwOTY4MDI3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUG9pbnRlck92ZXJcIiwgVmlzdWFsU3RhdGVfNmFlZTk2Y2E5ZDM0NDZiMzkyZGU4OTY3ODA5NjgwMjcpO1xyXG5WaXN1YWxTdGF0ZV82YWVlOTZjYTlkMzQ0NmIzOTJkZTg5Njc4MDk2ODAyNy5OYW1lID0gXCJQb2ludGVyT3ZlclwiO1xyXG52YXIgU3Rvcnlib2FyZF9jMTJmN2FmNmRjYTI0ZDE1OTI3YjdjMzJkMWNlMTMxNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZWEyMTgwYTJiYzdiNGJmMDg3N2JjYmI3MWIwMTE0MGEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZWEyMTgwYTJiYzdiNGJmMDg3N2JjYmI3MWIwMTE0MGEsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2FkMmQ3MzU0OGY5MTQ1YTc5ZWEwYzRmN2M5OWMzM2JjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYWQyZDczNTQ4ZjkxNDVhNzllYTBjNGY3Yzk5YzMzYmMuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9hZDJkNzM1NDhmOTE0NWE3OWVhMGM0ZjdjOTljMzNiYy5WYWx1ZSA9IEBcIiMxMTAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZWEyMTgwYTJiYzdiNGJmMDg3N2JjYmI3MWIwMTE0MGEuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2FkMmQ3MzU0OGY5MTQ1YTc5ZWEwYzRmN2M5OWMzM2JjKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2MxMmY3YWY2ZGNhMjRkMTU5MjdiN2MzMmQxY2UxMzE2LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lYTIxODBhMmJjN2I0YmYwODc3YmNiYjcxYjAxMTQwYSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNmFlZTk2Y2E5ZDM0NDZiMzkyZGU4OTY3ODA5NjgwMjcuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfYzEyZjdhZjZkY2EyNGQxNTkyN2I3YzMyZDFjZTEzMTY7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzM1MDdhNTA1OTE3OTQ0YWVhOTUwYmE2MzFhZTI4YTQyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUHJlc3NlZFwiLCBWaXN1YWxTdGF0ZV8zNTA3YTUwNTkxNzk0NGFlYTk1MGJhNjMxYWUyOGE0Mik7XHJcblZpc3VhbFN0YXRlXzM1MDdhNTA1OTE3OTQ0YWVhOTUwYmE2MzFhZTI4YTQyLk5hbWUgPSBcIlByZXNzZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfZTk2ZmYzZDM4ZjZmNDcwYThjYTJkOTEyMTRjYjc0YjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzg3YjNlNDgyZjJlMzRiZjk4M2QzYWEzODk2ZDczNDY0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzg3YjNlNDgyZjJlMzRiZjk4M2QzYWEzODk2ZDczNDY0LEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mNzM0MjA2OWRiODM0NzJmYjFiODQxYzg2MjE4YjdkOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2Y3MzQyMDY5ZGI4MzQ3MmZiMWI4NDFjODYyMThiN2Q5LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZjczNDIwNjlkYjgzNDcyZmIxYjg0MWM4NjIxOGI3ZDkuVmFsdWUgPSBAXCIjMjIwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzg3YjNlNDgyZjJlMzRiZjk4M2QzYWEzODk2ZDczNDY0LktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mNzM0MjA2OWRiODM0NzJmYjFiODQxYzg2MjE4YjdkOSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9lOTZmZjNkMzhmNmY0NzBhOGNhMmQ5MTIxNGNiNzRiMS5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfODdiM2U0ODJmMmUzNGJmOTgzZDNhYTM4OTZkNzM0NjQpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzM1MDdhNTA1OTE3OTQ0YWVhOTUwYmE2MzFhZTI4YTQyLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2U5NmZmM2QzOGY2ZjQ3MGE4Y2EyZDkxMjE0Y2I3NGIxO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV84YWVjNWI1YWQ3NWU0YmU5YTlhMDVlZTg0NGYwNGQ4ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkRpc2FibGVkXCIsIFZpc3VhbFN0YXRlXzhhZWM1YjVhZDc1ZTRiZTlhOWEwNWVlODQ0ZjA0ZDhmKTtcclxuVmlzdWFsU3RhdGVfOGFlYzViNWFkNzVlNGJlOWE5YTA1ZWU4NDRmMDRkOGYuTmFtZSA9IFwiRGlzYWJsZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfYzBlODhlYjU0OTAwNGQwNGI2MzVjNDk2ZjA2ZGRjNDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5Y2JmODFmNTg3MzRhNWU5YTcwYjA2YTkzODMzOWVmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5Y2JmODFmNTg3MzRhNWU5YTcwYjA2YTkzODMzOWVmLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV8xMGYyYzYxZTRmN2U0NzA3OTJjMDRmYjI2MDRmMzlmYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzEwZjJjNjFlNGY3ZTQ3MDc5MmMwNGZiMjYwNGYzOWZjLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMTBmMmM2MWU0ZjdlNDcwNzkyYzA0ZmIyNjA0ZjM5ZmMuVmFsdWUgPSBAXCIjMzNGRkZGRkZcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5Y2JmODFmNTg3MzRhNWU5YTcwYjA2YTkzODMzOWVmLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV8xMGYyYzYxZTRmN2U0NzA3OTJjMDRmYjI2MDRmMzlmYyk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9jMGU4OGViNTQ5MDA0ZDA0YjYzNWM0OTZmMDZkZGM0OS5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTljYmY4MWY1ODczNGE1ZTlhNzBiMDZhOTM4MzM5ZWYpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzhhZWM1YjVhZDc1ZTRiZTlhOWEwNWVlODQ0ZjA0ZDhmLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2MwZTg4ZWI1NDkwMDRkMDRiNjM1YzQ5NmYwNmRkYzQ5O1xyXG5cclxuXHJcblZpc3VhbFN0YXRlR3JvdXBfY2VjMzMxYjAwODNlNGE3NmI5NzZlOWE3YzUwNmQxOWEuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV8xYjYzMTc3ZDhiM2M0ZDMyYTFmZmQ1NDljYmY2ZmU3YSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfY2VjMzMxYjAwODNlNGE3NmI5NzZlOWE3YzUwNmQxOWEuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV82YWVlOTZjYTlkMzQ0NmIzOTJkZTg5Njc4MDk2ODAyNyk7XHJcblZpc3VhbFN0YXRlR3JvdXBfY2VjMzMxYjAwODNlNGE3NmI5NzZlOWE3YzUwNmQxOWEuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV8zNTA3YTUwNTkxNzk0NGFlYTk1MGJhNjMxYWUyOGE0Mik7XHJcblZpc3VhbFN0YXRlR3JvdXBfY2VjMzMxYjAwODNlNGE3NmI5NzZlOWE3YzUwNmQxOWEuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV84YWVjNWI1YWQ3NWU0YmU5YTlhMDVlZTg0NGYwNGQ4Zik7XHJcblxyXG5cclxudGVtcGxhdGVPd25lci5JTlRFUk5BTF9HZXRWaXN1YWxTdGF0ZUdyb3VwcygpLkFkZChWaXN1YWxTdGF0ZUdyb3VwX2NlYzMzMWIwMDgzZTRhNzZiOTc2ZTlhN2M1MDZkMTlhKTtcclxuXHJcbnZhciBCb3JkZXJfNDIzM2MyZTdhNzBkNGZlNmI5ZTYyYzliNDU5ZjU0N2MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiSW5uZXJCb3JkZXJcIiwgQm9yZGVyXzQyMzNjMmU3YTcwZDRmZTZiOWU2MmM5YjQ1OWY1NDdjKTtcclxuQm9yZGVyXzQyMzNjMmU3YTcwZDRmZTZiOWU2MmM5YjQ1OWY1NDdjLk5hbWUgPSBcIklubmVyQm9yZGVyXCI7XHJcbkJvcmRlcl80MjMzYzJlN2E3MGQ0ZmU2YjllNjJjOWI0NTlmNTQ3Yy5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgQ29udGVudFByZXNlbnRlcl9kYWQ2ODc2NWVjNjU0MmVjYWM1MjBiMGVlYTc0ZWYzYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50UHJlc2VudGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29udGVudFByZXNlbnRlclwiLCBDb250ZW50UHJlc2VudGVyX2RhZDY4NzY1ZWM2NTQyZWNhYzUyMGIwZWVhNzRlZjNhKTtcclxuQ29udGVudFByZXNlbnRlcl9kYWQ2ODc2NWVjNjU0MmVjYWM1MjBiMGVlYTc0ZWYzYS5OYW1lID0gXCJDb250ZW50UHJlc2VudGVyXCI7XHJcbnZhciBCaW5kaW5nXzA0YWNkOGQ0YWE5MzQxNGRhZmZjNDdlZmQ4MzkxZjk1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzA0YWNkOGQ0YWE5MzQxNGRhZmZjNDdlZmQ4MzkxZjk1LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRUZW1wbGF0ZVwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2NlMzU4MzJkZjcwZDQ4OWNhZmM2MTQyYzA0NmZhNmUyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfY2UzNTgzMmRmNzBkNDg5Y2FmYzYxNDJjMDQ2ZmE2ZTIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMDRhY2Q4ZDRhYTkzNDE0ZGFmZmM0N2VmZDgzOTFmOTUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9jZTM1ODMyZGY3MGQ0ODljYWZjNjE0MmMwNDZmYTZlMjtcclxuXHJcblxyXG5CaW5kaW5nXzA0YWNkOGQ0YWE5MzQxNGRhZmZjNDdlZmQ4MzkxZjk1LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzk0MTA1NWZmOTc5NzRhN2M4OGY4ZmMzNTI4ODk1MWU5O1xyXG5cclxudmFyIEJpbmRpbmdfN2RkMGU5MWY0MDI0NDhmYmE0NTA5N2ZjMmMyYjRlNzcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfN2RkMGU5MWY0MDI0NDhmYmE0NTA5N2ZjMmMyYjRlNzcuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzY0Yjg2NzJiZTk0MjQ4NzQ5MTdmOTkzYmQ5NTM4OGM2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNjRiODY3MmJlOTQyNDg3NDkxN2Y5OTNiZDk1Mzg4YzYuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfN2RkMGU5MWY0MDI0NDhmYmE0NTA5N2ZjMmMyYjRlNzcuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV82NGI4NjcyYmU5NDI0ODc0OTE3Zjk5M2JkOTUzODhjNjtcclxuXHJcblxyXG5CaW5kaW5nXzdkZDBlOTFmNDAyNDQ4ZmJhNDUwOTdmYzJjMmI0ZTc3LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzk0MTA1NWZmOTc5NzRhN2M4OGY4ZmMzNTI4ODk1MWU5O1xyXG5cclxudmFyIEJpbmRpbmdfMTlkNjQ3ODcwYjE3NGM3OGEyYzNiOWIwZGVjNjE1ZDUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMTlkNjQ3ODcwYjE3NGM3OGEyYzNiOWIwZGVjNjE1ZDUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiUGFkZGluZ1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzA2Y2JmNTU4ZjhhOTRlMWQ5ZjYwNDM3YWVmZGYyYWYyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMDZjYmY1NThmOGE5NGUxZDlmNjA0MzdhZWZkZjJhZjIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMTlkNjQ3ODcwYjE3NGM3OGEyYzNiOWIwZGVjNjE1ZDUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8wNmNiZjU1OGY4YTk0ZTFkOWY2MDQzN2FlZmRmMmFmMjtcclxuXHJcblxyXG5CaW5kaW5nXzE5ZDY0Nzg3MGIxNzRjNzhhMmMzYjliMGRlYzYxNWQ1LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzk0MTA1NWZmOTc5NzRhN2M4OGY4ZmMzNTI4ODk1MWU5O1xyXG5cclxudmFyIEJpbmRpbmdfY2MxOTdmMjcwZjg4NDNjN2FiNmQyZjRjMjIwNTc2MzIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfY2MxOTdmMjcwZjg4NDNjN2FiNmQyZjRjMjIwNTc2MzIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiSG9yaXpvbnRhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV84ZTVkNmZiZDNhZWQ0ZmMxYWNjZDFlMWM5MjQ3ODQ2MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzhlNWQ2ZmJkM2FlZDRmYzFhY2NkMWUxYzkyNDc4NDYyLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2NjMTk3ZjI3MGY4ODQzYzdhYjZkMmY0YzIyMDU3NjMyLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOGU1ZDZmYmQzYWVkNGZjMWFjY2QxZTFjOTI0Nzg0NjI7XHJcblxyXG5cclxuQmluZGluZ19jYzE5N2YyNzBmODg0M2M3YWI2ZDJmNGMyMjA1NzYzMi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV85NDEwNTVmZjk3OTc0YTdjODhmOGZjMzUyODg5NTFlOTtcclxuXHJcbnZhciBCaW5kaW5nX2QwY2RiMDk1MDMyYjRlMWU4YWNlZGE1YjNkZWJmYTU5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2QwY2RiMDk1MDMyYjRlMWU4YWNlZGE1YjNkZWJmYTU5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzI5MTRjODE3OWQ3MDRmZjY4YzQzMjUxMzQwMDVjNDU0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMjkxNGM4MTc5ZDcwNGZmNjhjNDMyNTEzNDAwNWM0NTQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZDBjZGIwOTUwMzJiNGUxZThhY2VkYTViM2RlYmZhNTkuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8yOTE0YzgxNzlkNzA0ZmY2OGM0MzI1MTM0MDA1YzQ1NDtcclxuXHJcblxyXG5CaW5kaW5nX2QwY2RiMDk1MDMyYjRlMWU4YWNlZGE1YjNkZWJmYTU5LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzk0MTA1NWZmOTc5NzRhN2M4OGY4ZmMzNTI4ODk1MWU5O1xyXG5cclxuXHJcbkJvcmRlcl80MjMzYzJlN2E3MGQ0ZmU2YjllNjJjOWI0NTlmNTQ3Yy5DaGlsZCA9IENvbnRlbnRQcmVzZW50ZXJfZGFkNjg3NjVlYzY1NDJlY2FjNTIwYjBlZWE3NGVmM2E7XHJcblxyXG52YXIgQmluZGluZ185MTEwMjJkM2YwOWI0MDBlODA2NGMzMjVmOTYyMmNkNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ185MTEwMjJkM2YwOWI0MDBlODA2NGMzMjVmOTYyMmNkNi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOWU5OTM5YzlmMTg1NDRmMjllMDA1NzU5YzQxYzk4YjkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85ZTk5MzljOWYxODU0NGYyOWUwMDU3NTljNDFjOThiOS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185MTEwMjJkM2YwOWI0MDBlODA2NGMzMjVmOTYyMmNkNi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzllOTkzOWM5ZjE4NTQ0ZjI5ZTAwNTc1OWM0MWM5OGI5O1xyXG5cclxuXHJcbkJpbmRpbmdfOTExMDIyZDNmMDliNDAwZTgwNjRjMzI1Zjk2MjJjZDYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfOTQxMDU1ZmY5Nzk3NGE3Yzg4ZjhmYzM1Mjg4OTUxZTk7XHJcblxyXG5cclxuQm9yZGVyX2YwNGY2MjYwNDIyZjRmMDI5MmQwMjY1ZDkxMzZhYTAxLkNoaWxkID0gQm9yZGVyXzQyMzNjMmU3YTcwZDRmZTZiOWU2MmM5YjQ1OWY1NDdjO1xyXG5cclxudmFyIEJpbmRpbmdfNGVlYTU1MzFkNzA5NDNhNGJkNTc0NTViZTI2YTdiZjYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNGVlYTU1MzFkNzA5NDNhNGJkNTc0NTViZTI2YTdiZjYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2RjZGZkM2UwZTAxOTQ1NGZhYjczYjVhYzc0ZTZkMDcyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZGNkZmQzZTBlMDE5NDU0ZmFiNzNiNWFjNzRlNmQwNzIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNGVlYTU1MzFkNzA5NDNhNGJkNTc0NTViZTI2YTdiZjYuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9kY2RmZDNlMGUwMTk0NTRmYWI3M2I1YWM3NGU2ZDA3MjtcclxuXHJcblxyXG5CaW5kaW5nXzRlZWE1NTMxZDcwOTQzYTRiZDU3NDU1YmUyNmE3YmY2LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzk0MTA1NWZmOTc5NzRhN2M4OGY4ZmMzNTI4ODk1MWU5O1xyXG5cclxudmFyIEJpbmRpbmdfNGZjNDdhNzdjZWFlNDQ5NGIzMzE5NTk5OTlkZmJkOTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNGZjNDdhNzdjZWFlNDQ5NGIzMzE5NTk5OTlkZmJkOTIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyQnJ1c2hcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV83MWM0YWZkOWNjNDQ0NTcyOGFjM2E0NDRlYjc4ZGIzNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzcxYzRhZmQ5Y2M0NDQ1NzI4YWMzYTQ0NGViNzhkYjM0Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzRmYzQ3YTc3Y2VhZTQ0OTRiMzMxOTU5OTk5ZGZiZDkyLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNzFjNGFmZDljYzQ0NDU3MjhhYzNhNDQ0ZWI3OGRiMzQ7XHJcblxyXG5cclxuQmluZGluZ180ZmM0N2E3N2NlYWU0NDk0YjMzMTk1OTk5OWRmYmQ5Mi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV85NDEwNTVmZjk3OTc0YTdjODhmOGZjMzUyODg5NTFlOTtcclxuXHJcbnZhciBCaW5kaW5nXzdiYjhiMzgwZGVhMjRiZjc4MTlkYjhjODZhZGZmMWZjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzdiYjhiMzgwZGVhMjRiZjc4MTlkYjhjODZhZGZmMWZjLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlclRoaWNrbmVzc1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzAxY2U3MzlmY2Y3NzQ2N2RiMTAyYWZiNTNkYTNkNDMzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMDFjZTczOWZjZjc3NDY3ZGIxMDJhZmI1M2RhM2Q0MzMuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfN2JiOGIzODBkZWEyNGJmNzgxOWRiOGM4NmFkZmYxZmMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8wMWNlNzM5ZmNmNzc0NjdkYjEwMmFmYjUzZGEzZDQzMztcclxuXHJcblxyXG5CaW5kaW5nXzdiYjhiMzgwZGVhMjRiZjc4MTlkYjhjODZhZGZmMWZjLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzk0MTA1NWZmOTc5NzRhN2M4OGY4ZmMzNTI4ODk1MWU5O1xyXG5cclxuXHJcblxyXG5Db250ZW50UHJlc2VudGVyX2RhZDY4NzY1ZWM2NTQyZWNhYzUyMGIwZWVhNzRlZjNhLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFRlbXBsYXRlUHJvcGVydHksIEJpbmRpbmdfMDRhY2Q4ZDRhYTkzNDE0ZGFmZmM0N2VmZDgzOTFmOTUpO1xyXG5Db250ZW50UHJlc2VudGVyX2RhZDY4NzY1ZWM2NTQyZWNhYzUyMGIwZWVhNzRlZjNhLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFByb3BlcnR5LCBCaW5kaW5nXzdkZDBlOTFmNDAyNDQ4ZmJhNDUwOTdmYzJjMmI0ZTc3KTtcclxuQ29udGVudFByZXNlbnRlcl9kYWQ2ODc2NWVjNjU0MmVjYWM1MjBiMGVlYTc0ZWYzYS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuTWFyZ2luUHJvcGVydHksIEJpbmRpbmdfMTlkNjQ3ODcwYjE3NGM3OGEyYzNiOWIwZGVjNjE1ZDUpO1xyXG5Db250ZW50UHJlc2VudGVyX2RhZDY4NzY1ZWM2NTQyZWNhYzUyMGIwZWVhNzRlZjNhLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5Ib3Jpem9udGFsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfY2MxOTdmMjcwZjg4NDNjN2FiNmQyZjRjMjIwNTc2MzIpO1xyXG5Db250ZW50UHJlc2VudGVyX2RhZDY4NzY1ZWM2NTQyZWNhYzUyMGIwZWVhNzRlZjNhLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5WZXJ0aWNhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nX2QwY2RiMDk1MDMyYjRlMWU4YWNlZGE1YjNkZWJmYTU5KTtcclxuQm9yZGVyXzQyMzNjMmU3YTcwZDRmZTZiOWU2MmM5YjQ1OWY1NDdjLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ185MTEwMjJkM2YwOWI0MDBlODA2NGMzMjVmOTYyMmNkNik7XHJcbkJvcmRlcl9mMDRmNjI2MDQyMmY0ZjAyOTJkMDI2NWQ5MTM2YWEwMS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfNGVlYTU1MzFkNzA5NDNhNGJkNTc0NTViZTI2YTdiZjYpO1xyXG5Cb3JkZXJfZjA0ZjYyNjA0MjJmNGYwMjkyZDAyNjVkOTEzNmFhMDEuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyQnJ1c2hQcm9wZXJ0eSwgQmluZGluZ180ZmM0N2E3N2NlYWU0NDk0YjMzMTk1OTk5OWRmYmQ5Mik7XHJcbkJvcmRlcl9mMDRmNjI2MDQyMmY0ZjAyOTJkMDI2NWQ5MTM2YWEwMS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJUaGlja25lc3NQcm9wZXJ0eSwgQmluZGluZ183YmI4YjM4MGRlYTI0YmY3ODE5ZGI4Yzg2YWRmZjFmYyk7XHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lYTIxODBhMmJjN2I0YmYwODc3YmNiYjcxYjAxMTQwYSxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV83MDQwODFmYWVmYzI0NmJhYmY0ZDQwOGE0NjQ4MTRlOCxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzcwNDA4MWZhZWZjMjQ2YmFiZjRkNDA4YTQ2NDgxNGU4LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNzA0MDgxZmFlZmMyNDZiYWJmNGQ0MDhhNDY0ODE0ZTgsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV83MDQwODFmYWVmYzI0NmJhYmY0ZDQwOGE0NjQ4MTRlOCxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzcwNDA4MWZhZWZjMjQ2YmFiZjRkNDA4YTQ2NDgxNGU4KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lYTIxODBhMmJjN2I0YmYwODc3YmNiYjcxYjAxMTQwYSwgQm9yZGVyXzQyMzNjMmU3YTcwZDRmZTZiOWU2MmM5YjQ1OWY1NDdjKTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc184N2IzZTQ4MmYyZTM0YmY5ODNkM2FhMzg5NmQ3MzQ2NCxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8wNGE5OTU5MTIyNTM0ZDE1ODRiNDcyN2UzZDNiYTIyZCxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzA0YTk5NTkxMjI1MzRkMTU4NGI0NzI3ZTNkM2JhMjJkLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMDRhOTk1OTEyMjUzNGQxNTg0YjQ3MjdlM2QzYmEyMmQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8wNGE5OTU5MTIyNTM0ZDE1ODRiNDcyN2UzZDNiYTIyZCxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzA0YTk5NTkxMjI1MzRkMTU4NGI0NzI3ZTNkM2JhMjJkKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc184N2IzZTQ4MmYyZTM0YmY5ODNkM2FhMzg5NmQ3MzQ2NCwgQm9yZGVyXzQyMzNjMmU3YTcwZDRmZTZiOWU2MmM5YjQ1OWY1NDdjKTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xOWNiZjgxZjU4NzM0YTVlOWE3MGIwNmE5MzgzMzllZixcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8zNWRlOTlmOTQ1NGE0ODM1YTg1YTM2YTZhNDFkOWEwMCxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzM1ZGU5OWY5NDU0YTQ4MzVhODVhMzZhNmE0MWQ5YTAwLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMzVkZTk5Zjk0NTRhNDgzNWE4NWEzNmE2YTQxZDlhMDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8zNWRlOTlmOTQ1NGE0ODM1YTg1YTM2YTZhNDFkOWEwMCxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzM1ZGU5OWY5NDU0YTQ4MzVhODVhMzZhNmE0MWQ5YTAwKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xOWNiZjgxZjU4NzM0YTVlOWE3MGIwNmE5MzgzMzllZiwgQm9yZGVyXzQyMzNjMmU3YTcwZDRmZTZiOWU2MmM5YjQ1OWY1NDdjKTtcclxuXHJcbnRlbXBsYXRlSW5zdGFuY2VfOTQxMDU1ZmY5Nzk3NGE3Yzg4ZjhmYzM1Mjg4OTUxZTkuVGVtcGxhdGVDb250ZW50ID0gQm9yZGVyX2YwNGY2MjYwNDIyZjRmMDI5MmQwMjY1ZDkxMzZhYTAxO1xyXG5yZXR1cm4gdGVtcGxhdGVJbnN0YW5jZV85NDEwNTVmZjk3OTc0YTdjODhmOGZjMzUyODg5NTFlOTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZGUxZDU0YmVhZWVmNGU4Yzg4NDNhOTFlOGJjMzg2ZDkgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9kZTFkNTRiZWFlZWY0ZThjODg0M2E5MWU4YmMzODZkOSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2RlMWQ1NGJlYWVlZjRlOGM4ODQzYTkxZThiYzM4NmQ5IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZGUxZDU0YmVhZWVmNGU4Yzg4NDNhOTFlOGJjMzg2ZDkgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2RlMWQ1NGJlYWVlZjRlOGM4ODQzYTkxZThiYzM4NmQ5IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8zNWI4NDQxNTdjNGU0Yzg2OWI3NmI2Y2ViZTBiNjY4ZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzM1Yjg0NDE1N2M0ZTRjODY5Yjc2YjZjZWJlMGI2NjhkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMzViODQ0MTU3YzRlNGM4NjliNzZiNmNlYmUwYjY2OGQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8zNWI4NDQxNTdjNGU0Yzg2OWI3NmI2Y2ViZTBiNjY4ZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMzViODQ0MTU3YzRlNGM4NjliNzZiNmNlYmUwYjY2OGQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2U1MThkYjkyMjk3ZDQ4Njc4MjI2ZGRlNDYwZDU2ZmMyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfZTUxOGRiOTIyOTdkNDg2NzgyMjZkZGU0NjBkNTZmYzIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9lNTE4ZGI5MjI5N2Q0ODY3ODIyNmRkZTQ2MGQ1NmZjMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2U1MThkYjkyMjk3ZDQ4Njc4MjI2ZGRlNDYwZDU2ZmMyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lNTE4ZGI5MjI5N2Q0ODY3ODIyNmRkZTQ2MGQ1NmZjMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlIEluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV9iMTg1ZmZiZGQwNzM0OTI3OTdhODkzZDk5YTI4ZTIxMShnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sIHRlbXBsYXRlT3duZXIpXHJcbiAgICAgICAge1xyXG52YXIgdGVtcGxhdGVJbnN0YW5jZV82YjEzMDBlZjk1NGE0NmU2YjBiMjQyNmQzZjU0Mzg3NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlKCk7XHJcbnRlbXBsYXRlSW5zdGFuY2VfNmIxMzAwZWY5NTRhNDZlNmIwYjI0MjZkM2Y1NDM4NzcuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlT3duZXI7XHJcbnZhciBCb3JkZXJfOTgxNzc2NTU5MmFiNGM1Mzg4MjNhYjMyNWRjYTA2ZjMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiT3V0ZXJCb3JkZXJcIiwgQm9yZGVyXzk4MTc3NjU1OTJhYjRjNTM4ODIzYWIzMjVkY2EwNmYzKTtcclxuQm9yZGVyXzk4MTc3NjU1OTJhYjRjNTM4ODIzYWIzMjVkY2EwNmYzLk5hbWUgPSBcIk91dGVyQm9yZGVyXCI7XHJcbkJvcmRlcl85ODE3NzY1NTkyYWI0YzUzODgyM2FiMzI1ZGNhMDZmMy5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgVmlzdWFsU3RhdGVHcm91cF8xY2E3YmNiZTY2OTQ0NGEyYTA3NTVjZjY5MTY3MDBjMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZUdyb3VwKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29tbW9uU3RhdGVzXCIsIFZpc3VhbFN0YXRlR3JvdXBfMWNhN2JjYmU2Njk0NDRhMmEwNzU1Y2Y2OTE2NzAwYzMpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzFjYTdiY2JlNjY5NDQ0YTJhMDc1NWNmNjkxNjcwMGMzLk5hbWUgPSBcIkNvbW1vblN0YXRlc1wiO1xyXG52YXIgVmlzdWFsU3RhdGVfNDU1YTI3N2FkODk0NDZjMGJkYWE0N2U3MWMzZjg0OTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJOb3JtYWxcIiwgVmlzdWFsU3RhdGVfNDU1YTI3N2FkODk0NDZjMGJkYWE0N2U3MWMzZjg0OTgpO1xyXG5WaXN1YWxTdGF0ZV80NTVhMjc3YWQ4OTQ0NmMwYmRhYTQ3ZTcxYzNmODQ5OC5OYW1lID0gXCJOb3JtYWxcIjtcclxuXHJcbnZhciBWaXN1YWxTdGF0ZV8xYzc4MjA0MzYxODE0NTZiODIwMGYwMDY5OTY2ZTNmZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlBvaW50ZXJPdmVyXCIsIFZpc3VhbFN0YXRlXzFjNzgyMDQzNjE4MTQ1NmI4MjAwZjAwNjk5NjZlM2ZkKTtcclxuVmlzdWFsU3RhdGVfMWM3ODIwNDM2MTgxNDU2YjgyMDBmMDA2OTk2NmUzZmQuTmFtZSA9IFwiUG9pbnRlck92ZXJcIjtcclxudmFyIFN0b3J5Ym9hcmRfYjM1NGI5Y2VlMzRkNGVjM2FmMTdkNThiOWRlZmRhOWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5Mjg4YWUzNTUzZTQyY2Y4MTY5ZGFiMWI3NzBkOGM4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5Mjg4YWUzNTUzZTQyY2Y4MTY5ZGFiMWI3NzBkOGM4LEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV9hY2E1MjJjM2FlOGU0NDMwOTdiNzRhZjM2ZTk0MjRmNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2FjYTUyMmMzYWU4ZTQ0MzA5N2I3NGFmMzZlOTQyNGY3LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYWNhNTIyYzNhZThlNDQzMDk3Yjc0YWYzNmU5NDI0ZjcuVmFsdWUgPSBAXCIjMTEwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5Mjg4YWUzNTUzZTQyY2Y4MTY5ZGFiMWI3NzBkOGM4LktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV9hY2E1MjJjM2FlOGU0NDMwOTdiNzRhZjM2ZTk0MjRmNyk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9iMzU0YjljZWUzNGQ0ZWMzYWYxN2Q1OGI5ZGVmZGE5ZC5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTkyODhhZTM1NTNlNDJjZjgxNjlkYWIxYjc3MGQ4YzgpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzFjNzgyMDQzNjE4MTQ1NmI4MjAwZjAwNjk5NjZlM2ZkLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2IzNTRiOWNlZTM0ZDRlYzNhZjE3ZDU4YjlkZWZkYTlkO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV9jZjhjOWEyNTMzMTc0YzYzYTFkZjU5M2UzMGJhMzJlMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlByZXNzZWRcIiwgVmlzdWFsU3RhdGVfY2Y4YzlhMjUzMzE3NGM2M2ExZGY1OTNlMzBiYTMyZTMpO1xyXG5WaXN1YWxTdGF0ZV9jZjhjOWEyNTMzMTc0YzYzYTFkZjU5M2UzMGJhMzJlMy5OYW1lID0gXCJQcmVzc2VkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzcyZmQ0YTlmOThjNzQ4NzJiNGI1ZjIxYmQwYzU4OGE4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183ODIxYWFmNjk1ZDE0MGZhYjY1YzY1M2MyYWMyOGQ5ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183ODIxYWFmNjk1ZDE0MGZhYjY1YzY1M2MyYWMyOGQ5ZixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfM2Q1ZDVlYzM3YTJmNGJjODk4ODJlNzgxOWQzMzYyODcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8zZDVkNWVjMzdhMmY0YmM4OTg4MmU3ODE5ZDMzNjI4Ny5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzNkNWQ1ZWMzN2EyZjRiYzg5ODgyZTc4MTlkMzM2Mjg3LlZhbHVlID0gQFwiIzIyMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183ODIxYWFmNjk1ZDE0MGZhYjY1YzY1M2MyYWMyOGQ5Zi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfM2Q1ZDVlYzM3YTJmNGJjODk4ODJlNzgxOWQzMzYyODcpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNzJmZDRhOWY5OGM3NDg3MmI0YjVmMjFiZDBjNTg4YTguQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzc4MjFhYWY2OTVkMTQwZmFiNjVjNjUzYzJhYzI4ZDlmKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9jZjhjOWEyNTMzMTc0YzYzYTFkZjU5M2UzMGJhMzJlMy5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF83MmZkNGE5Zjk4Yzc0ODcyYjRiNWYyMWJkMGM1ODhhODtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMjFmNTcxOWE2YTRhNGNhYjkyOTJkNmFkY2VkZjI0YTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJEaXNhYmxlZFwiLCBWaXN1YWxTdGF0ZV8yMWY1NzE5YTZhNGE0Y2FiOTI5MmQ2YWRjZWRmMjRhMSk7XHJcblZpc3VhbFN0YXRlXzIxZjU3MTlhNmE0YTRjYWI5MjkyZDZhZGNlZGYyNGExLk5hbWUgPSBcIkRpc2FibGVkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzQ2NTVlMTVmYjk0YjRkMWFhYjc5OTFiYTEzMGQ1YjcxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yMmViMGU4NWYyZDM0ZmM3YWZmNDMzMGJlMTg4OWQ5YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yMmViMGU4NWYyZDM0ZmM3YWZmNDMzMGJlMTg4OWQ5YSxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZWM3YWFiMWVjODdjNDI1MWFkMjhlYjU2NTg1MDhmODIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9lYzdhYWIxZWM4N2M0MjUxYWQyOGViNTY1ODUwOGY4Mi5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2VjN2FhYjFlYzg3YzQyNTFhZDI4ZWI1NjU4NTA4ZjgyLlZhbHVlID0gQFwiIzMzRkZGRkZGXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yMmViMGU4NWYyZDM0ZmM3YWZmNDMzMGJlMTg4OWQ5YS5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZWM3YWFiMWVjODdjNDI1MWFkMjhlYjU2NTg1MDhmODIpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNDY1NWUxNWZiOTRiNGQxYWFiNzk5MWJhMTMwZDViNzEuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzIyZWIwZTg1ZjJkMzRmYzdhZmY0MzMwYmUxODg5ZDlhKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV8yMWY1NzE5YTZhNGE0Y2FiOTI5MmQ2YWRjZWRmMjRhMS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF80NjU1ZTE1ZmI5NGI0ZDFhYWI3OTkxYmExMzBkNWI3MTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZUdyb3VwXzFjYTdiY2JlNjY5NDQ0YTJhMDc1NWNmNjkxNjcwMGMzLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNDU1YTI3N2FkODk0NDZjMGJkYWE0N2U3MWMzZjg0OTgpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzFjYTdiY2JlNjY5NDQ0YTJhMDc1NWNmNjkxNjcwMGMzLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfMWM3ODIwNDM2MTgxNDU2YjgyMDBmMDA2OTk2NmUzZmQpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzFjYTdiY2JlNjY5NDQ0YTJhMDc1NWNmNjkxNjcwMGMzLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfY2Y4YzlhMjUzMzE3NGM2M2ExZGY1OTNlMzBiYTMyZTMpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzFjYTdiY2JlNjY5NDQ0YTJhMDc1NWNmNjkxNjcwMGMzLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfMjFmNTcxOWE2YTRhNGNhYjkyOTJkNmFkY2VkZjI0YTEpO1xyXG5cclxuXHJcbnRlbXBsYXRlT3duZXIuSU5URVJOQUxfR2V0VmlzdWFsU3RhdGVHcm91cHMoKS5BZGQoVmlzdWFsU3RhdGVHcm91cF8xY2E3YmNiZTY2OTQ0NGEyYTA3NTVjZjY5MTY3MDBjMyk7XHJcblxyXG52YXIgQm9yZGVyXzYzOTFmMzQzMGY5MTQ3ZTk5MGFlNDIyYmI2NWNhZmM3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIklubmVyQm9yZGVyXCIsIEJvcmRlcl82MzkxZjM0MzBmOTE0N2U5OTBhZTQyMmJiNjVjYWZjNyk7XHJcbkJvcmRlcl82MzkxZjM0MzBmOTE0N2U5OTBhZTQyMmJiNjVjYWZjNy5OYW1lID0gXCJJbm5lckJvcmRlclwiO1xyXG5Cb3JkZXJfNjM5MWYzNDMwZjkxNDdlOTkwYWU0MjJiYjY1Y2FmYzcuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENvbnRlbnRQcmVzZW50ZXJfZmI5OGE0ZmYyNmI1NDExOTlhMTQ4ZmU3ZjI0YTkzMWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudFByZXNlbnRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbnRlbnRQcmVzZW50ZXJcIiwgQ29udGVudFByZXNlbnRlcl9mYjk4YTRmZjI2YjU0MTE5OWExNDhmZTdmMjRhOTMxZCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZmI5OGE0ZmYyNmI1NDExOTlhMTQ4ZmU3ZjI0YTkzMWQuTmFtZSA9IFwiQ29udGVudFByZXNlbnRlclwiO1xyXG52YXIgQmluZGluZ19lMmEzZTYwZGI2Y2U0YjAwYTlmNWMwNGM4ODc4MDhhNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lMmEzZTYwZGI2Y2U0YjAwYTlmNWMwNGM4ODc4MDhhNy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50VGVtcGxhdGVcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kMmM2MDdhZDQwZjg0OWIxOTVkYTA2YjViMzJjNmVkNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2QyYzYwN2FkNDBmODQ5YjE5NWRhMDZiNWIzMmM2ZWQ3Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2UyYTNlNjBkYjZjZTRiMDBhOWY1YzA0Yzg4NzgwOGE3LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZDJjNjA3YWQ0MGY4NDliMTk1ZGEwNmI1YjMyYzZlZDc7XHJcblxyXG5cclxuQmluZGluZ19lMmEzZTYwZGI2Y2U0YjAwYTlmNWMwNGM4ODc4MDhhNy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV82YjEzMDBlZjk1NGE0NmU2YjBiMjQyNmQzZjU0Mzg3NztcclxuXHJcbnZhciBCaW5kaW5nX2IyN2JlNWJmNWMxMTRhM2ZhZTM4ZjgyMGRhMzI1YjE5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2IyN2JlNWJmNWMxMTRhM2ZhZTM4ZjgyMGRhMzI1YjE5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lMTExZDIzMmRmYTk0NDg5OWI4OTllMjMzYjUyZmM2MCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2UxMTFkMjMyZGZhOTQ0ODk5Yjg5OWUyMzNiNTJmYzYwLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2IyN2JlNWJmNWMxMTRhM2ZhZTM4ZjgyMGRhMzI1YjE5LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZTExMWQyMzJkZmE5NDQ4OTliODk5ZTIzM2I1MmZjNjA7XHJcblxyXG5cclxuQmluZGluZ19iMjdiZTViZjVjMTE0YTNmYWUzOGY4MjBkYTMyNWIxOS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV82YjEzMDBlZjk1NGE0NmU2YjBiMjQyNmQzZjU0Mzg3NztcclxuXHJcbnZhciBCaW5kaW5nX2ZjOWI3NDA4YTFhZTQ4NDVhZTZiYjI5MWE0ZjQxMjY3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2ZjOWI3NDA4YTFhZTQ4NDVhZTZiYjI5MWE0ZjQxMjY3LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlBhZGRpbmdcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV80MTcwN2U5NjQ2Mzg0MDdjYWQ5YWFiYjRjNDU5MGU5YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzQxNzA3ZTk2NDYzODQwN2NhZDlhYWJiNGM0NTkwZTliLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2ZjOWI3NDA4YTFhZTQ4NDVhZTZiYjI5MWE0ZjQxMjY3LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNDE3MDdlOTY0NjM4NDA3Y2FkOWFhYmI0YzQ1OTBlOWI7XHJcblxyXG5cclxuQmluZGluZ19mYzliNzQwOGExYWU0ODQ1YWU2YmIyOTFhNGY0MTI2Ny5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV82YjEzMDBlZjk1NGE0NmU2YjBiMjQyNmQzZjU0Mzg3NztcclxuXHJcbnZhciBCaW5kaW5nX2FhNDA4ZDMyNTg2NTRkZTJhODA0MGE0NGVmODg4N2YwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2FhNDA4ZDMyNTg2NTRkZTJhODA0MGE0NGVmODg4N2YwLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkhvcml6b250YWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfY2Y2ZjFkYWVhMzA2NGI1MmI4NzMwZjA2OWEwNWY4YWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9jZjZmMWRhZWEzMDY0YjUyYjg3MzBmMDY5YTA1ZjhhYy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19hYTQwOGQzMjU4NjU0ZGUyYTgwNDBhNDRlZjg4ODdmMC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2NmNmYxZGFlYTMwNjRiNTJiODczMGYwNjlhMDVmOGFjO1xyXG5cclxuXHJcbkJpbmRpbmdfYWE0MDhkMzI1ODY1NGRlMmE4MDQwYTQ0ZWY4ODg3ZjAuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNmIxMzAwZWY5NTRhNDZlNmIwYjI0MjZkM2Y1NDM4Nzc7XHJcblxyXG52YXIgQmluZGluZ18yZTIwYmExMDlhMmY0Zjg4OTYwNjlmOTgyZjVmNTljZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18yZTIwYmExMDlhMmY0Zjg4OTYwNjlmOTgyZjVmNTljZC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJWZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV84YmJhN2Q0N2NiZTc0NTNmYTJmMjFjZDVkYmEzZmRiOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzhiYmE3ZDQ3Y2JlNzQ1M2ZhMmYyMWNkNWRiYTNmZGI5Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzJlMjBiYTEwOWEyZjRmODg5NjA2OWY5ODJmNWY1OWNkLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOGJiYTdkNDdjYmU3NDUzZmEyZjIxY2Q1ZGJhM2ZkYjk7XHJcblxyXG5cclxuQmluZGluZ18yZTIwYmExMDlhMmY0Zjg4OTYwNjlmOTgyZjVmNTljZC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV82YjEzMDBlZjk1NGE0NmU2YjBiMjQyNmQzZjU0Mzg3NztcclxuXHJcblxyXG5Cb3JkZXJfNjM5MWYzNDMwZjkxNDdlOTkwYWU0MjJiYjY1Y2FmYzcuQ2hpbGQgPSBDb250ZW50UHJlc2VudGVyX2ZiOThhNGZmMjZiNTQxMTk5YTE0OGZlN2YyNGE5MzFkO1xyXG5cclxudmFyIEJpbmRpbmdfMTRkOTk5MmIyOThmNGRhMmE5MDEwMzcxZTU3OGQ5NTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMTRkOTk5MmIyOThmNGRhMmE5MDEwMzcxZTU3OGQ5NTcuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2I5NWVhZjEzZjBlYzQ3M2U5ZjA1NTk0YmM1ODk4YjFkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYjk1ZWFmMTNmMGVjNDczZTlmMDU1OTRiYzU4OThiMWQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMTRkOTk5MmIyOThmNGRhMmE5MDEwMzcxZTU3OGQ5NTcuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9iOTVlYWYxM2YwZWM0NzNlOWYwNTU5NGJjNTg5OGIxZDtcclxuXHJcblxyXG5CaW5kaW5nXzE0ZDk5OTJiMjk4ZjRkYTJhOTAxMDM3MWU1NzhkOTU3LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzZiMTMwMGVmOTU0YTQ2ZTZiMGIyNDI2ZDNmNTQzODc3O1xyXG5cclxuXHJcbkJvcmRlcl85ODE3NzY1NTkyYWI0YzUzODgyM2FiMzI1ZGNhMDZmMy5DaGlsZCA9IEJvcmRlcl82MzkxZjM0MzBmOTE0N2U5OTBhZTQyMmJiNjVjYWZjNztcclxuXHJcbnZhciBCaW5kaW5nX2MzMzE5YzQ4NTFjYjQ5NzdiZTdmMmEzYjdlYjVjMzVlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2MzMzE5YzQ4NTFjYjQ5NzdiZTdmMmEzYjdlYjVjMzVlLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV80MjdiMzFjMGY1ZWI0YmYzYjQ4YjQ4ZmE4OTIwNzU3YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzQyN2IzMWMwZjVlYjRiZjNiNDhiNDhmYTg5MjA3NTdhLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2MzMzE5YzQ4NTFjYjQ5NzdiZTdmMmEzYjdlYjVjMzVlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNDI3YjMxYzBmNWViNGJmM2I0OGI0OGZhODkyMDc1N2E7XHJcblxyXG5cclxuQmluZGluZ19jMzMxOWM0ODUxY2I0OTc3YmU3ZjJhM2I3ZWI1YzM1ZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV82YjEzMDBlZjk1NGE0NmU2YjBiMjQyNmQzZjU0Mzg3NztcclxuXHJcbnZhciBCaW5kaW5nX2EzMDQ5MmUyNGU2ZTQ0MjY4ZmQxMGQ2MzJiYmI3OWM4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2EzMDQ5MmUyNGU2ZTQ0MjY4ZmQxMGQ2MzJiYmI3OWM4LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlckJydXNoXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZGUwNzU0YjYxZGNjNDM3MmEzNWI2MzEwNTBlZDgxZDcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kZTA3NTRiNjFkY2M0MzcyYTM1YjYzMTA1MGVkODFkNy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19hMzA0OTJlMjRlNmU0NDI2OGZkMTBkNjMyYmJiNzljOC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2RlMDc1NGI2MWRjYzQzNzJhMzViNjMxMDUwZWQ4MWQ3O1xyXG5cclxuXHJcbkJpbmRpbmdfYTMwNDkyZTI0ZTZlNDQyNjhmZDEwZDYzMmJiYjc5YzguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNmIxMzAwZWY5NTRhNDZlNmIwYjI0MjZkM2Y1NDM4Nzc7XHJcblxyXG52YXIgQmluZGluZ19lZGRkNmY5ZjdkZDM0MWJmOGZkMTVmNjFmNzQ2MDFkZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lZGRkNmY5ZjdkZDM0MWJmOGZkMTVmNjFmNzQ2MDFkZS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJUaGlja25lc3NcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lYmQ4ZjljNWUyNWM0NWZkYjcwNTlkZTVmZmQ0NTkzZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2ViZDhmOWM1ZTI1YzQ1ZmRiNzA1OWRlNWZmZDQ1OTNkLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2VkZGQ2ZjlmN2RkMzQxYmY4ZmQxNWY2MWY3NDYwMWRlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZWJkOGY5YzVlMjVjNDVmZGI3MDU5ZGU1ZmZkNDU5M2Q7XHJcblxyXG5cclxuQmluZGluZ19lZGRkNmY5ZjdkZDM0MWJmOGZkMTVmNjFmNzQ2MDFkZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV82YjEzMDBlZjk1NGE0NmU2YjBiMjQyNmQzZjU0Mzg3NztcclxuXHJcblxyXG5cclxuQ29udGVudFByZXNlbnRlcl9mYjk4YTRmZjI2YjU0MTE5OWExNDhmZTdmMjRhOTMxZC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRUZW1wbGF0ZVByb3BlcnR5LCBCaW5kaW5nX2UyYTNlNjBkYjZjZTRiMDBhOWY1YzA0Yzg4NzgwOGE3KTtcclxuQ29udGVudFByZXNlbnRlcl9mYjk4YTRmZjI2YjU0MTE5OWExNDhmZTdmMjRhOTMxZC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRQcm9wZXJ0eSwgQmluZGluZ19iMjdiZTViZjVjMTE0YTNmYWUzOGY4MjBkYTMyNWIxOSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZmI5OGE0ZmYyNmI1NDExOTlhMTQ4ZmU3ZjI0YTkzMWQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lk1hcmdpblByb3BlcnR5LCBCaW5kaW5nX2ZjOWI3NDA4YTFhZTQ4NDVhZTZiYjI5MWE0ZjQxMjY3KTtcclxuQ29udGVudFByZXNlbnRlcl9mYjk4YTRmZjI2YjU0MTE5OWExNDhmZTdmMjRhOTMxZC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuSG9yaXpvbnRhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nX2FhNDA4ZDMyNTg2NTRkZTJhODA0MGE0NGVmODg4N2YwKTtcclxuQ29udGVudFByZXNlbnRlcl9mYjk4YTRmZjI2YjU0MTE5OWExNDhmZTdmMjRhOTMxZC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuVmVydGljYWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ18yZTIwYmExMDlhMmY0Zjg4OTYwNjlmOTgyZjVmNTljZCk7XHJcbkJvcmRlcl82MzkxZjM0MzBmOTE0N2U5OTBhZTQyMmJiNjVjYWZjNy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfMTRkOTk5MmIyOThmNGRhMmE5MDEwMzcxZTU3OGQ5NTcpO1xyXG5Cb3JkZXJfOTgxNzc2NTU5MmFiNGM1Mzg4MjNhYjMyNWRjYTA2ZjMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2MzMzE5YzQ4NTFjYjQ5NzdiZTdmMmEzYjdlYjVjMzVlKTtcclxuQm9yZGVyXzk4MTc3NjU1OTJhYjRjNTM4ODIzYWIzMjVkY2EwNmYzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlckJydXNoUHJvcGVydHksIEJpbmRpbmdfYTMwNDkyZTI0ZTZlNDQyNjhmZDEwZDYzMmJiYjc5YzgpO1xyXG5Cb3JkZXJfOTgxNzc2NTU5MmFiNGM1Mzg4MjNhYjMyNWRjYTA2ZjMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyVGhpY2tuZXNzUHJvcGVydHksIEJpbmRpbmdfZWRkZDZmOWY3ZGQzNDFiZjhmZDE1ZjYxZjc0NjAxZGUpO1xyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTkyODhhZTM1NTNlNDJjZjgxNjlkYWIxYjc3MGQ4YzgsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZGUxZDU0YmVhZWVmNGU4Yzg4NDNhOTFlOGJjMzg2ZDksXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9kZTFkNTRiZWFlZWY0ZThjODg0M2E5MWU4YmMzODZkOSxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2RlMWQ1NGJlYWVlZjRlOGM4ODQzYTkxZThiYzM4NmQ5LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZGUxZDU0YmVhZWVmNGU4Yzg4NDNhOTFlOGJjMzg2ZDksXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9kZTFkNTRiZWFlZWY0ZThjODg0M2E5MWU4YmMzODZkOSkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTkyODhhZTM1NTNlNDJjZjgxNjlkYWIxYjc3MGQ4YzgsIEJvcmRlcl82MzkxZjM0MzBmOTE0N2U5OTBhZTQyMmJiNjVjYWZjNyk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzgyMWFhZjY5NWQxNDBmYWI2NWM2NTNjMmFjMjhkOWYsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMzViODQ0MTU3YzRlNGM4NjliNzZiNmNlYmUwYjY2OGQsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8zNWI4NDQxNTdjNGU0Yzg2OWI3NmI2Y2ViZTBiNjY4ZCxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzM1Yjg0NDE1N2M0ZTRjODY5Yjc2YjZjZWJlMGI2NjhkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMzViODQ0MTU3YzRlNGM4NjliNzZiNmNlYmUwYjY2OGQsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8zNWI4NDQxNTdjNGU0Yzg2OWI3NmI2Y2ViZTBiNjY4ZCkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzgyMWFhZjY5NWQxNDBmYWI2NWM2NTNjMmFjMjhkOWYsIEJvcmRlcl82MzkxZjM0MzBmOTE0N2U5OTBhZTQyMmJiNjVjYWZjNyk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMjJlYjBlODVmMmQzNGZjN2FmZjQzMzBiZTE4ODlkOWEsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZTUxOGRiOTIyOTdkNDg2NzgyMjZkZGU0NjBkNTZmYzIsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lNTE4ZGI5MjI5N2Q0ODY3ODIyNmRkZTQ2MGQ1NmZjMixcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2U1MThkYjkyMjk3ZDQ4Njc4MjI2ZGRlNDYwZDU2ZmMyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZTUxOGRiOTIyOTdkNDg2NzgyMjZkZGU0NjBkNTZmYzIsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lNTE4ZGI5MjI5N2Q0ODY3ODIyNmRkZTQ2MGQ1NmZjMikpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMjJlYjBlODVmMmQzNGZjN2FmZjQzMzBiZTE4ODlkOWEsIEJvcmRlcl82MzkxZjM0MzBmOTE0N2U5OTBhZTQyMmJiNjVjYWZjNyk7XHJcblxyXG50ZW1wbGF0ZUluc3RhbmNlXzZiMTMwMGVmOTU0YTQ2ZTZiMGIyNDI2ZDNmNTQzODc3LlRlbXBsYXRlQ29udGVudCA9IEJvcmRlcl85ODE3NzY1NTkyYWI0YzUzODgyM2FiMzI1ZGNhMDZmMztcclxucmV0dXJuIHRlbXBsYXRlSW5zdGFuY2VfNmIxMzAwZWY5NTRhNDZlNmIwYjI0MjZkM2Y1NDM4Nzc7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwiLy8gPENTSFRNTDU+PFhhbWxIYXNoPkFCRkUzMDUzNDJGRUYzOTkyRjQ2QTM5MDMyQjVBNTEzPC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTUuMDQuMjAyMCAxOToxODoxNDwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BQYWdlaG9tZceAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuUGFnZUhvbWUpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFBhZ2VIb21lIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50O1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0bkJlZ2luO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCBMYXlvdXRSb290O1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZUhvbWUueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfMGU5NWRkZDJiY2U0NDA5ZWJiMjc5ZDgwNGNjOTI1NTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dFJvb3RcIiwgR3JpZF8wZTk1ZGRkMmJjZTQ0MDllYmIyNzlkODA0Y2M5MjU1Myk7XHJcbkdyaWRfMGU5NWRkZDJiY2U0NDA5ZWJiMjc5ZDgwNGNjOTI1NTMuTmFtZSA9IFwiTGF5b3V0Um9vdFwiO1xyXG5HcmlkXzBlOTVkZGQyYmNlNDQwOWViYjI3OWQ4MDRjYzkyNTUzLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbnZhciBHcmlkX2U5Mzc0YzBiZGM1NTQzNjc4ZTkxM2NiOTliNzU3NDdlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfOGZkMGZlNjcxNTlkNGVlNjkzNmM0NjE2Njk1ODQzMzcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzhmZDBmZTY3MTU5ZDRlZTY5MzZjNDYxNjY5NTg0MzM3LkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOGZkMGZlNjcxNTlkNGVlNjkzNmM0NjE2Njk1ODQzMzcuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wX2ZlMzBhM2VkYzAyZDQ4YmFiZDhlZjYyMGMxY2I0YjI1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfZmUzMGEzZWRjMDJkNDhiYWJkOGVmNjIwYzFjYjRiMjUuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF9mZTMwYTNlZGMwMmQ0OGJhYmQ4ZWY2MjBjMWNiNGIyNS5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfZmM4MGZjYTI0OGU1NDJmZDg0YTBkMGIwMzU1NzQ2ZGYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9mYzgwZmNhMjQ4ZTU0MmZkODRhMGQwYjAzNTU3NDZkZi5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wX2ZjODBmY2EyNDhlNTQyZmQ4NGEwZDBiMDM1NTc0NmRmLk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF84ZmQwZmU2NzE1OWQ0ZWU2OTM2YzQ2MTY2OTU4NDMzNy5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfZmUzMGEzZWRjMDJkNDhiYWJkOGVmNjIwYzFjYjRiMjUpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzhmZDBmZTY3MTU5ZDRlZTY5MzZjNDYxNjY5NTg0MzM3LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9mYzgwZmNhMjQ4ZTU0MmZkODRhMGQwYjAzNTU3NDZkZik7XHJcblxyXG5cclxuR3JpZF9lOTM3NGMwYmRjNTU0MzY3OGU5MTNjYjk5Yjc1NzQ3ZS5CYWNrZ3JvdW5kID0gTGluZWFyR3JhZGllbnRCcnVzaF84ZmQwZmU2NzE1OWQ0ZWU2OTM2YzQ2MTY2OTU4NDMzNztcclxuXHJcbnZhciBCb3JkZXJfODRjZjQ0NjU2NWJkNDBhZWJkY2RkZjIzODIwYWI0NmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfODRjZjQ0NjU2NWJkNDBhZWJkY2RkZjIzODIwYWI0NmYpO1xyXG5Cb3JkZXJfODRjZjQ0NjU2NWJkNDBhZWJkY2RkZjIzODIwYWI0NmYuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfODRjZjQ0NjU2NWJkNDBhZWJkY2RkZjIzODIwYWI0NmYuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuQm9yZGVyXzg0Y2Y0NDY1NjViZDQwYWViZGNkZGYyMzgyMGFiNDZmLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMCwgRyA9IChieXRlKTAsIEIgPSAoYnl0ZSkxMzkgfSk7XHJcbkJvcmRlcl84NGNmNDQ2NTY1YmQ0MGFlYmRjZGRmMjM4MjBhYjQ2Zi5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfODRjZjQ0NjU2NWJkNDBhZWJkY2RkZjIzODIwYWI0NmYuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfZGQ0ZGRmZTZkZGQ1NDdmY2EyMGYxYzllZTRlYzIwYzEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2RkNGRkZmU2ZGRkNTQ3ZmNhMjBmMWM5ZWU0ZWMyMGMxLkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfZGQ0ZGRmZTZkZGQ1NDdmY2EyMGYxYzllZTRlYzIwYzEuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wXzU1NTk5MjE3ZDljYTRlNmFhNzUzYTI5ZjNlNTI3ZmU2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfNTU1OTkyMTdkOWNhNGU2YWE3NTNhMjlmM2U1MjdmZTYuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF81NTU5OTIxN2Q5Y2E0ZTZhYTc1M2EyOWYzZTUyN2ZlNi5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfNjhjZWY5ZjliZTcwNDY0YTg3YTc1YmM3OTgyZDMyN2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF82OGNlZjlmOWJlNzA0NjRhODdhNzViYzc5ODJkMzI3ZS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wXzY4Y2VmOWY5YmU3MDQ2NGE4N2E3NWJjNzk4MmQzMjdlLk9mZnNldCA9IDAuNTg5NkQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wXzI4ZjBlODY2YTRlNzRjNmJhNGViYjk4NDdjYmQyOTIxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfMjhmMGU4NjZhNGU3NGM2YmE0ZWJiOTg0N2NiZDI5MjEuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjQ2LCBHID0gKGJ5dGUpMjQ2LCBCID0gKGJ5dGUpMjQ2IH07XHJcbkdyYWRpZW50U3RvcF8yOGYwZTg2NmE0ZTc0YzZiYTRlYmI5ODQ3Y2JkMjkyMS5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfZGQ0ZGRmZTZkZGQ1NDdmY2EyMGYxYzllZTRlYzIwYzEuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzU1NTk5MjE3ZDljYTRlNmFhNzUzYTI5ZjNlNTI3ZmU2KTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9kZDRkZGZlNmRkZDU0N2ZjYTIwZjFjOWVlNGVjMjBjMS5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfNjhjZWY5ZjliZTcwNDY0YTg3YTc1YmM3OTgyZDMyN2UpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2RkNGRkZmU2ZGRkNTQ3ZmNhMjBmMWM5ZWU0ZWMyMGMxLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF8yOGYwZTg2NmE0ZTc0YzZiYTRlYmI5ODQ3Y2JkMjkyMSk7XHJcblxyXG5cclxuQm9yZGVyXzg0Y2Y0NDY1NjViZDQwYWViZGNkZGYyMzgyMGFiNDZmLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoX2RkNGRkZmU2ZGRkNTQ3ZmNhMjBmMWM5ZWU0ZWMyMGMxO1xyXG5cclxudmFyIFRyYW5zZm9ybUdyb3VwXzExM2FmNDYxMDZkMjQ4YTBhYTRkNWMxZTJkNmY2MGVkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlRyYW5zZm9ybUdyb3VwKCk7XHJcbnZhciBTY2FsZVRyYW5zZm9ybV9iNjlmNGRmMmNmNTM0N2IxYTc0ZDRiMTQ2NGFkMGU1ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5TY2FsZVRyYW5zZm9ybSgpO1xyXG5cclxudmFyIFJvdGF0ZVRyYW5zZm9ybV9hMDY4NzA4ODk1OTI0MmI2OTg2M2MxYWQzMDNlOWI3ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Sb3RhdGVUcmFuc2Zvcm0oKTtcclxuXHJcblRyYW5zZm9ybUdyb3VwXzExM2FmNDYxMDZkMjQ4YTBhYTRkNWMxZTJkNmY2MGVkLkNoaWxkcmVuLkFkZChTY2FsZVRyYW5zZm9ybV9iNjlmNGRmMmNmNTM0N2IxYTc0ZDRiMTQ2NGFkMGU1ZCk7XHJcblRyYW5zZm9ybUdyb3VwXzExM2FmNDYxMDZkMjQ4YTBhYTRkNWMxZTJkNmY2MGVkLkNoaWxkcmVuLkFkZChSb3RhdGVUcmFuc2Zvcm1fYTA2ODcwODg5NTkyNDJiNjk4NjNjMWFkMzAzZTliN2QpO1xyXG5cclxuXHJcbkJvcmRlcl84NGNmNDQ2NTY1YmQ0MGFlYmRjZGRmMjM4MjBhYjQ2Zi5SZW5kZXJUcmFuc2Zvcm0gPSBUcmFuc2Zvcm1Hcm91cF8xMTNhZjQ2MTA2ZDI0OGEwYWE0ZDVjMWUyZDZmNjBlZDtcclxuXHJcbnZhciBHcmlkX2I4MDcwMGQ5YTE1MDRkNjZhYzlkYWE3MTc3MDk5ZWFjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIENvbHVtbkRlZmluaXRpb25fMzRmYTlhNWExYmVkNGU3OGIxMjZlMjA5OTUyNWQ2OTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fODU1MjliYTQ3YzM1NDUxZjk2YzRjMzFiZTMyZjJmY2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fM2ZiODU1ZGRmMGZiNGM3Y2I1NDVmYWE0ZjE2OTdlNWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF9iODA3MDBkOWExNTA0ZDY2YWM5ZGFhNzE3NzA5OWVhYy5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl8zNGZhOWE1YTFiZWQ0ZTc4YjEyNmUyMDk5NTI1ZDY5MSk7XHJcbkdyaWRfYjgwNzAwZDlhMTUwNGQ2NmFjOWRhYTcxNzcwOTllYWMuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fODU1MjliYTQ3YzM1NDUxZjk2YzRjMzFiZTMyZjJmY2UpO1xyXG5HcmlkX2I4MDcwMGQ5YTE1MDRkNjZhYzlkYWE3MTc3MDk5ZWFjLkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzNmYjg1NWRkZjBmYjRjN2NiNTQ1ZmFhNGYxNjk3ZTVkKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2EwNTkyZTA5ZmNjYjRjZTc4OWNkYzM2MDAyMjNkMDEzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl9hMDU5MmUwOWZjY2I0Y2U3ODljZGMzNjAwMjIzZDAxMy5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9kODYzNmI2YTdlZmU0ODFmOTM3ZDliNzBkNjM5NjFjYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fZDg2MzZiNmE3ZWZlNDgxZjkzN2Q5YjcwZDYzOTYxY2EuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC41LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9iZmY5MjBjMWY2MTU0M2RkOGJjM2E4OWFkMWQ3MGZkOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fYmZmOTIwYzFmNjE1NDNkZDhiYzNhODlhZDFkNzBmZDguSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4yNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxuR3JpZF9iODA3MDBkOWExNTA0ZDY2YWM5ZGFhNzE3NzA5OWVhYy5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl9hMDU5MmUwOWZjY2I0Y2U3ODljZGMzNjAwMjIzZDAxMyk7XHJcbkdyaWRfYjgwNzAwZDlhMTUwNGQ2NmFjOWRhYTcxNzcwOTllYWMuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fZDg2MzZiNmE3ZWZlNDgxZjkzN2Q5YjcwZDYzOTYxY2EpO1xyXG5HcmlkX2I4MDcwMGQ5YTE1MDRkNjZhYzlkYWE3MTc3MDk5ZWFjLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2JmZjkyMGMxZjYxNTQzZGQ4YmMzYTg5YWQxZDcwZmQ4KTtcclxuXHJcbnZhciBJbWFnZV82YWQ0Mzk4MDlkYmM0ZGNkOTUwOTM1MGFjNGQzODM5NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5JbWFnZSgpO1xyXG5JbWFnZV82YWQ0Mzk4MDlkYmM0ZGNkOTUwOTM1MGFjNGQzODM5NS5Tb3VyY2UgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpZ2xvYmFsOjpEb3ROZXRGb3JIdG1sNS5Db3JlLlR5cGVGcm9tU3RyaW5nQ29udmVydGVycy5Db252ZXJ0RnJvbUludmFyaWFudFN0cmluZyh0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpLCBAXCIvQ1NodG1sO2NvbXBvbmVudC9pbWcvSG9tZUltYWdlLmpwZ1wiKTtcclxuSW1hZ2VfNmFkNDM5ODA5ZGJjNGRjZDk1MDkzNTBhYzRkMzgzOTUuU3RyZXRjaCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlN0cmV0Y2guVW5pZm9ybTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEltYWdlXzZhZDQzOTgwOWRiYzRkY2Q5NTA5MzUwYWM0ZDM4Mzk1LDMpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oSW1hZ2VfNmFkNDM5ODA5ZGJjNGRjZDk1MDkzNTBhYzRkMzgzOTUsMyk7XHJcblxyXG5HcmlkX2I4MDcwMGQ5YTE1MDRkNjZhYzlkYWE3MTc3MDk5ZWFjLkNoaWxkcmVuLkFkZChJbWFnZV82YWQ0Mzk4MDlkYmM0ZGNkOTUwOTM1MGFjNGQzODM5NSk7XHJcblxyXG5cclxuQm9yZGVyXzg0Y2Y0NDY1NjViZDQwYWViZGNkZGYyMzgyMGFiNDZmLkNoaWxkID0gR3JpZF9iODA3MDBkOWExNTA0ZDY2YWM5ZGFhNzE3NzA5OWVhYztcclxuXHJcblxyXG52YXIgQnV0dG9uX2EwZWVmZTFjZjlhNjRkZWE5YWM3ZGUxN2JkMzcyOThmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0bkJlZ2luXCIsIEJ1dHRvbl9hMGVlZmUxY2Y5YTY0ZGVhOWFjN2RlMTdiZDM3Mjk4Zik7XHJcbkJ1dHRvbl9hMGVlZmUxY2Y5YTY0ZGVhOWFjN2RlMTdiZDM3Mjk4Zi5OYW1lID0gXCJidG5CZWdpblwiO1xyXG5CdXR0b25fYTBlZWZlMWNmOWE2NGRlYTlhYzdkZTE3YmQzNzI5OGYuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fYTBlZWZlMWNmOWE2NGRlYTlhYzdkZTE3YmQzNzI5OGYuQ29udGVudCA9IEBcItCd0LDRh9Cw0YLRjCDRgNCw0LHQvtGC0YNcIjtcclxuQnV0dG9uX2EwZWVmZTFjZjlhNjRkZWE5YWM3ZGUxN2JkMzcyOThmLkZvbnRTaXplID0gMjVEO1xyXG5CdXR0b25fYTBlZWZlMWNmOWE2NGRlYTlhYzdkZTE3YmQzNzI5OGYuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTIzOCwgQiA9IChieXRlKTIzOCB9KTtcclxuQnV0dG9uX2EwZWVmZTFjZjlhNjRkZWE5YWM3ZGUxN2JkMzcyOThmLldpZHRoID0gMjgwRDtcclxuQnV0dG9uX2EwZWVmZTFjZjlhNjRkZWE5YWM3ZGUxN2JkMzcyOThmLkhlaWdodCA9IDUwRDtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2EwZWVmZTFjZjlhNjRkZWE5YWM3ZGUxN2JkMzcyOThmLDIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCdXR0b25fYTBlZWZlMWNmOWE2NGRlYTlhYzdkZTE3YmQzNzI5OGYsMSk7XHJcbkJ1dHRvbl9hMGVlZmUxY2Y5YTY0ZGVhOWFjN2RlMTdiZDM3Mjk4Zi5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbTtcclxuQnV0dG9uX2EwZWVmZTFjZjlhNjRkZWE5YWM3ZGUxN2JkMzcyOThmLkNsaWNrICs9IEJ1dHRvbl9DbGljaztcclxuQnV0dG9uX2EwZWVmZTFjZjlhNjRkZWE5YWM3ZGUxN2JkMzcyOThmLk1hcmdpbiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMCwgMCwgMCwgNTApO1xyXG5CdXR0b25fYTBlZWZlMWNmOWE2NGRlYTlhYzdkZTE3YmQzNzI5OGYuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV83N2FjYTFhYTcyN2Q0NjVjYWUwNjUwODY5MmQ3ODU3MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlXzc3YWNhMWFhNzI3ZDQ2NWNhZTA2NTA4NjkyZDc4NTcxLlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlXzc3YWNhMWFhNzI3ZDQ2NWNhZTA2NTA4NjkyZDc4NTcxLlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzc3YWNhMWFhNzI3ZDQ2NWNhZTA2NTA4NjkyZDc4NTcxKTtcclxuXHJcbkJ1dHRvbl9hMGVlZmUxY2Y5YTY0ZGVhOWFjN2RlMTdiZDM3Mjk4Zi5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV83N2FjYTFhYTcyN2Q0NjVjYWUwNjUwODY5MmQ3ODU3MTtcclxuXHJcblxyXG5HcmlkX2U5Mzc0YzBiZGM1NTQzNjc4ZTkxM2NiOTliNzU3NDdlLkNoaWxkcmVuLkFkZChCb3JkZXJfODRjZjQ0NjU2NWJkNDBhZWJkY2RkZjIzODIwYWI0NmYpO1xyXG5HcmlkX2U5Mzc0YzBiZGM1NTQzNjc4ZTkxM2NiOTliNzU3NDdlLkNoaWxkcmVuLkFkZChCdXR0b25fYTBlZWZlMWNmOWE2NGRlYTlhYzdkZTE3YmQzNzI5OGYpO1xyXG5cclxuXHJcbkdyaWRfMGU5NWRkZDJiY2U0NDA5ZWJiMjc5ZDgwNGNjOTI1NTMuQ2hpbGRyZW4uQWRkKEdyaWRfZTkzNzRjMGJkYzU1NDM2NzhlOTEzY2I5OWI3NTc0N2UpO1xyXG5cclxuXHJcbnRoaXMuQ29udGVudCA9IEdyaWRfMGU5NWRkZDJiY2U0NDA5ZWJiMjc5ZDgwNGNjOTI1NTM7XHJcblxyXG5cclxuXHJcbmVsZW1lbnQgPSBCb3JkZXJfODRjZjQ0NjU2NWJkNDBhZWJkY2RkZjIzODIwYWI0NmY7XHJcbmJ0bkJlZ2luID0gQnV0dG9uX2EwZWVmZTFjZjlhNjRkZWE5YWM3ZGUxN2JkMzcyOThmO1xyXG5MYXlvdXRSb290ID0gR3JpZF8wZTk1ZGRkMmJjZTQ0MDllYmIyNzlkODA0Y2M5MjU1MztcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzQwOGY4MDA0ZDZmMDQ1ZWRhMDY0N2NmNWFkOTBhNjA4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNDA4ZjgwMDRkNmYwNDVlZGEwNjQ3Y2Y1YWQ5MGE2MDggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV80MDhmODAwNGQ2ZjA0NWVkYTA2NDdjZjVhZDkwYTYwOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzQwOGY4MDA0ZDZmMDQ1ZWRhMDY0N2NmNWFkOTBhNjA4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV80MDhmODAwNGQ2ZjA0NWVkYTA2NDdjZjVhZDkwYTYwOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMWI2NGE0MGM2NDUyNDdhYzk2NTJjMWJlZWJjMWM4ZGEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8xYjY0YTQwYzY0NTI0N2FjOTY1MmMxYmVlYmMxYzhkYSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzFiNjRhNDBjNjQ1MjQ3YWM5NjUyYzFiZWViYzFjOGRhIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMWI2NGE0MGM2NDUyNDdhYzk2NTJjMWJlZWJjMWM4ZGEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzFiNjRhNDBjNjQ1MjQ3YWM5NjUyYzFiZWViYzFjOGRhIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9jYjJkNGFkOTc4MDE0ZmE5YjQ0YmVhZjU4MzAxODMyZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2NiMmQ0YWQ5NzgwMTRmYTliNDRiZWFmNTgzMDE4MzJmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfY2IyZDRhZDk3ODAxNGZhOWI0NGJlYWY1ODMwMTgzMmYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9jYjJkNGFkOTc4MDE0ZmE5YjQ0YmVhZjU4MzAxODMyZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfY2IyZDRhZDk3ODAxNGZhOWI0NGJlYWY1ODMwMTgzMmYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfNzdhY2ExYWE3MjdkNDY1Y2FlMDY1MDg2OTJkNzg1NzEoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfYjc3ZTdjNTUzYjFiNDI3ZDkxNTM5NzVjNjJjNmUwZTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlX2I3N2U3YzU1M2IxYjQyN2Q5MTUzOTc1YzYyYzZlMGUzLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyXzYxN2VmNmI3YzViODQyYTQ4ZWIwYTQ3OGMyMDQ2MDBjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl82MTdlZjZiN2M1Yjg0MmE0OGViMGE0NzhjMjA0NjAwYyk7XHJcbkJvcmRlcl82MTdlZjZiN2M1Yjg0MmE0OGViMGE0NzhjMjA0NjAwYy5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfNjE3ZWY2YjdjNWI4NDJhNDhlYjBhNDc4YzIwNDYwMGMuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfMzVkNTcyMmUzN2Q5NDE0N2E4ZTM1YmY0Y2Q1MTdmM2MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwXzM1ZDU3MjJlMzdkOTQxNDdhOGUzNWJmNGNkNTE3ZjNjKTtcclxuVmlzdWFsU3RhdGVHcm91cF8zNWQ1NzIyZTM3ZDk0MTQ3YThlMzViZjRjZDUxN2YzYy5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzgxMjE5ZWE4OTgxMzQ0MjU4OTg2ZTAwMmNkMzI4NTcyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzgxMjE5ZWE4OTgxMzQ0MjU4OTg2ZTAwMmNkMzI4NTcyKTtcclxuVmlzdWFsU3RhdGVfODEyMTllYTg5ODEzNDQyNTg5ODZlMDAyY2QzMjg1NzIuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfNzRiZmVjZGU1MzRjNGIxY2I5MmY3YzhkNmZhNjYxNmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV83NGJmZWNkZTUzNGM0YjFjYjkyZjdjOGQ2ZmE2NjE2Yik7XHJcblZpc3VhbFN0YXRlXzc0YmZlY2RlNTM0YzRiMWNiOTJmN2M4ZDZmYTY2MTZiLk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzRkZGYwYjI4MTU1YzQ0MWU4NTMwZmViMzJlMjM2OTIzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc184YWRjYzIwOWI0MTI0YWEyOWVjZmMyOThhMWM0ZGVjNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc184YWRjYzIwOWI0MTI0YWEyOWVjZmMyOThhMWM0ZGVjNyxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNDE1ODlkZTVkMTg4NGVlZmFiYjdkZDQ5ZGNlMjI3MWEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV80MTU4OWRlNWQxODg0ZWVmYWJiN2RkNDlkY2UyMjcxYS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzQxNTg5ZGU1ZDE4ODRlZWZhYmI3ZGQ0OWRjZTIyNzFhLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc184YWRjYzIwOWI0MTI0YWEyOWVjZmMyOThhMWM0ZGVjNy5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNDE1ODlkZTVkMTg4NGVlZmFiYjdkZDQ5ZGNlMjI3MWEpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNGRkZjBiMjgxNTVjNDQxZTg1MzBmZWIzMmUyMzY5MjMuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzhhZGNjMjA5YjQxMjRhYTI5ZWNmYzI5OGExYzRkZWM3KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV83NGJmZWNkZTUzNGM0YjFjYjkyZjdjOGQ2ZmE2NjE2Yi5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF80ZGRmMGIyODE1NWM0NDFlODUzMGZlYjMyZTIzNjkyMztcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMDlkNjgwMTJlNGMzNGRkMzgzZDg2ZDI5Mzk5N2QwNDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlXzA5ZDY4MDEyZTRjMzRkZDM4M2Q4NmQyOTM5OTdkMDQwKTtcclxuVmlzdWFsU3RhdGVfMDlkNjgwMTJlNGMzNGRkMzgzZDg2ZDI5Mzk5N2QwNDAuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF82MDZiOWY3NThhNzk0MDE0YWY4ODdkYjU2N2M0MmRlZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYzcxZmFjYmQ5NWFiNGI5OWI3MzllMzIxNThhZDk2M2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYzcxZmFjYmQ5NWFiNGI5OWI3MzllMzIxNThhZDk2M2UsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2M3NTg5NTM2NDYwNjQzYzM4NmRiZjFkYmU3NWZkMzViID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYzc1ODk1MzY0NjA2NDNjMzg2ZGJmMWRiZTc1ZmQzNWIuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9jNzU4OTUzNjQ2MDY0M2MzODZkYmYxZGJlNzVmZDM1Yi5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYzcxZmFjYmQ5NWFiNGI5OWI3MzllMzIxNThhZDk2M2UuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2M3NTg5NTM2NDYwNjQzYzM4NmRiZjFkYmU3NWZkMzViKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzYwNmI5Zjc1OGE3OTQwMTRhZjg4N2RiNTY3YzQyZGVlLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jNzFmYWNiZDk1YWI0Yjk5YjczOWUzMjE1OGFkOTYzZSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMDlkNjgwMTJlNGMzNGRkMzgzZDg2ZDI5Mzk5N2QwNDAuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfNjA2YjlmNzU4YTc5NDAxNGFmODg3ZGI1NjdjNDJkZWU7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzRhNWNkMmM2ZTRkNzQ4ODE4YzQyOTRmZmMyMjhiMWNhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfNGE1Y2QyYzZlNGQ3NDg4MThjNDI5NGZmYzIyOGIxY2EpO1xyXG5WaXN1YWxTdGF0ZV80YTVjZDJjNmU0ZDc0ODgxOGM0Mjk0ZmZjMjI4YjFjYS5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF8xM2Q0NmQ0NDYwZDA0YWRjOGIyMTA4YmJkNTI3ZjgyMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzkyOWIyNjgxY2IwNDFjYThjZmEyOWNmNWU1ODJmMjcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzkyOWIyNjgxY2IwNDFjYThjZmEyOWNmNWU1ODJmMjcsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzRlYWE5YjVhOGNmMjQ2NGViNWM4MWI3NzA3MjE3MjUxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNGVhYTliNWE4Y2YyNDY0ZWI1YzgxYjc3MDcyMTcyNTEuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV80ZWFhOWI1YThjZjI0NjRlYjVjODFiNzcwNzIxNzI1MS5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzkyOWIyNjgxY2IwNDFjYThjZmEyOWNmNWU1ODJmMjcuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzRlYWE5YjVhOGNmMjQ2NGViNWM4MWI3NzA3MjE3MjUxKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzEzZDQ2ZDQ0NjBkMDRhZGM4YjIxMDhiYmQ1MjdmODIyLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183OTI5YjI2ODFjYjA0MWNhOGNmYTI5Y2Y1ZTU4MmYyNyk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNGE1Y2QyYzZlNGQ3NDg4MThjNDI5NGZmYzIyOGIxY2EuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfMTNkNDZkNDQ2MGQwNGFkYzhiMjEwOGJiZDUyN2Y4MjI7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF8zNWQ1NzIyZTM3ZDk0MTQ3YThlMzViZjRjZDUxN2YzYy5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzgxMjE5ZWE4OTgxMzQ0MjU4OTg2ZTAwMmNkMzI4NTcyKTtcclxuVmlzdWFsU3RhdGVHcm91cF8zNWQ1NzIyZTM3ZDk0MTQ3YThlMzViZjRjZDUxN2YzYy5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzc0YmZlY2RlNTM0YzRiMWNiOTJmN2M4ZDZmYTY2MTZiKTtcclxuVmlzdWFsU3RhdGVHcm91cF8zNWQ1NzIyZTM3ZDk0MTQ3YThlMzViZjRjZDUxN2YzYy5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzA5ZDY4MDEyZTRjMzRkZDM4M2Q4NmQyOTM5OTdkMDQwKTtcclxuVmlzdWFsU3RhdGVHcm91cF8zNWQ1NzIyZTM3ZDk0MTQ3YThlMzViZjRjZDUxN2YzYy5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzRhNWNkMmM2ZTRkNzQ4ODE4YzQyOTRmZmMyMjhiMWNhKTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfMzVkNTcyMmUzN2Q5NDE0N2E4ZTM1YmY0Y2Q1MTdmM2MpO1xyXG5cclxudmFyIEJvcmRlcl9kNGNlMDkxNWQ4OTY0Yzg0YTg0M2VjZWRlZmQyYWU0NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfZDRjZTA5MTVkODk2NGM4NGE4NDNlY2VkZWZkMmFlNDUpO1xyXG5Cb3JkZXJfZDRjZTA5MTVkODk2NGM4NGE4NDNlY2VkZWZkMmFlNDUuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyX2Q0Y2UwOTE1ZDg5NjRjODRhODQzZWNlZGVmZDJhZTQ1LkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyX2JhYmMwOTk4M2Q1ZTRhN2ZiYjcwYWVmYjkzZjAzNGNiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfYmFiYzA5OTgzZDVlNGE3ZmJiNzBhZWZiOTNmMDM0Y2IpO1xyXG5Db250ZW50UHJlc2VudGVyX2JhYmMwOTk4M2Q1ZTRhN2ZiYjcwYWVmYjkzZjAzNGNiLk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfOTNmN2NmNmQ1ODAzNGY2OWE1NDFhMGI3NDg2NDg4YTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOTNmN2NmNmQ1ODAzNGY2OWE1NDFhMGI3NDg2NDg4YTkuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZDkwZTE5NDc5ODk4NGU4Y2EzOTlmYjgwZWViODAwZmMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kOTBlMTk0Nzk4OTg0ZThjYTM5OWZiODBlZWI4MDBmYy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185M2Y3Y2Y2ZDU4MDM0ZjY5YTU0MWEwYjc0ODY0ODhhOS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2Q5MGUxOTQ3OTg5ODRlOGNhMzk5ZmI4MGVlYjgwMGZjO1xyXG5cclxuXHJcbkJpbmRpbmdfOTNmN2NmNmQ1ODAzNGY2OWE1NDFhMGI3NDg2NDg4YTkuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYjc3ZTdjNTUzYjFiNDI3ZDkxNTM5NzVjNjJjNmUwZTM7XHJcblxyXG52YXIgQmluZGluZ19lNDk0NmJmOThhNDk0ZGJiODg2YzJhYTE1MWU2MjM0ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lNDk0NmJmOThhNDk0ZGJiODg2YzJhYTE1MWU2MjM0ZC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZGI4OWFjZTgxMDRlNDkxMmE0Y2VlZmI4YWQxNGNkYjggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kYjg5YWNlODEwNGU0OTEyYTRjZWVmYjhhZDE0Y2RiOC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lNDk0NmJmOThhNDk0ZGJiODg2YzJhYTE1MWU2MjM0ZC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2RiODlhY2U4MTA0ZTQ5MTJhNGNlZWZiOGFkMTRjZGI4O1xyXG5cclxuXHJcbkJpbmRpbmdfZTQ5NDZiZjk4YTQ5NGRiYjg4NmMyYWExNTFlNjIzNGQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYjc3ZTdjNTUzYjFiNDI3ZDkxNTM5NzVjNjJjNmUwZTM7XHJcblxyXG52YXIgQmluZGluZ19jODA0N2Q0ZTNkMGU0ZjEwYmQ0MjQ5MjNhNzZhZjE0MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19jODA0N2Q0ZTNkMGU0ZjEwYmQ0MjQ5MjNhNzZhZjE0Mi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNjU2NTllZTRmNTM1NDE0NTlmN2M2NDAyYmYxZTRhZWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82NTY1OWVlNGY1MzU0MTQ1OWY3YzY0MDJiZjFlNGFlZC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jODA0N2Q0ZTNkMGU0ZjEwYmQ0MjQ5MjNhNzZhZjE0Mi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzY1NjU5ZWU0ZjUzNTQxNDU5ZjdjNjQwMmJmMWU0YWVkO1xyXG5cclxuXHJcbkJpbmRpbmdfYzgwNDdkNGUzZDBlNGYxMGJkNDI0OTIzYTc2YWYxNDIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYjc3ZTdjNTUzYjFiNDI3ZDkxNTM5NzVjNjJjNmUwZTM7XHJcblxyXG52YXIgQmluZGluZ19jY2ZlYTQ5ZWY5Mjc0M2U1OGJiMzY3NThlMmY4Nzc3NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19jY2ZlYTQ5ZWY5Mjc0M2U1OGJiMzY3NThlMmY4Nzc3NS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2FmZmI1N2Q0ODQ5MDQxYjg5OGM2NmFmODkzZDEyZDA0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYWZmYjU3ZDQ4NDkwNDFiODk4YzY2YWY4OTNkMTJkMDQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfY2NmZWE0OWVmOTI3NDNlNThiYjM2NzU4ZTJmODc3NzUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9hZmZiNTdkNDg0OTA0MWI4OThjNjZhZjg5M2QxMmQwNDtcclxuXHJcblxyXG5CaW5kaW5nX2NjZmVhNDllZjkyNzQzZTU4YmIzNjc1OGUyZjg3Nzc1LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2I3N2U3YzU1M2IxYjQyN2Q5MTUzOTc1YzYyYzZlMGUzO1xyXG5cclxudmFyIEJpbmRpbmdfZTAxMTNlYmNhYTM4NGRiNzg0MmExNzY3OGRkMDNlYzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZTAxMTNlYmNhYTM4NGRiNzg0MmExNzY3OGRkMDNlYzYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYjExZDNjMzc0MWQwNGUxMmEwNTU2M2RjMDJlMGNlNWEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9iMTFkM2MzNzQxZDA0ZTEyYTA1NTYzZGMwMmUwY2U1YS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lMDExM2ViY2FhMzg0ZGI3ODQyYTE3Njc4ZGQwM2VjNi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2IxMWQzYzM3NDFkMDRlMTJhMDU1NjNkYzAyZTBjZTVhO1xyXG5cclxuXHJcbkJpbmRpbmdfZTAxMTNlYmNhYTM4NGRiNzg0MmExNzY3OGRkMDNlYzYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYjc3ZTdjNTUzYjFiNDI3ZDkxNTM5NzVjNjJjNmUwZTM7XHJcblxyXG5cclxuQm9yZGVyX2Q0Y2UwOTE1ZDg5NjRjODRhODQzZWNlZGVmZDJhZTQ1LkNoaWxkID0gQ29udGVudFByZXNlbnRlcl9iYWJjMDk5ODNkNWU0YTdmYmI3MGFlZmI5M2YwMzRjYjtcclxuXHJcbnZhciBCaW5kaW5nX2ZkNTg2NzRlMWE4MjRjNjQ4YjM3MjQwNTc5ZjU5MjVlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2ZkNTg2NzRlMWE4MjRjNjQ4YjM3MjQwNTc5ZjU5MjVlLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV85YWRkOTRlZDdiMmY0OWNhOGViOGM0ODA4Y2ZjNTYwZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzlhZGQ5NGVkN2IyZjQ5Y2E4ZWI4YzQ4MDhjZmM1NjBmLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2ZkNTg2NzRlMWE4MjRjNjQ4YjM3MjQwNTc5ZjU5MjVlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOWFkZDk0ZWQ3YjJmNDljYThlYjhjNDgwOGNmYzU2MGY7XHJcblxyXG5cclxuQmluZGluZ19mZDU4Njc0ZTFhODI0YzY0OGIzNzI0MDU3OWY1OTI1ZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9iNzdlN2M1NTNiMWI0MjdkOTE1Mzk3NWM2MmM2ZTBlMztcclxuXHJcblxyXG5Cb3JkZXJfNjE3ZWY2YjdjNWI4NDJhNDhlYjBhNDc4YzIwNDYwMGMuQ2hpbGQgPSBCb3JkZXJfZDRjZTA5MTVkODk2NGM4NGE4NDNlY2VkZWZkMmFlNDU7XHJcblxyXG52YXIgQmluZGluZ181YmFhODZiZGRlNjI0MDVkODI4NTVlNGM0MDFjY2JkZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ181YmFhODZiZGRlNjI0MDVkODI4NTVlNGM0MDFjY2JkZC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOGQwNDk0ZjkxNWUxNDI0OWFhY2Q3ZjdhNTZiZjRkN2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV84ZDA0OTRmOTE1ZTE0MjQ5YWFjZDdmN2E1NmJmNGQ3ZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ181YmFhODZiZGRlNjI0MDVkODI4NTVlNGM0MDFjY2JkZC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzhkMDQ5NGY5MTVlMTQyNDlhYWNkN2Y3YTU2YmY0ZDdlO1xyXG5cclxuXHJcbkJpbmRpbmdfNWJhYTg2YmRkZTYyNDA1ZDgyODU1ZTRjNDAxY2NiZGQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYjc3ZTdjNTUzYjFiNDI3ZDkxNTM5NzVjNjJjNmUwZTM7XHJcblxyXG52YXIgQmluZGluZ19mY2Q0NzZjYzg3NmU0MjQ5YTZhOTYyZDZlN2NhZmMzNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19mY2Q0NzZjYzg3NmU0MjQ5YTZhOTYyZDZlN2NhZmMzNy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzg5ZmFjNGVkZDdkYjRmZTJiMGZhYmQ3NDg3MzBiMjg3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfODlmYWM0ZWRkN2RiNGZlMmIwZmFiZDc0ODczMGIyODcuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZmNkNDc2Y2M4NzZlNDI0OWE2YTk2MmQ2ZTdjYWZjMzcuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV84OWZhYzRlZGQ3ZGI0ZmUyYjBmYWJkNzQ4NzMwYjI4NztcclxuXHJcblxyXG5CaW5kaW5nX2ZjZDQ3NmNjODc2ZTQyNDlhNmE5NjJkNmU3Y2FmYzM3LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2I3N2U3YzU1M2IxYjQyN2Q5MTUzOTc1YzYyYzZlMGUzO1xyXG5cclxudmFyIEJpbmRpbmdfMzJmOGVmYzExNjRjNGNiZDk2NjYwN2ExYzY4MjI5YjMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMzJmOGVmYzExNjRjNGNiZDk2NjYwN2ExYzY4MjI5YjMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNWM5NzkyNmNjZDdlNDM5ZDg1ZTM5Njk3ZjljZWRjOTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV81Yzk3OTI2Y2NkN2U0MzlkODVlMzk2OTdmOWNlZGM5Ni5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18zMmY4ZWZjMTE2NGM0Y2JkOTY2NjA3YTFjNjgyMjliMy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzVjOTc5MjZjY2Q3ZTQzOWQ4NWUzOTY5N2Y5Y2VkYzk2O1xyXG5cclxuXHJcbkJpbmRpbmdfMzJmOGVmYzExNjRjNGNiZDk2NjYwN2ExYzY4MjI5YjMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYjc3ZTdjNTUzYjFiNDI3ZDkxNTM5NzVjNjJjNmUwZTM7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfYmFiYzA5OTgzZDVlNGE3ZmJiNzBhZWZiOTNmMDM0Y2IuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ185M2Y3Y2Y2ZDU4MDM0ZjY5YTU0MWEwYjc0ODY0ODhhOSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYmFiYzA5OTgzZDVlNGE3ZmJiNzBhZWZiOTNmMDM0Y2IuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfZTQ5NDZiZjk4YTQ5NGRiYjg4NmMyYWExNTFlNjIzNGQpO1xyXG5Db250ZW50UHJlc2VudGVyX2JhYmMwOTk4M2Q1ZTRhN2ZiYjcwYWVmYjkzZjAzNGNiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ19jODA0N2Q0ZTNkMGU0ZjEwYmQ0MjQ5MjNhNzZhZjE0Mik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYmFiYzA5OTgzZDVlNGE3ZmJiNzBhZWZiOTNmMDM0Y2IuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19jY2ZlYTQ5ZWY5Mjc0M2U1OGJiMzY3NThlMmY4Nzc3NSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYmFiYzA5OTgzZDVlNGE3ZmJiNzBhZWZiOTNmMDM0Y2IuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfZTAxMTNlYmNhYTM4NGRiNzg0MmExNzY3OGRkMDNlYzYpO1xyXG5Cb3JkZXJfZDRjZTA5MTVkODk2NGM4NGE4NDNlY2VkZWZkMmFlNDUuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2ZkNTg2NzRlMWE4MjRjNjQ4YjM3MjQwNTc5ZjU5MjVlKTtcclxuQm9yZGVyXzYxN2VmNmI3YzViODQyYTQ4ZWIwYTQ3OGMyMDQ2MDBjLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ181YmFhODZiZGRlNjI0MDVkODI4NTVlNGM0MDFjY2JkZCk7XHJcbkJvcmRlcl82MTdlZjZiN2M1Yjg0MmE0OGViMGE0NzhjMjA0NjAwYy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nX2ZjZDQ3NmNjODc2ZTQyNDlhNmE5NjJkNmU3Y2FmYzM3KTtcclxuQm9yZGVyXzYxN2VmNmI3YzViODQyYTQ4ZWIwYTQ3OGMyMDQ2MDBjLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nXzMyZjhlZmMxMTY0YzRjYmQ5NjY2MDdhMWM2ODIyOWIzKTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzhhZGNjMjA5YjQxMjRhYTI5ZWNmYzI5OGExYzRkZWM3LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzQwOGY4MDA0ZDZmMDQ1ZWRhMDY0N2NmNWFkOTBhNjA4LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNDA4ZjgwMDRkNmYwNDVlZGEwNjQ3Y2Y1YWQ5MGE2MDgsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV80MDhmODAwNGQ2ZjA0NWVkYTA2NDdjZjVhZDkwYTYwOCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzQwOGY4MDA0ZDZmMDQ1ZWRhMDY0N2NmNWFkOTBhNjA4LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNDA4ZjgwMDRkNmYwNDVlZGEwNjQ3Y2Y1YWQ5MGE2MDgpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzhhZGNjMjA5YjQxMjRhYTI5ZWNmYzI5OGExYzRkZWM3LCBCb3JkZXJfZDRjZTA5MTVkODk2NGM4NGE4NDNlY2VkZWZkMmFlNDUpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2M3MWZhY2JkOTVhYjRiOTliNzM5ZTMyMTU4YWQ5NjNlLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzFiNjRhNDBjNjQ1MjQ3YWM5NjUyYzFiZWViYzFjOGRhLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMWI2NGE0MGM2NDUyNDdhYzk2NTJjMWJlZWJjMWM4ZGEsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8xYjY0YTQwYzY0NTI0N2FjOTY1MmMxYmVlYmMxYzhkYSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzFiNjRhNDBjNjQ1MjQ3YWM5NjUyYzFiZWViYzFjOGRhLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMWI2NGE0MGM2NDUyNDdhYzk2NTJjMWJlZWJjMWM4ZGEpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2M3MWZhY2JkOTVhYjRiOTliNzM5ZTMyMTU4YWQ5NjNlLCBCb3JkZXJfZDRjZTA5MTVkODk2NGM4NGE4NDNlY2VkZWZkMmFlNDUpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzc5MjliMjY4MWNiMDQxY2E4Y2ZhMjljZjVlNTgyZjI3LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2NiMmQ0YWQ5NzgwMTRmYTliNDRiZWFmNTgzMDE4MzJmLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfY2IyZDRhZDk3ODAxNGZhOWI0NGJlYWY1ODMwMTgzMmYsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9jYjJkNGFkOTc4MDE0ZmE5YjQ0YmVhZjU4MzAxODMyZiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2NiMmQ0YWQ5NzgwMTRmYTliNDRiZWFmNTgzMDE4MzJmLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfY2IyZDRhZDk3ODAxNGZhOWI0NGJlYWY1ODMwMTgzMmYpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzc5MjliMjY4MWNiMDQxY2E4Y2ZhMjljZjVlNTgyZjI3LCBCb3JkZXJfZDRjZTA5MTVkODk2NGM4NGE4NDNlY2VkZWZkMmFlNDUpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV9iNzdlN2M1NTNiMWI0MjdkOTE1Mzk3NWM2MmM2ZTBlMy5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfNjE3ZWY2YjdjNWI4NDJhNDhlYjBhNDc4YzIwNDYwMGM7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlX2I3N2U3YzU1M2IxYjQyN2Q5MTUzOTc1YzYyYzZlMGUzO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD43MjAyQkE0OUVBN0RDMDVCNkI5QTYyMkVGNjRCMDlDRDwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgMTk6MTg6MTQ8L0NvbXBpbGF0aW9uRGF0ZT48L0NTSFRNTDU+XHJcblxyXG5cclxuXHJcbnB1YmxpYyBzdGF0aWMgY2xhc3Mgx4DHgENzaHRtbMeAx4BDb21wb25lbnTHgMeAUGFnZXVwbG9hZMeAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuUGFnZVVwbG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5UeXBlSW5zdGFudGlhdGlvbkhlbHBlci5JbnN0YW50aWF0ZSh0eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBhdXRvLWdlbmVyYXRlZCBieSBcIkMjL1hBTUwgZm9yIEhUTUw1XCJcclxuLy9cclxuLy8gICAgIENoYW5nZXMgdG8gdGhpcyBmaWxlIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IgYW5kIHdpbGwgYmUgbG9zdCBpZlxyXG4vLyAgICAgdGhlIGNvZGUgaXMgcmVnZW5lcmF0ZWQuXHJcbi8vIDwvYXV0by1nZW5lcmF0ZWQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbnBhcnRpYWwgY2xhc3MgUGFnZVVwbG9hZCA6IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlBhZ2Vcclxue1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMTY5LCA2NDksIDA2MjggLy8gUHJldmVudHMgd2FybmluZyBDUzAxNjkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgdXNlZCcpLCBDUzA2NDkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgYXNzaWduZWQgdG8sIGFuZCB3aWxsIGFsd2F5cyBoYXZlIGl0cyBkZWZhdWx0IHZhbHVlIG51bGwnKSwgYW5kIENTMDYyOCAoJ21lbWJlciA6IG5ldyBwcm90ZWN0ZWQgbWVtYmVyIGRlY2xhcmVkIGluIHNlYWxlZCBjbGFzcycpXHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24gYnRuQ2FuY2VsO1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZVVwbG9hZC54YW1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMDE4NFxyXG5cclxuXHJcblxyXG52YXIgR3JpZF85YWRjNmZiYjEwOWY0N2M2ODY3ZjkzNjQxYjBiNWRhZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkKCk7XHJcbnZhciBSb3dEZWZpbml0aW9uXzBkMDY1NjFlOTJjYjRhOTg4Y2EzM2YyZTMxMzRkMmQ0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzgyNTFlN2I2MjNjNDRiM2FhNDU2MDI3YzhhZTIyNTEyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2UxMmM5NTAyZGY4NTRjNGM5NjM2MmZhMzkwNGJlZTlkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzI1NjcyYzE1ZTUzODQ3MmY4OGNjNzJjNzc0NDc3OWU4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbkdyaWRfOWFkYzZmYmIxMDlmNDdjNjg2N2Y5MzY0MWIwYjVkYWYuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMGQwNjU2MWU5MmNiNGE5ODhjYTMzZjJlMzEzNGQyZDQpO1xyXG5HcmlkXzlhZGM2ZmJiMTA5ZjQ3YzY4NjdmOTM2NDFiMGI1ZGFmLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzgyNTFlN2I2MjNjNDRiM2FhNDU2MDI3YzhhZTIyNTEyKTtcclxuR3JpZF85YWRjNmZiYjEwOWY0N2M2ODY3ZjkzNjQxYjBiNWRhZi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl9lMTJjOTUwMmRmODU0YzRjOTYzNjJmYTM5MDRiZWU5ZCk7XHJcbkdyaWRfOWFkYzZmYmIxMDlmNDdjNjg2N2Y5MzY0MWIwYjVkYWYuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMjU2NzJjMTVlNTM4NDcyZjg4Y2M3MmM3NzQ0Nzc5ZTgpO1xyXG5cclxudmFyIEJvcmRlcl9lNmFhY2YyYmZiZWU0NDBlYjAyYjU3MmFiZTE1ZTNlYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxuQm9yZGVyX2U2YWFjZjJiZmJlZTQ0MGViMDJiNTcyYWJlMTVlM2ViLlZlcnRpY2FsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmVydGljYWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfZTZhYWNmMmJmYmVlNDQwZWIwMmI1NzJhYmUxNWUzZWIsMCk7XHJcbnZhciBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfOThjYTk2MzkwNzQxNDMyZGI4M2I0Yjg3M2U5YWJkNGYgPSBuZXcgZ2xvYmFsOjpDU0hUTUw1LkV4dGVuc2lvbnMuRmlsZU9wZW5EaWFsb2cuQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlbkRpYWxvZygpO1xyXG5Db250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfOThjYTk2MzkwNzQxNDMyZGI4M2I0Yjg3M2U5YWJkNGYuRmlsZU9wZW5lZCArPSBPbkZpbGVPcGVuZWQ7XHJcbkNvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV85OGNhOTYzOTA3NDE0MzJkYjgzYjRiODczZTlhYmQ0Zi5GaWx0ZXIgPSBAXCIqLmpzb24sKi50eHRcIjtcclxuQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlXzk4Y2E5NjM5MDc0MTQzMmRiODNiNGI4NzNlOWFiZDRmLlJlc3VsdEtpbmQgPSBnbG9iYWw6OkNTSFRNTDUuRXh0ZW5zaW9ucy5GaWxlT3BlbkRpYWxvZy5SZXN1bHRLaW5kLlRleHQ7XHJcblxyXG5Cb3JkZXJfZTZhYWNmMmJmYmVlNDQwZWIwMmI1NzJhYmUxNWUzZWIuQ2hpbGQgPSBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfOThjYTk2MzkwNzQxNDMyZGI4M2I0Yjg3M2U5YWJkNGY7XHJcblxyXG5cclxudmFyIEJ1dHRvbl9mNDM1Y2YyZDIzOTQ0YzZiODcxNTZiNWYxYjkyOGIxMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuQnV0dG9uX2Y0MzVjZjJkMjM5NDRjNmI4NzE1NmI1ZjFiOTI4YjEyLkNvbnRlbnQgPSBAXCLQn9GA0LXQtNGL0LTRg9GJ0LDRjyDRgdGC0YDQsNC90LjRhtCwXCI7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuQ2FuY2VsXCIsIEJ1dHRvbl9mNDM1Y2YyZDIzOTQ0YzZiODcxNTZiNWYxYjkyOGIxMik7XHJcbkJ1dHRvbl9mNDM1Y2YyZDIzOTQ0YzZiODcxNTZiNWYxYjkyOGIxMi5OYW1lID0gXCJidG5DYW5jZWxcIjtcclxuQnV0dG9uX2Y0MzVjZjJkMjM5NDRjNmI4NzE1NmI1ZjFiOTI4YjEyLkNsaWNrICs9IEJ0bkNhbmNlbF9DbGljaztcclxuQnV0dG9uX2Y0MzVjZjJkMjM5NDRjNmI4NzE1NmI1ZjFiOTI4YjEyLldpZHRoID0gMjUwRDtcclxuQnV0dG9uX2Y0MzVjZjJkMjM5NDRjNmI4NzE1NmI1ZjFiOTI4YjEyLkhlaWdodCA9IDUwRDtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2Y0MzVjZjJkMjM5NDRjNmI4NzE1NmI1ZjFiOTI4YjEyLDEpO1xyXG5CdXR0b25fZjQzNWNmMmQyMzk0NGM2Yjg3MTU2YjVmMWI5MjhiMTIuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI0OSwgRyA9IChieXRlKTIyMiwgQiA9IChieXRlKTI0MiB9KTtcclxuQnV0dG9uX2Y0MzVjZjJkMjM5NDRjNmI4NzE1NmI1ZjFiOTI4YjEyLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl9mNDM1Y2YyZDIzOTQ0YzZiODcxNTZiNWYxYjkyOGIxMi5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uX2Y0MzVjZjJkMjM5NDRjNmI4NzE1NmI1ZjFiOTI4YjEyLlZlcnRpY2FsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmVydGljYWxBbGlnbm1lbnQuQm90dG9tO1xyXG5CdXR0b25fZjQzNWNmMmQyMzk0NGM2Yjg3MTU2YjVmMWI5MjhiMTIuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fZjQzNWNmMmQyMzk0NGM2Yjg3MTU2YjVmMWI5MjhiMTIuRm9udFNpemUgPSAyMEQ7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfNDc5MGY4YTBmZjBlNDNkNmEzMjM4NDYwZDNhYWQ2ZTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV80NzkwZjhhMGZmMGU0M2Q2YTMyMzg0NjBkM2FhZDZlMi5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV80NzkwZjhhMGZmMGU0M2Q2YTMyMzg0NjBkM2FhZDZlMi5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV80NzkwZjhhMGZmMGU0M2Q2YTMyMzg0NjBkM2FhZDZlMik7XHJcblxyXG5CdXR0b25fZjQzNWNmMmQyMzk0NGM2Yjg3MTU2YjVmMWI5MjhiMTIuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfNDc5MGY4YTBmZjBlNDNkNmEzMjM4NDYwZDNhYWQ2ZTI7XHJcblxyXG5cclxuR3JpZF85YWRjNmZiYjEwOWY0N2M2ODY3ZjkzNjQxYjBiNWRhZi5DaGlsZHJlbi5BZGQoQm9yZGVyX2U2YWFjZjJiZmJlZTQ0MGViMDJiNTcyYWJlMTVlM2ViKTtcclxuR3JpZF85YWRjNmZiYjEwOWY0N2M2ODY3ZjkzNjQxYjBiNWRhZi5DaGlsZHJlbi5BZGQoQnV0dG9uX2Y0MzVjZjJkMjM5NDRjNmI4NzE1NmI1ZjFiOTI4YjEyKTtcclxuXHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkXzlhZGM2ZmJiMTA5ZjQ3YzY4NjdmOTM2NDFiMGI1ZGFmO1xyXG5cclxuXHJcblxyXG5idG5DYW5jZWwgPSBCdXR0b25fZjQzNWNmMmQyMzk0NGM2Yjg3MTU2YjVmMWI5MjhiMTI7XHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9mNmU5MDUxMjVkMzY0ZTE1OWVkOThkZDA5YmIwODgxYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2Y2ZTkwNTEyNWQzNjRlMTU5ZWQ5OGRkMDliYjA4ODFiIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfZjZlOTA1MTI1ZDM2NGUxNTllZDk4ZGQwOWJiMDg4MWIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9mNmU5MDUxMjVkMzY0ZTE1OWVkOThkZDA5YmIwODgxYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfZjZlOTA1MTI1ZDM2NGUxNTllZDk4ZGQwOWJiMDg4MWIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzgwMzMzNDM5Y2Q2MzQyMmViYjYwZDVmOWMwMGI4OGMyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfODAzMzM0MzljZDYzNDIyZWJiNjBkNWY5YzAwYjg4YzIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV84MDMzMzQzOWNkNjM0MjJlYmI2MGQ1ZjljMDBiODhjMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzgwMzMzNDM5Y2Q2MzQyMmViYjYwZDVmOWMwMGI4OGMyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV84MDMzMzQzOWNkNjM0MjJlYmI2MGQ1ZjljMDBiODhjMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZjlkZjNhNDdkZTFlNDA0NjkwMmVkMDkxMzI4NWUxZjAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9mOWRmM2E0N2RlMWU0MDQ2OTAyZWQwOTEzMjg1ZTFmMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2Y5ZGYzYTQ3ZGUxZTQwNDY5MDJlZDA5MTMyODVlMWYwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZjlkZjNhNDdkZTFlNDA0NjkwMmVkMDkxMzI4NWUxZjAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2Y5ZGYzYTQ3ZGUxZTQwNDY5MDJlZDA5MTMyODVlMWYwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UgSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzQ3OTBmOGEwZmYwZTQzZDZhMzIzODQ2MGQzYWFkNmUyKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wgdGVtcGxhdGVPd25lcilcclxuICAgICAgICB7XHJcbnZhciB0ZW1wbGF0ZUluc3RhbmNlX2ZlY2E2M2M2ZTYwNTQwNzliNTFmNWQyYzMzODRlOGE5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UoKTtcclxudGVtcGxhdGVJbnN0YW5jZV9mZWNhNjNjNmU2MDU0MDc5YjUxZjVkMmMzMzg0ZThhOS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVPd25lcjtcclxudmFyIEJvcmRlcl81N2NmYzNhYjNmOTE0MDBlYjBkMDUxYzE0NDYwNjBjYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJPdXRlckJvcmRlclwiLCBCb3JkZXJfNTdjZmMzYWIzZjkxNDAwZWIwZDA1MWMxNDQ2MDYwY2MpO1xyXG5Cb3JkZXJfNTdjZmMzYWIzZjkxNDAwZWIwZDA1MWMxNDQ2MDYwY2MuTmFtZSA9IFwiT3V0ZXJCb3JkZXJcIjtcclxuQm9yZGVyXzU3Y2ZjM2FiM2Y5MTQwMGViMGQwNTFjMTQ0NjA2MGNjLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBWaXN1YWxTdGF0ZUdyb3VwXzMyNDkyMWYzOTI0ZDQ1YmE4ZDBiOGNhNTdiM2Q1MDFmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlR3JvdXAoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb21tb25TdGF0ZXNcIiwgVmlzdWFsU3RhdGVHcm91cF8zMjQ5MjFmMzkyNGQ0NWJhOGQwYjhjYTU3YjNkNTAxZik7XHJcblZpc3VhbFN0YXRlR3JvdXBfMzI0OTIxZjM5MjRkNDViYThkMGI4Y2E1N2IzZDUwMWYuTmFtZSA9IFwiQ29tbW9uU3RhdGVzXCI7XHJcbnZhciBWaXN1YWxTdGF0ZV9lOGQzNmI1NzViMGQ0MGViYTA3MDYyN2IzYTMyZmQ4ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk5vcm1hbFwiLCBWaXN1YWxTdGF0ZV9lOGQzNmI1NzViMGQ0MGViYTA3MDYyN2IzYTMyZmQ4ZSk7XHJcblZpc3VhbFN0YXRlX2U4ZDM2YjU3NWIwZDQwZWJhMDcwNjI3YjNhMzJmZDhlLk5hbWUgPSBcIk5vcm1hbFwiO1xyXG5cclxudmFyIFZpc3VhbFN0YXRlXzYzOTQyMGQ4MjliNjQ5MWFiOWVjMGNmMTFkYTgyMjczID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUG9pbnRlck92ZXJcIiwgVmlzdWFsU3RhdGVfNjM5NDIwZDgyOWI2NDkxYWI5ZWMwY2YxMWRhODIyNzMpO1xyXG5WaXN1YWxTdGF0ZV82Mzk0MjBkODI5YjY0OTFhYjllYzBjZjExZGE4MjI3My5OYW1lID0gXCJQb2ludGVyT3ZlclwiO1xyXG52YXIgU3Rvcnlib2FyZF9mOWJlMzNhOWJmZGE0OTExYTcxMjgxNzA3MzVhNTMyNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTEyMTkzYjdjODFjNDY5MGE5OTkwNGJlODkwZjYyNWYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTEyMTkzYjdjODFjNDY5MGE5OTkwNGJlODkwZjYyNWYsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzcyMDc5ZDRmMmZmODQwMjhhYWJmNGMyMTFjNDc5NjMwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNzIwNzlkNGYyZmY4NDAyOGFhYmY0YzIxMWM0Nzk2MzAuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV83MjA3OWQ0ZjJmZjg0MDI4YWFiZjRjMjExYzQ3OTYzMC5WYWx1ZSA9IEBcIiMxMTAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTEyMTkzYjdjODFjNDY5MGE5OTkwNGJlODkwZjYyNWYuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzcyMDc5ZDRmMmZmODQwMjhhYWJmNGMyMTFjNDc5NjMwKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2Y5YmUzM2E5YmZkYTQ5MTFhNzEyODE3MDczNWE1MzI0LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xMTIxOTNiN2M4MWM0NjkwYTk5OTA0YmU4OTBmNjI1Zik7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNjM5NDIwZDgyOWI2NDkxYWI5ZWMwY2YxMWRhODIyNzMuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZjliZTMzYTliZmRhNDkxMWE3MTI4MTcwNzM1YTUzMjQ7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzQzYjM0M2RhZmJhNjQ5MjE5ZTgzM2RmMzEyYzJhZTk2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUHJlc3NlZFwiLCBWaXN1YWxTdGF0ZV80M2IzNDNkYWZiYTY0OTIxOWU4MzNkZjMxMmMyYWU5Nik7XHJcblZpc3VhbFN0YXRlXzQzYjM0M2RhZmJhNjQ5MjE5ZTgzM2RmMzEyYzJhZTk2Lk5hbWUgPSBcIlByZXNzZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfMDViYzFiMzk5Y2QwNDE3MmE0M2RiMzA5NmQ0NjdjMWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2JlMGQ1Y2U2YmJjZDQ5NGE5YWFhZjMyODdkNmZjZTNhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2JlMGQ1Y2U2YmJjZDQ5NGE5YWFhZjMyODdkNmZjZTNhLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV8yNDJhYzkwZDE5NWM0ZDhhYWFmYjYxMjc0YjU4ZWJjYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzI0MmFjOTBkMTk1YzRkOGFhYWZiNjEyNzRiNThlYmNjLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMjQyYWM5MGQxOTVjNGQ4YWFhZmI2MTI3NGI1OGViY2MuVmFsdWUgPSBAXCIjMjIwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2JlMGQ1Y2U2YmJjZDQ5NGE5YWFhZjMyODdkNmZjZTNhLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV8yNDJhYzkwZDE5NWM0ZDhhYWFmYjYxMjc0YjU4ZWJjYyk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF8wNWJjMWIzOTljZDA0MTcyYTQzZGIzMDk2ZDQ2N2MxZS5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYmUwZDVjZTZiYmNkNDk0YTlhYWFmMzI4N2Q2ZmNlM2EpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzQzYjM0M2RhZmJhNjQ5MjE5ZTgzM2RmMzEyYzJhZTk2LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzA1YmMxYjM5OWNkMDQxNzJhNDNkYjMwOTZkNDY3YzFlO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV9jMTIyNDRlZDE4NTI0NDlhYmQ4NWEwMWIyMmUzMzQzYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkRpc2FibGVkXCIsIFZpc3VhbFN0YXRlX2MxMjI0NGVkMTg1MjQ0OWFiZDg1YTAxYjIyZTMzNDNiKTtcclxuVmlzdWFsU3RhdGVfYzEyMjQ0ZWQxODUyNDQ5YWJkODVhMDFiMjJlMzM0M2IuTmFtZSA9IFwiRGlzYWJsZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfMGY1MzJiYWU5ODVhNGU0YmFhMzE2N2RjYWY3YzM3MzMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E3ZjgzZjkzZjA2ZTQ0MGQ4N2RhNzg5MzYzMzZkMzMxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E3ZjgzZjkzZjA2ZTQ0MGQ4N2RhNzg5MzYzMzZkMzMxLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV83YTJmNjE0Yjk2Yjc0ZDhhYjU2YjIyY2MwNTcyZDE0ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzdhMmY2MTRiOTZiNzRkOGFiNTZiMjJjYzA1NzJkMTRkLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfN2EyZjYxNGI5NmI3NGQ4YWI1NmIyMmNjMDU3MmQxNGQuVmFsdWUgPSBAXCIjMzNGRkZGRkZcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E3ZjgzZjkzZjA2ZTQ0MGQ4N2RhNzg5MzYzMzZkMzMxLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV83YTJmNjE0Yjk2Yjc0ZDhhYjU2YjIyY2MwNTcyZDE0ZCk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF8wZjUzMmJhZTk4NWE0ZTRiYWEzMTY3ZGNhZjdjMzczMy5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYTdmODNmOTNmMDZlNDQwZDg3ZGE3ODkzNjMzNmQzMzEpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlX2MxMjI0NGVkMTg1MjQ0OWFiZDg1YTAxYjIyZTMzNDNiLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzBmNTMyYmFlOTg1YTRlNGJhYTMxNjdkY2FmN2MzNzMzO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlR3JvdXBfMzI0OTIxZjM5MjRkNDViYThkMGI4Y2E1N2IzZDUwMWYuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV9lOGQzNmI1NzViMGQ0MGViYTA3MDYyN2IzYTMyZmQ4ZSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMzI0OTIxZjM5MjRkNDViYThkMGI4Y2E1N2IzZDUwMWYuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV82Mzk0MjBkODI5YjY0OTFhYjllYzBjZjExZGE4MjI3Myk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMzI0OTIxZjM5MjRkNDViYThkMGI4Y2E1N2IzZDUwMWYuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV80M2IzNDNkYWZiYTY0OTIxOWU4MzNkZjMxMmMyYWU5Nik7XHJcblZpc3VhbFN0YXRlR3JvdXBfMzI0OTIxZjM5MjRkNDViYThkMGI4Y2E1N2IzZDUwMWYuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV9jMTIyNDRlZDE4NTI0NDlhYmQ4NWEwMWIyMmUzMzQzYik7XHJcblxyXG5cclxudGVtcGxhdGVPd25lci5JTlRFUk5BTF9HZXRWaXN1YWxTdGF0ZUdyb3VwcygpLkFkZChWaXN1YWxTdGF0ZUdyb3VwXzMyNDkyMWYzOTI0ZDQ1YmE4ZDBiOGNhNTdiM2Q1MDFmKTtcclxuXHJcbnZhciBCb3JkZXJfNWE0OWJmMzgzYzFlNDhmZGFlZWIzYmNiNWIyZjE0NDEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiSW5uZXJCb3JkZXJcIiwgQm9yZGVyXzVhNDliZjM4M2MxZTQ4ZmRhZWViM2JjYjViMmYxNDQxKTtcclxuQm9yZGVyXzVhNDliZjM4M2MxZTQ4ZmRhZWViM2JjYjViMmYxNDQxLk5hbWUgPSBcIklubmVyQm9yZGVyXCI7XHJcbkJvcmRlcl81YTQ5YmYzODNjMWU0OGZkYWVlYjNiY2I1YjJmMTQ0MS5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgQ29udGVudFByZXNlbnRlcl9lYzlhNGVmM2UwOWU0MWIzYWE5ZDFkMDE3ZTI1NTRhMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50UHJlc2VudGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29udGVudFByZXNlbnRlclwiLCBDb250ZW50UHJlc2VudGVyX2VjOWE0ZWYzZTA5ZTQxYjNhYTlkMWQwMTdlMjU1NGEyKTtcclxuQ29udGVudFByZXNlbnRlcl9lYzlhNGVmM2UwOWU0MWIzYWE5ZDFkMDE3ZTI1NTRhMi5OYW1lID0gXCJDb250ZW50UHJlc2VudGVyXCI7XHJcbnZhciBCaW5kaW5nXzM0MzAxMzFhNzBhNTQ0MjM5Zjc1MGY0YWRkNTBhNDcyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzM0MzAxMzFhNzBhNTQ0MjM5Zjc1MGY0YWRkNTBhNDcyLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRUZW1wbGF0ZVwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2YyNWYxMWNjYzBlNDRiYzU5ODY2ZjJiOTU5MGJhOTFmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZjI1ZjExY2NjMGU0NGJjNTk4NjZmMmI5NTkwYmE5MWYuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMzQzMDEzMWE3MGE1NDQyMzlmNzUwZjRhZGQ1MGE0NzIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9mMjVmMTFjY2MwZTQ0YmM1OTg2NmYyYjk1OTBiYTkxZjtcclxuXHJcblxyXG5CaW5kaW5nXzM0MzAxMzFhNzBhNTQ0MjM5Zjc1MGY0YWRkNTBhNDcyLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2ZlY2E2M2M2ZTYwNTQwNzliNTFmNWQyYzMzODRlOGE5O1xyXG5cclxudmFyIEJpbmRpbmdfZTRiMGY3MDQ2MDZkNGFmOTg2NzkwYzZjYTcxMDgxZDEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZTRiMGY3MDQ2MDZkNGFmOTg2NzkwYzZjYTcxMDgxZDEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzdmZDYzMjJiODVmMDQ3NTE5YzZiMWZkZmMwY2M3ODgxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfN2ZkNjMyMmI4NWYwNDc1MTljNmIxZmRmYzBjYzc4ODEuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZTRiMGY3MDQ2MDZkNGFmOTg2NzkwYzZjYTcxMDgxZDEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV83ZmQ2MzIyYjg1ZjA0NzUxOWM2YjFmZGZjMGNjNzg4MTtcclxuXHJcblxyXG5CaW5kaW5nX2U0YjBmNzA0NjA2ZDRhZjk4Njc5MGM2Y2E3MTA4MWQxLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2ZlY2E2M2M2ZTYwNTQwNzliNTFmNWQyYzMzODRlOGE5O1xyXG5cclxudmFyIEJpbmRpbmdfNWIxZGIwNjkwZjI4NDRiMGEyZmM5YWZiNmY5MjI3NzEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNWIxZGIwNjkwZjI4NDRiMGEyZmM5YWZiNmY5MjI3NzEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiUGFkZGluZ1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzRiNDQ2YzFjNDliODQ3YzRhNjFhNmFkNGFjNmYwZjI1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNGI0NDZjMWM0OWI4NDdjNGE2MWE2YWQ0YWM2ZjBmMjUuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNWIxZGIwNjkwZjI4NDRiMGEyZmM5YWZiNmY5MjI3NzEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV80YjQ0NmMxYzQ5Yjg0N2M0YTYxYTZhZDRhYzZmMGYyNTtcclxuXHJcblxyXG5CaW5kaW5nXzViMWRiMDY5MGYyODQ0YjBhMmZjOWFmYjZmOTIyNzcxLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2ZlY2E2M2M2ZTYwNTQwNzliNTFmNWQyYzMzODRlOGE5O1xyXG5cclxudmFyIEJpbmRpbmdfMTg4NGNkZjYwZTJlNGZlMmJjYmZmNjBkOTQ3YmM3NjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMTg4NGNkZjYwZTJlNGZlMmJjYmZmNjBkOTQ3YmM3NjQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiSG9yaXpvbnRhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8zMTU1YThjN2E0NjA0YTFmYTNjMzRlODY4N2JkMDBmZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzMxNTVhOGM3YTQ2MDRhMWZhM2MzNGU4Njg3YmQwMGZmLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzE4ODRjZGY2MGUyZTRmZTJiY2JmZjYwZDk0N2JjNzY0LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMzE1NWE4YzdhNDYwNGExZmEzYzM0ZTg2ODdiZDAwZmY7XHJcblxyXG5cclxuQmluZGluZ18xODg0Y2RmNjBlMmU0ZmUyYmNiZmY2MGQ5NDdiYzc2NC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9mZWNhNjNjNmU2MDU0MDc5YjUxZjVkMmMzMzg0ZThhOTtcclxuXHJcbnZhciBCaW5kaW5nX2ZiMDZhYzZjYjY3MzQ1ZjZhNzllODYzYTNlZGZlNWJlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2ZiMDZhYzZjYjY3MzQ1ZjZhNzllODYzYTNlZGZlNWJlLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2QwYTdlNmI2YjM2NjRkMDk5MWU3OThmZTgxMDg3MzRkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZDBhN2U2YjZiMzY2NGQwOTkxZTc5OGZlODEwODczNGQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZmIwNmFjNmNiNjczNDVmNmE3OWU4NjNhM2VkZmU1YmUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9kMGE3ZTZiNmIzNjY0ZDA5OTFlNzk4ZmU4MTA4NzM0ZDtcclxuXHJcblxyXG5CaW5kaW5nX2ZiMDZhYzZjYjY3MzQ1ZjZhNzllODYzYTNlZGZlNWJlLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2ZlY2E2M2M2ZTYwNTQwNzliNTFmNWQyYzMzODRlOGE5O1xyXG5cclxuXHJcbkJvcmRlcl81YTQ5YmYzODNjMWU0OGZkYWVlYjNiY2I1YjJmMTQ0MS5DaGlsZCA9IENvbnRlbnRQcmVzZW50ZXJfZWM5YTRlZjNlMDllNDFiM2FhOWQxZDAxN2UyNTU0YTI7XHJcblxyXG52YXIgQmluZGluZ19hMzI3MjQ0YjYyZTM0NGEyYmQ1NTU1MzAwYWM5MzcyNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19hMzI3MjQ0YjYyZTM0NGEyYmQ1NTU1MzAwYWM5MzcyNC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOTAzZWI3ZTJmNTdlNDdjYjk4MmY1NTFiYTUxMTBmMzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85MDNlYjdlMmY1N2U0N2NiOTgyZjU1MWJhNTExMGYzNi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19hMzI3MjQ0YjYyZTM0NGEyYmQ1NTU1MzAwYWM5MzcyNC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzkwM2ViN2UyZjU3ZTQ3Y2I5ODJmNTUxYmE1MTEwZjM2O1xyXG5cclxuXHJcbkJpbmRpbmdfYTMyNzI0NGI2MmUzNDRhMmJkNTU1NTMwMGFjOTM3MjQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZmVjYTYzYzZlNjA1NDA3OWI1MWY1ZDJjMzM4NGU4YTk7XHJcblxyXG5cclxuQm9yZGVyXzU3Y2ZjM2FiM2Y5MTQwMGViMGQwNTFjMTQ0NjA2MGNjLkNoaWxkID0gQm9yZGVyXzVhNDliZjM4M2MxZTQ4ZmRhZWViM2JjYjViMmYxNDQxO1xyXG5cclxudmFyIEJpbmRpbmdfMDM5YzNlODlhMTNiNGM5NWE0YTM1NWM0MjMzNjUzOGYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMDM5YzNlODlhMTNiNGM5NWE0YTM1NWM0MjMzNjUzOGYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2UzNTkwNzA2Y2VkODRhY2U4OGNlZGMyM2RjMDQ4YjRhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZTM1OTA3MDZjZWQ4NGFjZTg4Y2VkYzIzZGMwNDhiNGEuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMDM5YzNlODlhMTNiNGM5NWE0YTM1NWM0MjMzNjUzOGYuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9lMzU5MDcwNmNlZDg0YWNlODhjZWRjMjNkYzA0OGI0YTtcclxuXHJcblxyXG5CaW5kaW5nXzAzOWMzZTg5YTEzYjRjOTVhNGEzNTVjNDIzMzY1MzhmLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2ZlY2E2M2M2ZTYwNTQwNzliNTFmNWQyYzMzODRlOGE5O1xyXG5cclxudmFyIEJpbmRpbmdfMDQxZGY2OWFjZWZhNGViYmI1Nzc5MWM3ZjFmNTY1ZjcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMDQxZGY2OWFjZWZhNGViYmI1Nzc5MWM3ZjFmNTY1ZjcuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyQnJ1c2hcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jZDU3MzBlOWNiOTI0NjVlYTdlYzYzNzE4NDhjZmIwNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2NkNTczMGU5Y2I5MjQ2NWVhN2VjNjM3MTg0OGNmYjA0Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzA0MWRmNjlhY2VmYTRlYmJiNTc3OTFjN2YxZjU2NWY3LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfY2Q1NzMwZTljYjkyNDY1ZWE3ZWM2MzcxODQ4Y2ZiMDQ7XHJcblxyXG5cclxuQmluZGluZ18wNDFkZjY5YWNlZmE0ZWJiYjU3NzkxYzdmMWY1NjVmNy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9mZWNhNjNjNmU2MDU0MDc5YjUxZjVkMmMzMzg0ZThhOTtcclxuXHJcbnZhciBCaW5kaW5nXzNlNjkzODVjZmU1YTQyZTU5NTZhNGIyMTM0YjI3NzkzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzNlNjkzODVjZmU1YTQyZTU5NTZhNGIyMTM0YjI3NzkzLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlclRoaWNrbmVzc1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2Y0NDY5YzI2MmI5ZTRjNGU4YzhlZTVmY2ExZjE1OTgwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZjQ0NjljMjYyYjllNGM0ZThjOGVlNWZjYTFmMTU5ODAuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfM2U2OTM4NWNmZTVhNDJlNTk1NmE0YjIxMzRiMjc3OTMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9mNDQ2OWMyNjJiOWU0YzRlOGM4ZWU1ZmNhMWYxNTk4MDtcclxuXHJcblxyXG5CaW5kaW5nXzNlNjkzODVjZmU1YTQyZTU5NTZhNGIyMTM0YjI3NzkzLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2ZlY2E2M2M2ZTYwNTQwNzliNTFmNWQyYzMzODRlOGE5O1xyXG5cclxuXHJcblxyXG5Db250ZW50UHJlc2VudGVyX2VjOWE0ZWYzZTA5ZTQxYjNhYTlkMWQwMTdlMjU1NGEyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFRlbXBsYXRlUHJvcGVydHksIEJpbmRpbmdfMzQzMDEzMWE3MGE1NDQyMzlmNzUwZjRhZGQ1MGE0NzIpO1xyXG5Db250ZW50UHJlc2VudGVyX2VjOWE0ZWYzZTA5ZTQxYjNhYTlkMWQwMTdlMjU1NGEyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFByb3BlcnR5LCBCaW5kaW5nX2U0YjBmNzA0NjA2ZDRhZjk4Njc5MGM2Y2E3MTA4MWQxKTtcclxuQ29udGVudFByZXNlbnRlcl9lYzlhNGVmM2UwOWU0MWIzYWE5ZDFkMDE3ZTI1NTRhMi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuTWFyZ2luUHJvcGVydHksIEJpbmRpbmdfNWIxZGIwNjkwZjI4NDRiMGEyZmM5YWZiNmY5MjI3NzEpO1xyXG5Db250ZW50UHJlc2VudGVyX2VjOWE0ZWYzZTA5ZTQxYjNhYTlkMWQwMTdlMjU1NGEyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5Ib3Jpem9udGFsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfMTg4NGNkZjYwZTJlNGZlMmJjYmZmNjBkOTQ3YmM3NjQpO1xyXG5Db250ZW50UHJlc2VudGVyX2VjOWE0ZWYzZTA5ZTQxYjNhYTlkMWQwMTdlMjU1NGEyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5WZXJ0aWNhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nX2ZiMDZhYzZjYjY3MzQ1ZjZhNzllODYzYTNlZGZlNWJlKTtcclxuQm9yZGVyXzVhNDliZjM4M2MxZTQ4ZmRhZWViM2JjYjViMmYxNDQxLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19hMzI3MjQ0YjYyZTM0NGEyYmQ1NTU1MzAwYWM5MzcyNCk7XHJcbkJvcmRlcl81N2NmYzNhYjNmOTE0MDBlYjBkMDUxYzE0NDYwNjBjYy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfMDM5YzNlODlhMTNiNGM5NWE0YTM1NWM0MjMzNjUzOGYpO1xyXG5Cb3JkZXJfNTdjZmMzYWIzZjkxNDAwZWIwZDA1MWMxNDQ2MDYwY2MuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyQnJ1c2hQcm9wZXJ0eSwgQmluZGluZ18wNDFkZjY5YWNlZmE0ZWJiYjU3NzkxYzdmMWY1NjVmNyk7XHJcbkJvcmRlcl81N2NmYzNhYjNmOTE0MDBlYjBkMDUxYzE0NDYwNjBjYy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJUaGlja25lc3NQcm9wZXJ0eSwgQmluZGluZ18zZTY5Mzg1Y2ZlNWE0MmU1OTU2YTRiMjEzNGIyNzc5Myk7XHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xMTIxOTNiN2M4MWM0NjkwYTk5OTA0YmU4OTBmNjI1ZixcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9mNmU5MDUxMjVkMzY0ZTE1OWVkOThkZDA5YmIwODgxYixcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2Y2ZTkwNTEyNWQzNjRlMTU5ZWQ5OGRkMDliYjA4ODFiLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfZjZlOTA1MTI1ZDM2NGUxNTllZDk4ZGQwOWJiMDg4MWIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9mNmU5MDUxMjVkMzY0ZTE1OWVkOThkZDA5YmIwODgxYixcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2Y2ZTkwNTEyNWQzNjRlMTU5ZWQ5OGRkMDliYjA4ODFiKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xMTIxOTNiN2M4MWM0NjkwYTk5OTA0YmU4OTBmNjI1ZiwgQm9yZGVyXzVhNDliZjM4M2MxZTQ4ZmRhZWViM2JjYjViMmYxNDQxKTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iZTBkNWNlNmJiY2Q0OTRhOWFhYWYzMjg3ZDZmY2UzYSxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV84MDMzMzQzOWNkNjM0MjJlYmI2MGQ1ZjljMDBiODhjMixcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzgwMzMzNDM5Y2Q2MzQyMmViYjYwZDVmOWMwMGI4OGMyLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfODAzMzM0MzljZDYzNDIyZWJiNjBkNWY5YzAwYjg4YzIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV84MDMzMzQzOWNkNjM0MjJlYmI2MGQ1ZjljMDBiODhjMixcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzgwMzMzNDM5Y2Q2MzQyMmViYjYwZDVmOWMwMGI4OGMyKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iZTBkNWNlNmJiY2Q0OTRhOWFhYWYzMjg3ZDZmY2UzYSwgQm9yZGVyXzVhNDliZjM4M2MxZTQ4ZmRhZWViM2JjYjViMmYxNDQxKTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hN2Y4M2Y5M2YwNmU0NDBkODdkYTc4OTM2MzM2ZDMzMSxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9mOWRmM2E0N2RlMWU0MDQ2OTAyZWQwOTEzMjg1ZTFmMCxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2Y5ZGYzYTQ3ZGUxZTQwNDY5MDJlZDA5MTMyODVlMWYwLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfZjlkZjNhNDdkZTFlNDA0NjkwMmVkMDkxMzI4NWUxZjAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9mOWRmM2E0N2RlMWU0MDQ2OTAyZWQwOTEzMjg1ZTFmMCxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2Y5ZGYzYTQ3ZGUxZTQwNDY5MDJlZDA5MTMyODVlMWYwKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hN2Y4M2Y5M2YwNmU0NDBkODdkYTc4OTM2MzM2ZDMzMSwgQm9yZGVyXzVhNDliZjM4M2MxZTQ4ZmRhZWViM2JjYjViMmYxNDQxKTtcclxuXHJcbnRlbXBsYXRlSW5zdGFuY2VfZmVjYTYzYzZlNjA1NDA3OWI1MWY1ZDJjMzM4NGU4YTkuVGVtcGxhdGVDb250ZW50ID0gQm9yZGVyXzU3Y2ZjM2FiM2Y5MTQwMGViMGQwNTFjMTQ0NjA2MGNjO1xyXG5yZXR1cm4gdGVtcGxhdGVJbnN0YW5jZV9mZWNhNjNjNmU2MDU0MDc5YjUxZjVkMmMzMzg0ZThhOTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxufVxyXG4iLCIvLyA8Q1NIVE1MNT48WGFtbEhhc2g+RENCMTY1NzUyM0U3OEU3QUFERUU1N0NERTE0NDZCNzU8L1hhbWxIYXNoPjxQYXNzTnVtYmVyPjI8L1Bhc3NOdW1iZXI+PENvbXBpbGF0aW9uRGF0ZT4xNS4wNC4yMDIwIDE5OjE4OjE0PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgFNlY29uZHBhZ2XHgMeAWGFtbMeAx4BGYWN0b3J5XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqZWN0IEluc3RhbnRpYXRlKClcclxuICAgIHtcclxuICAgICAgICBnbG9iYWw6OlN5c3RlbS5UeXBlIHR5cGUgPSB0eXBlb2YoQ1NodG1sLlNlY29uZFBhZ2UpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFNlY29uZFBhZ2UgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QYWdlXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5cclxuXHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAxNjksIDY0OSwgMDYyOFxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9jb250ZW50TG9hZGVkO1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jb250ZW50TG9hZGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfY29udGVudExvYWRlZCA9IHRydWU7XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAwMTg0IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTg0ICgnVGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgbmV2ZXIgb2YgdGhlIHByb3ZpZGVkICgndHlwZScpIHR5cGUnKVxyXG4gICAgICAgICAgICBpZiAodGhpcyBpcyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KShvYmplY3QpdGhpcykuWGFtbFNvdXJjZVBhdGggPSBAXCJDU2h0bWxcXFNlY29uZFBhZ2UueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfNGJmOGU2ZGFmMzU5NDhmZThiMjE0NjlhMGRlYjAzYzIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG5HcmlkXzRiZjhlNmRhZjM1OTQ4ZmU4YjIxNDY5YTBkZWIwM2MyLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkwLCBHID0gKGJ5dGUpMCwgQiA9IChieXRlKTAgfSk7XHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkXzRiZjhlNmRhZjM1OTQ4ZmU4YjIxNDY5YTBkZWIwM2MyO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBzZWFsZWQgcGFydGlhbCBjbGFzcyBBcHAgOiBBcHBsaWNhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBBcHAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbnRlciBjb25zdHJ1Y3Rpb24gbG9naWMgaGVyZS4uLlxyXG5cclxuICAgICAgICAgICAgLy92YXIgcGFnZUhvbWUgPSBuZXcgUGFnZUhvbWUoKTtcclxuICAgICAgICAgICAgLy9XaW5kb3cuQ3VycmVudC5Db250ZW50ID0gcGFnZUhvbWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIG1mcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZUhvbWUueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBtZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYWdlMSA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFnZTEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlRleHQgPSBGaWxlQ2xhc3MuZmlsZVRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnV0dG9uX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9QYWdlSG9tZSBwYWdlSG9tZSA9IG5ldyBQYWdlSG9tZSgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuTmF2aWdhdGlvblNlcnZpY2UuTmF2aWdhdGUocGFnZUhvbWUpO1xyXG4gICAgICAgICAgICAvL3BhZ2VIb21lLmJ0bkJlZ2luLklzRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2VIb21lLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ0blVwbG9hZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZVVwbG9hZC54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBGaXJzdF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICBidG5VcGxvYWQuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYnRuUHJvY2Vzc2luZy5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcblxyXG4gICAgICAgICAgICBib3JkZXJJREVGLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYm9yZGVyVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgLy9idG5VcGxvYWRVTUwuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZElERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFNlY29uZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blVwbG9hZC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blByb2Nlc3NpbmcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlcklERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYm9yZGVyVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2J0blVwbG9hZFVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIC8vYnRuVXBsb2FkSURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFRoaXJkX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnRuQ2FuY2VsLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuVXBsb2FkLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuUHJvY2Vzc2luZy5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIHR4dEZpbGUuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVySURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJvcmRlclVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZFVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZElERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ0blByb2Nlc3NpbmdfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHh0RmlsZS5UZXh0ICE9IFN0cmluZy5FbXB0eSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgV2luZG93cy5VSS5YYW1sLk1lZGlhLkltYWdpbmcuQml0bWFwSW1hZ2UgYml0bWFwSURFRiA9IG5ldyBXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2luZy5CaXRtYXBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYml0bWFwSURFRi5VcmlTb3VyY2UgPSBuZXcgVXJpKFwiaW1nL25pZ2FJREVGMC5qcGdcIiwgVXJpS2luZC5SZWxhdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICBuaWdhSURFRl9KcGVnLlNvdXJjZSA9IGJpdG1hcElERUY7XHJcbiAgICAgICAgICAgICAgICBuaWdhSURFRl9KcGVnLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcblxyXG4gICAgICAgICAgICAgICAgV2luZG93cy5VSS5YYW1sLk1lZGlhLkltYWdpbmcuQml0bWFwSW1hZ2UgYml0bWFwVU1MID0gbmV3IFdpbmRvd3MuVUkuWGFtbC5NZWRpYS5JbWFnaW5nLkJpdG1hcEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBiaXRtYXBVTUwuVXJpU291cmNlID0gbmV3IFVyaShcImltZy9uaWdhLmpwZ1wiLCBVcmlLaW5kLlJlbGF0aXZlKTtcclxuICAgICAgICAgICAgICAgIG5pZ2FVTUxfSnBlZy5Tb3VyY2UgPSBiaXRtYXBVTUw7XHJcbiAgICAgICAgICAgICAgICBuaWdhVU1MX0pwZWcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlQm94LlNob3coXCLQn9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC30LDQstC10YDRiNC10L3Qvi4g0J/QtdGA0LXQudC00LjRgtC1INC/0L4g0L3QsNCy0LjQs9Cw0YbQuNC4INCyINC70LXQstC+0Lkg0YfQsNGB0YLQuCDQvtC60L3QsCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IE1lc3NhZ2VCb3guU2hvdyhcIkpTT04g0YTQsNC50Lsg0L7RgtGB0YPRgtGB0YLQstGD0LXRglwiKTsgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9wcml2YXRlIHZvaWQgQnRuVXBsb2FkVU1MX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIC8ve1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy9wcml2YXRlIHZvaWQgQnRuVXBsb2FkSURFRl9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICAvL3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5Gb3VuZGF0aW9uO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWw7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlByaW1pdGl2ZXM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5EYXRhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuSW5wdXQ7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5NZWRpYTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk5hdmlnYXRpb247XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFBhZ2VIb21lIDogUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBQYWdlSG9tZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBCdXR0b25fQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL1BhZ2UxIHBhZ2VIb21lID0gbmV3IFBhZ2UxKCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5OYXZpZ2F0aW9uU2VydmljZS5OYXZpZ2F0ZShwYWdlSG9tZSk7XHJcbiAgICAgICAgICAgIC8vYnRuQmVnaW4uSXNFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZTEueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBmcmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5Gb3VuZGF0aW9uO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWw7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlByaW1pdGl2ZXM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5EYXRhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuSW5wdXQ7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5NZWRpYTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk5hdmlnYXRpb247XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFBhZ2VVcGxvYWQgOiBQYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFBhZ2VVcGxvYWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyB2b2lkIE9uRmlsZU9wZW5lZChvYmplY3Qgc2VuZGVyLCBDU0hUTUw1LkV4dGVuc2lvbnMuRmlsZU9wZW5EaWFsb2cuRmlsZU9wZW5lZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRmlsZUNsYXNzLmZpbGVUZXh0ID0gZS5UZXh0O1xyXG4gICAgICAgICAgICBNZXNzYWdlQm94LlNob3coXCLQpNCw0LnQuyDQt9Cw0LPRgNGD0LbQtdC9XCIpO1xyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2UxLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnRuQ2FuY2VsX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZTEueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBmcmFtZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTZWNvbmRQYWdlIDogUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBTZWNvbmRQYWdlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG4jaWYgU0xNSUdSQVRJT05cclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkNvbnRyb2xzO1xyXG4jZWxzZVxyXG51c2luZyBXaW5kb3dzLlVJLlhhbWw7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scztcclxuI2VuZGlmXHJcblxyXG5uYW1lc3BhY2UgQ1NIVE1MNS5FeHRlbnNpb25zLkZpbGVPcGVuRGlhbG9nXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBldmVudCBFdmVudEhhbmRsZXI8RmlsZU9wZW5lZEV2ZW50QXJncz4gRmlsZU9wZW5lZDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBSZXN1bHRLaW5kIF9yZXN1bHRLaW5kO1xyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIF9yZXN1bHRLaW5kU3RyO1xyXG4gICAgICAgIHB1YmxpYyBSZXN1bHRLaW5kIFJlc3VsdEtpbmRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfcmVzdWx0S2luZDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdEtpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIF9yZXN1bHRLaW5kU3RyID0gdmFsdWUuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2coKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmVzdWx0S2luZCA9IEZpbGVPcGVuRGlhbG9nLlJlc3VsdEtpbmQuVGV4dDsgLy9Ob3RlOiB0aGlzIGlzIHRvIHNldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuXHJcblxyXG4gICAgICAgICAgICBDU2hhcnBYYW1sRm9ySHRtbDUuRG9tTWFuYWdlbWVudC5TZXRIdG1sUmVwcmVzZW50YXRpb24odGhpcyxcclxuICAgICAgICAgICAgICAgIFwiPGRpdiBzdHlsZSBzdHlsZT0nbWFyZ2luOiAxNXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6ICMxYmJjOWMgdmVydGljYWwtYWxpZ246bWlkZGxlOyc+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8aW5wdXQgdHlwZT0nZmlsZScgYWNjZXB0PScuanNvbiwgLnR4dCcgaWQ9J2lucHV0X19maWxlJyBzdHlsZT0nbWFyZ2luOiA2NXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7IHZpc2liaWxpdHk6IGhpZGRlbjsnIG11bHRpcGxlPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPGxhYmVsIGZvcj0naW5wdXRfX2ZpbGUnIHN0eWxlPSd3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAyOTBweDsgaGVpZ2h0OiA2MHB4OyBiYWNrZ3JvdW5kOiAjRjlERUYyOyBkaXNwbGF5OiAtd2Via2l0LWJveDsgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcIiArXHJcbiAgICAgICAgICAgICAgICBcImRpc3BsYXk6IC1tcy1mbGV4Ym94OyBkaXNwbGF5OiBmbGV4OyAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjsgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwIGF1dG87IGZvbnQtc2l6ZTogMS4xMjVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7XCIgK1xyXG4gICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzOiAzcHg7IGN1cnNvcjogcG9pbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7IC1tcy1mbGV4LXBhY2s6IHN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgY29sb3I6ICMwMDA7Jz5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuIHN0eWxlPSdsaW5lLWhlaWdodDogMTttYXJnaW4tdG9wOiAxcHg7Jz7QktGL0LHQtdGA0LjRgtC1INGE0LDQudC7PC9zcGFuPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPC9sYWJlbD5cIitcclxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2lucHV0X193cmFwcGVyJz5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8aW5wdXQgdHlwZSA9ICdmaWxlJyAgaWQgPSAnaW5wdXRfX2ZpbGUnIGNsYXNzPSdpbnB1dCBpbnB1dF9fZmlsZScgbXVsdGlwbGU+XCIgK1xyXG4gICAgICAgICAgICAvLyAgIFwiPGxhYmVsIGZvcj0naW5wdXRfX2ZpbGUnIGNsYXNzPSdpbnB1dF9fZmlsZS1idXR0b24nPlwiICtcclxuICAgICAgICAgICAgLy8gICAgICBcIjxzcGFuIGNsYXNzPSdpbnB1dF9fZmlsZS1idXR0b24tdGV4dCc+0JLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQuzwvc3Bhbj5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8L2xhYmVsPlwiICtcclxuICAgICAgICAgICAgLy9cIjwvZGl2PlwiXHJcblxyXG4gICAgICAgICAgICB0aGlzLkxvYWRlZCArPSBDb250cm9sRm9yRGlzcGxheWluZ0FGaWxlT3BlbkRpYWxvZ19Mb2FkZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIENvbnRyb2xGb3JEaXNwbGF5aW5nQUZpbGVPcGVuRGlhbG9nX0xvYWRlZChvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBcImlucHV0XCIgZWxlbWVudDpcclxuICAgICAgICAgICAgdmFyIGlucHV0RWxlbWVudCA9IENTSFRNTDUuSW50ZXJvcC5HZXREaXYodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBBY3Rpb248b2JqZWN0PiBvbkZpbGVPcGVuZWQgPSAocmVzdWx0KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5GaWxlT3BlbmVkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GaWxlT3BlbmVkKHRoaXMsIG5ldyBGaWxlT3BlbmVkRXZlbnRBcmdzKHJlc3VsdCwgdGhpcy5SZXN1bHRLaW5kKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHRLaW5kU3RyID0gX3Jlc3VsdEtpbmRTdHI7IC8vIE5vdGU6IHRoaXMgaXMgaGVyZSB0byBcImNhcHR1cmVcIiB0aGUgdmFyaWFibGUgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBpbnNpZGUgdGhlIFwiYWRkRXZlbnRMaXN0ZW5lclwiIGJlbG93LlxyXG5cclxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIFwiRmlsdGVyXCIgcHJvcGVydHkgdG8gbGltaXQgdGhlIGNob2ljZSBvZiB0aGUgdXNlciB0byB0aGUgc3BlY2lmaWVkIGV4dGVuc2lvbnM6XHJcbiAgICAgICAgICAgIFNldEZpbHRlcih0aGlzLkZpbHRlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlIFwiY2hhbmdlXCIgcHJvcGVydHkgb2YgdGhlIFwiaW5wdXRcIiBlbGVtZW50LCBhbmQgY2FsbCB0aGUgY2FsbGJhY2s6XHJcbiAgICAgICAgICAgIENTSFRNTDUuSW50ZXJvcC5FeGVjdXRlSmF2YVNjcmlwdChAXCJcclxuICAgICAgICAgICAgICAgICQwLmFkZEV2ZW50TGlzdGVuZXIoXCJcImNoYW5nZVwiXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZ1bGxQYXRoID0gJDAudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bGxQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gKGZ1bGxQYXRoLmluZGV4T2YoJ1xcXFwnKSA+PSAwID8gZnVsbFBhdGgubGFzdEluZGV4T2YoJ1xcXFwnKSA6IGZ1bGxQYXRoLmxhc3RJbmRleE9mKCcvJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IGZ1bGxQYXRoLnN1YnN0cmluZyhzdGFydEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVuYW1lLmluZGV4T2YoJ1xcXFwnKSA9PT0gMCB8fCBmaWxlbmFtZS5pbmRleE9mKCcvJykgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZmlsZW5hbWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gJDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKGZpbGUudHlwZSA9PSAndGV4dC9wbGFpbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEtpbmQgPSAkMztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0S2luZCA9PSAnRGF0YVVSTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNSdW5uaW5nSW5UaGVTaW11bGF0b3IgPSAkMjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1wiLCBpbnB1dEVsZW1lbnQsIG9uRmlsZU9wZW5lZCwgQ1NIVE1MNS5JbnRlcm9wLklzUnVubmluZ0luVGhlU2ltdWxhdG9yLCByZXN1bHRLaW5kU3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgU2V0RmlsdGVyKHN0cmluZyBmaWx0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHJlZmVyZW5jZSB0byB0aGUgXCJpbnB1dFwiIGVsZW1lbnQ6XHJcbiAgICAgICAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSBDU0hUTUw1LkludGVyb3AuR2V0RGl2KHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgZmlsdGVyIGxpc3QgdG8gY29udmVydCB0aGUgc3ludGF4IGZyb20gWEFNTCB0byBIVE1MNTpcclxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBzeW50YXggaW4gU2lsdmVybGlnaHQ6IEltYWdlIEZpbGVzICgqLmJtcCwgKi5qcGcpfCouYm1wOyouanBnfEFsbCBGaWxlcyAoKi4qKXwqLipcclxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBzeW50YXggaW4gSFRNTDU6IC5naWYsIC5qcGcsIC5wbmcsIC5kb2NcclxuICAgICAgICAgICAgc3RyaW5nW10gc3BsaXR0ZWQgPSBmaWx0ZXIuU3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgTGlzdDxzdHJpbmc+IGl0ZW1zS2VwdCA9IG5ldyBMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0dGVkLkxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0tlcHQuQWRkKHNwbGl0dGVkWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAxOyBpIDwgc3BsaXR0ZWQuTGVuZ3RoOyBpICs9IDIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNLZXB0LkFkZChzcGxpdHRlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyaW5nIGZpbHRlcnNJbkh0bWw1ID0gU3RyaW5nLkpvaW4oXCIsXCIsIGl0ZW1zS2VwdCkuUmVwbGFjZShcIipcIiwgXCJcIikuUmVwbGFjZShcIjtcIiwgXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlcjpcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKGZpbHRlcnNJbkh0bWw1KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIiQwLmFjY2VwdCA9ICQxXCIsIGlucHV0RWxlbWVudCwgZmlsdGVyc0luSHRtbDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIiQwLmFjY2VwdCA9IFwiXCJcIlwiXCIsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEZpbHRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIChzdHJpbmcpR2V0VmFsdWUoRmlsdGVyUHJvcGVydHkpOyB9XHJcbiAgICAgICAgICAgIHNldCB7IFNldFZhbHVlKEZpbHRlclByb3BlcnR5LCB2YWx1ZSk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZXBlbmRlbmN5UHJvcGVydHkgRmlsdGVyUHJvcGVydHkgPVxyXG4gICAgICAgICAgICBEZXBlbmRlbmN5UHJvcGVydHkuUmVnaXN0ZXIoXCJGaWx0ZXJcIiwgdHlwZW9mKHN0cmluZyksIHR5cGVvZihDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKSwgbmV3IFByb3BlcnR5TWV0YWRhdGEoXCJcIiwgRmlsdGVyX0NoYW5nZWQpKTtcclxuXHJcbiAgICAgICAgc3RhdGljIHZvaWQgRmlsdGVyX0NoYW5nZWQoRGVwZW5kZW5jeU9iamVjdCBkLCBEZXBlbmRlbmN5UHJvcGVydHlDaGFuZ2VkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbCA9IChDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKWQ7XHJcbiAgICAgICAgICAgIGlmIChDU2hhcnBYYW1sRm9ySHRtbDUuRG9tTWFuYWdlbWVudC5Jc0NvbnRyb2xJblZpc3VhbFRyZWUoY29udHJvbCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuU2V0RmlsdGVyKChlLk5ld1ZhbHVlID8/IFwiXCIpLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaWxlT3BlbmVkRXZlbnRBcmdzIDogRXZlbnRBcmdzXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIlRleHRcIlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW09ic29sZXRlXVxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgUGxhaW5UZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIlRleHRcIi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgVGV4dDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIkRhdGFVUkxcIi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgRGF0YVVSTDtcclxuXHJcbiAgICAgICAgcHVibGljIEZpbGVPcGVuZWRFdmVudEFyZ3Mob2JqZWN0IHJlc3VsdCwgUmVzdWx0S2luZCByZXN1bHRLaW5kKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdEtpbmQgPT0gUmVzdWx0S2luZC5UZXh0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRleHQgPSB0aGlzLlBsYWluVGV4dENvbnRlbnQgPSAocmVzdWx0ID8/IFwiXCIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0S2luZCA9PSBSZXN1bHRLaW5kLkRhdGFVUkwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGF0YVVSTCA9IChyZXN1bHQgPz8gXCJcIikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RTdXBwb3J0ZWRFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBSZXN1bHRLaW5kXHJcbiAgICB7XHJcbiAgICAgICAgVGV4dCwgRGF0YVVSTFxyXG4gICAgfVxyXG59XHJcbiJdCn0K
