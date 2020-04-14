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


                var ResourceDictionary_d493c18278c64ab79403a098869de18a = new Bridge.global.Windows.UI.Xaml.ResourceDictionary();
                this.Resources = ResourceDictionary_d493c18278c64ab79403a098869de18a;

                this.Resources = ResourceDictionary_d493c18278c64ab79403a098869de18a;







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
            btnUpload: null,
            btnProcessing: null,
            txtFile: null,
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
                this.LayoutGrid.Visibility = Windows.UI.Xaml.Visibility.Visible;

            },
            Second_Click: function (sender, e) {
                this.LayoutGrid.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
            },
            Third_Click: function (sender, e) {
                this.LayoutGrid.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
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



                var Grid_b05d9f05d3664b5c82b08b0984dc7c12 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_ba34fc7c51ee4103af954039d7285d41 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_ba34fc7c51ee4103af954039d7285d41.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_ba34fc7c51ee4103af954039d7285d41.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_60ebe06f532743968f7abe6391d398ef = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_60ebe06f532743968f7abe6391d398ef.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_60ebe06f532743968f7abe6391d398ef.Offset = 0.0;

                var GradientStop_8b38f867e1dc4bb881a9c40bf8609f0d = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_8b38f867e1dc4bb881a9c40bf8609f0d.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_8b38f867e1dc4bb881a9c40bf8609f0d.Offset = 1.0;

                LinearGradientBrush_ba34fc7c51ee4103af954039d7285d41.GradientStops.add(GradientStop_60ebe06f532743968f7abe6391d398ef);
                LinearGradientBrush_ba34fc7c51ee4103af954039d7285d41.GradientStops.add(GradientStop_8b38f867e1dc4bb881a9c40bf8609f0d);


                Grid_b05d9f05d3664b5c82b08b0984dc7c12.Background = LinearGradientBrush_ba34fc7c51ee4103af954039d7285d41;

                var RowDefinition_af6a778a6f2042579f0ec4c555e647ef = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_af6a778a6f2042579f0ec4c555e647ef.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_5b9c90d8ecb94a1e858e64e97d37fd11 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_5b9c90d8ecb94a1e858e64e97d37fd11.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_c6b40de82be34faab2b41fd36a3963e1 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_c6b40de82be34faab2b41fd36a3963e1.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_b05d9f05d3664b5c82b08b0984dc7c12.RowDefinitions.add(RowDefinition_af6a778a6f2042579f0ec4c555e647ef);
                Grid_b05d9f05d3664b5c82b08b0984dc7c12.RowDefinitions.add(RowDefinition_5b9c90d8ecb94a1e858e64e97d37fd11);
                Grid_b05d9f05d3664b5c82b08b0984dc7c12.RowDefinitions.add(RowDefinition_c6b40de82be34faab2b41fd36a3963e1);

                var ColumnDefinition_93cd7dda193f4bd89fffccc9d2bd89be = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();
                ColumnDefinition_93cd7dda193f4bd89fffccc9d2bd89be.Width = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var ColumnDefinition_a15a78be8f4b491da148ef86a08d8eef = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_b05d9f05d3664b5c82b08b0984dc7c12.ColumnDefinitions.add(ColumnDefinition_93cd7dda193f4bd89fffccc9d2bd89be);
                Grid_b05d9f05d3664b5c82b08b0984dc7c12.ColumnDefinitions.add(ColumnDefinition_a15a78be8f4b491da148ef86a08d8eef);

                var Border_9b95ed5a96fa408c88084c3d457522ec = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("elementForList", Border_9b95ed5a96fa408c88084c3d457522ec);
                Border_9b95ed5a96fa408c88084c3d457522ec.Name = "elementForList";
                Border_9b95ed5a96fa408c88084c3d457522ec.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_9b95ed5a96fa408c88084c3d457522ec, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_9b95ed5a96fa408c88084c3d457522ec, 3);
                Border_9b95ed5a96fa408c88084c3d457522ec.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_9b95ed5a96fa408c88084c3d457522ec.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_9b95ed5a96fa408c88084c3d457522ec.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var Grid_9216ffa830ad48d08c05b67f6c557cde = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_b48cd0c944cb46cda924caa0b6c81cf0 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_b48cd0c944cb46cda924caa0b6c81cf0.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_b48cd0c944cb46cda924caa0b6c81cf0.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_f97ac0c675e5410ca707c10ddb40d70b = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_f97ac0c675e5410ca707c10ddb40d70b.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_f97ac0c675e5410ca707c10ddb40d70b.Offset = 0.0;

                var GradientStop_12c10e2c01554a249f813fd10a4cee02 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_12c10e2c01554a249f813fd10a4cee02.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_12c10e2c01554a249f813fd10a4cee02.Offset = 1.0;

                LinearGradientBrush_b48cd0c944cb46cda924caa0b6c81cf0.GradientStops.add(GradientStop_f97ac0c675e5410ca707c10ddb40d70b);
                LinearGradientBrush_b48cd0c944cb46cda924caa0b6c81cf0.GradientStops.add(GradientStop_12c10e2c01554a249f813fd10a4cee02);


                Grid_9216ffa830ad48d08c05b67f6c557cde.Background = LinearGradientBrush_b48cd0c944cb46cda924caa0b6c81cf0;

                var RowDefinition_e28c4fccdf234d30b4746b7d1a2249af = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_7c8adc999c8748f8bf57155ff4c38b9a = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_7c8adc999c8748f8bf57155ff4c38b9a.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_1c403f4ecadb406ab4f14db6893ece63 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_1c403f4ecadb406ab4f14db6893ece63.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_0700979ec0724343aa2db7a482fcf874 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_0700979ec0724343aa2db7a482fcf874.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_5daa3fe5d67f407da3ee836c3efd99ca = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_9216ffa830ad48d08c05b67f6c557cde.RowDefinitions.add(RowDefinition_e28c4fccdf234d30b4746b7d1a2249af);
                Grid_9216ffa830ad48d08c05b67f6c557cde.RowDefinitions.add(RowDefinition_7c8adc999c8748f8bf57155ff4c38b9a);
                Grid_9216ffa830ad48d08c05b67f6c557cde.RowDefinitions.add(RowDefinition_1c403f4ecadb406ab4f14db6893ece63);
                Grid_9216ffa830ad48d08c05b67f6c557cde.RowDefinitions.add(RowDefinition_0700979ec0724343aa2db7a482fcf874);
                Grid_9216ffa830ad48d08c05b67f6c557cde.RowDefinitions.add(RowDefinition_5daa3fe5d67f407da3ee836c3efd99ca);

                var Button_7cbb7bf8c6b84725aeff892224877323 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_7cbb7bf8c6b84725aeff892224877323, 1);
                Button_7cbb7bf8c6b84725aeff892224877323.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_7cbb7bf8c6b84725aeff892224877323.Content = "\u041f\u0435\u0440\u0432\u0430\u044f";
                Button_7cbb7bf8c6b84725aeff892224877323.FontSize = 20.0;
                Button_7cbb7bf8c6b84725aeff892224877323.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_7cbb7bf8c6b84725aeff892224877323.addClick(Bridge.fn.cacheBind(this, this.First_Click));

                var Button_37652346f15c44f8a177f58c1e420fe2 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_37652346f15c44f8a177f58c1e420fe2, 2);
                Button_37652346f15c44f8a177f58c1e420fe2.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_37652346f15c44f8a177f58c1e420fe2.Content = "\u0412\u0442\u043e\u0440\u0430\u044f";
                Button_37652346f15c44f8a177f58c1e420fe2.FontSize = 20.0;
                Button_37652346f15c44f8a177f58c1e420fe2.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_37652346f15c44f8a177f58c1e420fe2.addClick(Bridge.fn.cacheBind(this, this.Second_Click));

                var Button_1f082578429e4a7aa55a1792177dd538 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_1f082578429e4a7aa55a1792177dd538, 3);
                Button_1f082578429e4a7aa55a1792177dd538.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_1f082578429e4a7aa55a1792177dd538.Content = "\u0422\u0440\u0435\u0442\u044c\u044f";
                Button_1f082578429e4a7aa55a1792177dd538.FontSize = 20.0;
                Button_1f082578429e4a7aa55a1792177dd538.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_1f082578429e4a7aa55a1792177dd538.addClick(Bridge.fn.cacheBind(this, this.Third_Click));

                Grid_9216ffa830ad48d08c05b67f6c557cde.Children.add(Button_7cbb7bf8c6b84725aeff892224877323);
                Grid_9216ffa830ad48d08c05b67f6c557cde.Children.add(Button_37652346f15c44f8a177f58c1e420fe2);
                Grid_9216ffa830ad48d08c05b67f6c557cde.Children.add(Button_1f082578429e4a7aa55a1792177dd538);


                Border_9b95ed5a96fa408c88084c3d457522ec.Child = Grid_9216ffa830ad48d08c05b67f6c557cde;


                var Border_dfa8f6bc876f4e438c364320aaed8639 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_dfa8f6bc876f4e438c364320aaed8639);
                Border_dfa8f6bc876f4e438c364320aaed8639.Name = "element";
                Border_dfa8f6bc876f4e438c364320aaed8639.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_dfa8f6bc876f4e438c364320aaed8639, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_dfa8f6bc876f4e438c364320aaed8639, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_dfa8f6bc876f4e438c364320aaed8639, 1);
                Border_dfa8f6bc876f4e438c364320aaed8639.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_dfa8f6bc876f4e438c364320aaed8639.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_dfa8f6bc876f4e438c364320aaed8639.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_214b175058e64696823176889fc9b9b2 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_214b175058e64696823176889fc9b9b2.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_214b175058e64696823176889fc9b9b2.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_b91f562a02f040828e13fabfc2fc6c0a = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_b91f562a02f040828e13fabfc2fc6c0a.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_b91f562a02f040828e13fabfc2fc6c0a.Offset = 0.0;

                var GradientStop_2f3341106a474272be7db046fcf91289 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_2f3341106a474272be7db046fcf91289.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_2f3341106a474272be7db046fcf91289.Offset = 1.0;

                LinearGradientBrush_214b175058e64696823176889fc9b9b2.GradientStops.add(GradientStop_b91f562a02f040828e13fabfc2fc6c0a);
                LinearGradientBrush_214b175058e64696823176889fc9b9b2.GradientStops.add(GradientStop_2f3341106a474272be7db046fcf91289);


                Border_dfa8f6bc876f4e438c364320aaed8639.Background = LinearGradientBrush_214b175058e64696823176889fc9b9b2;

                var Grid_ae57fed5b2e54d328884c50f2aa27473 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutGrid", Grid_ae57fed5b2e54d328884c50f2aa27473);
                Grid_ae57fed5b2e54d328884c50f2aa27473.Name = "LayoutGrid";
                var LinearGradientBrush_21694046e6114e42a15e1b625efb7129 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_21694046e6114e42a15e1b625efb7129.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_21694046e6114e42a15e1b625efb7129.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_52294498670b42f49d5316bfac5fecfa = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_52294498670b42f49d5316bfac5fecfa.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_52294498670b42f49d5316bfac5fecfa.Offset = 0.0;

                var GradientStop_f3b3ffbeed434c138dbce501785510a7 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_f3b3ffbeed434c138dbce501785510a7.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_f3b3ffbeed434c138dbce501785510a7.Offset = 1.0;

                LinearGradientBrush_21694046e6114e42a15e1b625efb7129.GradientStops.add(GradientStop_52294498670b42f49d5316bfac5fecfa);
                LinearGradientBrush_21694046e6114e42a15e1b625efb7129.GradientStops.add(GradientStop_f3b3ffbeed434c138dbce501785510a7);


                Grid_ae57fed5b2e54d328884c50f2aa27473.Background = LinearGradientBrush_21694046e6114e42a15e1b625efb7129;

                var RowDefinition_303b70d25c3a44af8a5c81218e7802c5 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_303b70d25c3a44af8a5c81218e7802c5.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_f807461989774b879bbbe493ac7d6cc7 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_f807461989774b879bbbe493ac7d6cc7.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_434269cb36034d19a49150a65042834a = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_434269cb36034d19a49150a65042834a.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_ae57fed5b2e54d328884c50f2aa27473.RowDefinitions.add(RowDefinition_303b70d25c3a44af8a5c81218e7802c5);
                Grid_ae57fed5b2e54d328884c50f2aa27473.RowDefinitions.add(RowDefinition_f807461989774b879bbbe493ac7d6cc7);
                Grid_ae57fed5b2e54d328884c50f2aa27473.RowDefinitions.add(RowDefinition_434269cb36034d19a49150a65042834a);

                var ColumnDefinition_65b6bc5aad3b489e818a1db99f9df5b5 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_c485071ff06c4b239e9a7ec36eb8b191 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_ae57fed5b2e54d328884c50f2aa27473.ColumnDefinitions.add(ColumnDefinition_65b6bc5aad3b489e818a1db99f9df5b5);
                Grid_ae57fed5b2e54d328884c50f2aa27473.ColumnDefinitions.add(ColumnDefinition_c485071ff06c4b239e9a7ec36eb8b191);

                var Button_a691493d3f3d4af19e6a79850aca0d71 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Button_a691493d3f3d4af19e6a79850aca0d71.Content = "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_a691493d3f3d4af19e6a79850aca0d71, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_a691493d3f3d4af19e6a79850aca0d71, 2);
                Button_a691493d3f3d4af19e6a79850aca0d71.Width = 280.0;
                Button_a691493d3f3d4af19e6a79850aca0d71.Height = 50.0;
                Button_a691493d3f3d4af19e6a79850aca0d71.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 224, $t.G = 216, $t.B = 222, $t));
                Button_a691493d3f3d4af19e6a79850aca0d71.FontSize = 25.0;
                Button_a691493d3f3d4af19e6a79850aca0d71.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_a691493d3f3d4af19e6a79850aca0d71.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_a691493d3f3d4af19e6a79850aca0d71.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                var ControlTemplate_3057ef6bd42244fb80469f6904f5a6cd = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_3057ef6bd42244fb80469f6904f5a6cd.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_3057ef6bd42244fb80469f6904f5a6cd.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_3057ef6bd42244fb80469f6904f5a6cd));

                Button_a691493d3f3d4af19e6a79850aca0d71.Template = ControlTemplate_3057ef6bd42244fb80469f6904f5a6cd;


                var Button_3b151d5d6d9242828798a99ffe6ca4dc = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnUpload", Button_3b151d5d6d9242828798a99ffe6ca4dc);
                Button_3b151d5d6d9242828798a99ffe6ca4dc.Name = "btnUpload";
                Button_3b151d5d6d9242828798a99ffe6ca4dc.Content = "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c JSON \u0444\u0430\u0439\u043b";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_3b151d5d6d9242828798a99ffe6ca4dc, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_3b151d5d6d9242828798a99ffe6ca4dc, 1);
                Button_3b151d5d6d9242828798a99ffe6ca4dc.Width = 280.0;
                Button_3b151d5d6d9242828798a99ffe6ca4dc.Height = 50.0;
                Button_3b151d5d6d9242828798a99ffe6ca4dc.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_3b151d5d6d9242828798a99ffe6ca4dc.FontSize = 25.0;
                Button_3b151d5d6d9242828798a99ffe6ca4dc.addClick(Bridge.fn.cacheBind(this, this.BtnUpload_Click));
                Button_3b151d5d6d9242828798a99ffe6ca4dc.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_3b151d5d6d9242828798a99ffe6ca4dc.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_3b151d5d6d9242828798a99ffe6ca4dc.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_3b151d5d6d9242828798a99ffe6ca4dc.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                var ControlTemplate_38e8ae1222ed4232bb661a8e21aa3d4e = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_38e8ae1222ed4232bb661a8e21aa3d4e.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_38e8ae1222ed4232bb661a8e21aa3d4e.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_38e8ae1222ed4232bb661a8e21aa3d4e));

                Button_3b151d5d6d9242828798a99ffe6ca4dc.Template = ControlTemplate_38e8ae1222ed4232bb661a8e21aa3d4e;


                var Button_9e154e3268194e0589249f8460528a67 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnProcessing", Button_9e154e3268194e0589249f8460528a67);
                Button_9e154e3268194e0589249f8460528a67.Name = "btnProcessing";
                Button_9e154e3268194e0589249f8460528a67.Content = "\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0443";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_9e154e3268194e0589249f8460528a67, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_9e154e3268194e0589249f8460528a67, 1);
                Button_9e154e3268194e0589249f8460528a67.Width = 280.0;
                Button_9e154e3268194e0589249f8460528a67.Height = 50.0;
                Button_9e154e3268194e0589249f8460528a67.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_9e154e3268194e0589249f8460528a67.FontSize = 25.0;
                Button_9e154e3268194e0589249f8460528a67.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_9e154e3268194e0589249f8460528a67.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_9e154e3268194e0589249f8460528a67.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_9e154e3268194e0589249f8460528a67.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                var ControlTemplate_58d60140f17f4ee3b93969b54e5624a6 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_58d60140f17f4ee3b93969b54e5624a6.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_58d60140f17f4ee3b93969b54e5624a6.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_58d60140f17f4ee3b93969b54e5624a6));

                Button_9e154e3268194e0589249f8460528a67.Template = ControlTemplate_58d60140f17f4ee3b93969b54e5624a6;


                var TextBox_83ee5f65398e45d8bdf5664b380da322 = new Bridge.global.Windows.UI.Xaml.Controls.TextBox();
                this.RegisterName$1("txtFile", TextBox_83ee5f65398e45d8bdf5664b380da322);
                TextBox_83ee5f65398e45d8bdf5664b380da322.Name = "txtFile";
                TextBox_83ee5f65398e45d8bdf5664b380da322.TextWrapping = Bridge.global.Windows.UI.Xaml.TextWrapping.Wrap;
                TextBox_83ee5f65398e45d8bdf5664b380da322.Text = "";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(TextBox_83ee5f65398e45d8bdf5664b380da322, 1);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(TextBox_83ee5f65398e45d8bdf5664b380da322, 2);
                TextBox_83ee5f65398e45d8bdf5664b380da322.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(10, -20, 10, -20);
                TextBox_83ee5f65398e45d8bdf5664b380da322.FontSize = 20.0;

                Grid_ae57fed5b2e54d328884c50f2aa27473.Children.add(Button_a691493d3f3d4af19e6a79850aca0d71);
                Grid_ae57fed5b2e54d328884c50f2aa27473.Children.add(Button_3b151d5d6d9242828798a99ffe6ca4dc);
                Grid_ae57fed5b2e54d328884c50f2aa27473.Children.add(Button_9e154e3268194e0589249f8460528a67);
                Grid_ae57fed5b2e54d328884c50f2aa27473.Children.add(TextBox_83ee5f65398e45d8bdf5664b380da322);


                Border_dfa8f6bc876f4e438c364320aaed8639.Child = Grid_ae57fed5b2e54d328884c50f2aa27473;


                Grid_b05d9f05d3664b5c82b08b0984dc7c12.Children.add(Border_9b95ed5a96fa408c88084c3d457522ec);
                Grid_b05d9f05d3664b5c82b08b0984dc7c12.Children.add(Border_dfa8f6bc876f4e438c364320aaed8639);


                this.Content = Grid_b05d9f05d3664b5c82b08b0984dc7c12;



                this.elementForList = Border_9b95ed5a96fa408c88084c3d457522ec;
                this.btnUpload = Button_3b151d5d6d9242828798a99ffe6ca4dc;
                this.btnProcessing = Button_9e154e3268194e0589249f8460528a67;
                this.txtFile = TextBox_83ee5f65398e45d8bdf5664b380da322;
                this.LayoutGrid = Grid_ae57fed5b2e54d328884c50f2aa27473;
                this.element = Border_dfa8f6bc876f4e438c364320aaed8639;



            },
            accessVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_3057ef6bd42244fb80469f6904f5a6cd: function (templateOwner) {
                var templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408.TemplateOwner = templateOwner;
                var Border_e2a6a62be26e4ca5a139f6fa12050441 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_e2a6a62be26e4ca5a139f6fa12050441);
                Border_e2a6a62be26e4ca5a139f6fa12050441.Name = "OuterBorder";
                Border_e2a6a62be26e4ca5a139f6fa12050441.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_111f44cc74d94db6918e3ebaca69a21b = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_111f44cc74d94db6918e3ebaca69a21b);
                VisualStateGroup_111f44cc74d94db6918e3ebaca69a21b.Name = "CommonStates";
                var VisualState_801ef404bc434068a0dd73871d43b3b7 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_801ef404bc434068a0dd73871d43b3b7);
                VisualState_801ef404bc434068a0dd73871d43b3b7.Name = "Normal";

                var VisualState_b61eebbbac7c4c5398dce45498867e7d = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_b61eebbbac7c4c5398dce45498867e7d);
                VisualState_b61eebbbac7c4c5398dce45498867e7d.Name = "PointerOver";
                var Storyboard_467f01774015427c9c5b7ff9488de572 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_301e7165958c4ea5ab165f8b4140759a = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_301e7165958c4ea5ab165f8b4140759a, "InnerBorder");
                var DiscreteObjectKeyFrame_3c01bb44cfeb4a44861c0596d8dea180 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_3c01bb44cfeb4a44861c0596d8dea180.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_3c01bb44cfeb4a44861c0596d8dea180.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_301e7165958c4ea5ab165f8b4140759a.KeyFrames.add(DiscreteObjectKeyFrame_3c01bb44cfeb4a44861c0596d8dea180);


                Storyboard_467f01774015427c9c5b7ff9488de572.Children.add(ObjectAnimationUsingKeyFrames_301e7165958c4ea5ab165f8b4140759a);


                VisualState_b61eebbbac7c4c5398dce45498867e7d.Storyboard = Storyboard_467f01774015427c9c5b7ff9488de572;


                var VisualState_9622a295a7464b14bb6122dd7e8441e3 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_9622a295a7464b14bb6122dd7e8441e3);
                VisualState_9622a295a7464b14bb6122dd7e8441e3.Name = "Pressed";
                var Storyboard_efd2fc478e004d249fbccdbdf492fd4f = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_5668705b3c3e4186b1c8c84a30b590c2 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_5668705b3c3e4186b1c8c84a30b590c2, "InnerBorder");
                var DiscreteObjectKeyFrame_2c400c9eb49c4cb98304ae54f509e814 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_2c400c9eb49c4cb98304ae54f509e814.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_2c400c9eb49c4cb98304ae54f509e814.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_5668705b3c3e4186b1c8c84a30b590c2.KeyFrames.add(DiscreteObjectKeyFrame_2c400c9eb49c4cb98304ae54f509e814);


                Storyboard_efd2fc478e004d249fbccdbdf492fd4f.Children.add(ObjectAnimationUsingKeyFrames_5668705b3c3e4186b1c8c84a30b590c2);


                VisualState_9622a295a7464b14bb6122dd7e8441e3.Storyboard = Storyboard_efd2fc478e004d249fbccdbdf492fd4f;


                var VisualState_80cdbd25b44c4636a70fe565acac8a24 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_80cdbd25b44c4636a70fe565acac8a24);
                VisualState_80cdbd25b44c4636a70fe565acac8a24.Name = "Disabled";
                var Storyboard_522196a6582d4a77b16825cecba20e3c = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_3004b5a64d3249f69d6e91f1c4e01716 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_3004b5a64d3249f69d6e91f1c4e01716, "InnerBorder");
                var DiscreteObjectKeyFrame_6ae317c6f7cb48b18fcd816fd6be95d0 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_6ae317c6f7cb48b18fcd816fd6be95d0.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_6ae317c6f7cb48b18fcd816fd6be95d0.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_3004b5a64d3249f69d6e91f1c4e01716.KeyFrames.add(DiscreteObjectKeyFrame_6ae317c6f7cb48b18fcd816fd6be95d0);


                Storyboard_522196a6582d4a77b16825cecba20e3c.Children.add(ObjectAnimationUsingKeyFrames_3004b5a64d3249f69d6e91f1c4e01716);


                VisualState_80cdbd25b44c4636a70fe565acac8a24.Storyboard = Storyboard_522196a6582d4a77b16825cecba20e3c;


                System.Array.add(VisualStateGroup_111f44cc74d94db6918e3ebaca69a21b.States, VisualState_801ef404bc434068a0dd73871d43b3b7, Object);
                System.Array.add(VisualStateGroup_111f44cc74d94db6918e3ebaca69a21b.States, VisualState_b61eebbbac7c4c5398dce45498867e7d, Object);
                System.Array.add(VisualStateGroup_111f44cc74d94db6918e3ebaca69a21b.States, VisualState_9622a295a7464b14bb6122dd7e8441e3, Object);
                System.Array.add(VisualStateGroup_111f44cc74d94db6918e3ebaca69a21b.States, VisualState_80cdbd25b44c4636a70fe565acac8a24, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_111f44cc74d94db6918e3ebaca69a21b);

                var Border_1185ae573ca0484e84736ab93830f255 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_1185ae573ca0484e84736ab93830f255);
                Border_1185ae573ca0484e84736ab93830f255.Name = "InnerBorder";
                Border_1185ae573ca0484e84736ab93830f255.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_c34cef6c2974473d86e35937a8e98504 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_c34cef6c2974473d86e35937a8e98504);
                ContentPresenter_c34cef6c2974473d86e35937a8e98504.Name = "ContentPresenter";
                var Binding_f6f9e5463c024e5585096e2982b50f4e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_f6f9e5463c024e5585096e2982b50f4e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_4a66b4ad4b2f4d7f87953e161fa96315 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_4a66b4ad4b2f4d7f87953e161fa96315.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_f6f9e5463c024e5585096e2982b50f4e.RelativeSource = RelativeSource_4a66b4ad4b2f4d7f87953e161fa96315;


                Binding_f6f9e5463c024e5585096e2982b50f4e.TemplateOwner = templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;

                var Binding_6560ae3779564cf5be9de7424f174376 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_6560ae3779564cf5be9de7424f174376.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_cc8bb69c30f04b51a564e716ab6009f4 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_cc8bb69c30f04b51a564e716ab6009f4.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_6560ae3779564cf5be9de7424f174376.RelativeSource = RelativeSource_cc8bb69c30f04b51a564e716ab6009f4;


                Binding_6560ae3779564cf5be9de7424f174376.TemplateOwner = templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;

                var Binding_bcc9189099494cea914e750bdda2e0fd = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_bcc9189099494cea914e750bdda2e0fd.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_a760a9e2b0ca48999948908527cd7ffd = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a760a9e2b0ca48999948908527cd7ffd.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_bcc9189099494cea914e750bdda2e0fd.RelativeSource = RelativeSource_a760a9e2b0ca48999948908527cd7ffd;


                Binding_bcc9189099494cea914e750bdda2e0fd.TemplateOwner = templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;

                var Binding_685df553e47944f198a24a156804a9fa = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_685df553e47944f198a24a156804a9fa.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_53bd0d96f3ac4944abef3de96961c88a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_53bd0d96f3ac4944abef3de96961c88a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_685df553e47944f198a24a156804a9fa.RelativeSource = RelativeSource_53bd0d96f3ac4944abef3de96961c88a;


                Binding_685df553e47944f198a24a156804a9fa.TemplateOwner = templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;

                var Binding_98d6fff1cabe4d27b7c8f386049043b8 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_98d6fff1cabe4d27b7c8f386049043b8.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_8cd91d6251f647789678d00f5952fa83 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8cd91d6251f647789678d00f5952fa83.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_98d6fff1cabe4d27b7c8f386049043b8.RelativeSource = RelativeSource_8cd91d6251f647789678d00f5952fa83;


                Binding_98d6fff1cabe4d27b7c8f386049043b8.TemplateOwner = templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;


                Border_1185ae573ca0484e84736ab93830f255.Child = ContentPresenter_c34cef6c2974473d86e35937a8e98504;

                var Binding_1cd28f517e3c49199803ca37e2687aca = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_1cd28f517e3c49199803ca37e2687aca.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_f8276cdd80304090a8b06b92f84ec151 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f8276cdd80304090a8b06b92f84ec151.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_1cd28f517e3c49199803ca37e2687aca.RelativeSource = RelativeSource_f8276cdd80304090a8b06b92f84ec151;


                Binding_1cd28f517e3c49199803ca37e2687aca.TemplateOwner = templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;


                Border_e2a6a62be26e4ca5a139f6fa12050441.Child = Border_1185ae573ca0484e84736ab93830f255;

                var Binding_d56a5d83f490491ea577e2acabaa99a8 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d56a5d83f490491ea577e2acabaa99a8.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_915f389ae90e4e928fd3565f200047cb = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_915f389ae90e4e928fd3565f200047cb.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d56a5d83f490491ea577e2acabaa99a8.RelativeSource = RelativeSource_915f389ae90e4e928fd3565f200047cb;


                Binding_d56a5d83f490491ea577e2acabaa99a8.TemplateOwner = templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;

                var Binding_207c9008a3c24f8491cfa42e6378255b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_207c9008a3c24f8491cfa42e6378255b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_3e65225d43f44c6d9e2f408ba9d178de = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3e65225d43f44c6d9e2f408ba9d178de.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_207c9008a3c24f8491cfa42e6378255b.RelativeSource = RelativeSource_3e65225d43f44c6d9e2f408ba9d178de;


                Binding_207c9008a3c24f8491cfa42e6378255b.TemplateOwner = templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;

                var Binding_2fce760b07ad452498e5b5d058f24253 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_2fce760b07ad452498e5b5d058f24253.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_36c9c1700a044cc59e59976f351ed64f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_36c9c1700a044cc59e59976f351ed64f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_2fce760b07ad452498e5b5d058f24253.RelativeSource = RelativeSource_36c9c1700a044cc59e59976f351ed64f;


                Binding_2fce760b07ad452498e5b5d058f24253.TemplateOwner = templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;



                ContentPresenter_c34cef6c2974473d86e35937a8e98504.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_f6f9e5463c024e5585096e2982b50f4e);
                ContentPresenter_c34cef6c2974473d86e35937a8e98504.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_6560ae3779564cf5be9de7424f174376);
                ContentPresenter_c34cef6c2974473d86e35937a8e98504.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_bcc9189099494cea914e750bdda2e0fd);
                ContentPresenter_c34cef6c2974473d86e35937a8e98504.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_685df553e47944f198a24a156804a9fa);
                ContentPresenter_c34cef6c2974473d86e35937a8e98504.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_98d6fff1cabe4d27b7c8f386049043b8);
                Border_1185ae573ca0484e84736ab93830f255.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_1cd28f517e3c49199803ca37e2687aca);
                Border_e2a6a62be26e4ca5a139f6fa12050441.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_d56a5d83f490491ea577e2acabaa99a8);
                Border_e2a6a62be26e4ca5a139f6fa12050441.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_207c9008a3c24f8491cfa42e6378255b);
                Border_e2a6a62be26e4ca5a139f6fa12050441.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_2fce760b07ad452498e5b5d058f24253);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_301e7165958c4ea5ab165f8b4140759a, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b), Bridge.fn.cacheBind(this, this.setVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b), Bridge.fn.cacheBind(this, this.getVisualStateProperty_38b87715d06a4721ad10e78e477fbc2b)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_301e7165958c4ea5ab165f8b4140759a, Border_1185ae573ca0484e84736ab93830f255);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_5668705b3c3e4186b1c8c84a30b590c2, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87), Bridge.fn.cacheBind(this, this.setVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87), Bridge.fn.cacheBind(this, this.getVisualStateProperty_9c84461d091341b8ba5d02ebc5fefc87)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_5668705b3c3e4186b1c8c84a30b590c2, Border_1185ae573ca0484e84736ab93830f255);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_3004b5a64d3249f69d6e91f1c4e01716, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc), Bridge.fn.cacheBind(this, this.setVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc), Bridge.fn.cacheBind(this, this.getVisualStateProperty_0e8575d9430743dc9f4f132d988f61cc)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_3004b5a64d3249f69d6e91f1c4e01716, Border_1185ae573ca0484e84736ab93830f255);

                templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408.TemplateContent = Border_e2a6a62be26e4ca5a139f6fa12050441;
                return templateInstance_50ccdc7685cb4d3cbbb61b40baa2d408;
            },
            accessVisualStateProperty_f0f93321eafe414d9c63689276530bd7: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_f0f93321eafe414d9c63689276530bd7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_f0f93321eafe414d9c63689276530bd7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_f0f93321eafe414d9c63689276530bd7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_f0f93321eafe414d9c63689276530bd7: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_38e8ae1222ed4232bb661a8e21aa3d4e: function (templateOwner) {
                var templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89.TemplateOwner = templateOwner;
                var Border_cfd8c745907349ff8a5cbbdc3b210008 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_cfd8c745907349ff8a5cbbdc3b210008);
                Border_cfd8c745907349ff8a5cbbdc3b210008.Name = "OuterBorder";
                Border_cfd8c745907349ff8a5cbbdc3b210008.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_28196e70052748659ea9a3ec3808cc5f = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_28196e70052748659ea9a3ec3808cc5f);
                VisualStateGroup_28196e70052748659ea9a3ec3808cc5f.Name = "CommonStates";
                var VisualState_e4ab470538bb4878ac1bd009afd2b34a = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_e4ab470538bb4878ac1bd009afd2b34a);
                VisualState_e4ab470538bb4878ac1bd009afd2b34a.Name = "Normal";

                var VisualState_058b02f85cfb42aeb6fda881a2112ed5 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_058b02f85cfb42aeb6fda881a2112ed5);
                VisualState_058b02f85cfb42aeb6fda881a2112ed5.Name = "PointerOver";
                var Storyboard_d6ed782d37824350a575be3183b444e6 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_a91eacc31b8641a3865c3aa23a9b0ac6 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_a91eacc31b8641a3865c3aa23a9b0ac6, "InnerBorder");
                var DiscreteObjectKeyFrame_08ae316b0892432bbdb6aa48ee4d0045 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_08ae316b0892432bbdb6aa48ee4d0045.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_08ae316b0892432bbdb6aa48ee4d0045.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_a91eacc31b8641a3865c3aa23a9b0ac6.KeyFrames.add(DiscreteObjectKeyFrame_08ae316b0892432bbdb6aa48ee4d0045);


                Storyboard_d6ed782d37824350a575be3183b444e6.Children.add(ObjectAnimationUsingKeyFrames_a91eacc31b8641a3865c3aa23a9b0ac6);


                VisualState_058b02f85cfb42aeb6fda881a2112ed5.Storyboard = Storyboard_d6ed782d37824350a575be3183b444e6;


                var VisualState_13492a8139124a11a1ceea7b394a0861 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_13492a8139124a11a1ceea7b394a0861);
                VisualState_13492a8139124a11a1ceea7b394a0861.Name = "Pressed";
                var Storyboard_9bf51ea144ff43ccb0f2f4d2456cad3e = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_aa5e427dcfb14bce82ebf01e9dbae122 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_aa5e427dcfb14bce82ebf01e9dbae122, "InnerBorder");
                var DiscreteObjectKeyFrame_74f38d71ea864744886076649bb4d509 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_74f38d71ea864744886076649bb4d509.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_74f38d71ea864744886076649bb4d509.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_aa5e427dcfb14bce82ebf01e9dbae122.KeyFrames.add(DiscreteObjectKeyFrame_74f38d71ea864744886076649bb4d509);


                Storyboard_9bf51ea144ff43ccb0f2f4d2456cad3e.Children.add(ObjectAnimationUsingKeyFrames_aa5e427dcfb14bce82ebf01e9dbae122);


                VisualState_13492a8139124a11a1ceea7b394a0861.Storyboard = Storyboard_9bf51ea144ff43ccb0f2f4d2456cad3e;


                var VisualState_683d4e46ff05455b95e26b48a70a4419 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_683d4e46ff05455b95e26b48a70a4419);
                VisualState_683d4e46ff05455b95e26b48a70a4419.Name = "Disabled";
                var Storyboard_e060654728da44bfadd790298efe2d27 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_b746734992454f9d9aeef8fd73a425bc = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_b746734992454f9d9aeef8fd73a425bc, "InnerBorder");
                var DiscreteObjectKeyFrame_a82a9adc98834fc790ea6ef509543574 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_a82a9adc98834fc790ea6ef509543574.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_a82a9adc98834fc790ea6ef509543574.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_b746734992454f9d9aeef8fd73a425bc.KeyFrames.add(DiscreteObjectKeyFrame_a82a9adc98834fc790ea6ef509543574);


                Storyboard_e060654728da44bfadd790298efe2d27.Children.add(ObjectAnimationUsingKeyFrames_b746734992454f9d9aeef8fd73a425bc);


                VisualState_683d4e46ff05455b95e26b48a70a4419.Storyboard = Storyboard_e060654728da44bfadd790298efe2d27;


                System.Array.add(VisualStateGroup_28196e70052748659ea9a3ec3808cc5f.States, VisualState_e4ab470538bb4878ac1bd009afd2b34a, Object);
                System.Array.add(VisualStateGroup_28196e70052748659ea9a3ec3808cc5f.States, VisualState_058b02f85cfb42aeb6fda881a2112ed5, Object);
                System.Array.add(VisualStateGroup_28196e70052748659ea9a3ec3808cc5f.States, VisualState_13492a8139124a11a1ceea7b394a0861, Object);
                System.Array.add(VisualStateGroup_28196e70052748659ea9a3ec3808cc5f.States, VisualState_683d4e46ff05455b95e26b48a70a4419, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_28196e70052748659ea9a3ec3808cc5f);

                var Border_f79e65533cba43989eadc5e3cd3a7b91 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_f79e65533cba43989eadc5e3cd3a7b91);
                Border_f79e65533cba43989eadc5e3cd3a7b91.Name = "InnerBorder";
                Border_f79e65533cba43989eadc5e3cd3a7b91.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_09de2da047e740f6b04ef6542a817b9b = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_09de2da047e740f6b04ef6542a817b9b);
                ContentPresenter_09de2da047e740f6b04ef6542a817b9b.Name = "ContentPresenter";
                var Binding_73d1a1b66d2d40cda7a279a1cda0da52 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_73d1a1b66d2d40cda7a279a1cda0da52.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_b942bfa2c77441d4a68dc02a77784e67 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_b942bfa2c77441d4a68dc02a77784e67.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_73d1a1b66d2d40cda7a279a1cda0da52.RelativeSource = RelativeSource_b942bfa2c77441d4a68dc02a77784e67;


                Binding_73d1a1b66d2d40cda7a279a1cda0da52.TemplateOwner = templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;

                var Binding_018dee467d08405f878de23cf0791416 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_018dee467d08405f878de23cf0791416.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_caceb53e34fd43e1aebf958e387cc641 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_caceb53e34fd43e1aebf958e387cc641.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_018dee467d08405f878de23cf0791416.RelativeSource = RelativeSource_caceb53e34fd43e1aebf958e387cc641;


                Binding_018dee467d08405f878de23cf0791416.TemplateOwner = templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;

                var Binding_e6f16542e0244e74bb888c6338744ac0 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e6f16542e0244e74bb888c6338744ac0.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_5a8506c8689c4c8291cb0fde18c4ed96 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_5a8506c8689c4c8291cb0fde18c4ed96.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e6f16542e0244e74bb888c6338744ac0.RelativeSource = RelativeSource_5a8506c8689c4c8291cb0fde18c4ed96;


                Binding_e6f16542e0244e74bb888c6338744ac0.TemplateOwner = templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;

                var Binding_03c119ba4f29418485d2e3b04a406ed9 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_03c119ba4f29418485d2e3b04a406ed9.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_9d21fc1501a84e359b691b9f34103300 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9d21fc1501a84e359b691b9f34103300.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_03c119ba4f29418485d2e3b04a406ed9.RelativeSource = RelativeSource_9d21fc1501a84e359b691b9f34103300;


                Binding_03c119ba4f29418485d2e3b04a406ed9.TemplateOwner = templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;

                var Binding_70995aa79da14c0ca5aa26710ce798fe = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_70995aa79da14c0ca5aa26710ce798fe.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_e5120db600e940d38b7183eb12ed1438 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e5120db600e940d38b7183eb12ed1438.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_70995aa79da14c0ca5aa26710ce798fe.RelativeSource = RelativeSource_e5120db600e940d38b7183eb12ed1438;


                Binding_70995aa79da14c0ca5aa26710ce798fe.TemplateOwner = templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;


                Border_f79e65533cba43989eadc5e3cd3a7b91.Child = ContentPresenter_09de2da047e740f6b04ef6542a817b9b;

                var Binding_e3fd5582e30c42f28030fcac73330d81 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e3fd5582e30c42f28030fcac73330d81.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_0bcd511d17964e299dee5507c7c13d62 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_0bcd511d17964e299dee5507c7c13d62.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e3fd5582e30c42f28030fcac73330d81.RelativeSource = RelativeSource_0bcd511d17964e299dee5507c7c13d62;


                Binding_e3fd5582e30c42f28030fcac73330d81.TemplateOwner = templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;


                Border_cfd8c745907349ff8a5cbbdc3b210008.Child = Border_f79e65533cba43989eadc5e3cd3a7b91;

                var Binding_ba1766d5f11b44ec988e0fe5e74d0977 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ba1766d5f11b44ec988e0fe5e74d0977.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_e80e4639eb794214ba0fb4514b508ca9 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e80e4639eb794214ba0fb4514b508ca9.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ba1766d5f11b44ec988e0fe5e74d0977.RelativeSource = RelativeSource_e80e4639eb794214ba0fb4514b508ca9;


                Binding_ba1766d5f11b44ec988e0fe5e74d0977.TemplateOwner = templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;

                var Binding_4439e6f019a64c01a82ebeb45e38698d = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4439e6f019a64c01a82ebeb45e38698d.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_97711477ba4947128f688661e85e6ae2 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_97711477ba4947128f688661e85e6ae2.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4439e6f019a64c01a82ebeb45e38698d.RelativeSource = RelativeSource_97711477ba4947128f688661e85e6ae2;


                Binding_4439e6f019a64c01a82ebeb45e38698d.TemplateOwner = templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;

                var Binding_f0c75b22644245ec940a22d6f912b842 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_f0c75b22644245ec940a22d6f912b842.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_92c2e01540644987b7f6ef01ef2c1853 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_92c2e01540644987b7f6ef01ef2c1853.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_f0c75b22644245ec940a22d6f912b842.RelativeSource = RelativeSource_92c2e01540644987b7f6ef01ef2c1853;


                Binding_f0c75b22644245ec940a22d6f912b842.TemplateOwner = templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;



                ContentPresenter_09de2da047e740f6b04ef6542a817b9b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_73d1a1b66d2d40cda7a279a1cda0da52);
                ContentPresenter_09de2da047e740f6b04ef6542a817b9b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_018dee467d08405f878de23cf0791416);
                ContentPresenter_09de2da047e740f6b04ef6542a817b9b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_e6f16542e0244e74bb888c6338744ac0);
                ContentPresenter_09de2da047e740f6b04ef6542a817b9b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_03c119ba4f29418485d2e3b04a406ed9);
                ContentPresenter_09de2da047e740f6b04ef6542a817b9b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_70995aa79da14c0ca5aa26710ce798fe);
                Border_f79e65533cba43989eadc5e3cd3a7b91.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_e3fd5582e30c42f28030fcac73330d81);
                Border_cfd8c745907349ff8a5cbbdc3b210008.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_ba1766d5f11b44ec988e0fe5e74d0977);
                Border_cfd8c745907349ff8a5cbbdc3b210008.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_4439e6f019a64c01a82ebeb45e38698d);
                Border_cfd8c745907349ff8a5cbbdc3b210008.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_f0c75b22644245ec940a22d6f912b842);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_a91eacc31b8641a3865c3aa23a9b0ac6, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_f0f93321eafe414d9c63689276530bd7), Bridge.fn.cacheBind(this, this.setVisualStateProperty_f0f93321eafe414d9c63689276530bd7), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_f0f93321eafe414d9c63689276530bd7), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_f0f93321eafe414d9c63689276530bd7), Bridge.fn.cacheBind(this, this.getVisualStateProperty_f0f93321eafe414d9c63689276530bd7)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_a91eacc31b8641a3865c3aa23a9b0ac6, Border_f79e65533cba43989eadc5e3cd3a7b91);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_aa5e427dcfb14bce82ebf01e9dbae122, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0), Bridge.fn.cacheBind(this, this.setVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0), Bridge.fn.cacheBind(this, this.getVisualStateProperty_453310758ae04b8e9c9ce07ed67a3dc0)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_aa5e427dcfb14bce82ebf01e9dbae122, Border_f79e65533cba43989eadc5e3cd3a7b91);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_b746734992454f9d9aeef8fd73a425bc, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f), Bridge.fn.cacheBind(this, this.setVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f), Bridge.fn.cacheBind(this, this.getVisualStateProperty_3b1bc0b88eec4538bec033e6b2d8082f)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_b746734992454f9d9aeef8fd73a425bc, Border_f79e65533cba43989eadc5e3cd3a7b91);

                templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89.TemplateContent = Border_cfd8c745907349ff8a5cbbdc3b210008;
                return templateInstance_04c83d3e4c7a4b89ac5a12f5d5577e89;
            },
            accessVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_58d60140f17f4ee3b93969b54e5624a6: function (templateOwner) {
                var templateInstance_a866f5203bb24b6cbaa463e88b11befa = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_a866f5203bb24b6cbaa463e88b11befa.TemplateOwner = templateOwner;
                var Border_553b2669230f431bbe06fd7df018eeeb = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_553b2669230f431bbe06fd7df018eeeb);
                Border_553b2669230f431bbe06fd7df018eeeb.Name = "OuterBorder";
                Border_553b2669230f431bbe06fd7df018eeeb.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_9c5959b7826242a58f5e86cf7b6ff682 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_9c5959b7826242a58f5e86cf7b6ff682);
                VisualStateGroup_9c5959b7826242a58f5e86cf7b6ff682.Name = "CommonStates";
                var VisualState_43800ae2aa2741b8b0eda871971d40b2 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_43800ae2aa2741b8b0eda871971d40b2);
                VisualState_43800ae2aa2741b8b0eda871971d40b2.Name = "Normal";

                var VisualState_2f61490f50734ebbbbe1838c78cdaca2 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_2f61490f50734ebbbbe1838c78cdaca2);
                VisualState_2f61490f50734ebbbbe1838c78cdaca2.Name = "PointerOver";
                var Storyboard_86016d96cf5944738399267fbdd30207 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_91b6f37fc11247fbbbf5eadf86a569ab = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_91b6f37fc11247fbbbf5eadf86a569ab, "InnerBorder");
                var DiscreteObjectKeyFrame_15a89a18d20e472eb4e44836249cd42c = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_15a89a18d20e472eb4e44836249cd42c.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_15a89a18d20e472eb4e44836249cd42c.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_91b6f37fc11247fbbbf5eadf86a569ab.KeyFrames.add(DiscreteObjectKeyFrame_15a89a18d20e472eb4e44836249cd42c);


                Storyboard_86016d96cf5944738399267fbdd30207.Children.add(ObjectAnimationUsingKeyFrames_91b6f37fc11247fbbbf5eadf86a569ab);


                VisualState_2f61490f50734ebbbbe1838c78cdaca2.Storyboard = Storyboard_86016d96cf5944738399267fbdd30207;


                var VisualState_fa5807dec6404ca3887d17fcc900d63f = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_fa5807dec6404ca3887d17fcc900d63f);
                VisualState_fa5807dec6404ca3887d17fcc900d63f.Name = "Pressed";
                var Storyboard_fa09e3e9b31f4cf985f77ece706af078 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_2ebc9b4375e74999a3de9df76b31d5dd = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_2ebc9b4375e74999a3de9df76b31d5dd, "InnerBorder");
                var DiscreteObjectKeyFrame_a288071371d648dca001989a6b145497 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_a288071371d648dca001989a6b145497.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_a288071371d648dca001989a6b145497.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_2ebc9b4375e74999a3de9df76b31d5dd.KeyFrames.add(DiscreteObjectKeyFrame_a288071371d648dca001989a6b145497);


                Storyboard_fa09e3e9b31f4cf985f77ece706af078.Children.add(ObjectAnimationUsingKeyFrames_2ebc9b4375e74999a3de9df76b31d5dd);


                VisualState_fa5807dec6404ca3887d17fcc900d63f.Storyboard = Storyboard_fa09e3e9b31f4cf985f77ece706af078;


                var VisualState_8420aa3836a54d229529734a651f4c49 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_8420aa3836a54d229529734a651f4c49);
                VisualState_8420aa3836a54d229529734a651f4c49.Name = "Disabled";
                var Storyboard_72240b9f0fb844f2a4d5e28c9ef7d4a7 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_cfa18f70291d4eca900315d6e61589bd = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_cfa18f70291d4eca900315d6e61589bd, "InnerBorder");
                var DiscreteObjectKeyFrame_0367fa27b6dc4eb4806f43436b382a94 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_0367fa27b6dc4eb4806f43436b382a94.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_0367fa27b6dc4eb4806f43436b382a94.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_cfa18f70291d4eca900315d6e61589bd.KeyFrames.add(DiscreteObjectKeyFrame_0367fa27b6dc4eb4806f43436b382a94);


                Storyboard_72240b9f0fb844f2a4d5e28c9ef7d4a7.Children.add(ObjectAnimationUsingKeyFrames_cfa18f70291d4eca900315d6e61589bd);


                VisualState_8420aa3836a54d229529734a651f4c49.Storyboard = Storyboard_72240b9f0fb844f2a4d5e28c9ef7d4a7;


                System.Array.add(VisualStateGroup_9c5959b7826242a58f5e86cf7b6ff682.States, VisualState_43800ae2aa2741b8b0eda871971d40b2, Object);
                System.Array.add(VisualStateGroup_9c5959b7826242a58f5e86cf7b6ff682.States, VisualState_2f61490f50734ebbbbe1838c78cdaca2, Object);
                System.Array.add(VisualStateGroup_9c5959b7826242a58f5e86cf7b6ff682.States, VisualState_fa5807dec6404ca3887d17fcc900d63f, Object);
                System.Array.add(VisualStateGroup_9c5959b7826242a58f5e86cf7b6ff682.States, VisualState_8420aa3836a54d229529734a651f4c49, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_9c5959b7826242a58f5e86cf7b6ff682);

                var Border_745ad9987d9b42128b1a615139a2ce48 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_745ad9987d9b42128b1a615139a2ce48);
                Border_745ad9987d9b42128b1a615139a2ce48.Name = "InnerBorder";
                Border_745ad9987d9b42128b1a615139a2ce48.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_2b1adf476dcd466ea5deffdc3e4568bb = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_2b1adf476dcd466ea5deffdc3e4568bb);
                ContentPresenter_2b1adf476dcd466ea5deffdc3e4568bb.Name = "ContentPresenter";
                var Binding_cea7924b0d8c4a87854388b642e8ac76 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_cea7924b0d8c4a87854388b642e8ac76.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_7da9d6511c7e44baa32456d2ed4d55a1 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_7da9d6511c7e44baa32456d2ed4d55a1.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_cea7924b0d8c4a87854388b642e8ac76.RelativeSource = RelativeSource_7da9d6511c7e44baa32456d2ed4d55a1;


                Binding_cea7924b0d8c4a87854388b642e8ac76.TemplateOwner = templateInstance_a866f5203bb24b6cbaa463e88b11befa;

                var Binding_98bf163dbd0c4c0eaf8403268909f41a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_98bf163dbd0c4c0eaf8403268909f41a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_4fcb3be3737042d388f9b4fddbee8099 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_4fcb3be3737042d388f9b4fddbee8099.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_98bf163dbd0c4c0eaf8403268909f41a.RelativeSource = RelativeSource_4fcb3be3737042d388f9b4fddbee8099;


                Binding_98bf163dbd0c4c0eaf8403268909f41a.TemplateOwner = templateInstance_a866f5203bb24b6cbaa463e88b11befa;

                var Binding_d0d3431c1310491ba2ec62689824d2c2 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d0d3431c1310491ba2ec62689824d2c2.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_1ded7450007a42ba926f72619754ab81 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_1ded7450007a42ba926f72619754ab81.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d0d3431c1310491ba2ec62689824d2c2.RelativeSource = RelativeSource_1ded7450007a42ba926f72619754ab81;


                Binding_d0d3431c1310491ba2ec62689824d2c2.TemplateOwner = templateInstance_a866f5203bb24b6cbaa463e88b11befa;

                var Binding_82a8e44dbc0242b583c7b6bfc10e5a8b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_82a8e44dbc0242b583c7b6bfc10e5a8b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_c17543f629774fe5b1c4cb3267bdddb2 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c17543f629774fe5b1c4cb3267bdddb2.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_82a8e44dbc0242b583c7b6bfc10e5a8b.RelativeSource = RelativeSource_c17543f629774fe5b1c4cb3267bdddb2;


                Binding_82a8e44dbc0242b583c7b6bfc10e5a8b.TemplateOwner = templateInstance_a866f5203bb24b6cbaa463e88b11befa;

                var Binding_c0fa56fb862148bd81434a029c67162a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c0fa56fb862148bd81434a029c67162a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_b9116fcd44b945cf83f4ecadc47de70d = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_b9116fcd44b945cf83f4ecadc47de70d.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c0fa56fb862148bd81434a029c67162a.RelativeSource = RelativeSource_b9116fcd44b945cf83f4ecadc47de70d;


                Binding_c0fa56fb862148bd81434a029c67162a.TemplateOwner = templateInstance_a866f5203bb24b6cbaa463e88b11befa;


                Border_745ad9987d9b42128b1a615139a2ce48.Child = ContentPresenter_2b1adf476dcd466ea5deffdc3e4568bb;

                var Binding_80846f05a0f44662962d8ff5ace6bf28 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_80846f05a0f44662962d8ff5ace6bf28.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_7277c0d876c440eabd1c67234debdcc2 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_7277c0d876c440eabd1c67234debdcc2.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_80846f05a0f44662962d8ff5ace6bf28.RelativeSource = RelativeSource_7277c0d876c440eabd1c67234debdcc2;


                Binding_80846f05a0f44662962d8ff5ace6bf28.TemplateOwner = templateInstance_a866f5203bb24b6cbaa463e88b11befa;


                Border_553b2669230f431bbe06fd7df018eeeb.Child = Border_745ad9987d9b42128b1a615139a2ce48;

                var Binding_cb3609db59cf4d3aa8003156251b666c = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_cb3609db59cf4d3aa8003156251b666c.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_1f6c1c794f564baa926a6894f68a9d9a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_1f6c1c794f564baa926a6894f68a9d9a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_cb3609db59cf4d3aa8003156251b666c.RelativeSource = RelativeSource_1f6c1c794f564baa926a6894f68a9d9a;


                Binding_cb3609db59cf4d3aa8003156251b666c.TemplateOwner = templateInstance_a866f5203bb24b6cbaa463e88b11befa;

                var Binding_85790bda174f4a3699ef9373e066388e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_85790bda174f4a3699ef9373e066388e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_6e100fff7d3648bbb2700fed5e4db4a0 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_6e100fff7d3648bbb2700fed5e4db4a0.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_85790bda174f4a3699ef9373e066388e.RelativeSource = RelativeSource_6e100fff7d3648bbb2700fed5e4db4a0;


                Binding_85790bda174f4a3699ef9373e066388e.TemplateOwner = templateInstance_a866f5203bb24b6cbaa463e88b11befa;

                var Binding_c80ed2e035184bfba19c709ad32ce073 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c80ed2e035184bfba19c709ad32ce073.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_f847ac8f56cc4403acb16d386c438756 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f847ac8f56cc4403acb16d386c438756.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c80ed2e035184bfba19c709ad32ce073.RelativeSource = RelativeSource_f847ac8f56cc4403acb16d386c438756;


                Binding_c80ed2e035184bfba19c709ad32ce073.TemplateOwner = templateInstance_a866f5203bb24b6cbaa463e88b11befa;



                ContentPresenter_2b1adf476dcd466ea5deffdc3e4568bb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_cea7924b0d8c4a87854388b642e8ac76);
                ContentPresenter_2b1adf476dcd466ea5deffdc3e4568bb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_98bf163dbd0c4c0eaf8403268909f41a);
                ContentPresenter_2b1adf476dcd466ea5deffdc3e4568bb.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_d0d3431c1310491ba2ec62689824d2c2);
                ContentPresenter_2b1adf476dcd466ea5deffdc3e4568bb.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_82a8e44dbc0242b583c7b6bfc10e5a8b);
                ContentPresenter_2b1adf476dcd466ea5deffdc3e4568bb.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_c0fa56fb862148bd81434a029c67162a);
                Border_745ad9987d9b42128b1a615139a2ce48.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_80846f05a0f44662962d8ff5ace6bf28);
                Border_553b2669230f431bbe06fd7df018eeeb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_cb3609db59cf4d3aa8003156251b666c);
                Border_553b2669230f431bbe06fd7df018eeeb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_85790bda174f4a3699ef9373e066388e);
                Border_553b2669230f431bbe06fd7df018eeeb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_c80ed2e035184bfba19c709ad32ce073);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_91b6f37fc11247fbbbf5eadf86a569ab, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0), Bridge.fn.cacheBind(this, this.setVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0), Bridge.fn.cacheBind(this, this.getVisualStateProperty_b1d33a3802fc45cd8229fba42122f4a0)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_91b6f37fc11247fbbbf5eadf86a569ab, Border_745ad9987d9b42128b1a615139a2ce48);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_2ebc9b4375e74999a3de9df76b31d5dd, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27), Bridge.fn.cacheBind(this, this.setVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27), Bridge.fn.cacheBind(this, this.getVisualStateProperty_2d7f331e31af4dc0b5420d03d928da27)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_2ebc9b4375e74999a3de9df76b31d5dd, Border_745ad9987d9b42128b1a615139a2ce48);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_cfa18f70291d4eca900315d6e61589bd, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af), Bridge.fn.cacheBind(this, this.setVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af), Bridge.fn.cacheBind(this, this.getVisualStateProperty_0f3327e08859421b9ecbbdd95b30e4af)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_cfa18f70291d4eca900315d6e61589bd, Border_745ad9987d9b42128b1a615139a2ce48);

                templateInstance_a866f5203bb24b6cbaa463e88b11befa.TemplateContent = Border_553b2669230f431bbe06fd7df018eeeb;
                return templateInstance_a866f5203bb24b6cbaa463e88b11befa;
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



                var Grid_9757de2c5d644c78a43fa4717d1e02d1 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutRoot", Grid_9757de2c5d644c78a43fa4717d1e02d1);
                Grid_9757de2c5d644c78a43fa4717d1e02d1.Name = "LayoutRoot";
                Grid_9757de2c5d644c78a43fa4717d1e02d1.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                var Grid_a97afc7f379d46f68d64007ad22d4174 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_39b010496edb41dbbbb93225921f80a4 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_39b010496edb41dbbbb93225921f80a4.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_39b010496edb41dbbbb93225921f80a4.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_a355c0e554a14732a37841eae27345ea = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_a355c0e554a14732a37841eae27345ea.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_a355c0e554a14732a37841eae27345ea.Offset = 0.0;

                var GradientStop_a19e99e760244905bcb3a26d3765b1bf = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_a19e99e760244905bcb3a26d3765b1bf.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_a19e99e760244905bcb3a26d3765b1bf.Offset = 1.0;

                LinearGradientBrush_39b010496edb41dbbbb93225921f80a4.GradientStops.add(GradientStop_a355c0e554a14732a37841eae27345ea);
                LinearGradientBrush_39b010496edb41dbbbb93225921f80a4.GradientStops.add(GradientStop_a19e99e760244905bcb3a26d3765b1bf);


                Grid_a97afc7f379d46f68d64007ad22d4174.Background = LinearGradientBrush_39b010496edb41dbbbb93225921f80a4;

                var Border_9715b614052840fd8feba3d5f40057c0 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_9715b614052840fd8feba3d5f40057c0);
                Border_9715b614052840fd8feba3d5f40057c0.Name = "element";
                Border_9715b614052840fd8feba3d5f40057c0.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Border_9715b614052840fd8feba3d5f40057c0.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 139, $t));
                Border_9715b614052840fd8feba3d5f40057c0.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_9715b614052840fd8feba3d5f40057c0.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_49687de5377545d7bd2b5ccde1049746 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_49687de5377545d7bd2b5ccde1049746.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_49687de5377545d7bd2b5ccde1049746.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_c431bbe6a65e4402a61d88a5f2a80def = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_c431bbe6a65e4402a61d88a5f2a80def.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_c431bbe6a65e4402a61d88a5f2a80def.Offset = 0.0;

                var GradientStop_bf4b5857582644c487a781359ef741c1 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_bf4b5857582644c487a781359ef741c1.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_bf4b5857582644c487a781359ef741c1.Offset = 0.5896;

                var GradientStop_96442d3b64694065aebac946a703938c = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_96442d3b64694065aebac946a703938c.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 246, $t.G = 246, $t.B = 246, $t);
                GradientStop_96442d3b64694065aebac946a703938c.Offset = 1.0;

                LinearGradientBrush_49687de5377545d7bd2b5ccde1049746.GradientStops.add(GradientStop_c431bbe6a65e4402a61d88a5f2a80def);
                LinearGradientBrush_49687de5377545d7bd2b5ccde1049746.GradientStops.add(GradientStop_bf4b5857582644c487a781359ef741c1);
                LinearGradientBrush_49687de5377545d7bd2b5ccde1049746.GradientStops.add(GradientStop_96442d3b64694065aebac946a703938c);


                Border_9715b614052840fd8feba3d5f40057c0.Background = LinearGradientBrush_49687de5377545d7bd2b5ccde1049746;

                var TransformGroup_482d84230fcb462bb07c84f7b33a36bf = new Bridge.global.Windows.UI.Xaml.Media.TransformGroup();
                var ScaleTransform_ed687122f0d3432d808358b531874a6b = new Bridge.global.Windows.UI.Xaml.Media.ScaleTransform();

                var RotateTransform_50c2bc548b9a4271af7fc1da6c8fc874 = new Bridge.global.Windows.UI.Xaml.Media.RotateTransform();

                TransformGroup_482d84230fcb462bb07c84f7b33a36bf.Children.add(ScaleTransform_ed687122f0d3432d808358b531874a6b);
                TransformGroup_482d84230fcb462bb07c84f7b33a36bf.Children.add(RotateTransform_50c2bc548b9a4271af7fc1da6c8fc874);


                Border_9715b614052840fd8feba3d5f40057c0.RenderTransform = TransformGroup_482d84230fcb462bb07c84f7b33a36bf;

                var Grid_21852d386ef847eab868df356f08a4c2 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var ColumnDefinition_ae62243c0c524852b944b4b384291b25 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_02e0fd9be4364bc69a1a3d916a48b383 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_6e3daf35e7de4390a02bcbf3798a5664 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_21852d386ef847eab868df356f08a4c2.ColumnDefinitions.add(ColumnDefinition_ae62243c0c524852b944b4b384291b25);
                Grid_21852d386ef847eab868df356f08a4c2.ColumnDefinitions.add(ColumnDefinition_02e0fd9be4364bc69a1a3d916a48b383);
                Grid_21852d386ef847eab868df356f08a4c2.ColumnDefinitions.add(ColumnDefinition_6e3daf35e7de4390a02bcbf3798a5664);

                var RowDefinition_28d56dc4ae7143699c65da26376c4539 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_28d56dc4ae7143699c65da26376c4539.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_d219d5b26fe74499a7be69f388eb05f2 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_d219d5b26fe74499a7be69f388eb05f2.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_e613ac6819884221ae29a524fbf9a1c6 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_e613ac6819884221ae29a524fbf9a1c6.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_21852d386ef847eab868df356f08a4c2.RowDefinitions.add(RowDefinition_28d56dc4ae7143699c65da26376c4539);
                Grid_21852d386ef847eab868df356f08a4c2.RowDefinitions.add(RowDefinition_d219d5b26fe74499a7be69f388eb05f2);
                Grid_21852d386ef847eab868df356f08a4c2.RowDefinitions.add(RowDefinition_e613ac6819884221ae29a524fbf9a1c6);

                var Image_71543d50e463498aaed57989b621321a = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                Image_71543d50e463498aaed57989b621321a.Source = Bridge.cast(Bridge.global.DotNetForHtml5.Core.TypeFromStringConverters.ConvertFromInvariantString(Bridge.global.Windows.UI.Xaml.Media.ImageSource, "/CShtml;component/img/HomeImage.jpg"), Windows.UI.Xaml.Media.ImageSource);
                Image_71543d50e463498aaed57989b621321a.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Uniform;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Image_71543d50e463498aaed57989b621321a, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Image_71543d50e463498aaed57989b621321a, 3);

                Grid_21852d386ef847eab868df356f08a4c2.Children.add(Image_71543d50e463498aaed57989b621321a);


                Border_9715b614052840fd8feba3d5f40057c0.Child = Grid_21852d386ef847eab868df356f08a4c2;


                var Button_28ab93571fbf42d190988b9260e0b492 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnBegin", Button_28ab93571fbf42d190988b9260e0b492);
                Button_28ab93571fbf42d190988b9260e0b492.Name = "btnBegin";
                Button_28ab93571fbf42d190988b9260e0b492.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_28ab93571fbf42d190988b9260e0b492.Content = "\u041d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443";
                Button_28ab93571fbf42d190988b9260e0b492.FontSize = 25.0;
                Button_28ab93571fbf42d190988b9260e0b492.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 224, $t.G = 216, $t.B = 222, $t));
                Button_28ab93571fbf42d190988b9260e0b492.Width = 200.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_28ab93571fbf42d190988b9260e0b492, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_28ab93571fbf42d190988b9260e0b492, 1);
                Button_28ab93571fbf42d190988b9260e0b492.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_28ab93571fbf42d190988b9260e0b492.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_28ab93571fbf42d190988b9260e0b492.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(0, 0, 0, 50);
                Button_28ab93571fbf42d190988b9260e0b492.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                var ControlTemplate_772ebbed06014074829957e3188f3f1f = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_772ebbed06014074829957e3188f3f1f.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_772ebbed06014074829957e3188f3f1f.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_772ebbed06014074829957e3188f3f1f));

                Button_28ab93571fbf42d190988b9260e0b492.Template = ControlTemplate_772ebbed06014074829957e3188f3f1f;


                Grid_a97afc7f379d46f68d64007ad22d4174.Children.add(Border_9715b614052840fd8feba3d5f40057c0);
                Grid_a97afc7f379d46f68d64007ad22d4174.Children.add(Button_28ab93571fbf42d190988b9260e0b492);


                Grid_9757de2c5d644c78a43fa4717d1e02d1.Children.add(Grid_a97afc7f379d46f68d64007ad22d4174);


                this.Content = Grid_9757de2c5d644c78a43fa4717d1e02d1;



                this.element = Border_9715b614052840fd8feba3d5f40057c0;
                this.btnBegin = Button_28ab93571fbf42d190988b9260e0b492;
                this.LayoutRoot = Grid_9757de2c5d644c78a43fa4717d1e02d1;



            },
            accessVisualStateProperty_0bb53bf6cd59433995c319749ce4da18: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_0bb53bf6cd59433995c319749ce4da18: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_0bb53bf6cd59433995c319749ce4da18: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_0bb53bf6cd59433995c319749ce4da18: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_0bb53bf6cd59433995c319749ce4da18: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_772ebbed06014074829957e3188f3f1f: function (templateOwner) {
                var templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35.TemplateOwner = templateOwner;
                var Border_01bb6627d18c46fba3b5073eadf66bbd = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_01bb6627d18c46fba3b5073eadf66bbd);
                Border_01bb6627d18c46fba3b5073eadf66bbd.Name = "OuterBorder";
                Border_01bb6627d18c46fba3b5073eadf66bbd.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_f729c802446948ad842c6a45dcf8e82d = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_f729c802446948ad842c6a45dcf8e82d);
                VisualStateGroup_f729c802446948ad842c6a45dcf8e82d.Name = "CommonStates";
                var VisualState_d4869185b9d6475c8d6924d4cabab218 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_d4869185b9d6475c8d6924d4cabab218);
                VisualState_d4869185b9d6475c8d6924d4cabab218.Name = "Normal";

                var VisualState_049fb79a5a2c41978b5a4ffd03fada84 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_049fb79a5a2c41978b5a4ffd03fada84);
                VisualState_049fb79a5a2c41978b5a4ffd03fada84.Name = "PointerOver";
                var Storyboard_4946735d43564fbfa210fa0c8380864f = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_eaad9b236fb7422d9aa00885de45a294 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_eaad9b236fb7422d9aa00885de45a294, "InnerBorder");
                var DiscreteObjectKeyFrame_681570274f614e8cb101ea571313e3f0 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_681570274f614e8cb101ea571313e3f0.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_681570274f614e8cb101ea571313e3f0.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_eaad9b236fb7422d9aa00885de45a294.KeyFrames.add(DiscreteObjectKeyFrame_681570274f614e8cb101ea571313e3f0);


                Storyboard_4946735d43564fbfa210fa0c8380864f.Children.add(ObjectAnimationUsingKeyFrames_eaad9b236fb7422d9aa00885de45a294);


                VisualState_049fb79a5a2c41978b5a4ffd03fada84.Storyboard = Storyboard_4946735d43564fbfa210fa0c8380864f;


                var VisualState_119c4b6ddd444d778bdb5ed9d1df1888 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_119c4b6ddd444d778bdb5ed9d1df1888);
                VisualState_119c4b6ddd444d778bdb5ed9d1df1888.Name = "Pressed";
                var Storyboard_f9d8c18acc444004a5ccfb0d30e45721 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_07f6f12ad81b4d799de2d49db59e9857 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_07f6f12ad81b4d799de2d49db59e9857, "InnerBorder");
                var DiscreteObjectKeyFrame_66f1f7787cf840418decdeb8b02012e2 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_66f1f7787cf840418decdeb8b02012e2.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_66f1f7787cf840418decdeb8b02012e2.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_07f6f12ad81b4d799de2d49db59e9857.KeyFrames.add(DiscreteObjectKeyFrame_66f1f7787cf840418decdeb8b02012e2);


                Storyboard_f9d8c18acc444004a5ccfb0d30e45721.Children.add(ObjectAnimationUsingKeyFrames_07f6f12ad81b4d799de2d49db59e9857);


                VisualState_119c4b6ddd444d778bdb5ed9d1df1888.Storyboard = Storyboard_f9d8c18acc444004a5ccfb0d30e45721;


                var VisualState_78d7a904dbdd49c8878ff44b8ed86ccc = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_78d7a904dbdd49c8878ff44b8ed86ccc);
                VisualState_78d7a904dbdd49c8878ff44b8ed86ccc.Name = "Disabled";
                var Storyboard_d5726792205144c4ae70c007fa0e47c5 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_1968ec4bca6748f29bcfa161216d3953 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_1968ec4bca6748f29bcfa161216d3953, "InnerBorder");
                var DiscreteObjectKeyFrame_0b502396df53484f8dac65b08a880480 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_0b502396df53484f8dac65b08a880480.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_0b502396df53484f8dac65b08a880480.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_1968ec4bca6748f29bcfa161216d3953.KeyFrames.add(DiscreteObjectKeyFrame_0b502396df53484f8dac65b08a880480);


                Storyboard_d5726792205144c4ae70c007fa0e47c5.Children.add(ObjectAnimationUsingKeyFrames_1968ec4bca6748f29bcfa161216d3953);


                VisualState_78d7a904dbdd49c8878ff44b8ed86ccc.Storyboard = Storyboard_d5726792205144c4ae70c007fa0e47c5;


                System.Array.add(VisualStateGroup_f729c802446948ad842c6a45dcf8e82d.States, VisualState_d4869185b9d6475c8d6924d4cabab218, Object);
                System.Array.add(VisualStateGroup_f729c802446948ad842c6a45dcf8e82d.States, VisualState_049fb79a5a2c41978b5a4ffd03fada84, Object);
                System.Array.add(VisualStateGroup_f729c802446948ad842c6a45dcf8e82d.States, VisualState_119c4b6ddd444d778bdb5ed9d1df1888, Object);
                System.Array.add(VisualStateGroup_f729c802446948ad842c6a45dcf8e82d.States, VisualState_78d7a904dbdd49c8878ff44b8ed86ccc, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_f729c802446948ad842c6a45dcf8e82d);

                var Border_f7c62d8fae5e49d9901c7501f8291858 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_f7c62d8fae5e49d9901c7501f8291858);
                Border_f7c62d8fae5e49d9901c7501f8291858.Name = "InnerBorder";
                Border_f7c62d8fae5e49d9901c7501f8291858.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_ff3dc503d0e3439998681d22f1128b4d = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_ff3dc503d0e3439998681d22f1128b4d);
                ContentPresenter_ff3dc503d0e3439998681d22f1128b4d.Name = "ContentPresenter";
                var Binding_80136596cb174135b704b621b384b2af = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_80136596cb174135b704b621b384b2af.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_c6fa5515b1334e8d908a5ead42d62edb = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c6fa5515b1334e8d908a5ead42d62edb.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_80136596cb174135b704b621b384b2af.RelativeSource = RelativeSource_c6fa5515b1334e8d908a5ead42d62edb;


                Binding_80136596cb174135b704b621b384b2af.TemplateOwner = templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;

                var Binding_5323e741ed14432790ac71ae1e16540f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5323e741ed14432790ac71ae1e16540f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_9bc4f3567b974cb79f6511971aa94f6b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9bc4f3567b974cb79f6511971aa94f6b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5323e741ed14432790ac71ae1e16540f.RelativeSource = RelativeSource_9bc4f3567b974cb79f6511971aa94f6b;


                Binding_5323e741ed14432790ac71ae1e16540f.TemplateOwner = templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;

                var Binding_dbce588fa1664996a459806c86114dce = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_dbce588fa1664996a459806c86114dce.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_bf87dd92288e43369bf398910d0b4409 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_bf87dd92288e43369bf398910d0b4409.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_dbce588fa1664996a459806c86114dce.RelativeSource = RelativeSource_bf87dd92288e43369bf398910d0b4409;


                Binding_dbce588fa1664996a459806c86114dce.TemplateOwner = templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;

                var Binding_a1565a2645984bd480f3bd51ca875602 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_a1565a2645984bd480f3bd51ca875602.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_61fe475f01fb434a9f750315f7d50554 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_61fe475f01fb434a9f750315f7d50554.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_a1565a2645984bd480f3bd51ca875602.RelativeSource = RelativeSource_61fe475f01fb434a9f750315f7d50554;


                Binding_a1565a2645984bd480f3bd51ca875602.TemplateOwner = templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;

                var Binding_9bc661354aee4052bd0ec3847e909f6e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_9bc661354aee4052bd0ec3847e909f6e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_5f9eb3f1e61545dfacf557f33cbb1f4e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_5f9eb3f1e61545dfacf557f33cbb1f4e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_9bc661354aee4052bd0ec3847e909f6e.RelativeSource = RelativeSource_5f9eb3f1e61545dfacf557f33cbb1f4e;


                Binding_9bc661354aee4052bd0ec3847e909f6e.TemplateOwner = templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;


                Border_f7c62d8fae5e49d9901c7501f8291858.Child = ContentPresenter_ff3dc503d0e3439998681d22f1128b4d;

                var Binding_fc0634606c8a4dddbafd6df684a6e759 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fc0634606c8a4dddbafd6df684a6e759.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_67fb04f845a74db498112982b1194991 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_67fb04f845a74db498112982b1194991.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fc0634606c8a4dddbafd6df684a6e759.RelativeSource = RelativeSource_67fb04f845a74db498112982b1194991;


                Binding_fc0634606c8a4dddbafd6df684a6e759.TemplateOwner = templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;


                Border_01bb6627d18c46fba3b5073eadf66bbd.Child = Border_f7c62d8fae5e49d9901c7501f8291858;

                var Binding_6026f9538558499fb7a1b840d0c14e37 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_6026f9538558499fb7a1b840d0c14e37.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_8a5747c830134cc8a9b6bf3f17d29073 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8a5747c830134cc8a9b6bf3f17d29073.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_6026f9538558499fb7a1b840d0c14e37.RelativeSource = RelativeSource_8a5747c830134cc8a9b6bf3f17d29073;


                Binding_6026f9538558499fb7a1b840d0c14e37.TemplateOwner = templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;

                var Binding_51a87ab21e6240ab8c9c3f529a72be1b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_51a87ab21e6240ab8c9c3f529a72be1b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_a4ac77c3b8694948859c326d0e4f67e5 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a4ac77c3b8694948859c326d0e4f67e5.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_51a87ab21e6240ab8c9c3f529a72be1b.RelativeSource = RelativeSource_a4ac77c3b8694948859c326d0e4f67e5;


                Binding_51a87ab21e6240ab8c9c3f529a72be1b.TemplateOwner = templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;

                var Binding_9d9c48d3c2ed4d45a84b2a5d8cd9e1ce = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_9d9c48d3c2ed4d45a84b2a5d8cd9e1ce.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_fc374c2494f84a91ad5335bdd4a8c937 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_fc374c2494f84a91ad5335bdd4a8c937.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_9d9c48d3c2ed4d45a84b2a5d8cd9e1ce.RelativeSource = RelativeSource_fc374c2494f84a91ad5335bdd4a8c937;


                Binding_9d9c48d3c2ed4d45a84b2a5d8cd9e1ce.TemplateOwner = templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;



                ContentPresenter_ff3dc503d0e3439998681d22f1128b4d.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_80136596cb174135b704b621b384b2af);
                ContentPresenter_ff3dc503d0e3439998681d22f1128b4d.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_5323e741ed14432790ac71ae1e16540f);
                ContentPresenter_ff3dc503d0e3439998681d22f1128b4d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_dbce588fa1664996a459806c86114dce);
                ContentPresenter_ff3dc503d0e3439998681d22f1128b4d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_a1565a2645984bd480f3bd51ca875602);
                ContentPresenter_ff3dc503d0e3439998681d22f1128b4d.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_9bc661354aee4052bd0ec3847e909f6e);
                Border_f7c62d8fae5e49d9901c7501f8291858.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_fc0634606c8a4dddbafd6df684a6e759);
                Border_01bb6627d18c46fba3b5073eadf66bbd.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_6026f9538558499fb7a1b840d0c14e37);
                Border_01bb6627d18c46fba3b5073eadf66bbd.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_51a87ab21e6240ab8c9c3f529a72be1b);
                Border_01bb6627d18c46fba3b5073eadf66bbd.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_9d9c48d3c2ed4d45a84b2a5d8cd9e1ce);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_eaad9b236fb7422d9aa00885de45a294, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_0bb53bf6cd59433995c319749ce4da18), Bridge.fn.cacheBind(this, this.setVisualStateProperty_0bb53bf6cd59433995c319749ce4da18), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_0bb53bf6cd59433995c319749ce4da18), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_0bb53bf6cd59433995c319749ce4da18), Bridge.fn.cacheBind(this, this.getVisualStateProperty_0bb53bf6cd59433995c319749ce4da18)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_eaad9b236fb7422d9aa00885de45a294, Border_f7c62d8fae5e49d9901c7501f8291858);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_07f6f12ad81b4d799de2d49db59e9857, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41), Bridge.fn.cacheBind(this, this.setVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41), Bridge.fn.cacheBind(this, this.getVisualStateProperty_08ec22ce4e44415cba2fd828f4ac4b41)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_07f6f12ad81b4d799de2d49db59e9857, Border_f7c62d8fae5e49d9901c7501f8291858);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_1968ec4bca6748f29bcfa161216d3953, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f), Bridge.fn.cacheBind(this, this.setVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f), Bridge.fn.cacheBind(this, this.getVisualStateProperty_b7d6392745144bf3b1093d5c06636e0f)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_1968ec4bca6748f29bcfa161216d3953, Border_f7c62d8fae5e49d9901c7501f8291858);

                templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35.TemplateContent = Border_01bb6627d18c46fba3b5073eadf66bbd;
                return templateInstance_1084447f00dd4aee9ac5d2ef0acbbf35;
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
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0], $step);
                            switch ($step) {
                                case 0: {
                                    CShtml.FileClass.fileText = e.Text;
                                    Windows.UI.Xaml.MessageBox.Show("\u0424\u0430\u0439\u043b \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d");
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



                var Grid_09a2699ccd22436690854fee4a5e6e48 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var RowDefinition_14a443a0e8044af8a087dfd0da464799 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_76e1ab23e1364390960b02fe9c3b53bb = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_9ceb7f946ce348a699985c1449b31f6b = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_221fde8299144fa3810b522e851eff51 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_09a2699ccd22436690854fee4a5e6e48.RowDefinitions.add(RowDefinition_14a443a0e8044af8a087dfd0da464799);
                Grid_09a2699ccd22436690854fee4a5e6e48.RowDefinitions.add(RowDefinition_76e1ab23e1364390960b02fe9c3b53bb);
                Grid_09a2699ccd22436690854fee4a5e6e48.RowDefinitions.add(RowDefinition_9ceb7f946ce348a699985c1449b31f6b);
                Grid_09a2699ccd22436690854fee4a5e6e48.RowDefinitions.add(RowDefinition_221fde8299144fa3810b522e851eff51);

                var Border_f5dbccc2264240afbb9eab64bef258fc = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                Border_f5dbccc2264240afbb9eab64bef258fc.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_f5dbccc2264240afbb9eab64bef258fc, 0);
                var ControlForDisplayingTheFileOpe_8c137898819642c2bc4c9d18bf334ed3 = new Bridge.global.CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog();
                ControlForDisplayingTheFileOpe_8c137898819642c2bc4c9d18bf334ed3.addFileOpened(Bridge.fn.cacheBind(this, this.OnFileOpened));
                ControlForDisplayingTheFileOpe_8c137898819642c2bc4c9d18bf334ed3.Filter = "*.json,*.txt";
                ControlForDisplayingTheFileOpe_8c137898819642c2bc4c9d18bf334ed3.ResultKind = Bridge.global.CSHTML5.Extensions.FileOpenDialog.ResultKind.Text;

                Border_f5dbccc2264240afbb9eab64bef258fc.Child = ControlForDisplayingTheFileOpe_8c137898819642c2bc4c9d18bf334ed3;


                var Button_56b76833f7c74f64914589c1ba2c88d1 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Button_56b76833f7c74f64914589c1ba2c88d1.Content = "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430";
                this.RegisterName$1("btnCancel", Button_56b76833f7c74f64914589c1ba2c88d1);
                Button_56b76833f7c74f64914589c1ba2c88d1.Name = "btnCancel";
                Button_56b76833f7c74f64914589c1ba2c88d1.addClick(Bridge.fn.cacheBind(this, this.BtnCancel_Click));
                Button_56b76833f7c74f64914589c1ba2c88d1.Width = 250.0;
                Button_56b76833f7c74f64914589c1ba2c88d1.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_56b76833f7c74f64914589c1ba2c88d1, 1);
                Button_56b76833f7c74f64914589c1ba2c88d1.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_56b76833f7c74f64914589c1ba2c88d1.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_56b76833f7c74f64914589c1ba2c88d1.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_56b76833f7c74f64914589c1ba2c88d1.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_56b76833f7c74f64914589c1ba2c88d1.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_56b76833f7c74f64914589c1ba2c88d1.FontSize = 20.0;
                var ControlTemplate_f9b19498a1d54d818e78cba2381034e7 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_f9b19498a1d54d818e78cba2381034e7.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_f9b19498a1d54d818e78cba2381034e7.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_f9b19498a1d54d818e78cba2381034e7));

                Button_56b76833f7c74f64914589c1ba2c88d1.Template = ControlTemplate_f9b19498a1d54d818e78cba2381034e7;


                Grid_09a2699ccd22436690854fee4a5e6e48.Children.add(Border_f5dbccc2264240afbb9eab64bef258fc);
                Grid_09a2699ccd22436690854fee4a5e6e48.Children.add(Button_56b76833f7c74f64914589c1ba2c88d1);


                this.Content = Grid_09a2699ccd22436690854fee4a5e6e48;



                this.btnCancel = Button_56b76833f7c74f64914589c1ba2c88d1;



            },
            accessVisualStateProperty_46a12d78a66e4a989295c0f77b995731: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_46a12d78a66e4a989295c0f77b995731: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_46a12d78a66e4a989295c0f77b995731: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_46a12d78a66e4a989295c0f77b995731: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_46a12d78a66e4a989295c0f77b995731: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_cac8b10317694fdda872131fbcf03bd2: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_cac8b10317694fdda872131fbcf03bd2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_cac8b10317694fdda872131fbcf03bd2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_cac8b10317694fdda872131fbcf03bd2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_cac8b10317694fdda872131fbcf03bd2: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_f9b19498a1d54d818e78cba2381034e7: function (templateOwner) {
                var templateInstance_f777671e07bd48779149ee24cea83a5d = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_f777671e07bd48779149ee24cea83a5d.TemplateOwner = templateOwner;
                var Border_d5a8a880a90e4b94a622dab362537d21 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_d5a8a880a90e4b94a622dab362537d21);
                Border_d5a8a880a90e4b94a622dab362537d21.Name = "OuterBorder";
                Border_d5a8a880a90e4b94a622dab362537d21.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_f8d3f76455bd42079838d8ce84a3973e = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_f8d3f76455bd42079838d8ce84a3973e);
                VisualStateGroup_f8d3f76455bd42079838d8ce84a3973e.Name = "CommonStates";
                var VisualState_afd749918d4f4d1e9c8a70f495c63606 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_afd749918d4f4d1e9c8a70f495c63606);
                VisualState_afd749918d4f4d1e9c8a70f495c63606.Name = "Normal";

                var VisualState_948e89c2b15e4b768775ed4957128004 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_948e89c2b15e4b768775ed4957128004);
                VisualState_948e89c2b15e4b768775ed4957128004.Name = "PointerOver";
                var Storyboard_55696abb5ce3439d87c2ebd468d464b0 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_958df68c06584cfca4db4fa57b5f57b6 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_958df68c06584cfca4db4fa57b5f57b6, "InnerBorder");
                var DiscreteObjectKeyFrame_d1a87d908bfc410aad4c8dfad616f62e = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_d1a87d908bfc410aad4c8dfad616f62e.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_d1a87d908bfc410aad4c8dfad616f62e.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_958df68c06584cfca4db4fa57b5f57b6.KeyFrames.add(DiscreteObjectKeyFrame_d1a87d908bfc410aad4c8dfad616f62e);


                Storyboard_55696abb5ce3439d87c2ebd468d464b0.Children.add(ObjectAnimationUsingKeyFrames_958df68c06584cfca4db4fa57b5f57b6);


                VisualState_948e89c2b15e4b768775ed4957128004.Storyboard = Storyboard_55696abb5ce3439d87c2ebd468d464b0;


                var VisualState_130e39dbed3f4d2abdd714a7d56a7117 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_130e39dbed3f4d2abdd714a7d56a7117);
                VisualState_130e39dbed3f4d2abdd714a7d56a7117.Name = "Pressed";
                var Storyboard_9b862c31f2ea43ccab1c1d1109cdf053 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_eda6993732e64c2e8b1888784801bdc4 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_eda6993732e64c2e8b1888784801bdc4, "InnerBorder");
                var DiscreteObjectKeyFrame_e16f08228eb24ae8bbd3b5a3a5ee783a = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_e16f08228eb24ae8bbd3b5a3a5ee783a.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_e16f08228eb24ae8bbd3b5a3a5ee783a.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_eda6993732e64c2e8b1888784801bdc4.KeyFrames.add(DiscreteObjectKeyFrame_e16f08228eb24ae8bbd3b5a3a5ee783a);


                Storyboard_9b862c31f2ea43ccab1c1d1109cdf053.Children.add(ObjectAnimationUsingKeyFrames_eda6993732e64c2e8b1888784801bdc4);


                VisualState_130e39dbed3f4d2abdd714a7d56a7117.Storyboard = Storyboard_9b862c31f2ea43ccab1c1d1109cdf053;


                var VisualState_3f5422059cda42f1938eb2d3b99053ad = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_3f5422059cda42f1938eb2d3b99053ad);
                VisualState_3f5422059cda42f1938eb2d3b99053ad.Name = "Disabled";
                var Storyboard_8669a82f8065465a8f6ee110e6fe79f4 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_b10c863eca36450eb78eaaa9fb61f13c = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_b10c863eca36450eb78eaaa9fb61f13c, "InnerBorder");
                var DiscreteObjectKeyFrame_315f0b83d5884ca889f5c7241e7225c7 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_315f0b83d5884ca889f5c7241e7225c7.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_315f0b83d5884ca889f5c7241e7225c7.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_b10c863eca36450eb78eaaa9fb61f13c.KeyFrames.add(DiscreteObjectKeyFrame_315f0b83d5884ca889f5c7241e7225c7);


                Storyboard_8669a82f8065465a8f6ee110e6fe79f4.Children.add(ObjectAnimationUsingKeyFrames_b10c863eca36450eb78eaaa9fb61f13c);


                VisualState_3f5422059cda42f1938eb2d3b99053ad.Storyboard = Storyboard_8669a82f8065465a8f6ee110e6fe79f4;


                System.Array.add(VisualStateGroup_f8d3f76455bd42079838d8ce84a3973e.States, VisualState_afd749918d4f4d1e9c8a70f495c63606, Object);
                System.Array.add(VisualStateGroup_f8d3f76455bd42079838d8ce84a3973e.States, VisualState_948e89c2b15e4b768775ed4957128004, Object);
                System.Array.add(VisualStateGroup_f8d3f76455bd42079838d8ce84a3973e.States, VisualState_130e39dbed3f4d2abdd714a7d56a7117, Object);
                System.Array.add(VisualStateGroup_f8d3f76455bd42079838d8ce84a3973e.States, VisualState_3f5422059cda42f1938eb2d3b99053ad, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_f8d3f76455bd42079838d8ce84a3973e);

                var Border_06cbe721191b498ba39ff4846f158da4 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_06cbe721191b498ba39ff4846f158da4);
                Border_06cbe721191b498ba39ff4846f158da4.Name = "InnerBorder";
                Border_06cbe721191b498ba39ff4846f158da4.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_6739d3b2aefc464eb2da7068057f770b = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_6739d3b2aefc464eb2da7068057f770b);
                ContentPresenter_6739d3b2aefc464eb2da7068057f770b.Name = "ContentPresenter";
                var Binding_eb0e1df3fafc4a65b23c0d988f540b1d = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_eb0e1df3fafc4a65b23c0d988f540b1d.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_9d68b13e62fc4a75ab58b53abcc9a7b4 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9d68b13e62fc4a75ab58b53abcc9a7b4.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_eb0e1df3fafc4a65b23c0d988f540b1d.RelativeSource = RelativeSource_9d68b13e62fc4a75ab58b53abcc9a7b4;


                Binding_eb0e1df3fafc4a65b23c0d988f540b1d.TemplateOwner = templateInstance_f777671e07bd48779149ee24cea83a5d;

                var Binding_240aa07e9c6f45f58b85828d7d26f786 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_240aa07e9c6f45f58b85828d7d26f786.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_9fde5909f8374f20a3af34465836bb6f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9fde5909f8374f20a3af34465836bb6f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_240aa07e9c6f45f58b85828d7d26f786.RelativeSource = RelativeSource_9fde5909f8374f20a3af34465836bb6f;


                Binding_240aa07e9c6f45f58b85828d7d26f786.TemplateOwner = templateInstance_f777671e07bd48779149ee24cea83a5d;

                var Binding_5a125087969c4c0a951bc8cf545f75e4 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5a125087969c4c0a951bc8cf545f75e4.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_dd1a1d4e00b1471899feec890556f5c3 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_dd1a1d4e00b1471899feec890556f5c3.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5a125087969c4c0a951bc8cf545f75e4.RelativeSource = RelativeSource_dd1a1d4e00b1471899feec890556f5c3;


                Binding_5a125087969c4c0a951bc8cf545f75e4.TemplateOwner = templateInstance_f777671e07bd48779149ee24cea83a5d;

                var Binding_8b5a80138d6c4303b494e82045b8e2b9 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8b5a80138d6c4303b494e82045b8e2b9.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_979c2f2bce7f425ab9b5c88275c6a9e7 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_979c2f2bce7f425ab9b5c88275c6a9e7.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8b5a80138d6c4303b494e82045b8e2b9.RelativeSource = RelativeSource_979c2f2bce7f425ab9b5c88275c6a9e7;


                Binding_8b5a80138d6c4303b494e82045b8e2b9.TemplateOwner = templateInstance_f777671e07bd48779149ee24cea83a5d;

                var Binding_eef56a39329c497bab121e69525c3283 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_eef56a39329c497bab121e69525c3283.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_a090bc24786b428faf6ac84a0a7a2355 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a090bc24786b428faf6ac84a0a7a2355.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_eef56a39329c497bab121e69525c3283.RelativeSource = RelativeSource_a090bc24786b428faf6ac84a0a7a2355;


                Binding_eef56a39329c497bab121e69525c3283.TemplateOwner = templateInstance_f777671e07bd48779149ee24cea83a5d;


                Border_06cbe721191b498ba39ff4846f158da4.Child = ContentPresenter_6739d3b2aefc464eb2da7068057f770b;

                var Binding_f5d4d81ed649496691a2c0a278a95cdc = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_f5d4d81ed649496691a2c0a278a95cdc.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_81ef6c08689a4cbeb0c09fb18acfaa09 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_81ef6c08689a4cbeb0c09fb18acfaa09.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_f5d4d81ed649496691a2c0a278a95cdc.RelativeSource = RelativeSource_81ef6c08689a4cbeb0c09fb18acfaa09;


                Binding_f5d4d81ed649496691a2c0a278a95cdc.TemplateOwner = templateInstance_f777671e07bd48779149ee24cea83a5d;


                Border_d5a8a880a90e4b94a622dab362537d21.Child = Border_06cbe721191b498ba39ff4846f158da4;

                var Binding_e135a0c840d4413db14a9ab6c0df40c0 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e135a0c840d4413db14a9ab6c0df40c0.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_3cfd3fa810cd4a6a809f0b9f75691e46 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3cfd3fa810cd4a6a809f0b9f75691e46.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e135a0c840d4413db14a9ab6c0df40c0.RelativeSource = RelativeSource_3cfd3fa810cd4a6a809f0b9f75691e46;


                Binding_e135a0c840d4413db14a9ab6c0df40c0.TemplateOwner = templateInstance_f777671e07bd48779149ee24cea83a5d;

                var Binding_356dbe005d0c4114b0de93f7e2e6275f = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_356dbe005d0c4114b0de93f7e2e6275f.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_c6aed58985164066bde46b20bc2e605f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c6aed58985164066bde46b20bc2e605f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_356dbe005d0c4114b0de93f7e2e6275f.RelativeSource = RelativeSource_c6aed58985164066bde46b20bc2e605f;


                Binding_356dbe005d0c4114b0de93f7e2e6275f.TemplateOwner = templateInstance_f777671e07bd48779149ee24cea83a5d;

                var Binding_bc5224f0889849bea058d680d43ff4af = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_bc5224f0889849bea058d680d43ff4af.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_619fc630b1e04e8b85d00c9547820d45 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_619fc630b1e04e8b85d00c9547820d45.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_bc5224f0889849bea058d680d43ff4af.RelativeSource = RelativeSource_619fc630b1e04e8b85d00c9547820d45;


                Binding_bc5224f0889849bea058d680d43ff4af.TemplateOwner = templateInstance_f777671e07bd48779149ee24cea83a5d;



                ContentPresenter_6739d3b2aefc464eb2da7068057f770b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_eb0e1df3fafc4a65b23c0d988f540b1d);
                ContentPresenter_6739d3b2aefc464eb2da7068057f770b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_240aa07e9c6f45f58b85828d7d26f786);
                ContentPresenter_6739d3b2aefc464eb2da7068057f770b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_5a125087969c4c0a951bc8cf545f75e4);
                ContentPresenter_6739d3b2aefc464eb2da7068057f770b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_8b5a80138d6c4303b494e82045b8e2b9);
                ContentPresenter_6739d3b2aefc464eb2da7068057f770b.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_eef56a39329c497bab121e69525c3283);
                Border_06cbe721191b498ba39ff4846f158da4.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_f5d4d81ed649496691a2c0a278a95cdc);
                Border_d5a8a880a90e4b94a622dab362537d21.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_e135a0c840d4413db14a9ab6c0df40c0);
                Border_d5a8a880a90e4b94a622dab362537d21.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_356dbe005d0c4114b0de93f7e2e6275f);
                Border_d5a8a880a90e4b94a622dab362537d21.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_bc5224f0889849bea058d680d43ff4af);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_958df68c06584cfca4db4fa57b5f57b6, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_46a12d78a66e4a989295c0f77b995731), Bridge.fn.cacheBind(this, this.setVisualStateProperty_46a12d78a66e4a989295c0f77b995731), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_46a12d78a66e4a989295c0f77b995731), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_46a12d78a66e4a989295c0f77b995731), Bridge.fn.cacheBind(this, this.getVisualStateProperty_46a12d78a66e4a989295c0f77b995731)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_958df68c06584cfca4db4fa57b5f57b6, Border_06cbe721191b498ba39ff4846f158da4);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_eda6993732e64c2e8b1888784801bdc4, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_cac8b10317694fdda872131fbcf03bd2), Bridge.fn.cacheBind(this, this.setVisualStateProperty_cac8b10317694fdda872131fbcf03bd2), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_cac8b10317694fdda872131fbcf03bd2), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_cac8b10317694fdda872131fbcf03bd2), Bridge.fn.cacheBind(this, this.getVisualStateProperty_cac8b10317694fdda872131fbcf03bd2)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_eda6993732e64c2e8b1888784801bdc4, Border_06cbe721191b498ba39ff4846f158da4);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_b10c863eca36450eb78eaaa9fb61f13c, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444), Bridge.fn.cacheBind(this, this.setVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444), Bridge.fn.cacheBind(this, this.getVisualStateProperty_a14e89677e9744bf94dd6dde40e4c444)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_b10c863eca36450eb78eaaa9fb61f13c, Border_06cbe721191b498ba39ff4846f158da4);

                templateInstance_f777671e07bd48779149ee24cea83a5d.TemplateContent = Border_d5a8a880a90e4b94a622dab362537d21;
                return templateInstance_f777671e07bd48779149ee24cea83a5d;
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



                var Grid_8dc69f9a48d04a238549beb4fa4c9db8 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                Grid_8dc69f9a48d04a238549beb4fa4c9db8.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 0, $t));

                this.Content = Grid_8dc69f9a48d04a238549beb4fa4c9db8;







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

                CSharpXamlForHtml5.DomManagement.SetHtmlRepresentation(this, "<div style style='margin: 15px; position: relative; text-align: center; width: 100%; background: #1bbc9c vertical-align:middle;'><input type='file' id='input__file' style='margin: 65px; position: relative; text-align: center; width: 100%; visibility: hidden;' multiple><label for='input__file' style='width: 100%; max-width: 290px; height: 60px; background: #F9DEF2; display: -webkit-box; border: 1px solid grey;display: -ms-flexbox; display: flex;  -webkit-box-align: center; -ms-flex-align: center; margin: 0 auto; font-size: 1.125rem; font-weight: 700;border-radius: 3px; cursor: pointer; align-items: center; -webkit-box-pack: start; -ms-flex-pack: start; justify-content: center; color: #000;'><span style='line-height: 1;margin-top: 1px;'>\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b</span></label></div>");


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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDU2h0bWwuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIm9iai9SZWxlYXNlL0FwcC54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlMS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlSG9tZS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlVXBsb2FkLnhhbWwuZy5jcyIsIm9iai9SZWxlYXNlL1NlY29uZFBhZ2UueGFtbC5nLmNzIiwiQXBwLnhhbWwuY3MiLCJQYWdlMS54YW1sLmNzIiwiUGFnZUhvbWUueGFtbC5jcyIsIlBhZ2VVcGxvYWQueGFtbC5jcyIsIlNlY29uZFBhZ2UueGFtbC5jcyIsIkZpbGVPcGVuRGlhbG9nLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7b0JBUVFBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7O29CQ0RwRUEsV0FBMkJBLEFBQU9BO29CQUNsQ0EsT0FBT0EsbUVBQTZEQTs7Ozs7Ozs7OztvQkNEcEVBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7WUptRXhFQSxJQUFJQTs7Ozs7Ozs7O2dCSy9ESUE7Ozs7Z0JBT0FBLGFBQWFBLElBQUlBO2dCQUNqQkEsZ0JBQWdCQSxJQUFJQSw0QkFBcUJBO2dCQUN6Q0EseUNBQXlCQTs7Ozs7Z0JMbUJ6QkEsSUFBSUE7b0JBQ0FBOztnQkFDSkE7OztnQkFHQUEsSUFBSUE7b0JBRUFBLEFBQUNBLFlBQW1DQSxBQUFRQTs7OztnQkFLNURBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7Z0JBR0FBLDBEQUEwREEsSUFBSUE7Z0JBQzlEQSxpQkFBaUJBOztnQkFF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LyA8Q1NIVE1MNT48WGFtbEhhc2g+NUEyNEZEOTRFRDU4MzZBQzZCRkM3NkY3NzVCNkVEMEY8L1hhbWxIYXNoPjxQYXNzTnVtYmVyPjI8L1Bhc3NOdW1iZXI+PENvbXBpbGF0aW9uRGF0ZT4xNS4wNC4yMDIwIDI6Mjg6MjQ8L0NvbXBpbGF0aW9uRGF0ZT48L0NTSFRNTDU+XHJcblxyXG5cclxuXHJcbnB1YmxpYyBzdGF0aWMgY2xhc3Mgx4DHgENzaHRtbMeAx4BDb21wb25lbnTHgMeAQXBwx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5BcHApO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIEFwcCA6IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkFwcGxpY2F0aW9uXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5cclxuXHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAxNjksIDY0OSwgMDYyOFxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9jb250ZW50TG9hZGVkO1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jb250ZW50TG9hZGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfY29udGVudExvYWRlZCA9IHRydWU7XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAwMTg0IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTg0ICgnVGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgbmV2ZXIgb2YgdGhlIHByb3ZpZGVkICgndHlwZScpIHR5cGUnKVxyXG4gICAgICAgICAgICBpZiAodGhpcyBpcyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KShvYmplY3QpdGhpcykuWGFtbFNvdXJjZVBhdGggPSBAXCJDU2h0bWxcXEFwcC54YW1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMDE4NFxyXG5cclxuXHJcbmdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5TdGFydHVwQXNzZW1ibHlJbmZvLk91dHB1dFJvb3RQYXRoID0gQFwiT3V0cHV0XFxcIjtcclxuZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlN0YXJ0dXBBc3NlbWJseUluZm8uT3V0cHV0QXBwRmlsZXNQYXRoID0gQFwiYXBwLWNzaHRtbDVcXGFwcFxcXCI7XHJcbmdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5TdGFydHVwQXNzZW1ibHlJbmZvLk91dHB1dExpYnJhcmllc1BhdGggPSBAXCJhcHAtY3NodG1sNVxcbGlic1xcXCI7XHJcbmdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5TdGFydHVwQXNzZW1ibHlJbmZvLk91dHB1dFJlc291cmNlc1BhdGggPSBAXCJhcHAtY3NodG1sNVxccmVzXFxcIjtcclxuXHJcblxyXG52YXIgUmVzb3VyY2VEaWN0aW9uYXJ5X2Q0OTNjMTgyNzhjNjRhYjc5NDAzYTA5ODg2OWRlMThhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlJlc291cmNlRGljdGlvbmFyeSgpO1xyXG50aGlzLlJlc291cmNlcyA9IFJlc291cmNlRGljdGlvbmFyeV9kNDkzYzE4Mjc4YzY0YWI3OTQwM2EwOTg4NjlkZTE4YTtcclxuXHJcbnRoaXMuUmVzb3VyY2VzID0gUmVzb3VyY2VEaWN0aW9uYXJ5X2Q0OTNjMTgyNzhjNjRhYjc5NDAzYTA5ODg2OWRlMThhO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbntcclxuICAgIG5ldyBBcHAoKTtcclxufVxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwiLy8gPENTSFRNTDU+PFhhbWxIYXNoPkM4NThDNUQ4MzhERjIwMDgwN0FFQzY5RjkxMDJDREU0PC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTUuMDQuMjAyMCAyOjI4OjI0PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgFBhZ2Uxx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5QYWdlMSk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5UeXBlSW5zdGFudGlhdGlvbkhlbHBlci5JbnN0YW50aWF0ZSh0eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBhdXRvLWdlbmVyYXRlZCBieSBcIkMjL1hBTUwgZm9yIEhUTUw1XCJcclxuLy9cclxuLy8gICAgIENoYW5nZXMgdG8gdGhpcyBmaWxlIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IgYW5kIHdpbGwgYmUgbG9zdCBpZlxyXG4vLyAgICAgdGhlIGNvZGUgaXMgcmVnZW5lcmF0ZWQuXHJcbi8vIDwvYXV0by1nZW5lcmF0ZWQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbnBhcnRpYWwgY2xhc3MgUGFnZTEgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QYWdlXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGVsZW1lbnRGb3JMaXN0O1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0blVwbG9hZDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbiBidG5Qcm9jZXNzaW5nO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuVGV4dEJveCB0eHRGaWxlO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCBMYXlvdXRHcmlkO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGVsZW1lbnQ7XHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxQYWdlMS54YW1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMDE4NFxyXG5cclxuXHJcblxyXG52YXIgR3JpZF9iMDVkOWYwNWQzNjY0YjVjODJiMDhiMDk4NGRjN2MxMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkKCk7XHJcbnZhciBMaW5lYXJHcmFkaWVudEJydXNoX2JhMzRmYzdjNTFlZTQxMDNhZjk1NDAzOWQ3Mjg1ZDQxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkxpbmVhckdyYWRpZW50QnJ1c2goKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9iYTM0ZmM3YzUxZWU0MTAzYWY5NTQwMzlkNzI4NWQ0MS5FbmRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDEpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2JhMzRmYzdjNTFlZTQxMDNhZjk1NDAzOWQ3Mjg1ZDQxLlN0YXJ0UG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAwKTtcclxudmFyIEdyYWRpZW50U3RvcF82MGViZTA2ZjUzMjc0Mzk2OGY3YWJlNjM5MWQzOThlZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzYwZWJlMDZmNTMyNzQzOTY4ZjdhYmU2MzkxZDM5OGVmLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTIzMCwgRyA9IChieXRlKTIzMCwgQiA9IChieXRlKTIzMCB9O1xyXG5HcmFkaWVudFN0b3BfNjBlYmUwNmY1MzI3NDM5NjhmN2FiZTYzOTFkMzk4ZWYuT2Zmc2V0ID0gMEQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wXzhiMzhmODY3ZTFkYzRiYjg4MWE5YzQwYmY4NjA5ZjBkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfOGIzOGY4NjdlMWRjNGJiODgxYTljNDBiZjg2MDlmMGQuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH07XHJcbkdyYWRpZW50U3RvcF84YjM4Zjg2N2UxZGM0YmI4ODFhOWM0MGJmODYwOWYwZC5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYmEzNGZjN2M1MWVlNDEwM2FmOTU0MDM5ZDcyODVkNDEuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzYwZWJlMDZmNTMyNzQzOTY4ZjdhYmU2MzkxZDM5OGVmKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9iYTM0ZmM3YzUxZWU0MTAzYWY5NTQwMzlkNzI4NWQ0MS5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfOGIzOGY4NjdlMWRjNGJiODgxYTljNDBiZjg2MDlmMGQpO1xyXG5cclxuXHJcbkdyaWRfYjA1ZDlmMDVkMzY2NGI1YzgyYjA4YjA5ODRkYzdjMTIuQmFja2dyb3VuZCA9IExpbmVhckdyYWRpZW50QnJ1c2hfYmEzNGZjN2M1MWVlNDEwM2FmOTU0MDM5ZDcyODVkNDE7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9hZjZhNzc4YTZmMjA0MjU3OWYwZWM0YzU1NWU2NDdlZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fYWY2YTc3OGE2ZjIwNDI1NzlmMGVjNGM1NTVlNjQ3ZWYuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4yNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNWI5YzkwZDhlY2I5NGExZTg1OGU2NGU5N2QzN2ZkMTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzViOWM5MGQ4ZWNiOTRhMWU4NThlNjRlOTdkMzdmZDExLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fYzZiNDBkZTgyYmUzNGZhYWIyYjQxZmQzNmEzOTYzZTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uX2M2YjQwZGU4MmJlMzRmYWFiMmI0MWZkMzZhMzk2M2UxLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbkdyaWRfYjA1ZDlmMDVkMzY2NGI1YzgyYjA4YjA5ODRkYzdjMTIuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fYWY2YTc3OGE2ZjIwNDI1NzlmMGVjNGM1NTVlNjQ3ZWYpO1xyXG5HcmlkX2IwNWQ5ZjA1ZDM2NjRiNWM4MmIwOGIwOTg0ZGM3YzEyLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzViOWM5MGQ4ZWNiOTRhMWU4NThlNjRlOTdkMzdmZDExKTtcclxuR3JpZF9iMDVkOWYwNWQzNjY0YjVjODJiMDhiMDk4NGRjN2MxMi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl9jNmI0MGRlODJiZTM0ZmFhYjJiNDFmZDM2YTM5NjNlMSk7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl85M2NkN2RkYTE5M2Y0YmQ4OWZmZmNjYzlkMmJkODliZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcbkNvbHVtbkRlZmluaXRpb25fOTNjZDdkZGExOTNmNGJkODlmZmZjY2M5ZDJiZDg5YmUuV2lkdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjMsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBDb2x1bW5EZWZpbml0aW9uX2ExNWE3OGJlOGY0YjQ5MWRhMTQ4ZWY4NmEwOGQ4ZWVmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbHVtbkRlZmluaXRpb24oKTtcclxuXHJcbkdyaWRfYjA1ZDlmMDVkMzY2NGI1YzgyYjA4YjA5ODRkYzdjMTIuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fOTNjZDdkZGExOTNmNGJkODlmZmZjY2M5ZDJiZDg5YmUpO1xyXG5HcmlkX2IwNWQ5ZjA1ZDM2NjRiNWM4MmIwOGIwOTg0ZGM3YzEyLkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uX2ExNWE3OGJlOGY0YjQ5MWRhMTQ4ZWY4NmEwOGQ4ZWVmKTtcclxuXHJcbnZhciBCb3JkZXJfOWI5NWVkNWE5NmZhNDA4Yzg4MDg0YzNkNDU3NTIyZWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudEZvckxpc3RcIiwgQm9yZGVyXzliOTVlZDVhOTZmYTQwOGM4ODA4NGMzZDQ1NzUyMmVjKTtcclxuQm9yZGVyXzliOTVlZDVhOTZmYTQwOGM4ODA4NGMzZDQ1NzUyMmVjLk5hbWUgPSBcImVsZW1lbnRGb3JMaXN0XCI7XHJcbkJvcmRlcl85Yjk1ZWQ1YTk2ZmE0MDhjODgwODRjM2Q0NTc1MjJlYy5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDMpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCb3JkZXJfOWI5NWVkNWE5NmZhNDA4Yzg4MDg0YzNkNDU3NTIyZWMsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihCb3JkZXJfOWI5NWVkNWE5NmZhNDA4Yzg4MDg0YzNkNDU3NTIyZWMsMyk7XHJcbkJvcmRlcl85Yjk1ZWQ1YTk2ZmE0MDhjODgwODRjM2Q0NTc1MjJlYy5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTIwMCwgRyA9IChieXRlKTIwMCwgQiA9IChieXRlKTIwMCB9KTtcclxuQm9yZGVyXzliOTVlZDVhOTZmYTQwOGM4ODA4NGMzZDQ1NzUyMmVjLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMik7XHJcbkJvcmRlcl85Yjk1ZWQ1YTk2ZmE0MDhjODgwODRjM2Q0NTc1MjJlYy5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgR3JpZF85MjE2ZmZhODMwYWQ0OGQwOGMwNWI2N2Y2YzU1N2NkZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkKCk7XHJcbnZhciBMaW5lYXJHcmFkaWVudEJydXNoX2I0OGNkMGM5NDRjYjQ2Y2RhOTI0Y2FhMGI2YzgxY2YwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkxpbmVhckdyYWRpZW50QnJ1c2goKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9iNDhjZDBjOTQ0Y2I0NmNkYTkyNGNhYTBiNmM4MWNmMC5FbmRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDEpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoX2I0OGNkMGM5NDRjYjQ2Y2RhOTI0Y2FhMGI2YzgxY2YwLlN0YXJ0UG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAwKTtcclxudmFyIEdyYWRpZW50U3RvcF9mOTdhYzBjNjc1ZTU0MTBjYTcwN2MxMGRkYjQwZDcwYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wX2Y5N2FjMGM2NzVlNTQxMGNhNzA3YzEwZGRiNDBkNzBiLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTIzMCwgRyA9IChieXRlKTIzMCwgQiA9IChieXRlKTIzMCB9O1xyXG5HcmFkaWVudFN0b3BfZjk3YWMwYzY3NWU1NDEwY2E3MDdjMTBkZGI0MGQ3MGIuT2Zmc2V0ID0gMEQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wXzEyYzEwZTJjMDE1NTRhMjQ5ZjgxM2ZkMTBhNGNlZTAyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfMTJjMTBlMmMwMTU1NGEyNDlmODEzZmQxMGE0Y2VlMDIuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH07XHJcbkdyYWRpZW50U3RvcF8xMmMxMGUyYzAxNTU0YTI0OWY4MTNmZDEwYTRjZWUwMi5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYjQ4Y2QwYzk0NGNiNDZjZGE5MjRjYWEwYjZjODFjZjAuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wX2Y5N2FjMGM2NzVlNTQxMGNhNzA3YzEwZGRiNDBkNzBiKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9iNDhjZDBjOTQ0Y2I0NmNkYTkyNGNhYTBiNmM4MWNmMC5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfMTJjMTBlMmMwMTU1NGEyNDlmODEzZmQxMGE0Y2VlMDIpO1xyXG5cclxuXHJcbkdyaWRfOTIxNmZmYTgzMGFkNDhkMDhjMDViNjdmNmM1NTdjZGUuQmFja2dyb3VuZCA9IExpbmVhckdyYWRpZW50QnJ1c2hfYjQ4Y2QwYzk0NGNiNDZjZGE5MjRjYWEwYjZjODFjZjA7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9lMjhjNGZjY2RmMjM0ZDMwYjQ3NDZiN2QxYTIyNDlhZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl83YzhhZGM5OTljODc0OGY4YmY1NzE1NWZmNGMzOGI5YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fN2M4YWRjOTk5Yzg3NDhmOGJmNTcxNTVmZjRjMzhiOWEuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl8xYzQwM2Y0ZWNhZGI0MDZhYjRmMTRkYjY4OTNlY2U2MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fMWM0MDNmNGVjYWRiNDA2YWI0ZjE0ZGI2ODkzZWNlNjMuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl8wNzAwOTc5ZWMwNzI0MzQzYWEyZGI3YTQ4MmZjZjg3NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fMDcwMDk3OWVjMDcyNDM0M2FhMmRiN2E0ODJmY2Y4NzQuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl81ZGFhM2ZlNWQ2N2Y0MDdkYTNlZTgzNmMzZWZkOTljYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblxyXG5HcmlkXzkyMTZmZmE4MzBhZDQ4ZDA4YzA1YjY3ZjZjNTU3Y2RlLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2UyOGM0ZmNjZGYyMzRkMzBiNDc0NmI3ZDFhMjI0OWFmKTtcclxuR3JpZF85MjE2ZmZhODMwYWQ0OGQwOGMwNWI2N2Y2YzU1N2NkZS5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl83YzhhZGM5OTljODc0OGY4YmY1NzE1NWZmNGMzOGI5YSk7XHJcbkdyaWRfOTIxNmZmYTgzMGFkNDhkMDhjMDViNjdmNmM1NTdjZGUuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMWM0MDNmNGVjYWRiNDA2YWI0ZjE0ZGI2ODkzZWNlNjMpO1xyXG5HcmlkXzkyMTZmZmE4MzBhZDQ4ZDA4YzA1YjY3ZjZjNTU3Y2RlLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzA3MDA5NzllYzA3MjQzNDNhYTJkYjdhNDgyZmNmODc0KTtcclxuR3JpZF85MjE2ZmZhODMwYWQ0OGQwOGMwNWI2N2Y2YzU1N2NkZS5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl81ZGFhM2ZlNWQ2N2Y0MDdkYTNlZTgzNmMzZWZkOTljYSk7XHJcblxyXG52YXIgQnV0dG9uXzdjYmI3YmY4YzZiODQ3MjVhZWZmODkyMjI0ODc3MzIzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fN2NiYjdiZjhjNmI4NDcyNWFlZmY4OTIyMjQ4NzczMjMsMSk7XHJcbkJ1dHRvbl83Y2JiN2JmOGM2Yjg0NzI1YWVmZjg5MjIyNDg3NzMyMy5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMCwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9KTtcclxuQnV0dG9uXzdjYmI3YmY4YzZiODQ3MjVhZWZmODkyMjI0ODc3MzIzLkNvbnRlbnQgPSBAXCLQn9C10YDQstCw0Y9cIjtcclxuQnV0dG9uXzdjYmI3YmY4YzZiODQ3MjVhZWZmODkyMjI0ODc3MzIzLkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fN2NiYjdiZjhjNmI4NDcyNWFlZmY4OTIyMjQ4NzczMjMuRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzdjYmI3YmY4YzZiODQ3MjVhZWZmODkyMjI0ODc3MzIzLkNsaWNrICs9IEZpcnN0X0NsaWNrO1xyXG5cclxudmFyIEJ1dHRvbl8zNzY1MjM0NmYxNWM0NGY4YTE3N2Y1OGMxZTQyMGZlMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uXzM3NjUyMzQ2ZjE1YzQ0ZjhhMTc3ZjU4YzFlNDIwZmUyLDIpO1xyXG5CdXR0b25fMzc2NTIzNDZmMTVjNDRmOGExNzdmNThjMWU0MjBmZTIuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTAsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbkJ1dHRvbl8zNzY1MjM0NmYxNWM0NGY4YTE3N2Y1OGMxZTQyMGZlMi5Db250ZW50ID0gQFwi0JLRgtC+0YDQsNGPXCI7XHJcbkJ1dHRvbl8zNzY1MjM0NmYxNWM0NGY4YTE3N2Y1OGMxZTQyMGZlMi5Gb250U2l6ZSA9IDIwRDtcclxuQnV0dG9uXzM3NjUyMzQ2ZjE1YzQ0ZjhhMTc3ZjU4YzFlNDIwZmUyLkZvcmVncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbkJ1dHRvbl8zNzY1MjM0NmYxNWM0NGY4YTE3N2Y1OGMxZTQyMGZlMi5DbGljayArPSBTZWNvbmRfQ2xpY2s7XHJcblxyXG52YXIgQnV0dG9uXzFmMDgyNTc4NDI5ZTRhN2FhNTVhMTc5MjE3N2RkNTM4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fMWYwODI1Nzg0MjllNGE3YWE1NWExNzkyMTc3ZGQ1MzgsMyk7XHJcbkJ1dHRvbl8xZjA4MjU3ODQyOWU0YTdhYTU1YTE3OTIxNzdkZDUzOC5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMCwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9KTtcclxuQnV0dG9uXzFmMDgyNTc4NDI5ZTRhN2FhNTVhMTc5MjE3N2RkNTM4LkNvbnRlbnQgPSBAXCLQotGA0LXRgtGM0Y9cIjtcclxuQnV0dG9uXzFmMDgyNTc4NDI5ZTRhN2FhNTVhMTc5MjE3N2RkNTM4LkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fMWYwODI1Nzg0MjllNGE3YWE1NWExNzkyMTc3ZGQ1MzguRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzFmMDgyNTc4NDI5ZTRhN2FhNTVhMTc5MjE3N2RkNTM4LkNsaWNrICs9IFRoaXJkX0NsaWNrO1xyXG5cclxuR3JpZF85MjE2ZmZhODMwYWQ0OGQwOGMwNWI2N2Y2YzU1N2NkZS5DaGlsZHJlbi5BZGQoQnV0dG9uXzdjYmI3YmY4YzZiODQ3MjVhZWZmODkyMjI0ODc3MzIzKTtcclxuR3JpZF85MjE2ZmZhODMwYWQ0OGQwOGMwNWI2N2Y2YzU1N2NkZS5DaGlsZHJlbi5BZGQoQnV0dG9uXzM3NjUyMzQ2ZjE1YzQ0ZjhhMTc3ZjU4YzFlNDIwZmUyKTtcclxuR3JpZF85MjE2ZmZhODMwYWQ0OGQwOGMwNWI2N2Y2YzU1N2NkZS5DaGlsZHJlbi5BZGQoQnV0dG9uXzFmMDgyNTc4NDI5ZTRhN2FhNTVhMTc5MjE3N2RkNTM4KTtcclxuXHJcblxyXG5Cb3JkZXJfOWI5NWVkNWE5NmZhNDA4Yzg4MDg0YzNkNDU3NTIyZWMuQ2hpbGQgPSBHcmlkXzkyMTZmZmE4MzBhZDQ4ZDA4YzA1YjY3ZjZjNTU3Y2RlO1xyXG5cclxuXHJcbnZhciBCb3JkZXJfZGZhOGY2YmM4NzZmNGU0MzhjMzY0MzIwYWFlZDg2MzkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfZGZhOGY2YmM4NzZmNGU0MzhjMzY0MzIwYWFlZDg2MzkpO1xyXG5Cb3JkZXJfZGZhOGY2YmM4NzZmNGU0MzhjMzY0MzIwYWFlZDg2MzkuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfZGZhOGY2YmM4NzZmNGU0MzhjMzY0MzIwYWFlZDg2MzkuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3dTcGFuKEJvcmRlcl9kZmE4ZjZiYzg3NmY0ZTQzOGMzNjQzMjBhYWVkODYzOSwzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJvcmRlcl9kZmE4ZjZiYzg3NmY0ZTQzOGMzNjQzMjBhYWVkODYzOSwyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQm9yZGVyX2RmYThmNmJjODc2ZjRlNDM4YzM2NDMyMGFhZWQ4NjM5LDEpO1xyXG5Cb3JkZXJfZGZhOGY2YmM4NzZmNGU0MzhjMzY0MzIwYWFlZDg2MzkuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDAsIEcgPSAoYnl0ZSkyMDAsIEIgPSAoYnl0ZSkyMDAgfSk7XHJcbkJvcmRlcl9kZmE4ZjZiYzg3NmY0ZTQzOGMzNjQzMjBhYWVkODYzOS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfZGZhOGY2YmM4NzZmNGU0MzhjMzY0MzIwYWFlZDg2MzkuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfMjE0YjE3NTA1OGU2NDY5NjgyMzE3Njg4OWZjOWI5YjIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzIxNGIxNzUwNThlNjQ2OTY4MjMxNzY4ODlmYzliOWIyLkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfMjE0YjE3NTA1OGU2NDY5NjgyMzE3Njg4OWZjOWI5YjIuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wX2I5MWY1NjJhMDJmMDQwODI4ZTEzZmFiZmMyZmM2YzBhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfYjkxZjU2MmEwMmYwNDA4MjhlMTNmYWJmYzJmYzZjMGEuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF9iOTFmNTYyYTAyZjA0MDgyOGUxM2ZhYmZjMmZjNmMwYS5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfMmYzMzQxMTA2YTQ3NDI3MmJlN2RiMDQ2ZmNmOTEyODkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF8yZjMzNDExMDZhNDc0MjcyYmU3ZGIwNDZmY2Y5MTI4OS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wXzJmMzM0MTEwNmE0NzQyNzJiZTdkYjA0NmZjZjkxMjg5Lk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF8yMTRiMTc1MDU4ZTY0Njk2ODIzMTc2ODg5ZmM5YjliMi5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfYjkxZjU2MmEwMmYwNDA4MjhlMTNmYWJmYzJmYzZjMGEpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzIxNGIxNzUwNThlNjQ2OTY4MjMxNzY4ODlmYzliOWIyLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF8yZjMzNDExMDZhNDc0MjcyYmU3ZGIwNDZmY2Y5MTI4OSk7XHJcblxyXG5cclxuQm9yZGVyX2RmYThmNmJjODc2ZjRlNDM4YzM2NDMyMGFhZWQ4NjM5LkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzIxNGIxNzUwNThlNjQ2OTY4MjMxNzY4ODlmYzliOWIyO1xyXG5cclxudmFyIEdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dEdyaWRcIiwgR3JpZF9hZTU3ZmVkNWIyZTU0ZDMyODg4NGM1MGYyYWEyNzQ3Myk7XHJcbkdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzMuTmFtZSA9IFwiTGF5b3V0R3JpZFwiO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF8yMTY5NDA0NmU2MTE0ZTQyYTE1ZTFiNjI1ZWZiNzEyOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfMjE2OTQwNDZlNjExNGU0MmExNWUxYjYyNWVmYjcxMjkuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF8yMTY5NDA0NmU2MTE0ZTQyYTE1ZTFiNjI1ZWZiNzEyOS5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfNTIyOTQ0OTg2NzBiNDJmNDlkNTMxNmJmYWM1ZmVjZmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF81MjI5NDQ5ODY3MGI0MmY0OWQ1MzE2YmZhYzVmZWNmYS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzUyMjk0NDk4NjcwYjQyZjQ5ZDUzMTZiZmFjNWZlY2ZhLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF9mM2IzZmZiZWVkNDM0YzEzOGRiY2U1MDE3ODU1MTBhNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wX2YzYjNmZmJlZWQ0MzRjMTM4ZGJjZTUwMTc4NTUxMGE3LkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfZjNiM2ZmYmVlZDQzNGMxMzhkYmNlNTAxNzg1NTEwYTcuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoXzIxNjk0MDQ2ZTYxMTRlNDJhMTVlMWI2MjVlZmI3MTI5LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF81MjI5NDQ5ODY3MGI0MmY0OWQ1MzE2YmZhYzVmZWNmYSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfMjE2OTQwNDZlNjExNGU0MmExNWUxYjYyNWVmYjcxMjkuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wX2YzYjNmZmJlZWQ0MzRjMTM4ZGJjZTUwMTc4NTUxMGE3KTtcclxuXHJcblxyXG5HcmlkX2FlNTdmZWQ1YjJlNTRkMzI4ODg0YzUwZjJhYTI3NDczLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzIxNjk0MDQ2ZTYxMTRlNDJhMTVlMWI2MjVlZmI3MTI5O1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMzAzYjcwZDI1YzNhNDRhZjhhNWM4MTIxOGU3ODAyYzUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzMwM2I3MGQyNWMzYTQ0YWY4YTVjODEyMThlNzgwMmM1LkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2Y4MDc0NjE5ODk3NzRiODc5YmJiZTQ5M2FjN2Q2Y2M3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl9mODA3NDYxOTg5Nzc0Yjg3OWJiYmU0OTNhYzdkNmNjNy5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzQzNDI2OWNiMzYwMzRkMTlhNDkxNTBhNjUwNDI4MzRhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl80MzQyNjljYjM2MDM0ZDE5YTQ5MTUwYTY1MDQyODM0YS5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkX2FlNTdmZWQ1YjJlNTRkMzI4ODg0YzUwZjJhYTI3NDczLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzMwM2I3MGQyNWMzYTQ0YWY4YTVjODEyMThlNzgwMmM1KTtcclxuR3JpZF9hZTU3ZmVkNWIyZTU0ZDMyODg4NGM1MGYyYWEyNzQ3My5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl9mODA3NDYxOTg5Nzc0Yjg3OWJiYmU0OTNhYzdkNmNjNyk7XHJcbkdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzMuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNDM0MjY5Y2IzNjAzNGQxOWE0OTE1MGE2NTA0MjgzNGEpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fNjViNmJjNWFhZDNiNDg5ZTgxOGExZGI5OWY5ZGY1YjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fYzQ4NTA3MWZmMDZjNGIyMzllOWE3ZWMzNmViOGIxOTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF9hZTU3ZmVkNWIyZTU0ZDMyODg4NGM1MGYyYWEyNzQ3My5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl82NWI2YmM1YWFkM2I0ODllODE4YTFkYjk5ZjlkZjViNSk7XHJcbkdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzMuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fYzQ4NTA3MWZmMDZjNGIyMzllOWE3ZWMzNmViOGIxOTEpO1xyXG5cclxudmFyIEJ1dHRvbl9hNjkxNDkzZDNmM2Q0YWYxOWU2YTc5ODUwYWNhMGQ3MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuQnV0dG9uX2E2OTE0OTNkM2YzZDRhZjE5ZTZhNzk4NTBhY2EwZDcxLkNvbnRlbnQgPSBAXCLQktC10YDQvdGD0YLRjNGB0Y8g0L3QsCDQs9C70LDQstC90YPRjlwiO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fYTY5MTQ5M2QzZjNkNGFmMTllNmE3OTg1MGFjYTBkNzEsMik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCdXR0b25fYTY5MTQ5M2QzZjNkNGFmMTllNmE3OTg1MGFjYTBkNzEsMik7XHJcbkJ1dHRvbl9hNjkxNDkzZDNmM2Q0YWYxOWU2YTc5ODUwYWNhMGQ3MS5XaWR0aCA9IDI4MEQ7XHJcbkJ1dHRvbl9hNjkxNDkzZDNmM2Q0YWYxOWU2YTc5ODUwYWNhMGQ3MS5IZWlnaHQgPSA1MEQ7XHJcbkJ1dHRvbl9hNjkxNDkzZDNmM2Q0YWYxOWU2YTc5ODUwYWNhMGQ3MS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjI0LCBHID0gKGJ5dGUpMjE2LCBCID0gKGJ5dGUpMjIyIH0pO1xyXG5CdXR0b25fYTY5MTQ5M2QzZjNkNGFmMTllNmE3OTg1MGFjYTBkNzEuRm9udFNpemUgPSAyNUQ7XHJcbkJ1dHRvbl9hNjkxNDkzZDNmM2Q0YWYxOWU2YTc5ODUwYWNhMGQ3MS5DbGljayArPSBCdXR0b25fQ2xpY2s7XHJcbkJ1dHRvbl9hNjkxNDkzZDNmM2Q0YWYxOWU2YTc5ODUwYWNhMGQ3MS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5CdXR0b25fYTY5MTQ5M2QzZjNkNGFmMTllNmE3OTg1MGFjYTBkNzEuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG52YXIgQ29udHJvbFRlbXBsYXRlXzMwNTdlZjZiZDQyMjQ0ZmI4MDQ2OWY2OTA0ZjVhNmNkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2xUZW1wbGF0ZSgpO1xyXG5Db250cm9sVGVtcGxhdGVfMzA1N2VmNmJkNDIyNDRmYjgwNDY5ZjY5MDRmNWE2Y2QuVGFyZ2V0VHlwZSA9IHR5cGVvZihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24pO1xyXG5Db250cm9sVGVtcGxhdGVfMzA1N2VmNmJkNDIyNDRmYjgwNDY5ZjY5MDRmNWE2Y2QuU2V0TWV0aG9kVG9JbnN0YW50aWF0ZUZyYW1ld29ya1RlbXBsYXRlKChTeXN0ZW0uRnVuYzxXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCxXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZT4pdGhpcy5JbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfMzA1N2VmNmJkNDIyNDRmYjgwNDY5ZjY5MDRmNWE2Y2QpO1xyXG5cclxuQnV0dG9uX2E2OTE0OTNkM2YzZDRhZjE5ZTZhNzk4NTBhY2EwZDcxLlRlbXBsYXRlID0gQ29udHJvbFRlbXBsYXRlXzMwNTdlZjZiZDQyMjQ0ZmI4MDQ2OWY2OTA0ZjVhNmNkO1xyXG5cclxuXHJcbnZhciBCdXR0b25fM2IxNTFkNWQ2ZDkyNDI4Mjg3OThhOTlmZmU2Y2E0ZGMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuVXBsb2FkXCIsIEJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYyk7XHJcbkJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYy5OYW1lID0gXCJidG5VcGxvYWRcIjtcclxuQnV0dG9uXzNiMTUxZDVkNmQ5MjQyODI4Nzk4YTk5ZmZlNmNhNGRjLkNvbnRlbnQgPSBAXCLQl9Cw0LPRgNGD0LfQuNGC0YwgSlNPTiDRhNCw0LnQu1wiO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fM2IxNTFkNWQ2ZDkyNDI4Mjg3OThhOTlmZmU2Y2E0ZGMsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCdXR0b25fM2IxNTFkNWQ2ZDkyNDI4Mjg3OThhOTlmZmU2Y2E0ZGMsMSk7XHJcbkJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYy5XaWR0aCA9IDI4MEQ7XHJcbkJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYy5IZWlnaHQgPSA1MEQ7XHJcbkJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYy5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjQ5LCBHID0gKGJ5dGUpMjIyLCBCID0gKGJ5dGUpMjQyIH0pO1xyXG5CdXR0b25fM2IxNTFkNWQ2ZDkyNDI4Mjg3OThhOTlmZmU2Y2E0ZGMuRm9udFNpemUgPSAyNUQ7XHJcbkJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYy5DbGljayArPSBCdG5VcGxvYWRfQ2xpY2s7XHJcbkJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYy5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5CdXR0b25fM2IxNTFkNWQ2ZDkyNDI4Mjg3OThhOTlmZmU2Y2E0ZGMuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fM2IxNTFkNWQ2ZDkyNDI4Mjg3OThhOTlmZmU2Y2E0ZGMuVmVydGljYWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WZXJ0aWNhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYy5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV8zOGU4YWUxMjIyZWQ0MjMyYmI2NjFhOGUyMWFhM2Q0ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlXzM4ZThhZTEyMjJlZDQyMzJiYjY2MWE4ZTIxYWEzZDRlLlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlXzM4ZThhZTEyMjJlZDQyMzJiYjY2MWE4ZTIxYWEzZDRlLlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzM4ZThhZTEyMjJlZDQyMzJiYjY2MWE4ZTIxYWEzZDRlKTtcclxuXHJcbkJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYy5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV8zOGU4YWUxMjIyZWQ0MjMyYmI2NjFhOGUyMWFhM2Q0ZTtcclxuXHJcblxyXG52YXIgQnV0dG9uXzllMTU0ZTMyNjgxOTRlMDU4OTI0OWY4NDYwNTI4YTY3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0blByb2Nlc3NpbmdcIiwgQnV0dG9uXzllMTU0ZTMyNjgxOTRlMDU4OTI0OWY4NDYwNTI4YTY3KTtcclxuQnV0dG9uXzllMTU0ZTMyNjgxOTRlMDU4OTI0OWY4NDYwNTI4YTY3Lk5hbWUgPSBcImJ0blByb2Nlc3NpbmdcIjtcclxuQnV0dG9uXzllMTU0ZTMyNjgxOTRlMDU4OTI0OWY4NDYwNTI4YTY3LkNvbnRlbnQgPSBAXCLQn9C+0YHRgtGA0L7QuNGC0Ywg0LTQuNCw0LPRgNCw0LzQvNGDXCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl85ZTE1NGUzMjY4MTk0ZTA1ODkyNDlmODQ2MDUyOGE2NywwKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQnV0dG9uXzllMTU0ZTMyNjgxOTRlMDU4OTI0OWY4NDYwNTI4YTY3LDEpO1xyXG5CdXR0b25fOWUxNTRlMzI2ODE5NGUwNTg5MjQ5Zjg0NjA1MjhhNjcuV2lkdGggPSAyODBEO1xyXG5CdXR0b25fOWUxNTRlMzI2ODE5NGUwNTg5MjQ5Zjg0NjA1MjhhNjcuSGVpZ2h0ID0gNTBEO1xyXG5CdXR0b25fOWUxNTRlMzI2ODE5NGUwNTg5MjQ5Zjg0NjA1MjhhNjcuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9KTtcclxuQnV0dG9uXzllMTU0ZTMyNjgxOTRlMDU4OTI0OWY4NDYwNTI4YTY3LkZvbnRTaXplID0gMjVEO1xyXG5CdXR0b25fOWUxNTRlMzI2ODE5NGUwNTg5MjQ5Zjg0NjA1MjhhNjcuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQnV0dG9uXzllMTU0ZTMyNjgxOTRlMDU4OTI0OWY4NDYwNTI4YTY3LkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5CdXR0b25fOWUxNTRlMzI2ODE5NGUwNTg5MjQ5Zjg0NjA1MjhhNjcuVmVydGljYWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WZXJ0aWNhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl85ZTE1NGUzMjY4MTk0ZTA1ODkyNDlmODQ2MDUyOGE2Ny5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfNThkNjAxNDBmMTdmNGVlM2I5Mzk2OWI1NGU1NjI0YTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV81OGQ2MDE0MGYxN2Y0ZWUzYjkzOTY5YjU0ZTU2MjRhNi5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV81OGQ2MDE0MGYxN2Y0ZWUzYjkzOTY5YjU0ZTU2MjRhNi5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV81OGQ2MDE0MGYxN2Y0ZWUzYjkzOTY5YjU0ZTU2MjRhNik7XHJcblxyXG5CdXR0b25fOWUxNTRlMzI2ODE5NGUwNTg5MjQ5Zjg0NjA1MjhhNjcuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfNThkNjAxNDBmMTdmNGVlM2I5Mzk2OWI1NGU1NjI0YTY7XHJcblxyXG5cclxudmFyIFRleHRCb3hfODNlZTVmNjUzOThlNDVkOGJkZjU2NjRiMzgwZGEzMjIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuVGV4dEJveCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcInR4dEZpbGVcIiwgVGV4dEJveF84M2VlNWY2NTM5OGU0NWQ4YmRmNTY2NGIzODBkYTMyMik7XHJcblRleHRCb3hfODNlZTVmNjUzOThlNDVkOGJkZjU2NjRiMzgwZGEzMjIuTmFtZSA9IFwidHh0RmlsZVwiO1xyXG5UZXh0Qm94XzgzZWU1ZjY1Mzk4ZTQ1ZDhiZGY1NjY0YjM4MGRhMzIyLlRleHRXcmFwcGluZyA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRleHRXcmFwcGluZy5XcmFwO1xyXG5UZXh0Qm94XzgzZWU1ZjY1Mzk4ZTQ1ZDhiZGY1NjY0YjM4MGRhMzIyLlRleHQgPSBAXCJcIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coVGV4dEJveF84M2VlNWY2NTM5OGU0NWQ4YmRmNTY2NGIzODBkYTMyMiwxKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKFRleHRCb3hfODNlZTVmNjUzOThlNDVkOGJkZjU2NjRiMzgwZGEzMjIsMik7XHJcblRleHRCb3hfODNlZTVmNjUzOThlNDVkOGJkZjU2NjRiMzgwZGEzMjIuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxMCwgLTIwLCAxMCwgLTIwKTtcclxuVGV4dEJveF84M2VlNWY2NTM5OGU0NWQ4YmRmNTY2NGIzODBkYTMyMi5Gb250U2l6ZSA9IDIwRDtcclxuXHJcbkdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzMuQ2hpbGRyZW4uQWRkKEJ1dHRvbl9hNjkxNDkzZDNmM2Q0YWYxOWU2YTc5ODUwYWNhMGQ3MSk7XHJcbkdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzMuQ2hpbGRyZW4uQWRkKEJ1dHRvbl8zYjE1MWQ1ZDZkOTI0MjgyODc5OGE5OWZmZTZjYTRkYyk7XHJcbkdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzMuQ2hpbGRyZW4uQWRkKEJ1dHRvbl85ZTE1NGUzMjY4MTk0ZTA1ODkyNDlmODQ2MDUyOGE2Nyk7XHJcbkdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzMuQ2hpbGRyZW4uQWRkKFRleHRCb3hfODNlZTVmNjUzOThlNDVkOGJkZjU2NjRiMzgwZGEzMjIpO1xyXG5cclxuXHJcbkJvcmRlcl9kZmE4ZjZiYzg3NmY0ZTQzOGMzNjQzMjBhYWVkODYzOS5DaGlsZCA9IEdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzM7XHJcblxyXG5cclxuR3JpZF9iMDVkOWYwNWQzNjY0YjVjODJiMDhiMDk4NGRjN2MxMi5DaGlsZHJlbi5BZGQoQm9yZGVyXzliOTVlZDVhOTZmYTQwOGM4ODA4NGMzZDQ1NzUyMmVjKTtcclxuR3JpZF9iMDVkOWYwNWQzNjY0YjVjODJiMDhiMDk4NGRjN2MxMi5DaGlsZHJlbi5BZGQoQm9yZGVyX2RmYThmNmJjODc2ZjRlNDM4YzM2NDMyMGFhZWQ4NjM5KTtcclxuXHJcblxyXG50aGlzLkNvbnRlbnQgPSBHcmlkX2IwNWQ5ZjA1ZDM2NjRiNWM4MmIwOGIwOTg0ZGM3YzEyO1xyXG5cclxuXHJcblxyXG5lbGVtZW50Rm9yTGlzdCA9IEJvcmRlcl85Yjk1ZWQ1YTk2ZmE0MDhjODgwODRjM2Q0NTc1MjJlYztcclxuYnRuVXBsb2FkID0gQnV0dG9uXzNiMTUxZDVkNmQ5MjQyODI4Nzk4YTk5ZmZlNmNhNGRjO1xyXG5idG5Qcm9jZXNzaW5nID0gQnV0dG9uXzllMTU0ZTMyNjgxOTRlMDU4OTI0OWY4NDYwNTI4YTY3O1xyXG50eHRGaWxlID0gVGV4dEJveF84M2VlNWY2NTM5OGU0NWQ4YmRmNTY2NGIzODBkYTMyMjtcclxuTGF5b3V0R3JpZCA9IEdyaWRfYWU1N2ZlZDViMmU1NGQzMjg4ODRjNTBmMmFhMjc0NzM7XHJcbmVsZW1lbnQgPSBCb3JkZXJfZGZhOGY2YmM4NzZmNGU0MzhjMzY0MzIwYWFlZDg2Mzk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8zOGI4NzcxNWQwNmE0NzIxYWQxMGU3OGU0NzdmYmMyYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzM4Yjg3NzE1ZDA2YTQ3MjFhZDEwZTc4ZTQ3N2ZiYzJiIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMzhiODc3MTVkMDZhNDcyMWFkMTBlNzhlNDc3ZmJjMmIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8zOGI4NzcxNWQwNmE0NzIxYWQxMGU3OGU0NzdmYmMyYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMzhiODc3MTVkMDZhNDcyMWFkMTBlNzhlNDc3ZmJjMmIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzljODQ0NjFkMDkxMzQxYjhiYTVkMDJlYmM1ZmVmYzg3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfOWM4NDQ2MWQwOTEzNDFiOGJhNWQwMmViYzVmZWZjODcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV85Yzg0NDYxZDA5MTM0MWI4YmE1ZDAyZWJjNWZlZmM4NyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzljODQ0NjFkMDkxMzQxYjhiYTVkMDJlYmM1ZmVmYzg3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV85Yzg0NDYxZDA5MTM0MWI4YmE1ZDAyZWJjNWZlZmM4NyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMGU4NTc1ZDk0MzA3NDNkYzlmNGYxMzJkOTg4ZjYxY2MgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wZTg1NzVkOTQzMDc0M2RjOWY0ZjEzMmQ5ODhmNjFjYyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzBlODU3NWQ5NDMwNzQzZGM5ZjRmMTMyZDk4OGY2MWNjIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMGU4NTc1ZDk0MzA3NDNkYzlmNGYxMzJkOTg4ZjYxY2MgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzBlODU3NWQ5NDMwNzQzZGM5ZjRmMTMyZDk4OGY2MWNjIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UgSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzMwNTdlZjZiZDQyMjQ0ZmI4MDQ2OWY2OTA0ZjVhNmNkKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wgdGVtcGxhdGVPd25lcilcclxuICAgICAgICB7XHJcbnZhciB0ZW1wbGF0ZUluc3RhbmNlXzUwY2NkYzc2ODVjYjRkM2NiYmI2MWI0MGJhYTJkNDA4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UoKTtcclxudGVtcGxhdGVJbnN0YW5jZV81MGNjZGM3Njg1Y2I0ZDNjYmJiNjFiNDBiYWEyZDQwOC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVPd25lcjtcclxudmFyIEJvcmRlcl9lMmE2YTYyYmUyNmU0Y2E1YTEzOWY2ZmExMjA1MDQ0MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJPdXRlckJvcmRlclwiLCBCb3JkZXJfZTJhNmE2MmJlMjZlNGNhNWExMzlmNmZhMTIwNTA0NDEpO1xyXG5Cb3JkZXJfZTJhNmE2MmJlMjZlNGNhNWExMzlmNmZhMTIwNTA0NDEuTmFtZSA9IFwiT3V0ZXJCb3JkZXJcIjtcclxuQm9yZGVyX2UyYTZhNjJiZTI2ZTRjYTVhMTM5ZjZmYTEyMDUwNDQxLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBWaXN1YWxTdGF0ZUdyb3VwXzExMWY0NGNjNzRkOTRkYjY5MThlM2ViYWNhNjlhMjFiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlR3JvdXAoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb21tb25TdGF0ZXNcIiwgVmlzdWFsU3RhdGVHcm91cF8xMTFmNDRjYzc0ZDk0ZGI2OTE4ZTNlYmFjYTY5YTIxYik7XHJcblZpc3VhbFN0YXRlR3JvdXBfMTExZjQ0Y2M3NGQ5NGRiNjkxOGUzZWJhY2E2OWEyMWIuTmFtZSA9IFwiQ29tbW9uU3RhdGVzXCI7XHJcbnZhciBWaXN1YWxTdGF0ZV84MDFlZjQwNGJjNDM0MDY4YTBkZDczODcxZDQzYjNiNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk5vcm1hbFwiLCBWaXN1YWxTdGF0ZV84MDFlZjQwNGJjNDM0MDY4YTBkZDczODcxZDQzYjNiNyk7XHJcblZpc3VhbFN0YXRlXzgwMWVmNDA0YmM0MzQwNjhhMGRkNzM4NzFkNDNiM2I3Lk5hbWUgPSBcIk5vcm1hbFwiO1xyXG5cclxudmFyIFZpc3VhbFN0YXRlX2I2MWVlYmJiYWM3YzRjNTM5OGRjZTQ1NDk4ODY3ZTdkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUG9pbnRlck92ZXJcIiwgVmlzdWFsU3RhdGVfYjYxZWViYmJhYzdjNGM1Mzk4ZGNlNDU0OTg4NjdlN2QpO1xyXG5WaXN1YWxTdGF0ZV9iNjFlZWJiYmFjN2M0YzUzOThkY2U0NTQ5ODg2N2U3ZC5OYW1lID0gXCJQb2ludGVyT3ZlclwiO1xyXG52YXIgU3Rvcnlib2FyZF80NjdmMDE3NzQwMTU0MjdjOWM1YjdmZjk0ODhkZTU3MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMzAxZTcxNjU5NThjNGVhNWFiMTY1ZjhiNDE0MDc1OWEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMzAxZTcxNjU5NThjNGVhNWFiMTY1ZjhiNDE0MDc1OWEsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzNjMDFiYjQ0Y2ZlYjRhNDQ4NjFjMDU5NmQ4ZGVhMTgwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfM2MwMWJiNDRjZmViNGE0NDg2MWMwNTk2ZDhkZWExODAuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8zYzAxYmI0NGNmZWI0YTQ0ODYxYzA1OTZkOGRlYTE4MC5WYWx1ZSA9IEBcIiMxMTAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMzAxZTcxNjU5NThjNGVhNWFiMTY1ZjhiNDE0MDc1OWEuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzNjMDFiYjQ0Y2ZlYjRhNDQ4NjFjMDU5NmQ4ZGVhMTgwKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzQ2N2YwMTc3NDAxNTQyN2M5YzViN2ZmOTQ4OGRlNTcyLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zMDFlNzE2NTk1OGM0ZWE1YWIxNjVmOGI0MTQwNzU5YSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfYjYxZWViYmJhYzdjNGM1Mzk4ZGNlNDU0OTg4NjdlN2QuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfNDY3ZjAxNzc0MDE1NDI3YzljNWI3ZmY5NDg4ZGU1NzI7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzk2MjJhMjk1YTc0NjRiMTRiYjYxMjJkZDdlODQ0MWUzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUHJlc3NlZFwiLCBWaXN1YWxTdGF0ZV85NjIyYTI5NWE3NDY0YjE0YmI2MTIyZGQ3ZTg0NDFlMyk7XHJcblZpc3VhbFN0YXRlXzk2MjJhMjk1YTc0NjRiMTRiYjYxMjJkZDdlODQ0MWUzLk5hbWUgPSBcIlByZXNzZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfZWZkMmZjNDc4ZTAwNGQyNDlmYmNjZGJkZjQ5MmZkNGYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzU2Njg3MDViM2MzZTQxODZiMWM4Yzg0YTMwYjU5MGMyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzU2Njg3MDViM2MzZTQxODZiMWM4Yzg0YTMwYjU5MGMyLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV8yYzQwMGM5ZWI0OWM0Y2I5ODMwNGFlNTRmNTA5ZTgxNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzJjNDAwYzllYjQ5YzRjYjk4MzA0YWU1NGY1MDllODE0LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMmM0MDBjOWViNDljNGNiOTgzMDRhZTU0ZjUwOWU4MTQuVmFsdWUgPSBAXCIjMjIwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzU2Njg3MDViM2MzZTQxODZiMWM4Yzg0YTMwYjU5MGMyLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV8yYzQwMGM5ZWI0OWM0Y2I5ODMwNGFlNTRmNTA5ZTgxNCk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9lZmQyZmM0NzhlMDA0ZDI0OWZiY2NkYmRmNDkyZmQ0Zi5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNTY2ODcwNWIzYzNlNDE4NmIxYzhjODRhMzBiNTkwYzIpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzk2MjJhMjk1YTc0NjRiMTRiYjYxMjJkZDdlODQ0MWUzLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2VmZDJmYzQ3OGUwMDRkMjQ5ZmJjY2RiZGY0OTJmZDRmO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV84MGNkYmQyNWI0NGM0NjM2YTcwZmU1NjVhY2FjOGEyNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkRpc2FibGVkXCIsIFZpc3VhbFN0YXRlXzgwY2RiZDI1YjQ0YzQ2MzZhNzBmZTU2NWFjYWM4YTI0KTtcclxuVmlzdWFsU3RhdGVfODBjZGJkMjViNDRjNDYzNmE3MGZlNTY1YWNhYzhhMjQuTmFtZSA9IFwiRGlzYWJsZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfNTIyMTk2YTY1ODJkNGE3N2IxNjgyNWNlY2JhMjBlM2MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzMwMDRiNWE2NGQzMjQ5ZjY5ZDZlOTFmMWM0ZTAxNzE2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzMwMDRiNWE2NGQzMjQ5ZjY5ZDZlOTFmMWM0ZTAxNzE2LEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV82YWUzMTdjNmY3Y2I0OGIxOGZjZDgxNmZkNmJlOTVkMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzZhZTMxN2M2ZjdjYjQ4YjE4ZmNkODE2ZmQ2YmU5NWQwLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNmFlMzE3YzZmN2NiNDhiMThmY2Q4MTZmZDZiZTk1ZDAuVmFsdWUgPSBAXCIjMzNGRkZGRkZcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzMwMDRiNWE2NGQzMjQ5ZjY5ZDZlOTFmMWM0ZTAxNzE2LktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV82YWUzMTdjNmY3Y2I0OGIxOGZjZDgxNmZkNmJlOTVkMCk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF81MjIxOTZhNjU4MmQ0YTc3YjE2ODI1Y2VjYmEyMGUzYy5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMzAwNGI1YTY0ZDMyNDlmNjlkNmU5MWYxYzRlMDE3MTYpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzgwY2RiZDI1YjQ0YzQ2MzZhNzBmZTU2NWFjYWM4YTI0LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzUyMjE5NmE2NTgyZDRhNzdiMTY4MjVjZWNiYTIwZTNjO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlR3JvdXBfMTExZjQ0Y2M3NGQ5NGRiNjkxOGUzZWJhY2E2OWEyMWIuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV84MDFlZjQwNGJjNDM0MDY4YTBkZDczODcxZDQzYjNiNyk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMTExZjQ0Y2M3NGQ5NGRiNjkxOGUzZWJhY2E2OWEyMWIuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV9iNjFlZWJiYmFjN2M0YzUzOThkY2U0NTQ5ODg2N2U3ZCk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMTExZjQ0Y2M3NGQ5NGRiNjkxOGUzZWJhY2E2OWEyMWIuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV85NjIyYTI5NWE3NDY0YjE0YmI2MTIyZGQ3ZTg0NDFlMyk7XHJcblZpc3VhbFN0YXRlR3JvdXBfMTExZjQ0Y2M3NGQ5NGRiNjkxOGUzZWJhY2E2OWEyMWIuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV84MGNkYmQyNWI0NGM0NjM2YTcwZmU1NjVhY2FjOGEyNCk7XHJcblxyXG5cclxudGVtcGxhdGVPd25lci5JTlRFUk5BTF9HZXRWaXN1YWxTdGF0ZUdyb3VwcygpLkFkZChWaXN1YWxTdGF0ZUdyb3VwXzExMWY0NGNjNzRkOTRkYjY5MThlM2ViYWNhNjlhMjFiKTtcclxuXHJcbnZhciBCb3JkZXJfMTE4NWFlNTczY2EwNDg0ZTg0NzM2YWI5MzgzMGYyNTUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiSW5uZXJCb3JkZXJcIiwgQm9yZGVyXzExODVhZTU3M2NhMDQ4NGU4NDczNmFiOTM4MzBmMjU1KTtcclxuQm9yZGVyXzExODVhZTU3M2NhMDQ4NGU4NDczNmFiOTM4MzBmMjU1Lk5hbWUgPSBcIklubmVyQm9yZGVyXCI7XHJcbkJvcmRlcl8xMTg1YWU1NzNjYTA0ODRlODQ3MzZhYjkzODMwZjI1NS5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgQ29udGVudFByZXNlbnRlcl9jMzRjZWY2YzI5NzQ0NzNkODZlMzU5MzdhOGU5ODUwNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50UHJlc2VudGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29udGVudFByZXNlbnRlclwiLCBDb250ZW50UHJlc2VudGVyX2MzNGNlZjZjMjk3NDQ3M2Q4NmUzNTkzN2E4ZTk4NTA0KTtcclxuQ29udGVudFByZXNlbnRlcl9jMzRjZWY2YzI5NzQ0NzNkODZlMzU5MzdhOGU5ODUwNC5OYW1lID0gXCJDb250ZW50UHJlc2VudGVyXCI7XHJcbnZhciBCaW5kaW5nX2Y2ZjllNTQ2M2MwMjRlNTU4NTA5NmUyOTgyYjUwZjRlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2Y2ZjllNTQ2M2MwMjRlNTU4NTA5NmUyOTgyYjUwZjRlLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRUZW1wbGF0ZVwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzRhNjZiNGFkNGIyZjRkN2Y4Nzk1M2UxNjFmYTk2MzE1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNGE2NmI0YWQ0YjJmNGQ3Zjg3OTUzZTE2MWZhOTYzMTUuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZjZmOWU1NDYzYzAyNGU1NTg1MDk2ZTI5ODJiNTBmNGUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV80YTY2YjRhZDRiMmY0ZDdmODc5NTNlMTYxZmE5NjMxNTtcclxuXHJcblxyXG5CaW5kaW5nX2Y2ZjllNTQ2M2MwMjRlNTU4NTA5NmUyOTgyYjUwZjRlLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzUwY2NkYzc2ODVjYjRkM2NiYmI2MWI0MGJhYTJkNDA4O1xyXG5cclxudmFyIEJpbmRpbmdfNjU2MGFlMzc3OTU2NGNmNWJlOWRlNzQyNGYxNzQzNzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNjU2MGFlMzc3OTU2NGNmNWJlOWRlNzQyNGYxNzQzNzYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2NjOGJiNjljMzBmMDRiNTFhNTY0ZTcxNmFiNjAwOWY0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfY2M4YmI2OWMzMGYwNGI1MWE1NjRlNzE2YWI2MDA5ZjQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNjU2MGFlMzc3OTU2NGNmNWJlOWRlNzQyNGYxNzQzNzYuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9jYzhiYjY5YzMwZjA0YjUxYTU2NGU3MTZhYjYwMDlmNDtcclxuXHJcblxyXG5CaW5kaW5nXzY1NjBhZTM3Nzk1NjRjZjViZTlkZTc0MjRmMTc0Mzc2LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzUwY2NkYzc2ODVjYjRkM2NiYmI2MWI0MGJhYTJkNDA4O1xyXG5cclxudmFyIEJpbmRpbmdfYmNjOTE4OTA5OTQ5NGNlYTkxNGU3NTBiZGRhMmUwZmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYmNjOTE4OTA5OTQ5NGNlYTkxNGU3NTBiZGRhMmUwZmQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiUGFkZGluZ1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2E3NjBhOWUyYjBjYTQ4OTk5OTQ4OTA4NTI3Y2Q3ZmZkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYTc2MGE5ZTJiMGNhNDg5OTk5NDg5MDg1MjdjZDdmZmQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYmNjOTE4OTA5OTQ5NGNlYTkxNGU3NTBiZGRhMmUwZmQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9hNzYwYTllMmIwY2E0ODk5OTk0ODkwODUyN2NkN2ZmZDtcclxuXHJcblxyXG5CaW5kaW5nX2JjYzkxODkwOTk0OTRjZWE5MTRlNzUwYmRkYTJlMGZkLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzUwY2NkYzc2ODVjYjRkM2NiYmI2MWI0MGJhYTJkNDA4O1xyXG5cclxudmFyIEJpbmRpbmdfNjg1ZGY1NTNlNDc5NDRmMTk4YTI0YTE1NjgwNGE5ZmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNjg1ZGY1NTNlNDc5NDRmMTk4YTI0YTE1NjgwNGE5ZmEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiSG9yaXpvbnRhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV81M2JkMGQ5NmYzYWM0OTQ0YWJlZjNkZTk2OTYxYzg4YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzUzYmQwZDk2ZjNhYzQ5NDRhYmVmM2RlOTY5NjFjODhhLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzY4NWRmNTUzZTQ3OTQ0ZjE5OGEyNGExNTY4MDRhOWZhLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNTNiZDBkOTZmM2FjNDk0NGFiZWYzZGU5Njk2MWM4OGE7XHJcblxyXG5cclxuQmluZGluZ182ODVkZjU1M2U0Nzk0NGYxOThhMjRhMTU2ODA0YTlmYS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV81MGNjZGM3Njg1Y2I0ZDNjYmJiNjFiNDBiYWEyZDQwODtcclxuXHJcbnZhciBCaW5kaW5nXzk4ZDZmZmYxY2FiZTRkMjdiN2M4ZjM4NjA0OTA0M2I4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzk4ZDZmZmYxY2FiZTRkMjdiN2M4ZjM4NjA0OTA0M2I4LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzhjZDkxZDYyNTFmNjQ3Nzg5Njc4ZDAwZjU5NTJmYTgzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOGNkOTFkNjI1MWY2NDc3ODk2NzhkMDBmNTk1MmZhODMuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfOThkNmZmZjFjYWJlNGQyN2I3YzhmMzg2MDQ5MDQzYjguUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV84Y2Q5MWQ2MjUxZjY0Nzc4OTY3OGQwMGY1OTUyZmE4MztcclxuXHJcblxyXG5CaW5kaW5nXzk4ZDZmZmYxY2FiZTRkMjdiN2M4ZjM4NjA0OTA0M2I4LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzUwY2NkYzc2ODVjYjRkM2NiYmI2MWI0MGJhYTJkNDA4O1xyXG5cclxuXHJcbkJvcmRlcl8xMTg1YWU1NzNjYTA0ODRlODQ3MzZhYjkzODMwZjI1NS5DaGlsZCA9IENvbnRlbnRQcmVzZW50ZXJfYzM0Y2VmNmMyOTc0NDczZDg2ZTM1OTM3YThlOTg1MDQ7XHJcblxyXG52YXIgQmluZGluZ18xY2QyOGY1MTdlM2M0OTE5OTgwM2NhMzdlMjY4N2FjYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18xY2QyOGY1MTdlM2M0OTE5OTgwM2NhMzdlMjY4N2FjYS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZjgyNzZjZGQ4MDMwNDA5MGE4YjA2YjkyZjg0ZWMxNTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9mODI3NmNkZDgwMzA0MDkwYThiMDZiOTJmODRlYzE1MS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18xY2QyOGY1MTdlM2M0OTE5OTgwM2NhMzdlMjY4N2FjYS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2Y4Mjc2Y2RkODAzMDQwOTBhOGIwNmI5MmY4NGVjMTUxO1xyXG5cclxuXHJcbkJpbmRpbmdfMWNkMjhmNTE3ZTNjNDkxOTk4MDNjYTM3ZTI2ODdhY2EuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNTBjY2RjNzY4NWNiNGQzY2JiYjYxYjQwYmFhMmQ0MDg7XHJcblxyXG5cclxuQm9yZGVyX2UyYTZhNjJiZTI2ZTRjYTVhMTM5ZjZmYTEyMDUwNDQxLkNoaWxkID0gQm9yZGVyXzExODVhZTU3M2NhMDQ4NGU4NDczNmFiOTM4MzBmMjU1O1xyXG5cclxudmFyIEJpbmRpbmdfZDU2YTVkODNmNDkwNDkxZWE1NzdlMmFjYWJhYTk5YTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZDU2YTVkODNmNDkwNDkxZWE1NzdlMmFjYWJhYTk5YTguUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzkxNWYzODlhZTkwZTRlOTI4ZmQzNTY1ZjIwMDA0N2NiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOTE1ZjM4OWFlOTBlNGU5MjhmZDM1NjVmMjAwMDQ3Y2IuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZDU2YTVkODNmNDkwNDkxZWE1NzdlMmFjYWJhYTk5YTguUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85MTVmMzg5YWU5MGU0ZTkyOGZkMzU2NWYyMDAwNDdjYjtcclxuXHJcblxyXG5CaW5kaW5nX2Q1NmE1ZDgzZjQ5MDQ5MWVhNTc3ZTJhY2FiYWE5OWE4LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzUwY2NkYzc2ODVjYjRkM2NiYmI2MWI0MGJhYTJkNDA4O1xyXG5cclxudmFyIEJpbmRpbmdfMjA3YzkwMDhhM2MyNGY4NDkxY2ZhNDJlNjM3ODI1NWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMjA3YzkwMDhhM2MyNGY4NDkxY2ZhNDJlNjM3ODI1NWIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyQnJ1c2hcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8zZTY1MjI1ZDQzZjQ0YzZkOWUyZjQwOGJhOWQxNzhkZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzNlNjUyMjVkNDNmNDRjNmQ5ZTJmNDA4YmE5ZDE3OGRlLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzIwN2M5MDA4YTNjMjRmODQ5MWNmYTQyZTYzNzgyNTViLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfM2U2NTIyNWQ0M2Y0NGM2ZDllMmY0MDhiYTlkMTc4ZGU7XHJcblxyXG5cclxuQmluZGluZ18yMDdjOTAwOGEzYzI0Zjg0OTFjZmE0MmU2Mzc4MjU1Yi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV81MGNjZGM3Njg1Y2I0ZDNjYmJiNjFiNDBiYWEyZDQwODtcclxuXHJcbnZhciBCaW5kaW5nXzJmY2U3NjBiMDdhZDQ1MjQ5OGU1YjVkMDU4ZjI0MjUzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzJmY2U3NjBiMDdhZDQ1MjQ5OGU1YjVkMDU4ZjI0MjUzLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlclRoaWNrbmVzc1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzM2YzljMTcwMGEwNDRjYzU5ZTU5OTc2ZjM1MWVkNjRmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMzZjOWMxNzAwYTA0NGNjNTllNTk5NzZmMzUxZWQ2NGYuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMmZjZTc2MGIwN2FkNDUyNDk4ZTViNWQwNThmMjQyNTMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8zNmM5YzE3MDBhMDQ0Y2M1OWU1OTk3NmYzNTFlZDY0ZjtcclxuXHJcblxyXG5CaW5kaW5nXzJmY2U3NjBiMDdhZDQ1MjQ5OGU1YjVkMDU4ZjI0MjUzLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzUwY2NkYzc2ODVjYjRkM2NiYmI2MWI0MGJhYTJkNDA4O1xyXG5cclxuXHJcblxyXG5Db250ZW50UHJlc2VudGVyX2MzNGNlZjZjMjk3NDQ3M2Q4NmUzNTkzN2E4ZTk4NTA0LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFRlbXBsYXRlUHJvcGVydHksIEJpbmRpbmdfZjZmOWU1NDYzYzAyNGU1NTg1MDk2ZTI5ODJiNTBmNGUpO1xyXG5Db250ZW50UHJlc2VudGVyX2MzNGNlZjZjMjk3NDQ3M2Q4NmUzNTkzN2E4ZTk4NTA0LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFByb3BlcnR5LCBCaW5kaW5nXzY1NjBhZTM3Nzk1NjRjZjViZTlkZTc0MjRmMTc0Mzc2KTtcclxuQ29udGVudFByZXNlbnRlcl9jMzRjZWY2YzI5NzQ0NzNkODZlMzU5MzdhOGU5ODUwNC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuTWFyZ2luUHJvcGVydHksIEJpbmRpbmdfYmNjOTE4OTA5OTQ5NGNlYTkxNGU3NTBiZGRhMmUwZmQpO1xyXG5Db250ZW50UHJlc2VudGVyX2MzNGNlZjZjMjk3NDQ3M2Q4NmUzNTkzN2E4ZTk4NTA0LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5Ib3Jpem9udGFsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfNjg1ZGY1NTNlNDc5NDRmMTk4YTI0YTE1NjgwNGE5ZmEpO1xyXG5Db250ZW50UHJlc2VudGVyX2MzNGNlZjZjMjk3NDQ3M2Q4NmUzNTkzN2E4ZTk4NTA0LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5WZXJ0aWNhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nXzk4ZDZmZmYxY2FiZTRkMjdiN2M4ZjM4NjA0OTA0M2I4KTtcclxuQm9yZGVyXzExODVhZTU3M2NhMDQ4NGU4NDczNmFiOTM4MzBmMjU1LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ18xY2QyOGY1MTdlM2M0OTE5OTgwM2NhMzdlMjY4N2FjYSk7XHJcbkJvcmRlcl9lMmE2YTYyYmUyNmU0Y2E1YTEzOWY2ZmExMjA1MDQ0MS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfZDU2YTVkODNmNDkwNDkxZWE1NzdlMmFjYWJhYTk5YTgpO1xyXG5Cb3JkZXJfZTJhNmE2MmJlMjZlNGNhNWExMzlmNmZhMTIwNTA0NDEuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyQnJ1c2hQcm9wZXJ0eSwgQmluZGluZ18yMDdjOTAwOGEzYzI0Zjg0OTFjZmE0MmU2Mzc4MjU1Yik7XHJcbkJvcmRlcl9lMmE2YTYyYmUyNmU0Y2E1YTEzOWY2ZmExMjA1MDQ0MS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJUaGlja25lc3NQcm9wZXJ0eSwgQmluZGluZ18yZmNlNzYwYjA3YWQ0NTI0OThlNWI1ZDA1OGYyNDI1Myk7XHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zMDFlNzE2NTk1OGM0ZWE1YWIxNjVmOGI0MTQwNzU5YSxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8zOGI4NzcxNWQwNmE0NzIxYWQxMGU3OGU0NzdmYmMyYixcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzM4Yjg3NzE1ZDA2YTQ3MjFhZDEwZTc4ZTQ3N2ZiYzJiLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMzhiODc3MTVkMDZhNDcyMWFkMTBlNzhlNDc3ZmJjMmIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8zOGI4NzcxNWQwNmE0NzIxYWQxMGU3OGU0NzdmYmMyYixcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzM4Yjg3NzE1ZDA2YTQ3MjFhZDEwZTc4ZTQ3N2ZiYzJiKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zMDFlNzE2NTk1OGM0ZWE1YWIxNjVmOGI0MTQwNzU5YSwgQm9yZGVyXzExODVhZTU3M2NhMDQ4NGU4NDczNmFiOTM4MzBmMjU1KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181NjY4NzA1YjNjM2U0MTg2YjFjOGM4NGEzMGI1OTBjMixcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV85Yzg0NDYxZDA5MTM0MWI4YmE1ZDAyZWJjNWZlZmM4NyxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzljODQ0NjFkMDkxMzQxYjhiYTVkMDJlYmM1ZmVmYzg3LFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfOWM4NDQ2MWQwOTEzNDFiOGJhNWQwMmViYzVmZWZjODcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV85Yzg0NDYxZDA5MTM0MWI4YmE1ZDAyZWJjNWZlZmM4NyxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzljODQ0NjFkMDkxMzQxYjhiYTVkMDJlYmM1ZmVmYzg3KSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181NjY4NzA1YjNjM2U0MTg2YjFjOGM4NGEzMGI1OTBjMiwgQm9yZGVyXzExODVhZTU3M2NhMDQ4NGU4NDczNmFiOTM4MzBmMjU1KTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zMDA0YjVhNjRkMzI0OWY2OWQ2ZTkxZjFjNGUwMTcxNixcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8wZTg1NzVkOTQzMDc0M2RjOWY0ZjEzMmQ5ODhmNjFjYyxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzBlODU3NWQ5NDMwNzQzZGM5ZjRmMTMyZDk4OGY2MWNjLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMGU4NTc1ZDk0MzA3NDNkYzlmNGYxMzJkOTg4ZjYxY2MsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8wZTg1NzVkOTQzMDc0M2RjOWY0ZjEzMmQ5ODhmNjFjYyxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzBlODU3NWQ5NDMwNzQzZGM5ZjRmMTMyZDk4OGY2MWNjKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18zMDA0YjVhNjRkMzI0OWY2OWQ2ZTkxZjFjNGUwMTcxNiwgQm9yZGVyXzExODVhZTU3M2NhMDQ4NGU4NDczNmFiOTM4MzBmMjU1KTtcclxuXHJcbnRlbXBsYXRlSW5zdGFuY2VfNTBjY2RjNzY4NWNiNGQzY2JiYjYxYjQwYmFhMmQ0MDguVGVtcGxhdGVDb250ZW50ID0gQm9yZGVyX2UyYTZhNjJiZTI2ZTRjYTVhMTM5ZjZmYTEyMDUwNDQxO1xyXG5yZXR1cm4gdGVtcGxhdGVJbnN0YW5jZV81MGNjZGM3Njg1Y2I0ZDNjYmJiNjFiNDBiYWEyZDQwODtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZjBmOTMzMjFlYWZlNDE0ZDljNjM2ODkyNzY1MzBiZDcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9mMGY5MzMyMWVhZmU0MTRkOWM2MzY4OTI3NjUzMGJkNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2YwZjkzMzIxZWFmZTQxNGQ5YzYzNjg5Mjc2NTMwYmQ3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZjBmOTMzMjFlYWZlNDE0ZDljNjM2ODkyNzY1MzBiZDcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2YwZjkzMzIxZWFmZTQxNGQ5YzYzNjg5Mjc2NTMwYmQ3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV80NTMzMTA3NThhZTA0YjhlOWM5Y2UwN2VkNjdhM2RjMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzQ1MzMxMDc1OGFlMDRiOGU5YzljZTA3ZWQ2N2EzZGMwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNDUzMzEwNzU4YWUwNGI4ZTljOWNlMDdlZDY3YTNkYzAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV80NTMzMTA3NThhZTA0YjhlOWM5Y2UwN2VkNjdhM2RjMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNDUzMzEwNzU4YWUwNGI4ZTljOWNlMDdlZDY3YTNkYzAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzNiMWJjMGI4OGVlYzQ1MzhiZWMwMzNlNmIyZDgwODJmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfM2IxYmMwYjg4ZWVjNDUzOGJlYzAzM2U2YjJkODA4MmYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8zYjFiYzBiODhlZWM0NTM4YmVjMDMzZTZiMmQ4MDgyZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzNiMWJjMGI4OGVlYzQ1MzhiZWMwMzNlNmIyZDgwODJmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8zYjFiYzBiODhlZWM0NTM4YmVjMDMzZTZiMmQ4MDgyZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlIEluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV8zOGU4YWUxMjIyZWQ0MjMyYmI2NjFhOGUyMWFhM2Q0ZShnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sIHRlbXBsYXRlT3duZXIpXHJcbiAgICAgICAge1xyXG52YXIgdGVtcGxhdGVJbnN0YW5jZV8wNGM4M2QzZTRjN2E0Yjg5YWM1YTEyZjVkNTU3N2U4OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlKCk7XHJcbnRlbXBsYXRlSW5zdGFuY2VfMDRjODNkM2U0YzdhNGI4OWFjNWExMmY1ZDU1NzdlODkuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlT3duZXI7XHJcbnZhciBCb3JkZXJfY2ZkOGM3NDU5MDczNDlmZjhhNWNiYmRjM2IyMTAwMDggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiT3V0ZXJCb3JkZXJcIiwgQm9yZGVyX2NmZDhjNzQ1OTA3MzQ5ZmY4YTVjYmJkYzNiMjEwMDA4KTtcclxuQm9yZGVyX2NmZDhjNzQ1OTA3MzQ5ZmY4YTVjYmJkYzNiMjEwMDA4Lk5hbWUgPSBcIk91dGVyQm9yZGVyXCI7XHJcbkJvcmRlcl9jZmQ4Yzc0NTkwNzM0OWZmOGE1Y2JiZGMzYjIxMDAwOC5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgVmlzdWFsU3RhdGVHcm91cF8yODE5NmU3MDA1Mjc0ODY1OWVhOWEzZWMzODA4Y2M1ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZUdyb3VwKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29tbW9uU3RhdGVzXCIsIFZpc3VhbFN0YXRlR3JvdXBfMjgxOTZlNzAwNTI3NDg2NTllYTlhM2VjMzgwOGNjNWYpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzI4MTk2ZTcwMDUyNzQ4NjU5ZWE5YTNlYzM4MDhjYzVmLk5hbWUgPSBcIkNvbW1vblN0YXRlc1wiO1xyXG52YXIgVmlzdWFsU3RhdGVfZTRhYjQ3MDUzOGJiNDg3OGFjMWJkMDA5YWZkMmIzNGEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJOb3JtYWxcIiwgVmlzdWFsU3RhdGVfZTRhYjQ3MDUzOGJiNDg3OGFjMWJkMDA5YWZkMmIzNGEpO1xyXG5WaXN1YWxTdGF0ZV9lNGFiNDcwNTM4YmI0ODc4YWMxYmQwMDlhZmQyYjM0YS5OYW1lID0gXCJOb3JtYWxcIjtcclxuXHJcbnZhciBWaXN1YWxTdGF0ZV8wNThiMDJmODVjZmI0MmFlYjZmZGE4ODFhMjExMmVkNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlBvaW50ZXJPdmVyXCIsIFZpc3VhbFN0YXRlXzA1OGIwMmY4NWNmYjQyYWViNmZkYTg4MWEyMTEyZWQ1KTtcclxuVmlzdWFsU3RhdGVfMDU4YjAyZjg1Y2ZiNDJhZWI2ZmRhODgxYTIxMTJlZDUuTmFtZSA9IFwiUG9pbnRlck92ZXJcIjtcclxudmFyIFN0b3J5Ym9hcmRfZDZlZDc4MmQzNzgyNDM1MGE1NzViZTMxODNiNDQ0ZTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E5MWVhY2MzMWI4NjQxYTM4NjVjM2FhMjNhOWIwYWM2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E5MWVhY2MzMWI4NjQxYTM4NjVjM2FhMjNhOWIwYWM2LEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wOGFlMzE2YjA4OTI0MzJiYmRiNmFhNDhlZTRkMDA0NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzA4YWUzMTZiMDg5MjQzMmJiZGI2YWE0OGVlNGQwMDQ1LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMDhhZTMxNmIwODkyNDMyYmJkYjZhYTQ4ZWU0ZDAwNDUuVmFsdWUgPSBAXCIjMTEwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2E5MWVhY2MzMWI4NjQxYTM4NjVjM2FhMjNhOWIwYWM2LktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wOGFlMzE2YjA4OTI0MzJiYmRiNmFhNDhlZTRkMDA0NSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9kNmVkNzgyZDM3ODI0MzUwYTU3NWJlMzE4M2I0NDRlNi5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYTkxZWFjYzMxYjg2NDFhMzg2NWMzYWEyM2E5YjBhYzYpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzA1OGIwMmY4NWNmYjQyYWViNmZkYTg4MWEyMTEyZWQ1LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2Q2ZWQ3ODJkMzc4MjQzNTBhNTc1YmUzMTgzYjQ0NGU2O1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV8xMzQ5MmE4MTM5MTI0YTExYTFjZWVhN2IzOTRhMDg2MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlByZXNzZWRcIiwgVmlzdWFsU3RhdGVfMTM0OTJhODEzOTEyNGExMWExY2VlYTdiMzk0YTA4NjEpO1xyXG5WaXN1YWxTdGF0ZV8xMzQ5MmE4MTM5MTI0YTExYTFjZWVhN2IzOTRhMDg2MS5OYW1lID0gXCJQcmVzc2VkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzliZjUxZWExNDRmZjQzY2NiMGYyZjRkMjQ1NmNhZDNlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hYTVlNDI3ZGNmYjE0YmNlODJlYmYwMWU5ZGJhZTEyMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hYTVlNDI3ZGNmYjE0YmNlODJlYmYwMWU5ZGJhZTEyMixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNzRmMzhkNzFlYTg2NDc0NDg4NjA3NjY0OWJiNGQ1MDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV83NGYzOGQ3MWVhODY0NzQ0ODg2MDc2NjQ5YmI0ZDUwOS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzc0ZjM4ZDcxZWE4NjQ3NDQ4ODYwNzY2NDliYjRkNTA5LlZhbHVlID0gQFwiIzIyMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hYTVlNDI3ZGNmYjE0YmNlODJlYmYwMWU5ZGJhZTEyMi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNzRmMzhkNzFlYTg2NDc0NDg4NjA3NjY0OWJiNGQ1MDkpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfOWJmNTFlYTE0NGZmNDNjY2IwZjJmNGQyNDU2Y2FkM2UuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2FhNWU0MjdkY2ZiMTRiY2U4MmViZjAxZTlkYmFlMTIyKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV8xMzQ5MmE4MTM5MTI0YTExYTFjZWVhN2IzOTRhMDg2MS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF85YmY1MWVhMTQ0ZmY0M2NjYjBmMmY0ZDI0NTZjYWQzZTtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfNjgzZDRlNDZmZjA1NDU1Yjk1ZTI2YjQ4YTcwYTQ0MTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJEaXNhYmxlZFwiLCBWaXN1YWxTdGF0ZV82ODNkNGU0NmZmMDU0NTViOTVlMjZiNDhhNzBhNDQxOSk7XHJcblZpc3VhbFN0YXRlXzY4M2Q0ZTQ2ZmYwNTQ1NWI5NWUyNmI0OGE3MGE0NDE5Lk5hbWUgPSBcIkRpc2FibGVkXCI7XHJcbnZhciBTdG9yeWJvYXJkX2UwNjA2NTQ3MjhkYTQ0YmZhZGQ3OTAyOThlZmUyZDI3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iNzQ2NzM0OTkyNDU0ZjlkOWFlZWY4ZmQ3M2E0MjViYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iNzQ2NzM0OTkyNDU0ZjlkOWFlZWY4ZmQ3M2E0MjViYyxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYTgyYTlhZGM5ODgzNGZjNzkwZWE2ZWY1MDk1NDM1NzQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9hODJhOWFkYzk4ODM0ZmM3OTBlYTZlZjUwOTU0MzU3NC5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2E4MmE5YWRjOTg4MzRmYzc5MGVhNmVmNTA5NTQzNTc0LlZhbHVlID0gQFwiIzMzRkZGRkZGXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iNzQ2NzM0OTkyNDU0ZjlkOWFlZWY4ZmQ3M2E0MjViYy5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYTgyYTlhZGM5ODgzNGZjNzkwZWE2ZWY1MDk1NDM1NzQpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfZTA2MDY1NDcyOGRhNDRiZmFkZDc5MDI5OGVmZTJkMjcuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2I3NDY3MzQ5OTI0NTRmOWQ5YWVlZjhmZDczYTQyNWJjKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV82ODNkNGU0NmZmMDU0NTViOTVlMjZiNDhhNzBhNDQxOS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF9lMDYwNjU0NzI4ZGE0NGJmYWRkNzkwMjk4ZWZlMmQyNztcclxuXHJcblxyXG5WaXN1YWxTdGF0ZUdyb3VwXzI4MTk2ZTcwMDUyNzQ4NjU5ZWE5YTNlYzM4MDhjYzVmLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfZTRhYjQ3MDUzOGJiNDg3OGFjMWJkMDA5YWZkMmIzNGEpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzI4MTk2ZTcwMDUyNzQ4NjU5ZWE5YTNlYzM4MDhjYzVmLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfMDU4YjAyZjg1Y2ZiNDJhZWI2ZmRhODgxYTIxMTJlZDUpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzI4MTk2ZTcwMDUyNzQ4NjU5ZWE5YTNlYzM4MDhjYzVmLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfMTM0OTJhODEzOTEyNGExMWExY2VlYTdiMzk0YTA4NjEpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwXzI4MTk2ZTcwMDUyNzQ4NjU5ZWE5YTNlYzM4MDhjYzVmLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNjgzZDRlNDZmZjA1NDU1Yjk1ZTI2YjQ4YTcwYTQ0MTkpO1xyXG5cclxuXHJcbnRlbXBsYXRlT3duZXIuSU5URVJOQUxfR2V0VmlzdWFsU3RhdGVHcm91cHMoKS5BZGQoVmlzdWFsU3RhdGVHcm91cF8yODE5NmU3MDA1Mjc0ODY1OWVhOWEzZWMzODA4Y2M1Zik7XHJcblxyXG52YXIgQm9yZGVyX2Y3OWU2NTUzM2NiYTQzOTg5ZWFkYzVlM2NkM2E3YjkxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIklubmVyQm9yZGVyXCIsIEJvcmRlcl9mNzllNjU1MzNjYmE0Mzk4OWVhZGM1ZTNjZDNhN2I5MSk7XHJcbkJvcmRlcl9mNzllNjU1MzNjYmE0Mzk4OWVhZGM1ZTNjZDNhN2I5MS5OYW1lID0gXCJJbm5lckJvcmRlclwiO1xyXG5Cb3JkZXJfZjc5ZTY1NTMzY2JhNDM5ODllYWRjNWUzY2QzYTdiOTEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENvbnRlbnRQcmVzZW50ZXJfMDlkZTJkYTA0N2U3NDBmNmIwNGVmNjU0MmE4MTdiOWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudFByZXNlbnRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbnRlbnRQcmVzZW50ZXJcIiwgQ29udGVudFByZXNlbnRlcl8wOWRlMmRhMDQ3ZTc0MGY2YjA0ZWY2NTQyYTgxN2I5Yik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMDlkZTJkYTA0N2U3NDBmNmIwNGVmNjU0MmE4MTdiOWIuTmFtZSA9IFwiQ29udGVudFByZXNlbnRlclwiO1xyXG52YXIgQmluZGluZ183M2QxYTFiNjZkMmQ0MGNkYTdhMjc5YTFjZGEwZGE1MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ183M2QxYTFiNjZkMmQ0MGNkYTdhMjc5YTFjZGEwZGE1Mi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50VGVtcGxhdGVcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9iOTQyYmZhMmM3NzQ0MWQ0YTY4ZGMwMmE3Nzc4NGU2NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2I5NDJiZmEyYzc3NDQxZDRhNjhkYzAyYTc3Nzg0ZTY3Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzczZDFhMWI2NmQyZDQwY2RhN2EyNzlhMWNkYTBkYTUyLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYjk0MmJmYTJjNzc0NDFkNGE2OGRjMDJhNzc3ODRlNjc7XHJcblxyXG5cclxuQmluZGluZ183M2QxYTFiNjZkMmQ0MGNkYTdhMjc5YTFjZGEwZGE1Mi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNGM4M2QzZTRjN2E0Yjg5YWM1YTEyZjVkNTU3N2U4OTtcclxuXHJcbnZhciBCaW5kaW5nXzAxOGRlZTQ2N2QwODQwNWY4NzhkZTIzY2YwNzkxNDE2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzAxOGRlZTQ2N2QwODQwNWY4NzhkZTIzY2YwNzkxNDE2LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jYWNlYjUzZTM0ZmQ0M2UxYWViZjk1OGUzODdjYzY0MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2NhY2ViNTNlMzRmZDQzZTFhZWJmOTU4ZTM4N2NjNjQxLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzAxOGRlZTQ2N2QwODQwNWY4NzhkZTIzY2YwNzkxNDE2LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfY2FjZWI1M2UzNGZkNDNlMWFlYmY5NThlMzg3Y2M2NDE7XHJcblxyXG5cclxuQmluZGluZ18wMThkZWU0NjdkMDg0MDVmODc4ZGUyM2NmMDc5MTQxNi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNGM4M2QzZTRjN2E0Yjg5YWM1YTEyZjVkNTU3N2U4OTtcclxuXHJcbnZhciBCaW5kaW5nX2U2ZjE2NTQyZTAyNDRlNzRiYjg4OGM2MzM4NzQ0YWMwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2U2ZjE2NTQyZTAyNDRlNzRiYjg4OGM2MzM4NzQ0YWMwLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlBhZGRpbmdcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV81YTg1MDZjODY4OWM0YzgyOTFjYjBmZGUxOGM0ZWQ5NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzVhODUwNmM4Njg5YzRjODI5MWNiMGZkZTE4YzRlZDk2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2U2ZjE2NTQyZTAyNDRlNzRiYjg4OGM2MzM4NzQ0YWMwLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNWE4NTA2Yzg2ODljNGM4MjkxY2IwZmRlMThjNGVkOTY7XHJcblxyXG5cclxuQmluZGluZ19lNmYxNjU0MmUwMjQ0ZTc0YmI4ODhjNjMzODc0NGFjMC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNGM4M2QzZTRjN2E0Yjg5YWM1YTEyZjVkNTU3N2U4OTtcclxuXHJcbnZhciBCaW5kaW5nXzAzYzExOWJhNGYyOTQxODQ4NWQyZTNiMDRhNDA2ZWQ5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzAzYzExOWJhNGYyOTQxODQ4NWQyZTNiMDRhNDA2ZWQ5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkhvcml6b250YWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOWQyMWZjMTUwMWE4NGUzNTliNjkxYjlmMzQxMDMzMDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85ZDIxZmMxNTAxYTg0ZTM1OWI2OTFiOWYzNDEwMzMwMC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18wM2MxMTliYTRmMjk0MTg0ODVkMmUzYjA0YTQwNmVkOS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzlkMjFmYzE1MDFhODRlMzU5YjY5MWI5ZjM0MTAzMzAwO1xyXG5cclxuXHJcbkJpbmRpbmdfMDNjMTE5YmE0ZjI5NDE4NDg1ZDJlM2IwNGE0MDZlZDkuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMDRjODNkM2U0YzdhNGI4OWFjNWExMmY1ZDU1NzdlODk7XHJcblxyXG52YXIgQmluZGluZ183MDk5NWFhNzlkYTE0YzBjYTVhYTI2NzEwY2U3OThmZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ183MDk5NWFhNzlkYTE0YzBjYTVhYTI2NzEwY2U3OThmZS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJWZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lNTEyMGRiNjAwZTk0MGQzOGI3MTgzZWIxMmVkMTQzOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2U1MTIwZGI2MDBlOTQwZDM4YjcxODNlYjEyZWQxNDM4Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzcwOTk1YWE3OWRhMTRjMGNhNWFhMjY3MTBjZTc5OGZlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZTUxMjBkYjYwMGU5NDBkMzhiNzE4M2ViMTJlZDE0Mzg7XHJcblxyXG5cclxuQmluZGluZ183MDk5NWFhNzlkYTE0YzBjYTVhYTI2NzEwY2U3OThmZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNGM4M2QzZTRjN2E0Yjg5YWM1YTEyZjVkNTU3N2U4OTtcclxuXHJcblxyXG5Cb3JkZXJfZjc5ZTY1NTMzY2JhNDM5ODllYWRjNWUzY2QzYTdiOTEuQ2hpbGQgPSBDb250ZW50UHJlc2VudGVyXzA5ZGUyZGEwNDdlNzQwZjZiMDRlZjY1NDJhODE3YjliO1xyXG5cclxudmFyIEJpbmRpbmdfZTNmZDU1ODJlMzBjNDJmMjgwMzBmY2FjNzMzMzBkODEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZTNmZDU1ODJlMzBjNDJmMjgwMzBmY2FjNzMzMzBkODEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzBiY2Q1MTFkMTc5NjRlMjk5ZGVlNTUwN2M3YzEzZDYyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMGJjZDUxMWQxNzk2NGUyOTlkZWU1NTA3YzdjMTNkNjIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZTNmZDU1ODJlMzBjNDJmMjgwMzBmY2FjNzMzMzBkODEuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8wYmNkNTExZDE3OTY0ZTI5OWRlZTU1MDdjN2MxM2Q2MjtcclxuXHJcblxyXG5CaW5kaW5nX2UzZmQ1NTgyZTMwYzQyZjI4MDMwZmNhYzczMzMwZDgxLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzA0YzgzZDNlNGM3YTRiODlhYzVhMTJmNWQ1NTc3ZTg5O1xyXG5cclxuXHJcbkJvcmRlcl9jZmQ4Yzc0NTkwNzM0OWZmOGE1Y2JiZGMzYjIxMDAwOC5DaGlsZCA9IEJvcmRlcl9mNzllNjU1MzNjYmE0Mzk4OWVhZGM1ZTNjZDNhN2I5MTtcclxuXHJcbnZhciBCaW5kaW5nX2JhMTc2NmQ1ZjExYjQ0ZWM5ODhlMGZlNWU3NGQwOTc3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2JhMTc2NmQ1ZjExYjQ0ZWM5ODhlMGZlNWU3NGQwOTc3LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lODBlNDYzOWViNzk0MjE0YmEwZmI0NTE0YjUwOGNhOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2U4MGU0NjM5ZWI3OTQyMTRiYTBmYjQ1MTRiNTA4Y2E5Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2JhMTc2NmQ1ZjExYjQ0ZWM5ODhlMGZlNWU3NGQwOTc3LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZTgwZTQ2MzllYjc5NDIxNGJhMGZiNDUxNGI1MDhjYTk7XHJcblxyXG5cclxuQmluZGluZ19iYTE3NjZkNWYxMWI0NGVjOTg4ZTBmZTVlNzRkMDk3Ny5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNGM4M2QzZTRjN2E0Yjg5YWM1YTEyZjVkNTU3N2U4OTtcclxuXHJcbnZhciBCaW5kaW5nXzQ0MzllNmYwMTlhNjRjMDFhODJlYmViNDVlMzg2OThkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzQ0MzllNmYwMTlhNjRjMDFhODJlYmViNDVlMzg2OThkLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlckJydXNoXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOTc3MTE0NzdiYTQ5NDcxMjhmNjg4NjYxZTg1ZTZhZTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85NzcxMTQ3N2JhNDk0NzEyOGY2ODg2NjFlODVlNmFlMi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ180NDM5ZTZmMDE5YTY0YzAxYTgyZWJlYjQ1ZTM4Njk4ZC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzk3NzExNDc3YmE0OTQ3MTI4ZjY4ODY2MWU4NWU2YWUyO1xyXG5cclxuXHJcbkJpbmRpbmdfNDQzOWU2ZjAxOWE2NGMwMWE4MmViZWI0NWUzODY5OGQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMDRjODNkM2U0YzdhNGI4OWFjNWExMmY1ZDU1NzdlODk7XHJcblxyXG52YXIgQmluZGluZ19mMGM3NWIyMjY0NDI0NWVjOTQwYTIyZDZmOTEyYjg0MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19mMGM3NWIyMjY0NDI0NWVjOTQwYTIyZDZmOTEyYjg0Mi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJUaGlja25lc3NcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV85MmMyZTAxNTQwNjQ0OTg3YjdmNmVmMDFlZjJjMTg1MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzkyYzJlMDE1NDA2NDQ5ODdiN2Y2ZWYwMWVmMmMxODUzLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2YwYzc1YjIyNjQ0MjQ1ZWM5NDBhMjJkNmY5MTJiODQyLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOTJjMmUwMTU0MDY0NDk4N2I3ZjZlZjAxZWYyYzE4NTM7XHJcblxyXG5cclxuQmluZGluZ19mMGM3NWIyMjY0NDI0NWVjOTQwYTIyZDZmOTEyYjg0Mi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wNGM4M2QzZTRjN2E0Yjg5YWM1YTEyZjVkNTU3N2U4OTtcclxuXHJcblxyXG5cclxuQ29udGVudFByZXNlbnRlcl8wOWRlMmRhMDQ3ZTc0MGY2YjA0ZWY2NTQyYTgxN2I5Yi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRUZW1wbGF0ZVByb3BlcnR5LCBCaW5kaW5nXzczZDFhMWI2NmQyZDQwY2RhN2EyNzlhMWNkYTBkYTUyKTtcclxuQ29udGVudFByZXNlbnRlcl8wOWRlMmRhMDQ3ZTc0MGY2YjA0ZWY2NTQyYTgxN2I5Yi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRQcm9wZXJ0eSwgQmluZGluZ18wMThkZWU0NjdkMDg0MDVmODc4ZGUyM2NmMDc5MTQxNik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMDlkZTJkYTA0N2U3NDBmNmIwNGVmNjU0MmE4MTdiOWIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lk1hcmdpblByb3BlcnR5LCBCaW5kaW5nX2U2ZjE2NTQyZTAyNDRlNzRiYjg4OGM2MzM4NzQ0YWMwKTtcclxuQ29udGVudFByZXNlbnRlcl8wOWRlMmRhMDQ3ZTc0MGY2YjA0ZWY2NTQyYTgxN2I5Yi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuSG9yaXpvbnRhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nXzAzYzExOWJhNGYyOTQxODQ4NWQyZTNiMDRhNDA2ZWQ5KTtcclxuQ29udGVudFByZXNlbnRlcl8wOWRlMmRhMDQ3ZTc0MGY2YjA0ZWY2NTQyYTgxN2I5Yi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuVmVydGljYWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ183MDk5NWFhNzlkYTE0YzBjYTVhYTI2NzEwY2U3OThmZSk7XHJcbkJvcmRlcl9mNzllNjU1MzNjYmE0Mzk4OWVhZGM1ZTNjZDNhN2I5MS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfZTNmZDU1ODJlMzBjNDJmMjgwMzBmY2FjNzMzMzBkODEpO1xyXG5Cb3JkZXJfY2ZkOGM3NDU5MDczNDlmZjhhNWNiYmRjM2IyMTAwMDguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2JhMTc2NmQ1ZjExYjQ0ZWM5ODhlMGZlNWU3NGQwOTc3KTtcclxuQm9yZGVyX2NmZDhjNzQ1OTA3MzQ5ZmY4YTVjYmJkYzNiMjEwMDA4LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlckJydXNoUHJvcGVydHksIEJpbmRpbmdfNDQzOWU2ZjAxOWE2NGMwMWE4MmViZWI0NWUzODY5OGQpO1xyXG5Cb3JkZXJfY2ZkOGM3NDU5MDczNDlmZjhhNWNiYmRjM2IyMTAwMDguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyVGhpY2tuZXNzUHJvcGVydHksIEJpbmRpbmdfZjBjNzViMjI2NDQyNDVlYzk0MGEyMmQ2ZjkxMmI4NDIpO1xyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYTkxZWFjYzMxYjg2NDFhMzg2NWMzYWEyM2E5YjBhYzYsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZjBmOTMzMjFlYWZlNDE0ZDljNjM2ODkyNzY1MzBiZDcsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9mMGY5MzMyMWVhZmU0MTRkOWM2MzY4OTI3NjUzMGJkNyxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2YwZjkzMzIxZWFmZTQxNGQ5YzYzNjg5Mjc2NTMwYmQ3LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZjBmOTMzMjFlYWZlNDE0ZDljNjM2ODkyNzY1MzBiZDcsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9mMGY5MzMyMWVhZmU0MTRkOWM2MzY4OTI3NjUzMGJkNykpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYTkxZWFjYzMxYjg2NDFhMzg2NWMzYWEyM2E5YjBhYzYsIEJvcmRlcl9mNzllNjU1MzNjYmE0Mzk4OWVhZGM1ZTNjZDNhN2I5MSk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYWE1ZTQyN2RjZmIxNGJjZTgyZWJmMDFlOWRiYWUxMjIsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNDUzMzEwNzU4YWUwNGI4ZTljOWNlMDdlZDY3YTNkYzAsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV80NTMzMTA3NThhZTA0YjhlOWM5Y2UwN2VkNjdhM2RjMCxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzQ1MzMxMDc1OGFlMDRiOGU5YzljZTA3ZWQ2N2EzZGMwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNDUzMzEwNzU4YWUwNGI4ZTljOWNlMDdlZDY3YTNkYzAsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV80NTMzMTA3NThhZTA0YjhlOWM5Y2UwN2VkNjdhM2RjMCkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYWE1ZTQyN2RjZmIxNGJjZTgyZWJmMDFlOWRiYWUxMjIsIEJvcmRlcl9mNzllNjU1MzNjYmE0Mzk4OWVhZGM1ZTNjZDNhN2I5MSk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjc0NjczNDk5MjQ1NGY5ZDlhZWVmOGZkNzNhNDI1YmMsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfM2IxYmMwYjg4ZWVjNDUzOGJlYzAzM2U2YjJkODA4MmYsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8zYjFiYzBiODhlZWM0NTM4YmVjMDMzZTZiMmQ4MDgyZixcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzNiMWJjMGI4OGVlYzQ1MzhiZWMwMzNlNmIyZDgwODJmLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfM2IxYmMwYjg4ZWVjNDUzOGJlYzAzM2U2YjJkODA4MmYsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8zYjFiYzBiODhlZWM0NTM4YmVjMDMzZTZiMmQ4MDgyZikpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjc0NjczNDk5MjQ1NGY5ZDlhZWVmOGZkNzNhNDI1YmMsIEJvcmRlcl9mNzllNjU1MzNjYmE0Mzk4OWVhZGM1ZTNjZDNhN2I5MSk7XHJcblxyXG50ZW1wbGF0ZUluc3RhbmNlXzA0YzgzZDNlNGM3YTRiODlhYzVhMTJmNWQ1NTc3ZTg5LlRlbXBsYXRlQ29udGVudCA9IEJvcmRlcl9jZmQ4Yzc0NTkwNzM0OWZmOGE1Y2JiZGMzYjIxMDAwODtcclxucmV0dXJuIHRlbXBsYXRlSW5zdGFuY2VfMDRjODNkM2U0YzdhNGI4OWFjNWExMmY1ZDU1NzdlODk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2IxZDMzYTM4MDJmYzQ1Y2Q4MjI5ZmJhNDIxMjJmNGEwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYjFkMzNhMzgwMmZjNDVjZDgyMjlmYmE0MjEyMmY0YTAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9iMWQzM2EzODAyZmM0NWNkODIyOWZiYTQyMTIyZjRhMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2IxZDMzYTM4MDJmYzQ1Y2Q4MjI5ZmJhNDIxMjJmNGEwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9iMWQzM2EzODAyZmM0NWNkODIyOWZiYTQyMTIyZjRhMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMmQ3ZjMzMWUzMWFmNGRjMGI1NDIwZDAzZDkyOGRhMjcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8yZDdmMzMxZTMxYWY0ZGMwYjU0MjBkMDNkOTI4ZGEyNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzJkN2YzMzFlMzFhZjRkYzBiNTQyMGQwM2Q5MjhkYTI3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMmQ3ZjMzMWUzMWFmNGRjMGI1NDIwZDAzZDkyOGRhMjcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzJkN2YzMzFlMzFhZjRkYzBiNTQyMGQwM2Q5MjhkYTI3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV8wZjMzMjdlMDg4NTk0MjFiOWVjYmJkZDk1YjMwZTRhZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzBmMzMyN2UwODg1OTQyMWI5ZWNiYmRkOTViMzBlNGFmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfMGYzMzI3ZTA4ODU5NDIxYjllY2JiZGQ5NWIzMGU0YWYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV8wZjMzMjdlMDg4NTk0MjFiOWVjYmJkZDk1YjMwZTRhZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMGYzMzI3ZTA4ODU5NDIxYjllY2JiZGQ5NWIzMGU0YWYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfNThkNjAxNDBmMTdmNGVlM2I5Mzk2OWI1NGU1NjI0YTYoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfYTg2NmY1MjAzYmIyNGI2Y2JhYTQ2M2U4OGIxMWJlZmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlX2E4NjZmNTIwM2JiMjRiNmNiYWE0NjNlODhiMTFiZWZhLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyXzU1M2IyNjY5MjMwZjQzMWJiZTA2ZmQ3ZGYwMThlZWViID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl81NTNiMjY2OTIzMGY0MzFiYmUwNmZkN2RmMDE4ZWVlYik7XHJcbkJvcmRlcl81NTNiMjY2OTIzMGY0MzFiYmUwNmZkN2RmMDE4ZWVlYi5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfNTUzYjI2NjkyMzBmNDMxYmJlMDZmZDdkZjAxOGVlZWIuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfOWM1OTU5Yjc4MjYyNDJhNThmNWU4NmNmN2I2ZmY2ODIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwXzljNTk1OWI3ODI2MjQyYTU4ZjVlODZjZjdiNmZmNjgyKTtcclxuVmlzdWFsU3RhdGVHcm91cF85YzU5NTliNzgyNjI0MmE1OGY1ZTg2Y2Y3YjZmZjY4Mi5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzQzODAwYWUyYWEyNzQxYjhiMGVkYTg3MTk3MWQ0MGIyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzQzODAwYWUyYWEyNzQxYjhiMGVkYTg3MTk3MWQ0MGIyKTtcclxuVmlzdWFsU3RhdGVfNDM4MDBhZTJhYTI3NDFiOGIwZWRhODcxOTcxZDQwYjIuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMmY2MTQ5MGY1MDczNGViYmJiZTE4MzhjNzhjZGFjYTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV8yZjYxNDkwZjUwNzM0ZWJiYmJlMTgzOGM3OGNkYWNhMik7XHJcblZpc3VhbFN0YXRlXzJmNjE0OTBmNTA3MzRlYmJiYmUxODM4Yzc4Y2RhY2EyLk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzg2MDE2ZDk2Y2Y1OTQ0NzM4Mzk5MjY3ZmJkZDMwMjA3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185MWI2ZjM3ZmMxMTI0N2ZiYmJmNWVhZGY4NmE1NjlhYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185MWI2ZjM3ZmMxMTI0N2ZiYmJmNWVhZGY4NmE1NjlhYixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMTVhODlhMThkMjBlNDcyZWI0ZTQ0ODM2MjQ5Y2Q0MmMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8xNWE4OWExOGQyMGU0NzJlYjRlNDQ4MzYyNDljZDQyYy5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzE1YTg5YTE4ZDIwZTQ3MmViNGU0NDgzNjI0OWNkNDJjLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185MWI2ZjM3ZmMxMTI0N2ZiYmJmNWVhZGY4NmE1NjlhYi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMTVhODlhMThkMjBlNDcyZWI0ZTQ0ODM2MjQ5Y2Q0MmMpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfODYwMTZkOTZjZjU5NDQ3MzgzOTkyNjdmYmRkMzAyMDcuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzkxYjZmMzdmYzExMjQ3ZmJiYmY1ZWFkZjg2YTU2OWFiKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV8yZjYxNDkwZjUwNzM0ZWJiYmJlMTgzOGM3OGNkYWNhMi5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF84NjAxNmQ5NmNmNTk0NDczODM5OTI2N2ZiZGQzMDIwNztcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZmE1ODA3ZGVjNjQwNGNhMzg4N2QxN2ZjYzkwMGQ2M2YgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlX2ZhNTgwN2RlYzY0MDRjYTM4ODdkMTdmY2M5MDBkNjNmKTtcclxuVmlzdWFsU3RhdGVfZmE1ODA3ZGVjNjQwNGNhMzg4N2QxN2ZjYzkwMGQ2M2YuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9mYTA5ZTNlOWIzMWY0Y2Y5ODVmNzdlY2U3MDZhZjA3OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmViYzliNDM3NWU3NDk5OWEzZGU5ZGY3NmIzMWQ1ZGQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmViYzliNDM3NWU3NDk5OWEzZGU5ZGY3NmIzMWQ1ZGQsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2EyODgwNzEzNzFkNjQ4ZGNhMDAxOTg5YTZiMTQ1NDk3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfYTI4ODA3MTM3MWQ2NDhkY2EwMDE5ODlhNmIxNDU0OTcuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9hMjg4MDcxMzcxZDY0OGRjYTAwMTk4OWE2YjE0NTQ5Ny5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmViYzliNDM3NWU3NDk5OWEzZGU5ZGY3NmIzMWQ1ZGQuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2EyODgwNzEzNzFkNjQ4ZGNhMDAxOTg5YTZiMTQ1NDk3KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2ZhMDllM2U5YjMxZjRjZjk4NWY3N2VjZTcwNmFmMDc4LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yZWJjOWI0Mzc1ZTc0OTk5YTNkZTlkZjc2YjMxZDVkZCk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfZmE1ODA3ZGVjNjQwNGNhMzg4N2QxN2ZjYzkwMGQ2M2YuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZmEwOWUzZTliMzFmNGNmOTg1Zjc3ZWNlNzA2YWYwNzg7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzg0MjBhYTM4MzZhNTRkMjI5NTI5NzM0YTY1MWY0YzQ5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfODQyMGFhMzgzNmE1NGQyMjk1Mjk3MzRhNjUxZjRjNDkpO1xyXG5WaXN1YWxTdGF0ZV84NDIwYWEzODM2YTU0ZDIyOTUyOTczNGE2NTFmNGM0OS5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF83MjI0MGI5ZjBmYjg0NGYyYTRkNWUyOGM5ZWY3ZDRhNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfY2ZhMThmNzAyOTFkNGVjYTkwMDMxNWQ2ZTYxNTg5YmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfY2ZhMThmNzAyOTFkNGVjYTkwMDMxNWQ2ZTYxNTg5YmQsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzAzNjdmYTI3YjZkYzRlYjQ4MDZmNDM0MzZiMzgyYTk0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMDM2N2ZhMjdiNmRjNGViNDgwNmY0MzQzNmIzODJhOTQuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wMzY3ZmEyN2I2ZGM0ZWI0ODA2ZjQzNDM2YjM4MmE5NC5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfY2ZhMThmNzAyOTFkNGVjYTkwMDMxNWQ2ZTYxNTg5YmQuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzAzNjdmYTI3YjZkYzRlYjQ4MDZmNDM0MzZiMzgyYTk0KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzcyMjQwYjlmMGZiODQ0ZjJhNGQ1ZTI4YzllZjdkNGE3LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jZmExOGY3MDI5MWQ0ZWNhOTAwMzE1ZDZlNjE1ODliZCk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfODQyMGFhMzgzNmE1NGQyMjk1Mjk3MzRhNjUxZjRjNDkuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfNzIyNDBiOWYwZmI4NDRmMmE0ZDVlMjhjOWVmN2Q0YTc7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF85YzU5NTliNzgyNjI0MmE1OGY1ZTg2Y2Y3YjZmZjY4Mi5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzQzODAwYWUyYWEyNzQxYjhiMGVkYTg3MTk3MWQ0MGIyKTtcclxuVmlzdWFsU3RhdGVHcm91cF85YzU5NTliNzgyNjI0MmE1OGY1ZTg2Y2Y3YjZmZjY4Mi5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzJmNjE0OTBmNTA3MzRlYmJiYmUxODM4Yzc4Y2RhY2EyKTtcclxuVmlzdWFsU3RhdGVHcm91cF85YzU5NTliNzgyNjI0MmE1OGY1ZTg2Y2Y3YjZmZjY4Mi5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2ZhNTgwN2RlYzY0MDRjYTM4ODdkMTdmY2M5MDBkNjNmKTtcclxuVmlzdWFsU3RhdGVHcm91cF85YzU5NTliNzgyNjI0MmE1OGY1ZTg2Y2Y3YjZmZjY4Mi5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzg0MjBhYTM4MzZhNTRkMjI5NTI5NzM0YTY1MWY0YzQ5KTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfOWM1OTU5Yjc4MjYyNDJhNThmNWU4NmNmN2I2ZmY2ODIpO1xyXG5cclxudmFyIEJvcmRlcl83NDVhZDk5ODdkOWI0MjEyOGIxYTYxNTEzOWEyY2U0OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfNzQ1YWQ5OTg3ZDliNDIxMjhiMWE2MTUxMzlhMmNlNDgpO1xyXG5Cb3JkZXJfNzQ1YWQ5OTg3ZDliNDIxMjhiMWE2MTUxMzlhMmNlNDguTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyXzc0NWFkOTk4N2Q5YjQyMTI4YjFhNjE1MTM5YTJjZTQ4LkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyXzJiMWFkZjQ3NmRjZDQ2NmVhNWRlZmZkYzNlNDU2OGJiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfMmIxYWRmNDc2ZGNkNDY2ZWE1ZGVmZmRjM2U0NTY4YmIpO1xyXG5Db250ZW50UHJlc2VudGVyXzJiMWFkZjQ3NmRjZDQ2NmVhNWRlZmZkYzNlNDU2OGJiLk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfY2VhNzkyNGIwZDhjNGE4Nzg1NDM4OGI2NDJlOGFjNzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfY2VhNzkyNGIwZDhjNGE4Nzg1NDM4OGI2NDJlOGFjNzYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfN2RhOWQ2NTExYzdlNDRiYWEzMjQ1NmQyZWQ0ZDU1YTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV83ZGE5ZDY1MTFjN2U0NGJhYTMyNDU2ZDJlZDRkNTVhMS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jZWE3OTI0YjBkOGM0YTg3ODU0Mzg4YjY0MmU4YWM3Ni5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzdkYTlkNjUxMWM3ZTQ0YmFhMzI0NTZkMmVkNGQ1NWExO1xyXG5cclxuXHJcbkJpbmRpbmdfY2VhNzkyNGIwZDhjNGE4Nzg1NDM4OGI2NDJlOGFjNzYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTg2NmY1MjAzYmIyNGI2Y2JhYTQ2M2U4OGIxMWJlZmE7XHJcblxyXG52YXIgQmluZGluZ185OGJmMTYzZGJkMGM0YzBlYWY4NDAzMjY4OTA5ZjQxYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ185OGJmMTYzZGJkMGM0YzBlYWY4NDAzMjY4OTA5ZjQxYS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNGZjYjNiZTM3MzcwNDJkMzg4ZjliNGZkZGJlZTgwOTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV80ZmNiM2JlMzczNzA0MmQzODhmOWI0ZmRkYmVlODA5OS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185OGJmMTYzZGJkMGM0YzBlYWY4NDAzMjY4OTA5ZjQxYS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzRmY2IzYmUzNzM3MDQyZDM4OGY5YjRmZGRiZWU4MDk5O1xyXG5cclxuXHJcbkJpbmRpbmdfOThiZjE2M2RiZDBjNGMwZWFmODQwMzI2ODkwOWY0MWEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTg2NmY1MjAzYmIyNGI2Y2JhYTQ2M2U4OGIxMWJlZmE7XHJcblxyXG52YXIgQmluZGluZ19kMGQzNDMxYzEzMTA0OTFiYTJlYzYyNjg5ODI0ZDJjMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kMGQzNDMxYzEzMTA0OTFiYTJlYzYyNjg5ODI0ZDJjMi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMWRlZDc0NTAwMDdhNDJiYTkyNmY3MjYxOTc1NGFiODEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8xZGVkNzQ1MDAwN2E0MmJhOTI2ZjcyNjE5NzU0YWI4MS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kMGQzNDMxYzEzMTA0OTFiYTJlYzYyNjg5ODI0ZDJjMi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzFkZWQ3NDUwMDA3YTQyYmE5MjZmNzI2MTk3NTRhYjgxO1xyXG5cclxuXHJcbkJpbmRpbmdfZDBkMzQzMWMxMzEwNDkxYmEyZWM2MjY4OTgyNGQyYzIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTg2NmY1MjAzYmIyNGI2Y2JhYTQ2M2U4OGIxMWJlZmE7XHJcblxyXG52YXIgQmluZGluZ184MmE4ZTQ0ZGJjMDI0MmI1ODNjN2I2YmZjMTBlNWE4YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184MmE4ZTQ0ZGJjMDI0MmI1ODNjN2I2YmZjMTBlNWE4Yi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2MxNzU0M2Y2Mjk3NzRmZTViMWM0Y2IzMjY3YmRkZGIyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYzE3NTQzZjYyOTc3NGZlNWIxYzRjYjMyNjdiZGRkYjIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfODJhOGU0NGRiYzAyNDJiNTgzYzdiNmJmYzEwZTVhOGIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9jMTc1NDNmNjI5Nzc0ZmU1YjFjNGNiMzI2N2JkZGRiMjtcclxuXHJcblxyXG5CaW5kaW5nXzgyYThlNDRkYmMwMjQyYjU4M2M3YjZiZmMxMGU1YThiLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2E4NjZmNTIwM2JiMjRiNmNiYWE0NjNlODhiMTFiZWZhO1xyXG5cclxudmFyIEJpbmRpbmdfYzBmYTU2ZmI4NjIxNDhiZDgxNDM0YTAyOWM2NzE2MmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYzBmYTU2ZmI4NjIxNDhiZDgxNDM0YTAyOWM2NzE2MmEuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYjkxMTZmY2Q0NGI5NDVjZjgzZjRlY2FkYzQ3ZGU3MGQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9iOTExNmZjZDQ0Yjk0NWNmODNmNGVjYWRjNDdkZTcwZC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jMGZhNTZmYjg2MjE0OGJkODE0MzRhMDI5YzY3MTYyYS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2I5MTE2ZmNkNDRiOTQ1Y2Y4M2Y0ZWNhZGM0N2RlNzBkO1xyXG5cclxuXHJcbkJpbmRpbmdfYzBmYTU2ZmI4NjIxNDhiZDgxNDM0YTAyOWM2NzE2MmEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTg2NmY1MjAzYmIyNGI2Y2JhYTQ2M2U4OGIxMWJlZmE7XHJcblxyXG5cclxuQm9yZGVyXzc0NWFkOTk4N2Q5YjQyMTI4YjFhNjE1MTM5YTJjZTQ4LkNoaWxkID0gQ29udGVudFByZXNlbnRlcl8yYjFhZGY0NzZkY2Q0NjZlYTVkZWZmZGMzZTQ1NjhiYjtcclxuXHJcbnZhciBCaW5kaW5nXzgwODQ2ZjA1YTBmNDQ2NjI5NjJkOGZmNWFjZTZiZjI4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzgwODQ2ZjA1YTBmNDQ2NjI5NjJkOGZmNWFjZTZiZjI4LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV83Mjc3YzBkODc2YzQ0MGVhYmQxYzY3MjM0ZGViZGNjMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzcyNzdjMGQ4NzZjNDQwZWFiZDFjNjcyMzRkZWJkY2MyLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzgwODQ2ZjA1YTBmNDQ2NjI5NjJkOGZmNWFjZTZiZjI4LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNzI3N2MwZDg3NmM0NDBlYWJkMWM2NzIzNGRlYmRjYzI7XHJcblxyXG5cclxuQmluZGluZ184MDg0NmYwNWEwZjQ0NjYyOTYyZDhmZjVhY2U2YmYyOC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9hODY2ZjUyMDNiYjI0YjZjYmFhNDYzZTg4YjExYmVmYTtcclxuXHJcblxyXG5Cb3JkZXJfNTUzYjI2NjkyMzBmNDMxYmJlMDZmZDdkZjAxOGVlZWIuQ2hpbGQgPSBCb3JkZXJfNzQ1YWQ5OTg3ZDliNDIxMjhiMWE2MTUxMzlhMmNlNDg7XHJcblxyXG52YXIgQmluZGluZ19jYjM2MDlkYjU5Y2Y0ZDNhYTgwMDMxNTYyNTFiNjY2YyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19jYjM2MDlkYjU5Y2Y0ZDNhYTgwMDMxNTYyNTFiNjY2Yy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMWY2YzFjNzk0ZjU2NGJhYTkyNmE2ODk0ZjY4YTlkOWEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8xZjZjMWM3OTRmNTY0YmFhOTI2YTY4OTRmNjhhOWQ5YS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jYjM2MDlkYjU5Y2Y0ZDNhYTgwMDMxNTYyNTFiNjY2Yy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzFmNmMxYzc5NGY1NjRiYWE5MjZhNjg5NGY2OGE5ZDlhO1xyXG5cclxuXHJcbkJpbmRpbmdfY2IzNjA5ZGI1OWNmNGQzYWE4MDAzMTU2MjUxYjY2NmMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTg2NmY1MjAzYmIyNGI2Y2JhYTQ2M2U4OGIxMWJlZmE7XHJcblxyXG52YXIgQmluZGluZ184NTc5MGJkYTE3NGY0YTM2OTllZjkzNzNlMDY2Mzg4ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184NTc5MGJkYTE3NGY0YTM2OTllZjkzNzNlMDY2Mzg4ZS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzZlMTAwZmZmN2QzNjQ4YmJiMjcwMGZlZDVlNGRiNGEwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNmUxMDBmZmY3ZDM2NDhiYmIyNzAwZmVkNWU0ZGI0YTAuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfODU3OTBiZGExNzRmNGEzNjk5ZWY5MzczZTA2NjM4OGUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV82ZTEwMGZmZjdkMzY0OGJiYjI3MDBmZWQ1ZTRkYjRhMDtcclxuXHJcblxyXG5CaW5kaW5nXzg1NzkwYmRhMTc0ZjRhMzY5OWVmOTM3M2UwNjYzODhlLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2E4NjZmNTIwM2JiMjRiNmNiYWE0NjNlODhiMTFiZWZhO1xyXG5cclxudmFyIEJpbmRpbmdfYzgwZWQyZTAzNTE4NGJmYmExOWM3MDlhZDMyY2UwNzMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYzgwZWQyZTAzNTE4NGJmYmExOWM3MDlhZDMyY2UwNzMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZjg0N2FjOGY1NmNjNDQwM2FjYjE2ZDM4NmM0Mzg3NTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9mODQ3YWM4ZjU2Y2M0NDAzYWNiMTZkMzg2YzQzODc1Ni5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jODBlZDJlMDM1MTg0YmZiYTE5YzcwOWFkMzJjZTA3My5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2Y4NDdhYzhmNTZjYzQ0MDNhY2IxNmQzODZjNDM4NzU2O1xyXG5cclxuXHJcbkJpbmRpbmdfYzgwZWQyZTAzNTE4NGJmYmExOWM3MDlhZDMyY2UwNzMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYTg2NmY1MjAzYmIyNGI2Y2JhYTQ2M2U4OGIxMWJlZmE7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfMmIxYWRmNDc2ZGNkNDY2ZWE1ZGVmZmRjM2U0NTY4YmIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ19jZWE3OTI0YjBkOGM0YTg3ODU0Mzg4YjY0MmU4YWM3Nik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMmIxYWRmNDc2ZGNkNDY2ZWE1ZGVmZmRjM2U0NTY4YmIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfOThiZjE2M2RiZDBjNGMwZWFmODQwMzI2ODkwOWY0MWEpO1xyXG5Db250ZW50UHJlc2VudGVyXzJiMWFkZjQ3NmRjZDQ2NmVhNWRlZmZkYzNlNDU2OGJiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ19kMGQzNDMxYzEzMTA0OTFiYTJlYzYyNjg5ODI0ZDJjMik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMmIxYWRmNDc2ZGNkNDY2ZWE1ZGVmZmRjM2U0NTY4YmIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ184MmE4ZTQ0ZGJjMDI0MmI1ODNjN2I2YmZjMTBlNWE4Yik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMmIxYWRmNDc2ZGNkNDY2ZWE1ZGVmZmRjM2U0NTY4YmIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfYzBmYTU2ZmI4NjIxNDhiZDgxNDM0YTAyOWM2NzE2MmEpO1xyXG5Cb3JkZXJfNzQ1YWQ5OTg3ZDliNDIxMjhiMWE2MTUxMzlhMmNlNDguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzgwODQ2ZjA1YTBmNDQ2NjI5NjJkOGZmNWFjZTZiZjI4KTtcclxuQm9yZGVyXzU1M2IyNjY5MjMwZjQzMWJiZTA2ZmQ3ZGYwMThlZWViLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19jYjM2MDlkYjU5Y2Y0ZDNhYTgwMDMxNTYyNTFiNjY2Yyk7XHJcbkJvcmRlcl81NTNiMjY2OTIzMGY0MzFiYmUwNmZkN2RmMDE4ZWVlYi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nXzg1NzkwYmRhMTc0ZjRhMzY5OWVmOTM3M2UwNjYzODhlKTtcclxuQm9yZGVyXzU1M2IyNjY5MjMwZjQzMWJiZTA2ZmQ3ZGYwMThlZWViLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nX2M4MGVkMmUwMzUxODRiZmJhMTljNzA5YWQzMmNlMDczKTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzkxYjZmMzdmYzExMjQ3ZmJiYmY1ZWFkZjg2YTU2OWFiLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2IxZDMzYTM4MDJmYzQ1Y2Q4MjI5ZmJhNDIxMjJmNGEwLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYjFkMzNhMzgwMmZjNDVjZDgyMjlmYmE0MjEyMmY0YTAsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9iMWQzM2EzODAyZmM0NWNkODIyOWZiYTQyMTIyZjRhMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2IxZDMzYTM4MDJmYzQ1Y2Q4MjI5ZmJhNDIxMjJmNGEwLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYjFkMzNhMzgwMmZjNDVjZDgyMjlmYmE0MjEyMmY0YTApKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzkxYjZmMzdmYzExMjQ3ZmJiYmY1ZWFkZjg2YTU2OWFiLCBCb3JkZXJfNzQ1YWQ5OTg3ZDliNDIxMjhiMWE2MTUxMzlhMmNlNDgpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJlYmM5YjQzNzVlNzQ5OTlhM2RlOWRmNzZiMzFkNWRkLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzJkN2YzMzFlMzFhZjRkYzBiNTQyMGQwM2Q5MjhkYTI3LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMmQ3ZjMzMWUzMWFmNGRjMGI1NDIwZDAzZDkyOGRhMjcsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8yZDdmMzMxZTMxYWY0ZGMwYjU0MjBkMDNkOTI4ZGEyNywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzJkN2YzMzFlMzFhZjRkYzBiNTQyMGQwM2Q5MjhkYTI3LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMmQ3ZjMzMWUzMWFmNGRjMGI1NDIwZDAzZDkyOGRhMjcpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJlYmM5YjQzNzVlNzQ5OTlhM2RlOWRmNzZiMzFkNWRkLCBCb3JkZXJfNzQ1YWQ5OTg3ZDliNDIxMjhiMWE2MTUxMzlhMmNlNDgpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2NmYTE4ZjcwMjkxZDRlY2E5MDAzMTVkNmU2MTU4OWJkLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzBmMzMyN2UwODg1OTQyMWI5ZWNiYmRkOTViMzBlNGFmLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMGYzMzI3ZTA4ODU5NDIxYjllY2JiZGQ5NWIzMGU0YWYsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wZjMzMjdlMDg4NTk0MjFiOWVjYmJkZDk1YjMwZTRhZiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzBmMzMyN2UwODg1OTQyMWI5ZWNiYmRkOTViMzBlNGFmLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMGYzMzI3ZTA4ODU5NDIxYjllY2JiZGQ5NWIzMGU0YWYpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2NmYTE4ZjcwMjkxZDRlY2E5MDAzMTVkNmU2MTU4OWJkLCBCb3JkZXJfNzQ1YWQ5OTg3ZDliNDIxMjhiMWE2MTUxMzlhMmNlNDgpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV9hODY2ZjUyMDNiYjI0YjZjYmFhNDYzZTg4YjExYmVmYS5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfNTUzYjI2NjkyMzBmNDMxYmJlMDZmZDdkZjAxOGVlZWI7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlX2E4NjZmNTIwM2JiMjRiNmNiYWE0NjNlODhiMTFiZWZhO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD4zNTE5REIzQkY0NTE0MzE0QzM0MEIxNDIyQTAzMDZFQzwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgMjoyODoyNDwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BQYWdlaG9tZceAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuUGFnZUhvbWUpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFBhZ2VIb21lIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50O1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0bkJlZ2luO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCBMYXlvdXRSb290O1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZUhvbWUueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfOTc1N2RlMmM1ZDY0NGM3OGE0M2ZhNDcxN2QxZTAyZDEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dFJvb3RcIiwgR3JpZF85NzU3ZGUyYzVkNjQ0Yzc4YTQzZmE0NzE3ZDFlMDJkMSk7XHJcbkdyaWRfOTc1N2RlMmM1ZDY0NGM3OGE0M2ZhNDcxN2QxZTAyZDEuTmFtZSA9IFwiTGF5b3V0Um9vdFwiO1xyXG5HcmlkXzk3NTdkZTJjNWQ2NDRjNzhhNDNmYTQ3MTdkMWUwMmQxLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbnZhciBHcmlkX2E5N2FmYzdmMzc5ZDQ2ZjY4ZDY0MDA3YWQyMmQ0MTc0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfMzliMDEwNDk2ZWRiNDFkYmJiYjkzMjI1OTIxZjgwYTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzM5YjAxMDQ5NmVkYjQxZGJiYmI5MzIyNTkyMWY4MGE0LkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfMzliMDEwNDk2ZWRiNDFkYmJiYjkzMjI1OTIxZjgwYTQuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wX2EzNTVjMGU1NTRhMTQ3MzJhMzc4NDFlYWUyNzM0NWVhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfYTM1NWMwZTU1NGExNDczMmEzNzg0MWVhZTI3MzQ1ZWEuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF9hMzU1YzBlNTU0YTE0NzMyYTM3ODQxZWFlMjczNDVlYS5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfYTE5ZTk5ZTc2MDI0NDkwNWJjYjNhMjZkMzc2NWIxYmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9hMTllOTllNzYwMjQ0OTA1YmNiM2EyNmQzNzY1YjFiZi5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wX2ExOWU5OWU3NjAyNDQ5MDViY2IzYTI2ZDM3NjViMWJmLk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF8zOWIwMTA0OTZlZGI0MWRiYmJiOTMyMjU5MjFmODBhNC5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfYTM1NWMwZTU1NGExNDczMmEzNzg0MWVhZTI3MzQ1ZWEpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzM5YjAxMDQ5NmVkYjQxZGJiYmI5MzIyNTkyMWY4MGE0LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9hMTllOTllNzYwMjQ0OTA1YmNiM2EyNmQzNzY1YjFiZik7XHJcblxyXG5cclxuR3JpZF9hOTdhZmM3ZjM3OWQ0NmY2OGQ2NDAwN2FkMjJkNDE3NC5CYWNrZ3JvdW5kID0gTGluZWFyR3JhZGllbnRCcnVzaF8zOWIwMTA0OTZlZGI0MWRiYmJiOTMyMjU5MjFmODBhNDtcclxuXHJcbnZhciBCb3JkZXJfOTcxNWI2MTQwNTI4NDBmZDhmZWJhM2Q1ZjQwMDU3YzAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfOTcxNWI2MTQwNTI4NDBmZDhmZWJhM2Q1ZjQwMDU3YzApO1xyXG5Cb3JkZXJfOTcxNWI2MTQwNTI4NDBmZDhmZWJhM2Q1ZjQwMDU3YzAuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfOTcxNWI2MTQwNTI4NDBmZDhmZWJhM2Q1ZjQwMDU3YzAuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuQm9yZGVyXzk3MTViNjE0MDUyODQwZmQ4ZmViYTNkNWY0MDA1N2MwLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMCwgRyA9IChieXRlKTAsIEIgPSAoYnl0ZSkxMzkgfSk7XHJcbkJvcmRlcl85NzE1YjYxNDA1Mjg0MGZkOGZlYmEzZDVmNDAwNTdjMC5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfOTcxNWI2MTQwNTI4NDBmZDhmZWJhM2Q1ZjQwMDU3YzAuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfNDk2ODdkZTUzNzc1NDVkN2JkMmI1Y2NkZTEwNDk3NDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzQ5Njg3ZGU1Mzc3NTQ1ZDdiZDJiNWNjZGUxMDQ5NzQ2LkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNDk2ODdkZTUzNzc1NDVkN2JkMmI1Y2NkZTEwNDk3NDYuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wX2M0MzFiYmU2YTY1ZTQ0MDJhNjFkODhhNWYyYTgwZGVmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfYzQzMWJiZTZhNjVlNDQwMmE2MWQ4OGE1ZjJhODBkZWYuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF9jNDMxYmJlNmE2NWU0NDAyYTYxZDg4YTVmMmE4MGRlZi5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfYmY0YjU4NTc1ODI2NDRjNDg3YTc4MTM1OWVmNzQxYzEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9iZjRiNTg1NzU4MjY0NGM0ODdhNzgxMzU5ZWY3NDFjMS5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wX2JmNGI1ODU3NTgyNjQ0YzQ4N2E3ODEzNTllZjc0MWMxLk9mZnNldCA9IDAuNTg5NkQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wXzk2NDQyZDNiNjQ2OTQwNjVhZWJhYzk0NmE3MDM5MzhjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfOTY0NDJkM2I2NDY5NDA2NWFlYmFjOTQ2YTcwMzkzOGMuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjQ2LCBHID0gKGJ5dGUpMjQ2LCBCID0gKGJ5dGUpMjQ2IH07XHJcbkdyYWRpZW50U3RvcF85NjQ0MmQzYjY0Njk0MDY1YWViYWM5NDZhNzAzOTM4Yy5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNDk2ODdkZTUzNzc1NDVkN2JkMmI1Y2NkZTEwNDk3NDYuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wX2M0MzFiYmU2YTY1ZTQ0MDJhNjFkODhhNWYyYTgwZGVmKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF80OTY4N2RlNTM3NzU0NWQ3YmQyYjVjY2RlMTA0OTc0Ni5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfYmY0YjU4NTc1ODI2NDRjNDg3YTc4MTM1OWVmNzQxYzEpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzQ5Njg3ZGU1Mzc3NTQ1ZDdiZDJiNWNjZGUxMDQ5NzQ2LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF85NjQ0MmQzYjY0Njk0MDY1YWViYWM5NDZhNzAzOTM4Yyk7XHJcblxyXG5cclxuQm9yZGVyXzk3MTViNjE0MDUyODQwZmQ4ZmViYTNkNWY0MDA1N2MwLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzQ5Njg3ZGU1Mzc3NTQ1ZDdiZDJiNWNjZGUxMDQ5NzQ2O1xyXG5cclxudmFyIFRyYW5zZm9ybUdyb3VwXzQ4MmQ4NDIzMGZjYjQ2MmJiMDdjODRmN2IzM2EzNmJmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlRyYW5zZm9ybUdyb3VwKCk7XHJcbnZhciBTY2FsZVRyYW5zZm9ybV9lZDY4NzEyMmYwZDM0MzJkODA4MzU4YjUzMTg3NGE2YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5TY2FsZVRyYW5zZm9ybSgpO1xyXG5cclxudmFyIFJvdGF0ZVRyYW5zZm9ybV81MGMyYmM1NDhiOWE0MjcxYWY3ZmMxZGE2YzhmYzg3NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Sb3RhdGVUcmFuc2Zvcm0oKTtcclxuXHJcblRyYW5zZm9ybUdyb3VwXzQ4MmQ4NDIzMGZjYjQ2MmJiMDdjODRmN2IzM2EzNmJmLkNoaWxkcmVuLkFkZChTY2FsZVRyYW5zZm9ybV9lZDY4NzEyMmYwZDM0MzJkODA4MzU4YjUzMTg3NGE2Yik7XHJcblRyYW5zZm9ybUdyb3VwXzQ4MmQ4NDIzMGZjYjQ2MmJiMDdjODRmN2IzM2EzNmJmLkNoaWxkcmVuLkFkZChSb3RhdGVUcmFuc2Zvcm1fNTBjMmJjNTQ4YjlhNDI3MWFmN2ZjMWRhNmM4ZmM4NzQpO1xyXG5cclxuXHJcbkJvcmRlcl85NzE1YjYxNDA1Mjg0MGZkOGZlYmEzZDVmNDAwNTdjMC5SZW5kZXJUcmFuc2Zvcm0gPSBUcmFuc2Zvcm1Hcm91cF80ODJkODQyMzBmY2I0NjJiYjA3Yzg0ZjdiMzNhMzZiZjtcclxuXHJcbnZhciBHcmlkXzIxODUyZDM4NmVmODQ3ZWFiODY4ZGYzNTZmMDhhNGMyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIENvbHVtbkRlZmluaXRpb25fYWU2MjI0M2MwYzUyNDg1MmI5NDRiNGIzODQyOTFiMjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMDJlMGZkOWJlNDM2NGJjNjlhMWEzZDkxNmE0OGIzODMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fNmUzZGFmMzVlN2RlNDM5MGEwMmJjYmYzNzk4YTU2NjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF8yMTg1MmQzODZlZjg0N2VhYjg2OGRmMzU2ZjA4YTRjMi5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl9hZTYyMjQzYzBjNTI0ODUyYjk0NGI0YjM4NDI5MWIyNSk7XHJcbkdyaWRfMjE4NTJkMzg2ZWY4NDdlYWI4NjhkZjM1NmYwOGE0YzIuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fMDJlMGZkOWJlNDM2NGJjNjlhMWEzZDkxNmE0OGIzODMpO1xyXG5HcmlkXzIxODUyZDM4NmVmODQ3ZWFiODY4ZGYzNTZmMDhhNGMyLkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzZlM2RhZjM1ZTdkZTQzOTBhMDJiY2JmMzc5OGE1NjY0KTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzI4ZDU2ZGM0YWU3MTQzNjk5YzY1ZGEyNjM3NmM0NTM5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl8yOGQ1NmRjNGFlNzE0MzY5OWM2NWRhMjYzNzZjNDUzOS5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9kMjE5ZDViMjZmZTc0NDk5YTdiZTY5ZjM4OGViMDVmMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fZDIxOWQ1YjI2ZmU3NDQ5OWE3YmU2OWYzODhlYjA1ZjIuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC41LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9lNjEzYWM2ODE5ODg0MjIxYWUyOWE1MjRmYmY5YTFjNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fZTYxM2FjNjgxOTg4NDIyMWFlMjlhNTI0ZmJmOWExYzYuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4yNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxuR3JpZF8yMTg1MmQzODZlZjg0N2VhYjg2OGRmMzU2ZjA4YTRjMi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8yOGQ1NmRjNGFlNzE0MzY5OWM2NWRhMjYzNzZjNDUzOSk7XHJcbkdyaWRfMjE4NTJkMzg2ZWY4NDdlYWI4NjhkZjM1NmYwOGE0YzIuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fZDIxOWQ1YjI2ZmU3NDQ5OWE3YmU2OWYzODhlYjA1ZjIpO1xyXG5HcmlkXzIxODUyZDM4NmVmODQ3ZWFiODY4ZGYzNTZmMDhhNGMyLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2U2MTNhYzY4MTk4ODQyMjFhZTI5YTUyNGZiZjlhMWM2KTtcclxuXHJcbnZhciBJbWFnZV83MTU0M2Q1MGU0NjM0OThhYWVkNTc5ODliNjIxMzIxYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5JbWFnZSgpO1xyXG5JbWFnZV83MTU0M2Q1MGU0NjM0OThhYWVkNTc5ODliNjIxMzIxYS5Tb3VyY2UgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpZ2xvYmFsOjpEb3ROZXRGb3JIdG1sNS5Db3JlLlR5cGVGcm9tU3RyaW5nQ29udmVydGVycy5Db252ZXJ0RnJvbUludmFyaWFudFN0cmluZyh0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpLCBAXCIvQ1NodG1sO2NvbXBvbmVudC9pbWcvSG9tZUltYWdlLmpwZ1wiKTtcclxuSW1hZ2VfNzE1NDNkNTBlNDYzNDk4YWFlZDU3OTg5YjYyMTMyMWEuU3RyZXRjaCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlN0cmV0Y2guVW5pZm9ybTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEltYWdlXzcxNTQzZDUwZTQ2MzQ5OGFhZWQ1Nzk4OWI2MjEzMjFhLDMpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oSW1hZ2VfNzE1NDNkNTBlNDYzNDk4YWFlZDU3OTg5YjYyMTMyMWEsMyk7XHJcblxyXG5HcmlkXzIxODUyZDM4NmVmODQ3ZWFiODY4ZGYzNTZmMDhhNGMyLkNoaWxkcmVuLkFkZChJbWFnZV83MTU0M2Q1MGU0NjM0OThhYWVkNTc5ODliNjIxMzIxYSk7XHJcblxyXG5cclxuQm9yZGVyXzk3MTViNjE0MDUyODQwZmQ4ZmViYTNkNWY0MDA1N2MwLkNoaWxkID0gR3JpZF8yMTg1MmQzODZlZjg0N2VhYjg2OGRmMzU2ZjA4YTRjMjtcclxuXHJcblxyXG52YXIgQnV0dG9uXzI4YWI5MzU3MWZiZjQyZDE5MDk4OGI5MjYwZTBiNDkyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0bkJlZ2luXCIsIEJ1dHRvbl8yOGFiOTM1NzFmYmY0MmQxOTA5ODhiOTI2MGUwYjQ5Mik7XHJcbkJ1dHRvbl8yOGFiOTM1NzFmYmY0MmQxOTA5ODhiOTI2MGUwYjQ5Mi5OYW1lID0gXCJidG5CZWdpblwiO1xyXG5CdXR0b25fMjhhYjkzNTcxZmJmNDJkMTkwOTg4YjkyNjBlMGI0OTIuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fMjhhYjkzNTcxZmJmNDJkMTkwOTg4YjkyNjBlMGI0OTIuQ29udGVudCA9IEBcItCd0LDRh9Cw0YLRjCDRgNCw0LHQvtGC0YNcIjtcclxuQnV0dG9uXzI4YWI5MzU3MWZiZjQyZDE5MDk4OGI5MjYwZTBiNDkyLkZvbnRTaXplID0gMjVEO1xyXG5CdXR0b25fMjhhYjkzNTcxZmJmNDJkMTkwOTg4YjkyNjBlMGI0OTIuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTIyNCwgRyA9IChieXRlKTIxNiwgQiA9IChieXRlKTIyMiB9KTtcclxuQnV0dG9uXzI4YWI5MzU3MWZiZjQyZDE5MDk4OGI5MjYwZTBiNDkyLldpZHRoID0gMjAwRDtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uXzI4YWI5MzU3MWZiZjQyZDE5MDk4OGI5MjYwZTBiNDkyLDIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCdXR0b25fMjhhYjkzNTcxZmJmNDJkMTkwOTg4YjkyNjBlMGI0OTIsMSk7XHJcbkJ1dHRvbl8yOGFiOTM1NzFmYmY0MmQxOTA5ODhiOTI2MGUwYjQ5Mi5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbTtcclxuQnV0dG9uXzI4YWI5MzU3MWZiZjQyZDE5MDk4OGI5MjYwZTBiNDkyLkNsaWNrICs9IEJ1dHRvbl9DbGljaztcclxuQnV0dG9uXzI4YWI5MzU3MWZiZjQyZDE5MDk4OGI5MjYwZTBiNDkyLk1hcmdpbiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMCwgMCwgMCwgNTApO1xyXG5CdXR0b25fMjhhYjkzNTcxZmJmNDJkMTkwOTg4YjkyNjBlMGI0OTIuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV83NzJlYmJlZDA2MDE0MDc0ODI5OTU3ZTMxODhmM2YxZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlXzc3MmViYmVkMDYwMTQwNzQ4Mjk5NTdlMzE4OGYzZjFmLlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlXzc3MmViYmVkMDYwMTQwNzQ4Mjk5NTdlMzE4OGYzZjFmLlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzc3MmViYmVkMDYwMTQwNzQ4Mjk5NTdlMzE4OGYzZjFmKTtcclxuXHJcbkJ1dHRvbl8yOGFiOTM1NzFmYmY0MmQxOTA5ODhiOTI2MGUwYjQ5Mi5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV83NzJlYmJlZDA2MDE0MDc0ODI5OTU3ZTMxODhmM2YxZjtcclxuXHJcblxyXG5HcmlkX2E5N2FmYzdmMzc5ZDQ2ZjY4ZDY0MDA3YWQyMmQ0MTc0LkNoaWxkcmVuLkFkZChCb3JkZXJfOTcxNWI2MTQwNTI4NDBmZDhmZWJhM2Q1ZjQwMDU3YzApO1xyXG5HcmlkX2E5N2FmYzdmMzc5ZDQ2ZjY4ZDY0MDA3YWQyMmQ0MTc0LkNoaWxkcmVuLkFkZChCdXR0b25fMjhhYjkzNTcxZmJmNDJkMTkwOTg4YjkyNjBlMGI0OTIpO1xyXG5cclxuXHJcbkdyaWRfOTc1N2RlMmM1ZDY0NGM3OGE0M2ZhNDcxN2QxZTAyZDEuQ2hpbGRyZW4uQWRkKEdyaWRfYTk3YWZjN2YzNzlkNDZmNjhkNjQwMDdhZDIyZDQxNzQpO1xyXG5cclxuXHJcbnRoaXMuQ29udGVudCA9IEdyaWRfOTc1N2RlMmM1ZDY0NGM3OGE0M2ZhNDcxN2QxZTAyZDE7XHJcblxyXG5cclxuXHJcbmVsZW1lbnQgPSBCb3JkZXJfOTcxNWI2MTQwNTI4NDBmZDhmZWJhM2Q1ZjQwMDU3YzA7XHJcbmJ0bkJlZ2luID0gQnV0dG9uXzI4YWI5MzU3MWZiZjQyZDE5MDk4OGI5MjYwZTBiNDkyO1xyXG5MYXlvdXRSb290ID0gR3JpZF85NzU3ZGUyYzVkNjQ0Yzc4YTQzZmE0NzE3ZDFlMDJkMTtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzBiYjUzYmY2Y2Q1OTQzMzk5NWMzMTk3NDljZTRkYTE4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMGJiNTNiZjZjZDU5NDMzOTk1YzMxOTc0OWNlNGRhMTggKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wYmI1M2JmNmNkNTk0MzM5OTVjMzE5NzQ5Y2U0ZGExOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzBiYjUzYmY2Y2Q1OTQzMzk5NWMzMTk3NDljZTRkYTE4IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wYmI1M2JmNmNkNTk0MzM5OTVjMzE5NzQ5Y2U0ZGExOCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMDhlYzIyY2U0ZTQ0NDE1Y2JhMmZkODI4ZjRhYzRiNDEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8wOGVjMjJjZTRlNDQ0MTVjYmEyZmQ4MjhmNGFjNGI0MSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzA4ZWMyMmNlNGU0NDQxNWNiYTJmZDgyOGY0YWM0YjQxIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMDhlYzIyY2U0ZTQ0NDE1Y2JhMmZkODI4ZjRhYzRiNDEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzA4ZWMyMmNlNGU0NDQxNWNiYTJmZDgyOGY0YWM0YjQxIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9iN2Q2MzkyNzQ1MTQ0YmYzYjEwOTNkNWMwNjYzNmUwZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2I3ZDYzOTI3NDUxNDRiZjNiMTA5M2Q1YzA2NjM2ZTBmIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfYjdkNjM5Mjc0NTE0NGJmM2IxMDkzZDVjMDY2MzZlMGYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9iN2Q2MzkyNzQ1MTQ0YmYzYjEwOTNkNWMwNjYzNmUwZiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYjdkNjM5Mjc0NTE0NGJmM2IxMDkzZDVjMDY2MzZlMGYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfNzcyZWJiZWQwNjAxNDA3NDgyOTk1N2UzMTg4ZjNmMWYoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfMTA4NDQ0N2YwMGRkNGFlZTlhYzVkMmVmMGFjYmJmMzUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlXzEwODQ0NDdmMDBkZDRhZWU5YWM1ZDJlZjBhY2JiZjM1LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyXzAxYmI2NjI3ZDE4YzQ2ZmJhM2I1MDczZWFkZjY2YmJkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl8wMWJiNjYyN2QxOGM0NmZiYTNiNTA3M2VhZGY2NmJiZCk7XHJcbkJvcmRlcl8wMWJiNjYyN2QxOGM0NmZiYTNiNTA3M2VhZGY2NmJiZC5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfMDFiYjY2MjdkMThjNDZmYmEzYjUwNzNlYWRmNjZiYmQuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfZjcyOWM4MDI0NDY5NDhhZDg0MmM2YTQ1ZGNmOGU4MmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwX2Y3MjljODAyNDQ2OTQ4YWQ4NDJjNmE0NWRjZjhlODJkKTtcclxuVmlzdWFsU3RhdGVHcm91cF9mNzI5YzgwMjQ0Njk0OGFkODQyYzZhNDVkY2Y4ZTgyZC5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlX2Q0ODY5MTg1YjlkNjQ3NWM4ZDY5MjRkNGNhYmFiMjE4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlX2Q0ODY5MTg1YjlkNjQ3NWM4ZDY5MjRkNGNhYmFiMjE4KTtcclxuVmlzdWFsU3RhdGVfZDQ4NjkxODViOWQ2NDc1YzhkNjkyNGQ0Y2FiYWIyMTguTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMDQ5ZmI3OWE1YTJjNDE5NzhiNWE0ZmZkMDNmYWRhODQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV8wNDlmYjc5YTVhMmM0MTk3OGI1YTRmZmQwM2ZhZGE4NCk7XHJcblZpc3VhbFN0YXRlXzA0OWZiNzlhNWEyYzQxOTc4YjVhNGZmZDAzZmFkYTg0Lk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzQ5NDY3MzVkNDM1NjRmYmZhMjEwZmEwYzgzODA4NjRmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lYWFkOWIyMzZmYjc0MjJkOWFhMDA4ODVkZTQ1YTI5NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lYWFkOWIyMzZmYjc0MjJkOWFhMDA4ODVkZTQ1YTI5NCxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjgxNTcwMjc0ZjYxNGU4Y2IxMDFlYTU3MTMxM2UzZjAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82ODE1NzAyNzRmNjE0ZThjYjEwMWVhNTcxMzEzZTNmMC5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzY4MTU3MDI3NGY2MTRlOGNiMTAxZWE1NzEzMTNlM2YwLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lYWFkOWIyMzZmYjc0MjJkOWFhMDA4ODVkZTQ1YTI5NC5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjgxNTcwMjc0ZjYxNGU4Y2IxMDFlYTU3MTMxM2UzZjApO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNDk0NjczNWQ0MzU2NGZiZmEyMTBmYTBjODM4MDg2NGYuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2VhYWQ5YjIzNmZiNzQyMmQ5YWEwMDg4NWRlNDVhMjk0KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV8wNDlmYjc5YTVhMmM0MTk3OGI1YTRmZmQwM2ZhZGE4NC5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF80OTQ2NzM1ZDQzNTY0ZmJmYTIxMGZhMGM4MzgwODY0ZjtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMTE5YzRiNmRkZDQ0NGQ3NzhiZGI1ZWQ5ZDFkZjE4ODggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlXzExOWM0YjZkZGQ0NDRkNzc4YmRiNWVkOWQxZGYxODg4KTtcclxuVmlzdWFsU3RhdGVfMTE5YzRiNmRkZDQ0NGQ3NzhiZGI1ZWQ5ZDFkZjE4ODguTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9mOWQ4YzE4YWNjNDQ0MDA0YTVjY2ZiMGQzMGU0NTcyMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMDdmNmYxMmFkODFiNGQ3OTlkZTJkNDlkYjU5ZTk4NTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMDdmNmYxMmFkODFiNGQ3OTlkZTJkNDlkYjU5ZTk4NTcsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzY2ZjFmNzc4N2NmODQwNDE4ZGVjZGViOGIwMjAxMmUyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjZmMWY3Nzg3Y2Y4NDA0MThkZWNkZWI4YjAyMDEyZTIuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82NmYxZjc3ODdjZjg0MDQxOGRlY2RlYjhiMDIwMTJlMi5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMDdmNmYxMmFkODFiNGQ3OTlkZTJkNDlkYjU5ZTk4NTcuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzY2ZjFmNzc4N2NmODQwNDE4ZGVjZGViOGIwMjAxMmUyKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2Y5ZDhjMThhY2M0NDQwMDRhNWNjZmIwZDMwZTQ1NzIxLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18wN2Y2ZjEyYWQ4MWI0ZDc5OWRlMmQ0OWRiNTllOTg1Nyk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMTE5YzRiNmRkZDQ0NGQ3NzhiZGI1ZWQ5ZDFkZjE4ODguU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZjlkOGMxOGFjYzQ0NDAwNGE1Y2NmYjBkMzBlNDU3MjE7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzc4ZDdhOTA0ZGJkZDQ5Yzg4NzhmZjQ0YjhlZDg2Y2NjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfNzhkN2E5MDRkYmRkNDljODg3OGZmNDRiOGVkODZjY2MpO1xyXG5WaXN1YWxTdGF0ZV83OGQ3YTkwNGRiZGQ0OWM4ODc4ZmY0NGI4ZWQ4NmNjYy5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9kNTcyNjc5MjIwNTE0NGM0YWU3MGMwMDdmYTBlNDdjNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTk2OGVjNGJjYTY3NDhmMjliY2ZhMTYxMjE2ZDM5NTMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTk2OGVjNGJjYTY3NDhmMjliY2ZhMTYxMjE2ZDM5NTMsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzBiNTAyMzk2ZGY1MzQ4NGY4ZGFjNjViMDhhODgwNDgwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMGI1MDIzOTZkZjUzNDg0ZjhkYWM2NWIwOGE4ODA0ODAuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wYjUwMjM5NmRmNTM0ODRmOGRhYzY1YjA4YTg4MDQ4MC5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTk2OGVjNGJjYTY3NDhmMjliY2ZhMTYxMjE2ZDM5NTMuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzBiNTAyMzk2ZGY1MzQ4NGY4ZGFjNjViMDhhODgwNDgwKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2Q1NzI2NzkyMjA1MTQ0YzRhZTcwYzAwN2ZhMGU0N2M1LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xOTY4ZWM0YmNhNjc0OGYyOWJjZmExNjEyMTZkMzk1Myk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNzhkN2E5MDRkYmRkNDljODg3OGZmNDRiOGVkODZjY2MuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZDU3MjY3OTIyMDUxNDRjNGFlNzBjMDA3ZmEwZTQ3YzU7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF9mNzI5YzgwMjQ0Njk0OGFkODQyYzZhNDVkY2Y4ZTgyZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2Q0ODY5MTg1YjlkNjQ3NWM4ZDY5MjRkNGNhYmFiMjE4KTtcclxuVmlzdWFsU3RhdGVHcm91cF9mNzI5YzgwMjQ0Njk0OGFkODQyYzZhNDVkY2Y4ZTgyZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzA0OWZiNzlhNWEyYzQxOTc4YjVhNGZmZDAzZmFkYTg0KTtcclxuVmlzdWFsU3RhdGVHcm91cF9mNzI5YzgwMjQ0Njk0OGFkODQyYzZhNDVkY2Y4ZTgyZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzExOWM0YjZkZGQ0NDRkNzc4YmRiNWVkOWQxZGYxODg4KTtcclxuVmlzdWFsU3RhdGVHcm91cF9mNzI5YzgwMjQ0Njk0OGFkODQyYzZhNDVkY2Y4ZTgyZC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzc4ZDdhOTA0ZGJkZDQ5Yzg4NzhmZjQ0YjhlZDg2Y2NjKTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfZjcyOWM4MDI0NDY5NDhhZDg0MmM2YTQ1ZGNmOGU4MmQpO1xyXG5cclxudmFyIEJvcmRlcl9mN2M2MmQ4ZmFlNWU0OWQ5OTAxYzc1MDFmODI5MTg1OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfZjdjNjJkOGZhZTVlNDlkOTkwMWM3NTAxZjgyOTE4NTgpO1xyXG5Cb3JkZXJfZjdjNjJkOGZhZTVlNDlkOTkwMWM3NTAxZjgyOTE4NTguTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyX2Y3YzYyZDhmYWU1ZTQ5ZDk5MDFjNzUwMWY4MjkxODU4LkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyX2ZmM2RjNTAzZDBlMzQzOTk5ODY4MWQyMmYxMTI4YjRkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfZmYzZGM1MDNkMGUzNDM5OTk4NjgxZDIyZjExMjhiNGQpO1xyXG5Db250ZW50UHJlc2VudGVyX2ZmM2RjNTAzZDBlMzQzOTk5ODY4MWQyMmYxMTI4YjRkLk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfODAxMzY1OTZjYjE3NDEzNWI3MDRiNjIxYjM4NGIyYWYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfODAxMzY1OTZjYjE3NDEzNWI3MDRiNjIxYjM4NGIyYWYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYzZmYTU1MTViMTMzNGU4ZDkwOGE1ZWFkNDJkNjJlZGIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9jNmZhNTUxNWIxMzM0ZThkOTA4YTVlYWQ0MmQ2MmVkYi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184MDEzNjU5NmNiMTc0MTM1YjcwNGI2MjFiMzg0YjJhZi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2M2ZmE1NTE1YjEzMzRlOGQ5MDhhNWVhZDQyZDYyZWRiO1xyXG5cclxuXHJcbkJpbmRpbmdfODAxMzY1OTZjYjE3NDEzNWI3MDRiNjIxYjM4NGIyYWYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMTA4NDQ0N2YwMGRkNGFlZTlhYzVkMmVmMGFjYmJmMzU7XHJcblxyXG52YXIgQmluZGluZ181MzIzZTc0MWVkMTQ0MzI3OTBhYzcxYWUxZTE2NTQwZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ181MzIzZTc0MWVkMTQ0MzI3OTBhYzcxYWUxZTE2NTQwZi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOWJjNGYzNTY3Yjk3NGNiNzlmNjUxMTk3MWFhOTRmNmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85YmM0ZjM1NjdiOTc0Y2I3OWY2NTExOTcxYWE5NGY2Yi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ181MzIzZTc0MWVkMTQ0MzI3OTBhYzcxYWUxZTE2NTQwZi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzliYzRmMzU2N2I5NzRjYjc5ZjY1MTE5NzFhYTk0ZjZiO1xyXG5cclxuXHJcbkJpbmRpbmdfNTMyM2U3NDFlZDE0NDMyNzkwYWM3MWFlMWUxNjU0MGYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMTA4NDQ0N2YwMGRkNGFlZTlhYzVkMmVmMGFjYmJmMzU7XHJcblxyXG52YXIgQmluZGluZ19kYmNlNTg4ZmExNjY0OTk2YTQ1OTgwNmM4NjExNGRjZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kYmNlNTg4ZmExNjY0OTk2YTQ1OTgwNmM4NjExNGRjZS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYmY4N2RkOTIyODhlNDMzNjliZjM5ODkxMGQwYjQ0MDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9iZjg3ZGQ5MjI4OGU0MzM2OWJmMzk4OTEwZDBiNDQwOS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kYmNlNTg4ZmExNjY0OTk2YTQ1OTgwNmM4NjExNGRjZS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2JmODdkZDkyMjg4ZTQzMzY5YmYzOTg5MTBkMGI0NDA5O1xyXG5cclxuXHJcbkJpbmRpbmdfZGJjZTU4OGZhMTY2NDk5NmE0NTk4MDZjODYxMTRkY2UuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMTA4NDQ0N2YwMGRkNGFlZTlhYzVkMmVmMGFjYmJmMzU7XHJcblxyXG52YXIgQmluZGluZ19hMTU2NWEyNjQ1OTg0YmQ0ODBmM2JkNTFjYTg3NTYwMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19hMTU2NWEyNjQ1OTg0YmQ0ODBmM2JkNTFjYTg3NTYwMi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzYxZmU0NzVmMDFmYjQzNGE5Zjc1MDMxNWY3ZDUwNTU0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNjFmZTQ3NWYwMWZiNDM0YTlmNzUwMzE1ZjdkNTA1NTQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYTE1NjVhMjY0NTk4NGJkNDgwZjNiZDUxY2E4NzU2MDIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV82MWZlNDc1ZjAxZmI0MzRhOWY3NTAzMTVmN2Q1MDU1NDtcclxuXHJcblxyXG5CaW5kaW5nX2ExNTY1YTI2NDU5ODRiZDQ4MGYzYmQ1MWNhODc1NjAyLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzEwODQ0NDdmMDBkZDRhZWU5YWM1ZDJlZjBhY2JiZjM1O1xyXG5cclxudmFyIEJpbmRpbmdfOWJjNjYxMzU0YWVlNDA1MmJkMGVjMzg0N2U5MDlmNmUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOWJjNjYxMzU0YWVlNDA1MmJkMGVjMzg0N2U5MDlmNmUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNWY5ZWIzZjFlNjE1NDVkZmFjZjU1N2YzM2NiYjFmNGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV81ZjllYjNmMWU2MTU0NWRmYWNmNTU3ZjMzY2JiMWY0ZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185YmM2NjEzNTRhZWU0MDUyYmQwZWMzODQ3ZTkwOWY2ZS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzVmOWViM2YxZTYxNTQ1ZGZhY2Y1NTdmMzNjYmIxZjRlO1xyXG5cclxuXHJcbkJpbmRpbmdfOWJjNjYxMzU0YWVlNDA1MmJkMGVjMzg0N2U5MDlmNmUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMTA4NDQ0N2YwMGRkNGFlZTlhYzVkMmVmMGFjYmJmMzU7XHJcblxyXG5cclxuQm9yZGVyX2Y3YzYyZDhmYWU1ZTQ5ZDk5MDFjNzUwMWY4MjkxODU4LkNoaWxkID0gQ29udGVudFByZXNlbnRlcl9mZjNkYzUwM2QwZTM0Mzk5OTg2ODFkMjJmMTEyOGI0ZDtcclxuXHJcbnZhciBCaW5kaW5nX2ZjMDYzNDYwNmM4YTRkZGRiYWZkNmRmNjg0YTZlNzU5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2ZjMDYzNDYwNmM4YTRkZGRiYWZkNmRmNjg0YTZlNzU5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV82N2ZiMDRmODQ1YTc0ZGI0OTgxMTI5ODJiMTE5NDk5MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzY3ZmIwNGY4NDVhNzRkYjQ5ODExMjk4MmIxMTk0OTkxLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2ZjMDYzNDYwNmM4YTRkZGRiYWZkNmRmNjg0YTZlNzU5LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNjdmYjA0Zjg0NWE3NGRiNDk4MTEyOTgyYjExOTQ5OTE7XHJcblxyXG5cclxuQmluZGluZ19mYzA2MzQ2MDZjOGE0ZGRkYmFmZDZkZjY4NGE2ZTc1OS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8xMDg0NDQ3ZjAwZGQ0YWVlOWFjNWQyZWYwYWNiYmYzNTtcclxuXHJcblxyXG5Cb3JkZXJfMDFiYjY2MjdkMThjNDZmYmEzYjUwNzNlYWRmNjZiYmQuQ2hpbGQgPSBCb3JkZXJfZjdjNjJkOGZhZTVlNDlkOTkwMWM3NTAxZjgyOTE4NTg7XHJcblxyXG52YXIgQmluZGluZ182MDI2Zjk1Mzg1NTg0OTlmYjdhMWI4NDBkMGMxNGUzNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ182MDI2Zjk1Mzg1NTg0OTlmYjdhMWI4NDBkMGMxNGUzNy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOGE1NzQ3YzgzMDEzNGNjOGE5YjZiZjNmMTdkMjkwNzMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV84YTU3NDdjODMwMTM0Y2M4YTliNmJmM2YxN2QyOTA3My5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ182MDI2Zjk1Mzg1NTg0OTlmYjdhMWI4NDBkMGMxNGUzNy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzhhNTc0N2M4MzAxMzRjYzhhOWI2YmYzZjE3ZDI5MDczO1xyXG5cclxuXHJcbkJpbmRpbmdfNjAyNmY5NTM4NTU4NDk5ZmI3YTFiODQwZDBjMTRlMzcuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMTA4NDQ0N2YwMGRkNGFlZTlhYzVkMmVmMGFjYmJmMzU7XHJcblxyXG52YXIgQmluZGluZ181MWE4N2FiMjFlNjI0MGFiOGM5YzNmNTI5YTcyYmUxYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ181MWE4N2FiMjFlNjI0MGFiOGM5YzNmNTI5YTcyYmUxYi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2E0YWM3N2MzYjg2OTQ5NDg4NTljMzI2ZDBlNGY2N2U1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYTRhYzc3YzNiODY5NDk0ODg1OWMzMjZkMGU0ZjY3ZTUuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNTFhODdhYjIxZTYyNDBhYjhjOWMzZjUyOWE3MmJlMWIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9hNGFjNzdjM2I4Njk0OTQ4ODU5YzMyNmQwZTRmNjdlNTtcclxuXHJcblxyXG5CaW5kaW5nXzUxYTg3YWIyMWU2MjQwYWI4YzljM2Y1MjlhNzJiZTFiLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzEwODQ0NDdmMDBkZDRhZWU5YWM1ZDJlZjBhY2JiZjM1O1xyXG5cclxudmFyIEJpbmRpbmdfOWQ5YzQ4ZDNjMmVkNGQ0NWE4NGIyYTVkOGNkOWUxY2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOWQ5YzQ4ZDNjMmVkNGQ0NWE4NGIyYTVkOGNkOWUxY2UuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZmMzNzRjMjQ5NGY4NGE5MWFkNTMzNWJkZDRhOGM5MzcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9mYzM3NGMyNDk0Zjg0YTkxYWQ1MzM1YmRkNGE4YzkzNy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185ZDljNDhkM2MyZWQ0ZDQ1YTg0YjJhNWQ4Y2Q5ZTFjZS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2ZjMzc0YzI0OTRmODRhOTFhZDUzMzViZGQ0YThjOTM3O1xyXG5cclxuXHJcbkJpbmRpbmdfOWQ5YzQ4ZDNjMmVkNGQ0NWE4NGIyYTVkOGNkOWUxY2UuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMTA4NDQ0N2YwMGRkNGFlZTlhYzVkMmVmMGFjYmJmMzU7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfZmYzZGM1MDNkMGUzNDM5OTk4NjgxZDIyZjExMjhiNGQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ184MDEzNjU5NmNiMTc0MTM1YjcwNGI2MjFiMzg0YjJhZik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZmYzZGM1MDNkMGUzNDM5OTk4NjgxZDIyZjExMjhiNGQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfNTMyM2U3NDFlZDE0NDMyNzkwYWM3MWFlMWUxNjU0MGYpO1xyXG5Db250ZW50UHJlc2VudGVyX2ZmM2RjNTAzZDBlMzQzOTk5ODY4MWQyMmYxMTI4YjRkLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ19kYmNlNTg4ZmExNjY0OTk2YTQ1OTgwNmM4NjExNGRjZSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZmYzZGM1MDNkMGUzNDM5OTk4NjgxZDIyZjExMjhiNGQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19hMTU2NWEyNjQ1OTg0YmQ0ODBmM2JkNTFjYTg3NTYwMik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfZmYzZGM1MDNkMGUzNDM5OTk4NjgxZDIyZjExMjhiNGQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfOWJjNjYxMzU0YWVlNDA1MmJkMGVjMzg0N2U5MDlmNmUpO1xyXG5Cb3JkZXJfZjdjNjJkOGZhZTVlNDlkOTkwMWM3NTAxZjgyOTE4NTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2ZjMDYzNDYwNmM4YTRkZGRiYWZkNmRmNjg0YTZlNzU5KTtcclxuQm9yZGVyXzAxYmI2NjI3ZDE4YzQ2ZmJhM2I1MDczZWFkZjY2YmJkLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ182MDI2Zjk1Mzg1NTg0OTlmYjdhMWI4NDBkMGMxNGUzNyk7XHJcbkJvcmRlcl8wMWJiNjYyN2QxOGM0NmZiYTNiNTA3M2VhZGY2NmJiZC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nXzUxYTg3YWIyMWU2MjQwYWI4YzljM2Y1MjlhNzJiZTFiKTtcclxuQm9yZGVyXzAxYmI2NjI3ZDE4YzQ2ZmJhM2I1MDczZWFkZjY2YmJkLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nXzlkOWM0OGQzYzJlZDRkNDVhODRiMmE1ZDhjZDllMWNlKTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2VhYWQ5YjIzNmZiNzQyMmQ5YWEwMDg4NWRlNDVhMjk0LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzBiYjUzYmY2Y2Q1OTQzMzk5NWMzMTk3NDljZTRkYTE4LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMGJiNTNiZjZjZDU5NDMzOTk1YzMxOTc0OWNlNGRhMTgsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wYmI1M2JmNmNkNTk0MzM5OTVjMzE5NzQ5Y2U0ZGExOCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzBiYjUzYmY2Y2Q1OTQzMzk5NWMzMTk3NDljZTRkYTE4LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMGJiNTNiZjZjZDU5NDMzOTk1YzMxOTc0OWNlNGRhMTgpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2VhYWQ5YjIzNmZiNzQyMmQ5YWEwMDg4NWRlNDVhMjk0LCBCb3JkZXJfZjdjNjJkOGZhZTVlNDlkOTkwMWM3NTAxZjgyOTE4NTgpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzA3ZjZmMTJhZDgxYjRkNzk5ZGUyZDQ5ZGI1OWU5ODU3LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzA4ZWMyMmNlNGU0NDQxNWNiYTJmZDgyOGY0YWM0YjQxLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMDhlYzIyY2U0ZTQ0NDE1Y2JhMmZkODI4ZjRhYzRiNDEsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8wOGVjMjJjZTRlNDQ0MTVjYmEyZmQ4MjhmNGFjNGI0MSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzA4ZWMyMmNlNGU0NDQxNWNiYTJmZDgyOGY0YWM0YjQxLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMDhlYzIyY2U0ZTQ0NDE1Y2JhMmZkODI4ZjRhYzRiNDEpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzA3ZjZmMTJhZDgxYjRkNzk5ZGUyZDQ5ZGI1OWU5ODU3LCBCb3JkZXJfZjdjNjJkOGZhZTVlNDlkOTkwMWM3NTAxZjgyOTE4NTgpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5NjhlYzRiY2E2NzQ4ZjI5YmNmYTE2MTIxNmQzOTUzLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2I3ZDYzOTI3NDUxNDRiZjNiMTA5M2Q1YzA2NjM2ZTBmLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYjdkNjM5Mjc0NTE0NGJmM2IxMDkzZDVjMDY2MzZlMGYsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9iN2Q2MzkyNzQ1MTQ0YmYzYjEwOTNkNWMwNjYzNmUwZiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2I3ZDYzOTI3NDUxNDRiZjNiMTA5M2Q1YzA2NjM2ZTBmLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYjdkNjM5Mjc0NTE0NGJmM2IxMDkzZDVjMDY2MzZlMGYpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5NjhlYzRiY2E2NzQ4ZjI5YmNmYTE2MTIxNmQzOTUzLCBCb3JkZXJfZjdjNjJkOGZhZTVlNDlkOTkwMWM3NTAxZjgyOTE4NTgpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV8xMDg0NDQ3ZjAwZGQ0YWVlOWFjNWQyZWYwYWNiYmYzNS5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfMDFiYjY2MjdkMThjNDZmYmEzYjUwNzNlYWRmNjZiYmQ7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlXzEwODQ0NDdmMDBkZDRhZWU5YWM1ZDJlZjBhY2JiZjM1O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD43MjAyQkE0OUVBN0RDMDVCNkI5QTYyMkVGNjRCMDlDRDwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgMjoyODoyNDwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BQYWdldXBsb2Fkx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5QYWdlVXBsb2FkKTtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlR5cGVJbnN0YW50aWF0aW9uSGVscGVyLkluc3RhbnRpYXRlKHR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGF1dG8tZ2VuZXJhdGVkIGJ5IFwiQyMvWEFNTCBmb3IgSFRNTDVcIlxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxucGFydGlhbCBjbGFzcyBQYWdlVXBsb2FkIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbiBidG5DYW5jZWw7XHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxQYWdlVXBsb2FkLnhhbWxcIjtcclxuICAgICAgICAgICAgfVxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAwMTg0XHJcblxyXG5cclxuXHJcbnZhciBHcmlkXzA5YTI2OTljY2QyMjQzNjY5MDg1NGZlZTRhNWU2ZTQ4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIFJvd0RlZmluaXRpb25fMTRhNDQzYTBlODA0NGFmOGEwODdkZmQwZGE0NjQ3OTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNzZlMWFiMjNlMTM2NDM5MDk2MGIwMmZlOWMzYjUzYmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fOWNlYjdmOTQ2Y2UzNDhhNjk5OTg1YzE0NDliMzFmNmIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMjIxZmRlODI5OTE0NGZhMzgxMGI1MjJlODUxZWZmNTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF8wOWEyNjk5Y2NkMjI0MzY2OTA4NTRmZWU0YTVlNmU0OC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8xNGE0NDNhMGU4MDQ0YWY4YTA4N2RmZDBkYTQ2NDc5OSk7XHJcbkdyaWRfMDlhMjY5OWNjZDIyNDM2NjkwODU0ZmVlNGE1ZTZlNDguUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fNzZlMWFiMjNlMTM2NDM5MDk2MGIwMmZlOWMzYjUzYmIpO1xyXG5HcmlkXzA5YTI2OTljY2QyMjQzNjY5MDg1NGZlZTRhNWU2ZTQ4LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzljZWI3Zjk0NmNlMzQ4YTY5OTk4NWMxNDQ5YjMxZjZiKTtcclxuR3JpZF8wOWEyNjk5Y2NkMjI0MzY2OTA4NTRmZWU0YTVlNmU0OC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8yMjFmZGU4Mjk5MTQ0ZmEzODEwYjUyMmU4NTFlZmY1MSk7XHJcblxyXG52YXIgQm9yZGVyX2Y1ZGJjY2MyMjY0MjQwYWZiYjllYWI2NGJlZjI1OGZjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG5Cb3JkZXJfZjVkYmNjYzIyNjQyNDBhZmJiOWVhYjY0YmVmMjU4ZmMuVmVydGljYWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WZXJ0aWNhbEFsaWdubWVudC5DZW50ZXI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJvcmRlcl9mNWRiY2NjMjI2NDI0MGFmYmI5ZWFiNjRiZWYyNThmYywwKTtcclxudmFyIENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV84YzEzNzg5ODgxOTY0MmMyYmM0YzlkMThiZjMzNGVkMyA9IG5ldyBnbG9iYWw6OkNTSFRNTDUuRXh0ZW5zaW9ucy5GaWxlT3BlbkRpYWxvZy5Db250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKCk7XHJcbkNvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV84YzEzNzg5ODgxOTY0MmMyYmM0YzlkMThiZjMzNGVkMy5GaWxlT3BlbmVkICs9IE9uRmlsZU9wZW5lZDtcclxuQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlXzhjMTM3ODk4ODE5NjQyYzJiYzRjOWQxOGJmMzM0ZWQzLkZpbHRlciA9IEBcIiouanNvbiwqLnR4dFwiO1xyXG5Db250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfOGMxMzc4OTg4MTk2NDJjMmJjNGM5ZDE4YmYzMzRlZDMuUmVzdWx0S2luZCA9IGdsb2JhbDo6Q1NIVE1MNS5FeHRlbnNpb25zLkZpbGVPcGVuRGlhbG9nLlJlc3VsdEtpbmQuVGV4dDtcclxuXHJcbkJvcmRlcl9mNWRiY2NjMjI2NDI0MGFmYmI5ZWFiNjRiZWYyNThmYy5DaGlsZCA9IENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV84YzEzNzg5ODgxOTY0MmMyYmM0YzlkMThiZjMzNGVkMztcclxuXHJcblxyXG52YXIgQnV0dG9uXzU2Yjc2ODMzZjdjNzRmNjQ5MTQ1ODljMWJhMmM4OGQxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG5CdXR0b25fNTZiNzY4MzNmN2M3NGY2NDkxNDU4OWMxYmEyYzg4ZDEuQ29udGVudCA9IEBcItCf0YDQtdC00YvQtNGD0YnQsNGPINGB0YLRgNCw0L3QuNGG0LBcIjtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5DYW5jZWxcIiwgQnV0dG9uXzU2Yjc2ODMzZjdjNzRmNjQ5MTQ1ODljMWJhMmM4OGQxKTtcclxuQnV0dG9uXzU2Yjc2ODMzZjdjNzRmNjQ5MTQ1ODljMWJhMmM4OGQxLk5hbWUgPSBcImJ0bkNhbmNlbFwiO1xyXG5CdXR0b25fNTZiNzY4MzNmN2M3NGY2NDkxNDU4OWMxYmEyYzg4ZDEuQ2xpY2sgKz0gQnRuQ2FuY2VsX0NsaWNrO1xyXG5CdXR0b25fNTZiNzY4MzNmN2M3NGY2NDkxNDU4OWMxYmEyYzg4ZDEuV2lkdGggPSAyNTBEO1xyXG5CdXR0b25fNTZiNzY4MzNmN2M3NGY2NDkxNDU4OWMxYmEyYzg4ZDEuSGVpZ2h0ID0gNTBEO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fNTZiNzY4MzNmN2M3NGY2NDkxNDU4OWMxYmEyYzg4ZDEsMSk7XHJcbkJ1dHRvbl81NmI3NjgzM2Y3Yzc0ZjY0OTE0NTg5YzFiYTJjODhkMS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjQ5LCBHID0gKGJ5dGUpMjIyLCBCID0gKGJ5dGUpMjQyIH0pO1xyXG5CdXR0b25fNTZiNzY4MzNmN2M3NGY2NDkxNDU4OWMxYmEyYzg4ZDEuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQnV0dG9uXzU2Yjc2ODMzZjdjNzRmNjQ5MTQ1ODljMWJhMmM4OGQxLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5CdXR0b25fNTZiNzY4MzNmN2M3NGY2NDkxNDU4OWMxYmEyYzg4ZDEuVmVydGljYWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WZXJ0aWNhbEFsaWdubWVudC5Cb3R0b207XHJcbkJ1dHRvbl81NmI3NjgzM2Y3Yzc0ZjY0OTE0NTg5YzFiYTJjODhkMS5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl81NmI3NjgzM2Y3Yzc0ZjY0OTE0NTg5YzFiYTJjODhkMS5Gb250U2l6ZSA9IDIwRDtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV9mOWIxOTQ5OGExZDU0ZDgxOGU3OGNiYTIzODEwMzRlNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlX2Y5YjE5NDk4YTFkNTRkODE4ZTc4Y2JhMjM4MTAzNGU3LlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlX2Y5YjE5NDk4YTFkNTRkODE4ZTc4Y2JhMjM4MTAzNGU3LlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlX2Y5YjE5NDk4YTFkNTRkODE4ZTc4Y2JhMjM4MTAzNGU3KTtcclxuXHJcbkJ1dHRvbl81NmI3NjgzM2Y3Yzc0ZjY0OTE0NTg5YzFiYTJjODhkMS5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV9mOWIxOTQ5OGExZDU0ZDgxOGU3OGNiYTIzODEwMzRlNztcclxuXHJcblxyXG5HcmlkXzA5YTI2OTljY2QyMjQzNjY5MDg1NGZlZTRhNWU2ZTQ4LkNoaWxkcmVuLkFkZChCb3JkZXJfZjVkYmNjYzIyNjQyNDBhZmJiOWVhYjY0YmVmMjU4ZmMpO1xyXG5HcmlkXzA5YTI2OTljY2QyMjQzNjY5MDg1NGZlZTRhNWU2ZTQ4LkNoaWxkcmVuLkFkZChCdXR0b25fNTZiNzY4MzNmN2M3NGY2NDkxNDU4OWMxYmEyYzg4ZDEpO1xyXG5cclxuXHJcbnRoaXMuQ29udGVudCA9IEdyaWRfMDlhMjY5OWNjZDIyNDM2NjkwODU0ZmVlNGE1ZTZlNDg7XHJcblxyXG5cclxuXHJcbmJ0bkNhbmNlbCA9IEJ1dHRvbl81NmI3NjgzM2Y3Yzc0ZjY0OTE0NTg5YzFiYTJjODhkMTtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzQ2YTEyZDc4YTY2ZTRhOTg5Mjk1YzBmNzdiOTk1NzMxIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNDZhMTJkNzhhNjZlNGE5ODkyOTVjMGY3N2I5OTU3MzEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV80NmExMmQ3OGE2NmU0YTk4OTI5NWMwZjc3Yjk5NTczMSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzQ2YTEyZDc4YTY2ZTRhOTg5Mjk1YzBmNzdiOTk1NzMxIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV80NmExMmQ3OGE2NmU0YTk4OTI5NWMwZjc3Yjk5NTczMSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfY2FjOGIxMDMxNzY5NGZkZGE4NzIxMzFmYmNmMDNiZDIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9jYWM4YjEwMzE3Njk0ZmRkYTg3MjEzMWZiY2YwM2JkMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2NhYzhiMTAzMTc2OTRmZGRhODcyMTMxZmJjZjAzYmQyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfY2FjOGIxMDMxNzY5NGZkZGE4NzIxMzFmYmNmMDNiZDIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2NhYzhiMTAzMTc2OTRmZGRhODcyMTMxZmJjZjAzYmQyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9hMTRlODk2NzdlOTc0NGJmOTRkZDZkZGU0MGU0YzQ0NCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2ExNGU4OTY3N2U5NzQ0YmY5NGRkNmRkZTQwZTRjNDQ0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfYTE0ZTg5Njc3ZTk3NDRiZjk0ZGQ2ZGRlNDBlNGM0NDQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9hMTRlODk2NzdlOTc0NGJmOTRkZDZkZGU0MGU0YzQ0NCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYTE0ZTg5Njc3ZTk3NDRiZjk0ZGQ2ZGRlNDBlNGM0NDQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfZjliMTk0OThhMWQ1NGQ4MThlNzhjYmEyMzgxMDM0ZTcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfZjc3NzY3MWUwN2JkNDg3NzkxNDllZTI0Y2VhODNhNWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlX2Y3Nzc2NzFlMDdiZDQ4Nzc5MTQ5ZWUyNGNlYTgzYTVkLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyX2Q1YThhODgwYTkwZTRiOTRhNjIyZGFiMzYyNTM3ZDIxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl9kNWE4YTg4MGE5MGU0Yjk0YTYyMmRhYjM2MjUzN2QyMSk7XHJcbkJvcmRlcl9kNWE4YTg4MGE5MGU0Yjk0YTYyMmRhYjM2MjUzN2QyMS5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfZDVhOGE4ODBhOTBlNGI5NGE2MjJkYWIzNjI1MzdkMjEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfZjhkM2Y3NjQ1NWJkNDIwNzk4MzhkOGNlODRhMzk3M2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwX2Y4ZDNmNzY0NTViZDQyMDc5ODM4ZDhjZTg0YTM5NzNlKTtcclxuVmlzdWFsU3RhdGVHcm91cF9mOGQzZjc2NDU1YmQ0MjA3OTgzOGQ4Y2U4NGEzOTczZS5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlX2FmZDc0OTkxOGQ0ZjRkMWU5YzhhNzBmNDk1YzYzNjA2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlX2FmZDc0OTkxOGQ0ZjRkMWU5YzhhNzBmNDk1YzYzNjA2KTtcclxuVmlzdWFsU3RhdGVfYWZkNzQ5OTE4ZDRmNGQxZTljOGE3MGY0OTVjNjM2MDYuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfOTQ4ZTg5YzJiMTVlNGI3Njg3NzVlZDQ5NTcxMjgwMDQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV85NDhlODljMmIxNWU0Yjc2ODc3NWVkNDk1NzEyODAwNCk7XHJcblZpc3VhbFN0YXRlXzk0OGU4OWMyYjE1ZTRiNzY4Nzc1ZWQ0OTU3MTI4MDA0Lk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzU1Njk2YWJiNWNlMzQzOWQ4N2MyZWJkNDY4ZDQ2NGIwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185NThkZjY4YzA2NTg0Y2ZjYTRkYjRmYTU3YjVmNTdiNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185NThkZjY4YzA2NTg0Y2ZjYTRkYjRmYTU3YjVmNTdiNixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZDFhODdkOTA4YmZjNDEwYWFkNGM4ZGZhZDYxNmY2MmUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9kMWE4N2Q5MDhiZmM0MTBhYWQ0YzhkZmFkNjE2ZjYyZS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2QxYTg3ZDkwOGJmYzQxMGFhZDRjOGRmYWQ2MTZmNjJlLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185NThkZjY4YzA2NTg0Y2ZjYTRkYjRmYTU3YjVmNTdiNi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZDFhODdkOTA4YmZjNDEwYWFkNGM4ZGZhZDYxNmY2MmUpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNTU2OTZhYmI1Y2UzNDM5ZDg3YzJlYmQ0NjhkNDY0YjAuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzk1OGRmNjhjMDY1ODRjZmNhNGRiNGZhNTdiNWY1N2I2KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV85NDhlODljMmIxNWU0Yjc2ODc3NWVkNDk1NzEyODAwNC5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF81NTY5NmFiYjVjZTM0MzlkODdjMmViZDQ2OGQ0NjRiMDtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMTMwZTM5ZGJlZDNmNGQyYWJkZDcxNGE3ZDU2YTcxMTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlXzEzMGUzOWRiZWQzZjRkMmFiZGQ3MTRhN2Q1NmE3MTE3KTtcclxuVmlzdWFsU3RhdGVfMTMwZTM5ZGJlZDNmNGQyYWJkZDcxNGE3ZDU2YTcxMTcuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF85Yjg2MmMzMWYyZWE0M2NjYWIxYzFkMTEwOWNkZjA1MyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZWRhNjk5MzczMmU2NGMyZThiMTg4ODc4NDgwMWJkYzQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZWRhNjk5MzczMmU2NGMyZThiMTg4ODc4NDgwMWJkYzQsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2UxNmYwODIyOGViMjRhZThiYmQzYjVhM2E1ZWU3ODNhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZTE2ZjA4MjI4ZWIyNGFlOGJiZDNiNWEzYTVlZTc4M2EuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9lMTZmMDgyMjhlYjI0YWU4YmJkM2I1YTNhNWVlNzgzYS5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZWRhNjk5MzczMmU2NGMyZThiMTg4ODc4NDgwMWJkYzQuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2UxNmYwODIyOGViMjRhZThiYmQzYjVhM2E1ZWU3ODNhKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzliODYyYzMxZjJlYTQzY2NhYjFjMWQxMTA5Y2RmMDUzLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lZGE2OTkzNzMyZTY0YzJlOGIxODg4Nzg0ODAxYmRjNCk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMTMwZTM5ZGJlZDNmNGQyYWJkZDcxNGE3ZDU2YTcxMTcuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfOWI4NjJjMzFmMmVhNDNjY2FiMWMxZDExMDljZGYwNTM7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzNmNTQyMjA1OWNkYTQyZjE5MzhlYjJkM2I5OTA1M2FkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfM2Y1NDIyMDU5Y2RhNDJmMTkzOGViMmQzYjk5MDUzYWQpO1xyXG5WaXN1YWxTdGF0ZV8zZjU0MjIwNTljZGE0MmYxOTM4ZWIyZDNiOTkwNTNhZC5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF84NjY5YTgyZjgwNjU0NjVhOGY2ZWUxMTBlNmZlNzlmNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjEwYzg2M2VjYTM2NDUwZWI3OGVhYWE5ZmI2MWYxM2MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjEwYzg2M2VjYTM2NDUwZWI3OGVhYWE5ZmI2MWYxM2MsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzMxNWYwYjgzZDU4ODRjYTg4OWY1YzcyNDFlNzIyNWM3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMzE1ZjBiODNkNTg4NGNhODg5ZjVjNzI0MWU3MjI1YzcuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8zMTVmMGI4M2Q1ODg0Y2E4ODlmNWM3MjQxZTcyMjVjNy5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYjEwYzg2M2VjYTM2NDUwZWI3OGVhYWE5ZmI2MWYxM2MuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzMxNWYwYjgzZDU4ODRjYTg4OWY1YzcyNDFlNzIyNWM3KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzg2NjlhODJmODA2NTQ2NWE4ZjZlZTExMGU2ZmU3OWY0LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19iMTBjODYzZWNhMzY0NTBlYjc4ZWFhYTlmYjYxZjEzYyk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfM2Y1NDIyMDU5Y2RhNDJmMTkzOGViMmQzYjk5MDUzYWQuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfODY2OWE4MmY4MDY1NDY1YThmNmVlMTEwZTZmZTc5ZjQ7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF9mOGQzZjc2NDU1YmQ0MjA3OTgzOGQ4Y2U4NGEzOTczZS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2FmZDc0OTkxOGQ0ZjRkMWU5YzhhNzBmNDk1YzYzNjA2KTtcclxuVmlzdWFsU3RhdGVHcm91cF9mOGQzZjc2NDU1YmQ0MjA3OTgzOGQ4Y2U4NGEzOTczZS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzk0OGU4OWMyYjE1ZTRiNzY4Nzc1ZWQ0OTU3MTI4MDA0KTtcclxuVmlzdWFsU3RhdGVHcm91cF9mOGQzZjc2NDU1YmQ0MjA3OTgzOGQ4Y2U4NGEzOTczZS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzEzMGUzOWRiZWQzZjRkMmFiZGQ3MTRhN2Q1NmE3MTE3KTtcclxuVmlzdWFsU3RhdGVHcm91cF9mOGQzZjc2NDU1YmQ0MjA3OTgzOGQ4Y2U4NGEzOTczZS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzNmNTQyMjA1OWNkYTQyZjE5MzhlYjJkM2I5OTA1M2FkKTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfZjhkM2Y3NjQ1NWJkNDIwNzk4MzhkOGNlODRhMzk3M2UpO1xyXG5cclxudmFyIEJvcmRlcl8wNmNiZTcyMTE5MWI0OThiYTM5ZmY0ODQ2ZjE1OGRhNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfMDZjYmU3MjExOTFiNDk4YmEzOWZmNDg0NmYxNThkYTQpO1xyXG5Cb3JkZXJfMDZjYmU3MjExOTFiNDk4YmEzOWZmNDg0NmYxNThkYTQuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyXzA2Y2JlNzIxMTkxYjQ5OGJhMzlmZjQ4NDZmMTU4ZGE0LkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyXzY3MzlkM2IyYWVmYzQ2NGViMmRhNzA2ODA1N2Y3NzBiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfNjczOWQzYjJhZWZjNDY0ZWIyZGE3MDY4MDU3Zjc3MGIpO1xyXG5Db250ZW50UHJlc2VudGVyXzY3MzlkM2IyYWVmYzQ2NGViMmRhNzA2ODA1N2Y3NzBiLk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfZWIwZTFkZjNmYWZjNGE2NWIyM2MwZDk4OGY1NDBiMWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZWIwZTFkZjNmYWZjNGE2NWIyM2MwZDk4OGY1NDBiMWQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOWQ2OGIxM2U2MmZjNGE3NWFiNThiNTNhYmNjOWE3YjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85ZDY4YjEzZTYyZmM0YTc1YWI1OGI1M2FiY2M5YTdiNC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lYjBlMWRmM2ZhZmM0YTY1YjIzYzBkOTg4ZjU0MGIxZC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzlkNjhiMTNlNjJmYzRhNzVhYjU4YjUzYWJjYzlhN2I0O1xyXG5cclxuXHJcbkJpbmRpbmdfZWIwZTFkZjNmYWZjNGE2NWIyM2MwZDk4OGY1NDBiMWQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjc3NzY3MWUwN2JkNDg3NzkxNDllZTI0Y2VhODNhNWQ7XHJcblxyXG52YXIgQmluZGluZ18yNDBhYTA3ZTljNmY0NWY1OGI4NTgyOGQ3ZDI2Zjc4NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18yNDBhYTA3ZTljNmY0NWY1OGI4NTgyOGQ3ZDI2Zjc4Ni5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOWZkZTU5MDlmODM3NGYyMGEzYWYzNDQ2NTgzNmJiNmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85ZmRlNTkwOWY4Mzc0ZjIwYTNhZjM0NDY1ODM2YmI2Zi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18yNDBhYTA3ZTljNmY0NWY1OGI4NTgyOGQ3ZDI2Zjc4Ni5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzlmZGU1OTA5ZjgzNzRmMjBhM2FmMzQ0NjU4MzZiYjZmO1xyXG5cclxuXHJcbkJpbmRpbmdfMjQwYWEwN2U5YzZmNDVmNThiODU4MjhkN2QyNmY3ODYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjc3NzY3MWUwN2JkNDg3NzkxNDllZTI0Y2VhODNhNWQ7XHJcblxyXG52YXIgQmluZGluZ181YTEyNTA4Nzk2OWM0YzBhOTUxYmM4Y2Y1NDVmNzVlNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ181YTEyNTA4Nzk2OWM0YzBhOTUxYmM4Y2Y1NDVmNzVlNC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZGQxYTFkNGUwMGIxNDcxODk5ZmVlYzg5MDU1NmY1YzMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kZDFhMWQ0ZTAwYjE0NzE4OTlmZWVjODkwNTU2ZjVjMy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ181YTEyNTA4Nzk2OWM0YzBhOTUxYmM4Y2Y1NDVmNzVlNC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2RkMWExZDRlMDBiMTQ3MTg5OWZlZWM4OTA1NTZmNWMzO1xyXG5cclxuXHJcbkJpbmRpbmdfNWExMjUwODc5NjljNGMwYTk1MWJjOGNmNTQ1Zjc1ZTQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjc3NzY3MWUwN2JkNDg3NzkxNDllZTI0Y2VhODNhNWQ7XHJcblxyXG52YXIgQmluZGluZ184YjVhODAxMzhkNmM0MzAzYjQ5NGU4MjA0NWI4ZTJiOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184YjVhODAxMzhkNmM0MzAzYjQ5NGU4MjA0NWI4ZTJiOS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzk3OWMyZjJiY2U3ZjQyNWFiOWI1Yzg4Mjc1YzZhOWU3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOTc5YzJmMmJjZTdmNDI1YWI5YjVjODgyNzVjNmE5ZTcuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfOGI1YTgwMTM4ZDZjNDMwM2I0OTRlODIwNDViOGUyYjkuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85NzljMmYyYmNlN2Y0MjVhYjliNWM4ODI3NWM2YTllNztcclxuXHJcblxyXG5CaW5kaW5nXzhiNWE4MDEzOGQ2YzQzMDNiNDk0ZTgyMDQ1YjhlMmI5LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2Y3Nzc2NzFlMDdiZDQ4Nzc5MTQ5ZWUyNGNlYTgzYTVkO1xyXG5cclxudmFyIEJpbmRpbmdfZWVmNTZhMzkzMjljNDk3YmFiMTIxZTY5NTI1YzMyODMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZWVmNTZhMzkzMjljNDk3YmFiMTIxZTY5NTI1YzMyODMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYTA5MGJjMjQ3ODZiNDI4ZmFmNmFjODRhMGE3YTIzNTUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9hMDkwYmMyNDc4NmI0MjhmYWY2YWM4NGEwYTdhMjM1NS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lZWY1NmEzOTMyOWM0OTdiYWIxMjFlNjk1MjVjMzI4My5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2EwOTBiYzI0Nzg2YjQyOGZhZjZhYzg0YTBhN2EyMzU1O1xyXG5cclxuXHJcbkJpbmRpbmdfZWVmNTZhMzkzMjljNDk3YmFiMTIxZTY5NTI1YzMyODMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjc3NzY3MWUwN2JkNDg3NzkxNDllZTI0Y2VhODNhNWQ7XHJcblxyXG5cclxuQm9yZGVyXzA2Y2JlNzIxMTkxYjQ5OGJhMzlmZjQ4NDZmMTU4ZGE0LkNoaWxkID0gQ29udGVudFByZXNlbnRlcl82NzM5ZDNiMmFlZmM0NjRlYjJkYTcwNjgwNTdmNzcwYjtcclxuXHJcbnZhciBCaW5kaW5nX2Y1ZDRkODFlZDY0OTQ5NjY5MWEyYzBhMjc4YTk1Y2RjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2Y1ZDRkODFlZDY0OTQ5NjY5MWEyYzBhMjc4YTk1Y2RjLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV84MWVmNmMwODY4OWE0Y2JlYjBjMDlmYjE4YWNmYWEwOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzgxZWY2YzA4Njg5YTRjYmViMGMwOWZiMThhY2ZhYTA5Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2Y1ZDRkODFlZDY0OTQ5NjY5MWEyYzBhMjc4YTk1Y2RjLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfODFlZjZjMDg2ODlhNGNiZWIwYzA5ZmIxOGFjZmFhMDk7XHJcblxyXG5cclxuQmluZGluZ19mNWQ0ZDgxZWQ2NDk0OTY2OTFhMmMwYTI3OGE5NWNkYy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9mNzc3NjcxZTA3YmQ0ODc3OTE0OWVlMjRjZWE4M2E1ZDtcclxuXHJcblxyXG5Cb3JkZXJfZDVhOGE4ODBhOTBlNGI5NGE2MjJkYWIzNjI1MzdkMjEuQ2hpbGQgPSBCb3JkZXJfMDZjYmU3MjExOTFiNDk4YmEzOWZmNDg0NmYxNThkYTQ7XHJcblxyXG52YXIgQmluZGluZ19lMTM1YTBjODQwZDQ0MTNkYjE0YTlhYjZjMGRmNDBjMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lMTM1YTBjODQwZDQ0MTNkYjE0YTlhYjZjMGRmNDBjMC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfM2NmZDNmYTgxMGNkNGE2YTgwOWYwYjlmNzU2OTFlNDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8zY2ZkM2ZhODEwY2Q0YTZhODA5ZjBiOWY3NTY5MWU0Ni5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lMTM1YTBjODQwZDQ0MTNkYjE0YTlhYjZjMGRmNDBjMC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzNjZmQzZmE4MTBjZDRhNmE4MDlmMGI5Zjc1NjkxZTQ2O1xyXG5cclxuXHJcbkJpbmRpbmdfZTEzNWEwYzg0MGQ0NDEzZGIxNGE5YWI2YzBkZjQwYzAuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjc3NzY3MWUwN2JkNDg3NzkxNDllZTI0Y2VhODNhNWQ7XHJcblxyXG52YXIgQmluZGluZ18zNTZkYmUwMDVkMGM0MTE0YjBkZTkzZjdlMmU2Mjc1ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18zNTZkYmUwMDVkMGM0MTE0YjBkZTkzZjdlMmU2Mjc1Zi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2M2YWVkNTg5ODUxNjQwNjZiZGU0NmIyMGJjMmU2MDVmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfYzZhZWQ1ODk4NTE2NDA2NmJkZTQ2YjIwYmMyZTYwNWYuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMzU2ZGJlMDA1ZDBjNDExNGIwZGU5M2Y3ZTJlNjI3NWYuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9jNmFlZDU4OTg1MTY0MDY2YmRlNDZiMjBiYzJlNjA1ZjtcclxuXHJcblxyXG5CaW5kaW5nXzM1NmRiZTAwNWQwYzQxMTRiMGRlOTNmN2UyZTYyNzVmLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2Y3Nzc2NzFlMDdiZDQ4Nzc5MTQ5ZWUyNGNlYTgzYTVkO1xyXG5cclxudmFyIEJpbmRpbmdfYmM1MjI0ZjA4ODk4NDliZWEwNThkNjgwZDQzZmY0YWYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYmM1MjI0ZjA4ODk4NDliZWEwNThkNjgwZDQzZmY0YWYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNjE5ZmM2MzBiMWUwNGU4Yjg1ZDAwYzk1NDc4MjBkNDUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82MTlmYzYzMGIxZTA0ZThiODVkMDBjOTU0NzgyMGQ0NS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19iYzUyMjRmMDg4OTg0OWJlYTA1OGQ2ODBkNDNmZjRhZi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzYxOWZjNjMwYjFlMDRlOGI4NWQwMGM5NTQ3ODIwZDQ1O1xyXG5cclxuXHJcbkJpbmRpbmdfYmM1MjI0ZjA4ODk4NDliZWEwNThkNjgwZDQzZmY0YWYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfZjc3NzY3MWUwN2JkNDg3NzkxNDllZTI0Y2VhODNhNWQ7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfNjczOWQzYjJhZWZjNDY0ZWIyZGE3MDY4MDU3Zjc3MGIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ19lYjBlMWRmM2ZhZmM0YTY1YjIzYzBkOTg4ZjU0MGIxZCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNjczOWQzYjJhZWZjNDY0ZWIyZGE3MDY4MDU3Zjc3MGIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfMjQwYWEwN2U5YzZmNDVmNThiODU4MjhkN2QyNmY3ODYpO1xyXG5Db250ZW50UHJlc2VudGVyXzY3MzlkM2IyYWVmYzQ2NGViMmRhNzA2ODA1N2Y3NzBiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ181YTEyNTA4Nzk2OWM0YzBhOTUxYmM4Y2Y1NDVmNzVlNCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNjczOWQzYjJhZWZjNDY0ZWIyZGE3MDY4MDU3Zjc3MGIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ184YjVhODAxMzhkNmM0MzAzYjQ5NGU4MjA0NWI4ZTJiOSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNjczOWQzYjJhZWZjNDY0ZWIyZGE3MDY4MDU3Zjc3MGIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfZWVmNTZhMzkzMjljNDk3YmFiMTIxZTY5NTI1YzMyODMpO1xyXG5Cb3JkZXJfMDZjYmU3MjExOTFiNDk4YmEzOWZmNDg0NmYxNThkYTQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2Y1ZDRkODFlZDY0OTQ5NjY5MWEyYzBhMjc4YTk1Y2RjKTtcclxuQm9yZGVyX2Q1YThhODgwYTkwZTRiOTRhNjIyZGFiMzYyNTM3ZDIxLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19lMTM1YTBjODQwZDQ0MTNkYjE0YTlhYjZjMGRmNDBjMCk7XHJcbkJvcmRlcl9kNWE4YTg4MGE5MGU0Yjk0YTYyMmRhYjM2MjUzN2QyMS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nXzM1NmRiZTAwNWQwYzQxMTRiMGRlOTNmN2UyZTYyNzVmKTtcclxuQm9yZGVyX2Q1YThhODgwYTkwZTRiOTRhNjIyZGFiMzYyNTM3ZDIxLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nX2JjNTIyNGYwODg5ODQ5YmVhMDU4ZDY4MGQ0M2ZmNGFmKTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzk1OGRmNjhjMDY1ODRjZmNhNGRiNGZhNTdiNWY1N2I2LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzQ2YTEyZDc4YTY2ZTRhOTg5Mjk1YzBmNzdiOTk1NzMxLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNDZhMTJkNzhhNjZlNGE5ODkyOTVjMGY3N2I5OTU3MzEsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV80NmExMmQ3OGE2NmU0YTk4OTI5NWMwZjc3Yjk5NTczMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzQ2YTEyZDc4YTY2ZTRhOTg5Mjk1YzBmNzdiOTk1NzMxLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNDZhMTJkNzhhNjZlNGE5ODkyOTVjMGY3N2I5OTU3MzEpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzk1OGRmNjhjMDY1ODRjZmNhNGRiNGZhNTdiNWY1N2I2LCBCb3JkZXJfMDZjYmU3MjExOTFiNDk4YmEzOWZmNDg0NmYxNThkYTQpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2VkYTY5OTM3MzJlNjRjMmU4YjE4ODg3ODQ4MDFiZGM0LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2NhYzhiMTAzMTc2OTRmZGRhODcyMTMxZmJjZjAzYmQyLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfY2FjOGIxMDMxNzY5NGZkZGE4NzIxMzFmYmNmMDNiZDIsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9jYWM4YjEwMzE3Njk0ZmRkYTg3MjEzMWZiY2YwM2JkMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2NhYzhiMTAzMTc2OTRmZGRhODcyMTMxZmJjZjAzYmQyLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfY2FjOGIxMDMxNzY5NGZkZGE4NzIxMzFmYmNmMDNiZDIpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2VkYTY5OTM3MzJlNjRjMmU4YjE4ODg3ODQ4MDFiZGM0LCBCb3JkZXJfMDZjYmU3MjExOTFiNDk4YmEzOWZmNDg0NmYxNThkYTQpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2IxMGM4NjNlY2EzNjQ1MGViNzhlYWFhOWZiNjFmMTNjLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2ExNGU4OTY3N2U5NzQ0YmY5NGRkNmRkZTQwZTRjNDQ0LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYTE0ZTg5Njc3ZTk3NDRiZjk0ZGQ2ZGRlNDBlNGM0NDQsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9hMTRlODk2NzdlOTc0NGJmOTRkZDZkZGU0MGU0YzQ0NCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2ExNGU4OTY3N2U5NzQ0YmY5NGRkNmRkZTQwZTRjNDQ0LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYTE0ZTg5Njc3ZTk3NDRiZjk0ZGQ2ZGRlNDBlNGM0NDQpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2IxMGM4NjNlY2EzNjQ1MGViNzhlYWFhOWZiNjFmMTNjLCBCb3JkZXJfMDZjYmU3MjExOTFiNDk4YmEzOWZmNDg0NmYxNThkYTQpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV9mNzc3NjcxZTA3YmQ0ODc3OTE0OWVlMjRjZWE4M2E1ZC5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfZDVhOGE4ODBhOTBlNGI5NGE2MjJkYWIzNjI1MzdkMjE7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlX2Y3Nzc2NzFlMDdiZDQ4Nzc5MTQ5ZWUyNGNlYTgzYTVkO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD5EQ0IxNjU3NTIzRTc4RTdBQURFRTU3Q0RFMTQ0NkI3NTwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgMjoyODoyNDwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BTZWNvbmRwYWdlx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5TZWNvbmRQYWdlKTtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlR5cGVJbnN0YW50aWF0aW9uSGVscGVyLkluc3RhbnRpYXRlKHR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGF1dG8tZ2VuZXJhdGVkIGJ5IFwiQyMvWEFNTCBmb3IgSFRNTDVcIlxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxucGFydGlhbCBjbGFzcyBTZWNvbmRQYWdlIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxuXHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxTZWNvbmRQYWdlLnhhbWxcIjtcclxuICAgICAgICAgICAgfVxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAwMTg0XHJcblxyXG5cclxuXHJcbnZhciBHcmlkXzhkYzY5ZjlhNDhkMDRhMjM4NTQ5YmViNGZhNGM5ZGI4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxuR3JpZF84ZGM2OWY5YTQ4ZDA0YTIzODU0OWJlYjRmYTRjOWRiOC5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMCwgRyA9IChieXRlKTAsIEIgPSAoYnl0ZSkwIH0pO1xyXG5cclxudGhpcy5Db250ZW50ID0gR3JpZF84ZGM2OWY5YTQ4ZDA0YTIzODU0OWJlYjRmYTRjOWRiODtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgc2VhbGVkIHBhcnRpYWwgY2xhc3MgQXBwIDogQXBwbGljYXRpb25cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQXBwKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRW50ZXIgY29uc3RydWN0aW9uIGxvZ2ljIGhlcmUuLi5cclxuXHJcbiAgICAgICAgICAgIC8vdmFyIHBhZ2VIb21lID0gbmV3IFBhZ2VIb21lKCk7XHJcbiAgICAgICAgICAgIC8vV2luZG93LkN1cnJlbnQuQ29udGVudCA9IHBhZ2VIb21lO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1mcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBtZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2VIb21lLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gbWZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uSU87XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBXaW5kb3dzLkZvdW5kYXRpb247XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUHJpbWl0aXZlcztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkRhdGE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5JbnB1dDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk1lZGlhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTmF2aWdhdGlvbjtcclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFnZTEgOiBQYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFBhZ2UxKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLkluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICAgICAgdHh0RmlsZS5UZXh0ID0gRmlsZUNsYXNzLmZpbGVUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ1dHRvbl9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vUGFnZUhvbWUgcGFnZUhvbWUgPSBuZXcgUGFnZUhvbWUoKTtcclxuICAgICAgICAgICAgLy90aGlzLk5hdmlnYXRpb25TZXJ2aWNlLk5hdmlnYXRlKHBhZ2VIb21lKTtcclxuICAgICAgICAgICAgLy9wYWdlSG9tZS5idG5CZWdpbi5Jc0VuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIGZyYW1lLk5hdmlnYXRlKG5ldyBVcmkoXCJQYWdlSG9tZS54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBCdG5VcGxvYWRfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2VVcGxvYWQueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBmcmFtZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgRmlyc3RfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYXlvdXRHcmlkLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFNlY29uZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIExheW91dEdyaWQuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFRoaXJkX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGF5b3V0R3JpZC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYWdlSG9tZSA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFnZUhvbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnV0dG9uX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9QYWdlMSBwYWdlSG9tZSA9IG5ldyBQYWdlMSgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuTmF2aWdhdGlvblNlcnZpY2UuTmF2aWdhdGUocGFnZUhvbWUpO1xyXG4gICAgICAgICAgICAvL2J0bkJlZ2luLklzRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2UxLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBQYWdlVXBsb2FkIDogUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBQYWdlVXBsb2FkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgdm9pZCBPbkZpbGVPcGVuZWQob2JqZWN0IHNlbmRlciwgQ1NIVE1MNS5FeHRlbnNpb25zLkZpbGVPcGVuRGlhbG9nLkZpbGVPcGVuZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEZpbGVDbGFzcy5maWxlVGV4dCA9IGUuVGV4dDtcclxuICAgICAgICAgICAgTWVzc2FnZUJveC5TaG93KFwi0KTQsNC50Lsg0LfQsNCz0YDRg9C20LXQvVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBCdG5DYW5jZWxfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIGZyYW1lLk5hdmlnYXRlKG5ldyBVcmkoXCJQYWdlMS54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLklPO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgV2luZG93cy5Gb3VuZGF0aW9uO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWw7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlByaW1pdGl2ZXM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5EYXRhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuSW5wdXQ7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5NZWRpYTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk5hdmlnYXRpb247XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIFNlY29uZFBhZ2UgOiBQYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFNlY29uZFBhZ2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5Jbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbiNpZiBTTE1JR1JBVElPTlxyXG51c2luZyBTeXN0ZW0uV2luZG93cztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuQ29udHJvbHM7XHJcbiNlbHNlXHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG4jZW5kaWZcclxuXHJcbm5hbWVzcGFjZSBDU0hUTUw1LkV4dGVuc2lvbnMuRmlsZU9wZW5EaWFsb2dcclxue1xyXG4gICAgcHVibGljIGNsYXNzIENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2cgOiBDb250cm9sXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIGV2ZW50IEV2ZW50SGFuZGxlcjxGaWxlT3BlbmVkRXZlbnRBcmdzPiBGaWxlT3BlbmVkO1xyXG5cclxuICAgICAgICBwcml2YXRlIFJlc3VsdEtpbmQgX3Jlc3VsdEtpbmQ7XHJcbiAgICAgICAgcHJpdmF0ZSBzdHJpbmcgX3Jlc3VsdEtpbmRTdHI7XHJcbiAgICAgICAgcHVibGljIFJlc3VsdEtpbmQgUmVzdWx0S2luZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIF9yZXN1bHRLaW5kOyB9XHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBfcmVzdWx0S2luZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdEtpbmRTdHIgPSB2YWx1ZS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlbkRpYWxvZygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZXN1bHRLaW5kID0gRmlsZU9wZW5EaWFsb2cuUmVzdWx0S2luZC5UZXh0OyAvL05vdGU6IHRoaXMgaXMgdG8gc2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIHRoZSBwcm9wZXJ0eS5cclxuXHJcbiAgICAgICAgICAgIENTaGFycFhhbWxGb3JIdG1sNS5Eb21NYW5hZ2VtZW50LlNldEh0bWxSZXByZXNlbnRhdGlvbih0aGlzLFxyXG4gICAgICAgICAgICAgICAgXCI8ZGl2IHN0eWxlIHN0eWxlPSdtYXJnaW46IDE1cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDogIzFiYmM5YyB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Jz5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCB0eXBlPSdmaWxlJyBpZD0naW5wdXRfX2ZpbGUnIHN0eWxlPSdtYXJnaW46IDY1cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdGV4dC1hbGlnbjogY2VudGVyOyB3aWR0aDogMTAwJTsgdmlzaWJpbGl0eTogaGlkZGVuOycgbXVsdGlwbGU+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8bGFiZWwgZm9yPSdpbnB1dF9fZmlsZScgc3R5bGU9J3dpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDI5MHB4OyBoZWlnaHQ6IDYwcHg7IGJhY2tncm91bmQ6ICNGOURFRjI7IGRpc3BsYXk6IC13ZWJraXQtYm94OyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1wiICtcclxuICAgICAgICAgICAgICAgIFwiZGlzcGxheTogLW1zLWZsZXhib3g7IGRpc3BsYXk6IGZsZXg7ICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOyAtbXMtZmxleC1hbGlnbjogY2VudGVyOyBtYXJnaW46IDAgYXV0bzsgZm9udC1zaXplOiAxLjEyNXJlbTsgZm9udC13ZWlnaHQ6IDcwMDtcIiArXHJcbiAgICAgICAgICAgICAgICBcImJvcmRlci1yYWRpdXM6IDNweDsgY3Vyc29yOiBwb2ludGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyAtd2Via2l0LWJveC1wYWNrOiBzdGFydDsgLW1zLWZsZXgtcGFjazogc3RhcnQ7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBjb2xvcjogIzAwMDsnPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2xpbmUtaGVpZ2h0OiAxO21hcmdpbi10b3A6IDFweDsnPtCS0YvQsdC10YDQuNGC0LUg0YTQsNC50Ls8L3NwYW4+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8L2xhYmVsPlwiK1xyXG4gICAgICAgICAgICAgICAgXCI8L2Rpdj5cIik7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0naW5wdXRfX3dyYXBwZXInPlwiICtcclxuICAgICAgICAgICAgLy8gICBcIjxpbnB1dCB0eXBlID0gJ2ZpbGUnICBpZCA9ICdpbnB1dF9fZmlsZScgY2xhc3M9J2lucHV0IGlucHV0X19maWxlJyBtdWx0aXBsZT5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8bGFiZWwgZm9yPSdpbnB1dF9fZmlsZScgY2xhc3M9J2lucHV0X19maWxlLWJ1dHRvbic+XCIgK1xyXG4gICAgICAgICAgICAvLyAgICAgIFwiPHNwYW4gY2xhc3M9J2lucHV0X19maWxlLWJ1dHRvbi10ZXh0Jz7QktGL0LHQtdGA0LjRgtC1INGE0LDQudC7PC9zcGFuPlwiICtcclxuICAgICAgICAgICAgLy8gICBcIjwvbGFiZWw+XCIgK1xyXG4gICAgICAgICAgICAvL1wiPC9kaXY+XCJcclxuXHJcbiAgICAgICAgICAgIHRoaXMuTG9hZGVkICs9IENvbnRyb2xGb3JEaXNwbGF5aW5nQUZpbGVPcGVuRGlhbG9nX0xvYWRlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgQ29udHJvbEZvckRpc3BsYXlpbmdBRmlsZU9wZW5EaWFsb2dfTG9hZGVkKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gR2V0IHRoZSByZWZlcmVuY2UgdG8gdGhlIFwiaW5wdXRcIiBlbGVtZW50OlxyXG4gICAgICAgICAgICB2YXIgaW5wdXRFbGVtZW50ID0gQ1NIVE1MNS5JbnRlcm9wLkdldERpdih0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIEFjdGlvbjxvYmplY3Q+IG9uRmlsZU9wZW5lZCA9IChyZXN1bHQpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkZpbGVPcGVuZWQgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZpbGVPcGVuZWQodGhpcywgbmV3IEZpbGVPcGVuZWRFdmVudEFyZ3MocmVzdWx0LCB0aGlzLlJlc3VsdEtpbmQpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RyaW5nIHJlc3VsdEtpbmRTdHIgPSBfcmVzdWx0S2luZFN0cjsgLy8gTm90ZTogdGhpcyBpcyBoZXJlIHRvIFwiY2FwdHVyZVwiIHRoZSB2YXJpYWJsZSBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGluc2lkZSB0aGUgXCJhZGRFdmVudExpc3RlbmVyXCIgYmVsb3cuXHJcblxyXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgXCJGaWx0ZXJcIiBwcm9wZXJ0eSB0byBsaW1pdCB0aGUgY2hvaWNlIG9mIHRoZSB1c2VyIHRvIHRoZSBzcGVjaWZpZWQgZXh0ZW5zaW9uczpcclxuICAgICAgICAgICAgU2V0RmlsdGVyKHRoaXMuRmlsdGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIExpc3RlbiB0byB0aGUgXCJjaGFuZ2VcIiBwcm9wZXJ0eSBvZiB0aGUgXCJpbnB1dFwiIGVsZW1lbnQsIGFuZCBjYWxsIHRoZSBjYWxsYmFjazpcclxuICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIlxyXG4gICAgICAgICAgICAgICAgJDAuYWRkRXZlbnRMaXN0ZW5lcihcIlwiY2hhbmdlXCJcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlID0gd2luZG93LmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZnVsbFBhdGggPSAkMC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZnVsbFBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAoZnVsbFBhdGguaW5kZXhPZignXFxcXCcpID49IDAgPyBmdWxsUGF0aC5sYXN0SW5kZXhPZignXFxcXCcpIDogZnVsbFBhdGgubGFzdEluZGV4T2YoJy8nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZnVsbFBhdGguc3Vic3RyaW5nKHN0YXJ0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZW5hbWUuaW5kZXhPZignXFxcXCcpID09PSAwIHx8IGZpbGVuYW1lLmluZGV4T2YoJy8nKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWUgPSBmaWxlbmFtZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSAkMTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy9pZiAoZmlsZS50eXBlID09ICd0ZXh0L3BsYWluJylcclxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0S2luZCA9ICQzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRLaW5kID09ICdEYXRhVVJMJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1J1bm5pbmdJblRoZVNpbXVsYXRvciA9ICQyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XCIsIGlucHV0RWxlbWVudCwgb25GaWxlT3BlbmVkLCBDU0hUTUw1LkludGVyb3AuSXNSdW5uaW5nSW5UaGVTaW11bGF0b3IsIHJlc3VsdEtpbmRTdHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdm9pZCBTZXRGaWx0ZXIoc3RyaW5nIGZpbHRlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBcImlucHV0XCIgZWxlbWVudDpcclxuICAgICAgICAgICAgdmFyIGlucHV0RWxlbWVudCA9IENTSFRNTDUuSW50ZXJvcC5HZXREaXYodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBmaWx0ZXIgbGlzdCB0byBjb252ZXJ0IHRoZSBzeW50YXggZnJvbSBYQU1MIHRvIEhUTUw1OlxyXG4gICAgICAgICAgICAvLyBFeGFtcGxlIG9mIHN5bnRheCBpbiBTaWx2ZXJsaWdodDogSW1hZ2UgRmlsZXMgKCouYm1wLCAqLmpwZyl8Ki5ibXA7Ki5qcGd8QWxsIEZpbGVzICgqLiopfCouKlxyXG4gICAgICAgICAgICAvLyBFeGFtcGxlIG9mIHN5bnRheCBpbiBIVE1MNTogLmdpZiwgLmpwZywgLnBuZywgLmRvY1xyXG4gICAgICAgICAgICBzdHJpbmdbXSBzcGxpdHRlZCA9IGZpbHRlci5TcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICBMaXN0PHN0cmluZz4gaXRlbXNLZXB0ID0gbmV3IExpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZWQuTGVuZ3RoID09IDEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zS2VwdC5BZGQoc3BsaXR0ZWRbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpbnQgaSA9IDE7IGkgPCBzcGxpdHRlZC5MZW5ndGg7IGkgKz0gMilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0tlcHQuQWRkKHNwbGl0dGVkW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJpbmcgZmlsdGVyc0luSHRtbDUgPSBTdHJpbmcuSm9pbihcIixcIiwgaXRlbXNLZXB0KS5SZXBsYWNlKFwiKlwiLCBcIlwiKS5SZXBsYWNlKFwiO1wiLCBcIixcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBseSB0aGUgZmlsdGVyOlxyXG4gICAgICAgICAgICBpZiAoIXN0cmluZy5Jc051bGxPcldoaXRlU3BhY2UoZmlsdGVyc0luSHRtbDUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDU0hUTUw1LkludGVyb3AuRXhlY3V0ZUphdmFTY3JpcHQoQFwiJDAuYWNjZXB0ID0gJDFcIiwgaW5wdXRFbGVtZW50LCBmaWx0ZXJzSW5IdG1sNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDU0hUTUw1LkludGVyb3AuRXhlY3V0ZUphdmFTY3JpcHQoQFwiJDAuYWNjZXB0ID0gXCJcIlwiXCJcIiwgaW5wdXRFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgRmlsdGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBnZXQgeyByZXR1cm4gKHN0cmluZylHZXRWYWx1ZShGaWx0ZXJQcm9wZXJ0eSk7IH1cclxuICAgICAgICAgICAgc2V0IHsgU2V0VmFsdWUoRmlsdGVyUHJvcGVydHksIHZhbHVlKTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERlcGVuZGVuY3lQcm9wZXJ0eSBGaWx0ZXJQcm9wZXJ0eSA9XHJcbiAgICAgICAgICAgIERlcGVuZGVuY3lQcm9wZXJ0eS5SZWdpc3RlcihcIkZpbHRlclwiLCB0eXBlb2Yoc3RyaW5nKSwgdHlwZW9mKENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2cpLCBuZXcgUHJvcGVydHlNZXRhZGF0YShcIlwiLCBGaWx0ZXJfQ2hhbmdlZCkpO1xyXG5cclxuICAgICAgICBzdGF0aWMgdm9pZCBGaWx0ZXJfQ2hhbmdlZChEZXBlbmRlbmN5T2JqZWN0IGQsIERlcGVuZGVuY3lQcm9wZXJ0eUNoYW5nZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sID0gKENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2cpZDtcclxuICAgICAgICAgICAgaWYgKENTaGFycFhhbWxGb3JIdG1sNS5Eb21NYW5hZ2VtZW50LklzQ29udHJvbEluVmlzdWFsVHJlZShjb250cm9sKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbC5TZXRGaWx0ZXIoKGUuTmV3VmFsdWUgPz8gXCJcIikuVG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYXNzIEZpbGVPcGVuZWRFdmVudEFyZ3MgOiBFdmVudEFyZ3NcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE9ubHkgYXZhaWxhYmxlIGlmIHRoZSBwcm9wZXJ0eSBcIlJlc3VsdEtpbmRcIiB3YXMgc2V0IHRvIFwiVGV4dFwiXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBbT2Jzb2xldGVdXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHN0cmluZyBQbGFpblRleHRDb250ZW50O1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE9ubHkgYXZhaWxhYmxlIGlmIHRoZSBwcm9wZXJ0eSBcIlJlc3VsdEtpbmRcIiB3YXMgc2V0IHRvIFwiVGV4dFwiLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHN0cmluZyBUZXh0O1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIE9ubHkgYXZhaWxhYmxlIGlmIHRoZSBwcm9wZXJ0eSBcIlJlc3VsdEtpbmRcIiB3YXMgc2V0IHRvIFwiRGF0YVVSTFwiLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHN0cmluZyBEYXRhVVJMO1xyXG5cclxuICAgICAgICBwdWJsaWMgRmlsZU9wZW5lZEV2ZW50QXJncyhvYmplY3QgcmVzdWx0LCBSZXN1bHRLaW5kIHJlc3VsdEtpbmQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0S2luZCA9PSBSZXN1bHRLaW5kLlRleHQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGV4dCA9IHRoaXMuUGxhaW5UZXh0Q29udGVudCA9IChyZXN1bHQgPz8gXCJcIikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHRLaW5kID09IFJlc3VsdEtpbmQuRGF0YVVSTClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EYXRhVVJMID0gKHJlc3VsdCA/PyBcIlwiKS5Ub1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE5vdFN1cHBvcnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtIFJlc3VsdEtpbmRcclxuICAgIHtcclxuICAgICAgICBUZXh0LCBEYXRhVVJMXHJcbiAgICB9XHJcbn1cclxuIl0KfQo=
