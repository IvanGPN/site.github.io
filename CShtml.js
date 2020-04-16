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


                var ResourceDictionary_5579f29fa19143dda572770a781b291d = new Bridge.global.Windows.UI.Xaml.ResourceDictionary();
                this.Resources = ResourceDictionary_5579f29fa19143dda572770a781b291d;

                this.Resources = ResourceDictionary_5579f29fa19143dda572770a781b291d;







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
            idef_Jpeg: null,
            borderIDEF: null,
            uml_Jpeg: null,
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
                    bitmapIDEF.UriSource = new System.Uri("img/idef0.png", System.UriKind.Relative);
                    this.idef_Jpeg.Source = bitmapIDEF;
                    this.idef_Jpeg.Visibility = Windows.UI.Xaml.Visibility.Visible;

                    var bitmapUML = new Windows.UI.Xaml.Media.Imaging.BitmapImage.ctor();
                    bitmapUML.UriSource = new System.Uri("img/uml.png", System.UriKind.Relative);
                    this.uml_Jpeg.Source = bitmapUML;
                    this.uml_Jpeg.Visibility = Windows.UI.Xaml.Visibility.Visible;

                    Windows.UI.Xaml.MessageBox.Show("\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e. \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u043c\u0435\u043d\u044e \u043d\u0430 \u043d\u0443\u0436\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443!");
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



                var Grid_47f7851ff86e4f19bef7a17bec566dc8 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_ee82d0d579c64609a56e984f462a162c = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_ee82d0d579c64609a56e984f462a162c.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_ee82d0d579c64609a56e984f462a162c.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_598fd74782a14ca1929576d19957899a = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_598fd74782a14ca1929576d19957899a.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_598fd74782a14ca1929576d19957899a.Offset = 0.0;

                var GradientStop_451a368e20c54d2bbcd8a2b873ae986c = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_451a368e20c54d2bbcd8a2b873ae986c.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_451a368e20c54d2bbcd8a2b873ae986c.Offset = 1.0;

                LinearGradientBrush_ee82d0d579c64609a56e984f462a162c.GradientStops.add(GradientStop_598fd74782a14ca1929576d19957899a);
                LinearGradientBrush_ee82d0d579c64609a56e984f462a162c.GradientStops.add(GradientStop_451a368e20c54d2bbcd8a2b873ae986c);


                Grid_47f7851ff86e4f19bef7a17bec566dc8.Background = LinearGradientBrush_ee82d0d579c64609a56e984f462a162c;

                var RowDefinition_535f8ce87b914c999d9be307526ee17a = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_535f8ce87b914c999d9be307526ee17a.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_a81ddff1fa02431795aebeeec197438f = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_a81ddff1fa02431795aebeeec197438f.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_4e846b0839da41449fc1e6f11592dc80 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_4e846b0839da41449fc1e6f11592dc80.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_47f7851ff86e4f19bef7a17bec566dc8.RowDefinitions.add(RowDefinition_535f8ce87b914c999d9be307526ee17a);
                Grid_47f7851ff86e4f19bef7a17bec566dc8.RowDefinitions.add(RowDefinition_a81ddff1fa02431795aebeeec197438f);
                Grid_47f7851ff86e4f19bef7a17bec566dc8.RowDefinitions.add(RowDefinition_4e846b0839da41449fc1e6f11592dc80);

                var ColumnDefinition_f84fcd59549d4492999d006b57ef98fc = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();
                ColumnDefinition_f84fcd59549d4492999d006b57ef98fc.Width = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var ColumnDefinition_7ec8e5d896c34f73a83de65c4154ac9e = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_47f7851ff86e4f19bef7a17bec566dc8.ColumnDefinitions.add(ColumnDefinition_f84fcd59549d4492999d006b57ef98fc);
                Grid_47f7851ff86e4f19bef7a17bec566dc8.ColumnDefinitions.add(ColumnDefinition_7ec8e5d896c34f73a83de65c4154ac9e);

                var Border_afb138ec14724cfc88e9d2969bf1477f = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("elementForList", Border_afb138ec14724cfc88e9d2969bf1477f);
                Border_afb138ec14724cfc88e9d2969bf1477f.Name = "elementForList";
                Border_afb138ec14724cfc88e9d2969bf1477f.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_afb138ec14724cfc88e9d2969bf1477f, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_afb138ec14724cfc88e9d2969bf1477f, 3);
                Border_afb138ec14724cfc88e9d2969bf1477f.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_afb138ec14724cfc88e9d2969bf1477f.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_afb138ec14724cfc88e9d2969bf1477f.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var Grid_37c850d6e5274a06be7e618c91193b58 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_7a4f251a33d94121aea316cc81fdea08 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_7a4f251a33d94121aea316cc81fdea08.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_7a4f251a33d94121aea316cc81fdea08.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_5dd9e0ee603e4908a7eccef3ce5e0d56 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_5dd9e0ee603e4908a7eccef3ce5e0d56.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_5dd9e0ee603e4908a7eccef3ce5e0d56.Offset = 0.0;

                var GradientStop_5ae5d51f6d8c4863ad8c5700821be585 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_5ae5d51f6d8c4863ad8c5700821be585.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_5ae5d51f6d8c4863ad8c5700821be585.Offset = 1.0;

                LinearGradientBrush_7a4f251a33d94121aea316cc81fdea08.GradientStops.add(GradientStop_5dd9e0ee603e4908a7eccef3ce5e0d56);
                LinearGradientBrush_7a4f251a33d94121aea316cc81fdea08.GradientStops.add(GradientStop_5ae5d51f6d8c4863ad8c5700821be585);


                Grid_37c850d6e5274a06be7e618c91193b58.Background = LinearGradientBrush_7a4f251a33d94121aea316cc81fdea08;

                var RowDefinition_d5fec4bdffe744b49ee81743670334eb = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_2f9dbfa12f6147b7bb4e42007970318a = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_2f9dbfa12f6147b7bb4e42007970318a.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_2fe04e79861d464babb65b6107f18492 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_2fe04e79861d464babb65b6107f18492.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_a908fca0eb32481f85e02e974cae7197 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_a908fca0eb32481f85e02e974cae7197.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_2902229bb841411493f9cbcf0df05d03 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_37c850d6e5274a06be7e618c91193b58.RowDefinitions.add(RowDefinition_d5fec4bdffe744b49ee81743670334eb);
                Grid_37c850d6e5274a06be7e618c91193b58.RowDefinitions.add(RowDefinition_2f9dbfa12f6147b7bb4e42007970318a);
                Grid_37c850d6e5274a06be7e618c91193b58.RowDefinitions.add(RowDefinition_2fe04e79861d464babb65b6107f18492);
                Grid_37c850d6e5274a06be7e618c91193b58.RowDefinitions.add(RowDefinition_a908fca0eb32481f85e02e974cae7197);
                Grid_37c850d6e5274a06be7e618c91193b58.RowDefinitions.add(RowDefinition_2902229bb841411493f9cbcf0df05d03);

                var Button_7de746225688425397277340469848be = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_7de746225688425397277340469848be, 1);
                Button_7de746225688425397277340469848be.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_7de746225688425397277340469848be.Content = "JSON";
                Button_7de746225688425397277340469848be.FontSize = 20.0;
                Button_7de746225688425397277340469848be.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_7de746225688425397277340469848be.addClick(Bridge.fn.cacheBind(this, this.First_Click));

                var Button_db742c398acc41beb63d54100ed2ff98 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_db742c398acc41beb63d54100ed2ff98, 2);
                Button_db742c398acc41beb63d54100ed2ff98.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_db742c398acc41beb63d54100ed2ff98.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 IDEF0";
                Button_db742c398acc41beb63d54100ed2ff98.FontSize = 20.0;
                Button_db742c398acc41beb63d54100ed2ff98.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_db742c398acc41beb63d54100ed2ff98.addClick(Bridge.fn.cacheBind(this, this.Second_Click));

                var Button_1bddb8c039af4df4ae25a9e55a60c1b0 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_1bddb8c039af4df4ae25a9e55a60c1b0, 3);
                Button_1bddb8c039af4df4ae25a9e55a60c1b0.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_1bddb8c039af4df4ae25a9e55a60c1b0.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 UML";
                Button_1bddb8c039af4df4ae25a9e55a60c1b0.FontSize = 20.0;
                Button_1bddb8c039af4df4ae25a9e55a60c1b0.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_1bddb8c039af4df4ae25a9e55a60c1b0.addClick(Bridge.fn.cacheBind(this, this.Third_Click));

                Grid_37c850d6e5274a06be7e618c91193b58.Children.add(Button_7de746225688425397277340469848be);
                Grid_37c850d6e5274a06be7e618c91193b58.Children.add(Button_db742c398acc41beb63d54100ed2ff98);
                Grid_37c850d6e5274a06be7e618c91193b58.Children.add(Button_1bddb8c039af4df4ae25a9e55a60c1b0);


                Border_afb138ec14724cfc88e9d2969bf1477f.Child = Grid_37c850d6e5274a06be7e618c91193b58;


                var Border_d4712ffab1584596864ee768b8c934ab = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_d4712ffab1584596864ee768b8c934ab);
                Border_d4712ffab1584596864ee768b8c934ab.Name = "element";
                Border_d4712ffab1584596864ee768b8c934ab.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_d4712ffab1584596864ee768b8c934ab, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_d4712ffab1584596864ee768b8c934ab, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_d4712ffab1584596864ee768b8c934ab, 1);
                Border_d4712ffab1584596864ee768b8c934ab.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_d4712ffab1584596864ee768b8c934ab.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_d4712ffab1584596864ee768b8c934ab.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_b6db9ad65f724149a0b7f3c71f4ff2e3 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_b6db9ad65f724149a0b7f3c71f4ff2e3.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_b6db9ad65f724149a0b7f3c71f4ff2e3.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_4916f4996aa14f2f8f5ee7fb215f8511 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_4916f4996aa14f2f8f5ee7fb215f8511.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_4916f4996aa14f2f8f5ee7fb215f8511.Offset = 0.0;

                var GradientStop_258dabf66fc54c42bab855612e25ca41 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_258dabf66fc54c42bab855612e25ca41.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_258dabf66fc54c42bab855612e25ca41.Offset = 1.0;

                LinearGradientBrush_b6db9ad65f724149a0b7f3c71f4ff2e3.GradientStops.add(GradientStop_4916f4996aa14f2f8f5ee7fb215f8511);
                LinearGradientBrush_b6db9ad65f724149a0b7f3c71f4ff2e3.GradientStops.add(GradientStop_258dabf66fc54c42bab855612e25ca41);


                Border_d4712ffab1584596864ee768b8c934ab.Background = LinearGradientBrush_b6db9ad65f724149a0b7f3c71f4ff2e3;

                var Grid_8b8c091087934e9d93ad45adcf5b5d44 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutGrid", Grid_8b8c091087934e9d93ad45adcf5b5d44);
                Grid_8b8c091087934e9d93ad45adcf5b5d44.Name = "LayoutGrid";
                var LinearGradientBrush_ae1bba29307b4d48976539848064e34b = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_ae1bba29307b4d48976539848064e34b.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_ae1bba29307b4d48976539848064e34b.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_12d0eb5bd47d4671af9da866ef836e13 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_12d0eb5bd47d4671af9da866ef836e13.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_12d0eb5bd47d4671af9da866ef836e13.Offset = 0.0;

                var GradientStop_1dc362848c344e2698a597dcbc2b3057 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_1dc362848c344e2698a597dcbc2b3057.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_1dc362848c344e2698a597dcbc2b3057.Offset = 1.0;

                LinearGradientBrush_ae1bba29307b4d48976539848064e34b.GradientStops.add(GradientStop_12d0eb5bd47d4671af9da866ef836e13);
                LinearGradientBrush_ae1bba29307b4d48976539848064e34b.GradientStops.add(GradientStop_1dc362848c344e2698a597dcbc2b3057);


                Grid_8b8c091087934e9d93ad45adcf5b5d44.Background = LinearGradientBrush_ae1bba29307b4d48976539848064e34b;

                var RowDefinition_6b497382848b4094b201ffb7390bc58e = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_6b497382848b4094b201ffb7390bc58e.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_d6565cc5100d4335ae8e1e9c986e23ab = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_d6565cc5100d4335ae8e1e9c986e23ab.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_25c2f270e06a4bfc97ed40735bbacb87 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_25c2f270e06a4bfc97ed40735bbacb87.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_8b8c091087934e9d93ad45adcf5b5d44.RowDefinitions.add(RowDefinition_6b497382848b4094b201ffb7390bc58e);
                Grid_8b8c091087934e9d93ad45adcf5b5d44.RowDefinitions.add(RowDefinition_d6565cc5100d4335ae8e1e9c986e23ab);
                Grid_8b8c091087934e9d93ad45adcf5b5d44.RowDefinitions.add(RowDefinition_25c2f270e06a4bfc97ed40735bbacb87);

                var ColumnDefinition_c51fe3667b6e4cea99176039523a91dc = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_78715e7798984f9699b8a53ca0023c0f = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_8b8c091087934e9d93ad45adcf5b5d44.ColumnDefinitions.add(ColumnDefinition_c51fe3667b6e4cea99176039523a91dc);
                Grid_8b8c091087934e9d93ad45adcf5b5d44.ColumnDefinitions.add(ColumnDefinition_78715e7798984f9699b8a53ca0023c0f);

                var Button_a01c028b5802401fa8fcd629ff792fb8 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnCancel", Button_a01c028b5802401fa8fcd629ff792fb8);
                Button_a01c028b5802401fa8fcd629ff792fb8.Name = "btnCancel";
                Button_a01c028b5802401fa8fcd629ff792fb8.Content = "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_a01c028b5802401fa8fcd629ff792fb8, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_a01c028b5802401fa8fcd629ff792fb8, 2);
                Button_a01c028b5802401fa8fcd629ff792fb8.Width = 280.0;
                Button_a01c028b5802401fa8fcd629ff792fb8.Height = 50.0;
                Button_a01c028b5802401fa8fcd629ff792fb8.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_a01c028b5802401fa8fcd629ff792fb8.FontSize = 25.0;
                Button_a01c028b5802401fa8fcd629ff792fb8.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_a01c028b5802401fa8fcd629ff792fb8.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_a01c028b5802401fa8fcd629ff792fb8.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                var ControlTemplate_1e24db4cf9364f6b85568de56ad87a82 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_1e24db4cf9364f6b85568de56ad87a82.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_1e24db4cf9364f6b85568de56ad87a82.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_1e24db4cf9364f6b85568de56ad87a82));

                Button_a01c028b5802401fa8fcd629ff792fb8.Template = ControlTemplate_1e24db4cf9364f6b85568de56ad87a82;


                var Button_c3465e9dcf8141e1bec0b71257d7c961 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnUpload", Button_c3465e9dcf8141e1bec0b71257d7c961);
                Button_c3465e9dcf8141e1bec0b71257d7c961.Name = "btnUpload";
                Button_c3465e9dcf8141e1bec0b71257d7c961.Content = "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c JSON \u0444\u0430\u0439\u043b";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_c3465e9dcf8141e1bec0b71257d7c961, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_c3465e9dcf8141e1bec0b71257d7c961, 1);
                Button_c3465e9dcf8141e1bec0b71257d7c961.Width = 280.0;
                Button_c3465e9dcf8141e1bec0b71257d7c961.Height = 50.0;
                Button_c3465e9dcf8141e1bec0b71257d7c961.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_c3465e9dcf8141e1bec0b71257d7c961.FontSize = 25.0;
                Button_c3465e9dcf8141e1bec0b71257d7c961.addClick(Bridge.fn.cacheBind(this, this.BtnUpload_Click));
                Button_c3465e9dcf8141e1bec0b71257d7c961.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_c3465e9dcf8141e1bec0b71257d7c961.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_c3465e9dcf8141e1bec0b71257d7c961.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_c3465e9dcf8141e1bec0b71257d7c961.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                var ControlTemplate_dce9bbe23e86471c8d11702a21c04c43 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_dce9bbe23e86471c8d11702a21c04c43.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_dce9bbe23e86471c8d11702a21c04c43.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_dce9bbe23e86471c8d11702a21c04c43));

                Button_c3465e9dcf8141e1bec0b71257d7c961.Template = ControlTemplate_dce9bbe23e86471c8d11702a21c04c43;


                var Button_6ebcfb675875403fb9427a3811227b84 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnProcessing", Button_6ebcfb675875403fb9427a3811227b84);
                Button_6ebcfb675875403fb9427a3811227b84.Name = "btnProcessing";
                Button_6ebcfb675875403fb9427a3811227b84.Content = "\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0443";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_6ebcfb675875403fb9427a3811227b84, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_6ebcfb675875403fb9427a3811227b84, 1);
                Button_6ebcfb675875403fb9427a3811227b84.Width = 280.0;
                Button_6ebcfb675875403fb9427a3811227b84.Height = 50.0;
                Button_6ebcfb675875403fb9427a3811227b84.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_6ebcfb675875403fb9427a3811227b84.FontSize = 25.0;
                Button_6ebcfb675875403fb9427a3811227b84.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_6ebcfb675875403fb9427a3811227b84.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_6ebcfb675875403fb9427a3811227b84.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_6ebcfb675875403fb9427a3811227b84.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_6ebcfb675875403fb9427a3811227b84.addClick(Bridge.fn.cacheBind(this, this.BtnProcessing_Click));
                var ControlTemplate_842743c1ccc749e68cdf68acfcb73a73 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_842743c1ccc749e68cdf68acfcb73a73.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_842743c1ccc749e68cdf68acfcb73a73.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_842743c1ccc749e68cdf68acfcb73a73));

                Button_6ebcfb675875403fb9427a3811227b84.Template = ControlTemplate_842743c1ccc749e68cdf68acfcb73a73;


                var TextBox_98b933ec917b42518a9c0d1e44e69ee2 = new Bridge.global.Windows.UI.Xaml.Controls.TextBox();
                this.RegisterName$1("txtFile", TextBox_98b933ec917b42518a9c0d1e44e69ee2);
                TextBox_98b933ec917b42518a9c0d1e44e69ee2.Name = "txtFile";
                TextBox_98b933ec917b42518a9c0d1e44e69ee2.TextWrapping = Bridge.global.Windows.UI.Xaml.TextWrapping.Wrap;
                TextBox_98b933ec917b42518a9c0d1e44e69ee2.Text = "";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(TextBox_98b933ec917b42518a9c0d1e44e69ee2, 1);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(TextBox_98b933ec917b42518a9c0d1e44e69ee2, 2);
                TextBox_98b933ec917b42518a9c0d1e44e69ee2.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(10, -20, 10, -20);
                TextBox_98b933ec917b42518a9c0d1e44e69ee2.FontSize = 20.0;
                TextBox_98b933ec917b42518a9c0d1e44e69ee2.VerticalScrollBarVisibility = Bridge.global.Windows.UI.Xaml.Controls.ScrollBarVisibility.Auto;

                var Border_984e2db98ddd45ff9cd7b20136a93b61 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderIDEF", Border_984e2db98ddd45ff9cd7b20136a93b61);
                Border_984e2db98ddd45ff9cd7b20136a93b61.Name = "borderIDEF";
                Border_984e2db98ddd45ff9cd7b20136a93b61.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_984e2db98ddd45ff9cd7b20136a93b61.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_984e2db98ddd45ff9cd7b20136a93b61, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_984e2db98ddd45ff9cd7b20136a93b61, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_984e2db98ddd45ff9cd7b20136a93b61, 2);
                Border_984e2db98ddd45ff9cd7b20136a93b61.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_984e2db98ddd45ff9cd7b20136a93b61.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_984e2db98ddd45ff9cd7b20136a93b61.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                Border_984e2db98ddd45ff9cd7b20136a93b61.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));
                var Image_bcb3ad20607347f79b0116d36318d8d2 = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                this.RegisterName$1("idef_Jpeg", Image_bcb3ad20607347f79b0116d36318d8d2);
                Image_bcb3ad20607347f79b0116d36318d8d2.Name = "idef_Jpeg";
                Image_bcb3ad20607347f79b0116d36318d8d2.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Fill;
                Image_bcb3ad20607347f79b0116d36318d8d2.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;

                Border_984e2db98ddd45ff9cd7b20136a93b61.Child = Image_bcb3ad20607347f79b0116d36318d8d2;


                var Border_cc9efafce2be4d098983a12064d6b78d = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderUML", Border_cc9efafce2be4d098983a12064d6b78d);
                Border_cc9efafce2be4d098983a12064d6b78d.Name = "borderUML";
                Border_cc9efafce2be4d098983a12064d6b78d.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_cc9efafce2be4d098983a12064d6b78d.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_cc9efafce2be4d098983a12064d6b78d, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_cc9efafce2be4d098983a12064d6b78d, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_cc9efafce2be4d098983a12064d6b78d, 2);
                Border_cc9efafce2be4d098983a12064d6b78d.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_cc9efafce2be4d098983a12064d6b78d.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_cc9efafce2be4d098983a12064d6b78d.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                Border_cc9efafce2be4d098983a12064d6b78d.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));
                var Image_1c0fc703a526489596a7f920886f7e36 = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                this.RegisterName$1("uml_Jpeg", Image_1c0fc703a526489596a7f920886f7e36);
                Image_1c0fc703a526489596a7f920886f7e36.Name = "uml_Jpeg";
                Image_1c0fc703a526489596a7f920886f7e36.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Fill;
                Image_1c0fc703a526489596a7f920886f7e36.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;

                Border_cc9efafce2be4d098983a12064d6b78d.Child = Image_1c0fc703a526489596a7f920886f7e36;


                Grid_8b8c091087934e9d93ad45adcf5b5d44.Children.add(Button_a01c028b5802401fa8fcd629ff792fb8);
                Grid_8b8c091087934e9d93ad45adcf5b5d44.Children.add(Button_c3465e9dcf8141e1bec0b71257d7c961);
                Grid_8b8c091087934e9d93ad45adcf5b5d44.Children.add(Button_6ebcfb675875403fb9427a3811227b84);
                Grid_8b8c091087934e9d93ad45adcf5b5d44.Children.add(TextBox_98b933ec917b42518a9c0d1e44e69ee2);
                Grid_8b8c091087934e9d93ad45adcf5b5d44.Children.add(Border_984e2db98ddd45ff9cd7b20136a93b61);
                Grid_8b8c091087934e9d93ad45adcf5b5d44.Children.add(Border_cc9efafce2be4d098983a12064d6b78d);


                Border_d4712ffab1584596864ee768b8c934ab.Child = Grid_8b8c091087934e9d93ad45adcf5b5d44;


                Grid_47f7851ff86e4f19bef7a17bec566dc8.Children.add(Border_afb138ec14724cfc88e9d2969bf1477f);
                Grid_47f7851ff86e4f19bef7a17bec566dc8.Children.add(Border_d4712ffab1584596864ee768b8c934ab);


                this.Content = Grid_47f7851ff86e4f19bef7a17bec566dc8;



                this.elementForList = Border_afb138ec14724cfc88e9d2969bf1477f;
                this.btnCancel = Button_a01c028b5802401fa8fcd629ff792fb8;
                this.btnUpload = Button_c3465e9dcf8141e1bec0b71257d7c961;
                this.btnProcessing = Button_6ebcfb675875403fb9427a3811227b84;
                this.txtFile = TextBox_98b933ec917b42518a9c0d1e44e69ee2;
                this.idef_Jpeg = Image_bcb3ad20607347f79b0116d36318d8d2;
                this.borderIDEF = Border_984e2db98ddd45ff9cd7b20136a93b61;
                this.uml_Jpeg = Image_1c0fc703a526489596a7f920886f7e36;
                this.borderUML = Border_cc9efafce2be4d098983a12064d6b78d;
                this.LayoutGrid = Grid_8b8c091087934e9d93ad45adcf5b5d44;
                this.element = Border_d4712ffab1584596864ee768b8c934ab;



            },
            accessVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_8dfc23c440004cfb8c6f48f712194036: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_8dfc23c440004cfb8c6f48f712194036: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_8dfc23c440004cfb8c6f48f712194036: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_8dfc23c440004cfb8c6f48f712194036: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_8dfc23c440004cfb8c6f48f712194036: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_1e24db4cf9364f6b85568de56ad87a82: function (templateOwner) {
                var templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd.TemplateOwner = templateOwner;
                var Border_6a81288b4dff4181a741d598cf28fa9a = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_6a81288b4dff4181a741d598cf28fa9a);
                Border_6a81288b4dff4181a741d598cf28fa9a.Name = "OuterBorder";
                Border_6a81288b4dff4181a741d598cf28fa9a.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_b222398e151044c4bf0a0de089c8235d = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_b222398e151044c4bf0a0de089c8235d);
                VisualStateGroup_b222398e151044c4bf0a0de089c8235d.Name = "CommonStates";
                var VisualState_ee93f521b12d49988623bf41af1a8744 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_ee93f521b12d49988623bf41af1a8744);
                VisualState_ee93f521b12d49988623bf41af1a8744.Name = "Normal";

                var VisualState_057ec3605f7e492883f493752b553f69 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_057ec3605f7e492883f493752b553f69);
                VisualState_057ec3605f7e492883f493752b553f69.Name = "PointerOver";
                var Storyboard_163081fb46da49099a2ade3115fccb14 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_2b82b892fc23478fa0a2e8259fc4718b = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_2b82b892fc23478fa0a2e8259fc4718b, "InnerBorder");
                var DiscreteObjectKeyFrame_929dbe8d566e4409b99bb56f4a19a81a = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_929dbe8d566e4409b99bb56f4a19a81a.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_929dbe8d566e4409b99bb56f4a19a81a.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_2b82b892fc23478fa0a2e8259fc4718b.KeyFrames.add(DiscreteObjectKeyFrame_929dbe8d566e4409b99bb56f4a19a81a);


                Storyboard_163081fb46da49099a2ade3115fccb14.Children.add(ObjectAnimationUsingKeyFrames_2b82b892fc23478fa0a2e8259fc4718b);


                VisualState_057ec3605f7e492883f493752b553f69.Storyboard = Storyboard_163081fb46da49099a2ade3115fccb14;


                var VisualState_adc6ddd4ea454b90a657dc6fda4f28a6 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_adc6ddd4ea454b90a657dc6fda4f28a6);
                VisualState_adc6ddd4ea454b90a657dc6fda4f28a6.Name = "Pressed";
                var Storyboard_aadbb4770e124bde88cf5239504a8503 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_4a0551a4d9944cff87c867c8b11c1cff = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_4a0551a4d9944cff87c867c8b11c1cff, "InnerBorder");
                var DiscreteObjectKeyFrame_64a3ef33f86a4fd1894dedb99e775d36 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_64a3ef33f86a4fd1894dedb99e775d36.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_64a3ef33f86a4fd1894dedb99e775d36.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_4a0551a4d9944cff87c867c8b11c1cff.KeyFrames.add(DiscreteObjectKeyFrame_64a3ef33f86a4fd1894dedb99e775d36);


                Storyboard_aadbb4770e124bde88cf5239504a8503.Children.add(ObjectAnimationUsingKeyFrames_4a0551a4d9944cff87c867c8b11c1cff);


                VisualState_adc6ddd4ea454b90a657dc6fda4f28a6.Storyboard = Storyboard_aadbb4770e124bde88cf5239504a8503;


                var VisualState_76e12a8bfa184066b28500de0991fbe8 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_76e12a8bfa184066b28500de0991fbe8);
                VisualState_76e12a8bfa184066b28500de0991fbe8.Name = "Disabled";
                var Storyboard_85ebbb0d43b043b89fd9a5b3a03ff995 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_dea3bf9d02544ba4813c7666c31e4301 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_dea3bf9d02544ba4813c7666c31e4301, "InnerBorder");
                var DiscreteObjectKeyFrame_6c5ad1721c9341d49c59dbd92077f48c = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_6c5ad1721c9341d49c59dbd92077f48c.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_6c5ad1721c9341d49c59dbd92077f48c.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_dea3bf9d02544ba4813c7666c31e4301.KeyFrames.add(DiscreteObjectKeyFrame_6c5ad1721c9341d49c59dbd92077f48c);


                Storyboard_85ebbb0d43b043b89fd9a5b3a03ff995.Children.add(ObjectAnimationUsingKeyFrames_dea3bf9d02544ba4813c7666c31e4301);


                VisualState_76e12a8bfa184066b28500de0991fbe8.Storyboard = Storyboard_85ebbb0d43b043b89fd9a5b3a03ff995;


                System.Array.add(VisualStateGroup_b222398e151044c4bf0a0de089c8235d.States, VisualState_ee93f521b12d49988623bf41af1a8744, Object);
                System.Array.add(VisualStateGroup_b222398e151044c4bf0a0de089c8235d.States, VisualState_057ec3605f7e492883f493752b553f69, Object);
                System.Array.add(VisualStateGroup_b222398e151044c4bf0a0de089c8235d.States, VisualState_adc6ddd4ea454b90a657dc6fda4f28a6, Object);
                System.Array.add(VisualStateGroup_b222398e151044c4bf0a0de089c8235d.States, VisualState_76e12a8bfa184066b28500de0991fbe8, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_b222398e151044c4bf0a0de089c8235d);

                var Border_98c2175dfa804260b12655c0892961ff = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_98c2175dfa804260b12655c0892961ff);
                Border_98c2175dfa804260b12655c0892961ff.Name = "InnerBorder";
                Border_98c2175dfa804260b12655c0892961ff.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_b0abdf7a1fec45459c60274fc8d6cb33 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_b0abdf7a1fec45459c60274fc8d6cb33);
                ContentPresenter_b0abdf7a1fec45459c60274fc8d6cb33.Name = "ContentPresenter";
                var Binding_8c1b8274cdbd438f9434958afdfee050 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8c1b8274cdbd438f9434958afdfee050.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_47b64e61fee746bb87fc0fd191fcd939 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_47b64e61fee746bb87fc0fd191fcd939.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8c1b8274cdbd438f9434958afdfee050.RelativeSource = RelativeSource_47b64e61fee746bb87fc0fd191fcd939;


                Binding_8c1b8274cdbd438f9434958afdfee050.TemplateOwner = templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;

                var Binding_981d06f6674d4846ba9bbe6af320ec26 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_981d06f6674d4846ba9bbe6af320ec26.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_7e3c1e2c0fd542e89feca769a903b400 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_7e3c1e2c0fd542e89feca769a903b400.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_981d06f6674d4846ba9bbe6af320ec26.RelativeSource = RelativeSource_7e3c1e2c0fd542e89feca769a903b400;


                Binding_981d06f6674d4846ba9bbe6af320ec26.TemplateOwner = templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;

                var Binding_26260bab35e2466db0f65179c1ddfe22 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_26260bab35e2466db0f65179c1ddfe22.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_d8d424136b6d432ca3168becc5319bcf = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d8d424136b6d432ca3168becc5319bcf.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_26260bab35e2466db0f65179c1ddfe22.RelativeSource = RelativeSource_d8d424136b6d432ca3168becc5319bcf;


                Binding_26260bab35e2466db0f65179c1ddfe22.TemplateOwner = templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;

                var Binding_45dd13e53c1b4327bbaa60a282fba20f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_45dd13e53c1b4327bbaa60a282fba20f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_ab3142f0e5b749fc8cc4f81f3ed54319 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ab3142f0e5b749fc8cc4f81f3ed54319.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_45dd13e53c1b4327bbaa60a282fba20f.RelativeSource = RelativeSource_ab3142f0e5b749fc8cc4f81f3ed54319;


                Binding_45dd13e53c1b4327bbaa60a282fba20f.TemplateOwner = templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;

                var Binding_3dccbbc0a2834f6688b984d66b737f9f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_3dccbbc0a2834f6688b984d66b737f9f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_31829154410943c198fb15f7951d9d2c = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_31829154410943c198fb15f7951d9d2c.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_3dccbbc0a2834f6688b984d66b737f9f.RelativeSource = RelativeSource_31829154410943c198fb15f7951d9d2c;


                Binding_3dccbbc0a2834f6688b984d66b737f9f.TemplateOwner = templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;


                Border_98c2175dfa804260b12655c0892961ff.Child = ContentPresenter_b0abdf7a1fec45459c60274fc8d6cb33;

                var Binding_e29d253336614f99981e2eec2aa7e0b8 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e29d253336614f99981e2eec2aa7e0b8.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_d9aae191c753417aab5b64bfa9c95b27 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d9aae191c753417aab5b64bfa9c95b27.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e29d253336614f99981e2eec2aa7e0b8.RelativeSource = RelativeSource_d9aae191c753417aab5b64bfa9c95b27;


                Binding_e29d253336614f99981e2eec2aa7e0b8.TemplateOwner = templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;


                Border_6a81288b4dff4181a741d598cf28fa9a.Child = Border_98c2175dfa804260b12655c0892961ff;

                var Binding_9b1f13d50bc44e2ca48f127a499ffda9 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_9b1f13d50bc44e2ca48f127a499ffda9.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_e2aac2054a694177981f5b965d980442 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e2aac2054a694177981f5b965d980442.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_9b1f13d50bc44e2ca48f127a499ffda9.RelativeSource = RelativeSource_e2aac2054a694177981f5b965d980442;


                Binding_9b1f13d50bc44e2ca48f127a499ffda9.TemplateOwner = templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;

                var Binding_d3ef90787fee4d50acb599eadb88aa07 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d3ef90787fee4d50acb599eadb88aa07.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_0064790f307248f48fe4258343547725 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_0064790f307248f48fe4258343547725.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d3ef90787fee4d50acb599eadb88aa07.RelativeSource = RelativeSource_0064790f307248f48fe4258343547725;


                Binding_d3ef90787fee4d50acb599eadb88aa07.TemplateOwner = templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;

                var Binding_e3e8abfe5cb94406a86f8815b4aba788 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e3e8abfe5cb94406a86f8815b4aba788.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_6f5c6d05062146aeb33b47ada3e84a18 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_6f5c6d05062146aeb33b47ada3e84a18.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e3e8abfe5cb94406a86f8815b4aba788.RelativeSource = RelativeSource_6f5c6d05062146aeb33b47ada3e84a18;


                Binding_e3e8abfe5cb94406a86f8815b4aba788.TemplateOwner = templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;



                ContentPresenter_b0abdf7a1fec45459c60274fc8d6cb33.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_8c1b8274cdbd438f9434958afdfee050);
                ContentPresenter_b0abdf7a1fec45459c60274fc8d6cb33.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_981d06f6674d4846ba9bbe6af320ec26);
                ContentPresenter_b0abdf7a1fec45459c60274fc8d6cb33.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_26260bab35e2466db0f65179c1ddfe22);
                ContentPresenter_b0abdf7a1fec45459c60274fc8d6cb33.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_45dd13e53c1b4327bbaa60a282fba20f);
                ContentPresenter_b0abdf7a1fec45459c60274fc8d6cb33.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_3dccbbc0a2834f6688b984d66b737f9f);
                Border_98c2175dfa804260b12655c0892961ff.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_e29d253336614f99981e2eec2aa7e0b8);
                Border_6a81288b4dff4181a741d598cf28fa9a.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_9b1f13d50bc44e2ca48f127a499ffda9);
                Border_6a81288b4dff4181a741d598cf28fa9a.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_d3ef90787fee4d50acb599eadb88aa07);
                Border_6a81288b4dff4181a741d598cf28fa9a.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_e3e8abfe5cb94406a86f8815b4aba788);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_2b82b892fc23478fa0a2e8259fc4718b, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4), Bridge.fn.cacheBind(this, this.setVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4), Bridge.fn.cacheBind(this, this.getVisualStateProperty_87f530113dfa4bdb98bb4ce9773d17d4)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_2b82b892fc23478fa0a2e8259fc4718b, Border_98c2175dfa804260b12655c0892961ff);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_4a0551a4d9944cff87c867c8b11c1cff, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_8dfc23c440004cfb8c6f48f712194036), Bridge.fn.cacheBind(this, this.setVisualStateProperty_8dfc23c440004cfb8c6f48f712194036), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_8dfc23c440004cfb8c6f48f712194036), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_8dfc23c440004cfb8c6f48f712194036), Bridge.fn.cacheBind(this, this.getVisualStateProperty_8dfc23c440004cfb8c6f48f712194036)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_4a0551a4d9944cff87c867c8b11c1cff, Border_98c2175dfa804260b12655c0892961ff);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_dea3bf9d02544ba4813c7666c31e4301, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7), Bridge.fn.cacheBind(this, this.setVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7), Bridge.fn.cacheBind(this, this.getVisualStateProperty_38e88cac8d07498b8269c7bca5f6ebc7)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_dea3bf9d02544ba4813c7666c31e4301, Border_98c2175dfa804260b12655c0892961ff);

                templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd.TemplateContent = Border_6a81288b4dff4181a741d598cf28fa9a;
                return templateInstance_f3de7b703abc40a9a7ed8e5f893d7bdd;
            },
            accessVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_6cf1a0d26293496b913ac343e74852b4: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_6cf1a0d26293496b913ac343e74852b4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_6cf1a0d26293496b913ac343e74852b4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_6cf1a0d26293496b913ac343e74852b4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_6cf1a0d26293496b913ac343e74852b4: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_dce9bbe23e86471c8d11702a21c04c43: function (templateOwner) {
                var templateInstance_f296eab39ec34421ae4ba808d5768f7e = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_f296eab39ec34421ae4ba808d5768f7e.TemplateOwner = templateOwner;
                var Border_a303af2cda80489dbe56dfd559baa2b3 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_a303af2cda80489dbe56dfd559baa2b3);
                Border_a303af2cda80489dbe56dfd559baa2b3.Name = "OuterBorder";
                Border_a303af2cda80489dbe56dfd559baa2b3.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_3789b54fcaa540159d3c7ae9c1a3e83e = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_3789b54fcaa540159d3c7ae9c1a3e83e);
                VisualStateGroup_3789b54fcaa540159d3c7ae9c1a3e83e.Name = "CommonStates";
                var VisualState_96ddbfafd57543128e36deb3de605938 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_96ddbfafd57543128e36deb3de605938);
                VisualState_96ddbfafd57543128e36deb3de605938.Name = "Normal";

                var VisualState_2c4fc964dd2b4d298e3103ff5ff06b7d = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_2c4fc964dd2b4d298e3103ff5ff06b7d);
                VisualState_2c4fc964dd2b4d298e3103ff5ff06b7d.Name = "PointerOver";
                var Storyboard_5f852a29be10483e8199e6ae78c93751 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_49ad4c6ba22546879c56fadb6a9230c4 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_49ad4c6ba22546879c56fadb6a9230c4, "InnerBorder");
                var DiscreteObjectKeyFrame_91eb29822c09416884096f82dc8e578f = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_91eb29822c09416884096f82dc8e578f.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_91eb29822c09416884096f82dc8e578f.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_49ad4c6ba22546879c56fadb6a9230c4.KeyFrames.add(DiscreteObjectKeyFrame_91eb29822c09416884096f82dc8e578f);


                Storyboard_5f852a29be10483e8199e6ae78c93751.Children.add(ObjectAnimationUsingKeyFrames_49ad4c6ba22546879c56fadb6a9230c4);


                VisualState_2c4fc964dd2b4d298e3103ff5ff06b7d.Storyboard = Storyboard_5f852a29be10483e8199e6ae78c93751;


                var VisualState_c268d7244efe4ad69c32302a91af04bd = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_c268d7244efe4ad69c32302a91af04bd);
                VisualState_c268d7244efe4ad69c32302a91af04bd.Name = "Pressed";
                var Storyboard_a222288b4aff40dabb2969369c9be8fb = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_552055010e3247dd81b65228f2451b1d = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_552055010e3247dd81b65228f2451b1d, "InnerBorder");
                var DiscreteObjectKeyFrame_4eb8490a22dd496e95ed1d9548454dec = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_4eb8490a22dd496e95ed1d9548454dec.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_4eb8490a22dd496e95ed1d9548454dec.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_552055010e3247dd81b65228f2451b1d.KeyFrames.add(DiscreteObjectKeyFrame_4eb8490a22dd496e95ed1d9548454dec);


                Storyboard_a222288b4aff40dabb2969369c9be8fb.Children.add(ObjectAnimationUsingKeyFrames_552055010e3247dd81b65228f2451b1d);


                VisualState_c268d7244efe4ad69c32302a91af04bd.Storyboard = Storyboard_a222288b4aff40dabb2969369c9be8fb;


                var VisualState_52a215d282504dbd970ea8f29459e131 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_52a215d282504dbd970ea8f29459e131);
                VisualState_52a215d282504dbd970ea8f29459e131.Name = "Disabled";
                var Storyboard_daa5570522c74df9adf74e66ba5a351c = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_31ff8b5a828843b2ade41513686c8b7a = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_31ff8b5a828843b2ade41513686c8b7a, "InnerBorder");
                var DiscreteObjectKeyFrame_7b7c64f7d0b040c88e1a28efaf754bcc = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_7b7c64f7d0b040c88e1a28efaf754bcc.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_7b7c64f7d0b040c88e1a28efaf754bcc.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_31ff8b5a828843b2ade41513686c8b7a.KeyFrames.add(DiscreteObjectKeyFrame_7b7c64f7d0b040c88e1a28efaf754bcc);


                Storyboard_daa5570522c74df9adf74e66ba5a351c.Children.add(ObjectAnimationUsingKeyFrames_31ff8b5a828843b2ade41513686c8b7a);


                VisualState_52a215d282504dbd970ea8f29459e131.Storyboard = Storyboard_daa5570522c74df9adf74e66ba5a351c;


                System.Array.add(VisualStateGroup_3789b54fcaa540159d3c7ae9c1a3e83e.States, VisualState_96ddbfafd57543128e36deb3de605938, Object);
                System.Array.add(VisualStateGroup_3789b54fcaa540159d3c7ae9c1a3e83e.States, VisualState_2c4fc964dd2b4d298e3103ff5ff06b7d, Object);
                System.Array.add(VisualStateGroup_3789b54fcaa540159d3c7ae9c1a3e83e.States, VisualState_c268d7244efe4ad69c32302a91af04bd, Object);
                System.Array.add(VisualStateGroup_3789b54fcaa540159d3c7ae9c1a3e83e.States, VisualState_52a215d282504dbd970ea8f29459e131, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_3789b54fcaa540159d3c7ae9c1a3e83e);

                var Border_d73422a84bd84a41af958b75661cd819 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_d73422a84bd84a41af958b75661cd819);
                Border_d73422a84bd84a41af958b75661cd819.Name = "InnerBorder";
                Border_d73422a84bd84a41af958b75661cd819.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_bd069f7df0eb4c39841f61bff834c21b = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_bd069f7df0eb4c39841f61bff834c21b);
                ContentPresenter_bd069f7df0eb4c39841f61bff834c21b.Name = "ContentPresenter";
                var Binding_31207dafc80440498969e462b32f131e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_31207dafc80440498969e462b32f131e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_625faf930ca842f286d0fd1397f1b922 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_625faf930ca842f286d0fd1397f1b922.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_31207dafc80440498969e462b32f131e.RelativeSource = RelativeSource_625faf930ca842f286d0fd1397f1b922;


                Binding_31207dafc80440498969e462b32f131e.TemplateOwner = templateInstance_f296eab39ec34421ae4ba808d5768f7e;

                var Binding_41712a4743aa4075b677b116daf65bc7 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_41712a4743aa4075b677b116daf65bc7.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_bc9c5ec7bf8746c5a014358dc01b165a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_bc9c5ec7bf8746c5a014358dc01b165a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_41712a4743aa4075b677b116daf65bc7.RelativeSource = RelativeSource_bc9c5ec7bf8746c5a014358dc01b165a;


                Binding_41712a4743aa4075b677b116daf65bc7.TemplateOwner = templateInstance_f296eab39ec34421ae4ba808d5768f7e;

                var Binding_d75316f1d589414498ca8f87c1066de3 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d75316f1d589414498ca8f87c1066de3.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_a079a55652ea41fb88f102774e2b7a49 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a079a55652ea41fb88f102774e2b7a49.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d75316f1d589414498ca8f87c1066de3.RelativeSource = RelativeSource_a079a55652ea41fb88f102774e2b7a49;


                Binding_d75316f1d589414498ca8f87c1066de3.TemplateOwner = templateInstance_f296eab39ec34421ae4ba808d5768f7e;

                var Binding_d049988b53f94588be475d2b4e27287e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d049988b53f94588be475d2b4e27287e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_3dac8ae54e7b4d2f8942a657252f8794 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3dac8ae54e7b4d2f8942a657252f8794.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d049988b53f94588be475d2b4e27287e.RelativeSource = RelativeSource_3dac8ae54e7b4d2f8942a657252f8794;


                Binding_d049988b53f94588be475d2b4e27287e.TemplateOwner = templateInstance_f296eab39ec34421ae4ba808d5768f7e;

                var Binding_e9363135cfdd4905acc81cf6b74eb639 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e9363135cfdd4905acc81cf6b74eb639.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_b6df94fc34a4443cb2446e4bccecb699 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_b6df94fc34a4443cb2446e4bccecb699.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e9363135cfdd4905acc81cf6b74eb639.RelativeSource = RelativeSource_b6df94fc34a4443cb2446e4bccecb699;


                Binding_e9363135cfdd4905acc81cf6b74eb639.TemplateOwner = templateInstance_f296eab39ec34421ae4ba808d5768f7e;


                Border_d73422a84bd84a41af958b75661cd819.Child = ContentPresenter_bd069f7df0eb4c39841f61bff834c21b;

                var Binding_f2c10481e7164a99a21feb10c35388e1 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_f2c10481e7164a99a21feb10c35388e1.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_8c4d27da12ef48d38a3330912eec3ea8 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8c4d27da12ef48d38a3330912eec3ea8.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_f2c10481e7164a99a21feb10c35388e1.RelativeSource = RelativeSource_8c4d27da12ef48d38a3330912eec3ea8;


                Binding_f2c10481e7164a99a21feb10c35388e1.TemplateOwner = templateInstance_f296eab39ec34421ae4ba808d5768f7e;


                Border_a303af2cda80489dbe56dfd559baa2b3.Child = Border_d73422a84bd84a41af958b75661cd819;

                var Binding_1fe724f1380c44219a06df7b6e0fa243 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_1fe724f1380c44219a06df7b6e0fa243.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_423775afe5174a6e8a163303d0e5b3ce = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_423775afe5174a6e8a163303d0e5b3ce.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_1fe724f1380c44219a06df7b6e0fa243.RelativeSource = RelativeSource_423775afe5174a6e8a163303d0e5b3ce;


                Binding_1fe724f1380c44219a06df7b6e0fa243.TemplateOwner = templateInstance_f296eab39ec34421ae4ba808d5768f7e;

                var Binding_9ec8c7ef70c24a529a848f3ac86d91d0 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_9ec8c7ef70c24a529a848f3ac86d91d0.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_cb0b8ee6e4984edc8c08966f0ccbc41a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_cb0b8ee6e4984edc8c08966f0ccbc41a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_9ec8c7ef70c24a529a848f3ac86d91d0.RelativeSource = RelativeSource_cb0b8ee6e4984edc8c08966f0ccbc41a;


                Binding_9ec8c7ef70c24a529a848f3ac86d91d0.TemplateOwner = templateInstance_f296eab39ec34421ae4ba808d5768f7e;

                var Binding_22c518ceb98a46918697f08017245d9a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_22c518ceb98a46918697f08017245d9a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_7f4ab52de22844298241cd2c44cf0609 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_7f4ab52de22844298241cd2c44cf0609.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_22c518ceb98a46918697f08017245d9a.RelativeSource = RelativeSource_7f4ab52de22844298241cd2c44cf0609;


                Binding_22c518ceb98a46918697f08017245d9a.TemplateOwner = templateInstance_f296eab39ec34421ae4ba808d5768f7e;



                ContentPresenter_bd069f7df0eb4c39841f61bff834c21b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_31207dafc80440498969e462b32f131e);
                ContentPresenter_bd069f7df0eb4c39841f61bff834c21b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_41712a4743aa4075b677b116daf65bc7);
                ContentPresenter_bd069f7df0eb4c39841f61bff834c21b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_d75316f1d589414498ca8f87c1066de3);
                ContentPresenter_bd069f7df0eb4c39841f61bff834c21b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_d049988b53f94588be475d2b4e27287e);
                ContentPresenter_bd069f7df0eb4c39841f61bff834c21b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_e9363135cfdd4905acc81cf6b74eb639);
                Border_d73422a84bd84a41af958b75661cd819.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_f2c10481e7164a99a21feb10c35388e1);
                Border_a303af2cda80489dbe56dfd559baa2b3.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_1fe724f1380c44219a06df7b6e0fa243);
                Border_a303af2cda80489dbe56dfd559baa2b3.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_9ec8c7ef70c24a529a848f3ac86d91d0);
                Border_a303af2cda80489dbe56dfd559baa2b3.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_22c518ceb98a46918697f08017245d9a);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_49ad4c6ba22546879c56fadb6a9230c4, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3), Bridge.fn.cacheBind(this, this.setVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3), Bridge.fn.cacheBind(this, this.getVisualStateProperty_bda7b036ac6f437cb8e5df0399916fd3)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_49ad4c6ba22546879c56fadb6a9230c4, Border_d73422a84bd84a41af958b75661cd819);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_552055010e3247dd81b65228f2451b1d, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36), Bridge.fn.cacheBind(this, this.setVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36), Bridge.fn.cacheBind(this, this.getVisualStateProperty_469373d05b1c4a79b40d9ec8dc05ce36)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_552055010e3247dd81b65228f2451b1d, Border_d73422a84bd84a41af958b75661cd819);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_31ff8b5a828843b2ade41513686c8b7a, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_6cf1a0d26293496b913ac343e74852b4), Bridge.fn.cacheBind(this, this.setVisualStateProperty_6cf1a0d26293496b913ac343e74852b4), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_6cf1a0d26293496b913ac343e74852b4), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_6cf1a0d26293496b913ac343e74852b4), Bridge.fn.cacheBind(this, this.getVisualStateProperty_6cf1a0d26293496b913ac343e74852b4)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_31ff8b5a828843b2ade41513686c8b7a, Border_d73422a84bd84a41af958b75661cd819);

                templateInstance_f296eab39ec34421ae4ba808d5768f7e.TemplateContent = Border_a303af2cda80489dbe56dfd559baa2b3;
                return templateInstance_f296eab39ec34421ae4ba808d5768f7e;
            },
            accessVisualStateProperty_24789fc46c764b599978cd697b1ca82c: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_24789fc46c764b599978cd697b1ca82c: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_24789fc46c764b599978cd697b1ca82c: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_24789fc46c764b599978cd697b1ca82c: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_24789fc46c764b599978cd697b1ca82c: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_842743c1ccc749e68cdf68acfcb73a73: function (templateOwner) {
                var templateInstance_359474d746384fb6b9a684dcc0c595cd = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_359474d746384fb6b9a684dcc0c595cd.TemplateOwner = templateOwner;
                var Border_cb00734705144445be604660c4728009 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_cb00734705144445be604660c4728009);
                Border_cb00734705144445be604660c4728009.Name = "OuterBorder";
                Border_cb00734705144445be604660c4728009.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_0b577e0373944b3fbaec2391522bdf9d = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_0b577e0373944b3fbaec2391522bdf9d);
                VisualStateGroup_0b577e0373944b3fbaec2391522bdf9d.Name = "CommonStates";
                var VisualState_40bc994dfb7b477f9d229899ce3abde3 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_40bc994dfb7b477f9d229899ce3abde3);
                VisualState_40bc994dfb7b477f9d229899ce3abde3.Name = "Normal";

                var VisualState_c0bb4fbe30e847189b49cfe4f11dd395 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_c0bb4fbe30e847189b49cfe4f11dd395);
                VisualState_c0bb4fbe30e847189b49cfe4f11dd395.Name = "PointerOver";
                var Storyboard_b2969c435e454929baeb449d53b8d0dd = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_f12f76bc4d104a7a938e9001d1e56026 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_f12f76bc4d104a7a938e9001d1e56026, "InnerBorder");
                var DiscreteObjectKeyFrame_044d542700fd4d9a9967d53972c0bc5e = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_044d542700fd4d9a9967d53972c0bc5e.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_044d542700fd4d9a9967d53972c0bc5e.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_f12f76bc4d104a7a938e9001d1e56026.KeyFrames.add(DiscreteObjectKeyFrame_044d542700fd4d9a9967d53972c0bc5e);


                Storyboard_b2969c435e454929baeb449d53b8d0dd.Children.add(ObjectAnimationUsingKeyFrames_f12f76bc4d104a7a938e9001d1e56026);


                VisualState_c0bb4fbe30e847189b49cfe4f11dd395.Storyboard = Storyboard_b2969c435e454929baeb449d53b8d0dd;


                var VisualState_f19e55ea93ba4153bc2206be66c9ffc2 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_f19e55ea93ba4153bc2206be66c9ffc2);
                VisualState_f19e55ea93ba4153bc2206be66c9ffc2.Name = "Pressed";
                var Storyboard_c7402fcbfa4a44788e32bc9fb32ae4f2 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_9f2aa511162148ceab57656462394469 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_9f2aa511162148ceab57656462394469, "InnerBorder");
                var DiscreteObjectKeyFrame_68db5ab1b3d94e09b6016a9619ed3e5f = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_68db5ab1b3d94e09b6016a9619ed3e5f.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_68db5ab1b3d94e09b6016a9619ed3e5f.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_9f2aa511162148ceab57656462394469.KeyFrames.add(DiscreteObjectKeyFrame_68db5ab1b3d94e09b6016a9619ed3e5f);


                Storyboard_c7402fcbfa4a44788e32bc9fb32ae4f2.Children.add(ObjectAnimationUsingKeyFrames_9f2aa511162148ceab57656462394469);


                VisualState_f19e55ea93ba4153bc2206be66c9ffc2.Storyboard = Storyboard_c7402fcbfa4a44788e32bc9fb32ae4f2;


                var VisualState_de3fdac982cc45ed8387a1edb12a0f27 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_de3fdac982cc45ed8387a1edb12a0f27);
                VisualState_de3fdac982cc45ed8387a1edb12a0f27.Name = "Disabled";
                var Storyboard_9ecc87204bf846088389b0d5cc579b35 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_5e8a14dc32c24081979789d7ecf9b7b8 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_5e8a14dc32c24081979789d7ecf9b7b8, "InnerBorder");
                var DiscreteObjectKeyFrame_0ddafd4063544ebdbd2ee4560cabf8d4 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_0ddafd4063544ebdbd2ee4560cabf8d4.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_0ddafd4063544ebdbd2ee4560cabf8d4.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_5e8a14dc32c24081979789d7ecf9b7b8.KeyFrames.add(DiscreteObjectKeyFrame_0ddafd4063544ebdbd2ee4560cabf8d4);


                Storyboard_9ecc87204bf846088389b0d5cc579b35.Children.add(ObjectAnimationUsingKeyFrames_5e8a14dc32c24081979789d7ecf9b7b8);


                VisualState_de3fdac982cc45ed8387a1edb12a0f27.Storyboard = Storyboard_9ecc87204bf846088389b0d5cc579b35;


                System.Array.add(VisualStateGroup_0b577e0373944b3fbaec2391522bdf9d.States, VisualState_40bc994dfb7b477f9d229899ce3abde3, Object);
                System.Array.add(VisualStateGroup_0b577e0373944b3fbaec2391522bdf9d.States, VisualState_c0bb4fbe30e847189b49cfe4f11dd395, Object);
                System.Array.add(VisualStateGroup_0b577e0373944b3fbaec2391522bdf9d.States, VisualState_f19e55ea93ba4153bc2206be66c9ffc2, Object);
                System.Array.add(VisualStateGroup_0b577e0373944b3fbaec2391522bdf9d.States, VisualState_de3fdac982cc45ed8387a1edb12a0f27, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_0b577e0373944b3fbaec2391522bdf9d);

                var Border_975842709be24a03825a587357bff0a6 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_975842709be24a03825a587357bff0a6);
                Border_975842709be24a03825a587357bff0a6.Name = "InnerBorder";
                Border_975842709be24a03825a587357bff0a6.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_26e8959c9c2d4cbaac847492c56904f6 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_26e8959c9c2d4cbaac847492c56904f6);
                ContentPresenter_26e8959c9c2d4cbaac847492c56904f6.Name = "ContentPresenter";
                var Binding_bb916f409a20405da935c3b8ac1c7779 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_bb916f409a20405da935c3b8ac1c7779.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_9145ea960a8d4566a29a43afff69a48f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9145ea960a8d4566a29a43afff69a48f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_bb916f409a20405da935c3b8ac1c7779.RelativeSource = RelativeSource_9145ea960a8d4566a29a43afff69a48f;


                Binding_bb916f409a20405da935c3b8ac1c7779.TemplateOwner = templateInstance_359474d746384fb6b9a684dcc0c595cd;

                var Binding_84bb6488ef004021ad2ed54b5d1f59cb = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_84bb6488ef004021ad2ed54b5d1f59cb.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_e706979631424cbdb61bd396504d72f6 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e706979631424cbdb61bd396504d72f6.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_84bb6488ef004021ad2ed54b5d1f59cb.RelativeSource = RelativeSource_e706979631424cbdb61bd396504d72f6;


                Binding_84bb6488ef004021ad2ed54b5d1f59cb.TemplateOwner = templateInstance_359474d746384fb6b9a684dcc0c595cd;

                var Binding_59c374a373de47248c8faa37e7c07f51 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_59c374a373de47248c8faa37e7c07f51.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_02dc6dc6acf84a2db186f8b78f9641f0 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_02dc6dc6acf84a2db186f8b78f9641f0.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_59c374a373de47248c8faa37e7c07f51.RelativeSource = RelativeSource_02dc6dc6acf84a2db186f8b78f9641f0;


                Binding_59c374a373de47248c8faa37e7c07f51.TemplateOwner = templateInstance_359474d746384fb6b9a684dcc0c595cd;

                var Binding_ac4c016d27654de897aa4cc096e4d63c = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ac4c016d27654de897aa4cc096e4d63c.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_f77007298e9a4932b53e7cd80dc70817 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f77007298e9a4932b53e7cd80dc70817.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ac4c016d27654de897aa4cc096e4d63c.RelativeSource = RelativeSource_f77007298e9a4932b53e7cd80dc70817;


                Binding_ac4c016d27654de897aa4cc096e4d63c.TemplateOwner = templateInstance_359474d746384fb6b9a684dcc0c595cd;

                var Binding_27568d9d59fb4082bdf5969c52178159 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_27568d9d59fb4082bdf5969c52178159.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_2c71f90be2704b77bb4916ee0c3698b7 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_2c71f90be2704b77bb4916ee0c3698b7.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_27568d9d59fb4082bdf5969c52178159.RelativeSource = RelativeSource_2c71f90be2704b77bb4916ee0c3698b7;


                Binding_27568d9d59fb4082bdf5969c52178159.TemplateOwner = templateInstance_359474d746384fb6b9a684dcc0c595cd;


                Border_975842709be24a03825a587357bff0a6.Child = ContentPresenter_26e8959c9c2d4cbaac847492c56904f6;

                var Binding_0a2a043850944578851c4bf2dc518bd2 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_0a2a043850944578851c4bf2dc518bd2.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_2fbb40aeb90944499ccbcf42abe1a97c = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_2fbb40aeb90944499ccbcf42abe1a97c.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_0a2a043850944578851c4bf2dc518bd2.RelativeSource = RelativeSource_2fbb40aeb90944499ccbcf42abe1a97c;


                Binding_0a2a043850944578851c4bf2dc518bd2.TemplateOwner = templateInstance_359474d746384fb6b9a684dcc0c595cd;


                Border_cb00734705144445be604660c4728009.Child = Border_975842709be24a03825a587357bff0a6;

                var Binding_949b65a6fbf645ea930d3a8fa0ee012a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_949b65a6fbf645ea930d3a8fa0ee012a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_2337127b96e846ee89d74b09878a292b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_2337127b96e846ee89d74b09878a292b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_949b65a6fbf645ea930d3a8fa0ee012a.RelativeSource = RelativeSource_2337127b96e846ee89d74b09878a292b;


                Binding_949b65a6fbf645ea930d3a8fa0ee012a.TemplateOwner = templateInstance_359474d746384fb6b9a684dcc0c595cd;

                var Binding_207318e72d3f4bb3820aa6c4f3a31400 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_207318e72d3f4bb3820aa6c4f3a31400.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_53092ec26a9c45ae8ea7c4b28dce0348 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_53092ec26a9c45ae8ea7c4b28dce0348.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_207318e72d3f4bb3820aa6c4f3a31400.RelativeSource = RelativeSource_53092ec26a9c45ae8ea7c4b28dce0348;


                Binding_207318e72d3f4bb3820aa6c4f3a31400.TemplateOwner = templateInstance_359474d746384fb6b9a684dcc0c595cd;

                var Binding_1f59f950539647bf950318ba4f8b1bda = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_1f59f950539647bf950318ba4f8b1bda.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_c45ae4943f554b9ca4e7d2e8322f80e6 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c45ae4943f554b9ca4e7d2e8322f80e6.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_1f59f950539647bf950318ba4f8b1bda.RelativeSource = RelativeSource_c45ae4943f554b9ca4e7d2e8322f80e6;


                Binding_1f59f950539647bf950318ba4f8b1bda.TemplateOwner = templateInstance_359474d746384fb6b9a684dcc0c595cd;



                ContentPresenter_26e8959c9c2d4cbaac847492c56904f6.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_bb916f409a20405da935c3b8ac1c7779);
                ContentPresenter_26e8959c9c2d4cbaac847492c56904f6.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_84bb6488ef004021ad2ed54b5d1f59cb);
                ContentPresenter_26e8959c9c2d4cbaac847492c56904f6.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_59c374a373de47248c8faa37e7c07f51);
                ContentPresenter_26e8959c9c2d4cbaac847492c56904f6.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_ac4c016d27654de897aa4cc096e4d63c);
                ContentPresenter_26e8959c9c2d4cbaac847492c56904f6.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_27568d9d59fb4082bdf5969c52178159);
                Border_975842709be24a03825a587357bff0a6.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_0a2a043850944578851c4bf2dc518bd2);
                Border_cb00734705144445be604660c4728009.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_949b65a6fbf645ea930d3a8fa0ee012a);
                Border_cb00734705144445be604660c4728009.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_207318e72d3f4bb3820aa6c4f3a31400);
                Border_cb00734705144445be604660c4728009.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_1f59f950539647bf950318ba4f8b1bda);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_f12f76bc4d104a7a938e9001d1e56026, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_24789fc46c764b599978cd697b1ca82c), Bridge.fn.cacheBind(this, this.setVisualStateProperty_24789fc46c764b599978cd697b1ca82c), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_24789fc46c764b599978cd697b1ca82c), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_24789fc46c764b599978cd697b1ca82c), Bridge.fn.cacheBind(this, this.getVisualStateProperty_24789fc46c764b599978cd697b1ca82c)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_f12f76bc4d104a7a938e9001d1e56026, Border_975842709be24a03825a587357bff0a6);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_9f2aa511162148ceab57656462394469, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde), Bridge.fn.cacheBind(this, this.setVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde), Bridge.fn.cacheBind(this, this.getVisualStateProperty_a0cf9f11dab642ab9f9a591c01147bde)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_9f2aa511162148ceab57656462394469, Border_975842709be24a03825a587357bff0a6);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_5e8a14dc32c24081979789d7ecf9b7b8, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7), Bridge.fn.cacheBind(this, this.setVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7), Bridge.fn.cacheBind(this, this.getVisualStateProperty_aaf344f3681f4aed93bcb832d58b2bd7)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_5e8a14dc32c24081979789d7ecf9b7b8, Border_975842709be24a03825a587357bff0a6);

                templateInstance_359474d746384fb6b9a684dcc0c595cd.TemplateContent = Border_cb00734705144445be604660c4728009;
                return templateInstance_359474d746384fb6b9a684dcc0c595cd;
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
                CShtml.FileClass.fileText = "{\r\n\"orderID\": 12345, \r\n\"shopperName\": \"John Smith\", \r\n\"shopperEmail\": \"johnsmith@example.com\",\r\n\"contents\": \r\n[\r\n{\r\n\"productID\": 34, \r\n\"productName\": \"SuperWidget\", \r\n\"quantity\": 1 \r\n}, \r\n{\"productID\": 56, \r\n\"productName\": \"WonderWidget\", \r\n\"quantity\": 3 \r\n} \r\n], \r\n\"orderCompleted\": true\r\n}";
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



                var Grid_7eb59502053445df803ffebdee8b3bfa = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutRoot", Grid_7eb59502053445df803ffebdee8b3bfa);
                Grid_7eb59502053445df803ffebdee8b3bfa.Name = "LayoutRoot";
                Grid_7eb59502053445df803ffebdee8b3bfa.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                var Grid_73a2b3042a954be7abd01a4b25fb45e4 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_4efa4f0b217b4913868abebbfb2e921e = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_4efa4f0b217b4913868abebbfb2e921e.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_4efa4f0b217b4913868abebbfb2e921e.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_9789d12d28ac4c35b5d7e1a6c0811e7b = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_9789d12d28ac4c35b5d7e1a6c0811e7b.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_9789d12d28ac4c35b5d7e1a6c0811e7b.Offset = 0.0;

                var GradientStop_c28b6189db264366af99c379661c63e3 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_c28b6189db264366af99c379661c63e3.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_c28b6189db264366af99c379661c63e3.Offset = 1.0;

                LinearGradientBrush_4efa4f0b217b4913868abebbfb2e921e.GradientStops.add(GradientStop_9789d12d28ac4c35b5d7e1a6c0811e7b);
                LinearGradientBrush_4efa4f0b217b4913868abebbfb2e921e.GradientStops.add(GradientStop_c28b6189db264366af99c379661c63e3);


                Grid_73a2b3042a954be7abd01a4b25fb45e4.Background = LinearGradientBrush_4efa4f0b217b4913868abebbfb2e921e;

                var Border_4238a8d242af483a8cf036051972568e = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_4238a8d242af483a8cf036051972568e);
                Border_4238a8d242af483a8cf036051972568e.Name = "element";
                Border_4238a8d242af483a8cf036051972568e.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Border_4238a8d242af483a8cf036051972568e.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 139, $t));
                Border_4238a8d242af483a8cf036051972568e.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_4238a8d242af483a8cf036051972568e.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_fc37cdb4d4e5492cab3098934dcce1bf = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_fc37cdb4d4e5492cab3098934dcce1bf.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_fc37cdb4d4e5492cab3098934dcce1bf.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_35deeafc595f4cad97327b2f908ebe9e = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_35deeafc595f4cad97327b2f908ebe9e.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_35deeafc595f4cad97327b2f908ebe9e.Offset = 0.0;

                var GradientStop_ead05cb9f2b4454c86773f2b9c8f474b = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_ead05cb9f2b4454c86773f2b9c8f474b.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_ead05cb9f2b4454c86773f2b9c8f474b.Offset = 0.5896;

                var GradientStop_44bfa8b67d5d47f69ee3931802653e30 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_44bfa8b67d5d47f69ee3931802653e30.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 246, $t.G = 246, $t.B = 246, $t);
                GradientStop_44bfa8b67d5d47f69ee3931802653e30.Offset = 1.0;

                LinearGradientBrush_fc37cdb4d4e5492cab3098934dcce1bf.GradientStops.add(GradientStop_35deeafc595f4cad97327b2f908ebe9e);
                LinearGradientBrush_fc37cdb4d4e5492cab3098934dcce1bf.GradientStops.add(GradientStop_ead05cb9f2b4454c86773f2b9c8f474b);
                LinearGradientBrush_fc37cdb4d4e5492cab3098934dcce1bf.GradientStops.add(GradientStop_44bfa8b67d5d47f69ee3931802653e30);


                Border_4238a8d242af483a8cf036051972568e.Background = LinearGradientBrush_fc37cdb4d4e5492cab3098934dcce1bf;

                var TransformGroup_6d937a1f26414f3cb9e0c4b081570ec0 = new Bridge.global.Windows.UI.Xaml.Media.TransformGroup();
                var ScaleTransform_25815b0e785748c49be350ff3dd8eed7 = new Bridge.global.Windows.UI.Xaml.Media.ScaleTransform();

                var RotateTransform_9ee0b96cb74b47069e087a68cb4a1597 = new Bridge.global.Windows.UI.Xaml.Media.RotateTransform();

                TransformGroup_6d937a1f26414f3cb9e0c4b081570ec0.Children.add(ScaleTransform_25815b0e785748c49be350ff3dd8eed7);
                TransformGroup_6d937a1f26414f3cb9e0c4b081570ec0.Children.add(RotateTransform_9ee0b96cb74b47069e087a68cb4a1597);


                Border_4238a8d242af483a8cf036051972568e.RenderTransform = TransformGroup_6d937a1f26414f3cb9e0c4b081570ec0;

                var Grid_8d2e7b306fe04ed5b35792e42efc6358 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var ColumnDefinition_278e7675134e4e14ace7ed0af9ac43a3 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_8ee41d2f4d6c45f5b37f47dcfec53754 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_0ff907aa869c45deaaec1f8abae07d22 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_8d2e7b306fe04ed5b35792e42efc6358.ColumnDefinitions.add(ColumnDefinition_278e7675134e4e14ace7ed0af9ac43a3);
                Grid_8d2e7b306fe04ed5b35792e42efc6358.ColumnDefinitions.add(ColumnDefinition_8ee41d2f4d6c45f5b37f47dcfec53754);
                Grid_8d2e7b306fe04ed5b35792e42efc6358.ColumnDefinitions.add(ColumnDefinition_0ff907aa869c45deaaec1f8abae07d22);

                var RowDefinition_594a3c4f7a5a4c8e93614550e2ba8bf0 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_594a3c4f7a5a4c8e93614550e2ba8bf0.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_ee487b1db4e14a85aa16403c3be68b17 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_ee487b1db4e14a85aa16403c3be68b17.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_bfb11df08f244a348893653a021c243f = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_bfb11df08f244a348893653a021c243f.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_8d2e7b306fe04ed5b35792e42efc6358.RowDefinitions.add(RowDefinition_594a3c4f7a5a4c8e93614550e2ba8bf0);
                Grid_8d2e7b306fe04ed5b35792e42efc6358.RowDefinitions.add(RowDefinition_ee487b1db4e14a85aa16403c3be68b17);
                Grid_8d2e7b306fe04ed5b35792e42efc6358.RowDefinitions.add(RowDefinition_bfb11df08f244a348893653a021c243f);

                var Image_5c8f6103907041778648b99112dbcc28 = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                Image_5c8f6103907041778648b99112dbcc28.Source = Bridge.cast(Bridge.global.DotNetForHtml5.Core.TypeFromStringConverters.ConvertFromInvariantString(Bridge.global.Windows.UI.Xaml.Media.ImageSource, "/CShtml;component/img/HomeImage.jpg"), Windows.UI.Xaml.Media.ImageSource);
                Image_5c8f6103907041778648b99112dbcc28.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Uniform;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Image_5c8f6103907041778648b99112dbcc28, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Image_5c8f6103907041778648b99112dbcc28, 3);

                Grid_8d2e7b306fe04ed5b35792e42efc6358.Children.add(Image_5c8f6103907041778648b99112dbcc28);


                Border_4238a8d242af483a8cf036051972568e.Child = Grid_8d2e7b306fe04ed5b35792e42efc6358;


                var Button_b5ebb44744234efbba98ef5110b4f4eb = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnBegin", Button_b5ebb44744234efbba98ef5110b4f4eb);
                Button_b5ebb44744234efbba98ef5110b4f4eb.Name = "btnBegin";
                Button_b5ebb44744234efbba98ef5110b4f4eb.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_b5ebb44744234efbba98ef5110b4f4eb.Content = "\u041d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443";
                Button_b5ebb44744234efbba98ef5110b4f4eb.FontSize = 25.0;
                Button_b5ebb44744234efbba98ef5110b4f4eb.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_b5ebb44744234efbba98ef5110b4f4eb.Width = 280.0;
                Button_b5ebb44744234efbba98ef5110b4f4eb.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_b5ebb44744234efbba98ef5110b4f4eb, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_b5ebb44744234efbba98ef5110b4f4eb, 1);
                Button_b5ebb44744234efbba98ef5110b4f4eb.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_b5ebb44744234efbba98ef5110b4f4eb.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_b5ebb44744234efbba98ef5110b4f4eb.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(0, 0, 0, 50);
                Button_b5ebb44744234efbba98ef5110b4f4eb.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                var ControlTemplate_cafae7f7eaca4388bb7f87409770ba95 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_cafae7f7eaca4388bb7f87409770ba95.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_cafae7f7eaca4388bb7f87409770ba95.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_cafae7f7eaca4388bb7f87409770ba95));

                Button_b5ebb44744234efbba98ef5110b4f4eb.Template = ControlTemplate_cafae7f7eaca4388bb7f87409770ba95;


                Grid_73a2b3042a954be7abd01a4b25fb45e4.Children.add(Border_4238a8d242af483a8cf036051972568e);
                Grid_73a2b3042a954be7abd01a4b25fb45e4.Children.add(Button_b5ebb44744234efbba98ef5110b4f4eb);


                Grid_7eb59502053445df803ffebdee8b3bfa.Children.add(Grid_73a2b3042a954be7abd01a4b25fb45e4);


                this.Content = Grid_7eb59502053445df803ffebdee8b3bfa;



                this.element = Border_4238a8d242af483a8cf036051972568e;
                this.btnBegin = Button_b5ebb44744234efbba98ef5110b4f4eb;
                this.LayoutRoot = Grid_7eb59502053445df803ffebdee8b3bfa;



            },
            accessVisualStateProperty_e9555ca846fe4efd9511cd291b100b28: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_e9555ca846fe4efd9511cd291b100b28: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_e9555ca846fe4efd9511cd291b100b28: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_e9555ca846fe4efd9511cd291b100b28: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_e9555ca846fe4efd9511cd291b100b28: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_cafae7f7eaca4388bb7f87409770ba95: function (templateOwner) {
                var templateInstance_4662162e6c8540de88f574c698fbe8a1 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_4662162e6c8540de88f574c698fbe8a1.TemplateOwner = templateOwner;
                var Border_40164dd8ae94478bb34726f2d6bfab0a = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_40164dd8ae94478bb34726f2d6bfab0a);
                Border_40164dd8ae94478bb34726f2d6bfab0a.Name = "OuterBorder";
                Border_40164dd8ae94478bb34726f2d6bfab0a.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_279215bfce2e4d84b4d5e807fb952a9d = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_279215bfce2e4d84b4d5e807fb952a9d);
                VisualStateGroup_279215bfce2e4d84b4d5e807fb952a9d.Name = "CommonStates";
                var VisualState_01c24d11c75c4f818e9b0452813c9511 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_01c24d11c75c4f818e9b0452813c9511);
                VisualState_01c24d11c75c4f818e9b0452813c9511.Name = "Normal";

                var VisualState_817aca77d6244f8399888c3d76d85f50 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_817aca77d6244f8399888c3d76d85f50);
                VisualState_817aca77d6244f8399888c3d76d85f50.Name = "PointerOver";
                var Storyboard_55b28db5ca744ec2a9a03e3be382b698 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_fcccb3877b6e40b4a37937aee78921cc = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_fcccb3877b6e40b4a37937aee78921cc, "InnerBorder");
                var DiscreteObjectKeyFrame_b9921effc84143dc89046e0b56588670 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_b9921effc84143dc89046e0b56588670.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_b9921effc84143dc89046e0b56588670.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_fcccb3877b6e40b4a37937aee78921cc.KeyFrames.add(DiscreteObjectKeyFrame_b9921effc84143dc89046e0b56588670);


                Storyboard_55b28db5ca744ec2a9a03e3be382b698.Children.add(ObjectAnimationUsingKeyFrames_fcccb3877b6e40b4a37937aee78921cc);


                VisualState_817aca77d6244f8399888c3d76d85f50.Storyboard = Storyboard_55b28db5ca744ec2a9a03e3be382b698;


                var VisualState_e704e7785b5d472d9378be50f8fbaf11 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_e704e7785b5d472d9378be50f8fbaf11);
                VisualState_e704e7785b5d472d9378be50f8fbaf11.Name = "Pressed";
                var Storyboard_927a8257e64c447ca8669fe8193dccd8 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_1005913ba41241a7a98e1a5f97be9b11 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_1005913ba41241a7a98e1a5f97be9b11, "InnerBorder");
                var DiscreteObjectKeyFrame_dc20c5dfe4604713b49cf9a59f6bef89 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_dc20c5dfe4604713b49cf9a59f6bef89.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_dc20c5dfe4604713b49cf9a59f6bef89.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_1005913ba41241a7a98e1a5f97be9b11.KeyFrames.add(DiscreteObjectKeyFrame_dc20c5dfe4604713b49cf9a59f6bef89);


                Storyboard_927a8257e64c447ca8669fe8193dccd8.Children.add(ObjectAnimationUsingKeyFrames_1005913ba41241a7a98e1a5f97be9b11);


                VisualState_e704e7785b5d472d9378be50f8fbaf11.Storyboard = Storyboard_927a8257e64c447ca8669fe8193dccd8;


                var VisualState_11d978c1e6d94dafaa2d8bdcb81cff34 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_11d978c1e6d94dafaa2d8bdcb81cff34);
                VisualState_11d978c1e6d94dafaa2d8bdcb81cff34.Name = "Disabled";
                var Storyboard_e43cfd4039004ac89de9faf0ed3c7317 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_d73bd7d4069143a09105480db513ce85 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_d73bd7d4069143a09105480db513ce85, "InnerBorder");
                var DiscreteObjectKeyFrame_133233c810414c969b35b9ba7afdbbc6 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_133233c810414c969b35b9ba7afdbbc6.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_133233c810414c969b35b9ba7afdbbc6.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_d73bd7d4069143a09105480db513ce85.KeyFrames.add(DiscreteObjectKeyFrame_133233c810414c969b35b9ba7afdbbc6);


                Storyboard_e43cfd4039004ac89de9faf0ed3c7317.Children.add(ObjectAnimationUsingKeyFrames_d73bd7d4069143a09105480db513ce85);


                VisualState_11d978c1e6d94dafaa2d8bdcb81cff34.Storyboard = Storyboard_e43cfd4039004ac89de9faf0ed3c7317;


                System.Array.add(VisualStateGroup_279215bfce2e4d84b4d5e807fb952a9d.States, VisualState_01c24d11c75c4f818e9b0452813c9511, Object);
                System.Array.add(VisualStateGroup_279215bfce2e4d84b4d5e807fb952a9d.States, VisualState_817aca77d6244f8399888c3d76d85f50, Object);
                System.Array.add(VisualStateGroup_279215bfce2e4d84b4d5e807fb952a9d.States, VisualState_e704e7785b5d472d9378be50f8fbaf11, Object);
                System.Array.add(VisualStateGroup_279215bfce2e4d84b4d5e807fb952a9d.States, VisualState_11d978c1e6d94dafaa2d8bdcb81cff34, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_279215bfce2e4d84b4d5e807fb952a9d);

                var Border_0f283c997a004754ab50962fdbdc6d9f = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_0f283c997a004754ab50962fdbdc6d9f);
                Border_0f283c997a004754ab50962fdbdc6d9f.Name = "InnerBorder";
                Border_0f283c997a004754ab50962fdbdc6d9f.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_bf517b35035f4cccb7de77c6e6a033c7 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_bf517b35035f4cccb7de77c6e6a033c7);
                ContentPresenter_bf517b35035f4cccb7de77c6e6a033c7.Name = "ContentPresenter";
                var Binding_2794a7e8164649ec9cf6c292c331e68a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_2794a7e8164649ec9cf6c292c331e68a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_59ccc8bc3f034caaaeae4ca2db3c7137 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_59ccc8bc3f034caaaeae4ca2db3c7137.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_2794a7e8164649ec9cf6c292c331e68a.RelativeSource = RelativeSource_59ccc8bc3f034caaaeae4ca2db3c7137;


                Binding_2794a7e8164649ec9cf6c292c331e68a.TemplateOwner = templateInstance_4662162e6c8540de88f574c698fbe8a1;

                var Binding_c6909d14282349a7a89ae37aa88e1883 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c6909d14282349a7a89ae37aa88e1883.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_995d14aa8eaf48fb8731dbeb48f533be = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_995d14aa8eaf48fb8731dbeb48f533be.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c6909d14282349a7a89ae37aa88e1883.RelativeSource = RelativeSource_995d14aa8eaf48fb8731dbeb48f533be;


                Binding_c6909d14282349a7a89ae37aa88e1883.TemplateOwner = templateInstance_4662162e6c8540de88f574c698fbe8a1;

                var Binding_1f3f36c263254e34b6e3134b82378d14 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_1f3f36c263254e34b6e3134b82378d14.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_c62374e6d67d46c79ad2abc9d19280b9 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c62374e6d67d46c79ad2abc9d19280b9.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_1f3f36c263254e34b6e3134b82378d14.RelativeSource = RelativeSource_c62374e6d67d46c79ad2abc9d19280b9;


                Binding_1f3f36c263254e34b6e3134b82378d14.TemplateOwner = templateInstance_4662162e6c8540de88f574c698fbe8a1;

                var Binding_b499760b3d4248a2abe7fd1254ff2a88 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_b499760b3d4248a2abe7fd1254ff2a88.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_f5218423fc8844429287e7b8ef4755bd = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f5218423fc8844429287e7b8ef4755bd.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_b499760b3d4248a2abe7fd1254ff2a88.RelativeSource = RelativeSource_f5218423fc8844429287e7b8ef4755bd;


                Binding_b499760b3d4248a2abe7fd1254ff2a88.TemplateOwner = templateInstance_4662162e6c8540de88f574c698fbe8a1;

                var Binding_4e90c2903d444c9f94c41ecea56c0dae = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4e90c2903d444c9f94c41ecea56c0dae.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_3a822db926934c7b82abd39253cbd6fb = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3a822db926934c7b82abd39253cbd6fb.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4e90c2903d444c9f94c41ecea56c0dae.RelativeSource = RelativeSource_3a822db926934c7b82abd39253cbd6fb;


                Binding_4e90c2903d444c9f94c41ecea56c0dae.TemplateOwner = templateInstance_4662162e6c8540de88f574c698fbe8a1;


                Border_0f283c997a004754ab50962fdbdc6d9f.Child = ContentPresenter_bf517b35035f4cccb7de77c6e6a033c7;

                var Binding_16754abfb0b64c40a9d0fd61d2071185 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_16754abfb0b64c40a9d0fd61d2071185.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_dc85680412564724b0701ad706e59cce = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_dc85680412564724b0701ad706e59cce.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_16754abfb0b64c40a9d0fd61d2071185.RelativeSource = RelativeSource_dc85680412564724b0701ad706e59cce;


                Binding_16754abfb0b64c40a9d0fd61d2071185.TemplateOwner = templateInstance_4662162e6c8540de88f574c698fbe8a1;


                Border_40164dd8ae94478bb34726f2d6bfab0a.Child = Border_0f283c997a004754ab50962fdbdc6d9f;

                var Binding_cae61fa407a248288391b9b5f576f9a8 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_cae61fa407a248288391b9b5f576f9a8.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_7bd2399582ff4898b30a7e51336dad8b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_7bd2399582ff4898b30a7e51336dad8b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_cae61fa407a248288391b9b5f576f9a8.RelativeSource = RelativeSource_7bd2399582ff4898b30a7e51336dad8b;


                Binding_cae61fa407a248288391b9b5f576f9a8.TemplateOwner = templateInstance_4662162e6c8540de88f574c698fbe8a1;

                var Binding_d854b1ea3c6540a8bf98b67b7a6494a1 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d854b1ea3c6540a8bf98b67b7a6494a1.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_13be2173d3be4e6bb041f1b5869e8674 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_13be2173d3be4e6bb041f1b5869e8674.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d854b1ea3c6540a8bf98b67b7a6494a1.RelativeSource = RelativeSource_13be2173d3be4e6bb041f1b5869e8674;


                Binding_d854b1ea3c6540a8bf98b67b7a6494a1.TemplateOwner = templateInstance_4662162e6c8540de88f574c698fbe8a1;

                var Binding_2c5c9e13c00e455eb31f07613e36e112 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_2c5c9e13c00e455eb31f07613e36e112.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_c00ca23a0df44f03967797da818c4072 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c00ca23a0df44f03967797da818c4072.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_2c5c9e13c00e455eb31f07613e36e112.RelativeSource = RelativeSource_c00ca23a0df44f03967797da818c4072;


                Binding_2c5c9e13c00e455eb31f07613e36e112.TemplateOwner = templateInstance_4662162e6c8540de88f574c698fbe8a1;



                ContentPresenter_bf517b35035f4cccb7de77c6e6a033c7.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_2794a7e8164649ec9cf6c292c331e68a);
                ContentPresenter_bf517b35035f4cccb7de77c6e6a033c7.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_c6909d14282349a7a89ae37aa88e1883);
                ContentPresenter_bf517b35035f4cccb7de77c6e6a033c7.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_1f3f36c263254e34b6e3134b82378d14);
                ContentPresenter_bf517b35035f4cccb7de77c6e6a033c7.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_b499760b3d4248a2abe7fd1254ff2a88);
                ContentPresenter_bf517b35035f4cccb7de77c6e6a033c7.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_4e90c2903d444c9f94c41ecea56c0dae);
                Border_0f283c997a004754ab50962fdbdc6d9f.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_16754abfb0b64c40a9d0fd61d2071185);
                Border_40164dd8ae94478bb34726f2d6bfab0a.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_cae61fa407a248288391b9b5f576f9a8);
                Border_40164dd8ae94478bb34726f2d6bfab0a.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_d854b1ea3c6540a8bf98b67b7a6494a1);
                Border_40164dd8ae94478bb34726f2d6bfab0a.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_2c5c9e13c00e455eb31f07613e36e112);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_fcccb3877b6e40b4a37937aee78921cc, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_e9555ca846fe4efd9511cd291b100b28), Bridge.fn.cacheBind(this, this.setVisualStateProperty_e9555ca846fe4efd9511cd291b100b28), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_e9555ca846fe4efd9511cd291b100b28), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_e9555ca846fe4efd9511cd291b100b28), Bridge.fn.cacheBind(this, this.getVisualStateProperty_e9555ca846fe4efd9511cd291b100b28)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_fcccb3877b6e40b4a37937aee78921cc, Border_0f283c997a004754ab50962fdbdc6d9f);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_1005913ba41241a7a98e1a5f97be9b11, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df), Bridge.fn.cacheBind(this, this.setVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df), Bridge.fn.cacheBind(this, this.getVisualStateProperty_a9587c342a6244b9af1211d8ee9ae8df)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_1005913ba41241a7a98e1a5f97be9b11, Border_0f283c997a004754ab50962fdbdc6d9f);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_d73bd7d4069143a09105480db513ce85, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7), Bridge.fn.cacheBind(this, this.setVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7), Bridge.fn.cacheBind(this, this.getVisualStateProperty_0b98397a5fbf4e1ab9836596345f40b7)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_d73bd7d4069143a09105480db513ce85, Border_0f283c997a004754ab50962fdbdc6d9f);

                templateInstance_4662162e6c8540de88f574c698fbe8a1.TemplateContent = Border_40164dd8ae94478bb34726f2d6bfab0a;
                return templateInstance_4662162e6c8540de88f574c698fbe8a1;
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



                var Grid_d5cc914ea25042c98e600baee22078c2 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var RowDefinition_5475ecc6d24447baa1681fb12399cc05 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_4927b5bbde43450ea7a3c96d566649ed = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_24f25859928a4f41b27c99d65c98661a = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_fb99346abd864234bf59165d52487173 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_d5cc914ea25042c98e600baee22078c2.RowDefinitions.add(RowDefinition_5475ecc6d24447baa1681fb12399cc05);
                Grid_d5cc914ea25042c98e600baee22078c2.RowDefinitions.add(RowDefinition_4927b5bbde43450ea7a3c96d566649ed);
                Grid_d5cc914ea25042c98e600baee22078c2.RowDefinitions.add(RowDefinition_24f25859928a4f41b27c99d65c98661a);
                Grid_d5cc914ea25042c98e600baee22078c2.RowDefinitions.add(RowDefinition_fb99346abd864234bf59165d52487173);

                var Border_c63827ee5b5c4161ae7c92608d1ea457 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                Border_c63827ee5b5c4161ae7c92608d1ea457.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_c63827ee5b5c4161ae7c92608d1ea457, 0);
                var ControlForDisplayingTheFileOpe_9d336dd630084084a7fe7317428ac661 = new Bridge.global.CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog();
                ControlForDisplayingTheFileOpe_9d336dd630084084a7fe7317428ac661.addFileOpened(Bridge.fn.cacheBind(this, this.OnFileOpened));
                ControlForDisplayingTheFileOpe_9d336dd630084084a7fe7317428ac661.Filter = "*.json,*.txt";
                ControlForDisplayingTheFileOpe_9d336dd630084084a7fe7317428ac661.ResultKind = Bridge.global.CSHTML5.Extensions.FileOpenDialog.ResultKind.Text;

                Border_c63827ee5b5c4161ae7c92608d1ea457.Child = ControlForDisplayingTheFileOpe_9d336dd630084084a7fe7317428ac661;


                var Button_3aa738b0be534636b5886e7b0c31b9a0 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Button_3aa738b0be534636b5886e7b0c31b9a0.Content = "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430";
                this.RegisterName$1("btnCancel", Button_3aa738b0be534636b5886e7b0c31b9a0);
                Button_3aa738b0be534636b5886e7b0c31b9a0.Name = "btnCancel";
                Button_3aa738b0be534636b5886e7b0c31b9a0.addClick(Bridge.fn.cacheBind(this, this.BtnCancel_Click));
                Button_3aa738b0be534636b5886e7b0c31b9a0.Width = 250.0;
                Button_3aa738b0be534636b5886e7b0c31b9a0.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_3aa738b0be534636b5886e7b0c31b9a0, 1);
                Button_3aa738b0be534636b5886e7b0c31b9a0.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_3aa738b0be534636b5886e7b0c31b9a0.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_3aa738b0be534636b5886e7b0c31b9a0.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_3aa738b0be534636b5886e7b0c31b9a0.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_3aa738b0be534636b5886e7b0c31b9a0.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_3aa738b0be534636b5886e7b0c31b9a0.FontSize = 20.0;
                var ControlTemplate_ce4c9d9c25bd43468b93ca77433a89bc = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_ce4c9d9c25bd43468b93ca77433a89bc.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_ce4c9d9c25bd43468b93ca77433a89bc.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_ce4c9d9c25bd43468b93ca77433a89bc));

                Button_3aa738b0be534636b5886e7b0c31b9a0.Template = ControlTemplate_ce4c9d9c25bd43468b93ca77433a89bc;


                Grid_d5cc914ea25042c98e600baee22078c2.Children.add(Border_c63827ee5b5c4161ae7c92608d1ea457);
                Grid_d5cc914ea25042c98e600baee22078c2.Children.add(Button_3aa738b0be534636b5886e7b0c31b9a0);


                this.Content = Grid_d5cc914ea25042c98e600baee22078c2;



                this.btnCancel = Button_3aa738b0be534636b5886e7b0c31b9a0;



            },
            accessVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_41f0ee874cae460195619b3e141295af: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_41f0ee874cae460195619b3e141295af: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_41f0ee874cae460195619b3e141295af: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_41f0ee874cae460195619b3e141295af: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_41f0ee874cae460195619b3e141295af: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_ce4c9d9c25bd43468b93ca77433a89bc: function (templateOwner) {
                var templateInstance_6375c92942804f48828f86afd2bccba7 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_6375c92942804f48828f86afd2bccba7.TemplateOwner = templateOwner;
                var Border_1d0107b225c04b7fb786c8d7dd6aef90 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_1d0107b225c04b7fb786c8d7dd6aef90);
                Border_1d0107b225c04b7fb786c8d7dd6aef90.Name = "OuterBorder";
                Border_1d0107b225c04b7fb786c8d7dd6aef90.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_0868f9b4775d4ef39cca6802bb2523b5 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_0868f9b4775d4ef39cca6802bb2523b5);
                VisualStateGroup_0868f9b4775d4ef39cca6802bb2523b5.Name = "CommonStates";
                var VisualState_2fb3c79c07b04a338ad8e9635b3b501b = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_2fb3c79c07b04a338ad8e9635b3b501b);
                VisualState_2fb3c79c07b04a338ad8e9635b3b501b.Name = "Normal";

                var VisualState_240dd0b7dcf942e0bf973f341ce15207 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_240dd0b7dcf942e0bf973f341ce15207);
                VisualState_240dd0b7dcf942e0bf973f341ce15207.Name = "PointerOver";
                var Storyboard_adc3592f7c3741c18b485e7a74a18c34 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_5cfb3d62728a4d05b27dfdb2965aa9e8 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_5cfb3d62728a4d05b27dfdb2965aa9e8, "InnerBorder");
                var DiscreteObjectKeyFrame_f2fc0510387b4631912363156236d2d3 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_f2fc0510387b4631912363156236d2d3.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_f2fc0510387b4631912363156236d2d3.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_5cfb3d62728a4d05b27dfdb2965aa9e8.KeyFrames.add(DiscreteObjectKeyFrame_f2fc0510387b4631912363156236d2d3);


                Storyboard_adc3592f7c3741c18b485e7a74a18c34.Children.add(ObjectAnimationUsingKeyFrames_5cfb3d62728a4d05b27dfdb2965aa9e8);


                VisualState_240dd0b7dcf942e0bf973f341ce15207.Storyboard = Storyboard_adc3592f7c3741c18b485e7a74a18c34;


                var VisualState_b6114fa85abd431da76eb74004fbf34f = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_b6114fa85abd431da76eb74004fbf34f);
                VisualState_b6114fa85abd431da76eb74004fbf34f.Name = "Pressed";
                var Storyboard_2835ab23120f48efbe1e2e84621a7e6d = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_a5946c232c2e40f093b1b12f91795846 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_a5946c232c2e40f093b1b12f91795846, "InnerBorder");
                var DiscreteObjectKeyFrame_fe72cdca475942ed84da25334601b4b1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_fe72cdca475942ed84da25334601b4b1.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_fe72cdca475942ed84da25334601b4b1.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_a5946c232c2e40f093b1b12f91795846.KeyFrames.add(DiscreteObjectKeyFrame_fe72cdca475942ed84da25334601b4b1);


                Storyboard_2835ab23120f48efbe1e2e84621a7e6d.Children.add(ObjectAnimationUsingKeyFrames_a5946c232c2e40f093b1b12f91795846);


                VisualState_b6114fa85abd431da76eb74004fbf34f.Storyboard = Storyboard_2835ab23120f48efbe1e2e84621a7e6d;


                var VisualState_73e24b52c203428eb785396dce82d7ec = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_73e24b52c203428eb785396dce82d7ec);
                VisualState_73e24b52c203428eb785396dce82d7ec.Name = "Disabled";
                var Storyboard_406af4f29b8d4d22bf1b17edd97084b2 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_b9e405cd8be54b9b8868d5b284266e9d = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_b9e405cd8be54b9b8868d5b284266e9d, "InnerBorder");
                var DiscreteObjectKeyFrame_9537f9aefa264aa581274fee3574cf9a = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_9537f9aefa264aa581274fee3574cf9a.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_9537f9aefa264aa581274fee3574cf9a.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_b9e405cd8be54b9b8868d5b284266e9d.KeyFrames.add(DiscreteObjectKeyFrame_9537f9aefa264aa581274fee3574cf9a);


                Storyboard_406af4f29b8d4d22bf1b17edd97084b2.Children.add(ObjectAnimationUsingKeyFrames_b9e405cd8be54b9b8868d5b284266e9d);


                VisualState_73e24b52c203428eb785396dce82d7ec.Storyboard = Storyboard_406af4f29b8d4d22bf1b17edd97084b2;


                System.Array.add(VisualStateGroup_0868f9b4775d4ef39cca6802bb2523b5.States, VisualState_2fb3c79c07b04a338ad8e9635b3b501b, Object);
                System.Array.add(VisualStateGroup_0868f9b4775d4ef39cca6802bb2523b5.States, VisualState_240dd0b7dcf942e0bf973f341ce15207, Object);
                System.Array.add(VisualStateGroup_0868f9b4775d4ef39cca6802bb2523b5.States, VisualState_b6114fa85abd431da76eb74004fbf34f, Object);
                System.Array.add(VisualStateGroup_0868f9b4775d4ef39cca6802bb2523b5.States, VisualState_73e24b52c203428eb785396dce82d7ec, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_0868f9b4775d4ef39cca6802bb2523b5);

                var Border_d1b0be7c67c84a2d926b7f1e94cf5549 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_d1b0be7c67c84a2d926b7f1e94cf5549);
                Border_d1b0be7c67c84a2d926b7f1e94cf5549.Name = "InnerBorder";
                Border_d1b0be7c67c84a2d926b7f1e94cf5549.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_f96e91b2e6bc4526afa1d43a779e2d97 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_f96e91b2e6bc4526afa1d43a779e2d97);
                ContentPresenter_f96e91b2e6bc4526afa1d43a779e2d97.Name = "ContentPresenter";
                var Binding_b4646214ce4e4ea38ea3aa3ee27bce9b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_b4646214ce4e4ea38ea3aa3ee27bce9b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_3db010e0ce9b409fbd9d57418e8218ed = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3db010e0ce9b409fbd9d57418e8218ed.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_b4646214ce4e4ea38ea3aa3ee27bce9b.RelativeSource = RelativeSource_3db010e0ce9b409fbd9d57418e8218ed;


                Binding_b4646214ce4e4ea38ea3aa3ee27bce9b.TemplateOwner = templateInstance_6375c92942804f48828f86afd2bccba7;

                var Binding_7fd554e9ce6e49258194425c8b18a6d1 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_7fd554e9ce6e49258194425c8b18a6d1.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_3858abc16acb439c806965acaf40f84b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3858abc16acb439c806965acaf40f84b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_7fd554e9ce6e49258194425c8b18a6d1.RelativeSource = RelativeSource_3858abc16acb439c806965acaf40f84b;


                Binding_7fd554e9ce6e49258194425c8b18a6d1.TemplateOwner = templateInstance_6375c92942804f48828f86afd2bccba7;

                var Binding_74aedadfdfce41c8a4f139c242f91fde = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_74aedadfdfce41c8a4f139c242f91fde.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_959b6f8b6d1645d5abf052157a312fe4 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_959b6f8b6d1645d5abf052157a312fe4.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_74aedadfdfce41c8a4f139c242f91fde.RelativeSource = RelativeSource_959b6f8b6d1645d5abf052157a312fe4;


                Binding_74aedadfdfce41c8a4f139c242f91fde.TemplateOwner = templateInstance_6375c92942804f48828f86afd2bccba7;

                var Binding_e72002b8bde14e668d19150c7f3bb3b0 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e72002b8bde14e668d19150c7f3bb3b0.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_f2dda57c37a9497d8f27721dc4e929f6 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f2dda57c37a9497d8f27721dc4e929f6.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e72002b8bde14e668d19150c7f3bb3b0.RelativeSource = RelativeSource_f2dda57c37a9497d8f27721dc4e929f6;


                Binding_e72002b8bde14e668d19150c7f3bb3b0.TemplateOwner = templateInstance_6375c92942804f48828f86afd2bccba7;

                var Binding_5db3ee8f9bce4e5b87b3841656adb511 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5db3ee8f9bce4e5b87b3841656adb511.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_250bf30f6ef44d33ba982d4d3b7a0166 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_250bf30f6ef44d33ba982d4d3b7a0166.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5db3ee8f9bce4e5b87b3841656adb511.RelativeSource = RelativeSource_250bf30f6ef44d33ba982d4d3b7a0166;


                Binding_5db3ee8f9bce4e5b87b3841656adb511.TemplateOwner = templateInstance_6375c92942804f48828f86afd2bccba7;


                Border_d1b0be7c67c84a2d926b7f1e94cf5549.Child = ContentPresenter_f96e91b2e6bc4526afa1d43a779e2d97;

                var Binding_4b3b4d612e6c400ca1ec02734e266aab = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4b3b4d612e6c400ca1ec02734e266aab.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_fafd8f2d8e9340a8bcbe4c7284e215bc = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_fafd8f2d8e9340a8bcbe4c7284e215bc.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4b3b4d612e6c400ca1ec02734e266aab.RelativeSource = RelativeSource_fafd8f2d8e9340a8bcbe4c7284e215bc;


                Binding_4b3b4d612e6c400ca1ec02734e266aab.TemplateOwner = templateInstance_6375c92942804f48828f86afd2bccba7;


                Border_1d0107b225c04b7fb786c8d7dd6aef90.Child = Border_d1b0be7c67c84a2d926b7f1e94cf5549;

                var Binding_ce45fac8743e47659f0d099e9eb5ac3a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ce45fac8743e47659f0d099e9eb5ac3a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_931278c2fdd047e085dd62e6d98d6200 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_931278c2fdd047e085dd62e6d98d6200.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ce45fac8743e47659f0d099e9eb5ac3a.RelativeSource = RelativeSource_931278c2fdd047e085dd62e6d98d6200;


                Binding_ce45fac8743e47659f0d099e9eb5ac3a.TemplateOwner = templateInstance_6375c92942804f48828f86afd2bccba7;

                var Binding_d9c467c5aa59483eacfb095bc2d41707 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d9c467c5aa59483eacfb095bc2d41707.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_ee2e367dc71547128b8bf6fac00081ac = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ee2e367dc71547128b8bf6fac00081ac.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d9c467c5aa59483eacfb095bc2d41707.RelativeSource = RelativeSource_ee2e367dc71547128b8bf6fac00081ac;


                Binding_d9c467c5aa59483eacfb095bc2d41707.TemplateOwner = templateInstance_6375c92942804f48828f86afd2bccba7;

                var Binding_598571298d3e4d8eb1d0217c0fc116c1 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_598571298d3e4d8eb1d0217c0fc116c1.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_978a99afb2cd43a7b35601c546638723 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_978a99afb2cd43a7b35601c546638723.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_598571298d3e4d8eb1d0217c0fc116c1.RelativeSource = RelativeSource_978a99afb2cd43a7b35601c546638723;


                Binding_598571298d3e4d8eb1d0217c0fc116c1.TemplateOwner = templateInstance_6375c92942804f48828f86afd2bccba7;



                ContentPresenter_f96e91b2e6bc4526afa1d43a779e2d97.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_b4646214ce4e4ea38ea3aa3ee27bce9b);
                ContentPresenter_f96e91b2e6bc4526afa1d43a779e2d97.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_7fd554e9ce6e49258194425c8b18a6d1);
                ContentPresenter_f96e91b2e6bc4526afa1d43a779e2d97.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_74aedadfdfce41c8a4f139c242f91fde);
                ContentPresenter_f96e91b2e6bc4526afa1d43a779e2d97.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_e72002b8bde14e668d19150c7f3bb3b0);
                ContentPresenter_f96e91b2e6bc4526afa1d43a779e2d97.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_5db3ee8f9bce4e5b87b3841656adb511);
                Border_d1b0be7c67c84a2d926b7f1e94cf5549.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_4b3b4d612e6c400ca1ec02734e266aab);
                Border_1d0107b225c04b7fb786c8d7dd6aef90.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_ce45fac8743e47659f0d099e9eb5ac3a);
                Border_1d0107b225c04b7fb786c8d7dd6aef90.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_d9c467c5aa59483eacfb095bc2d41707);
                Border_1d0107b225c04b7fb786c8d7dd6aef90.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_598571298d3e4d8eb1d0217c0fc116c1);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_5cfb3d62728a4d05b27dfdb2965aa9e8, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99), Bridge.fn.cacheBind(this, this.setVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99), Bridge.fn.cacheBind(this, this.getVisualStateProperty_2ad9fcbcfea24b70ba812084e8f6cc99)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_5cfb3d62728a4d05b27dfdb2965aa9e8, Border_d1b0be7c67c84a2d926b7f1e94cf5549);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_a5946c232c2e40f093b1b12f91795846, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41), Bridge.fn.cacheBind(this, this.setVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41), Bridge.fn.cacheBind(this, this.getVisualStateProperty_6ca41db7bc484ffd8033545fb0f72b41)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_a5946c232c2e40f093b1b12f91795846, Border_d1b0be7c67c84a2d926b7f1e94cf5549);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_b9e405cd8be54b9b8868d5b284266e9d, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_41f0ee874cae460195619b3e141295af), Bridge.fn.cacheBind(this, this.setVisualStateProperty_41f0ee874cae460195619b3e141295af), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_41f0ee874cae460195619b3e141295af), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_41f0ee874cae460195619b3e141295af), Bridge.fn.cacheBind(this, this.getVisualStateProperty_41f0ee874cae460195619b3e141295af)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_b9e405cd8be54b9b8868d5b284266e9d, Border_d1b0be7c67c84a2d926b7f1e94cf5549);

                templateInstance_6375c92942804f48828f86afd2bccba7.TemplateContent = Border_1d0107b225c04b7fb786c8d7dd6aef90;
                return templateInstance_6375c92942804f48828f86afd2bccba7;
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



                var Grid_aed0d263956e4d5b83ba72a031d27f40 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                Grid_aed0d263956e4d5b83ba72a031d27f40.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 0, $t));

                this.Content = Grid_aed0d263956e4d5b83ba72a031d27f40;







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

                CSharpXamlForHtml5.DomManagement.SetHtmlRepresentation(this, "<div style style='margin: 15px; position: relative; text-align: center; width: 100%; background: #1bbc9c vertical-align:middle;'><input type='file' accept='.json, .txt' id='input__file' style='margin: 65px; position: relative; text-align: center; width: 100%; visibility: hidden;' multiple><label for='input__file' style='width: 100%; max-width: 250px; height: 60px; background: #F9DEF2; display: -webkit-box; border: 1px solid grey;display: -ms-flexbox; display: flex;  -webkit-box-align: center; -ms-flex-align: center; margin: 0 auto; font-size: 1.125rem; font-weight: 700;border-radius: 5px; cursor: pointer; align-items: center; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: center; color: #000;'><span style='height: 60px; width: 60px; margin - right: 15px; display: -webkit - box; display: -ms - flexbox; display: flex; -webkit - box - align: center; -ms - flex - align: center; align - items: center; -webkit - box - pack: center; -ms - flex - pack: center; justify - content: center; border - right: 1px solid #fff;'><img src='./app-cshtml5/res/CShtml/img/download.png' alt='\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b' width='60'></span><span style='line-height: 1;margin-top: 1px;'>\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b</span></label></div>");


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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDU2h0bWwuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIm9iai9SZWxlYXNlL0FwcC54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlMS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlSG9tZS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlVXBsb2FkLnhhbWwuZy5jcyIsIm9iai9SZWxlYXNlL1NlY29uZFBhZ2UueGFtbC5nLmNzIiwiQXBwLnhhbWwuY3MiLCJQYWdlMS54YW1sLmNzIiwiUGFnZUhvbWUueGFtbC5jcyIsIlBhZ2VVcGxvYWQueGFtbC5jcyIsIlNlY29uZFBhZ2UueGFtbC5jcyIsIkZpbGVPcGVuRGlhbG9nLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7b0JBUVFBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7O29CQ0RwRUEsV0FBMkJBLEFBQU9BO29CQUNsQ0EsT0FBT0EsbUVBQTZEQTs7Ozs7Ozs7OztvQkNEcEVBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7WUptRXhFQSxJQUFJQTs7Ozs7Ozs7O2dCSy9ESUE7Ozs7Z0JBT0FBLGFBQWFBLElBQUlBO2dCQUNqQkEsZ0JBQWdCQSxJQUFJQSw0QkFBcUJBO2dCQUN6Q0EseUNBQXlCQTs7Ozs7Z0JMbUJ6QkEsSUFBSUE7b0JBQ0FBOztnQkFDSkE7OztnQkFHQUEsSUFBSUE7b0JBRUFBLEFBQUNBLFlBQW1DQSxBQUFRQTs7OztnQkFLNURBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7Z0JBR0FBLDBEQUEwREEsSUFBSUE7Z0JBQzlEQSxpQkFBaUJBOztnQkFF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b0JBRTNCQSxJQUFJQSxzQ0FBbUJBO3dCQUNuQkEsZ0JBQWdCQSxNQUFNQSxJQUFJQSxzREFBb0JBLFFBQVFBOzs7Z0JBRTlEQSxvQkFBdUJBOztnQkFHdkJBLGVBQVVBOztnQkFHVkE7Z0JBZ0NVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBQWNBOzs7OztxQ0FBdURBOzs7Ozs7O2tEQUF6Q0E7Ozs7aUNBRzNCQTtnQkFHWEEsbUJBQW1CQSx1QkFBdUJBOztnQkFLMUNBLGVBQW9CQTtnQkFDcEJBLGdCQUF5QkEsS0FBSUE7Z0JBQzdCQSxJQUFJQTtvQkFFQUEsY0FBY0E7O29CQUlkQSxLQUFLQSxXQUFXQSxJQUFJQSxpQkFBaUJBO3dCQUVqQ0EsY0FBY0EsNEJBQVNBLEdBQVRBOzs7Z0JBR3RCQSxxQkFBd0JBLGlFQUFpQkE7O2dCQUd6Q0EsSUFBSUEsQ0FBQ0EsaUNBQTBCQTtvQkFFM0JBLEFBQXFEQSxzQkFBY0E7O29CQUluRUEsQUFBdURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQXlDcENBLFFBQWVBOzs7O2dCQUV0Q0EsSUFBSUEsZUFBY0E7b0JBRWRBLFlBQVlBLHlCQUF3QkEsaUJBQUNBO3VCQUVwQ0EsSUFBSUEsZUFBY0E7b0JBRW5CQSxlQUFlQSxpQkFBQ0E7O29CQUloQkEsTUFBTUEsSUFBSUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gPENTSFRNTDU+PFhhbWxIYXNoPjVBMjRGRDk0RUQ1ODM2QUM2QkZDNzZGNzc1QjZFRDBGPC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTYuMDQuMjAyMCAxNDo1MzowNjwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BBcHDHgMeAWGFtbMeAx4BGYWN0b3J5XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqZWN0IEluc3RhbnRpYXRlKClcclxuICAgIHtcclxuICAgICAgICBnbG9iYWw6OlN5c3RlbS5UeXBlIHR5cGUgPSB0eXBlb2YoQ1NodG1sLkFwcCk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5UeXBlSW5zdGFudGlhdGlvbkhlbHBlci5JbnN0YW50aWF0ZSh0eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBhdXRvLWdlbmVyYXRlZCBieSBcIkMjL1hBTUwgZm9yIEhUTUw1XCJcclxuLy9cclxuLy8gICAgIENoYW5nZXMgdG8gdGhpcyBmaWxlIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IgYW5kIHdpbGwgYmUgbG9zdCBpZlxyXG4vLyAgICAgdGhlIGNvZGUgaXMgcmVnZW5lcmF0ZWQuXHJcbi8vIDwvYXV0by1nZW5lcmF0ZWQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbnBhcnRpYWwgY2xhc3MgQXBwIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQXBwbGljYXRpb25cclxue1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMTY5LCA2NDksIDA2MjggLy8gUHJldmVudHMgd2FybmluZyBDUzAxNjkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgdXNlZCcpLCBDUzA2NDkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgYXNzaWduZWQgdG8sIGFuZCB3aWxsIGFsd2F5cyBoYXZlIGl0cyBkZWZhdWx0IHZhbHVlIG51bGwnKSwgYW5kIENTMDYyOCAoJ21lbWJlciA6IG5ldyBwcm90ZWN0ZWQgbWVtYmVyIGRlY2xhcmVkIGluIHNlYWxlZCBjbGFzcycpXHJcblxyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcQXBwLnhhbWxcIjtcclxuICAgICAgICAgICAgfVxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAwMTg0XHJcblxyXG5cclxuZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlN0YXJ0dXBBc3NlbWJseUluZm8uT3V0cHV0Um9vdFBhdGggPSBAXCJPdXRwdXRcXFwiO1xyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRBcHBGaWxlc1BhdGggPSBAXCJhcHAtY3NodG1sNVxcYXBwXFxcIjtcclxuZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlN0YXJ0dXBBc3NlbWJseUluZm8uT3V0cHV0TGlicmFyaWVzUGF0aCA9IEBcImFwcC1jc2h0bWw1XFxsaWJzXFxcIjtcclxuZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlN0YXJ0dXBBc3NlbWJseUluZm8uT3V0cHV0UmVzb3VyY2VzUGF0aCA9IEBcImFwcC1jc2h0bWw1XFxyZXNcXFwiO1xyXG5cclxuXHJcbnZhciBSZXNvdXJjZURpY3Rpb25hcnlfNTU3OWYyOWZhMTkxNDNkZGE1NzI3NzBhNzgxYjI5MWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUmVzb3VyY2VEaWN0aW9uYXJ5KCk7XHJcbnRoaXMuUmVzb3VyY2VzID0gUmVzb3VyY2VEaWN0aW9uYXJ5XzU1NzlmMjlmYTE5MTQzZGRhNTcyNzcwYTc4MWIyOTFkO1xyXG5cclxudGhpcy5SZXNvdXJjZXMgPSBSZXNvdXJjZURpY3Rpb25hcnlfNTU3OWYyOWZhMTkxNDNkZGE1NzI3NzBhNzgxYjI5MWQ7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxue1xyXG4gICAgbmV3IEFwcCgpO1xyXG59XHJcblxyXG59XHJcblxyXG5cclxufVxyXG4iLCIvLyA8Q1NIVE1MNT48WGFtbEhhc2g+MkU0RTk1MjAxMjM3MEIzMERBMDJGQkRDQUQwNTEwMTY8L1hhbWxIYXNoPjxQYXNzTnVtYmVyPjI8L1Bhc3NOdW1iZXI+PENvbXBpbGF0aW9uRGF0ZT4xNi4wNC4yMDIwIDE0OjUzOjA2PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgFBhZ2Uxx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5QYWdlMSk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5UeXBlSW5zdGFudGlhdGlvbkhlbHBlci5JbnN0YW50aWF0ZSh0eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBhdXRvLWdlbmVyYXRlZCBieSBcIkMjL1hBTUwgZm9yIEhUTUw1XCJcclxuLy9cclxuLy8gICAgIENoYW5nZXMgdG8gdGhpcyBmaWxlIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IgYW5kIHdpbGwgYmUgbG9zdCBpZlxyXG4vLyAgICAgdGhlIGNvZGUgaXMgcmVnZW5lcmF0ZWQuXHJcbi8vIDwvYXV0by1nZW5lcmF0ZWQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbnBhcnRpYWwgY2xhc3MgUGFnZTEgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QYWdlXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGVsZW1lbnRGb3JMaXN0O1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0bkNhbmNlbDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbiBidG5VcGxvYWQ7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24gYnRuUHJvY2Vzc2luZztcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlRleHRCb3ggdHh0RmlsZTtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkltYWdlIGlkZWZfSnBlZztcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBib3JkZXJJREVGO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UgdW1sX0pwZWc7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIgYm9yZGVyVU1MO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCBMYXlvdXRHcmlkO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGVsZW1lbnQ7XHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxQYWdlMS54YW1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMDE4NFxyXG5cclxuXHJcblxyXG52YXIgR3JpZF80N2Y3ODUxZmY4NmU0ZjE5YmVmN2ExN2JlYzU2NmRjOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkKCk7XHJcbnZhciBMaW5lYXJHcmFkaWVudEJydXNoX2VlODJkMGQ1NzljNjQ2MDlhNTZlOTg0ZjQ2MmExNjJjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkxpbmVhckdyYWRpZW50QnJ1c2goKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9lZTgyZDBkNTc5YzY0NjA5YTU2ZTk4NGY0NjJhMTYyYy5FbmRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDEpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2VlODJkMGQ1NzljNjQ2MDlhNTZlOTg0ZjQ2MmExNjJjLlN0YXJ0UG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAwKTtcclxudmFyIEdyYWRpZW50U3RvcF81OThmZDc0NzgyYTE0Y2ExOTI5NTc2ZDE5OTU3ODk5YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzU5OGZkNzQ3ODJhMTRjYTE5Mjk1NzZkMTk5NTc4OTlhLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTIzMCwgRyA9IChieXRlKTIzMCwgQiA9IChieXRlKTIzMCB9O1xyXG5HcmFkaWVudFN0b3BfNTk4ZmQ3NDc4MmExNGNhMTkyOTU3NmQxOTk1Nzg5OWEuT2Zmc2V0ID0gMEQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wXzQ1MWEzNjhlMjBjNTRkMmJiY2Q4YTJiODczYWU5ODZjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfNDUxYTM2OGUyMGM1NGQyYmJjZDhhMmI4NzNhZTk4NmMuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH07XHJcbkdyYWRpZW50U3RvcF80NTFhMzY4ZTIwYzU0ZDJiYmNkOGEyYjg3M2FlOTg2Yy5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfZWU4MmQwZDU3OWM2NDYwOWE1NmU5ODRmNDYyYTE2MmMuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzU5OGZkNzQ3ODJhMTRjYTE5Mjk1NzZkMTk5NTc4OTlhKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9lZTgyZDBkNTc5YzY0NjA5YTU2ZTk4NGY0NjJhMTYyYy5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfNDUxYTM2OGUyMGM1NGQyYmJjZDhhMmI4NzNhZTk4NmMpO1xyXG5cclxuXHJcbkdyaWRfNDdmNzg1MWZmODZlNGYxOWJlZjdhMTdiZWM1NjZkYzguQmFja2dyb3VuZCA9IExpbmVhckdyYWRpZW50QnJ1c2hfZWU4MmQwZDU3OWM2NDYwOWE1NmU5ODRmNDYyYTE2MmM7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl81MzVmOGNlODdiOTE0Yzk5OWQ5YmUzMDc1MjZlZTE3YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fNTM1ZjhjZTg3YjkxNGM5OTlkOWJlMzA3NTI2ZWUxN2EuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4yNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fYTgxZGRmZjFmYTAyNDMxNzk1YWViZWVlYzE5NzQzOGYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uX2E4MWRkZmYxZmEwMjQzMTc5NWFlYmVlZWMxOTc0MzhmLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNGU4NDZiMDgzOWRhNDE0NDlmYzFlNmYxMTU5MmRjODAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzRlODQ2YjA4MzlkYTQxNDQ5ZmMxZTZmMTE1OTJkYzgwLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbkdyaWRfNDdmNzg1MWZmODZlNGYxOWJlZjdhMTdiZWM1NjZkYzguUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNTM1ZjhjZTg3YjkxNGM5OTlkOWJlMzA3NTI2ZWUxN2EpO1xyXG5HcmlkXzQ3Zjc4NTFmZjg2ZTRmMTliZWY3YTE3YmVjNTY2ZGM4LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2E4MWRkZmYxZmEwMjQzMTc5NWFlYmVlZWMxOTc0MzhmKTtcclxuR3JpZF80N2Y3ODUxZmY4NmU0ZjE5YmVmN2ExN2JlYzU2NmRjOC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl80ZTg0NmIwODM5ZGE0MTQ0OWZjMWU2ZjExNTkyZGM4MCk7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl9mODRmY2Q1OTU0OWQ0NDkyOTk5ZDAwNmI1N2VmOThmYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcbkNvbHVtbkRlZmluaXRpb25fZjg0ZmNkNTk1NDlkNDQ5Mjk5OWQwMDZiNTdlZjk4ZmMuV2lkdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjMsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBDb2x1bW5EZWZpbml0aW9uXzdlYzhlNWQ4OTZjMzRmNzNhODNkZTY1YzQxNTRhYzllID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbHVtbkRlZmluaXRpb24oKTtcclxuXHJcbkdyaWRfNDdmNzg1MWZmODZlNGYxOWJlZjdhMTdiZWM1NjZkYzguQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fZjg0ZmNkNTk1NDlkNDQ5Mjk5OWQwMDZiNTdlZjk4ZmMpO1xyXG5HcmlkXzQ3Zjc4NTFmZjg2ZTRmMTliZWY3YTE3YmVjNTY2ZGM4LkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzdlYzhlNWQ4OTZjMzRmNzNhODNkZTY1YzQxNTRhYzllKTtcclxuXHJcbnZhciBCb3JkZXJfYWZiMTM4ZWMxNDcyNGNmYzg4ZTlkMjk2OWJmMTQ3N2YgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudEZvckxpc3RcIiwgQm9yZGVyX2FmYjEzOGVjMTQ3MjRjZmM4OGU5ZDI5NjliZjE0NzdmKTtcclxuQm9yZGVyX2FmYjEzOGVjMTQ3MjRjZmM4OGU5ZDI5NjliZjE0NzdmLk5hbWUgPSBcImVsZW1lbnRGb3JMaXN0XCI7XHJcbkJvcmRlcl9hZmIxMzhlYzE0NzI0Y2ZjODhlOWQyOTY5YmYxNDc3Zi5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDMpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCb3JkZXJfYWZiMTM4ZWMxNDcyNGNmYzg4ZTlkMjk2OWJmMTQ3N2YsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihCb3JkZXJfYWZiMTM4ZWMxNDcyNGNmYzg4ZTlkMjk2OWJmMTQ3N2YsMyk7XHJcbkJvcmRlcl9hZmIxMzhlYzE0NzI0Y2ZjODhlOWQyOTY5YmYxNDc3Zi5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTIwMCwgRyA9IChieXRlKTIwMCwgQiA9IChieXRlKTIwMCB9KTtcclxuQm9yZGVyX2FmYjEzOGVjMTQ3MjRjZmM4OGU5ZDI5NjliZjE0NzdmLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMik7XHJcbkJvcmRlcl9hZmIxMzhlYzE0NzI0Y2ZjODhlOWQyOTY5YmYxNDc3Zi5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgR3JpZF8zN2M4NTBkNmU1Mjc0YTA2YmU3ZTYxOGM5MTE5M2I1OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkKCk7XHJcbnZhciBMaW5lYXJHcmFkaWVudEJydXNoXzdhNGYyNTFhMzNkOTQxMjFhZWEzMTZjYzgxZmRlYTA4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkxpbmVhckdyYWRpZW50QnJ1c2goKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF83YTRmMjUxYTMzZDk0MTIxYWVhMzE2Y2M4MWZkZWEwOC5FbmRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDEpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzdhNGYyNTFhMzNkOTQxMjFhZWEzMTZjYzgxZmRlYTA4LlN0YXJ0UG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAwKTtcclxudmFyIEdyYWRpZW50U3RvcF81ZGQ5ZTBlZTYwM2U0OTA4YTdlY2NlZjNjZTVlMGQ1NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzVkZDllMGVlNjAzZTQ5MDhhN2VjY2VmM2NlNWUwZDU2LkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTIzMCwgRyA9IChieXRlKTIzMCwgQiA9IChieXRlKTIzMCB9O1xyXG5HcmFkaWVudFN0b3BfNWRkOWUwZWU2MDNlNDkwOGE3ZWNjZWYzY2U1ZTBkNTYuT2Zmc2V0ID0gMEQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wXzVhZTVkNTFmNmQ4YzQ4NjNhZDhjNTcwMDgyMWJlNTg1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfNWFlNWQ1MWY2ZDhjNDg2M2FkOGM1NzAwODIxYmU1ODUuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH07XHJcbkdyYWRpZW50U3RvcF81YWU1ZDUxZjZkOGM0ODYzYWQ4YzU3MDA4MjFiZTU4NS5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfN2E0ZjI1MWEzM2Q5NDEyMWFlYTMxNmNjODFmZGVhMDguR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzVkZDllMGVlNjAzZTQ5MDhhN2VjY2VmM2NlNWUwZDU2KTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF83YTRmMjUxYTMzZDk0MTIxYWVhMzE2Y2M4MWZkZWEwOC5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfNWFlNWQ1MWY2ZDhjNDg2M2FkOGM1NzAwODIxYmU1ODUpO1xyXG5cclxuXHJcbkdyaWRfMzdjODUwZDZlNTI3NGEwNmJlN2U2MThjOTExOTNiNTguQmFja2dyb3VuZCA9IExpbmVhckdyYWRpZW50QnJ1c2hfN2E0ZjI1MWEzM2Q5NDEyMWFlYTMxNmNjODFmZGVhMDg7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9kNWZlYzRiZGZmZTc0NGI0OWVlODE3NDM2NzAzMzRlYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl8yZjlkYmZhMTJmNjE0N2I3YmI0ZTQyMDA3OTcwMzE4YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fMmY5ZGJmYTEyZjYxNDdiN2JiNGU0MjAwNzk3MDMxOGEuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl8yZmUwNGU3OTg2MWQ0NjRiYWJiNjViNjEwN2YxODQ5MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fMmZlMDRlNzk4NjFkNDY0YmFiYjY1YjYxMDdmMTg0OTIuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9hOTA4ZmNhMGViMzI0ODFmODVlMDJlOTc0Y2FlNzE5NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fYTkwOGZjYTBlYjMyNDgxZjg1ZTAyZTk3NGNhZTcxOTcuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl8yOTAyMjI5YmI4NDE0MTE0OTNmOWNiY2YwZGYwNWQwMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblxyXG5HcmlkXzM3Yzg1MGQ2ZTUyNzRhMDZiZTdlNjE4YzkxMTkzYjU4LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2Q1ZmVjNGJkZmZlNzQ0YjQ5ZWU4MTc0MzY3MDMzNGViKTtcclxuR3JpZF8zN2M4NTBkNmU1Mjc0YTA2YmU3ZTYxOGM5MTE5M2I1OC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8yZjlkYmZhMTJmNjE0N2I3YmI0ZTQyMDA3OTcwMzE4YSk7XHJcbkdyaWRfMzdjODUwZDZlNTI3NGEwNmJlN2U2MThjOTExOTNiNTguUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMmZlMDRlNzk4NjFkNDY0YmFiYjY1YjYxMDdmMTg0OTIpO1xyXG5HcmlkXzM3Yzg1MGQ2ZTUyNzRhMDZiZTdlNjE4YzkxMTkzYjU4LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2E5MDhmY2EwZWIzMjQ4MWY4NWUwMmU5NzRjYWU3MTk3KTtcclxuR3JpZF8zN2M4NTBkNmU1Mjc0YTA2YmU3ZTYxOGM5MTE5M2I1OC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8yOTAyMjI5YmI4NDE0MTE0OTNmOWNiY2YwZGYwNWQwMyk7XHJcblxyXG52YXIgQnV0dG9uXzdkZTc0NjIyNTY4ODQyNTM5NzI3NzM0MDQ2OTg0OGJlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fN2RlNzQ2MjI1Njg4NDI1Mzk3Mjc3MzQwNDY5ODQ4YmUsMSk7XHJcbkJ1dHRvbl83ZGU3NDYyMjU2ODg0MjUzOTcyNzczNDA0Njk4NDhiZS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMCwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9KTtcclxuQnV0dG9uXzdkZTc0NjIyNTY4ODQyNTM5NzI3NzM0MDQ2OTg0OGJlLkNvbnRlbnQgPSBAXCJKU09OXCI7XHJcbkJ1dHRvbl83ZGU3NDYyMjU2ODg0MjUzOTcyNzczNDA0Njk4NDhiZS5Gb250U2l6ZSA9IDIwRDtcclxuQnV0dG9uXzdkZTc0NjIyNTY4ODQyNTM5NzI3NzM0MDQ2OTg0OGJlLkZvcmVncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbkJ1dHRvbl83ZGU3NDYyMjU2ODg0MjUzOTcyNzczNDA0Njk4NDhiZS5DbGljayArPSBGaXJzdF9DbGljaztcclxuXHJcbnZhciBCdXR0b25fZGI3NDJjMzk4YWNjNDFiZWI2M2Q1NDEwMGVkMmZmOTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl9kYjc0MmMzOThhY2M0MWJlYjYzZDU0MTAwZWQyZmY5OCwyKTtcclxuQnV0dG9uX2RiNzQyYzM5OGFjYzQxYmViNjNkNTQxMDBlZDJmZjk4LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkwLCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH0pO1xyXG5CdXR0b25fZGI3NDJjMzk4YWNjNDFiZWI2M2Q1NDEwMGVkMmZmOTguQ29udGVudCA9IEBcItCU0LjQsNCz0YDQsNC80LzQsCBJREVGMFwiO1xyXG5CdXR0b25fZGI3NDJjMzk4YWNjNDFiZWI2M2Q1NDEwMGVkMmZmOTguRm9udFNpemUgPSAyMEQ7XHJcbkJ1dHRvbl9kYjc0MmMzOThhY2M0MWJlYjYzZDU0MTAwZWQyZmY5OC5Gb3JlZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5CdXR0b25fZGI3NDJjMzk4YWNjNDFiZWI2M2Q1NDEwMGVkMmZmOTguQ2xpY2sgKz0gU2Vjb25kX0NsaWNrO1xyXG5cclxudmFyIEJ1dHRvbl8xYmRkYjhjMDM5YWY0ZGY0YWUyNWE5ZTU1YTYwYzFiMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uXzFiZGRiOGMwMzlhZjRkZjRhZTI1YTllNTVhNjBjMWIwLDMpO1xyXG5CdXR0b25fMWJkZGI4YzAzOWFmNGRmNGFlMjVhOWU1NWE2MGMxYjAuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTAsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbkJ1dHRvbl8xYmRkYjhjMDM5YWY0ZGY0YWUyNWE5ZTU1YTYwYzFiMC5Db250ZW50ID0gQFwi0JTQuNCw0LPRgNCw0LzQvNCwIFVNTFwiO1xyXG5CdXR0b25fMWJkZGI4YzAzOWFmNGRmNGFlMjVhOWU1NWE2MGMxYjAuRm9udFNpemUgPSAyMEQ7XHJcbkJ1dHRvbl8xYmRkYjhjMDM5YWY0ZGY0YWUyNWE5ZTU1YTYwYzFiMC5Gb3JlZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5CdXR0b25fMWJkZGI4YzAzOWFmNGRmNGFlMjVhOWU1NWE2MGMxYjAuQ2xpY2sgKz0gVGhpcmRfQ2xpY2s7XHJcblxyXG5HcmlkXzM3Yzg1MGQ2ZTUyNzRhMDZiZTdlNjE4YzkxMTkzYjU4LkNoaWxkcmVuLkFkZChCdXR0b25fN2RlNzQ2MjI1Njg4NDI1Mzk3Mjc3MzQwNDY5ODQ4YmUpO1xyXG5HcmlkXzM3Yzg1MGQ2ZTUyNzRhMDZiZTdlNjE4YzkxMTkzYjU4LkNoaWxkcmVuLkFkZChCdXR0b25fZGI3NDJjMzk4YWNjNDFiZWI2M2Q1NDEwMGVkMmZmOTgpO1xyXG5HcmlkXzM3Yzg1MGQ2ZTUyNzRhMDZiZTdlNjE4YzkxMTkzYjU4LkNoaWxkcmVuLkFkZChCdXR0b25fMWJkZGI4YzAzOWFmNGRmNGFlMjVhOWU1NWE2MGMxYjApO1xyXG5cclxuXHJcbkJvcmRlcl9hZmIxMzhlYzE0NzI0Y2ZjODhlOWQyOTY5YmYxNDc3Zi5DaGlsZCA9IEdyaWRfMzdjODUwZDZlNTI3NGEwNmJlN2U2MThjOTExOTNiNTg7XHJcblxyXG5cclxudmFyIEJvcmRlcl9kNDcxMmZmYWIxNTg0NTk2ODY0ZWU3NjhiOGM5MzRhYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJlbGVtZW50XCIsIEJvcmRlcl9kNDcxMmZmYWIxNTg0NTk2ODY0ZWU3NjhiOGM5MzRhYik7XHJcbkJvcmRlcl9kNDcxMmZmYWIxNTg0NTk2ODY0ZWU3NjhiOGM5MzRhYi5OYW1lID0gXCJlbGVtZW50XCI7XHJcbkJvcmRlcl9kNDcxMmZmYWIxNTg0NTk2ODY0ZWU3NjhiOGM5MzRhYi5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDMpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oQm9yZGVyX2Q0NzEyZmZhYjE1ODQ1OTY4NjRlZTc2OGI4YzkzNGFiLDMpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtblNwYW4oQm9yZGVyX2Q0NzEyZmZhYjE1ODQ1OTY4NjRlZTc2OGI4YzkzNGFiLDIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCb3JkZXJfZDQ3MTJmZmFiMTU4NDU5Njg2NGVlNzY4YjhjOTM0YWIsMSk7XHJcbkJvcmRlcl9kNDcxMmZmYWIxNTg0NTk2ODY0ZWU3NjhiOGM5MzRhYi5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTIwMCwgRyA9IChieXRlKTIwMCwgQiA9IChieXRlKTIwMCB9KTtcclxuQm9yZGVyX2Q0NzEyZmZhYjE1ODQ1OTY4NjRlZTc2OGI4YzkzNGFiLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMik7XHJcbkJvcmRlcl9kNDcxMmZmYWIxNTg0NTk2ODY0ZWU3NjhiOGM5MzRhYi5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF9iNmRiOWFkNjVmNzI0MTQ5YTBiN2YzYzcxZjRmZjJlMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYjZkYjlhZDY1ZjcyNDE0OWEwYjdmM2M3MWY0ZmYyZTMuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9iNmRiOWFkNjVmNzI0MTQ5YTBiN2YzYzcxZjRmZjJlMy5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfNDkxNmY0OTk2YWExNGYyZjhmNWVlN2ZiMjE1Zjg1MTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF80OTE2ZjQ5OTZhYTE0ZjJmOGY1ZWU3ZmIyMTVmODUxMS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzQ5MTZmNDk5NmFhMTRmMmY4ZjVlZTdmYjIxNWY4NTExLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF8yNThkYWJmNjZmYzU0YzQyYmFiODU1NjEyZTI1Y2E0MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzI1OGRhYmY2NmZjNTRjNDJiYWI4NTU2MTJlMjVjYTQxLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfMjU4ZGFiZjY2ZmM1NGM0MmJhYjg1NTYxMmUyNWNhNDEuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoX2I2ZGI5YWQ2NWY3MjQxNDlhMGI3ZjNjNzFmNGZmMmUzLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF80OTE2ZjQ5OTZhYTE0ZjJmOGY1ZWU3ZmIyMTVmODUxMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYjZkYjlhZDY1ZjcyNDE0OWEwYjdmM2M3MWY0ZmYyZTMuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzI1OGRhYmY2NmZjNTRjNDJiYWI4NTU2MTJlMjVjYTQxKTtcclxuXHJcblxyXG5Cb3JkZXJfZDQ3MTJmZmFiMTU4NDU5Njg2NGVlNzY4YjhjOTM0YWIuQmFja2dyb3VuZCA9IExpbmVhckdyYWRpZW50QnJ1c2hfYjZkYjlhZDY1ZjcyNDE0OWEwYjdmM2M3MWY0ZmYyZTM7XHJcblxyXG52YXIgR3JpZF84YjhjMDkxMDg3OTM0ZTlkOTNhZDQ1YWRjZjViNWQ0NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiTGF5b3V0R3JpZFwiLCBHcmlkXzhiOGMwOTEwODc5MzRlOWQ5M2FkNDVhZGNmNWI1ZDQ0KTtcclxuR3JpZF84YjhjMDkxMDg3OTM0ZTlkOTNhZDQ1YWRjZjViNWQ0NC5OYW1lID0gXCJMYXlvdXRHcmlkXCI7XHJcbnZhciBMaW5lYXJHcmFkaWVudEJydXNoX2FlMWJiYTI5MzA3YjRkNDg5NzY1Mzk4NDgwNjRlMzRiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkxpbmVhckdyYWRpZW50QnJ1c2goKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9hZTFiYmEyOTMwN2I0ZDQ4OTc2NTM5ODQ4MDY0ZTM0Yi5FbmRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDEpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2FlMWJiYTI5MzA3YjRkNDg5NzY1Mzk4NDgwNjRlMzRiLlN0YXJ0UG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAwKTtcclxudmFyIEdyYWRpZW50U3RvcF8xMmQwZWI1YmQ0N2Q0NjcxYWY5ZGE4NjZlZjgzNmUxMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzEyZDBlYjViZDQ3ZDQ2NzFhZjlkYTg2NmVmODM2ZTEzLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTIzMCwgRyA9IChieXRlKTIzMCwgQiA9IChieXRlKTIzMCB9O1xyXG5HcmFkaWVudFN0b3BfMTJkMGViNWJkNDdkNDY3MWFmOWRhODY2ZWY4MzZlMTMuT2Zmc2V0ID0gMEQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wXzFkYzM2Mjg0OGMzNDRlMjY5OGE1OTdkY2JjMmIzMDU3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfMWRjMzYyODQ4YzM0NGUyNjk4YTU5N2RjYmMyYjMwNTcuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH07XHJcbkdyYWRpZW50U3RvcF8xZGMzNjI4NDhjMzQ0ZTI2OThhNTk3ZGNiYzJiMzA1Ny5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYWUxYmJhMjkzMDdiNGQ0ODk3NjUzOTg0ODA2NGUzNGIuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzEyZDBlYjViZDQ3ZDQ2NzFhZjlkYTg2NmVmODM2ZTEzKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9hZTFiYmEyOTMwN2I0ZDQ4OTc2NTM5ODQ4MDY0ZTM0Yi5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfMWRjMzYyODQ4YzM0NGUyNjk4YTU5N2RjYmMyYjMwNTcpO1xyXG5cclxuXHJcbkdyaWRfOGI4YzA5MTA4NzkzNGU5ZDkzYWQ0NWFkY2Y1YjVkNDQuQmFja2dyb3VuZCA9IExpbmVhckdyYWRpZW50QnJ1c2hfYWUxYmJhMjkzMDdiNGQ0ODk3NjUzOTg0ODA2NGUzNGI7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl82YjQ5NzM4Mjg0OGI0MDk0YjIwMWZmYjczOTBiYzU4ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fNmI0OTczODI4NDhiNDA5NGIyMDFmZmI3MzkwYmM1OGUuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4yNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fZDY1NjVjYzUxMDBkNDMzNWFlOGUxZTljOTg2ZTIzYWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uX2Q2NTY1Y2M1MTAwZDQzMzVhZThlMWU5Yzk4NmUyM2FiLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMjVjMmYyNzBlMDZhNGJmYzk3ZWQ0MDczNWJiYWNiODcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzI1YzJmMjcwZTA2YTRiZmM5N2VkNDA3MzViYmFjYjg3LkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbkdyaWRfOGI4YzA5MTA4NzkzNGU5ZDkzYWQ0NWFkY2Y1YjVkNDQuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNmI0OTczODI4NDhiNDA5NGIyMDFmZmI3MzkwYmM1OGUpO1xyXG5HcmlkXzhiOGMwOTEwODc5MzRlOWQ5M2FkNDVhZGNmNWI1ZDQ0LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2Q2NTY1Y2M1MTAwZDQzMzVhZThlMWU5Yzk4NmUyM2FiKTtcclxuR3JpZF84YjhjMDkxMDg3OTM0ZTlkOTNhZDQ1YWRjZjViNWQ0NC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8yNWMyZjI3MGUwNmE0YmZjOTdlZDQwNzM1YmJhY2I4Nyk7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl9jNTFmZTM2NjdiNmU0Y2VhOTkxNzYwMzk1MjNhOTFkYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl83ODcxNWU3Nzk4OTg0Zjk2OTliOGE1M2NhMDAyM2MwZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcblxyXG5HcmlkXzhiOGMwOTEwODc5MzRlOWQ5M2FkNDVhZGNmNWI1ZDQ0LkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uX2M1MWZlMzY2N2I2ZTRjZWE5OTE3NjAzOTUyM2E5MWRjKTtcclxuR3JpZF84YjhjMDkxMDg3OTM0ZTlkOTNhZDQ1YWRjZjViNWQ0NC5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl83ODcxNWU3Nzk4OTg0Zjk2OTliOGE1M2NhMDAyM2MwZik7XHJcblxyXG52YXIgQnV0dG9uX2EwMWMwMjhiNTgwMjQwMWZhOGZjZDYyOWZmNzkyZmI4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0bkNhbmNlbFwiLCBCdXR0b25fYTAxYzAyOGI1ODAyNDAxZmE4ZmNkNjI5ZmY3OTJmYjgpO1xyXG5CdXR0b25fYTAxYzAyOGI1ODAyNDAxZmE4ZmNkNjI5ZmY3OTJmYjguTmFtZSA9IFwiYnRuQ2FuY2VsXCI7XHJcbkJ1dHRvbl9hMDFjMDI4YjU4MDI0MDFmYThmY2Q2MjlmZjc5MmZiOC5Db250ZW50ID0gQFwi0JLQtdGA0L3Rg9GC0YzRgdGPINC90LAg0LPQu9Cw0LLQvdGD0Y5cIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2EwMWMwMjhiNTgwMjQwMWZhOGZjZDYyOWZmNzkyZmI4LDIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtblNwYW4oQnV0dG9uX2EwMWMwMjhiNTgwMjQwMWZhOGZjZDYyOWZmNzkyZmI4LDIpO1xyXG5CdXR0b25fYTAxYzAyOGI1ODAyNDAxZmE4ZmNkNjI5ZmY3OTJmYjguV2lkdGggPSAyODBEO1xyXG5CdXR0b25fYTAxYzAyOGI1ODAyNDAxZmE4ZmNkNjI5ZmY3OTJmYjguSGVpZ2h0ID0gNTBEO1xyXG5CdXR0b25fYTAxYzAyOGI1ODAyNDAxZmE4ZmNkNjI5ZmY3OTJmYjguQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTIzOCwgQiA9IChieXRlKTIzOCB9KTtcclxuQnV0dG9uX2EwMWMwMjhiNTgwMjQwMWZhOGZjZDYyOWZmNzkyZmI4LkZvbnRTaXplID0gMjVEO1xyXG5CdXR0b25fYTAxYzAyOGI1ODAyNDAxZmE4ZmNkNjI5ZmY3OTJmYjguQ2xpY2sgKz0gQnV0dG9uX0NsaWNrO1xyXG5CdXR0b25fYTAxYzAyOGI1ODAyNDAxZmE4ZmNkNjI5ZmY3OTJmYjguQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQnV0dG9uX2EwMWMwMjhiNTgwMjQwMWZhOGZjZDYyOWZmNzkyZmI4Lkhvcml6b250YWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV8xZTI0ZGI0Y2Y5MzY0ZjZiODU1NjhkZTU2YWQ4N2E4MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlXzFlMjRkYjRjZjkzNjRmNmI4NTU2OGRlNTZhZDg3YTgyLlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlXzFlMjRkYjRjZjkzNjRmNmI4NTU2OGRlNTZhZDg3YTgyLlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzFlMjRkYjRjZjkzNjRmNmI4NTU2OGRlNTZhZDg3YTgyKTtcclxuXHJcbkJ1dHRvbl9hMDFjMDI4YjU4MDI0MDFmYThmY2Q2MjlmZjc5MmZiOC5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV8xZTI0ZGI0Y2Y5MzY0ZjZiODU1NjhkZTU2YWQ4N2E4MjtcclxuXHJcblxyXG52YXIgQnV0dG9uX2MzNDY1ZTlkY2Y4MTQxZTFiZWMwYjcxMjU3ZDdjOTYxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0blVwbG9hZFwiLCBCdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjEpO1xyXG5CdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjEuTmFtZSA9IFwiYnRuVXBsb2FkXCI7XHJcbkJ1dHRvbl9jMzQ2NWU5ZGNmODE0MWUxYmVjMGI3MTI1N2Q3Yzk2MS5Db250ZW50ID0gQFwi0JfQsNCz0YDRg9C30LjRgtGMIEpTT04g0YTQsNC50LtcIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2MzNDY1ZTlkY2Y4MTQxZTFiZWMwYjcxMjU3ZDdjOTYxLDApO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtblNwYW4oQnV0dG9uX2MzNDY1ZTlkY2Y4MTQxZTFiZWMwYjcxMjU3ZDdjOTYxLDEpO1xyXG5CdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjEuV2lkdGggPSAyODBEO1xyXG5CdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjEuSGVpZ2h0ID0gNTBEO1xyXG5CdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjEuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI0OSwgRyA9IChieXRlKTIyMiwgQiA9IChieXRlKTI0MiB9KTtcclxuQnV0dG9uX2MzNDY1ZTlkY2Y4MTQxZTFiZWMwYjcxMjU3ZDdjOTYxLkZvbnRTaXplID0gMjVEO1xyXG5CdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjEuQ2xpY2sgKz0gQnRuVXBsb2FkX0NsaWNrO1xyXG5CdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjEuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQnV0dG9uX2MzNDY1ZTlkY2Y4MTQxZTFiZWMwYjcxMjU3ZDdjOTYxLkhvcml6b250YWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uX2MzNDY1ZTlkY2Y4MTQxZTFiZWMwYjcxMjU3ZDdjOTYxLlZlcnRpY2FsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmVydGljYWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjEuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfZGNlOWJiZTIzZTg2NDcxYzhkMTE3MDJhMjFjMDRjNDMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV9kY2U5YmJlMjNlODY0NzFjOGQxMTcwMmEyMWMwNGM0My5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV9kY2U5YmJlMjNlODY0NzFjOGQxMTcwMmEyMWMwNGM0My5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV9kY2U5YmJlMjNlODY0NzFjOGQxMTcwMmEyMWMwNGM0Myk7XHJcblxyXG5CdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjEuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfZGNlOWJiZTIzZTg2NDcxYzhkMTE3MDJhMjFjMDRjNDM7XHJcblxyXG5cclxudmFyIEJ1dHRvbl82ZWJjZmI2NzU4NzU0MDNmYjk0MjdhMzgxMTIyN2I4NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5Qcm9jZXNzaW5nXCIsIEJ1dHRvbl82ZWJjZmI2NzU4NzU0MDNmYjk0MjdhMzgxMTIyN2I4NCk7XHJcbkJ1dHRvbl82ZWJjZmI2NzU4NzU0MDNmYjk0MjdhMzgxMTIyN2I4NC5OYW1lID0gXCJidG5Qcm9jZXNzaW5nXCI7XHJcbkJ1dHRvbl82ZWJjZmI2NzU4NzU0MDNmYjk0MjdhMzgxMTIyN2I4NC5Db250ZW50ID0gQFwi0J/QvtGB0YLRgNC+0LjRgtGMINC00LjQsNCz0YDQsNC80LzRg1wiO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fNmViY2ZiNjc1ODc1NDAzZmI5NDI3YTM4MTEyMjdiODQsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uKEJ1dHRvbl82ZWJjZmI2NzU4NzU0MDNmYjk0MjdhMzgxMTIyN2I4NCwxKTtcclxuQnV0dG9uXzZlYmNmYjY3NTg3NTQwM2ZiOTQyN2EzODExMjI3Yjg0LldpZHRoID0gMjgwRDtcclxuQnV0dG9uXzZlYmNmYjY3NTg3NTQwM2ZiOTQyN2EzODExMjI3Yjg0LkhlaWdodCA9IDUwRDtcclxuQnV0dG9uXzZlYmNmYjY3NTg3NTQwM2ZiOTQyN2EzODExMjI3Yjg0LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbkJ1dHRvbl82ZWJjZmI2NzU4NzU0MDNmYjk0MjdhMzgxMTIyN2I4NC5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uXzZlYmNmYjY3NTg3NTQwM2ZiOTQyN2EzODExMjI3Yjg0LkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl82ZWJjZmI2NzU4NzU0MDNmYjk0MjdhMzgxMTIyN2I4NC5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzZlYmNmYjY3NTg3NTQwM2ZiOTQyN2EzODExMjI3Yjg0LlZlcnRpY2FsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmVydGljYWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fNmViY2ZiNjc1ODc1NDAzZmI5NDI3YTM4MTEyMjdiODQuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fNmViY2ZiNjc1ODc1NDAzZmI5NDI3YTM4MTEyMjdiODQuQ2xpY2sgKz0gQnRuUHJvY2Vzc2luZ19DbGljaztcclxudmFyIENvbnRyb2xUZW1wbGF0ZV84NDI3NDNjMWNjYzc0OWU2OGNkZjY4YWNmY2I3M2E3MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlXzg0Mjc0M2MxY2NjNzQ5ZTY4Y2RmNjhhY2ZjYjczYTczLlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlXzg0Mjc0M2MxY2NjNzQ5ZTY4Y2RmNjhhY2ZjYjczYTczLlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzg0Mjc0M2MxY2NjNzQ5ZTY4Y2RmNjhhY2ZjYjczYTczKTtcclxuXHJcbkJ1dHRvbl82ZWJjZmI2NzU4NzU0MDNmYjk0MjdhMzgxMTIyN2I4NC5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV84NDI3NDNjMWNjYzc0OWU2OGNkZjY4YWNmY2I3M2E3MztcclxuXHJcblxyXG52YXIgVGV4dEJveF85OGI5MzNlYzkxN2I0MjUxOGE5YzBkMWU0NGU2OWVlMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5UZXh0Qm94KCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwidHh0RmlsZVwiLCBUZXh0Qm94Xzk4YjkzM2VjOTE3YjQyNTE4YTljMGQxZTQ0ZTY5ZWUyKTtcclxuVGV4dEJveF85OGI5MzNlYzkxN2I0MjUxOGE5YzBkMWU0NGU2OWVlMi5OYW1lID0gXCJ0eHRGaWxlXCI7XHJcblRleHRCb3hfOThiOTMzZWM5MTdiNDI1MThhOWMwZDFlNDRlNjllZTIuVGV4dFdyYXBwaW5nID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGV4dFdyYXBwaW5nLldyYXA7XHJcblRleHRCb3hfOThiOTMzZWM5MTdiNDI1MThhOWMwZDFlNDRlNjllZTIuVGV4dCA9IEBcIlwiO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhUZXh0Qm94Xzk4YjkzM2VjOTE3YjQyNTE4YTljMGQxZTQ0ZTY5ZWUyLDEpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtblNwYW4oVGV4dEJveF85OGI5MzNlYzkxN2I0MjUxOGE5YzBkMWU0NGU2OWVlMiwyKTtcclxuVGV4dEJveF85OGI5MzNlYzkxN2I0MjUxOGE5YzBkMWU0NGU2OWVlMi5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEwLCAtMjAsIDEwLCAtMjApO1xyXG5UZXh0Qm94Xzk4YjkzM2VjOTE3YjQyNTE4YTljMGQxZTQ0ZTY5ZWUyLkZvbnRTaXplID0gMjBEO1xyXG5UZXh0Qm94Xzk4YjkzM2VjOTE3YjQyNTE4YTljMGQxZTQ0ZTY5ZWUyLlZlcnRpY2FsU2Nyb2xsQmFyVmlzaWJpbGl0eSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlNjcm9sbEJhclZpc2liaWxpdHkuQXV0bztcclxuXHJcbnZhciBCb3JkZXJfOTg0ZTJkYjk4ZGRkNDVmZjljZDdiMjAxMzZhOTNiNjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYm9yZGVySURFRlwiLCBCb3JkZXJfOTg0ZTJkYjk4ZGRkNDVmZjljZDdiMjAxMzZhOTNiNjEpO1xyXG5Cb3JkZXJfOTg0ZTJkYjk4ZGRkNDVmZjljZDdiMjAxMzZhOTNiNjEuTmFtZSA9IFwiYm9yZGVySURFRlwiO1xyXG5Cb3JkZXJfOTg0ZTJkYjk4ZGRkNDVmZjljZDdiMjAxMzZhOTNiNjEuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQm9yZGVyXzk4NGUyZGI5OGRkZDQ1ZmY5Y2Q3YjIwMTM2YTkzYjYxLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfOTg0ZTJkYjk4ZGRkNDVmZjljZDdiMjAxMzZhOTNiNjEsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihCb3JkZXJfOTg0ZTJkYjk4ZGRkNDVmZjljZDdiMjAxMzZhOTNiNjEsMyk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCb3JkZXJfOTg0ZTJkYjk4ZGRkNDVmZjljZDdiMjAxMzZhOTNiNjEsMik7XHJcbkJvcmRlcl85ODRlMmRiOThkZGQ0NWZmOWNkN2IyMDEzNmE5M2I2MS5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEwKTtcclxuQm9yZGVyXzk4NGUyZGI5OGRkZDQ1ZmY5Y2Q3YjIwMTM2YTkzYjYxLlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuQm9yZGVyXzk4NGUyZGI5OGRkZDQ1ZmY5Y2Q3YjIwMTM2YTkzYjYxLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbkJvcmRlcl85ODRlMmRiOThkZGQ0NWZmOWNkN2IyMDEzNmE5M2I2MS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjA0LCBHID0gKGJ5dGUpMjA0LCBCID0gKGJ5dGUpMjA0IH0pO1xyXG52YXIgSW1hZ2VfYmNiM2FkMjA2MDczNDdmNzliMDExNmQzNjMxOGQ4ZDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJpZGVmX0pwZWdcIiwgSW1hZ2VfYmNiM2FkMjA2MDczNDdmNzliMDExNmQzNjMxOGQ4ZDIpO1xyXG5JbWFnZV9iY2IzYWQyMDYwNzM0N2Y3OWIwMTE2ZDM2MzE4ZDhkMi5OYW1lID0gXCJpZGVmX0pwZWdcIjtcclxuSW1hZ2VfYmNiM2FkMjA2MDczNDdmNzliMDExNmQzNjMxOGQ4ZDIuU3RyZXRjaCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlN0cmV0Y2guRmlsbDtcclxuSW1hZ2VfYmNiM2FkMjA2MDczNDdmNzliMDExNmQzNjMxOGQ4ZDIuVmlzaWJpbGl0eSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5cclxuQm9yZGVyXzk4NGUyZGI5OGRkZDQ1ZmY5Y2Q3YjIwMTM2YTkzYjYxLkNoaWxkID0gSW1hZ2VfYmNiM2FkMjA2MDczNDdmNzliMDExNmQzNjMxOGQ4ZDI7XHJcblxyXG5cclxudmFyIEJvcmRlcl9jYzllZmFmY2UyYmU0ZDA5ODk4M2ExMjA2NGQ2Yjc4ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJib3JkZXJVTUxcIiwgQm9yZGVyX2NjOWVmYWZjZTJiZTRkMDk4OTgzYTEyMDY0ZDZiNzhkKTtcclxuQm9yZGVyX2NjOWVmYWZjZTJiZTRkMDk4OTgzYTEyMDY0ZDZiNzhkLk5hbWUgPSBcImJvcmRlclVNTFwiO1xyXG5Cb3JkZXJfY2M5ZWZhZmNlMmJlNGQwOTg5ODNhMTIwNjRkNmI3OGQuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQm9yZGVyX2NjOWVmYWZjZTJiZTRkMDk4OTgzYTEyMDY0ZDZiNzhkLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfY2M5ZWZhZmNlMmJlNGQwOTg5ODNhMTIwNjRkNmI3OGQsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihCb3JkZXJfY2M5ZWZhZmNlMmJlNGQwOTg5ODNhMTIwNjRkNmI3OGQsMyk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCb3JkZXJfY2M5ZWZhZmNlMmJlNGQwOTg5ODNhMTIwNjRkNmI3OGQsMik7XHJcbkJvcmRlcl9jYzllZmFmY2UyYmU0ZDA5ODk4M2ExMjA2NGQ2Yjc4ZC5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEwKTtcclxuQm9yZGVyX2NjOWVmYWZjZTJiZTRkMDk4OTgzYTEyMDY0ZDZiNzhkLlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuQm9yZGVyX2NjOWVmYWZjZTJiZTRkMDk4OTgzYTEyMDY0ZDZiNzhkLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbkJvcmRlcl9jYzllZmFmY2UyYmU0ZDA5ODk4M2ExMjA2NGQ2Yjc4ZC5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjA0LCBHID0gKGJ5dGUpMjA0LCBCID0gKGJ5dGUpMjA0IH0pO1xyXG52YXIgSW1hZ2VfMWMwZmM3MDNhNTI2NDg5NTk2YTdmOTIwODg2ZjdlMzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJ1bWxfSnBlZ1wiLCBJbWFnZV8xYzBmYzcwM2E1MjY0ODk1OTZhN2Y5MjA4ODZmN2UzNik7XHJcbkltYWdlXzFjMGZjNzAzYTUyNjQ4OTU5NmE3ZjkyMDg4NmY3ZTM2Lk5hbWUgPSBcInVtbF9KcGVnXCI7XHJcbkltYWdlXzFjMGZjNzAzYTUyNjQ4OTU5NmE3ZjkyMDg4NmY3ZTM2LlN0cmV0Y2ggPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5TdHJldGNoLkZpbGw7XHJcbkltYWdlXzFjMGZjNzAzYTUyNjQ4OTU5NmE3ZjkyMDg4NmY3ZTM2LlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbkJvcmRlcl9jYzllZmFmY2UyYmU0ZDA5ODk4M2ExMjA2NGQ2Yjc4ZC5DaGlsZCA9IEltYWdlXzFjMGZjNzAzYTUyNjQ4OTU5NmE3ZjkyMDg4NmY3ZTM2O1xyXG5cclxuXHJcbkdyaWRfOGI4YzA5MTA4NzkzNGU5ZDkzYWQ0NWFkY2Y1YjVkNDQuQ2hpbGRyZW4uQWRkKEJ1dHRvbl9hMDFjMDI4YjU4MDI0MDFmYThmY2Q2MjlmZjc5MmZiOCk7XHJcbkdyaWRfOGI4YzA5MTA4NzkzNGU5ZDkzYWQ0NWFkY2Y1YjVkNDQuQ2hpbGRyZW4uQWRkKEJ1dHRvbl9jMzQ2NWU5ZGNmODE0MWUxYmVjMGI3MTI1N2Q3Yzk2MSk7XHJcbkdyaWRfOGI4YzA5MTA4NzkzNGU5ZDkzYWQ0NWFkY2Y1YjVkNDQuQ2hpbGRyZW4uQWRkKEJ1dHRvbl82ZWJjZmI2NzU4NzU0MDNmYjk0MjdhMzgxMTIyN2I4NCk7XHJcbkdyaWRfOGI4YzA5MTA4NzkzNGU5ZDkzYWQ0NWFkY2Y1YjVkNDQuQ2hpbGRyZW4uQWRkKFRleHRCb3hfOThiOTMzZWM5MTdiNDI1MThhOWMwZDFlNDRlNjllZTIpO1xyXG5HcmlkXzhiOGMwOTEwODc5MzRlOWQ5M2FkNDVhZGNmNWI1ZDQ0LkNoaWxkcmVuLkFkZChCb3JkZXJfOTg0ZTJkYjk4ZGRkNDVmZjljZDdiMjAxMzZhOTNiNjEpO1xyXG5HcmlkXzhiOGMwOTEwODc5MzRlOWQ5M2FkNDVhZGNmNWI1ZDQ0LkNoaWxkcmVuLkFkZChCb3JkZXJfY2M5ZWZhZmNlMmJlNGQwOTg5ODNhMTIwNjRkNmI3OGQpO1xyXG5cclxuXHJcbkJvcmRlcl9kNDcxMmZmYWIxNTg0NTk2ODY0ZWU3NjhiOGM5MzRhYi5DaGlsZCA9IEdyaWRfOGI4YzA5MTA4NzkzNGU5ZDkzYWQ0NWFkY2Y1YjVkNDQ7XHJcblxyXG5cclxuR3JpZF80N2Y3ODUxZmY4NmU0ZjE5YmVmN2ExN2JlYzU2NmRjOC5DaGlsZHJlbi5BZGQoQm9yZGVyX2FmYjEzOGVjMTQ3MjRjZmM4OGU5ZDI5NjliZjE0NzdmKTtcclxuR3JpZF80N2Y3ODUxZmY4NmU0ZjE5YmVmN2ExN2JlYzU2NmRjOC5DaGlsZHJlbi5BZGQoQm9yZGVyX2Q0NzEyZmZhYjE1ODQ1OTY4NjRlZTc2OGI4YzkzNGFiKTtcclxuXHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkXzQ3Zjc4NTFmZjg2ZTRmMTliZWY3YTE3YmVjNTY2ZGM4O1xyXG5cclxuXHJcblxyXG5lbGVtZW50Rm9yTGlzdCA9IEJvcmRlcl9hZmIxMzhlYzE0NzI0Y2ZjODhlOWQyOTY5YmYxNDc3ZjtcclxuYnRuQ2FuY2VsID0gQnV0dG9uX2EwMWMwMjhiNTgwMjQwMWZhOGZjZDYyOWZmNzkyZmI4O1xyXG5idG5VcGxvYWQgPSBCdXR0b25fYzM0NjVlOWRjZjgxNDFlMWJlYzBiNzEyNTdkN2M5NjE7XHJcbmJ0blByb2Nlc3NpbmcgPSBCdXR0b25fNmViY2ZiNjc1ODc1NDAzZmI5NDI3YTM4MTEyMjdiODQ7XHJcbnR4dEZpbGUgPSBUZXh0Qm94Xzk4YjkzM2VjOTE3YjQyNTE4YTljMGQxZTQ0ZTY5ZWUyO1xyXG5pZGVmX0pwZWcgPSBJbWFnZV9iY2IzYWQyMDYwNzM0N2Y3OWIwMTE2ZDM2MzE4ZDhkMjtcclxuYm9yZGVySURFRiA9IEJvcmRlcl85ODRlMmRiOThkZGQ0NWZmOWNkN2IyMDEzNmE5M2I2MTtcclxudW1sX0pwZWcgPSBJbWFnZV8xYzBmYzcwM2E1MjY0ODk1OTZhN2Y5MjA4ODZmN2UzNjtcclxuYm9yZGVyVU1MID0gQm9yZGVyX2NjOWVmYWZjZTJiZTRkMDk4OTgzYTEyMDY0ZDZiNzhkO1xyXG5MYXlvdXRHcmlkID0gR3JpZF84YjhjMDkxMDg3OTM0ZTlkOTNhZDQ1YWRjZjViNWQ0NDtcclxuZWxlbWVudCA9IEJvcmRlcl9kNDcxMmZmYWIxNTg0NTk2ODY0ZWU3NjhiOGM5MzRhYjtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5Xzg3ZjUzMDExM2RmYTRiZGI5OGJiNGNlOTc3M2QxN2Q0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfODdmNTMwMTEzZGZhNGJkYjk4YmI0Y2U5NzczZDE3ZDQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV84N2Y1MzAxMTNkZmE0YmRiOThiYjRjZTk3NzNkMTdkNCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5Xzg3ZjUzMDExM2RmYTRiZGI5OGJiNGNlOTc3M2QxN2Q0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV84N2Y1MzAxMTNkZmE0YmRiOThiYjRjZTk3NzNkMTdkNCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfOGRmYzIzYzQ0MDAwNGNmYjhjNmY0OGY3MTIxOTQwMzYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV84ZGZjMjNjNDQwMDA0Y2ZiOGM2ZjQ4ZjcxMjE5NDAzNiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzhkZmMyM2M0NDAwMDRjZmI4YzZmNDhmNzEyMTk0MDM2IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfOGRmYzIzYzQ0MDAwNGNmYjhjNmY0OGY3MTIxOTQwMzYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzhkZmMyM2M0NDAwMDRjZmI4YzZmNDhmNzEyMTk0MDM2IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8zOGU4OGNhYzhkMDc0OThiODI2OWM3YmNhNWY2ZWJjNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzM4ZTg4Y2FjOGQwNzQ5OGI4MjY5YzdiY2E1ZjZlYmM3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMzhlODhjYWM4ZDA3NDk4YjgyNjljN2JjYTVmNmViYzcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8zOGU4OGNhYzhkMDc0OThiODI2OWM3YmNhNWY2ZWJjNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMzhlODhjYWM4ZDA3NDk4YjgyNjljN2JjYTVmNmViYzcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfMWUyNGRiNGNmOTM2NGY2Yjg1NTY4ZGU1NmFkODdhODIoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfZjNkZTdiNzAzYWJjNDBhOWE3ZWQ4ZTVmODkzZDdiZGQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlX2YzZGU3YjcwM2FiYzQwYTlhN2VkOGU1Zjg5M2Q3YmRkLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyXzZhODEyODhiNGRmZjQxODFhNzQxZDU5OGNmMjhmYTlhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl82YTgxMjg4YjRkZmY0MTgxYTc0MWQ1OThjZjI4ZmE5YSk7XHJcbkJvcmRlcl82YTgxMjg4YjRkZmY0MTgxYTc0MWQ1OThjZjI4ZmE5YS5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfNmE4MTI4OGI0ZGZmNDE4MWE3NDFkNTk4Y2YyOGZhOWEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfYjIyMjM5OGUxNTEwNDRjNGJmMGEwZGUwODljODIzNWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwX2IyMjIzOThlMTUxMDQ0YzRiZjBhMGRlMDg5YzgyMzVkKTtcclxuVmlzdWFsU3RhdGVHcm91cF9iMjIyMzk4ZTE1MTA0NGM0YmYwYTBkZTA4OWM4MjM1ZC5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlX2VlOTNmNTIxYjEyZDQ5OTg4NjIzYmY0MWFmMWE4NzQ0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlX2VlOTNmNTIxYjEyZDQ5OTg4NjIzYmY0MWFmMWE4NzQ0KTtcclxuVmlzdWFsU3RhdGVfZWU5M2Y1MjFiMTJkNDk5ODg2MjNiZjQxYWYxYTg3NDQuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMDU3ZWMzNjA1ZjdlNDkyODgzZjQ5Mzc1MmI1NTNmNjkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV8wNTdlYzM2MDVmN2U0OTI4ODNmNDkzNzUyYjU1M2Y2OSk7XHJcblZpc3VhbFN0YXRlXzA1N2VjMzYwNWY3ZTQ5Mjg4M2Y0OTM3NTJiNTUzZjY5Lk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzE2MzA4MWZiNDZkYTQ5MDk5YTJhZGUzMTE1ZmNjYjE0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYjgyYjg5MmZjMjM0NzhmYTBhMmU4MjU5ZmM0NzE4YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYjgyYjg5MmZjMjM0NzhmYTBhMmU4MjU5ZmM0NzE4YixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfOTI5ZGJlOGQ1NjZlNDQwOWI5OWJiNTZmNGExOWE4MWEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV85MjlkYmU4ZDU2NmU0NDA5Yjk5YmI1NmY0YTE5YTgxYS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzkyOWRiZThkNTY2ZTQ0MDliOTliYjU2ZjRhMTlhODFhLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYjgyYjg5MmZjMjM0NzhmYTBhMmU4MjU5ZmM0NzE4Yi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfOTI5ZGJlOGQ1NjZlNDQwOWI5OWJiNTZmNGExOWE4MWEpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMTYzMDgxZmI0NmRhNDkwOTlhMmFkZTMxMTVmY2NiMTQuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJiODJiODkyZmMyMzQ3OGZhMGEyZTgyNTlmYzQ3MThiKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV8wNTdlYzM2MDVmN2U0OTI4ODNmNDkzNzUyYjU1M2Y2OS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8xNjMwODFmYjQ2ZGE0OTA5OWEyYWRlMzExNWZjY2IxNDtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfYWRjNmRkZDRlYTQ1NGI5MGE2NTdkYzZmZGE0ZjI4YTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlX2FkYzZkZGQ0ZWE0NTRiOTBhNjU3ZGM2ZmRhNGYyOGE2KTtcclxuVmlzdWFsU3RhdGVfYWRjNmRkZDRlYTQ1NGI5MGE2NTdkYzZmZGE0ZjI4YTYuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9hYWRiYjQ3NzBlMTI0YmRlODhjZjUyMzk1MDRhODUwMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGEwNTUxYTRkOTk0NGNmZjg3Yzg2N2M4YjExYzFjZmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGEwNTUxYTRkOTk0NGNmZjg3Yzg2N2M4YjExYzFjZmYsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzY0YTNlZjMzZjg2YTRmZDE4OTRkZWRiOTllNzc1ZDM2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjRhM2VmMzNmODZhNGZkMTg5NGRlZGI5OWU3NzVkMzYuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82NGEzZWYzM2Y4NmE0ZmQxODk0ZGVkYjk5ZTc3NWQzNi5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGEwNTUxYTRkOTk0NGNmZjg3Yzg2N2M4YjExYzFjZmYuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzY0YTNlZjMzZjg2YTRmZDE4OTRkZWRiOTllNzc1ZDM2KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2FhZGJiNDc3MGUxMjRiZGU4OGNmNTIzOTUwNGE4NTAzLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180YTA1NTFhNGQ5OTQ0Y2ZmODdjODY3YzhiMTFjMWNmZik7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfYWRjNmRkZDRlYTQ1NGI5MGE2NTdkYzZmZGE0ZjI4YTYuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfYWFkYmI0NzcwZTEyNGJkZTg4Y2Y1MjM5NTA0YTg1MDM7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzc2ZTEyYThiZmExODQwNjZiMjg1MDBkZTA5OTFmYmU4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfNzZlMTJhOGJmYTE4NDA2NmIyODUwMGRlMDk5MWZiZTgpO1xyXG5WaXN1YWxTdGF0ZV83NmUxMmE4YmZhMTg0MDY2YjI4NTAwZGUwOTkxZmJlOC5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF84NWViYmIwZDQzYjA0M2I4OWZkOWE1YjNhMDNmZjk5NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZGVhM2JmOWQwMjU0NGJhNDgxM2M3NjY2YzMxZTQzMDEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZGVhM2JmOWQwMjU0NGJhNDgxM2M3NjY2YzMxZTQzMDEsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzZjNWFkMTcyMWM5MzQxZDQ5YzU5ZGJkOTIwNzdmNDhjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNmM1YWQxNzIxYzkzNDFkNDljNTlkYmQ5MjA3N2Y0OGMuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82YzVhZDE3MjFjOTM0MWQ0OWM1OWRiZDkyMDc3ZjQ4Yy5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZGVhM2JmOWQwMjU0NGJhNDgxM2M3NjY2YzMxZTQzMDEuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzZjNWFkMTcyMWM5MzQxZDQ5YzU5ZGJkOTIwNzdmNDhjKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzg1ZWJiYjBkNDNiMDQzYjg5ZmQ5YTViM2EwM2ZmOTk1LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19kZWEzYmY5ZDAyNTQ0YmE0ODEzYzc2NjZjMzFlNDMwMSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNzZlMTJhOGJmYTE4NDA2NmIyODUwMGRlMDk5MWZiZTguU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfODVlYmJiMGQ0M2IwNDNiODlmZDlhNWIzYTAzZmY5OTU7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF9iMjIyMzk4ZTE1MTA0NGM0YmYwYTBkZTA4OWM4MjM1ZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2VlOTNmNTIxYjEyZDQ5OTg4NjIzYmY0MWFmMWE4NzQ0KTtcclxuVmlzdWFsU3RhdGVHcm91cF9iMjIyMzk4ZTE1MTA0NGM0YmYwYTBkZTA4OWM4MjM1ZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzA1N2VjMzYwNWY3ZTQ5Mjg4M2Y0OTM3NTJiNTUzZjY5KTtcclxuVmlzdWFsU3RhdGVHcm91cF9iMjIyMzk4ZTE1MTA0NGM0YmYwYTBkZTA4OWM4MjM1ZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2FkYzZkZGQ0ZWE0NTRiOTBhNjU3ZGM2ZmRhNGYyOGE2KTtcclxuVmlzdWFsU3RhdGVHcm91cF9iMjIyMzk4ZTE1MTA0NGM0YmYwYTBkZTA4OWM4MjM1ZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzc2ZTEyYThiZmExODQwNjZiMjg1MDBkZTA5OTFmYmU4KTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfYjIyMjM5OGUxNTEwNDRjNGJmMGEwZGUwODljODIzNWQpO1xyXG5cclxudmFyIEJvcmRlcl85OGMyMTc1ZGZhODA0MjYwYjEyNjU1YzA4OTI5NjFmZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfOThjMjE3NWRmYTgwNDI2MGIxMjY1NWMwODkyOTYxZmYpO1xyXG5Cb3JkZXJfOThjMjE3NWRmYTgwNDI2MGIxMjY1NWMwODkyOTYxZmYuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyXzk4YzIxNzVkZmE4MDQyNjBiMTI2NTVjMDg5Mjk2MWZmLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyX2IwYWJkZjdhMWZlYzQ1NDU5YzYwMjc0ZmM4ZDZjYjMzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfYjBhYmRmN2ExZmVjNDU0NTljNjAyNzRmYzhkNmNiMzMpO1xyXG5Db250ZW50UHJlc2VudGVyX2IwYWJkZjdhMWZlYzQ1NDU5YzYwMjc0ZmM4ZDZjYjMzLk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfOGMxYjgyNzRjZGJkNDM4Zjk0MzQ5NThhZmRmZWUwNTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOGMxYjgyNzRjZGJkNDM4Zjk0MzQ5NThhZmRmZWUwNTAuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNDdiNjRlNjFmZWU3NDZiYjg3ZmMwZmQxOTFmY2Q5MzkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV80N2I2NGU2MWZlZTc0NmJiODdmYzBmZDE5MWZjZDkzOS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184YzFiODI3NGNkYmQ0MzhmOTQzNDk1OGFmZGZlZTA1MC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzQ3YjY0ZTYxZmVlNzQ2YmI4N2ZjMGZkMTkxZmNkOTM5O1xyXG5cclxuXHJcbkJpbmRpbmdfOGMxYjgyNzRjZGJkNDM4Zjk0MzQ5NThhZmRmZWUwNTAuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjNkZTdiNzAzYWJjNDBhOWE3ZWQ4ZTVmODkzZDdiZGQ7XHJcblxyXG52YXIgQmluZGluZ185ODFkMDZmNjY3NGQ0ODQ2YmE5YmJlNmFmMzIwZWMyNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ185ODFkMDZmNjY3NGQ0ODQ2YmE5YmJlNmFmMzIwZWMyNi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfN2UzYzFlMmMwZmQ1NDJlODlmZWNhNzY5YTkwM2I0MDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV83ZTNjMWUyYzBmZDU0MmU4OWZlY2E3NjlhOTAzYjQwMC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185ODFkMDZmNjY3NGQ0ODQ2YmE5YmJlNmFmMzIwZWMyNi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzdlM2MxZTJjMGZkNTQyZTg5ZmVjYTc2OWE5MDNiNDAwO1xyXG5cclxuXHJcbkJpbmRpbmdfOTgxZDA2ZjY2NzRkNDg0NmJhOWJiZTZhZjMyMGVjMjYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjNkZTdiNzAzYWJjNDBhOWE3ZWQ4ZTVmODkzZDdiZGQ7XHJcblxyXG52YXIgQmluZGluZ18yNjI2MGJhYjM1ZTI0NjZkYjBmNjUxNzljMWRkZmUyMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18yNjI2MGJhYjM1ZTI0NjZkYjBmNjUxNzljMWRkZmUyMi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZDhkNDI0MTM2YjZkNDMyY2EzMTY4YmVjYzUzMTliY2YgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kOGQ0MjQxMzZiNmQ0MzJjYTMxNjhiZWNjNTMxOWJjZi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18yNjI2MGJhYjM1ZTI0NjZkYjBmNjUxNzljMWRkZmUyMi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2Q4ZDQyNDEzNmI2ZDQzMmNhMzE2OGJlY2M1MzE5YmNmO1xyXG5cclxuXHJcbkJpbmRpbmdfMjYyNjBiYWIzNWUyNDY2ZGIwZjY1MTc5YzFkZGZlMjIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjNkZTdiNzAzYWJjNDBhOWE3ZWQ4ZTVmODkzZDdiZGQ7XHJcblxyXG52YXIgQmluZGluZ180NWRkMTNlNTNjMWI0MzI3YmJhYTYwYTI4MmZiYTIwZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ180NWRkMTNlNTNjMWI0MzI3YmJhYTYwYTI4MmZiYTIwZi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2FiMzE0MmYwZTViNzQ5ZmM4Y2M0ZjgxZjNlZDU0MzE5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYWIzMTQyZjBlNWI3NDlmYzhjYzRmODFmM2VkNTQzMTkuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNDVkZDEzZTUzYzFiNDMyN2JiYWE2MGEyODJmYmEyMGYuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9hYjMxNDJmMGU1Yjc0OWZjOGNjNGY4MWYzZWQ1NDMxOTtcclxuXHJcblxyXG5CaW5kaW5nXzQ1ZGQxM2U1M2MxYjQzMjdiYmFhNjBhMjgyZmJhMjBmLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2YzZGU3YjcwM2FiYzQwYTlhN2VkOGU1Zjg5M2Q3YmRkO1xyXG5cclxudmFyIEJpbmRpbmdfM2RjY2JiYzBhMjgzNGY2Njg4Yjk4NGQ2NmI3MzdmOWYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfM2RjY2JiYzBhMjgzNGY2Njg4Yjk4NGQ2NmI3MzdmOWYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMzE4MjkxNTQ0MTA5NDNjMTk4ZmIxNWY3OTUxZDlkMmMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8zMTgyOTE1NDQxMDk0M2MxOThmYjE1Zjc5NTFkOWQyYy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18zZGNjYmJjMGEyODM0ZjY2ODhiOTg0ZDY2YjczN2Y5Zi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzMxODI5MTU0NDEwOTQzYzE5OGZiMTVmNzk1MWQ5ZDJjO1xyXG5cclxuXHJcbkJpbmRpbmdfM2RjY2JiYzBhMjgzNGY2Njg4Yjk4NGQ2NmI3MzdmOWYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjNkZTdiNzAzYWJjNDBhOWE3ZWQ4ZTVmODkzZDdiZGQ7XHJcblxyXG5cclxuQm9yZGVyXzk4YzIxNzVkZmE4MDQyNjBiMTI2NTVjMDg5Mjk2MWZmLkNoaWxkID0gQ29udGVudFByZXNlbnRlcl9iMGFiZGY3YTFmZWM0NTQ1OWM2MDI3NGZjOGQ2Y2IzMztcclxuXHJcbnZhciBCaW5kaW5nX2UyOWQyNTMzMzY2MTRmOTk5ODFlMmVlYzJhYTdlMGI4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2UyOWQyNTMzMzY2MTRmOTk5ODFlMmVlYzJhYTdlMGI4LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kOWFhZTE5MWM3NTM0MTdhYWI1YjY0YmZhOWM5NWIyNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2Q5YWFlMTkxYzc1MzQxN2FhYjViNjRiZmE5Yzk1YjI3Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2UyOWQyNTMzMzY2MTRmOTk5ODFlMmVlYzJhYTdlMGI4LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZDlhYWUxOTFjNzUzNDE3YWFiNWI2NGJmYTljOTViMjc7XHJcblxyXG5cclxuQmluZGluZ19lMjlkMjUzMzM2NjE0Zjk5OTgxZTJlZWMyYWE3ZTBiOC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9mM2RlN2I3MDNhYmM0MGE5YTdlZDhlNWY4OTNkN2JkZDtcclxuXHJcblxyXG5Cb3JkZXJfNmE4MTI4OGI0ZGZmNDE4MWE3NDFkNTk4Y2YyOGZhOWEuQ2hpbGQgPSBCb3JkZXJfOThjMjE3NWRmYTgwNDI2MGIxMjY1NWMwODkyOTYxZmY7XHJcblxyXG52YXIgQmluZGluZ185YjFmMTNkNTBiYzQ0ZTJjYTQ4ZjEyN2E0OTlmZmRhOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ185YjFmMTNkNTBiYzQ0ZTJjYTQ4ZjEyN2E0OTlmZmRhOS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZTJhYWMyMDU0YTY5NDE3Nzk4MWY1Yjk2NWQ5ODA0NDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9lMmFhYzIwNTRhNjk0MTc3OTgxZjViOTY1ZDk4MDQ0Mi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185YjFmMTNkNTBiYzQ0ZTJjYTQ4ZjEyN2E0OTlmZmRhOS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2UyYWFjMjA1NGE2OTQxNzc5ODFmNWI5NjVkOTgwNDQyO1xyXG5cclxuXHJcbkJpbmRpbmdfOWIxZjEzZDUwYmM0NGUyY2E0OGYxMjdhNDk5ZmZkYTkuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjNkZTdiNzAzYWJjNDBhOWE3ZWQ4ZTVmODkzZDdiZGQ7XHJcblxyXG52YXIgQmluZGluZ19kM2VmOTA3ODdmZWU0ZDUwYWNiNTk5ZWFkYjg4YWEwNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kM2VmOTA3ODdmZWU0ZDUwYWNiNTk5ZWFkYjg4YWEwNy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzAwNjQ3OTBmMzA3MjQ4ZjQ4ZmU0MjU4MzQzNTQ3NzI1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMDA2NDc5MGYzMDcyNDhmNDhmZTQyNTgzNDM1NDc3MjUuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZDNlZjkwNzg3ZmVlNGQ1MGFjYjU5OWVhZGI4OGFhMDcuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8wMDY0NzkwZjMwNzI0OGY0OGZlNDI1ODM0MzU0NzcyNTtcclxuXHJcblxyXG5CaW5kaW5nX2QzZWY5MDc4N2ZlZTRkNTBhY2I1OTllYWRiODhhYTA3LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2YzZGU3YjcwM2FiYzQwYTlhN2VkOGU1Zjg5M2Q3YmRkO1xyXG5cclxudmFyIEJpbmRpbmdfZTNlOGFiZmU1Y2I5NDQwNmE4NmY4ODE1YjRhYmE3ODggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZTNlOGFiZmU1Y2I5NDQwNmE4NmY4ODE1YjRhYmE3ODguUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNmY1YzZkMDUwNjIxNDZhZWIzM2I0N2FkYTNlODRhMTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82ZjVjNmQwNTA2MjE0NmFlYjMzYjQ3YWRhM2U4NGExOC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lM2U4YWJmZTVjYjk0NDA2YTg2Zjg4MTViNGFiYTc4OC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzZmNWM2ZDA1MDYyMTQ2YWViMzNiNDdhZGEzZTg0YTE4O1xyXG5cclxuXHJcbkJpbmRpbmdfZTNlOGFiZmU1Y2I5NDQwNmE4NmY4ODE1YjRhYmE3ODguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjNkZTdiNzAzYWJjNDBhOWE3ZWQ4ZTVmODkzZDdiZGQ7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfYjBhYmRmN2ExZmVjNDU0NTljNjAyNzRmYzhkNmNiMzMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ184YzFiODI3NGNkYmQ0MzhmOTQzNDk1OGFmZGZlZTA1MCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYjBhYmRmN2ExZmVjNDU0NTljNjAyNzRmYzhkNmNiMzMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfOTgxZDA2ZjY2NzRkNDg0NmJhOWJiZTZhZjMyMGVjMjYpO1xyXG5Db250ZW50UHJlc2VudGVyX2IwYWJkZjdhMWZlYzQ1NDU5YzYwMjc0ZmM4ZDZjYjMzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ18yNjI2MGJhYjM1ZTI0NjZkYjBmNjUxNzljMWRkZmUyMik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYjBhYmRmN2ExZmVjNDU0NTljNjAyNzRmYzhkNmNiMzMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ180NWRkMTNlNTNjMWI0MzI3YmJhYTYwYTI4MmZiYTIwZik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYjBhYmRmN2ExZmVjNDU0NTljNjAyNzRmYzhkNmNiMzMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfM2RjY2JiYzBhMjgzNGY2Njg4Yjk4NGQ2NmI3MzdmOWYpO1xyXG5Cb3JkZXJfOThjMjE3NWRmYTgwNDI2MGIxMjY1NWMwODkyOTYxZmYuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2UyOWQyNTMzMzY2MTRmOTk5ODFlMmVlYzJhYTdlMGI4KTtcclxuQm9yZGVyXzZhODEyODhiNGRmZjQxODFhNzQxZDU5OGNmMjhmYTlhLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ185YjFmMTNkNTBiYzQ0ZTJjYTQ4ZjEyN2E0OTlmZmRhOSk7XHJcbkJvcmRlcl82YTgxMjg4YjRkZmY0MTgxYTc0MWQ1OThjZjI4ZmE5YS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nX2QzZWY5MDc4N2ZlZTRkNTBhY2I1OTllYWRiODhhYTA3KTtcclxuQm9yZGVyXzZhODEyODhiNGRmZjQxODFhNzQxZDU5OGNmMjhmYTlhLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nX2UzZThhYmZlNWNiOTQ0MDZhODZmODgxNWI0YWJhNzg4KTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJiODJiODkyZmMyMzQ3OGZhMGEyZTgyNTlmYzQ3MThiLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5Xzg3ZjUzMDExM2RmYTRiZGI5OGJiNGNlOTc3M2QxN2Q0LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfODdmNTMwMTEzZGZhNGJkYjk4YmI0Y2U5NzczZDE3ZDQsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV84N2Y1MzAxMTNkZmE0YmRiOThiYjRjZTk3NzNkMTdkNCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5Xzg3ZjUzMDExM2RmYTRiZGI5OGJiNGNlOTc3M2QxN2Q0LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfODdmNTMwMTEzZGZhNGJkYjk4YmI0Y2U5NzczZDE3ZDQpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJiODJiODkyZmMyMzQ3OGZhMGEyZTgyNTlmYzQ3MThiLCBCb3JkZXJfOThjMjE3NWRmYTgwNDI2MGIxMjY1NWMwODkyOTYxZmYpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRhMDU1MWE0ZDk5NDRjZmY4N2M4NjdjOGIxMWMxY2ZmLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzhkZmMyM2M0NDAwMDRjZmI4YzZmNDhmNzEyMTk0MDM2LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfOGRmYzIzYzQ0MDAwNGNmYjhjNmY0OGY3MTIxOTQwMzYsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV84ZGZjMjNjNDQwMDA0Y2ZiOGM2ZjQ4ZjcxMjE5NDAzNiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzhkZmMyM2M0NDAwMDRjZmI4YzZmNDhmNzEyMTk0MDM2LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfOGRmYzIzYzQ0MDAwNGNmYjhjNmY0OGY3MTIxOTQwMzYpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRhMDU1MWE0ZDk5NDRjZmY4N2M4NjdjOGIxMWMxY2ZmLCBCb3JkZXJfOThjMjE3NWRmYTgwNDI2MGIxMjY1NWMwODkyOTYxZmYpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2RlYTNiZjlkMDI1NDRiYTQ4MTNjNzY2NmMzMWU0MzAxLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzM4ZTg4Y2FjOGQwNzQ5OGI4MjY5YzdiY2E1ZjZlYmM3LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMzhlODhjYWM4ZDA3NDk4YjgyNjljN2JjYTVmNmViYzcsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8zOGU4OGNhYzhkMDc0OThiODI2OWM3YmNhNWY2ZWJjNywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzM4ZTg4Y2FjOGQwNzQ5OGI4MjY5YzdiY2E1ZjZlYmM3LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMzhlODhjYWM4ZDA3NDk4YjgyNjljN2JjYTVmNmViYzcpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2RlYTNiZjlkMDI1NDRiYTQ4MTNjNzY2NmMzMWU0MzAxLCBCb3JkZXJfOThjMjE3NWRmYTgwNDI2MGIxMjY1NWMwODkyOTYxZmYpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV9mM2RlN2I3MDNhYmM0MGE5YTdlZDhlNWY4OTNkN2JkZC5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfNmE4MTI4OGI0ZGZmNDE4MWE3NDFkNTk4Y2YyOGZhOWE7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlX2YzZGU3YjcwM2FiYzQwYTlhN2VkOGU1Zjg5M2Q3YmRkO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9iZGE3YjAzNmFjNmY0MzdjYjhlNWRmMDM5OTkxNmZkMyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2JkYTdiMDM2YWM2ZjQzN2NiOGU1ZGYwMzk5OTE2ZmQzIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfYmRhN2IwMzZhYzZmNDM3Y2I4ZTVkZjAzOTk5MTZmZDMgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9iZGE3YjAzNmFjNmY0MzdjYjhlNWRmMDM5OTkxNmZkMyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYmRhN2IwMzZhYzZmNDM3Y2I4ZTVkZjAzOTk5MTZmZDMgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzQ2OTM3M2QwNWIxYzRhNzliNDBkOWVjOGRjMDVjZTM2IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNDY5MzczZDA1YjFjNGE3OWI0MGQ5ZWM4ZGMwNWNlMzYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV80NjkzNzNkMDViMWM0YTc5YjQwZDllYzhkYzA1Y2UzNiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzQ2OTM3M2QwNWIxYzRhNzliNDBkOWVjOGRjMDVjZTM2IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV80NjkzNzNkMDViMWM0YTc5YjQwZDllYzhkYzA1Y2UzNiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNmNmMWEwZDI2MjkzNDk2YjkxM2FjMzQzZTc0ODUyYjQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV82Y2YxYTBkMjYyOTM0OTZiOTEzYWMzNDNlNzQ4NTJiNCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzZjZjFhMGQyNjI5MzQ5NmI5MTNhYzM0M2U3NDg1MmI0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNmNmMWEwZDI2MjkzNDk2YjkxM2FjMzQzZTc0ODUyYjQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzZjZjFhMGQyNjI5MzQ5NmI5MTNhYzM0M2U3NDg1MmI0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UgSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlX2RjZTliYmUyM2U4NjQ3MWM4ZDExNzAyYTIxYzA0YzQzKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wgdGVtcGxhdGVPd25lcilcclxuICAgICAgICB7XHJcbnZhciB0ZW1wbGF0ZUluc3RhbmNlX2YyOTZlYWIzOWVjMzQ0MjFhZTRiYTgwOGQ1NzY4ZjdlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UoKTtcclxudGVtcGxhdGVJbnN0YW5jZV9mMjk2ZWFiMzllYzM0NDIxYWU0YmE4MDhkNTc2OGY3ZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVPd25lcjtcclxudmFyIEJvcmRlcl9hMzAzYWYyY2RhODA0ODlkYmU1NmRmZDU1OWJhYTJiMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJPdXRlckJvcmRlclwiLCBCb3JkZXJfYTMwM2FmMmNkYTgwNDg5ZGJlNTZkZmQ1NTliYWEyYjMpO1xyXG5Cb3JkZXJfYTMwM2FmMmNkYTgwNDg5ZGJlNTZkZmQ1NTliYWEyYjMuTmFtZSA9IFwiT3V0ZXJCb3JkZXJcIjtcclxuQm9yZGVyX2EzMDNhZjJjZGE4MDQ4OWRiZTU2ZGZkNTU5YmFhMmIzLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBWaXN1YWxTdGF0ZUdyb3VwXzM3ODliNTRmY2FhNTQwMTU5ZDNjN2FlOWMxYTNlODNlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlR3JvdXAoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb21tb25TdGF0ZXNcIiwgVmlzdWFsU3RhdGVHcm91cF8zNzg5YjU0ZmNhYTU0MDE1OWQzYzdhZTljMWEzZTgzZSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMzc4OWI1NGZjYWE1NDAxNTlkM2M3YWU5YzFhM2U4M2UuTmFtZSA9IFwiQ29tbW9uU3RhdGVzXCI7XHJcbnZhciBWaXN1YWxTdGF0ZV85NmRkYmZhZmQ1NzU0MzEyOGUzNmRlYjNkZTYwNTkzOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk5vcm1hbFwiLCBWaXN1YWxTdGF0ZV85NmRkYmZhZmQ1NzU0MzEyOGUzNmRlYjNkZTYwNTkzOCk7XHJcblZpc3VhbFN0YXRlXzk2ZGRiZmFmZDU3NTQzMTI4ZTM2ZGViM2RlNjA1OTM4Lk5hbWUgPSBcIk5vcm1hbFwiO1xyXG5cclxudmFyIFZpc3VhbFN0YXRlXzJjNGZjOTY0ZGQyYjRkMjk4ZTMxMDNmZjVmZjA2YjdkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUG9pbnRlck92ZXJcIiwgVmlzdWFsU3RhdGVfMmM0ZmM5NjRkZDJiNGQyOThlMzEwM2ZmNWZmMDZiN2QpO1xyXG5WaXN1YWxTdGF0ZV8yYzRmYzk2NGRkMmI0ZDI5OGUzMTAzZmY1ZmYwNmI3ZC5OYW1lID0gXCJQb2ludGVyT3ZlclwiO1xyXG52YXIgU3Rvcnlib2FyZF81Zjg1MmEyOWJlMTA0ODNlODE5OWU2YWU3OGM5Mzc1MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNDlhZDRjNmJhMjI1NDY4NzljNTZmYWRiNmE5MjMwYzQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNDlhZDRjNmJhMjI1NDY4NzljNTZmYWRiNmE5MjMwYzQsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzkxZWIyOTgyMmMwOTQxNjg4NDA5NmY4MmRjOGU1NzhmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfOTFlYjI5ODIyYzA5NDE2ODg0MDk2ZjgyZGM4ZTU3OGYuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV85MWViMjk4MjJjMDk0MTY4ODQwOTZmODJkYzhlNTc4Zi5WYWx1ZSA9IEBcIiMxMTAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNDlhZDRjNmJhMjI1NDY4NzljNTZmYWRiNmE5MjMwYzQuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzkxZWIyOTgyMmMwOTQxNjg4NDA5NmY4MmRjOGU1NzhmKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzVmODUyYTI5YmUxMDQ4M2U4MTk5ZTZhZTc4YzkzNzUxLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180OWFkNGM2YmEyMjU0Njg3OWM1NmZhZGI2YTkyMzBjNCk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMmM0ZmM5NjRkZDJiNGQyOThlMzEwM2ZmNWZmMDZiN2QuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfNWY4NTJhMjliZTEwNDgzZTgxOTllNmFlNzhjOTM3NTE7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlX2MyNjhkNzI0NGVmZTRhZDY5YzMyMzAyYTkxYWYwNGJkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUHJlc3NlZFwiLCBWaXN1YWxTdGF0ZV9jMjY4ZDcyNDRlZmU0YWQ2OWMzMjMwMmE5MWFmMDRiZCk7XHJcblZpc3VhbFN0YXRlX2MyNjhkNzI0NGVmZTRhZDY5YzMyMzAyYTkxYWYwNGJkLk5hbWUgPSBcIlByZXNzZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfYTIyMjI4OGI0YWZmNDBkYWJiMjk2OTM2OWM5YmU4ZmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzU1MjA1NTAxMGUzMjQ3ZGQ4MWI2NTIyOGYyNDUxYjFkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzU1MjA1NTAxMGUzMjQ3ZGQ4MWI2NTIyOGYyNDUxYjFkLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV80ZWI4NDkwYTIyZGQ0OTZlOTVlZDFkOTU0ODQ1NGRlYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzRlYjg0OTBhMjJkZDQ5NmU5NWVkMWQ5NTQ4NDU0ZGVjLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNGViODQ5MGEyMmRkNDk2ZTk1ZWQxZDk1NDg0NTRkZWMuVmFsdWUgPSBAXCIjMjIwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzU1MjA1NTAxMGUzMjQ3ZGQ4MWI2NTIyOGYyNDUxYjFkLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV80ZWI4NDkwYTIyZGQ0OTZlOTVlZDFkOTU0ODQ1NGRlYyk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9hMjIyMjg4YjRhZmY0MGRhYmIyOTY5MzY5YzliZThmYi5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNTUyMDU1MDEwZTMyNDdkZDgxYjY1MjI4ZjI0NTFiMWQpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlX2MyNjhkNzI0NGVmZTRhZDY5YzMyMzAyYTkxYWYwNGJkLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2EyMjIyODhiNGFmZjQwZGFiYjI5NjkzNjljOWJlOGZiO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV81MmEyMTVkMjgyNTA0ZGJkOTcwZWE4ZjI5NDU5ZTEzMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkRpc2FibGVkXCIsIFZpc3VhbFN0YXRlXzUyYTIxNWQyODI1MDRkYmQ5NzBlYThmMjk0NTllMTMxKTtcclxuVmlzdWFsU3RhdGVfNTJhMjE1ZDI4MjUwNGRiZDk3MGVhOGYyOTQ1OWUxMzEuTmFtZSA9IFwiRGlzYWJsZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfZGFhNTU3MDUyMmM3NGRmOWFkZjc0ZTY2YmE1YTM1MWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzMxZmY4YjVhODI4ODQzYjJhZGU0MTUxMzY4NmM4YjdhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzMxZmY4YjVhODI4ODQzYjJhZGU0MTUxMzY4NmM4YjdhLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV83YjdjNjRmN2QwYjA0MGM4OGUxYTI4ZWZhZjc1NGJjYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzdiN2M2NGY3ZDBiMDQwYzg4ZTFhMjhlZmFmNzU0YmNjLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfN2I3YzY0ZjdkMGIwNDBjODhlMWEyOGVmYWY3NTRiY2MuVmFsdWUgPSBAXCIjMzNGRkZGRkZcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzMxZmY4YjVhODI4ODQzYjJhZGU0MTUxMzY4NmM4YjdhLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV83YjdjNjRmN2QwYjA0MGM4OGUxYTI4ZWZhZjc1NGJjYyk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9kYWE1NTcwNTIyYzc0ZGY5YWRmNzRlNjZiYTVhMzUxYy5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMzFmZjhiNWE4Mjg4NDNiMmFkZTQxNTEzNjg2YzhiN2EpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzUyYTIxNWQyODI1MDRkYmQ5NzBlYThmMjk0NTllMTMxLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2RhYTU1NzA1MjJjNzRkZjlhZGY3NGU2NmJhNWEzNTFjO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlR3JvdXBfMzc4OWI1NGZjYWE1NDAxNTlkM2M3YWU5YzFhM2U4M2UuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV85NmRkYmZhZmQ1NzU0MzEyOGUzNmRlYjNkZTYwNTkzOCk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMzc4OWI1NGZjYWE1NDAxNTlkM2M3YWU5YzFhM2U4M2UuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV8yYzRmYzk2NGRkMmI0ZDI5OGUzMTAzZmY1ZmYwNmI3ZCk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMzc4OWI1NGZjYWE1NDAxNTlkM2M3YWU5YzFhM2U4M2UuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV9jMjY4ZDcyNDRlZmU0YWQ2OWMzMjMwMmE5MWFmMDRiZCk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMzc4OWI1NGZjYWE1NDAxNTlkM2M3YWU5YzFhM2U4M2UuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV81MmEyMTVkMjgyNTA0ZGJkOTcwZWE4ZjI5NDU5ZTEzMSk7XHJcblxyXG5cclxudGVtcGxhdGVPd25lci5JTlRFUk5BTF9HZXRWaXN1YWxTdGF0ZUdyb3VwcygpLkFkZChWaXN1YWxTdGF0ZUdyb3VwXzM3ODliNTRmY2FhNTQwMTU5ZDNjN2FlOWMxYTNlODNlKTtcclxuXHJcbnZhciBCb3JkZXJfZDczNDIyYTg0YmQ4NGE0MWFmOTU4Yjc1NjYxY2Q4MTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiSW5uZXJCb3JkZXJcIiwgQm9yZGVyX2Q3MzQyMmE4NGJkODRhNDFhZjk1OGI3NTY2MWNkODE5KTtcclxuQm9yZGVyX2Q3MzQyMmE4NGJkODRhNDFhZjk1OGI3NTY2MWNkODE5Lk5hbWUgPSBcIklubmVyQm9yZGVyXCI7XHJcbkJvcmRlcl9kNzM0MjJhODRiZDg0YTQxYWY5NThiNzU2NjFjZDgxOS5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgQ29udGVudFByZXNlbnRlcl9iZDA2OWY3ZGYwZWI0YzM5ODQxZjYxYmZmODM0YzIxYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50UHJlc2VudGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29udGVudFByZXNlbnRlclwiLCBDb250ZW50UHJlc2VudGVyX2JkMDY5ZjdkZjBlYjRjMzk4NDFmNjFiZmY4MzRjMjFiKTtcclxuQ29udGVudFByZXNlbnRlcl9iZDA2OWY3ZGYwZWI0YzM5ODQxZjYxYmZmODM0YzIxYi5OYW1lID0gXCJDb250ZW50UHJlc2VudGVyXCI7XHJcbnZhciBCaW5kaW5nXzMxMjA3ZGFmYzgwNDQwNDk4OTY5ZTQ2MmIzMmYxMzFlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzMxMjA3ZGFmYzgwNDQwNDk4OTY5ZTQ2MmIzMmYxMzFlLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRUZW1wbGF0ZVwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzYyNWZhZjkzMGNhODQyZjI4NmQwZmQxMzk3ZjFiOTIyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNjI1ZmFmOTMwY2E4NDJmMjg2ZDBmZDEzOTdmMWI5MjIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMzEyMDdkYWZjODA0NDA0OTg5NjllNDYyYjMyZjEzMWUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV82MjVmYWY5MzBjYTg0MmYyODZkMGZkMTM5N2YxYjkyMjtcclxuXHJcblxyXG5CaW5kaW5nXzMxMjA3ZGFmYzgwNDQwNDk4OTY5ZTQ2MmIzMmYxMzFlLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2YyOTZlYWIzOWVjMzQ0MjFhZTRiYTgwOGQ1NzY4ZjdlO1xyXG5cclxudmFyIEJpbmRpbmdfNDE3MTJhNDc0M2FhNDA3NWI2NzdiMTE2ZGFmNjViYzcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNDE3MTJhNDc0M2FhNDA3NWI2NzdiMTE2ZGFmNjViYzcuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2JjOWM1ZWM3YmY4NzQ2YzVhMDE0MzU4ZGMwMWIxNjVhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYmM5YzVlYzdiZjg3NDZjNWEwMTQzNThkYzAxYjE2NWEuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNDE3MTJhNDc0M2FhNDA3NWI2NzdiMTE2ZGFmNjViYzcuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9iYzljNWVjN2JmODc0NmM1YTAxNDM1OGRjMDFiMTY1YTtcclxuXHJcblxyXG5CaW5kaW5nXzQxNzEyYTQ3NDNhYTQwNzViNjc3YjExNmRhZjY1YmM3LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2YyOTZlYWIzOWVjMzQ0MjFhZTRiYTgwOGQ1NzY4ZjdlO1xyXG5cclxudmFyIEJpbmRpbmdfZDc1MzE2ZjFkNTg5NDE0NDk4Y2E4Zjg3YzEwNjZkZTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZDc1MzE2ZjFkNTg5NDE0NDk4Y2E4Zjg3YzEwNjZkZTMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiUGFkZGluZ1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2EwNzlhNTU2NTJlYTQxZmI4OGYxMDI3NzRlMmI3YTQ5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYTA3OWE1NTY1MmVhNDFmYjg4ZjEwMjc3NGUyYjdhNDkuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZDc1MzE2ZjFkNTg5NDE0NDk4Y2E4Zjg3YzEwNjZkZTMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9hMDc5YTU1NjUyZWE0MWZiODhmMTAyNzc0ZTJiN2E0OTtcclxuXHJcblxyXG5CaW5kaW5nX2Q3NTMxNmYxZDU4OTQxNDQ5OGNhOGY4N2MxMDY2ZGUzLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2YyOTZlYWIzOWVjMzQ0MjFhZTRiYTgwOGQ1NzY4ZjdlO1xyXG5cclxudmFyIEJpbmRpbmdfZDA0OTk4OGI1M2Y5NDU4OGJlNDc1ZDJiNGUyNzI4N2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZDA0OTk4OGI1M2Y5NDU4OGJlNDc1ZDJiNGUyNzI4N2UuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiSG9yaXpvbnRhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8zZGFjOGFlNTRlN2I0ZDJmODk0MmE2NTcyNTJmODc5NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzNkYWM4YWU1NGU3YjRkMmY4OTQyYTY1NzI1MmY4Nzk0Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2QwNDk5ODhiNTNmOTQ1ODhiZTQ3NWQyYjRlMjcyODdlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfM2RhYzhhZTU0ZTdiNGQyZjg5NDJhNjU3MjUyZjg3OTQ7XHJcblxyXG5cclxuQmluZGluZ19kMDQ5OTg4YjUzZjk0NTg4YmU0NzVkMmI0ZTI3Mjg3ZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9mMjk2ZWFiMzllYzM0NDIxYWU0YmE4MDhkNTc2OGY3ZTtcclxuXHJcbnZhciBCaW5kaW5nX2U5MzYzMTM1Y2ZkZDQ5MDVhY2M4MWNmNmI3NGViNjM5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2U5MzYzMTM1Y2ZkZDQ5MDVhY2M4MWNmNmI3NGViNjM5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2I2ZGY5NGZjMzRhNDQ0M2NiMjQ0NmU0YmNjZWNiNjk5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYjZkZjk0ZmMzNGE0NDQzY2IyNDQ2ZTRiY2NlY2I2OTkuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZTkzNjMxMzVjZmRkNDkwNWFjYzgxY2Y2Yjc0ZWI2MzkuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9iNmRmOTRmYzM0YTQ0NDNjYjI0NDZlNGJjY2VjYjY5OTtcclxuXHJcblxyXG5CaW5kaW5nX2U5MzYzMTM1Y2ZkZDQ5MDVhY2M4MWNmNmI3NGViNjM5LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2YyOTZlYWIzOWVjMzQ0MjFhZTRiYTgwOGQ1NzY4ZjdlO1xyXG5cclxuXHJcbkJvcmRlcl9kNzM0MjJhODRiZDg0YTQxYWY5NThiNzU2NjFjZDgxOS5DaGlsZCA9IENvbnRlbnRQcmVzZW50ZXJfYmQwNjlmN2RmMGViNGMzOTg0MWY2MWJmZjgzNGMyMWI7XHJcblxyXG52YXIgQmluZGluZ19mMmMxMDQ4MWU3MTY0YTk5YTIxZmViMTBjMzUzODhlMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19mMmMxMDQ4MWU3MTY0YTk5YTIxZmViMTBjMzUzODhlMS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOGM0ZDI3ZGExMmVmNDhkMzhhMzMzMDkxMmVlYzNlYTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV84YzRkMjdkYTEyZWY0OGQzOGEzMzMwOTEyZWVjM2VhOC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19mMmMxMDQ4MWU3MTY0YTk5YTIxZmViMTBjMzUzODhlMS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzhjNGQyN2RhMTJlZjQ4ZDM4YTMzMzA5MTJlZWMzZWE4O1xyXG5cclxuXHJcbkJpbmRpbmdfZjJjMTA0ODFlNzE2NGE5OWEyMWZlYjEwYzM1Mzg4ZTEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjI5NmVhYjM5ZWMzNDQyMWFlNGJhODA4ZDU3NjhmN2U7XHJcblxyXG5cclxuQm9yZGVyX2EzMDNhZjJjZGE4MDQ4OWRiZTU2ZGZkNTU5YmFhMmIzLkNoaWxkID0gQm9yZGVyX2Q3MzQyMmE4NGJkODRhNDFhZjk1OGI3NTY2MWNkODE5O1xyXG5cclxudmFyIEJpbmRpbmdfMWZlNzI0ZjEzODBjNDQyMTlhMDZkZjdiNmUwZmEyNDMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMWZlNzI0ZjEzODBjNDQyMTlhMDZkZjdiNmUwZmEyNDMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzQyMzc3NWFmZTUxNzRhNmU4YTE2MzMwM2QwZTViM2NlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNDIzNzc1YWZlNTE3NGE2ZThhMTYzMzAzZDBlNWIzY2UuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMWZlNzI0ZjEzODBjNDQyMTlhMDZkZjdiNmUwZmEyNDMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV80MjM3NzVhZmU1MTc0YTZlOGExNjMzMDNkMGU1YjNjZTtcclxuXHJcblxyXG5CaW5kaW5nXzFmZTcyNGYxMzgwYzQ0MjE5YTA2ZGY3YjZlMGZhMjQzLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2YyOTZlYWIzOWVjMzQ0MjFhZTRiYTgwOGQ1NzY4ZjdlO1xyXG5cclxudmFyIEJpbmRpbmdfOWVjOGM3ZWY3MGMyNGE1MjlhODQ4ZjNhYzg2ZDkxZDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOWVjOGM3ZWY3MGMyNGE1MjlhODQ4ZjNhYzg2ZDkxZDAuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyQnJ1c2hcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jYjBiOGVlNmU0OTg0ZWRjOGMwODk2NmYwY2NiYzQxYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2NiMGI4ZWU2ZTQ5ODRlZGM4YzA4OTY2ZjBjY2JjNDFhLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzllYzhjN2VmNzBjMjRhNTI5YTg0OGYzYWM4NmQ5MWQwLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfY2IwYjhlZTZlNDk4NGVkYzhjMDg5NjZmMGNjYmM0MWE7XHJcblxyXG5cclxuQmluZGluZ185ZWM4YzdlZjcwYzI0YTUyOWE4NDhmM2FjODZkOTFkMC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9mMjk2ZWFiMzllYzM0NDIxYWU0YmE4MDhkNTc2OGY3ZTtcclxuXHJcbnZhciBCaW5kaW5nXzIyYzUxOGNlYjk4YTQ2OTE4Njk3ZjA4MDE3MjQ1ZDlhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzIyYzUxOGNlYjk4YTQ2OTE4Njk3ZjA4MDE3MjQ1ZDlhLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlclRoaWNrbmVzc1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzdmNGFiNTJkZTIyODQ0Mjk4MjQxY2QyYzQ0Y2YwNjA5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfN2Y0YWI1MmRlMjI4NDQyOTgyNDFjZDJjNDRjZjA2MDkuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMjJjNTE4Y2ViOThhNDY5MTg2OTdmMDgwMTcyNDVkOWEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV83ZjRhYjUyZGUyMjg0NDI5ODI0MWNkMmM0NGNmMDYwOTtcclxuXHJcblxyXG5CaW5kaW5nXzIyYzUxOGNlYjk4YTQ2OTE4Njk3ZjA4MDE3MjQ1ZDlhLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2YyOTZlYWIzOWVjMzQ0MjFhZTRiYTgwOGQ1NzY4ZjdlO1xyXG5cclxuXHJcblxyXG5Db250ZW50UHJlc2VudGVyX2JkMDY5ZjdkZjBlYjRjMzk4NDFmNjFiZmY4MzRjMjFiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFRlbXBsYXRlUHJvcGVydHksIEJpbmRpbmdfMzEyMDdkYWZjODA0NDA0OTg5NjllNDYyYjMyZjEzMWUpO1xyXG5Db250ZW50UHJlc2VudGVyX2JkMDY5ZjdkZjBlYjRjMzk4NDFmNjFiZmY4MzRjMjFiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFByb3BlcnR5LCBCaW5kaW5nXzQxNzEyYTQ3NDNhYTQwNzViNjc3YjExNmRhZjY1YmM3KTtcclxuQ29udGVudFByZXNlbnRlcl9iZDA2OWY3ZGYwZWI0YzM5ODQxZjYxYmZmODM0YzIxYi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuTWFyZ2luUHJvcGVydHksIEJpbmRpbmdfZDc1MzE2ZjFkNTg5NDE0NDk4Y2E4Zjg3YzEwNjZkZTMpO1xyXG5Db250ZW50UHJlc2VudGVyX2JkMDY5ZjdkZjBlYjRjMzk4NDFmNjFiZmY4MzRjMjFiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5Ib3Jpem9udGFsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfZDA0OTk4OGI1M2Y5NDU4OGJlNDc1ZDJiNGUyNzI4N2UpO1xyXG5Db250ZW50UHJlc2VudGVyX2JkMDY5ZjdkZjBlYjRjMzk4NDFmNjFiZmY4MzRjMjFiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5WZXJ0aWNhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nX2U5MzYzMTM1Y2ZkZDQ5MDVhY2M4MWNmNmI3NGViNjM5KTtcclxuQm9yZGVyX2Q3MzQyMmE4NGJkODRhNDFhZjk1OGI3NTY2MWNkODE5LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19mMmMxMDQ4MWU3MTY0YTk5YTIxZmViMTBjMzUzODhlMSk7XHJcbkJvcmRlcl9hMzAzYWYyY2RhODA0ODlkYmU1NmRmZDU1OWJhYTJiMy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfMWZlNzI0ZjEzODBjNDQyMTlhMDZkZjdiNmUwZmEyNDMpO1xyXG5Cb3JkZXJfYTMwM2FmMmNkYTgwNDg5ZGJlNTZkZmQ1NTliYWEyYjMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyQnJ1c2hQcm9wZXJ0eSwgQmluZGluZ185ZWM4YzdlZjcwYzI0YTUyOWE4NDhmM2FjODZkOTFkMCk7XHJcbkJvcmRlcl9hMzAzYWYyY2RhODA0ODlkYmU1NmRmZDU1OWJhYTJiMy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJUaGlja25lc3NQcm9wZXJ0eSwgQmluZGluZ18yMmM1MThjZWI5OGE0NjkxODY5N2YwODAxNzI0NWQ5YSk7XHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180OWFkNGM2YmEyMjU0Njg3OWM1NmZhZGI2YTkyMzBjNCxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9iZGE3YjAzNmFjNmY0MzdjYjhlNWRmMDM5OTkxNmZkMyxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2JkYTdiMDM2YWM2ZjQzN2NiOGU1ZGYwMzk5OTE2ZmQzLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfYmRhN2IwMzZhYzZmNDM3Y2I4ZTVkZjAzOTk5MTZmZDMsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9iZGE3YjAzNmFjNmY0MzdjYjhlNWRmMDM5OTkxNmZkMyxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2JkYTdiMDM2YWM2ZjQzN2NiOGU1ZGYwMzk5OTE2ZmQzKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180OWFkNGM2YmEyMjU0Njg3OWM1NmZhZGI2YTkyMzBjNCwgQm9yZGVyX2Q3MzQyMmE4NGJkODRhNDFhZjk1OGI3NTY2MWNkODE5KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181NTIwNTUwMTBlMzI0N2RkODFiNjUyMjhmMjQ1MWIxZCxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV80NjkzNzNkMDViMWM0YTc5YjQwZDllYzhkYzA1Y2UzNixcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzQ2OTM3M2QwNWIxYzRhNzliNDBkOWVjOGRjMDVjZTM2LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNDY5MzczZDA1YjFjNGE3OWI0MGQ5ZWM4ZGMwNWNlMzYsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV80NjkzNzNkMDViMWM0YTc5YjQwZDllYzhkYzA1Y2UzNixcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzQ2OTM3M2QwNWIxYzRhNzliNDBkOWVjOGRjMDVjZTM2KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181NTIwNTUwMTBlMzI0N2RkODFiNjUyMjhmMjQ1MWIxZCwgQm9yZGVyX2Q3MzQyMmE4NGJkODRhNDFhZjk1OGI3NTY2MWNkODE5KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zMWZmOGI1YTgyODg0M2IyYWRlNDE1MTM2ODZjOGI3YSxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV82Y2YxYTBkMjYyOTM0OTZiOTEzYWMzNDNlNzQ4NTJiNCxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzZjZjFhMGQyNjI5MzQ5NmI5MTNhYzM0M2U3NDg1MmI0LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNmNmMWEwZDI2MjkzNDk2YjkxM2FjMzQzZTc0ODUyYjQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV82Y2YxYTBkMjYyOTM0OTZiOTEzYWMzNDNlNzQ4NTJiNCxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzZjZjFhMGQyNjI5MzQ5NmI5MTNhYzM0M2U3NDg1MmI0KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zMWZmOGI1YTgyODg0M2IyYWRlNDE1MTM2ODZjOGI3YSwgQm9yZGVyX2Q3MzQyMmE4NGJkODRhNDFhZjk1OGI3NTY2MWNkODE5KTtcclxuXHJcbnRlbXBsYXRlSW5zdGFuY2VfZjI5NmVhYjM5ZWMzNDQyMWFlNGJhODA4ZDU3NjhmN2UuVGVtcGxhdGVDb250ZW50ID0gQm9yZGVyX2EzMDNhZjJjZGE4MDQ4OWRiZTU2ZGZkNTU5YmFhMmIzO1xyXG5yZXR1cm4gdGVtcGxhdGVJbnN0YW5jZV9mMjk2ZWFiMzllYzM0NDIxYWU0YmE4MDhkNTc2OGY3ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMjQ3ODlmYzQ2Yzc2NGI1OTk5NzhjZDY5N2IxY2E4MmMgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8yNDc4OWZjNDZjNzY0YjU5OTk3OGNkNjk3YjFjYTgyYyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzI0Nzg5ZmM0NmM3NjRiNTk5OTc4Y2Q2OTdiMWNhODJjIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMjQ3ODlmYzQ2Yzc2NGI1OTk5NzhjZDY5N2IxY2E4MmMgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzI0Nzg5ZmM0NmM3NjRiNTk5OTc4Y2Q2OTdiMWNhODJjIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9hMGNmOWYxMWRhYjY0MmFiOWY5YTU5MWMwMTE0N2JkZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2EwY2Y5ZjExZGFiNjQyYWI5ZjlhNTkxYzAxMTQ3YmRlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfYTBjZjlmMTFkYWI2NDJhYjlmOWE1OTFjMDExNDdiZGUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9hMGNmOWYxMWRhYjY0MmFiOWY5YTU5MWMwMTE0N2JkZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYTBjZjlmMTFkYWI2NDJhYjlmOWE1OTFjMDExNDdiZGUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2FhZjM0NGYzNjgxZjRhZWQ5M2JjYjgzMmQ1OGIyYmQ3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYWFmMzQ0ZjM2ODFmNGFlZDkzYmNiODMyZDU4YjJiZDcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9hYWYzNDRmMzY4MWY0YWVkOTNiY2I4MzJkNThiMmJkNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2FhZjM0NGYzNjgxZjRhZWQ5M2JjYjgzMmQ1OGIyYmQ3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9hYWYzNDRmMzY4MWY0YWVkOTNiY2I4MzJkNThiMmJkNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlIEluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV84NDI3NDNjMWNjYzc0OWU2OGNkZjY4YWNmY2I3M2E3MyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sIHRlbXBsYXRlT3duZXIpXHJcbiAgICAgICAge1xyXG52YXIgdGVtcGxhdGVJbnN0YW5jZV8zNTk0NzRkNzQ2Mzg0ZmI2YjlhNjg0ZGNjMGM1OTVjZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlKCk7XHJcbnRlbXBsYXRlSW5zdGFuY2VfMzU5NDc0ZDc0NjM4NGZiNmI5YTY4NGRjYzBjNTk1Y2QuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlT3duZXI7XHJcbnZhciBCb3JkZXJfY2IwMDczNDcwNTE0NDQ0NWJlNjA0NjYwYzQ3MjgwMDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiT3V0ZXJCb3JkZXJcIiwgQm9yZGVyX2NiMDA3MzQ3MDUxNDQ0NDViZTYwNDY2MGM0NzI4MDA5KTtcclxuQm9yZGVyX2NiMDA3MzQ3MDUxNDQ0NDViZTYwNDY2MGM0NzI4MDA5Lk5hbWUgPSBcIk91dGVyQm9yZGVyXCI7XHJcbkJvcmRlcl9jYjAwNzM0NzA1MTQ0NDQ1YmU2MDQ2NjBjNDcyODAwOS5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgVmlzdWFsU3RhdGVHcm91cF8wYjU3N2UwMzczOTQ0YjNmYmFlYzIzOTE1MjJiZGY5ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZUdyb3VwKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29tbW9uU3RhdGVzXCIsIFZpc3VhbFN0YXRlR3JvdXBfMGI1NzdlMDM3Mzk0NGIzZmJhZWMyMzkxNTIyYmRmOWQpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzBiNTc3ZTAzNzM5NDRiM2ZiYWVjMjM5MTUyMmJkZjlkLk5hbWUgPSBcIkNvbW1vblN0YXRlc1wiO1xyXG52YXIgVmlzdWFsU3RhdGVfNDBiYzk5NGRmYjdiNDc3ZjlkMjI5ODk5Y2UzYWJkZTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJOb3JtYWxcIiwgVmlzdWFsU3RhdGVfNDBiYzk5NGRmYjdiNDc3ZjlkMjI5ODk5Y2UzYWJkZTMpO1xyXG5WaXN1YWxTdGF0ZV80MGJjOTk0ZGZiN2I0NzdmOWQyMjk4OTljZTNhYmRlMy5OYW1lID0gXCJOb3JtYWxcIjtcclxuXHJcbnZhciBWaXN1YWxTdGF0ZV9jMGJiNGZiZTMwZTg0NzE4OWI0OWNmZTRmMTFkZDM5NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlBvaW50ZXJPdmVyXCIsIFZpc3VhbFN0YXRlX2MwYmI0ZmJlMzBlODQ3MTg5YjQ5Y2ZlNGYxMWRkMzk1KTtcclxuVmlzdWFsU3RhdGVfYzBiYjRmYmUzMGU4NDcxODliNDljZmU0ZjExZGQzOTUuTmFtZSA9IFwiUG9pbnRlck92ZXJcIjtcclxudmFyIFN0b3J5Ym9hcmRfYjI5NjljNDM1ZTQ1NDkyOWJhZWI0NDlkNTNiOGQwZGQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2YxMmY3NmJjNGQxMDRhN2E5MzhlOTAwMWQxZTU2MDI2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2YxMmY3NmJjNGQxMDRhN2E5MzhlOTAwMWQxZTU2MDI2LEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wNDRkNTQyNzAwZmQ0ZDlhOTk2N2Q1Mzk3MmMwYmM1ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzA0NGQ1NDI3MDBmZDRkOWE5OTY3ZDUzOTcyYzBiYzVlLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMDQ0ZDU0MjcwMGZkNGQ5YTk5NjdkNTM5NzJjMGJjNWUuVmFsdWUgPSBAXCIjMTEwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2YxMmY3NmJjNGQxMDRhN2E5MzhlOTAwMWQxZTU2MDI2LktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wNDRkNTQyNzAwZmQ0ZDlhOTk2N2Q1Mzk3MmMwYmM1ZSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9iMjk2OWM0MzVlNDU0OTI5YmFlYjQ0OWQ1M2I4ZDBkZC5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZjEyZjc2YmM0ZDEwNGE3YTkzOGU5MDAxZDFlNTYwMjYpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlX2MwYmI0ZmJlMzBlODQ3MTg5YjQ5Y2ZlNGYxMWRkMzk1LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2IyOTY5YzQzNWU0NTQ5MjliYWViNDQ5ZDUzYjhkMGRkO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV9mMTllNTVlYTkzYmE0MTUzYmMyMjA2YmU2NmM5ZmZjMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlByZXNzZWRcIiwgVmlzdWFsU3RhdGVfZjE5ZTU1ZWE5M2JhNDE1M2JjMjIwNmJlNjZjOWZmYzIpO1xyXG5WaXN1YWxTdGF0ZV9mMTllNTVlYTkzYmE0MTUzYmMyMjA2YmU2NmM5ZmZjMi5OYW1lID0gXCJQcmVzc2VkXCI7XHJcbnZhciBTdG9yeWJvYXJkX2M3NDAyZmNiZmE0YTQ0Nzg4ZTMyYmM5ZmIzMmFlNGYyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZjJhYTUxMTE2MjE0OGNlYWI1NzY1NjQ2MjM5NDQ2OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZjJhYTUxMTE2MjE0OGNlYWI1NzY1NjQ2MjM5NDQ2OSxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjhkYjVhYjFiM2Q5NGUwOWI2MDE2YTk2MTllZDNlNWYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82OGRiNWFiMWIzZDk0ZTA5YjYwMTZhOTYxOWVkM2U1Zi5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzY4ZGI1YWIxYjNkOTRlMDliNjAxNmE5NjE5ZWQzZTVmLlZhbHVlID0gQFwiIzIyMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZjJhYTUxMTE2MjE0OGNlYWI1NzY1NjQ2MjM5NDQ2OS5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjhkYjVhYjFiM2Q5NGUwOWI2MDE2YTk2MTllZDNlNWYpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfYzc0MDJmY2JmYTRhNDQ3ODhlMzJiYzlmYjMyYWU0ZjIuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzlmMmFhNTExMTYyMTQ4Y2VhYjU3NjU2NDYyMzk0NDY5KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9mMTllNTVlYTkzYmE0MTUzYmMyMjA2YmU2NmM5ZmZjMi5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF9jNzQwMmZjYmZhNGE0NDc4OGUzMmJjOWZiMzJhZTRmMjtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZGUzZmRhYzk4MmNjNDVlZDgzODdhMWVkYjEyYTBmMjcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJEaXNhYmxlZFwiLCBWaXN1YWxTdGF0ZV9kZTNmZGFjOTgyY2M0NWVkODM4N2ExZWRiMTJhMGYyNyk7XHJcblZpc3VhbFN0YXRlX2RlM2ZkYWM5ODJjYzQ1ZWQ4Mzg3YTFlZGIxMmEwZjI3Lk5hbWUgPSBcIkRpc2FibGVkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzllY2M4NzIwNGJmODQ2MDg4Mzg5YjBkNWNjNTc5YjM1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181ZThhMTRkYzMyYzI0MDgxOTc5Nzg5ZDdlY2Y5YjdiOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181ZThhMTRkYzMyYzI0MDgxOTc5Nzg5ZDdlY2Y5YjdiOCxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMGRkYWZkNDA2MzU0NGViZGJkMmVlNDU2MGNhYmY4ZDQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wZGRhZmQ0MDYzNTQ0ZWJkYmQyZWU0NTYwY2FiZjhkNC5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzBkZGFmZDQwNjM1NDRlYmRiZDJlZTQ1NjBjYWJmOGQ0LlZhbHVlID0gQFwiIzMzRkZGRkZGXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181ZThhMTRkYzMyYzI0MDgxOTc5Nzg5ZDdlY2Y5YjdiOC5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMGRkYWZkNDA2MzU0NGViZGJkMmVlNDU2MGNhYmY4ZDQpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfOWVjYzg3MjA0YmY4NDYwODgzODliMGQ1Y2M1NzliMzUuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzVlOGExNGRjMzJjMjQwODE5Nzk3ODlkN2VjZjliN2I4KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9kZTNmZGFjOTgyY2M0NWVkODM4N2ExZWRiMTJhMGYyNy5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF85ZWNjODcyMDRiZjg0NjA4ODM4OWIwZDVjYzU3OWIzNTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZUdyb3VwXzBiNTc3ZTAzNzM5NDRiM2ZiYWVjMjM5MTUyMmJkZjlkLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNDBiYzk5NGRmYjdiNDc3ZjlkMjI5ODk5Y2UzYWJkZTMpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzBiNTc3ZTAzNzM5NDRiM2ZiYWVjMjM5MTUyMmJkZjlkLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfYzBiYjRmYmUzMGU4NDcxODliNDljZmU0ZjExZGQzOTUpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzBiNTc3ZTAzNzM5NDRiM2ZiYWVjMjM5MTUyMmJkZjlkLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfZjE5ZTU1ZWE5M2JhNDE1M2JjMjIwNmJlNjZjOWZmYzIpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzBiNTc3ZTAzNzM5NDRiM2ZiYWVjMjM5MTUyMmJkZjlkLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfZGUzZmRhYzk4MmNjNDVlZDgzODdhMWVkYjEyYTBmMjcpO1xyXG5cclxuXHJcbnRlbXBsYXRlT3duZXIuSU5URVJOQUxfR2V0VmlzdWFsU3RhdGVHcm91cHMoKS5BZGQoVmlzdWFsU3RhdGVHcm91cF8wYjU3N2UwMzczOTQ0YjNmYmFlYzIzOTE1MjJiZGY5ZCk7XHJcblxyXG52YXIgQm9yZGVyXzk3NTg0MjcwOWJlMjRhMDM4MjVhNTg3MzU3YmZmMGE2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIklubmVyQm9yZGVyXCIsIEJvcmRlcl85NzU4NDI3MDliZTI0YTAzODI1YTU4NzM1N2JmZjBhNik7XHJcbkJvcmRlcl85NzU4NDI3MDliZTI0YTAzODI1YTU4NzM1N2JmZjBhNi5OYW1lID0gXCJJbm5lckJvcmRlclwiO1xyXG5Cb3JkZXJfOTc1ODQyNzA5YmUyNGEwMzgyNWE1ODczNTdiZmYwYTYuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENvbnRlbnRQcmVzZW50ZXJfMjZlODk1OWM5YzJkNGNiYWFjODQ3NDkyYzU2OTA0ZjYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudFByZXNlbnRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbnRlbnRQcmVzZW50ZXJcIiwgQ29udGVudFByZXNlbnRlcl8yNmU4OTU5YzljMmQ0Y2JhYWM4NDc0OTJjNTY5MDRmNik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMjZlODk1OWM5YzJkNGNiYWFjODQ3NDkyYzU2OTA0ZjYuTmFtZSA9IFwiQ29udGVudFByZXNlbnRlclwiO1xyXG52YXIgQmluZGluZ19iYjkxNmY0MDlhMjA0MDVkYTkzNWMzYjhhYzFjNzc3OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19iYjkxNmY0MDlhMjA0MDVkYTkzNWMzYjhhYzFjNzc3OS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50VGVtcGxhdGVcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV85MTQ1ZWE5NjBhOGQ0NTY2YTI5YTQzYWZmZjY5YTQ4ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzkxNDVlYTk2MGE4ZDQ1NjZhMjlhNDNhZmZmNjlhNDhmLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2JiOTE2ZjQwOWEyMDQwNWRhOTM1YzNiOGFjMWM3Nzc5LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOTE0NWVhOTYwYThkNDU2NmEyOWE0M2FmZmY2OWE0OGY7XHJcblxyXG5cclxuQmluZGluZ19iYjkxNmY0MDlhMjA0MDVkYTkzNWMzYjhhYzFjNzc3OS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8zNTk0NzRkNzQ2Mzg0ZmI2YjlhNjg0ZGNjMGM1OTVjZDtcclxuXHJcbnZhciBCaW5kaW5nXzg0YmI2NDg4ZWYwMDQwMjFhZDJlZDU0YjVkMWY1OWNiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzg0YmI2NDg4ZWYwMDQwMjFhZDJlZDU0YjVkMWY1OWNiLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lNzA2OTc5NjMxNDI0Y2JkYjYxYmQzOTY1MDRkNzJmNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2U3MDY5Nzk2MzE0MjRjYmRiNjFiZDM5NjUwNGQ3MmY2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzg0YmI2NDg4ZWYwMDQwMjFhZDJlZDU0YjVkMWY1OWNiLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZTcwNjk3OTYzMTQyNGNiZGI2MWJkMzk2NTA0ZDcyZjY7XHJcblxyXG5cclxuQmluZGluZ184NGJiNjQ4OGVmMDA0MDIxYWQyZWQ1NGI1ZDFmNTljYi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8zNTk0NzRkNzQ2Mzg0ZmI2YjlhNjg0ZGNjMGM1OTVjZDtcclxuXHJcbnZhciBCaW5kaW5nXzU5YzM3NGEzNzNkZTQ3MjQ4YzhmYWEzN2U3YzA3ZjUxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzU5YzM3NGEzNzNkZTQ3MjQ4YzhmYWEzN2U3YzA3ZjUxLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlBhZGRpbmdcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8wMmRjNmRjNmFjZjg0YTJkYjE4NmY4Yjc4Zjk2NDFmMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzAyZGM2ZGM2YWNmODRhMmRiMTg2ZjhiNzhmOTY0MWYwLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzU5YzM3NGEzNzNkZTQ3MjQ4YzhmYWEzN2U3YzA3ZjUxLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMDJkYzZkYzZhY2Y4NGEyZGIxODZmOGI3OGY5NjQxZjA7XHJcblxyXG5cclxuQmluZGluZ181OWMzNzRhMzczZGU0NzI0OGM4ZmFhMzdlN2MwN2Y1MS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8zNTk0NzRkNzQ2Mzg0ZmI2YjlhNjg0ZGNjMGM1OTVjZDtcclxuXHJcbnZhciBCaW5kaW5nX2FjNGMwMTZkMjc2NTRkZTg5N2FhNGNjMDk2ZTRkNjNjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2FjNGMwMTZkMjc2NTRkZTg5N2FhNGNjMDk2ZTRkNjNjLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkhvcml6b250YWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZjc3MDA3Mjk4ZTlhNDkzMmI1M2U3Y2Q4MGRjNzA4MTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9mNzcwMDcyOThlOWE0OTMyYjUzZTdjZDgwZGM3MDgxNy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19hYzRjMDE2ZDI3NjU0ZGU4OTdhYTRjYzA5NmU0ZDYzYy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2Y3NzAwNzI5OGU5YTQ5MzJiNTNlN2NkODBkYzcwODE3O1xyXG5cclxuXHJcbkJpbmRpbmdfYWM0YzAxNmQyNzY1NGRlODk3YWE0Y2MwOTZlNGQ2M2MuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMzU5NDc0ZDc0NjM4NGZiNmI5YTY4NGRjYzBjNTk1Y2Q7XHJcblxyXG52YXIgQmluZGluZ18yNzU2OGQ5ZDU5ZmI0MDgyYmRmNTk2OWM1MjE3ODE1OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18yNzU2OGQ5ZDU5ZmI0MDgyYmRmNTk2OWM1MjE3ODE1OS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJWZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8yYzcxZjkwYmUyNzA0Yjc3YmI0OTE2ZWUwYzM2OThiNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzJjNzFmOTBiZTI3MDRiNzdiYjQ5MTZlZTBjMzY5OGI3Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzI3NTY4ZDlkNTlmYjQwODJiZGY1OTY5YzUyMTc4MTU5LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMmM3MWY5MGJlMjcwNGI3N2JiNDkxNmVlMGMzNjk4Yjc7XHJcblxyXG5cclxuQmluZGluZ18yNzU2OGQ5ZDU5ZmI0MDgyYmRmNTk2OWM1MjE3ODE1OS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8zNTk0NzRkNzQ2Mzg0ZmI2YjlhNjg0ZGNjMGM1OTVjZDtcclxuXHJcblxyXG5Cb3JkZXJfOTc1ODQyNzA5YmUyNGEwMzgyNWE1ODczNTdiZmYwYTYuQ2hpbGQgPSBDb250ZW50UHJlc2VudGVyXzI2ZTg5NTljOWMyZDRjYmFhYzg0NzQ5MmM1NjkwNGY2O1xyXG5cclxudmFyIEJpbmRpbmdfMGEyYTA0Mzg1MDk0NDU3ODg1MWM0YmYyZGM1MThiZDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMGEyYTA0Mzg1MDk0NDU3ODg1MWM0YmYyZGM1MThiZDIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzJmYmI0MGFlYjkwOTQ0NDk5Y2NiY2Y0MmFiZTFhOTdjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMmZiYjQwYWViOTA5NDQ0OTljY2JjZjQyYWJlMWE5N2MuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMGEyYTA0Mzg1MDk0NDU3ODg1MWM0YmYyZGM1MThiZDIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8yZmJiNDBhZWI5MDk0NDQ5OWNjYmNmNDJhYmUxYTk3YztcclxuXHJcblxyXG5CaW5kaW5nXzBhMmEwNDM4NTA5NDQ1Nzg4NTFjNGJmMmRjNTE4YmQyLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzM1OTQ3NGQ3NDYzODRmYjZiOWE2ODRkY2MwYzU5NWNkO1xyXG5cclxuXHJcbkJvcmRlcl9jYjAwNzM0NzA1MTQ0NDQ1YmU2MDQ2NjBjNDcyODAwOS5DaGlsZCA9IEJvcmRlcl85NzU4NDI3MDliZTI0YTAzODI1YTU4NzM1N2JmZjBhNjtcclxuXHJcbnZhciBCaW5kaW5nXzk0OWI2NWE2ZmJmNjQ1ZWE5MzBkM2E4ZmEwZWUwMTJhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzk0OWI2NWE2ZmJmNjQ1ZWE5MzBkM2E4ZmEwZWUwMTJhLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8yMzM3MTI3Yjk2ZTg0NmVlODlkNzRiMDk4NzhhMjkyYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzIzMzcxMjdiOTZlODQ2ZWU4OWQ3NGIwOTg3OGEyOTJiLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzk0OWI2NWE2ZmJmNjQ1ZWE5MzBkM2E4ZmEwZWUwMTJhLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMjMzNzEyN2I5NmU4NDZlZTg5ZDc0YjA5ODc4YTI5MmI7XHJcblxyXG5cclxuQmluZGluZ185NDliNjVhNmZiZjY0NWVhOTMwZDNhOGZhMGVlMDEyYS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8zNTk0NzRkNzQ2Mzg0ZmI2YjlhNjg0ZGNjMGM1OTVjZDtcclxuXHJcbnZhciBCaW5kaW5nXzIwNzMxOGU3MmQzZjRiYjM4MjBhYTZjNGYzYTMxNDAwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzIwNzMxOGU3MmQzZjRiYjM4MjBhYTZjNGYzYTMxNDAwLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlckJydXNoXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNTMwOTJlYzI2YTljNDVhZThlYTdjNGIyOGRjZTAzNDggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV81MzA5MmVjMjZhOWM0NWFlOGVhN2M0YjI4ZGNlMDM0OC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18yMDczMThlNzJkM2Y0YmIzODIwYWE2YzRmM2EzMTQwMC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzUzMDkyZWMyNmE5YzQ1YWU4ZWE3YzRiMjhkY2UwMzQ4O1xyXG5cclxuXHJcbkJpbmRpbmdfMjA3MzE4ZTcyZDNmNGJiMzgyMGFhNmM0ZjNhMzE0MDAuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMzU5NDc0ZDc0NjM4NGZiNmI5YTY4NGRjYzBjNTk1Y2Q7XHJcblxyXG52YXIgQmluZGluZ18xZjU5Zjk1MDUzOTY0N2JmOTUwMzE4YmE0ZjhiMWJkYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18xZjU5Zjk1MDUzOTY0N2JmOTUwMzE4YmE0ZjhiMWJkYS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJUaGlja25lc3NcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jNDVhZTQ5NDNmNTU0YjljYTRlN2QyZTgzMjJmODBlNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2M0NWFlNDk0M2Y1NTRiOWNhNGU3ZDJlODMyMmY4MGU2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzFmNTlmOTUwNTM5NjQ3YmY5NTAzMThiYTRmOGIxYmRhLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYzQ1YWU0OTQzZjU1NGI5Y2E0ZTdkMmU4MzIyZjgwZTY7XHJcblxyXG5cclxuQmluZGluZ18xZjU5Zjk1MDUzOTY0N2JmOTUwMzE4YmE0ZjhiMWJkYS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8zNTk0NzRkNzQ2Mzg0ZmI2YjlhNjg0ZGNjMGM1OTVjZDtcclxuXHJcblxyXG5cclxuQ29udGVudFByZXNlbnRlcl8yNmU4OTU5YzljMmQ0Y2JhYWM4NDc0OTJjNTY5MDRmNi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRUZW1wbGF0ZVByb3BlcnR5LCBCaW5kaW5nX2JiOTE2ZjQwOWEyMDQwNWRhOTM1YzNiOGFjMWM3Nzc5KTtcclxuQ29udGVudFByZXNlbnRlcl8yNmU4OTU5YzljMmQ0Y2JhYWM4NDc0OTJjNTY5MDRmNi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRQcm9wZXJ0eSwgQmluZGluZ184NGJiNjQ4OGVmMDA0MDIxYWQyZWQ1NGI1ZDFmNTljYik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMjZlODk1OWM5YzJkNGNiYWFjODQ3NDkyYzU2OTA0ZjYuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lk1hcmdpblByb3BlcnR5LCBCaW5kaW5nXzU5YzM3NGEzNzNkZTQ3MjQ4YzhmYWEzN2U3YzA3ZjUxKTtcclxuQ29udGVudFByZXNlbnRlcl8yNmU4OTU5YzljMmQ0Y2JhYWM4NDc0OTJjNTY5MDRmNi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuSG9yaXpvbnRhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nX2FjNGMwMTZkMjc2NTRkZTg5N2FhNGNjMDk2ZTRkNjNjKTtcclxuQ29udGVudFByZXNlbnRlcl8yNmU4OTU5YzljMmQ0Y2JhYWM4NDc0OTJjNTY5MDRmNi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuVmVydGljYWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ18yNzU2OGQ5ZDU5ZmI0MDgyYmRmNTk2OWM1MjE3ODE1OSk7XHJcbkJvcmRlcl85NzU4NDI3MDliZTI0YTAzODI1YTU4NzM1N2JmZjBhNi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfMGEyYTA0Mzg1MDk0NDU3ODg1MWM0YmYyZGM1MThiZDIpO1xyXG5Cb3JkZXJfY2IwMDczNDcwNTE0NDQ0NWJlNjA0NjYwYzQ3MjgwMDkuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzk0OWI2NWE2ZmJmNjQ1ZWE5MzBkM2E4ZmEwZWUwMTJhKTtcclxuQm9yZGVyX2NiMDA3MzQ3MDUxNDQ0NDViZTYwNDY2MGM0NzI4MDA5LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlckJydXNoUHJvcGVydHksIEJpbmRpbmdfMjA3MzE4ZTcyZDNmNGJiMzgyMGFhNmM0ZjNhMzE0MDApO1xyXG5Cb3JkZXJfY2IwMDczNDcwNTE0NDQ0NWJlNjA0NjYwYzQ3MjgwMDkuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyVGhpY2tuZXNzUHJvcGVydHksIEJpbmRpbmdfMWY1OWY5NTA1Mzk2NDdiZjk1MDMxOGJhNGY4YjFiZGEpO1xyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZjEyZjc2YmM0ZDEwNGE3YTkzOGU5MDAxZDFlNTYwMjYsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMjQ3ODlmYzQ2Yzc2NGI1OTk5NzhjZDY5N2IxY2E4MmMsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8yNDc4OWZjNDZjNzY0YjU5OTk3OGNkNjk3YjFjYTgyYyxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzI0Nzg5ZmM0NmM3NjRiNTk5OTc4Y2Q2OTdiMWNhODJjLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMjQ3ODlmYzQ2Yzc2NGI1OTk5NzhjZDY5N2IxY2E4MmMsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8yNDc4OWZjNDZjNzY0YjU5OTk3OGNkNjk3YjFjYTgyYykpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZjEyZjc2YmM0ZDEwNGE3YTkzOGU5MDAxZDFlNTYwMjYsIEJvcmRlcl85NzU4NDI3MDliZTI0YTAzODI1YTU4NzM1N2JmZjBhNik7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWYyYWE1MTExNjIxNDhjZWFiNTc2NTY0NjIzOTQ0NjksXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfYTBjZjlmMTFkYWI2NDJhYjlmOWE1OTFjMDExNDdiZGUsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9hMGNmOWYxMWRhYjY0MmFiOWY5YTU5MWMwMTE0N2JkZSxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2EwY2Y5ZjExZGFiNjQyYWI5ZjlhNTkxYzAxMTQ3YmRlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfYTBjZjlmMTFkYWI2NDJhYjlmOWE1OTFjMDExNDdiZGUsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9hMGNmOWYxMWRhYjY0MmFiOWY5YTU5MWMwMTE0N2JkZSkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWYyYWE1MTExNjIxNDhjZWFiNTc2NTY0NjIzOTQ0NjksIEJvcmRlcl85NzU4NDI3MDliZTI0YTAzODI1YTU4NzM1N2JmZjBhNik7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNWU4YTE0ZGMzMmMyNDA4MTk3OTc4OWQ3ZWNmOWI3YjgsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfYWFmMzQ0ZjM2ODFmNGFlZDkzYmNiODMyZDU4YjJiZDcsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9hYWYzNDRmMzY4MWY0YWVkOTNiY2I4MzJkNThiMmJkNyxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2FhZjM0NGYzNjgxZjRhZWQ5M2JjYjgzMmQ1OGIyYmQ3LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfYWFmMzQ0ZjM2ODFmNGFlZDkzYmNiODMyZDU4YjJiZDcsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9hYWYzNDRmMzY4MWY0YWVkOTNiY2I4MzJkNThiMmJkNykpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNWU4YTE0ZGMzMmMyNDA4MTk3OTc4OWQ3ZWNmOWI3YjgsIEJvcmRlcl85NzU4NDI3MDliZTI0YTAzODI1YTU4NzM1N2JmZjBhNik7XHJcblxyXG50ZW1wbGF0ZUluc3RhbmNlXzM1OTQ3NGQ3NDYzODRmYjZiOWE2ODRkY2MwYzU5NWNkLlRlbXBsYXRlQ29udGVudCA9IEJvcmRlcl9jYjAwNzM0NzA1MTQ0NDQ1YmU2MDQ2NjBjNDcyODAwOTtcclxucmV0dXJuIHRlbXBsYXRlSW5zdGFuY2VfMzU5NDc0ZDc0NjM4NGZiNmI5YTY4NGRjYzBjNTk1Y2Q7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwiLy8gPENTSFRNTDU+PFhhbWxIYXNoPkFCRkUzMDUzNDJGRUYzOTkyRjQ2QTM5MDMyQjVBNTEzPC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTYuMDQuMjAyMCAxNDo1MzowNjwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BQYWdlaG9tZceAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuUGFnZUhvbWUpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFBhZ2VIb21lIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50O1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0bkJlZ2luO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCBMYXlvdXRSb290O1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZUhvbWUueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfN2ViNTk1MDIwNTM0NDVkZjgwM2ZmZWJkZWU4YjNiZmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dFJvb3RcIiwgR3JpZF83ZWI1OTUwMjA1MzQ0NWRmODAzZmZlYmRlZThiM2JmYSk7XHJcbkdyaWRfN2ViNTk1MDIwNTM0NDVkZjgwM2ZmZWJkZWU4YjNiZmEuTmFtZSA9IFwiTGF5b3V0Um9vdFwiO1xyXG5HcmlkXzdlYjU5NTAyMDUzNDQ1ZGY4MDNmZmViZGVlOGIzYmZhLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbnZhciBHcmlkXzczYTJiMzA0MmE5NTRiZTdhYmQwMWE0YjI1ZmI0NWU0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfNGVmYTRmMGIyMTdiNDkxMzg2OGFiZWJiZmIyZTkyMWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzRlZmE0ZjBiMjE3YjQ5MTM4NjhhYmViYmZiMmU5MjFlLkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNGVmYTRmMGIyMTdiNDkxMzg2OGFiZWJiZmIyZTkyMWUuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wXzk3ODlkMTJkMjhhYzRjMzViNWQ3ZTFhNmMwODExZTdiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfOTc4OWQxMmQyOGFjNGMzNWI1ZDdlMWE2YzA4MTFlN2IuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF85Nzg5ZDEyZDI4YWM0YzM1YjVkN2UxYTZjMDgxMWU3Yi5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfYzI4YjYxODlkYjI2NDM2NmFmOTljMzc5NjYxYzYzZTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9jMjhiNjE4OWRiMjY0MzY2YWY5OWMzNzk2NjFjNjNlMy5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wX2MyOGI2MTg5ZGIyNjQzNjZhZjk5YzM3OTY2MWM2M2UzLk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF80ZWZhNGYwYjIxN2I0OTEzODY4YWJlYmJmYjJlOTIxZS5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfOTc4OWQxMmQyOGFjNGMzNWI1ZDdlMWE2YzA4MTFlN2IpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzRlZmE0ZjBiMjE3YjQ5MTM4NjhhYmViYmZiMmU5MjFlLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9jMjhiNjE4OWRiMjY0MzY2YWY5OWMzNzk2NjFjNjNlMyk7XHJcblxyXG5cclxuR3JpZF83M2EyYjMwNDJhOTU0YmU3YWJkMDFhNGIyNWZiNDVlNC5CYWNrZ3JvdW5kID0gTGluZWFyR3JhZGllbnRCcnVzaF80ZWZhNGYwYjIxN2I0OTEzODY4YWJlYmJmYjJlOTIxZTtcclxuXHJcbnZhciBCb3JkZXJfNDIzOGE4ZDI0MmFmNDgzYThjZjAzNjA1MTk3MjU2OGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfNDIzOGE4ZDI0MmFmNDgzYThjZjAzNjA1MTk3MjU2OGUpO1xyXG5Cb3JkZXJfNDIzOGE4ZDI0MmFmNDgzYThjZjAzNjA1MTk3MjU2OGUuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfNDIzOGE4ZDI0MmFmNDgzYThjZjAzNjA1MTk3MjU2OGUuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuQm9yZGVyXzQyMzhhOGQyNDJhZjQ4M2E4Y2YwMzYwNTE5NzI1NjhlLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMCwgRyA9IChieXRlKTAsIEIgPSAoYnl0ZSkxMzkgfSk7XHJcbkJvcmRlcl80MjM4YThkMjQyYWY0ODNhOGNmMDM2MDUxOTcyNTY4ZS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfNDIzOGE4ZDI0MmFmNDgzYThjZjAzNjA1MTk3MjU2OGUuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfZmMzN2NkYjRkNGU1NDkyY2FiMzA5ODkzNGRjY2UxYmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2ZjMzdjZGI0ZDRlNTQ5MmNhYjMwOTg5MzRkY2NlMWJmLkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfZmMzN2NkYjRkNGU1NDkyY2FiMzA5ODkzNGRjY2UxYmYuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wXzM1ZGVlYWZjNTk1ZjRjYWQ5NzMyN2IyZjkwOGViZTllID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfMzVkZWVhZmM1OTVmNGNhZDk3MzI3YjJmOTA4ZWJlOWUuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF8zNWRlZWFmYzU5NWY0Y2FkOTczMjdiMmY5MDhlYmU5ZS5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfZWFkMDVjYjlmMmI0NDU0Yzg2NzczZjJiOWM4ZjQ3NGIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9lYWQwNWNiOWYyYjQ0NTRjODY3NzNmMmI5YzhmNDc0Yi5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wX2VhZDA1Y2I5ZjJiNDQ1NGM4Njc3M2YyYjljOGY0NzRiLk9mZnNldCA9IDAuNTg5NkQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wXzQ0YmZhOGI2N2Q1ZDQ3ZjY5ZWUzOTMxODAyNjUzZTMwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfNDRiZmE4YjY3ZDVkNDdmNjllZTM5MzE4MDI2NTNlMzAuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjQ2LCBHID0gKGJ5dGUpMjQ2LCBCID0gKGJ5dGUpMjQ2IH07XHJcbkdyYWRpZW50U3RvcF80NGJmYThiNjdkNWQ0N2Y2OWVlMzkzMTgwMjY1M2UzMC5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfZmMzN2NkYjRkNGU1NDkyY2FiMzA5ODkzNGRjY2UxYmYuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzM1ZGVlYWZjNTk1ZjRjYWQ5NzMyN2IyZjkwOGViZTllKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9mYzM3Y2RiNGQ0ZTU0OTJjYWIzMDk4OTM0ZGNjZTFiZi5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfZWFkMDVjYjlmMmI0NDU0Yzg2NzczZjJiOWM4ZjQ3NGIpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2ZjMzdjZGI0ZDRlNTQ5MmNhYjMwOTg5MzRkY2NlMWJmLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF80NGJmYThiNjdkNWQ0N2Y2OWVlMzkzMTgwMjY1M2UzMCk7XHJcblxyXG5cclxuQm9yZGVyXzQyMzhhOGQyNDJhZjQ4M2E4Y2YwMzYwNTE5NzI1NjhlLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoX2ZjMzdjZGI0ZDRlNTQ5MmNhYjMwOTg5MzRkY2NlMWJmO1xyXG5cclxudmFyIFRyYW5zZm9ybUdyb3VwXzZkOTM3YTFmMjY0MTRmM2NiOWUwYzRiMDgxNTcwZWMwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlRyYW5zZm9ybUdyb3VwKCk7XHJcbnZhciBTY2FsZVRyYW5zZm9ybV8yNTgxNWIwZTc4NTc0OGM0OWJlMzUwZmYzZGQ4ZWVkNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5TY2FsZVRyYW5zZm9ybSgpO1xyXG5cclxudmFyIFJvdGF0ZVRyYW5zZm9ybV85ZWUwYjk2Y2I3NGI0NzA2OWUwODdhNjhjYjRhMTU5NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Sb3RhdGVUcmFuc2Zvcm0oKTtcclxuXHJcblRyYW5zZm9ybUdyb3VwXzZkOTM3YTFmMjY0MTRmM2NiOWUwYzRiMDgxNTcwZWMwLkNoaWxkcmVuLkFkZChTY2FsZVRyYW5zZm9ybV8yNTgxNWIwZTc4NTc0OGM0OWJlMzUwZmYzZGQ4ZWVkNyk7XHJcblRyYW5zZm9ybUdyb3VwXzZkOTM3YTFmMjY0MTRmM2NiOWUwYzRiMDgxNTcwZWMwLkNoaWxkcmVuLkFkZChSb3RhdGVUcmFuc2Zvcm1fOWVlMGI5NmNiNzRiNDcwNjllMDg3YTY4Y2I0YTE1OTcpO1xyXG5cclxuXHJcbkJvcmRlcl80MjM4YThkMjQyYWY0ODNhOGNmMDM2MDUxOTcyNTY4ZS5SZW5kZXJUcmFuc2Zvcm0gPSBUcmFuc2Zvcm1Hcm91cF82ZDkzN2ExZjI2NDE0ZjNjYjllMGM0YjA4MTU3MGVjMDtcclxuXHJcbnZhciBHcmlkXzhkMmU3YjMwNmZlMDRlZDViMzU3OTJlNDJlZmM2MzU4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIENvbHVtbkRlZmluaXRpb25fMjc4ZTc2NzUxMzRlNGUxNGFjZTdlZDBhZjlhYzQzYTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fOGVlNDFkMmY0ZDZjNDVmNWIzN2Y0N2RjZmVjNTM3NTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMGZmOTA3YWE4NjljNDVkZWFhZWMxZjhhYmFlMDdkMjIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF84ZDJlN2IzMDZmZTA0ZWQ1YjM1NzkyZTQyZWZjNjM1OC5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl8yNzhlNzY3NTEzNGU0ZTE0YWNlN2VkMGFmOWFjNDNhMyk7XHJcbkdyaWRfOGQyZTdiMzA2ZmUwNGVkNWIzNTc5MmU0MmVmYzYzNTguQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fOGVlNDFkMmY0ZDZjNDVmNWIzN2Y0N2RjZmVjNTM3NTQpO1xyXG5HcmlkXzhkMmU3YjMwNmZlMDRlZDViMzU3OTJlNDJlZmM2MzU4LkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzBmZjkwN2FhODY5YzQ1ZGVhYWVjMWY4YWJhZTA3ZDIyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzU5NGEzYzRmN2E1YTRjOGU5MzYxNDU1MGUyYmE4YmYwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl81OTRhM2M0ZjdhNWE0YzhlOTM2MTQ1NTBlMmJhOGJmMC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9lZTQ4N2IxZGI0ZTE0YTg1YWExNjQwM2MzYmU2OGIxNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fZWU0ODdiMWRiNGUxNGE4NWFhMTY0MDNjM2JlNjhiMTcuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC41LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9iZmIxMWRmMDhmMjQ0YTM0ODg5MzY1M2EwMjFjMjQzZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fYmZiMTFkZjA4ZjI0NGEzNDg4OTM2NTNhMDIxYzI0M2YuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4yNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxuR3JpZF84ZDJlN2IzMDZmZTA0ZWQ1YjM1NzkyZTQyZWZjNjM1OC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl81OTRhM2M0ZjdhNWE0YzhlOTM2MTQ1NTBlMmJhOGJmMCk7XHJcbkdyaWRfOGQyZTdiMzA2ZmUwNGVkNWIzNTc5MmU0MmVmYzYzNTguUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fZWU0ODdiMWRiNGUxNGE4NWFhMTY0MDNjM2JlNjhiMTcpO1xyXG5HcmlkXzhkMmU3YjMwNmZlMDRlZDViMzU3OTJlNDJlZmM2MzU4LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2JmYjExZGYwOGYyNDRhMzQ4ODkzNjUzYTAyMWMyNDNmKTtcclxuXHJcbnZhciBJbWFnZV81YzhmNjEwMzkwNzA0MTc3ODY0OGI5OTExMmRiY2MyOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5JbWFnZSgpO1xyXG5JbWFnZV81YzhmNjEwMzkwNzA0MTc3ODY0OGI5OTExMmRiY2MyOC5Tb3VyY2UgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpZ2xvYmFsOjpEb3ROZXRGb3JIdG1sNS5Db3JlLlR5cGVGcm9tU3RyaW5nQ29udmVydGVycy5Db252ZXJ0RnJvbUludmFyaWFudFN0cmluZyh0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpLCBAXCIvQ1NodG1sO2NvbXBvbmVudC9pbWcvSG9tZUltYWdlLmpwZ1wiKTtcclxuSW1hZ2VfNWM4ZjYxMDM5MDcwNDE3Nzg2NDhiOTkxMTJkYmNjMjguU3RyZXRjaCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlN0cmV0Y2guVW5pZm9ybTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEltYWdlXzVjOGY2MTAzOTA3MDQxNzc4NjQ4Yjk5MTEyZGJjYzI4LDMpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oSW1hZ2VfNWM4ZjYxMDM5MDcwNDE3Nzg2NDhiOTkxMTJkYmNjMjgsMyk7XHJcblxyXG5HcmlkXzhkMmU3YjMwNmZlMDRlZDViMzU3OTJlNDJlZmM2MzU4LkNoaWxkcmVuLkFkZChJbWFnZV81YzhmNjEwMzkwNzA0MTc3ODY0OGI5OTExMmRiY2MyOCk7XHJcblxyXG5cclxuQm9yZGVyXzQyMzhhOGQyNDJhZjQ4M2E4Y2YwMzYwNTE5NzI1NjhlLkNoaWxkID0gR3JpZF84ZDJlN2IzMDZmZTA0ZWQ1YjM1NzkyZTQyZWZjNjM1ODtcclxuXHJcblxyXG52YXIgQnV0dG9uX2I1ZWJiNDQ3NDQyMzRlZmJiYTk4ZWY1MTEwYjRmNGViID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0bkJlZ2luXCIsIEJ1dHRvbl9iNWViYjQ0NzQ0MjM0ZWZiYmE5OGVmNTExMGI0ZjRlYik7XHJcbkJ1dHRvbl9iNWViYjQ0NzQ0MjM0ZWZiYmE5OGVmNTExMGI0ZjRlYi5OYW1lID0gXCJidG5CZWdpblwiO1xyXG5CdXR0b25fYjVlYmI0NDc0NDIzNGVmYmJhOThlZjUxMTBiNGY0ZWIuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fYjVlYmI0NDc0NDIzNGVmYmJhOThlZjUxMTBiNGY0ZWIuQ29udGVudCA9IEBcItCd0LDRh9Cw0YLRjCDRgNCw0LHQvtGC0YNcIjtcclxuQnV0dG9uX2I1ZWJiNDQ3NDQyMzRlZmJiYTk4ZWY1MTEwYjRmNGViLkZvbnRTaXplID0gMjVEO1xyXG5CdXR0b25fYjVlYmI0NDc0NDIzNGVmYmJhOThlZjUxMTBiNGY0ZWIuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTIzOCwgQiA9IChieXRlKTIzOCB9KTtcclxuQnV0dG9uX2I1ZWJiNDQ3NDQyMzRlZmJiYTk4ZWY1MTEwYjRmNGViLldpZHRoID0gMjgwRDtcclxuQnV0dG9uX2I1ZWJiNDQ3NDQyMzRlZmJiYTk4ZWY1MTEwYjRmNGViLkhlaWdodCA9IDUwRDtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2I1ZWJiNDQ3NDQyMzRlZmJiYTk4ZWY1MTEwYjRmNGViLDIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCdXR0b25fYjVlYmI0NDc0NDIzNGVmYmJhOThlZjUxMTBiNGY0ZWIsMSk7XHJcbkJ1dHRvbl9iNWViYjQ0NzQ0MjM0ZWZiYmE5OGVmNTExMGI0ZjRlYi5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbTtcclxuQnV0dG9uX2I1ZWJiNDQ3NDQyMzRlZmJiYTk4ZWY1MTEwYjRmNGViLkNsaWNrICs9IEJ1dHRvbl9DbGljaztcclxuQnV0dG9uX2I1ZWJiNDQ3NDQyMzRlZmJiYTk4ZWY1MTEwYjRmNGViLk1hcmdpbiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMCwgMCwgMCwgNTApO1xyXG5CdXR0b25fYjVlYmI0NDc0NDIzNGVmYmJhOThlZjUxMTBiNGY0ZWIuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV9jYWZhZTdmN2VhY2E0Mzg4YmI3Zjg3NDA5NzcwYmE5NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlX2NhZmFlN2Y3ZWFjYTQzODhiYjdmODc0MDk3NzBiYTk1LlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlX2NhZmFlN2Y3ZWFjYTQzODhiYjdmODc0MDk3NzBiYTk1LlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlX2NhZmFlN2Y3ZWFjYTQzODhiYjdmODc0MDk3NzBiYTk1KTtcclxuXHJcbkJ1dHRvbl9iNWViYjQ0NzQ0MjM0ZWZiYmE5OGVmNTExMGI0ZjRlYi5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV9jYWZhZTdmN2VhY2E0Mzg4YmI3Zjg3NDA5NzcwYmE5NTtcclxuXHJcblxyXG5HcmlkXzczYTJiMzA0MmE5NTRiZTdhYmQwMWE0YjI1ZmI0NWU0LkNoaWxkcmVuLkFkZChCb3JkZXJfNDIzOGE4ZDI0MmFmNDgzYThjZjAzNjA1MTk3MjU2OGUpO1xyXG5HcmlkXzczYTJiMzA0MmE5NTRiZTdhYmQwMWE0YjI1ZmI0NWU0LkNoaWxkcmVuLkFkZChCdXR0b25fYjVlYmI0NDc0NDIzNGVmYmJhOThlZjUxMTBiNGY0ZWIpO1xyXG5cclxuXHJcbkdyaWRfN2ViNTk1MDIwNTM0NDVkZjgwM2ZmZWJkZWU4YjNiZmEuQ2hpbGRyZW4uQWRkKEdyaWRfNzNhMmIzMDQyYTk1NGJlN2FiZDAxYTRiMjVmYjQ1ZTQpO1xyXG5cclxuXHJcbnRoaXMuQ29udGVudCA9IEdyaWRfN2ViNTk1MDIwNTM0NDVkZjgwM2ZmZWJkZWU4YjNiZmE7XHJcblxyXG5cclxuXHJcbmVsZW1lbnQgPSBCb3JkZXJfNDIzOGE4ZDI0MmFmNDgzYThjZjAzNjA1MTk3MjU2OGU7XHJcbmJ0bkJlZ2luID0gQnV0dG9uX2I1ZWJiNDQ3NDQyMzRlZmJiYTk4ZWY1MTEwYjRmNGViO1xyXG5MYXlvdXRSb290ID0gR3JpZF83ZWI1OTUwMjA1MzQ0NWRmODAzZmZlYmRlZThiM2JmYTtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2U5NTU1Y2E4NDZmZTRlZmQ5NTExY2QyOTFiMTAwYjI4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfZTk1NTVjYTg0NmZlNGVmZDk1MTFjZDI5MWIxMDBiMjggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9lOTU1NWNhODQ2ZmU0ZWZkOTUxMWNkMjkxYjEwMGIyOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2U5NTU1Y2E4NDZmZTRlZmQ5NTExY2QyOTFiMTAwYjI4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lOTU1NWNhODQ2ZmU0ZWZkOTUxMWNkMjkxYjEwMGIyOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfYTk1ODdjMzQyYTYyNDRiOWFmMTIxMWQ4ZWU5YWU4ZGYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9hOTU4N2MzNDJhNjI0NGI5YWYxMjExZDhlZTlhZThkZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2E5NTg3YzM0MmE2MjQ0YjlhZjEyMTFkOGVlOWFlOGRmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfYTk1ODdjMzQyYTYyNDRiOWFmMTIxMWQ4ZWU5YWU4ZGYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2E5NTg3YzM0MmE2MjQ0YjlhZjEyMTFkOGVlOWFlOGRmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8wYjk4Mzk3YTVmYmY0ZTFhYjk4MzY1OTYzNDVmNDBiNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzBiOTgzOTdhNWZiZjRlMWFiOTgzNjU5NjM0NWY0MGI3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMGI5ODM5N2E1ZmJmNGUxYWI5ODM2NTk2MzQ1ZjQwYjcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8wYjk4Mzk3YTVmYmY0ZTFhYjk4MzY1OTYzNDVmNDBiNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMGI5ODM5N2E1ZmJmNGUxYWI5ODM2NTk2MzQ1ZjQwYjcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfY2FmYWU3ZjdlYWNhNDM4OGJiN2Y4NzQwOTc3MGJhOTUoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfNDY2MjE2MmU2Yzg1NDBkZTg4ZjU3NGM2OThmYmU4YTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlXzQ2NjIxNjJlNmM4NTQwZGU4OGY1NzRjNjk4ZmJlOGExLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyXzQwMTY0ZGQ4YWU5NDQ3OGJiMzQ3MjZmMmQ2YmZhYjBhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl80MDE2NGRkOGFlOTQ0NzhiYjM0NzI2ZjJkNmJmYWIwYSk7XHJcbkJvcmRlcl80MDE2NGRkOGFlOTQ0NzhiYjM0NzI2ZjJkNmJmYWIwYS5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfNDAxNjRkZDhhZTk0NDc4YmIzNDcyNmYyZDZiZmFiMGEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfMjc5MjE1YmZjZTJlNGQ4NGI0ZDVlODA3ZmI5NTJhOWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwXzI3OTIxNWJmY2UyZTRkODRiNGQ1ZTgwN2ZiOTUyYTlkKTtcclxuVmlzdWFsU3RhdGVHcm91cF8yNzkyMTViZmNlMmU0ZDg0YjRkNWU4MDdmYjk1MmE5ZC5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzAxYzI0ZDExYzc1YzRmODE4ZTliMDQ1MjgxM2M5NTExID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzAxYzI0ZDExYzc1YzRmODE4ZTliMDQ1MjgxM2M5NTExKTtcclxuVmlzdWFsU3RhdGVfMDFjMjRkMTFjNzVjNGY4MThlOWIwNDUyODEzYzk1MTEuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfODE3YWNhNzdkNjI0NGY4Mzk5ODg4YzNkNzZkODVmNTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV84MTdhY2E3N2Q2MjQ0ZjgzOTk4ODhjM2Q3NmQ4NWY1MCk7XHJcblZpc3VhbFN0YXRlXzgxN2FjYTc3ZDYyNDRmODM5OTg4OGMzZDc2ZDg1ZjUwLk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzU1YjI4ZGI1Y2E3NDRlYzJhOWEwM2UzYmUzODJiNjk4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19mY2NjYjM4NzdiNmU0MGI0YTM3OTM3YWVlNzg5MjFjYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19mY2NjYjM4NzdiNmU0MGI0YTM3OTM3YWVlNzg5MjFjYyxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYjk5MjFlZmZjODQxNDNkYzg5MDQ2ZTBiNTY1ODg2NzAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9iOTkyMWVmZmM4NDE0M2RjODkwNDZlMGI1NjU4ODY3MC5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2I5OTIxZWZmYzg0MTQzZGM4OTA0NmUwYjU2NTg4NjcwLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19mY2NjYjM4NzdiNmU0MGI0YTM3OTM3YWVlNzg5MjFjYy5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYjk5MjFlZmZjODQxNDNkYzg5MDQ2ZTBiNTY1ODg2NzApO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNTViMjhkYjVjYTc0NGVjMmE5YTAzZTNiZTM4MmI2OTguQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2ZjY2NiMzg3N2I2ZTQwYjRhMzc5MzdhZWU3ODkyMWNjKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV84MTdhY2E3N2Q2MjQ0ZjgzOTk4ODhjM2Q3NmQ4NWY1MC5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF81NWIyOGRiNWNhNzQ0ZWMyYTlhMDNlM2JlMzgyYjY5ODtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZTcwNGU3Nzg1YjVkNDcyZDkzNzhiZTUwZjhmYmFmMTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlX2U3MDRlNzc4NWI1ZDQ3MmQ5Mzc4YmU1MGY4ZmJhZjExKTtcclxuVmlzdWFsU3RhdGVfZTcwNGU3Nzg1YjVkNDcyZDkzNzhiZTUwZjhmYmFmMTEuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF85MjdhODI1N2U2NGM0NDdjYTg2NjlmZTgxOTNkY2NkOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTAwNTkxM2JhNDEyNDFhN2E5OGUxYTVmOTdiZTliMTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTAwNTkxM2JhNDEyNDFhN2E5OGUxYTVmOTdiZTliMTEsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2RjMjBjNWRmZTQ2MDQ3MTNiNDljZjlhNTlmNmJlZjg5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZGMyMGM1ZGZlNDYwNDcxM2I0OWNmOWE1OWY2YmVmODkuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9kYzIwYzVkZmU0NjA0NzEzYjQ5Y2Y5YTU5ZjZiZWY4OS5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTAwNTkxM2JhNDEyNDFhN2E5OGUxYTVmOTdiZTliMTEuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2RjMjBjNWRmZTQ2MDQ3MTNiNDljZjlhNTlmNmJlZjg5KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzkyN2E4MjU3ZTY0YzQ0N2NhODY2OWZlODE5M2RjY2Q4LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xMDA1OTEzYmE0MTI0MWE3YTk4ZTFhNWY5N2JlOWIxMSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfZTcwNGU3Nzg1YjVkNDcyZDkzNzhiZTUwZjhmYmFmMTEuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfOTI3YTgyNTdlNjRjNDQ3Y2E4NjY5ZmU4MTkzZGNjZDg7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzExZDk3OGMxZTZkOTRkYWZhYTJkOGJkY2I4MWNmZjM0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfMTFkOTc4YzFlNmQ5NGRhZmFhMmQ4YmRjYjgxY2ZmMzQpO1xyXG5WaXN1YWxTdGF0ZV8xMWQ5NzhjMWU2ZDk0ZGFmYWEyZDhiZGNiODFjZmYzNC5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9lNDNjZmQ0MDM5MDA0YWM4OWRlOWZhZjBlZDNjNzMxNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZDczYmQ3ZDQwNjkxNDNhMDkxMDU0ODBkYjUxM2NlODUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZDczYmQ3ZDQwNjkxNDNhMDkxMDU0ODBkYjUxM2NlODUsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzEzMzIzM2M4MTA0MTRjOTY5YjM1YjliYTdhZmRiYmM2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMTMzMjMzYzgxMDQxNGM5NjliMzViOWJhN2FmZGJiYzYuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8xMzMyMzNjODEwNDE0Yzk2OWIzNWI5YmE3YWZkYmJjNi5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZDczYmQ3ZDQwNjkxNDNhMDkxMDU0ODBkYjUxM2NlODUuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzEzMzIzM2M4MTA0MTRjOTY5YjM1YjliYTdhZmRiYmM2KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2U0M2NmZDQwMzkwMDRhYzg5ZGU5ZmFmMGVkM2M3MzE3LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19kNzNiZDdkNDA2OTE0M2EwOTEwNTQ4MGRiNTEzY2U4NSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMTFkOTc4YzFlNmQ5NGRhZmFhMmQ4YmRjYjgxY2ZmMzQuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZTQzY2ZkNDAzOTAwNGFjODlkZTlmYWYwZWQzYzczMTc7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF8yNzkyMTViZmNlMmU0ZDg0YjRkNWU4MDdmYjk1MmE5ZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzAxYzI0ZDExYzc1YzRmODE4ZTliMDQ1MjgxM2M5NTExKTtcclxuVmlzdWFsU3RhdGVHcm91cF8yNzkyMTViZmNlMmU0ZDg0YjRkNWU4MDdmYjk1MmE5ZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzgxN2FjYTc3ZDYyNDRmODM5OTg4OGMzZDc2ZDg1ZjUwKTtcclxuVmlzdWFsU3RhdGVHcm91cF8yNzkyMTViZmNlMmU0ZDg0YjRkNWU4MDdmYjk1MmE5ZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2U3MDRlNzc4NWI1ZDQ3MmQ5Mzc4YmU1MGY4ZmJhZjExKTtcclxuVmlzdWFsU3RhdGVHcm91cF8yNzkyMTViZmNlMmU0ZDg0YjRkNWU4MDdmYjk1MmE5ZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzExZDk3OGMxZTZkOTRkYWZhYTJkOGJkY2I4MWNmZjM0KTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfMjc5MjE1YmZjZTJlNGQ4NGI0ZDVlODA3ZmI5NTJhOWQpO1xyXG5cclxudmFyIEJvcmRlcl8wZjI4M2M5OTdhMDA0NzU0YWI1MDk2MmZkYmRjNmQ5ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfMGYyODNjOTk3YTAwNDc1NGFiNTA5NjJmZGJkYzZkOWYpO1xyXG5Cb3JkZXJfMGYyODNjOTk3YTAwNDc1NGFiNTA5NjJmZGJkYzZkOWYuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyXzBmMjgzYzk5N2EwMDQ3NTRhYjUwOTYyZmRiZGM2ZDlmLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyX2JmNTE3YjM1MDM1ZjRjY2NiN2RlNzdjNmU2YTAzM2M3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfYmY1MTdiMzUwMzVmNGNjY2I3ZGU3N2M2ZTZhMDMzYzcpO1xyXG5Db250ZW50UHJlc2VudGVyX2JmNTE3YjM1MDM1ZjRjY2NiN2RlNzdjNmU2YTAzM2M3Lk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfMjc5NGE3ZTgxNjQ2NDllYzljZjZjMjkyYzMzMWU2OGEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMjc5NGE3ZTgxNjQ2NDllYzljZjZjMjkyYzMzMWU2OGEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNTljY2M4YmMzZjAzNGNhYWFlYWU0Y2EyZGIzYzcxMzcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV81OWNjYzhiYzNmMDM0Y2FhYWVhZTRjYTJkYjNjNzEzNy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18yNzk0YTdlODE2NDY0OWVjOWNmNmMyOTJjMzMxZTY4YS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzU5Y2NjOGJjM2YwMzRjYWFhZWFlNGNhMmRiM2M3MTM3O1xyXG5cclxuXHJcbkJpbmRpbmdfMjc5NGE3ZTgxNjQ2NDllYzljZjZjMjkyYzMzMWU2OGEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDY2MjE2MmU2Yzg1NDBkZTg4ZjU3NGM2OThmYmU4YTE7XHJcblxyXG52YXIgQmluZGluZ19jNjkwOWQxNDI4MjM0OWE3YTg5YWUzN2FhODhlMTg4MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19jNjkwOWQxNDI4MjM0OWE3YTg5YWUzN2FhODhlMTg4My5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOTk1ZDE0YWE4ZWFmNDhmYjg3MzFkYmViNDhmNTMzYmUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85OTVkMTRhYThlYWY0OGZiODczMWRiZWI0OGY1MzNiZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jNjkwOWQxNDI4MjM0OWE3YTg5YWUzN2FhODhlMTg4My5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzk5NWQxNGFhOGVhZjQ4ZmI4NzMxZGJlYjQ4ZjUzM2JlO1xyXG5cclxuXHJcbkJpbmRpbmdfYzY5MDlkMTQyODIzNDlhN2E4OWFlMzdhYTg4ZTE4ODMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDY2MjE2MmU2Yzg1NDBkZTg4ZjU3NGM2OThmYmU4YTE7XHJcblxyXG52YXIgQmluZGluZ18xZjNmMzZjMjYzMjU0ZTM0YjZlMzEzNGI4MjM3OGQxNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18xZjNmMzZjMjYzMjU0ZTM0YjZlMzEzNGI4MjM3OGQxNC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYzYyMzc0ZTZkNjdkNDZjNzlhZDJhYmM5ZDE5MjgwYjkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9jNjIzNzRlNmQ2N2Q0NmM3OWFkMmFiYzlkMTkyODBiOS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18xZjNmMzZjMjYzMjU0ZTM0YjZlMzEzNGI4MjM3OGQxNC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2M2MjM3NGU2ZDY3ZDQ2Yzc5YWQyYWJjOWQxOTI4MGI5O1xyXG5cclxuXHJcbkJpbmRpbmdfMWYzZjM2YzI2MzI1NGUzNGI2ZTMxMzRiODIzNzhkMTQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDY2MjE2MmU2Yzg1NDBkZTg4ZjU3NGM2OThmYmU4YTE7XHJcblxyXG52YXIgQmluZGluZ19iNDk5NzYwYjNkNDI0OGEyYWJlN2ZkMTI1NGZmMmE4OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19iNDk5NzYwYjNkNDI0OGEyYWJlN2ZkMTI1NGZmMmE4OC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2Y1MjE4NDIzZmM4ODQ0NDI5Mjg3ZTdiOGVmNDc1NWJkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZjUyMTg0MjNmYzg4NDQ0MjkyODdlN2I4ZWY0NzU1YmQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYjQ5OTc2MGIzZDQyNDhhMmFiZTdmZDEyNTRmZjJhODguUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9mNTIxODQyM2ZjODg0NDQyOTI4N2U3YjhlZjQ3NTViZDtcclxuXHJcblxyXG5CaW5kaW5nX2I0OTk3NjBiM2Q0MjQ4YTJhYmU3ZmQxMjU0ZmYyYTg4LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzQ2NjIxNjJlNmM4NTQwZGU4OGY1NzRjNjk4ZmJlOGExO1xyXG5cclxudmFyIEJpbmRpbmdfNGU5MGMyOTAzZDQ0NGM5Zjk0YzQxZWNlYTU2YzBkYWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNGU5MGMyOTAzZDQ0NGM5Zjk0YzQxZWNlYTU2YzBkYWUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfM2E4MjJkYjkyNjkzNGM3YjgyYWJkMzkyNTNjYmQ2ZmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8zYTgyMmRiOTI2OTM0YzdiODJhYmQzOTI1M2NiZDZmYi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ180ZTkwYzI5MDNkNDQ0YzlmOTRjNDFlY2VhNTZjMGRhZS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzNhODIyZGI5MjY5MzRjN2I4MmFiZDM5MjUzY2JkNmZiO1xyXG5cclxuXHJcbkJpbmRpbmdfNGU5MGMyOTAzZDQ0NGM5Zjk0YzQxZWNlYTU2YzBkYWUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDY2MjE2MmU2Yzg1NDBkZTg4ZjU3NGM2OThmYmU4YTE7XHJcblxyXG5cclxuQm9yZGVyXzBmMjgzYzk5N2EwMDQ3NTRhYjUwOTYyZmRiZGM2ZDlmLkNoaWxkID0gQ29udGVudFByZXNlbnRlcl9iZjUxN2IzNTAzNWY0Y2NjYjdkZTc3YzZlNmEwMzNjNztcclxuXHJcbnZhciBCaW5kaW5nXzE2NzU0YWJmYjBiNjRjNDBhOWQwZmQ2MWQyMDcxMTg1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzE2NzU0YWJmYjBiNjRjNDBhOWQwZmQ2MWQyMDcxMTg1LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kYzg1NjgwNDEyNTY0NzI0YjA3MDFhZDcwNmU1OWNjZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2RjODU2ODA0MTI1NjQ3MjRiMDcwMWFkNzA2ZTU5Y2NlLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzE2NzU0YWJmYjBiNjRjNDBhOWQwZmQ2MWQyMDcxMTg1LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZGM4NTY4MDQxMjU2NDcyNGIwNzAxYWQ3MDZlNTljY2U7XHJcblxyXG5cclxuQmluZGluZ18xNjc1NGFiZmIwYjY0YzQwYTlkMGZkNjFkMjA3MTE4NS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV80NjYyMTYyZTZjODU0MGRlODhmNTc0YzY5OGZiZThhMTtcclxuXHJcblxyXG5Cb3JkZXJfNDAxNjRkZDhhZTk0NDc4YmIzNDcyNmYyZDZiZmFiMGEuQ2hpbGQgPSBCb3JkZXJfMGYyODNjOTk3YTAwNDc1NGFiNTA5NjJmZGJkYzZkOWY7XHJcblxyXG52YXIgQmluZGluZ19jYWU2MWZhNDA3YTI0ODI4ODM5MWI5YjVmNTc2ZjlhOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19jYWU2MWZhNDA3YTI0ODI4ODM5MWI5YjVmNTc2ZjlhOC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfN2JkMjM5OTU4MmZmNDg5OGIzMGE3ZTUxMzM2ZGFkOGIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV83YmQyMzk5NTgyZmY0ODk4YjMwYTdlNTEzMzZkYWQ4Yi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jYWU2MWZhNDA3YTI0ODI4ODM5MWI5YjVmNTc2ZjlhOC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzdiZDIzOTk1ODJmZjQ4OThiMzBhN2U1MTMzNmRhZDhiO1xyXG5cclxuXHJcbkJpbmRpbmdfY2FlNjFmYTQwN2EyNDgyODgzOTFiOWI1ZjU3NmY5YTguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDY2MjE2MmU2Yzg1NDBkZTg4ZjU3NGM2OThmYmU4YTE7XHJcblxyXG52YXIgQmluZGluZ19kODU0YjFlYTNjNjU0MGE4YmY5OGI2N2I3YTY0OTRhMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kODU0YjFlYTNjNjU0MGE4YmY5OGI2N2I3YTY0OTRhMS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzEzYmUyMTczZDNiZTRlNmJiMDQxZjFiNTg2OWU4Njc0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMTNiZTIxNzNkM2JlNGU2YmIwNDFmMWI1ODY5ZTg2NzQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZDg1NGIxZWEzYzY1NDBhOGJmOThiNjdiN2E2NDk0YTEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8xM2JlMjE3M2QzYmU0ZTZiYjA0MWYxYjU4NjllODY3NDtcclxuXHJcblxyXG5CaW5kaW5nX2Q4NTRiMWVhM2M2NTQwYThiZjk4YjY3YjdhNjQ5NGExLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzQ2NjIxNjJlNmM4NTQwZGU4OGY1NzRjNjk4ZmJlOGExO1xyXG5cclxudmFyIEJpbmRpbmdfMmM1YzllMTNjMDBlNDU1ZWIzMWYwNzYxM2UzNmUxMTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMmM1YzllMTNjMDBlNDU1ZWIzMWYwNzYxM2UzNmUxMTIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYzAwY2EyM2EwZGY0NGYwMzk2Nzc5N2RhODE4YzQwNzIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9jMDBjYTIzYTBkZjQ0ZjAzOTY3Nzk3ZGE4MThjNDA3Mi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18yYzVjOWUxM2MwMGU0NTVlYjMxZjA3NjEzZTM2ZTExMi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2MwMGNhMjNhMGRmNDRmMDM5Njc3OTdkYTgxOGM0MDcyO1xyXG5cclxuXHJcbkJpbmRpbmdfMmM1YzllMTNjMDBlNDU1ZWIzMWYwNzYxM2UzNmUxMTIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDY2MjE2MmU2Yzg1NDBkZTg4ZjU3NGM2OThmYmU4YTE7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfYmY1MTdiMzUwMzVmNGNjY2I3ZGU3N2M2ZTZhMDMzYzcuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ18yNzk0YTdlODE2NDY0OWVjOWNmNmMyOTJjMzMxZTY4YSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYmY1MTdiMzUwMzVmNGNjY2I3ZGU3N2M2ZTZhMDMzYzcuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfYzY5MDlkMTQyODIzNDlhN2E4OWFlMzdhYTg4ZTE4ODMpO1xyXG5Db250ZW50UHJlc2VudGVyX2JmNTE3YjM1MDM1ZjRjY2NiN2RlNzdjNmU2YTAzM2M3LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ18xZjNmMzZjMjYzMjU0ZTM0YjZlMzEzNGI4MjM3OGQxNCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYmY1MTdiMzUwMzVmNGNjY2I3ZGU3N2M2ZTZhMDMzYzcuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19iNDk5NzYwYjNkNDI0OGEyYWJlN2ZkMTI1NGZmMmE4OCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYmY1MTdiMzUwMzVmNGNjY2I3ZGU3N2M2ZTZhMDMzYzcuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfNGU5MGMyOTAzZDQ0NGM5Zjk0YzQxZWNlYTU2YzBkYWUpO1xyXG5Cb3JkZXJfMGYyODNjOTk3YTAwNDc1NGFiNTA5NjJmZGJkYzZkOWYuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzE2NzU0YWJmYjBiNjRjNDBhOWQwZmQ2MWQyMDcxMTg1KTtcclxuQm9yZGVyXzQwMTY0ZGQ4YWU5NDQ3OGJiMzQ3MjZmMmQ2YmZhYjBhLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19jYWU2MWZhNDA3YTI0ODI4ODM5MWI5YjVmNTc2ZjlhOCk7XHJcbkJvcmRlcl80MDE2NGRkOGFlOTQ0NzhiYjM0NzI2ZjJkNmJmYWIwYS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nX2Q4NTRiMWVhM2M2NTQwYThiZjk4YjY3YjdhNjQ5NGExKTtcclxuQm9yZGVyXzQwMTY0ZGQ4YWU5NDQ3OGJiMzQ3MjZmMmQ2YmZhYjBhLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nXzJjNWM5ZTEzYzAwZTQ1NWViMzFmMDc2MTNlMzZlMTEyKTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2ZjY2NiMzg3N2I2ZTQwYjRhMzc5MzdhZWU3ODkyMWNjLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2U5NTU1Y2E4NDZmZTRlZmQ5NTExY2QyOTFiMTAwYjI4LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfZTk1NTVjYTg0NmZlNGVmZDk1MTFjZDI5MWIxMDBiMjgsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9lOTU1NWNhODQ2ZmU0ZWZkOTUxMWNkMjkxYjEwMGIyOCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2U5NTU1Y2E4NDZmZTRlZmQ5NTExY2QyOTFiMTAwYjI4LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfZTk1NTVjYTg0NmZlNGVmZDk1MTFjZDI5MWIxMDBiMjgpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2ZjY2NiMzg3N2I2ZTQwYjRhMzc5MzdhZWU3ODkyMWNjLCBCb3JkZXJfMGYyODNjOTk3YTAwNDc1NGFiNTA5NjJmZGJkYzZkOWYpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzEwMDU5MTNiYTQxMjQxYTdhOThlMWE1Zjk3YmU5YjExLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2E5NTg3YzM0MmE2MjQ0YjlhZjEyMTFkOGVlOWFlOGRmLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYTk1ODdjMzQyYTYyNDRiOWFmMTIxMWQ4ZWU5YWU4ZGYsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9hOTU4N2MzNDJhNjI0NGI5YWYxMjExZDhlZTlhZThkZiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2E5NTg3YzM0MmE2MjQ0YjlhZjEyMTFkOGVlOWFlOGRmLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYTk1ODdjMzQyYTYyNDRiOWFmMTIxMWQ4ZWU5YWU4ZGYpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzEwMDU5MTNiYTQxMjQxYTdhOThlMWE1Zjk3YmU5YjExLCBCb3JkZXJfMGYyODNjOTk3YTAwNDc1NGFiNTA5NjJmZGJkYzZkOWYpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2Q3M2JkN2Q0MDY5MTQzYTA5MTA1NDgwZGI1MTNjZTg1LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzBiOTgzOTdhNWZiZjRlMWFiOTgzNjU5NjM0NWY0MGI3LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMGI5ODM5N2E1ZmJmNGUxYWI5ODM2NTk2MzQ1ZjQwYjcsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wYjk4Mzk3YTVmYmY0ZTFhYjk4MzY1OTYzNDVmNDBiNywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzBiOTgzOTdhNWZiZjRlMWFiOTgzNjU5NjM0NWY0MGI3LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMGI5ODM5N2E1ZmJmNGUxYWI5ODM2NTk2MzQ1ZjQwYjcpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2Q3M2JkN2Q0MDY5MTQzYTA5MTA1NDgwZGI1MTNjZTg1LCBCb3JkZXJfMGYyODNjOTk3YTAwNDc1NGFiNTA5NjJmZGJkYzZkOWYpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV80NjYyMTYyZTZjODU0MGRlODhmNTc0YzY5OGZiZThhMS5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfNDAxNjRkZDhhZTk0NDc4YmIzNDcyNmYyZDZiZmFiMGE7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlXzQ2NjIxNjJlNmM4NTQwZGU4OGY1NzRjNjk4ZmJlOGExO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD43MjAyQkE0OUVBN0RDMDVCNkI5QTYyMkVGNjRCMDlDRDwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE2LjA0LjIwMjAgMTQ6NTM6MDY8L0NvbXBpbGF0aW9uRGF0ZT48L0NTSFRNTDU+XHJcblxyXG5cclxuXHJcbnB1YmxpYyBzdGF0aWMgY2xhc3Mgx4DHgENzaHRtbMeAx4BDb21wb25lbnTHgMeAUGFnZXVwbG9hZMeAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuUGFnZVVwbG9hZCk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5UeXBlSW5zdGFudGlhdGlvbkhlbHBlci5JbnN0YW50aWF0ZSh0eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBhdXRvLWdlbmVyYXRlZCBieSBcIkMjL1hBTUwgZm9yIEhUTUw1XCJcclxuLy9cclxuLy8gICAgIENoYW5nZXMgdG8gdGhpcyBmaWxlIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IgYW5kIHdpbGwgYmUgbG9zdCBpZlxyXG4vLyAgICAgdGhlIGNvZGUgaXMgcmVnZW5lcmF0ZWQuXHJcbi8vIDwvYXV0by1nZW5lcmF0ZWQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbnBhcnRpYWwgY2xhc3MgUGFnZVVwbG9hZCA6IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlBhZ2Vcclxue1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMTY5LCA2NDksIDA2MjggLy8gUHJldmVudHMgd2FybmluZyBDUzAxNjkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgdXNlZCcpLCBDUzA2NDkgKCdmaWVsZCAuLi4gaXMgbmV2ZXIgYXNzaWduZWQgdG8sIGFuZCB3aWxsIGFsd2F5cyBoYXZlIGl0cyBkZWZhdWx0IHZhbHVlIG51bGwnKSwgYW5kIENTMDYyOCAoJ21lbWJlciA6IG5ldyBwcm90ZWN0ZWQgbWVtYmVyIGRlY2xhcmVkIGluIHNlYWxlZCBjbGFzcycpXHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24gYnRuQ2FuY2VsO1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZVVwbG9hZC54YW1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMDE4NFxyXG5cclxuXHJcblxyXG52YXIgR3JpZF9kNWNjOTE0ZWEyNTA0MmM5OGU2MDBiYWVlMjIwNzhjMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkKCk7XHJcbnZhciBSb3dEZWZpbml0aW9uXzU0NzVlY2M2ZDI0NDQ3YmFhMTY4MWZiMTIzOTljYzA1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzQ5MjdiNWJiZGU0MzQ1MGVhN2EzYzk2ZDU2NjY0OWVkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzI0ZjI1ODU5OTI4YTRmNDFiMjdjOTlkNjVjOTg2NjFhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2ZiOTkzNDZhYmQ4NjQyMzRiZjU5MTY1ZDUyNDg3MTczID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuXHJcbkdyaWRfZDVjYzkxNGVhMjUwNDJjOThlNjAwYmFlZTIyMDc4YzIuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNTQ3NWVjYzZkMjQ0NDdiYWExNjgxZmIxMjM5OWNjMDUpO1xyXG5HcmlkX2Q1Y2M5MTRlYTI1MDQyYzk4ZTYwMGJhZWUyMjA3OGMyLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzQ5MjdiNWJiZGU0MzQ1MGVhN2EzYzk2ZDU2NjY0OWVkKTtcclxuR3JpZF9kNWNjOTE0ZWEyNTA0MmM5OGU2MDBiYWVlMjIwNzhjMi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8yNGYyNTg1OTkyOGE0ZjQxYjI3Yzk5ZDY1Yzk4NjYxYSk7XHJcbkdyaWRfZDVjYzkxNGVhMjUwNDJjOThlNjAwYmFlZTIyMDc4YzIuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fZmI5OTM0NmFiZDg2NDIzNGJmNTkxNjVkNTI0ODcxNzMpO1xyXG5cclxudmFyIEJvcmRlcl9jNjM4MjdlZTViNWM0MTYxYWU3YzkyNjA4ZDFlYTQ1NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxuQm9yZGVyX2M2MzgyN2VlNWI1YzQxNjFhZTdjOTI2MDhkMWVhNDU3LlZlcnRpY2FsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmVydGljYWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfYzYzODI3ZWU1YjVjNDE2MWFlN2M5MjYwOGQxZWE0NTcsMCk7XHJcbnZhciBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfOWQzMzZkZDYzMDA4NDA4NGE3ZmU3MzE3NDI4YWM2NjEgPSBuZXcgZ2xvYmFsOjpDU0hUTUw1LkV4dGVuc2lvbnMuRmlsZU9wZW5EaWFsb2cuQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlbkRpYWxvZygpO1xyXG5Db250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfOWQzMzZkZDYzMDA4NDA4NGE3ZmU3MzE3NDI4YWM2NjEuRmlsZU9wZW5lZCArPSBPbkZpbGVPcGVuZWQ7XHJcbkNvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV85ZDMzNmRkNjMwMDg0MDg0YTdmZTczMTc0MjhhYzY2MS5GaWx0ZXIgPSBAXCIqLmpzb24sKi50eHRcIjtcclxuQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlXzlkMzM2ZGQ2MzAwODQwODRhN2ZlNzMxNzQyOGFjNjYxLlJlc3VsdEtpbmQgPSBnbG9iYWw6OkNTSFRNTDUuRXh0ZW5zaW9ucy5GaWxlT3BlbkRpYWxvZy5SZXN1bHRLaW5kLlRleHQ7XHJcblxyXG5Cb3JkZXJfYzYzODI3ZWU1YjVjNDE2MWFlN2M5MjYwOGQxZWE0NTcuQ2hpbGQgPSBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfOWQzMzZkZDYzMDA4NDA4NGE3ZmU3MzE3NDI4YWM2NjE7XHJcblxyXG5cclxudmFyIEJ1dHRvbl8zYWE3MzhiMGJlNTM0NjM2YjU4ODZlN2IwYzMxYjlhMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuQnV0dG9uXzNhYTczOGIwYmU1MzQ2MzZiNTg4NmU3YjBjMzFiOWEwLkNvbnRlbnQgPSBAXCLQn9GA0LXQtNGL0LTRg9GJ0LDRjyDRgdGC0YDQsNC90LjRhtCwXCI7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuQ2FuY2VsXCIsIEJ1dHRvbl8zYWE3MzhiMGJlNTM0NjM2YjU4ODZlN2IwYzMxYjlhMCk7XHJcbkJ1dHRvbl8zYWE3MzhiMGJlNTM0NjM2YjU4ODZlN2IwYzMxYjlhMC5OYW1lID0gXCJidG5DYW5jZWxcIjtcclxuQnV0dG9uXzNhYTczOGIwYmU1MzQ2MzZiNTg4NmU3YjBjMzFiOWEwLkNsaWNrICs9IEJ0bkNhbmNlbF9DbGljaztcclxuQnV0dG9uXzNhYTczOGIwYmU1MzQ2MzZiNTg4NmU3YjBjMzFiOWEwLldpZHRoID0gMjUwRDtcclxuQnV0dG9uXzNhYTczOGIwYmU1MzQ2MzZiNTg4NmU3YjBjMzFiOWEwLkhlaWdodCA9IDUwRDtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uXzNhYTczOGIwYmU1MzQ2MzZiNTg4NmU3YjBjMzFiOWEwLDEpO1xyXG5CdXR0b25fM2FhNzM4YjBiZTUzNDYzNmI1ODg2ZTdiMGMzMWI5YTAuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI0OSwgRyA9IChieXRlKTIyMiwgQiA9IChieXRlKTI0MiB9KTtcclxuQnV0dG9uXzNhYTczOGIwYmU1MzQ2MzZiNTg4NmU3YjBjMzFiOWEwLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl8zYWE3MzhiMGJlNTM0NjM2YjU4ODZlN2IwYzMxYjlhMC5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzNhYTczOGIwYmU1MzQ2MzZiNTg4NmU3YjBjMzFiOWEwLlZlcnRpY2FsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmVydGljYWxBbGlnbm1lbnQuQm90dG9tO1xyXG5CdXR0b25fM2FhNzM4YjBiZTUzNDYzNmI1ODg2ZTdiMGMzMWI5YTAuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fM2FhNzM4YjBiZTUzNDYzNmI1ODg2ZTdiMGMzMWI5YTAuRm9udFNpemUgPSAyMEQ7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfY2U0YzlkOWMyNWJkNDM0NjhiOTNjYTc3NDMzYTg5YmMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV9jZTRjOWQ5YzI1YmQ0MzQ2OGI5M2NhNzc0MzNhODliYy5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV9jZTRjOWQ5YzI1YmQ0MzQ2OGI5M2NhNzc0MzNhODliYy5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV9jZTRjOWQ5YzI1YmQ0MzQ2OGI5M2NhNzc0MzNhODliYyk7XHJcblxyXG5CdXR0b25fM2FhNzM4YjBiZTUzNDYzNmI1ODg2ZTdiMGMzMWI5YTAuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfY2U0YzlkOWMyNWJkNDM0NjhiOTNjYTc3NDMzYTg5YmM7XHJcblxyXG5cclxuR3JpZF9kNWNjOTE0ZWEyNTA0MmM5OGU2MDBiYWVlMjIwNzhjMi5DaGlsZHJlbi5BZGQoQm9yZGVyX2M2MzgyN2VlNWI1YzQxNjFhZTdjOTI2MDhkMWVhNDU3KTtcclxuR3JpZF9kNWNjOTE0ZWEyNTA0MmM5OGU2MDBiYWVlMjIwNzhjMi5DaGlsZHJlbi5BZGQoQnV0dG9uXzNhYTczOGIwYmU1MzQ2MzZiNTg4NmU3YjBjMzFiOWEwKTtcclxuXHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkX2Q1Y2M5MTRlYTI1MDQyYzk4ZTYwMGJhZWUyMjA3OGMyO1xyXG5cclxuXHJcblxyXG5idG5DYW5jZWwgPSBCdXR0b25fM2FhNzM4YjBiZTUzNDYzNmI1ODg2ZTdiMGMzMWI5YTA7XHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8yYWQ5ZmNiY2ZlYTI0YjcwYmE4MTIwODRlOGY2Y2M5OSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzJhZDlmY2JjZmVhMjRiNzBiYTgxMjA4NGU4ZjZjYzk5IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMmFkOWZjYmNmZWEyNGI3MGJhODEyMDg0ZThmNmNjOTkgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8yYWQ5ZmNiY2ZlYTI0YjcwYmE4MTIwODRlOGY2Y2M5OSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMmFkOWZjYmNmZWEyNGI3MGJhODEyMDg0ZThmNmNjOTkgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzZjYTQxZGI3YmM0ODRmZmQ4MDMzNTQ1ZmIwZjcyYjQxIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNmNhNDFkYjdiYzQ4NGZmZDgwMzM1NDVmYjBmNzJiNDEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV82Y2E0MWRiN2JjNDg0ZmZkODAzMzU0NWZiMGY3MmI0MSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzZjYTQxZGI3YmM0ODRmZmQ4MDMzNTQ1ZmIwZjcyYjQxIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV82Y2E0MWRiN2JjNDg0ZmZkODAzMzU0NWZiMGY3MmI0MSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNDFmMGVlODc0Y2FlNDYwMTk1NjE5YjNlMTQxMjk1YWYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV80MWYwZWU4NzRjYWU0NjAxOTU2MTliM2UxNDEyOTVhZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzQxZjBlZTg3NGNhZTQ2MDE5NTYxOWIzZTE0MTI5NWFmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNDFmMGVlODc0Y2FlNDYwMTk1NjE5YjNlMTQxMjk1YWYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzQxZjBlZTg3NGNhZTQ2MDE5NTYxOWIzZTE0MTI5NWFmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UgSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlX2NlNGM5ZDljMjViZDQzNDY4YjkzY2E3NzQzM2E4OWJjKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wgdGVtcGxhdGVPd25lcilcclxuICAgICAgICB7XHJcbnZhciB0ZW1wbGF0ZUluc3RhbmNlXzYzNzVjOTI5NDI4MDRmNDg4MjhmODZhZmQyYmNjYmE3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UoKTtcclxudGVtcGxhdGVJbnN0YW5jZV82Mzc1YzkyOTQyODA0ZjQ4ODI4Zjg2YWZkMmJjY2JhNy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVPd25lcjtcclxudmFyIEJvcmRlcl8xZDAxMDdiMjI1YzA0YjdmYjc4NmM4ZDdkZDZhZWY5MCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJPdXRlckJvcmRlclwiLCBCb3JkZXJfMWQwMTA3YjIyNWMwNGI3ZmI3ODZjOGQ3ZGQ2YWVmOTApO1xyXG5Cb3JkZXJfMWQwMTA3YjIyNWMwNGI3ZmI3ODZjOGQ3ZGQ2YWVmOTAuTmFtZSA9IFwiT3V0ZXJCb3JkZXJcIjtcclxuQm9yZGVyXzFkMDEwN2IyMjVjMDRiN2ZiNzg2YzhkN2RkNmFlZjkwLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBWaXN1YWxTdGF0ZUdyb3VwXzA4NjhmOWI0Nzc1ZDRlZjM5Y2NhNjgwMmJiMjUyM2I1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlR3JvdXAoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb21tb25TdGF0ZXNcIiwgVmlzdWFsU3RhdGVHcm91cF8wODY4ZjliNDc3NWQ0ZWYzOWNjYTY4MDJiYjI1MjNiNSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMDg2OGY5YjQ3NzVkNGVmMzljY2E2ODAyYmIyNTIzYjUuTmFtZSA9IFwiQ29tbW9uU3RhdGVzXCI7XHJcbnZhciBWaXN1YWxTdGF0ZV8yZmIzYzc5YzA3YjA0YTMzOGFkOGU5NjM1YjNiNTAxYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk5vcm1hbFwiLCBWaXN1YWxTdGF0ZV8yZmIzYzc5YzA3YjA0YTMzOGFkOGU5NjM1YjNiNTAxYik7XHJcblZpc3VhbFN0YXRlXzJmYjNjNzljMDdiMDRhMzM4YWQ4ZTk2MzViM2I1MDFiLk5hbWUgPSBcIk5vcm1hbFwiO1xyXG5cclxudmFyIFZpc3VhbFN0YXRlXzI0MGRkMGI3ZGNmOTQyZTBiZjk3M2YzNDFjZTE1MjA3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUG9pbnRlck92ZXJcIiwgVmlzdWFsU3RhdGVfMjQwZGQwYjdkY2Y5NDJlMGJmOTczZjM0MWNlMTUyMDcpO1xyXG5WaXN1YWxTdGF0ZV8yNDBkZDBiN2RjZjk0MmUwYmY5NzNmMzQxY2UxNTIwNy5OYW1lID0gXCJQb2ludGVyT3ZlclwiO1xyXG52YXIgU3Rvcnlib2FyZF9hZGMzNTkyZjdjMzc0MWMxOGI0ODVlN2E3NGExOGMzNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNWNmYjNkNjI3MjhhNGQwNWIyN2RmZGIyOTY1YWE5ZTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNWNmYjNkNjI3MjhhNGQwNWIyN2RmZGIyOTY1YWE5ZTgsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2YyZmMwNTEwMzg3YjQ2MzE5MTIzNjMxNTYyMzZkMmQzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZjJmYzA1MTAzODdiNDYzMTkxMjM2MzE1NjIzNmQyZDMuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mMmZjMDUxMDM4N2I0NjMxOTEyMzYzMTU2MjM2ZDJkMy5WYWx1ZSA9IEBcIiMxMTAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNWNmYjNkNjI3MjhhNGQwNWIyN2RmZGIyOTY1YWE5ZTguS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2YyZmMwNTEwMzg3YjQ2MzE5MTIzNjMxNTYyMzZkMmQzKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2FkYzM1OTJmN2MzNzQxYzE4YjQ4NWU3YTc0YTE4YzM0LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181Y2ZiM2Q2MjcyOGE0ZDA1YjI3ZGZkYjI5NjVhYTllOCk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMjQwZGQwYjdkY2Y5NDJlMGJmOTczZjM0MWNlMTUyMDcuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfYWRjMzU5MmY3YzM3NDFjMThiNDg1ZTdhNzRhMThjMzQ7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlX2I2MTE0ZmE4NWFiZDQzMWRhNzZlYjc0MDA0ZmJmMzRmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUHJlc3NlZFwiLCBWaXN1YWxTdGF0ZV9iNjExNGZhODVhYmQ0MzFkYTc2ZWI3NDAwNGZiZjM0Zik7XHJcblZpc3VhbFN0YXRlX2I2MTE0ZmE4NWFiZDQzMWRhNzZlYjc0MDA0ZmJmMzRmLk5hbWUgPSBcIlByZXNzZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfMjgzNWFiMjMxMjBmNDhlZmJlMWUyZTg0NjIxYTdlNmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E1OTQ2YzIzMmMyZTQwZjA5M2IxYjEyZjkxNzk1ODQ2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E1OTQ2YzIzMmMyZTQwZjA5M2IxYjEyZjkxNzk1ODQ2LEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mZTcyY2RjYTQ3NTk0MmVkODRkYTI1MzM0NjAxYjRiMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2ZlNzJjZGNhNDc1OTQyZWQ4NGRhMjUzMzQ2MDFiNGIxLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZmU3MmNkY2E0NzU5NDJlZDg0ZGEyNTMzNDYwMWI0YjEuVmFsdWUgPSBAXCIjMjIwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E1OTQ2YzIzMmMyZTQwZjA5M2IxYjEyZjkxNzk1ODQ2LktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mZTcyY2RjYTQ3NTk0MmVkODRkYTI1MzM0NjAxYjRiMSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF8yODM1YWIyMzEyMGY0OGVmYmUxZTJlODQ2MjFhN2U2ZC5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYTU5NDZjMjMyYzJlNDBmMDkzYjFiMTJmOTE3OTU4NDYpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlX2I2MTE0ZmE4NWFiZDQzMWRhNzZlYjc0MDA0ZmJmMzRmLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzI4MzVhYjIzMTIwZjQ4ZWZiZTFlMmU4NDYyMWE3ZTZkO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV83M2UyNGI1MmMyMDM0MjhlYjc4NTM5NmRjZTgyZDdlYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkRpc2FibGVkXCIsIFZpc3VhbFN0YXRlXzczZTI0YjUyYzIwMzQyOGViNzg1Mzk2ZGNlODJkN2VjKTtcclxuVmlzdWFsU3RhdGVfNzNlMjRiNTJjMjAzNDI4ZWI3ODUzOTZkY2U4MmQ3ZWMuTmFtZSA9IFwiRGlzYWJsZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfNDA2YWY0ZjI5YjhkNGQyMmJmMWIxN2VkZDk3MDg0YjIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2I5ZTQwNWNkOGJlNTRiOWI4ODY4ZDViMjg0MjY2ZTlkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2I5ZTQwNWNkOGJlNTRiOWI4ODY4ZDViMjg0MjY2ZTlkLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV85NTM3ZjlhZWZhMjY0YWE1ODEyNzRmZWUzNTc0Y2Y5YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzk1MzdmOWFlZmEyNjRhYTU4MTI3NGZlZTM1NzRjZjlhLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfOTUzN2Y5YWVmYTI2NGFhNTgxMjc0ZmVlMzU3NGNmOWEuVmFsdWUgPSBAXCIjMzNGRkZGRkZcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2I5ZTQwNWNkOGJlNTRiOWI4ODY4ZDViMjg0MjY2ZTlkLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV85NTM3ZjlhZWZhMjY0YWE1ODEyNzRmZWUzNTc0Y2Y5YSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF80MDZhZjRmMjliOGQ0ZDIyYmYxYjE3ZWRkOTcwODRiMi5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjllNDA1Y2Q4YmU1NGI5Yjg4NjhkNWIyODQyNjZlOWQpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzczZTI0YjUyYzIwMzQyOGViNzg1Mzk2ZGNlODJkN2VjLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzQwNmFmNGYyOWI4ZDRkMjJiZjFiMTdlZGQ5NzA4NGIyO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlR3JvdXBfMDg2OGY5YjQ3NzVkNGVmMzljY2E2ODAyYmIyNTIzYjUuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV8yZmIzYzc5YzA3YjA0YTMzOGFkOGU5NjM1YjNiNTAxYik7XHJcblZpc3VhbFN0YXRlR3JvdXBfMDg2OGY5YjQ3NzVkNGVmMzljY2E2ODAyYmIyNTIzYjUuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV8yNDBkZDBiN2RjZjk0MmUwYmY5NzNmMzQxY2UxNTIwNyk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMDg2OGY5YjQ3NzVkNGVmMzljY2E2ODAyYmIyNTIzYjUuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV9iNjExNGZhODVhYmQ0MzFkYTc2ZWI3NDAwNGZiZjM0Zik7XHJcblZpc3VhbFN0YXRlR3JvdXBfMDg2OGY5YjQ3NzVkNGVmMzljY2E2ODAyYmIyNTIzYjUuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV83M2UyNGI1MmMyMDM0MjhlYjc4NTM5NmRjZTgyZDdlYyk7XHJcblxyXG5cclxudGVtcGxhdGVPd25lci5JTlRFUk5BTF9HZXRWaXN1YWxTdGF0ZUdyb3VwcygpLkFkZChWaXN1YWxTdGF0ZUdyb3VwXzA4NjhmOWI0Nzc1ZDRlZjM5Y2NhNjgwMmJiMjUyM2I1KTtcclxuXHJcbnZhciBCb3JkZXJfZDFiMGJlN2M2N2M4NGEyZDkyNmI3ZjFlOTRjZjU1NDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiSW5uZXJCb3JkZXJcIiwgQm9yZGVyX2QxYjBiZTdjNjdjODRhMmQ5MjZiN2YxZTk0Y2Y1NTQ5KTtcclxuQm9yZGVyX2QxYjBiZTdjNjdjODRhMmQ5MjZiN2YxZTk0Y2Y1NTQ5Lk5hbWUgPSBcIklubmVyQm9yZGVyXCI7XHJcbkJvcmRlcl9kMWIwYmU3YzY3Yzg0YTJkOTI2YjdmMWU5NGNmNTU0OS5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgQ29udGVudFByZXNlbnRlcl9mOTZlOTFiMmU2YmM0NTI2YWZhMWQ0M2E3NzllMmQ5NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50UHJlc2VudGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29udGVudFByZXNlbnRlclwiLCBDb250ZW50UHJlc2VudGVyX2Y5NmU5MWIyZTZiYzQ1MjZhZmExZDQzYTc3OWUyZDk3KTtcclxuQ29udGVudFByZXNlbnRlcl9mOTZlOTFiMmU2YmM0NTI2YWZhMWQ0M2E3NzllMmQ5Ny5OYW1lID0gXCJDb250ZW50UHJlc2VudGVyXCI7XHJcbnZhciBCaW5kaW5nX2I0NjQ2MjE0Y2U0ZTRlYTM4ZWEzYWEzZWUyN2JjZTliID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2I0NjQ2MjE0Y2U0ZTRlYTM4ZWEzYWEzZWUyN2JjZTliLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRUZW1wbGF0ZVwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzNkYjAxMGUwY2U5YjQwOWZiZDlkNTc0MThlODIxOGVkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfM2RiMDEwZTBjZTliNDA5ZmJkOWQ1NzQxOGU4MjE4ZWQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYjQ2NDYyMTRjZTRlNGVhMzhlYTNhYTNlZTI3YmNlOWIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8zZGIwMTBlMGNlOWI0MDlmYmQ5ZDU3NDE4ZTgyMThlZDtcclxuXHJcblxyXG5CaW5kaW5nX2I0NjQ2MjE0Y2U0ZTRlYTM4ZWEzYWEzZWUyN2JjZTliLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzYzNzVjOTI5NDI4MDRmNDg4MjhmODZhZmQyYmNjYmE3O1xyXG5cclxudmFyIEJpbmRpbmdfN2ZkNTU0ZTljZTZlNDkyNTgxOTQ0MjVjOGIxOGE2ZDEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfN2ZkNTU0ZTljZTZlNDkyNTgxOTQ0MjVjOGIxOGE2ZDEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzM4NThhYmMxNmFjYjQzOWM4MDY5NjVhY2FmNDBmODRiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMzg1OGFiYzE2YWNiNDM5YzgwNjk2NWFjYWY0MGY4NGIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfN2ZkNTU0ZTljZTZlNDkyNTgxOTQ0MjVjOGIxOGE2ZDEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8zODU4YWJjMTZhY2I0MzljODA2OTY1YWNhZjQwZjg0YjtcclxuXHJcblxyXG5CaW5kaW5nXzdmZDU1NGU5Y2U2ZTQ5MjU4MTk0NDI1YzhiMThhNmQxLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzYzNzVjOTI5NDI4MDRmNDg4MjhmODZhZmQyYmNjYmE3O1xyXG5cclxudmFyIEJpbmRpbmdfNzRhZWRhZGZkZmNlNDFjOGE0ZjEzOWMyNDJmOTFmZGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNzRhZWRhZGZkZmNlNDFjOGE0ZjEzOWMyNDJmOTFmZGUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiUGFkZGluZ1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzk1OWI2ZjhiNmQxNjQ1ZDVhYmYwNTIxNTdhMzEyZmU0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOTU5YjZmOGI2ZDE2NDVkNWFiZjA1MjE1N2EzMTJmZTQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNzRhZWRhZGZkZmNlNDFjOGE0ZjEzOWMyNDJmOTFmZGUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85NTliNmY4YjZkMTY0NWQ1YWJmMDUyMTU3YTMxMmZlNDtcclxuXHJcblxyXG5CaW5kaW5nXzc0YWVkYWRmZGZjZTQxYzhhNGYxMzljMjQyZjkxZmRlLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzYzNzVjOTI5NDI4MDRmNDg4MjhmODZhZmQyYmNjYmE3O1xyXG5cclxudmFyIEJpbmRpbmdfZTcyMDAyYjhiZGUxNGU2NjhkMTkxNTBjN2YzYmIzYjAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZTcyMDAyYjhiZGUxNGU2NjhkMTkxNTBjN2YzYmIzYjAuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiSG9yaXpvbnRhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9mMmRkYTU3YzM3YTk0OTdkOGYyNzcyMWRjNGU5MjlmNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2YyZGRhNTdjMzdhOTQ5N2Q4ZjI3NzIxZGM0ZTkyOWY2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2U3MjAwMmI4YmRlMTRlNjY4ZDE5MTUwYzdmM2JiM2IwLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZjJkZGE1N2MzN2E5NDk3ZDhmMjc3MjFkYzRlOTI5ZjY7XHJcblxyXG5cclxuQmluZGluZ19lNzIwMDJiOGJkZTE0ZTY2OGQxOTE1MGM3ZjNiYjNiMC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV82Mzc1YzkyOTQyODA0ZjQ4ODI4Zjg2YWZkMmJjY2JhNztcclxuXHJcbnZhciBCaW5kaW5nXzVkYjNlZThmOWJjZTRlNWI4N2IzODQxNjU2YWRiNTExID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzVkYjNlZThmOWJjZTRlNWI4N2IzODQxNjU2YWRiNTExLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzI1MGJmMzBmNmVmNDRkMzNiYTk4MmQ0ZDNiN2EwMTY2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMjUwYmYzMGY2ZWY0NGQzM2JhOTgyZDRkM2I3YTAxNjYuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNWRiM2VlOGY5YmNlNGU1Yjg3YjM4NDE2NTZhZGI1MTEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8yNTBiZjMwZjZlZjQ0ZDMzYmE5ODJkNGQzYjdhMDE2NjtcclxuXHJcblxyXG5CaW5kaW5nXzVkYjNlZThmOWJjZTRlNWI4N2IzODQxNjU2YWRiNTExLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzYzNzVjOTI5NDI4MDRmNDg4MjhmODZhZmQyYmNjYmE3O1xyXG5cclxuXHJcbkJvcmRlcl9kMWIwYmU3YzY3Yzg0YTJkOTI2YjdmMWU5NGNmNTU0OS5DaGlsZCA9IENvbnRlbnRQcmVzZW50ZXJfZjk2ZTkxYjJlNmJjNDUyNmFmYTFkNDNhNzc5ZTJkOTc7XHJcblxyXG52YXIgQmluZGluZ180YjNiNGQ2MTJlNmM0MDBjYTFlYzAyNzM0ZTI2NmFhYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ180YjNiNGQ2MTJlNmM0MDBjYTFlYzAyNzM0ZTI2NmFhYi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZmFmZDhmMmQ4ZTkzNDBhOGJjYmU0YzcyODRlMjE1YmMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9mYWZkOGYyZDhlOTM0MGE4YmNiZTRjNzI4NGUyMTViYy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ180YjNiNGQ2MTJlNmM0MDBjYTFlYzAyNzM0ZTI2NmFhYi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2ZhZmQ4ZjJkOGU5MzQwYThiY2JlNGM3Mjg0ZTIxNWJjO1xyXG5cclxuXHJcbkJpbmRpbmdfNGIzYjRkNjEyZTZjNDAwY2ExZWMwMjczNGUyNjZhYWIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNjM3NWM5Mjk0MjgwNGY0ODgyOGY4NmFmZDJiY2NiYTc7XHJcblxyXG5cclxuQm9yZGVyXzFkMDEwN2IyMjVjMDRiN2ZiNzg2YzhkN2RkNmFlZjkwLkNoaWxkID0gQm9yZGVyX2QxYjBiZTdjNjdjODRhMmQ5MjZiN2YxZTk0Y2Y1NTQ5O1xyXG5cclxudmFyIEJpbmRpbmdfY2U0NWZhYzg3NDNlNDc2NTlmMGQwOTllOWViNWFjM2EgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfY2U0NWZhYzg3NDNlNDc2NTlmMGQwOTllOWViNWFjM2EuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzkzMTI3OGMyZmRkMDQ3ZTA4NWRkNjJlNmQ5OGQ2MjAwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOTMxMjc4YzJmZGQwNDdlMDg1ZGQ2MmU2ZDk4ZDYyMDAuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfY2U0NWZhYzg3NDNlNDc2NTlmMGQwOTllOWViNWFjM2EuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85MzEyNzhjMmZkZDA0N2UwODVkZDYyZTZkOThkNjIwMDtcclxuXHJcblxyXG5CaW5kaW5nX2NlNDVmYWM4NzQzZTQ3NjU5ZjBkMDk5ZTllYjVhYzNhLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzYzNzVjOTI5NDI4MDRmNDg4MjhmODZhZmQyYmNjYmE3O1xyXG5cclxudmFyIEJpbmRpbmdfZDljNDY3YzVhYTU5NDgzZWFjZmIwOTViYzJkNDE3MDcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZDljNDY3YzVhYTU5NDgzZWFjZmIwOTViYzJkNDE3MDcuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyQnJ1c2hcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lZTJlMzY3ZGM3MTU0NzEyOGI4YmY2ZmFjMDAwODFhYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2VlMmUzNjdkYzcxNTQ3MTI4YjhiZjZmYWMwMDA4MWFjLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2Q5YzQ2N2M1YWE1OTQ4M2VhY2ZiMDk1YmMyZDQxNzA3LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZWUyZTM2N2RjNzE1NDcxMjhiOGJmNmZhYzAwMDgxYWM7XHJcblxyXG5cclxuQmluZGluZ19kOWM0NjdjNWFhNTk0ODNlYWNmYjA5NWJjMmQ0MTcwNy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV82Mzc1YzkyOTQyODA0ZjQ4ODI4Zjg2YWZkMmJjY2JhNztcclxuXHJcbnZhciBCaW5kaW5nXzU5ODU3MTI5OGQzZTRkOGViMWQwMjE3YzBmYzExNmMxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzU5ODU3MTI5OGQzZTRkOGViMWQwMjE3YzBmYzExNmMxLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlclRoaWNrbmVzc1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzk3OGE5OWFmYjJjZDQzYTdiMzU2MDFjNTQ2NjM4NzIzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOTc4YTk5YWZiMmNkNDNhN2IzNTYwMWM1NDY2Mzg3MjMuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNTk4NTcxMjk4ZDNlNGQ4ZWIxZDAyMTdjMGZjMTE2YzEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85NzhhOTlhZmIyY2Q0M2E3YjM1NjAxYzU0NjYzODcyMztcclxuXHJcblxyXG5CaW5kaW5nXzU5ODU3MTI5OGQzZTRkOGViMWQwMjE3YzBmYzExNmMxLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzYzNzVjOTI5NDI4MDRmNDg4MjhmODZhZmQyYmNjYmE3O1xyXG5cclxuXHJcblxyXG5Db250ZW50UHJlc2VudGVyX2Y5NmU5MWIyZTZiYzQ1MjZhZmExZDQzYTc3OWUyZDk3LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFRlbXBsYXRlUHJvcGVydHksIEJpbmRpbmdfYjQ2NDYyMTRjZTRlNGVhMzhlYTNhYTNlZTI3YmNlOWIpO1xyXG5Db250ZW50UHJlc2VudGVyX2Y5NmU5MWIyZTZiYzQ1MjZhZmExZDQzYTc3OWUyZDk3LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFByb3BlcnR5LCBCaW5kaW5nXzdmZDU1NGU5Y2U2ZTQ5MjU4MTk0NDI1YzhiMThhNmQxKTtcclxuQ29udGVudFByZXNlbnRlcl9mOTZlOTFiMmU2YmM0NTI2YWZhMWQ0M2E3NzllMmQ5Ny5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuTWFyZ2luUHJvcGVydHksIEJpbmRpbmdfNzRhZWRhZGZkZmNlNDFjOGE0ZjEzOWMyNDJmOTFmZGUpO1xyXG5Db250ZW50UHJlc2VudGVyX2Y5NmU5MWIyZTZiYzQ1MjZhZmExZDQzYTc3OWUyZDk3LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5Ib3Jpem9udGFsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfZTcyMDAyYjhiZGUxNGU2NjhkMTkxNTBjN2YzYmIzYjApO1xyXG5Db250ZW50UHJlc2VudGVyX2Y5NmU5MWIyZTZiYzQ1MjZhZmExZDQzYTc3OWUyZDk3LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5WZXJ0aWNhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nXzVkYjNlZThmOWJjZTRlNWI4N2IzODQxNjU2YWRiNTExKTtcclxuQm9yZGVyX2QxYjBiZTdjNjdjODRhMmQ5MjZiN2YxZTk0Y2Y1NTQ5LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ180YjNiNGQ2MTJlNmM0MDBjYTFlYzAyNzM0ZTI2NmFhYik7XHJcbkJvcmRlcl8xZDAxMDdiMjI1YzA0YjdmYjc4NmM4ZDdkZDZhZWY5MC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfY2U0NWZhYzg3NDNlNDc2NTlmMGQwOTllOWViNWFjM2EpO1xyXG5Cb3JkZXJfMWQwMTA3YjIyNWMwNGI3ZmI3ODZjOGQ3ZGQ2YWVmOTAuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyQnJ1c2hQcm9wZXJ0eSwgQmluZGluZ19kOWM0NjdjNWFhNTk0ODNlYWNmYjA5NWJjMmQ0MTcwNyk7XHJcbkJvcmRlcl8xZDAxMDdiMjI1YzA0YjdmYjc4NmM4ZDdkZDZhZWY5MC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJUaGlja25lc3NQcm9wZXJ0eSwgQmluZGluZ181OTg1NzEyOThkM2U0ZDhlYjFkMDIxN2MwZmMxMTZjMSk7XHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181Y2ZiM2Q2MjcyOGE0ZDA1YjI3ZGZkYjI5NjVhYTllOCxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8yYWQ5ZmNiY2ZlYTI0YjcwYmE4MTIwODRlOGY2Y2M5OSxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzJhZDlmY2JjZmVhMjRiNzBiYTgxMjA4NGU4ZjZjYzk5LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMmFkOWZjYmNmZWEyNGI3MGJhODEyMDg0ZThmNmNjOTksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8yYWQ5ZmNiY2ZlYTI0YjcwYmE4MTIwODRlOGY2Y2M5OSxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzJhZDlmY2JjZmVhMjRiNzBiYTgxMjA4NGU4ZjZjYzk5KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181Y2ZiM2Q2MjcyOGE0ZDA1YjI3ZGZkYjI5NjVhYTllOCwgQm9yZGVyX2QxYjBiZTdjNjdjODRhMmQ5MjZiN2YxZTk0Y2Y1NTQ5KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hNTk0NmMyMzJjMmU0MGYwOTNiMWIxMmY5MTc5NTg0NixcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV82Y2E0MWRiN2JjNDg0ZmZkODAzMzU0NWZiMGY3MmI0MSxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzZjYTQxZGI3YmM0ODRmZmQ4MDMzNTQ1ZmIwZjcyYjQxLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNmNhNDFkYjdiYzQ4NGZmZDgwMzM1NDVmYjBmNzJiNDEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV82Y2E0MWRiN2JjNDg0ZmZkODAzMzU0NWZiMGY3MmI0MSxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzZjYTQxZGI3YmM0ODRmZmQ4MDMzNTQ1ZmIwZjcyYjQxKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hNTk0NmMyMzJjMmU0MGYwOTNiMWIxMmY5MTc5NTg0NiwgQm9yZGVyX2QxYjBiZTdjNjdjODRhMmQ5MjZiN2YxZTk0Y2Y1NTQ5KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iOWU0MDVjZDhiZTU0YjliODg2OGQ1YjI4NDI2NmU5ZCxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV80MWYwZWU4NzRjYWU0NjAxOTU2MTliM2UxNDEyOTVhZixcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzQxZjBlZTg3NGNhZTQ2MDE5NTYxOWIzZTE0MTI5NWFmLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNDFmMGVlODc0Y2FlNDYwMTk1NjE5YjNlMTQxMjk1YWYsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV80MWYwZWU4NzRjYWU0NjAxOTU2MTliM2UxNDEyOTVhZixcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzQxZjBlZTg3NGNhZTQ2MDE5NTYxOWIzZTE0MTI5NWFmKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iOWU0MDVjZDhiZTU0YjliODg2OGQ1YjI4NDI2NmU5ZCwgQm9yZGVyX2QxYjBiZTdjNjdjODRhMmQ5MjZiN2YxZTk0Y2Y1NTQ5KTtcclxuXHJcbnRlbXBsYXRlSW5zdGFuY2VfNjM3NWM5Mjk0MjgwNGY0ODgyOGY4NmFmZDJiY2NiYTcuVGVtcGxhdGVDb250ZW50ID0gQm9yZGVyXzFkMDEwN2IyMjVjMDRiN2ZiNzg2YzhkN2RkNmFlZjkwO1xyXG5yZXR1cm4gdGVtcGxhdGVJbnN0YW5jZV82Mzc1YzkyOTQyODA0ZjQ4ODI4Zjg2YWZkMmJjY2JhNztcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxufVxyXG4iLCIvLyA8Q1NIVE1MNT48WGFtbEhhc2g+RENCMTY1NzUyM0U3OEU3QUFERUU1N0NERTE0NDZCNzU8L1hhbWxIYXNoPjxQYXNzTnVtYmVyPjI8L1Bhc3NOdW1iZXI+PENvbXBpbGF0aW9uRGF0ZT4xNi4wNC4yMDIwIDE0OjUzOjA2PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgFNlY29uZHBhZ2XHgMeAWGFtbMeAx4BGYWN0b3J5XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqZWN0IEluc3RhbnRpYXRlKClcclxuICAgIHtcclxuICAgICAgICBnbG9iYWw6OlN5c3RlbS5UeXBlIHR5cGUgPSB0eXBlb2YoQ1NodG1sLlNlY29uZFBhZ2UpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFNlY29uZFBhZ2UgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QYWdlXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5cclxuXHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAxNjksIDY0OSwgMDYyOFxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9jb250ZW50TG9hZGVkO1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jb250ZW50TG9hZGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfY29udGVudExvYWRlZCA9IHRydWU7XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAwMTg0IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTg0ICgnVGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgbmV2ZXIgb2YgdGhlIHByb3ZpZGVkICgndHlwZScpIHR5cGUnKVxyXG4gICAgICAgICAgICBpZiAodGhpcyBpcyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KShvYmplY3QpdGhpcykuWGFtbFNvdXJjZVBhdGggPSBAXCJDU2h0bWxcXFNlY29uZFBhZ2UueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfYWVkMGQyNjM5NTZlNGQ1YjgzYmE3MmEwMzFkMjdmNDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG5HcmlkX2FlZDBkMjYzOTU2ZTRkNWI4M2JhNzJhMDMxZDI3ZjQwLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkwLCBHID0gKGJ5dGUpMCwgQiA9IChieXRlKTAgfSk7XHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkX2FlZDBkMjYzOTU2ZTRkNWI4M2JhNzJhMDMxZDI3ZjQwO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBzZWFsZWQgcGFydGlhbCBjbGFzcyBBcHAgOiBBcHBsaWNhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBBcHAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbnRlciBjb25zdHJ1Y3Rpb24gbG9naWMgaGVyZS4uLlxyXG5cclxuICAgICAgICAgICAgLy92YXIgcGFnZUhvbWUgPSBuZXcgUGFnZUhvbWUoKTtcclxuICAgICAgICAgICAgLy9XaW5kb3cuQ3VycmVudC5Db250ZW50ID0gcGFnZUhvbWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIG1mcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZUhvbWUueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBtZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYWdlMSA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFnZTEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlRleHQgPSBGaWxlQ2xhc3MuZmlsZVRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnV0dG9uX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9QYWdlSG9tZSBwYWdlSG9tZSA9IG5ldyBQYWdlSG9tZSgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuTmF2aWdhdGlvblNlcnZpY2UuTmF2aWdhdGUocGFnZUhvbWUpO1xyXG4gICAgICAgICAgICAvL3BhZ2VIb21lLmJ0bkJlZ2luLklzRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2VIb21lLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ0blVwbG9hZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZVVwbG9hZC54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBGaXJzdF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICBidG5VcGxvYWQuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYnRuUHJvY2Vzc2luZy5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcblxyXG4gICAgICAgICAgICBib3JkZXJJREVGLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYm9yZGVyVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgLy9idG5VcGxvYWRVTUwuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZElERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFNlY29uZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blVwbG9hZC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blByb2Nlc3NpbmcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlcklERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYm9yZGVyVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2J0blVwbG9hZFVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIC8vYnRuVXBsb2FkSURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFRoaXJkX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnRuQ2FuY2VsLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuVXBsb2FkLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuUHJvY2Vzc2luZy5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIHR4dEZpbGUuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVySURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJvcmRlclVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZFVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZElERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ0blByb2Nlc3NpbmdfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHh0RmlsZS5UZXh0ICE9IFN0cmluZy5FbXB0eSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgV2luZG93cy5VSS5YYW1sLk1lZGlhLkltYWdpbmcuQml0bWFwSW1hZ2UgYml0bWFwSURFRiA9IG5ldyBXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2luZy5CaXRtYXBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYml0bWFwSURFRi5VcmlTb3VyY2UgPSBuZXcgVXJpKFwiaW1nL2lkZWYwLnBuZ1wiLCBVcmlLaW5kLlJlbGF0aXZlKTtcclxuICAgICAgICAgICAgICAgIGlkZWZfSnBlZy5Tb3VyY2UgPSBiaXRtYXBJREVGO1xyXG4gICAgICAgICAgICAgICAgaWRlZl9KcGVnLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcblxyXG4gICAgICAgICAgICAgICAgV2luZG93cy5VSS5YYW1sLk1lZGlhLkltYWdpbmcuQml0bWFwSW1hZ2UgYml0bWFwVU1MID0gbmV3IFdpbmRvd3MuVUkuWGFtbC5NZWRpYS5JbWFnaW5nLkJpdG1hcEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBiaXRtYXBVTUwuVXJpU291cmNlID0gbmV3IFVyaShcImltZy91bWwucG5nXCIsIFVyaUtpbmQuUmVsYXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgdW1sX0pwZWcuU291cmNlID0gYml0bWFwVU1MO1xyXG4gICAgICAgICAgICAgICAgdW1sX0pwZWcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlQm94LlNob3coXCLQn9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC30LDQstC10YDRiNC10L3Qvi4g0J/QtdGA0LXQudC00LjRgtC1INCyINC90LDQstC40LPQsNGG0LjQvtC90L3QvtC8INC80LXQvdGOINC90LAg0L3Rg9C20L3Rg9GOINGB0YLRgNCw0L3QuNGG0YMhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyBNZXNzYWdlQm94LlNob3coXCJKU09OINGE0LDQudC7INC+0YLRgdGD0YLRgdGC0LLRg9C10YJcIik7IH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vcHJpdmF0ZSB2b2lkIEJ0blVwbG9hZFVNTF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICAvL3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIC8vcHJpdmF0ZSB2b2lkIEJ0blVwbG9hZElERUZfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYWdlSG9tZSA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFnZUhvbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnV0dG9uX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRmlsZUNsYXNzLmZpbGVUZXh0ID0gXCJ7XFxyXFxuXFxcIm9yZGVySURcXFwiOiAxMjM0NSwgXFxyXFxuXFxcInNob3BwZXJOYW1lXFxcIjogXFxcIkpvaG4gU21pdGhcXFwiLCBcXHJcXG5cXFwic2hvcHBlckVtYWlsXFxcIjogXFxcImpvaG5zbWl0aEBleGFtcGxlLmNvbVxcXCIsXFxyXFxuXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXFwiY29udGVudHNcXFwiOiBcXHJcXG5bXFxyXFxue1xcclxcblxcXCJwcm9kdWN0SURcXFwiOiAzNCwgXFxyXFxuXFxcInByb2R1Y3ROYW1lXFxcIjogXFxcIlN1cGVyV2lkZ2V0XFxcIiwgXFxyXFxuXFxcInF1YW50aXR5XFxcIjogMSBcXHJcXG59LCBcXHJcXG57XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXFwicHJvZHVjdElEXFxcIjogNTYsIFxcclxcblxcXCJwcm9kdWN0TmFtZVxcXCI6IFxcXCJXb25kZXJXaWRnZXRcXFwiLCBcXHJcXG5cXFwicXVhbnRpdHlcXFwiOiAzIFxcclxcbn0gXFxyXFxuXSwgXFxyXFxuXFxcIm9yZGVyQ29tcGxldGVkXFxcIjogdHJ1ZVxcclxcbn1cIjtcclxuICAgICAgICAgICAgLy9QYWdlMSBwYWdlSG9tZSA9IG5ldyBQYWdlMSgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuTmF2aWdhdGlvblNlcnZpY2UuTmF2aWdhdGUocGFnZUhvbWUpO1xyXG4gICAgICAgICAgICAvL2J0bkJlZ2luLklzRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2UxLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uSU87XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBXaW5kb3dzLkZvdW5kYXRpb247XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUHJpbWl0aXZlcztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkRhdGE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5JbnB1dDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk1lZGlhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTmF2aWdhdGlvbjtcclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFnZVVwbG9hZCA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFnZVVwbG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHZvaWQgT25GaWxlT3BlbmVkKG9iamVjdCBzZW5kZXIsIENTSFRNTDUuRXh0ZW5zaW9ucy5GaWxlT3BlbkRpYWxvZy5GaWxlT3BlbmVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGaWxlQ2xhc3MuZmlsZVRleHQgPSBlLlRleHQ7XHJcbiAgICAgICAgICAgIE1lc3NhZ2VCb3guU2hvdyhcItCk0LDQudC7INC30LDQs9GA0YPQttC10L1cIik7XHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZTEueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBmcmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBCdG5DYW5jZWxfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIGZyYW1lLk5hdmlnYXRlKG5ldyBVcmkoXCJQYWdlMS54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5Gb3VuZGF0aW9uO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWw7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlByaW1pdGl2ZXM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5EYXRhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuSW5wdXQ7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5NZWRpYTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk5hdmlnYXRpb247XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNlY29uZFBhZ2UgOiBQYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFNlY29uZFBhZ2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbiNpZiBTTE1JR1JBVElPTlxyXG51c2luZyBTeXN0ZW0uV2luZG93cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuQ29udHJvbHM7XHJcbiNlbHNlXHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG4jZW5kaWZcclxuXHJcbm5hbWVzcGFjZSBDU0hUTUw1LkV4dGVuc2lvbnMuRmlsZU9wZW5EaWFsb2dcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2cgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGV2ZW50IEV2ZW50SGFuZGxlcjxGaWxlT3BlbmVkRXZlbnRBcmdzPiBGaWxlT3BlbmVkO1xyXG5cclxuICAgICAgICBwcml2YXRlIFJlc3VsdEtpbmQgX3Jlc3VsdEtpbmQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgX3Jlc3VsdEtpbmRTdHI7XHJcbiAgICAgICAgcHVibGljIFJlc3VsdEtpbmQgUmVzdWx0S2luZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9yZXN1bHRLaW5kOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0S2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdEtpbmRTdHIgPSB2YWx1ZS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlbkRpYWxvZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZXN1bHRLaW5kID0gRmlsZU9wZW5EaWFsb2cuUmVzdWx0S2luZC5UZXh0OyAvL05vdGU6IHRoaXMgaXMgdG8gc2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eS5cclxuXHJcbiAgICAgICAgICAgIENTaGFycFhhbWxGb3JIdG1sNS5Eb21NYW5hZ2VtZW50LlNldEh0bWxSZXByZXNlbnRhdGlvbih0aGlzLFxyXG4gICAgICAgICAgICAgICAgXCI8ZGl2IHN0eWxlIHN0eWxlPSdtYXJnaW46IDE1cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDogIzFiYmM5YyB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Jz5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCB0eXBlPSdmaWxlJyBhY2NlcHQ9Jy5qc29uLCAudHh0JyBpZD0naW5wdXRfX2ZpbGUnIHN0eWxlPSdtYXJnaW46IDY1cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTsgdmlzaWJpbGl0eTogaGlkZGVuOycgbXVsdGlwbGU+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8bGFiZWwgZm9yPSdpbnB1dF9fZmlsZScgc3R5bGU9J3dpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDI1MHB4OyBoZWlnaHQ6IDYwcHg7IGJhY2tncm91bmQ6ICNGOURFRjI7IGRpc3BsYXk6IC13ZWJraXQtYm94OyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1wiICtcclxuICAgICAgICAgICAgICAgIFwiZGlzcGxheTogLW1zLWZsZXhib3g7IGRpc3BsYXk6IGZsZXg7ICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOyAtbXMtZmxleC1hbGlnbjogY2VudGVyOyBtYXJnaW46IDAgYXV0bzsgZm9udC1zaXplOiAxLjEyNXJlbTsgZm9udC13ZWlnaHQ6IDcwMDtcIiArXHJcbiAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXM6IDVweDsgY3Vyc29yOiBwb2ludGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyAtd2Via2l0LWJveC1wYWNrOiBzdGFydDsgLW1zLWZsZXgtcGFjazogc3RhcnQ7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBjb2xvcjogIzAwMDsnPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2hlaWdodDogNjBweDsgd2lkdGg6IDYwcHg7IG1hcmdpbiAtIHJpZ2h0OiAxNXB4OyBkaXNwbGF5OiAtd2Via2l0IC0gYm94OyBkaXNwbGF5OiAtbXMgLSBmbGV4Ym94OyBkaXNwbGF5OiBmbGV4OyBcIiArXHJcbiAgICAgICAgICAgICAgICBcIi13ZWJraXQgLSBib3ggLSBhbGlnbjogY2VudGVyOyAtbXMgLSBmbGV4IC0gYWxpZ246IGNlbnRlcjsgYWxpZ24gLSBpdGVtczogY2VudGVyOyAtd2Via2l0IC0gYm94IC0gcGFjazogY2VudGVyOyAtbXMgLSBmbGV4IC0gcGFjazogY2VudGVyOyBcIiArXHJcbiAgICAgICAgICAgICAgICBcImp1c3RpZnkgLSBjb250ZW50OiBjZW50ZXI7IGJvcmRlciAtIHJpZ2h0OiAxcHggc29saWQgI2ZmZjsnPjxpbWcgc3JjPScuL2FwcC1jc2h0bWw1L3Jlcy9DU2h0bWwvaW1nL2Rvd25sb2FkLnBuZycgXCIgK1xyXG4gICAgICAgICAgICAgICAgXCJhbHQ9J9CS0YvQsdGA0LDRgtGMINGE0LDQudC7JyB3aWR0aD0nNjAnPjwvc3Bhbj5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuIHN0eWxlPSdsaW5lLWhlaWdodDogMTttYXJnaW4tdG9wOiAxcHg7Jz7QktGL0LHQtdGA0LjRgtC1INGE0LDQudC7PC9zcGFuPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPC9sYWJlbD5cIitcclxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2lucHV0X193cmFwcGVyJz5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8aW5wdXQgdHlwZSA9ICdmaWxlJyAgaWQgPSAnaW5wdXRfX2ZpbGUnIGNsYXNzPSdpbnB1dCBpbnB1dF9fZmlsZScgbXVsdGlwbGU+XCIgK1xyXG4gICAgICAgICAgICAvLyAgIFwiPGxhYmVsIGZvcj0naW5wdXRfX2ZpbGUnIGNsYXNzPSdpbnB1dF9fZmlsZS1idXR0b24nPlwiICtcclxuICAgICAgICAgICAgLy8gICAgICBcIjxzcGFuIGNsYXNzPSdpbnB1dF9fZmlsZS1idXR0b24tdGV4dCc+0JLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQuzwvc3Bhbj5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8L2xhYmVsPlwiICtcclxuICAgICAgICAgICAgLy9cIjwvZGl2PlwiXHJcblxyXG4gICAgICAgICAgICB0aGlzLkxvYWRlZCArPSBDb250cm9sRm9yRGlzcGxheWluZ0FGaWxlT3BlbkRpYWxvZ19Mb2FkZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIENvbnRyb2xGb3JEaXNwbGF5aW5nQUZpbGVPcGVuRGlhbG9nX0xvYWRlZChvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBcImlucHV0XCIgZWxlbWVudDpcclxuICAgICAgICAgICAgdmFyIGlucHV0RWxlbWVudCA9IENTSFRNTDUuSW50ZXJvcC5HZXREaXYodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBBY3Rpb248b2JqZWN0PiBvbkZpbGVPcGVuZWQgPSAocmVzdWx0KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5GaWxlT3BlbmVkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GaWxlT3BlbmVkKHRoaXMsIG5ldyBGaWxlT3BlbmVkRXZlbnRBcmdzKHJlc3VsdCwgdGhpcy5SZXN1bHRLaW5kKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHRLaW5kU3RyID0gX3Jlc3VsdEtpbmRTdHI7IC8vIE5vdGU6IHRoaXMgaXMgaGVyZSB0byBcImNhcHR1cmVcIiB0aGUgdmFyaWFibGUgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBpbnNpZGUgdGhlIFwiYWRkRXZlbnRMaXN0ZW5lclwiIGJlbG93LlxyXG5cclxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIFwiRmlsdGVyXCIgcHJvcGVydHkgdG8gbGltaXQgdGhlIGNob2ljZSBvZiB0aGUgdXNlciB0byB0aGUgc3BlY2lmaWVkIGV4dGVuc2lvbnM6XHJcbiAgICAgICAgICAgIFNldEZpbHRlcih0aGlzLkZpbHRlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlIFwiY2hhbmdlXCIgcHJvcGVydHkgb2YgdGhlIFwiaW5wdXRcIiBlbGVtZW50LCBhbmQgY2FsbCB0aGUgY2FsbGJhY2s6XHJcbiAgICAgICAgICAgIENTSFRNTDUuSW50ZXJvcC5FeGVjdXRlSmF2YVNjcmlwdChAXCJcclxuICAgICAgICAgICAgICAgICQwLmFkZEV2ZW50TGlzdGVuZXIoXCJcImNoYW5nZVwiXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZ1bGxQYXRoID0gJDAudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bGxQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gKGZ1bGxQYXRoLmluZGV4T2YoJ1xcXFwnKSA+PSAwID8gZnVsbFBhdGgubGFzdEluZGV4T2YoJ1xcXFwnKSA6IGZ1bGxQYXRoLmxhc3RJbmRleE9mKCcvJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IGZ1bGxQYXRoLnN1YnN0cmluZyhzdGFydEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVuYW1lLmluZGV4T2YoJ1xcXFwnKSA9PT0gMCB8fCBmaWxlbmFtZS5pbmRleE9mKCcvJykgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZmlsZW5hbWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gJDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKGZpbGUudHlwZSA9PSAndGV4dC9wbGFpbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEtpbmQgPSAkMztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0S2luZCA9PSAnRGF0YVVSTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNSdW5uaW5nSW5UaGVTaW11bGF0b3IgPSAkMjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1wiLCBpbnB1dEVsZW1lbnQsIG9uRmlsZU9wZW5lZCwgQ1NIVE1MNS5JbnRlcm9wLklzUnVubmluZ0luVGhlU2ltdWxhdG9yLCByZXN1bHRLaW5kU3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgU2V0RmlsdGVyKHN0cmluZyBmaWx0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHJlZmVyZW5jZSB0byB0aGUgXCJpbnB1dFwiIGVsZW1lbnQ6XHJcbiAgICAgICAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSBDU0hUTUw1LkludGVyb3AuR2V0RGl2KHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgZmlsdGVyIGxpc3QgdG8gY29udmVydCB0aGUgc3ludGF4IGZyb20gWEFNTCB0byBIVE1MNTpcclxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBzeW50YXggaW4gU2lsdmVybGlnaHQ6IEltYWdlIEZpbGVzICgqLmJtcCwgKi5qcGcpfCouYm1wOyouanBnfEFsbCBGaWxlcyAoKi4qKXwqLipcclxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBzeW50YXggaW4gSFRNTDU6IC5naWYsIC5qcGcsIC5wbmcsIC5kb2NcclxuICAgICAgICAgICAgc3RyaW5nW10gc3BsaXR0ZWQgPSBmaWx0ZXIuU3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgTGlzdDxzdHJpbmc+IGl0ZW1zS2VwdCA9IG5ldyBMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0dGVkLkxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0tlcHQuQWRkKHNwbGl0dGVkWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAxOyBpIDwgc3BsaXR0ZWQuTGVuZ3RoOyBpICs9IDIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNLZXB0LkFkZChzcGxpdHRlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyaW5nIGZpbHRlcnNJbkh0bWw1ID0gU3RyaW5nLkpvaW4oXCIsXCIsIGl0ZW1zS2VwdCkuUmVwbGFjZShcIipcIiwgXCJcIikuUmVwbGFjZShcIjtcIiwgXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlcjpcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKGZpbHRlcnNJbkh0bWw1KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIiQwLmFjY2VwdCA9ICQxXCIsIGlucHV0RWxlbWVudCwgZmlsdGVyc0luSHRtbDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIiQwLmFjY2VwdCA9IFwiXCJcIlwiXCIsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEZpbHRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIChzdHJpbmcpR2V0VmFsdWUoRmlsdGVyUHJvcGVydHkpOyB9XHJcbiAgICAgICAgICAgIHNldCB7IFNldFZhbHVlKEZpbHRlclByb3BlcnR5LCB2YWx1ZSk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZXBlbmRlbmN5UHJvcGVydHkgRmlsdGVyUHJvcGVydHkgPVxyXG4gICAgICAgICAgICBEZXBlbmRlbmN5UHJvcGVydHkuUmVnaXN0ZXIoXCJGaWx0ZXJcIiwgdHlwZW9mKHN0cmluZyksIHR5cGVvZihDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKSwgbmV3IFByb3BlcnR5TWV0YWRhdGEoXCJcIiwgRmlsdGVyX0NoYW5nZWQpKTtcclxuXHJcbiAgICAgICAgc3RhdGljIHZvaWQgRmlsdGVyX0NoYW5nZWQoRGVwZW5kZW5jeU9iamVjdCBkLCBEZXBlbmRlbmN5UHJvcGVydHlDaGFuZ2VkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbCA9IChDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKWQ7XHJcbiAgICAgICAgICAgIGlmIChDU2hhcnBYYW1sRm9ySHRtbDUuRG9tTWFuYWdlbWVudC5Jc0NvbnRyb2xJblZpc3VhbFRyZWUoY29udHJvbCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuU2V0RmlsdGVyKChlLk5ld1ZhbHVlID8/IFwiXCIpLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaWxlT3BlbmVkRXZlbnRBcmdzIDogRXZlbnRBcmdzXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIlRleHRcIlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW09ic29sZXRlXVxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgUGxhaW5UZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIlRleHRcIi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgVGV4dDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIkRhdGFVUkxcIi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgRGF0YVVSTDtcclxuXHJcbiAgICAgICAgcHVibGljIEZpbGVPcGVuZWRFdmVudEFyZ3Mob2JqZWN0IHJlc3VsdCwgUmVzdWx0S2luZCByZXN1bHRLaW5kKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdEtpbmQgPT0gUmVzdWx0S2luZC5UZXh0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRleHQgPSB0aGlzLlBsYWluVGV4dENvbnRlbnQgPSAocmVzdWx0ID8/IFwiXCIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0S2luZCA9PSBSZXN1bHRLaW5kLkRhdGFVUkwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGF0YVVSTCA9IChyZXN1bHQgPz8gXCJcIikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RTdXBwb3J0ZWRFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBSZXN1bHRLaW5kXHJcbiAgICB7XHJcbiAgICAgICAgVGV4dCwgRGF0YVVSTFxyXG4gICAgfVxyXG59XHJcbiJdCn0K
