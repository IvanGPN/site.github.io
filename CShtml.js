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


                var ResourceDictionary_3605060ccbd2498492a1165769f23ae9 = new Bridge.global.Windows.UI.Xaml.ResourceDictionary();
                this.Resources = ResourceDictionary_3605060ccbd2498492a1165769f23ae9;

                this.Resources = ResourceDictionary_3605060ccbd2498492a1165769f23ae9;







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



                var Grid_81470f89be734a92a9054492216bad4f = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_9a987fa901ae42b38dd9278d07695c30 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_9a987fa901ae42b38dd9278d07695c30.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_9a987fa901ae42b38dd9278d07695c30.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_f6768d5fe22c4e9fb034a0419f3a40a7 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_f6768d5fe22c4e9fb034a0419f3a40a7.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_f6768d5fe22c4e9fb034a0419f3a40a7.Offset = 0.0;

                var GradientStop_4bba00596cde4c6c8f8a16ffe88dd41e = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_4bba00596cde4c6c8f8a16ffe88dd41e.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_4bba00596cde4c6c8f8a16ffe88dd41e.Offset = 1.0;

                LinearGradientBrush_9a987fa901ae42b38dd9278d07695c30.GradientStops.add(GradientStop_f6768d5fe22c4e9fb034a0419f3a40a7);
                LinearGradientBrush_9a987fa901ae42b38dd9278d07695c30.GradientStops.add(GradientStop_4bba00596cde4c6c8f8a16ffe88dd41e);


                Grid_81470f89be734a92a9054492216bad4f.Background = LinearGradientBrush_9a987fa901ae42b38dd9278d07695c30;

                var RowDefinition_3a2e277a13874fcd83324fa5d323c721 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_3a2e277a13874fcd83324fa5d323c721.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_289b31923265416f95bf7760a7b334d4 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_289b31923265416f95bf7760a7b334d4.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_abd9c1826a78424ca08fffb978eb50dd = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_abd9c1826a78424ca08fffb978eb50dd.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_81470f89be734a92a9054492216bad4f.RowDefinitions.add(RowDefinition_3a2e277a13874fcd83324fa5d323c721);
                Grid_81470f89be734a92a9054492216bad4f.RowDefinitions.add(RowDefinition_289b31923265416f95bf7760a7b334d4);
                Grid_81470f89be734a92a9054492216bad4f.RowDefinitions.add(RowDefinition_abd9c1826a78424ca08fffb978eb50dd);

                var ColumnDefinition_bdc883d4376e4c95913fa417cfc57f48 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();
                ColumnDefinition_bdc883d4376e4c95913fa417cfc57f48.Width = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var ColumnDefinition_3c0b1e88ed014e4091b6780abb10b62d = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_81470f89be734a92a9054492216bad4f.ColumnDefinitions.add(ColumnDefinition_bdc883d4376e4c95913fa417cfc57f48);
                Grid_81470f89be734a92a9054492216bad4f.ColumnDefinitions.add(ColumnDefinition_3c0b1e88ed014e4091b6780abb10b62d);

                var Border_644de591965e442c8e8b4dca5f8487d1 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("elementForList", Border_644de591965e442c8e8b4dca5f8487d1);
                Border_644de591965e442c8e8b4dca5f8487d1.Name = "elementForList";
                Border_644de591965e442c8e8b4dca5f8487d1.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_644de591965e442c8e8b4dca5f8487d1, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_644de591965e442c8e8b4dca5f8487d1, 3);
                Border_644de591965e442c8e8b4dca5f8487d1.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_644de591965e442c8e8b4dca5f8487d1.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_644de591965e442c8e8b4dca5f8487d1.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var Grid_0f14a42cc6954701af7ab54717944272 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_e094bb3c4d01400daf3fd374f933c16a = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_e094bb3c4d01400daf3fd374f933c16a.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_e094bb3c4d01400daf3fd374f933c16a.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_8f5930a82fb2479484f399f0400705bf = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_8f5930a82fb2479484f399f0400705bf.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_8f5930a82fb2479484f399f0400705bf.Offset = 0.0;

                var GradientStop_49aa5fa1acdf43538a44aba3650b9262 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_49aa5fa1acdf43538a44aba3650b9262.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_49aa5fa1acdf43538a44aba3650b9262.Offset = 1.0;

                LinearGradientBrush_e094bb3c4d01400daf3fd374f933c16a.GradientStops.add(GradientStop_8f5930a82fb2479484f399f0400705bf);
                LinearGradientBrush_e094bb3c4d01400daf3fd374f933c16a.GradientStops.add(GradientStop_49aa5fa1acdf43538a44aba3650b9262);


                Grid_0f14a42cc6954701af7ab54717944272.Background = LinearGradientBrush_e094bb3c4d01400daf3fd374f933c16a;

                var RowDefinition_00497f8d94444dada0b0d9b1576caaa4 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_5a4a34db8e93484097c0f9155b8bfcea = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_5a4a34db8e93484097c0f9155b8bfcea.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_a414cbbad56f452f81bca7525ca98419 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_a414cbbad56f452f81bca7525ca98419.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_974bd502ea7a4432871d159345843279 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_974bd502ea7a4432871d159345843279.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_7949adda3a9d427dbb305b13c81a61e7 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_0f14a42cc6954701af7ab54717944272.RowDefinitions.add(RowDefinition_00497f8d94444dada0b0d9b1576caaa4);
                Grid_0f14a42cc6954701af7ab54717944272.RowDefinitions.add(RowDefinition_5a4a34db8e93484097c0f9155b8bfcea);
                Grid_0f14a42cc6954701af7ab54717944272.RowDefinitions.add(RowDefinition_a414cbbad56f452f81bca7525ca98419);
                Grid_0f14a42cc6954701af7ab54717944272.RowDefinitions.add(RowDefinition_974bd502ea7a4432871d159345843279);
                Grid_0f14a42cc6954701af7ab54717944272.RowDefinitions.add(RowDefinition_7949adda3a9d427dbb305b13c81a61e7);

                var Button_e85ec9a0bf9246fea59fd8741761bbf3 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_e85ec9a0bf9246fea59fd8741761bbf3, 1);
                Button_e85ec9a0bf9246fea59fd8741761bbf3.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_e85ec9a0bf9246fea59fd8741761bbf3.Content = "JSON";
                Button_e85ec9a0bf9246fea59fd8741761bbf3.FontSize = 20.0;
                Button_e85ec9a0bf9246fea59fd8741761bbf3.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_e85ec9a0bf9246fea59fd8741761bbf3.addClick(Bridge.fn.cacheBind(this, this.First_Click));

                var Button_5bfca1a4b81c4a4abf0990838776dcd1 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_5bfca1a4b81c4a4abf0990838776dcd1, 2);
                Button_5bfca1a4b81c4a4abf0990838776dcd1.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_5bfca1a4b81c4a4abf0990838776dcd1.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 IDEF0";
                Button_5bfca1a4b81c4a4abf0990838776dcd1.FontSize = 20.0;
                Button_5bfca1a4b81c4a4abf0990838776dcd1.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_5bfca1a4b81c4a4abf0990838776dcd1.addClick(Bridge.fn.cacheBind(this, this.Second_Click));

                var Button_ace001c6b4214a469787d60d8a7dc4b9 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_ace001c6b4214a469787d60d8a7dc4b9, 3);
                Button_ace001c6b4214a469787d60d8a7dc4b9.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_ace001c6b4214a469787d60d8a7dc4b9.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 UML";
                Button_ace001c6b4214a469787d60d8a7dc4b9.FontSize = 20.0;
                Button_ace001c6b4214a469787d60d8a7dc4b9.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_ace001c6b4214a469787d60d8a7dc4b9.addClick(Bridge.fn.cacheBind(this, this.Third_Click));

                Grid_0f14a42cc6954701af7ab54717944272.Children.add(Button_e85ec9a0bf9246fea59fd8741761bbf3);
                Grid_0f14a42cc6954701af7ab54717944272.Children.add(Button_5bfca1a4b81c4a4abf0990838776dcd1);
                Grid_0f14a42cc6954701af7ab54717944272.Children.add(Button_ace001c6b4214a469787d60d8a7dc4b9);


                Border_644de591965e442c8e8b4dca5f8487d1.Child = Grid_0f14a42cc6954701af7ab54717944272;


                var Border_4f62257d90dc404185d46414e7159c2d = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_4f62257d90dc404185d46414e7159c2d);
                Border_4f62257d90dc404185d46414e7159c2d.Name = "element";
                Border_4f62257d90dc404185d46414e7159c2d.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_4f62257d90dc404185d46414e7159c2d, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_4f62257d90dc404185d46414e7159c2d, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_4f62257d90dc404185d46414e7159c2d, 1);
                Border_4f62257d90dc404185d46414e7159c2d.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_4f62257d90dc404185d46414e7159c2d.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_4f62257d90dc404185d46414e7159c2d.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_1216be9eb9bf4812912575ad764850f6 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_1216be9eb9bf4812912575ad764850f6.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_1216be9eb9bf4812912575ad764850f6.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_619412034ef6449c82b8416fa81a0467 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_619412034ef6449c82b8416fa81a0467.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_619412034ef6449c82b8416fa81a0467.Offset = 0.0;

                var GradientStop_1c2dd86d825746a8b0d931b6d957bfb5 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_1c2dd86d825746a8b0d931b6d957bfb5.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_1c2dd86d825746a8b0d931b6d957bfb5.Offset = 1.0;

                LinearGradientBrush_1216be9eb9bf4812912575ad764850f6.GradientStops.add(GradientStop_619412034ef6449c82b8416fa81a0467);
                LinearGradientBrush_1216be9eb9bf4812912575ad764850f6.GradientStops.add(GradientStop_1c2dd86d825746a8b0d931b6d957bfb5);


                Border_4f62257d90dc404185d46414e7159c2d.Background = LinearGradientBrush_1216be9eb9bf4812912575ad764850f6;

                var Grid_fd0d45bf0378440f9b03477f657550b9 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutGrid", Grid_fd0d45bf0378440f9b03477f657550b9);
                Grid_fd0d45bf0378440f9b03477f657550b9.Name = "LayoutGrid";
                var LinearGradientBrush_3144b78f5ef34f838d51f988315823ca = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_3144b78f5ef34f838d51f988315823ca.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_3144b78f5ef34f838d51f988315823ca.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_9c8a4bad326f4ba89e7df9aa3d32e2b5 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_9c8a4bad326f4ba89e7df9aa3d32e2b5.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_9c8a4bad326f4ba89e7df9aa3d32e2b5.Offset = 0.0;

                var GradientStop_a7fb1aaaece84a9dad4bdc6f11fad94f = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_a7fb1aaaece84a9dad4bdc6f11fad94f.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_a7fb1aaaece84a9dad4bdc6f11fad94f.Offset = 1.0;

                LinearGradientBrush_3144b78f5ef34f838d51f988315823ca.GradientStops.add(GradientStop_9c8a4bad326f4ba89e7df9aa3d32e2b5);
                LinearGradientBrush_3144b78f5ef34f838d51f988315823ca.GradientStops.add(GradientStop_a7fb1aaaece84a9dad4bdc6f11fad94f);


                Grid_fd0d45bf0378440f9b03477f657550b9.Background = LinearGradientBrush_3144b78f5ef34f838d51f988315823ca;

                var RowDefinition_1723c6a7964e43a6a7a6daf5bbb46fc1 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_1723c6a7964e43a6a7a6daf5bbb46fc1.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_3c31214899664a1d8c63d68317faaac9 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_3c31214899664a1d8c63d68317faaac9.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_951deadc5a7748b391455870f7ea86e1 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_951deadc5a7748b391455870f7ea86e1.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_fd0d45bf0378440f9b03477f657550b9.RowDefinitions.add(RowDefinition_1723c6a7964e43a6a7a6daf5bbb46fc1);
                Grid_fd0d45bf0378440f9b03477f657550b9.RowDefinitions.add(RowDefinition_3c31214899664a1d8c63d68317faaac9);
                Grid_fd0d45bf0378440f9b03477f657550b9.RowDefinitions.add(RowDefinition_951deadc5a7748b391455870f7ea86e1);

                var ColumnDefinition_0d8e6b5be67c4b28a0c09d51f037f625 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_4c8d2bc96e0b411b89cfffceb08b3c3d = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_fd0d45bf0378440f9b03477f657550b9.ColumnDefinitions.add(ColumnDefinition_0d8e6b5be67c4b28a0c09d51f037f625);
                Grid_fd0d45bf0378440f9b03477f657550b9.ColumnDefinitions.add(ColumnDefinition_4c8d2bc96e0b411b89cfffceb08b3c3d);

                var Button_a9fb4d05b34d477ca30b19fb47c15f4b = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnCancel", Button_a9fb4d05b34d477ca30b19fb47c15f4b);
                Button_a9fb4d05b34d477ca30b19fb47c15f4b.Name = "btnCancel";
                Button_a9fb4d05b34d477ca30b19fb47c15f4b.Content = "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_a9fb4d05b34d477ca30b19fb47c15f4b, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_a9fb4d05b34d477ca30b19fb47c15f4b, 2);
                Button_a9fb4d05b34d477ca30b19fb47c15f4b.Width = 280.0;
                Button_a9fb4d05b34d477ca30b19fb47c15f4b.Height = 50.0;
                Button_a9fb4d05b34d477ca30b19fb47c15f4b.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_a9fb4d05b34d477ca30b19fb47c15f4b.FontSize = 25.0;
                Button_a9fb4d05b34d477ca30b19fb47c15f4b.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_a9fb4d05b34d477ca30b19fb47c15f4b.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_a9fb4d05b34d477ca30b19fb47c15f4b.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                var ControlTemplate_7fd50f0e7526400995627d3a57a72826 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_7fd50f0e7526400995627d3a57a72826.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_7fd50f0e7526400995627d3a57a72826.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_7fd50f0e7526400995627d3a57a72826));

                Button_a9fb4d05b34d477ca30b19fb47c15f4b.Template = ControlTemplate_7fd50f0e7526400995627d3a57a72826;


                var Button_932743118e074207b65c687b7a3d22ce = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnUpload", Button_932743118e074207b65c687b7a3d22ce);
                Button_932743118e074207b65c687b7a3d22ce.Name = "btnUpload";
                Button_932743118e074207b65c687b7a3d22ce.Content = "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c JSON \u0444\u0430\u0439\u043b";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_932743118e074207b65c687b7a3d22ce, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_932743118e074207b65c687b7a3d22ce, 1);
                Button_932743118e074207b65c687b7a3d22ce.Width = 280.0;
                Button_932743118e074207b65c687b7a3d22ce.Height = 50.0;
                Button_932743118e074207b65c687b7a3d22ce.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_932743118e074207b65c687b7a3d22ce.FontSize = 25.0;
                Button_932743118e074207b65c687b7a3d22ce.addClick(Bridge.fn.cacheBind(this, this.BtnUpload_Click));
                Button_932743118e074207b65c687b7a3d22ce.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_932743118e074207b65c687b7a3d22ce.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_932743118e074207b65c687b7a3d22ce.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_932743118e074207b65c687b7a3d22ce.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                var ControlTemplate_806b4ea56a6f45f7bdd034e0b7d08ce0 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_806b4ea56a6f45f7bdd034e0b7d08ce0.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_806b4ea56a6f45f7bdd034e0b7d08ce0.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_806b4ea56a6f45f7bdd034e0b7d08ce0));

                Button_932743118e074207b65c687b7a3d22ce.Template = ControlTemplate_806b4ea56a6f45f7bdd034e0b7d08ce0;


                var Button_88df97a1a55544e9ae6bb83371a67be8 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnProcessing", Button_88df97a1a55544e9ae6bb83371a67be8);
                Button_88df97a1a55544e9ae6bb83371a67be8.Name = "btnProcessing";
                Button_88df97a1a55544e9ae6bb83371a67be8.Content = "\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0443";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_88df97a1a55544e9ae6bb83371a67be8, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_88df97a1a55544e9ae6bb83371a67be8, 1);
                Button_88df97a1a55544e9ae6bb83371a67be8.Width = 280.0;
                Button_88df97a1a55544e9ae6bb83371a67be8.Height = 50.0;
                Button_88df97a1a55544e9ae6bb83371a67be8.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_88df97a1a55544e9ae6bb83371a67be8.FontSize = 25.0;
                Button_88df97a1a55544e9ae6bb83371a67be8.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_88df97a1a55544e9ae6bb83371a67be8.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_88df97a1a55544e9ae6bb83371a67be8.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_88df97a1a55544e9ae6bb83371a67be8.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_88df97a1a55544e9ae6bb83371a67be8.addClick(Bridge.fn.cacheBind(this, this.BtnProcessing_Click));
                var ControlTemplate_680dfe4ca114460ca136a0de2a1b86f2 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_680dfe4ca114460ca136a0de2a1b86f2.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_680dfe4ca114460ca136a0de2a1b86f2.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_680dfe4ca114460ca136a0de2a1b86f2));

                Button_88df97a1a55544e9ae6bb83371a67be8.Template = ControlTemplate_680dfe4ca114460ca136a0de2a1b86f2;


                var TextBox_7f5c0d357f7e4651adca45f272d7cf9c = new Bridge.global.Windows.UI.Xaml.Controls.TextBox();
                this.RegisterName$1("txtFile", TextBox_7f5c0d357f7e4651adca45f272d7cf9c);
                TextBox_7f5c0d357f7e4651adca45f272d7cf9c.Name = "txtFile";
                TextBox_7f5c0d357f7e4651adca45f272d7cf9c.TextWrapping = Bridge.global.Windows.UI.Xaml.TextWrapping.Wrap;
                TextBox_7f5c0d357f7e4651adca45f272d7cf9c.Text = "";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(TextBox_7f5c0d357f7e4651adca45f272d7cf9c, 1);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(TextBox_7f5c0d357f7e4651adca45f272d7cf9c, 2);
                TextBox_7f5c0d357f7e4651adca45f272d7cf9c.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(10, -20, 10, -20);
                TextBox_7f5c0d357f7e4651adca45f272d7cf9c.FontSize = 20.0;

                var Border_00dd0d76b7944b79a819b837ee08b26c = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderIDEF", Border_00dd0d76b7944b79a819b837ee08b26c);
                Border_00dd0d76b7944b79a819b837ee08b26c.Name = "borderIDEF";
                Border_00dd0d76b7944b79a819b837ee08b26c.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_00dd0d76b7944b79a819b837ee08b26c.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_00dd0d76b7944b79a819b837ee08b26c, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_00dd0d76b7944b79a819b837ee08b26c, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_00dd0d76b7944b79a819b837ee08b26c, 2);
                Border_00dd0d76b7944b79a819b837ee08b26c.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_00dd0d76b7944b79a819b837ee08b26c.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_00dd0d76b7944b79a819b837ee08b26c.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                Border_00dd0d76b7944b79a819b837ee08b26c.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));
                var Image_00d1e8671a7440c086131ca459647c64 = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                this.RegisterName$1("idef_Jpeg", Image_00d1e8671a7440c086131ca459647c64);
                Image_00d1e8671a7440c086131ca459647c64.Name = "idef_Jpeg";
                Image_00d1e8671a7440c086131ca459647c64.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Fill;
                Image_00d1e8671a7440c086131ca459647c64.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;

                Border_00dd0d76b7944b79a819b837ee08b26c.Child = Image_00d1e8671a7440c086131ca459647c64;


                var Border_22ce2c7e88d94503a40b4fc976ca5ad5 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderUML", Border_22ce2c7e88d94503a40b4fc976ca5ad5);
                Border_22ce2c7e88d94503a40b4fc976ca5ad5.Name = "borderUML";
                Border_22ce2c7e88d94503a40b4fc976ca5ad5.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_22ce2c7e88d94503a40b4fc976ca5ad5.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_22ce2c7e88d94503a40b4fc976ca5ad5, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_22ce2c7e88d94503a40b4fc976ca5ad5, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_22ce2c7e88d94503a40b4fc976ca5ad5, 2);
                Border_22ce2c7e88d94503a40b4fc976ca5ad5.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_22ce2c7e88d94503a40b4fc976ca5ad5.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_22ce2c7e88d94503a40b4fc976ca5ad5.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                Border_22ce2c7e88d94503a40b4fc976ca5ad5.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));
                var Image_5d1316d915d4458192da11b852e32ea1 = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                this.RegisterName$1("uml_Jpeg", Image_5d1316d915d4458192da11b852e32ea1);
                Image_5d1316d915d4458192da11b852e32ea1.Name = "uml_Jpeg";
                Image_5d1316d915d4458192da11b852e32ea1.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Fill;
                Image_5d1316d915d4458192da11b852e32ea1.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;

                Border_22ce2c7e88d94503a40b4fc976ca5ad5.Child = Image_5d1316d915d4458192da11b852e32ea1;


                Grid_fd0d45bf0378440f9b03477f657550b9.Children.add(Button_a9fb4d05b34d477ca30b19fb47c15f4b);
                Grid_fd0d45bf0378440f9b03477f657550b9.Children.add(Button_932743118e074207b65c687b7a3d22ce);
                Grid_fd0d45bf0378440f9b03477f657550b9.Children.add(Button_88df97a1a55544e9ae6bb83371a67be8);
                Grid_fd0d45bf0378440f9b03477f657550b9.Children.add(TextBox_7f5c0d357f7e4651adca45f272d7cf9c);
                Grid_fd0d45bf0378440f9b03477f657550b9.Children.add(Border_00dd0d76b7944b79a819b837ee08b26c);
                Grid_fd0d45bf0378440f9b03477f657550b9.Children.add(Border_22ce2c7e88d94503a40b4fc976ca5ad5);


                Border_4f62257d90dc404185d46414e7159c2d.Child = Grid_fd0d45bf0378440f9b03477f657550b9;


                Grid_81470f89be734a92a9054492216bad4f.Children.add(Border_644de591965e442c8e8b4dca5f8487d1);
                Grid_81470f89be734a92a9054492216bad4f.Children.add(Border_4f62257d90dc404185d46414e7159c2d);


                this.Content = Grid_81470f89be734a92a9054492216bad4f;



                this.elementForList = Border_644de591965e442c8e8b4dca5f8487d1;
                this.btnCancel = Button_a9fb4d05b34d477ca30b19fb47c15f4b;
                this.btnUpload = Button_932743118e074207b65c687b7a3d22ce;
                this.btnProcessing = Button_88df97a1a55544e9ae6bb83371a67be8;
                this.txtFile = TextBox_7f5c0d357f7e4651adca45f272d7cf9c;
                this.idef_Jpeg = Image_00d1e8671a7440c086131ca459647c64;
                this.borderIDEF = Border_00dd0d76b7944b79a819b837ee08b26c;
                this.uml_Jpeg = Image_5d1316d915d4458192da11b852e32ea1;
                this.borderUML = Border_22ce2c7e88d94503a40b4fc976ca5ad5;
                this.LayoutGrid = Grid_fd0d45bf0378440f9b03477f657550b9;
                this.element = Border_4f62257d90dc404185d46414e7159c2d;



            },
            accessVisualStateProperty_b4bab784987c47e68836e0515f197985: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_b4bab784987c47e68836e0515f197985: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_b4bab784987c47e68836e0515f197985: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_b4bab784987c47e68836e0515f197985: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_b4bab784987c47e68836e0515f197985: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_ef7631ee720f4adfa230de950c705ca4: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_ef7631ee720f4adfa230de950c705ca4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_ef7631ee720f4adfa230de950c705ca4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_ef7631ee720f4adfa230de950c705ca4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_ef7631ee720f4adfa230de950c705ca4: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_7fd50f0e7526400995627d3a57a72826: function (templateOwner) {
                var templateInstance_a308b8a4cd9047da855838b87efbacc2 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_a308b8a4cd9047da855838b87efbacc2.TemplateOwner = templateOwner;
                var Border_c85de2c5eae74320905c21f40d7a7839 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_c85de2c5eae74320905c21f40d7a7839);
                Border_c85de2c5eae74320905c21f40d7a7839.Name = "OuterBorder";
                Border_c85de2c5eae74320905c21f40d7a7839.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_e4a8304fbd364554a31071645e814ac8 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_e4a8304fbd364554a31071645e814ac8);
                VisualStateGroup_e4a8304fbd364554a31071645e814ac8.Name = "CommonStates";
                var VisualState_8820d7f8e0c642098236fa6bc5717b1a = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_8820d7f8e0c642098236fa6bc5717b1a);
                VisualState_8820d7f8e0c642098236fa6bc5717b1a.Name = "Normal";

                var VisualState_703e1c47f7394e788cc55993c3eeb275 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_703e1c47f7394e788cc55993c3eeb275);
                VisualState_703e1c47f7394e788cc55993c3eeb275.Name = "PointerOver";
                var Storyboard_60930a162a4046748c6cd7a87d50300c = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_2a2b840508d74e39bebab21888381350 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_2a2b840508d74e39bebab21888381350, "InnerBorder");
                var DiscreteObjectKeyFrame_60614139e0b54615b0989372c838b1fa = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_60614139e0b54615b0989372c838b1fa.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_60614139e0b54615b0989372c838b1fa.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_2a2b840508d74e39bebab21888381350.KeyFrames.add(DiscreteObjectKeyFrame_60614139e0b54615b0989372c838b1fa);


                Storyboard_60930a162a4046748c6cd7a87d50300c.Children.add(ObjectAnimationUsingKeyFrames_2a2b840508d74e39bebab21888381350);


                VisualState_703e1c47f7394e788cc55993c3eeb275.Storyboard = Storyboard_60930a162a4046748c6cd7a87d50300c;


                var VisualState_f16f71535fc34ed69fe28ad9a202accd = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_f16f71535fc34ed69fe28ad9a202accd);
                VisualState_f16f71535fc34ed69fe28ad9a202accd.Name = "Pressed";
                var Storyboard_4bff56068b7a4bad82f8a712ad2c9fda = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_2b49570a8b784baeaa2ccdacb4ffdd9b = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_2b49570a8b784baeaa2ccdacb4ffdd9b, "InnerBorder");
                var DiscreteObjectKeyFrame_fad05fc03b614c76a4d3702c11a22038 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_fad05fc03b614c76a4d3702c11a22038.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_fad05fc03b614c76a4d3702c11a22038.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_2b49570a8b784baeaa2ccdacb4ffdd9b.KeyFrames.add(DiscreteObjectKeyFrame_fad05fc03b614c76a4d3702c11a22038);


                Storyboard_4bff56068b7a4bad82f8a712ad2c9fda.Children.add(ObjectAnimationUsingKeyFrames_2b49570a8b784baeaa2ccdacb4ffdd9b);


                VisualState_f16f71535fc34ed69fe28ad9a202accd.Storyboard = Storyboard_4bff56068b7a4bad82f8a712ad2c9fda;


                var VisualState_0e82e881c6d949329145e1c0c9752d59 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_0e82e881c6d949329145e1c0c9752d59);
                VisualState_0e82e881c6d949329145e1c0c9752d59.Name = "Disabled";
                var Storyboard_72147400adb04ec2abecdaaecff7d904 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_4d667e568cc645c68e207b2ad91d29d5 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_4d667e568cc645c68e207b2ad91d29d5, "InnerBorder");
                var DiscreteObjectKeyFrame_2446ac7ba99246c0b37907a7da5c22ae = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_2446ac7ba99246c0b37907a7da5c22ae.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_2446ac7ba99246c0b37907a7da5c22ae.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_4d667e568cc645c68e207b2ad91d29d5.KeyFrames.add(DiscreteObjectKeyFrame_2446ac7ba99246c0b37907a7da5c22ae);


                Storyboard_72147400adb04ec2abecdaaecff7d904.Children.add(ObjectAnimationUsingKeyFrames_4d667e568cc645c68e207b2ad91d29d5);


                VisualState_0e82e881c6d949329145e1c0c9752d59.Storyboard = Storyboard_72147400adb04ec2abecdaaecff7d904;


                System.Array.add(VisualStateGroup_e4a8304fbd364554a31071645e814ac8.States, VisualState_8820d7f8e0c642098236fa6bc5717b1a, Object);
                System.Array.add(VisualStateGroup_e4a8304fbd364554a31071645e814ac8.States, VisualState_703e1c47f7394e788cc55993c3eeb275, Object);
                System.Array.add(VisualStateGroup_e4a8304fbd364554a31071645e814ac8.States, VisualState_f16f71535fc34ed69fe28ad9a202accd, Object);
                System.Array.add(VisualStateGroup_e4a8304fbd364554a31071645e814ac8.States, VisualState_0e82e881c6d949329145e1c0c9752d59, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_e4a8304fbd364554a31071645e814ac8);

                var Border_ec8808de871b45e3bd6c087cea5b44a8 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_ec8808de871b45e3bd6c087cea5b44a8);
                Border_ec8808de871b45e3bd6c087cea5b44a8.Name = "InnerBorder";
                Border_ec8808de871b45e3bd6c087cea5b44a8.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_f5e563705f0e444d9306e2c30ec10383 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_f5e563705f0e444d9306e2c30ec10383);
                ContentPresenter_f5e563705f0e444d9306e2c30ec10383.Name = "ContentPresenter";
                var Binding_8706ea3a075548b69a5cd45cb97524cb = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8706ea3a075548b69a5cd45cb97524cb.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_e2c10bc7aca2439f8a1344ea45f81813 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e2c10bc7aca2439f8a1344ea45f81813.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8706ea3a075548b69a5cd45cb97524cb.RelativeSource = RelativeSource_e2c10bc7aca2439f8a1344ea45f81813;


                Binding_8706ea3a075548b69a5cd45cb97524cb.TemplateOwner = templateInstance_a308b8a4cd9047da855838b87efbacc2;

                var Binding_81e9786fd8ba44e1a8ba0d115f15267b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_81e9786fd8ba44e1a8ba0d115f15267b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_28219d84914944478468b59a5854f1a1 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_28219d84914944478468b59a5854f1a1.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_81e9786fd8ba44e1a8ba0d115f15267b.RelativeSource = RelativeSource_28219d84914944478468b59a5854f1a1;


                Binding_81e9786fd8ba44e1a8ba0d115f15267b.TemplateOwner = templateInstance_a308b8a4cd9047da855838b87efbacc2;

                var Binding_07cf074101ca44269e97e1426663df3a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_07cf074101ca44269e97e1426663df3a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_a19626c1ea8041b4b1605613e435f48e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a19626c1ea8041b4b1605613e435f48e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_07cf074101ca44269e97e1426663df3a.RelativeSource = RelativeSource_a19626c1ea8041b4b1605613e435f48e;


                Binding_07cf074101ca44269e97e1426663df3a.TemplateOwner = templateInstance_a308b8a4cd9047da855838b87efbacc2;

                var Binding_daf3122e3fe54303a69861ddb601b3b6 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_daf3122e3fe54303a69861ddb601b3b6.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_594ae842cb7446b3b2a71d29749650cb = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_594ae842cb7446b3b2a71d29749650cb.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_daf3122e3fe54303a69861ddb601b3b6.RelativeSource = RelativeSource_594ae842cb7446b3b2a71d29749650cb;


                Binding_daf3122e3fe54303a69861ddb601b3b6.TemplateOwner = templateInstance_a308b8a4cd9047da855838b87efbacc2;

                var Binding_9e8865f82e2c42dcadc03daf1512ad02 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_9e8865f82e2c42dcadc03daf1512ad02.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_c82426b298cf4cb7ad26f94a280009b7 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c82426b298cf4cb7ad26f94a280009b7.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_9e8865f82e2c42dcadc03daf1512ad02.RelativeSource = RelativeSource_c82426b298cf4cb7ad26f94a280009b7;


                Binding_9e8865f82e2c42dcadc03daf1512ad02.TemplateOwner = templateInstance_a308b8a4cd9047da855838b87efbacc2;


                Border_ec8808de871b45e3bd6c087cea5b44a8.Child = ContentPresenter_f5e563705f0e444d9306e2c30ec10383;

                var Binding_ee749a9de5fa49aaa33177a9c59b3aab = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ee749a9de5fa49aaa33177a9c59b3aab.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_c1861ada428340a696685273e9b1a0d6 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c1861ada428340a696685273e9b1a0d6.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ee749a9de5fa49aaa33177a9c59b3aab.RelativeSource = RelativeSource_c1861ada428340a696685273e9b1a0d6;


                Binding_ee749a9de5fa49aaa33177a9c59b3aab.TemplateOwner = templateInstance_a308b8a4cd9047da855838b87efbacc2;


                Border_c85de2c5eae74320905c21f40d7a7839.Child = Border_ec8808de871b45e3bd6c087cea5b44a8;

                var Binding_75e44723ffeb47e399ce0a34513f087f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_75e44723ffeb47e399ce0a34513f087f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_2a4b440211ac40ae8a84e5d7acb46872 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_2a4b440211ac40ae8a84e5d7acb46872.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_75e44723ffeb47e399ce0a34513f087f.RelativeSource = RelativeSource_2a4b440211ac40ae8a84e5d7acb46872;


                Binding_75e44723ffeb47e399ce0a34513f087f.TemplateOwner = templateInstance_a308b8a4cd9047da855838b87efbacc2;

                var Binding_2542fdcb7f6048728bfcfd73ff37f1d2 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_2542fdcb7f6048728bfcfd73ff37f1d2.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_664b293d27d54acfb19adedb32993bfa = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_664b293d27d54acfb19adedb32993bfa.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_2542fdcb7f6048728bfcfd73ff37f1d2.RelativeSource = RelativeSource_664b293d27d54acfb19adedb32993bfa;


                Binding_2542fdcb7f6048728bfcfd73ff37f1d2.TemplateOwner = templateInstance_a308b8a4cd9047da855838b87efbacc2;

                var Binding_dd62cb6faf2b43de86a47b0cd27ec88d = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_dd62cb6faf2b43de86a47b0cd27ec88d.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_715afd33a92444b5b14ed9a4d502ed85 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_715afd33a92444b5b14ed9a4d502ed85.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_dd62cb6faf2b43de86a47b0cd27ec88d.RelativeSource = RelativeSource_715afd33a92444b5b14ed9a4d502ed85;


                Binding_dd62cb6faf2b43de86a47b0cd27ec88d.TemplateOwner = templateInstance_a308b8a4cd9047da855838b87efbacc2;



                ContentPresenter_f5e563705f0e444d9306e2c30ec10383.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_8706ea3a075548b69a5cd45cb97524cb);
                ContentPresenter_f5e563705f0e444d9306e2c30ec10383.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_81e9786fd8ba44e1a8ba0d115f15267b);
                ContentPresenter_f5e563705f0e444d9306e2c30ec10383.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_07cf074101ca44269e97e1426663df3a);
                ContentPresenter_f5e563705f0e444d9306e2c30ec10383.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_daf3122e3fe54303a69861ddb601b3b6);
                ContentPresenter_f5e563705f0e444d9306e2c30ec10383.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_9e8865f82e2c42dcadc03daf1512ad02);
                Border_ec8808de871b45e3bd6c087cea5b44a8.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_ee749a9de5fa49aaa33177a9c59b3aab);
                Border_c85de2c5eae74320905c21f40d7a7839.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_75e44723ffeb47e399ce0a34513f087f);
                Border_c85de2c5eae74320905c21f40d7a7839.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_2542fdcb7f6048728bfcfd73ff37f1d2);
                Border_c85de2c5eae74320905c21f40d7a7839.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_dd62cb6faf2b43de86a47b0cd27ec88d);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_2a2b840508d74e39bebab21888381350, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_b4bab784987c47e68836e0515f197985), Bridge.fn.cacheBind(this, this.setVisualStateProperty_b4bab784987c47e68836e0515f197985), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_b4bab784987c47e68836e0515f197985), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_b4bab784987c47e68836e0515f197985), Bridge.fn.cacheBind(this, this.getVisualStateProperty_b4bab784987c47e68836e0515f197985)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_2a2b840508d74e39bebab21888381350, Border_ec8808de871b45e3bd6c087cea5b44a8);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_2b49570a8b784baeaa2ccdacb4ffdd9b, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_ef7631ee720f4adfa230de950c705ca4), Bridge.fn.cacheBind(this, this.setVisualStateProperty_ef7631ee720f4adfa230de950c705ca4), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_ef7631ee720f4adfa230de950c705ca4), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_ef7631ee720f4adfa230de950c705ca4), Bridge.fn.cacheBind(this, this.getVisualStateProperty_ef7631ee720f4adfa230de950c705ca4)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_2b49570a8b784baeaa2ccdacb4ffdd9b, Border_ec8808de871b45e3bd6c087cea5b44a8);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_4d667e568cc645c68e207b2ad91d29d5, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2), Bridge.fn.cacheBind(this, this.setVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2), Bridge.fn.cacheBind(this, this.getVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_4d667e568cc645c68e207b2ad91d29d5, Border_ec8808de871b45e3bd6c087cea5b44a8);

                templateInstance_a308b8a4cd9047da855838b87efbacc2.TemplateContent = Border_c85de2c5eae74320905c21f40d7a7839;
                return templateInstance_a308b8a4cd9047da855838b87efbacc2;
            },
            accessVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_caecf755bd1747e59cf9970fae623ee0: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_caecf755bd1747e59cf9970fae623ee0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_caecf755bd1747e59cf9970fae623ee0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_caecf755bd1747e59cf9970fae623ee0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_caecf755bd1747e59cf9970fae623ee0: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_806b4ea56a6f45f7bdd034e0b7d08ce0: function (templateOwner) {
                var templateInstance_74a1980eea694cdb9f23c59de15602ef = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_74a1980eea694cdb9f23c59de15602ef.TemplateOwner = templateOwner;
                var Border_a32e6f91799140bf8c02e61ca7124523 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_a32e6f91799140bf8c02e61ca7124523);
                Border_a32e6f91799140bf8c02e61ca7124523.Name = "OuterBorder";
                Border_a32e6f91799140bf8c02e61ca7124523.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_f86f993145e5490a9e1b63f533b99c0e = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_f86f993145e5490a9e1b63f533b99c0e);
                VisualStateGroup_f86f993145e5490a9e1b63f533b99c0e.Name = "CommonStates";
                var VisualState_e0a1d0e787d042e891cf3b1e1099503f = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_e0a1d0e787d042e891cf3b1e1099503f);
                VisualState_e0a1d0e787d042e891cf3b1e1099503f.Name = "Normal";

                var VisualState_478ba58b78fa43618cbfa15a491cf526 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_478ba58b78fa43618cbfa15a491cf526);
                VisualState_478ba58b78fa43618cbfa15a491cf526.Name = "PointerOver";
                var Storyboard_aa2549c287b744569e6d9850f6b4158e = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_b60ab45558924a1dbd8fe94ab04cc13d = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_b60ab45558924a1dbd8fe94ab04cc13d, "InnerBorder");
                var DiscreteObjectKeyFrame_7e02cac8d0034025b1e71fb43c2e12cc = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_7e02cac8d0034025b1e71fb43c2e12cc.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_7e02cac8d0034025b1e71fb43c2e12cc.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_b60ab45558924a1dbd8fe94ab04cc13d.KeyFrames.add(DiscreteObjectKeyFrame_7e02cac8d0034025b1e71fb43c2e12cc);


                Storyboard_aa2549c287b744569e6d9850f6b4158e.Children.add(ObjectAnimationUsingKeyFrames_b60ab45558924a1dbd8fe94ab04cc13d);


                VisualState_478ba58b78fa43618cbfa15a491cf526.Storyboard = Storyboard_aa2549c287b744569e6d9850f6b4158e;


                var VisualState_d8f82593df5d4b6a8179025ddf2839cc = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_d8f82593df5d4b6a8179025ddf2839cc);
                VisualState_d8f82593df5d4b6a8179025ddf2839cc.Name = "Pressed";
                var Storyboard_3d1073a27bea4cd48ac7d369c2c183f1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_2c7545a6b8a9412c9e0c4be8d1adbfb9 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_2c7545a6b8a9412c9e0c4be8d1adbfb9, "InnerBorder");
                var DiscreteObjectKeyFrame_7391e045f0d144059528e1ccce64acc2 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_7391e045f0d144059528e1ccce64acc2.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_7391e045f0d144059528e1ccce64acc2.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_2c7545a6b8a9412c9e0c4be8d1adbfb9.KeyFrames.add(DiscreteObjectKeyFrame_7391e045f0d144059528e1ccce64acc2);


                Storyboard_3d1073a27bea4cd48ac7d369c2c183f1.Children.add(ObjectAnimationUsingKeyFrames_2c7545a6b8a9412c9e0c4be8d1adbfb9);


                VisualState_d8f82593df5d4b6a8179025ddf2839cc.Storyboard = Storyboard_3d1073a27bea4cd48ac7d369c2c183f1;


                var VisualState_8512b729e2bd4497a1348589ce9c3f77 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_8512b729e2bd4497a1348589ce9c3f77);
                VisualState_8512b729e2bd4497a1348589ce9c3f77.Name = "Disabled";
                var Storyboard_bad86c4b7819420b8720beed8e0d4ece = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_6a28d84d54694a89b24ebd222efb0965 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_6a28d84d54694a89b24ebd222efb0965, "InnerBorder");
                var DiscreteObjectKeyFrame_395a9e4ab84a498db4563f80558f6d45 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_395a9e4ab84a498db4563f80558f6d45.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_395a9e4ab84a498db4563f80558f6d45.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_6a28d84d54694a89b24ebd222efb0965.KeyFrames.add(DiscreteObjectKeyFrame_395a9e4ab84a498db4563f80558f6d45);


                Storyboard_bad86c4b7819420b8720beed8e0d4ece.Children.add(ObjectAnimationUsingKeyFrames_6a28d84d54694a89b24ebd222efb0965);


                VisualState_8512b729e2bd4497a1348589ce9c3f77.Storyboard = Storyboard_bad86c4b7819420b8720beed8e0d4ece;


                System.Array.add(VisualStateGroup_f86f993145e5490a9e1b63f533b99c0e.States, VisualState_e0a1d0e787d042e891cf3b1e1099503f, Object);
                System.Array.add(VisualStateGroup_f86f993145e5490a9e1b63f533b99c0e.States, VisualState_478ba58b78fa43618cbfa15a491cf526, Object);
                System.Array.add(VisualStateGroup_f86f993145e5490a9e1b63f533b99c0e.States, VisualState_d8f82593df5d4b6a8179025ddf2839cc, Object);
                System.Array.add(VisualStateGroup_f86f993145e5490a9e1b63f533b99c0e.States, VisualState_8512b729e2bd4497a1348589ce9c3f77, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_f86f993145e5490a9e1b63f533b99c0e);

                var Border_1392e70ab08243ccbf0735e007ee8fe2 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_1392e70ab08243ccbf0735e007ee8fe2);
                Border_1392e70ab08243ccbf0735e007ee8fe2.Name = "InnerBorder";
                Border_1392e70ab08243ccbf0735e007ee8fe2.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_ae0ec024f0144b3d9332b034e9ac33b2 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_ae0ec024f0144b3d9332b034e9ac33b2);
                ContentPresenter_ae0ec024f0144b3d9332b034e9ac33b2.Name = "ContentPresenter";
                var Binding_aec3e58073e54b85950e8180eee7432a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_aec3e58073e54b85950e8180eee7432a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_cc7b5ecea95e488d97858c69bb2bd809 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_cc7b5ecea95e488d97858c69bb2bd809.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_aec3e58073e54b85950e8180eee7432a.RelativeSource = RelativeSource_cc7b5ecea95e488d97858c69bb2bd809;


                Binding_aec3e58073e54b85950e8180eee7432a.TemplateOwner = templateInstance_74a1980eea694cdb9f23c59de15602ef;

                var Binding_e5d107a0d47f4d8ca5f8e07b7eddd85c = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e5d107a0d47f4d8ca5f8e07b7eddd85c.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_e0e796771c1944df9f76c06975031a00 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e0e796771c1944df9f76c06975031a00.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e5d107a0d47f4d8ca5f8e07b7eddd85c.RelativeSource = RelativeSource_e0e796771c1944df9f76c06975031a00;


                Binding_e5d107a0d47f4d8ca5f8e07b7eddd85c.TemplateOwner = templateInstance_74a1980eea694cdb9f23c59de15602ef;

                var Binding_8b8f5db1a96d4e06b336bf53486d73d1 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8b8f5db1a96d4e06b336bf53486d73d1.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_2dfd66641a2745c2bbaeca50a0087cc8 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_2dfd66641a2745c2bbaeca50a0087cc8.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8b8f5db1a96d4e06b336bf53486d73d1.RelativeSource = RelativeSource_2dfd66641a2745c2bbaeca50a0087cc8;


                Binding_8b8f5db1a96d4e06b336bf53486d73d1.TemplateOwner = templateInstance_74a1980eea694cdb9f23c59de15602ef;

                var Binding_ef4dc9407ab74be995ee3679dde0032b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ef4dc9407ab74be995ee3679dde0032b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_d27d65e6ba7644f2b5e54afa1e85b1a8 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d27d65e6ba7644f2b5e54afa1e85b1a8.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ef4dc9407ab74be995ee3679dde0032b.RelativeSource = RelativeSource_d27d65e6ba7644f2b5e54afa1e85b1a8;


                Binding_ef4dc9407ab74be995ee3679dde0032b.TemplateOwner = templateInstance_74a1980eea694cdb9f23c59de15602ef;

                var Binding_0b2925ed5d7c4a71ba8d4f44e47169c9 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_0b2925ed5d7c4a71ba8d4f44e47169c9.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_828acea5a84741f19c3a81dad86a4a7b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_828acea5a84741f19c3a81dad86a4a7b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_0b2925ed5d7c4a71ba8d4f44e47169c9.RelativeSource = RelativeSource_828acea5a84741f19c3a81dad86a4a7b;


                Binding_0b2925ed5d7c4a71ba8d4f44e47169c9.TemplateOwner = templateInstance_74a1980eea694cdb9f23c59de15602ef;


                Border_1392e70ab08243ccbf0735e007ee8fe2.Child = ContentPresenter_ae0ec024f0144b3d9332b034e9ac33b2;

                var Binding_f1ba5cd99933471882d6cc9954098d60 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_f1ba5cd99933471882d6cc9954098d60.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_956b8528332445e1ae9475144f68b6fa = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_956b8528332445e1ae9475144f68b6fa.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_f1ba5cd99933471882d6cc9954098d60.RelativeSource = RelativeSource_956b8528332445e1ae9475144f68b6fa;


                Binding_f1ba5cd99933471882d6cc9954098d60.TemplateOwner = templateInstance_74a1980eea694cdb9f23c59de15602ef;


                Border_a32e6f91799140bf8c02e61ca7124523.Child = Border_1392e70ab08243ccbf0735e007ee8fe2;

                var Binding_507474328abc4a61b1d7bcddac8d4c42 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_507474328abc4a61b1d7bcddac8d4c42.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_c996457da4654ae092beb4073fb825ff = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c996457da4654ae092beb4073fb825ff.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_507474328abc4a61b1d7bcddac8d4c42.RelativeSource = RelativeSource_c996457da4654ae092beb4073fb825ff;


                Binding_507474328abc4a61b1d7bcddac8d4c42.TemplateOwner = templateInstance_74a1980eea694cdb9f23c59de15602ef;

                var Binding_432a4c91d92244dab17ca8f105dbedd3 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_432a4c91d92244dab17ca8f105dbedd3.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_227c6204f93d477d8b156d48c2b25ad1 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_227c6204f93d477d8b156d48c2b25ad1.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_432a4c91d92244dab17ca8f105dbedd3.RelativeSource = RelativeSource_227c6204f93d477d8b156d48c2b25ad1;


                Binding_432a4c91d92244dab17ca8f105dbedd3.TemplateOwner = templateInstance_74a1980eea694cdb9f23c59de15602ef;

                var Binding_a84c0735875f4314a2b1412515bb1b10 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_a84c0735875f4314a2b1412515bb1b10.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_70191157f9754ff88b71901b90738706 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_70191157f9754ff88b71901b90738706.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_a84c0735875f4314a2b1412515bb1b10.RelativeSource = RelativeSource_70191157f9754ff88b71901b90738706;


                Binding_a84c0735875f4314a2b1412515bb1b10.TemplateOwner = templateInstance_74a1980eea694cdb9f23c59de15602ef;



                ContentPresenter_ae0ec024f0144b3d9332b034e9ac33b2.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_aec3e58073e54b85950e8180eee7432a);
                ContentPresenter_ae0ec024f0144b3d9332b034e9ac33b2.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_e5d107a0d47f4d8ca5f8e07b7eddd85c);
                ContentPresenter_ae0ec024f0144b3d9332b034e9ac33b2.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_8b8f5db1a96d4e06b336bf53486d73d1);
                ContentPresenter_ae0ec024f0144b3d9332b034e9ac33b2.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_ef4dc9407ab74be995ee3679dde0032b);
                ContentPresenter_ae0ec024f0144b3d9332b034e9ac33b2.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_0b2925ed5d7c4a71ba8d4f44e47169c9);
                Border_1392e70ab08243ccbf0735e007ee8fe2.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_f1ba5cd99933471882d6cc9954098d60);
                Border_a32e6f91799140bf8c02e61ca7124523.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_507474328abc4a61b1d7bcddac8d4c42);
                Border_a32e6f91799140bf8c02e61ca7124523.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_432a4c91d92244dab17ca8f105dbedd3);
                Border_a32e6f91799140bf8c02e61ca7124523.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_a84c0735875f4314a2b1412515bb1b10);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_b60ab45558924a1dbd8fe94ab04cc13d, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6), Bridge.fn.cacheBind(this, this.setVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6), Bridge.fn.cacheBind(this, this.getVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_b60ab45558924a1dbd8fe94ab04cc13d, Border_1392e70ab08243ccbf0735e007ee8fe2);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_2c7545a6b8a9412c9e0c4be8d1adbfb9, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b), Bridge.fn.cacheBind(this, this.setVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b), Bridge.fn.cacheBind(this, this.getVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_2c7545a6b8a9412c9e0c4be8d1adbfb9, Border_1392e70ab08243ccbf0735e007ee8fe2);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_6a28d84d54694a89b24ebd222efb0965, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_caecf755bd1747e59cf9970fae623ee0), Bridge.fn.cacheBind(this, this.setVisualStateProperty_caecf755bd1747e59cf9970fae623ee0), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_caecf755bd1747e59cf9970fae623ee0), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_caecf755bd1747e59cf9970fae623ee0), Bridge.fn.cacheBind(this, this.getVisualStateProperty_caecf755bd1747e59cf9970fae623ee0)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_6a28d84d54694a89b24ebd222efb0965, Border_1392e70ab08243ccbf0735e007ee8fe2);

                templateInstance_74a1980eea694cdb9f23c59de15602ef.TemplateContent = Border_a32e6f91799140bf8c02e61ca7124523;
                return templateInstance_74a1980eea694cdb9f23c59de15602ef;
            },
            accessVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_043b71f8694740d3980fbb196be3a5b5: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_043b71f8694740d3980fbb196be3a5b5: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_043b71f8694740d3980fbb196be3a5b5: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_043b71f8694740d3980fbb196be3a5b5: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_043b71f8694740d3980fbb196be3a5b5: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_558412e0dcbd4814a0b887477fbb6197: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_558412e0dcbd4814a0b887477fbb6197: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_558412e0dcbd4814a0b887477fbb6197: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_558412e0dcbd4814a0b887477fbb6197: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_558412e0dcbd4814a0b887477fbb6197: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_680dfe4ca114460ca136a0de2a1b86f2: function (templateOwner) {
                var templateInstance_0445a33df5eb475b9acdd80f72895192 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_0445a33df5eb475b9acdd80f72895192.TemplateOwner = templateOwner;
                var Border_1c6af83f0f454598aea88d5ed0cf5235 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_1c6af83f0f454598aea88d5ed0cf5235);
                Border_1c6af83f0f454598aea88d5ed0cf5235.Name = "OuterBorder";
                Border_1c6af83f0f454598aea88d5ed0cf5235.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_efcb5244586a4788b8adbea36d5c91f1 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_efcb5244586a4788b8adbea36d5c91f1);
                VisualStateGroup_efcb5244586a4788b8adbea36d5c91f1.Name = "CommonStates";
                var VisualState_27c694ae0cc849f2920952eae29e6229 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_27c694ae0cc849f2920952eae29e6229);
                VisualState_27c694ae0cc849f2920952eae29e6229.Name = "Normal";

                var VisualState_d341f39777b94f169e698b09a381687d = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_d341f39777b94f169e698b09a381687d);
                VisualState_d341f39777b94f169e698b09a381687d.Name = "PointerOver";
                var Storyboard_fefab400fea94e318fc544ca03a0c43a = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_4d7ec4344d9b4eeb861d42cc7a04522a = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_4d7ec4344d9b4eeb861d42cc7a04522a, "InnerBorder");
                var DiscreteObjectKeyFrame_72a0dd35eb144b76aefb5bb25fafad37 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_72a0dd35eb144b76aefb5bb25fafad37.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_72a0dd35eb144b76aefb5bb25fafad37.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_4d7ec4344d9b4eeb861d42cc7a04522a.KeyFrames.add(DiscreteObjectKeyFrame_72a0dd35eb144b76aefb5bb25fafad37);


                Storyboard_fefab400fea94e318fc544ca03a0c43a.Children.add(ObjectAnimationUsingKeyFrames_4d7ec4344d9b4eeb861d42cc7a04522a);


                VisualState_d341f39777b94f169e698b09a381687d.Storyboard = Storyboard_fefab400fea94e318fc544ca03a0c43a;


                var VisualState_6b6f900c6fe74c789ca7bc5f573635e2 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_6b6f900c6fe74c789ca7bc5f573635e2);
                VisualState_6b6f900c6fe74c789ca7bc5f573635e2.Name = "Pressed";
                var Storyboard_2cdad0524dd7400ba6e60eb9bf632479 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_a134639d3a0c48b5a46ce69eb33b433b = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_a134639d3a0c48b5a46ce69eb33b433b, "InnerBorder");
                var DiscreteObjectKeyFrame_b39bd8bb2f704dc6818d498aa905832b = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_b39bd8bb2f704dc6818d498aa905832b.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_b39bd8bb2f704dc6818d498aa905832b.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_a134639d3a0c48b5a46ce69eb33b433b.KeyFrames.add(DiscreteObjectKeyFrame_b39bd8bb2f704dc6818d498aa905832b);


                Storyboard_2cdad0524dd7400ba6e60eb9bf632479.Children.add(ObjectAnimationUsingKeyFrames_a134639d3a0c48b5a46ce69eb33b433b);


                VisualState_6b6f900c6fe74c789ca7bc5f573635e2.Storyboard = Storyboard_2cdad0524dd7400ba6e60eb9bf632479;


                var VisualState_c0fc924175a245c39a33e1f61e138c6b = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_c0fc924175a245c39a33e1f61e138c6b);
                VisualState_c0fc924175a245c39a33e1f61e138c6b.Name = "Disabled";
                var Storyboard_f425e3002b094460898979faa85a5cf0 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_b1b3a9eec22944bf91ceddf8023f9ac9 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_b1b3a9eec22944bf91ceddf8023f9ac9, "InnerBorder");
                var DiscreteObjectKeyFrame_9f607ddc5b2948f7b7f717f718cb9c81 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_9f607ddc5b2948f7b7f717f718cb9c81.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_9f607ddc5b2948f7b7f717f718cb9c81.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_b1b3a9eec22944bf91ceddf8023f9ac9.KeyFrames.add(DiscreteObjectKeyFrame_9f607ddc5b2948f7b7f717f718cb9c81);


                Storyboard_f425e3002b094460898979faa85a5cf0.Children.add(ObjectAnimationUsingKeyFrames_b1b3a9eec22944bf91ceddf8023f9ac9);


                VisualState_c0fc924175a245c39a33e1f61e138c6b.Storyboard = Storyboard_f425e3002b094460898979faa85a5cf0;


                System.Array.add(VisualStateGroup_efcb5244586a4788b8adbea36d5c91f1.States, VisualState_27c694ae0cc849f2920952eae29e6229, Object);
                System.Array.add(VisualStateGroup_efcb5244586a4788b8adbea36d5c91f1.States, VisualState_d341f39777b94f169e698b09a381687d, Object);
                System.Array.add(VisualStateGroup_efcb5244586a4788b8adbea36d5c91f1.States, VisualState_6b6f900c6fe74c789ca7bc5f573635e2, Object);
                System.Array.add(VisualStateGroup_efcb5244586a4788b8adbea36d5c91f1.States, VisualState_c0fc924175a245c39a33e1f61e138c6b, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_efcb5244586a4788b8adbea36d5c91f1);

                var Border_f083d5831d3142d09508f03830e5ee21 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_f083d5831d3142d09508f03830e5ee21);
                Border_f083d5831d3142d09508f03830e5ee21.Name = "InnerBorder";
                Border_f083d5831d3142d09508f03830e5ee21.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_f7f77bf31b354b4d9c053ffcffbc808d = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_f7f77bf31b354b4d9c053ffcffbc808d);
                ContentPresenter_f7f77bf31b354b4d9c053ffcffbc808d.Name = "ContentPresenter";
                var Binding_4d8ace91898e429093ff64510c6b5341 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4d8ace91898e429093ff64510c6b5341.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_c99e7d257160440b829fbe80e707d443 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c99e7d257160440b829fbe80e707d443.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4d8ace91898e429093ff64510c6b5341.RelativeSource = RelativeSource_c99e7d257160440b829fbe80e707d443;


                Binding_4d8ace91898e429093ff64510c6b5341.TemplateOwner = templateInstance_0445a33df5eb475b9acdd80f72895192;

                var Binding_630574edfe6646ae881c09f63bbb4547 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_630574edfe6646ae881c09f63bbb4547.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_b224fd80d08e4b20b19964455ee1f978 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_b224fd80d08e4b20b19964455ee1f978.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_630574edfe6646ae881c09f63bbb4547.RelativeSource = RelativeSource_b224fd80d08e4b20b19964455ee1f978;


                Binding_630574edfe6646ae881c09f63bbb4547.TemplateOwner = templateInstance_0445a33df5eb475b9acdd80f72895192;

                var Binding_54ff5cd028e946e387cdce7499a32ce2 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_54ff5cd028e946e387cdce7499a32ce2.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_ed1878a55e1647269aa260e8383e585e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ed1878a55e1647269aa260e8383e585e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_54ff5cd028e946e387cdce7499a32ce2.RelativeSource = RelativeSource_ed1878a55e1647269aa260e8383e585e;


                Binding_54ff5cd028e946e387cdce7499a32ce2.TemplateOwner = templateInstance_0445a33df5eb475b9acdd80f72895192;

                var Binding_8a641c5ef28b44ac8816ff65e77bdf19 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8a641c5ef28b44ac8816ff65e77bdf19.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_432161b80f534f4683fcc31c165ec01a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_432161b80f534f4683fcc31c165ec01a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8a641c5ef28b44ac8816ff65e77bdf19.RelativeSource = RelativeSource_432161b80f534f4683fcc31c165ec01a;


                Binding_8a641c5ef28b44ac8816ff65e77bdf19.TemplateOwner = templateInstance_0445a33df5eb475b9acdd80f72895192;

                var Binding_edfe795b5db24fa886654af439f89329 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_edfe795b5db24fa886654af439f89329.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_8fb07a67edcd4fc1a4405a7fb47b114e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8fb07a67edcd4fc1a4405a7fb47b114e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_edfe795b5db24fa886654af439f89329.RelativeSource = RelativeSource_8fb07a67edcd4fc1a4405a7fb47b114e;


                Binding_edfe795b5db24fa886654af439f89329.TemplateOwner = templateInstance_0445a33df5eb475b9acdd80f72895192;


                Border_f083d5831d3142d09508f03830e5ee21.Child = ContentPresenter_f7f77bf31b354b4d9c053ffcffbc808d;

                var Binding_a68e09b3fb81402094190bac9dadb390 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_a68e09b3fb81402094190bac9dadb390.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_96e20df9905747b495089a35ad105e5a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_96e20df9905747b495089a35ad105e5a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_a68e09b3fb81402094190bac9dadb390.RelativeSource = RelativeSource_96e20df9905747b495089a35ad105e5a;


                Binding_a68e09b3fb81402094190bac9dadb390.TemplateOwner = templateInstance_0445a33df5eb475b9acdd80f72895192;


                Border_1c6af83f0f454598aea88d5ed0cf5235.Child = Border_f083d5831d3142d09508f03830e5ee21;

                var Binding_c62bf05cf6c84de19e6704df75775859 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c62bf05cf6c84de19e6704df75775859.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_a709ba2c4b7b492ea47d4971d62e8b2b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a709ba2c4b7b492ea47d4971d62e8b2b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c62bf05cf6c84de19e6704df75775859.RelativeSource = RelativeSource_a709ba2c4b7b492ea47d4971d62e8b2b;


                Binding_c62bf05cf6c84de19e6704df75775859.TemplateOwner = templateInstance_0445a33df5eb475b9acdd80f72895192;

                var Binding_b39f2037e243477faae77e63e72454f3 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_b39f2037e243477faae77e63e72454f3.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_d02c1500618448cbb9ecbf6f1e4b7602 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d02c1500618448cbb9ecbf6f1e4b7602.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_b39f2037e243477faae77e63e72454f3.RelativeSource = RelativeSource_d02c1500618448cbb9ecbf6f1e4b7602;


                Binding_b39f2037e243477faae77e63e72454f3.TemplateOwner = templateInstance_0445a33df5eb475b9acdd80f72895192;

                var Binding_01a1b818eb234f369bc96b2487924558 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_01a1b818eb234f369bc96b2487924558.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_d438b7f804544cc6a978a5df44599039 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d438b7f804544cc6a978a5df44599039.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_01a1b818eb234f369bc96b2487924558.RelativeSource = RelativeSource_d438b7f804544cc6a978a5df44599039;


                Binding_01a1b818eb234f369bc96b2487924558.TemplateOwner = templateInstance_0445a33df5eb475b9acdd80f72895192;



                ContentPresenter_f7f77bf31b354b4d9c053ffcffbc808d.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_4d8ace91898e429093ff64510c6b5341);
                ContentPresenter_f7f77bf31b354b4d9c053ffcffbc808d.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_630574edfe6646ae881c09f63bbb4547);
                ContentPresenter_f7f77bf31b354b4d9c053ffcffbc808d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_54ff5cd028e946e387cdce7499a32ce2);
                ContentPresenter_f7f77bf31b354b4d9c053ffcffbc808d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_8a641c5ef28b44ac8816ff65e77bdf19);
                ContentPresenter_f7f77bf31b354b4d9c053ffcffbc808d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_edfe795b5db24fa886654af439f89329);
                Border_f083d5831d3142d09508f03830e5ee21.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_a68e09b3fb81402094190bac9dadb390);
                Border_1c6af83f0f454598aea88d5ed0cf5235.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_c62bf05cf6c84de19e6704df75775859);
                Border_1c6af83f0f454598aea88d5ed0cf5235.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_b39f2037e243477faae77e63e72454f3);
                Border_1c6af83f0f454598aea88d5ed0cf5235.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_01a1b818eb234f369bc96b2487924558);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_4d7ec4344d9b4eeb861d42cc7a04522a, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd), Bridge.fn.cacheBind(this, this.setVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd), Bridge.fn.cacheBind(this, this.getVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_4d7ec4344d9b4eeb861d42cc7a04522a, Border_f083d5831d3142d09508f03830e5ee21);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_a134639d3a0c48b5a46ce69eb33b433b, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_043b71f8694740d3980fbb196be3a5b5), Bridge.fn.cacheBind(this, this.setVisualStateProperty_043b71f8694740d3980fbb196be3a5b5), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_043b71f8694740d3980fbb196be3a5b5), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_043b71f8694740d3980fbb196be3a5b5), Bridge.fn.cacheBind(this, this.getVisualStateProperty_043b71f8694740d3980fbb196be3a5b5)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_a134639d3a0c48b5a46ce69eb33b433b, Border_f083d5831d3142d09508f03830e5ee21);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_b1b3a9eec22944bf91ceddf8023f9ac9, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_558412e0dcbd4814a0b887477fbb6197), Bridge.fn.cacheBind(this, this.setVisualStateProperty_558412e0dcbd4814a0b887477fbb6197), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_558412e0dcbd4814a0b887477fbb6197), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_558412e0dcbd4814a0b887477fbb6197), Bridge.fn.cacheBind(this, this.getVisualStateProperty_558412e0dcbd4814a0b887477fbb6197)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_b1b3a9eec22944bf91ceddf8023f9ac9, Border_f083d5831d3142d09508f03830e5ee21);

                templateInstance_0445a33df5eb475b9acdd80f72895192.TemplateContent = Border_1c6af83f0f454598aea88d5ed0cf5235;
                return templateInstance_0445a33df5eb475b9acdd80f72895192;
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



                var Grid_32de581a431d4de0ab5cc10fb554e7fb = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutRoot", Grid_32de581a431d4de0ab5cc10fb554e7fb);
                Grid_32de581a431d4de0ab5cc10fb554e7fb.Name = "LayoutRoot";
                Grid_32de581a431d4de0ab5cc10fb554e7fb.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                var Grid_4f96071a03e34e30bbbfde834f16e6d6 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_bb1e62a6733b4c92b789fed2de045392 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_bb1e62a6733b4c92b789fed2de045392.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_bb1e62a6733b4c92b789fed2de045392.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_1d3c9d358c3e448f907b0d20b10cef2f = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_1d3c9d358c3e448f907b0d20b10cef2f.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_1d3c9d358c3e448f907b0d20b10cef2f.Offset = 0.0;

                var GradientStop_ff83097425d64321b58eea60d52f4cf0 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_ff83097425d64321b58eea60d52f4cf0.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_ff83097425d64321b58eea60d52f4cf0.Offset = 1.0;

                LinearGradientBrush_bb1e62a6733b4c92b789fed2de045392.GradientStops.add(GradientStop_1d3c9d358c3e448f907b0d20b10cef2f);
                LinearGradientBrush_bb1e62a6733b4c92b789fed2de045392.GradientStops.add(GradientStop_ff83097425d64321b58eea60d52f4cf0);


                Grid_4f96071a03e34e30bbbfde834f16e6d6.Background = LinearGradientBrush_bb1e62a6733b4c92b789fed2de045392;

                var Border_4737cd34ecd443709bfa29fae846476c = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_4737cd34ecd443709bfa29fae846476c);
                Border_4737cd34ecd443709bfa29fae846476c.Name = "element";
                Border_4737cd34ecd443709bfa29fae846476c.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Border_4737cd34ecd443709bfa29fae846476c.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 139, $t));
                Border_4737cd34ecd443709bfa29fae846476c.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_4737cd34ecd443709bfa29fae846476c.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_ba0898cf308e4e989dd424d060c9407d = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_ba0898cf308e4e989dd424d060c9407d.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_ba0898cf308e4e989dd424d060c9407d.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_4b1eb7bdd70b4f43ac5d9b2c024a39c3 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_4b1eb7bdd70b4f43ac5d9b2c024a39c3.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_4b1eb7bdd70b4f43ac5d9b2c024a39c3.Offset = 0.0;

                var GradientStop_967c443e81674ae8b5c7b4365bd903a3 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_967c443e81674ae8b5c7b4365bd903a3.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_967c443e81674ae8b5c7b4365bd903a3.Offset = 0.5896;

                var GradientStop_c153c8483bbd4a8bafdfdf32a0ba7706 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_c153c8483bbd4a8bafdfdf32a0ba7706.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 246, $t.G = 246, $t.B = 246, $t);
                GradientStop_c153c8483bbd4a8bafdfdf32a0ba7706.Offset = 1.0;

                LinearGradientBrush_ba0898cf308e4e989dd424d060c9407d.GradientStops.add(GradientStop_4b1eb7bdd70b4f43ac5d9b2c024a39c3);
                LinearGradientBrush_ba0898cf308e4e989dd424d060c9407d.GradientStops.add(GradientStop_967c443e81674ae8b5c7b4365bd903a3);
                LinearGradientBrush_ba0898cf308e4e989dd424d060c9407d.GradientStops.add(GradientStop_c153c8483bbd4a8bafdfdf32a0ba7706);


                Border_4737cd34ecd443709bfa29fae846476c.Background = LinearGradientBrush_ba0898cf308e4e989dd424d060c9407d;

                var TransformGroup_c6d659daa6a84505b6d868ed115f7c24 = new Bridge.global.Windows.UI.Xaml.Media.TransformGroup();
                var ScaleTransform_bc17f28b625746129eed88bc5ddd0dde = new Bridge.global.Windows.UI.Xaml.Media.ScaleTransform();

                var RotateTransform_0a1cc4ac3a7f44b7b3494844d3abd6d5 = new Bridge.global.Windows.UI.Xaml.Media.RotateTransform();

                TransformGroup_c6d659daa6a84505b6d868ed115f7c24.Children.add(ScaleTransform_bc17f28b625746129eed88bc5ddd0dde);
                TransformGroup_c6d659daa6a84505b6d868ed115f7c24.Children.add(RotateTransform_0a1cc4ac3a7f44b7b3494844d3abd6d5);


                Border_4737cd34ecd443709bfa29fae846476c.RenderTransform = TransformGroup_c6d659daa6a84505b6d868ed115f7c24;

                var Grid_1ef13698c2c74071b8210685c1f15e37 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var ColumnDefinition_9a7bee9fa0664921a4f35375acefbf94 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_132be19657204845adc9871d29220e89 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_154a5ed284a848e8aa57c067b14b8dea = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_1ef13698c2c74071b8210685c1f15e37.ColumnDefinitions.add(ColumnDefinition_9a7bee9fa0664921a4f35375acefbf94);
                Grid_1ef13698c2c74071b8210685c1f15e37.ColumnDefinitions.add(ColumnDefinition_132be19657204845adc9871d29220e89);
                Grid_1ef13698c2c74071b8210685c1f15e37.ColumnDefinitions.add(ColumnDefinition_154a5ed284a848e8aa57c067b14b8dea);

                var RowDefinition_2318434dd00a4876bab726b4b473452b = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_2318434dd00a4876bab726b4b473452b.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_d3d71134e28048b4b1ad40789a86d1d3 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_d3d71134e28048b4b1ad40789a86d1d3.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_d47404eb11d04b2fba6a17861c7f3215 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_d47404eb11d04b2fba6a17861c7f3215.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_1ef13698c2c74071b8210685c1f15e37.RowDefinitions.add(RowDefinition_2318434dd00a4876bab726b4b473452b);
                Grid_1ef13698c2c74071b8210685c1f15e37.RowDefinitions.add(RowDefinition_d3d71134e28048b4b1ad40789a86d1d3);
                Grid_1ef13698c2c74071b8210685c1f15e37.RowDefinitions.add(RowDefinition_d47404eb11d04b2fba6a17861c7f3215);

                var Image_7f697931b30547ff9cc24593c92695fe = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                Image_7f697931b30547ff9cc24593c92695fe.Source = Bridge.cast(Bridge.global.DotNetForHtml5.Core.TypeFromStringConverters.ConvertFromInvariantString(Bridge.global.Windows.UI.Xaml.Media.ImageSource, "/CShtml;component/img/HomeImage.jpg"), Windows.UI.Xaml.Media.ImageSource);
                Image_7f697931b30547ff9cc24593c92695fe.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Uniform;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Image_7f697931b30547ff9cc24593c92695fe, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Image_7f697931b30547ff9cc24593c92695fe, 3);

                Grid_1ef13698c2c74071b8210685c1f15e37.Children.add(Image_7f697931b30547ff9cc24593c92695fe);


                Border_4737cd34ecd443709bfa29fae846476c.Child = Grid_1ef13698c2c74071b8210685c1f15e37;


                var Button_2009ed5937c340fcb2c411557145776e = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnBegin", Button_2009ed5937c340fcb2c411557145776e);
                Button_2009ed5937c340fcb2c411557145776e.Name = "btnBegin";
                Button_2009ed5937c340fcb2c411557145776e.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_2009ed5937c340fcb2c411557145776e.Content = "\u041d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443";
                Button_2009ed5937c340fcb2c411557145776e.FontSize = 25.0;
                Button_2009ed5937c340fcb2c411557145776e.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_2009ed5937c340fcb2c411557145776e.Width = 280.0;
                Button_2009ed5937c340fcb2c411557145776e.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_2009ed5937c340fcb2c411557145776e, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_2009ed5937c340fcb2c411557145776e, 1);
                Button_2009ed5937c340fcb2c411557145776e.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_2009ed5937c340fcb2c411557145776e.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_2009ed5937c340fcb2c411557145776e.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(0, 0, 0, 50);
                Button_2009ed5937c340fcb2c411557145776e.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                var ControlTemplate_38bab7b3cad04b6eb2cf2e1be7cf74e2 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_38bab7b3cad04b6eb2cf2e1be7cf74e2.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_38bab7b3cad04b6eb2cf2e1be7cf74e2.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_38bab7b3cad04b6eb2cf2e1be7cf74e2));

                Button_2009ed5937c340fcb2c411557145776e.Template = ControlTemplate_38bab7b3cad04b6eb2cf2e1be7cf74e2;


                Grid_4f96071a03e34e30bbbfde834f16e6d6.Children.add(Border_4737cd34ecd443709bfa29fae846476c);
                Grid_4f96071a03e34e30bbbfde834f16e6d6.Children.add(Button_2009ed5937c340fcb2c411557145776e);


                Grid_32de581a431d4de0ab5cc10fb554e7fb.Children.add(Grid_4f96071a03e34e30bbbfde834f16e6d6);


                this.Content = Grid_32de581a431d4de0ab5cc10fb554e7fb;



                this.element = Border_4737cd34ecd443709bfa29fae846476c;
                this.btnBegin = Button_2009ed5937c340fcb2c411557145776e;
                this.LayoutRoot = Grid_32de581a431d4de0ab5cc10fb554e7fb;



            },
            accessVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_38bab7b3cad04b6eb2cf2e1be7cf74e2: function (templateOwner) {
                var templateInstance_b1697610cece4d7b983fff6eacda01a3 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_b1697610cece4d7b983fff6eacda01a3.TemplateOwner = templateOwner;
                var Border_16a0250717144b4185b239ae2a81128b = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_16a0250717144b4185b239ae2a81128b);
                Border_16a0250717144b4185b239ae2a81128b.Name = "OuterBorder";
                Border_16a0250717144b4185b239ae2a81128b.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_19479a8d382c4c689f5aeaa94794ea33 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_19479a8d382c4c689f5aeaa94794ea33);
                VisualStateGroup_19479a8d382c4c689f5aeaa94794ea33.Name = "CommonStates";
                var VisualState_8e6d6081e0554cb0ad1d69aac77227e2 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_8e6d6081e0554cb0ad1d69aac77227e2);
                VisualState_8e6d6081e0554cb0ad1d69aac77227e2.Name = "Normal";

                var VisualState_0b5f41257b794209b08d13b8b96d78b0 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_0b5f41257b794209b08d13b8b96d78b0);
                VisualState_0b5f41257b794209b08d13b8b96d78b0.Name = "PointerOver";
                var Storyboard_56885dcd9cda4833ad34ab3bbcd727e2 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_7992c277769443de930f46f3fb34da2b = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_7992c277769443de930f46f3fb34da2b, "InnerBorder");
                var DiscreteObjectKeyFrame_4c3ee3a5ed5944a293feae4a0182544b = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_4c3ee3a5ed5944a293feae4a0182544b.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_4c3ee3a5ed5944a293feae4a0182544b.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_7992c277769443de930f46f3fb34da2b.KeyFrames.add(DiscreteObjectKeyFrame_4c3ee3a5ed5944a293feae4a0182544b);


                Storyboard_56885dcd9cda4833ad34ab3bbcd727e2.Children.add(ObjectAnimationUsingKeyFrames_7992c277769443de930f46f3fb34da2b);


                VisualState_0b5f41257b794209b08d13b8b96d78b0.Storyboard = Storyboard_56885dcd9cda4833ad34ab3bbcd727e2;


                var VisualState_791f212acf894d5db6980468e88be989 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_791f212acf894d5db6980468e88be989);
                VisualState_791f212acf894d5db6980468e88be989.Name = "Pressed";
                var Storyboard_03ca83d6d1d447898c27976a50fadff1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_3b3361fb4b5d4063818196b227831d73 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_3b3361fb4b5d4063818196b227831d73, "InnerBorder");
                var DiscreteObjectKeyFrame_07d449fb4f6d428bba18084202e57fc7 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_07d449fb4f6d428bba18084202e57fc7.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_07d449fb4f6d428bba18084202e57fc7.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_3b3361fb4b5d4063818196b227831d73.KeyFrames.add(DiscreteObjectKeyFrame_07d449fb4f6d428bba18084202e57fc7);


                Storyboard_03ca83d6d1d447898c27976a50fadff1.Children.add(ObjectAnimationUsingKeyFrames_3b3361fb4b5d4063818196b227831d73);


                VisualState_791f212acf894d5db6980468e88be989.Storyboard = Storyboard_03ca83d6d1d447898c27976a50fadff1;


                var VisualState_613ab86c304046bda96cfdd236481d66 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_613ab86c304046bda96cfdd236481d66);
                VisualState_613ab86c304046bda96cfdd236481d66.Name = "Disabled";
                var Storyboard_f2d2c50c543346b8aff7bd6b80e7fd24 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_1cba7b3a7ad346cca412affbbd17084d = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_1cba7b3a7ad346cca412affbbd17084d, "InnerBorder");
                var DiscreteObjectKeyFrame_75da5312f0f44af9b70cf97754403727 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_75da5312f0f44af9b70cf97754403727.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_75da5312f0f44af9b70cf97754403727.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_1cba7b3a7ad346cca412affbbd17084d.KeyFrames.add(DiscreteObjectKeyFrame_75da5312f0f44af9b70cf97754403727);


                Storyboard_f2d2c50c543346b8aff7bd6b80e7fd24.Children.add(ObjectAnimationUsingKeyFrames_1cba7b3a7ad346cca412affbbd17084d);


                VisualState_613ab86c304046bda96cfdd236481d66.Storyboard = Storyboard_f2d2c50c543346b8aff7bd6b80e7fd24;


                System.Array.add(VisualStateGroup_19479a8d382c4c689f5aeaa94794ea33.States, VisualState_8e6d6081e0554cb0ad1d69aac77227e2, Object);
                System.Array.add(VisualStateGroup_19479a8d382c4c689f5aeaa94794ea33.States, VisualState_0b5f41257b794209b08d13b8b96d78b0, Object);
                System.Array.add(VisualStateGroup_19479a8d382c4c689f5aeaa94794ea33.States, VisualState_791f212acf894d5db6980468e88be989, Object);
                System.Array.add(VisualStateGroup_19479a8d382c4c689f5aeaa94794ea33.States, VisualState_613ab86c304046bda96cfdd236481d66, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_19479a8d382c4c689f5aeaa94794ea33);

                var Border_5722241b150d45fbb4d1ee4fa4dbd146 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_5722241b150d45fbb4d1ee4fa4dbd146);
                Border_5722241b150d45fbb4d1ee4fa4dbd146.Name = "InnerBorder";
                Border_5722241b150d45fbb4d1ee4fa4dbd146.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_a4f526a233764d02a7c5bbe669bc45e8 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_a4f526a233764d02a7c5bbe669bc45e8);
                ContentPresenter_a4f526a233764d02a7c5bbe669bc45e8.Name = "ContentPresenter";
                var Binding_94d5c5bee5e340ebbfe944a8f3268667 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_94d5c5bee5e340ebbfe944a8f3268667.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_8a171b17ec6342698890aafaaa012379 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8a171b17ec6342698890aafaaa012379.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_94d5c5bee5e340ebbfe944a8f3268667.RelativeSource = RelativeSource_8a171b17ec6342698890aafaaa012379;


                Binding_94d5c5bee5e340ebbfe944a8f3268667.TemplateOwner = templateInstance_b1697610cece4d7b983fff6eacda01a3;

                var Binding_459ce3653bab41478b2f2fc70d650250 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_459ce3653bab41478b2f2fc70d650250.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_d8d5f89917584a8c8bc4ff6f0f128d28 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d8d5f89917584a8c8bc4ff6f0f128d28.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_459ce3653bab41478b2f2fc70d650250.RelativeSource = RelativeSource_d8d5f89917584a8c8bc4ff6f0f128d28;


                Binding_459ce3653bab41478b2f2fc70d650250.TemplateOwner = templateInstance_b1697610cece4d7b983fff6eacda01a3;

                var Binding_179a6351e5e747c097b6dfe9b15eecba = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_179a6351e5e747c097b6dfe9b15eecba.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_88e76511c949481eaa2764925ebb6063 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_88e76511c949481eaa2764925ebb6063.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_179a6351e5e747c097b6dfe9b15eecba.RelativeSource = RelativeSource_88e76511c949481eaa2764925ebb6063;


                Binding_179a6351e5e747c097b6dfe9b15eecba.TemplateOwner = templateInstance_b1697610cece4d7b983fff6eacda01a3;

                var Binding_4e81675498854d71a4d709b6716d7b09 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4e81675498854d71a4d709b6716d7b09.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_d406f20d5a4640189382f884b5971ac6 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d406f20d5a4640189382f884b5971ac6.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4e81675498854d71a4d709b6716d7b09.RelativeSource = RelativeSource_d406f20d5a4640189382f884b5971ac6;


                Binding_4e81675498854d71a4d709b6716d7b09.TemplateOwner = templateInstance_b1697610cece4d7b983fff6eacda01a3;

                var Binding_858ae89e9ef8469da123e9b8cc6a3596 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_858ae89e9ef8469da123e9b8cc6a3596.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_34c6c347ea7a492cb377d4bdf5541817 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_34c6c347ea7a492cb377d4bdf5541817.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_858ae89e9ef8469da123e9b8cc6a3596.RelativeSource = RelativeSource_34c6c347ea7a492cb377d4bdf5541817;


                Binding_858ae89e9ef8469da123e9b8cc6a3596.TemplateOwner = templateInstance_b1697610cece4d7b983fff6eacda01a3;


                Border_5722241b150d45fbb4d1ee4fa4dbd146.Child = ContentPresenter_a4f526a233764d02a7c5bbe669bc45e8;

                var Binding_c9ed86bb012c42859656bd654284f512 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c9ed86bb012c42859656bd654284f512.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_e3f0dba3a67e4c7396545eb9eb38d84b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e3f0dba3a67e4c7396545eb9eb38d84b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c9ed86bb012c42859656bd654284f512.RelativeSource = RelativeSource_e3f0dba3a67e4c7396545eb9eb38d84b;


                Binding_c9ed86bb012c42859656bd654284f512.TemplateOwner = templateInstance_b1697610cece4d7b983fff6eacda01a3;


                Border_16a0250717144b4185b239ae2a81128b.Child = Border_5722241b150d45fbb4d1ee4fa4dbd146;

                var Binding_8f2942a24f404240b50b144e052fe3ce = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8f2942a24f404240b50b144e052fe3ce.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_23299c18edf947d5b2af92a3726888ce = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_23299c18edf947d5b2af92a3726888ce.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8f2942a24f404240b50b144e052fe3ce.RelativeSource = RelativeSource_23299c18edf947d5b2af92a3726888ce;


                Binding_8f2942a24f404240b50b144e052fe3ce.TemplateOwner = templateInstance_b1697610cece4d7b983fff6eacda01a3;

                var Binding_8dc72f7ca3754ff7ab3abcc6ed07c0a2 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8dc72f7ca3754ff7ab3abcc6ed07c0a2.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_6a8d88e6de204a3daa3fc6f573c4e344 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_6a8d88e6de204a3daa3fc6f573c4e344.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8dc72f7ca3754ff7ab3abcc6ed07c0a2.RelativeSource = RelativeSource_6a8d88e6de204a3daa3fc6f573c4e344;


                Binding_8dc72f7ca3754ff7ab3abcc6ed07c0a2.TemplateOwner = templateInstance_b1697610cece4d7b983fff6eacda01a3;

                var Binding_5ed2d2f058f94bb0b8a729e291b8c6b5 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5ed2d2f058f94bb0b8a729e291b8c6b5.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_8d192618006e4116bef6ae5ce74f062d = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8d192618006e4116bef6ae5ce74f062d.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5ed2d2f058f94bb0b8a729e291b8c6b5.RelativeSource = RelativeSource_8d192618006e4116bef6ae5ce74f062d;


                Binding_5ed2d2f058f94bb0b8a729e291b8c6b5.TemplateOwner = templateInstance_b1697610cece4d7b983fff6eacda01a3;



                ContentPresenter_a4f526a233764d02a7c5bbe669bc45e8.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_94d5c5bee5e340ebbfe944a8f3268667);
                ContentPresenter_a4f526a233764d02a7c5bbe669bc45e8.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_459ce3653bab41478b2f2fc70d650250);
                ContentPresenter_a4f526a233764d02a7c5bbe669bc45e8.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_179a6351e5e747c097b6dfe9b15eecba);
                ContentPresenter_a4f526a233764d02a7c5bbe669bc45e8.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_4e81675498854d71a4d709b6716d7b09);
                ContentPresenter_a4f526a233764d02a7c5bbe669bc45e8.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_858ae89e9ef8469da123e9b8cc6a3596);
                Border_5722241b150d45fbb4d1ee4fa4dbd146.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_c9ed86bb012c42859656bd654284f512);
                Border_16a0250717144b4185b239ae2a81128b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_8f2942a24f404240b50b144e052fe3ce);
                Border_16a0250717144b4185b239ae2a81128b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_8dc72f7ca3754ff7ab3abcc6ed07c0a2);
                Border_16a0250717144b4185b239ae2a81128b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_5ed2d2f058f94bb0b8a729e291b8c6b5);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_7992c277769443de930f46f3fb34da2b, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00), Bridge.fn.cacheBind(this, this.setVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00), Bridge.fn.cacheBind(this, this.getVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_7992c277769443de930f46f3fb34da2b, Border_5722241b150d45fbb4d1ee4fa4dbd146);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_3b3361fb4b5d4063818196b227831d73, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0), Bridge.fn.cacheBind(this, this.setVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0), Bridge.fn.cacheBind(this, this.getVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_3b3361fb4b5d4063818196b227831d73, Border_5722241b150d45fbb4d1ee4fa4dbd146);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_1cba7b3a7ad346cca412affbbd17084d, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5), Bridge.fn.cacheBind(this, this.setVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5), Bridge.fn.cacheBind(this, this.getVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_1cba7b3a7ad346cca412affbbd17084d, Border_5722241b150d45fbb4d1ee4fa4dbd146);

                templateInstance_b1697610cece4d7b983fff6eacda01a3.TemplateContent = Border_16a0250717144b4185b239ae2a81128b;
                return templateInstance_b1697610cece4d7b983fff6eacda01a3;
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



                var Grid_c21520ec0e3d479196ec3ade951fc8ae = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var RowDefinition_c0efa8b9c06c46a89cfc3130d80a63ce = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_5632f7cf5bcf402785aef10c553358d8 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_8af6c572bc484029b8cfc52d05251d23 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_ef002d7c17cb4622830551eadc4bccf1 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_c21520ec0e3d479196ec3ade951fc8ae.RowDefinitions.add(RowDefinition_c0efa8b9c06c46a89cfc3130d80a63ce);
                Grid_c21520ec0e3d479196ec3ade951fc8ae.RowDefinitions.add(RowDefinition_5632f7cf5bcf402785aef10c553358d8);
                Grid_c21520ec0e3d479196ec3ade951fc8ae.RowDefinitions.add(RowDefinition_8af6c572bc484029b8cfc52d05251d23);
                Grid_c21520ec0e3d479196ec3ade951fc8ae.RowDefinitions.add(RowDefinition_ef002d7c17cb4622830551eadc4bccf1);

                var Border_ba3813ca838042a58e792c2282ad780c = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                Border_ba3813ca838042a58e792c2282ad780c.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_ba3813ca838042a58e792c2282ad780c, 0);
                var ControlForDisplayingTheFileOpe_99a9a1b4bb9b40bb92b4b246a459da1a = new Bridge.global.CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog();
                ControlForDisplayingTheFileOpe_99a9a1b4bb9b40bb92b4b246a459da1a.addFileOpened(Bridge.fn.cacheBind(this, this.OnFileOpened));
                ControlForDisplayingTheFileOpe_99a9a1b4bb9b40bb92b4b246a459da1a.Filter = "*.json,*.txt";
                ControlForDisplayingTheFileOpe_99a9a1b4bb9b40bb92b4b246a459da1a.ResultKind = Bridge.global.CSHTML5.Extensions.FileOpenDialog.ResultKind.Text;

                Border_ba3813ca838042a58e792c2282ad780c.Child = ControlForDisplayingTheFileOpe_99a9a1b4bb9b40bb92b4b246a459da1a;


                var Button_4d9ff246cdce4194bb742b4a2a02df09 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Button_4d9ff246cdce4194bb742b4a2a02df09.Content = "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430";
                this.RegisterName$1("btnCancel", Button_4d9ff246cdce4194bb742b4a2a02df09);
                Button_4d9ff246cdce4194bb742b4a2a02df09.Name = "btnCancel";
                Button_4d9ff246cdce4194bb742b4a2a02df09.addClick(Bridge.fn.cacheBind(this, this.BtnCancel_Click));
                Button_4d9ff246cdce4194bb742b4a2a02df09.Width = 250.0;
                Button_4d9ff246cdce4194bb742b4a2a02df09.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_4d9ff246cdce4194bb742b4a2a02df09, 1);
                Button_4d9ff246cdce4194bb742b4a2a02df09.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_4d9ff246cdce4194bb742b4a2a02df09.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_4d9ff246cdce4194bb742b4a2a02df09.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_4d9ff246cdce4194bb742b4a2a02df09.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_4d9ff246cdce4194bb742b4a2a02df09.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_4d9ff246cdce4194bb742b4a2a02df09.FontSize = 20.0;
                var ControlTemplate_4f423eac04084a1ebd6aba09a73f8680 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_4f423eac04084a1ebd6aba09a73f8680.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_4f423eac04084a1ebd6aba09a73f8680.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_4f423eac04084a1ebd6aba09a73f8680));

                Button_4d9ff246cdce4194bb742b4a2a02df09.Template = ControlTemplate_4f423eac04084a1ebd6aba09a73f8680;


                Grid_c21520ec0e3d479196ec3ade951fc8ae.Children.add(Border_ba3813ca838042a58e792c2282ad780c);
                Grid_c21520ec0e3d479196ec3ade951fc8ae.Children.add(Button_4d9ff246cdce4194bb742b4a2a02df09);


                this.Content = Grid_c21520ec0e3d479196ec3ade951fc8ae;



                this.btnCancel = Button_4d9ff246cdce4194bb742b4a2a02df09;



            },
            accessVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_4f423eac04084a1ebd6aba09a73f8680: function (templateOwner) {
                var templateInstance_8e96decc2e0c4735b6894ed4fafcaa95 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_8e96decc2e0c4735b6894ed4fafcaa95.TemplateOwner = templateOwner;
                var Border_a39d60b7860647f08a79506c15c0659c = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_a39d60b7860647f08a79506c15c0659c);
                Border_a39d60b7860647f08a79506c15c0659c.Name = "OuterBorder";
                Border_a39d60b7860647f08a79506c15c0659c.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_12ae8747778340e5931a3256c32f8c2d = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_12ae8747778340e5931a3256c32f8c2d);
                VisualStateGroup_12ae8747778340e5931a3256c32f8c2d.Name = "CommonStates";
                var VisualState_9e8983b51bc4406c93f53d08095f1f48 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_9e8983b51bc4406c93f53d08095f1f48);
                VisualState_9e8983b51bc4406c93f53d08095f1f48.Name = "Normal";

                var VisualState_5406e31ea56044d88656eb095f96eea9 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_5406e31ea56044d88656eb095f96eea9);
                VisualState_5406e31ea56044d88656eb095f96eea9.Name = "PointerOver";
                var Storyboard_42811bb5c8934488b7bdc9c6d84f423c = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_e6fda6c530514a0aae013cd7089ebf31 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_e6fda6c530514a0aae013cd7089ebf31, "InnerBorder");
                var DiscreteObjectKeyFrame_10fcab15f5fb401aa515617939f99556 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_10fcab15f5fb401aa515617939f99556.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_10fcab15f5fb401aa515617939f99556.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_e6fda6c530514a0aae013cd7089ebf31.KeyFrames.add(DiscreteObjectKeyFrame_10fcab15f5fb401aa515617939f99556);


                Storyboard_42811bb5c8934488b7bdc9c6d84f423c.Children.add(ObjectAnimationUsingKeyFrames_e6fda6c530514a0aae013cd7089ebf31);


                VisualState_5406e31ea56044d88656eb095f96eea9.Storyboard = Storyboard_42811bb5c8934488b7bdc9c6d84f423c;


                var VisualState_70285f67edd44582af14e6116c7460f4 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_70285f67edd44582af14e6116c7460f4);
                VisualState_70285f67edd44582af14e6116c7460f4.Name = "Pressed";
                var Storyboard_a7f3ce428244407c8f2cad8914809f7d = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_4416270d980146ab81d5a721647d4603 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_4416270d980146ab81d5a721647d4603, "InnerBorder");
                var DiscreteObjectKeyFrame_5fc421171fa842b18aeb94c373498eee = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_5fc421171fa842b18aeb94c373498eee.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_5fc421171fa842b18aeb94c373498eee.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_4416270d980146ab81d5a721647d4603.KeyFrames.add(DiscreteObjectKeyFrame_5fc421171fa842b18aeb94c373498eee);


                Storyboard_a7f3ce428244407c8f2cad8914809f7d.Children.add(ObjectAnimationUsingKeyFrames_4416270d980146ab81d5a721647d4603);


                VisualState_70285f67edd44582af14e6116c7460f4.Storyboard = Storyboard_a7f3ce428244407c8f2cad8914809f7d;


                var VisualState_58baf3189f8c4fd6aab562d2eade6f46 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_58baf3189f8c4fd6aab562d2eade6f46);
                VisualState_58baf3189f8c4fd6aab562d2eade6f46.Name = "Disabled";
                var Storyboard_79dfa76e969e4e5ca6236eae7b8e00d2 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_6a426501e4a3484799ac2b0654d9fb1c = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_6a426501e4a3484799ac2b0654d9fb1c, "InnerBorder");
                var DiscreteObjectKeyFrame_57ae26f1418e4d4185d318d8aa33d6f4 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_57ae26f1418e4d4185d318d8aa33d6f4.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_57ae26f1418e4d4185d318d8aa33d6f4.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_6a426501e4a3484799ac2b0654d9fb1c.KeyFrames.add(DiscreteObjectKeyFrame_57ae26f1418e4d4185d318d8aa33d6f4);


                Storyboard_79dfa76e969e4e5ca6236eae7b8e00d2.Children.add(ObjectAnimationUsingKeyFrames_6a426501e4a3484799ac2b0654d9fb1c);


                VisualState_58baf3189f8c4fd6aab562d2eade6f46.Storyboard = Storyboard_79dfa76e969e4e5ca6236eae7b8e00d2;


                System.Array.add(VisualStateGroup_12ae8747778340e5931a3256c32f8c2d.States, VisualState_9e8983b51bc4406c93f53d08095f1f48, Object);
                System.Array.add(VisualStateGroup_12ae8747778340e5931a3256c32f8c2d.States, VisualState_5406e31ea56044d88656eb095f96eea9, Object);
                System.Array.add(VisualStateGroup_12ae8747778340e5931a3256c32f8c2d.States, VisualState_70285f67edd44582af14e6116c7460f4, Object);
                System.Array.add(VisualStateGroup_12ae8747778340e5931a3256c32f8c2d.States, VisualState_58baf3189f8c4fd6aab562d2eade6f46, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_12ae8747778340e5931a3256c32f8c2d);

                var Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c);
                Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c.Name = "InnerBorder";
                Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_6a3917aa474a44da9f39ee8d39a2f196 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_6a3917aa474a44da9f39ee8d39a2f196);
                ContentPresenter_6a3917aa474a44da9f39ee8d39a2f196.Name = "ContentPresenter";
                var Binding_d2f04f12c66447cf828d06cf9bfd749e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d2f04f12c66447cf828d06cf9bfd749e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_34e6cd12f5334205a03c0436d377a1f4 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_34e6cd12f5334205a03c0436d377a1f4.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d2f04f12c66447cf828d06cf9bfd749e.RelativeSource = RelativeSource_34e6cd12f5334205a03c0436d377a1f4;


                Binding_d2f04f12c66447cf828d06cf9bfd749e.TemplateOwner = templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;

                var Binding_f250d7d99ab34a72a587c7d1a9a538ab = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_f250d7d99ab34a72a587c7d1a9a538ab.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_bd73ec4eb3974c2ab629d4d10ee8a174 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_bd73ec4eb3974c2ab629d4d10ee8a174.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_f250d7d99ab34a72a587c7d1a9a538ab.RelativeSource = RelativeSource_bd73ec4eb3974c2ab629d4d10ee8a174;


                Binding_f250d7d99ab34a72a587c7d1a9a538ab.TemplateOwner = templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;

                var Binding_1626407c80944e42ac3b5ed073b5471e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_1626407c80944e42ac3b5ed073b5471e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_f08fd2d32f26433e80ee59bc230a6e96 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f08fd2d32f26433e80ee59bc230a6e96.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_1626407c80944e42ac3b5ed073b5471e.RelativeSource = RelativeSource_f08fd2d32f26433e80ee59bc230a6e96;


                Binding_1626407c80944e42ac3b5ed073b5471e.TemplateOwner = templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;

                var Binding_e53ecd8d27294eebac94c78304d9b24a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e53ecd8d27294eebac94c78304d9b24a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_40c2f2216a5c4223b5ffcb108184565c = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_40c2f2216a5c4223b5ffcb108184565c.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e53ecd8d27294eebac94c78304d9b24a.RelativeSource = RelativeSource_40c2f2216a5c4223b5ffcb108184565c;


                Binding_e53ecd8d27294eebac94c78304d9b24a.TemplateOwner = templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;

                var Binding_39427445132e467aa41107aa4b0303ac = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_39427445132e467aa41107aa4b0303ac.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_3ccafbb90318441db7a778f762793445 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3ccafbb90318441db7a778f762793445.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_39427445132e467aa41107aa4b0303ac.RelativeSource = RelativeSource_3ccafbb90318441db7a778f762793445;


                Binding_39427445132e467aa41107aa4b0303ac.TemplateOwner = templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;


                Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c.Child = ContentPresenter_6a3917aa474a44da9f39ee8d39a2f196;

                var Binding_17b7da64451c45a59e8198ac69ed6bd5 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_17b7da64451c45a59e8198ac69ed6bd5.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_bb3cbed006064b9dac6183daba5aff0a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_bb3cbed006064b9dac6183daba5aff0a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_17b7da64451c45a59e8198ac69ed6bd5.RelativeSource = RelativeSource_bb3cbed006064b9dac6183daba5aff0a;


                Binding_17b7da64451c45a59e8198ac69ed6bd5.TemplateOwner = templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;


                Border_a39d60b7860647f08a79506c15c0659c.Child = Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c;

                var Binding_34e410ea7af34c07a4c02cb680157473 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_34e410ea7af34c07a4c02cb680157473.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_c6ebd7f3da464cffb088b8c55202a6da = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c6ebd7f3da464cffb088b8c55202a6da.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_34e410ea7af34c07a4c02cb680157473.RelativeSource = RelativeSource_c6ebd7f3da464cffb088b8c55202a6da;


                Binding_34e410ea7af34c07a4c02cb680157473.TemplateOwner = templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;

                var Binding_de11a9153b244c6395384ebfe98cf220 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_de11a9153b244c6395384ebfe98cf220.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_97979dea872e4902ac420360cbd69e2d = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_97979dea872e4902ac420360cbd69e2d.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_de11a9153b244c6395384ebfe98cf220.RelativeSource = RelativeSource_97979dea872e4902ac420360cbd69e2d;


                Binding_de11a9153b244c6395384ebfe98cf220.TemplateOwner = templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;

                var Binding_ddfbc4bb707d4f4188d7b70f3132fdd0 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ddfbc4bb707d4f4188d7b70f3132fdd0.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_fdb16d7c97934e1cb1cb7c8a3bb99fe6 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_fdb16d7c97934e1cb1cb7c8a3bb99fe6.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ddfbc4bb707d4f4188d7b70f3132fdd0.RelativeSource = RelativeSource_fdb16d7c97934e1cb1cb7c8a3bb99fe6;


                Binding_ddfbc4bb707d4f4188d7b70f3132fdd0.TemplateOwner = templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;



                ContentPresenter_6a3917aa474a44da9f39ee8d39a2f196.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_d2f04f12c66447cf828d06cf9bfd749e);
                ContentPresenter_6a3917aa474a44da9f39ee8d39a2f196.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_f250d7d99ab34a72a587c7d1a9a538ab);
                ContentPresenter_6a3917aa474a44da9f39ee8d39a2f196.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_1626407c80944e42ac3b5ed073b5471e);
                ContentPresenter_6a3917aa474a44da9f39ee8d39a2f196.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_e53ecd8d27294eebac94c78304d9b24a);
                ContentPresenter_6a3917aa474a44da9f39ee8d39a2f196.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_39427445132e467aa41107aa4b0303ac);
                Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_17b7da64451c45a59e8198ac69ed6bd5);
                Border_a39d60b7860647f08a79506c15c0659c.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_34e410ea7af34c07a4c02cb680157473);
                Border_a39d60b7860647f08a79506c15c0659c.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_de11a9153b244c6395384ebfe98cf220);
                Border_a39d60b7860647f08a79506c15c0659c.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_ddfbc4bb707d4f4188d7b70f3132fdd0);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_e6fda6c530514a0aae013cd7089ebf31, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0), Bridge.fn.cacheBind(this, this.setVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0), Bridge.fn.cacheBind(this, this.getVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_e6fda6c530514a0aae013cd7089ebf31, Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_4416270d980146ab81d5a721647d4603, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e), Bridge.fn.cacheBind(this, this.setVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e), Bridge.fn.cacheBind(this, this.getVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_4416270d980146ab81d5a721647d4603, Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_6a426501e4a3484799ac2b0654d9fb1c, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2), Bridge.fn.cacheBind(this, this.setVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2), Bridge.fn.cacheBind(this, this.getVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_6a426501e4a3484799ac2b0654d9fb1c, Border_8ad5b164b0bc4c2b89b97ee77c2bcc7c);

                templateInstance_8e96decc2e0c4735b6894ed4fafcaa95.TemplateContent = Border_a39d60b7860647f08a79506c15c0659c;
                return templateInstance_8e96decc2e0c4735b6894ed4fafcaa95;
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



                var Grid_dcf249d0cd334f88a8498df4b46afc3c = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                Grid_dcf249d0cd334f88a8498df4b46afc3c.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 0, $t));

                this.Content = Grid_dcf249d0cd334f88a8498df4b46afc3c;







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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDU2h0bWwuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIm9iai9SZWxlYXNlL0FwcC54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlMS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlSG9tZS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlVXBsb2FkLnhhbWwuZy5jcyIsIm9iai9SZWxlYXNlL1NlY29uZFBhZ2UueGFtbC5nLmNzIiwiQXBwLnhhbWwuY3MiLCJQYWdlMS54YW1sLmNzIiwiUGFnZUhvbWUueGFtbC5jcyIsIlBhZ2VVcGxvYWQueGFtbC5jcyIsIlNlY29uZFBhZ2UueGFtbC5jcyIsIkZpbGVPcGVuRGlhbG9nLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7b0JBUVFBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7O29CQ0RwRUEsV0FBMkJBLEFBQU9BO29CQUNsQ0EsT0FBT0EsbUVBQTZEQTs7Ozs7Ozs7OztvQkNEcEVBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7WUptRXhFQSxJQUFJQTs7Ozs7Ozs7O2dCSy9ESUE7Ozs7Z0JBT0FBLGFBQWFBLElBQUlBO2dCQUNqQkEsZ0JBQWdCQSxJQUFJQSw0QkFBcUJBO2dCQUN6Q0EseUNBQXlCQTs7Ozs7Z0JMbUJ6QkEsSUFBSUE7b0JBQ0FBOztnQkFDSkE7OztnQkFHQUEsSUFBSUE7b0JBRUFBLEFBQUNBLFlBQW1DQSxBQUFRQTs7OztnQkFLNURBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7Z0JBR0FBLDBEQUEwREEsSUFBSUE7Z0JBQzlEQSxpQkFBaUJBOztnQkFF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QWdCQSxNQUFNQSxJQUFJQSxzREFBb0JBLFFBQVFBOzs7Z0JBRTlEQSxvQkFBdUJBOztnQkFHdkJBLGVBQVVBOztnQkFHVkE7Z0JBZ0NVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBQWNBOzs7OztxQ0FBdURBOzs7Ozs7O2tEQUF6Q0E7Ozs7aUNBRzNCQTtnQkFHWEEsbUJBQW1CQSx1QkFBdUJBOztnQkFLMUNBLGVBQW9CQTtnQkFDcEJBLGdCQUF5QkEsS0FBSUE7Z0JBQzdCQSxJQUFJQTtvQkFFQUEsY0FBY0E7O29CQUlkQSxLQUFLQSxXQUFXQSxJQUFJQSxpQkFBaUJBO3dCQUVqQ0EsY0FBY0EsNEJBQVNBLEdBQVRBOzs7Z0JBR3RCQSxxQkFBd0JBLGlFQUFpQkE7O2dCQUd6Q0EsSUFBSUEsQ0FBQ0EsaUNBQTBCQTtvQkFFM0JBLEFBQXFEQSxzQkFBY0E7O29CQUluRUEsQUFBdURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQXlDcENBLFFBQWVBOzs7O2dCQUV0Q0EsSUFBSUEsZUFBY0E7b0JBRWRBLFlBQVlBLHlCQUF3QkEsaUJBQUNBO3VCQUVwQ0EsSUFBSUEsZUFBY0E7b0JBRW5CQSxlQUFlQSxpQkFBQ0E7O29CQUloQkEsTUFBTUEsSUFBSUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gPENTSFRNTDU+PFhhbWxIYXNoPjVBMjRGRDk0RUQ1ODM2QUM2QkZDNzZGNzc1QjZFRDBGPC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTYuMDQuMjAyMCA0OjAyOjA4PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgEFwcMeAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuQXBwKTtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlR5cGVJbnN0YW50aWF0aW9uSGVscGVyLkluc3RhbnRpYXRlKHR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGF1dG8tZ2VuZXJhdGVkIGJ5IFwiQyMvWEFNTCBmb3IgSFRNTDVcIlxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxucGFydGlhbCBjbGFzcyBBcHAgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5BcHBsaWNhdGlvblxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxuXHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxBcHAueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRSb290UGF0aCA9IEBcIk91dHB1dFxcXCI7XHJcbmdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5TdGFydHVwQXNzZW1ibHlJbmZvLk91dHB1dEFwcEZpbGVzUGF0aCA9IEBcImFwcC1jc2h0bWw1XFxhcHBcXFwiO1xyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRMaWJyYXJpZXNQYXRoID0gQFwiYXBwLWNzaHRtbDVcXGxpYnNcXFwiO1xyXG5nbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuU3RhcnR1cEFzc2VtYmx5SW5mby5PdXRwdXRSZXNvdXJjZXNQYXRoID0gQFwiYXBwLWNzaHRtbDVcXHJlc1xcXCI7XHJcblxyXG5cclxudmFyIFJlc291cmNlRGljdGlvbmFyeV8zNjA1MDYwY2NiZDI0OTg0OTJhMTE2NTc2OWYyM2FlOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5SZXNvdXJjZURpY3Rpb25hcnkoKTtcclxudGhpcy5SZXNvdXJjZXMgPSBSZXNvdXJjZURpY3Rpb25hcnlfMzYwNTA2MGNjYmQyNDk4NDkyYTExNjU3NjlmMjNhZTk7XHJcblxyXG50aGlzLlJlc291cmNlcyA9IFJlc291cmNlRGljdGlvbmFyeV8zNjA1MDYwY2NiZDI0OTg0OTJhMTE2NTc2OWYyM2FlOTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyB2b2lkIE1haW4oKVxyXG57XHJcbiAgICBuZXcgQXBwKCk7XHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD4yQkVBRkM3QTE1Q0UxMTcyMzVDQjRFOUQxMTIyMEFBQTwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE2LjA0LjIwMjAgNDowMjowOTwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BQYWdlMceAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuUGFnZTEpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFBhZ2UxIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50Rm9yTGlzdDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbiBidG5DYW5jZWw7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24gYnRuVXBsb2FkO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0blByb2Nlc3Npbmc7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5UZXh0Qm94IHR4dEZpbGU7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5JbWFnZSBpZGVmX0pwZWc7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIgYm9yZGVySURFRjtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkltYWdlIHVtbF9KcGVnO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGJvcmRlclVNTDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQgTGF5b3V0R3JpZDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50O1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZTEueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfODE0NzBmODliZTczNGE5MmE5MDU0NDkyMjE2YmFkNGYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF85YTk4N2ZhOTAxYWU0MmIzOGRkOTI3OGQwNzY5NWMzMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOWE5ODdmYTkwMWFlNDJiMzhkZDkyNzhkMDc2OTVjMzAuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF85YTk4N2ZhOTAxYWU0MmIzOGRkOTI3OGQwNzY5NWMzMC5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfZjY3NjhkNWZlMjJjNGU5ZmIwMzRhMDQxOWYzYTQwYTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9mNjc2OGQ1ZmUyMmM0ZTlmYjAzNGEwNDE5ZjNhNDBhNy5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wX2Y2NzY4ZDVmZTIyYzRlOWZiMDM0YTA0MTlmM2E0MGE3Lk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF80YmJhMDA1OTZjZGU0YzZjOGY4YTE2ZmZlODhkZDQxZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzRiYmEwMDU5NmNkZTRjNmM4ZjhhMTZmZmU4OGRkNDFlLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfNGJiYTAwNTk2Y2RlNGM2YzhmOGExNmZmZTg4ZGQ0MWUuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoXzlhOTg3ZmE5MDFhZTQyYjM4ZGQ5Mjc4ZDA3Njk1YzMwLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9mNjc2OGQ1ZmUyMmM0ZTlmYjAzNGEwNDE5ZjNhNDBhNyk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfOWE5ODdmYTkwMWFlNDJiMzhkZDkyNzhkMDc2OTVjMzAuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzRiYmEwMDU5NmNkZTRjNmM4ZjhhMTZmZmU4OGRkNDFlKTtcclxuXHJcblxyXG5HcmlkXzgxNDcwZjg5YmU3MzRhOTJhOTA1NDQ5MjIxNmJhZDRmLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzlhOTg3ZmE5MDFhZTQyYjM4ZGQ5Mjc4ZDA3Njk1YzMwO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fM2EyZTI3N2ExMzg3NGZjZDgzMzI0ZmE1ZDMyM2M3MjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzNhMmUyNzdhMTM4NzRmY2Q4MzMyNGZhNWQzMjNjNzIxLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzI4OWIzMTkyMzI2NTQxNmY5NWJmNzc2MGE3YjMzNGQ0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl8yODliMzE5MjMyNjU0MTZmOTViZjc3NjBhN2IzMzRkNC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2FiZDljMTgyNmE3ODQyNGNhMDhmZmZiOTc4ZWI1MGRkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl9hYmQ5YzE4MjZhNzg0MjRjYTA4ZmZmYjk3OGViNTBkZC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkXzgxNDcwZjg5YmU3MzRhOTJhOTA1NDQ5MjIxNmJhZDRmLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzNhMmUyNzdhMTM4NzRmY2Q4MzMyNGZhNWQzMjNjNzIxKTtcclxuR3JpZF84MTQ3MGY4OWJlNzM0YTkyYTkwNTQ0OTIyMTZiYWQ0Zi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8yODliMzE5MjMyNjU0MTZmOTViZjc3NjBhN2IzMzRkNCk7XHJcbkdyaWRfODE0NzBmODliZTczNGE5MmE5MDU0NDkyMjE2YmFkNGYuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fYWJkOWMxODI2YTc4NDI0Y2EwOGZmZmI5NzhlYjUwZGQpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fYmRjODgzZDQzNzZlNGM5NTkxM2ZhNDE3Y2ZjNTdmNDggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5Db2x1bW5EZWZpbml0aW9uX2JkYzg4M2Q0Mzc2ZTRjOTU5MTNmYTQxN2NmYzU3ZjQ4LldpZHRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl8zYzBiMWU4OGVkMDE0ZTQwOTFiNjc4MGFiYjEwYjYyZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcblxyXG5HcmlkXzgxNDcwZjg5YmU3MzRhOTJhOTA1NDQ5MjIxNmJhZDRmLkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uX2JkYzg4M2Q0Mzc2ZTRjOTU5MTNmYTQxN2NmYzU3ZjQ4KTtcclxuR3JpZF84MTQ3MGY4OWJlNzM0YTkyYTkwNTQ0OTIyMTZiYWQ0Zi5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl8zYzBiMWU4OGVkMDE0ZTQwOTFiNjc4MGFiYjEwYjYyZCk7XHJcblxyXG52YXIgQm9yZGVyXzY0NGRlNTkxOTY1ZTQ0MmM4ZThiNGRjYTVmODQ4N2QxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImVsZW1lbnRGb3JMaXN0XCIsIEJvcmRlcl82NDRkZTU5MTk2NWU0NDJjOGU4YjRkY2E1Zjg0ODdkMSk7XHJcbkJvcmRlcl82NDRkZTU5MTk2NWU0NDJjOGU4YjRkY2E1Zjg0ODdkMS5OYW1lID0gXCJlbGVtZW50Rm9yTGlzdFwiO1xyXG5Cb3JkZXJfNjQ0ZGU1OTE5NjVlNDQyYzhlOGI0ZGNhNWY4NDg3ZDEuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQm9yZGVyXzY0NGRlNTkxOTY1ZTQ0MmM4ZThiNGRjYTVmODQ4N2QxLDApO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oQm9yZGVyXzY0NGRlNTkxOTY1ZTQ0MmM4ZThiNGRjYTVmODQ4N2QxLDMpO1xyXG5Cb3JkZXJfNjQ0ZGU1OTE5NjVlNDQyYzhlOGI0ZGNhNWY4NDg3ZDEuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDAsIEcgPSAoYnl0ZSkyMDAsIEIgPSAoYnl0ZSkyMDAgfSk7XHJcbkJvcmRlcl82NDRkZTU5MTk2NWU0NDJjOGU4YjRkY2E1Zjg0ODdkMS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfNjQ0ZGU1OTE5NjVlNDQyYzhlOGI0ZGNhNWY4NDg3ZDEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIEdyaWRfMGYxNGE0MmNjNjk1NDcwMWFmN2FiNTQ3MTc5NDQyNzIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF9lMDk0YmIzYzRkMDE0MDBkYWYzZmQzNzRmOTMzYzE2YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfZTA5NGJiM2M0ZDAxNDAwZGFmM2ZkMzc0ZjkzM2MxNmEuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9lMDk0YmIzYzRkMDE0MDBkYWYzZmQzNzRmOTMzYzE2YS5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfOGY1OTMwYTgyZmIyNDc5NDg0ZjM5OWYwNDAwNzA1YmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF84ZjU5MzBhODJmYjI0Nzk0ODRmMzk5ZjA0MDA3MDViZi5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzhmNTkzMGE4MmZiMjQ3OTQ4NGYzOTlmMDQwMDcwNWJmLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF80OWFhNWZhMWFjZGY0MzUzOGE0NGFiYTM2NTBiOTI2MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzQ5YWE1ZmExYWNkZjQzNTM4YTQ0YWJhMzY1MGI5MjYyLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfNDlhYTVmYTFhY2RmNDM1MzhhNDRhYmEzNjUwYjkyNjIuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoX2UwOTRiYjNjNGQwMTQwMGRhZjNmZDM3NGY5MzNjMTZhLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF84ZjU5MzBhODJmYjI0Nzk0ODRmMzk5ZjA0MDA3MDViZik7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfZTA5NGJiM2M0ZDAxNDAwZGFmM2ZkMzc0ZjkzM2MxNmEuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzQ5YWE1ZmExYWNkZjQzNTM4YTQ0YWJhMzY1MGI5MjYyKTtcclxuXHJcblxyXG5HcmlkXzBmMTRhNDJjYzY5NTQ3MDFhZjdhYjU0NzE3OTQ0MjcyLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoX2UwOTRiYjNjNGQwMTQwMGRhZjNmZDM3NGY5MzNjMTZhO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMDA0OTdmOGQ5NDQ0NGRhZGEwYjBkOWIxNTc2Y2FhYTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNWE0YTM0ZGI4ZTkzNDg0MDk3YzBmOTE1NWI4YmZjZWEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzVhNGEzNGRiOGU5MzQ4NDA5N2MwZjkxNTViOGJmY2VhLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fYTQxNGNiYmFkNTZmNDUyZjgxYmNhNzUyNWNhOTg0MTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uX2E0MTRjYmJhZDU2ZjQ1MmY4MWJjYTc1MjVjYTk4NDE5LkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fOTc0YmQ1MDJlYTdhNDQzMjg3MWQxNTkzNDU4NDMyNzkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzk3NGJkNTAyZWE3YTQ0MzI4NzFkMTU5MzQ1ODQzMjc5LkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNzk0OWFkZGEzYTlkNDI3ZGJiMzA1YjEzYzgxYTYxZTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF8wZjE0YTQyY2M2OTU0NzAxYWY3YWI1NDcxNzk0NDI3Mi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8wMDQ5N2Y4ZDk0NDQ0ZGFkYTBiMGQ5YjE1NzZjYWFhNCk7XHJcbkdyaWRfMGYxNGE0MmNjNjk1NDcwMWFmN2FiNTQ3MTc5NDQyNzIuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNWE0YTM0ZGI4ZTkzNDg0MDk3YzBmOTE1NWI4YmZjZWEpO1xyXG5HcmlkXzBmMTRhNDJjYzY5NTQ3MDFhZjdhYjU0NzE3OTQ0MjcyLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2E0MTRjYmJhZDU2ZjQ1MmY4MWJjYTc1MjVjYTk4NDE5KTtcclxuR3JpZF8wZjE0YTQyY2M2OTU0NzAxYWY3YWI1NDcxNzk0NDI3Mi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl85NzRiZDUwMmVhN2E0NDMyODcxZDE1OTM0NTg0MzI3OSk7XHJcbkdyaWRfMGYxNGE0MmNjNjk1NDcwMWFmN2FiNTQ3MTc5NDQyNzIuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNzk0OWFkZGEzYTlkNDI3ZGJiMzA1YjEzYzgxYTYxZTcpO1xyXG5cclxudmFyIEJ1dHRvbl9lODVlYzlhMGJmOTI0NmZlYTU5ZmQ4NzQxNzYxYmJmMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2U4NWVjOWEwYmY5MjQ2ZmVhNTlmZDg3NDE3NjFiYmYzLDEpO1xyXG5CdXR0b25fZTg1ZWM5YTBiZjkyNDZmZWE1OWZkODc0MTc2MWJiZjMuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTAsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbkJ1dHRvbl9lODVlYzlhMGJmOTI0NmZlYTU5ZmQ4NzQxNzYxYmJmMy5Db250ZW50ID0gQFwiSlNPTlwiO1xyXG5CdXR0b25fZTg1ZWM5YTBiZjkyNDZmZWE1OWZkODc0MTc2MWJiZjMuRm9udFNpemUgPSAyMEQ7XHJcbkJ1dHRvbl9lODVlYzlhMGJmOTI0NmZlYTU5ZmQ4NzQxNzYxYmJmMy5Gb3JlZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5CdXR0b25fZTg1ZWM5YTBiZjkyNDZmZWE1OWZkODc0MTc2MWJiZjMuQ2xpY2sgKz0gRmlyc3RfQ2xpY2s7XHJcblxyXG52YXIgQnV0dG9uXzViZmNhMWE0YjgxYzRhNGFiZjA5OTA4Mzg3NzZkY2QxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fNWJmY2ExYTRiODFjNGE0YWJmMDk5MDgzODc3NmRjZDEsMik7XHJcbkJ1dHRvbl81YmZjYTFhNGI4MWM0YTRhYmYwOTkwODM4Nzc2ZGNkMS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMCwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9KTtcclxuQnV0dG9uXzViZmNhMWE0YjgxYzRhNGFiZjA5OTA4Mzg3NzZkY2QxLkNvbnRlbnQgPSBAXCLQlNC40LDQs9GA0LDQvNC80LAgSURFRjBcIjtcclxuQnV0dG9uXzViZmNhMWE0YjgxYzRhNGFiZjA5OTA4Mzg3NzZkY2QxLkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fNWJmY2ExYTRiODFjNGE0YWJmMDk5MDgzODc3NmRjZDEuRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzViZmNhMWE0YjgxYzRhNGFiZjA5OTA4Mzg3NzZkY2QxLkNsaWNrICs9IFNlY29uZF9DbGljaztcclxuXHJcbnZhciBCdXR0b25fYWNlMDAxYzZiNDIxNGE0Njk3ODdkNjBkOGE3ZGM0YjkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl9hY2UwMDFjNmI0MjE0YTQ2OTc4N2Q2MGQ4YTdkYzRiOSwzKTtcclxuQnV0dG9uX2FjZTAwMWM2YjQyMTRhNDY5Nzg3ZDYwZDhhN2RjNGI5LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkwLCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH0pO1xyXG5CdXR0b25fYWNlMDAxYzZiNDIxNGE0Njk3ODdkNjBkOGE3ZGM0YjkuQ29udGVudCA9IEBcItCU0LjQsNCz0YDQsNC80LzQsCBVTUxcIjtcclxuQnV0dG9uX2FjZTAwMWM2YjQyMTRhNDY5Nzg3ZDYwZDhhN2RjNGI5LkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fYWNlMDAxYzZiNDIxNGE0Njk3ODdkNjBkOGE3ZGM0YjkuRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uX2FjZTAwMWM2YjQyMTRhNDY5Nzg3ZDYwZDhhN2RjNGI5LkNsaWNrICs9IFRoaXJkX0NsaWNrO1xyXG5cclxuR3JpZF8wZjE0YTQyY2M2OTU0NzAxYWY3YWI1NDcxNzk0NDI3Mi5DaGlsZHJlbi5BZGQoQnV0dG9uX2U4NWVjOWEwYmY5MjQ2ZmVhNTlmZDg3NDE3NjFiYmYzKTtcclxuR3JpZF8wZjE0YTQyY2M2OTU0NzAxYWY3YWI1NDcxNzk0NDI3Mi5DaGlsZHJlbi5BZGQoQnV0dG9uXzViZmNhMWE0YjgxYzRhNGFiZjA5OTA4Mzg3NzZkY2QxKTtcclxuR3JpZF8wZjE0YTQyY2M2OTU0NzAxYWY3YWI1NDcxNzk0NDI3Mi5DaGlsZHJlbi5BZGQoQnV0dG9uX2FjZTAwMWM2YjQyMTRhNDY5Nzg3ZDYwZDhhN2RjNGI5KTtcclxuXHJcblxyXG5Cb3JkZXJfNjQ0ZGU1OTE5NjVlNDQyYzhlOGI0ZGNhNWY4NDg3ZDEuQ2hpbGQgPSBHcmlkXzBmMTRhNDJjYzY5NTQ3MDFhZjdhYjU0NzE3OTQ0MjcyO1xyXG5cclxuXHJcbnZhciBCb3JkZXJfNGY2MjI1N2Q5MGRjNDA0MTg1ZDQ2NDE0ZTcxNTljMmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfNGY2MjI1N2Q5MGRjNDA0MTg1ZDQ2NDE0ZTcxNTljMmQpO1xyXG5Cb3JkZXJfNGY2MjI1N2Q5MGRjNDA0MTg1ZDQ2NDE0ZTcxNTljMmQuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfNGY2MjI1N2Q5MGRjNDA0MTg1ZDQ2NDE0ZTcxNTljMmQuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3dTcGFuKEJvcmRlcl80ZjYyMjU3ZDkwZGM0MDQxODVkNDY0MTRlNzE1OWMyZCwzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJvcmRlcl80ZjYyMjU3ZDkwZGM0MDQxODVkNDY0MTRlNzE1OWMyZCwyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQm9yZGVyXzRmNjIyNTdkOTBkYzQwNDE4NWQ0NjQxNGU3MTU5YzJkLDEpO1xyXG5Cb3JkZXJfNGY2MjI1N2Q5MGRjNDA0MTg1ZDQ2NDE0ZTcxNTljMmQuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDAsIEcgPSAoYnl0ZSkyMDAsIEIgPSAoYnl0ZSkyMDAgfSk7XHJcbkJvcmRlcl80ZjYyMjU3ZDkwZGM0MDQxODVkNDY0MTRlNzE1OWMyZC5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfNGY2MjI1N2Q5MGRjNDA0MTg1ZDQ2NDE0ZTcxNTljMmQuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfMTIxNmJlOWViOWJmNDgxMjkxMjU3NWFkNzY0ODUwZjYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzEyMTZiZTllYjliZjQ4MTI5MTI1NzVhZDc2NDg1MGY2LkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfMTIxNmJlOWViOWJmNDgxMjkxMjU3NWFkNzY0ODUwZjYuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wXzYxOTQxMjAzNGVmNjQ0OWM4MmI4NDE2ZmE4MWEwNDY3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfNjE5NDEyMDM0ZWY2NDQ5YzgyYjg0MTZmYTgxYTA0NjcuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF82MTk0MTIwMzRlZjY0NDljODJiODQxNmZhODFhMDQ2Ny5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfMWMyZGQ4NmQ4MjU3NDZhOGIwZDkzMWI2ZDk1N2JmYjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF8xYzJkZDg2ZDgyNTc0NmE4YjBkOTMxYjZkOTU3YmZiNS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wXzFjMmRkODZkODI1NzQ2YThiMGQ5MzFiNmQ5NTdiZmI1Lk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF8xMjE2YmU5ZWI5YmY0ODEyOTEyNTc1YWQ3NjQ4NTBmNi5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfNjE5NDEyMDM0ZWY2NDQ5YzgyYjg0MTZmYTgxYTA0NjcpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzEyMTZiZTllYjliZjQ4MTI5MTI1NzVhZDc2NDg1MGY2LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF8xYzJkZDg2ZDgyNTc0NmE4YjBkOTMxYjZkOTU3YmZiNSk7XHJcblxyXG5cclxuQm9yZGVyXzRmNjIyNTdkOTBkYzQwNDE4NWQ0NjQxNGU3MTU5YzJkLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzEyMTZiZTllYjliZjQ4MTI5MTI1NzVhZDc2NDg1MGY2O1xyXG5cclxudmFyIEdyaWRfZmQwZDQ1YmYwMzc4NDQwZjliMDM0NzdmNjU3NTUwYjkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dEdyaWRcIiwgR3JpZF9mZDBkNDViZjAzNzg0NDBmOWIwMzQ3N2Y2NTc1NTBiOSk7XHJcbkdyaWRfZmQwZDQ1YmYwMzc4NDQwZjliMDM0NzdmNjU3NTUwYjkuTmFtZSA9IFwiTGF5b3V0R3JpZFwiO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF8zMTQ0Yjc4ZjVlZjM0ZjgzOGQ1MWY5ODgzMTU4MjNjYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfMzE0NGI3OGY1ZWYzNGY4MzhkNTFmOTg4MzE1ODIzY2EuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF8zMTQ0Yjc4ZjVlZjM0ZjgzOGQ1MWY5ODgzMTU4MjNjYS5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfOWM4YTRiYWQzMjZmNGJhODllN2RmOWFhM2QzMmUyYjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF85YzhhNGJhZDMyNmY0YmE4OWU3ZGY5YWEzZDMyZTJiNS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzljOGE0YmFkMzI2ZjRiYTg5ZTdkZjlhYTNkMzJlMmI1Lk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF9hN2ZiMWFhYWVjZTg0YTlkYWQ0YmRjNmYxMWZhZDk0ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wX2E3ZmIxYWFhZWNlODRhOWRhZDRiZGM2ZjExZmFkOTRmLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfYTdmYjFhYWFlY2U4NGE5ZGFkNGJkYzZmMTFmYWQ5NGYuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoXzMxNDRiNzhmNWVmMzRmODM4ZDUxZjk4ODMxNTgyM2NhLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF85YzhhNGJhZDMyNmY0YmE4OWU3ZGY5YWEzZDMyZTJiNSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfMzE0NGI3OGY1ZWYzNGY4MzhkNTFmOTg4MzE1ODIzY2EuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wX2E3ZmIxYWFhZWNlODRhOWRhZDRiZGM2ZjExZmFkOTRmKTtcclxuXHJcblxyXG5HcmlkX2ZkMGQ0NWJmMDM3ODQ0MGY5YjAzNDc3ZjY1NzU1MGI5LkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzMxNDRiNzhmNWVmMzRmODM4ZDUxZjk4ODMxNTgyM2NhO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMTcyM2M2YTc5NjRlNDNhNmE3YTZkYWY1YmJiNDZmYzEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzE3MjNjNmE3OTY0ZTQzYTZhN2E2ZGFmNWJiYjQ2ZmMxLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzNjMzEyMTQ4OTk2NjRhMWQ4YzYzZDY4MzE3ZmFhYWM5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl8zYzMxMjE0ODk5NjY0YTFkOGM2M2Q2ODMxN2ZhYWFjOS5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzk1MWRlYWRjNWE3NzQ4YjM5MTQ1NTg3MGY3ZWE4NmUxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl85NTFkZWFkYzVhNzc0OGIzOTE0NTU4NzBmN2VhODZlMS5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkX2ZkMGQ0NWJmMDM3ODQ0MGY5YjAzNDc3ZjY1NzU1MGI5LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzE3MjNjNmE3OTY0ZTQzYTZhN2E2ZGFmNWJiYjQ2ZmMxKTtcclxuR3JpZF9mZDBkNDViZjAzNzg0NDBmOWIwMzQ3N2Y2NTc1NTBiOS5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8zYzMxMjE0ODk5NjY0YTFkOGM2M2Q2ODMxN2ZhYWFjOSk7XHJcbkdyaWRfZmQwZDQ1YmYwMzc4NDQwZjliMDM0NzdmNjU3NTUwYjkuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fOTUxZGVhZGM1YTc3NDhiMzkxNDU1ODcwZjdlYTg2ZTEpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMGQ4ZTZiNWJlNjdjNGIyOGEwYzA5ZDUxZjAzN2Y2MjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fNGM4ZDJiYzk2ZTBiNDExYjg5Y2ZmZmNlYjA4YjNjM2QgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF9mZDBkNDViZjAzNzg0NDBmOWIwMzQ3N2Y2NTc1NTBiOS5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl8wZDhlNmI1YmU2N2M0YjI4YTBjMDlkNTFmMDM3ZjYyNSk7XHJcbkdyaWRfZmQwZDQ1YmYwMzc4NDQwZjliMDM0NzdmNjU3NTUwYjkuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fNGM4ZDJiYzk2ZTBiNDExYjg5Y2ZmZmNlYjA4YjNjM2QpO1xyXG5cclxudmFyIEJ1dHRvbl9hOWZiNGQwNWIzNGQ0NzdjYTMwYjE5ZmI0N2MxNWY0YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5DYW5jZWxcIiwgQnV0dG9uX2E5ZmI0ZDA1YjM0ZDQ3N2NhMzBiMTlmYjQ3YzE1ZjRiKTtcclxuQnV0dG9uX2E5ZmI0ZDA1YjM0ZDQ3N2NhMzBiMTlmYjQ3YzE1ZjRiLk5hbWUgPSBcImJ0bkNhbmNlbFwiO1xyXG5CdXR0b25fYTlmYjRkMDViMzRkNDc3Y2EzMGIxOWZiNDdjMTVmNGIuQ29udGVudCA9IEBcItCS0LXRgNC90YPRgtGM0YHRjyDQvdCwINCz0LvQsNCy0L3Rg9GOXCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl9hOWZiNGQwNWIzNGQ0NzdjYTMwYjE5ZmI0N2MxNWY0YiwyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJ1dHRvbl9hOWZiNGQwNWIzNGQ0NzdjYTMwYjE5ZmI0N2MxNWY0YiwyKTtcclxuQnV0dG9uX2E5ZmI0ZDA1YjM0ZDQ3N2NhMzBiMTlmYjQ3YzE1ZjRiLldpZHRoID0gMjgwRDtcclxuQnV0dG9uX2E5ZmI0ZDA1YjM0ZDQ3N2NhMzBiMTlmYjQ3YzE1ZjRiLkhlaWdodCA9IDUwRDtcclxuQnV0dG9uX2E5ZmI0ZDA1YjM0ZDQ3N2NhMzBiMTlmYjQ3YzE1ZjRiLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyMzgsIEIgPSAoYnl0ZSkyMzggfSk7XHJcbkJ1dHRvbl9hOWZiNGQwNWIzNGQ0NzdjYTMwYjE5ZmI0N2MxNWY0Yi5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uX2E5ZmI0ZDA1YjM0ZDQ3N2NhMzBiMTlmYjQ3YzE1ZjRiLkNsaWNrICs9IEJ1dHRvbl9DbGljaztcclxuQnV0dG9uX2E5ZmI0ZDA1YjM0ZDQ3N2NhMzBiMTlmYjQ3YzE1ZjRiLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl9hOWZiNGQwNWIzNGQ0NzdjYTMwYjE5ZmI0N2MxNWY0Yi5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfN2ZkNTBmMGU3NTI2NDAwOTk1NjI3ZDNhNTdhNzI4MjYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV83ZmQ1MGYwZTc1MjY0MDA5OTU2MjdkM2E1N2E3MjgyNi5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV83ZmQ1MGYwZTc1MjY0MDA5OTU2MjdkM2E1N2E3MjgyNi5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV83ZmQ1MGYwZTc1MjY0MDA5OTU2MjdkM2E1N2E3MjgyNik7XHJcblxyXG5CdXR0b25fYTlmYjRkMDViMzRkNDc3Y2EzMGIxOWZiNDdjMTVmNGIuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfN2ZkNTBmMGU3NTI2NDAwOTk1NjI3ZDNhNTdhNzI4MjY7XHJcblxyXG5cclxudmFyIEJ1dHRvbl85MzI3NDMxMThlMDc0MjA3YjY1YzY4N2I3YTNkMjJjZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5VcGxvYWRcIiwgQnV0dG9uXzkzMjc0MzExOGUwNzQyMDdiNjVjNjg3YjdhM2QyMmNlKTtcclxuQnV0dG9uXzkzMjc0MzExOGUwNzQyMDdiNjVjNjg3YjdhM2QyMmNlLk5hbWUgPSBcImJ0blVwbG9hZFwiO1xyXG5CdXR0b25fOTMyNzQzMTE4ZTA3NDIwN2I2NWM2ODdiN2EzZDIyY2UuQ29udGVudCA9IEBcItCX0LDQs9GA0YPQt9C40YLRjCBKU09OINGE0LDQudC7XCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl85MzI3NDMxMThlMDc0MjA3YjY1YzY4N2I3YTNkMjJjZSwwKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJ1dHRvbl85MzI3NDMxMThlMDc0MjA3YjY1YzY4N2I3YTNkMjJjZSwxKTtcclxuQnV0dG9uXzkzMjc0MzExOGUwNzQyMDdiNjVjNjg3YjdhM2QyMmNlLldpZHRoID0gMjgwRDtcclxuQnV0dG9uXzkzMjc0MzExOGUwNzQyMDdiNjVjNjg3YjdhM2QyMmNlLkhlaWdodCA9IDUwRDtcclxuQnV0dG9uXzkzMjc0MzExOGUwNzQyMDdiNjVjNjg3YjdhM2QyMmNlLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNDksIEcgPSAoYnl0ZSkyMjIsIEIgPSAoYnl0ZSkyNDIgfSk7XHJcbkJ1dHRvbl85MzI3NDMxMThlMDc0MjA3YjY1YzY4N2I3YTNkMjJjZS5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uXzkzMjc0MzExOGUwNzQyMDdiNjVjNjg3YjdhM2QyMmNlLkNsaWNrICs9IEJ0blVwbG9hZF9DbGljaztcclxuQnV0dG9uXzkzMjc0MzExOGUwNzQyMDdiNjVjNjg3YjdhM2QyMmNlLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl85MzI3NDMxMThlMDc0MjA3YjY1YzY4N2I3YTNkMjJjZS5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl85MzI3NDMxMThlMDc0MjA3YjY1YzY4N2I3YTNkMjJjZS5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uXzkzMjc0MzExOGUwNzQyMDdiNjVjNjg3YjdhM2QyMmNlLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG52YXIgQ29udHJvbFRlbXBsYXRlXzgwNmI0ZWE1NmE2ZjQ1ZjdiZGQwMzRlMGI3ZDA4Y2UwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2xUZW1wbGF0ZSgpO1xyXG5Db250cm9sVGVtcGxhdGVfODA2YjRlYTU2YTZmNDVmN2JkZDAzNGUwYjdkMDhjZTAuVGFyZ2V0VHlwZSA9IHR5cGVvZihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24pO1xyXG5Db250cm9sVGVtcGxhdGVfODA2YjRlYTU2YTZmNDVmN2JkZDAzNGUwYjdkMDhjZTAuU2V0TWV0aG9kVG9JbnN0YW50aWF0ZUZyYW1ld29ya1RlbXBsYXRlKChTeXN0ZW0uRnVuYzxXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCxXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZT4pdGhpcy5JbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfODA2YjRlYTU2YTZmNDVmN2JkZDAzNGUwYjdkMDhjZTApO1xyXG5cclxuQnV0dG9uXzkzMjc0MzExOGUwNzQyMDdiNjVjNjg3YjdhM2QyMmNlLlRlbXBsYXRlID0gQ29udHJvbFRlbXBsYXRlXzgwNmI0ZWE1NmE2ZjQ1ZjdiZGQwMzRlMGI3ZDA4Y2UwO1xyXG5cclxuXHJcbnZhciBCdXR0b25fODhkZjk3YTFhNTU1NDRlOWFlNmJiODMzNzFhNjdiZTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuUHJvY2Vzc2luZ1wiLCBCdXR0b25fODhkZjk3YTFhNTU1NDRlOWFlNmJiODMzNzFhNjdiZTgpO1xyXG5CdXR0b25fODhkZjk3YTFhNTU1NDRlOWFlNmJiODMzNzFhNjdiZTguTmFtZSA9IFwiYnRuUHJvY2Vzc2luZ1wiO1xyXG5CdXR0b25fODhkZjk3YTFhNTU1NDRlOWFlNmJiODMzNzFhNjdiZTguQ29udGVudCA9IEBcItCf0L7RgdGC0YDQvtC40YLRjCDQtNC40LDQs9GA0LDQvNC80YNcIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uXzg4ZGY5N2ExYTU1NTQ0ZTlhZTZiYjgzMzcxYTY3YmU4LDApO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCdXR0b25fODhkZjk3YTFhNTU1NDRlOWFlNmJiODMzNzFhNjdiZTgsMSk7XHJcbkJ1dHRvbl84OGRmOTdhMWE1NTU0NGU5YWU2YmI4MzM3MWE2N2JlOC5XaWR0aCA9IDI4MEQ7XHJcbkJ1dHRvbl84OGRmOTdhMWE1NTU0NGU5YWU2YmI4MzM3MWE2N2JlOC5IZWlnaHQgPSA1MEQ7XHJcbkJ1dHRvbl84OGRmOTdhMWE1NTU0NGU5YWU2YmI4MzM3MWE2N2JlOC5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH0pO1xyXG5CdXR0b25fODhkZjk3YTFhNTU1NDRlOWFlNmJiODMzNzFhNjdiZTguRm9udFNpemUgPSAyNUQ7XHJcbkJ1dHRvbl84OGRmOTdhMWE1NTU0NGU5YWU2YmI4MzM3MWE2N2JlOC5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5CdXR0b25fODhkZjk3YTFhNTU1NDRlOWFlNmJiODMzNzFhNjdiZTguQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbkJ1dHRvbl84OGRmOTdhMWE1NTU0NGU5YWU2YmI4MzM3MWE2N2JlOC5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uXzg4ZGY5N2ExYTU1NTQ0ZTlhZTZiYjgzMzcxYTY3YmU4Lkhvcml6b250YWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uXzg4ZGY5N2ExYTU1NTQ0ZTlhZTZiYjgzMzcxYTY3YmU4LkNsaWNrICs9IEJ0blByb2Nlc3NpbmdfQ2xpY2s7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfNjgwZGZlNGNhMTE0NDYwY2ExMzZhMGRlMmExYjg2ZjIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV82ODBkZmU0Y2ExMTQ0NjBjYTEzNmEwZGUyYTFiODZmMi5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV82ODBkZmU0Y2ExMTQ0NjBjYTEzNmEwZGUyYTFiODZmMi5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV82ODBkZmU0Y2ExMTQ0NjBjYTEzNmEwZGUyYTFiODZmMik7XHJcblxyXG5CdXR0b25fODhkZjk3YTFhNTU1NDRlOWFlNmJiODMzNzFhNjdiZTguVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfNjgwZGZlNGNhMTE0NDYwY2ExMzZhMGRlMmExYjg2ZjI7XHJcblxyXG5cclxudmFyIFRleHRCb3hfN2Y1YzBkMzU3ZjdlNDY1MWFkY2E0NWYyNzJkN2NmOWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuVGV4dEJveCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcInR4dEZpbGVcIiwgVGV4dEJveF83ZjVjMGQzNTdmN2U0NjUxYWRjYTQ1ZjI3MmQ3Y2Y5Yyk7XHJcblRleHRCb3hfN2Y1YzBkMzU3ZjdlNDY1MWFkY2E0NWYyNzJkN2NmOWMuTmFtZSA9IFwidHh0RmlsZVwiO1xyXG5UZXh0Qm94XzdmNWMwZDM1N2Y3ZTQ2NTFhZGNhNDVmMjcyZDdjZjljLlRleHRXcmFwcGluZyA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRleHRXcmFwcGluZy5XcmFwO1xyXG5UZXh0Qm94XzdmNWMwZDM1N2Y3ZTQ2NTFhZGNhNDVmMjcyZDdjZjljLlRleHQgPSBAXCJcIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coVGV4dEJveF83ZjVjMGQzNTdmN2U0NjUxYWRjYTQ1ZjI3MmQ3Y2Y5YywxKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKFRleHRCb3hfN2Y1YzBkMzU3ZjdlNDY1MWFkY2E0NWYyNzJkN2NmOWMsMik7XHJcblRleHRCb3hfN2Y1YzBkMzU3ZjdlNDY1MWFkY2E0NWYyNzJkN2NmOWMuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxMCwgLTIwLCAxMCwgLTIwKTtcclxuVGV4dEJveF83ZjVjMGQzNTdmN2U0NjUxYWRjYTQ1ZjI3MmQ3Y2Y5Yy5Gb250U2l6ZSA9IDIwRDtcclxuXHJcbnZhciBCb3JkZXJfMDBkZDBkNzZiNzk0NGI3OWE4MTliODM3ZWUwOGIyNmMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYm9yZGVySURFRlwiLCBCb3JkZXJfMDBkZDBkNzZiNzk0NGI3OWE4MTliODM3ZWUwOGIyNmMpO1xyXG5Cb3JkZXJfMDBkZDBkNzZiNzk0NGI3OWE4MTliODM3ZWUwOGIyNmMuTmFtZSA9IFwiYm9yZGVySURFRlwiO1xyXG5Cb3JkZXJfMDBkZDBkNzZiNzk0NGI3OWE4MTliODM3ZWUwOGIyNmMuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQm9yZGVyXzAwZGQwZDc2Yjc5NDRiNzlhODE5YjgzN2VlMDhiMjZjLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfMDBkZDBkNzZiNzk0NGI3OWE4MTliODM3ZWUwOGIyNmMsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihCb3JkZXJfMDBkZDBkNzZiNzk0NGI3OWE4MTliODM3ZWUwOGIyNmMsMyk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCb3JkZXJfMDBkZDBkNzZiNzk0NGI3OWE4MTliODM3ZWUwOGIyNmMsMik7XHJcbkJvcmRlcl8wMGRkMGQ3NmI3OTQ0Yjc5YTgxOWI4MzdlZTA4YjI2Yy5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEwKTtcclxuQm9yZGVyXzAwZGQwZDc2Yjc5NDRiNzlhODE5YjgzN2VlMDhiMjZjLlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuQm9yZGVyXzAwZGQwZDc2Yjc5NDRiNzlhODE5YjgzN2VlMDhiMjZjLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbkJvcmRlcl8wMGRkMGQ3NmI3OTQ0Yjc5YTgxOWI4MzdlZTA4YjI2Yy5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjA0LCBHID0gKGJ5dGUpMjA0LCBCID0gKGJ5dGUpMjA0IH0pO1xyXG52YXIgSW1hZ2VfMDBkMWU4NjcxYTc0NDBjMDg2MTMxY2E0NTk2NDdjNjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJpZGVmX0pwZWdcIiwgSW1hZ2VfMDBkMWU4NjcxYTc0NDBjMDg2MTMxY2E0NTk2NDdjNjQpO1xyXG5JbWFnZV8wMGQxZTg2NzFhNzQ0MGMwODYxMzFjYTQ1OTY0N2M2NC5OYW1lID0gXCJpZGVmX0pwZWdcIjtcclxuSW1hZ2VfMDBkMWU4NjcxYTc0NDBjMDg2MTMxY2E0NTk2NDdjNjQuU3RyZXRjaCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlN0cmV0Y2guRmlsbDtcclxuSW1hZ2VfMDBkMWU4NjcxYTc0NDBjMDg2MTMxY2E0NTk2NDdjNjQuVmlzaWJpbGl0eSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5cclxuQm9yZGVyXzAwZGQwZDc2Yjc5NDRiNzlhODE5YjgzN2VlMDhiMjZjLkNoaWxkID0gSW1hZ2VfMDBkMWU4NjcxYTc0NDBjMDg2MTMxY2E0NTk2NDdjNjQ7XHJcblxyXG5cclxudmFyIEJvcmRlcl8yMmNlMmM3ZTg4ZDk0NTAzYTQwYjRmYzk3NmNhNWFkNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJib3JkZXJVTUxcIiwgQm9yZGVyXzIyY2UyYzdlODhkOTQ1MDNhNDBiNGZjOTc2Y2E1YWQ1KTtcclxuQm9yZGVyXzIyY2UyYzdlODhkOTQ1MDNhNDBiNGZjOTc2Y2E1YWQ1Lk5hbWUgPSBcImJvcmRlclVNTFwiO1xyXG5Cb3JkZXJfMjJjZTJjN2U4OGQ5NDUwM2E0MGI0ZmM5NzZjYTVhZDUuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQm9yZGVyXzIyY2UyYzdlODhkOTQ1MDNhNDBiNGZjOTc2Y2E1YWQ1LkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfMjJjZTJjN2U4OGQ5NDUwM2E0MGI0ZmM5NzZjYTVhZDUsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihCb3JkZXJfMjJjZTJjN2U4OGQ5NDUwM2E0MGI0ZmM5NzZjYTVhZDUsMyk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCb3JkZXJfMjJjZTJjN2U4OGQ5NDUwM2E0MGI0ZmM5NzZjYTVhZDUsMik7XHJcbkJvcmRlcl8yMmNlMmM3ZTg4ZDk0NTAzYTQwYjRmYzk3NmNhNWFkNS5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEwKTtcclxuQm9yZGVyXzIyY2UyYzdlODhkOTQ1MDNhNDBiNGZjOTc2Y2E1YWQ1LlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuQm9yZGVyXzIyY2UyYzdlODhkOTQ1MDNhNDBiNGZjOTc2Y2E1YWQ1LkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbkJvcmRlcl8yMmNlMmM3ZTg4ZDk0NTAzYTQwYjRmYzk3NmNhNWFkNS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjA0LCBHID0gKGJ5dGUpMjA0LCBCID0gKGJ5dGUpMjA0IH0pO1xyXG52YXIgSW1hZ2VfNWQxMzE2ZDkxNWQ0NDU4MTkyZGExMWI4NTJlMzJlYTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuSW1hZ2UoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJ1bWxfSnBlZ1wiLCBJbWFnZV81ZDEzMTZkOTE1ZDQ0NTgxOTJkYTExYjg1MmUzMmVhMSk7XHJcbkltYWdlXzVkMTMxNmQ5MTVkNDQ1ODE5MmRhMTFiODUyZTMyZWExLk5hbWUgPSBcInVtbF9KcGVnXCI7XHJcbkltYWdlXzVkMTMxNmQ5MTVkNDQ1ODE5MmRhMTFiODUyZTMyZWExLlN0cmV0Y2ggPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5TdHJldGNoLkZpbGw7XHJcbkltYWdlXzVkMTMxNmQ5MTVkNDQ1ODE5MmRhMTFiODUyZTMyZWExLlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbkJvcmRlcl8yMmNlMmM3ZTg4ZDk0NTAzYTQwYjRmYzk3NmNhNWFkNS5DaGlsZCA9IEltYWdlXzVkMTMxNmQ5MTVkNDQ1ODE5MmRhMTFiODUyZTMyZWExO1xyXG5cclxuXHJcbkdyaWRfZmQwZDQ1YmYwMzc4NDQwZjliMDM0NzdmNjU3NTUwYjkuQ2hpbGRyZW4uQWRkKEJ1dHRvbl9hOWZiNGQwNWIzNGQ0NzdjYTMwYjE5ZmI0N2MxNWY0Yik7XHJcbkdyaWRfZmQwZDQ1YmYwMzc4NDQwZjliMDM0NzdmNjU3NTUwYjkuQ2hpbGRyZW4uQWRkKEJ1dHRvbl85MzI3NDMxMThlMDc0MjA3YjY1YzY4N2I3YTNkMjJjZSk7XHJcbkdyaWRfZmQwZDQ1YmYwMzc4NDQwZjliMDM0NzdmNjU3NTUwYjkuQ2hpbGRyZW4uQWRkKEJ1dHRvbl84OGRmOTdhMWE1NTU0NGU5YWU2YmI4MzM3MWE2N2JlOCk7XHJcbkdyaWRfZmQwZDQ1YmYwMzc4NDQwZjliMDM0NzdmNjU3NTUwYjkuQ2hpbGRyZW4uQWRkKFRleHRCb3hfN2Y1YzBkMzU3ZjdlNDY1MWFkY2E0NWYyNzJkN2NmOWMpO1xyXG5HcmlkX2ZkMGQ0NWJmMDM3ODQ0MGY5YjAzNDc3ZjY1NzU1MGI5LkNoaWxkcmVuLkFkZChCb3JkZXJfMDBkZDBkNzZiNzk0NGI3OWE4MTliODM3ZWUwOGIyNmMpO1xyXG5HcmlkX2ZkMGQ0NWJmMDM3ODQ0MGY5YjAzNDc3ZjY1NzU1MGI5LkNoaWxkcmVuLkFkZChCb3JkZXJfMjJjZTJjN2U4OGQ5NDUwM2E0MGI0ZmM5NzZjYTVhZDUpO1xyXG5cclxuXHJcbkJvcmRlcl80ZjYyMjU3ZDkwZGM0MDQxODVkNDY0MTRlNzE1OWMyZC5DaGlsZCA9IEdyaWRfZmQwZDQ1YmYwMzc4NDQwZjliMDM0NzdmNjU3NTUwYjk7XHJcblxyXG5cclxuR3JpZF84MTQ3MGY4OWJlNzM0YTkyYTkwNTQ0OTIyMTZiYWQ0Zi5DaGlsZHJlbi5BZGQoQm9yZGVyXzY0NGRlNTkxOTY1ZTQ0MmM4ZThiNGRjYTVmODQ4N2QxKTtcclxuR3JpZF84MTQ3MGY4OWJlNzM0YTkyYTkwNTQ0OTIyMTZiYWQ0Zi5DaGlsZHJlbi5BZGQoQm9yZGVyXzRmNjIyNTdkOTBkYzQwNDE4NWQ0NjQxNGU3MTU5YzJkKTtcclxuXHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkXzgxNDcwZjg5YmU3MzRhOTJhOTA1NDQ5MjIxNmJhZDRmO1xyXG5cclxuXHJcblxyXG5lbGVtZW50Rm9yTGlzdCA9IEJvcmRlcl82NDRkZTU5MTk2NWU0NDJjOGU4YjRkY2E1Zjg0ODdkMTtcclxuYnRuQ2FuY2VsID0gQnV0dG9uX2E5ZmI0ZDA1YjM0ZDQ3N2NhMzBiMTlmYjQ3YzE1ZjRiO1xyXG5idG5VcGxvYWQgPSBCdXR0b25fOTMyNzQzMTE4ZTA3NDIwN2I2NWM2ODdiN2EzZDIyY2U7XHJcbmJ0blByb2Nlc3NpbmcgPSBCdXR0b25fODhkZjk3YTFhNTU1NDRlOWFlNmJiODMzNzFhNjdiZTg7XHJcbnR4dEZpbGUgPSBUZXh0Qm94XzdmNWMwZDM1N2Y3ZTQ2NTFhZGNhNDVmMjcyZDdjZjljO1xyXG5pZGVmX0pwZWcgPSBJbWFnZV8wMGQxZTg2NzFhNzQ0MGMwODYxMzFjYTQ1OTY0N2M2NDtcclxuYm9yZGVySURFRiA9IEJvcmRlcl8wMGRkMGQ3NmI3OTQ0Yjc5YTgxOWI4MzdlZTA4YjI2YztcclxudW1sX0pwZWcgPSBJbWFnZV81ZDEzMTZkOTE1ZDQ0NTgxOTJkYTExYjg1MmUzMmVhMTtcclxuYm9yZGVyVU1MID0gQm9yZGVyXzIyY2UyYzdlODhkOTQ1MDNhNDBiNGZjOTc2Y2E1YWQ1O1xyXG5MYXlvdXRHcmlkID0gR3JpZF9mZDBkNDViZjAzNzg0NDBmOWIwMzQ3N2Y2NTc1NTBiOTtcclxuZWxlbWVudCA9IEJvcmRlcl80ZjYyMjU3ZDkwZGM0MDQxODVkNDY0MTRlNzE1OWMyZDtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2I0YmFiNzg0OTg3YzQ3ZTY4ODM2ZTA1MTVmMTk3OTg1IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYjRiYWI3ODQ5ODdjNDdlNjg4MzZlMDUxNWYxOTc5ODUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9iNGJhYjc4NDk4N2M0N2U2ODgzNmUwNTE1ZjE5Nzk4NSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2I0YmFiNzg0OTg3YzQ3ZTY4ODM2ZTA1MTVmMTk3OTg1IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9iNGJhYjc4NDk4N2M0N2U2ODgzNmUwNTE1ZjE5Nzk4NSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZWY3NjMxZWU3MjBmNGFkZmEyMzBkZTk1MGM3MDVjYTQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lZjc2MzFlZTcyMGY0YWRmYTIzMGRlOTUwYzcwNWNhNCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2VmNzYzMWVlNzIwZjRhZGZhMjMwZGU5NTBjNzA1Y2E0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZWY3NjMxZWU3MjBmNGFkZmEyMzBkZTk1MGM3MDVjYTQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2VmNzYzMWVlNzIwZjRhZGZhMjMwZGU5NTBjNzA1Y2E0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9hOTJkZmYyNDRjZTE0ZGZlODRkYTg3NDQzMmJkYzVjMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2E5MmRmZjI0NGNlMTRkZmU4NGRhODc0NDMyYmRjNWMyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfYTkyZGZmMjQ0Y2UxNGRmZTg0ZGE4NzQ0MzJiZGM1YzIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9hOTJkZmYyNDRjZTE0ZGZlODRkYTg3NDQzMmJkYzVjMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYTkyZGZmMjQ0Y2UxNGRmZTg0ZGE4NzQ0MzJiZGM1YzIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfN2ZkNTBmMGU3NTI2NDAwOTk1NjI3ZDNhNTdhNzI4MjYoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfYTMwOGI4YTRjZDkwNDdkYTg1NTgzOGI4N2VmYmFjYzIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlX2EzMDhiOGE0Y2Q5MDQ3ZGE4NTU4MzhiODdlZmJhY2MyLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyX2M4NWRlMmM1ZWFlNzQzMjA5MDVjMjFmNDBkN2E3ODM5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl9jODVkZTJjNWVhZTc0MzIwOTA1YzIxZjQwZDdhNzgzOSk7XHJcbkJvcmRlcl9jODVkZTJjNWVhZTc0MzIwOTA1YzIxZjQwZDdhNzgzOS5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfYzg1ZGUyYzVlYWU3NDMyMDkwNWMyMWY0MGQ3YTc4MzkuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfZTRhODMwNGZiZDM2NDU1NGEzMTA3MTY0NWU4MTRhYzggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwX2U0YTgzMDRmYmQzNjQ1NTRhMzEwNzE2NDVlODE0YWM4KTtcclxuVmlzdWFsU3RhdGVHcm91cF9lNGE4MzA0ZmJkMzY0NTU0YTMxMDcxNjQ1ZTgxNGFjOC5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzg4MjBkN2Y4ZTBjNjQyMDk4MjM2ZmE2YmM1NzE3YjFhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzg4MjBkN2Y4ZTBjNjQyMDk4MjM2ZmE2YmM1NzE3YjFhKTtcclxuVmlzdWFsU3RhdGVfODgyMGQ3ZjhlMGM2NDIwOTgyMzZmYTZiYzU3MTdiMWEuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfNzAzZTFjNDdmNzM5NGU3ODhjYzU1OTkzYzNlZWIyNzUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV83MDNlMWM0N2Y3Mzk0ZTc4OGNjNTU5OTNjM2VlYjI3NSk7XHJcblZpc3VhbFN0YXRlXzcwM2UxYzQ3ZjczOTRlNzg4Y2M1NTk5M2MzZWViMjc1Lk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzYwOTMwYTE2MmE0MDQ2NzQ4YzZjZDdhODdkNTAzMDBjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYTJiODQwNTA4ZDc0ZTM5YmViYWIyMTg4ODM4MTM1MCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYTJiODQwNTA4ZDc0ZTM5YmViYWIyMTg4ODM4MTM1MCxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjA2MTQxMzllMGI1NDYxNWIwOTg5MzcyYzgzOGIxZmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82MDYxNDEzOWUwYjU0NjE1YjA5ODkzNzJjODM4YjFmYS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzYwNjE0MTM5ZTBiNTQ2MTViMDk4OTM3MmM4MzhiMWZhLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYTJiODQwNTA4ZDc0ZTM5YmViYWIyMTg4ODM4MTM1MC5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjA2MTQxMzllMGI1NDYxNWIwOTg5MzcyYzgzOGIxZmEpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNjA5MzBhMTYyYTQwNDY3NDhjNmNkN2E4N2Q1MDMwMGMuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJhMmI4NDA1MDhkNzRlMzliZWJhYjIxODg4MzgxMzUwKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV83MDNlMWM0N2Y3Mzk0ZTc4OGNjNTU5OTNjM2VlYjI3NS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF82MDkzMGExNjJhNDA0Njc0OGM2Y2Q3YTg3ZDUwMzAwYztcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZjE2ZjcxNTM1ZmMzNGVkNjlmZTI4YWQ5YTIwMmFjY2QgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlX2YxNmY3MTUzNWZjMzRlZDY5ZmUyOGFkOWEyMDJhY2NkKTtcclxuVmlzdWFsU3RhdGVfZjE2ZjcxNTM1ZmMzNGVkNjlmZTI4YWQ5YTIwMmFjY2QuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF80YmZmNTYwNjhiN2E0YmFkODJmOGE3MTJhZDJjOWZkYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmI0OTU3MGE4Yjc4NGJhZWFhMmNjZGFjYjRmZmRkOWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmI0OTU3MGE4Yjc4NGJhZWFhMmNjZGFjYjRmZmRkOWIsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2ZhZDA1ZmMwM2I2MTRjNzZhNGQzNzAyYzExYTIyMDM4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZmFkMDVmYzAzYjYxNGM3NmE0ZDM3MDJjMTFhMjIwMzguS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mYWQwNWZjMDNiNjE0Yzc2YTRkMzcwMmMxMWEyMjAzOC5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmI0OTU3MGE4Yjc4NGJhZWFhMmNjZGFjYjRmZmRkOWIuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2ZhZDA1ZmMwM2I2MTRjNzZhNGQzNzAyYzExYTIyMDM4KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzRiZmY1NjA2OGI3YTRiYWQ4MmY4YTcxMmFkMmM5ZmRhLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYjQ5NTcwYThiNzg0YmFlYWEyY2NkYWNiNGZmZGQ5Yik7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfZjE2ZjcxNTM1ZmMzNGVkNjlmZTI4YWQ5YTIwMmFjY2QuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfNGJmZjU2MDY4YjdhNGJhZDgyZjhhNzEyYWQyYzlmZGE7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzBlODJlODgxYzZkOTQ5MzI5MTQ1ZTFjMGM5NzUyZDU5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfMGU4MmU4ODFjNmQ5NDkzMjkxNDVlMWMwYzk3NTJkNTkpO1xyXG5WaXN1YWxTdGF0ZV8wZTgyZTg4MWM2ZDk0OTMyOTE0NWUxYzBjOTc1MmQ1OS5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF83MjE0NzQwMGFkYjA0ZWMyYWJlY2RhYWVjZmY3ZDkwNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGQ2NjdlNTY4Y2M2NDVjNjhlMjA3YjJhZDkxZDI5ZDUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGQ2NjdlNTY4Y2M2NDVjNjhlMjA3YjJhZDkxZDI5ZDUsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzI0NDZhYzdiYTk5MjQ2YzBiMzc5MDdhN2RhNWMyMmFlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMjQ0NmFjN2JhOTkyNDZjMGIzNzkwN2E3ZGE1YzIyYWUuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8yNDQ2YWM3YmE5OTI0NmMwYjM3OTA3YTdkYTVjMjJhZS5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGQ2NjdlNTY4Y2M2NDVjNjhlMjA3YjJhZDkxZDI5ZDUuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzI0NDZhYzdiYTk5MjQ2YzBiMzc5MDdhN2RhNWMyMmFlKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzcyMTQ3NDAwYWRiMDRlYzJhYmVjZGFhZWNmZjdkOTA0LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180ZDY2N2U1NjhjYzY0NWM2OGUyMDdiMmFkOTFkMjlkNSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMGU4MmU4ODFjNmQ5NDkzMjkxNDVlMWMwYzk3NTJkNTkuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfNzIxNDc0MDBhZGIwNGVjMmFiZWNkYWFlY2ZmN2Q5MDQ7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF9lNGE4MzA0ZmJkMzY0NTU0YTMxMDcxNjQ1ZTgxNGFjOC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzg4MjBkN2Y4ZTBjNjQyMDk4MjM2ZmE2YmM1NzE3YjFhKTtcclxuVmlzdWFsU3RhdGVHcm91cF9lNGE4MzA0ZmJkMzY0NTU0YTMxMDcxNjQ1ZTgxNGFjOC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzcwM2UxYzQ3ZjczOTRlNzg4Y2M1NTk5M2MzZWViMjc1KTtcclxuVmlzdWFsU3RhdGVHcm91cF9lNGE4MzA0ZmJkMzY0NTU0YTMxMDcxNjQ1ZTgxNGFjOC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2YxNmY3MTUzNWZjMzRlZDY5ZmUyOGFkOWEyMDJhY2NkKTtcclxuVmlzdWFsU3RhdGVHcm91cF9lNGE4MzA0ZmJkMzY0NTU0YTMxMDcxNjQ1ZTgxNGFjOC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzBlODJlODgxYzZkOTQ5MzI5MTQ1ZTFjMGM5NzUyZDU5KTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfZTRhODMwNGZiZDM2NDU1NGEzMTA3MTY0NWU4MTRhYzgpO1xyXG5cclxudmFyIEJvcmRlcl9lYzg4MDhkZTg3MWI0NWUzYmQ2YzA4N2NlYTViNDRhOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfZWM4ODA4ZGU4NzFiNDVlM2JkNmMwODdjZWE1YjQ0YTgpO1xyXG5Cb3JkZXJfZWM4ODA4ZGU4NzFiNDVlM2JkNmMwODdjZWE1YjQ0YTguTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyX2VjODgwOGRlODcxYjQ1ZTNiZDZjMDg3Y2VhNWI0NGE4LkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyX2Y1ZTU2MzcwNWYwZTQ0NGQ5MzA2ZTJjMzBlYzEwMzgzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfZjVlNTYzNzA1ZjBlNDQ0ZDkzMDZlMmMzMGVjMTAzODMpO1xyXG5Db250ZW50UHJlc2VudGVyX2Y1ZTU2MzcwNWYwZTQ0NGQ5MzA2ZTJjMzBlYzEwMzgzLk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfODcwNmVhM2EwNzU1NDhiNjlhNWNkNDVjYjk3NTI0Y2IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfODcwNmVhM2EwNzU1NDhiNjlhNWNkNDVjYjk3NTI0Y2IuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZTJjMTBiYzdhY2EyNDM5ZjhhMTM0NGVhNDVmODE4MTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9lMmMxMGJjN2FjYTI0MzlmOGExMzQ0ZWE0NWY4MTgxMy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184NzA2ZWEzYTA3NTU0OGI2OWE1Y2Q0NWNiOTc1MjRjYi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2UyYzEwYmM3YWNhMjQzOWY4YTEzNDRlYTQ1ZjgxODEzO1xyXG5cclxuXHJcbkJpbmRpbmdfODcwNmVhM2EwNzU1NDhiNjlhNWNkNDVjYjk3NTI0Y2IuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTMwOGI4YTRjZDkwNDdkYTg1NTgzOGI4N2VmYmFjYzI7XHJcblxyXG52YXIgQmluZGluZ184MWU5Nzg2ZmQ4YmE0NGUxYThiYTBkMTE1ZjE1MjY3YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184MWU5Nzg2ZmQ4YmE0NGUxYThiYTBkMTE1ZjE1MjY3Yi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMjgyMTlkODQ5MTQ5NDQ0Nzg0NjhiNTlhNTg1NGYxYTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8yODIxOWQ4NDkxNDk0NDQ3ODQ2OGI1OWE1ODU0ZjFhMS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184MWU5Nzg2ZmQ4YmE0NGUxYThiYTBkMTE1ZjE1MjY3Yi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzI4MjE5ZDg0OTE0OTQ0NDc4NDY4YjU5YTU4NTRmMWExO1xyXG5cclxuXHJcbkJpbmRpbmdfODFlOTc4NmZkOGJhNDRlMWE4YmEwZDExNWYxNTI2N2IuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTMwOGI4YTRjZDkwNDdkYTg1NTgzOGI4N2VmYmFjYzI7XHJcblxyXG52YXIgQmluZGluZ18wN2NmMDc0MTAxY2E0NDI2OWU5N2UxNDI2NjYzZGYzYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18wN2NmMDc0MTAxY2E0NDI2OWU5N2UxNDI2NjYzZGYzYS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYTE5NjI2YzFlYTgwNDFiNGIxNjA1NjEzZTQzNWY0OGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9hMTk2MjZjMWVhODA0MWI0YjE2MDU2MTNlNDM1ZjQ4ZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18wN2NmMDc0MTAxY2E0NDI2OWU5N2UxNDI2NjYzZGYzYS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2ExOTYyNmMxZWE4MDQxYjRiMTYwNTYxM2U0MzVmNDhlO1xyXG5cclxuXHJcbkJpbmRpbmdfMDdjZjA3NDEwMWNhNDQyNjllOTdlMTQyNjY2M2RmM2EuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTMwOGI4YTRjZDkwNDdkYTg1NTgzOGI4N2VmYmFjYzI7XHJcblxyXG52YXIgQmluZGluZ19kYWYzMTIyZTNmZTU0MzAzYTY5ODYxZGRiNjAxYjNiNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kYWYzMTIyZTNmZTU0MzAzYTY5ODYxZGRiNjAxYjNiNi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzU5NGFlODQyY2I3NDQ2YjNiMmE3MWQyOTc0OTY1MGNiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNTk0YWU4NDJjYjc0NDZiM2IyYTcxZDI5NzQ5NjUwY2IuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZGFmMzEyMmUzZmU1NDMwM2E2OTg2MWRkYjYwMWIzYjYuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV81OTRhZTg0MmNiNzQ0NmIzYjJhNzFkMjk3NDk2NTBjYjtcclxuXHJcblxyXG5CaW5kaW5nX2RhZjMxMjJlM2ZlNTQzMDNhNjk4NjFkZGI2MDFiM2I2LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2EzMDhiOGE0Y2Q5MDQ3ZGE4NTU4MzhiODdlZmJhY2MyO1xyXG5cclxudmFyIEJpbmRpbmdfOWU4ODY1ZjgyZTJjNDJkY2FkYzAzZGFmMTUxMmFkMDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOWU4ODY1ZjgyZTJjNDJkY2FkYzAzZGFmMTUxMmFkMDIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYzgyNDI2YjI5OGNmNGNiN2FkMjZmOTRhMjgwMDA5YjcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9jODI0MjZiMjk4Y2Y0Y2I3YWQyNmY5NGEyODAwMDliNy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185ZTg4NjVmODJlMmM0MmRjYWRjMDNkYWYxNTEyYWQwMi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2M4MjQyNmIyOThjZjRjYjdhZDI2Zjk0YTI4MDAwOWI3O1xyXG5cclxuXHJcbkJpbmRpbmdfOWU4ODY1ZjgyZTJjNDJkY2FkYzAzZGFmMTUxMmFkMDIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTMwOGI4YTRjZDkwNDdkYTg1NTgzOGI4N2VmYmFjYzI7XHJcblxyXG5cclxuQm9yZGVyX2VjODgwOGRlODcxYjQ1ZTNiZDZjMDg3Y2VhNWI0NGE4LkNoaWxkID0gQ29udGVudFByZXNlbnRlcl9mNWU1NjM3MDVmMGU0NDRkOTMwNmUyYzMwZWMxMDM4MztcclxuXHJcbnZhciBCaW5kaW5nX2VlNzQ5YTlkZTVmYTQ5YWFhMzMxNzdhOWM1OWIzYWFiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2VlNzQ5YTlkZTVmYTQ5YWFhMzMxNzdhOWM1OWIzYWFiLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jMTg2MWFkYTQyODM0MGE2OTY2ODUyNzNlOWIxYTBkNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2MxODYxYWRhNDI4MzQwYTY5NjY4NTI3M2U5YjFhMGQ2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2VlNzQ5YTlkZTVmYTQ5YWFhMzMxNzdhOWM1OWIzYWFiLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYzE4NjFhZGE0MjgzNDBhNjk2Njg1MjczZTliMWEwZDY7XHJcblxyXG5cclxuQmluZGluZ19lZTc0OWE5ZGU1ZmE0OWFhYTMzMTc3YTljNTliM2FhYi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9hMzA4YjhhNGNkOTA0N2RhODU1ODM4Yjg3ZWZiYWNjMjtcclxuXHJcblxyXG5Cb3JkZXJfYzg1ZGUyYzVlYWU3NDMyMDkwNWMyMWY0MGQ3YTc4MzkuQ2hpbGQgPSBCb3JkZXJfZWM4ODA4ZGU4NzFiNDVlM2JkNmMwODdjZWE1YjQ0YTg7XHJcblxyXG52YXIgQmluZGluZ183NWU0NDcyM2ZmZWI0N2UzOTljZTBhMzQ1MTNmMDg3ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ183NWU0NDcyM2ZmZWI0N2UzOTljZTBhMzQ1MTNmMDg3Zi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMmE0YjQ0MDIxMWFjNDBhZThhODRlNWQ3YWNiNDY4NzIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8yYTRiNDQwMjExYWM0MGFlOGE4NGU1ZDdhY2I0Njg3Mi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ183NWU0NDcyM2ZmZWI0N2UzOTljZTBhMzQ1MTNmMDg3Zi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzJhNGI0NDAyMTFhYzQwYWU4YTg0ZTVkN2FjYjQ2ODcyO1xyXG5cclxuXHJcbkJpbmRpbmdfNzVlNDQ3MjNmZmViNDdlMzk5Y2UwYTM0NTEzZjA4N2YuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTMwOGI4YTRjZDkwNDdkYTg1NTgzOGI4N2VmYmFjYzI7XHJcblxyXG52YXIgQmluZGluZ18yNTQyZmRjYjdmNjA0ODcyOGJmY2ZkNzNmZjM3ZjFkMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18yNTQyZmRjYjdmNjA0ODcyOGJmY2ZkNzNmZjM3ZjFkMi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzY2NGIyOTNkMjdkNTRhY2ZiMTlhZGVkYjMyOTkzYmZhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNjY0YjI5M2QyN2Q1NGFjZmIxOWFkZWRiMzI5OTNiZmEuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMjU0MmZkY2I3ZjYwNDg3MjhiZmNmZDczZmYzN2YxZDIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV82NjRiMjkzZDI3ZDU0YWNmYjE5YWRlZGIzMjk5M2JmYTtcclxuXHJcblxyXG5CaW5kaW5nXzI1NDJmZGNiN2Y2MDQ4NzI4YmZjZmQ3M2ZmMzdmMWQyLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2EzMDhiOGE0Y2Q5MDQ3ZGE4NTU4MzhiODdlZmJhY2MyO1xyXG5cclxudmFyIEJpbmRpbmdfZGQ2MmNiNmZhZjJiNDNkZTg2YTQ3YjBjZDI3ZWM4OGQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZGQ2MmNiNmZhZjJiNDNkZTg2YTQ3YjBjZDI3ZWM4OGQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNzE1YWZkMzNhOTI0NDRiNWIxNGVkOWE0ZDUwMmVkODUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV83MTVhZmQzM2E5MjQ0NGI1YjE0ZWQ5YTRkNTAyZWQ4NS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kZDYyY2I2ZmFmMmI0M2RlODZhNDdiMGNkMjdlYzg4ZC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzcxNWFmZDMzYTkyNDQ0YjViMTRlZDlhNGQ1MDJlZDg1O1xyXG5cclxuXHJcbkJpbmRpbmdfZGQ2MmNiNmZhZjJiNDNkZTg2YTQ3YjBjZDI3ZWM4OGQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTMwOGI4YTRjZDkwNDdkYTg1NTgzOGI4N2VmYmFjYzI7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfZjVlNTYzNzA1ZjBlNDQ0ZDkzMDZlMmMzMGVjMTAzODMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ184NzA2ZWEzYTA3NTU0OGI2OWE1Y2Q0NWNiOTc1MjRjYik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZjVlNTYzNzA1ZjBlNDQ0ZDkzMDZlMmMzMGVjMTAzODMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfODFlOTc4NmZkOGJhNDRlMWE4YmEwZDExNWYxNTI2N2IpO1xyXG5Db250ZW50UHJlc2VudGVyX2Y1ZTU2MzcwNWYwZTQ0NGQ5MzA2ZTJjMzBlYzEwMzgzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ18wN2NmMDc0MTAxY2E0NDI2OWU5N2UxNDI2NjYzZGYzYSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZjVlNTYzNzA1ZjBlNDQ0ZDkzMDZlMmMzMGVjMTAzODMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19kYWYzMTIyZTNmZTU0MzAzYTY5ODYxZGRiNjAxYjNiNik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZjVlNTYzNzA1ZjBlNDQ0ZDkzMDZlMmMzMGVjMTAzODMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfOWU4ODY1ZjgyZTJjNDJkY2FkYzAzZGFmMTUxMmFkMDIpO1xyXG5Cb3JkZXJfZWM4ODA4ZGU4NzFiNDVlM2JkNmMwODdjZWE1YjQ0YTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2VlNzQ5YTlkZTVmYTQ5YWFhMzMxNzdhOWM1OWIzYWFiKTtcclxuQm9yZGVyX2M4NWRlMmM1ZWFlNzQzMjA5MDVjMjFmNDBkN2E3ODM5LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ183NWU0NDcyM2ZmZWI0N2UzOTljZTBhMzQ1MTNmMDg3Zik7XHJcbkJvcmRlcl9jODVkZTJjNWVhZTc0MzIwOTA1YzIxZjQwZDdhNzgzOS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nXzI1NDJmZGNiN2Y2MDQ4NzI4YmZjZmQ3M2ZmMzdmMWQyKTtcclxuQm9yZGVyX2M4NWRlMmM1ZWFlNzQzMjA5MDVjMjFmNDBkN2E3ODM5LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nX2RkNjJjYjZmYWYyYjQzZGU4NmE0N2IwY2QyN2VjODhkKTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJhMmI4NDA1MDhkNzRlMzliZWJhYjIxODg4MzgxMzUwLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2I0YmFiNzg0OTg3YzQ3ZTY4ODM2ZTA1MTVmMTk3OTg1LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYjRiYWI3ODQ5ODdjNDdlNjg4MzZlMDUxNWYxOTc5ODUsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9iNGJhYjc4NDk4N2M0N2U2ODgzNmUwNTE1ZjE5Nzk4NSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2I0YmFiNzg0OTg3YzQ3ZTY4ODM2ZTA1MTVmMTk3OTg1LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYjRiYWI3ODQ5ODdjNDdlNjg4MzZlMDUxNWYxOTc5ODUpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJhMmI4NDA1MDhkNzRlMzliZWJhYjIxODg4MzgxMzUwLCBCb3JkZXJfZWM4ODA4ZGU4NzFiNDVlM2JkNmMwODdjZWE1YjQ0YTgpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJiNDk1NzBhOGI3ODRiYWVhYTJjY2RhY2I0ZmZkZDliLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2VmNzYzMWVlNzIwZjRhZGZhMjMwZGU5NTBjNzA1Y2E0LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfZWY3NjMxZWU3MjBmNGFkZmEyMzBkZTk1MGM3MDVjYTQsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9lZjc2MzFlZTcyMGY0YWRmYTIzMGRlOTUwYzcwNWNhNCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2VmNzYzMWVlNzIwZjRhZGZhMjMwZGU5NTBjNzA1Y2E0LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfZWY3NjMxZWU3MjBmNGFkZmEyMzBkZTk1MGM3MDVjYTQpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJiNDk1NzBhOGI3ODRiYWVhYTJjY2RhY2I0ZmZkZDliLCBCb3JkZXJfZWM4ODA4ZGU4NzFiNDVlM2JkNmMwODdjZWE1YjQ0YTgpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRkNjY3ZTU2OGNjNjQ1YzY4ZTIwN2IyYWQ5MWQyOWQ1LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2E5MmRmZjI0NGNlMTRkZmU4NGRhODc0NDMyYmRjNWMyLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYTkyZGZmMjQ0Y2UxNGRmZTg0ZGE4NzQ0MzJiZGM1YzIsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9hOTJkZmYyNDRjZTE0ZGZlODRkYTg3NDQzMmJkYzVjMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2E5MmRmZjI0NGNlMTRkZmU4NGRhODc0NDMyYmRjNWMyLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYTkyZGZmMjQ0Y2UxNGRmZTg0ZGE4NzQ0MzJiZGM1YzIpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRkNjY3ZTU2OGNjNjQ1YzY4ZTIwN2IyYWQ5MWQyOWQ1LCBCb3JkZXJfZWM4ODA4ZGU4NzFiNDVlM2JkNmMwODdjZWE1YjQ0YTgpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV9hMzA4YjhhNGNkOTA0N2RhODU1ODM4Yjg3ZWZiYWNjMi5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfYzg1ZGUyYzVlYWU3NDMyMDkwNWMyMWY0MGQ3YTc4Mzk7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlX2EzMDhiOGE0Y2Q5MDQ3ZGE4NTU4MzhiODdlZmJhY2MyO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9mZmMwYzk2NmJlMWQ0ZGJmYWQyZDQ1OTk0NzJlOThkNiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2ZmYzBjOTY2YmUxZDRkYmZhZDJkNDU5OTQ3MmU5OGQ2IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfZmZjMGM5NjZiZTFkNGRiZmFkMmQ0NTk5NDcyZTk4ZDYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9mZmMwYzk2NmJlMWQ0ZGJmYWQyZDQ1OTk0NzJlOThkNiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfZmZjMGM5NjZiZTFkNGRiZmFkMmQ0NTk5NDcyZTk4ZDYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzA2MDZhYzI5ZThiNjQ5MjFhZjU2ZjFiYjQ0MTJjYjJiIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMDYwNmFjMjllOGI2NDkyMWFmNTZmMWJiNDQxMmNiMmIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wNjA2YWMyOWU4YjY0OTIxYWY1NmYxYmI0NDEyY2IyYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzA2MDZhYzI5ZThiNjQ5MjFhZjU2ZjFiYjQ0MTJjYjJiIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wNjA2YWMyOWU4YjY0OTIxYWY1NmYxYmI0NDEyY2IyYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfY2FlY2Y3NTViZDE3NDdlNTljZjk5NzBmYWU2MjNlZTAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9jYWVjZjc1NWJkMTc0N2U1OWNmOTk3MGZhZTYyM2VlMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2NhZWNmNzU1YmQxNzQ3ZTU5Y2Y5OTcwZmFlNjIzZWUwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfY2FlY2Y3NTViZDE3NDdlNTljZjk5NzBmYWU2MjNlZTAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2NhZWNmNzU1YmQxNzQ3ZTU5Y2Y5OTcwZmFlNjIzZWUwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UgSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzgwNmI0ZWE1NmE2ZjQ1ZjdiZGQwMzRlMGI3ZDA4Y2UwKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wgdGVtcGxhdGVPd25lcilcclxuICAgICAgICB7XHJcbnZhciB0ZW1wbGF0ZUluc3RhbmNlXzc0YTE5ODBlZWE2OTRjZGI5ZjIzYzU5ZGUxNTYwMmVmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UoKTtcclxudGVtcGxhdGVJbnN0YW5jZV83NGExOTgwZWVhNjk0Y2RiOWYyM2M1OWRlMTU2MDJlZi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVPd25lcjtcclxudmFyIEJvcmRlcl9hMzJlNmY5MTc5OTE0MGJmOGMwMmU2MWNhNzEyNDUyMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJPdXRlckJvcmRlclwiLCBCb3JkZXJfYTMyZTZmOTE3OTkxNDBiZjhjMDJlNjFjYTcxMjQ1MjMpO1xyXG5Cb3JkZXJfYTMyZTZmOTE3OTkxNDBiZjhjMDJlNjFjYTcxMjQ1MjMuTmFtZSA9IFwiT3V0ZXJCb3JkZXJcIjtcclxuQm9yZGVyX2EzMmU2ZjkxNzk5MTQwYmY4YzAyZTYxY2E3MTI0NTIzLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBWaXN1YWxTdGF0ZUdyb3VwX2Y4NmY5OTMxNDVlNTQ5MGE5ZTFiNjNmNTMzYjk5YzBlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlR3JvdXAoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb21tb25TdGF0ZXNcIiwgVmlzdWFsU3RhdGVHcm91cF9mODZmOTkzMTQ1ZTU0OTBhOWUxYjYzZjUzM2I5OWMwZSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfZjg2Zjk5MzE0NWU1NDkwYTllMWI2M2Y1MzNiOTljMGUuTmFtZSA9IFwiQ29tbW9uU3RhdGVzXCI7XHJcbnZhciBWaXN1YWxTdGF0ZV9lMGExZDBlNzg3ZDA0MmU4OTFjZjNiMWUxMDk5NTAzZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk5vcm1hbFwiLCBWaXN1YWxTdGF0ZV9lMGExZDBlNzg3ZDA0MmU4OTFjZjNiMWUxMDk5NTAzZik7XHJcblZpc3VhbFN0YXRlX2UwYTFkMGU3ODdkMDQyZTg5MWNmM2IxZTEwOTk1MDNmLk5hbWUgPSBcIk5vcm1hbFwiO1xyXG5cclxudmFyIFZpc3VhbFN0YXRlXzQ3OGJhNThiNzhmYTQzNjE4Y2JmYTE1YTQ5MWNmNTI2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUG9pbnRlck92ZXJcIiwgVmlzdWFsU3RhdGVfNDc4YmE1OGI3OGZhNDM2MThjYmZhMTVhNDkxY2Y1MjYpO1xyXG5WaXN1YWxTdGF0ZV80NzhiYTU4Yjc4ZmE0MzYxOGNiZmExNWE0OTFjZjUyNi5OYW1lID0gXCJQb2ludGVyT3ZlclwiO1xyXG52YXIgU3Rvcnlib2FyZF9hYTI1NDljMjg3Yjc0NDU2OWU2ZDk4NTBmNmI0MTU4ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjYwYWI0NTU1ODkyNGExZGJkOGZlOTRhYjA0Y2MxM2QgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjYwYWI0NTU1ODkyNGExZGJkOGZlOTRhYjA0Y2MxM2QsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzdlMDJjYWM4ZDAwMzQwMjViMWU3MWZiNDNjMmUxMmNjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfN2UwMmNhYzhkMDAzNDAyNWIxZTcxZmI0M2MyZTEyY2MuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV83ZTAyY2FjOGQwMDM0MDI1YjFlNzFmYjQzYzJlMTJjYy5WYWx1ZSA9IEBcIiMxMTAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjYwYWI0NTU1ODkyNGExZGJkOGZlOTRhYjA0Y2MxM2QuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzdlMDJjYWM4ZDAwMzQwMjViMWU3MWZiNDNjMmUxMmNjKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2FhMjU0OWMyODdiNzQ0NTY5ZTZkOTg1MGY2YjQxNThlLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iNjBhYjQ1NTU4OTI0YTFkYmQ4ZmU5NGFiMDRjYzEzZCk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNDc4YmE1OGI3OGZhNDM2MThjYmZhMTVhNDkxY2Y1MjYuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfYWEyNTQ5YzI4N2I3NDQ1NjllNmQ5ODUwZjZiNDE1OGU7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlX2Q4ZjgyNTkzZGY1ZDRiNmE4MTc5MDI1ZGRmMjgzOWNjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUHJlc3NlZFwiLCBWaXN1YWxTdGF0ZV9kOGY4MjU5M2RmNWQ0YjZhODE3OTAyNWRkZjI4MzljYyk7XHJcblZpc3VhbFN0YXRlX2Q4ZjgyNTkzZGY1ZDRiNmE4MTc5MDI1ZGRmMjgzOWNjLk5hbWUgPSBcIlByZXNzZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfM2QxMDczYTI3YmVhNGNkNDhhYzdkMzY5YzJjMTgzZjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJjNzU0NWE2YjhhOTQxMmM5ZTBjNGJlOGQxYWRiZmI5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJjNzU0NWE2YjhhOTQxMmM5ZTBjNGJlOGQxYWRiZmI5LEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV83MzkxZTA0NWYwZDE0NDA1OTUyOGUxY2NjZTY0YWNjMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzczOTFlMDQ1ZjBkMTQ0MDU5NTI4ZTFjY2NlNjRhY2MyLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNzM5MWUwNDVmMGQxNDQwNTk1MjhlMWNjY2U2NGFjYzIuVmFsdWUgPSBAXCIjMjIwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJjNzU0NWE2YjhhOTQxMmM5ZTBjNGJlOGQxYWRiZmI5LktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV83MzkxZTA0NWYwZDE0NDA1OTUyOGUxY2NjZTY0YWNjMik7XHJcblxyXG5cclxuU3Rvcnlib2FyZF8zZDEwNzNhMjdiZWE0Y2Q0OGFjN2QzNjljMmMxODNmMS5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmM3NTQ1YTZiOGE5NDEyYzllMGM0YmU4ZDFhZGJmYjkpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlX2Q4ZjgyNTkzZGY1ZDRiNmE4MTc5MDI1ZGRmMjgzOWNjLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzNkMTA3M2EyN2JlYTRjZDQ4YWM3ZDM2OWMyYzE4M2YxO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV84NTEyYjcyOWUyYmQ0NDk3YTEzNDg1ODljZTljM2Y3NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkRpc2FibGVkXCIsIFZpc3VhbFN0YXRlXzg1MTJiNzI5ZTJiZDQ0OTdhMTM0ODU4OWNlOWMzZjc3KTtcclxuVmlzdWFsU3RhdGVfODUxMmI3MjllMmJkNDQ5N2ExMzQ4NTg5Y2U5YzNmNzcuTmFtZSA9IFwiRGlzYWJsZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfYmFkODZjNGI3ODE5NDIwYjg3MjBiZWVkOGUwZDRlY2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzZhMjhkODRkNTQ2OTRhODliMjRlYmQyMjJlZmIwOTY1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzZhMjhkODRkNTQ2OTRhODliMjRlYmQyMjJlZmIwOTY1LEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV8zOTVhOWU0YWI4NGE0OThkYjQ1NjNmODA1NThmNmQ0NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzM5NWE5ZTRhYjg0YTQ5OGRiNDU2M2Y4MDU1OGY2ZDQ1LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMzk1YTllNGFiODRhNDk4ZGI0NTYzZjgwNTU4ZjZkNDUuVmFsdWUgPSBAXCIjMzNGRkZGRkZcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzZhMjhkODRkNTQ2OTRhODliMjRlYmQyMjJlZmIwOTY1LktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV8zOTVhOWU0YWI4NGE0OThkYjQ1NjNmODA1NThmNmQ0NSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9iYWQ4NmM0Yjc4MTk0MjBiODcyMGJlZWQ4ZTBkNGVjZS5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNmEyOGQ4NGQ1NDY5NGE4OWIyNGViZDIyMmVmYjA5NjUpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzg1MTJiNzI5ZTJiZDQ0OTdhMTM0ODU4OWNlOWMzZjc3LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2JhZDg2YzRiNzgxOTQyMGI4NzIwYmVlZDhlMGQ0ZWNlO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlR3JvdXBfZjg2Zjk5MzE0NWU1NDkwYTllMWI2M2Y1MzNiOTljMGUuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV9lMGExZDBlNzg3ZDA0MmU4OTFjZjNiMWUxMDk5NTAzZik7XHJcblZpc3VhbFN0YXRlR3JvdXBfZjg2Zjk5MzE0NWU1NDkwYTllMWI2M2Y1MzNiOTljMGUuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV80NzhiYTU4Yjc4ZmE0MzYxOGNiZmExNWE0OTFjZjUyNik7XHJcblZpc3VhbFN0YXRlR3JvdXBfZjg2Zjk5MzE0NWU1NDkwYTllMWI2M2Y1MzNiOTljMGUuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV9kOGY4MjU5M2RmNWQ0YjZhODE3OTAyNWRkZjI4MzljYyk7XHJcblZpc3VhbFN0YXRlR3JvdXBfZjg2Zjk5MzE0NWU1NDkwYTllMWI2M2Y1MzNiOTljMGUuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV84NTEyYjcyOWUyYmQ0NDk3YTEzNDg1ODljZTljM2Y3Nyk7XHJcblxyXG5cclxudGVtcGxhdGVPd25lci5JTlRFUk5BTF9HZXRWaXN1YWxTdGF0ZUdyb3VwcygpLkFkZChWaXN1YWxTdGF0ZUdyb3VwX2Y4NmY5OTMxNDVlNTQ5MGE5ZTFiNjNmNTMzYjk5YzBlKTtcclxuXHJcbnZhciBCb3JkZXJfMTM5MmU3MGFiMDgyNDNjY2JmMDczNWUwMDdlZThmZTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiSW5uZXJCb3JkZXJcIiwgQm9yZGVyXzEzOTJlNzBhYjA4MjQzY2NiZjA3MzVlMDA3ZWU4ZmUyKTtcclxuQm9yZGVyXzEzOTJlNzBhYjA4MjQzY2NiZjA3MzVlMDA3ZWU4ZmUyLk5hbWUgPSBcIklubmVyQm9yZGVyXCI7XHJcbkJvcmRlcl8xMzkyZTcwYWIwODI0M2NjYmYwNzM1ZTAwN2VlOGZlMi5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgQ29udGVudFByZXNlbnRlcl9hZTBlYzAyNGYwMTQ0YjNkOTMzMmIwMzRlOWFjMzNiMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50UHJlc2VudGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29udGVudFByZXNlbnRlclwiLCBDb250ZW50UHJlc2VudGVyX2FlMGVjMDI0ZjAxNDRiM2Q5MzMyYjAzNGU5YWMzM2IyKTtcclxuQ29udGVudFByZXNlbnRlcl9hZTBlYzAyNGYwMTQ0YjNkOTMzMmIwMzRlOWFjMzNiMi5OYW1lID0gXCJDb250ZW50UHJlc2VudGVyXCI7XHJcbnZhciBCaW5kaW5nX2FlYzNlNTgwNzNlNTRiODU5NTBlODE4MGVlZTc0MzJhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2FlYzNlNTgwNzNlNTRiODU5NTBlODE4MGVlZTc0MzJhLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRUZW1wbGF0ZVwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2NjN2I1ZWNlYTk1ZTQ4OGQ5Nzg1OGM2OWJiMmJkODA5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfY2M3YjVlY2VhOTVlNDg4ZDk3ODU4YzY5YmIyYmQ4MDkuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYWVjM2U1ODA3M2U1NGI4NTk1MGU4MTgwZWVlNzQzMmEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9jYzdiNWVjZWE5NWU0ODhkOTc4NThjNjliYjJiZDgwOTtcclxuXHJcblxyXG5CaW5kaW5nX2FlYzNlNTgwNzNlNTRiODU5NTBlODE4MGVlZTc0MzJhLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc0YTE5ODBlZWE2OTRjZGI5ZjIzYzU5ZGUxNTYwMmVmO1xyXG5cclxudmFyIEJpbmRpbmdfZTVkMTA3YTBkNDdmNGQ4Y2E1ZjhlMDdiN2VkZGQ4NWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZTVkMTA3YTBkNDdmNGQ4Y2E1ZjhlMDdiN2VkZGQ4NWMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2UwZTc5Njc3MWMxOTQ0ZGY5Zjc2YzA2OTc1MDMxYTAwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZTBlNzk2NzcxYzE5NDRkZjlmNzZjMDY5NzUwMzFhMDAuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZTVkMTA3YTBkNDdmNGQ4Y2E1ZjhlMDdiN2VkZGQ4NWMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9lMGU3OTY3NzFjMTk0NGRmOWY3NmMwNjk3NTAzMWEwMDtcclxuXHJcblxyXG5CaW5kaW5nX2U1ZDEwN2EwZDQ3ZjRkOGNhNWY4ZTA3YjdlZGRkODVjLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc0YTE5ODBlZWE2OTRjZGI5ZjIzYzU5ZGUxNTYwMmVmO1xyXG5cclxudmFyIEJpbmRpbmdfOGI4ZjVkYjFhOTZkNGUwNmIzMzZiZjUzNDg2ZDczZDEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOGI4ZjVkYjFhOTZkNGUwNmIzMzZiZjUzNDg2ZDczZDEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiUGFkZGluZ1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzJkZmQ2NjY0MWEyNzQ1YzJiYmFlY2E1MGEwMDg3Y2M4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMmRmZDY2NjQxYTI3NDVjMmJiYWVjYTUwYTAwODdjYzguTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfOGI4ZjVkYjFhOTZkNGUwNmIzMzZiZjUzNDg2ZDczZDEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8yZGZkNjY2NDFhMjc0NWMyYmJhZWNhNTBhMDA4N2NjODtcclxuXHJcblxyXG5CaW5kaW5nXzhiOGY1ZGIxYTk2ZDRlMDZiMzM2YmY1MzQ4NmQ3M2QxLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc0YTE5ODBlZWE2OTRjZGI5ZjIzYzU5ZGUxNTYwMmVmO1xyXG5cclxudmFyIEJpbmRpbmdfZWY0ZGM5NDA3YWI3NGJlOTk1ZWUzNjc5ZGRlMDAzMmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZWY0ZGM5NDA3YWI3NGJlOTk1ZWUzNjc5ZGRlMDAzMmIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiSG9yaXpvbnRhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kMjdkNjVlNmJhNzY0NGYyYjVlNTRhZmExZTg1YjFhOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2QyN2Q2NWU2YmE3NjQ0ZjJiNWU1NGFmYTFlODViMWE4Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2VmNGRjOTQwN2FiNzRiZTk5NWVlMzY3OWRkZTAwMzJiLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZDI3ZDY1ZTZiYTc2NDRmMmI1ZTU0YWZhMWU4NWIxYTg7XHJcblxyXG5cclxuQmluZGluZ19lZjRkYzk0MDdhYjc0YmU5OTVlZTM2NzlkZGUwMDMyYi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV83NGExOTgwZWVhNjk0Y2RiOWYyM2M1OWRlMTU2MDJlZjtcclxuXHJcbnZhciBCaW5kaW5nXzBiMjkyNWVkNWQ3YzRhNzFiYThkNGY0NGU0NzE2OWM5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzBiMjkyNWVkNWQ3YzRhNzFiYThkNGY0NGU0NzE2OWM5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzgyOGFjZWE1YTg0NzQxZjE5YzNhODFkYWQ4NmE0YTdiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfODI4YWNlYTVhODQ3NDFmMTljM2E4MWRhZDg2YTRhN2IuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMGIyOTI1ZWQ1ZDdjNGE3MWJhOGQ0ZjQ0ZTQ3MTY5YzkuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV84MjhhY2VhNWE4NDc0MWYxOWMzYTgxZGFkODZhNGE3YjtcclxuXHJcblxyXG5CaW5kaW5nXzBiMjkyNWVkNWQ3YzRhNzFiYThkNGY0NGU0NzE2OWM5LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc0YTE5ODBlZWE2OTRjZGI5ZjIzYzU5ZGUxNTYwMmVmO1xyXG5cclxuXHJcbkJvcmRlcl8xMzkyZTcwYWIwODI0M2NjYmYwNzM1ZTAwN2VlOGZlMi5DaGlsZCA9IENvbnRlbnRQcmVzZW50ZXJfYWUwZWMwMjRmMDE0NGIzZDkzMzJiMDM0ZTlhYzMzYjI7XHJcblxyXG52YXIgQmluZGluZ19mMWJhNWNkOTk5MzM0NzE4ODJkNmNjOTk1NDA5OGQ2MCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19mMWJhNWNkOTk5MzM0NzE4ODJkNmNjOTk1NDA5OGQ2MC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOTU2Yjg1MjgzMzI0NDVlMWFlOTQ3NTE0NGY2OGI2ZmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85NTZiODUyODMzMjQ0NWUxYWU5NDc1MTQ0ZjY4YjZmYS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19mMWJhNWNkOTk5MzM0NzE4ODJkNmNjOTk1NDA5OGQ2MC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzk1NmI4NTI4MzMyNDQ1ZTFhZTk0NzUxNDRmNjhiNmZhO1xyXG5cclxuXHJcbkJpbmRpbmdfZjFiYTVjZDk5OTMzNDcxODgyZDZjYzk5NTQwOThkNjAuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNzRhMTk4MGVlYTY5NGNkYjlmMjNjNTlkZTE1NjAyZWY7XHJcblxyXG5cclxuQm9yZGVyX2EzMmU2ZjkxNzk5MTQwYmY4YzAyZTYxY2E3MTI0NTIzLkNoaWxkID0gQm9yZGVyXzEzOTJlNzBhYjA4MjQzY2NiZjA3MzVlMDA3ZWU4ZmUyO1xyXG5cclxudmFyIEJpbmRpbmdfNTA3NDc0MzI4YWJjNGE2MWIxZDdiY2RkYWM4ZDRjNDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNTA3NDc0MzI4YWJjNGE2MWIxZDdiY2RkYWM4ZDRjNDIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2M5OTY0NTdkYTQ2NTRhZTA5MmJlYjQwNzNmYjgyNWZmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYzk5NjQ1N2RhNDY1NGFlMDkyYmViNDA3M2ZiODI1ZmYuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNTA3NDc0MzI4YWJjNGE2MWIxZDdiY2RkYWM4ZDRjNDIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9jOTk2NDU3ZGE0NjU0YWUwOTJiZWI0MDczZmI4MjVmZjtcclxuXHJcblxyXG5CaW5kaW5nXzUwNzQ3NDMyOGFiYzRhNjFiMWQ3YmNkZGFjOGQ0YzQyLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc0YTE5ODBlZWE2OTRjZGI5ZjIzYzU5ZGUxNTYwMmVmO1xyXG5cclxudmFyIEJpbmRpbmdfNDMyYTRjOTFkOTIyNDRkYWIxN2NhOGYxMDVkYmVkZDMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNDMyYTRjOTFkOTIyNDRkYWIxN2NhOGYxMDVkYmVkZDMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyQnJ1c2hcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8yMjdjNjIwNGY5M2Q0NzdkOGIxNTZkNDhjMmIyNWFkMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzIyN2M2MjA0ZjkzZDQ3N2Q4YjE1NmQ0OGMyYjI1YWQxLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzQzMmE0YzkxZDkyMjQ0ZGFiMTdjYThmMTA1ZGJlZGQzLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMjI3YzYyMDRmOTNkNDc3ZDhiMTU2ZDQ4YzJiMjVhZDE7XHJcblxyXG5cclxuQmluZGluZ180MzJhNGM5MWQ5MjI0NGRhYjE3Y2E4ZjEwNWRiZWRkMy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV83NGExOTgwZWVhNjk0Y2RiOWYyM2M1OWRlMTU2MDJlZjtcclxuXHJcbnZhciBCaW5kaW5nX2E4NGMwNzM1ODc1ZjQzMTRhMmIxNDEyNTE1YmIxYjEwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2E4NGMwNzM1ODc1ZjQzMTRhMmIxNDEyNTE1YmIxYjEwLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlclRoaWNrbmVzc1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzcwMTkxMTU3Zjk3NTRmZjg4YjcxOTAxYjkwNzM4NzA2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNzAxOTExNTdmOTc1NGZmODhiNzE5MDFiOTA3Mzg3MDYuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYTg0YzA3MzU4NzVmNDMxNGEyYjE0MTI1MTViYjFiMTAuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV83MDE5MTE1N2Y5NzU0ZmY4OGI3MTkwMWI5MDczODcwNjtcclxuXHJcblxyXG5CaW5kaW5nX2E4NGMwNzM1ODc1ZjQzMTRhMmIxNDEyNTE1YmIxYjEwLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzc0YTE5ODBlZWE2OTRjZGI5ZjIzYzU5ZGUxNTYwMmVmO1xyXG5cclxuXHJcblxyXG5Db250ZW50UHJlc2VudGVyX2FlMGVjMDI0ZjAxNDRiM2Q5MzMyYjAzNGU5YWMzM2IyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFRlbXBsYXRlUHJvcGVydHksIEJpbmRpbmdfYWVjM2U1ODA3M2U1NGI4NTk1MGU4MTgwZWVlNzQzMmEpO1xyXG5Db250ZW50UHJlc2VudGVyX2FlMGVjMDI0ZjAxNDRiM2Q5MzMyYjAzNGU5YWMzM2IyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFByb3BlcnR5LCBCaW5kaW5nX2U1ZDEwN2EwZDQ3ZjRkOGNhNWY4ZTA3YjdlZGRkODVjKTtcclxuQ29udGVudFByZXNlbnRlcl9hZTBlYzAyNGYwMTQ0YjNkOTMzMmIwMzRlOWFjMzNiMi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuTWFyZ2luUHJvcGVydHksIEJpbmRpbmdfOGI4ZjVkYjFhOTZkNGUwNmIzMzZiZjUzNDg2ZDczZDEpO1xyXG5Db250ZW50UHJlc2VudGVyX2FlMGVjMDI0ZjAxNDRiM2Q5MzMyYjAzNGU5YWMzM2IyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5Ib3Jpem9udGFsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfZWY0ZGM5NDA3YWI3NGJlOTk1ZWUzNjc5ZGRlMDAzMmIpO1xyXG5Db250ZW50UHJlc2VudGVyX2FlMGVjMDI0ZjAxNDRiM2Q5MzMyYjAzNGU5YWMzM2IyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5WZXJ0aWNhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nXzBiMjkyNWVkNWQ3YzRhNzFiYThkNGY0NGU0NzE2OWM5KTtcclxuQm9yZGVyXzEzOTJlNzBhYjA4MjQzY2NiZjA3MzVlMDA3ZWU4ZmUyLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19mMWJhNWNkOTk5MzM0NzE4ODJkNmNjOTk1NDA5OGQ2MCk7XHJcbkJvcmRlcl9hMzJlNmY5MTc5OTE0MGJmOGMwMmU2MWNhNzEyNDUyMy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfNTA3NDc0MzI4YWJjNGE2MWIxZDdiY2RkYWM4ZDRjNDIpO1xyXG5Cb3JkZXJfYTMyZTZmOTE3OTkxNDBiZjhjMDJlNjFjYTcxMjQ1MjMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyQnJ1c2hQcm9wZXJ0eSwgQmluZGluZ180MzJhNGM5MWQ5MjI0NGRhYjE3Y2E4ZjEwNWRiZWRkMyk7XHJcbkJvcmRlcl9hMzJlNmY5MTc5OTE0MGJmOGMwMmU2MWNhNzEyNDUyMy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJUaGlja25lc3NQcm9wZXJ0eSwgQmluZGluZ19hODRjMDczNTg3NWY0MzE0YTJiMTQxMjUxNWJiMWIxMCk7XHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iNjBhYjQ1NTU4OTI0YTFkYmQ4ZmU5NGFiMDRjYzEzZCxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9mZmMwYzk2NmJlMWQ0ZGJmYWQyZDQ1OTk0NzJlOThkNixcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2ZmYzBjOTY2YmUxZDRkYmZhZDJkNDU5OTQ3MmU5OGQ2LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfZmZjMGM5NjZiZTFkNGRiZmFkMmQ0NTk5NDcyZTk4ZDYsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9mZmMwYzk2NmJlMWQ0ZGJmYWQyZDQ1OTk0NzJlOThkNixcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2ZmYzBjOTY2YmUxZDRkYmZhZDJkNDU5OTQ3MmU5OGQ2KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iNjBhYjQ1NTU4OTI0YTFkYmQ4ZmU5NGFiMDRjYzEzZCwgQm9yZGVyXzEzOTJlNzBhYjA4MjQzY2NiZjA3MzVlMDA3ZWU4ZmUyKTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYzc1NDVhNmI4YTk0MTJjOWUwYzRiZThkMWFkYmZiOSxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8wNjA2YWMyOWU4YjY0OTIxYWY1NmYxYmI0NDEyY2IyYixcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzA2MDZhYzI5ZThiNjQ5MjFhZjU2ZjFiYjQ0MTJjYjJiLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMDYwNmFjMjllOGI2NDkyMWFmNTZmMWJiNDQxMmNiMmIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8wNjA2YWMyOWU4YjY0OTIxYWY1NmYxYmI0NDEyY2IyYixcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzA2MDZhYzI5ZThiNjQ5MjFhZjU2ZjFiYjQ0MTJjYjJiKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYzc1NDVhNmI4YTk0MTJjOWUwYzRiZThkMWFkYmZiOSwgQm9yZGVyXzEzOTJlNzBhYjA4MjQzY2NiZjA3MzVlMDA3ZWU4ZmUyKTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc182YTI4ZDg0ZDU0Njk0YTg5YjI0ZWJkMjIyZWZiMDk2NSxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9jYWVjZjc1NWJkMTc0N2U1OWNmOTk3MGZhZTYyM2VlMCxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2NhZWNmNzU1YmQxNzQ3ZTU5Y2Y5OTcwZmFlNjIzZWUwLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfY2FlY2Y3NTViZDE3NDdlNTljZjk5NzBmYWU2MjNlZTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9jYWVjZjc1NWJkMTc0N2U1OWNmOTk3MGZhZTYyM2VlMCxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2NhZWNmNzU1YmQxNzQ3ZTU5Y2Y5OTcwZmFlNjIzZWUwKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc182YTI4ZDg0ZDU0Njk0YTg5YjI0ZWJkMjIyZWZiMDk2NSwgQm9yZGVyXzEzOTJlNzBhYjA4MjQzY2NiZjA3MzVlMDA3ZWU4ZmUyKTtcclxuXHJcbnRlbXBsYXRlSW5zdGFuY2VfNzRhMTk4MGVlYTY5NGNkYjlmMjNjNTlkZTE1NjAyZWYuVGVtcGxhdGVDb250ZW50ID0gQm9yZGVyX2EzMmU2ZjkxNzk5MTQwYmY4YzAyZTYxY2E3MTI0NTIzO1xyXG5yZXR1cm4gdGVtcGxhdGVJbnN0YW5jZV83NGExOTgwZWVhNjk0Y2RiOWYyM2M1OWRlMTU2MDJlZjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNzQ3YjFjMDlhNDNkNGQ2NWEzYzQxYThlMjFkYTg4Y2QgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV83NDdiMWMwOWE0M2Q0ZDY1YTNjNDFhOGUyMWRhODhjZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzc0N2IxYzA5YTQzZDRkNjVhM2M0MWE4ZTIxZGE4OGNkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNzQ3YjFjMDlhNDNkNGQ2NWEzYzQxYThlMjFkYTg4Y2QgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5Xzc0N2IxYzA5YTQzZDRkNjVhM2M0MWE4ZTIxZGE4OGNkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8wNDNiNzFmODY5NDc0MGQzOTgwZmJiMTk2YmUzYTViNSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzA0M2I3MWY4Njk0NzQwZDM5ODBmYmIxOTZiZTNhNWI1IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMDQzYjcxZjg2OTQ3NDBkMzk4MGZiYjE5NmJlM2E1YjUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8wNDNiNzFmODY5NDc0MGQzOTgwZmJiMTk2YmUzYTViNSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMDQzYjcxZjg2OTQ3NDBkMzk4MGZiYjE5NmJlM2E1YjUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzU1ODQxMmUwZGNiZDQ4MTRhMGI4ODc0NzdmYmI2MTk3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNTU4NDEyZTBkY2JkNDgxNGEwYjg4NzQ3N2ZiYjYxOTcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV81NTg0MTJlMGRjYmQ0ODE0YTBiODg3NDc3ZmJiNjE5NyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzU1ODQxMmUwZGNiZDQ4MTRhMGI4ODc0NzdmYmI2MTk3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV81NTg0MTJlMGRjYmQ0ODE0YTBiODg3NDc3ZmJiNjE5NyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlIEluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV82ODBkZmU0Y2ExMTQ0NjBjYTEzNmEwZGUyYTFiODZmMihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sIHRlbXBsYXRlT3duZXIpXHJcbiAgICAgICAge1xyXG52YXIgdGVtcGxhdGVJbnN0YW5jZV8wNDQ1YTMzZGY1ZWI0NzViOWFjZGQ4MGY3Mjg5NTE5MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlKCk7XHJcbnRlbXBsYXRlSW5zdGFuY2VfMDQ0NWEzM2RmNWViNDc1YjlhY2RkODBmNzI4OTUxOTIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlT3duZXI7XHJcbnZhciBCb3JkZXJfMWM2YWY4M2YwZjQ1NDU5OGFlYTg4ZDVlZDBjZjUyMzUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiT3V0ZXJCb3JkZXJcIiwgQm9yZGVyXzFjNmFmODNmMGY0NTQ1OThhZWE4OGQ1ZWQwY2Y1MjM1KTtcclxuQm9yZGVyXzFjNmFmODNmMGY0NTQ1OThhZWE4OGQ1ZWQwY2Y1MjM1Lk5hbWUgPSBcIk91dGVyQm9yZGVyXCI7XHJcbkJvcmRlcl8xYzZhZjgzZjBmNDU0NTk4YWVhODhkNWVkMGNmNTIzNS5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgVmlzdWFsU3RhdGVHcm91cF9lZmNiNTI0NDU4NmE0Nzg4YjhhZGJlYTM2ZDVjOTFmMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZUdyb3VwKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29tbW9uU3RhdGVzXCIsIFZpc3VhbFN0YXRlR3JvdXBfZWZjYjUyNDQ1ODZhNDc4OGI4YWRiZWEzNmQ1YzkxZjEpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2VmY2I1MjQ0NTg2YTQ3ODhiOGFkYmVhMzZkNWM5MWYxLk5hbWUgPSBcIkNvbW1vblN0YXRlc1wiO1xyXG52YXIgVmlzdWFsU3RhdGVfMjdjNjk0YWUwY2M4NDlmMjkyMDk1MmVhZTI5ZTYyMjkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJOb3JtYWxcIiwgVmlzdWFsU3RhdGVfMjdjNjk0YWUwY2M4NDlmMjkyMDk1MmVhZTI5ZTYyMjkpO1xyXG5WaXN1YWxTdGF0ZV8yN2M2OTRhZTBjYzg0OWYyOTIwOTUyZWFlMjllNjIyOS5OYW1lID0gXCJOb3JtYWxcIjtcclxuXHJcbnZhciBWaXN1YWxTdGF0ZV9kMzQxZjM5Nzc3Yjk0ZjE2OWU2OThiMDlhMzgxNjg3ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlBvaW50ZXJPdmVyXCIsIFZpc3VhbFN0YXRlX2QzNDFmMzk3NzdiOTRmMTY5ZTY5OGIwOWEzODE2ODdkKTtcclxuVmlzdWFsU3RhdGVfZDM0MWYzOTc3N2I5NGYxNjllNjk4YjA5YTM4MTY4N2QuTmFtZSA9IFwiUG9pbnRlck92ZXJcIjtcclxudmFyIFN0b3J5Ym9hcmRfZmVmYWI0MDBmZWE5NGUzMThmYzU0NGNhMDNhMGM0M2EgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRkN2VjNDM0NGQ5YjRlZWI4NjFkNDJjYzdhMDQ1MjJhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRkN2VjNDM0NGQ5YjRlZWI4NjFkNDJjYzdhMDQ1MjJhLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV83MmEwZGQzNWViMTQ0Yjc2YWVmYjViYjI1ZmFmYWQzNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzcyYTBkZDM1ZWIxNDRiNzZhZWZiNWJiMjVmYWZhZDM3LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNzJhMGRkMzVlYjE0NGI3NmFlZmI1YmIyNWZhZmFkMzcuVmFsdWUgPSBAXCIjMTEwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRkN2VjNDM0NGQ5YjRlZWI4NjFkNDJjYzdhMDQ1MjJhLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV83MmEwZGQzNWViMTQ0Yjc2YWVmYjViYjI1ZmFmYWQzNyk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9mZWZhYjQwMGZlYTk0ZTMxOGZjNTQ0Y2EwM2EwYzQzYS5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGQ3ZWM0MzQ0ZDliNGVlYjg2MWQ0MmNjN2EwNDUyMmEpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlX2QzNDFmMzk3NzdiOTRmMTY5ZTY5OGIwOWEzODE2ODdkLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2ZlZmFiNDAwZmVhOTRlMzE4ZmM1NDRjYTAzYTBjNDNhO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV82YjZmOTAwYzZmZTc0Yzc4OWNhN2JjNWY1NzM2MzVlMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlByZXNzZWRcIiwgVmlzdWFsU3RhdGVfNmI2ZjkwMGM2ZmU3NGM3ODljYTdiYzVmNTczNjM1ZTIpO1xyXG5WaXN1YWxTdGF0ZV82YjZmOTAwYzZmZTc0Yzc4OWNhN2JjNWY1NzM2MzVlMi5OYW1lID0gXCJQcmVzc2VkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzJjZGFkMDUyNGRkNzQwMGJhNmU2MGViOWJmNjMyNDc5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hMTM0NjM5ZDNhMGM0OGI1YTQ2Y2U2OWViMzNiNDMzYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hMTM0NjM5ZDNhMGM0OGI1YTQ2Y2U2OWViMzNiNDMzYixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYjM5YmQ4YmIyZjcwNGRjNjgxOGQ0OThhYTkwNTgzMmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9iMzliZDhiYjJmNzA0ZGM2ODE4ZDQ5OGFhOTA1ODMyYi5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2IzOWJkOGJiMmY3MDRkYzY4MThkNDk4YWE5MDU4MzJiLlZhbHVlID0gQFwiIzIyMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hMTM0NjM5ZDNhMGM0OGI1YTQ2Y2U2OWViMzNiNDMzYi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYjM5YmQ4YmIyZjcwNGRjNjgxOGQ0OThhYTkwNTgzMmIpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMmNkYWQwNTI0ZGQ3NDAwYmE2ZTYwZWI5YmY2MzI0NzkuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2ExMzQ2MzlkM2EwYzQ4YjVhNDZjZTY5ZWIzM2I0MzNiKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV82YjZmOTAwYzZmZTc0Yzc4OWNhN2JjNWY1NzM2MzVlMi5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8yY2RhZDA1MjRkZDc0MDBiYTZlNjBlYjliZjYzMjQ3OTtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfYzBmYzkyNDE3NWEyNDVjMzlhMzNlMWY2MWUxMzhjNmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJEaXNhYmxlZFwiLCBWaXN1YWxTdGF0ZV9jMGZjOTI0MTc1YTI0NWMzOWEzM2UxZjYxZTEzOGM2Yik7XHJcblZpc3VhbFN0YXRlX2MwZmM5MjQxNzVhMjQ1YzM5YTMzZTFmNjFlMTM4YzZiLk5hbWUgPSBcIkRpc2FibGVkXCI7XHJcbnZhciBTdG9yeWJvYXJkX2Y0MjVlMzAwMmIwOTQ0NjA4OTg5NzlmYWE4NWE1Y2YwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iMWIzYTllZWMyMjk0NGJmOTFjZWRkZjgwMjNmOWFjOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iMWIzYTllZWMyMjk0NGJmOTFjZWRkZjgwMjNmOWFjOSxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfOWY2MDdkZGM1YjI5NDhmN2I3ZjcxN2Y3MThjYjljODEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV85ZjYwN2RkYzViMjk0OGY3YjdmNzE3ZjcxOGNiOWM4MS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzlmNjA3ZGRjNWIyOTQ4ZjdiN2Y3MTdmNzE4Y2I5YzgxLlZhbHVlID0gQFwiIzMzRkZGRkZGXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iMWIzYTllZWMyMjk0NGJmOTFjZWRkZjgwMjNmOWFjOS5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfOWY2MDdkZGM1YjI5NDhmN2I3ZjcxN2Y3MThjYjljODEpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfZjQyNWUzMDAyYjA5NDQ2MDg5ODk3OWZhYTg1YTVjZjAuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2IxYjNhOWVlYzIyOTQ0YmY5MWNlZGRmODAyM2Y5YWM5KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9jMGZjOTI0MTc1YTI0NWMzOWEzM2UxZjYxZTEzOGM2Yi5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF9mNDI1ZTMwMDJiMDk0NDYwODk4OTc5ZmFhODVhNWNmMDtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZUdyb3VwX2VmY2I1MjQ0NTg2YTQ3ODhiOGFkYmVhMzZkNWM5MWYxLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfMjdjNjk0YWUwY2M4NDlmMjkyMDk1MmVhZTI5ZTYyMjkpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2VmY2I1MjQ0NTg2YTQ3ODhiOGFkYmVhMzZkNWM5MWYxLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfZDM0MWYzOTc3N2I5NGYxNjllNjk4YjA5YTM4MTY4N2QpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2VmY2I1MjQ0NTg2YTQ3ODhiOGFkYmVhMzZkNWM5MWYxLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNmI2ZjkwMGM2ZmU3NGM3ODljYTdiYzVmNTczNjM1ZTIpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2VmY2I1MjQ0NTg2YTQ3ODhiOGFkYmVhMzZkNWM5MWYxLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfYzBmYzkyNDE3NWEyNDVjMzlhMzNlMWY2MWUxMzhjNmIpO1xyXG5cclxuXHJcbnRlbXBsYXRlT3duZXIuSU5URVJOQUxfR2V0VmlzdWFsU3RhdGVHcm91cHMoKS5BZGQoVmlzdWFsU3RhdGVHcm91cF9lZmNiNTI0NDU4NmE0Nzg4YjhhZGJlYTM2ZDVjOTFmMSk7XHJcblxyXG52YXIgQm9yZGVyX2YwODNkNTgzMWQzMTQyZDA5NTA4ZjAzODMwZTVlZTIxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIklubmVyQm9yZGVyXCIsIEJvcmRlcl9mMDgzZDU4MzFkMzE0MmQwOTUwOGYwMzgzMGU1ZWUyMSk7XHJcbkJvcmRlcl9mMDgzZDU4MzFkMzE0MmQwOTUwOGYwMzgzMGU1ZWUyMS5OYW1lID0gXCJJbm5lckJvcmRlclwiO1xyXG5Cb3JkZXJfZjA4M2Q1ODMxZDMxNDJkMDk1MDhmMDM4MzBlNWVlMjEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENvbnRlbnRQcmVzZW50ZXJfZjdmNzdiZjMxYjM1NGI0ZDljMDUzZmZjZmZiYzgwOGQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudFByZXNlbnRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbnRlbnRQcmVzZW50ZXJcIiwgQ29udGVudFByZXNlbnRlcl9mN2Y3N2JmMzFiMzU0YjRkOWMwNTNmZmNmZmJjODA4ZCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZjdmNzdiZjMxYjM1NGI0ZDljMDUzZmZjZmZiYzgwOGQuTmFtZSA9IFwiQ29udGVudFByZXNlbnRlclwiO1xyXG52YXIgQmluZGluZ180ZDhhY2U5MTg5OGU0MjkwOTNmZjY0NTEwYzZiNTM0MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ180ZDhhY2U5MTg5OGU0MjkwOTNmZjY0NTEwYzZiNTM0MS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50VGVtcGxhdGVcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jOTllN2QyNTcxNjA0NDBiODI5ZmJlODBlNzA3ZDQ0MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2M5OWU3ZDI1NzE2MDQ0MGI4MjlmYmU4MGU3MDdkNDQzLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzRkOGFjZTkxODk4ZTQyOTA5M2ZmNjQ1MTBjNmI1MzQxLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYzk5ZTdkMjU3MTYwNDQwYjgyOWZiZTgwZTcwN2Q0NDM7XHJcblxyXG5cclxuQmluZGluZ180ZDhhY2U5MTg5OGU0MjkwOTNmZjY0NTEwYzZiNTM0MS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNDQ1YTMzZGY1ZWI0NzViOWFjZGQ4MGY3Mjg5NTE5MjtcclxuXHJcbnZhciBCaW5kaW5nXzYzMDU3NGVkZmU2NjQ2YWU4ODFjMDlmNjNiYmI0NTQ3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzYzMDU3NGVkZmU2NjQ2YWU4ODFjMDlmNjNiYmI0NTQ3LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9iMjI0ZmQ4MGQwOGU0YjIwYjE5OTY0NDU1ZWUxZjk3OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2IyMjRmZDgwZDA4ZTRiMjBiMTk5NjQ0NTVlZTFmOTc4Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzYzMDU3NGVkZmU2NjQ2YWU4ODFjMDlmNjNiYmI0NTQ3LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYjIyNGZkODBkMDhlNGIyMGIxOTk2NDQ1NWVlMWY5Nzg7XHJcblxyXG5cclxuQmluZGluZ182MzA1NzRlZGZlNjY0NmFlODgxYzA5ZjYzYmJiNDU0Ny5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNDQ1YTMzZGY1ZWI0NzViOWFjZGQ4MGY3Mjg5NTE5MjtcclxuXHJcbnZhciBCaW5kaW5nXzU0ZmY1Y2QwMjhlOTQ2ZTM4N2NkY2U3NDk5YTMyY2UyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzU0ZmY1Y2QwMjhlOTQ2ZTM4N2NkY2U3NDk5YTMyY2UyLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlBhZGRpbmdcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lZDE4NzhhNTVlMTY0NzI2OWFhMjYwZTgzODNlNTg1ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2VkMTg3OGE1NWUxNjQ3MjY5YWEyNjBlODM4M2U1ODVlLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzU0ZmY1Y2QwMjhlOTQ2ZTM4N2NkY2U3NDk5YTMyY2UyLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZWQxODc4YTU1ZTE2NDcyNjlhYTI2MGU4MzgzZTU4NWU7XHJcblxyXG5cclxuQmluZGluZ181NGZmNWNkMDI4ZTk0NmUzODdjZGNlNzQ5OWEzMmNlMi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNDQ1YTMzZGY1ZWI0NzViOWFjZGQ4MGY3Mjg5NTE5MjtcclxuXHJcbnZhciBCaW5kaW5nXzhhNjQxYzVlZjI4YjQ0YWM4ODE2ZmY2NWU3N2JkZjE5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzhhNjQxYzVlZjI4YjQ0YWM4ODE2ZmY2NWU3N2JkZjE5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkhvcml6b250YWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNDMyMTYxYjgwZjUzNGY0NjgzZmNjMzFjMTY1ZWMwMWEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV80MzIxNjFiODBmNTM0ZjQ2ODNmY2MzMWMxNjVlYzAxYS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184YTY0MWM1ZWYyOGI0NGFjODgxNmZmNjVlNzdiZGYxOS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzQzMjE2MWI4MGY1MzRmNDY4M2ZjYzMxYzE2NWVjMDFhO1xyXG5cclxuXHJcbkJpbmRpbmdfOGE2NDFjNWVmMjhiNDRhYzg4MTZmZjY1ZTc3YmRmMTkuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMDQ0NWEzM2RmNWViNDc1YjlhY2RkODBmNzI4OTUxOTI7XHJcblxyXG52YXIgQmluZGluZ19lZGZlNzk1YjVkYjI0ZmE4ODY2NTRhZjQzOWY4OTMyOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lZGZlNzk1YjVkYjI0ZmE4ODY2NTRhZjQzOWY4OTMyOS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJWZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV84ZmIwN2E2N2VkY2Q0ZmMxYTQ0MDVhN2ZiNDdiMTE0ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzhmYjA3YTY3ZWRjZDRmYzFhNDQwNWE3ZmI0N2IxMTRlLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2VkZmU3OTViNWRiMjRmYTg4NjY1NGFmNDM5Zjg5MzI5LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOGZiMDdhNjdlZGNkNGZjMWE0NDA1YTdmYjQ3YjExNGU7XHJcblxyXG5cclxuQmluZGluZ19lZGZlNzk1YjVkYjI0ZmE4ODY2NTRhZjQzOWY4OTMyOS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNDQ1YTMzZGY1ZWI0NzViOWFjZGQ4MGY3Mjg5NTE5MjtcclxuXHJcblxyXG5Cb3JkZXJfZjA4M2Q1ODMxZDMxNDJkMDk1MDhmMDM4MzBlNWVlMjEuQ2hpbGQgPSBDb250ZW50UHJlc2VudGVyX2Y3Zjc3YmYzMWIzNTRiNGQ5YzA1M2ZmY2ZmYmM4MDhkO1xyXG5cclxudmFyIEJpbmRpbmdfYTY4ZTA5YjNmYjgxNDAyMDk0MTkwYmFjOWRhZGIzOTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYTY4ZTA5YjNmYjgxNDAyMDk0MTkwYmFjOWRhZGIzOTAuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzk2ZTIwZGY5OTA1NzQ3YjQ5NTA4OWEzNWFkMTA1ZTVhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOTZlMjBkZjk5MDU3NDdiNDk1MDg5YTM1YWQxMDVlNWEuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYTY4ZTA5YjNmYjgxNDAyMDk0MTkwYmFjOWRhZGIzOTAuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85NmUyMGRmOTkwNTc0N2I0OTUwODlhMzVhZDEwNWU1YTtcclxuXHJcblxyXG5CaW5kaW5nX2E2OGUwOWIzZmI4MTQwMjA5NDE5MGJhYzlkYWRiMzkwLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzA0NDVhMzNkZjVlYjQ3NWI5YWNkZDgwZjcyODk1MTkyO1xyXG5cclxuXHJcbkJvcmRlcl8xYzZhZjgzZjBmNDU0NTk4YWVhODhkNWVkMGNmNTIzNS5DaGlsZCA9IEJvcmRlcl9mMDgzZDU4MzFkMzE0MmQwOTUwOGYwMzgzMGU1ZWUyMTtcclxuXHJcbnZhciBCaW5kaW5nX2M2MmJmMDVjZjZjODRkZTE5ZTY3MDRkZjc1Nzc1ODU5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2M2MmJmMDVjZjZjODRkZTE5ZTY3MDRkZjc1Nzc1ODU5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9hNzA5YmEyYzRiN2I0OTJlYTQ3ZDQ5NzFkNjJlOGIyYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2E3MDliYTJjNGI3YjQ5MmVhNDdkNDk3MWQ2MmU4YjJiLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2M2MmJmMDVjZjZjODRkZTE5ZTY3MDRkZjc1Nzc1ODU5LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYTcwOWJhMmM0YjdiNDkyZWE0N2Q0OTcxZDYyZThiMmI7XHJcblxyXG5cclxuQmluZGluZ19jNjJiZjA1Y2Y2Yzg0ZGUxOWU2NzA0ZGY3NTc3NTg1OS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNDQ1YTMzZGY1ZWI0NzViOWFjZGQ4MGY3Mjg5NTE5MjtcclxuXHJcbnZhciBCaW5kaW5nX2IzOWYyMDM3ZTI0MzQ3N2ZhYWU3N2U2M2U3MjQ1NGYzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2IzOWYyMDM3ZTI0MzQ3N2ZhYWU3N2U2M2U3MjQ1NGYzLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlckJydXNoXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZDAyYzE1MDA2MTg0NDhjYmI5ZWNiZjZmMWU0Yjc2MDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kMDJjMTUwMDYxODQ0OGNiYjllY2JmNmYxZTRiNzYwMi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19iMzlmMjAzN2UyNDM0NzdmYWFlNzdlNjNlNzI0NTRmMy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2QwMmMxNTAwNjE4NDQ4Y2JiOWVjYmY2ZjFlNGI3NjAyO1xyXG5cclxuXHJcbkJpbmRpbmdfYjM5ZjIwMzdlMjQzNDc3ZmFhZTc3ZTYzZTcyNDU0ZjMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMDQ0NWEzM2RmNWViNDc1YjlhY2RkODBmNzI4OTUxOTI7XHJcblxyXG52YXIgQmluZGluZ18wMWExYjgxOGViMjM0ZjM2OWJjOTZiMjQ4NzkyNDU1OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18wMWExYjgxOGViMjM0ZjM2OWJjOTZiMjQ4NzkyNDU1OC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJUaGlja25lc3NcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kNDM4YjdmODA0NTQ0Y2M2YTk3OGE1ZGY0NDU5OTAzOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2Q0MzhiN2Y4MDQ1NDRjYzZhOTc4YTVkZjQ0NTk5MDM5Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzAxYTFiODE4ZWIyMzRmMzY5YmM5NmIyNDg3OTI0NTU4LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZDQzOGI3ZjgwNDU0NGNjNmE5NzhhNWRmNDQ1OTkwMzk7XHJcblxyXG5cclxuQmluZGluZ18wMWExYjgxOGViMjM0ZjM2OWJjOTZiMjQ4NzkyNDU1OC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNDQ1YTMzZGY1ZWI0NzViOWFjZGQ4MGY3Mjg5NTE5MjtcclxuXHJcblxyXG5cclxuQ29udGVudFByZXNlbnRlcl9mN2Y3N2JmMzFiMzU0YjRkOWMwNTNmZmNmZmJjODA4ZC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRUZW1wbGF0ZVByb3BlcnR5LCBCaW5kaW5nXzRkOGFjZTkxODk4ZTQyOTA5M2ZmNjQ1MTBjNmI1MzQxKTtcclxuQ29udGVudFByZXNlbnRlcl9mN2Y3N2JmMzFiMzU0YjRkOWMwNTNmZmNmZmJjODA4ZC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRQcm9wZXJ0eSwgQmluZGluZ182MzA1NzRlZGZlNjY0NmFlODgxYzA5ZjYzYmJiNDU0Nyk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZjdmNzdiZjMxYjM1NGI0ZDljMDUzZmZjZmZiYzgwOGQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lk1hcmdpblByb3BlcnR5LCBCaW5kaW5nXzU0ZmY1Y2QwMjhlOTQ2ZTM4N2NkY2U3NDk5YTMyY2UyKTtcclxuQ29udGVudFByZXNlbnRlcl9mN2Y3N2JmMzFiMzU0YjRkOWMwNTNmZmNmZmJjODA4ZC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuSG9yaXpvbnRhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nXzhhNjQxYzVlZjI4YjQ0YWM4ODE2ZmY2NWU3N2JkZjE5KTtcclxuQ29udGVudFByZXNlbnRlcl9mN2Y3N2JmMzFiMzU0YjRkOWMwNTNmZmNmZmJjODA4ZC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuVmVydGljYWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19lZGZlNzk1YjVkYjI0ZmE4ODY2NTRhZjQzOWY4OTMyOSk7XHJcbkJvcmRlcl9mMDgzZDU4MzFkMzE0MmQwOTUwOGYwMzgzMGU1ZWUyMS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfYTY4ZTA5YjNmYjgxNDAyMDk0MTkwYmFjOWRhZGIzOTApO1xyXG5Cb3JkZXJfMWM2YWY4M2YwZjQ1NDU5OGFlYTg4ZDVlZDBjZjUyMzUuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2M2MmJmMDVjZjZjODRkZTE5ZTY3MDRkZjc1Nzc1ODU5KTtcclxuQm9yZGVyXzFjNmFmODNmMGY0NTQ1OThhZWE4OGQ1ZWQwY2Y1MjM1LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlckJydXNoUHJvcGVydHksIEJpbmRpbmdfYjM5ZjIwMzdlMjQzNDc3ZmFhZTc3ZTYzZTcyNDU0ZjMpO1xyXG5Cb3JkZXJfMWM2YWY4M2YwZjQ1NDU5OGFlYTg4ZDVlZDBjZjUyMzUuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyVGhpY2tuZXNzUHJvcGVydHksIEJpbmRpbmdfMDFhMWI4MThlYjIzNGYzNjliYzk2YjI0ODc5MjQ1NTgpO1xyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGQ3ZWM0MzQ0ZDliNGVlYjg2MWQ0MmNjN2EwNDUyMmEsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNzQ3YjFjMDlhNDNkNGQ2NWEzYzQxYThlMjFkYTg4Y2QsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV83NDdiMWMwOWE0M2Q0ZDY1YTNjNDFhOGUyMWRhODhjZCxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzc0N2IxYzA5YTQzZDRkNjVhM2M0MWE4ZTIxZGE4OGNkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNzQ3YjFjMDlhNDNkNGQ2NWEzYzQxYThlMjFkYTg4Y2QsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV83NDdiMWMwOWE0M2Q0ZDY1YTNjNDFhOGUyMWRhODhjZCkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGQ3ZWM0MzQ0ZDliNGVlYjg2MWQ0MmNjN2EwNDUyMmEsIEJvcmRlcl9mMDgzZDU4MzFkMzE0MmQwOTUwOGYwMzgzMGU1ZWUyMSk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYTEzNDYzOWQzYTBjNDhiNWE0NmNlNjllYjMzYjQzM2IsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMDQzYjcxZjg2OTQ3NDBkMzk4MGZiYjE5NmJlM2E1YjUsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wNDNiNzFmODY5NDc0MGQzOTgwZmJiMTk2YmUzYTViNSxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzA0M2I3MWY4Njk0NzQwZDM5ODBmYmIxOTZiZTNhNWI1LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMDQzYjcxZjg2OTQ3NDBkMzk4MGZiYjE5NmJlM2E1YjUsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wNDNiNzFmODY5NDc0MGQzOTgwZmJiMTk2YmUzYTViNSkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYTEzNDYzOWQzYTBjNDhiNWE0NmNlNjllYjMzYjQzM2IsIEJvcmRlcl9mMDgzZDU4MzFkMzE0MmQwOTUwOGYwMzgzMGU1ZWUyMSk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjFiM2E5ZWVjMjI5NDRiZjkxY2VkZGY4MDIzZjlhYzksXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNTU4NDEyZTBkY2JkNDgxNGEwYjg4NzQ3N2ZiYjYxOTcsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV81NTg0MTJlMGRjYmQ0ODE0YTBiODg3NDc3ZmJiNjE5NyxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzU1ODQxMmUwZGNiZDQ4MTRhMGI4ODc0NzdmYmI2MTk3LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNTU4NDEyZTBkY2JkNDgxNGEwYjg4NzQ3N2ZiYjYxOTcsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV81NTg0MTJlMGRjYmQ0ODE0YTBiODg3NDc3ZmJiNjE5NykpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjFiM2E5ZWVjMjI5NDRiZjkxY2VkZGY4MDIzZjlhYzksIEJvcmRlcl9mMDgzZDU4MzFkMzE0MmQwOTUwOGYwMzgzMGU1ZWUyMSk7XHJcblxyXG50ZW1wbGF0ZUluc3RhbmNlXzA0NDVhMzNkZjVlYjQ3NWI5YWNkZDgwZjcyODk1MTkyLlRlbXBsYXRlQ29udGVudCA9IEJvcmRlcl8xYzZhZjgzZjBmNDU0NTk4YWVhODhkNWVkMGNmNTIzNTtcclxucmV0dXJuIHRlbXBsYXRlSW5zdGFuY2VfMDQ0NWEzM2RmNWViNDc1YjlhY2RkODBmNzI4OTUxOTI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwiLy8gPENTSFRNTDU+PFhhbWxIYXNoPkFCRkUzMDUzNDJGRUYzOTkyRjQ2QTM5MDMyQjVBNTEzPC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTYuMDQuMjAyMCA0OjAyOjA5PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgFBhZ2Vob21lx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5QYWdlSG9tZSk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5UeXBlSW5zdGFudGlhdGlvbkhlbHBlci5JbnN0YW50aWF0ZSh0eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBhdXRvLWdlbmVyYXRlZCBieSBcIkMjL1hBTUwgZm9yIEhUTUw1XCJcclxuLy9cclxuLy8gICAgIENoYW5nZXMgdG8gdGhpcyBmaWxlIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IgYW5kIHdpbGwgYmUgbG9zdCBpZlxyXG4vLyAgICAgdGhlIGNvZGUgaXMgcmVnZW5lcmF0ZWQuXHJcbi8vIDwvYXV0by1nZW5lcmF0ZWQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbnBhcnRpYWwgY2xhc3MgUGFnZUhvbWUgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QYWdlXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGVsZW1lbnQ7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24gYnRuQmVnaW47XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkIExheW91dFJvb3Q7XHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxQYWdlSG9tZS54YW1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMDE4NFxyXG5cclxuXHJcblxyXG52YXIgR3JpZF8zMmRlNTgxYTQzMWQ0ZGUwYWI1Y2MxMGZiNTU0ZTdmYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiTGF5b3V0Um9vdFwiLCBHcmlkXzMyZGU1ODFhNDMxZDRkZTBhYjVjYzEwZmI1NTRlN2ZiKTtcclxuR3JpZF8zMmRlNTgxYTQzMWQ0ZGUwYWI1Y2MxMGZiNTU0ZTdmYi5OYW1lID0gXCJMYXlvdXRSb290XCI7XHJcbkdyaWRfMzJkZTU4MWE0MzFkNGRlMGFiNWNjMTBmYjU1NGU3ZmIuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9KTtcclxudmFyIEdyaWRfNGY5NjA3MWEwM2UzNGUzMGJiYmZkZTgzNGYxNmU2ZDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF9iYjFlNjJhNjczM2I0YzkyYjc4OWZlZDJkZTA0NTM5MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYmIxZTYyYTY3MzNiNGM5MmI3ODlmZWQyZGUwNDUzOTIuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9iYjFlNjJhNjczM2I0YzkyYjc4OWZlZDJkZTA0NTM5Mi5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfMWQzYzlkMzU4YzNlNDQ4ZjkwN2IwZDIwYjEwY2VmMmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF8xZDNjOWQzNThjM2U0NDhmOTA3YjBkMjBiMTBjZWYyZi5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzFkM2M5ZDM1OGMzZTQ0OGY5MDdiMGQyMGIxMGNlZjJmLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF9mZjgzMDk3NDI1ZDY0MzIxYjU4ZWVhNjBkNTJmNGNmMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wX2ZmODMwOTc0MjVkNjQzMjFiNThlZWE2MGQ1MmY0Y2YwLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfZmY4MzA5NzQyNWQ2NDMyMWI1OGVlYTYwZDUyZjRjZjAuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoX2JiMWU2MmE2NzMzYjRjOTJiNzg5ZmVkMmRlMDQ1MzkyLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF8xZDNjOWQzNThjM2U0NDhmOTA3YjBkMjBiMTBjZWYyZik7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYmIxZTYyYTY3MzNiNGM5MmI3ODlmZWQyZGUwNDUzOTIuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wX2ZmODMwOTc0MjVkNjQzMjFiNThlZWE2MGQ1MmY0Y2YwKTtcclxuXHJcblxyXG5HcmlkXzRmOTYwNzFhMDNlMzRlMzBiYmJmZGU4MzRmMTZlNmQ2LkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoX2JiMWU2MmE2NzMzYjRjOTJiNzg5ZmVkMmRlMDQ1MzkyO1xyXG5cclxudmFyIEJvcmRlcl80NzM3Y2QzNGVjZDQ0MzcwOWJmYTI5ZmFlODQ2NDc2YyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJlbGVtZW50XCIsIEJvcmRlcl80NzM3Y2QzNGVjZDQ0MzcwOWJmYTI5ZmFlODQ2NDc2Yyk7XHJcbkJvcmRlcl80NzM3Y2QzNGVjZDQ0MzcwOWJmYTI5ZmFlODQ2NDc2Yy5OYW1lID0gXCJlbGVtZW50XCI7XHJcbkJvcmRlcl80NzM3Y2QzNGVjZDQ0MzcwOWJmYTI5ZmFlODQ2NDc2Yy5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDMpO1xyXG5Cb3JkZXJfNDczN2NkMzRlY2Q0NDM3MDliZmEyOWZhZTg0NjQ3NmMuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkwLCBHID0gKGJ5dGUpMCwgQiA9IChieXRlKTEzOSB9KTtcclxuQm9yZGVyXzQ3MzdjZDM0ZWNkNDQzNzA5YmZhMjlmYWU4NDY0NzZjLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMik7XHJcbkJvcmRlcl80NzM3Y2QzNGVjZDQ0MzcwOWJmYTI5ZmFlODQ2NDc2Yy5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF9iYTA4OThjZjMwOGU0ZTk4OWRkNDI0ZDA2MGM5NDA3ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYmEwODk4Y2YzMDhlNGU5ODlkZDQyNGQwNjBjOTQwN2QuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9iYTA4OThjZjMwOGU0ZTk4OWRkNDI0ZDA2MGM5NDA3ZC5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfNGIxZWI3YmRkNzBiNGY0M2FjNWQ5YjJjMDI0YTM5YzMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF80YjFlYjdiZGQ3MGI0ZjQzYWM1ZDliMmMwMjRhMzljMy5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzRiMWViN2JkZDcwYjRmNDNhYzVkOWIyYzAyNGEzOWMzLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF85NjdjNDQzZTgxNjc0YWU4YjVjN2I0MzY1YmQ5MDNhMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzk2N2M0NDNlODE2NzRhZThiNWM3YjQzNjViZDkwM2EzLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfOTY3YzQ0M2U4MTY3NGFlOGI1YzdiNDM2NWJkOTAzYTMuT2Zmc2V0ID0gMC41ODk2RDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfYzE1M2M4NDgzYmJkNGE4YmFmZGZkZjMyYTBiYTc3MDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9jMTUzYzg0ODNiYmQ0YThiYWZkZmRmMzJhMGJhNzcwNi5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNDYsIEcgPSAoYnl0ZSkyNDYsIEIgPSAoYnl0ZSkyNDYgfTtcclxuR3JhZGllbnRTdG9wX2MxNTNjODQ4M2JiZDRhOGJhZmRmZGYzMmEwYmE3NzA2Lk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF9iYTA4OThjZjMwOGU0ZTk4OWRkNDI0ZDA2MGM5NDA3ZC5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfNGIxZWI3YmRkNzBiNGY0M2FjNWQ5YjJjMDI0YTM5YzMpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2JhMDg5OGNmMzA4ZTRlOTg5ZGQ0MjRkMDYwYzk0MDdkLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF85NjdjNDQzZTgxNjc0YWU4YjVjN2I0MzY1YmQ5MDNhMyk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYmEwODk4Y2YzMDhlNGU5ODlkZDQyNGQwNjBjOTQwN2QuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wX2MxNTNjODQ4M2JiZDRhOGJhZmRmZGYzMmEwYmE3NzA2KTtcclxuXHJcblxyXG5Cb3JkZXJfNDczN2NkMzRlY2Q0NDM3MDliZmEyOWZhZTg0NjQ3NmMuQmFja2dyb3VuZCA9IExpbmVhckdyYWRpZW50QnJ1c2hfYmEwODk4Y2YzMDhlNGU5ODlkZDQyNGQwNjBjOTQwN2Q7XHJcblxyXG52YXIgVHJhbnNmb3JtR3JvdXBfYzZkNjU5ZGFhNmE4NDUwNWI2ZDg2OGVkMTE1ZjdjMjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuVHJhbnNmb3JtR3JvdXAoKTtcclxudmFyIFNjYWxlVHJhbnNmb3JtX2JjMTdmMjhiNjI1NzQ2MTI5ZWVkODhiYzVkZGQwZGRlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNjYWxlVHJhbnNmb3JtKCk7XHJcblxyXG52YXIgUm90YXRlVHJhbnNmb3JtXzBhMWNjNGFjM2E3ZjQ0YjdiMzQ5NDg0NGQzYWJkNmQ1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlJvdGF0ZVRyYW5zZm9ybSgpO1xyXG5cclxuVHJhbnNmb3JtR3JvdXBfYzZkNjU5ZGFhNmE4NDUwNWI2ZDg2OGVkMTE1ZjdjMjQuQ2hpbGRyZW4uQWRkKFNjYWxlVHJhbnNmb3JtX2JjMTdmMjhiNjI1NzQ2MTI5ZWVkODhiYzVkZGQwZGRlKTtcclxuVHJhbnNmb3JtR3JvdXBfYzZkNjU5ZGFhNmE4NDUwNWI2ZDg2OGVkMTE1ZjdjMjQuQ2hpbGRyZW4uQWRkKFJvdGF0ZVRyYW5zZm9ybV8wYTFjYzRhYzNhN2Y0NGI3YjM0OTQ4NDRkM2FiZDZkNSk7XHJcblxyXG5cclxuQm9yZGVyXzQ3MzdjZDM0ZWNkNDQzNzA5YmZhMjlmYWU4NDY0NzZjLlJlbmRlclRyYW5zZm9ybSA9IFRyYW5zZm9ybUdyb3VwX2M2ZDY1OWRhYTZhODQ1MDViNmQ4NjhlZDExNWY3YzI0O1xyXG5cclxudmFyIEdyaWRfMWVmMTM2OThjMmM3NDA3MWI4MjEwNjg1YzFmMTVlMzcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl85YTdiZWU5ZmEwNjY0OTIxYTRmMzUzNzVhY2VmYmY5NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl8xMzJiZTE5NjU3MjA0ODQ1YWRjOTg3MWQyOTIyMGU4OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl8xNTRhNWVkMjg0YTg0OGU4YWE1N2MwNjdiMTRiOGRlYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcblxyXG5HcmlkXzFlZjEzNjk4YzJjNzQwNzFiODIxMDY4NWMxZjE1ZTM3LkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzlhN2JlZTlmYTA2NjQ5MjFhNGYzNTM3NWFjZWZiZjk0KTtcclxuR3JpZF8xZWYxMzY5OGMyYzc0MDcxYjgyMTA2ODVjMWYxNWUzNy5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl8xMzJiZTE5NjU3MjA0ODQ1YWRjOTg3MWQyOTIyMGU4OSk7XHJcbkdyaWRfMWVmMTM2OThjMmM3NDA3MWI4MjEwNjg1YzFmMTVlMzcuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fMTU0YTVlZDI4NGE4NDhlOGFhNTdjMDY3YjE0YjhkZWEpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMjMxODQzNGRkMDBhNDg3NmJhYjcyNmI0YjQ3MzQ1MmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzIzMTg0MzRkZDAwYTQ4NzZiYWI3MjZiNGI0NzM0NTJiLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2QzZDcxMTM0ZTI4MDQ4YjRiMWFkNDA3ODlhODZkMWQzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl9kM2Q3MTEzNGUyODA0OGI0YjFhZDQwNzg5YTg2ZDFkMy5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2Q0NzQwNGViMTFkMDRiMmZiYTZhMTc4NjFjN2YzMjE1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl9kNDc0MDRlYjExZDA0YjJmYmE2YTE3ODYxYzdmMzIxNS5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkXzFlZjEzNjk4YzJjNzQwNzFiODIxMDY4NWMxZjE1ZTM3LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzIzMTg0MzRkZDAwYTQ4NzZiYWI3MjZiNGI0NzM0NTJiKTtcclxuR3JpZF8xZWYxMzY5OGMyYzc0MDcxYjgyMTA2ODVjMWYxNWUzNy5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl9kM2Q3MTEzNGUyODA0OGI0YjFhZDQwNzg5YTg2ZDFkMyk7XHJcbkdyaWRfMWVmMTM2OThjMmM3NDA3MWI4MjEwNjg1YzFmMTVlMzcuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fZDQ3NDA0ZWIxMWQwNGIyZmJhNmExNzg2MWM3ZjMyMTUpO1xyXG5cclxudmFyIEltYWdlXzdmNjk3OTMxYjMwNTQ3ZmY5Y2MyNDU5M2M5MjY5NWZlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkltYWdlKCk7XHJcbkltYWdlXzdmNjk3OTMxYjMwNTQ3ZmY5Y2MyNDU5M2M5MjY5NWZlLlNvdXJjZSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5JbWFnZVNvdXJjZSlnbG9iYWw6OkRvdE5ldEZvckh0bWw1LkNvcmUuVHlwZUZyb21TdHJpbmdDb252ZXJ0ZXJzLkNvbnZlcnRGcm9tSW52YXJpYW50U3RyaW5nKHR5cGVvZihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5JbWFnZVNvdXJjZSksIEBcIi9DU2h0bWw7Y29tcG9uZW50L2ltZy9Ib21lSW1hZ2UuanBnXCIpO1xyXG5JbWFnZV83ZjY5NzkzMWIzMDU0N2ZmOWNjMjQ1OTNjOTI2OTVmZS5TdHJldGNoID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU3RyZXRjaC5Vbmlmb3JtO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtblNwYW4oSW1hZ2VfN2Y2OTc5MzFiMzA1NDdmZjljYzI0NTkzYzkyNjk1ZmUsMyk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihJbWFnZV83ZjY5NzkzMWIzMDU0N2ZmOWNjMjQ1OTNjOTI2OTVmZSwzKTtcclxuXHJcbkdyaWRfMWVmMTM2OThjMmM3NDA3MWI4MjEwNjg1YzFmMTVlMzcuQ2hpbGRyZW4uQWRkKEltYWdlXzdmNjk3OTMxYjMwNTQ3ZmY5Y2MyNDU5M2M5MjY5NWZlKTtcclxuXHJcblxyXG5Cb3JkZXJfNDczN2NkMzRlY2Q0NDM3MDliZmEyOWZhZTg0NjQ3NmMuQ2hpbGQgPSBHcmlkXzFlZjEzNjk4YzJjNzQwNzFiODIxMDY4NWMxZjE1ZTM3O1xyXG5cclxuXHJcbnZhciBCdXR0b25fMjAwOWVkNTkzN2MzNDBmY2IyYzQxMTU1NzE0NTc3NmUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuQmVnaW5cIiwgQnV0dG9uXzIwMDllZDU5MzdjMzQwZmNiMmM0MTE1NTcxNDU3NzZlKTtcclxuQnV0dG9uXzIwMDllZDU5MzdjMzQwZmNiMmM0MTE1NTcxNDU3NzZlLk5hbWUgPSBcImJ0bkJlZ2luXCI7XHJcbkJ1dHRvbl8yMDA5ZWQ1OTM3YzM0MGZjYjJjNDExNTU3MTQ1Nzc2ZS5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl8yMDA5ZWQ1OTM3YzM0MGZjYjJjNDExNTU3MTQ1Nzc2ZS5Db250ZW50ID0gQFwi0J3QsNGH0LDRgtGMINGA0LDQsdC+0YLRg1wiO1xyXG5CdXR0b25fMjAwOWVkNTkzN2MzNDBmY2IyYzQxMTU1NzE0NTc3NmUuRm9udFNpemUgPSAyNUQ7XHJcbkJ1dHRvbl8yMDA5ZWQ1OTM3YzM0MGZjYjJjNDExNTU3MTQ1Nzc2ZS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjM4LCBCID0gKGJ5dGUpMjM4IH0pO1xyXG5CdXR0b25fMjAwOWVkNTkzN2MzNDBmY2IyYzQxMTU1NzE0NTc3NmUuV2lkdGggPSAyODBEO1xyXG5CdXR0b25fMjAwOWVkNTkzN2MzNDBmY2IyYzQxMTU1NzE0NTc3NmUuSGVpZ2h0ID0gNTBEO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fMjAwOWVkNTkzN2MzNDBmY2IyYzQxMTU1NzE0NTc3NmUsMik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uKEJ1dHRvbl8yMDA5ZWQ1OTM3YzM0MGZjYjJjNDExNTU3MTQ1Nzc2ZSwxKTtcclxuQnV0dG9uXzIwMDllZDU5MzdjMzQwZmNiMmM0MTE1NTcxNDU3NzZlLlZlcnRpY2FsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmVydGljYWxBbGlnbm1lbnQuQm90dG9tO1xyXG5CdXR0b25fMjAwOWVkNTkzN2MzNDBmY2IyYzQxMTU1NzE0NTc3NmUuQ2xpY2sgKz0gQnV0dG9uX0NsaWNrO1xyXG5CdXR0b25fMjAwOWVkNTkzN2MzNDBmY2IyYzQxMTU1NzE0NTc3NmUuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygwLCAwLCAwLCA1MCk7XHJcbkJ1dHRvbl8yMDA5ZWQ1OTM3YzM0MGZjYjJjNDExNTU3MTQ1Nzc2ZS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG52YXIgQ29udHJvbFRlbXBsYXRlXzM4YmFiN2IzY2FkMDRiNmViMmNmMmUxYmU3Y2Y3NGUyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2xUZW1wbGF0ZSgpO1xyXG5Db250cm9sVGVtcGxhdGVfMzhiYWI3YjNjYWQwNGI2ZWIyY2YyZTFiZTdjZjc0ZTIuVGFyZ2V0VHlwZSA9IHR5cGVvZihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24pO1xyXG5Db250cm9sVGVtcGxhdGVfMzhiYWI3YjNjYWQwNGI2ZWIyY2YyZTFiZTdjZjc0ZTIuU2V0TWV0aG9kVG9JbnN0YW50aWF0ZUZyYW1ld29ya1RlbXBsYXRlKChTeXN0ZW0uRnVuYzxXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCxXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZT4pdGhpcy5JbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfMzhiYWI3YjNjYWQwNGI2ZWIyY2YyZTFiZTdjZjc0ZTIpO1xyXG5cclxuQnV0dG9uXzIwMDllZDU5MzdjMzQwZmNiMmM0MTE1NTcxNDU3NzZlLlRlbXBsYXRlID0gQ29udHJvbFRlbXBsYXRlXzM4YmFiN2IzY2FkMDRiNmViMmNmMmUxYmU3Y2Y3NGUyO1xyXG5cclxuXHJcbkdyaWRfNGY5NjA3MWEwM2UzNGUzMGJiYmZkZTgzNGYxNmU2ZDYuQ2hpbGRyZW4uQWRkKEJvcmRlcl80NzM3Y2QzNGVjZDQ0MzcwOWJmYTI5ZmFlODQ2NDc2Yyk7XHJcbkdyaWRfNGY5NjA3MWEwM2UzNGUzMGJiYmZkZTgzNGYxNmU2ZDYuQ2hpbGRyZW4uQWRkKEJ1dHRvbl8yMDA5ZWQ1OTM3YzM0MGZjYjJjNDExNTU3MTQ1Nzc2ZSk7XHJcblxyXG5cclxuR3JpZF8zMmRlNTgxYTQzMWQ0ZGUwYWI1Y2MxMGZiNTU0ZTdmYi5DaGlsZHJlbi5BZGQoR3JpZF80Zjk2MDcxYTAzZTM0ZTMwYmJiZmRlODM0ZjE2ZTZkNik7XHJcblxyXG5cclxudGhpcy5Db250ZW50ID0gR3JpZF8zMmRlNTgxYTQzMWQ0ZGUwYWI1Y2MxMGZiNTU0ZTdmYjtcclxuXHJcblxyXG5cclxuZWxlbWVudCA9IEJvcmRlcl80NzM3Y2QzNGVjZDQ0MzcwOWJmYTI5ZmFlODQ2NDc2YztcclxuYnRuQmVnaW4gPSBCdXR0b25fMjAwOWVkNTkzN2MzNDBmY2IyYzQxMTU1NzE0NTc3NmU7XHJcbkxheW91dFJvb3QgPSBHcmlkXzMyZGU1ODFhNDMxZDRkZTBhYjVjYzEwZmI1NTRlN2ZiO1xyXG5cclxuXHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMTI4MDQzZjBkZGU0NGVlODg0NmE4ZWM2MzdhN2NkMDAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8xMjgwNDNmMGRkZTQ0ZWU4ODQ2YThlYzYzN2E3Y2QwMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzEyODA0M2YwZGRlNDRlZTg4NDZhOGVjNjM3YTdjZDAwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMTI4MDQzZjBkZGU0NGVlODg0NmE4ZWM2MzdhN2NkMDAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzEyODA0M2YwZGRlNDRlZTg4NDZhOGVjNjM3YTdjZDAwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9iMWQ4OTdmMTRkNDc0MGUzYTk1ODU3MGUwZTBmMzJkMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2IxZDg5N2YxNGQ0NzQwZTNhOTU4NTcwZTBlMGYzMmQwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfYjFkODk3ZjE0ZDQ3NDBlM2E5NTg1NzBlMGUwZjMyZDAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9iMWQ4OTdmMTRkNDc0MGUzYTk1ODU3MGUwZTBmMzJkMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYjFkODk3ZjE0ZDQ3NDBlM2E5NTg1NzBlMGUwZjMyZDAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2ExZWQ4MTYyNDIzZTQ1ZjZiNTA1ZmZmZWVlM2QyZGY1IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYTFlZDgxNjI0MjNlNDVmNmI1MDVmZmZlZWUzZDJkZjUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9hMWVkODE2MjQyM2U0NWY2YjUwNWZmZmVlZTNkMmRmNSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2ExZWQ4MTYyNDIzZTQ1ZjZiNTA1ZmZmZWVlM2QyZGY1IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9hMWVkODE2MjQyM2U0NWY2YjUwNWZmZmVlZTNkMmRmNSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlIEluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV8zOGJhYjdiM2NhZDA0YjZlYjJjZjJlMWJlN2NmNzRlMihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sIHRlbXBsYXRlT3duZXIpXHJcbiAgICAgICAge1xyXG52YXIgdGVtcGxhdGVJbnN0YW5jZV9iMTY5NzYxMGNlY2U0ZDdiOTgzZmZmNmVhY2RhMDFhMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlKCk7XHJcbnRlbXBsYXRlSW5zdGFuY2VfYjE2OTc2MTBjZWNlNGQ3Yjk4M2ZmZjZlYWNkYTAxYTMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlT3duZXI7XHJcbnZhciBCb3JkZXJfMTZhMDI1MDcxNzE0NGI0MTg1YjIzOWFlMmE4MTEyOGIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiT3V0ZXJCb3JkZXJcIiwgQm9yZGVyXzE2YTAyNTA3MTcxNDRiNDE4NWIyMzlhZTJhODExMjhiKTtcclxuQm9yZGVyXzE2YTAyNTA3MTcxNDRiNDE4NWIyMzlhZTJhODExMjhiLk5hbWUgPSBcIk91dGVyQm9yZGVyXCI7XHJcbkJvcmRlcl8xNmEwMjUwNzE3MTQ0YjQxODViMjM5YWUyYTgxMTI4Yi5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgVmlzdWFsU3RhdGVHcm91cF8xOTQ3OWE4ZDM4MmM0YzY4OWY1YWVhYTk0Nzk0ZWEzMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZUdyb3VwKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29tbW9uU3RhdGVzXCIsIFZpc3VhbFN0YXRlR3JvdXBfMTk0NzlhOGQzODJjNGM2ODlmNWFlYWE5NDc5NGVhMzMpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzE5NDc5YThkMzgyYzRjNjg5ZjVhZWFhOTQ3OTRlYTMzLk5hbWUgPSBcIkNvbW1vblN0YXRlc1wiO1xyXG52YXIgVmlzdWFsU3RhdGVfOGU2ZDYwODFlMDU1NGNiMGFkMWQ2OWFhYzc3MjI3ZTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJOb3JtYWxcIiwgVmlzdWFsU3RhdGVfOGU2ZDYwODFlMDU1NGNiMGFkMWQ2OWFhYzc3MjI3ZTIpO1xyXG5WaXN1YWxTdGF0ZV84ZTZkNjA4MWUwNTU0Y2IwYWQxZDY5YWFjNzcyMjdlMi5OYW1lID0gXCJOb3JtYWxcIjtcclxuXHJcbnZhciBWaXN1YWxTdGF0ZV8wYjVmNDEyNTdiNzk0MjA5YjA4ZDEzYjhiOTZkNzhiMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlBvaW50ZXJPdmVyXCIsIFZpc3VhbFN0YXRlXzBiNWY0MTI1N2I3OTQyMDliMDhkMTNiOGI5NmQ3OGIwKTtcclxuVmlzdWFsU3RhdGVfMGI1ZjQxMjU3Yjc5NDIwOWIwOGQxM2I4Yjk2ZDc4YjAuTmFtZSA9IFwiUG9pbnRlck92ZXJcIjtcclxudmFyIFN0b3J5Ym9hcmRfNTY4ODVkY2Q5Y2RhNDgzM2FkMzRhYjNiYmNkNzI3ZTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzc5OTJjMjc3NzY5NDQzZGU5MzBmNDZmM2ZiMzRkYTJiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzc5OTJjMjc3NzY5NDQzZGU5MzBmNDZmM2ZiMzRkYTJiLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV80YzNlZTNhNWVkNTk0NGEyOTNmZWFlNGEwMTgyNTQ0YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzRjM2VlM2E1ZWQ1OTQ0YTI5M2ZlYWU0YTAxODI1NDRiLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNGMzZWUzYTVlZDU5NDRhMjkzZmVhZTRhMDE4MjU0NGIuVmFsdWUgPSBAXCIjMTEwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzc5OTJjMjc3NzY5NDQzZGU5MzBmNDZmM2ZiMzRkYTJiLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV80YzNlZTNhNWVkNTk0NGEyOTNmZWFlNGEwMTgyNTQ0Yik7XHJcblxyXG5cclxuU3Rvcnlib2FyZF81Njg4NWRjZDljZGE0ODMzYWQzNGFiM2JiY2Q3MjdlMi5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzk5MmMyNzc3Njk0NDNkZTkzMGY0NmYzZmIzNGRhMmIpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzBiNWY0MTI1N2I3OTQyMDliMDhkMTNiOGI5NmQ3OGIwLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzU2ODg1ZGNkOWNkYTQ4MzNhZDM0YWIzYmJjZDcyN2UyO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV83OTFmMjEyYWNmODk0ZDVkYjY5ODA0NjhlODhiZTk4OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlByZXNzZWRcIiwgVmlzdWFsU3RhdGVfNzkxZjIxMmFjZjg5NGQ1ZGI2OTgwNDY4ZTg4YmU5ODkpO1xyXG5WaXN1YWxTdGF0ZV83OTFmMjEyYWNmODk0ZDVkYjY5ODA0NjhlODhiZTk4OS5OYW1lID0gXCJQcmVzc2VkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzAzY2E4M2Q2ZDFkNDQ3ODk4YzI3OTc2YTUwZmFkZmYxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zYjMzNjFmYjRiNWQ0MDYzODE4MTk2YjIyNzgzMWQ3MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zYjMzNjFmYjRiNWQ0MDYzODE4MTk2YjIyNzgzMWQ3MyxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMDdkNDQ5ZmI0ZjZkNDI4YmJhMTgwODQyMDJlNTdmYzcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wN2Q0NDlmYjRmNmQ0MjhiYmExODA4NDIwMmU1N2ZjNy5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzA3ZDQ0OWZiNGY2ZDQyOGJiYTE4MDg0MjAyZTU3ZmM3LlZhbHVlID0gQFwiIzIyMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zYjMzNjFmYjRiNWQ0MDYzODE4MTk2YjIyNzgzMWQ3My5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMDdkNDQ5ZmI0ZjZkNDI4YmJhMTgwODQyMDJlNTdmYzcpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMDNjYTgzZDZkMWQ0NDc4OThjMjc5NzZhNTBmYWRmZjEuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzNiMzM2MWZiNGI1ZDQwNjM4MTgxOTZiMjI3ODMxZDczKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV83OTFmMjEyYWNmODk0ZDVkYjY5ODA0NjhlODhiZTk4OS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8wM2NhODNkNmQxZDQ0Nzg5OGMyNzk3NmE1MGZhZGZmMTtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfNjEzYWI4NmMzMDQwNDZiZGE5NmNmZGQyMzY0ODFkNjYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJEaXNhYmxlZFwiLCBWaXN1YWxTdGF0ZV82MTNhYjg2YzMwNDA0NmJkYTk2Y2ZkZDIzNjQ4MWQ2Nik7XHJcblZpc3VhbFN0YXRlXzYxM2FiODZjMzA0MDQ2YmRhOTZjZmRkMjM2NDgxZDY2Lk5hbWUgPSBcIkRpc2FibGVkXCI7XHJcbnZhciBTdG9yeWJvYXJkX2YyZDJjNTBjNTQzMzQ2YjhhZmY3YmQ2YjgwZTdmZDI0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xY2JhN2IzYTdhZDM0NmNjYTQxMmFmZmJiZDE3MDg0ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xY2JhN2IzYTdhZDM0NmNjYTQxMmFmZmJiZDE3MDg0ZCxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNzVkYTUzMTJmMGY0NGFmOWI3MGNmOTc3NTQ0MDM3MjcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV83NWRhNTMxMmYwZjQ0YWY5YjcwY2Y5Nzc1NDQwMzcyNy5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzc1ZGE1MzEyZjBmNDRhZjliNzBjZjk3NzU0NDAzNzI3LlZhbHVlID0gQFwiIzMzRkZGRkZGXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xY2JhN2IzYTdhZDM0NmNjYTQxMmFmZmJiZDE3MDg0ZC5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNzVkYTUzMTJmMGY0NGFmOWI3MGNmOTc3NTQ0MDM3MjcpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfZjJkMmM1MGM1NDMzNDZiOGFmZjdiZDZiODBlN2ZkMjQuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzFjYmE3YjNhN2FkMzQ2Y2NhNDEyYWZmYmJkMTcwODRkKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV82MTNhYjg2YzMwNDA0NmJkYTk2Y2ZkZDIzNjQ4MWQ2Ni5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF9mMmQyYzUwYzU0MzM0NmI4YWZmN2JkNmI4MGU3ZmQyNDtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZUdyb3VwXzE5NDc5YThkMzgyYzRjNjg5ZjVhZWFhOTQ3OTRlYTMzLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfOGU2ZDYwODFlMDU1NGNiMGFkMWQ2OWFhYzc3MjI3ZTIpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzE5NDc5YThkMzgyYzRjNjg5ZjVhZWFhOTQ3OTRlYTMzLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfMGI1ZjQxMjU3Yjc5NDIwOWIwOGQxM2I4Yjk2ZDc4YjApO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzE5NDc5YThkMzgyYzRjNjg5ZjVhZWFhOTQ3OTRlYTMzLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNzkxZjIxMmFjZjg5NGQ1ZGI2OTgwNDY4ZTg4YmU5ODkpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzE5NDc5YThkMzgyYzRjNjg5ZjVhZWFhOTQ3OTRlYTMzLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNjEzYWI4NmMzMDQwNDZiZGE5NmNmZGQyMzY0ODFkNjYpO1xyXG5cclxuXHJcbnRlbXBsYXRlT3duZXIuSU5URVJOQUxfR2V0VmlzdWFsU3RhdGVHcm91cHMoKS5BZGQoVmlzdWFsU3RhdGVHcm91cF8xOTQ3OWE4ZDM4MmM0YzY4OWY1YWVhYTk0Nzk0ZWEzMyk7XHJcblxyXG52YXIgQm9yZGVyXzU3MjIyNDFiMTUwZDQ1ZmJiNGQxZWU0ZmE0ZGJkMTQ2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIklubmVyQm9yZGVyXCIsIEJvcmRlcl81NzIyMjQxYjE1MGQ0NWZiYjRkMWVlNGZhNGRiZDE0Nik7XHJcbkJvcmRlcl81NzIyMjQxYjE1MGQ0NWZiYjRkMWVlNGZhNGRiZDE0Ni5OYW1lID0gXCJJbm5lckJvcmRlclwiO1xyXG5Cb3JkZXJfNTcyMjI0MWIxNTBkNDVmYmI0ZDFlZTRmYTRkYmQxNDYuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENvbnRlbnRQcmVzZW50ZXJfYTRmNTI2YTIzMzc2NGQwMmE3YzViYmU2NjliYzQ1ZTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudFByZXNlbnRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbnRlbnRQcmVzZW50ZXJcIiwgQ29udGVudFByZXNlbnRlcl9hNGY1MjZhMjMzNzY0ZDAyYTdjNWJiZTY2OWJjNDVlOCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYTRmNTI2YTIzMzc2NGQwMmE3YzViYmU2NjliYzQ1ZTguTmFtZSA9IFwiQ29udGVudFByZXNlbnRlclwiO1xyXG52YXIgQmluZGluZ185NGQ1YzViZWU1ZTM0MGViYmZlOTQ0YThmMzI2ODY2NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ185NGQ1YzViZWU1ZTM0MGViYmZlOTQ0YThmMzI2ODY2Ny5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50VGVtcGxhdGVcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV84YTE3MWIxN2VjNjM0MjY5ODg5MGFhZmFhYTAxMjM3OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzhhMTcxYjE3ZWM2MzQyNjk4ODkwYWFmYWFhMDEyMzc5Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzk0ZDVjNWJlZTVlMzQwZWJiZmU5NDRhOGYzMjY4NjY3LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOGExNzFiMTdlYzYzNDI2OTg4OTBhYWZhYWEwMTIzNzk7XHJcblxyXG5cclxuQmluZGluZ185NGQ1YzViZWU1ZTM0MGViYmZlOTQ0YThmMzI2ODY2Ny5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9iMTY5NzYxMGNlY2U0ZDdiOTgzZmZmNmVhY2RhMDFhMztcclxuXHJcbnZhciBCaW5kaW5nXzQ1OWNlMzY1M2JhYjQxNDc4YjJmMmZjNzBkNjUwMjUwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzQ1OWNlMzY1M2JhYjQxNDc4YjJmMmZjNzBkNjUwMjUwLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kOGQ1Zjg5OTE3NTg0YThjOGJjNGZmNmYwZjEyOGQyOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2Q4ZDVmODk5MTc1ODRhOGM4YmM0ZmY2ZjBmMTI4ZDI4Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzQ1OWNlMzY1M2JhYjQxNDc4YjJmMmZjNzBkNjUwMjUwLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZDhkNWY4OTkxNzU4NGE4YzhiYzRmZjZmMGYxMjhkMjg7XHJcblxyXG5cclxuQmluZGluZ180NTljZTM2NTNiYWI0MTQ3OGIyZjJmYzcwZDY1MDI1MC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9iMTY5NzYxMGNlY2U0ZDdiOTgzZmZmNmVhY2RhMDFhMztcclxuXHJcbnZhciBCaW5kaW5nXzE3OWE2MzUxZTVlNzQ3YzA5N2I2ZGZlOWIxNWVlY2JhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzE3OWE2MzUxZTVlNzQ3YzA5N2I2ZGZlOWIxNWVlY2JhLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlBhZGRpbmdcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV84OGU3NjUxMWM5NDk0ODFlYWEyNzY0OTI1ZWJiNjA2MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzg4ZTc2NTExYzk0OTQ4MWVhYTI3NjQ5MjVlYmI2MDYzLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzE3OWE2MzUxZTVlNzQ3YzA5N2I2ZGZlOWIxNWVlY2JhLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfODhlNzY1MTFjOTQ5NDgxZWFhMjc2NDkyNWViYjYwNjM7XHJcblxyXG5cclxuQmluZGluZ18xNzlhNjM1MWU1ZTc0N2MwOTdiNmRmZTliMTVlZWNiYS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9iMTY5NzYxMGNlY2U0ZDdiOTgzZmZmNmVhY2RhMDFhMztcclxuXHJcbnZhciBCaW5kaW5nXzRlODE2NzU0OTg4NTRkNzFhNGQ3MDliNjcxNmQ3YjA5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzRlODE2NzU0OTg4NTRkNzFhNGQ3MDliNjcxNmQ3YjA5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkhvcml6b250YWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZDQwNmYyMGQ1YTQ2NDAxODkzODJmODg0YjU5NzFhYzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kNDA2ZjIwZDVhNDY0MDE4OTM4MmY4ODRiNTk3MWFjNi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ180ZTgxNjc1NDk4ODU0ZDcxYTRkNzA5YjY3MTZkN2IwOS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2Q0MDZmMjBkNWE0NjQwMTg5MzgyZjg4NGI1OTcxYWM2O1xyXG5cclxuXHJcbkJpbmRpbmdfNGU4MTY3NTQ5ODg1NGQ3MWE0ZDcwOWI2NzE2ZDdiMDkuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYjE2OTc2MTBjZWNlNGQ3Yjk4M2ZmZjZlYWNkYTAxYTM7XHJcblxyXG52YXIgQmluZGluZ184NThhZTg5ZTllZjg0NjlkYTEyM2U5YjhjYzZhMzU5NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184NThhZTg5ZTllZjg0NjlkYTEyM2U5YjhjYzZhMzU5Ni5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJWZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8zNGM2YzM0N2VhN2E0OTJjYjM3N2Q0YmRmNTU0MTgxNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzM0YzZjMzQ3ZWE3YTQ5MmNiMzc3ZDRiZGY1NTQxODE3Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzg1OGFlODllOWVmODQ2OWRhMTIzZTliOGNjNmEzNTk2LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMzRjNmMzNDdlYTdhNDkyY2IzNzdkNGJkZjU1NDE4MTc7XHJcblxyXG5cclxuQmluZGluZ184NThhZTg5ZTllZjg0NjlkYTEyM2U5YjhjYzZhMzU5Ni5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9iMTY5NzYxMGNlY2U0ZDdiOTgzZmZmNmVhY2RhMDFhMztcclxuXHJcblxyXG5Cb3JkZXJfNTcyMjI0MWIxNTBkNDVmYmI0ZDFlZTRmYTRkYmQxNDYuQ2hpbGQgPSBDb250ZW50UHJlc2VudGVyX2E0ZjUyNmEyMzM3NjRkMDJhN2M1YmJlNjY5YmM0NWU4O1xyXG5cclxudmFyIEJpbmRpbmdfYzllZDg2YmIwMTJjNDI4NTk2NTZiZDY1NDI4NGY1MTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYzllZDg2YmIwMTJjNDI4NTk2NTZiZDY1NDI4NGY1MTIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2UzZjBkYmEzYTY3ZTRjNzM5NjU0NWViOWViMzhkODRiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZTNmMGRiYTNhNjdlNGM3Mzk2NTQ1ZWI5ZWIzOGQ4NGIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYzllZDg2YmIwMTJjNDI4NTk2NTZiZDY1NDI4NGY1MTIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9lM2YwZGJhM2E2N2U0YzczOTY1NDVlYjllYjM4ZDg0YjtcclxuXHJcblxyXG5CaW5kaW5nX2M5ZWQ4NmJiMDEyYzQyODU5NjU2YmQ2NTQyODRmNTEyLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2IxNjk3NjEwY2VjZTRkN2I5ODNmZmY2ZWFjZGEwMWEzO1xyXG5cclxuXHJcbkJvcmRlcl8xNmEwMjUwNzE3MTQ0YjQxODViMjM5YWUyYTgxMTI4Yi5DaGlsZCA9IEJvcmRlcl81NzIyMjQxYjE1MGQ0NWZiYjRkMWVlNGZhNGRiZDE0NjtcclxuXHJcbnZhciBCaW5kaW5nXzhmMjk0MmEyNGY0MDQyNDBiNTBiMTQ0ZTA1MmZlM2NlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzhmMjk0MmEyNGY0MDQyNDBiNTBiMTQ0ZTA1MmZlM2NlLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8yMzI5OWMxOGVkZjk0N2Q1YjJhZjkyYTM3MjY4ODhjZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzIzMjk5YzE4ZWRmOTQ3ZDViMmFmOTJhMzcyNjg4OGNlLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzhmMjk0MmEyNGY0MDQyNDBiNTBiMTQ0ZTA1MmZlM2NlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMjMyOTljMThlZGY5NDdkNWIyYWY5MmEzNzI2ODg4Y2U7XHJcblxyXG5cclxuQmluZGluZ184ZjI5NDJhMjRmNDA0MjQwYjUwYjE0NGUwNTJmZTNjZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9iMTY5NzYxMGNlY2U0ZDdiOTgzZmZmNmVhY2RhMDFhMztcclxuXHJcbnZhciBCaW5kaW5nXzhkYzcyZjdjYTM3NTRmZjdhYjNhYmNjNmVkMDdjMGEyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzhkYzcyZjdjYTM3NTRmZjdhYjNhYmNjNmVkMDdjMGEyLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlckJydXNoXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNmE4ZDg4ZTZkZTIwNGEzZGFhM2ZjNmY1NzNjNGUzNDQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82YThkODhlNmRlMjA0YTNkYWEzZmM2ZjU3M2M0ZTM0NC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184ZGM3MmY3Y2EzNzU0ZmY3YWIzYWJjYzZlZDA3YzBhMi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzZhOGQ4OGU2ZGUyMDRhM2RhYTNmYzZmNTczYzRlMzQ0O1xyXG5cclxuXHJcbkJpbmRpbmdfOGRjNzJmN2NhMzc1NGZmN2FiM2FiY2M2ZWQwN2MwYTIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYjE2OTc2MTBjZWNlNGQ3Yjk4M2ZmZjZlYWNkYTAxYTM7XHJcblxyXG52YXIgQmluZGluZ181ZWQyZDJmMDU4Zjk0YmIwYjhhNzI5ZTI5MWI4YzZiNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ181ZWQyZDJmMDU4Zjk0YmIwYjhhNzI5ZTI5MWI4YzZiNS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJUaGlja25lc3NcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV84ZDE5MjYxODAwNmU0MTE2YmVmNmFlNWNlNzRmMDYyZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzhkMTkyNjE4MDA2ZTQxMTZiZWY2YWU1Y2U3NGYwNjJkLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzVlZDJkMmYwNThmOTRiYjBiOGE3MjllMjkxYjhjNmI1LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOGQxOTI2MTgwMDZlNDExNmJlZjZhZTVjZTc0ZjA2MmQ7XHJcblxyXG5cclxuQmluZGluZ181ZWQyZDJmMDU4Zjk0YmIwYjhhNzI5ZTI5MWI4YzZiNS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9iMTY5NzYxMGNlY2U0ZDdiOTgzZmZmNmVhY2RhMDFhMztcclxuXHJcblxyXG5cclxuQ29udGVudFByZXNlbnRlcl9hNGY1MjZhMjMzNzY0ZDAyYTdjNWJiZTY2OWJjNDVlOC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRUZW1wbGF0ZVByb3BlcnR5LCBCaW5kaW5nXzk0ZDVjNWJlZTVlMzQwZWJiZmU5NDRhOGYzMjY4NjY3KTtcclxuQ29udGVudFByZXNlbnRlcl9hNGY1MjZhMjMzNzY0ZDAyYTdjNWJiZTY2OWJjNDVlOC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRQcm9wZXJ0eSwgQmluZGluZ180NTljZTM2NTNiYWI0MTQ3OGIyZjJmYzcwZDY1MDI1MCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYTRmNTI2YTIzMzc2NGQwMmE3YzViYmU2NjliYzQ1ZTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lk1hcmdpblByb3BlcnR5LCBCaW5kaW5nXzE3OWE2MzUxZTVlNzQ3YzA5N2I2ZGZlOWIxNWVlY2JhKTtcclxuQ29udGVudFByZXNlbnRlcl9hNGY1MjZhMjMzNzY0ZDAyYTdjNWJiZTY2OWJjNDVlOC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuSG9yaXpvbnRhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nXzRlODE2NzU0OTg4NTRkNzFhNGQ3MDliNjcxNmQ3YjA5KTtcclxuQ29udGVudFByZXNlbnRlcl9hNGY1MjZhMjMzNzY0ZDAyYTdjNWJiZTY2OWJjNDVlOC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuVmVydGljYWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ184NThhZTg5ZTllZjg0NjlkYTEyM2U5YjhjYzZhMzU5Nik7XHJcbkJvcmRlcl81NzIyMjQxYjE1MGQ0NWZiYjRkMWVlNGZhNGRiZDE0Ni5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfYzllZDg2YmIwMTJjNDI4NTk2NTZiZDY1NDI4NGY1MTIpO1xyXG5Cb3JkZXJfMTZhMDI1MDcxNzE0NGI0MTg1YjIzOWFlMmE4MTEyOGIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzhmMjk0MmEyNGY0MDQyNDBiNTBiMTQ0ZTA1MmZlM2NlKTtcclxuQm9yZGVyXzE2YTAyNTA3MTcxNDRiNDE4NWIyMzlhZTJhODExMjhiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlckJydXNoUHJvcGVydHksIEJpbmRpbmdfOGRjNzJmN2NhMzc1NGZmN2FiM2FiY2M2ZWQwN2MwYTIpO1xyXG5Cb3JkZXJfMTZhMDI1MDcxNzE0NGI0MTg1YjIzOWFlMmE4MTEyOGIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyVGhpY2tuZXNzUHJvcGVydHksIEJpbmRpbmdfNWVkMmQyZjA1OGY5NGJiMGI4YTcyOWUyOTFiOGM2YjUpO1xyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzk5MmMyNzc3Njk0NDNkZTkzMGY0NmYzZmIzNGRhMmIsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMTI4MDQzZjBkZGU0NGVlODg0NmE4ZWM2MzdhN2NkMDAsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8xMjgwNDNmMGRkZTQ0ZWU4ODQ2YThlYzYzN2E3Y2QwMCxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzEyODA0M2YwZGRlNDRlZTg4NDZhOGVjNjM3YTdjZDAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMTI4MDQzZjBkZGU0NGVlODg0NmE4ZWM2MzdhN2NkMDAsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8xMjgwNDNmMGRkZTQ0ZWU4ODQ2YThlYzYzN2E3Y2QwMCkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzk5MmMyNzc3Njk0NDNkZTkzMGY0NmYzZmIzNGRhMmIsIEJvcmRlcl81NzIyMjQxYjE1MGQ0NWZiYjRkMWVlNGZhNGRiZDE0Nik7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfM2IzMzYxZmI0YjVkNDA2MzgxODE5NmIyMjc4MzFkNzMsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfYjFkODk3ZjE0ZDQ3NDBlM2E5NTg1NzBlMGUwZjMyZDAsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9iMWQ4OTdmMTRkNDc0MGUzYTk1ODU3MGUwZTBmMzJkMCxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2IxZDg5N2YxNGQ0NzQwZTNhOTU4NTcwZTBlMGYzMmQwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfYjFkODk3ZjE0ZDQ3NDBlM2E5NTg1NzBlMGUwZjMyZDAsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9iMWQ4OTdmMTRkNDc0MGUzYTk1ODU3MGUwZTBmMzJkMCkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfM2IzMzYxZmI0YjVkNDA2MzgxODE5NmIyMjc4MzFkNzMsIEJvcmRlcl81NzIyMjQxYjE1MGQ0NWZiYjRkMWVlNGZhNGRiZDE0Nik7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMWNiYTdiM2E3YWQzNDZjY2E0MTJhZmZiYmQxNzA4NGQsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfYTFlZDgxNjI0MjNlNDVmNmI1MDVmZmZlZWUzZDJkZjUsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9hMWVkODE2MjQyM2U0NWY2YjUwNWZmZmVlZTNkMmRmNSxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2ExZWQ4MTYyNDIzZTQ1ZjZiNTA1ZmZmZWVlM2QyZGY1LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfYTFlZDgxNjI0MjNlNDVmNmI1MDVmZmZlZWUzZDJkZjUsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9hMWVkODE2MjQyM2U0NWY2YjUwNWZmZmVlZTNkMmRmNSkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMWNiYTdiM2E3YWQzNDZjY2E0MTJhZmZiYmQxNzA4NGQsIEJvcmRlcl81NzIyMjQxYjE1MGQ0NWZiYjRkMWVlNGZhNGRiZDE0Nik7XHJcblxyXG50ZW1wbGF0ZUluc3RhbmNlX2IxNjk3NjEwY2VjZTRkN2I5ODNmZmY2ZWFjZGEwMWEzLlRlbXBsYXRlQ29udGVudCA9IEJvcmRlcl8xNmEwMjUwNzE3MTQ0YjQxODViMjM5YWUyYTgxMTI4YjtcclxucmV0dXJuIHRlbXBsYXRlSW5zdGFuY2VfYjE2OTc2MTBjZWNlNGQ3Yjk4M2ZmZjZlYWNkYTAxYTM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwiLy8gPENTSFRNTDU+PFhhbWxIYXNoPjcyMDJCQTQ5RUE3REMwNUI2QjlBNjIyRUY2NEIwOUNEPC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTYuMDQuMjAyMCA0OjAyOjA5PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgFBhZ2V1cGxvYWTHgMeAWGFtbMeAx4BGYWN0b3J5XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqZWN0IEluc3RhbnRpYXRlKClcclxuICAgIHtcclxuICAgICAgICBnbG9iYWw6OlN5c3RlbS5UeXBlIHR5cGUgPSB0eXBlb2YoQ1NodG1sLlBhZ2VVcGxvYWQpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFBhZ2VVcGxvYWQgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QYWdlXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0bkNhbmNlbDtcclxuXHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAxNjksIDY0OSwgMDYyOFxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9jb250ZW50TG9hZGVkO1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jb250ZW50TG9hZGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfY29udGVudExvYWRlZCA9IHRydWU7XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAwMTg0IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTg0ICgnVGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgbmV2ZXIgb2YgdGhlIHByb3ZpZGVkICgndHlwZScpIHR5cGUnKVxyXG4gICAgICAgICAgICBpZiAodGhpcyBpcyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KShvYmplY3QpdGhpcykuWGFtbFNvdXJjZVBhdGggPSBAXCJDU2h0bWxcXFBhZ2VVcGxvYWQueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfYzIxNTIwZWMwZTNkNDc5MTk2ZWMzYWRlOTUxZmM4YWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgUm93RGVmaW5pdGlvbl9jMGVmYThiOWMwNmM0NmE4OWNmYzMxMzBkODBhNjNjZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl81NjMyZjdjZjViY2Y0MDI3ODVhZWYxMGM1NTMzNThkOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl84YWY2YzU3MmJjNDg0MDI5YjhjZmM1MmQwNTI1MWQyMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9lZjAwMmQ3YzE3Y2I0NjIyODMwNTUxZWFkYzRiY2NmMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblxyXG5HcmlkX2MyMTUyMGVjMGUzZDQ3OTE5NmVjM2FkZTk1MWZjOGFlLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2MwZWZhOGI5YzA2YzQ2YTg5Y2ZjMzEzMGQ4MGE2M2NlKTtcclxuR3JpZF9jMjE1MjBlYzBlM2Q0NzkxOTZlYzNhZGU5NTFmYzhhZS5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl81NjMyZjdjZjViY2Y0MDI3ODVhZWYxMGM1NTMzNThkOCk7XHJcbkdyaWRfYzIxNTIwZWMwZTNkNDc5MTk2ZWMzYWRlOTUxZmM4YWUuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fOGFmNmM1NzJiYzQ4NDAyOWI4Y2ZjNTJkMDUyNTFkMjMpO1xyXG5HcmlkX2MyMTUyMGVjMGUzZDQ3OTE5NmVjM2FkZTk1MWZjOGFlLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2VmMDAyZDdjMTdjYjQ2MjI4MzA1NTFlYWRjNGJjY2YxKTtcclxuXHJcbnZhciBCb3JkZXJfYmEzODEzY2E4MzgwNDJhNThlNzkyYzIyODJhZDc4MGMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbkJvcmRlcl9iYTM4MTNjYTgzODA0MmE1OGU3OTJjMjI4MmFkNzgwYy5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQm9yZGVyX2JhMzgxM2NhODM4MDQyYTU4ZTc5MmMyMjgyYWQ3ODBjLDApO1xyXG52YXIgQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlXzk5YTlhMWI0YmI5YjQwYmI5MmI0YjI0NmE0NTlkYTFhID0gbmV3IGdsb2JhbDo6Q1NIVE1MNS5FeHRlbnNpb25zLkZpbGVPcGVuRGlhbG9nLkNvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2coKTtcclxuQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlXzk5YTlhMWI0YmI5YjQwYmI5MmI0YjI0NmE0NTlkYTFhLkZpbGVPcGVuZWQgKz0gT25GaWxlT3BlbmVkO1xyXG5Db250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfOTlhOWExYjRiYjliNDBiYjkyYjRiMjQ2YTQ1OWRhMWEuRmlsdGVyID0gQFwiKi5qc29uLCoudHh0XCI7XHJcbkNvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV85OWE5YTFiNGJiOWI0MGJiOTJiNGIyNDZhNDU5ZGExYS5SZXN1bHRLaW5kID0gZ2xvYmFsOjpDU0hUTUw1LkV4dGVuc2lvbnMuRmlsZU9wZW5EaWFsb2cuUmVzdWx0S2luZC5UZXh0O1xyXG5cclxuQm9yZGVyX2JhMzgxM2NhODM4MDQyYTU4ZTc5MmMyMjgyYWQ3ODBjLkNoaWxkID0gQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlXzk5YTlhMWI0YmI5YjQwYmI5MmI0YjI0NmE0NTlkYTFhO1xyXG5cclxuXHJcbnZhciBCdXR0b25fNGQ5ZmYyNDZjZGNlNDE5NGJiNzQyYjRhMmEwMmRmMDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbkJ1dHRvbl80ZDlmZjI0NmNkY2U0MTk0YmI3NDJiNGEyYTAyZGYwOS5Db250ZW50ID0gQFwi0J/RgNC10LTRi9C00YPRidCw0Y8g0YHRgtGA0LDQvdC40YbQsFwiO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0bkNhbmNlbFwiLCBCdXR0b25fNGQ5ZmYyNDZjZGNlNDE5NGJiNzQyYjRhMmEwMmRmMDkpO1xyXG5CdXR0b25fNGQ5ZmYyNDZjZGNlNDE5NGJiNzQyYjRhMmEwMmRmMDkuTmFtZSA9IFwiYnRuQ2FuY2VsXCI7XHJcbkJ1dHRvbl80ZDlmZjI0NmNkY2U0MTk0YmI3NDJiNGEyYTAyZGYwOS5DbGljayArPSBCdG5DYW5jZWxfQ2xpY2s7XHJcbkJ1dHRvbl80ZDlmZjI0NmNkY2U0MTk0YmI3NDJiNGEyYTAyZGYwOS5XaWR0aCA9IDI1MEQ7XHJcbkJ1dHRvbl80ZDlmZjI0NmNkY2U0MTk0YmI3NDJiNGEyYTAyZGYwOS5IZWlnaHQgPSA1MEQ7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl80ZDlmZjI0NmNkY2U0MTk0YmI3NDJiNGEyYTAyZGYwOSwxKTtcclxuQnV0dG9uXzRkOWZmMjQ2Y2RjZTQxOTRiYjc0MmI0YTJhMDJkZjA5LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNDksIEcgPSAoYnl0ZSkyMjIsIEIgPSAoYnl0ZSkyNDIgfSk7XHJcbkJ1dHRvbl80ZDlmZjI0NmNkY2U0MTk0YmI3NDJiNGEyYTAyZGYwOS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5CdXR0b25fNGQ5ZmYyNDZjZGNlNDE5NGJiNzQyYjRhMmEwMmRmMDkuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbkJ1dHRvbl80ZDlmZjI0NmNkY2U0MTk0YmI3NDJiNGEyYTAyZGYwOS5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbTtcclxuQnV0dG9uXzRkOWZmMjQ2Y2RjZTQxOTRiYjc0MmI0YTJhMDJkZjA5Lkhvcml6b250YWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uXzRkOWZmMjQ2Y2RjZTQxOTRiYjc0MmI0YTJhMDJkZjA5LkZvbnRTaXplID0gMjBEO1xyXG52YXIgQ29udHJvbFRlbXBsYXRlXzRmNDIzZWFjMDQwODRhMWViZDZhYmEwOWE3M2Y4NjgwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2xUZW1wbGF0ZSgpO1xyXG5Db250cm9sVGVtcGxhdGVfNGY0MjNlYWMwNDA4NGExZWJkNmFiYTA5YTczZjg2ODAuVGFyZ2V0VHlwZSA9IHR5cGVvZihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24pO1xyXG5Db250cm9sVGVtcGxhdGVfNGY0MjNlYWMwNDA4NGExZWJkNmFiYTA5YTczZjg2ODAuU2V0TWV0aG9kVG9JbnN0YW50aWF0ZUZyYW1ld29ya1RlbXBsYXRlKChTeXN0ZW0uRnVuYzxXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCxXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZT4pdGhpcy5JbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfNGY0MjNlYWMwNDA4NGExZWJkNmFiYTA5YTczZjg2ODApO1xyXG5cclxuQnV0dG9uXzRkOWZmMjQ2Y2RjZTQxOTRiYjc0MmI0YTJhMDJkZjA5LlRlbXBsYXRlID0gQ29udHJvbFRlbXBsYXRlXzRmNDIzZWFjMDQwODRhMWViZDZhYmEwOWE3M2Y4NjgwO1xyXG5cclxuXHJcbkdyaWRfYzIxNTIwZWMwZTNkNDc5MTk2ZWMzYWRlOTUxZmM4YWUuQ2hpbGRyZW4uQWRkKEJvcmRlcl9iYTM4MTNjYTgzODA0MmE1OGU3OTJjMjI4MmFkNzgwYyk7XHJcbkdyaWRfYzIxNTIwZWMwZTNkNDc5MTk2ZWMzYWRlOTUxZmM4YWUuQ2hpbGRyZW4uQWRkKEJ1dHRvbl80ZDlmZjI0NmNkY2U0MTk0YmI3NDJiNGEyYTAyZGYwOSk7XHJcblxyXG5cclxudGhpcy5Db250ZW50ID0gR3JpZF9jMjE1MjBlYzBlM2Q0NzkxOTZlYzNhZGU5NTFmYzhhZTtcclxuXHJcblxyXG5cclxuYnRuQ2FuY2VsID0gQnV0dG9uXzRkOWZmMjQ2Y2RjZTQxOTRiYjc0MmI0YTJhMDJkZjA5O1xyXG5cclxuXHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZWVlZDIzNjQ0ODU5NDdmZGFhY2FhMmJhOGE0NWMzYzAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lZWVkMjM2NDQ4NTk0N2ZkYWFjYWEyYmE4YTQ1YzNjMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2VlZWQyMzY0NDg1OTQ3ZmRhYWNhYTJiYThhNDVjM2MwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZWVlZDIzNjQ0ODU5NDdmZGFhY2FhMmJhOGE0NWMzYzAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2VlZWQyMzY0NDg1OTQ3ZmRhYWNhYTJiYThhNDVjM2MwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8wYmE4ZDI0YjVhNzE0NmQwOWU3MmU1Y2Y4OTFlNDEyZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzBiYThkMjRiNWE3MTQ2ZDA5ZTcyZTVjZjg5MWU0MTJlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMGJhOGQyNGI1YTcxNDZkMDllNzJlNWNmODkxZTQxMmUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8wYmE4ZDI0YjVhNzE0NmQwOWU3MmU1Y2Y4OTFlNDEyZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMGJhOGQyNGI1YTcxNDZkMDllNzJlNWNmODkxZTQxMmUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2Q0ZWYyMDc3ZGI0ZDRhZjRiYjM5MTdiOTNjMTlkY2EyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfZDRlZjIwNzdkYjRkNGFmNGJiMzkxN2I5M2MxOWRjYTIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9kNGVmMjA3N2RiNGQ0YWY0YmIzOTE3YjkzYzE5ZGNhMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2Q0ZWYyMDc3ZGI0ZDRhZjRiYjM5MTdiOTNjMTlkY2EyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9kNGVmMjA3N2RiNGQ0YWY0YmIzOTE3YjkzYzE5ZGNhMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlIEluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV80ZjQyM2VhYzA0MDg0YTFlYmQ2YWJhMDlhNzNmODY4MChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sIHRlbXBsYXRlT3duZXIpXHJcbiAgICAgICAge1xyXG52YXIgdGVtcGxhdGVJbnN0YW5jZV84ZTk2ZGVjYzJlMGM0NzM1YjY4OTRlZDRmYWZjYWE5NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlKCk7XHJcbnRlbXBsYXRlSW5zdGFuY2VfOGU5NmRlY2MyZTBjNDczNWI2ODk0ZWQ0ZmFmY2FhOTUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlT3duZXI7XHJcbnZhciBCb3JkZXJfYTM5ZDYwYjc4NjA2NDdmMDhhNzk1MDZjMTVjMDY1OWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiT3V0ZXJCb3JkZXJcIiwgQm9yZGVyX2EzOWQ2MGI3ODYwNjQ3ZjA4YTc5NTA2YzE1YzA2NTljKTtcclxuQm9yZGVyX2EzOWQ2MGI3ODYwNjQ3ZjA4YTc5NTA2YzE1YzA2NTljLk5hbWUgPSBcIk91dGVyQm9yZGVyXCI7XHJcbkJvcmRlcl9hMzlkNjBiNzg2MDY0N2YwOGE3OTUwNmMxNWMwNjU5Yy5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgVmlzdWFsU3RhdGVHcm91cF8xMmFlODc0Nzc3ODM0MGU1OTMxYTMyNTZjMzJmOGMyZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZUdyb3VwKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29tbW9uU3RhdGVzXCIsIFZpc3VhbFN0YXRlR3JvdXBfMTJhZTg3NDc3NzgzNDBlNTkzMWEzMjU2YzMyZjhjMmQpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzEyYWU4NzQ3Nzc4MzQwZTU5MzFhMzI1NmMzMmY4YzJkLk5hbWUgPSBcIkNvbW1vblN0YXRlc1wiO1xyXG52YXIgVmlzdWFsU3RhdGVfOWU4OTgzYjUxYmM0NDA2YzkzZjUzZDA4MDk1ZjFmNDggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJOb3JtYWxcIiwgVmlzdWFsU3RhdGVfOWU4OTgzYjUxYmM0NDA2YzkzZjUzZDA4MDk1ZjFmNDgpO1xyXG5WaXN1YWxTdGF0ZV85ZTg5ODNiNTFiYzQ0MDZjOTNmNTNkMDgwOTVmMWY0OC5OYW1lID0gXCJOb3JtYWxcIjtcclxuXHJcbnZhciBWaXN1YWxTdGF0ZV81NDA2ZTMxZWE1NjA0NGQ4ODY1NmViMDk1Zjk2ZWVhOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlBvaW50ZXJPdmVyXCIsIFZpc3VhbFN0YXRlXzU0MDZlMzFlYTU2MDQ0ZDg4NjU2ZWIwOTVmOTZlZWE5KTtcclxuVmlzdWFsU3RhdGVfNTQwNmUzMWVhNTYwNDRkODg2NTZlYjA5NWY5NmVlYTkuTmFtZSA9IFwiUG9pbnRlck92ZXJcIjtcclxudmFyIFN0b3J5Ym9hcmRfNDI4MTFiYjVjODkzNDQ4OGI3YmRjOWM2ZDg0ZjQyM2MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2U2ZmRhNmM1MzA1MTRhMGFhZTAxM2NkNzA4OWViZjMxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2U2ZmRhNmM1MzA1MTRhMGFhZTAxM2NkNzA4OWViZjMxLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV8xMGZjYWIxNWY1ZmI0MDFhYTUxNTYxNzkzOWY5OTU1NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzEwZmNhYjE1ZjVmYjQwMWFhNTE1NjE3OTM5Zjk5NTU2LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMTBmY2FiMTVmNWZiNDAxYWE1MTU2MTc5MzlmOTk1NTYuVmFsdWUgPSBAXCIjMTEwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2U2ZmRhNmM1MzA1MTRhMGFhZTAxM2NkNzA4OWViZjMxLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV8xMGZjYWIxNWY1ZmI0MDFhYTUxNTYxNzkzOWY5OTU1Nik7XHJcblxyXG5cclxuU3Rvcnlib2FyZF80MjgxMWJiNWM4OTM0NDg4YjdiZGM5YzZkODRmNDIzYy5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZTZmZGE2YzUzMDUxNGEwYWFlMDEzY2Q3MDg5ZWJmMzEpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzU0MDZlMzFlYTU2MDQ0ZDg4NjU2ZWIwOTVmOTZlZWE5LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzQyODExYmI1Yzg5MzQ0ODhiN2JkYzljNmQ4NGY0MjNjO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV83MDI4NWY2N2VkZDQ0NTgyYWYxNGU2MTE2Yzc0NjBmNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlByZXNzZWRcIiwgVmlzdWFsU3RhdGVfNzAyODVmNjdlZGQ0NDU4MmFmMTRlNjExNmM3NDYwZjQpO1xyXG5WaXN1YWxTdGF0ZV83MDI4NWY2N2VkZDQ0NTgyYWYxNGU2MTE2Yzc0NjBmNC5OYW1lID0gXCJQcmVzc2VkXCI7XHJcbnZhciBTdG9yeWJvYXJkX2E3ZjNjZTQyODI0NDQwN2M4ZjJjYWQ4OTE0ODA5ZjdkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180NDE2MjcwZDk4MDE0NmFiODFkNWE3MjE2NDdkNDYwMyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180NDE2MjcwZDk4MDE0NmFiODFkNWE3MjE2NDdkNDYwMyxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNWZjNDIxMTcxZmE4NDJiMThhZWI5NGMzNzM0OThlZWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV81ZmM0MjExNzFmYTg0MmIxOGFlYjk0YzM3MzQ5OGVlZS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzVmYzQyMTE3MWZhODQyYjE4YWViOTRjMzczNDk4ZWVlLlZhbHVlID0gQFwiIzIyMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180NDE2MjcwZDk4MDE0NmFiODFkNWE3MjE2NDdkNDYwMy5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNWZjNDIxMTcxZmE4NDJiMThhZWI5NGMzNzM0OThlZWUpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfYTdmM2NlNDI4MjQ0NDA3YzhmMmNhZDg5MTQ4MDlmN2QuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzQ0MTYyNzBkOTgwMTQ2YWI4MWQ1YTcyMTY0N2Q0NjAzKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV83MDI4NWY2N2VkZDQ0NTgyYWYxNGU2MTE2Yzc0NjBmNC5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF9hN2YzY2U0MjgyNDQ0MDdjOGYyY2FkODkxNDgwOWY3ZDtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfNThiYWYzMTg5ZjhjNGZkNmFhYjU2MmQyZWFkZTZmNDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJEaXNhYmxlZFwiLCBWaXN1YWxTdGF0ZV81OGJhZjMxODlmOGM0ZmQ2YWFiNTYyZDJlYWRlNmY0Nik7XHJcblZpc3VhbFN0YXRlXzU4YmFmMzE4OWY4YzRmZDZhYWI1NjJkMmVhZGU2ZjQ2Lk5hbWUgPSBcIkRpc2FibGVkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzc5ZGZhNzZlOTY5ZTRlNWNhNjIzNmVhZTdiOGUwMGQyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc182YTQyNjUwMWU0YTM0ODQ3OTlhYzJiMDY1NGQ5ZmIxYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc182YTQyNjUwMWU0YTM0ODQ3OTlhYzJiMDY1NGQ5ZmIxYyxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNTdhZTI2ZjE0MThlNGQ0MTg1ZDMxOGQ4YWEzM2Q2ZjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV81N2FlMjZmMTQxOGU0ZDQxODVkMzE4ZDhhYTMzZDZmNC5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzU3YWUyNmYxNDE4ZTRkNDE4NWQzMThkOGFhMzNkNmY0LlZhbHVlID0gQFwiIzMzRkZGRkZGXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc182YTQyNjUwMWU0YTM0ODQ3OTlhYzJiMDY1NGQ5ZmIxYy5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNTdhZTI2ZjE0MThlNGQ0MTg1ZDMxOGQ4YWEzM2Q2ZjQpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNzlkZmE3NmU5NjllNGU1Y2E2MjM2ZWFlN2I4ZTAwZDIuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzZhNDI2NTAxZTRhMzQ4NDc5OWFjMmIwNjU0ZDlmYjFjKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV81OGJhZjMxODlmOGM0ZmQ2YWFiNTYyZDJlYWRlNmY0Ni5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF83OWRmYTc2ZTk2OWU0ZTVjYTYyMzZlYWU3YjhlMDBkMjtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZUdyb3VwXzEyYWU4NzQ3Nzc4MzQwZTU5MzFhMzI1NmMzMmY4YzJkLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfOWU4OTgzYjUxYmM0NDA2YzkzZjUzZDA4MDk1ZjFmNDgpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzEyYWU4NzQ3Nzc4MzQwZTU5MzFhMzI1NmMzMmY4YzJkLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNTQwNmUzMWVhNTYwNDRkODg2NTZlYjA5NWY5NmVlYTkpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzEyYWU4NzQ3Nzc4MzQwZTU5MzFhMzI1NmMzMmY4YzJkLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNzAyODVmNjdlZGQ0NDU4MmFmMTRlNjExNmM3NDYwZjQpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzEyYWU4NzQ3Nzc4MzQwZTU5MzFhMzI1NmMzMmY4YzJkLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNThiYWYzMTg5ZjhjNGZkNmFhYjU2MmQyZWFkZTZmNDYpO1xyXG5cclxuXHJcbnRlbXBsYXRlT3duZXIuSU5URVJOQUxfR2V0VmlzdWFsU3RhdGVHcm91cHMoKS5BZGQoVmlzdWFsU3RhdGVHcm91cF8xMmFlODc0Nzc3ODM0MGU1OTMxYTMyNTZjMzJmOGMyZCk7XHJcblxyXG52YXIgQm9yZGVyXzhhZDViMTY0YjBiYzRjMmI4OWI5N2VlNzdjMmJjYzdjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIklubmVyQm9yZGVyXCIsIEJvcmRlcl84YWQ1YjE2NGIwYmM0YzJiODliOTdlZTc3YzJiY2M3Yyk7XHJcbkJvcmRlcl84YWQ1YjE2NGIwYmM0YzJiODliOTdlZTc3YzJiY2M3Yy5OYW1lID0gXCJJbm5lckJvcmRlclwiO1xyXG5Cb3JkZXJfOGFkNWIxNjRiMGJjNGMyYjg5Yjk3ZWU3N2MyYmNjN2MuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENvbnRlbnRQcmVzZW50ZXJfNmEzOTE3YWE0NzRhNDRkYTlmMzllZThkMzlhMmYxOTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudFByZXNlbnRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbnRlbnRQcmVzZW50ZXJcIiwgQ29udGVudFByZXNlbnRlcl82YTM5MTdhYTQ3NGE0NGRhOWYzOWVlOGQzOWEyZjE5Nik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNmEzOTE3YWE0NzRhNDRkYTlmMzllZThkMzlhMmYxOTYuTmFtZSA9IFwiQ29udGVudFByZXNlbnRlclwiO1xyXG52YXIgQmluZGluZ19kMmYwNGYxMmM2NjQ0N2NmODI4ZDA2Y2Y5YmZkNzQ5ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kMmYwNGYxMmM2NjQ0N2NmODI4ZDA2Y2Y5YmZkNzQ5ZS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50VGVtcGxhdGVcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8zNGU2Y2QxMmY1MzM0MjA1YTAzYzA0MzZkMzc3YTFmNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzM0ZTZjZDEyZjUzMzQyMDVhMDNjMDQzNmQzNzdhMWY0Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2QyZjA0ZjEyYzY2NDQ3Y2Y4MjhkMDZjZjliZmQ3NDllLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMzRlNmNkMTJmNTMzNDIwNWEwM2MwNDM2ZDM3N2ExZjQ7XHJcblxyXG5cclxuQmluZGluZ19kMmYwNGYxMmM2NjQ0N2NmODI4ZDA2Y2Y5YmZkNzQ5ZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV84ZTk2ZGVjYzJlMGM0NzM1YjY4OTRlZDRmYWZjYWE5NTtcclxuXHJcbnZhciBCaW5kaW5nX2YyNTBkN2Q5OWFiMzRhNzJhNTg3YzdkMWE5YTUzOGFiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2YyNTBkN2Q5OWFiMzRhNzJhNTg3YzdkMWE5YTUzOGFiLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9iZDczZWM0ZWIzOTc0YzJhYjYyOWQ0ZDEwZWU4YTE3NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2JkNzNlYzRlYjM5NzRjMmFiNjI5ZDRkMTBlZThhMTc0Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2YyNTBkN2Q5OWFiMzRhNzJhNTg3YzdkMWE5YTUzOGFiLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYmQ3M2VjNGViMzk3NGMyYWI2MjlkNGQxMGVlOGExNzQ7XHJcblxyXG5cclxuQmluZGluZ19mMjUwZDdkOTlhYjM0YTcyYTU4N2M3ZDFhOWE1MzhhYi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV84ZTk2ZGVjYzJlMGM0NzM1YjY4OTRlZDRmYWZjYWE5NTtcclxuXHJcbnZhciBCaW5kaW5nXzE2MjY0MDdjODA5NDRlNDJhYzNiNWVkMDczYjU0NzFlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzE2MjY0MDdjODA5NDRlNDJhYzNiNWVkMDczYjU0NzFlLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlBhZGRpbmdcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9mMDhmZDJkMzJmMjY0MzNlODBlZTU5YmMyMzBhNmU5NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2YwOGZkMmQzMmYyNjQzM2U4MGVlNTliYzIzMGE2ZTk2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzE2MjY0MDdjODA5NDRlNDJhYzNiNWVkMDczYjU0NzFlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZjA4ZmQyZDMyZjI2NDMzZTgwZWU1OWJjMjMwYTZlOTY7XHJcblxyXG5cclxuQmluZGluZ18xNjI2NDA3YzgwOTQ0ZTQyYWMzYjVlZDA3M2I1NDcxZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV84ZTk2ZGVjYzJlMGM0NzM1YjY4OTRlZDRmYWZjYWE5NTtcclxuXHJcbnZhciBCaW5kaW5nX2U1M2VjZDhkMjcyOTRlZWJhYzk0Yzc4MzA0ZDliMjRhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2U1M2VjZDhkMjcyOTRlZWJhYzk0Yzc4MzA0ZDliMjRhLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkhvcml6b250YWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNDBjMmYyMjE2YTVjNDIyM2I1ZmZjYjEwODE4NDU2NWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV80MGMyZjIyMTZhNWM0MjIzYjVmZmNiMTA4MTg0NTY1Yy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lNTNlY2Q4ZDI3Mjk0ZWViYWM5NGM3ODMwNGQ5YjI0YS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzQwYzJmMjIxNmE1YzQyMjNiNWZmY2IxMDgxODQ1NjVjO1xyXG5cclxuXHJcbkJpbmRpbmdfZTUzZWNkOGQyNzI5NGVlYmFjOTRjNzgzMDRkOWIyNGEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfOGU5NmRlY2MyZTBjNDczNWI2ODk0ZWQ0ZmFmY2FhOTU7XHJcblxyXG52YXIgQmluZGluZ18zOTQyNzQ0NTEzMmU0NjdhYTQxMTA3YWE0YjAzMDNhYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18zOTQyNzQ0NTEzMmU0NjdhYTQxMTA3YWE0YjAzMDNhYy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJWZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8zY2NhZmJiOTAzMTg0NDFkYjdhNzc4Zjc2Mjc5MzQ0NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzNjY2FmYmI5MDMxODQ0MWRiN2E3NzhmNzYyNzkzNDQ1Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzM5NDI3NDQ1MTMyZTQ2N2FhNDExMDdhYTRiMDMwM2FjLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfM2NjYWZiYjkwMzE4NDQxZGI3YTc3OGY3NjI3OTM0NDU7XHJcblxyXG5cclxuQmluZGluZ18zOTQyNzQ0NTEzMmU0NjdhYTQxMTA3YWE0YjAzMDNhYy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV84ZTk2ZGVjYzJlMGM0NzM1YjY4OTRlZDRmYWZjYWE5NTtcclxuXHJcblxyXG5Cb3JkZXJfOGFkNWIxNjRiMGJjNGMyYjg5Yjk3ZWU3N2MyYmNjN2MuQ2hpbGQgPSBDb250ZW50UHJlc2VudGVyXzZhMzkxN2FhNDc0YTQ0ZGE5ZjM5ZWU4ZDM5YTJmMTk2O1xyXG5cclxudmFyIEJpbmRpbmdfMTdiN2RhNjQ0NTFjNDVhNTllODE5OGFjNjllZDZiZDUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMTdiN2RhNjQ0NTFjNDVhNTllODE5OGFjNjllZDZiZDUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2JiM2NiZWQwMDYwNjRiOWRhYzYxODNkYWJhNWFmZjBhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYmIzY2JlZDAwNjA2NGI5ZGFjNjE4M2RhYmE1YWZmMGEuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMTdiN2RhNjQ0NTFjNDVhNTllODE5OGFjNjllZDZiZDUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9iYjNjYmVkMDA2MDY0YjlkYWM2MTgzZGFiYTVhZmYwYTtcclxuXHJcblxyXG5CaW5kaW5nXzE3YjdkYTY0NDUxYzQ1YTU5ZTgxOThhYzY5ZWQ2YmQ1LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzhlOTZkZWNjMmUwYzQ3MzViNjg5NGVkNGZhZmNhYTk1O1xyXG5cclxuXHJcbkJvcmRlcl9hMzlkNjBiNzg2MDY0N2YwOGE3OTUwNmMxNWMwNjU5Yy5DaGlsZCA9IEJvcmRlcl84YWQ1YjE2NGIwYmM0YzJiODliOTdlZTc3YzJiY2M3YztcclxuXHJcbnZhciBCaW5kaW5nXzM0ZTQxMGVhN2FmMzRjMDdhNGMwMmNiNjgwMTU3NDczID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzM0ZTQxMGVhN2FmMzRjMDdhNGMwMmNiNjgwMTU3NDczLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jNmViZDdmM2RhNDY0Y2ZmYjA4OGI4YzU1MjAyYTZkYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2M2ZWJkN2YzZGE0NjRjZmZiMDg4YjhjNTUyMDJhNmRhLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzM0ZTQxMGVhN2FmMzRjMDdhNGMwMmNiNjgwMTU3NDczLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYzZlYmQ3ZjNkYTQ2NGNmZmIwODhiOGM1NTIwMmE2ZGE7XHJcblxyXG5cclxuQmluZGluZ18zNGU0MTBlYTdhZjM0YzA3YTRjMDJjYjY4MDE1NzQ3My5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV84ZTk2ZGVjYzJlMGM0NzM1YjY4OTRlZDRmYWZjYWE5NTtcclxuXHJcbnZhciBCaW5kaW5nX2RlMTFhOTE1M2IyNDRjNjM5NTM4NGViZmU5OGNmMjIwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2RlMTFhOTE1M2IyNDRjNjM5NTM4NGViZmU5OGNmMjIwLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlckJydXNoXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOTc5NzlkZWE4NzJlNDkwMmFjNDIwMzYwY2JkNjllMmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85Nzk3OWRlYTg3MmU0OTAyYWM0MjAzNjBjYmQ2OWUyZC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kZTExYTkxNTNiMjQ0YzYzOTUzODRlYmZlOThjZjIyMC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzk3OTc5ZGVhODcyZTQ5MDJhYzQyMDM2MGNiZDY5ZTJkO1xyXG5cclxuXHJcbkJpbmRpbmdfZGUxMWE5MTUzYjI0NGM2Mzk1Mzg0ZWJmZTk4Y2YyMjAuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfOGU5NmRlY2MyZTBjNDczNWI2ODk0ZWQ0ZmFmY2FhOTU7XHJcblxyXG52YXIgQmluZGluZ19kZGZiYzRiYjcwN2Q0ZjQxODhkN2I3MGYzMTMyZmRkMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kZGZiYzRiYjcwN2Q0ZjQxODhkN2I3MGYzMTMyZmRkMC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJUaGlja25lc3NcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9mZGIxNmQ3Yzk3OTM0ZTFjYjFjYjdjOGEzYmI5OWZlNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2ZkYjE2ZDdjOTc5MzRlMWNiMWNiN2M4YTNiYjk5ZmU2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2RkZmJjNGJiNzA3ZDRmNDE4OGQ3YjcwZjMxMzJmZGQwLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZmRiMTZkN2M5NzkzNGUxY2IxY2I3YzhhM2JiOTlmZTY7XHJcblxyXG5cclxuQmluZGluZ19kZGZiYzRiYjcwN2Q0ZjQxODhkN2I3MGYzMTMyZmRkMC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV84ZTk2ZGVjYzJlMGM0NzM1YjY4OTRlZDRmYWZjYWE5NTtcclxuXHJcblxyXG5cclxuQ29udGVudFByZXNlbnRlcl82YTM5MTdhYTQ3NGE0NGRhOWYzOWVlOGQzOWEyZjE5Ni5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRUZW1wbGF0ZVByb3BlcnR5LCBCaW5kaW5nX2QyZjA0ZjEyYzY2NDQ3Y2Y4MjhkMDZjZjliZmQ3NDllKTtcclxuQ29udGVudFByZXNlbnRlcl82YTM5MTdhYTQ3NGE0NGRhOWYzOWVlOGQzOWEyZjE5Ni5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRQcm9wZXJ0eSwgQmluZGluZ19mMjUwZDdkOTlhYjM0YTcyYTU4N2M3ZDFhOWE1MzhhYik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNmEzOTE3YWE0NzRhNDRkYTlmMzllZThkMzlhMmYxOTYuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lk1hcmdpblByb3BlcnR5LCBCaW5kaW5nXzE2MjY0MDdjODA5NDRlNDJhYzNiNWVkMDczYjU0NzFlKTtcclxuQ29udGVudFByZXNlbnRlcl82YTM5MTdhYTQ3NGE0NGRhOWYzOWVlOGQzOWEyZjE5Ni5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuSG9yaXpvbnRhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nX2U1M2VjZDhkMjcyOTRlZWJhYzk0Yzc4MzA0ZDliMjRhKTtcclxuQ29udGVudFByZXNlbnRlcl82YTM5MTdhYTQ3NGE0NGRhOWYzOWVlOGQzOWEyZjE5Ni5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuVmVydGljYWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ18zOTQyNzQ0NTEzMmU0NjdhYTQxMTA3YWE0YjAzMDNhYyk7XHJcbkJvcmRlcl84YWQ1YjE2NGIwYmM0YzJiODliOTdlZTc3YzJiY2M3Yy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfMTdiN2RhNjQ0NTFjNDVhNTllODE5OGFjNjllZDZiZDUpO1xyXG5Cb3JkZXJfYTM5ZDYwYjc4NjA2NDdmMDhhNzk1MDZjMTVjMDY1OWMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzM0ZTQxMGVhN2FmMzRjMDdhNGMwMmNiNjgwMTU3NDczKTtcclxuQm9yZGVyX2EzOWQ2MGI3ODYwNjQ3ZjA4YTc5NTA2YzE1YzA2NTljLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlckJydXNoUHJvcGVydHksIEJpbmRpbmdfZGUxMWE5MTUzYjI0NGM2Mzk1Mzg0ZWJmZTk4Y2YyMjApO1xyXG5Cb3JkZXJfYTM5ZDYwYjc4NjA2NDdmMDhhNzk1MDZjMTVjMDY1OWMuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyVGhpY2tuZXNzUHJvcGVydHksIEJpbmRpbmdfZGRmYmM0YmI3MDdkNGY0MTg4ZDdiNzBmMzEzMmZkZDApO1xyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZTZmZGE2YzUzMDUxNGEwYWFlMDEzY2Q3MDg5ZWJmMzEsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZWVlZDIzNjQ0ODU5NDdmZGFhY2FhMmJhOGE0NWMzYzAsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lZWVkMjM2NDQ4NTk0N2ZkYWFjYWEyYmE4YTQ1YzNjMCxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2VlZWQyMzY0NDg1OTQ3ZmRhYWNhYTJiYThhNDVjM2MwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZWVlZDIzNjQ0ODU5NDdmZGFhY2FhMmJhOGE0NWMzYzAsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lZWVkMjM2NDQ4NTk0N2ZkYWFjYWEyYmE4YTQ1YzNjMCkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZTZmZGE2YzUzMDUxNGEwYWFlMDEzY2Q3MDg5ZWJmMzEsIEJvcmRlcl84YWQ1YjE2NGIwYmM0YzJiODliOTdlZTc3YzJiY2M3Yyk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNDQxNjI3MGQ5ODAxNDZhYjgxZDVhNzIxNjQ3ZDQ2MDMsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMGJhOGQyNGI1YTcxNDZkMDllNzJlNWNmODkxZTQxMmUsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wYmE4ZDI0YjVhNzE0NmQwOWU3MmU1Y2Y4OTFlNDEyZSxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzBiYThkMjRiNWE3MTQ2ZDA5ZTcyZTVjZjg5MWU0MTJlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMGJhOGQyNGI1YTcxNDZkMDllNzJlNWNmODkxZTQxMmUsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wYmE4ZDI0YjVhNzE0NmQwOWU3MmU1Y2Y4OTFlNDEyZSkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNDQxNjI3MGQ5ODAxNDZhYjgxZDVhNzIxNjQ3ZDQ2MDMsIEJvcmRlcl84YWQ1YjE2NGIwYmM0YzJiODliOTdlZTc3YzJiY2M3Yyk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNmE0MjY1MDFlNGEzNDg0Nzk5YWMyYjA2NTRkOWZiMWMsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZDRlZjIwNzdkYjRkNGFmNGJiMzkxN2I5M2MxOWRjYTIsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9kNGVmMjA3N2RiNGQ0YWY0YmIzOTE3YjkzYzE5ZGNhMixcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2Q0ZWYyMDc3ZGI0ZDRhZjRiYjM5MTdiOTNjMTlkY2EyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZDRlZjIwNzdkYjRkNGFmNGJiMzkxN2I5M2MxOWRjYTIsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9kNGVmMjA3N2RiNGQ0YWY0YmIzOTE3YjkzYzE5ZGNhMikpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNmE0MjY1MDFlNGEzNDg0Nzk5YWMyYjA2NTRkOWZiMWMsIEJvcmRlcl84YWQ1YjE2NGIwYmM0YzJiODliOTdlZTc3YzJiY2M3Yyk7XHJcblxyXG50ZW1wbGF0ZUluc3RhbmNlXzhlOTZkZWNjMmUwYzQ3MzViNjg5NGVkNGZhZmNhYTk1LlRlbXBsYXRlQ29udGVudCA9IEJvcmRlcl9hMzlkNjBiNzg2MDY0N2YwOGE3OTUwNmMxNWMwNjU5YztcclxucmV0dXJuIHRlbXBsYXRlSW5zdGFuY2VfOGU5NmRlY2MyZTBjNDczNWI2ODk0ZWQ0ZmFmY2FhOTU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwiLy8gPENTSFRNTDU+PFhhbWxIYXNoPkRDQjE2NTc1MjNFNzhFN0FBREVFNTdDREUxNDQ2Qjc1PC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTYuMDQuMjAyMCA0OjAyOjA5PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgFNlY29uZHBhZ2XHgMeAWGFtbMeAx4BGYWN0b3J5XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqZWN0IEluc3RhbnRpYXRlKClcclxuICAgIHtcclxuICAgICAgICBnbG9iYWw6OlN5c3RlbS5UeXBlIHR5cGUgPSB0eXBlb2YoQ1NodG1sLlNlY29uZFBhZ2UpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFNlY29uZFBhZ2UgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QYWdlXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5cclxuXHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAxNjksIDY0OSwgMDYyOFxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9jb250ZW50TG9hZGVkO1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jb250ZW50TG9hZGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfY29udGVudExvYWRlZCA9IHRydWU7XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAwMTg0IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTg0ICgnVGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgbmV2ZXIgb2YgdGhlIHByb3ZpZGVkICgndHlwZScpIHR5cGUnKVxyXG4gICAgICAgICAgICBpZiAodGhpcyBpcyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KShvYmplY3QpdGhpcykuWGFtbFNvdXJjZVBhdGggPSBAXCJDU2h0bWxcXFNlY29uZFBhZ2UueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfZGNmMjQ5ZDBjZDMzNGY4OGE4NDk4ZGY0YjQ2YWZjM2MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG5HcmlkX2RjZjI0OWQwY2QzMzRmODhhODQ5OGRmNGI0NmFmYzNjLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkwLCBHID0gKGJ5dGUpMCwgQiA9IChieXRlKTAgfSk7XHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkX2RjZjI0OWQwY2QzMzRmODhhODQ5OGRmNGI0NmFmYzNjO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBzZWFsZWQgcGFydGlhbCBjbGFzcyBBcHAgOiBBcHBsaWNhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBBcHAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbnRlciBjb25zdHJ1Y3Rpb24gbG9naWMgaGVyZS4uLlxyXG5cclxuICAgICAgICAgICAgLy92YXIgcGFnZUhvbWUgPSBuZXcgUGFnZUhvbWUoKTtcclxuICAgICAgICAgICAgLy9XaW5kb3cuQ3VycmVudC5Db250ZW50ID0gcGFnZUhvbWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIG1mcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZUhvbWUueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBtZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYWdlMSA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFnZTEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlRleHQgPSBGaWxlQ2xhc3MuZmlsZVRleHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnV0dG9uX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9QYWdlSG9tZSBwYWdlSG9tZSA9IG5ldyBQYWdlSG9tZSgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuTmF2aWdhdGlvblNlcnZpY2UuTmF2aWdhdGUocGFnZUhvbWUpO1xyXG4gICAgICAgICAgICAvL3BhZ2VIb21lLmJ0bkJlZ2luLklzRW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2VIb21lLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ0blVwbG9hZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZVVwbG9hZC54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBGaXJzdF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICBidG5VcGxvYWQuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYnRuUHJvY2Vzc2luZy5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcblxyXG4gICAgICAgICAgICBib3JkZXJJREVGLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYm9yZGVyVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgLy9idG5VcGxvYWRVTUwuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZElERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFNlY29uZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blVwbG9hZC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blByb2Nlc3NpbmcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlcklERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYm9yZGVyVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2J0blVwbG9hZFVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIC8vYnRuVXBsb2FkSURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFRoaXJkX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnRuQ2FuY2VsLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuVXBsb2FkLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuUHJvY2Vzc2luZy5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIHR4dEZpbGUuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVySURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJvcmRlclVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZFVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICAvL2J0blVwbG9hZElERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ0blByb2Nlc3NpbmdfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHh0RmlsZS5UZXh0ICE9IFN0cmluZy5FbXB0eSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgV2luZG93cy5VSS5YYW1sLk1lZGlhLkltYWdpbmcuQml0bWFwSW1hZ2UgYml0bWFwSURFRiA9IG5ldyBXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2luZy5CaXRtYXBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYml0bWFwSURFRi5VcmlTb3VyY2UgPSBuZXcgVXJpKFwiaW1nL2lkZWYwLnBuZ1wiLCBVcmlLaW5kLlJlbGF0aXZlKTtcclxuICAgICAgICAgICAgICAgIGlkZWZfSnBlZy5Tb3VyY2UgPSBiaXRtYXBJREVGO1xyXG4gICAgICAgICAgICAgICAgaWRlZl9KcGVnLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcblxyXG4gICAgICAgICAgICAgICAgV2luZG93cy5VSS5YYW1sLk1lZGlhLkltYWdpbmcuQml0bWFwSW1hZ2UgYml0bWFwVU1MID0gbmV3IFdpbmRvd3MuVUkuWGFtbC5NZWRpYS5JbWFnaW5nLkJpdG1hcEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBiaXRtYXBVTUwuVXJpU291cmNlID0gbmV3IFVyaShcImltZy91bWwucG5nXCIsIFVyaUtpbmQuUmVsYXRpdmUpO1xyXG4gICAgICAgICAgICAgICAgdW1sX0pwZWcuU291cmNlID0gYml0bWFwVU1MO1xyXG4gICAgICAgICAgICAgICAgdW1sX0pwZWcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlQm94LlNob3coXCLQn9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC30LDQstC10YDRiNC10L3Qvi4g0J/QtdGA0LXQudC00LjRgtC1INCyINC90LDQstC40LPQsNGG0LjQvtC90L3QvtC8INC80LXQvdGOINC90LAg0L3Rg9C20L3Rg9GOINGB0YLRgNCw0L3QuNGG0YMhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyBNZXNzYWdlQm94LlNob3coXCJKU09OINGE0LDQudC7INC+0YLRgdGD0YLRgdGC0LLRg9C10YJcIik7IH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vcHJpdmF0ZSB2b2lkIEJ0blVwbG9hZFVNTF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICAvL3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIC8vcHJpdmF0ZSB2b2lkIEJ0blVwbG9hZElERUZfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAgLy97XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYWdlSG9tZSA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFnZUhvbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnV0dG9uX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9QYWdlMSBwYWdlSG9tZSA9IG5ldyBQYWdlMSgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuTmF2aWdhdGlvblNlcnZpY2UuTmF2aWdhdGUocGFnZUhvbWUpO1xyXG4gICAgICAgICAgICAvL2J0bkJlZ2luLklzRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2UxLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYWdlVXBsb2FkIDogUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBQYWdlVXBsb2FkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgdm9pZCBPbkZpbGVPcGVuZWQob2JqZWN0IHNlbmRlciwgQ1NIVE1MNS5FeHRlbnNpb25zLkZpbGVPcGVuRGlhbG9nLkZpbGVPcGVuZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZpbGVDbGFzcy5maWxlVGV4dCA9IGUuVGV4dDtcclxuICAgICAgICAgICAgTWVzc2FnZUJveC5TaG93KFwi0KTQsNC50Lsg0LfQsNCz0YDRg9C20LXQvVwiKTtcclxuICAgICAgICAgICAgdmFyIGZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIGZyYW1lLk5hdmlnYXRlKG5ldyBVcmkoXCJQYWdlMS54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ0bkNhbmNlbF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2UxLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uSU87XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBXaW5kb3dzLkZvdW5kYXRpb247XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUHJpbWl0aXZlcztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkRhdGE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5JbnB1dDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk1lZGlhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTmF2aWdhdGlvbjtcclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgU2Vjb25kUGFnZSA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgU2Vjb25kUGFnZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxuI2lmIFNMTUlHUkFUSU9OXHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Db250cm9scztcclxuI2Vsc2VcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbiNlbmRpZlxyXG5cclxubmFtZXNwYWNlIENTSFRNTDUuRXh0ZW5zaW9ucy5GaWxlT3BlbkRpYWxvZ1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlbkRpYWxvZyA6IENvbnRyb2xcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgZXZlbnQgRXZlbnRIYW5kbGVyPEZpbGVPcGVuZWRFdmVudEFyZ3M+IEZpbGVPcGVuZWQ7XHJcblxyXG4gICAgICAgIHByaXZhdGUgUmVzdWx0S2luZCBfcmVzdWx0S2luZDtcclxuICAgICAgICBwcml2YXRlIHN0cmluZyBfcmVzdWx0S2luZFN0cjtcclxuICAgICAgICBwdWJsaWMgUmVzdWx0S2luZCBSZXN1bHRLaW5kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gX3Jlc3VsdEtpbmQ7IH1cclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIF9yZXN1bHRLaW5kID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0S2luZFN0ciA9IHZhbHVlLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJlc3VsdEtpbmQgPSBGaWxlT3BlbkRpYWxvZy5SZXN1bHRLaW5kLlRleHQ7IC8vTm90ZTogdGhpcyBpcyB0byBzZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIHByb3BlcnR5LlxyXG5cclxuICAgICAgICAgICAgQ1NoYXJwWGFtbEZvckh0bWw1LkRvbU1hbmFnZW1lbnQuU2V0SHRtbFJlcHJlc2VudGF0aW9uKHRoaXMsXHJcbiAgICAgICAgICAgICAgICBcIjxkaXYgc3R5bGUgc3R5bGU9J21hcmdpbjogMTVweDsgcG9zaXRpb246IHJlbGF0aXZlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiAjMWJiYzljIHZlcnRpY2FsLWFsaWduOm1pZGRsZTsnPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9J2ZpbGUnIGFjY2VwdD0nLmpzb24sIC50eHQnIGlkPSdpbnB1dF9fZmlsZScgc3R5bGU9J21hcmdpbjogNjVweDsgcG9zaXRpb246IHJlbGF0aXZlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHdpZHRoOiAxMDAlOyB2aXNpYmlsaXR5OiBoaWRkZW47JyBtdWx0aXBsZT5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxsYWJlbCBmb3I9J2lucHV0X19maWxlJyBzdHlsZT0nd2lkdGg6IDEwMCU7IG1heC13aWR0aDogMjUwcHg7IGhlaWdodDogNjBweDsgYmFja2dyb3VuZDogI0Y5REVGMjsgZGlzcGxheTogLXdlYmtpdC1ib3g7IGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XCIgK1xyXG4gICAgICAgICAgICAgICAgXCJkaXNwbGF5OiAtbXMtZmxleGJveDsgZGlzcGxheTogZmxleDsgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7IC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMCBhdXRvOyBmb250LXNpemU6IDEuMTI1cmVtOyBmb250LXdlaWdodDogNzAwO1wiICtcclxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1czogNXB4OyBjdXJzb3I6IHBvaW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0OyAtbXMtZmxleC1wYWNrOiBzdGFydDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGNvbG9yOiAjMDAwOyc+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8c3BhbiBzdHlsZT0naGVpZ2h0OiA2MHB4OyB3aWR0aDogNjBweDsgbWFyZ2luIC0gcmlnaHQ6IDE1cHg7IGRpc3BsYXk6IC13ZWJraXQgLSBib3g7IGRpc3BsYXk6IC1tcyAtIGZsZXhib3g7IGRpc3BsYXk6IGZsZXg7IFwiICtcclxuICAgICAgICAgICAgICAgIFwiLXdlYmtpdCAtIGJveCAtIGFsaWduOiBjZW50ZXI7IC1tcyAtIGZsZXggLSBhbGlnbjogY2VudGVyOyBhbGlnbiAtIGl0ZW1zOiBjZW50ZXI7IC13ZWJraXQgLSBib3ggLSBwYWNrOiBjZW50ZXI7IC1tcyAtIGZsZXggLSBwYWNrOiBjZW50ZXI7IFwiICtcclxuICAgICAgICAgICAgICAgIFwianVzdGlmeSAtIGNvbnRlbnQ6IGNlbnRlcjsgYm9yZGVyIC0gcmlnaHQ6IDFweCBzb2xpZCAjZmZmOyc+PGltZyBzcmM9Jy4vYXBwLWNzaHRtbDUvcmVzL0NTaHRtbC9pbWcvZG93bmxvYWQucG5nJyBcIiArXHJcbiAgICAgICAgICAgICAgICBcImFsdD0n0JLRi9Cx0YDQsNGC0Ywg0YTQsNC50LsnIHdpZHRoPSc2MCc+PC9zcGFuPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2xpbmUtaGVpZ2h0OiAxO21hcmdpbi10b3A6IDFweDsnPtCS0YvQsdC10YDQuNGC0LUg0YTQsNC50Ls8L3NwYW4+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L2xhYmVsPlwiK1xyXG4gICAgICAgICAgICAgICAgXCI8L2Rpdj5cIik7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0naW5wdXRfX3dyYXBwZXInPlwiICtcclxuICAgICAgICAgICAgLy8gICBcIjxpbnB1dCB0eXBlID0gJ2ZpbGUnICBpZCA9ICdpbnB1dF9fZmlsZScgY2xhc3M9J2lucHV0IGlucHV0X19maWxlJyBtdWx0aXBsZT5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8bGFiZWwgZm9yPSdpbnB1dF9fZmlsZScgY2xhc3M9J2lucHV0X19maWxlLWJ1dHRvbic+XCIgK1xyXG4gICAgICAgICAgICAvLyAgICAgIFwiPHNwYW4gY2xhc3M9J2lucHV0X19maWxlLWJ1dHRvbi10ZXh0Jz7QktGL0LHQtdGA0LjRgtC1INGE0LDQudC7PC9zcGFuPlwiICtcclxuICAgICAgICAgICAgLy8gICBcIjwvbGFiZWw+XCIgK1xyXG4gICAgICAgICAgICAvL1wiPC9kaXY+XCJcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTG9hZGVkICs9IENvbnRyb2xGb3JEaXNwbGF5aW5nQUZpbGVPcGVuRGlhbG9nX0xvYWRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQ29udHJvbEZvckRpc3BsYXlpbmdBRmlsZU9wZW5EaWFsb2dfTG9hZGVkKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gR2V0IHRoZSByZWZlcmVuY2UgdG8gdGhlIFwiaW5wdXRcIiBlbGVtZW50OlxyXG4gICAgICAgICAgICB2YXIgaW5wdXRFbGVtZW50ID0gQ1NIVE1MNS5JbnRlcm9wLkdldERpdih0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIEFjdGlvbjxvYmplY3Q+IG9uRmlsZU9wZW5lZCA9IChyZXN1bHQpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkZpbGVPcGVuZWQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZpbGVPcGVuZWQodGhpcywgbmV3IEZpbGVPcGVuZWRFdmVudEFyZ3MocmVzdWx0LCB0aGlzLlJlc3VsdEtpbmQpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RyaW5nIHJlc3VsdEtpbmRTdHIgPSBfcmVzdWx0S2luZFN0cjsgLy8gTm90ZTogdGhpcyBpcyBoZXJlIHRvIFwiY2FwdHVyZVwiIHRoZSB2YXJpYWJsZSBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGluc2lkZSB0aGUgXCJhZGRFdmVudExpc3RlbmVyXCIgYmVsb3cuXHJcblxyXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgXCJGaWx0ZXJcIiBwcm9wZXJ0eSB0byBsaW1pdCB0aGUgY2hvaWNlIG9mIHRoZSB1c2VyIHRvIHRoZSBzcGVjaWZpZWQgZXh0ZW5zaW9uczpcclxuICAgICAgICAgICAgU2V0RmlsdGVyKHRoaXMuRmlsdGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExpc3RlbiB0byB0aGUgXCJjaGFuZ2VcIiBwcm9wZXJ0eSBvZiB0aGUgXCJpbnB1dFwiIGVsZW1lbnQsIGFuZCBjYWxsIHRoZSBjYWxsYmFjazpcclxuICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIlxyXG4gICAgICAgICAgICAgICAgJDAuYWRkRXZlbnRMaXN0ZW5lcihcIlwiY2hhbmdlXCJcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZnVsbFBhdGggPSAkMC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZnVsbFBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAoZnVsbFBhdGguaW5kZXhPZignXFxcXCcpID49IDAgPyBmdWxsUGF0aC5sYXN0SW5kZXhPZignXFxcXCcpIDogZnVsbFBhdGgubGFzdEluZGV4T2YoJy8nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZnVsbFBhdGguc3Vic3RyaW5nKHN0YXJ0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZW5hbWUuaW5kZXhPZignXFxcXCcpID09PSAwIHx8IGZpbGVuYW1lLmluZGV4T2YoJy8nKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBmaWxlbmFtZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSAkMTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy9pZiAoZmlsZS50eXBlID09ICd0ZXh0L3BsYWluJylcclxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0S2luZCA9ICQzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRLaW5kID09ICdEYXRhVVJMJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1J1bm5pbmdJblRoZVNpbXVsYXRvciA9ICQyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XCIsIGlucHV0RWxlbWVudCwgb25GaWxlT3BlbmVkLCBDU0hUTUw1LkludGVyb3AuSXNSdW5uaW5nSW5UaGVTaW11bGF0b3IsIHJlc3VsdEtpbmRTdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBTZXRGaWx0ZXIoc3RyaW5nIGZpbHRlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBcImlucHV0XCIgZWxlbWVudDpcclxuICAgICAgICAgICAgdmFyIGlucHV0RWxlbWVudCA9IENTSFRNTDUuSW50ZXJvcC5HZXREaXYodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBmaWx0ZXIgbGlzdCB0byBjb252ZXJ0IHRoZSBzeW50YXggZnJvbSBYQU1MIHRvIEhUTUw1OlxyXG4gICAgICAgICAgICAvLyBFeGFtcGxlIG9mIHN5bnRheCBpbiBTaWx2ZXJsaWdodDogSW1hZ2UgRmlsZXMgKCouYm1wLCAqLmpwZyl8Ki5ibXA7Ki5qcGd8QWxsIEZpbGVzICgqLiopfCouKlxyXG4gICAgICAgICAgICAvLyBFeGFtcGxlIG9mIHN5bnRheCBpbiBIVE1MNTogLmdpZiwgLmpwZywgLnBuZywgLmRvY1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBzcGxpdHRlZCA9IGZpbHRlci5TcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICBMaXN0PHN0cmluZz4gaXRlbXNLZXB0ID0gbmV3IExpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZWQuTGVuZ3RoID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zS2VwdC5BZGQoc3BsaXR0ZWRbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDE7IGkgPCBzcGxpdHRlZC5MZW5ndGg7IGkgKz0gMilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0tlcHQuQWRkKHNwbGl0dGVkW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJpbmcgZmlsdGVyc0luSHRtbDUgPSBTdHJpbmcuSm9pbihcIixcIiwgaXRlbXNLZXB0KS5SZXBsYWNlKFwiKlwiLCBcIlwiKS5SZXBsYWNlKFwiO1wiLCBcIixcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgZmlsdGVyOlxyXG4gICAgICAgICAgICBpZiAoIXN0cmluZy5Jc051bGxPcldoaXRlU3BhY2UoZmlsdGVyc0luSHRtbDUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDU0hUTUw1LkludGVyb3AuRXhlY3V0ZUphdmFTY3JpcHQoQFwiJDAuYWNjZXB0ID0gJDFcIiwgaW5wdXRFbGVtZW50LCBmaWx0ZXJzSW5IdG1sNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDU0hUTUw1LkludGVyb3AuRXhlY3V0ZUphdmFTY3JpcHQoQFwiJDAuYWNjZXB0ID0gXCJcIlwiXCJcIiwgaW5wdXRFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRmlsdGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gKHN0cmluZylHZXRWYWx1ZShGaWx0ZXJQcm9wZXJ0eSk7IH1cclxuICAgICAgICAgICAgc2V0IHsgU2V0VmFsdWUoRmlsdGVyUHJvcGVydHksIHZhbHVlKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERlcGVuZGVuY3lQcm9wZXJ0eSBGaWx0ZXJQcm9wZXJ0eSA9XHJcbiAgICAgICAgICAgIERlcGVuZGVuY3lQcm9wZXJ0eS5SZWdpc3RlcihcIkZpbHRlclwiLCB0eXBlb2Yoc3RyaW5nKSwgdHlwZW9mKENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2cpLCBuZXcgUHJvcGVydHlNZXRhZGF0YShcIlwiLCBGaWx0ZXJfQ2hhbmdlZCkpO1xyXG5cclxuICAgICAgICBzdGF0aWMgdm9pZCBGaWx0ZXJfQ2hhbmdlZChEZXBlbmRlbmN5T2JqZWN0IGQsIERlcGVuZGVuY3lQcm9wZXJ0eUNoYW5nZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sID0gKENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2cpZDtcclxuICAgICAgICAgICAgaWYgKENTaGFycFhhbWxGb3JIdG1sNS5Eb21NYW5hZ2VtZW50LklzQ29udHJvbEluVmlzdWFsVHJlZShjb250cm9sKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbC5TZXRGaWx0ZXIoKGUuTmV3VmFsdWUgPz8gXCJcIikuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbGVPcGVuZWRFdmVudEFyZ3MgOiBFdmVudEFyZ3NcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE9ubHkgYXZhaWxhYmxlIGlmIHRoZSBwcm9wZXJ0eSBcIlJlc3VsdEtpbmRcIiB3YXMgc2V0IHRvIFwiVGV4dFwiXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBbT2Jzb2xldGVdXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHN0cmluZyBQbGFpblRleHRDb250ZW50O1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE9ubHkgYXZhaWxhYmxlIGlmIHRoZSBwcm9wZXJ0eSBcIlJlc3VsdEtpbmRcIiB3YXMgc2V0IHRvIFwiVGV4dFwiLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHN0cmluZyBUZXh0O1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE9ubHkgYXZhaWxhYmxlIGlmIHRoZSBwcm9wZXJ0eSBcIlJlc3VsdEtpbmRcIiB3YXMgc2V0IHRvIFwiRGF0YVVSTFwiLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHN0cmluZyBEYXRhVVJMO1xyXG5cclxuICAgICAgICBwdWJsaWMgRmlsZU9wZW5lZEV2ZW50QXJncyhvYmplY3QgcmVzdWx0LCBSZXN1bHRLaW5kIHJlc3VsdEtpbmQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0S2luZCA9PSBSZXN1bHRLaW5kLlRleHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGV4dCA9IHRoaXMuUGxhaW5UZXh0Q29udGVudCA9IChyZXN1bHQgPz8gXCJcIikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHRLaW5kID09IFJlc3VsdEtpbmQuRGF0YVVSTClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhVVJMID0gKHJlc3VsdCA/PyBcIlwiKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdFN1cHBvcnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIFJlc3VsdEtpbmRcclxuICAgIHtcclxuICAgICAgICBUZXh0LCBEYXRhVVJMXHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
