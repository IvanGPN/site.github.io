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


                var ResourceDictionary_ad7be2ecc93446f5a7d5573ac91c9096 = new Bridge.global.Windows.UI.Xaml.ResourceDictionary();
                this.Resources = ResourceDictionary_ad7be2ecc93446f5a7d5573ac91c9096;

                this.Resources = ResourceDictionary_ad7be2ecc93446f5a7d5573ac91c9096;







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
            borderIDEF: null,
            borderUML: null,
            btnUploadIDEF: null,
            btnUploadUML: null,
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
                this.btnUploadUML.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnUploadIDEF.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
            },
            Second_Click: function (sender, e) {
                this.btnCancel.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnUpload.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnProcessing.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.txtFile.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

                this.borderIDEF.Visibility = Windows.UI.Xaml.Visibility.Visible;
                this.borderUML.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnUploadUML.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnUploadIDEF.Visibility = Windows.UI.Xaml.Visibility.Visible;
            },
            Third_Click: function (sender, e) {
                this.btnCancel.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnUpload.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.btnProcessing.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.txtFile.Visibility = Windows.UI.Xaml.Visibility.Collapsed;

                this.borderIDEF.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
                this.borderUML.Visibility = Windows.UI.Xaml.Visibility.Visible;
                this.btnUploadUML.Visibility = Windows.UI.Xaml.Visibility.Visible;
                this.btnUploadIDEF.Visibility = Windows.UI.Xaml.Visibility.Collapsed;
            },
            BtnUploadUML_Click: function (sender, e) {

            },
            BtnUploadIDEF_Click: function (sender, e) {

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



                var Grid_6aec647c41354523bfc0a87c38f72db4 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_6a887951a31c4af0b92083010196a8ee = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_6a887951a31c4af0b92083010196a8ee.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_6a887951a31c4af0b92083010196a8ee.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_63b93182ad354db580772392743743c8 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_63b93182ad354db580772392743743c8.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_63b93182ad354db580772392743743c8.Offset = 0.0;

                var GradientStop_e937bdb5ea964c1ab87443ab4bb05a5a = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_e937bdb5ea964c1ab87443ab4bb05a5a.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_e937bdb5ea964c1ab87443ab4bb05a5a.Offset = 1.0;

                LinearGradientBrush_6a887951a31c4af0b92083010196a8ee.GradientStops.add(GradientStop_63b93182ad354db580772392743743c8);
                LinearGradientBrush_6a887951a31c4af0b92083010196a8ee.GradientStops.add(GradientStop_e937bdb5ea964c1ab87443ab4bb05a5a);


                Grid_6aec647c41354523bfc0a87c38f72db4.Background = LinearGradientBrush_6a887951a31c4af0b92083010196a8ee;

                var RowDefinition_fcfc8bc356c84ea880d4542215694c31 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_fcfc8bc356c84ea880d4542215694c31.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_79d32f295c104bc78726142cd6b2700a = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_79d32f295c104bc78726142cd6b2700a.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_0122234cdbec45d8942233829324a3c6 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_0122234cdbec45d8942233829324a3c6.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_6aec647c41354523bfc0a87c38f72db4.RowDefinitions.add(RowDefinition_fcfc8bc356c84ea880d4542215694c31);
                Grid_6aec647c41354523bfc0a87c38f72db4.RowDefinitions.add(RowDefinition_79d32f295c104bc78726142cd6b2700a);
                Grid_6aec647c41354523bfc0a87c38f72db4.RowDefinitions.add(RowDefinition_0122234cdbec45d8942233829324a3c6);

                var ColumnDefinition_110780069d3443cd8112cec440cfa75c = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();
                ColumnDefinition_110780069d3443cd8112cec440cfa75c.Width = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var ColumnDefinition_6b96f2017b964980a9eb97aa889c04c8 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_6aec647c41354523bfc0a87c38f72db4.ColumnDefinitions.add(ColumnDefinition_110780069d3443cd8112cec440cfa75c);
                Grid_6aec647c41354523bfc0a87c38f72db4.ColumnDefinitions.add(ColumnDefinition_6b96f2017b964980a9eb97aa889c04c8);

                var Border_539b87585e974e9ea8efea2c2a36e8f1 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("elementForList", Border_539b87585e974e9ea8efea2c2a36e8f1);
                Border_539b87585e974e9ea8efea2c2a36e8f1.Name = "elementForList";
                Border_539b87585e974e9ea8efea2c2a36e8f1.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_539b87585e974e9ea8efea2c2a36e8f1, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_539b87585e974e9ea8efea2c2a36e8f1, 3);
                Border_539b87585e974e9ea8efea2c2a36e8f1.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_539b87585e974e9ea8efea2c2a36e8f1.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_539b87585e974e9ea8efea2c2a36e8f1.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var Grid_dbabab5c6b354d52ac6c1486d8be1885 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_a2ba89c9b9e44ea4b18062e43ed2f4ec = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_a2ba89c9b9e44ea4b18062e43ed2f4ec.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_a2ba89c9b9e44ea4b18062e43ed2f4ec.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_b0883e02c79a481d86e3cde8e001d82f = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_b0883e02c79a481d86e3cde8e001d82f.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_b0883e02c79a481d86e3cde8e001d82f.Offset = 0.0;

                var GradientStop_1a0f54bd13954d0d97375bf9288f5bd8 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_1a0f54bd13954d0d97375bf9288f5bd8.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_1a0f54bd13954d0d97375bf9288f5bd8.Offset = 1.0;

                LinearGradientBrush_a2ba89c9b9e44ea4b18062e43ed2f4ec.GradientStops.add(GradientStop_b0883e02c79a481d86e3cde8e001d82f);
                LinearGradientBrush_a2ba89c9b9e44ea4b18062e43ed2f4ec.GradientStops.add(GradientStop_1a0f54bd13954d0d97375bf9288f5bd8);


                Grid_dbabab5c6b354d52ac6c1486d8be1885.Background = LinearGradientBrush_a2ba89c9b9e44ea4b18062e43ed2f4ec;

                var RowDefinition_76bddcdab4074383ba57d809afee8b7a = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_f313d2bf72cf4d3395fa06d3fa1f18ed = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_f313d2bf72cf4d3395fa06d3fa1f18ed.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_edd78e78cca046ef94713a4eb6f9f76f = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_edd78e78cca046ef94713a4eb6f9f76f.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_52dc950d8a464143ad25ce5783dc058c = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_52dc950d8a464143ad25ce5783dc058c.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.3, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_d6d94f51abc245c1b53a7adfa10076cc = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_dbabab5c6b354d52ac6c1486d8be1885.RowDefinitions.add(RowDefinition_76bddcdab4074383ba57d809afee8b7a);
                Grid_dbabab5c6b354d52ac6c1486d8be1885.RowDefinitions.add(RowDefinition_f313d2bf72cf4d3395fa06d3fa1f18ed);
                Grid_dbabab5c6b354d52ac6c1486d8be1885.RowDefinitions.add(RowDefinition_edd78e78cca046ef94713a4eb6f9f76f);
                Grid_dbabab5c6b354d52ac6c1486d8be1885.RowDefinitions.add(RowDefinition_52dc950d8a464143ad25ce5783dc058c);
                Grid_dbabab5c6b354d52ac6c1486d8be1885.RowDefinitions.add(RowDefinition_d6d94f51abc245c1b53a7adfa10076cc);

                var Button_0ba66a0a5a48405f8e38ebfde4277a2a = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_0ba66a0a5a48405f8e38ebfde4277a2a, 1);
                Button_0ba66a0a5a48405f8e38ebfde4277a2a.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_0ba66a0a5a48405f8e38ebfde4277a2a.Content = "JSON";
                Button_0ba66a0a5a48405f8e38ebfde4277a2a.FontSize = 20.0;
                Button_0ba66a0a5a48405f8e38ebfde4277a2a.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_0ba66a0a5a48405f8e38ebfde4277a2a.addClick(Bridge.fn.cacheBind(this, this.First_Click));

                var Button_28e830921a324e16a33c5d0cdb6db1e0 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_28e830921a324e16a33c5d0cdb6db1e0, 2);
                Button_28e830921a324e16a33c5d0cdb6db1e0.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_28e830921a324e16a33c5d0cdb6db1e0.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 IDEF0";
                Button_28e830921a324e16a33c5d0cdb6db1e0.FontSize = 20.0;
                Button_28e830921a324e16a33c5d0cdb6db1e0.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_28e830921a324e16a33c5d0cdb6db1e0.addClick(Bridge.fn.cacheBind(this, this.Second_Click));

                var Button_65f933c882054d879f936ffeb21390b9 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_65f933c882054d879f936ffeb21390b9, 3);
                Button_65f933c882054d879f936ffeb21390b9.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 0, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_65f933c882054d879f936ffeb21390b9.Content = "\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 UML";
                Button_65f933c882054d879f936ffeb21390b9.FontSize = 20.0;
                Button_65f933c882054d879f936ffeb21390b9.Foreground = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_65f933c882054d879f936ffeb21390b9.addClick(Bridge.fn.cacheBind(this, this.Third_Click));

                Grid_dbabab5c6b354d52ac6c1486d8be1885.Children.add(Button_0ba66a0a5a48405f8e38ebfde4277a2a);
                Grid_dbabab5c6b354d52ac6c1486d8be1885.Children.add(Button_28e830921a324e16a33c5d0cdb6db1e0);
                Grid_dbabab5c6b354d52ac6c1486d8be1885.Children.add(Button_65f933c882054d879f936ffeb21390b9);


                Border_539b87585e974e9ea8efea2c2a36e8f1.Child = Grid_dbabab5c6b354d52ac6c1486d8be1885;


                var Border_cfe90bc8c93c4de19f20cc6475653efd = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_cfe90bc8c93c4de19f20cc6475653efd);
                Border_cfe90bc8c93c4de19f20cc6475653efd.Name = "element";
                Border_cfe90bc8c93c4de19f20cc6475653efd.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_cfe90bc8c93c4de19f20cc6475653efd, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_cfe90bc8c93c4de19f20cc6475653efd, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Border_cfe90bc8c93c4de19f20cc6475653efd, 1);
                Border_cfe90bc8c93c4de19f20cc6475653efd.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 200, $t.G = 200, $t.B = 200, $t));
                Border_cfe90bc8c93c4de19f20cc6475653efd.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_cfe90bc8c93c4de19f20cc6475653efd.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_76db4ca060e940c3b3e265e4de01308e = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_76db4ca060e940c3b3e265e4de01308e.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_76db4ca060e940c3b3e265e4de01308e.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_7a68b44862d84f2cace011f0b9222ed3 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_7a68b44862d84f2cace011f0b9222ed3.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_7a68b44862d84f2cace011f0b9222ed3.Offset = 0.0;

                var GradientStop_e99765cb370a4e0985c999ef2d27c98f = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_e99765cb370a4e0985c999ef2d27c98f.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_e99765cb370a4e0985c999ef2d27c98f.Offset = 1.0;

                LinearGradientBrush_76db4ca060e940c3b3e265e4de01308e.GradientStops.add(GradientStop_7a68b44862d84f2cace011f0b9222ed3);
                LinearGradientBrush_76db4ca060e940c3b3e265e4de01308e.GradientStops.add(GradientStop_e99765cb370a4e0985c999ef2d27c98f);


                Border_cfe90bc8c93c4de19f20cc6475653efd.Background = LinearGradientBrush_76db4ca060e940c3b3e265e4de01308e;

                var Grid_2025379440b149fd870c865f945d12d2 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutGrid", Grid_2025379440b149fd870c865f945d12d2);
                Grid_2025379440b149fd870c865f945d12d2.Name = "LayoutGrid";
                var LinearGradientBrush_86019ae649594924bfcca15dff719206 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_86019ae649594924bfcca15dff719206.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_86019ae649594924bfcca15dff719206.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_7dc6475fd107485aa4490b74d3f2353d = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_7dc6475fd107485aa4490b74d3f2353d.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_7dc6475fd107485aa4490b74d3f2353d.Offset = 0.0;

                var GradientStop_860819f72e1d4d5994b9075478d9e828 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_860819f72e1d4d5994b9075478d9e828.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_860819f72e1d4d5994b9075478d9e828.Offset = 1.0;

                LinearGradientBrush_86019ae649594924bfcca15dff719206.GradientStops.add(GradientStop_7dc6475fd107485aa4490b74d3f2353d);
                LinearGradientBrush_86019ae649594924bfcca15dff719206.GradientStops.add(GradientStop_860819f72e1d4d5994b9075478d9e828);


                Grid_2025379440b149fd870c865f945d12d2.Background = LinearGradientBrush_86019ae649594924bfcca15dff719206;

                var RowDefinition_126cb9e72f144a2685bbfe447f398091 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_126cb9e72f144a2685bbfe447f398091.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_8ec438bf32b7494c8d8e522c7ef32d68 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_8ec438bf32b7494c8d8e522c7ef32d68.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_d52415f9a54b4fd9997abdbae2341b7e = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_d52415f9a54b4fd9997abdbae2341b7e.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_2025379440b149fd870c865f945d12d2.RowDefinitions.add(RowDefinition_126cb9e72f144a2685bbfe447f398091);
                Grid_2025379440b149fd870c865f945d12d2.RowDefinitions.add(RowDefinition_8ec438bf32b7494c8d8e522c7ef32d68);
                Grid_2025379440b149fd870c865f945d12d2.RowDefinitions.add(RowDefinition_d52415f9a54b4fd9997abdbae2341b7e);

                var ColumnDefinition_1430b429b2d94e70931982c49c046083 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_7ad5631a26e54730b50ae95b2a6b3e00 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_2025379440b149fd870c865f945d12d2.ColumnDefinitions.add(ColumnDefinition_1430b429b2d94e70931982c49c046083);
                Grid_2025379440b149fd870c865f945d12d2.ColumnDefinitions.add(ColumnDefinition_7ad5631a26e54730b50ae95b2a6b3e00);

                var Button_d04f034e234b4cc5aa03275fcb89027d = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnCancel", Button_d04f034e234b4cc5aa03275fcb89027d);
                Button_d04f034e234b4cc5aa03275fcb89027d.Name = "btnCancel";
                Button_d04f034e234b4cc5aa03275fcb89027d.Content = "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_d04f034e234b4cc5aa03275fcb89027d, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_d04f034e234b4cc5aa03275fcb89027d, 2);
                Button_d04f034e234b4cc5aa03275fcb89027d.Width = 280.0;
                Button_d04f034e234b4cc5aa03275fcb89027d.Height = 50.0;
                Button_d04f034e234b4cc5aa03275fcb89027d.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_d04f034e234b4cc5aa03275fcb89027d.FontSize = 25.0;
                Button_d04f034e234b4cc5aa03275fcb89027d.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_d04f034e234b4cc5aa03275fcb89027d.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_d04f034e234b4cc5aa03275fcb89027d.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                var ControlTemplate_8e34da21875a44d784f0f8699f96ec14 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_8e34da21875a44d784f0f8699f96ec14.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_8e34da21875a44d784f0f8699f96ec14.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_8e34da21875a44d784f0f8699f96ec14));

                Button_d04f034e234b4cc5aa03275fcb89027d.Template = ControlTemplate_8e34da21875a44d784f0f8699f96ec14;


                var Button_8ea3a2aa217648e3aa1bc983149debc4 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnUpload", Button_8ea3a2aa217648e3aa1bc983149debc4);
                Button_8ea3a2aa217648e3aa1bc983149debc4.Name = "btnUpload";
                Button_8ea3a2aa217648e3aa1bc983149debc4.Content = "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c JSON \u0444\u0430\u0439\u043b";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_8ea3a2aa217648e3aa1bc983149debc4, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_8ea3a2aa217648e3aa1bc983149debc4, 1);
                Button_8ea3a2aa217648e3aa1bc983149debc4.Width = 280.0;
                Button_8ea3a2aa217648e3aa1bc983149debc4.Height = 50.0;
                Button_8ea3a2aa217648e3aa1bc983149debc4.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_8ea3a2aa217648e3aa1bc983149debc4.FontSize = 25.0;
                Button_8ea3a2aa217648e3aa1bc983149debc4.addClick(Bridge.fn.cacheBind(this, this.BtnUpload_Click));
                Button_8ea3a2aa217648e3aa1bc983149debc4.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_8ea3a2aa217648e3aa1bc983149debc4.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_8ea3a2aa217648e3aa1bc983149debc4.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_8ea3a2aa217648e3aa1bc983149debc4.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                var ControlTemplate_35491eecbcf94a0a936167df8cb4d2dd = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_35491eecbcf94a0a936167df8cb4d2dd.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_35491eecbcf94a0a936167df8cb4d2dd.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_35491eecbcf94a0a936167df8cb4d2dd));

                Button_8ea3a2aa217648e3aa1bc983149debc4.Template = ControlTemplate_35491eecbcf94a0a936167df8cb4d2dd;


                var Button_be85b0815e7445f9bb0ba59a626ec75e = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnProcessing", Button_be85b0815e7445f9bb0ba59a626ec75e);
                Button_be85b0815e7445f9bb0ba59a626ec75e.Name = "btnProcessing";
                Button_be85b0815e7445f9bb0ba59a626ec75e.Content = "\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0443";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_be85b0815e7445f9bb0ba59a626ec75e, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_be85b0815e7445f9bb0ba59a626ec75e, 1);
                Button_be85b0815e7445f9bb0ba59a626ec75e.Width = 280.0;
                Button_be85b0815e7445f9bb0ba59a626ec75e.Height = 50.0;
                Button_be85b0815e7445f9bb0ba59a626ec75e.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                Button_be85b0815e7445f9bb0ba59a626ec75e.FontSize = 25.0;
                Button_be85b0815e7445f9bb0ba59a626ec75e.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_be85b0815e7445f9bb0ba59a626ec75e.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_be85b0815e7445f9bb0ba59a626ec75e.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_be85b0815e7445f9bb0ba59a626ec75e.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                var ControlTemplate_834fd467b9c04b3b935f82529a75abc1 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_834fd467b9c04b3b935f82529a75abc1.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_834fd467b9c04b3b935f82529a75abc1.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_834fd467b9c04b3b935f82529a75abc1));

                Button_be85b0815e7445f9bb0ba59a626ec75e.Template = ControlTemplate_834fd467b9c04b3b935f82529a75abc1;


                var TextBox_a7175be448824e08aa513e46fb6bda7e = new Bridge.global.Windows.UI.Xaml.Controls.TextBox();
                this.RegisterName$1("txtFile", TextBox_a7175be448824e08aa513e46fb6bda7e);
                TextBox_a7175be448824e08aa513e46fb6bda7e.Name = "txtFile";
                TextBox_a7175be448824e08aa513e46fb6bda7e.TextWrapping = Bridge.global.Windows.UI.Xaml.TextWrapping.Wrap;
                TextBox_a7175be448824e08aa513e46fb6bda7e.Text = "";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(TextBox_a7175be448824e08aa513e46fb6bda7e, 1);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(TextBox_a7175be448824e08aa513e46fb6bda7e, 2);
                TextBox_a7175be448824e08aa513e46fb6bda7e.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(10, -20, 10, -20);
                TextBox_a7175be448824e08aa513e46fb6bda7e.FontSize = 20.0;

                var Border_283fb19f39b04af1b567a29d41ad357d = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderIDEF", Border_283fb19f39b04af1b567a29d41ad357d);
                Border_283fb19f39b04af1b567a29d41ad357d.Name = "borderIDEF";
                Border_283fb19f39b04af1b567a29d41ad357d.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_283fb19f39b04af1b567a29d41ad357d.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_283fb19f39b04af1b567a29d41ad357d, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_283fb19f39b04af1b567a29d41ad357d, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_283fb19f39b04af1b567a29d41ad357d, 2);
                Border_283fb19f39b04af1b567a29d41ad357d.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_283fb19f39b04af1b567a29d41ad357d.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_283fb19f39b04af1b567a29d41ad357d.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var Canvas_a5efa5b577a74618b90dd3ef05c14bd6 = new Bridge.global.Windows.UI.Xaml.Controls.Canvas();
                Canvas_a5efa5b577a74618b90dd3ef05c14bd6.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));

                Border_283fb19f39b04af1b567a29d41ad357d.Child = Canvas_a5efa5b577a74618b90dd3ef05c14bd6;


                var Border_fc723e728ef7402e9ce26d789785a32f = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("borderUML", Border_fc723e728ef7402e9ce26d789785a32f);
                Border_fc723e728ef7402e9ce26d789785a32f.Name = "borderUML";
                Border_fc723e728ef7402e9ce26d789785a32f.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Border_fc723e728ef7402e9ce26d789785a32f.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_fc723e728ef7402e9ce26d789785a32f, 0);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Border_fc723e728ef7402e9ce26d789785a32f, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Border_fc723e728ef7402e9ce26d789785a32f, 2);
                Border_fc723e728ef7402e9ce26d789785a32f.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(10);
                Border_fc723e728ef7402e9ce26d789785a32f.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                Border_fc723e728ef7402e9ce26d789785a32f.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var Canvas_80db804fc7964777b377ed056c40e071 = new Bridge.global.Windows.UI.Xaml.Controls.Canvas();
                Canvas_80db804fc7964777b377ed056c40e071.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 204, $t.G = 204, $t.B = 204, $t));

                Border_fc723e728ef7402e9ce26d789785a32f.Child = Canvas_80db804fc7964777b377ed056c40e071;


                var Button_3aefe53952fa4cc29c59166552ee708c = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnUploadIDEF", Button_3aefe53952fa4cc29c59166552ee708c);
                Button_3aefe53952fa4cc29c59166552ee708c.Name = "btnUploadIDEF";
                Button_3aefe53952fa4cc29c59166552ee708c.Content = "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c IDEF";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_3aefe53952fa4cc29c59166552ee708c, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_3aefe53952fa4cc29c59166552ee708c, 2);
                Button_3aefe53952fa4cc29c59166552ee708c.Width = 280.0;
                Button_3aefe53952fa4cc29c59166552ee708c.Height = 50.0;
                Button_3aefe53952fa4cc29c59166552ee708c.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_3aefe53952fa4cc29c59166552ee708c.FontSize = 25.0;
                Button_3aefe53952fa4cc29c59166552ee708c.addClick(Bridge.fn.cacheBind(this, this.BtnUploadIDEF_Click));
                Button_3aefe53952fa4cc29c59166552ee708c.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_3aefe53952fa4cc29c59166552ee708c.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_3aefe53952fa4cc29c59166552ee708c.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_3aefe53952fa4cc29c59166552ee708c.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_3aefe53952fa4cc29c59166552ee708c.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                var ControlTemplate_ba576136fbe94a0b9d09907f2626a740 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_ba576136fbe94a0b9d09907f2626a740.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_ba576136fbe94a0b9d09907f2626a740.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_ba576136fbe94a0b9d09907f2626a740));

                Button_3aefe53952fa4cc29c59166552ee708c.Template = ControlTemplate_ba576136fbe94a0b9d09907f2626a740;


                var Button_77b1c34717b24f859a2c4808df04f781 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnUploadUML", Button_77b1c34717b24f859a2c4808df04f781);
                Button_77b1c34717b24f859a2c4808df04f781.Name = "btnUploadUML";
                Button_77b1c34717b24f859a2c4808df04f781.Content = "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c UML";
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_77b1c34717b24f859a2c4808df04f781, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Button_77b1c34717b24f859a2c4808df04f781, 2);
                Button_77b1c34717b24f859a2c4808df04f781.Width = 280.0;
                Button_77b1c34717b24f859a2c4808df04f781.Height = 50.0;
                Button_77b1c34717b24f859a2c4808df04f781.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_77b1c34717b24f859a2c4808df04f781.FontSize = 25.0;
                Button_77b1c34717b24f859a2c4808df04f781.addClick(Bridge.fn.cacheBind(this, this.BtnUploadUML_Click));
                Button_77b1c34717b24f859a2c4808df04f781.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_77b1c34717b24f859a2c4808df04f781.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_77b1c34717b24f859a2c4808df04f781.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Button_77b1c34717b24f859a2c4808df04f781.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_77b1c34717b24f859a2c4808df04f781.Visibility = Bridge.global.Windows.UI.Xaml.Visibility.Collapsed;
                var ControlTemplate_6082e743e6b64ebc9b786f21934d8237 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_6082e743e6b64ebc9b786f21934d8237.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_6082e743e6b64ebc9b786f21934d8237.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_6082e743e6b64ebc9b786f21934d8237));

                Button_77b1c34717b24f859a2c4808df04f781.Template = ControlTemplate_6082e743e6b64ebc9b786f21934d8237;


                Grid_2025379440b149fd870c865f945d12d2.Children.add(Button_d04f034e234b4cc5aa03275fcb89027d);
                Grid_2025379440b149fd870c865f945d12d2.Children.add(Button_8ea3a2aa217648e3aa1bc983149debc4);
                Grid_2025379440b149fd870c865f945d12d2.Children.add(Button_be85b0815e7445f9bb0ba59a626ec75e);
                Grid_2025379440b149fd870c865f945d12d2.Children.add(TextBox_a7175be448824e08aa513e46fb6bda7e);
                Grid_2025379440b149fd870c865f945d12d2.Children.add(Border_283fb19f39b04af1b567a29d41ad357d);
                Grid_2025379440b149fd870c865f945d12d2.Children.add(Border_fc723e728ef7402e9ce26d789785a32f);
                Grid_2025379440b149fd870c865f945d12d2.Children.add(Button_3aefe53952fa4cc29c59166552ee708c);
                Grid_2025379440b149fd870c865f945d12d2.Children.add(Button_77b1c34717b24f859a2c4808df04f781);


                Border_cfe90bc8c93c4de19f20cc6475653efd.Child = Grid_2025379440b149fd870c865f945d12d2;


                Grid_6aec647c41354523bfc0a87c38f72db4.Children.add(Border_539b87585e974e9ea8efea2c2a36e8f1);
                Grid_6aec647c41354523bfc0a87c38f72db4.Children.add(Border_cfe90bc8c93c4de19f20cc6475653efd);


                this.Content = Grid_6aec647c41354523bfc0a87c38f72db4;



                this.elementForList = Border_539b87585e974e9ea8efea2c2a36e8f1;
                this.btnCancel = Button_d04f034e234b4cc5aa03275fcb89027d;
                this.btnUpload = Button_8ea3a2aa217648e3aa1bc983149debc4;
                this.btnProcessing = Button_be85b0815e7445f9bb0ba59a626ec75e;
                this.txtFile = TextBox_a7175be448824e08aa513e46fb6bda7e;
                this.borderIDEF = Border_283fb19f39b04af1b567a29d41ad357d;
                this.borderUML = Border_fc723e728ef7402e9ce26d789785a32f;
                this.btnUploadIDEF = Button_3aefe53952fa4cc29c59166552ee708c;
                this.btnUploadUML = Button_77b1c34717b24f859a2c4808df04f781;
                this.LayoutGrid = Grid_2025379440b149fd870c865f945d12d2;
                this.element = Border_cfe90bc8c93c4de19f20cc6475653efd;



            },
            accessVisualStateProperty_98dbe2ee320f4661b845baaa429970f2: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_98dbe2ee320f4661b845baaa429970f2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_98dbe2ee320f4661b845baaa429970f2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_98dbe2ee320f4661b845baaa429970f2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_98dbe2ee320f4661b845baaa429970f2: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_8e34da21875a44d784f0f8699f96ec14: function (templateOwner) {
                var templateInstance_5135f171054e40c5afae6a76a5376a4e = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_5135f171054e40c5afae6a76a5376a4e.TemplateOwner = templateOwner;
                var Border_0a260b42aaca4ce1a96a0b4fa3bab008 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_0a260b42aaca4ce1a96a0b4fa3bab008);
                Border_0a260b42aaca4ce1a96a0b4fa3bab008.Name = "OuterBorder";
                Border_0a260b42aaca4ce1a96a0b4fa3bab008.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_aff13369911645da8c4c70bc97b05286 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_aff13369911645da8c4c70bc97b05286);
                VisualStateGroup_aff13369911645da8c4c70bc97b05286.Name = "CommonStates";
                var VisualState_e9c27b759dc54f7d8d9c4d7bd6239525 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_e9c27b759dc54f7d8d9c4d7bd6239525);
                VisualState_e9c27b759dc54f7d8d9c4d7bd6239525.Name = "Normal";

                var VisualState_9a17d19a142b44789854253be1b40bb5 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_9a17d19a142b44789854253be1b40bb5);
                VisualState_9a17d19a142b44789854253be1b40bb5.Name = "PointerOver";
                var Storyboard_2710a41747cd45219b321123bb3201b1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_2f19f8de2c7749d9a046c296f55ec3c1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_2f19f8de2c7749d9a046c296f55ec3c1, "InnerBorder");
                var DiscreteObjectKeyFrame_563c79c56d394b078feccc1e2231f8f0 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_563c79c56d394b078feccc1e2231f8f0.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_563c79c56d394b078feccc1e2231f8f0.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_2f19f8de2c7749d9a046c296f55ec3c1.KeyFrames.add(DiscreteObjectKeyFrame_563c79c56d394b078feccc1e2231f8f0);


                Storyboard_2710a41747cd45219b321123bb3201b1.Children.add(ObjectAnimationUsingKeyFrames_2f19f8de2c7749d9a046c296f55ec3c1);


                VisualState_9a17d19a142b44789854253be1b40bb5.Storyboard = Storyboard_2710a41747cd45219b321123bb3201b1;


                var VisualState_7fe73a9d6bd24965b380b609a49f203d = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_7fe73a9d6bd24965b380b609a49f203d);
                VisualState_7fe73a9d6bd24965b380b609a49f203d.Name = "Pressed";
                var Storyboard_ecf9f9a649af44cb92d162c65009ce6a = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_2c162c35bb744230a161bfc85b339cff = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_2c162c35bb744230a161bfc85b339cff, "InnerBorder");
                var DiscreteObjectKeyFrame_52591452580a4ef5828aa16222c79221 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_52591452580a4ef5828aa16222c79221.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_52591452580a4ef5828aa16222c79221.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_2c162c35bb744230a161bfc85b339cff.KeyFrames.add(DiscreteObjectKeyFrame_52591452580a4ef5828aa16222c79221);


                Storyboard_ecf9f9a649af44cb92d162c65009ce6a.Children.add(ObjectAnimationUsingKeyFrames_2c162c35bb744230a161bfc85b339cff);


                VisualState_7fe73a9d6bd24965b380b609a49f203d.Storyboard = Storyboard_ecf9f9a649af44cb92d162c65009ce6a;


                var VisualState_7ff82dbd38bb4089a071f7f12a40faa0 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_7ff82dbd38bb4089a071f7f12a40faa0);
                VisualState_7ff82dbd38bb4089a071f7f12a40faa0.Name = "Disabled";
                var Storyboard_5835b10783de4111b1f5c207e0c00c69 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_9ffa88af9afc49b5a36215c70c9d6578 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_9ffa88af9afc49b5a36215c70c9d6578, "InnerBorder");
                var DiscreteObjectKeyFrame_d8d4a550168d498dafc488e970d30f7e = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_d8d4a550168d498dafc488e970d30f7e.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_d8d4a550168d498dafc488e970d30f7e.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_9ffa88af9afc49b5a36215c70c9d6578.KeyFrames.add(DiscreteObjectKeyFrame_d8d4a550168d498dafc488e970d30f7e);


                Storyboard_5835b10783de4111b1f5c207e0c00c69.Children.add(ObjectAnimationUsingKeyFrames_9ffa88af9afc49b5a36215c70c9d6578);


                VisualState_7ff82dbd38bb4089a071f7f12a40faa0.Storyboard = Storyboard_5835b10783de4111b1f5c207e0c00c69;


                System.Array.add(VisualStateGroup_aff13369911645da8c4c70bc97b05286.States, VisualState_e9c27b759dc54f7d8d9c4d7bd6239525, Object);
                System.Array.add(VisualStateGroup_aff13369911645da8c4c70bc97b05286.States, VisualState_9a17d19a142b44789854253be1b40bb5, Object);
                System.Array.add(VisualStateGroup_aff13369911645da8c4c70bc97b05286.States, VisualState_7fe73a9d6bd24965b380b609a49f203d, Object);
                System.Array.add(VisualStateGroup_aff13369911645da8c4c70bc97b05286.States, VisualState_7ff82dbd38bb4089a071f7f12a40faa0, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_aff13369911645da8c4c70bc97b05286);

                var Border_25a23f614a51457b862eb9807afbca09 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_25a23f614a51457b862eb9807afbca09);
                Border_25a23f614a51457b862eb9807afbca09.Name = "InnerBorder";
                Border_25a23f614a51457b862eb9807afbca09.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_64bb1c619b1748968f56f54c3c1b2a78 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_64bb1c619b1748968f56f54c3c1b2a78);
                ContentPresenter_64bb1c619b1748968f56f54c3c1b2a78.Name = "ContentPresenter";
                var Binding_93b4230202564ea0ae51f342c6929e29 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_93b4230202564ea0ae51f342c6929e29.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_c58b2cf7de254d84b26eb97d617e9741 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c58b2cf7de254d84b26eb97d617e9741.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_93b4230202564ea0ae51f342c6929e29.RelativeSource = RelativeSource_c58b2cf7de254d84b26eb97d617e9741;


                Binding_93b4230202564ea0ae51f342c6929e29.TemplateOwner = templateInstance_5135f171054e40c5afae6a76a5376a4e;

                var Binding_5803c63623424f7bbd87e8df8de91e71 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5803c63623424f7bbd87e8df8de91e71.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_8310e545dfde4d35a44af5d40edcf857 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8310e545dfde4d35a44af5d40edcf857.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5803c63623424f7bbd87e8df8de91e71.RelativeSource = RelativeSource_8310e545dfde4d35a44af5d40edcf857;


                Binding_5803c63623424f7bbd87e8df8de91e71.TemplateOwner = templateInstance_5135f171054e40c5afae6a76a5376a4e;

                var Binding_0d2d1e22bc2246e79086352f52f8bb32 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_0d2d1e22bc2246e79086352f52f8bb32.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_b2f41b455f334aa58d74220f3535c284 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_b2f41b455f334aa58d74220f3535c284.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_0d2d1e22bc2246e79086352f52f8bb32.RelativeSource = RelativeSource_b2f41b455f334aa58d74220f3535c284;


                Binding_0d2d1e22bc2246e79086352f52f8bb32.TemplateOwner = templateInstance_5135f171054e40c5afae6a76a5376a4e;

                var Binding_cda21ea8203d440dae4d44be0269651c = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_cda21ea8203d440dae4d44be0269651c.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_0124062a82744a7aac7b4f816153b406 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_0124062a82744a7aac7b4f816153b406.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_cda21ea8203d440dae4d44be0269651c.RelativeSource = RelativeSource_0124062a82744a7aac7b4f816153b406;


                Binding_cda21ea8203d440dae4d44be0269651c.TemplateOwner = templateInstance_5135f171054e40c5afae6a76a5376a4e;

                var Binding_a263c83ebf4347f899283a2747b1769b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_a263c83ebf4347f899283a2747b1769b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_eafc78cce87348d9aebe036459bd1158 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_eafc78cce87348d9aebe036459bd1158.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_a263c83ebf4347f899283a2747b1769b.RelativeSource = RelativeSource_eafc78cce87348d9aebe036459bd1158;


                Binding_a263c83ebf4347f899283a2747b1769b.TemplateOwner = templateInstance_5135f171054e40c5afae6a76a5376a4e;


                Border_25a23f614a51457b862eb9807afbca09.Child = ContentPresenter_64bb1c619b1748968f56f54c3c1b2a78;

                var Binding_44a641209c9d4db2a479b96d6f4091e0 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_44a641209c9d4db2a479b96d6f4091e0.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_6491d150ba6444afa3eb3fff98940dae = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_6491d150ba6444afa3eb3fff98940dae.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_44a641209c9d4db2a479b96d6f4091e0.RelativeSource = RelativeSource_6491d150ba6444afa3eb3fff98940dae;


                Binding_44a641209c9d4db2a479b96d6f4091e0.TemplateOwner = templateInstance_5135f171054e40c5afae6a76a5376a4e;


                Border_0a260b42aaca4ce1a96a0b4fa3bab008.Child = Border_25a23f614a51457b862eb9807afbca09;

                var Binding_34b089e263a14fb39d0a4bb51cad7263 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_34b089e263a14fb39d0a4bb51cad7263.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_dc151796144c4399bfeafa5a2297171e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_dc151796144c4399bfeafa5a2297171e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_34b089e263a14fb39d0a4bb51cad7263.RelativeSource = RelativeSource_dc151796144c4399bfeafa5a2297171e;


                Binding_34b089e263a14fb39d0a4bb51cad7263.TemplateOwner = templateInstance_5135f171054e40c5afae6a76a5376a4e;

                var Binding_3742437bf11c49ea9f22a81fed0eaf5a = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_3742437bf11c49ea9f22a81fed0eaf5a.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_610f40e6698f4be1b852b9d62082984f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_610f40e6698f4be1b852b9d62082984f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_3742437bf11c49ea9f22a81fed0eaf5a.RelativeSource = RelativeSource_610f40e6698f4be1b852b9d62082984f;


                Binding_3742437bf11c49ea9f22a81fed0eaf5a.TemplateOwner = templateInstance_5135f171054e40c5afae6a76a5376a4e;

                var Binding_8aa698c7c4ec49c1a2812391570d9e8e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8aa698c7c4ec49c1a2812391570d9e8e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_ca63908da3e04551879dc88a646b4db5 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ca63908da3e04551879dc88a646b4db5.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8aa698c7c4ec49c1a2812391570d9e8e.RelativeSource = RelativeSource_ca63908da3e04551879dc88a646b4db5;


                Binding_8aa698c7c4ec49c1a2812391570d9e8e.TemplateOwner = templateInstance_5135f171054e40c5afae6a76a5376a4e;



                ContentPresenter_64bb1c619b1748968f56f54c3c1b2a78.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_93b4230202564ea0ae51f342c6929e29);
                ContentPresenter_64bb1c619b1748968f56f54c3c1b2a78.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_5803c63623424f7bbd87e8df8de91e71);
                ContentPresenter_64bb1c619b1748968f56f54c3c1b2a78.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_0d2d1e22bc2246e79086352f52f8bb32);
                ContentPresenter_64bb1c619b1748968f56f54c3c1b2a78.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_cda21ea8203d440dae4d44be0269651c);
                ContentPresenter_64bb1c619b1748968f56f54c3c1b2a78.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_a263c83ebf4347f899283a2747b1769b);
                Border_25a23f614a51457b862eb9807afbca09.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_44a641209c9d4db2a479b96d6f4091e0);
                Border_0a260b42aaca4ce1a96a0b4fa3bab008.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_34b089e263a14fb39d0a4bb51cad7263);
                Border_0a260b42aaca4ce1a96a0b4fa3bab008.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_3742437bf11c49ea9f22a81fed0eaf5a);
                Border_0a260b42aaca4ce1a96a0b4fa3bab008.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_8aa698c7c4ec49c1a2812391570d9e8e);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_2f19f8de2c7749d9a046c296f55ec3c1, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_98dbe2ee320f4661b845baaa429970f2), Bridge.fn.cacheBind(this, this.setVisualStateProperty_98dbe2ee320f4661b845baaa429970f2), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_98dbe2ee320f4661b845baaa429970f2), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_98dbe2ee320f4661b845baaa429970f2), Bridge.fn.cacheBind(this, this.getVisualStateProperty_98dbe2ee320f4661b845baaa429970f2)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_2f19f8de2c7749d9a046c296f55ec3c1, Border_25a23f614a51457b862eb9807afbca09);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_2c162c35bb744230a161bfc85b339cff, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7), Bridge.fn.cacheBind(this, this.setVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7), Bridge.fn.cacheBind(this, this.getVisualStateProperty_526f43dc30ed4c1691ebf7f8b9dce8f7)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_2c162c35bb744230a161bfc85b339cff, Border_25a23f614a51457b862eb9807afbca09);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_9ffa88af9afc49b5a36215c70c9d6578, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9), Bridge.fn.cacheBind(this, this.setVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9), Bridge.fn.cacheBind(this, this.getVisualStateProperty_682d2719017b4bdb81e3156c594b6ca9)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_9ffa88af9afc49b5a36215c70c9d6578, Border_25a23f614a51457b862eb9807afbca09);

                templateInstance_5135f171054e40c5afae6a76a5376a4e.TemplateContent = Border_0a260b42aaca4ce1a96a0b4fa3bab008;
                return templateInstance_5135f171054e40c5afae6a76a5376a4e;
            },
            accessVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_96af1651ec1340299f3c4969175c6c74: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_96af1651ec1340299f3c4969175c6c74: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_96af1651ec1340299f3c4969175c6c74: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_96af1651ec1340299f3c4969175c6c74: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_96af1651ec1340299f3c4969175c6c74: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_35491eecbcf94a0a936167df8cb4d2dd: function (templateOwner) {
                var templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4.TemplateOwner = templateOwner;
                var Border_4d6901179ac246d2aec9d0eda2ffe9e7 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_4d6901179ac246d2aec9d0eda2ffe9e7);
                Border_4d6901179ac246d2aec9d0eda2ffe9e7.Name = "OuterBorder";
                Border_4d6901179ac246d2aec9d0eda2ffe9e7.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_f2e5108575a4419d88aef19d6f400984 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_f2e5108575a4419d88aef19d6f400984);
                VisualStateGroup_f2e5108575a4419d88aef19d6f400984.Name = "CommonStates";
                var VisualState_2b19551dd4874af3a2f10963dcab4f5d = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_2b19551dd4874af3a2f10963dcab4f5d);
                VisualState_2b19551dd4874af3a2f10963dcab4f5d.Name = "Normal";

                var VisualState_db3ddcd8ee5e4fa6aa8cbbbccc846b56 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_db3ddcd8ee5e4fa6aa8cbbbccc846b56);
                VisualState_db3ddcd8ee5e4fa6aa8cbbbccc846b56.Name = "PointerOver";
                var Storyboard_250c6d60633d4b09af9f96f36c63d895 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_2900d049db324111ad28cbca83fb128c = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_2900d049db324111ad28cbca83fb128c, "InnerBorder");
                var DiscreteObjectKeyFrame_9ad1d87f4a0c41eb940dadd89e470dee = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_9ad1d87f4a0c41eb940dadd89e470dee.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_9ad1d87f4a0c41eb940dadd89e470dee.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_2900d049db324111ad28cbca83fb128c.KeyFrames.add(DiscreteObjectKeyFrame_9ad1d87f4a0c41eb940dadd89e470dee);


                Storyboard_250c6d60633d4b09af9f96f36c63d895.Children.add(ObjectAnimationUsingKeyFrames_2900d049db324111ad28cbca83fb128c);


                VisualState_db3ddcd8ee5e4fa6aa8cbbbccc846b56.Storyboard = Storyboard_250c6d60633d4b09af9f96f36c63d895;


                var VisualState_ff1d7bdbfccd4935a14d3bcee29ad34c = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_ff1d7bdbfccd4935a14d3bcee29ad34c);
                VisualState_ff1d7bdbfccd4935a14d3bcee29ad34c.Name = "Pressed";
                var Storyboard_2fee42f58de9470091dc9cb6d77a00b4 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_1909c2f1470844fc9893aee02c840b3c = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_1909c2f1470844fc9893aee02c840b3c, "InnerBorder");
                var DiscreteObjectKeyFrame_3f67b41541c1470f8c8185efb3da6f12 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_3f67b41541c1470f8c8185efb3da6f12.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_3f67b41541c1470f8c8185efb3da6f12.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_1909c2f1470844fc9893aee02c840b3c.KeyFrames.add(DiscreteObjectKeyFrame_3f67b41541c1470f8c8185efb3da6f12);


                Storyboard_2fee42f58de9470091dc9cb6d77a00b4.Children.add(ObjectAnimationUsingKeyFrames_1909c2f1470844fc9893aee02c840b3c);


                VisualState_ff1d7bdbfccd4935a14d3bcee29ad34c.Storyboard = Storyboard_2fee42f58de9470091dc9cb6d77a00b4;


                var VisualState_7afb32be01c546a784a6aba844e7aeca = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_7afb32be01c546a784a6aba844e7aeca);
                VisualState_7afb32be01c546a784a6aba844e7aeca.Name = "Disabled";
                var Storyboard_0d32bdbc61c54b10a18bb682d7a57871 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_d1994e7d936e4783bb01f0a68a7c10ac = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_d1994e7d936e4783bb01f0a68a7c10ac, "InnerBorder");
                var DiscreteObjectKeyFrame_4d4d5531b7c64057891d01c6bb2f6bd1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_4d4d5531b7c64057891d01c6bb2f6bd1.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_4d4d5531b7c64057891d01c6bb2f6bd1.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_d1994e7d936e4783bb01f0a68a7c10ac.KeyFrames.add(DiscreteObjectKeyFrame_4d4d5531b7c64057891d01c6bb2f6bd1);


                Storyboard_0d32bdbc61c54b10a18bb682d7a57871.Children.add(ObjectAnimationUsingKeyFrames_d1994e7d936e4783bb01f0a68a7c10ac);


                VisualState_7afb32be01c546a784a6aba844e7aeca.Storyboard = Storyboard_0d32bdbc61c54b10a18bb682d7a57871;


                System.Array.add(VisualStateGroup_f2e5108575a4419d88aef19d6f400984.States, VisualState_2b19551dd4874af3a2f10963dcab4f5d, Object);
                System.Array.add(VisualStateGroup_f2e5108575a4419d88aef19d6f400984.States, VisualState_db3ddcd8ee5e4fa6aa8cbbbccc846b56, Object);
                System.Array.add(VisualStateGroup_f2e5108575a4419d88aef19d6f400984.States, VisualState_ff1d7bdbfccd4935a14d3bcee29ad34c, Object);
                System.Array.add(VisualStateGroup_f2e5108575a4419d88aef19d6f400984.States, VisualState_7afb32be01c546a784a6aba844e7aeca, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_f2e5108575a4419d88aef19d6f400984);

                var Border_51127c4efae54a1da7c8ae2932ce1766 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_51127c4efae54a1da7c8ae2932ce1766);
                Border_51127c4efae54a1da7c8ae2932ce1766.Name = "InnerBorder";
                Border_51127c4efae54a1da7c8ae2932ce1766.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_aa6b3fe9c5fc4dd5a5166e256944c545 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_aa6b3fe9c5fc4dd5a5166e256944c545);
                ContentPresenter_aa6b3fe9c5fc4dd5a5166e256944c545.Name = "ContentPresenter";
                var Binding_f68a0f0d3ab745bf959a5123ad6e0ba4 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_f68a0f0d3ab745bf959a5123ad6e0ba4.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_292d4513928144a0a8837d26d9a0b390 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_292d4513928144a0a8837d26d9a0b390.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_f68a0f0d3ab745bf959a5123ad6e0ba4.RelativeSource = RelativeSource_292d4513928144a0a8837d26d9a0b390;


                Binding_f68a0f0d3ab745bf959a5123ad6e0ba4.TemplateOwner = templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;

                var Binding_edc37a9602d04337ba2fdf962f0befae = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_edc37a9602d04337ba2fdf962f0befae.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_3cf8a2c1690a4f3ebb068c19c65d509f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3cf8a2c1690a4f3ebb068c19c65d509f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_edc37a9602d04337ba2fdf962f0befae.RelativeSource = RelativeSource_3cf8a2c1690a4f3ebb068c19c65d509f;


                Binding_edc37a9602d04337ba2fdf962f0befae.TemplateOwner = templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;

                var Binding_ec225784215441b78f7bf49414d6dae7 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ec225784215441b78f7bf49414d6dae7.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_1d713bc7ec7644aab145e5dd144ece3f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_1d713bc7ec7644aab145e5dd144ece3f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ec225784215441b78f7bf49414d6dae7.RelativeSource = RelativeSource_1d713bc7ec7644aab145e5dd144ece3f;


                Binding_ec225784215441b78f7bf49414d6dae7.TemplateOwner = templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;

                var Binding_ec7192d3da684a93bd091986f4d5a2ff = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ec7192d3da684a93bd091986f4d5a2ff.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_71f55cf97a8542efad382865ef26f45c = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_71f55cf97a8542efad382865ef26f45c.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ec7192d3da684a93bd091986f4d5a2ff.RelativeSource = RelativeSource_71f55cf97a8542efad382865ef26f45c;


                Binding_ec7192d3da684a93bd091986f4d5a2ff.TemplateOwner = templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;

                var Binding_09eaf14c2f9547d787e12239b4fcb44d = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_09eaf14c2f9547d787e12239b4fcb44d.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_e0317ee03aa5444a90b0da0b94fa095e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e0317ee03aa5444a90b0da0b94fa095e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_09eaf14c2f9547d787e12239b4fcb44d.RelativeSource = RelativeSource_e0317ee03aa5444a90b0da0b94fa095e;


                Binding_09eaf14c2f9547d787e12239b4fcb44d.TemplateOwner = templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;


                Border_51127c4efae54a1da7c8ae2932ce1766.Child = ContentPresenter_aa6b3fe9c5fc4dd5a5166e256944c545;

                var Binding_89533f4e536b41d084d7f903689a39e5 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_89533f4e536b41d084d7f903689a39e5.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_9659cc7d73d640cb9549843dfbd0d6f7 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9659cc7d73d640cb9549843dfbd0d6f7.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_89533f4e536b41d084d7f903689a39e5.RelativeSource = RelativeSource_9659cc7d73d640cb9549843dfbd0d6f7;


                Binding_89533f4e536b41d084d7f903689a39e5.TemplateOwner = templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;


                Border_4d6901179ac246d2aec9d0eda2ffe9e7.Child = Border_51127c4efae54a1da7c8ae2932ce1766;

                var Binding_4315159819654b75be688e16a7060d37 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4315159819654b75be688e16a7060d37.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_8068e15b824d470e8b1f736826b2aa0d = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8068e15b824d470e8b1f736826b2aa0d.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4315159819654b75be688e16a7060d37.RelativeSource = RelativeSource_8068e15b824d470e8b1f736826b2aa0d;


                Binding_4315159819654b75be688e16a7060d37.TemplateOwner = templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;

                var Binding_a8d27de14aa9463dbf7550dadfd915e0 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_a8d27de14aa9463dbf7550dadfd915e0.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_24c7257e6bde4388bd9af4fde190443b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_24c7257e6bde4388bd9af4fde190443b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_a8d27de14aa9463dbf7550dadfd915e0.RelativeSource = RelativeSource_24c7257e6bde4388bd9af4fde190443b;


                Binding_a8d27de14aa9463dbf7550dadfd915e0.TemplateOwner = templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;

                var Binding_cfbbda913d3446ba8687d0a4d4b38547 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_cfbbda913d3446ba8687d0a4d4b38547.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_a924494831d94e7ea60c3bc18b269280 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a924494831d94e7ea60c3bc18b269280.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_cfbbda913d3446ba8687d0a4d4b38547.RelativeSource = RelativeSource_a924494831d94e7ea60c3bc18b269280;


                Binding_cfbbda913d3446ba8687d0a4d4b38547.TemplateOwner = templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;



                ContentPresenter_aa6b3fe9c5fc4dd5a5166e256944c545.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_f68a0f0d3ab745bf959a5123ad6e0ba4);
                ContentPresenter_aa6b3fe9c5fc4dd5a5166e256944c545.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_edc37a9602d04337ba2fdf962f0befae);
                ContentPresenter_aa6b3fe9c5fc4dd5a5166e256944c545.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_ec225784215441b78f7bf49414d6dae7);
                ContentPresenter_aa6b3fe9c5fc4dd5a5166e256944c545.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_ec7192d3da684a93bd091986f4d5a2ff);
                ContentPresenter_aa6b3fe9c5fc4dd5a5166e256944c545.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_09eaf14c2f9547d787e12239b4fcb44d);
                Border_51127c4efae54a1da7c8ae2932ce1766.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_89533f4e536b41d084d7f903689a39e5);
                Border_4d6901179ac246d2aec9d0eda2ffe9e7.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_4315159819654b75be688e16a7060d37);
                Border_4d6901179ac246d2aec9d0eda2ffe9e7.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_a8d27de14aa9463dbf7550dadfd915e0);
                Border_4d6901179ac246d2aec9d0eda2ffe9e7.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_cfbbda913d3446ba8687d0a4d4b38547);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_2900d049db324111ad28cbca83fb128c, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd), Bridge.fn.cacheBind(this, this.setVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd), Bridge.fn.cacheBind(this, this.getVisualStateProperty_cf497539ae9b4685b1cf127a9a1e8dcd)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_2900d049db324111ad28cbca83fb128c, Border_51127c4efae54a1da7c8ae2932ce1766);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_1909c2f1470844fc9893aee02c840b3c, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e), Bridge.fn.cacheBind(this, this.setVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e), Bridge.fn.cacheBind(this, this.getVisualStateProperty_74dcb59c8af144bcb17d0670c585ee2e)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_1909c2f1470844fc9893aee02c840b3c, Border_51127c4efae54a1da7c8ae2932ce1766);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_d1994e7d936e4783bb01f0a68a7c10ac, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_96af1651ec1340299f3c4969175c6c74), Bridge.fn.cacheBind(this, this.setVisualStateProperty_96af1651ec1340299f3c4969175c6c74), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_96af1651ec1340299f3c4969175c6c74), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_96af1651ec1340299f3c4969175c6c74), Bridge.fn.cacheBind(this, this.getVisualStateProperty_96af1651ec1340299f3c4969175c6c74)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_d1994e7d936e4783bb01f0a68a7c10ac, Border_51127c4efae54a1da7c8ae2932ce1766);

                templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4.TemplateContent = Border_4d6901179ac246d2aec9d0eda2ffe9e7;
                return templateInstance_49c6a4b1ee79448f80c6efcd7a5722e4;
            },
            accessVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_5afddf4b417143e38db77f751d7991ce: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_5afddf4b417143e38db77f751d7991ce: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_5afddf4b417143e38db77f751d7991ce: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_5afddf4b417143e38db77f751d7991ce: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_5afddf4b417143e38db77f751d7991ce: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_834fd467b9c04b3b935f82529a75abc1: function (templateOwner) {
                var templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb.TemplateOwner = templateOwner;
                var Border_0ad046f1e1e14080bb44168e3cffc0bb = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_0ad046f1e1e14080bb44168e3cffc0bb);
                Border_0ad046f1e1e14080bb44168e3cffc0bb.Name = "OuterBorder";
                Border_0ad046f1e1e14080bb44168e3cffc0bb.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_cc96c50a6bd14408b4ffa8f22f77b14f = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_cc96c50a6bd14408b4ffa8f22f77b14f);
                VisualStateGroup_cc96c50a6bd14408b4ffa8f22f77b14f.Name = "CommonStates";
                var VisualState_2eff9b0827b14826ab8e3157f6220a50 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_2eff9b0827b14826ab8e3157f6220a50);
                VisualState_2eff9b0827b14826ab8e3157f6220a50.Name = "Normal";

                var VisualState_790464686c5f4047ad8eecfe2a8e8ac5 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_790464686c5f4047ad8eecfe2a8e8ac5);
                VisualState_790464686c5f4047ad8eecfe2a8e8ac5.Name = "PointerOver";
                var Storyboard_22b5c3ef1ac446ddba9045d1b7900562 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_74cc08ec01a5489b9cdb945bed8784cd = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_74cc08ec01a5489b9cdb945bed8784cd, "InnerBorder");
                var DiscreteObjectKeyFrame_680b0a1343f94f20ba4707af0fbf6bd0 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_680b0a1343f94f20ba4707af0fbf6bd0.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_680b0a1343f94f20ba4707af0fbf6bd0.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_74cc08ec01a5489b9cdb945bed8784cd.KeyFrames.add(DiscreteObjectKeyFrame_680b0a1343f94f20ba4707af0fbf6bd0);


                Storyboard_22b5c3ef1ac446ddba9045d1b7900562.Children.add(ObjectAnimationUsingKeyFrames_74cc08ec01a5489b9cdb945bed8784cd);


                VisualState_790464686c5f4047ad8eecfe2a8e8ac5.Storyboard = Storyboard_22b5c3ef1ac446ddba9045d1b7900562;


                var VisualState_6016ee3797344747a8b53c1034776735 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_6016ee3797344747a8b53c1034776735);
                VisualState_6016ee3797344747a8b53c1034776735.Name = "Pressed";
                var Storyboard_c4105d102471450fb8293f3672d1f644 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_1d3871acc00346a19de13a89f9a17000 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_1d3871acc00346a19de13a89f9a17000, "InnerBorder");
                var DiscreteObjectKeyFrame_5720b08048e04877a1d4f12dab20bd14 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_5720b08048e04877a1d4f12dab20bd14.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_5720b08048e04877a1d4f12dab20bd14.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_1d3871acc00346a19de13a89f9a17000.KeyFrames.add(DiscreteObjectKeyFrame_5720b08048e04877a1d4f12dab20bd14);


                Storyboard_c4105d102471450fb8293f3672d1f644.Children.add(ObjectAnimationUsingKeyFrames_1d3871acc00346a19de13a89f9a17000);


                VisualState_6016ee3797344747a8b53c1034776735.Storyboard = Storyboard_c4105d102471450fb8293f3672d1f644;


                var VisualState_4520b05465484013ae31a5bda3c0713d = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_4520b05465484013ae31a5bda3c0713d);
                VisualState_4520b05465484013ae31a5bda3c0713d.Name = "Disabled";
                var Storyboard_ab25706dbc80460fa8223902ba147d06 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_af90b354011440d8b1acd83b263cf513 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_af90b354011440d8b1acd83b263cf513, "InnerBorder");
                var DiscreteObjectKeyFrame_560e3471921048d1affeb86cefb22681 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_560e3471921048d1affeb86cefb22681.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_560e3471921048d1affeb86cefb22681.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_af90b354011440d8b1acd83b263cf513.KeyFrames.add(DiscreteObjectKeyFrame_560e3471921048d1affeb86cefb22681);


                Storyboard_ab25706dbc80460fa8223902ba147d06.Children.add(ObjectAnimationUsingKeyFrames_af90b354011440d8b1acd83b263cf513);


                VisualState_4520b05465484013ae31a5bda3c0713d.Storyboard = Storyboard_ab25706dbc80460fa8223902ba147d06;


                System.Array.add(VisualStateGroup_cc96c50a6bd14408b4ffa8f22f77b14f.States, VisualState_2eff9b0827b14826ab8e3157f6220a50, Object);
                System.Array.add(VisualStateGroup_cc96c50a6bd14408b4ffa8f22f77b14f.States, VisualState_790464686c5f4047ad8eecfe2a8e8ac5, Object);
                System.Array.add(VisualStateGroup_cc96c50a6bd14408b4ffa8f22f77b14f.States, VisualState_6016ee3797344747a8b53c1034776735, Object);
                System.Array.add(VisualStateGroup_cc96c50a6bd14408b4ffa8f22f77b14f.States, VisualState_4520b05465484013ae31a5bda3c0713d, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_cc96c50a6bd14408b4ffa8f22f77b14f);

                var Border_9f4237d2120c4928affb4c1304b34e91 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_9f4237d2120c4928affb4c1304b34e91);
                Border_9f4237d2120c4928affb4c1304b34e91.Name = "InnerBorder";
                Border_9f4237d2120c4928affb4c1304b34e91.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_3772df17de814b22ab4534b0aac79fcf = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_3772df17de814b22ab4534b0aac79fcf);
                ContentPresenter_3772df17de814b22ab4534b0aac79fcf.Name = "ContentPresenter";
                var Binding_f14a4631a8364a48955c6f9782fec8f4 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_f14a4631a8364a48955c6f9782fec8f4.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_4b3c982f7e06443ea3c0952d7e3ad57f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_4b3c982f7e06443ea3c0952d7e3ad57f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_f14a4631a8364a48955c6f9782fec8f4.RelativeSource = RelativeSource_4b3c982f7e06443ea3c0952d7e3ad57f;


                Binding_f14a4631a8364a48955c6f9782fec8f4.TemplateOwner = templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;

                var Binding_5cf3f38cc4da40879a2e3e6c6c6caa44 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5cf3f38cc4da40879a2e3e6c6c6caa44.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_38a7795a4be54adfa794c58c596e8708 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_38a7795a4be54adfa794c58c596e8708.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5cf3f38cc4da40879a2e3e6c6c6caa44.RelativeSource = RelativeSource_38a7795a4be54adfa794c58c596e8708;


                Binding_5cf3f38cc4da40879a2e3e6c6c6caa44.TemplateOwner = templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;

                var Binding_a57c4c9486fd4ad1bf100ee53b1d7fe4 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_a57c4c9486fd4ad1bf100ee53b1d7fe4.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_3229570ac30745368b42f473f883008b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_3229570ac30745368b42f473f883008b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_a57c4c9486fd4ad1bf100ee53b1d7fe4.RelativeSource = RelativeSource_3229570ac30745368b42f473f883008b;


                Binding_a57c4c9486fd4ad1bf100ee53b1d7fe4.TemplateOwner = templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;

                var Binding_fe45e5bf73c6417aa0857ecda3cdfa64 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fe45e5bf73c6417aa0857ecda3cdfa64.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_ba02c9a07bbc49f0a168da76f3263956 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ba02c9a07bbc49f0a168da76f3263956.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fe45e5bf73c6417aa0857ecda3cdfa64.RelativeSource = RelativeSource_ba02c9a07bbc49f0a168da76f3263956;


                Binding_fe45e5bf73c6417aa0857ecda3cdfa64.TemplateOwner = templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;

                var Binding_fb3fb14521fd4badbec1d2c639752eed = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fb3fb14521fd4badbec1d2c639752eed.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_118639ec40364e73ac9e3c92e6cfac17 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_118639ec40364e73ac9e3c92e6cfac17.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fb3fb14521fd4badbec1d2c639752eed.RelativeSource = RelativeSource_118639ec40364e73ac9e3c92e6cfac17;


                Binding_fb3fb14521fd4badbec1d2c639752eed.TemplateOwner = templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;


                Border_9f4237d2120c4928affb4c1304b34e91.Child = ContentPresenter_3772df17de814b22ab4534b0aac79fcf;

                var Binding_ebfba0d9c64d4ec4988138b9a541be5e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ebfba0d9c64d4ec4988138b9a541be5e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_76cf34f04b8741bfaf7c7bf866ecc7bd = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_76cf34f04b8741bfaf7c7bf866ecc7bd.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ebfba0d9c64d4ec4988138b9a541be5e.RelativeSource = RelativeSource_76cf34f04b8741bfaf7c7bf866ecc7bd;


                Binding_ebfba0d9c64d4ec4988138b9a541be5e.TemplateOwner = templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;


                Border_0ad046f1e1e14080bb44168e3cffc0bb.Child = Border_9f4237d2120c4928affb4c1304b34e91;

                var Binding_237dcc683ff04448908aa78798363c23 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_237dcc683ff04448908aa78798363c23.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_ff7cc6dba65a4e13a3f1e5303c1d2603 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ff7cc6dba65a4e13a3f1e5303c1d2603.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_237dcc683ff04448908aa78798363c23.RelativeSource = RelativeSource_ff7cc6dba65a4e13a3f1e5303c1d2603;


                Binding_237dcc683ff04448908aa78798363c23.TemplateOwner = templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;

                var Binding_588b8e527b2a4d4987dd882799eb68ec = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_588b8e527b2a4d4987dd882799eb68ec.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_54c8e4f916a54a18912828641de7c398 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_54c8e4f916a54a18912828641de7c398.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_588b8e527b2a4d4987dd882799eb68ec.RelativeSource = RelativeSource_54c8e4f916a54a18912828641de7c398;


                Binding_588b8e527b2a4d4987dd882799eb68ec.TemplateOwner = templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;

                var Binding_79a93867dbfa4ed3a616ba1ab45b202d = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_79a93867dbfa4ed3a616ba1ab45b202d.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_e450031b0cdc4654968ee9c91e00df23 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_e450031b0cdc4654968ee9c91e00df23.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_79a93867dbfa4ed3a616ba1ab45b202d.RelativeSource = RelativeSource_e450031b0cdc4654968ee9c91e00df23;


                Binding_79a93867dbfa4ed3a616ba1ab45b202d.TemplateOwner = templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;



                ContentPresenter_3772df17de814b22ab4534b0aac79fcf.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_f14a4631a8364a48955c6f9782fec8f4);
                ContentPresenter_3772df17de814b22ab4534b0aac79fcf.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_5cf3f38cc4da40879a2e3e6c6c6caa44);
                ContentPresenter_3772df17de814b22ab4534b0aac79fcf.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_a57c4c9486fd4ad1bf100ee53b1d7fe4);
                ContentPresenter_3772df17de814b22ab4534b0aac79fcf.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_fe45e5bf73c6417aa0857ecda3cdfa64);
                ContentPresenter_3772df17de814b22ab4534b0aac79fcf.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_fb3fb14521fd4badbec1d2c639752eed);
                Border_9f4237d2120c4928affb4c1304b34e91.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_ebfba0d9c64d4ec4988138b9a541be5e);
                Border_0ad046f1e1e14080bb44168e3cffc0bb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_237dcc683ff04448908aa78798363c23);
                Border_0ad046f1e1e14080bb44168e3cffc0bb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_588b8e527b2a4d4987dd882799eb68ec);
                Border_0ad046f1e1e14080bb44168e3cffc0bb.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_79a93867dbfa4ed3a616ba1ab45b202d);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_74cc08ec01a5489b9cdb945bed8784cd, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db), Bridge.fn.cacheBind(this, this.setVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db), Bridge.fn.cacheBind(this, this.getVisualStateProperty_55daede5b3124ff5b3fc0a3e32aca7db)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_74cc08ec01a5489b9cdb945bed8784cd, Border_9f4237d2120c4928affb4c1304b34e91);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_1d3871acc00346a19de13a89f9a17000, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_5afddf4b417143e38db77f751d7991ce), Bridge.fn.cacheBind(this, this.setVisualStateProperty_5afddf4b417143e38db77f751d7991ce), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_5afddf4b417143e38db77f751d7991ce), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_5afddf4b417143e38db77f751d7991ce), Bridge.fn.cacheBind(this, this.getVisualStateProperty_5afddf4b417143e38db77f751d7991ce)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_1d3871acc00346a19de13a89f9a17000, Border_9f4237d2120c4928affb4c1304b34e91);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_af90b354011440d8b1acd83b263cf513, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d), Bridge.fn.cacheBind(this, this.setVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d), Bridge.fn.cacheBind(this, this.getVisualStateProperty_7d2b3792ca0b41728d114e7a3e67241d)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_af90b354011440d8b1acd83b263cf513, Border_9f4237d2120c4928affb4c1304b34e91);

                templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb.TemplateContent = Border_0ad046f1e1e14080bb44168e3cffc0bb;
                return templateInstance_b56fe9c83ece41118ef36f6cac1aa7cb;
            },
            accessVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_26fc317aec60462587a60709557461c0: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_26fc317aec60462587a60709557461c0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_26fc317aec60462587a60709557461c0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_26fc317aec60462587a60709557461c0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_26fc317aec60462587a60709557461c0: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_ba576136fbe94a0b9d09907f2626a740: function (templateOwner) {
                var templateInstance_0130955c0b1b41e0aacbd4f60f5902ae = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_0130955c0b1b41e0aacbd4f60f5902ae.TemplateOwner = templateOwner;
                var Border_23b1b6e51f9e4fe793d2aa932eee8f7b = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_23b1b6e51f9e4fe793d2aa932eee8f7b);
                Border_23b1b6e51f9e4fe793d2aa932eee8f7b.Name = "OuterBorder";
                Border_23b1b6e51f9e4fe793d2aa932eee8f7b.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_d79f5cbbc73943c792b43a76ccf04ee0 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_d79f5cbbc73943c792b43a76ccf04ee0);
                VisualStateGroup_d79f5cbbc73943c792b43a76ccf04ee0.Name = "CommonStates";
                var VisualState_da918ff813984811ad54fc29df8957ae = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_da918ff813984811ad54fc29df8957ae);
                VisualState_da918ff813984811ad54fc29df8957ae.Name = "Normal";

                var VisualState_65ff8003dfe2456ab97b036106d081f1 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_65ff8003dfe2456ab97b036106d081f1);
                VisualState_65ff8003dfe2456ab97b036106d081f1.Name = "PointerOver";
                var Storyboard_9ae359742c1c40639c4daa714396660d = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_bf5825e48a7e44cc9a6f8a13afcb0891 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_bf5825e48a7e44cc9a6f8a13afcb0891, "InnerBorder");
                var DiscreteObjectKeyFrame_0610d7d694fa4bf59d69a85dddfd6069 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_0610d7d694fa4bf59d69a85dddfd6069.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_0610d7d694fa4bf59d69a85dddfd6069.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_bf5825e48a7e44cc9a6f8a13afcb0891.KeyFrames.add(DiscreteObjectKeyFrame_0610d7d694fa4bf59d69a85dddfd6069);


                Storyboard_9ae359742c1c40639c4daa714396660d.Children.add(ObjectAnimationUsingKeyFrames_bf5825e48a7e44cc9a6f8a13afcb0891);


                VisualState_65ff8003dfe2456ab97b036106d081f1.Storyboard = Storyboard_9ae359742c1c40639c4daa714396660d;


                var VisualState_0c65e096fa784a19b999114fe897031a = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_0c65e096fa784a19b999114fe897031a);
                VisualState_0c65e096fa784a19b999114fe897031a.Name = "Pressed";
                var Storyboard_6aed1e41d3cb4b8b9809e3044e7f1ee7 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_9c30779f49ea4fb7968612f04b094a76 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_9c30779f49ea4fb7968612f04b094a76, "InnerBorder");
                var DiscreteObjectKeyFrame_33d1640543a14806a7c2344a0aa25070 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_33d1640543a14806a7c2344a0aa25070.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_33d1640543a14806a7c2344a0aa25070.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_9c30779f49ea4fb7968612f04b094a76.KeyFrames.add(DiscreteObjectKeyFrame_33d1640543a14806a7c2344a0aa25070);


                Storyboard_6aed1e41d3cb4b8b9809e3044e7f1ee7.Children.add(ObjectAnimationUsingKeyFrames_9c30779f49ea4fb7968612f04b094a76);


                VisualState_0c65e096fa784a19b999114fe897031a.Storyboard = Storyboard_6aed1e41d3cb4b8b9809e3044e7f1ee7;


                var VisualState_770ec8ff06de4dc1bce750efc505035d = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_770ec8ff06de4dc1bce750efc505035d);
                VisualState_770ec8ff06de4dc1bce750efc505035d.Name = "Disabled";
                var Storyboard_0cd4976492b94fa0a0c515dbae6b5cde = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_9f3eb995b9f3450098208ae61b0247f4 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_9f3eb995b9f3450098208ae61b0247f4, "InnerBorder");
                var DiscreteObjectKeyFrame_eba4a8146f814f81bffc83b05d2c9821 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_eba4a8146f814f81bffc83b05d2c9821.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_eba4a8146f814f81bffc83b05d2c9821.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_9f3eb995b9f3450098208ae61b0247f4.KeyFrames.add(DiscreteObjectKeyFrame_eba4a8146f814f81bffc83b05d2c9821);


                Storyboard_0cd4976492b94fa0a0c515dbae6b5cde.Children.add(ObjectAnimationUsingKeyFrames_9f3eb995b9f3450098208ae61b0247f4);


                VisualState_770ec8ff06de4dc1bce750efc505035d.Storyboard = Storyboard_0cd4976492b94fa0a0c515dbae6b5cde;


                System.Array.add(VisualStateGroup_d79f5cbbc73943c792b43a76ccf04ee0.States, VisualState_da918ff813984811ad54fc29df8957ae, Object);
                System.Array.add(VisualStateGroup_d79f5cbbc73943c792b43a76ccf04ee0.States, VisualState_65ff8003dfe2456ab97b036106d081f1, Object);
                System.Array.add(VisualStateGroup_d79f5cbbc73943c792b43a76ccf04ee0.States, VisualState_0c65e096fa784a19b999114fe897031a, Object);
                System.Array.add(VisualStateGroup_d79f5cbbc73943c792b43a76ccf04ee0.States, VisualState_770ec8ff06de4dc1bce750efc505035d, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_d79f5cbbc73943c792b43a76ccf04ee0);

                var Border_7d00900dfdcf4b61b980c3a1f2a1e036 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_7d00900dfdcf4b61b980c3a1f2a1e036);
                Border_7d00900dfdcf4b61b980c3a1f2a1e036.Name = "InnerBorder";
                Border_7d00900dfdcf4b61b980c3a1f2a1e036.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_4aabb7fecbc94566a9609d3804daac90 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_4aabb7fecbc94566a9609d3804daac90);
                ContentPresenter_4aabb7fecbc94566a9609d3804daac90.Name = "ContentPresenter";
                var Binding_14a508824603482f82b209dedacdd476 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_14a508824603482f82b209dedacdd476.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_42d3f8ce73f34fd29ac2b78755cd529e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_42d3f8ce73f34fd29ac2b78755cd529e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_14a508824603482f82b209dedacdd476.RelativeSource = RelativeSource_42d3f8ce73f34fd29ac2b78755cd529e;


                Binding_14a508824603482f82b209dedacdd476.TemplateOwner = templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;

                var Binding_4a02d4d64a02437fa49081bb47d2cb18 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_4a02d4d64a02437fa49081bb47d2cb18.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_423d40b041e847b0a8c58e19d85a31a5 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_423d40b041e847b0a8c58e19d85a31a5.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_4a02d4d64a02437fa49081bb47d2cb18.RelativeSource = RelativeSource_423d40b041e847b0a8c58e19d85a31a5;


                Binding_4a02d4d64a02437fa49081bb47d2cb18.TemplateOwner = templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;

                var Binding_d66f4f9c8d954342b4dfc038da903d1e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_d66f4f9c8d954342b4dfc038da903d1e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_f9a3518aa19b49e69f31d2e1ca2a3025 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f9a3518aa19b49e69f31d2e1ca2a3025.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_d66f4f9c8d954342b4dfc038da903d1e.RelativeSource = RelativeSource_f9a3518aa19b49e69f31d2e1ca2a3025;


                Binding_d66f4f9c8d954342b4dfc038da903d1e.TemplateOwner = templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;

                var Binding_1b32b14bc0074b6e9a1c36c0d3830829 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_1b32b14bc0074b6e9a1c36c0d3830829.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_dd3e6cd2a3f440d3a478c5820dd1759a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_dd3e6cd2a3f440d3a478c5820dd1759a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_1b32b14bc0074b6e9a1c36c0d3830829.RelativeSource = RelativeSource_dd3e6cd2a3f440d3a478c5820dd1759a;


                Binding_1b32b14bc0074b6e9a1c36c0d3830829.TemplateOwner = templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;

                var Binding_0c2095c4912d49c2a17d03dc34d00412 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_0c2095c4912d49c2a17d03dc34d00412.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_76b449d33d404d4aba980cfd79222316 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_76b449d33d404d4aba980cfd79222316.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_0c2095c4912d49c2a17d03dc34d00412.RelativeSource = RelativeSource_76b449d33d404d4aba980cfd79222316;


                Binding_0c2095c4912d49c2a17d03dc34d00412.TemplateOwner = templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;


                Border_7d00900dfdcf4b61b980c3a1f2a1e036.Child = ContentPresenter_4aabb7fecbc94566a9609d3804daac90;

                var Binding_0f5a4452a5c14272899d82a8563ecea2 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_0f5a4452a5c14272899d82a8563ecea2.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_9ac8bf1af9dd448fb0d08c0dc958c7e4 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_9ac8bf1af9dd448fb0d08c0dc958c7e4.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_0f5a4452a5c14272899d82a8563ecea2.RelativeSource = RelativeSource_9ac8bf1af9dd448fb0d08c0dc958c7e4;


                Binding_0f5a4452a5c14272899d82a8563ecea2.TemplateOwner = templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;


                Border_23b1b6e51f9e4fe793d2aa932eee8f7b.Child = Border_7d00900dfdcf4b61b980c3a1f2a1e036;

                var Binding_49de998322034a3b86f0070d0b85bcce = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_49de998322034a3b86f0070d0b85bcce.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_eb15b9ad405646b1bf8a931b0e83553e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_eb15b9ad405646b1bf8a931b0e83553e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_49de998322034a3b86f0070d0b85bcce.RelativeSource = RelativeSource_eb15b9ad405646b1bf8a931b0e83553e;


                Binding_49de998322034a3b86f0070d0b85bcce.TemplateOwner = templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;

                var Binding_b78b9754b41a491ab59213e0fd6aa47b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_b78b9754b41a491ab59213e0fd6aa47b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_24042eda0388422ca4f80226e42c5a97 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_24042eda0388422ca4f80226e42c5a97.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_b78b9754b41a491ab59213e0fd6aa47b.RelativeSource = RelativeSource_24042eda0388422ca4f80226e42c5a97;


                Binding_b78b9754b41a491ab59213e0fd6aa47b.TemplateOwner = templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;

                var Binding_75474b0603a04da7853d1ce67a3d5c30 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_75474b0603a04da7853d1ce67a3d5c30.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_7bb9205433cd4eb5b4c3f6f7c24535de = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_7bb9205433cd4eb5b4c3f6f7c24535de.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_75474b0603a04da7853d1ce67a3d5c30.RelativeSource = RelativeSource_7bb9205433cd4eb5b4c3f6f7c24535de;


                Binding_75474b0603a04da7853d1ce67a3d5c30.TemplateOwner = templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;



                ContentPresenter_4aabb7fecbc94566a9609d3804daac90.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_14a508824603482f82b209dedacdd476);
                ContentPresenter_4aabb7fecbc94566a9609d3804daac90.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_4a02d4d64a02437fa49081bb47d2cb18);
                ContentPresenter_4aabb7fecbc94566a9609d3804daac90.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_d66f4f9c8d954342b4dfc038da903d1e);
                ContentPresenter_4aabb7fecbc94566a9609d3804daac90.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_1b32b14bc0074b6e9a1c36c0d3830829);
                ContentPresenter_4aabb7fecbc94566a9609d3804daac90.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_0c2095c4912d49c2a17d03dc34d00412);
                Border_7d00900dfdcf4b61b980c3a1f2a1e036.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_0f5a4452a5c14272899d82a8563ecea2);
                Border_23b1b6e51f9e4fe793d2aa932eee8f7b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_49de998322034a3b86f0070d0b85bcce);
                Border_23b1b6e51f9e4fe793d2aa932eee8f7b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_b78b9754b41a491ab59213e0fd6aa47b);
                Border_23b1b6e51f9e4fe793d2aa932eee8f7b.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_75474b0603a04da7853d1ce67a3d5c30);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_bf5825e48a7e44cc9a6f8a13afcb0891, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2), Bridge.fn.cacheBind(this, this.setVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2), Bridge.fn.cacheBind(this, this.getVisualStateProperty_e57a7b3a25ff40fba4cb58701c928ed2)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_bf5825e48a7e44cc9a6f8a13afcb0891, Border_7d00900dfdcf4b61b980c3a1f2a1e036);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_9c30779f49ea4fb7968612f04b094a76, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d), Bridge.fn.cacheBind(this, this.setVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d), Bridge.fn.cacheBind(this, this.getVisualStateProperty_8753863ed8fd425fb5cb34c6bcd8590d)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_9c30779f49ea4fb7968612f04b094a76, Border_7d00900dfdcf4b61b980c3a1f2a1e036);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_9f3eb995b9f3450098208ae61b0247f4, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_26fc317aec60462587a60709557461c0), Bridge.fn.cacheBind(this, this.setVisualStateProperty_26fc317aec60462587a60709557461c0), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_26fc317aec60462587a60709557461c0), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_26fc317aec60462587a60709557461c0), Bridge.fn.cacheBind(this, this.getVisualStateProperty_26fc317aec60462587a60709557461c0)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_9f3eb995b9f3450098208ae61b0247f4, Border_7d00900dfdcf4b61b980c3a1f2a1e036);

                templateInstance_0130955c0b1b41e0aacbd4f60f5902ae.TemplateContent = Border_23b1b6e51f9e4fe793d2aa932eee8f7b;
                return templateInstance_0130955c0b1b41e0aacbd4f60f5902ae;
            },
            accessVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_981ffae83f1c4a41bae987495b50d346: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_981ffae83f1c4a41bae987495b50d346: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_981ffae83f1c4a41bae987495b50d346: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_981ffae83f1c4a41bae987495b50d346: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_981ffae83f1c4a41bae987495b50d346: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_6082e743e6b64ebc9b786f21934d8237: function (templateOwner) {
                var templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c.TemplateOwner = templateOwner;
                var Border_98f9548994934682967b593165755c99 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_98f9548994934682967b593165755c99);
                Border_98f9548994934682967b593165755c99.Name = "OuterBorder";
                Border_98f9548994934682967b593165755c99.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_f0fdaf1488e24a42bb1db77ee18d06de = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_f0fdaf1488e24a42bb1db77ee18d06de);
                VisualStateGroup_f0fdaf1488e24a42bb1db77ee18d06de.Name = "CommonStates";
                var VisualState_4b3c3d0e7feb4ed89afca3dcba3e3c6d = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_4b3c3d0e7feb4ed89afca3dcba3e3c6d);
                VisualState_4b3c3d0e7feb4ed89afca3dcba3e3c6d.Name = "Normal";

                var VisualState_c9de4b9fe67a42b4a38fe07ab6c12d9e = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_c9de4b9fe67a42b4a38fe07ab6c12d9e);
                VisualState_c9de4b9fe67a42b4a38fe07ab6c12d9e.Name = "PointerOver";
                var Storyboard_058bc5d2880b4b65b5fb933c655c9e0d = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_ca56745e579b4dfea84df6a5f78d3f6f = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_ca56745e579b4dfea84df6a5f78d3f6f, "InnerBorder");
                var DiscreteObjectKeyFrame_5a6d9760f9ab4562b35802c52c9e12f1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_5a6d9760f9ab4562b35802c52c9e12f1.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_5a6d9760f9ab4562b35802c52c9e12f1.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_ca56745e579b4dfea84df6a5f78d3f6f.KeyFrames.add(DiscreteObjectKeyFrame_5a6d9760f9ab4562b35802c52c9e12f1);


                Storyboard_058bc5d2880b4b65b5fb933c655c9e0d.Children.add(ObjectAnimationUsingKeyFrames_ca56745e579b4dfea84df6a5f78d3f6f);


                VisualState_c9de4b9fe67a42b4a38fe07ab6c12d9e.Storyboard = Storyboard_058bc5d2880b4b65b5fb933c655c9e0d;


                var VisualState_a3c3e791d1e14f0c9925682a98a29a74 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_a3c3e791d1e14f0c9925682a98a29a74);
                VisualState_a3c3e791d1e14f0c9925682a98a29a74.Name = "Pressed";
                var Storyboard_66c1f3167ce94595a238133cc8f68a01 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_ec5e5204297446aa9bf15b76de0085b3 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_ec5e5204297446aa9bf15b76de0085b3, "InnerBorder");
                var DiscreteObjectKeyFrame_fa28f20a56604fa2b8ad69e5fa23024c = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_fa28f20a56604fa2b8ad69e5fa23024c.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_fa28f20a56604fa2b8ad69e5fa23024c.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_ec5e5204297446aa9bf15b76de0085b3.KeyFrames.add(DiscreteObjectKeyFrame_fa28f20a56604fa2b8ad69e5fa23024c);


                Storyboard_66c1f3167ce94595a238133cc8f68a01.Children.add(ObjectAnimationUsingKeyFrames_ec5e5204297446aa9bf15b76de0085b3);


                VisualState_a3c3e791d1e14f0c9925682a98a29a74.Storyboard = Storyboard_66c1f3167ce94595a238133cc8f68a01;


                var VisualState_6e87390cb2da4795bc6e62d8c1719706 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_6e87390cb2da4795bc6e62d8c1719706);
                VisualState_6e87390cb2da4795bc6e62d8c1719706.Name = "Disabled";
                var Storyboard_3e31836e31604286bd135597c40fed20 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_5da4a9473b934b62889e10e7f2db15a1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_5da4a9473b934b62889e10e7f2db15a1, "InnerBorder");
                var DiscreteObjectKeyFrame_0d3e28d6976b4b928a38b35192da0f18 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_0d3e28d6976b4b928a38b35192da0f18.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_0d3e28d6976b4b928a38b35192da0f18.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_5da4a9473b934b62889e10e7f2db15a1.KeyFrames.add(DiscreteObjectKeyFrame_0d3e28d6976b4b928a38b35192da0f18);


                Storyboard_3e31836e31604286bd135597c40fed20.Children.add(ObjectAnimationUsingKeyFrames_5da4a9473b934b62889e10e7f2db15a1);


                VisualState_6e87390cb2da4795bc6e62d8c1719706.Storyboard = Storyboard_3e31836e31604286bd135597c40fed20;


                System.Array.add(VisualStateGroup_f0fdaf1488e24a42bb1db77ee18d06de.States, VisualState_4b3c3d0e7feb4ed89afca3dcba3e3c6d, Object);
                System.Array.add(VisualStateGroup_f0fdaf1488e24a42bb1db77ee18d06de.States, VisualState_c9de4b9fe67a42b4a38fe07ab6c12d9e, Object);
                System.Array.add(VisualStateGroup_f0fdaf1488e24a42bb1db77ee18d06de.States, VisualState_a3c3e791d1e14f0c9925682a98a29a74, Object);
                System.Array.add(VisualStateGroup_f0fdaf1488e24a42bb1db77ee18d06de.States, VisualState_6e87390cb2da4795bc6e62d8c1719706, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_f0fdaf1488e24a42bb1db77ee18d06de);

                var Border_6e64c81919424127bff7c57117c28d02 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_6e64c81919424127bff7c57117c28d02);
                Border_6e64c81919424127bff7c57117c28d02.Name = "InnerBorder";
                Border_6e64c81919424127bff7c57117c28d02.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_0a2e945b73af43b3b1ccdeec4467b198 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_0a2e945b73af43b3b1ccdeec4467b198);
                ContentPresenter_0a2e945b73af43b3b1ccdeec4467b198.Name = "ContentPresenter";
                var Binding_5468934e1bfc45b4abed411a5f35f7fc = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5468934e1bfc45b4abed411a5f35f7fc.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_ec6cec87d47f47a3beb9a5064e11f426 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ec6cec87d47f47a3beb9a5064e11f426.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5468934e1bfc45b4abed411a5f35f7fc.RelativeSource = RelativeSource_ec6cec87d47f47a3beb9a5064e11f426;


                Binding_5468934e1bfc45b4abed411a5f35f7fc.TemplateOwner = templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;

                var Binding_c380b4ee197b4f22a2473b9cc446ad4b = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c380b4ee197b4f22a2473b9cc446ad4b.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_bcd6b3a44ac64f3ca7c77bd17a330fa1 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_bcd6b3a44ac64f3ca7c77bd17a330fa1.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c380b4ee197b4f22a2473b9cc446ad4b.RelativeSource = RelativeSource_bcd6b3a44ac64f3ca7c77bd17a330fa1;


                Binding_c380b4ee197b4f22a2473b9cc446ad4b.TemplateOwner = templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;

                var Binding_ed90d7dac82541eda6b87b9d44347e17 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ed90d7dac82541eda6b87b9d44347e17.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_8a1bc2c6646d425b8cf2e3316b263c5f = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_8a1bc2c6646d425b8cf2e3316b263c5f.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ed90d7dac82541eda6b87b9d44347e17.RelativeSource = RelativeSource_8a1bc2c6646d425b8cf2e3316b263c5f;


                Binding_ed90d7dac82541eda6b87b9d44347e17.TemplateOwner = templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;

                var Binding_eaf42137bd2649d3965eb5ea8b978912 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_eaf42137bd2649d3965eb5ea8b978912.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_027526dd4cfe4d6086cd94ba3254c4bf = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_027526dd4cfe4d6086cd94ba3254c4bf.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_eaf42137bd2649d3965eb5ea8b978912.RelativeSource = RelativeSource_027526dd4cfe4d6086cd94ba3254c4bf;


                Binding_eaf42137bd2649d3965eb5ea8b978912.TemplateOwner = templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;

                var Binding_e4ed8362f890463c88ad1ecedbdb4ea6 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_e4ed8362f890463c88ad1ecedbdb4ea6.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_a53ba4d0a59248999d1531e625cfb48c = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_a53ba4d0a59248999d1531e625cfb48c.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_e4ed8362f890463c88ad1ecedbdb4ea6.RelativeSource = RelativeSource_a53ba4d0a59248999d1531e625cfb48c;


                Binding_e4ed8362f890463c88ad1ecedbdb4ea6.TemplateOwner = templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;


                Border_6e64c81919424127bff7c57117c28d02.Child = ContentPresenter_0a2e945b73af43b3b1ccdeec4467b198;

                var Binding_92df1599b391423b8b28a44de698934c = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_92df1599b391423b8b28a44de698934c.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_0a2c04f224a54942bf8c45ef997ba057 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_0a2c04f224a54942bf8c45ef997ba057.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_92df1599b391423b8b28a44de698934c.RelativeSource = RelativeSource_0a2c04f224a54942bf8c45ef997ba057;


                Binding_92df1599b391423b8b28a44de698934c.TemplateOwner = templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;


                Border_98f9548994934682967b593165755c99.Child = Border_6e64c81919424127bff7c57117c28d02;

                var Binding_dbf35fb31ac340cd9056a7711bc04bf1 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_dbf35fb31ac340cd9056a7711bc04bf1.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_616f39258d1046828f219a35b8267a5b = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_616f39258d1046828f219a35b8267a5b.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_dbf35fb31ac340cd9056a7711bc04bf1.RelativeSource = RelativeSource_616f39258d1046828f219a35b8267a5b;


                Binding_dbf35fb31ac340cd9056a7711bc04bf1.TemplateOwner = templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;

                var Binding_ac9680dde9124f7fb3f00964d5651da9 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ac9680dde9124f7fb3f00964d5651da9.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_d4f5bda37df14edbb4c3b93441688f8e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d4f5bda37df14edbb4c3b93441688f8e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ac9680dde9124f7fb3f00964d5651da9.RelativeSource = RelativeSource_d4f5bda37df14edbb4c3b93441688f8e;


                Binding_ac9680dde9124f7fb3f00964d5651da9.TemplateOwner = templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;

                var Binding_c8fe847b96324a6bbbbc81c9d6670c35 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_c8fe847b96324a6bbbbc81c9d6670c35.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_b283abf1668c4293aeae5cbdbe7706ae = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_b283abf1668c4293aeae5cbdbe7706ae.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_c8fe847b96324a6bbbbc81c9d6670c35.RelativeSource = RelativeSource_b283abf1668c4293aeae5cbdbe7706ae;


                Binding_c8fe847b96324a6bbbbc81c9d6670c35.TemplateOwner = templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;



                ContentPresenter_0a2e945b73af43b3b1ccdeec4467b198.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_5468934e1bfc45b4abed411a5f35f7fc);
                ContentPresenter_0a2e945b73af43b3b1ccdeec4467b198.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_c380b4ee197b4f22a2473b9cc446ad4b);
                ContentPresenter_0a2e945b73af43b3b1ccdeec4467b198.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_ed90d7dac82541eda6b87b9d44347e17);
                ContentPresenter_0a2e945b73af43b3b1ccdeec4467b198.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_eaf42137bd2649d3965eb5ea8b978912);
                ContentPresenter_0a2e945b73af43b3b1ccdeec4467b198.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_e4ed8362f890463c88ad1ecedbdb4ea6);
                Border_6e64c81919424127bff7c57117c28d02.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_92df1599b391423b8b28a44de698934c);
                Border_98f9548994934682967b593165755c99.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_dbf35fb31ac340cd9056a7711bc04bf1);
                Border_98f9548994934682967b593165755c99.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_ac9680dde9124f7fb3f00964d5651da9);
                Border_98f9548994934682967b593165755c99.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_c8fe847b96324a6bbbbc81c9d6670c35);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_ca56745e579b4dfea84df6a5f78d3f6f, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0), Bridge.fn.cacheBind(this, this.setVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0), Bridge.fn.cacheBind(this, this.getVisualStateProperty_11463a032e9c4a69b7ce035a6f70b2a0)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_ca56745e579b4dfea84df6a5f78d3f6f, Border_6e64c81919424127bff7c57117c28d02);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_ec5e5204297446aa9bf15b76de0085b3, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_981ffae83f1c4a41bae987495b50d346), Bridge.fn.cacheBind(this, this.setVisualStateProperty_981ffae83f1c4a41bae987495b50d346), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_981ffae83f1c4a41bae987495b50d346), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_981ffae83f1c4a41bae987495b50d346), Bridge.fn.cacheBind(this, this.getVisualStateProperty_981ffae83f1c4a41bae987495b50d346)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_ec5e5204297446aa9bf15b76de0085b3, Border_6e64c81919424127bff7c57117c28d02);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_5da4a9473b934b62889e10e7f2db15a1, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6), Bridge.fn.cacheBind(this, this.setVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6), Bridge.fn.cacheBind(this, this.getVisualStateProperty_ea72d7304c79402f9b272ae9dedf88d6)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_5da4a9473b934b62889e10e7f2db15a1, Border_6e64c81919424127bff7c57117c28d02);

                templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c.TemplateContent = Border_98f9548994934682967b593165755c99;
                return templateInstance_4f19a071d4b74d5b9aa5bd8e8105689c;
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



                var Grid_c974212bbefc47e780dffa6cae043234 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                this.RegisterName$1("LayoutRoot", Grid_c974212bbefc47e780dffa6cae043234);
                Grid_c974212bbefc47e780dffa6cae043234.Name = "LayoutRoot";
                Grid_c974212bbefc47e780dffa6cae043234.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t));
                var Grid_318761c812ec42fd9ab750528d4b040e = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var LinearGradientBrush_2b1da2f6b38a45fcaf59882fd0cfccd0 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_2b1da2f6b38a45fcaf59882fd0cfccd0.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_2b1da2f6b38a45fcaf59882fd0cfccd0.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_a8bc71c4c5444a20ae4561688181f30a = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_a8bc71c4c5444a20ae4561688181f30a.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_a8bc71c4c5444a20ae4561688181f30a.Offset = 0.0;

                var GradientStop_dad5707625f44232bd935d55ceff9a64 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_dad5707625f44232bd935d55ceff9a64.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_dad5707625f44232bd935d55ceff9a64.Offset = 1.0;

                LinearGradientBrush_2b1da2f6b38a45fcaf59882fd0cfccd0.GradientStops.add(GradientStop_a8bc71c4c5444a20ae4561688181f30a);
                LinearGradientBrush_2b1da2f6b38a45fcaf59882fd0cfccd0.GradientStops.add(GradientStop_dad5707625f44232bd935d55ceff9a64);


                Grid_318761c812ec42fd9ab750528d4b040e.Background = LinearGradientBrush_2b1da2f6b38a45fcaf59882fd0cfccd0;

                var Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                this.RegisterName$1("element", Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9);
                Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9.Name = "element";
                Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(3);
                Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 139, $t));
                Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(2);
                Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var LinearGradientBrush_45eadc4937be4dd6835e0e29e36fab96 = new Bridge.global.Windows.UI.Xaml.Media.LinearGradientBrush.ctor();
                LinearGradientBrush_45eadc4937be4dd6835e0e29e36fab96.EndPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 1);
                LinearGradientBrush_45eadc4937be4dd6835e0e29e36fab96.StartPoint = new Bridge.global.Windows.Foundation.Point.$ctor1(0.5, 0);
                var GradientStop_4c2f47ab798b40cca3177f3cc00e25e1 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_4c2f47ab798b40cca3177f3cc00e25e1.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 230, $t.G = 230, $t.B = 230, $t);
                GradientStop_4c2f47ab798b40cca3177f3cc00e25e1.Offset = 0.0;

                var GradientStop_1134413e91bc43888207ceee369440f8 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_1134413e91bc43888207ceee369440f8.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 255, $t.B = 255, $t);
                GradientStop_1134413e91bc43888207ceee369440f8.Offset = 0.5896;

                var GradientStop_ad1d2e0f545f45fe99f55798ba9e29b1 = new Bridge.global.Windows.UI.Xaml.Media.GradientStop();
                GradientStop_ad1d2e0f545f45fe99f55798ba9e29b1.Color = ($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 246, $t.G = 246, $t.B = 246, $t);
                GradientStop_ad1d2e0f545f45fe99f55798ba9e29b1.Offset = 1.0;

                LinearGradientBrush_45eadc4937be4dd6835e0e29e36fab96.GradientStops.add(GradientStop_4c2f47ab798b40cca3177f3cc00e25e1);
                LinearGradientBrush_45eadc4937be4dd6835e0e29e36fab96.GradientStops.add(GradientStop_1134413e91bc43888207ceee369440f8);
                LinearGradientBrush_45eadc4937be4dd6835e0e29e36fab96.GradientStops.add(GradientStop_ad1d2e0f545f45fe99f55798ba9e29b1);


                Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9.Background = LinearGradientBrush_45eadc4937be4dd6835e0e29e36fab96;

                var TransformGroup_f28f19b0e0d84a0a84cc99bc4fc3b706 = new Bridge.global.Windows.UI.Xaml.Media.TransformGroup();
                var ScaleTransform_eae6b40fe53d427e8a03893acababd65 = new Bridge.global.Windows.UI.Xaml.Media.ScaleTransform();

                var RotateTransform_698dc7efdc6c44efb782d81899e5fa8e = new Bridge.global.Windows.UI.Xaml.Media.RotateTransform();

                TransformGroup_f28f19b0e0d84a0a84cc99bc4fc3b706.Children.add(ScaleTransform_eae6b40fe53d427e8a03893acababd65);
                TransformGroup_f28f19b0e0d84a0a84cc99bc4fc3b706.Children.add(RotateTransform_698dc7efdc6c44efb782d81899e5fa8e);


                Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9.RenderTransform = TransformGroup_f28f19b0e0d84a0a84cc99bc4fc3b706;

                var Grid_ce50dc0c695b4177a95f92a118068c7b = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var ColumnDefinition_b80ee8c655104775899836796ff48647 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_8f1c502a8175415f9f390fc1f42ab961 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                var ColumnDefinition_5fd77d7e6310444f8b8ff4d6f5e0b6f0 = new Bridge.global.Windows.UI.Xaml.Controls.ColumnDefinition();

                Grid_ce50dc0c695b4177a95f92a118068c7b.ColumnDefinitions.add(ColumnDefinition_b80ee8c655104775899836796ff48647);
                Grid_ce50dc0c695b4177a95f92a118068c7b.ColumnDefinitions.add(ColumnDefinition_8f1c502a8175415f9f390fc1f42ab961);
                Grid_ce50dc0c695b4177a95f92a118068c7b.ColumnDefinitions.add(ColumnDefinition_5fd77d7e6310444f8b8ff4d6f5e0b6f0);

                var RowDefinition_377f0daa2a584276813f288fa014f840 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_377f0daa2a584276813f288fa014f840.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_befe86fe9172497cae4d5cf03319aa39 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_befe86fe9172497cae4d5cf03319aa39.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.5, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                var RowDefinition_18e29a836c8643909d9853f528fc3b61 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();
                RowDefinition_18e29a836c8643909d9853f528fc3b61.Height = new Bridge.global.Windows.UI.Xaml.GridLength.$ctor2(0.25, Bridge.global.Windows.UI.Xaml.GridUnitType.Star);

                Grid_ce50dc0c695b4177a95f92a118068c7b.RowDefinitions.add(RowDefinition_377f0daa2a584276813f288fa014f840);
                Grid_ce50dc0c695b4177a95f92a118068c7b.RowDefinitions.add(RowDefinition_befe86fe9172497cae4d5cf03319aa39);
                Grid_ce50dc0c695b4177a95f92a118068c7b.RowDefinitions.add(RowDefinition_18e29a836c8643909d9853f528fc3b61);

                var Image_083ae2c5f12f49e78a6a32c7c968c82d = new Bridge.global.Windows.UI.Xaml.Controls.Image();
                Image_083ae2c5f12f49e78a6a32c7c968c82d.Source = Bridge.cast(Bridge.global.DotNetForHtml5.Core.TypeFromStringConverters.ConvertFromInvariantString(Bridge.global.Windows.UI.Xaml.Media.ImageSource, "/CShtml;component/img/HomeImage.jpg"), Windows.UI.Xaml.Media.ImageSource);
                Image_083ae2c5f12f49e78a6a32c7c968c82d.Stretch = Bridge.global.Windows.UI.Xaml.Media.Stretch.Uniform;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumnSpan(Image_083ae2c5f12f49e78a6a32c7c968c82d, 3);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRowSpan(Image_083ae2c5f12f49e78a6a32c7c968c82d, 3);

                Grid_ce50dc0c695b4177a95f92a118068c7b.Children.add(Image_083ae2c5f12f49e78a6a32c7c968c82d);


                Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9.Child = Grid_ce50dc0c695b4177a95f92a118068c7b;


                var Button_b2f09053f2124ebabf327356913b3aef = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                this.RegisterName$1("btnBegin", Button_b2f09053f2124ebabf327356913b3aef);
                Button_b2f09053f2124ebabf327356913b3aef.Name = "btnBegin";
                Button_b2f09053f2124ebabf327356913b3aef.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_b2f09053f2124ebabf327356913b3aef.Content = "\u041d\u0430\u0447\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443";
                Button_b2f09053f2124ebabf327356913b3aef.FontSize = 25.0;
                Button_b2f09053f2124ebabf327356913b3aef.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 255, $t.G = 238, $t.B = 238, $t));
                Button_b2f09053f2124ebabf327356913b3aef.Width = 280.0;
                Button_b2f09053f2124ebabf327356913b3aef.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_b2f09053f2124ebabf327356913b3aef, 2);
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetColumn(Button_b2f09053f2124ebabf327356913b3aef, 1);
                Button_b2f09053f2124ebabf327356913b3aef.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_b2f09053f2124ebabf327356913b3aef.addClick(Bridge.fn.cacheBind(this, this.Button_Click));
                Button_b2f09053f2124ebabf327356913b3aef.Margin = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor2(0, 0, 0, 50);
                Button_b2f09053f2124ebabf327356913b3aef.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                var ControlTemplate_d7816cef92b34b22ac2c33aa54eb3ed4 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_d7816cef92b34b22ac2c33aa54eb3ed4.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_d7816cef92b34b22ac2c33aa54eb3ed4.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_d7816cef92b34b22ac2c33aa54eb3ed4));

                Button_b2f09053f2124ebabf327356913b3aef.Template = ControlTemplate_d7816cef92b34b22ac2c33aa54eb3ed4;


                Grid_318761c812ec42fd9ab750528d4b040e.Children.add(Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9);
                Grid_318761c812ec42fd9ab750528d4b040e.Children.add(Button_b2f09053f2124ebabf327356913b3aef);


                Grid_c974212bbefc47e780dffa6cae043234.Children.add(Grid_318761c812ec42fd9ab750528d4b040e);


                this.Content = Grid_c974212bbefc47e780dffa6cae043234;



                this.element = Border_0ea8c2166b264f9aa5c6a0c31cd4c4b9;
                this.btnBegin = Button_b2f09053f2124ebabf327356913b3aef;
                this.LayoutRoot = Grid_c974212bbefc47e780dffa6cae043234;



            },
            accessVisualStateProperty_284e32f7840040fa9226b482664f3a9b: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_284e32f7840040fa9226b482664f3a9b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_284e32f7840040fa9226b482664f3a9b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_284e32f7840040fa9226b482664f3a9b: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_284e32f7840040fa9226b482664f3a9b: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_d7816cef92b34b22ac2c33aa54eb3ed4: function (templateOwner) {
                var templateInstance_8055ffe9692d4bfcade2b6082ecf721b = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_8055ffe9692d4bfcade2b6082ecf721b.TemplateOwner = templateOwner;
                var Border_f7e669fe28074d0fa4856a0ae69c4dc8 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_f7e669fe28074d0fa4856a0ae69c4dc8);
                Border_f7e669fe28074d0fa4856a0ae69c4dc8.Name = "OuterBorder";
                Border_f7e669fe28074d0fa4856a0ae69c4dc8.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_65c57b8d5afb48d7b45519f1deedd5a8 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_65c57b8d5afb48d7b45519f1deedd5a8);
                VisualStateGroup_65c57b8d5afb48d7b45519f1deedd5a8.Name = "CommonStates";
                var VisualState_a7495292c2ce4633abd842a15a0d89fe = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_a7495292c2ce4633abd842a15a0d89fe);
                VisualState_a7495292c2ce4633abd842a15a0d89fe.Name = "Normal";

                var VisualState_27efb4ad77384f7280945ec1742616f8 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_27efb4ad77384f7280945ec1742616f8);
                VisualState_27efb4ad77384f7280945ec1742616f8.Name = "PointerOver";
                var Storyboard_0a4cb41e6ef74936b040a06f62945755 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_98c2e40591ba480a82182c0d7fc7a320 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_98c2e40591ba480a82182c0d7fc7a320, "InnerBorder");
                var DiscreteObjectKeyFrame_f4d0aceacc294190adc8eb90400f1319 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_f4d0aceacc294190adc8eb90400f1319.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_f4d0aceacc294190adc8eb90400f1319.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_98c2e40591ba480a82182c0d7fc7a320.KeyFrames.add(DiscreteObjectKeyFrame_f4d0aceacc294190adc8eb90400f1319);


                Storyboard_0a4cb41e6ef74936b040a06f62945755.Children.add(ObjectAnimationUsingKeyFrames_98c2e40591ba480a82182c0d7fc7a320);


                VisualState_27efb4ad77384f7280945ec1742616f8.Storyboard = Storyboard_0a4cb41e6ef74936b040a06f62945755;


                var VisualState_5994fb17ae5b469bba2e30e5199a3907 = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_5994fb17ae5b469bba2e30e5199a3907);
                VisualState_5994fb17ae5b469bba2e30e5199a3907.Name = "Pressed";
                var Storyboard_fcfcbe14dcc6402c995917f26f06b0e9 = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_88ca15ec1b1645d6be9d2580835d0aba = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_88ca15ec1b1645d6be9d2580835d0aba, "InnerBorder");
                var DiscreteObjectKeyFrame_fa9a4c41666c4fcbb97531687b3b2c63 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_fa9a4c41666c4fcbb97531687b3b2c63.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_fa9a4c41666c4fcbb97531687b3b2c63.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_88ca15ec1b1645d6be9d2580835d0aba.KeyFrames.add(DiscreteObjectKeyFrame_fa9a4c41666c4fcbb97531687b3b2c63);


                Storyboard_fcfcbe14dcc6402c995917f26f06b0e9.Children.add(ObjectAnimationUsingKeyFrames_88ca15ec1b1645d6be9d2580835d0aba);


                VisualState_5994fb17ae5b469bba2e30e5199a3907.Storyboard = Storyboard_fcfcbe14dcc6402c995917f26f06b0e9;


                var VisualState_38f6c9cfc24e4818be286e122a84a66f = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_38f6c9cfc24e4818be286e122a84a66f);
                VisualState_38f6c9cfc24e4818be286e122a84a66f.Name = "Disabled";
                var Storyboard_1692c7e98bb14f7f818179e16fca165b = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_f5cd67e14b0a433591408ea07a4e8276 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_f5cd67e14b0a433591408ea07a4e8276, "InnerBorder");
                var DiscreteObjectKeyFrame_6d0f5c168036440185458e2e8e5ae55a = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_6d0f5c168036440185458e2e8e5ae55a.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_6d0f5c168036440185458e2e8e5ae55a.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_f5cd67e14b0a433591408ea07a4e8276.KeyFrames.add(DiscreteObjectKeyFrame_6d0f5c168036440185458e2e8e5ae55a);


                Storyboard_1692c7e98bb14f7f818179e16fca165b.Children.add(ObjectAnimationUsingKeyFrames_f5cd67e14b0a433591408ea07a4e8276);


                VisualState_38f6c9cfc24e4818be286e122a84a66f.Storyboard = Storyboard_1692c7e98bb14f7f818179e16fca165b;


                System.Array.add(VisualStateGroup_65c57b8d5afb48d7b45519f1deedd5a8.States, VisualState_a7495292c2ce4633abd842a15a0d89fe, Object);
                System.Array.add(VisualStateGroup_65c57b8d5afb48d7b45519f1deedd5a8.States, VisualState_27efb4ad77384f7280945ec1742616f8, Object);
                System.Array.add(VisualStateGroup_65c57b8d5afb48d7b45519f1deedd5a8.States, VisualState_5994fb17ae5b469bba2e30e5199a3907, Object);
                System.Array.add(VisualStateGroup_65c57b8d5afb48d7b45519f1deedd5a8.States, VisualState_38f6c9cfc24e4818be286e122a84a66f, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_65c57b8d5afb48d7b45519f1deedd5a8);

                var Border_efb9e6e910ae45d69427c4c703b4a552 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_efb9e6e910ae45d69427c4c703b4a552);
                Border_efb9e6e910ae45d69427c4c703b4a552.Name = "InnerBorder";
                Border_efb9e6e910ae45d69427c4c703b4a552.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_31bed982aade4910a222dbddcfac6a24 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_31bed982aade4910a222dbddcfac6a24);
                ContentPresenter_31bed982aade4910a222dbddcfac6a24.Name = "ContentPresenter";
                var Binding_dc513709c96241838e94d5393b5aec0e = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_dc513709c96241838e94d5393b5aec0e.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_98b5f982067e4036a6a261425ed9d1f1 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_98b5f982067e4036a6a261425ed9d1f1.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_dc513709c96241838e94d5393b5aec0e.RelativeSource = RelativeSource_98b5f982067e4036a6a261425ed9d1f1;


                Binding_dc513709c96241838e94d5393b5aec0e.TemplateOwner = templateInstance_8055ffe9692d4bfcade2b6082ecf721b;

                var Binding_8c53cdaaaa534fbe85dc21e4d2acdf48 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8c53cdaaaa534fbe85dc21e4d2acdf48.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_344fb8144fc644ab95f57e7037eb9192 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_344fb8144fc644ab95f57e7037eb9192.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8c53cdaaaa534fbe85dc21e4d2acdf48.RelativeSource = RelativeSource_344fb8144fc644ab95f57e7037eb9192;


                Binding_8c53cdaaaa534fbe85dc21e4d2acdf48.TemplateOwner = templateInstance_8055ffe9692d4bfcade2b6082ecf721b;

                var Binding_fba53c69724046dd97ca3eb6f80b1114 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fba53c69724046dd97ca3eb6f80b1114.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_5550edcd590e4bcf9ac8f373df18b712 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_5550edcd590e4bcf9ac8f373df18b712.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fba53c69724046dd97ca3eb6f80b1114.RelativeSource = RelativeSource_5550edcd590e4bcf9ac8f373df18b712;


                Binding_fba53c69724046dd97ca3eb6f80b1114.TemplateOwner = templateInstance_8055ffe9692d4bfcade2b6082ecf721b;

                var Binding_24d83c9e15604e61a57eacec11666274 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_24d83c9e15604e61a57eacec11666274.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_65a3ee6cfb354bf69534eb3e99b3d99a = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_65a3ee6cfb354bf69534eb3e99b3d99a.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_24d83c9e15604e61a57eacec11666274.RelativeSource = RelativeSource_65a3ee6cfb354bf69534eb3e99b3d99a;


                Binding_24d83c9e15604e61a57eacec11666274.TemplateOwner = templateInstance_8055ffe9692d4bfcade2b6082ecf721b;

                var Binding_986283f86531491e8e17e6a36e65b565 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_986283f86531491e8e17e6a36e65b565.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_678f741f70234bffb021207b8c816946 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_678f741f70234bffb021207b8c816946.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_986283f86531491e8e17e6a36e65b565.RelativeSource = RelativeSource_678f741f70234bffb021207b8c816946;


                Binding_986283f86531491e8e17e6a36e65b565.TemplateOwner = templateInstance_8055ffe9692d4bfcade2b6082ecf721b;


                Border_efb9e6e910ae45d69427c4c703b4a552.Child = ContentPresenter_31bed982aade4910a222dbddcfac6a24;

                var Binding_5c6f38489841443bb5ce6d82a174b844 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_5c6f38489841443bb5ce6d82a174b844.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_483599e690944461bea3249d0e7be378 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_483599e690944461bea3249d0e7be378.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_5c6f38489841443bb5ce6d82a174b844.RelativeSource = RelativeSource_483599e690944461bea3249d0e7be378;


                Binding_5c6f38489841443bb5ce6d82a174b844.TemplateOwner = templateInstance_8055ffe9692d4bfcade2b6082ecf721b;


                Border_f7e669fe28074d0fa4856a0ae69c4dc8.Child = Border_efb9e6e910ae45d69427c4c703b4a552;

                var Binding_fe91a13e1715478e99a646ceaf695eff = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fe91a13e1715478e99a646ceaf695eff.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_56be51707e0d4e829e7fad16d46c884e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_56be51707e0d4e829e7fad16d46c884e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fe91a13e1715478e99a646ceaf695eff.RelativeSource = RelativeSource_56be51707e0d4e829e7fad16d46c884e;


                Binding_fe91a13e1715478e99a646ceaf695eff.TemplateOwner = templateInstance_8055ffe9692d4bfcade2b6082ecf721b;

                var Binding_0a95ecd1e5554418a0ebd8a88c8feb34 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_0a95ecd1e5554418a0ebd8a88c8feb34.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_577a6af0532b4d7d95cc2e75ae8d4efb = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_577a6af0532b4d7d95cc2e75ae8d4efb.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_0a95ecd1e5554418a0ebd8a88c8feb34.RelativeSource = RelativeSource_577a6af0532b4d7d95cc2e75ae8d4efb;


                Binding_0a95ecd1e5554418a0ebd8a88c8feb34.TemplateOwner = templateInstance_8055ffe9692d4bfcade2b6082ecf721b;

                var Binding_ab080fa6b3ee42a5b1132c2fd6d24708 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ab080fa6b3ee42a5b1132c2fd6d24708.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_22eeb210cc8842b49cdc148e0a4a63cf = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_22eeb210cc8842b49cdc148e0a4a63cf.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ab080fa6b3ee42a5b1132c2fd6d24708.RelativeSource = RelativeSource_22eeb210cc8842b49cdc148e0a4a63cf;


                Binding_ab080fa6b3ee42a5b1132c2fd6d24708.TemplateOwner = templateInstance_8055ffe9692d4bfcade2b6082ecf721b;



                ContentPresenter_31bed982aade4910a222dbddcfac6a24.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_dc513709c96241838e94d5393b5aec0e);
                ContentPresenter_31bed982aade4910a222dbddcfac6a24.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_8c53cdaaaa534fbe85dc21e4d2acdf48);
                ContentPresenter_31bed982aade4910a222dbddcfac6a24.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_fba53c69724046dd97ca3eb6f80b1114);
                ContentPresenter_31bed982aade4910a222dbddcfac6a24.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_24d83c9e15604e61a57eacec11666274);
                ContentPresenter_31bed982aade4910a222dbddcfac6a24.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_986283f86531491e8e17e6a36e65b565);
                Border_efb9e6e910ae45d69427c4c703b4a552.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_5c6f38489841443bb5ce6d82a174b844);
                Border_f7e669fe28074d0fa4856a0ae69c4dc8.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_fe91a13e1715478e99a646ceaf695eff);
                Border_f7e669fe28074d0fa4856a0ae69c4dc8.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_0a95ecd1e5554418a0ebd8a88c8feb34);
                Border_f7e669fe28074d0fa4856a0ae69c4dc8.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_ab080fa6b3ee42a5b1132c2fd6d24708);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_98c2e40591ba480a82182c0d7fc7a320, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_284e32f7840040fa9226b482664f3a9b), Bridge.fn.cacheBind(this, this.setVisualStateProperty_284e32f7840040fa9226b482664f3a9b), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_284e32f7840040fa9226b482664f3a9b), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_284e32f7840040fa9226b482664f3a9b), Bridge.fn.cacheBind(this, this.getVisualStateProperty_284e32f7840040fa9226b482664f3a9b)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_98c2e40591ba480a82182c0d7fc7a320, Border_efb9e6e910ae45d69427c4c703b4a552);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_88ca15ec1b1645d6be9d2580835d0aba, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3), Bridge.fn.cacheBind(this, this.setVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3), Bridge.fn.cacheBind(this, this.getVisualStateProperty_89e279f8f6074cddaf645c19fc8d5cc3)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_88ca15ec1b1645d6be9d2580835d0aba, Border_efb9e6e910ae45d69427c4c703b4a552);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_f5cd67e14b0a433591408ea07a4e8276, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a), Bridge.fn.cacheBind(this, this.setVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a), Bridge.fn.cacheBind(this, this.getVisualStateProperty_b18d68a86f154eaf9b4b29d6ae965b5a)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_f5cd67e14b0a433591408ea07a4e8276, Border_efb9e6e910ae45d69427c4c703b4a552);

                templateInstance_8055ffe9692d4bfcade2b6082ecf721b.TemplateContent = Border_f7e669fe28074d0fa4856a0ae69c4dc8;
                return templateInstance_8055ffe9692d4bfcade2b6082ecf721b;
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



                var Grid_97962b4e860645098645e976aa332f11 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                var RowDefinition_dda4a7b51f8c4040895e2771dfb5d0bc = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_37fe0f8221a44ddcbb1df45a774ea84b = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_3900d4767baf4e0ebec20ff6ba59b798 = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                var RowDefinition_68d2f4b29bf244e6b2118f4ce814469b = new Bridge.global.Windows.UI.Xaml.Controls.RowDefinition();

                Grid_97962b4e860645098645e976aa332f11.RowDefinitions.add(RowDefinition_dda4a7b51f8c4040895e2771dfb5d0bc);
                Grid_97962b4e860645098645e976aa332f11.RowDefinitions.add(RowDefinition_37fe0f8221a44ddcbb1df45a774ea84b);
                Grid_97962b4e860645098645e976aa332f11.RowDefinitions.add(RowDefinition_3900d4767baf4e0ebec20ff6ba59b798);
                Grid_97962b4e860645098645e976aa332f11.RowDefinitions.add(RowDefinition_68d2f4b29bf244e6b2118f4ce814469b);

                var Border_a7785bf76f814e5fa5dcc5ac17919cae = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                Border_a7785bf76f814e5fa5dcc5ac17919cae.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Center;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Border_a7785bf76f814e5fa5dcc5ac17919cae, 0);
                var ControlForDisplayingTheFileOpe_ed6d6c3efcd54a3b8a0ddcf711223d15 = new Bridge.global.CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog();
                ControlForDisplayingTheFileOpe_ed6d6c3efcd54a3b8a0ddcf711223d15.addFileOpened(Bridge.fn.cacheBind(this, this.OnFileOpened));
                ControlForDisplayingTheFileOpe_ed6d6c3efcd54a3b8a0ddcf711223d15.Filter = "*.json,*.txt";
                ControlForDisplayingTheFileOpe_ed6d6c3efcd54a3b8a0ddcf711223d15.ResultKind = Bridge.global.CSHTML5.Extensions.FileOpenDialog.ResultKind.Text;

                Border_a7785bf76f814e5fa5dcc5ac17919cae.Child = ControlForDisplayingTheFileOpe_ed6d6c3efcd54a3b8a0ddcf711223d15;


                var Button_951d85d468034e07b76231a4851cfa82 = new Bridge.global.Windows.UI.Xaml.Controls.Button();
                Button_951d85d468034e07b76231a4851cfa82.Content = "\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430";
                this.RegisterName$1("btnCancel", Button_951d85d468034e07b76231a4851cfa82);
                Button_951d85d468034e07b76231a4851cfa82.Name = "btnCancel";
                Button_951d85d468034e07b76231a4851cfa82.addClick(Bridge.fn.cacheBind(this, this.BtnCancel_Click));
                Button_951d85d468034e07b76231a4851cfa82.Width = 250.0;
                Button_951d85d468034e07b76231a4851cfa82.Height = 50.0;
                Bridge.global.Windows.UI.Xaml.Controls.Grid.SetRow(Button_951d85d468034e07b76231a4851cfa82, 1);
                Button_951d85d468034e07b76231a4851cfa82.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 249, $t.G = 222, $t.B = 242, $t));
                Button_951d85d468034e07b76231a4851cfa82.BorderThickness = new Bridge.global.Windows.UI.Xaml.Thickness.$ctor1(1);
                Button_951d85d468034e07b76231a4851cfa82.BorderBrush = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 100, $t.G = 100, $t.B = 100, $t));
                Button_951d85d468034e07b76231a4851cfa82.VerticalAlignment = Bridge.global.Windows.UI.Xaml.VerticalAlignment.Bottom;
                Button_951d85d468034e07b76231a4851cfa82.HorizontalAlignment = Bridge.global.Windows.UI.Xaml.HorizontalAlignment.Center;
                Button_951d85d468034e07b76231a4851cfa82.FontSize = 20.0;
                var ControlTemplate_3315eaa895044bbca6c27eb060781456 = new Bridge.global.Windows.UI.Xaml.Controls.ControlTemplate();
                ControlTemplate_3315eaa895044bbca6c27eb060781456.TargetType = Bridge.global.Windows.UI.Xaml.Controls.Button;
                ControlTemplate_3315eaa895044bbca6c27eb060781456.SetMethodToInstantiateFrameworkTemplate(Bridge.fn.cacheBind(this, this.Instantiate_ControlTemplate_3315eaa895044bbca6c27eb060781456));

                Button_951d85d468034e07b76231a4851cfa82.Template = ControlTemplate_3315eaa895044bbca6c27eb060781456;


                Grid_97962b4e860645098645e976aa332f11.Children.add(Border_a7785bf76f814e5fa5dcc5ac17919cae);
                Grid_97962b4e860645098645e976aa332f11.Children.add(Button_951d85d468034e07b76231a4851cfa82);


                this.Content = Grid_97962b4e860645098645e976aa332f11;



                this.btnCancel = Button_951d85d468034e07b76231a4851cfa82;



            },
            accessVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_d491dd4678744ff1ae9489475c4536cb: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_d491dd4678744ff1ae9489475c4536cb: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_d491dd4678744ff1ae9489475c4536cb: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_d491dd4678744ff1ae9489475c4536cb: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_d491dd4678744ff1ae9489475c4536cb: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            accessVisualStateProperty_9d14fa743fb84fc9855391aea88377f4: function (rootTargetObjectInstance) {
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
            setVisualStateProperty_9d14fa743fb84fc9855391aea88377f4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetVisualStateValue(property, value);
            },
            setAnimationVisualStateProperty_9d14fa743fb84fc9855391aea88377f4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetAnimationValue(property, value);
            },
            setLocalVisualStateProperty_9d14fa743fb84fc9855391aea88377f4: function (finalTargetInstance, value) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                (finalTargetInstance).SetLocalValue(property, value);
            },
            getVisualStateProperty_9d14fa743fb84fc9855391aea88377f4: function (finalTargetInstance) {

                var finalTargetInstanceType = Bridge.getType(finalTargetInstance);
                var propertyDeclaringType = Bridge.Reflection.getMembers(finalTargetInstanceType, 16, 284, "Background").td;
                var propertyField = Bridge.Reflection.getMembers(propertyDeclaringType, 4, 284, "BackgroundProperty");
                var property = Bridge.cast(Bridge.Reflection.fieldAccess(propertyField, null), Windows.UI.Xaml.DependencyProperty);

                return finalTargetInstance.GetVisualStateValue(property);
            },
            Instantiate_ControlTemplate_3315eaa895044bbca6c27eb060781456: function (templateOwner) {
                var templateInstance_5d5dec48ff194bf6a1745f5831f60b50 = new Bridge.global.Windows.UI.Xaml.TemplateInstance();
                templateInstance_5d5dec48ff194bf6a1745f5831f60b50.TemplateOwner = templateOwner;
                var Border_e347e9d3afc54a48a62a4da32a798713 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("OuterBorder", Border_e347e9d3afc54a48a62a4da32a798713);
                Border_e347e9d3afc54a48a62a4da32a798713.Name = "OuterBorder";
                Border_e347e9d3afc54a48a62a4da32a798713.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var VisualStateGroup_76d3c3382f354119a3601aec10b2a509 = new Bridge.global.Windows.UI.Xaml.VisualStateGroup();
                templateOwner.RegisterName("CommonStates", VisualStateGroup_76d3c3382f354119a3601aec10b2a509);
                VisualStateGroup_76d3c3382f354119a3601aec10b2a509.Name = "CommonStates";
                var VisualState_581e6a5145e245c99bf3c541f9c4b71a = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Normal", VisualState_581e6a5145e245c99bf3c541f9c4b71a);
                VisualState_581e6a5145e245c99bf3c541f9c4b71a.Name = "Normal";

                var VisualState_5eda446b451548c092c514d68136728a = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("PointerOver", VisualState_5eda446b451548c092c514d68136728a);
                VisualState_5eda446b451548c092c514d68136728a.Name = "PointerOver";
                var Storyboard_368f4d2797264b9dbebee93b77cc9a9e = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_238021123ae64a78bdae5c285b2c9726 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_238021123ae64a78bdae5c285b2c9726, "InnerBorder");
                var DiscreteObjectKeyFrame_1964827d55b6419a883413271c68f357 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_1964827d55b6419a883413271c68f357.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_1964827d55b6419a883413271c68f357.Value = "#11000000";

                ObjectAnimationUsingKeyFrames_238021123ae64a78bdae5c285b2c9726.KeyFrames.add(DiscreteObjectKeyFrame_1964827d55b6419a883413271c68f357);


                Storyboard_368f4d2797264b9dbebee93b77cc9a9e.Children.add(ObjectAnimationUsingKeyFrames_238021123ae64a78bdae5c285b2c9726);


                VisualState_5eda446b451548c092c514d68136728a.Storyboard = Storyboard_368f4d2797264b9dbebee93b77cc9a9e;


                var VisualState_254af53e65f7490b896e41bb572a413d = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Pressed", VisualState_254af53e65f7490b896e41bb572a413d);
                VisualState_254af53e65f7490b896e41bb572a413d.Name = "Pressed";
                var Storyboard_aa3845393dd64c23a69ec39cea22f2dd = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_4ebab95c07b34e34bb9a4b9f1dfd58a2 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_4ebab95c07b34e34bb9a4b9f1dfd58a2, "InnerBorder");
                var DiscreteObjectKeyFrame_6e3e19f1c06c4f1caac9cc75e2369ed1 = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_6e3e19f1c06c4f1caac9cc75e2369ed1.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_6e3e19f1c06c4f1caac9cc75e2369ed1.Value = "#22000000";

                ObjectAnimationUsingKeyFrames_4ebab95c07b34e34bb9a4b9f1dfd58a2.KeyFrames.add(DiscreteObjectKeyFrame_6e3e19f1c06c4f1caac9cc75e2369ed1);


                Storyboard_aa3845393dd64c23a69ec39cea22f2dd.Children.add(ObjectAnimationUsingKeyFrames_4ebab95c07b34e34bb9a4b9f1dfd58a2);


                VisualState_254af53e65f7490b896e41bb572a413d.Storyboard = Storyboard_aa3845393dd64c23a69ec39cea22f2dd;


                var VisualState_d00e347df26b49a39c02a398f313e9bc = new Bridge.global.Windows.UI.Xaml.VisualState();
                templateOwner.RegisterName("Disabled", VisualState_d00e347df26b49a39c02a398f313e9bc);
                VisualState_d00e347df26b49a39c02a398f313e9bc.Name = "Disabled";
                var Storyboard_fe720f73e7aa4a4a8aa7703db224f53e = new Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard();
                var ObjectAnimationUsingKeyFrames_f9fe8b30caaa428395cd69a6c0ae0d43 = new Bridge.global.Windows.UI.Xaml.Media.Animation.ObjectAnimationUsingKeyFrames();
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetName(ObjectAnimationUsingKeyFrames_f9fe8b30caaa428395cd69a6c0ae0d43, "InnerBorder");
                var DiscreteObjectKeyFrame_2526f1d0472244eb9e713d16eb9a90ca = new Bridge.global.Windows.UI.Xaml.Media.Animation.DiscreteObjectKeyFrame();
                DiscreteObjectKeyFrame_2526f1d0472244eb9e713d16eb9a90ca.KeyTime = Bridge.global.Windows.UI.Xaml.Media.Animation.KeyTime.FromTimeSpan(new Bridge.global.System.TimeSpan(System.Int64(0)));
                DiscreteObjectKeyFrame_2526f1d0472244eb9e713d16eb9a90ca.Value = "#33FFFFFF";

                ObjectAnimationUsingKeyFrames_f9fe8b30caaa428395cd69a6c0ae0d43.KeyFrames.add(DiscreteObjectKeyFrame_2526f1d0472244eb9e713d16eb9a90ca);


                Storyboard_fe720f73e7aa4a4a8aa7703db224f53e.Children.add(ObjectAnimationUsingKeyFrames_f9fe8b30caaa428395cd69a6c0ae0d43);


                VisualState_d00e347df26b49a39c02a398f313e9bc.Storyboard = Storyboard_fe720f73e7aa4a4a8aa7703db224f53e;


                System.Array.add(VisualStateGroup_76d3c3382f354119a3601aec10b2a509.States, VisualState_581e6a5145e245c99bf3c541f9c4b71a, Object);
                System.Array.add(VisualStateGroup_76d3c3382f354119a3601aec10b2a509.States, VisualState_5eda446b451548c092c514d68136728a, Object);
                System.Array.add(VisualStateGroup_76d3c3382f354119a3601aec10b2a509.States, VisualState_254af53e65f7490b896e41bb572a413d, Object);
                System.Array.add(VisualStateGroup_76d3c3382f354119a3601aec10b2a509.States, VisualState_d00e347df26b49a39c02a398f313e9bc, Object);


                templateOwner.INTERNAL_GetVisualStateGroups().add(VisualStateGroup_76d3c3382f354119a3601aec10b2a509);

                var Border_d1fb79737e9444e9b246b5317f8a8150 = new Bridge.global.Windows.UI.Xaml.Controls.Border();
                templateOwner.RegisterName("InnerBorder", Border_d1fb79737e9444e9b246b5317f8a8150);
                Border_d1fb79737e9444e9b246b5317f8a8150.Name = "InnerBorder";
                Border_d1fb79737e9444e9b246b5317f8a8150.CornerRadius = new Bridge.global.Windows.UI.Xaml.CornerRadius.$ctor1(5);
                var ContentPresenter_bac5fb2ff8444336853188092def7818 = new Bridge.global.Windows.UI.Xaml.Controls.ContentPresenter();
                templateOwner.RegisterName("ContentPresenter", ContentPresenter_bac5fb2ff8444336853188092def7818);
                ContentPresenter_bac5fb2ff8444336853188092def7818.Name = "ContentPresenter";
                var Binding_9cdd07384ff94f43a6bb30ac93e19a85 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_9cdd07384ff94f43a6bb30ac93e19a85.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("ContentTemplate");
                var RelativeSource_d5bed876712c4faeab0919a7a1b0ff5d = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_d5bed876712c4faeab0919a7a1b0ff5d.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_9cdd07384ff94f43a6bb30ac93e19a85.RelativeSource = RelativeSource_d5bed876712c4faeab0919a7a1b0ff5d;


                Binding_9cdd07384ff94f43a6bb30ac93e19a85.TemplateOwner = templateInstance_5d5dec48ff194bf6a1745f5831f60b50;

                var Binding_6c5d7362bd354de6b41ddfdfa9739830 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_6c5d7362bd354de6b41ddfdfa9739830.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Content");
                var RelativeSource_1183d80204e04286a65588164fd03288 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_1183d80204e04286a65588164fd03288.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_6c5d7362bd354de6b41ddfdfa9739830.RelativeSource = RelativeSource_1183d80204e04286a65588164fd03288;


                Binding_6c5d7362bd354de6b41ddfdfa9739830.TemplateOwner = templateInstance_5d5dec48ff194bf6a1745f5831f60b50;

                var Binding_9ba559c7d3904956af6b457bfc715b48 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_9ba559c7d3904956af6b457bfc715b48.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Padding");
                var RelativeSource_f114d8e49dc24bc4864d84e0f8c0560e = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_f114d8e49dc24bc4864d84e0f8c0560e.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_9ba559c7d3904956af6b457bfc715b48.RelativeSource = RelativeSource_f114d8e49dc24bc4864d84e0f8c0560e;


                Binding_9ba559c7d3904956af6b457bfc715b48.TemplateOwner = templateInstance_5d5dec48ff194bf6a1745f5831f60b50;

                var Binding_8458bfbfe8524019b486ef36ffaea185 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_8458bfbfe8524019b486ef36ffaea185.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("HorizontalContentAlignment");
                var RelativeSource_30ef1381fa514381b24c8d81f41c8330 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_30ef1381fa514381b24c8d81f41c8330.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_8458bfbfe8524019b486ef36ffaea185.RelativeSource = RelativeSource_30ef1381fa514381b24c8d81f41c8330;


                Binding_8458bfbfe8524019b486ef36ffaea185.TemplateOwner = templateInstance_5d5dec48ff194bf6a1745f5831f60b50;

                var Binding_10fe80f349f84ed688474f58fddcb376 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_10fe80f349f84ed688474f58fddcb376.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("VerticalContentAlignment");
                var RelativeSource_564959dfcdfb4777a774b901cfe5b749 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_564959dfcdfb4777a774b901cfe5b749.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_10fe80f349f84ed688474f58fddcb376.RelativeSource = RelativeSource_564959dfcdfb4777a774b901cfe5b749;


                Binding_10fe80f349f84ed688474f58fddcb376.TemplateOwner = templateInstance_5d5dec48ff194bf6a1745f5831f60b50;


                Border_d1fb79737e9444e9b246b5317f8a8150.Child = ContentPresenter_bac5fb2ff8444336853188092def7818;

                var Binding_ec6a6975cf504b56a0da459103c97bf9 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_ec6a6975cf504b56a0da459103c97bf9.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_0976aeda5618424aa65da14dc5957bf0 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_0976aeda5618424aa65da14dc5957bf0.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_ec6a6975cf504b56a0da459103c97bf9.RelativeSource = RelativeSource_0976aeda5618424aa65da14dc5957bf0;


                Binding_ec6a6975cf504b56a0da459103c97bf9.TemplateOwner = templateInstance_5d5dec48ff194bf6a1745f5831f60b50;


                Border_e347e9d3afc54a48a62a4da32a798713.Child = Border_d1fb79737e9444e9b246b5317f8a8150;

                var Binding_29559e3ff5134cf592222a86aadac6f8 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_29559e3ff5134cf592222a86aadac6f8.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("Background");
                var RelativeSource_5d27e3c45a9049df9b69f4b364a4d5f0 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_5d27e3c45a9049df9b69f4b364a4d5f0.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_29559e3ff5134cf592222a86aadac6f8.RelativeSource = RelativeSource_5d27e3c45a9049df9b69f4b364a4d5f0;


                Binding_29559e3ff5134cf592222a86aadac6f8.TemplateOwner = templateInstance_5d5dec48ff194bf6a1745f5831f60b50;

                var Binding_3a23657a515e4731b14edd832f31a1d4 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_3a23657a515e4731b14edd832f31a1d4.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderBrush");
                var RelativeSource_ff81fb87f0cd4f5fbb6fb171f332b857 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_ff81fb87f0cd4f5fbb6fb171f332b857.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_3a23657a515e4731b14edd832f31a1d4.RelativeSource = RelativeSource_ff81fb87f0cd4f5fbb6fb171f332b857;


                Binding_3a23657a515e4731b14edd832f31a1d4.TemplateOwner = templateInstance_5d5dec48ff194bf6a1745f5831f60b50;

                var Binding_fddcb657d05d4634a1ec9b74c14e23e4 = new Bridge.global.Windows.UI.Xaml.Data.Binding.ctor();
                Binding_fddcb657d05d4634a1ec9b74c14e23e4.Path = new Bridge.global.Windows.UI.Xaml.PropertyPath.ctor("BorderThickness");
                var RelativeSource_c2edb33caaf4452c9ceb7f72f385a5d6 = new Bridge.global.Windows.UI.Xaml.Data.RelativeSource.ctor();
                RelativeSource_c2edb33caaf4452c9ceb7f72f385a5d6.Mode = Bridge.global.Windows.UI.Xaml.Data.RelativeSourceMode.TemplatedParent;

                Binding_fddcb657d05d4634a1ec9b74c14e23e4.RelativeSource = RelativeSource_c2edb33caaf4452c9ceb7f72f385a5d6;


                Binding_fddcb657d05d4634a1ec9b74c14e23e4.TemplateOwner = templateInstance_5d5dec48ff194bf6a1745f5831f60b50;



                ContentPresenter_bac5fb2ff8444336853188092def7818.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentTemplateProperty, Binding_9cdd07384ff94f43a6bb30ac93e19a85);
                ContentPresenter_bac5fb2ff8444336853188092def7818.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.ContentControl.ContentProperty, Binding_6c5d7362bd354de6b41ddfdfa9739830);
                ContentPresenter_bac5fb2ff8444336853188092def7818.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.MarginProperty, Binding_9ba559c7d3904956af6b457bfc715b48);
                ContentPresenter_bac5fb2ff8444336853188092def7818.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.HorizontalAlignmentProperty, Binding_8458bfbfe8524019b486ef36ffaea185);
                ContentPresenter_bac5fb2ff8444336853188092def7818.SetBinding(Bridge.global.Windows.UI.Xaml.FrameworkElement.VerticalAlignmentProperty, Binding_10fe80f349f84ed688474f58fddcb376);
                Border_d1fb79737e9444e9b246b5317f8a8150.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_ec6a6975cf504b56a0da459103c97bf9);
                Border_e347e9d3afc54a48a62a4da32a798713.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BackgroundProperty, Binding_29559e3ff5134cf592222a86aadac6f8);
                Border_e347e9d3afc54a48a62a4da32a798713.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderBrushProperty, Binding_3a23657a515e4731b14edd832f31a1d4);
                Border_e347e9d3afc54a48a62a4da32a798713.SetBinding(Bridge.global.Windows.UI.Xaml.Controls.Border.BorderThicknessProperty, Binding_fddcb657d05d4634a1ec9b74c14e23e4);

                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_238021123ae64a78bdae5c285b2c9726, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360), Bridge.fn.cacheBind(this, this.setVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360), Bridge.fn.cacheBind(this, this.getVisualStateProperty_1618cd9f1bdc4b46814ac340b758d360)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_238021123ae64a78bdae5c285b2c9726, Border_d1fb79737e9444e9b246b5317f8a8150);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_4ebab95c07b34e34bb9a4b9f1dfd58a2, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_d491dd4678744ff1ae9489475c4536cb), Bridge.fn.cacheBind(this, this.setVisualStateProperty_d491dd4678744ff1ae9489475c4536cb), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_d491dd4678744ff1ae9489475c4536cb), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_d491dd4678744ff1ae9489475c4536cb), Bridge.fn.cacheBind(this, this.getVisualStateProperty_d491dd4678744ff1ae9489475c4536cb)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_4ebab95c07b34e34bb9a4b9f1dfd58a2, Border_d1fb79737e9444e9b246b5317f8a8150);


                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTargetProperty(ObjectAnimationUsingKeyFrames_f9fe8b30caaa428395cd69a6c0ae0d43, new Bridge.global.Windows.UI.Xaml.PropertyPath.$ctor1("Background", "Background", Bridge.fn.cacheBind(this, this.accessVisualStateProperty_9d14fa743fb84fc9855391aea88377f4), Bridge.fn.cacheBind(this, this.setVisualStateProperty_9d14fa743fb84fc9855391aea88377f4), Bridge.fn.cacheBind(this, this.setAnimationVisualStateProperty_9d14fa743fb84fc9855391aea88377f4), Bridge.fn.cacheBind(this, this.setLocalVisualStateProperty_9d14fa743fb84fc9855391aea88377f4), Bridge.fn.cacheBind(this, this.getVisualStateProperty_9d14fa743fb84fc9855391aea88377f4)));
                Bridge.global.Windows.UI.Xaml.Media.Animation.Storyboard.SetTarget(ObjectAnimationUsingKeyFrames_f9fe8b30caaa428395cd69a6c0ae0d43, Border_d1fb79737e9444e9b246b5317f8a8150);

                templateInstance_5d5dec48ff194bf6a1745f5831f60b50.TemplateContent = Border_e347e9d3afc54a48a62a4da32a798713;
                return templateInstance_5d5dec48ff194bf6a1745f5831f60b50;
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



                var Grid_1d98468bd1c94a18a82ba893df2c34f7 = new Bridge.global.Windows.UI.Xaml.Controls.Grid();
                Grid_1d98468bd1c94a18a82ba893df2c34f7.Background = new Bridge.global.Windows.UI.Xaml.Media.SolidColorBrush.$ctor1(($t = new Bridge.global.Windows.UI.Color(), $t.A = 255, $t.R = 0, $t.G = 0, $t.B = 0, $t));

                this.Content = Grid_1d98468bd1c94a18a82ba893df2c34f7;







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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDU2h0bWwuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbIm9iai9SZWxlYXNlL0FwcC54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlMS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlSG9tZS54YW1sLmcuY3MiLCJvYmovUmVsZWFzZS9QYWdlVXBsb2FkLnhhbWwuZy5jcyIsIm9iai9SZWxlYXNlL1NlY29uZFBhZ2UueGFtbC5nLmNzIiwiQXBwLnhhbWwuY3MiLCJQYWdlMS54YW1sLmNzIiwiUGFnZUhvbWUueGFtbC5jcyIsIlBhZ2VVcGxvYWQueGFtbC5jcyIsIlNlY29uZFBhZ2UueGFtbC5jcyIsIkZpbGVPcGVuRGlhbG9nLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7b0JBUVFBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7O29CQ0RwRUEsV0FBMkJBLEFBQU9BO29CQUNsQ0EsT0FBT0EsbUVBQTZEQTs7Ozs7Ozs7OztvQkNEcEVBLFdBQTJCQSxBQUFPQTtvQkFDbENBLE9BQU9BLG1FQUE2REE7Ozs7Ozs7Ozs7b0JDRHBFQSxXQUEyQkEsQUFBT0E7b0JBQ2xDQSxPQUFPQSxtRUFBNkRBOzs7Ozs7Ozs7WUptRXhFQSxJQUFJQTs7Ozs7Ozs7O2dCSy9ESUE7Ozs7Z0JBT0FBLGFBQWFBLElBQUlBO2dCQUNqQkEsZ0JBQWdCQSxJQUFJQSw0QkFBcUJBO2dCQUN6Q0EseUNBQXlCQTs7Ozs7Z0JMbUJ6QkEsSUFBSUE7b0JBQ0FBOztnQkFDSkE7OztnQkFHQUEsSUFBSUE7b0JBRUFBLEFBQUNBLFlBQW1DQSxBQUFRQTs7OztnQkFLNURBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBOzs7Z0JBR0FBLDBEQUEwREEsSUFBSUE7Z0JBQzlEQSxpQkFBaUJBOztnQkFF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Z0JBRTFDQSxtQkFBOEJBLCtCQUFDQTtvQkFFM0JBLElBQUlBLHNDQUFtQkE7d0JBQ25CQSxnQkFBZ0JBLE1BQU1BLElBQUlBLHNEQUFvQkEsUUFBUUE7OztnQkFFOURBLG9CQUF1QkE7O2dCQUd2QkEsZUFBVUE7O2dCQUdWQTtnQkFnQ1VBOzs7Ozs7Ozs7Ozs7Ozs7OztxQ0FBY0E7Ozs7O3FDQUF1REE7Ozs7Ozs7a0RBQXpDQTs7OztpQ0FHM0JBO2dCQUdYQSxtQkFBbUJBLHVCQUF1QkE7O2dCQUsxQ0EsZUFBb0JBO2dCQUNwQkEsZ0JBQXlCQSxLQUFJQTtnQkFDN0JBLElBQUlBO29CQUVBQSxjQUFjQTs7b0JBSWRBLEtBQUtBLFdBQVdBLElBQUlBLGlCQUFpQkE7d0JBRWpDQSxjQUFjQSw0QkFBU0EsR0FBVEE7OztnQkFHdEJBLHFCQUF3QkEsaUVBQWlCQTs7Z0JBR3pDQSxJQUFJQSxDQUFDQSxpQ0FBMEJBO29CQUUzQkEsQUFBcURBLHNCQUFjQTs7b0JBSW5FQSxBQUF1REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBeUNwQ0EsUUFBZUE7Ozs7Z0JBRXRDQSxJQUFJQSxlQUFjQTtvQkFFZEEsWUFBWUEseUJBQXdCQSxpQkFBQ0E7dUJBRXBDQSxJQUFJQSxlQUFjQTtvQkFFbkJBLGVBQWVBLGlCQUFDQTs7b0JBSWhCQSxNQUFNQSxJQUFJQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyA8Q1NIVE1MNT48WGFtbEhhc2g+NUEyNEZEOTRFRDU4MzZBQzZCRkM3NkY3NzVCNkVEMEY8L1hhbWxIYXNoPjxQYXNzTnVtYmVyPjI8L1Bhc3NOdW1iZXI+PENvbXBpbGF0aW9uRGF0ZT4xNS4wNC4yMDIwIDY6MDk6NDg8L0NvbXBpbGF0aW9uRGF0ZT48L0NTSFRNTDU+XHJcblxyXG5cclxuXHJcbnB1YmxpYyBzdGF0aWMgY2xhc3Mgx4DHgENzaHRtbMeAx4BDb21wb25lbnTHgMeAQXBwx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5BcHApO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIEFwcCA6IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkFwcGxpY2F0aW9uXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5cclxuXHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAxNjksIDY0OSwgMDYyOFxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBib29sIF9jb250ZW50TG9hZGVkO1xyXG4gICAgICAgIHB1YmxpYyB2b2lkIEluaXRpYWxpemVDb21wb25lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKF9jb250ZW50TG9hZGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBfY29udGVudExvYWRlZCA9IHRydWU7XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAwMTg0IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTg0ICgnVGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgbmV2ZXIgb2YgdGhlIHByb3ZpZGVkICgndHlwZScpIHR5cGUnKVxyXG4gICAgICAgICAgICBpZiAodGhpcyBpcyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICgoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KShvYmplY3QpdGhpcykuWGFtbFNvdXJjZVBhdGggPSBAXCJDU2h0bWxcXEFwcC54YW1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMDE4NFxyXG5cclxuXHJcbmdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5TdGFydHVwQXNzZW1ibHlJbmZvLk91dHB1dFJvb3RQYXRoID0gQFwiT3V0cHV0XFxcIjtcclxuZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlN0YXJ0dXBBc3NlbWJseUluZm8uT3V0cHV0QXBwRmlsZXNQYXRoID0gQFwiYXBwLWNzaHRtbDVcXGFwcFxcXCI7XHJcbmdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5TdGFydHVwQXNzZW1ibHlJbmZvLk91dHB1dExpYnJhcmllc1BhdGggPSBAXCJhcHAtY3NodG1sNVxcbGlic1xcXCI7XHJcbmdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5TdGFydHVwQXNzZW1ibHlJbmZvLk91dHB1dFJlc291cmNlc1BhdGggPSBAXCJhcHAtY3NodG1sNVxccmVzXFxcIjtcclxuXHJcblxyXG52YXIgUmVzb3VyY2VEaWN0aW9uYXJ5X2FkN2JlMmVjYzkzNDQ2ZjVhN2Q1NTczYWM5MWM5MDk2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlJlc291cmNlRGljdGlvbmFyeSgpO1xyXG50aGlzLlJlc291cmNlcyA9IFJlc291cmNlRGljdGlvbmFyeV9hZDdiZTJlY2M5MzQ0NmY1YTdkNTU3M2FjOTFjOTA5NjtcclxuXHJcbnRoaXMuUmVzb3VyY2VzID0gUmVzb3VyY2VEaWN0aW9uYXJ5X2FkN2JlMmVjYzkzNDQ2ZjVhN2Q1NTczYWM5MWM5MDk2O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbntcclxuICAgIG5ldyBBcHAoKTtcclxufVxyXG5cclxufVxyXG5cclxuXHJcbn1cclxuIiwiLy8gPENTSFRNTDU+PFhhbWxIYXNoPjhFMkQ5RkUyNEU3MUVDN0VCN0JGRENBNzdFMzVGMjNGPC9YYW1sSGFzaD48UGFzc051bWJlcj4yPC9QYXNzTnVtYmVyPjxDb21waWxhdGlvbkRhdGU+MTUuMDQuMjAyMCA2OjA5OjQ4PC9Db21waWxhdGlvbkRhdGU+PC9DU0hUTUw1PlxyXG5cclxuXHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIMeAx4BDc2h0bWzHgMeAQ29tcG9uZW50x4DHgFBhZ2Uxx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5QYWdlMSk7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDo6Q1NIVE1MNS5JbnRlcm5hbC5UeXBlSW5zdGFudGlhdGlvbkhlbHBlci5JbnN0YW50aWF0ZSh0eXBlKTtcclxuICAgIH1cclxufVxyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gPGF1dG8tZ2VuZXJhdGVkPlxyXG4vLyAgICAgVGhpcyBjb2RlIHdhcyBhdXRvLWdlbmVyYXRlZCBieSBcIkMjL1hBTUwgZm9yIEhUTUw1XCJcclxuLy9cclxuLy8gICAgIENoYW5nZXMgdG8gdGhpcyBmaWxlIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IgYW5kIHdpbGwgYmUgbG9zdCBpZlxyXG4vLyAgICAgdGhlIGNvZGUgaXMgcmVnZW5lcmF0ZWQuXHJcbi8vIDwvYXV0by1nZW5lcmF0ZWQ+XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcbnBhcnRpYWwgY2xhc3MgUGFnZTEgOiBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QYWdlXHJcbntcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDE2OSwgNjQ5LCAwNjI4IC8vIFByZXZlbnRzIHdhcm5pbmcgQ1MwMTY5ICgnZmllbGQgLi4uIGlzIG5ldmVyIHVzZWQnKSwgQ1MwNjQ5ICgnZmllbGQgLi4uIGlzIG5ldmVyIGFzc2lnbmVkIHRvLCBhbmQgd2lsbCBhbHdheXMgaGF2ZSBpdHMgZGVmYXVsdCB2YWx1ZSBudWxsJyksIGFuZCBDUzA2MjggKCdtZW1iZXIgOiBuZXcgcHJvdGVjdGVkIG1lbWJlciBkZWNsYXJlZCBpbiBzZWFsZWQgY2xhc3MnKVxyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGVsZW1lbnRGb3JMaXN0O1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0bkNhbmNlbDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbiBidG5VcGxvYWQ7XHJcbnByb3RlY3RlZCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24gYnRuUHJvY2Vzc2luZztcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlRleHRCb3ggdHh0RmlsZTtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBib3JkZXJJREVGO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyIGJvcmRlclVNTDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbiBidG5VcGxvYWRJREVGO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0blVwbG9hZFVNTDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQgTGF5b3V0R3JpZDtcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50O1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZTEueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfNmFlYzY0N2M0MTM1NDUyM2JmYzBhODdjMzhmNzJkYjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF82YTg4Nzk1MWEzMWM0YWYwYjkyMDgzMDEwMTk2YThlZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNmE4ODc5NTFhMzFjNGFmMGI5MjA4MzAxMDE5NmE4ZWUuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF82YTg4Nzk1MWEzMWM0YWYwYjkyMDgzMDEwMTk2YThlZS5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfNjNiOTMxODJhZDM1NGRiNTgwNzcyMzkyNzQzNzQzYzggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF82M2I5MzE4MmFkMzU0ZGI1ODA3NzIzOTI3NDM3NDNjOC5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzYzYjkzMTgyYWQzNTRkYjU4MDc3MjM5Mjc0Mzc0M2M4Lk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF9lOTM3YmRiNWVhOTY0YzFhYjg3NDQzYWI0YmIwNWE1YSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wX2U5MzdiZGI1ZWE5NjRjMWFiODc0NDNhYjRiYjA1YTVhLkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfZTkzN2JkYjVlYTk2NGMxYWI4NzQ0M2FiNGJiMDVhNWEuT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoXzZhODg3OTUxYTMxYzRhZjBiOTIwODMwMTAxOTZhOGVlLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF82M2I5MzE4MmFkMzU0ZGI1ODA3NzIzOTI3NDM3NDNjOCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNmE4ODc5NTFhMzFjNGFmMGI5MjA4MzAxMDE5NmE4ZWUuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wX2U5MzdiZGI1ZWE5NjRjMWFiODc0NDNhYjRiYjA1YTVhKTtcclxuXHJcblxyXG5HcmlkXzZhZWM2NDdjNDEzNTQ1MjNiZmMwYTg3YzM4ZjcyZGI0LkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzZhODg3OTUxYTMxYzRhZjBiOTIwODMwMTAxOTZhOGVlO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fZmNmYzhiYzM1NmM4NGVhODgwZDQ1NDIyMTU2OTRjMzEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uX2ZjZmM4YmMzNTZjODRlYTg4MGQ0NTQyMjE1Njk0YzMxLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzc5ZDMyZjI5NWMxMDRiYzc4NzI2MTQyY2Q2YjI3MDBhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl83OWQzMmYyOTVjMTA0YmM3ODcyNjE0MmNkNmIyNzAwYS5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzAxMjIyMzRjZGJlYzQ1ZDg5NDIyMzM4MjkzMjRhM2M2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl8wMTIyMjM0Y2RiZWM0NWQ4OTQyMjMzODI5MzI0YTNjNi5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkXzZhZWM2NDdjNDEzNTQ1MjNiZmMwYTg3YzM4ZjcyZGI0LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2ZjZmM4YmMzNTZjODRlYTg4MGQ0NTQyMjE1Njk0YzMxKTtcclxuR3JpZF82YWVjNjQ3YzQxMzU0NTIzYmZjMGE4N2MzOGY3MmRiNC5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl83OWQzMmYyOTVjMTA0YmM3ODcyNjE0MmNkNmIyNzAwYSk7XHJcbkdyaWRfNmFlYzY0N2M0MTM1NDUyM2JmYzBhODdjMzhmNzJkYjQuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMDEyMjIzNGNkYmVjNDVkODk0MjIzMzgyOTMyNGEzYzYpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMTEwNzgwMDY5ZDM0NDNjZDgxMTJjZWM0NDBjZmE3NWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5Db2x1bW5EZWZpbml0aW9uXzExMDc4MDA2OWQzNDQzY2Q4MTEyY2VjNDQwY2ZhNzVjLldpZHRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4zLCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgQ29sdW1uRGVmaW5pdGlvbl82Yjk2ZjIwMTdiOTY0OTgwYTllYjk3YWE4ODljMDRjOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db2x1bW5EZWZpbml0aW9uKCk7XHJcblxyXG5HcmlkXzZhZWM2NDdjNDEzNTQ1MjNiZmMwYTg3YzM4ZjcyZGI0LkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzExMDc4MDA2OWQzNDQzY2Q4MTEyY2VjNDQwY2ZhNzVjKTtcclxuR3JpZF82YWVjNjQ3YzQxMzU0NTIzYmZjMGE4N2MzOGY3MmRiNC5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl82Yjk2ZjIwMTdiOTY0OTgwYTllYjk3YWE4ODljMDRjOCk7XHJcblxyXG52YXIgQm9yZGVyXzUzOWI4NzU4NWU5NzRlOWVhOGVmZWEyYzJhMzZlOGYxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImVsZW1lbnRGb3JMaXN0XCIsIEJvcmRlcl81MzliODc1ODVlOTc0ZTllYThlZmVhMmMyYTM2ZThmMSk7XHJcbkJvcmRlcl81MzliODc1ODVlOTc0ZTllYThlZmVhMmMyYTM2ZThmMS5OYW1lID0gXCJlbGVtZW50Rm9yTGlzdFwiO1xyXG5Cb3JkZXJfNTM5Yjg3NTg1ZTk3NGU5ZWE4ZWZlYTJjMmEzNmU4ZjEuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQm9yZGVyXzUzOWI4NzU4NWU5NzRlOWVhOGVmZWEyYzJhMzZlOGYxLDApO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oQm9yZGVyXzUzOWI4NzU4NWU5NzRlOWVhOGVmZWEyYzJhMzZlOGYxLDMpO1xyXG5Cb3JkZXJfNTM5Yjg3NTg1ZTk3NGU5ZWE4ZWZlYTJjMmEzNmU4ZjEuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDAsIEcgPSAoYnl0ZSkyMDAsIEIgPSAoYnl0ZSkyMDAgfSk7XHJcbkJvcmRlcl81MzliODc1ODVlOTc0ZTllYThlZmVhMmMyYTM2ZThmMS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfNTM5Yjg3NTg1ZTk3NGU5ZWE4ZWZlYTJjMmEzNmU4ZjEuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIEdyaWRfZGJhYmFiNWM2YjM1NGQ1MmFjNmMxNDg2ZDhiZTE4ODUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF9hMmJhODljOWI5ZTQ0ZWE0YjE4MDYyZTQzZWQyZjRlYyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYTJiYTg5YzliOWU0NGVhNGIxODA2MmU0M2VkMmY0ZWMuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF9hMmJhODljOWI5ZTQ0ZWE0YjE4MDYyZTQzZWQyZjRlYy5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfYjA4ODNlMDJjNzlhNDgxZDg2ZTNjZGU4ZTAwMWQ4MmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9iMDg4M2UwMmM3OWE0ODFkODZlM2NkZThlMDAxZDgyZi5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wX2IwODgzZTAyYzc5YTQ4MWQ4NmUzY2RlOGUwMDFkODJmLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF8xYTBmNTRiZDEzOTU0ZDBkOTczNzViZjkyODhmNWJkOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzFhMGY1NGJkMTM5NTRkMGQ5NzM3NWJmOTI4OGY1YmQ4LkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfMWEwZjU0YmQxMzk1NGQwZDk3Mzc1YmY5Mjg4ZjViZDguT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoX2EyYmE4OWM5YjllNDRlYTRiMTgwNjJlNDNlZDJmNGVjLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9iMDg4M2UwMmM3OWE0ODFkODZlM2NkZThlMDAxZDgyZik7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfYTJiYTg5YzliOWU0NGVhNGIxODA2MmU0M2VkMmY0ZWMuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzFhMGY1NGJkMTM5NTRkMGQ5NzM3NWJmOTI4OGY1YmQ4KTtcclxuXHJcblxyXG5HcmlkX2RiYWJhYjVjNmIzNTRkNTJhYzZjMTQ4NmQ4YmUxODg1LkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoX2EyYmE4OWM5YjllNDRlYTRiMTgwNjJlNDNlZDJmNGVjO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNzZiZGRjZGFiNDA3NDM4M2JhNTdkODA5YWZlZThiN2EgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fZjMxM2QyYmY3MmNmNGQzMzk1ZmEwNmQzZmExZjE4ZWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uX2YzMTNkMmJmNzJjZjRkMzM5NWZhMDZkM2ZhMWYxOGVkLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fZWRkNzhlNzhjY2EwNDZlZjk0NzEzYTRlYjZmOWY3NmYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uX2VkZDc4ZTc4Y2NhMDQ2ZWY5NDcxM2E0ZWI2ZjlmNzZmLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNTJkYzk1MGQ4YTQ2NDE0M2FkMjVjZTU3ODNkYzA1OGMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzUyZGM5NTBkOGE0NjQxNDNhZDI1Y2U1NzgzZGMwNThjLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMywgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fZDZkOTRmNTFhYmMyNDVjMWI1M2E3YWRmYTEwMDc2Y2MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF9kYmFiYWI1YzZiMzU0ZDUyYWM2YzE0ODZkOGJlMTg4NS5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl83NmJkZGNkYWI0MDc0MzgzYmE1N2Q4MDlhZmVlOGI3YSk7XHJcbkdyaWRfZGJhYmFiNWM2YjM1NGQ1MmFjNmMxNDg2ZDhiZTE4ODUuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fZjMxM2QyYmY3MmNmNGQzMzk1ZmEwNmQzZmExZjE4ZWQpO1xyXG5HcmlkX2RiYWJhYjVjNmIzNTRkNTJhYzZjMTQ4NmQ4YmUxODg1LlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uX2VkZDc4ZTc4Y2NhMDQ2ZWY5NDcxM2E0ZWI2ZjlmNzZmKTtcclxuR3JpZF9kYmFiYWI1YzZiMzU0ZDUyYWM2YzE0ODZkOGJlMTg4NS5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl81MmRjOTUwZDhhNDY0MTQzYWQyNWNlNTc4M2RjMDU4Yyk7XHJcbkdyaWRfZGJhYmFiNWM2YjM1NGQ1MmFjNmMxNDg2ZDhiZTE4ODUuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fZDZkOTRmNTFhYmMyNDVjMWI1M2E3YWRmYTEwMDc2Y2MpO1xyXG5cclxudmFyIEJ1dHRvbl8wYmE2NmEwYTVhNDg0MDVmOGUzOGViZmRlNDI3N2EyYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uXzBiYTY2YTBhNWE0ODQwNWY4ZTM4ZWJmZGU0Mjc3YTJhLDEpO1xyXG5CdXR0b25fMGJhNjZhMGE1YTQ4NDA1ZjhlMzhlYmZkZTQyNzdhMmEuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTAsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbkJ1dHRvbl8wYmE2NmEwYTVhNDg0MDVmOGUzOGViZmRlNDI3N2EyYS5Db250ZW50ID0gQFwiSlNPTlwiO1xyXG5CdXR0b25fMGJhNjZhMGE1YTQ4NDA1ZjhlMzhlYmZkZTQyNzdhMmEuRm9udFNpemUgPSAyMEQ7XHJcbkJ1dHRvbl8wYmE2NmEwYTVhNDg0MDVmOGUzOGViZmRlNDI3N2EyYS5Gb3JlZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5CdXR0b25fMGJhNjZhMGE1YTQ4NDA1ZjhlMzhlYmZkZTQyNzdhMmEuQ2xpY2sgKz0gRmlyc3RfQ2xpY2s7XHJcblxyXG52YXIgQnV0dG9uXzI4ZTgzMDkyMWEzMjRlMTZhMzNjNWQwY2RiNmRiMWUwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fMjhlODMwOTIxYTMyNGUxNmEzM2M1ZDBjZGI2ZGIxZTAsMik7XHJcbkJ1dHRvbl8yOGU4MzA5MjFhMzI0ZTE2YTMzYzVkMGNkYjZkYjFlMC5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMCwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9KTtcclxuQnV0dG9uXzI4ZTgzMDkyMWEzMjRlMTZhMzNjNWQwY2RiNmRiMWUwLkNvbnRlbnQgPSBAXCLQlNC40LDQs9GA0LDQvNC80LAgSURFRjBcIjtcclxuQnV0dG9uXzI4ZTgzMDkyMWEzMjRlMTZhMzNjNWQwY2RiNmRiMWUwLkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fMjhlODMwOTIxYTMyNGUxNmEzM2M1ZDBjZGI2ZGIxZTAuRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzI4ZTgzMDkyMWEzMjRlMTZhMzNjNWQwY2RiNmRiMWUwLkNsaWNrICs9IFNlY29uZF9DbGljaztcclxuXHJcbnZhciBCdXR0b25fNjVmOTMzYzg4MjA1NGQ4NzlmOTM2ZmZlYjIxMzkwYjkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl82NWY5MzNjODgyMDU0ZDg3OWY5MzZmZmViMjEzOTBiOSwzKTtcclxuQnV0dG9uXzY1ZjkzM2M4ODIwNTRkODc5ZjkzNmZmZWIyMTM5MGI5LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkwLCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH0pO1xyXG5CdXR0b25fNjVmOTMzYzg4MjA1NGQ4NzlmOTM2ZmZlYjIxMzkwYjkuQ29udGVudCA9IEBcItCU0LjQsNCz0YDQsNC80LzQsCBVTUxcIjtcclxuQnV0dG9uXzY1ZjkzM2M4ODIwNTRkODc5ZjkzNmZmZWIyMTM5MGI5LkZvbnRTaXplID0gMjBEO1xyXG5CdXR0b25fNjVmOTMzYzg4MjA1NGQ4NzlmOTM2ZmZlYjIxMzkwYjkuRm9yZWdyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzY1ZjkzM2M4ODIwNTRkODc5ZjkzNmZmZWIyMTM5MGI5LkNsaWNrICs9IFRoaXJkX0NsaWNrO1xyXG5cclxuR3JpZF9kYmFiYWI1YzZiMzU0ZDUyYWM2YzE0ODZkOGJlMTg4NS5DaGlsZHJlbi5BZGQoQnV0dG9uXzBiYTY2YTBhNWE0ODQwNWY4ZTM4ZWJmZGU0Mjc3YTJhKTtcclxuR3JpZF9kYmFiYWI1YzZiMzU0ZDUyYWM2YzE0ODZkOGJlMTg4NS5DaGlsZHJlbi5BZGQoQnV0dG9uXzI4ZTgzMDkyMWEzMjRlMTZhMzNjNWQwY2RiNmRiMWUwKTtcclxuR3JpZF9kYmFiYWI1YzZiMzU0ZDUyYWM2YzE0ODZkOGJlMTg4NS5DaGlsZHJlbi5BZGQoQnV0dG9uXzY1ZjkzM2M4ODIwNTRkODc5ZjkzNmZmZWIyMTM5MGI5KTtcclxuXHJcblxyXG5Cb3JkZXJfNTM5Yjg3NTg1ZTk3NGU5ZWE4ZWZlYTJjMmEzNmU4ZjEuQ2hpbGQgPSBHcmlkX2RiYWJhYjVjNmIzNTRkNTJhYzZjMTQ4NmQ4YmUxODg1O1xyXG5cclxuXHJcbnZhciBCb3JkZXJfY2ZlOTBiYzhjOTNjNGRlMTlmMjBjYzY0NzU2NTNlZmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfY2ZlOTBiYzhjOTNjNGRlMTlmMjBjYzY0NzU2NTNlZmQpO1xyXG5Cb3JkZXJfY2ZlOTBiYzhjOTNjNGRlMTlmMjBjYzY0NzU2NTNlZmQuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfY2ZlOTBiYzhjOTNjNGRlMTlmMjBjYzY0NzU2NTNlZmQuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3dTcGFuKEJvcmRlcl9jZmU5MGJjOGM5M2M0ZGUxOWYyMGNjNjQ3NTY1M2VmZCwzKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJvcmRlcl9jZmU5MGJjOGM5M2M0ZGUxOWYyMGNjNjQ3NTY1M2VmZCwyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW4oQm9yZGVyX2NmZTkwYmM4YzkzYzRkZTE5ZjIwY2M2NDc1NjUzZWZkLDEpO1xyXG5Cb3JkZXJfY2ZlOTBiYzhjOTNjNGRlMTlmMjBjYzY0NzU2NTNlZmQuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDAsIEcgPSAoYnl0ZSkyMDAsIEIgPSAoYnl0ZSkyMDAgfSk7XHJcbkJvcmRlcl9jZmU5MGJjOGM5M2M0ZGUxOWYyMGNjNjQ3NTY1M2VmZC5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfY2ZlOTBiYzhjOTNjNGRlMTlmMjBjYzY0NzU2NTNlZmQuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfNzZkYjRjYTA2MGU5NDBjM2IzZTI2NWU0ZGUwMTMwOGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzc2ZGI0Y2EwNjBlOTQwYzNiM2UyNjVlNGRlMDEzMDhlLkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNzZkYjRjYTA2MGU5NDBjM2IzZTI2NWU0ZGUwMTMwOGUuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wXzdhNjhiNDQ4NjJkODRmMmNhY2UwMTFmMGI5MjIyZWQzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfN2E2OGI0NDg2MmQ4NGYyY2FjZTAxMWYwYjkyMjJlZDMuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF83YTY4YjQ0ODYyZDg0ZjJjYWNlMDExZjBiOTIyMmVkMy5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfZTk5NzY1Y2IzNzBhNGUwOTg1Yzk5OWVmMmQyN2M5OGYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9lOTk3NjVjYjM3MGE0ZTA5ODVjOTk5ZWYyZDI3Yzk4Zi5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wX2U5OTc2NWNiMzcwYTRlMDk4NWM5OTllZjJkMjdjOThmLk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF83NmRiNGNhMDYwZTk0MGMzYjNlMjY1ZTRkZTAxMzA4ZS5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfN2E2OGI0NDg2MmQ4NGYyY2FjZTAxMWYwYjkyMjJlZDMpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzc2ZGI0Y2EwNjBlOTQwYzNiM2UyNjVlNGRlMDEzMDhlLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9lOTk3NjVjYjM3MGE0ZTA5ODVjOTk5ZWYyZDI3Yzk4Zik7XHJcblxyXG5cclxuQm9yZGVyX2NmZTkwYmM4YzkzYzRkZTE5ZjIwY2M2NDc1NjUzZWZkLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzc2ZGI0Y2EwNjBlOTQwYzNiM2UyNjVlNGRlMDEzMDhlO1xyXG5cclxudmFyIEdyaWRfMjAyNTM3OTQ0MGIxNDlmZDg3MGM4NjVmOTQ1ZDEyZDIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dEdyaWRcIiwgR3JpZF8yMDI1Mzc5NDQwYjE0OWZkODcwYzg2NWY5NDVkMTJkMik7XHJcbkdyaWRfMjAyNTM3OTQ0MGIxNDlmZDg3MGM4NjVmOTQ1ZDEyZDIuTmFtZSA9IFwiTGF5b3V0R3JpZFwiO1xyXG52YXIgTGluZWFyR3JhZGllbnRCcnVzaF84NjAxOWFlNjQ5NTk0OTI0YmZjY2ExNWRmZjcxOTIwNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5MaW5lYXJHcmFkaWVudEJydXNoKCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfODYwMTlhZTY0OTU5NDkyNGJmY2NhMTVkZmY3MTkyMDYuRW5kUG9pbnQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLkZvdW5kYXRpb24uUG9pbnQoMC41LCAxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF84NjAxOWFlNjQ5NTk0OTI0YmZjY2ExNWRmZjcxOTIwNi5TdGFydFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMCk7XHJcbnZhciBHcmFkaWVudFN0b3BfN2RjNjQ3NWZkMTA3NDg1YWE0NDkwYjc0ZDNmMjM1M2QgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF83ZGM2NDc1ZmQxMDc0ODVhYTQ0OTBiNzRkM2YyMzUzZC5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMzAsIEcgPSAoYnl0ZSkyMzAsIEIgPSAoYnl0ZSkyMzAgfTtcclxuR3JhZGllbnRTdG9wXzdkYzY0NzVmZDEwNzQ4NWFhNDQ5MGI3NGQzZjIzNTNkLk9mZnNldCA9IDBEO1xyXG5cclxudmFyIEdyYWRpZW50U3RvcF84NjA4MTlmNzJlMWQ0ZDU5OTRiOTA3NTQ3OGQ5ZTgyOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5HcmFkaWVudFN0b3AoKTtcclxuR3JhZGllbnRTdG9wXzg2MDgxOWY3MmUxZDRkNTk5NGI5MDc1NDc4ZDllODI4LkNvbG9yID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTI1NSwgQiA9IChieXRlKTI1NSB9O1xyXG5HcmFkaWVudFN0b3BfODYwODE5ZjcyZTFkNGQ1OTk0YjkwNzU0NzhkOWU4MjguT2Zmc2V0ID0gMUQ7XHJcblxyXG5MaW5lYXJHcmFkaWVudEJydXNoXzg2MDE5YWU2NDk1OTQ5MjRiZmNjYTE1ZGZmNzE5MjA2LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF83ZGM2NDc1ZmQxMDc0ODVhYTQ0OTBiNzRkM2YyMzUzZCk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfODYwMTlhZTY0OTU5NDkyNGJmY2NhMTVkZmY3MTkyMDYuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzg2MDgxOWY3MmUxZDRkNTk5NGI5MDc1NDc4ZDllODI4KTtcclxuXHJcblxyXG5HcmlkXzIwMjUzNzk0NDBiMTQ5ZmQ4NzBjODY1Zjk0NWQxMmQyLkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzg2MDE5YWU2NDk1OTQ5MjRiZmNjYTE1ZGZmNzE5MjA2O1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMTI2Y2I5ZTcyZjE0NGEyNjg1YmJmZTQ0N2YzOTgwOTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5Sb3dEZWZpbml0aW9uXzEyNmNiOWU3MmYxNDRhMjY4NWJiZmU0NDdmMzk4MDkxLkhlaWdodCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkTGVuZ3RoKDAuMjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzhlYzQzOGJmMzJiNzQ5NGM4ZDhlNTIyYzdlZjMyZDY4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl84ZWM0MzhiZjMyYjc0OTRjOGQ4ZTUyMmM3ZWYzMmQ2OC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjUsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRVbml0VHlwZS5TdGFyKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uX2Q1MjQxNWY5YTU0YjRmZDk5OTdhYmRiYWUyMzQxYjdlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl9kNTI0MTVmOWE1NGI0ZmQ5OTk3YWJkYmFlMjM0MWI3ZS5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG5HcmlkXzIwMjUzNzk0NDBiMTQ5ZmQ4NzBjODY1Zjk0NWQxMmQyLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzEyNmNiOWU3MmYxNDRhMjY4NWJiZmU0NDdmMzk4MDkxKTtcclxuR3JpZF8yMDI1Mzc5NDQwYjE0OWZkODcwYzg2NWY5NDVkMTJkMi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl84ZWM0MzhiZjMyYjc0OTRjOGQ4ZTUyMmM3ZWYzMmQ2OCk7XHJcbkdyaWRfMjAyNTM3OTQ0MGIxNDlmZDg3MGM4NjVmOTQ1ZDEyZDIuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fZDUyNDE1ZjlhNTRiNGZkOTk5N2FiZGJhZTIzNDFiN2UpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fMTQzMGI0MjliMmQ5NGU3MDkzMTk4MmM0OWMwNDYwODMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fN2FkNTYzMWEyNmU1NDczMGI1MGFlOTViMmE2YjNlMDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF8yMDI1Mzc5NDQwYjE0OWZkODcwYzg2NWY5NDVkMTJkMi5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl8xNDMwYjQyOWIyZDk0ZTcwOTMxOTgyYzQ5YzA0NjA4Myk7XHJcbkdyaWRfMjAyNTM3OTQ0MGIxNDlmZDg3MGM4NjVmOTQ1ZDEyZDIuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fN2FkNTYzMWEyNmU1NDczMGI1MGFlOTViMmE2YjNlMDApO1xyXG5cclxudmFyIEJ1dHRvbl9kMDRmMDM0ZTIzNGI0Y2M1YWEwMzI3NWZjYjg5MDI3ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5DYW5jZWxcIiwgQnV0dG9uX2QwNGYwMzRlMjM0YjRjYzVhYTAzMjc1ZmNiODkwMjdkKTtcclxuQnV0dG9uX2QwNGYwMzRlMjM0YjRjYzVhYTAzMjc1ZmNiODkwMjdkLk5hbWUgPSBcImJ0bkNhbmNlbFwiO1xyXG5CdXR0b25fZDA0ZjAzNGUyMzRiNGNjNWFhMDMyNzVmY2I4OTAyN2QuQ29udGVudCA9IEBcItCS0LXRgNC90YPRgtGM0YHRjyDQvdCwINCz0LvQsNCy0L3Rg9GOXCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl9kMDRmMDM0ZTIzNGI0Y2M1YWEwMzI3NWZjYjg5MDI3ZCwyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJ1dHRvbl9kMDRmMDM0ZTIzNGI0Y2M1YWEwMzI3NWZjYjg5MDI3ZCwyKTtcclxuQnV0dG9uX2QwNGYwMzRlMjM0YjRjYzVhYTAzMjc1ZmNiODkwMjdkLldpZHRoID0gMjgwRDtcclxuQnV0dG9uX2QwNGYwMzRlMjM0YjRjYzVhYTAzMjc1ZmNiODkwMjdkLkhlaWdodCA9IDUwRDtcclxuQnV0dG9uX2QwNGYwMzRlMjM0YjRjYzVhYTAzMjc1ZmNiODkwMjdkLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyMzgsIEIgPSAoYnl0ZSkyMzggfSk7XHJcbkJ1dHRvbl9kMDRmMDM0ZTIzNGI0Y2M1YWEwMzI3NWZjYjg5MDI3ZC5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uX2QwNGYwMzRlMjM0YjRjYzVhYTAzMjc1ZmNiODkwMjdkLkNsaWNrICs9IEJ1dHRvbl9DbGljaztcclxuQnV0dG9uX2QwNGYwMzRlMjM0YjRjYzVhYTAzMjc1ZmNiODkwMjdkLkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl9kMDRmMDM0ZTIzNGI0Y2M1YWEwMzI3NWZjYjg5MDI3ZC5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbnZhciBDb250cm9sVGVtcGxhdGVfOGUzNGRhMjE4NzVhNDRkNzg0ZjBmODY5OWY5NmVjMTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbFRlbXBsYXRlKCk7XHJcbkNvbnRyb2xUZW1wbGF0ZV84ZTM0ZGEyMTg3NWE0NGQ3ODRmMGY4Njk5Zjk2ZWMxNC5UYXJnZXRUeXBlID0gdHlwZW9mKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbik7XHJcbkNvbnRyb2xUZW1wbGF0ZV84ZTM0ZGEyMTg3NWE0NGQ3ODRmMGY4Njk5Zjk2ZWMxNC5TZXRNZXRob2RUb0luc3RhbnRpYXRlRnJhbWV3b3JrVGVtcGxhdGUoKFN5c3RlbS5GdW5jPFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sLFdpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlPil0aGlzLkluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV84ZTM0ZGEyMTg3NWE0NGQ3ODRmMGY4Njk5Zjk2ZWMxNCk7XHJcblxyXG5CdXR0b25fZDA0ZjAzNGUyMzRiNGNjNWFhMDMyNzVmY2I4OTAyN2QuVGVtcGxhdGUgPSBDb250cm9sVGVtcGxhdGVfOGUzNGRhMjE4NzVhNDRkNzg0ZjBmODY5OWY5NmVjMTQ7XHJcblxyXG5cclxudmFyIEJ1dHRvbl84ZWEzYTJhYTIxNzY0OGUzYWExYmM5ODMxNDlkZWJjNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24oKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5VcGxvYWRcIiwgQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0KTtcclxuQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0Lk5hbWUgPSBcImJ0blVwbG9hZFwiO1xyXG5CdXR0b25fOGVhM2EyYWEyMTc2NDhlM2FhMWJjOTgzMTQ5ZGViYzQuQ29udGVudCA9IEBcItCX0LDQs9GA0YPQt9C40YLRjCBKU09OINGE0LDQudC7XCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl84ZWEzYTJhYTIxNzY0OGUzYWExYmM5ODMxNDlkZWJjNCwwKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJ1dHRvbl84ZWEzYTJhYTIxNzY0OGUzYWExYmM5ODMxNDlkZWJjNCwxKTtcclxuQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0LldpZHRoID0gMjgwRDtcclxuQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0LkhlaWdodCA9IDUwRDtcclxuQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNDksIEcgPSAoYnl0ZSkyMjIsIEIgPSAoYnl0ZSkyNDIgfSk7XHJcbkJ1dHRvbl84ZWEzYTJhYTIxNzY0OGUzYWExYmM5ODMxNDlkZWJjNC5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0LkNsaWNrICs9IEJ0blVwbG9hZF9DbGljaztcclxuQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0LkJvcmRlclRoaWNrbmVzcyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMSk7XHJcbkJ1dHRvbl84ZWEzYTJhYTIxNzY0OGUzYWExYmM5ODMxNDlkZWJjNC5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl84ZWEzYTJhYTIxNzY0OGUzYWExYmM5ODMxNDlkZWJjNC5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0LkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG52YXIgQ29udHJvbFRlbXBsYXRlXzM1NDkxZWVjYmNmOTRhMGE5MzYxNjdkZjhjYjRkMmRkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2xUZW1wbGF0ZSgpO1xyXG5Db250cm9sVGVtcGxhdGVfMzU0OTFlZWNiY2Y5NGEwYTkzNjE2N2RmOGNiNGQyZGQuVGFyZ2V0VHlwZSA9IHR5cGVvZihnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5CdXR0b24pO1xyXG5Db250cm9sVGVtcGxhdGVfMzU0OTFlZWNiY2Y5NGEwYTkzNjE2N2RmOGNiNGQyZGQuU2V0TWV0aG9kVG9JbnN0YW50aWF0ZUZyYW1ld29ya1RlbXBsYXRlKChTeXN0ZW0uRnVuYzxXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCxXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZT4pdGhpcy5JbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfMzU0OTFlZWNiY2Y5NGEwYTkzNjE2N2RmOGNiNGQyZGQpO1xyXG5cclxuQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0LlRlbXBsYXRlID0gQ29udHJvbFRlbXBsYXRlXzM1NDkxZWVjYmNmOTRhMGE5MzYxNjdkZjhjYjRkMmRkO1xyXG5cclxuXHJcbnZhciBCdXR0b25fYmU4NWIwODE1ZTc0NDVmOWJiMGJhNTlhNjI2ZWM3NWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuUHJvY2Vzc2luZ1wiLCBCdXR0b25fYmU4NWIwODE1ZTc0NDVmOWJiMGJhNTlhNjI2ZWM3NWUpO1xyXG5CdXR0b25fYmU4NWIwODE1ZTc0NDVmOWJiMGJhNTlhNjI2ZWM3NWUuTmFtZSA9IFwiYnRuUHJvY2Vzc2luZ1wiO1xyXG5CdXR0b25fYmU4NWIwODE1ZTc0NDVmOWJiMGJhNTlhNjI2ZWM3NWUuQ29udGVudCA9IEBcItCf0L7RgdGC0YDQvtC40YLRjCDQtNC40LDQs9GA0LDQvNC80YNcIjtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2JlODViMDgxNWU3NDQ1ZjliYjBiYTU5YTYyNmVjNzVlLDApO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCdXR0b25fYmU4NWIwODE1ZTc0NDVmOWJiMGJhNTlhNjI2ZWM3NWUsMSk7XHJcbkJ1dHRvbl9iZTg1YjA4MTVlNzQ0NWY5YmIwYmE1OWE2MjZlYzc1ZS5XaWR0aCA9IDI4MEQ7XHJcbkJ1dHRvbl9iZTg1YjA4MTVlNzQ0NWY5YmIwYmE1OWE2MjZlYzc1ZS5IZWlnaHQgPSA1MEQ7XHJcbkJ1dHRvbl9iZTg1YjA4MTVlNzQ0NWY5YmIwYmE1OWE2MjZlYzc1ZS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjU1LCBCID0gKGJ5dGUpMjU1IH0pO1xyXG5CdXR0b25fYmU4NWIwODE1ZTc0NDVmOWJiMGJhNTlhNjI2ZWM3NWUuRm9udFNpemUgPSAyNUQ7XHJcbkJ1dHRvbl9iZTg1YjA4MTVlNzQ0NWY5YmIwYmE1OWE2MjZlYzc1ZS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5CdXR0b25fYmU4NWIwODE1ZTc0NDVmOWJiMGJhNTlhNjI2ZWM3NWUuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbkJ1dHRvbl9iZTg1YjA4MTVlNzQ0NWY5YmIwYmE1OWE2MjZlYzc1ZS5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkNlbnRlcjtcclxuQnV0dG9uX2JlODViMDgxNWU3NDQ1ZjliYjBiYTU5YTYyNmVjNzVlLkhvcml6b250YWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Ib3Jpem9udGFsQWxpZ25tZW50LkNlbnRlcjtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV84MzRmZDQ2N2I5YzA0YjNiOTM1ZjgyNTI5YTc1YWJjMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlXzgzNGZkNDY3YjljMDRiM2I5MzVmODI1MjlhNzVhYmMxLlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlXzgzNGZkNDY3YjljMDRiM2I5MzVmODI1MjlhNzVhYmMxLlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzgzNGZkNDY3YjljMDRiM2I5MzVmODI1MjlhNzVhYmMxKTtcclxuXHJcbkJ1dHRvbl9iZTg1YjA4MTVlNzQ0NWY5YmIwYmE1OWE2MjZlYzc1ZS5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV84MzRmZDQ2N2I5YzA0YjNiOTM1ZjgyNTI5YTc1YWJjMTtcclxuXHJcblxyXG52YXIgVGV4dEJveF9hNzE3NWJlNDQ4ODI0ZTA4YWE1MTNlNDZmYjZiZGE3ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5UZXh0Qm94KCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwidHh0RmlsZVwiLCBUZXh0Qm94X2E3MTc1YmU0NDg4MjRlMDhhYTUxM2U0NmZiNmJkYTdlKTtcclxuVGV4dEJveF9hNzE3NWJlNDQ4ODI0ZTA4YWE1MTNlNDZmYjZiZGE3ZS5OYW1lID0gXCJ0eHRGaWxlXCI7XHJcblRleHRCb3hfYTcxNzViZTQ0ODgyNGUwOGFhNTEzZTQ2ZmI2YmRhN2UuVGV4dFdyYXBwaW5nID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGV4dFdyYXBwaW5nLldyYXA7XHJcblRleHRCb3hfYTcxNzViZTQ0ODgyNGUwOGFhNTEzZTQ2ZmI2YmRhN2UuVGV4dCA9IEBcIlwiO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhUZXh0Qm94X2E3MTc1YmU0NDg4MjRlMDhhYTUxM2U0NmZiNmJkYTdlLDEpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtblNwYW4oVGV4dEJveF9hNzE3NWJlNDQ4ODI0ZTA4YWE1MTNlNDZmYjZiZGE3ZSwyKTtcclxuVGV4dEJveF9hNzE3NWJlNDQ4ODI0ZTA4YWE1MTNlNDZmYjZiZGE3ZS5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEwLCAtMjAsIDEwLCAtMjApO1xyXG5UZXh0Qm94X2E3MTc1YmU0NDg4MjRlMDhhYTUxM2U0NmZiNmJkYTdlLkZvbnRTaXplID0gMjBEO1xyXG5cclxudmFyIEJvcmRlcl8yODNmYjE5ZjM5YjA0YWYxYjU2N2EyOWQ0MWFkMzU3ZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJib3JkZXJJREVGXCIsIEJvcmRlcl8yODNmYjE5ZjM5YjA0YWYxYjU2N2EyOWQ0MWFkMzU3ZCk7XHJcbkJvcmRlcl8yODNmYjE5ZjM5YjA0YWYxYjU2N2EyOWQ0MWFkMzU3ZC5OYW1lID0gXCJib3JkZXJJREVGXCI7XHJcbkJvcmRlcl8yODNmYjE5ZjM5YjA0YWYxYjU2N2EyOWQ0MWFkMzU3ZC5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5Cb3JkZXJfMjgzZmIxOWYzOWIwNGFmMWI1NjdhMjlkNDFhZDM1N2QuQm9yZGVyQnJ1c2ggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkxMDAsIEcgPSAoYnl0ZSkxMDAsIEIgPSAoYnl0ZSkxMDAgfSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJvcmRlcl8yODNmYjE5ZjM5YjA0YWYxYjU2N2EyOWQ0MWFkMzU3ZCwwKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3dTcGFuKEJvcmRlcl8yODNmYjE5ZjM5YjA0YWYxYjU2N2EyOWQ0MWFkMzU3ZCwyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJvcmRlcl8yODNmYjE5ZjM5YjA0YWYxYjU2N2EyOWQ0MWFkMzU3ZCwyKTtcclxuQm9yZGVyXzI4M2ZiMTlmMzliMDRhZjFiNTY3YTI5ZDQxYWQzNTdkLk1hcmdpbiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMTApO1xyXG5Cb3JkZXJfMjgzZmIxOWYzOWIwNGFmMWI1NjdhMjlkNDFhZDM1N2QuVmlzaWJpbGl0eSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5Cb3JkZXJfMjgzZmIxOWYzOWIwNGFmMWI1NjdhMjlkNDFhZDM1N2QuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENhbnZhc19hNWVmYTViNTc3YTc0NjE4YjkwZGQzZWYwNWMxNGJkNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5DYW52YXMoKTtcclxuQ2FudmFzX2E1ZWZhNWI1NzdhNzQ2MThiOTBkZDNlZjA1YzE0YmQ2LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyMDQsIEcgPSAoYnl0ZSkyMDQsIEIgPSAoYnl0ZSkyMDQgfSk7XHJcblxyXG5Cb3JkZXJfMjgzZmIxOWYzOWIwNGFmMWI1NjdhMjlkNDFhZDM1N2QuQ2hpbGQgPSBDYW52YXNfYTVlZmE1YjU3N2E3NDYxOGI5MGRkM2VmMDVjMTRiZDY7XHJcblxyXG5cclxudmFyIEJvcmRlcl9mYzcyM2U3MjhlZjc0MDJlOWNlMjZkNzg5Nzg1YTMyZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJib3JkZXJVTUxcIiwgQm9yZGVyX2ZjNzIzZTcyOGVmNzQwMmU5Y2UyNmQ3ODk3ODVhMzJmKTtcclxuQm9yZGVyX2ZjNzIzZTcyOGVmNzQwMmU5Y2UyNmQ3ODk3ODVhMzJmLk5hbWUgPSBcImJvcmRlclVNTFwiO1xyXG5Cb3JkZXJfZmM3MjNlNzI4ZWY3NDAyZTljZTI2ZDc4OTc4NWEzMmYuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQm9yZGVyX2ZjNzIzZTcyOGVmNzQwMmU5Y2UyNmQ3ODk3ODVhMzJmLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCb3JkZXJfZmM3MjNlNzI4ZWY3NDAyZTljZTI2ZDc4OTc4NWEzMmYsMCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93U3BhbihCb3JkZXJfZmM3MjNlNzI4ZWY3NDAyZTljZTI2ZDc4OTc4NWEzMmYsMik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCb3JkZXJfZmM3MjNlNzI4ZWY3NDAyZTljZTI2ZDc4OTc4NWEzMmYsMik7XHJcbkJvcmRlcl9mYzcyM2U3MjhlZjc0MDJlOWNlMjZkNzg5Nzg1YTMyZi5NYXJnaW4gPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEwKTtcclxuQm9yZGVyX2ZjNzIzZTcyOGVmNzQwMmU5Y2UyNmQ3ODk3ODVhMzJmLlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuQm9yZGVyX2ZjNzIzZTcyOGVmNzQwMmU5Y2UyNmQ3ODk3ODVhMzJmLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDYW52YXNfODBkYjgwNGZjNzk2NDc3N2IzNzdlZDA1NmM0MGUwNzEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ2FudmFzKCk7XHJcbkNhbnZhc184MGRiODA0ZmM3OTY0Nzc3YjM3N2VkMDU2YzQwZTA3MS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjA0LCBHID0gKGJ5dGUpMjA0LCBCID0gKGJ5dGUpMjA0IH0pO1xyXG5cclxuQm9yZGVyX2ZjNzIzZTcyOGVmNzQwMmU5Y2UyNmQ3ODk3ODVhMzJmLkNoaWxkID0gQ2FudmFzXzgwZGI4MDRmYzc5NjQ3NzdiMzc3ZWQwNTZjNDBlMDcxO1xyXG5cclxuXHJcbnZhciBCdXR0b25fM2FlZmU1Mzk1MmZhNGNjMjljNTkxNjY1NTJlZTcwOGMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiYnRuVXBsb2FkSURFRlwiLCBCdXR0b25fM2FlZmU1Mzk1MmZhNGNjMjljNTkxNjY1NTJlZTcwOGMpO1xyXG5CdXR0b25fM2FlZmU1Mzk1MmZhNGNjMjljNTkxNjY1NTJlZTcwOGMuTmFtZSA9IFwiYnRuVXBsb2FkSURFRlwiO1xyXG5CdXR0b25fM2FlZmU1Mzk1MmZhNGNjMjljNTkxNjY1NTJlZTcwOGMuQ29udGVudCA9IEBcItCX0LDQs9GA0YPQt9C40YLRjCBJREVGXCI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJ1dHRvbl8zYWVmZTUzOTUyZmE0Y2MyOWM1OTE2NjU1MmVlNzA4YywyKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEJ1dHRvbl8zYWVmZTUzOTUyZmE0Y2MyOWM1OTE2NjU1MmVlNzA4YywyKTtcclxuQnV0dG9uXzNhZWZlNTM5NTJmYTRjYzI5YzU5MTY2NTUyZWU3MDhjLldpZHRoID0gMjgwRDtcclxuQnV0dG9uXzNhZWZlNTM5NTJmYTRjYzI5YzU5MTY2NTUyZWU3MDhjLkhlaWdodCA9IDUwRDtcclxuQnV0dG9uXzNhZWZlNTM5NTJmYTRjYzI5YzU5MTY2NTUyZWU3MDhjLkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyMzgsIEIgPSAoYnl0ZSkyMzggfSk7XHJcbkJ1dHRvbl8zYWVmZTUzOTUyZmE0Y2MyOWM1OTE2NjU1MmVlNzA4Yy5Gb250U2l6ZSA9IDI1RDtcclxuQnV0dG9uXzNhZWZlNTM5NTJmYTRjYzI5YzU5MTY2NTUyZWU3MDhjLkNsaWNrICs9IEJ0blVwbG9hZElERUZfQ2xpY2s7XHJcbkJ1dHRvbl8zYWVmZTUzOTUyZmE0Y2MyOWM1OTE2NjU1MmVlNzA4Yy5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5CdXR0b25fM2FlZmU1Mzk1MmZhNGNjMjljNTkxNjY1NTJlZTcwOGMuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fM2FlZmU1Mzk1MmZhNGNjMjljNTkxNjY1NTJlZTcwOGMuVmVydGljYWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WZXJ0aWNhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl8zYWVmZTUzOTUyZmE0Y2MyOWM1OTE2NjU1MmVlNzA4Yy5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzNhZWZlNTM5NTJmYTRjYzI5YzU5MTY2NTUyZWU3MDhjLlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV9iYTU3NjEzNmZiZTk0YTBiOWQwOTkwN2YyNjI2YTc0MCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlX2JhNTc2MTM2ZmJlOTRhMGI5ZDA5OTA3ZjI2MjZhNzQwLlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlX2JhNTc2MTM2ZmJlOTRhMGI5ZDA5OTA3ZjI2MjZhNzQwLlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlX2JhNTc2MTM2ZmJlOTRhMGI5ZDA5OTA3ZjI2MjZhNzQwKTtcclxuXHJcbkJ1dHRvbl8zYWVmZTUzOTUyZmE0Y2MyOWM1OTE2NjU1MmVlNzA4Yy5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV9iYTU3NjEzNmZiZTk0YTBiOWQwOTkwN2YyNjI2YTc0MDtcclxuXHJcblxyXG52YXIgQnV0dG9uXzc3YjFjMzQ3MTdiMjRmODU5YTJjNDgwOGRmMDRmNzgxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0blVwbG9hZFVNTFwiLCBCdXR0b25fNzdiMWMzNDcxN2IyNGY4NTlhMmM0ODA4ZGYwNGY3ODEpO1xyXG5CdXR0b25fNzdiMWMzNDcxN2IyNGY4NTlhMmM0ODA4ZGYwNGY3ODEuTmFtZSA9IFwiYnRuVXBsb2FkVU1MXCI7XHJcbkJ1dHRvbl83N2IxYzM0NzE3YjI0Zjg1OWEyYzQ4MDhkZjA0Zjc4MS5Db250ZW50ID0gQFwi0JfQsNCz0YDRg9C30LjRgtGMIFVNTFwiO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fNzdiMWMzNDcxN2IyNGY4NTlhMmM0ODA4ZGYwNGY3ODEsMik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Q29sdW1uU3BhbihCdXR0b25fNzdiMWMzNDcxN2IyNGY4NTlhMmM0ODA4ZGYwNGY3ODEsMik7XHJcbkJ1dHRvbl83N2IxYzM0NzE3YjI0Zjg1OWEyYzQ4MDhkZjA0Zjc4MS5XaWR0aCA9IDI4MEQ7XHJcbkJ1dHRvbl83N2IxYzM0NzE3YjI0Zjg1OWEyYzQ4MDhkZjA0Zjc4MS5IZWlnaHQgPSA1MEQ7XHJcbkJ1dHRvbl83N2IxYzM0NzE3YjI0Zjg1OWEyYzQ4MDhkZjA0Zjc4MS5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjU1LCBHID0gKGJ5dGUpMjM4LCBCID0gKGJ5dGUpMjM4IH0pO1xyXG5CdXR0b25fNzdiMWMzNDcxN2IyNGY4NTlhMmM0ODA4ZGYwNGY3ODEuRm9udFNpemUgPSAyNUQ7XHJcbkJ1dHRvbl83N2IxYzM0NzE3YjI0Zjg1OWEyYzQ4MDhkZjA0Zjc4MS5DbGljayArPSBCdG5VcGxvYWRVTUxfQ2xpY2s7XHJcbkJ1dHRvbl83N2IxYzM0NzE3YjI0Zjg1OWEyYzQ4MDhkZjA0Zjc4MS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDEpO1xyXG5CdXR0b25fNzdiMWMzNDcxN2IyNGY4NTlhMmM0ODA4ZGYwNGY3ODEuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fNzdiMWMzNDcxN2IyNGY4NTlhMmM0ODA4ZGYwNGY3ODEuVmVydGljYWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WZXJ0aWNhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl83N2IxYzM0NzE3YjI0Zjg1OWEyYzQ4MDhkZjA0Zjc4MS5Cb3JkZXJCcnVzaCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTEwMCwgRyA9IChieXRlKTEwMCwgQiA9IChieXRlKTEwMCB9KTtcclxuQnV0dG9uXzc3YjFjMzQ3MTdiMjRmODU5YTJjNDgwOGRmMDRmNzgxLlZpc2liaWxpdHkgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV82MDgyZTc0M2U2YjY0ZWJjOWI3ODZmMjE5MzRkODIzNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlXzYwODJlNzQzZTZiNjRlYmM5Yjc4NmYyMTkzNGQ4MjM3LlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlXzYwODJlNzQzZTZiNjRlYmM5Yjc4NmYyMTkzNGQ4MjM3LlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzYwODJlNzQzZTZiNjRlYmM5Yjc4NmYyMTkzNGQ4MjM3KTtcclxuXHJcbkJ1dHRvbl83N2IxYzM0NzE3YjI0Zjg1OWEyYzQ4MDhkZjA0Zjc4MS5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV82MDgyZTc0M2U2YjY0ZWJjOWI3ODZmMjE5MzRkODIzNztcclxuXHJcblxyXG5HcmlkXzIwMjUzNzk0NDBiMTQ5ZmQ4NzBjODY1Zjk0NWQxMmQyLkNoaWxkcmVuLkFkZChCdXR0b25fZDA0ZjAzNGUyMzRiNGNjNWFhMDMyNzVmY2I4OTAyN2QpO1xyXG5HcmlkXzIwMjUzNzk0NDBiMTQ5ZmQ4NzBjODY1Zjk0NWQxMmQyLkNoaWxkcmVuLkFkZChCdXR0b25fOGVhM2EyYWEyMTc2NDhlM2FhMWJjOTgzMTQ5ZGViYzQpO1xyXG5HcmlkXzIwMjUzNzk0NDBiMTQ5ZmQ4NzBjODY1Zjk0NWQxMmQyLkNoaWxkcmVuLkFkZChCdXR0b25fYmU4NWIwODE1ZTc0NDVmOWJiMGJhNTlhNjI2ZWM3NWUpO1xyXG5HcmlkXzIwMjUzNzk0NDBiMTQ5ZmQ4NzBjODY1Zjk0NWQxMmQyLkNoaWxkcmVuLkFkZChUZXh0Qm94X2E3MTc1YmU0NDg4MjRlMDhhYTUxM2U0NmZiNmJkYTdlKTtcclxuR3JpZF8yMDI1Mzc5NDQwYjE0OWZkODcwYzg2NWY5NDVkMTJkMi5DaGlsZHJlbi5BZGQoQm9yZGVyXzI4M2ZiMTlmMzliMDRhZjFiNTY3YTI5ZDQxYWQzNTdkKTtcclxuR3JpZF8yMDI1Mzc5NDQwYjE0OWZkODcwYzg2NWY5NDVkMTJkMi5DaGlsZHJlbi5BZGQoQm9yZGVyX2ZjNzIzZTcyOGVmNzQwMmU5Y2UyNmQ3ODk3ODVhMzJmKTtcclxuR3JpZF8yMDI1Mzc5NDQwYjE0OWZkODcwYzg2NWY5NDVkMTJkMi5DaGlsZHJlbi5BZGQoQnV0dG9uXzNhZWZlNTM5NTJmYTRjYzI5YzU5MTY2NTUyZWU3MDhjKTtcclxuR3JpZF8yMDI1Mzc5NDQwYjE0OWZkODcwYzg2NWY5NDVkMTJkMi5DaGlsZHJlbi5BZGQoQnV0dG9uXzc3YjFjMzQ3MTdiMjRmODU5YTJjNDgwOGRmMDRmNzgxKTtcclxuXHJcblxyXG5Cb3JkZXJfY2ZlOTBiYzhjOTNjNGRlMTlmMjBjYzY0NzU2NTNlZmQuQ2hpbGQgPSBHcmlkXzIwMjUzNzk0NDBiMTQ5ZmQ4NzBjODY1Zjk0NWQxMmQyO1xyXG5cclxuXHJcbkdyaWRfNmFlYzY0N2M0MTM1NDUyM2JmYzBhODdjMzhmNzJkYjQuQ2hpbGRyZW4uQWRkKEJvcmRlcl81MzliODc1ODVlOTc0ZTllYThlZmVhMmMyYTM2ZThmMSk7XHJcbkdyaWRfNmFlYzY0N2M0MTM1NDUyM2JmYzBhODdjMzhmNzJkYjQuQ2hpbGRyZW4uQWRkKEJvcmRlcl9jZmU5MGJjOGM5M2M0ZGUxOWYyMGNjNjQ3NTY1M2VmZCk7XHJcblxyXG5cclxudGhpcy5Db250ZW50ID0gR3JpZF82YWVjNjQ3YzQxMzU0NTIzYmZjMGE4N2MzOGY3MmRiNDtcclxuXHJcblxyXG5cclxuZWxlbWVudEZvckxpc3QgPSBCb3JkZXJfNTM5Yjg3NTg1ZTk3NGU5ZWE4ZWZlYTJjMmEzNmU4ZjE7XHJcbmJ0bkNhbmNlbCA9IEJ1dHRvbl9kMDRmMDM0ZTIzNGI0Y2M1YWEwMzI3NWZjYjg5MDI3ZDtcclxuYnRuVXBsb2FkID0gQnV0dG9uXzhlYTNhMmFhMjE3NjQ4ZTNhYTFiYzk4MzE0OWRlYmM0O1xyXG5idG5Qcm9jZXNzaW5nID0gQnV0dG9uX2JlODViMDgxNWU3NDQ1ZjliYjBiYTU5YTYyNmVjNzVlO1xyXG50eHRGaWxlID0gVGV4dEJveF9hNzE3NWJlNDQ4ODI0ZTA4YWE1MTNlNDZmYjZiZGE3ZTtcclxuYm9yZGVySURFRiA9IEJvcmRlcl8yODNmYjE5ZjM5YjA0YWYxYjU2N2EyOWQ0MWFkMzU3ZDtcclxuYm9yZGVyVU1MID0gQm9yZGVyX2ZjNzIzZTcyOGVmNzQwMmU5Y2UyNmQ3ODk3ODVhMzJmO1xyXG5idG5VcGxvYWRJREVGID0gQnV0dG9uXzNhZWZlNTM5NTJmYTRjYzI5YzU5MTY2NTUyZWU3MDhjO1xyXG5idG5VcGxvYWRVTUwgPSBCdXR0b25fNzdiMWMzNDcxN2IyNGY4NTlhMmM0ODA4ZGYwNGY3ODE7XHJcbkxheW91dEdyaWQgPSBHcmlkXzIwMjUzNzk0NDBiMTQ5ZmQ4NzBjODY1Zjk0NWQxMmQyO1xyXG5lbGVtZW50ID0gQm9yZGVyX2NmZTkwYmM4YzkzYzRkZTE5ZjIwY2M2NDc1NjUzZWZkO1xyXG5cclxuXHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfOThkYmUyZWUzMjBmNDY2MWI4NDViYWFhNDI5OTcwZjIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV85OGRiZTJlZTMyMGY0NjYxYjg0NWJhYWE0Mjk5NzBmMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzk4ZGJlMmVlMzIwZjQ2NjFiODQ1YmFhYTQyOTk3MGYyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfOThkYmUyZWUzMjBmNDY2MWI4NDViYWFhNDI5OTcwZjIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5Xzk4ZGJlMmVlMzIwZjQ2NjFiODQ1YmFhYTQyOTk3MGYyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV81MjZmNDNkYzMwZWQ0YzE2OTFlYmY3ZjhiOWRjZThmNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzUyNmY0M2RjMzBlZDRjMTY5MWViZjdmOGI5ZGNlOGY3IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNTI2ZjQzZGMzMGVkNGMxNjkxZWJmN2Y4YjlkY2U4ZjcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV81MjZmNDNkYzMwZWQ0YzE2OTFlYmY3ZjhiOWRjZThmNyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNTI2ZjQzZGMzMGVkNGMxNjkxZWJmN2Y4YjlkY2U4ZjcgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzY4MmQyNzE5MDE3YjRiZGI4MWUzMTU2YzU5NGI2Y2E5IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNjgyZDI3MTkwMTdiNGJkYjgxZTMxNTZjNTk0YjZjYTkgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV82ODJkMjcxOTAxN2I0YmRiODFlMzE1NmM1OTRiNmNhOSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzY4MmQyNzE5MDE3YjRiZGI4MWUzMTU2YzU5NGI2Y2E5IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV82ODJkMjcxOTAxN2I0YmRiODFlMzE1NmM1OTRiNmNhOSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlIEluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV84ZTM0ZGEyMTg3NWE0NGQ3ODRmMGY4Njk5Zjk2ZWMxNChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sIHRlbXBsYXRlT3duZXIpXHJcbiAgICAgICAge1xyXG52YXIgdGVtcGxhdGVJbnN0YW5jZV81MTM1ZjE3MTA1NGU0MGM1YWZhZTZhNzZhNTM3NmE0ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlKCk7XHJcbnRlbXBsYXRlSW5zdGFuY2VfNTEzNWYxNzEwNTRlNDBjNWFmYWU2YTc2YTUzNzZhNGUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlT3duZXI7XHJcbnZhciBCb3JkZXJfMGEyNjBiNDJhYWNhNGNlMWE5NmEwYjRmYTNiYWIwMDggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiT3V0ZXJCb3JkZXJcIiwgQm9yZGVyXzBhMjYwYjQyYWFjYTRjZTFhOTZhMGI0ZmEzYmFiMDA4KTtcclxuQm9yZGVyXzBhMjYwYjQyYWFjYTRjZTFhOTZhMGI0ZmEzYmFiMDA4Lk5hbWUgPSBcIk91dGVyQm9yZGVyXCI7XHJcbkJvcmRlcl8wYTI2MGI0MmFhY2E0Y2UxYTk2YTBiNGZhM2JhYjAwOC5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgVmlzdWFsU3RhdGVHcm91cF9hZmYxMzM2OTkxMTY0NWRhOGM0YzcwYmM5N2IwNTI4NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZUdyb3VwKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29tbW9uU3RhdGVzXCIsIFZpc3VhbFN0YXRlR3JvdXBfYWZmMTMzNjk5MTE2NDVkYThjNGM3MGJjOTdiMDUyODYpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2FmZjEzMzY5OTExNjQ1ZGE4YzRjNzBiYzk3YjA1Mjg2Lk5hbWUgPSBcIkNvbW1vblN0YXRlc1wiO1xyXG52YXIgVmlzdWFsU3RhdGVfZTljMjdiNzU5ZGM1NGY3ZDhkOWM0ZDdiZDYyMzk1MjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJOb3JtYWxcIiwgVmlzdWFsU3RhdGVfZTljMjdiNzU5ZGM1NGY3ZDhkOWM0ZDdiZDYyMzk1MjUpO1xyXG5WaXN1YWxTdGF0ZV9lOWMyN2I3NTlkYzU0ZjdkOGQ5YzRkN2JkNjIzOTUyNS5OYW1lID0gXCJOb3JtYWxcIjtcclxuXHJcbnZhciBWaXN1YWxTdGF0ZV85YTE3ZDE5YTE0MmI0NDc4OTg1NDI1M2JlMWI0MGJiNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlBvaW50ZXJPdmVyXCIsIFZpc3VhbFN0YXRlXzlhMTdkMTlhMTQyYjQ0Nzg5ODU0MjUzYmUxYjQwYmI1KTtcclxuVmlzdWFsU3RhdGVfOWExN2QxOWExNDJiNDQ3ODk4NTQyNTNiZTFiNDBiYjUuTmFtZSA9IFwiUG9pbnRlck92ZXJcIjtcclxudmFyIFN0b3J5Ym9hcmRfMjcxMGE0MTc0N2NkNDUyMTliMzIxMTIzYmIzMjAxYjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJmMTlmOGRlMmM3NzQ5ZDlhMDQ2YzI5NmY1NWVjM2MxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJmMTlmOGRlMmM3NzQ5ZDlhMDQ2YzI5NmY1NWVjM2MxLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV81NjNjNzljNTZkMzk0YjA3OGZlY2NjMWUyMjMxZjhmMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzU2M2M3OWM1NmQzOTRiMDc4ZmVjY2MxZTIyMzFmOGYwLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNTYzYzc5YzU2ZDM5NGIwNzhmZWNjYzFlMjIzMWY4ZjAuVmFsdWUgPSBAXCIjMTEwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJmMTlmOGRlMmM3NzQ5ZDlhMDQ2YzI5NmY1NWVjM2MxLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV81NjNjNzljNTZkMzk0YjA3OGZlY2NjMWUyMjMxZjhmMCk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF8yNzEwYTQxNzQ3Y2Q0NTIxOWIzMjExMjNiYjMyMDFiMS5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmYxOWY4ZGUyYzc3NDlkOWEwNDZjMjk2ZjU1ZWMzYzEpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzlhMTdkMTlhMTQyYjQ0Nzg5ODU0MjUzYmUxYjQwYmI1LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzI3MTBhNDE3NDdjZDQ1MjE5YjMyMTEyM2JiMzIwMWIxO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV83ZmU3M2E5ZDZiZDI0OTY1YjM4MGI2MDlhNDlmMjAzZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlByZXNzZWRcIiwgVmlzdWFsU3RhdGVfN2ZlNzNhOWQ2YmQyNDk2NWIzODBiNjA5YTQ5ZjIwM2QpO1xyXG5WaXN1YWxTdGF0ZV83ZmU3M2E5ZDZiZDI0OTY1YjM4MGI2MDlhNDlmMjAzZC5OYW1lID0gXCJQcmVzc2VkXCI7XHJcbnZhciBTdG9yeWJvYXJkX2VjZjlmOWE2NDlhZjQ0Y2I5MmQxNjJjNjUwMDljZTZhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYzE2MmMzNWJiNzQ0MjMwYTE2MWJmYzg1YjMzOWNmZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYzE2MmMzNWJiNzQ0MjMwYTE2MWJmYzg1YjMzOWNmZixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNTI1OTE0NTI1ODBhNGVmNTgyOGFhMTYyMjJjNzkyMjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV81MjU5MTQ1MjU4MGE0ZWY1ODI4YWExNjIyMmM3OTIyMS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzUyNTkxNDUyNTgwYTRlZjU4MjhhYTE2MjIyYzc5MjIxLlZhbHVlID0gQFwiIzIyMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yYzE2MmMzNWJiNzQ0MjMwYTE2MWJmYzg1YjMzOWNmZi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNTI1OTE0NTI1ODBhNGVmNTgyOGFhMTYyMjJjNzkyMjEpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfZWNmOWY5YTY0OWFmNDRjYjkyZDE2MmM2NTAwOWNlNmEuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzJjMTYyYzM1YmI3NDQyMzBhMTYxYmZjODViMzM5Y2ZmKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV83ZmU3M2E5ZDZiZDI0OTY1YjM4MGI2MDlhNDlmMjAzZC5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF9lY2Y5ZjlhNjQ5YWY0NGNiOTJkMTYyYzY1MDA5Y2U2YTtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfN2ZmODJkYmQzOGJiNDA4OWEwNzFmN2YxMmE0MGZhYTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJEaXNhYmxlZFwiLCBWaXN1YWxTdGF0ZV83ZmY4MmRiZDM4YmI0MDg5YTA3MWY3ZjEyYTQwZmFhMCk7XHJcblZpc3VhbFN0YXRlXzdmZjgyZGJkMzhiYjQwODlhMDcxZjdmMTJhNDBmYWEwLk5hbWUgPSBcIkRpc2FibGVkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzU4MzViMTA3ODNkZTQxMTFiMWY1YzIwN2UwYzAwYzY5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZmZhODhhZjlhZmM0OWI1YTM2MjE1YzcwYzlkNjU3OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZmZhODhhZjlhZmM0OWI1YTM2MjE1YzcwYzlkNjU3OCxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZDhkNGE1NTAxNjhkNDk4ZGFmYzQ4OGU5NzBkMzBmN2UgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9kOGQ0YTU1MDE2OGQ0OThkYWZjNDg4ZTk3MGQzMGY3ZS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2Q4ZDRhNTUwMTY4ZDQ5OGRhZmM0ODhlOTcwZDMwZjdlLlZhbHVlID0gQFwiIzMzRkZGRkZGXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZmZhODhhZjlhZmM0OWI1YTM2MjE1YzcwYzlkNjU3OC5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZDhkNGE1NTAxNjhkNDk4ZGFmYzQ4OGU5NzBkMzBmN2UpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNTgzNWIxMDc4M2RlNDExMWIxZjVjMjA3ZTBjMDBjNjkuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzlmZmE4OGFmOWFmYzQ5YjVhMzYyMTVjNzBjOWQ2NTc4KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV83ZmY4MmRiZDM4YmI0MDg5YTA3MWY3ZjEyYTQwZmFhMC5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF81ODM1YjEwNzgzZGU0MTExYjFmNWMyMDdlMGMwMGM2OTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZUdyb3VwX2FmZjEzMzY5OTExNjQ1ZGE4YzRjNzBiYzk3YjA1Mjg2LlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfZTljMjdiNzU5ZGM1NGY3ZDhkOWM0ZDdiZDYyMzk1MjUpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2FmZjEzMzY5OTExNjQ1ZGE4YzRjNzBiYzk3YjA1Mjg2LlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfOWExN2QxOWExNDJiNDQ3ODk4NTQyNTNiZTFiNDBiYjUpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2FmZjEzMzY5OTExNjQ1ZGE4YzRjNzBiYzk3YjA1Mjg2LlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfN2ZlNzNhOWQ2YmQyNDk2NWIzODBiNjA5YTQ5ZjIwM2QpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2FmZjEzMzY5OTExNjQ1ZGE4YzRjNzBiYzk3YjA1Mjg2LlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfN2ZmODJkYmQzOGJiNDA4OWEwNzFmN2YxMmE0MGZhYTApO1xyXG5cclxuXHJcbnRlbXBsYXRlT3duZXIuSU5URVJOQUxfR2V0VmlzdWFsU3RhdGVHcm91cHMoKS5BZGQoVmlzdWFsU3RhdGVHcm91cF9hZmYxMzM2OTkxMTY0NWRhOGM0YzcwYmM5N2IwNTI4Nik7XHJcblxyXG52YXIgQm9yZGVyXzI1YTIzZjYxNGE1MTQ1N2I4NjJlYjk4MDdhZmJjYTA5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIklubmVyQm9yZGVyXCIsIEJvcmRlcl8yNWEyM2Y2MTRhNTE0NTdiODYyZWI5ODA3YWZiY2EwOSk7XHJcbkJvcmRlcl8yNWEyM2Y2MTRhNTE0NTdiODYyZWI5ODA3YWZiY2EwOS5OYW1lID0gXCJJbm5lckJvcmRlclwiO1xyXG5Cb3JkZXJfMjVhMjNmNjE0YTUxNDU3Yjg2MmViOTgwN2FmYmNhMDkuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENvbnRlbnRQcmVzZW50ZXJfNjRiYjFjNjE5YjE3NDg5NjhmNTZmNTRjM2MxYjJhNzggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudFByZXNlbnRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbnRlbnRQcmVzZW50ZXJcIiwgQ29udGVudFByZXNlbnRlcl82NGJiMWM2MTliMTc0ODk2OGY1NmY1NGMzYzFiMmE3OCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNjRiYjFjNjE5YjE3NDg5NjhmNTZmNTRjM2MxYjJhNzguTmFtZSA9IFwiQ29udGVudFByZXNlbnRlclwiO1xyXG52YXIgQmluZGluZ185M2I0MjMwMjAyNTY0ZWEwYWU1MWYzNDJjNjkyOWUyOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ185M2I0MjMwMjAyNTY0ZWEwYWU1MWYzNDJjNjkyOWUyOS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50VGVtcGxhdGVcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jNThiMmNmN2RlMjU0ZDg0YjI2ZWI5N2Q2MTdlOTc0MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2M1OGIyY2Y3ZGUyNTRkODRiMjZlYjk3ZDYxN2U5NzQxLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzkzYjQyMzAyMDI1NjRlYTBhZTUxZjM0MmM2OTI5ZTI5LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYzU4YjJjZjdkZTI1NGQ4NGIyNmViOTdkNjE3ZTk3NDE7XHJcblxyXG5cclxuQmluZGluZ185M2I0MjMwMjAyNTY0ZWEwYWU1MWYzNDJjNjkyOWUyOS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV81MTM1ZjE3MTA1NGU0MGM1YWZhZTZhNzZhNTM3NmE0ZTtcclxuXHJcbnZhciBCaW5kaW5nXzU4MDNjNjM2MjM0MjRmN2JiZDg3ZThkZjhkZTkxZTcxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzU4MDNjNjM2MjM0MjRmN2JiZDg3ZThkZjhkZTkxZTcxLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV84MzEwZTU0NWRmZGU0ZDM1YTQ0YWY1ZDQwZWRjZjg1NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzgzMTBlNTQ1ZGZkZTRkMzVhNDRhZjVkNDBlZGNmODU3Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzU4MDNjNjM2MjM0MjRmN2JiZDg3ZThkZjhkZTkxZTcxLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfODMxMGU1NDVkZmRlNGQzNWE0NGFmNWQ0MGVkY2Y4NTc7XHJcblxyXG5cclxuQmluZGluZ181ODAzYzYzNjIzNDI0ZjdiYmQ4N2U4ZGY4ZGU5MWU3MS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV81MTM1ZjE3MTA1NGU0MGM1YWZhZTZhNzZhNTM3NmE0ZTtcclxuXHJcbnZhciBCaW5kaW5nXzBkMmQxZTIyYmMyMjQ2ZTc5MDg2MzUyZjUyZjhiYjMyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzBkMmQxZTIyYmMyMjQ2ZTc5MDg2MzUyZjUyZjhiYjMyLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlBhZGRpbmdcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9iMmY0MWI0NTVmMzM0YWE1OGQ3NDIyMGYzNTM1YzI4NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2IyZjQxYjQ1NWYzMzRhYTU4ZDc0MjIwZjM1MzVjMjg0Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzBkMmQxZTIyYmMyMjQ2ZTc5MDg2MzUyZjUyZjhiYjMyLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYjJmNDFiNDU1ZjMzNGFhNThkNzQyMjBmMzUzNWMyODQ7XHJcblxyXG5cclxuQmluZGluZ18wZDJkMWUyMmJjMjI0NmU3OTA4NjM1MmY1MmY4YmIzMi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV81MTM1ZjE3MTA1NGU0MGM1YWZhZTZhNzZhNTM3NmE0ZTtcclxuXHJcbnZhciBCaW5kaW5nX2NkYTIxZWE4MjAzZDQ0MGRhZTRkNDRiZTAyNjk2NTFjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2NkYTIxZWE4MjAzZDQ0MGRhZTRkNDRiZTAyNjk2NTFjLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkhvcml6b250YWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMDEyNDA2MmE4Mjc0NGE3YWFjN2I0ZjgxNjE1M2I0MDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8wMTI0MDYyYTgyNzQ0YTdhYWM3YjRmODE2MTUzYjQwNi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jZGEyMWVhODIwM2Q0NDBkYWU0ZDQ0YmUwMjY5NjUxYy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzAxMjQwNjJhODI3NDRhN2FhYzdiNGY4MTYxNTNiNDA2O1xyXG5cclxuXHJcbkJpbmRpbmdfY2RhMjFlYTgyMDNkNDQwZGFlNGQ0NGJlMDI2OTY1MWMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNTEzNWYxNzEwNTRlNDBjNWFmYWU2YTc2YTUzNzZhNGU7XHJcblxyXG52YXIgQmluZGluZ19hMjYzYzgzZWJmNDM0N2Y4OTkyODNhMjc0N2IxNzY5YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19hMjYzYzgzZWJmNDM0N2Y4OTkyODNhMjc0N2IxNzY5Yi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJWZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lYWZjNzhjY2U4NzM0OGQ5YWViZTAzNjQ1OWJkMTE1OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2VhZmM3OGNjZTg3MzQ4ZDlhZWJlMDM2NDU5YmQxMTU4Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2EyNjNjODNlYmY0MzQ3Zjg5OTI4M2EyNzQ3YjE3NjliLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZWFmYzc4Y2NlODczNDhkOWFlYmUwMzY0NTliZDExNTg7XHJcblxyXG5cclxuQmluZGluZ19hMjYzYzgzZWJmNDM0N2Y4OTkyODNhMjc0N2IxNzY5Yi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV81MTM1ZjE3MTA1NGU0MGM1YWZhZTZhNzZhNTM3NmE0ZTtcclxuXHJcblxyXG5Cb3JkZXJfMjVhMjNmNjE0YTUxNDU3Yjg2MmViOTgwN2FmYmNhMDkuQ2hpbGQgPSBDb250ZW50UHJlc2VudGVyXzY0YmIxYzYxOWIxNzQ4OTY4ZjU2ZjU0YzNjMWIyYTc4O1xyXG5cclxudmFyIEJpbmRpbmdfNDRhNjQxMjA5YzlkNGRiMmE0NzliOTZkNmY0MDkxZTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNDRhNjQxMjA5YzlkNGRiMmE0NzliOTZkNmY0MDkxZTAuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzY0OTFkMTUwYmE2NDQ0YWZhM2ViM2ZmZjk4OTQwZGFlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNjQ5MWQxNTBiYTY0NDRhZmEzZWIzZmZmOTg5NDBkYWUuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNDRhNjQxMjA5YzlkNGRiMmE0NzliOTZkNmY0MDkxZTAuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV82NDkxZDE1MGJhNjQ0NGFmYTNlYjNmZmY5ODk0MGRhZTtcclxuXHJcblxyXG5CaW5kaW5nXzQ0YTY0MTIwOWM5ZDRkYjJhNDc5Yjk2ZDZmNDA5MWUwLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzUxMzVmMTcxMDU0ZTQwYzVhZmFlNmE3NmE1Mzc2YTRlO1xyXG5cclxuXHJcbkJvcmRlcl8wYTI2MGI0MmFhY2E0Y2UxYTk2YTBiNGZhM2JhYjAwOC5DaGlsZCA9IEJvcmRlcl8yNWEyM2Y2MTRhNTE0NTdiODYyZWI5ODA3YWZiY2EwOTtcclxuXHJcbnZhciBCaW5kaW5nXzM0YjA4OWUyNjNhMTRmYjM5ZDBhNGJiNTFjYWQ3MjYzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzM0YjA4OWUyNjNhMTRmYjM5ZDBhNGJiNTFjYWQ3MjYzLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9kYzE1MTc5NjE0NGM0Mzk5YmZlYWZhNWEyMjk3MTcxZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2RjMTUxNzk2MTQ0YzQzOTliZmVhZmE1YTIyOTcxNzFlLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzM0YjA4OWUyNjNhMTRmYjM5ZDBhNGJiNTFjYWQ3MjYzLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZGMxNTE3OTYxNDRjNDM5OWJmZWFmYTVhMjI5NzE3MWU7XHJcblxyXG5cclxuQmluZGluZ18zNGIwODllMjYzYTE0ZmIzOWQwYTRiYjUxY2FkNzI2My5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV81MTM1ZjE3MTA1NGU0MGM1YWZhZTZhNzZhNTM3NmE0ZTtcclxuXHJcbnZhciBCaW5kaW5nXzM3NDI0MzdiZjExYzQ5ZWE5ZjIyYTgxZmVkMGVhZjVhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzM3NDI0MzdiZjExYzQ5ZWE5ZjIyYTgxZmVkMGVhZjVhLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlckJydXNoXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNjEwZjQwZTY2OThmNGJlMWI4NTJiOWQ2MjA4Mjk4NGYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82MTBmNDBlNjY5OGY0YmUxYjg1MmI5ZDYyMDgyOTg0Zi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18zNzQyNDM3YmYxMWM0OWVhOWYyMmE4MWZlZDBlYWY1YS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzYxMGY0MGU2Njk4ZjRiZTFiODUyYjlkNjIwODI5ODRmO1xyXG5cclxuXHJcbkJpbmRpbmdfMzc0MjQzN2JmMTFjNDllYTlmMjJhODFmZWQwZWFmNWEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNTEzNWYxNzEwNTRlNDBjNWFmYWU2YTc2YTUzNzZhNGU7XHJcblxyXG52YXIgQmluZGluZ184YWE2OThjN2M0ZWM0OWMxYTI4MTIzOTE1NzBkOWU4ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184YWE2OThjN2M0ZWM0OWMxYTI4MTIzOTE1NzBkOWU4ZS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJUaGlja25lc3NcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9jYTYzOTA4ZGEzZTA0NTUxODc5ZGM4OGE2NDZiNGRiNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2NhNjM5MDhkYTNlMDQ1NTE4NzlkYzg4YTY0NmI0ZGI1Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzhhYTY5OGM3YzRlYzQ5YzFhMjgxMjM5MTU3MGQ5ZThlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfY2E2MzkwOGRhM2UwNDU1MTg3OWRjODhhNjQ2YjRkYjU7XHJcblxyXG5cclxuQmluZGluZ184YWE2OThjN2M0ZWM0OWMxYTI4MTIzOTE1NzBkOWU4ZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV81MTM1ZjE3MTA1NGU0MGM1YWZhZTZhNzZhNTM3NmE0ZTtcclxuXHJcblxyXG5cclxuQ29udGVudFByZXNlbnRlcl82NGJiMWM2MTliMTc0ODk2OGY1NmY1NGMzYzFiMmE3OC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRUZW1wbGF0ZVByb3BlcnR5LCBCaW5kaW5nXzkzYjQyMzAyMDI1NjRlYTBhZTUxZjM0MmM2OTI5ZTI5KTtcclxuQ29udGVudFByZXNlbnRlcl82NGJiMWM2MTliMTc0ODk2OGY1NmY1NGMzYzFiMmE3OC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRQcm9wZXJ0eSwgQmluZGluZ181ODAzYzYzNjIzNDI0ZjdiYmQ4N2U4ZGY4ZGU5MWU3MSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNjRiYjFjNjE5YjE3NDg5NjhmNTZmNTRjM2MxYjJhNzguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lk1hcmdpblByb3BlcnR5LCBCaW5kaW5nXzBkMmQxZTIyYmMyMjQ2ZTc5MDg2MzUyZjUyZjhiYjMyKTtcclxuQ29udGVudFByZXNlbnRlcl82NGJiMWM2MTliMTc0ODk2OGY1NmY1NGMzYzFiMmE3OC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuSG9yaXpvbnRhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nX2NkYTIxZWE4MjAzZDQ0MGRhZTRkNDRiZTAyNjk2NTFjKTtcclxuQ29udGVudFByZXNlbnRlcl82NGJiMWM2MTliMTc0ODk2OGY1NmY1NGMzYzFiMmE3OC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuVmVydGljYWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19hMjYzYzgzZWJmNDM0N2Y4OTkyODNhMjc0N2IxNzY5Yik7XHJcbkJvcmRlcl8yNWEyM2Y2MTRhNTE0NTdiODYyZWI5ODA3YWZiY2EwOS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfNDRhNjQxMjA5YzlkNGRiMmE0NzliOTZkNmY0MDkxZTApO1xyXG5Cb3JkZXJfMGEyNjBiNDJhYWNhNGNlMWE5NmEwYjRmYTNiYWIwMDguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzM0YjA4OWUyNjNhMTRmYjM5ZDBhNGJiNTFjYWQ3MjYzKTtcclxuQm9yZGVyXzBhMjYwYjQyYWFjYTRjZTFhOTZhMGI0ZmEzYmFiMDA4LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlckJydXNoUHJvcGVydHksIEJpbmRpbmdfMzc0MjQzN2JmMTFjNDllYTlmMjJhODFmZWQwZWFmNWEpO1xyXG5Cb3JkZXJfMGEyNjBiNDJhYWNhNGNlMWE5NmEwYjRmYTNiYWIwMDguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyVGhpY2tuZXNzUHJvcGVydHksIEJpbmRpbmdfOGFhNjk4YzdjNGVjNDljMWEyODEyMzkxNTcwZDllOGUpO1xyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmYxOWY4ZGUyYzc3NDlkOWEwNDZjMjk2ZjU1ZWMzYzEsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfOThkYmUyZWUzMjBmNDY2MWI4NDViYWFhNDI5OTcwZjIsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV85OGRiZTJlZTMyMGY0NjYxYjg0NWJhYWE0Mjk5NzBmMixcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzk4ZGJlMmVlMzIwZjQ2NjFiODQ1YmFhYTQyOTk3MGYyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfOThkYmUyZWUzMjBmNDY2MWI4NDViYWFhNDI5OTcwZjIsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV85OGRiZTJlZTMyMGY0NjYxYjg0NWJhYWE0Mjk5NzBmMikpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmYxOWY4ZGUyYzc3NDlkOWEwNDZjMjk2ZjU1ZWMzYzEsIEJvcmRlcl8yNWEyM2Y2MTRhNTE0NTdiODYyZWI5ODA3YWZiY2EwOSk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmMxNjJjMzViYjc0NDIzMGExNjFiZmM4NWIzMzljZmYsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNTI2ZjQzZGMzMGVkNGMxNjkxZWJmN2Y4YjlkY2U4ZjcsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV81MjZmNDNkYzMwZWQ0YzE2OTFlYmY3ZjhiOWRjZThmNyxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzUyNmY0M2RjMzBlZDRjMTY5MWViZjdmOGI5ZGNlOGY3LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNTI2ZjQzZGMzMGVkNGMxNjkxZWJmN2Y4YjlkY2U4ZjcsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV81MjZmNDNkYzMwZWQ0YzE2OTFlYmY3ZjhiOWRjZThmNykpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMmMxNjJjMzViYjc0NDIzMGExNjFiZmM4NWIzMzljZmYsIEJvcmRlcl8yNWEyM2Y2MTRhNTE0NTdiODYyZWI5ODA3YWZiY2EwOSk7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWZmYTg4YWY5YWZjNDliNWEzNjIxNWM3MGM5ZDY1NzgsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNjgyZDI3MTkwMTdiNGJkYjgxZTMxNTZjNTk0YjZjYTksXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV82ODJkMjcxOTAxN2I0YmRiODFlMzE1NmM1OTRiNmNhOSxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzY4MmQyNzE5MDE3YjRiZGI4MWUzMTU2YzU5NGI2Y2E5LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNjgyZDI3MTkwMTdiNGJkYjgxZTMxNTZjNTk0YjZjYTksXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV82ODJkMjcxOTAxN2I0YmRiODFlMzE1NmM1OTRiNmNhOSkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWZmYTg4YWY5YWZjNDliNWEzNjIxNWM3MGM5ZDY1NzgsIEJvcmRlcl8yNWEyM2Y2MTRhNTE0NTdiODYyZWI5ODA3YWZiY2EwOSk7XHJcblxyXG50ZW1wbGF0ZUluc3RhbmNlXzUxMzVmMTcxMDU0ZTQwYzVhZmFlNmE3NmE1Mzc2YTRlLlRlbXBsYXRlQ29udGVudCA9IEJvcmRlcl8wYTI2MGI0MmFhY2E0Y2UxYTk2YTBiNGZhM2JhYjAwODtcclxucmV0dXJuIHRlbXBsYXRlSW5zdGFuY2VfNTEzNWYxNzEwNTRlNDBjNWFmYWU2YTc2YTUzNzZhNGU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2NmNDk3NTM5YWU5YjQ2ODViMWNmMTI3YTlhMWU4ZGNkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfY2Y0OTc1MzlhZTliNDY4NWIxY2YxMjdhOWExZThkY2QgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9jZjQ5NzUzOWFlOWI0Njg1YjFjZjEyN2E5YTFlOGRjZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2NmNDk3NTM5YWU5YjQ2ODViMWNmMTI3YTlhMWU4ZGNkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9jZjQ5NzUzOWFlOWI0Njg1YjFjZjEyN2E5YTFlOGRjZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfNzRkY2I1OWM4YWYxNDRiY2IxN2QwNjcwYzU4NWVlMmUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV83NGRjYjU5YzhhZjE0NGJjYjE3ZDA2NzBjNTg1ZWUyZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzc0ZGNiNTljOGFmMTQ0YmNiMTdkMDY3MGM1ODVlZTJlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfNzRkY2I1OWM4YWYxNDRiY2IxN2QwNjcwYzU4NWVlMmUgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5Xzc0ZGNiNTljOGFmMTQ0YmNiMTdkMDY3MGM1ODVlZTJlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV85NmFmMTY1MWVjMTM0MDI5OWYzYzQ5NjkxNzVjNmM3NCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5Xzk2YWYxNjUxZWMxMzQwMjk5ZjNjNDk2OTE3NWM2Yzc0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfOTZhZjE2NTFlYzEzNDAyOTlmM2M0OTY5MTc1YzZjNzQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV85NmFmMTY1MWVjMTM0MDI5OWYzYzQ5NjkxNzVjNmM3NCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfOTZhZjE2NTFlYzEzNDAyOTlmM2M0OTY5MTc1YzZjNzQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfMzU0OTFlZWNiY2Y5NGEwYTkzNjE2N2RmOGNiNGQyZGQoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfNDljNmE0YjFlZTc5NDQ4ZjgwYzZlZmNkN2E1NzIyZTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlXzQ5YzZhNGIxZWU3OTQ0OGY4MGM2ZWZjZDdhNTcyMmU0LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyXzRkNjkwMTE3OWFjMjQ2ZDJhZWM5ZDBlZGEyZmZlOWU3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl80ZDY5MDExNzlhYzI0NmQyYWVjOWQwZWRhMmZmZTllNyk7XHJcbkJvcmRlcl80ZDY5MDExNzlhYzI0NmQyYWVjOWQwZWRhMmZmZTllNy5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfNGQ2OTAxMTc5YWMyNDZkMmFlYzlkMGVkYTJmZmU5ZTcuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfZjJlNTEwODU3NWE0NDE5ZDg4YWVmMTlkNmY0MDA5ODQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwX2YyZTUxMDg1NzVhNDQxOWQ4OGFlZjE5ZDZmNDAwOTg0KTtcclxuVmlzdWFsU3RhdGVHcm91cF9mMmU1MTA4NTc1YTQ0MTlkODhhZWYxOWQ2ZjQwMDk4NC5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzJiMTk1NTFkZDQ4NzRhZjNhMmYxMDk2M2RjYWI0ZjVkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzJiMTk1NTFkZDQ4NzRhZjNhMmYxMDk2M2RjYWI0ZjVkKTtcclxuVmlzdWFsU3RhdGVfMmIxOTU1MWRkNDg3NGFmM2EyZjEwOTYzZGNhYjRmNWQuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZGIzZGRjZDhlZTVlNGZhNmFhOGNiYmJjY2M4NDZiNTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV9kYjNkZGNkOGVlNWU0ZmE2YWE4Y2JiYmNjYzg0NmI1Nik7XHJcblZpc3VhbFN0YXRlX2RiM2RkY2Q4ZWU1ZTRmYTZhYThjYmJiY2NjODQ2YjU2Lk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzI1MGM2ZDYwNjMzZDRiMDlhZjlmOTZmMzZjNjNkODk1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yOTAwZDA0OWRiMzI0MTExYWQyOGNiY2E4M2ZiMTI4YyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yOTAwZDA0OWRiMzI0MTExYWQyOGNiY2E4M2ZiMTI4YyxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfOWFkMWQ4N2Y0YTBjNDFlYjk0MGRhZGQ4OWU0NzBkZWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV85YWQxZDg3ZjRhMGM0MWViOTQwZGFkZDg5ZTQ3MGRlZS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzlhZDFkODdmNGEwYzQxZWI5NDBkYWRkODllNDcwZGVlLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yOTAwZDA0OWRiMzI0MTExYWQyOGNiY2E4M2ZiMTI4Yy5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfOWFkMWQ4N2Y0YTBjNDFlYjk0MGRhZGQ4OWU0NzBkZWUpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMjUwYzZkNjA2MzNkNGIwOWFmOWY5NmYzNmM2M2Q4OTUuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzI5MDBkMDQ5ZGIzMjQxMTFhZDI4Y2JjYTgzZmIxMjhjKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9kYjNkZGNkOGVlNWU0ZmE2YWE4Y2JiYmNjYzg0NmI1Ni5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8yNTBjNmQ2MDYzM2Q0YjA5YWY5Zjk2ZjM2YzYzZDg5NTtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfZmYxZDdiZGJmY2NkNDkzNWExNGQzYmNlZTI5YWQzNGMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlX2ZmMWQ3YmRiZmNjZDQ5MzVhMTRkM2JjZWUyOWFkMzRjKTtcclxuVmlzdWFsU3RhdGVfZmYxZDdiZGJmY2NkNDkzNWExNGQzYmNlZTI5YWQzNGMuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF8yZmVlNDJmNThkZTk0NzAwOTFkYzljYjZkNzdhMDBiNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTkwOWMyZjE0NzA4NDRmYzk4OTNhZWUwMmM4NDBiM2MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTkwOWMyZjE0NzA4NDRmYzk4OTNhZWUwMmM4NDBiM2MsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzNmNjdiNDE1NDFjMTQ3MGY4YzgxODVlZmIzZGE2ZjEyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfM2Y2N2I0MTU0MWMxNDcwZjhjODE4NWVmYjNkYTZmMTIuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8zZjY3YjQxNTQxYzE0NzBmOGM4MTg1ZWZiM2RhNmYxMi5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMTkwOWMyZjE0NzA4NDRmYzk4OTNhZWUwMmM4NDBiM2MuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzNmNjdiNDE1NDFjMTQ3MGY4YzgxODVlZmIzZGE2ZjEyKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzJmZWU0MmY1OGRlOTQ3MDA5MWRjOWNiNmQ3N2EwMGI0LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xOTA5YzJmMTQ3MDg0NGZjOTg5M2FlZTAyYzg0MGIzYyk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfZmYxZDdiZGJmY2NkNDkzNWExNGQzYmNlZTI5YWQzNGMuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfMmZlZTQyZjU4ZGU5NDcwMDkxZGM5Y2I2ZDc3YTAwYjQ7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzdhZmIzMmJlMDFjNTQ2YTc4NGE2YWJhODQ0ZTdhZWNhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfN2FmYjMyYmUwMWM1NDZhNzg0YTZhYmE4NDRlN2FlY2EpO1xyXG5WaXN1YWxTdGF0ZV83YWZiMzJiZTAxYzU0NmE3ODRhNmFiYTg0NGU3YWVjYS5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF8wZDMyYmRiYzYxYzU0YjEwYTE4YmI2ODJkN2E1Nzg3MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZDE5OTRlN2Q5MzZlNDc4M2JiMDFmMGE2OGE3YzEwYWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZDE5OTRlN2Q5MzZlNDc4M2JiMDFmMGE2OGE3YzEwYWMsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzRkNGQ1NTMxYjdjNjQwNTc4OTFkMDFjNmJiMmY2YmQxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNGQ0ZDU1MzFiN2M2NDA1Nzg5MWQwMWM2YmIyZjZiZDEuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV80ZDRkNTUzMWI3YzY0MDU3ODkxZDAxYzZiYjJmNmJkMS5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZDE5OTRlN2Q5MzZlNDc4M2JiMDFmMGE2OGE3YzEwYWMuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzRkNGQ1NTMxYjdjNjQwNTc4OTFkMDFjNmJiMmY2YmQxKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzBkMzJiZGJjNjFjNTRiMTBhMThiYjY4MmQ3YTU3ODcxLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19kMTk5NGU3ZDkzNmU0NzgzYmIwMWYwYTY4YTdjMTBhYyk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfN2FmYjMyYmUwMWM1NDZhNzg0YTZhYmE4NDRlN2FlY2EuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfMGQzMmJkYmM2MWM1NGIxMGExOGJiNjgyZDdhNTc4NzE7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF9mMmU1MTA4NTc1YTQ0MTlkODhhZWYxOWQ2ZjQwMDk4NC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzJiMTk1NTFkZDQ4NzRhZjNhMmYxMDk2M2RjYWI0ZjVkKTtcclxuVmlzdWFsU3RhdGVHcm91cF9mMmU1MTA4NTc1YTQ0MTlkODhhZWYxOWQ2ZjQwMDk4NC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2RiM2RkY2Q4ZWU1ZTRmYTZhYThjYmJiY2NjODQ2YjU2KTtcclxuVmlzdWFsU3RhdGVHcm91cF9mMmU1MTA4NTc1YTQ0MTlkODhhZWYxOWQ2ZjQwMDk4NC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2ZmMWQ3YmRiZmNjZDQ5MzVhMTRkM2JjZWUyOWFkMzRjKTtcclxuVmlzdWFsU3RhdGVHcm91cF9mMmU1MTA4NTc1YTQ0MTlkODhhZWYxOWQ2ZjQwMDk4NC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzdhZmIzMmJlMDFjNTQ2YTc4NGE2YWJhODQ0ZTdhZWNhKTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfZjJlNTEwODU3NWE0NDE5ZDg4YWVmMTlkNmY0MDA5ODQpO1xyXG5cclxudmFyIEJvcmRlcl81MTEyN2M0ZWZhZTU0YTFkYTdjOGFlMjkzMmNlMTc2NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfNTExMjdjNGVmYWU1NGExZGE3YzhhZTI5MzJjZTE3NjYpO1xyXG5Cb3JkZXJfNTExMjdjNGVmYWU1NGExZGE3YzhhZTI5MzJjZTE3NjYuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyXzUxMTI3YzRlZmFlNTRhMWRhN2M4YWUyOTMyY2UxNzY2LkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyX2FhNmIzZmU5YzVmYzRkZDVhNTE2NmUyNTY5NDRjNTQ1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfYWE2YjNmZTljNWZjNGRkNWE1MTY2ZTI1Njk0NGM1NDUpO1xyXG5Db250ZW50UHJlc2VudGVyX2FhNmIzZmU5YzVmYzRkZDVhNTE2NmUyNTY5NDRjNTQ1Lk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfZjY4YTBmMGQzYWI3NDViZjk1OWE1MTIzYWQ2ZTBiYTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZjY4YTBmMGQzYWI3NDViZjk1OWE1MTIzYWQ2ZTBiYTQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMjkyZDQ1MTM5MjgxNDRhMGE4ODM3ZDI2ZDlhMGIzOTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8yOTJkNDUxMzkyODE0NGEwYTg4MzdkMjZkOWEwYjM5MC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19mNjhhMGYwZDNhYjc0NWJmOTU5YTUxMjNhZDZlMGJhNC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzI5MmQ0NTEzOTI4MTQ0YTBhODgzN2QyNmQ5YTBiMzkwO1xyXG5cclxuXHJcbkJpbmRpbmdfZjY4YTBmMGQzYWI3NDViZjk1OWE1MTIzYWQ2ZTBiYTQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDljNmE0YjFlZTc5NDQ4ZjgwYzZlZmNkN2E1NzIyZTQ7XHJcblxyXG52YXIgQmluZGluZ19lZGMzN2E5NjAyZDA0MzM3YmEyZmRmOTYyZjBiZWZhZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lZGMzN2E5NjAyZDA0MzM3YmEyZmRmOTYyZjBiZWZhZS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfM2NmOGEyYzE2OTBhNGYzZWJiMDY4YzE5YzY1ZDUwOWYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8zY2Y4YTJjMTY5MGE0ZjNlYmIwNjhjMTljNjVkNTA5Zi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lZGMzN2E5NjAyZDA0MzM3YmEyZmRmOTYyZjBiZWZhZS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzNjZjhhMmMxNjkwYTRmM2ViYjA2OGMxOWM2NWQ1MDlmO1xyXG5cclxuXHJcbkJpbmRpbmdfZWRjMzdhOTYwMmQwNDMzN2JhMmZkZjk2MmYwYmVmYWUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDljNmE0YjFlZTc5NDQ4ZjgwYzZlZmNkN2E1NzIyZTQ7XHJcblxyXG52YXIgQmluZGluZ19lYzIyNTc4NDIxNTQ0MWI3OGY3YmY0OTQxNGQ2ZGFlNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lYzIyNTc4NDIxNTQ0MWI3OGY3YmY0OTQxNGQ2ZGFlNy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMWQ3MTNiYzdlYzc2NDRhYWIxNDVlNWRkMTQ0ZWNlM2YgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8xZDcxM2JjN2VjNzY0NGFhYjE0NWU1ZGQxNDRlY2UzZi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lYzIyNTc4NDIxNTQ0MWI3OGY3YmY0OTQxNGQ2ZGFlNy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzFkNzEzYmM3ZWM3NjQ0YWFiMTQ1ZTVkZDE0NGVjZTNmO1xyXG5cclxuXHJcbkJpbmRpbmdfZWMyMjU3ODQyMTU0NDFiNzhmN2JmNDk0MTRkNmRhZTcuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDljNmE0YjFlZTc5NDQ4ZjgwYzZlZmNkN2E1NzIyZTQ7XHJcblxyXG52YXIgQmluZGluZ19lYzcxOTJkM2RhNjg0YTkzYmQwOTE5ODZmNGQ1YTJmZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lYzcxOTJkM2RhNjg0YTkzYmQwOTE5ODZmNGQ1YTJmZi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzcxZjU1Y2Y5N2E4NTQyZWZhZDM4Mjg2NWVmMjZmNDVjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNzFmNTVjZjk3YTg1NDJlZmFkMzgyODY1ZWYyNmY0NWMuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZWM3MTkyZDNkYTY4NGE5M2JkMDkxOTg2ZjRkNWEyZmYuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV83MWY1NWNmOTdhODU0MmVmYWQzODI4NjVlZjI2ZjQ1YztcclxuXHJcblxyXG5CaW5kaW5nX2VjNzE5MmQzZGE2ODRhOTNiZDA5MTk4NmY0ZDVhMmZmLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzQ5YzZhNGIxZWU3OTQ0OGY4MGM2ZWZjZDdhNTcyMmU0O1xyXG5cclxudmFyIEJpbmRpbmdfMDllYWYxNGMyZjk1NDdkNzg3ZTEyMjM5YjRmY2I0NGQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMDllYWYxNGMyZjk1NDdkNzg3ZTEyMjM5YjRmY2I0NGQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZTAzMTdlZTAzYWE1NDQ0YTkwYjBkYTBiOTRmYTA5NWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9lMDMxN2VlMDNhYTU0NDRhOTBiMGRhMGI5NGZhMDk1ZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18wOWVhZjE0YzJmOTU0N2Q3ODdlMTIyMzliNGZjYjQ0ZC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2UwMzE3ZWUwM2FhNTQ0NGE5MGIwZGEwYjk0ZmEwOTVlO1xyXG5cclxuXHJcbkJpbmRpbmdfMDllYWYxNGMyZjk1NDdkNzg3ZTEyMjM5YjRmY2I0NGQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDljNmE0YjFlZTc5NDQ4ZjgwYzZlZmNkN2E1NzIyZTQ7XHJcblxyXG5cclxuQm9yZGVyXzUxMTI3YzRlZmFlNTRhMWRhN2M4YWUyOTMyY2UxNzY2LkNoaWxkID0gQ29udGVudFByZXNlbnRlcl9hYTZiM2ZlOWM1ZmM0ZGQ1YTUxNjZlMjU2OTQ0YzU0NTtcclxuXHJcbnZhciBCaW5kaW5nXzg5NTMzZjRlNTM2YjQxZDA4NGQ3ZjkwMzY4OWEzOWU1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzg5NTMzZjRlNTM2YjQxZDA4NGQ3ZjkwMzY4OWEzOWU1LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV85NjU5Y2M3ZDczZDY0MGNiOTU0OTg0M2RmYmQwZDZmNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzk2NTljYzdkNzNkNjQwY2I5NTQ5ODQzZGZiZDBkNmY3Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzg5NTMzZjRlNTM2YjQxZDA4NGQ3ZjkwMzY4OWEzOWU1LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfOTY1OWNjN2Q3M2Q2NDBjYjk1NDk4NDNkZmJkMGQ2Zjc7XHJcblxyXG5cclxuQmluZGluZ184OTUzM2Y0ZTUzNmI0MWQwODRkN2Y5MDM2ODlhMzllNS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV80OWM2YTRiMWVlNzk0NDhmODBjNmVmY2Q3YTU3MjJlNDtcclxuXHJcblxyXG5Cb3JkZXJfNGQ2OTAxMTc5YWMyNDZkMmFlYzlkMGVkYTJmZmU5ZTcuQ2hpbGQgPSBCb3JkZXJfNTExMjdjNGVmYWU1NGExZGE3YzhhZTI5MzJjZTE3NjY7XHJcblxyXG52YXIgQmluZGluZ180MzE1MTU5ODE5NjU0Yjc1YmU2ODhlMTZhNzA2MGQzNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ180MzE1MTU5ODE5NjU0Yjc1YmU2ODhlMTZhNzA2MGQzNy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfODA2OGUxNWI4MjRkNDcwZThiMWY3MzY4MjZiMmFhMGQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV84MDY4ZTE1YjgyNGQ0NzBlOGIxZjczNjgyNmIyYWEwZC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ180MzE1MTU5ODE5NjU0Yjc1YmU2ODhlMTZhNzA2MGQzNy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzgwNjhlMTViODI0ZDQ3MGU4YjFmNzM2ODI2YjJhYTBkO1xyXG5cclxuXHJcbkJpbmRpbmdfNDMxNTE1OTgxOTY1NGI3NWJlNjg4ZTE2YTcwNjBkMzcuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDljNmE0YjFlZTc5NDQ4ZjgwYzZlZmNkN2E1NzIyZTQ7XHJcblxyXG52YXIgQmluZGluZ19hOGQyN2RlMTRhYTk0NjNkYmY3NTUwZGFkZmQ5MTVlMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19hOGQyN2RlMTRhYTk0NjNkYmY3NTUwZGFkZmQ5MTVlMC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzI0YzcyNTdlNmJkZTQzODhiZDlhZjRmZGUxOTA0NDNiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMjRjNzI1N2U2YmRlNDM4OGJkOWFmNGZkZTE5MDQ0M2IuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYThkMjdkZTE0YWE5NDYzZGJmNzU1MGRhZGZkOTE1ZTAuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8yNGM3MjU3ZTZiZGU0Mzg4YmQ5YWY0ZmRlMTkwNDQzYjtcclxuXHJcblxyXG5CaW5kaW5nX2E4ZDI3ZGUxNGFhOTQ2M2RiZjc1NTBkYWRmZDkxNWUwLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzQ5YzZhNGIxZWU3OTQ0OGY4MGM2ZWZjZDdhNTcyMmU0O1xyXG5cclxudmFyIEJpbmRpbmdfY2ZiYmRhOTEzZDM0NDZiYTg2ODdkMGE0ZDRiMzg1NDcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfY2ZiYmRhOTEzZDM0NDZiYTg2ODdkMGE0ZDRiMzg1NDcuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYTkyNDQ5NDgzMWQ5NGU3ZWE2MGMzYmMxOGIyNjkyODAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9hOTI0NDk0ODMxZDk0ZTdlYTYwYzNiYzE4YjI2OTI4MC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jZmJiZGE5MTNkMzQ0NmJhODY4N2QwYTRkNGIzODU0Ny5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2E5MjQ0OTQ4MzFkOTRlN2VhNjBjM2JjMThiMjY5MjgwO1xyXG5cclxuXHJcbkJpbmRpbmdfY2ZiYmRhOTEzZDM0NDZiYTg2ODdkMGE0ZDRiMzg1NDcuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNDljNmE0YjFlZTc5NDQ4ZjgwYzZlZmNkN2E1NzIyZTQ7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfYWE2YjNmZTljNWZjNGRkNWE1MTY2ZTI1Njk0NGM1NDUuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ19mNjhhMGYwZDNhYjc0NWJmOTU5YTUxMjNhZDZlMGJhNCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYWE2YjNmZTljNWZjNGRkNWE1MTY2ZTI1Njk0NGM1NDUuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfZWRjMzdhOTYwMmQwNDMzN2JhMmZkZjk2MmYwYmVmYWUpO1xyXG5Db250ZW50UHJlc2VudGVyX2FhNmIzZmU5YzVmYzRkZDVhNTE2NmUyNTY5NDRjNTQ1LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ19lYzIyNTc4NDIxNTQ0MWI3OGY3YmY0OTQxNGQ2ZGFlNyk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYWE2YjNmZTljNWZjNGRkNWE1MTY2ZTI1Njk0NGM1NDUuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19lYzcxOTJkM2RhNjg0YTkzYmQwOTE5ODZmNGQ1YTJmZik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYWE2YjNmZTljNWZjNGRkNWE1MTY2ZTI1Njk0NGM1NDUuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfMDllYWYxNGMyZjk1NDdkNzg3ZTEyMjM5YjRmY2I0NGQpO1xyXG5Cb3JkZXJfNTExMjdjNGVmYWU1NGExZGE3YzhhZTI5MzJjZTE3NjYuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzg5NTMzZjRlNTM2YjQxZDA4NGQ3ZjkwMzY4OWEzOWU1KTtcclxuQm9yZGVyXzRkNjkwMTE3OWFjMjQ2ZDJhZWM5ZDBlZGEyZmZlOWU3LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ180MzE1MTU5ODE5NjU0Yjc1YmU2ODhlMTZhNzA2MGQzNyk7XHJcbkJvcmRlcl80ZDY5MDExNzlhYzI0NmQyYWVjOWQwZWRhMmZmZTllNy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nX2E4ZDI3ZGUxNGFhOTQ2M2RiZjc1NTBkYWRmZDkxNWUwKTtcclxuQm9yZGVyXzRkNjkwMTE3OWFjMjQ2ZDJhZWM5ZDBlZGEyZmZlOWU3LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nX2NmYmJkYTkxM2QzNDQ2YmE4Njg3ZDBhNGQ0YjM4NTQ3KTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzI5MDBkMDQ5ZGIzMjQxMTFhZDI4Y2JjYTgzZmIxMjhjLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2NmNDk3NTM5YWU5YjQ2ODViMWNmMTI3YTlhMWU4ZGNkLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfY2Y0OTc1MzlhZTliNDY4NWIxY2YxMjdhOWExZThkY2QsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9jZjQ5NzUzOWFlOWI0Njg1YjFjZjEyN2E5YTFlOGRjZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2NmNDk3NTM5YWU5YjQ2ODViMWNmMTI3YTlhMWU4ZGNkLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfY2Y0OTc1MzlhZTliNDY4NWIxY2YxMjdhOWExZThkY2QpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzI5MDBkMDQ5ZGIzMjQxMTFhZDI4Y2JjYTgzZmIxMjhjLCBCb3JkZXJfNTExMjdjNGVmYWU1NGExZGE3YzhhZTI5MzJjZTE3NjYpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5MDljMmYxNDcwODQ0ZmM5ODkzYWVlMDJjODQwYjNjLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5Xzc0ZGNiNTljOGFmMTQ0YmNiMTdkMDY3MGM1ODVlZTJlLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNzRkY2I1OWM4YWYxNDRiY2IxN2QwNjcwYzU4NWVlMmUsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV83NGRjYjU5YzhhZjE0NGJjYjE3ZDA2NzBjNTg1ZWUyZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5Xzc0ZGNiNTljOGFmMTQ0YmNiMTdkMDY3MGM1ODVlZTJlLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNzRkY2I1OWM4YWYxNDRiY2IxN2QwNjcwYzU4NWVlMmUpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzE5MDljMmYxNDcwODQ0ZmM5ODkzYWVlMDJjODQwYjNjLCBCb3JkZXJfNTExMjdjNGVmYWU1NGExZGE3YzhhZTI5MzJjZTE3NjYpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2QxOTk0ZTdkOTM2ZTQ3ODNiYjAxZjBhNjhhN2MxMGFjLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5Xzk2YWYxNjUxZWMxMzQwMjk5ZjNjNDk2OTE3NWM2Yzc0LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfOTZhZjE2NTFlYzEzNDAyOTlmM2M0OTY5MTc1YzZjNzQsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV85NmFmMTY1MWVjMTM0MDI5OWYzYzQ5NjkxNzVjNmM3NCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5Xzk2YWYxNjUxZWMxMzQwMjk5ZjNjNDk2OTE3NWM2Yzc0LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfOTZhZjE2NTFlYzEzNDAyOTlmM2M0OTY5MTc1YzZjNzQpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2QxOTk0ZTdkOTM2ZTQ3ODNiYjAxZjBhNjhhN2MxMGFjLCBCb3JkZXJfNTExMjdjNGVmYWU1NGExZGE3YzhhZTI5MzJjZTE3NjYpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV80OWM2YTRiMWVlNzk0NDhmODBjNmVmY2Q3YTU3MjJlNC5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfNGQ2OTAxMTc5YWMyNDZkMmFlYzlkMGVkYTJmZmU5ZTc7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlXzQ5YzZhNGIxZWU3OTQ0OGY4MGM2ZWZjZDdhNTcyMmU0O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV81NWRhZWRlNWIzMTI0ZmY1YjNmYzBhM2UzMmFjYTdkYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzU1ZGFlZGU1YjMxMjRmZjViM2ZjMGEzZTMyYWNhN2RiIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNTVkYWVkZTViMzEyNGZmNWIzZmMwYTNlMzJhY2E3ZGIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV81NWRhZWRlNWIzMTI0ZmY1YjNmYzBhM2UzMmFjYTdkYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfNTVkYWVkZTViMzEyNGZmNWIzZmMwYTNlMzJhY2E3ZGIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzVhZmRkZjRiNDE3MTQzZTM4ZGI3N2Y3NTFkNzk5MWNlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfNWFmZGRmNGI0MTcxNDNlMzhkYjc3Zjc1MWQ3OTkxY2UgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV81YWZkZGY0YjQxNzE0M2UzOGRiNzdmNzUxZDc5OTFjZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzVhZmRkZjRiNDE3MTQzZTM4ZGI3N2Y3NTFkNzk5MWNlIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV81YWZkZGY0YjQxNzE0M2UzOGRiNzdmNzUxZDc5OTFjZSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfN2QyYjM3OTJjYTBiNDE3MjhkMTE0ZTdhM2U2NzI0MWQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV83ZDJiMzc5MmNhMGI0MTcyOGQxMTRlN2EzZTY3MjQxZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzdkMmIzNzkyY2EwYjQxNzI4ZDExNGU3YTNlNjcyNDFkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfN2QyYjM3OTJjYTBiNDE3MjhkMTE0ZTdhM2U2NzI0MWQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzdkMmIzNzkyY2EwYjQxNzI4ZDExNGU3YTNlNjcyNDFkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UgSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzgzNGZkNDY3YjljMDRiM2I5MzVmODI1MjlhNzVhYmMxKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wgdGVtcGxhdGVPd25lcilcclxuICAgICAgICB7XHJcbnZhciB0ZW1wbGF0ZUluc3RhbmNlX2I1NmZlOWM4M2VjZTQxMTE4ZWYzNmY2Y2FjMWFhN2NiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2UoKTtcclxudGVtcGxhdGVJbnN0YW5jZV9iNTZmZTljODNlY2U0MTExOGVmMzZmNmNhYzFhYTdjYi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVPd25lcjtcclxudmFyIEJvcmRlcl8wYWQwNDZmMWUxZTE0MDgwYmI0NDE2OGUzY2ZmYzBiYiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJPdXRlckJvcmRlclwiLCBCb3JkZXJfMGFkMDQ2ZjFlMWUxNDA4MGJiNDQxNjhlM2NmZmMwYmIpO1xyXG5Cb3JkZXJfMGFkMDQ2ZjFlMWUxNDA4MGJiNDQxNjhlM2NmZmMwYmIuTmFtZSA9IFwiT3V0ZXJCb3JkZXJcIjtcclxuQm9yZGVyXzBhZDA0NmYxZTFlMTQwODBiYjQ0MTY4ZTNjZmZjMGJiLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBWaXN1YWxTdGF0ZUdyb3VwX2NjOTZjNTBhNmJkMTQ0MDhiNGZmYThmMjJmNzdiMTRmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlR3JvdXAoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb21tb25TdGF0ZXNcIiwgVmlzdWFsU3RhdGVHcm91cF9jYzk2YzUwYTZiZDE0NDA4YjRmZmE4ZjIyZjc3YjE0Zik7XHJcblZpc3VhbFN0YXRlR3JvdXBfY2M5NmM1MGE2YmQxNDQwOGI0ZmZhOGYyMmY3N2IxNGYuTmFtZSA9IFwiQ29tbW9uU3RhdGVzXCI7XHJcbnZhciBWaXN1YWxTdGF0ZV8yZWZmOWIwODI3YjE0ODI2YWI4ZTMxNTdmNjIyMGE1MCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk5vcm1hbFwiLCBWaXN1YWxTdGF0ZV8yZWZmOWIwODI3YjE0ODI2YWI4ZTMxNTdmNjIyMGE1MCk7XHJcblZpc3VhbFN0YXRlXzJlZmY5YjA4MjdiMTQ4MjZhYjhlMzE1N2Y2MjIwYTUwLk5hbWUgPSBcIk5vcm1hbFwiO1xyXG5cclxudmFyIFZpc3VhbFN0YXRlXzc5MDQ2NDY4NmM1ZjQwNDdhZDhlZWNmZTJhOGU4YWM1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUG9pbnRlck92ZXJcIiwgVmlzdWFsU3RhdGVfNzkwNDY0Njg2YzVmNDA0N2FkOGVlY2ZlMmE4ZThhYzUpO1xyXG5WaXN1YWxTdGF0ZV83OTA0NjQ2ODZjNWY0MDQ3YWQ4ZWVjZmUyYThlOGFjNS5OYW1lID0gXCJQb2ludGVyT3ZlclwiO1xyXG52YXIgU3Rvcnlib2FyZF8yMmI1YzNlZjFhYzQ0NmRkYmE5MDQ1ZDFiNzkwMDU2MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzRjYzA4ZWMwMWE1NDg5YjljZGI5NDViZWQ4Nzg0Y2QgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzRjYzA4ZWMwMWE1NDg5YjljZGI5NDViZWQ4Nzg0Y2QsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzY4MGIwYTEzNDNmOTRmMjBiYTQ3MDdhZjBmYmY2YmQwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNjgwYjBhMTM0M2Y5NGYyMGJhNDcwN2FmMGZiZjZiZDAuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82ODBiMGExMzQzZjk0ZjIwYmE0NzA3YWYwZmJmNmJkMC5WYWx1ZSA9IEBcIiMxMTAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNzRjYzA4ZWMwMWE1NDg5YjljZGI5NDViZWQ4Nzg0Y2QuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzY4MGIwYTEzNDNmOTRmMjBiYTQ3MDdhZjBmYmY2YmQwKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzIyYjVjM2VmMWFjNDQ2ZGRiYTkwNDVkMWI3OTAwNTYyLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183NGNjMDhlYzAxYTU0ODliOWNkYjk0NWJlZDg3ODRjZCk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNzkwNDY0Njg2YzVmNDA0N2FkOGVlY2ZlMmE4ZThhYzUuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfMjJiNWMzZWYxYWM0NDZkZGJhOTA0NWQxYjc5MDA1NjI7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzYwMTZlZTM3OTczNDQ3NDdhOGI1M2MxMDM0Nzc2NzM1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiUHJlc3NlZFwiLCBWaXN1YWxTdGF0ZV82MDE2ZWUzNzk3MzQ0NzQ3YThiNTNjMTAzNDc3NjczNSk7XHJcblZpc3VhbFN0YXRlXzYwMTZlZTM3OTczNDQ3NDdhOGI1M2MxMDM0Nzc2NzM1Lk5hbWUgPSBcIlByZXNzZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfYzQxMDVkMTAyNDcxNDUwZmI4MjkzZjM2NzJkMWY2NDQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzFkMzg3MWFjYzAwMzQ2YTE5ZGUxM2E4OWY5YTE3MDAwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzFkMzg3MWFjYzAwMzQ2YTE5ZGUxM2E4OWY5YTE3MDAwLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV81NzIwYjA4MDQ4ZTA0ODc3YTFkNGYxMmRhYjIwYmQxNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzU3MjBiMDgwNDhlMDQ4NzdhMWQ0ZjEyZGFiMjBiZDE0LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNTcyMGIwODA0OGUwNDg3N2ExZDRmMTJkYWIyMGJkMTQuVmFsdWUgPSBAXCIjMjIwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzFkMzg3MWFjYzAwMzQ2YTE5ZGUxM2E4OWY5YTE3MDAwLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV81NzIwYjA4MDQ4ZTA0ODc3YTFkNGYxMmRhYjIwYmQxNCk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9jNDEwNWQxMDI0NzE0NTBmYjgyOTNmMzY3MmQxZjY0NC5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfMWQzODcxYWNjMDAzNDZhMTlkZTEzYTg5ZjlhMTcwMDApO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzYwMTZlZTM3OTczNDQ3NDdhOGI1M2MxMDM0Nzc2NzM1LlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2M0MTA1ZDEwMjQ3MTQ1MGZiODI5M2YzNjcyZDFmNjQ0O1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV80NTIwYjA1NDY1NDg0MDEzYWUzMWE1YmRhM2MwNzEzZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkRpc2FibGVkXCIsIFZpc3VhbFN0YXRlXzQ1MjBiMDU0NjU0ODQwMTNhZTMxYTViZGEzYzA3MTNkKTtcclxuVmlzdWFsU3RhdGVfNDUyMGIwNTQ2NTQ4NDAxM2FlMzFhNWJkYTNjMDcxM2QuTmFtZSA9IFwiRGlzYWJsZWRcIjtcclxudmFyIFN0b3J5Ym9hcmRfYWIyNTcwNmRiYzgwNDYwZmE4MjIzOTAyYmExNDdkMDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2FmOTBiMzU0MDExNDQwZDhiMWFjZDgzYjI2M2NmNTEzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2FmOTBiMzU0MDExNDQwZDhiMWFjZDgzYjI2M2NmNTEzLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV81NjBlMzQ3MTkyMTA0OGQxYWZmZWI4NmNlZmIyMjY4MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzU2MGUzNDcxOTIxMDQ4ZDFhZmZlYjg2Y2VmYjIyNjgxLktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNTYwZTM0NzE5MjEwNDhkMWFmZmViODZjZWZiMjI2ODEuVmFsdWUgPSBAXCIjMzNGRkZGRkZcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2FmOTBiMzU0MDExNDQwZDhiMWFjZDgzYjI2M2NmNTEzLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV81NjBlMzQ3MTkyMTA0OGQxYWZmZWI4NmNlZmIyMjY4MSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF9hYjI1NzA2ZGJjODA0NjBmYTgyMjM5MDJiYTE0N2QwNi5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYWY5MGIzNTQwMTE0NDBkOGIxYWNkODNiMjYzY2Y1MTMpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzQ1MjBiMDU0NjU0ODQwMTNhZTMxYTViZGEzYzA3MTNkLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkX2FiMjU3MDZkYmM4MDQ2MGZhODIyMzkwMmJhMTQ3ZDA2O1xyXG5cclxuXHJcblZpc3VhbFN0YXRlR3JvdXBfY2M5NmM1MGE2YmQxNDQwOGI0ZmZhOGYyMmY3N2IxNGYuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV8yZWZmOWIwODI3YjE0ODI2YWI4ZTMxNTdmNjIyMGE1MCk7XHJcblZpc3VhbFN0YXRlR3JvdXBfY2M5NmM1MGE2YmQxNDQwOGI0ZmZhOGYyMmY3N2IxNGYuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV83OTA0NjQ2ODZjNWY0MDQ3YWQ4ZWVjZmUyYThlOGFjNSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfY2M5NmM1MGE2YmQxNDQwOGI0ZmZhOGYyMmY3N2IxNGYuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV82MDE2ZWUzNzk3MzQ0NzQ3YThiNTNjMTAzNDc3NjczNSk7XHJcblZpc3VhbFN0YXRlR3JvdXBfY2M5NmM1MGE2YmQxNDQwOGI0ZmZhOGYyMmY3N2IxNGYuU3RhdGVzLkFkZChWaXN1YWxTdGF0ZV80NTIwYjA1NDY1NDg0MDEzYWUzMWE1YmRhM2MwNzEzZCk7XHJcblxyXG5cclxudGVtcGxhdGVPd25lci5JTlRFUk5BTF9HZXRWaXN1YWxTdGF0ZUdyb3VwcygpLkFkZChWaXN1YWxTdGF0ZUdyb3VwX2NjOTZjNTBhNmJkMTQ0MDhiNGZmYThmMjJmNzdiMTRmKTtcclxuXHJcbnZhciBCb3JkZXJfOWY0MjM3ZDIxMjBjNDkyOGFmZmI0YzEzMDRiMzRlOTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiSW5uZXJCb3JkZXJcIiwgQm9yZGVyXzlmNDIzN2QyMTIwYzQ5MjhhZmZiNGMxMzA0YjM0ZTkxKTtcclxuQm9yZGVyXzlmNDIzN2QyMTIwYzQ5MjhhZmZiNGMxMzA0YjM0ZTkxLk5hbWUgPSBcIklubmVyQm9yZGVyXCI7XHJcbkJvcmRlcl85ZjQyMzdkMjEyMGM0OTI4YWZmYjRjMTMwNGIzNGU5MS5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgQ29udGVudFByZXNlbnRlcl8zNzcyZGYxN2RlODE0YjIyYWI0NTM0YjBhYWM3OWZjZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50UHJlc2VudGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29udGVudFByZXNlbnRlclwiLCBDb250ZW50UHJlc2VudGVyXzM3NzJkZjE3ZGU4MTRiMjJhYjQ1MzRiMGFhYzc5ZmNmKTtcclxuQ29udGVudFByZXNlbnRlcl8zNzcyZGYxN2RlODE0YjIyYWI0NTM0YjBhYWM3OWZjZi5OYW1lID0gXCJDb250ZW50UHJlc2VudGVyXCI7XHJcbnZhciBCaW5kaW5nX2YxNGE0NjMxYTgzNjRhNDg5NTVjNmY5NzgyZmVjOGY0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2YxNGE0NjMxYTgzNjRhNDg5NTVjNmY5NzgyZmVjOGY0LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRUZW1wbGF0ZVwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzRiM2M5ODJmN2UwNjQ0M2VhM2MwOTUyZDdlM2FkNTdmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNGIzYzk4MmY3ZTA2NDQzZWEzYzA5NTJkN2UzYWQ1N2YuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZjE0YTQ2MzFhODM2NGE0ODk1NWM2Zjk3ODJmZWM4ZjQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV80YjNjOTgyZjdlMDY0NDNlYTNjMDk1MmQ3ZTNhZDU3ZjtcclxuXHJcblxyXG5CaW5kaW5nX2YxNGE0NjMxYTgzNjRhNDg5NTVjNmY5NzgyZmVjOGY0LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2I1NmZlOWM4M2VjZTQxMTE4ZWYzNmY2Y2FjMWFhN2NiO1xyXG5cclxudmFyIEJpbmRpbmdfNWNmM2YzOGNjNGRhNDA4NzlhMmUzZTZjNmM2Y2FhNDQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNWNmM2YzOGNjNGRhNDA4NzlhMmUzZTZjNmM2Y2FhNDQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzM4YTc3OTVhNGJlNTRhZGZhNzk0YzU4YzU5NmU4NzA4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMzhhNzc5NWE0YmU1NGFkZmE3OTRjNThjNTk2ZTg3MDguTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNWNmM2YzOGNjNGRhNDA4NzlhMmUzZTZjNmM2Y2FhNDQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8zOGE3Nzk1YTRiZTU0YWRmYTc5NGM1OGM1OTZlODcwODtcclxuXHJcblxyXG5CaW5kaW5nXzVjZjNmMzhjYzRkYTQwODc5YTJlM2U2YzZjNmNhYTQ0LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2I1NmZlOWM4M2VjZTQxMTE4ZWYzNmY2Y2FjMWFhN2NiO1xyXG5cclxudmFyIEJpbmRpbmdfYTU3YzRjOTQ4NmZkNGFkMWJmMTAwZWU1M2IxZDdmZTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYTU3YzRjOTQ4NmZkNGFkMWJmMTAwZWU1M2IxZDdmZTQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiUGFkZGluZ1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzMyMjk1NzBhYzMwNzQ1MzY4YjQyZjQ3M2Y4ODMwMDhiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMzIyOTU3MGFjMzA3NDUzNjhiNDJmNDczZjg4MzAwOGIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYTU3YzRjOTQ4NmZkNGFkMWJmMTAwZWU1M2IxZDdmZTQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8zMjI5NTcwYWMzMDc0NTM2OGI0MmY0NzNmODgzMDA4YjtcclxuXHJcblxyXG5CaW5kaW5nX2E1N2M0Yzk0ODZmZDRhZDFiZjEwMGVlNTNiMWQ3ZmU0LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2I1NmZlOWM4M2VjZTQxMTE4ZWYzNmY2Y2FjMWFhN2NiO1xyXG5cclxudmFyIEJpbmRpbmdfZmU0NWU1YmY3M2M2NDE3YWEwODU3ZWNkYTNjZGZhNjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZmU0NWU1YmY3M2M2NDE3YWEwODU3ZWNkYTNjZGZhNjQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiSG9yaXpvbnRhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9iYTAyYzlhMDdiYmM0OWYwYTE2OGRhNzZmMzI2Mzk1NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2JhMDJjOWEwN2JiYzQ5ZjBhMTY4ZGE3NmYzMjYzOTU2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2ZlNDVlNWJmNzNjNjQxN2FhMDg1N2VjZGEzY2RmYTY0LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfYmEwMmM5YTA3YmJjNDlmMGExNjhkYTc2ZjMyNjM5NTY7XHJcblxyXG5cclxuQmluZGluZ19mZTQ1ZTViZjczYzY0MTdhYTA4NTdlY2RhM2NkZmE2NC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9iNTZmZTljODNlY2U0MTExOGVmMzZmNmNhYzFhYTdjYjtcclxuXHJcbnZhciBCaW5kaW5nX2ZiM2ZiMTQ1MjFmZDRiYWRiZWMxZDJjNjM5NzUyZWVkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2ZiM2ZiMTQ1MjFmZDRiYWRiZWMxZDJjNjM5NzUyZWVkLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlZlcnRpY2FsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzExODYzOWVjNDAzNjRlNzNhYzllM2M5MmU2Y2ZhYzE3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMTE4NjM5ZWM0MDM2NGU3M2FjOWUzYzkyZTZjZmFjMTcuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZmIzZmIxNDUyMWZkNGJhZGJlYzFkMmM2Mzk3NTJlZWQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8xMTg2MzllYzQwMzY0ZTczYWM5ZTNjOTJlNmNmYWMxNztcclxuXHJcblxyXG5CaW5kaW5nX2ZiM2ZiMTQ1MjFmZDRiYWRiZWMxZDJjNjM5NzUyZWVkLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2I1NmZlOWM4M2VjZTQxMTE4ZWYzNmY2Y2FjMWFhN2NiO1xyXG5cclxuXHJcbkJvcmRlcl85ZjQyMzdkMjEyMGM0OTI4YWZmYjRjMTMwNGIzNGU5MS5DaGlsZCA9IENvbnRlbnRQcmVzZW50ZXJfMzc3MmRmMTdkZTgxNGIyMmFiNDUzNGIwYWFjNzlmY2Y7XHJcblxyXG52YXIgQmluZGluZ19lYmZiYTBkOWM2NGQ0ZWM0OTg4MTM4YjlhNTQxYmU1ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lYmZiYTBkOWM2NGQ0ZWM0OTg4MTM4YjlhNTQxYmU1ZS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNzZjZjM0ZjA0Yjg3NDFiZmFmN2M3YmY4NjZlY2M3YmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV83NmNmMzRmMDRiODc0MWJmYWY3YzdiZjg2NmVjYzdiZC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lYmZiYTBkOWM2NGQ0ZWM0OTg4MTM4YjlhNTQxYmU1ZS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzc2Y2YzNGYwNGI4NzQxYmZhZjdjN2JmODY2ZWNjN2JkO1xyXG5cclxuXHJcbkJpbmRpbmdfZWJmYmEwZDljNjRkNGVjNDk4ODEzOGI5YTU0MWJlNWUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfYjU2ZmU5YzgzZWNlNDExMThlZjM2ZjZjYWMxYWE3Y2I7XHJcblxyXG5cclxuQm9yZGVyXzBhZDA0NmYxZTFlMTQwODBiYjQ0MTY4ZTNjZmZjMGJiLkNoaWxkID0gQm9yZGVyXzlmNDIzN2QyMTIwYzQ5MjhhZmZiNGMxMzA0YjM0ZTkxO1xyXG5cclxudmFyIEJpbmRpbmdfMjM3ZGNjNjgzZmYwNDQ0ODkwOGFhNzg3OTgzNjNjMjMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMjM3ZGNjNjgzZmYwNDQ0ODkwOGFhNzg3OTgzNjNjMjMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2ZmN2NjNmRiYTY1YTRlMTNhM2YxZTUzMDNjMWQyNjAzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZmY3Y2M2ZGJhNjVhNGUxM2EzZjFlNTMwM2MxZDI2MDMuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMjM3ZGNjNjgzZmYwNDQ0ODkwOGFhNzg3OTgzNjNjMjMuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9mZjdjYzZkYmE2NWE0ZTEzYTNmMWU1MzAzYzFkMjYwMztcclxuXHJcblxyXG5CaW5kaW5nXzIzN2RjYzY4M2ZmMDQ0NDg5MDhhYTc4Nzk4MzYzYzIzLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2I1NmZlOWM4M2VjZTQxMTE4ZWYzNmY2Y2FjMWFhN2NiO1xyXG5cclxudmFyIEJpbmRpbmdfNTg4YjhlNTI3YjJhNGQ0OTg3ZGQ4ODI3OTllYjY4ZWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNTg4YjhlNTI3YjJhNGQ0OTg3ZGQ4ODI3OTllYjY4ZWMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyQnJ1c2hcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV81NGM4ZTRmOTE2YTU0YTE4OTEyODI4NjQxZGU3YzM5OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzU0YzhlNGY5MTZhNTRhMTg5MTI4Mjg2NDFkZTdjMzk4Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzU4OGI4ZTUyN2IyYTRkNDk4N2RkODgyNzk5ZWI2OGVjLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNTRjOGU0ZjkxNmE1NGExODkxMjgyODY0MWRlN2MzOTg7XHJcblxyXG5cclxuQmluZGluZ181ODhiOGU1MjdiMmE0ZDQ5ODdkZDg4Mjc5OWViNjhlYy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV9iNTZmZTljODNlY2U0MTExOGVmMzZmNmNhYzFhYTdjYjtcclxuXHJcbnZhciBCaW5kaW5nXzc5YTkzODY3ZGJmYTRlZDNhNjE2YmExYWI0NWIyMDJkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzc5YTkzODY3ZGJmYTRlZDNhNjE2YmExYWI0NWIyMDJkLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlclRoaWNrbmVzc1wiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2U0NTAwMzFiMGNkYzQ2NTQ5NjhlZTljOTFlMDBkZjIzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZTQ1MDAzMWIwY2RjNDY1NDk2OGVlOWM5MWUwMGRmMjMuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfNzlhOTM4NjdkYmZhNGVkM2E2MTZiYTFhYjQ1YjIwMmQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9lNDUwMDMxYjBjZGM0NjU0OTY4ZWU5YzkxZTAwZGYyMztcclxuXHJcblxyXG5CaW5kaW5nXzc5YTkzODY3ZGJmYTRlZDNhNjE2YmExYWI0NWIyMDJkLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlX2I1NmZlOWM4M2VjZTQxMTE4ZWYzNmY2Y2FjMWFhN2NiO1xyXG5cclxuXHJcblxyXG5Db250ZW50UHJlc2VudGVyXzM3NzJkZjE3ZGU4MTRiMjJhYjQ1MzRiMGFhYzc5ZmNmLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFRlbXBsYXRlUHJvcGVydHksIEJpbmRpbmdfZjE0YTQ2MzFhODM2NGE0ODk1NWM2Zjk3ODJmZWM4ZjQpO1xyXG5Db250ZW50UHJlc2VudGVyXzM3NzJkZjE3ZGU4MTRiMjJhYjQ1MzRiMGFhYzc5ZmNmLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudENvbnRyb2wuQ29udGVudFByb3BlcnR5LCBCaW5kaW5nXzVjZjNmMzhjYzRkYTQwODc5YTJlM2U2YzZjNmNhYTQ0KTtcclxuQ29udGVudFByZXNlbnRlcl8zNzcyZGYxN2RlODE0YjIyYWI0NTM0YjBhYWM3OWZjZi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuTWFyZ2luUHJvcGVydHksIEJpbmRpbmdfYTU3YzRjOTQ4NmZkNGFkMWJmMTAwZWU1M2IxZDdmZTQpO1xyXG5Db250ZW50UHJlc2VudGVyXzM3NzJkZjE3ZGU4MTRiMjJhYjQ1MzRiMGFhYzc5ZmNmLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5Ib3Jpem9udGFsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfZmU0NWU1YmY3M2M2NDE3YWEwODU3ZWNkYTNjZGZhNjQpO1xyXG5Db250ZW50UHJlc2VudGVyXzM3NzJkZjE3ZGU4MTRiMjJhYjQ1MzRiMGFhYzc5ZmNmLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5WZXJ0aWNhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nX2ZiM2ZiMTQ1MjFmZDRiYWRiZWMxZDJjNjM5NzUyZWVkKTtcclxuQm9yZGVyXzlmNDIzN2QyMTIwYzQ5MjhhZmZiNGMxMzA0YjM0ZTkxLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19lYmZiYTBkOWM2NGQ0ZWM0OTg4MTM4YjlhNTQxYmU1ZSk7XHJcbkJvcmRlcl8wYWQwNDZmMWUxZTE0MDgwYmI0NDE2OGUzY2ZmYzBiYi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfMjM3ZGNjNjgzZmYwNDQ0ODkwOGFhNzg3OTgzNjNjMjMpO1xyXG5Cb3JkZXJfMGFkMDQ2ZjFlMWUxNDA4MGJiNDQxNjhlM2NmZmMwYmIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyQnJ1c2hQcm9wZXJ0eSwgQmluZGluZ181ODhiOGU1MjdiMmE0ZDQ5ODdkZDg4Mjc5OWViNjhlYyk7XHJcbkJvcmRlcl8wYWQwNDZmMWUxZTE0MDgwYmI0NDE2OGUzY2ZmYzBiYi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJUaGlja25lc3NQcm9wZXJ0eSwgQmluZGluZ183OWE5Mzg2N2RiZmE0ZWQzYTYxNmJhMWFiNDViMjAyZCk7XHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183NGNjMDhlYzAxYTU0ODliOWNkYjk0NWJlZDg3ODRjZCxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV81NWRhZWRlNWIzMTI0ZmY1YjNmYzBhM2UzMmFjYTdkYixcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzU1ZGFlZGU1YjMxMjRmZjViM2ZjMGEzZTMyYWNhN2RiLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNTVkYWVkZTViMzEyNGZmNWIzZmMwYTNlMzJhY2E3ZGIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV81NWRhZWRlNWIzMTI0ZmY1YjNmYzBhM2UzMmFjYTdkYixcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzU1ZGFlZGU1YjMxMjRmZjViM2ZjMGEzZTMyYWNhN2RiKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc183NGNjMDhlYzAxYTU0ODliOWNkYjk0NWJlZDg3ODRjZCwgQm9yZGVyXzlmNDIzN2QyMTIwYzQ5MjhhZmZiNGMxMzA0YjM0ZTkxKTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xZDM4NzFhY2MwMDM0NmExOWRlMTNhODlmOWExNzAwMCxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV81YWZkZGY0YjQxNzE0M2UzOGRiNzdmNzUxZDc5OTFjZSxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzVhZmRkZjRiNDE3MTQzZTM4ZGI3N2Y3NTFkNzk5MWNlLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfNWFmZGRmNGI0MTcxNDNlMzhkYjc3Zjc1MWQ3OTkxY2UsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV81YWZkZGY0YjQxNzE0M2UzOGRiNzdmNzUxZDc5OTFjZSxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzVhZmRkZjRiNDE3MTQzZTM4ZGI3N2Y3NTFkNzk5MWNlKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18xZDM4NzFhY2MwMDM0NmExOWRlMTNhODlmOWExNzAwMCwgQm9yZGVyXzlmNDIzN2QyMTIwYzQ5MjhhZmZiNGMxMzA0YjM0ZTkxKTtcclxuXHJcblxyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXRQcm9wZXJ0eShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hZjkwYjM1NDAxMTQ0MGQ4YjFhY2Q4M2IyNjNjZjUxMyxcclxuICAgIG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgXCJCYWNrZ3JvdW5kXCIsXHJcbiAgICAgICAgYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV83ZDJiMzc5MmNhMGI0MTcyOGQxMTRlN2EzZTY3MjQxZCxcclxuICAgICAgICBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzdkMmIzNzkyY2EwYjQxNzI4ZDExNGU3YTNlNjcyNDFkLFxyXG4gICAgICAgIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfN2QyYjM3OTJjYTBiNDE3MjhkMTE0ZTdhM2U2NzI0MWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV83ZDJiMzc5MmNhMGI0MTcyOGQxMTRlN2EzZTY3MjQxZCxcclxuICAgICAgICBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzdkMmIzNzkyY2EwYjQxNzI4ZDExNGU3YTNlNjcyNDFkKSk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19hZjkwYjM1NDAxMTQ0MGQ4YjFhY2Q4M2IyNjNjZjUxMywgQm9yZGVyXzlmNDIzN2QyMTIwYzQ5MjhhZmZiNGMxMzA0YjM0ZTkxKTtcclxuXHJcbnRlbXBsYXRlSW5zdGFuY2VfYjU2ZmU5YzgzZWNlNDExMThlZjM2ZjZjYWMxYWE3Y2IuVGVtcGxhdGVDb250ZW50ID0gQm9yZGVyXzBhZDA0NmYxZTFlMTQwODBiYjQ0MTY4ZTNjZmZjMGJiO1xyXG5yZXR1cm4gdGVtcGxhdGVJbnN0YW5jZV9iNTZmZTljODNlY2U0MTExOGVmMzZmNmNhYzFhYTdjYjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZTU3YTdiM2EyNWZmNDBmYmE0Y2I1ODcwMWM5MjhlZDIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lNTdhN2IzYTI1ZmY0MGZiYTRjYjU4NzAxYzkyOGVkMiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2U1N2E3YjNhMjVmZjQwZmJhNGNiNTg3MDFjOTI4ZWQyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZTU3YTdiM2EyNWZmNDBmYmE0Y2I1ODcwMWM5MjhlZDIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2U1N2E3YjNhMjVmZjQwZmJhNGNiNTg3MDFjOTI4ZWQyIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV84NzUzODYzZWQ4ZmQ0MjVmYjVjYjM0YzZiY2Q4NTkwZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5Xzg3NTM4NjNlZDhmZDQyNWZiNWNiMzRjNmJjZDg1OTBkIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfODc1Mzg2M2VkOGZkNDI1ZmI1Y2IzNGM2YmNkODU5MGQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV84NzUzODYzZWQ4ZmQ0MjVmYjVjYjM0YzZiY2Q4NTkwZCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfODc1Mzg2M2VkOGZkNDI1ZmI1Y2IzNGM2YmNkODU5MGQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzI2ZmMzMTdhZWM2MDQ2MjU4N2E2MDcwOTU1NzQ2MWMwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMjZmYzMxN2FlYzYwNDYyNTg3YTYwNzA5NTU3NDYxYzAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8yNmZjMzE3YWVjNjA0NjI1ODdhNjA3MDk1NTc0NjFjMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzI2ZmMzMTdhZWM2MDQ2MjU4N2E2MDcwOTU1NzQ2MWMwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8yNmZjMzE3YWVjNjA0NjI1ODdhNjA3MDk1NTc0NjFjMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlIEluc3RhbnRpYXRlX0NvbnRyb2xUZW1wbGF0ZV9iYTU3NjEzNmZiZTk0YTBiOWQwOTkwN2YyNjI2YTc0MChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sIHRlbXBsYXRlT3duZXIpXHJcbiAgICAgICAge1xyXG52YXIgdGVtcGxhdGVJbnN0YW5jZV8wMTMwOTU1YzBiMWI0MWUwYWFjYmQ0ZjYwZjU5MDJhZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UZW1wbGF0ZUluc3RhbmNlKCk7XHJcbnRlbXBsYXRlSW5zdGFuY2VfMDEzMDk1NWMwYjFiNDFlMGFhY2JkNGY2MGY1OTAyYWUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlT3duZXI7XHJcbnZhciBCb3JkZXJfMjNiMWI2ZTUxZjllNGZlNzkzZDJhYTkzMmVlZThmN2IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiT3V0ZXJCb3JkZXJcIiwgQm9yZGVyXzIzYjFiNmU1MWY5ZTRmZTc5M2QyYWE5MzJlZWU4ZjdiKTtcclxuQm9yZGVyXzIzYjFiNmU1MWY5ZTRmZTc5M2QyYWE5MzJlZWU4ZjdiLk5hbWUgPSBcIk91dGVyQm9yZGVyXCI7XHJcbkJvcmRlcl8yM2IxYjZlNTFmOWU0ZmU3OTNkMmFhOTMyZWVlOGY3Yi5Db3JuZXJSYWRpdXMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29ybmVyUmFkaXVzKDUpO1xyXG52YXIgVmlzdWFsU3RhdGVHcm91cF9kNzlmNWNiYmM3Mzk0M2M3OTJiNDNhNzZjY2YwNGVlMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZUdyb3VwKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiQ29tbW9uU3RhdGVzXCIsIFZpc3VhbFN0YXRlR3JvdXBfZDc5ZjVjYmJjNzM5NDNjNzkyYjQzYTc2Y2NmMDRlZTApO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2Q3OWY1Y2JiYzczOTQzYzc5MmI0M2E3NmNjZjA0ZWUwLk5hbWUgPSBcIkNvbW1vblN0YXRlc1wiO1xyXG52YXIgVmlzdWFsU3RhdGVfZGE5MThmZjgxMzk4NDgxMWFkNTRmYzI5ZGY4OTU3YWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJOb3JtYWxcIiwgVmlzdWFsU3RhdGVfZGE5MThmZjgxMzk4NDgxMWFkNTRmYzI5ZGY4OTU3YWUpO1xyXG5WaXN1YWxTdGF0ZV9kYTkxOGZmODEzOTg0ODExYWQ1NGZjMjlkZjg5NTdhZS5OYW1lID0gXCJOb3JtYWxcIjtcclxuXHJcbnZhciBWaXN1YWxTdGF0ZV82NWZmODAwM2RmZTI0NTZhYjk3YjAzNjEwNmQwODFmMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlBvaW50ZXJPdmVyXCIsIFZpc3VhbFN0YXRlXzY1ZmY4MDAzZGZlMjQ1NmFiOTdiMDM2MTA2ZDA4MWYxKTtcclxuVmlzdWFsU3RhdGVfNjVmZjgwMDNkZmUyNDU2YWI5N2IwMzYxMDZkMDgxZjEuTmFtZSA9IFwiUG9pbnRlck92ZXJcIjtcclxudmFyIFN0b3J5Ym9hcmRfOWFlMzU5NzQyYzFjNDA2MzljNGRhYTcxNDM5NjY2MGQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQoKTtcclxudmFyIE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2JmNTgyNWU0OGE3ZTQ0Y2M5YTZmOGExM2FmY2IwODkxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lcygpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXROYW1lKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2JmNTgyNWU0OGE3ZTQ0Y2M5YTZmOGExM2FmY2IwODkxLEBcIklubmVyQm9yZGVyXCIpO1xyXG52YXIgRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wNjEwZDdkNjk0ZmE0YmY1OWQ2OWE4NWRkZGZkNjA2OSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uRGlzY3JldGVPYmplY3RLZXlGcmFtZSgpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzA2MTBkN2Q2OTRmYTRiZjU5ZDY5YTg1ZGRkZmQ2MDY5LktleVRpbWUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uS2V5VGltZS5Gcm9tVGltZVNwYW4obmV3IGdsb2JhbDo6U3lzdGVtLlRpbWVTcGFuKDBMKSk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMDYxMGQ3ZDY5NGZhNGJmNTlkNjlhODVkZGRmZDYwNjkuVmFsdWUgPSBAXCIjMTEwMDAwMDBcIjtcclxuXHJcbk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2JmNTgyNWU0OGE3ZTQ0Y2M5YTZmOGExM2FmY2IwODkxLktleUZyYW1lcy5BZGQoRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wNjEwZDdkNjk0ZmE0YmY1OWQ2OWE4NWRkZGZkNjA2OSk7XHJcblxyXG5cclxuU3Rvcnlib2FyZF85YWUzNTk3NDJjMWM0MDYzOWM0ZGFhNzE0Mzk2NjYwZC5DaGlsZHJlbi5BZGQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYmY1ODI1ZTQ4YTdlNDRjYzlhNmY4YTEzYWZjYjA4OTEpO1xyXG5cclxuXHJcblZpc3VhbFN0YXRlXzY1ZmY4MDAzZGZlMjQ1NmFiOTdiMDM2MTA2ZDA4MWYxLlN0b3J5Ym9hcmQgPSBTdG9yeWJvYXJkXzlhZTM1OTc0MmMxYzQwNjM5YzRkYWE3MTQzOTY2NjBkO1xyXG5cclxuXHJcbnZhciBWaXN1YWxTdGF0ZV8wYzY1ZTA5NmZhNzg0YTE5Yjk5OTExNGZlODk3MDMxYSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WaXN1YWxTdGF0ZSgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIlByZXNzZWRcIiwgVmlzdWFsU3RhdGVfMGM2NWUwOTZmYTc4NGExOWI5OTkxMTRmZTg5NzAzMWEpO1xyXG5WaXN1YWxTdGF0ZV8wYzY1ZTA5NmZhNzg0YTE5Yjk5OTExNGZlODk3MDMxYS5OYW1lID0gXCJQcmVzc2VkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzZhZWQxZTQxZDNjYjRiOGI5ODA5ZTMwNDRlN2YxZWU3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185YzMwNzc5ZjQ5ZWE0ZmI3OTY4NjEyZjA0YjA5NGE3NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185YzMwNzc5ZjQ5ZWE0ZmI3OTY4NjEyZjA0YjA5NGE3NixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMzNkMTY0MDU0M2ExNDgwNmE3YzIzNDRhMGFhMjUwNzAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8zM2QxNjQwNTQzYTE0ODA2YTdjMjM0NGEwYWEyNTA3MC5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzMzZDE2NDA1NDNhMTQ4MDZhN2MyMzQ0YTBhYTI1MDcwLlZhbHVlID0gQFwiIzIyMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185YzMwNzc5ZjQ5ZWE0ZmI3OTY4NjEyZjA0YjA5NGE3Ni5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMzNkMTY0MDU0M2ExNDgwNmE3YzIzNDRhMGFhMjUwNzApO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfNmFlZDFlNDFkM2NiNGI4Yjk4MDllMzA0NGU3ZjFlZTcuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzljMzA3NzlmNDllYTRmYjc5Njg2MTJmMDRiMDk0YTc2KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV8wYzY1ZTA5NmZhNzg0YTE5Yjk5OTExNGZlODk3MDMxYS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF82YWVkMWU0MWQzY2I0YjhiOTgwOWUzMDQ0ZTdmMWVlNztcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfNzcwZWM4ZmYwNmRlNGRjMWJjZTc1MGVmYzUwNTAzNWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJEaXNhYmxlZFwiLCBWaXN1YWxTdGF0ZV83NzBlYzhmZjA2ZGU0ZGMxYmNlNzUwZWZjNTA1MDM1ZCk7XHJcblZpc3VhbFN0YXRlXzc3MGVjOGZmMDZkZTRkYzFiY2U3NTBlZmM1MDUwMzVkLk5hbWUgPSBcIkRpc2FibGVkXCI7XHJcbnZhciBTdG9yeWJvYXJkXzBjZDQ5NzY0OTJiOTRmYTBhMGM1MTVkYmFlNmI1Y2RlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZjNlYjk5NWI5ZjM0NTAwOTgyMDhhZTYxYjAyNDdmNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZjNlYjk5NWI5ZjM0NTAwOTgyMDhhZTYxYjAyNDdmNCxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZWJhNGE4MTQ2ZjgxNGY4MWJmZmM4M2IwNWQyYzk4MjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9lYmE0YTgxNDZmODE0ZjgxYmZmYzgzYjA1ZDJjOTgyMS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2ViYTRhODE0NmY4MTRmODFiZmZjODNiMDVkMmM5ODIxLlZhbHVlID0gQFwiIzMzRkZGRkZGXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185ZjNlYjk5NWI5ZjM0NTAwOTgyMDhhZTYxYjAyNDdmNC5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZWJhNGE4MTQ2ZjgxNGY4MWJmZmM4M2IwNWQyYzk4MjEpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMGNkNDk3NjQ5MmI5NGZhMGEwYzUxNWRiYWU2YjVjZGUuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzlmM2ViOTk1YjlmMzQ1MDA5ODIwOGFlNjFiMDI0N2Y0KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV83NzBlYzhmZjA2ZGU0ZGMxYmNlNzUwZWZjNTA1MDM1ZC5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8wY2Q0OTc2NDkyYjk0ZmEwYTBjNTE1ZGJhZTZiNWNkZTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZUdyb3VwX2Q3OWY1Y2JiYzczOTQzYzc5MmI0M2E3NmNjZjA0ZWUwLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfZGE5MThmZjgxMzk4NDgxMWFkNTRmYzI5ZGY4OTU3YWUpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2Q3OWY1Y2JiYzczOTQzYzc5MmI0M2E3NmNjZjA0ZWUwLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNjVmZjgwMDNkZmUyNDU2YWI5N2IwMzYxMDZkMDgxZjEpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2Q3OWY1Y2JiYzczOTQzYzc5MmI0M2E3NmNjZjA0ZWUwLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfMGM2NWUwOTZmYTc4NGExOWI5OTkxMTRmZTg5NzAzMWEpO1xyXG5WaXN1YWxTdGF0ZUdyb3VwX2Q3OWY1Y2JiYzczOTQzYzc5MmI0M2E3NmNjZjA0ZWUwLlN0YXRlcy5BZGQoVmlzdWFsU3RhdGVfNzcwZWM4ZmYwNmRlNGRjMWJjZTc1MGVmYzUwNTAzNWQpO1xyXG5cclxuXHJcbnRlbXBsYXRlT3duZXIuSU5URVJOQUxfR2V0VmlzdWFsU3RhdGVHcm91cHMoKS5BZGQoVmlzdWFsU3RhdGVHcm91cF9kNzlmNWNiYmM3Mzk0M2M3OTJiNDNhNzZjY2YwNGVlMCk7XHJcblxyXG52YXIgQm9yZGVyXzdkMDA5MDBkZmRjZjRiNjFiOTgwYzNhMWYyYTFlMDM2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIklubmVyQm9yZGVyXCIsIEJvcmRlcl83ZDAwOTAwZGZkY2Y0YjYxYjk4MGMzYTFmMmExZTAzNik7XHJcbkJvcmRlcl83ZDAwOTAwZGZkY2Y0YjYxYjk4MGMzYTFmMmExZTAzNi5OYW1lID0gXCJJbm5lckJvcmRlclwiO1xyXG5Cb3JkZXJfN2QwMDkwMGRmZGNmNGI2MWI5ODBjM2ExZjJhMWUwMzYuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIENvbnRlbnRQcmVzZW50ZXJfNGFhYmI3ZmVjYmM5NDU2NmE5NjA5ZDM4MDRkYWFjOTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udGVudFByZXNlbnRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbnRlbnRQcmVzZW50ZXJcIiwgQ29udGVudFByZXNlbnRlcl80YWFiYjdmZWNiYzk0NTY2YTk2MDlkMzgwNGRhYWM5MCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNGFhYmI3ZmVjYmM5NDU2NmE5NjA5ZDM4MDRkYWFjOTAuTmFtZSA9IFwiQ29udGVudFByZXNlbnRlclwiO1xyXG52YXIgQmluZGluZ18xNGE1MDg4MjQ2MDM0ODJmODJiMjA5ZGVkYWNkZDQ3NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18xNGE1MDg4MjQ2MDM0ODJmODJiMjA5ZGVkYWNkZDQ3Ni5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50VGVtcGxhdGVcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV80MmQzZjhjZTczZjM0ZmQyOWFjMmI3ODc1NWNkNTI5ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzQyZDNmOGNlNzNmMzRmZDI5YWMyYjc4NzU1Y2Q1MjllLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzE0YTUwODgyNDYwMzQ4MmY4MmIyMDlkZWRhY2RkNDc2LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNDJkM2Y4Y2U3M2YzNGZkMjlhYzJiNzg3NTVjZDUyOWU7XHJcblxyXG5cclxuQmluZGluZ18xNGE1MDg4MjQ2MDM0ODJmODJiMjA5ZGVkYWNkZDQ3Ni5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wMTMwOTU1YzBiMWI0MWUwYWFjYmQ0ZjYwZjU5MDJhZTtcclxuXHJcbnZhciBCaW5kaW5nXzRhMDJkNGQ2NGEwMjQzN2ZhNDkwODFiYjQ3ZDJjYjE4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzRhMDJkNGQ2NGEwMjQzN2ZhNDkwODFiYjQ3ZDJjYjE4LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkNvbnRlbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV80MjNkNDBiMDQxZTg0N2IwYThjNThlMTlkODVhMzFhNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzQyM2Q0MGIwNDFlODQ3YjBhOGM1OGUxOWQ4NWEzMWE1Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzRhMDJkNGQ2NGEwMjQzN2ZhNDkwODFiYjQ3ZDJjYjE4LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNDIzZDQwYjA0MWU4NDdiMGE4YzU4ZTE5ZDg1YTMxYTU7XHJcblxyXG5cclxuQmluZGluZ180YTAyZDRkNjRhMDI0MzdmYTQ5MDgxYmI0N2QyY2IxOC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wMTMwOTU1YzBiMWI0MWUwYWFjYmQ0ZjYwZjU5MDJhZTtcclxuXHJcbnZhciBCaW5kaW5nX2Q2NmY0ZjljOGQ5NTQzNDJiNGRmYzAzOGRhOTAzZDFlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2Q2NmY0ZjljOGQ5NTQzNDJiNGRmYzAzOGRhOTAzZDFlLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIlBhZGRpbmdcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9mOWEzNTE4YWExOWI0OWU2OWYzMWQyZTFjYTJhMzAyNSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2Y5YTM1MThhYTE5YjQ5ZTY5ZjMxZDJlMWNhMmEzMDI1Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2Q2NmY0ZjljOGQ5NTQzNDJiNGRmYzAzOGRhOTAzZDFlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZjlhMzUxOGFhMTliNDllNjlmMzFkMmUxY2EyYTMwMjU7XHJcblxyXG5cclxuQmluZGluZ19kNjZmNGY5YzhkOTU0MzQyYjRkZmMwMzhkYTkwM2QxZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wMTMwOTU1YzBiMWI0MWUwYWFjYmQ0ZjYwZjU5MDJhZTtcclxuXHJcbnZhciBCaW5kaW5nXzFiMzJiMTRiYzAwNzRiNmU5YTFjMzZjMGQzODMwODI5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzFiMzJiMTRiYzAwNzRiNmU5YTFjMzZjMGQzODMwODI5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkhvcml6b250YWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZGQzZTZjZDJhM2Y0NDBkM2E0NzhjNTgyMGRkMTc1OWEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kZDNlNmNkMmEzZjQ0MGQzYTQ3OGM1ODIwZGQxNzU5YS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18xYjMyYjE0YmMwMDc0YjZlOWExYzM2YzBkMzgzMDgyOS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2RkM2U2Y2QyYTNmNDQwZDNhNDc4YzU4MjBkZDE3NTlhO1xyXG5cclxuXHJcbkJpbmRpbmdfMWIzMmIxNGJjMDA3NGI2ZTlhMWMzNmMwZDM4MzA4MjkuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMDEzMDk1NWMwYjFiNDFlMGFhY2JkNGY2MGY1OTAyYWU7XHJcblxyXG52YXIgQmluZGluZ18wYzIwOTVjNDkxMmQ0OWMyYTE3ZDAzZGMzNGQwMDQxMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18wYzIwOTVjNDkxMmQ0OWMyYTE3ZDAzZGMzNGQwMDQxMi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJWZXJ0aWNhbENvbnRlbnRBbGlnbm1lbnRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV83NmI0NDlkMzNkNDA0ZDRhYmE5ODBjZmQ3OTIyMjMxNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzc2YjQ0OWQzM2Q0MDRkNGFiYTk4MGNmZDc5MjIyMzE2Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzBjMjA5NWM0OTEyZDQ5YzJhMTdkMDNkYzM0ZDAwNDEyLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNzZiNDQ5ZDMzZDQwNGQ0YWJhOTgwY2ZkNzkyMjIzMTY7XHJcblxyXG5cclxuQmluZGluZ18wYzIwOTVjNDkxMmQ0OWMyYTE3ZDAzZGMzNGQwMDQxMi5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wMTMwOTU1YzBiMWI0MWUwYWFjYmQ0ZjYwZjU5MDJhZTtcclxuXHJcblxyXG5Cb3JkZXJfN2QwMDkwMGRmZGNmNGI2MWI5ODBjM2ExZjJhMWUwMzYuQ2hpbGQgPSBDb250ZW50UHJlc2VudGVyXzRhYWJiN2ZlY2JjOTQ1NjZhOTYwOWQzODA0ZGFhYzkwO1xyXG5cclxudmFyIEJpbmRpbmdfMGY1YTQ0NTJhNWMxNDI3Mjg5OWQ4MmE4NTYzZWNlYTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMGY1YTQ0NTJhNWMxNDI3Mjg5OWQ4MmE4NTYzZWNlYTIuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQmFja2dyb3VuZFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzlhYzhiZjFhZjlkZDQ0OGZiMGQwOGMwZGM5NThjN2U0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfOWFjOGJmMWFmOWRkNDQ4ZmIwZDA4YzBkYzk1OGM3ZTQuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMGY1YTQ0NTJhNWMxNDI3Mjg5OWQ4MmE4NTYzZWNlYTIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV85YWM4YmYxYWY5ZGQ0NDhmYjBkMDhjMGRjOTU4YzdlNDtcclxuXHJcblxyXG5CaW5kaW5nXzBmNWE0NDUyYTVjMTQyNzI4OTlkODJhODU2M2VjZWEyLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzAxMzA5NTVjMGIxYjQxZTBhYWNiZDRmNjBmNTkwMmFlO1xyXG5cclxuXHJcbkJvcmRlcl8yM2IxYjZlNTFmOWU0ZmU3OTNkMmFhOTMyZWVlOGY3Yi5DaGlsZCA9IEJvcmRlcl83ZDAwOTAwZGZkY2Y0YjYxYjk4MGMzYTFmMmExZTAzNjtcclxuXHJcbnZhciBCaW5kaW5nXzQ5ZGU5OTgzMjIwMzRhM2I4NmYwMDcwZDBiODViY2NlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzQ5ZGU5OTgzMjIwMzRhM2I4NmYwMDcwZDBiODViY2NlLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV9lYjE1YjlhZDQwNTY0NmIxYmY4YTkzMWIwZTgzNTUzZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlX2ViMTViOWFkNDA1NjQ2YjFiZjhhOTMxYjBlODM1NTNlLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzQ5ZGU5OTgzMjIwMzRhM2I4NmYwMDcwZDBiODViY2NlLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfZWIxNWI5YWQ0MDU2NDZiMWJmOGE5MzFiMGU4MzU1M2U7XHJcblxyXG5cclxuQmluZGluZ180OWRlOTk4MzIyMDM0YTNiODZmMDA3MGQwYjg1YmNjZS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wMTMwOTU1YzBiMWI0MWUwYWFjYmQ0ZjYwZjU5MDJhZTtcclxuXHJcbnZhciBCaW5kaW5nX2I3OGI5NzU0YjQxYTQ5MWFiNTkyMTNlMGZkNmFhNDdiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2I3OGI5NzU0YjQxYTQ5MWFiNTkyMTNlMGZkNmFhNDdiLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJvcmRlckJydXNoXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMjQwNDJlZGEwMzg4NDIyY2E0ZjgwMjI2ZTQyYzVhOTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8yNDA0MmVkYTAzODg0MjJjYTRmODAyMjZlNDJjNWE5Ny5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19iNzhiOTc1NGI0MWE0OTFhYjU5MjEzZTBmZDZhYTQ3Yi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzI0MDQyZWRhMDM4ODQyMmNhNGY4MDIyNmU0MmM1YTk3O1xyXG5cclxuXHJcbkJpbmRpbmdfYjc4Yjk3NTRiNDFhNDkxYWI1OTIxM2UwZmQ2YWE0N2IuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfMDEzMDk1NWMwYjFiNDFlMGFhY2JkNGY2MGY1OTAyYWU7XHJcblxyXG52YXIgQmluZGluZ183NTQ3NGIwNjAzYTA0ZGE3ODUzZDFjZTY3YTNkNWMzMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ183NTQ3NGIwNjAzYTA0ZGE3ODUzZDFjZTY3YTNkNWMzMC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJUaGlja25lc3NcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV83YmI5MjA1NDMzY2Q0ZWI1YjRjM2Y2ZjdjMjQ1MzVkZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzdiYjkyMDU0MzNjZDRlYjViNGMzZjZmN2MyNDUzNWRlLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzc1NDc0YjA2MDNhMDRkYTc4NTNkMWNlNjdhM2Q1YzMwLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfN2JiOTIwNTQzM2NkNGViNWI0YzNmNmY3YzI0NTM1ZGU7XHJcblxyXG5cclxuQmluZGluZ183NTQ3NGIwNjAzYTA0ZGE3ODUzZDFjZTY3YTNkNWMzMC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV8wMTMwOTU1YzBiMWI0MWUwYWFjYmQ0ZjYwZjU5MDJhZTtcclxuXHJcblxyXG5cclxuQ29udGVudFByZXNlbnRlcl80YWFiYjdmZWNiYzk0NTY2YTk2MDlkMzgwNGRhYWM5MC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRUZW1wbGF0ZVByb3BlcnR5LCBCaW5kaW5nXzE0YTUwODgyNDYwMzQ4MmY4MmIyMDlkZWRhY2RkNDc2KTtcclxuQ29udGVudFByZXNlbnRlcl80YWFiYjdmZWNiYzk0NTY2YTk2MDlkMzgwNGRhYWM5MC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRDb250cm9sLkNvbnRlbnRQcm9wZXJ0eSwgQmluZGluZ180YTAyZDRkNjRhMDI0MzdmYTQ5MDgxYmI0N2QyY2IxOCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfNGFhYmI3ZmVjYmM5NDU2NmE5NjA5ZDM4MDRkYWFjOTAuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lk1hcmdpblByb3BlcnR5LCBCaW5kaW5nX2Q2NmY0ZjljOGQ5NTQzNDJiNGRmYzAzOGRhOTAzZDFlKTtcclxuQ29udGVudFByZXNlbnRlcl80YWFiYjdmZWNiYzk0NTY2YTk2MDlkMzgwNGRhYWM5MC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuSG9yaXpvbnRhbEFsaWdubWVudFByb3BlcnR5LCBCaW5kaW5nXzFiMzJiMTRiYzAwNzRiNmU5YTFjMzZjMGQzODMwODI5KTtcclxuQ29udGVudFByZXNlbnRlcl80YWFiYjdmZWNiYzk0NTY2YTk2MDlkMzgwNGRhYWM5MC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkZyYW1ld29ya0VsZW1lbnQuVmVydGljYWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ18wYzIwOTVjNDkxMmQ0OWMyYTE3ZDAzZGMzNGQwMDQxMik7XHJcbkJvcmRlcl83ZDAwOTAwZGZkY2Y0YjYxYjk4MGMzYTFmMmExZTAzNi5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5CYWNrZ3JvdW5kUHJvcGVydHksIEJpbmRpbmdfMGY1YTQ0NTJhNWMxNDI3Mjg5OWQ4MmE4NTYzZWNlYTIpO1xyXG5Cb3JkZXJfMjNiMWI2ZTUxZjllNGZlNzkzZDJhYTkzMmVlZThmN2IuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzQ5ZGU5OTgzMjIwMzRhM2I4NmYwMDcwZDBiODViY2NlKTtcclxuQm9yZGVyXzIzYjFiNmU1MWY5ZTRmZTc5M2QyYWE5MzJlZWU4ZjdiLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlckJydXNoUHJvcGVydHksIEJpbmRpbmdfYjc4Yjk3NTRiNDFhNDkxYWI1OTIxM2UwZmQ2YWE0N2IpO1xyXG5Cb3JkZXJfMjNiMWI2ZTUxZjllNGZlNzkzZDJhYTkzMmVlZThmN2IuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQm9yZGVyVGhpY2tuZXNzUHJvcGVydHksIEJpbmRpbmdfNzU0NzRiMDYwM2EwNGRhNzg1M2QxY2U2N2EzZDVjMzApO1xyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYmY1ODI1ZTQ4YTdlNDRjYzlhNmY4YTEzYWZjYjA4OTEsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZTU3YTdiM2EyNWZmNDBmYmE0Y2I1ODcwMWM5MjhlZDIsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lNTdhN2IzYTI1ZmY0MGZiYTRjYjU4NzAxYzkyOGVkMixcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2U1N2E3YjNhMjVmZjQwZmJhNGNiNTg3MDFjOTI4ZWQyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZTU3YTdiM2EyNWZmNDBmYmE0Y2I1ODcwMWM5MjhlZDIsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9lNTdhN2IzYTI1ZmY0MGZiYTRjYjU4NzAxYzkyOGVkMikpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfYmY1ODI1ZTQ4YTdlNDRjYzlhNmY4YTEzYWZjYjA4OTEsIEJvcmRlcl83ZDAwOTAwZGZkY2Y0YjYxYjk4MGMzYTFmMmExZTAzNik7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWMzMDc3OWY0OWVhNGZiNzk2ODYxMmYwNGIwOTRhNzYsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfODc1Mzg2M2VkOGZkNDI1ZmI1Y2IzNGM2YmNkODU5MGQsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV84NzUzODYzZWQ4ZmQ0MjVmYjVjYjM0YzZiY2Q4NTkwZCxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzg3NTM4NjNlZDhmZDQyNWZiNWNiMzRjNmJjZDg1OTBkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfODc1Mzg2M2VkOGZkNDI1ZmI1Y2IzNGM2YmNkODU5MGQsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV84NzUzODYzZWQ4ZmQ0MjVmYjVjYjM0YzZiY2Q4NTkwZCkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWMzMDc3OWY0OWVhNGZiNzk2ODYxMmYwNGIwOTRhNzYsIEJvcmRlcl83ZDAwOTAwZGZkY2Y0YjYxYjk4MGMzYTFmMmExZTAzNik7XHJcblxyXG5cclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0UHJvcGVydHkoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWYzZWI5OTViOWYzNDUwMDk4MjA4YWU2MWIwMjQ3ZjQsXHJcbiAgICBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiQmFja2dyb3VuZFwiLFxyXG4gICAgICAgIGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfMjZmYzMxN2FlYzYwNDYyNTg3YTYwNzA5NTU3NDYxYzAsXHJcbiAgICAgICAgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8yNmZjMzE3YWVjNjA0NjI1ODdhNjA3MDk1NTc0NjFjMCxcclxuICAgICAgICBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5XzI2ZmMzMTdhZWM2MDQ2MjU4N2E2MDcwOTU1NzQ2MWMwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfMjZmYzMxN2FlYzYwNDYyNTg3YTYwNzA5NTU3NDYxYzAsXHJcbiAgICAgICAgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8yNmZjMzE3YWVjNjA0NjI1ODdhNjA3MDk1NTc0NjFjMCkpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZC5TZXRUYXJnZXQoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfOWYzZWI5OTViOWYzNDUwMDk4MjA4YWU2MWIwMjQ3ZjQsIEJvcmRlcl83ZDAwOTAwZGZkY2Y0YjYxYjk4MGMzYTFmMmExZTAzNik7XHJcblxyXG50ZW1wbGF0ZUluc3RhbmNlXzAxMzA5NTVjMGIxYjQxZTBhYWNiZDRmNjBmNTkwMmFlLlRlbXBsYXRlQ29udGVudCA9IEJvcmRlcl8yM2IxYjZlNTFmOWU0ZmU3OTNkMmFhOTMyZWVlOGY3YjtcclxucmV0dXJuIHRlbXBsYXRlSW5zdGFuY2VfMDEzMDk1NWMwYjFiNDFlMGFhY2JkNGY2MGY1OTAyYWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzExNDYzYTAzMmU5YzRhNjliN2NlMDM1YTZmNzBiMmEwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMTE0NjNhMDMyZTljNGE2OWI3Y2UwMzVhNmY3MGIyYTAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8xMTQ2M2EwMzJlOWM0YTY5YjdjZTAzNWE2ZjcwYjJhMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzExNDYzYTAzMmU5YzRhNjliN2NlMDM1YTZmNzBiMmEwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8xMTQ2M2EwMzJlOWM0YTY5YjdjZTAzNWE2ZjcwYjJhMCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfOTgxZmZhZTgzZjFjNGE0MWJhZTk4NzQ5NWI1MGQzNDYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV85ODFmZmFlODNmMWM0YTQxYmFlOTg3NDk1YjUwZDM0NiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzk4MWZmYWU4M2YxYzRhNDFiYWU5ODc0OTViNTBkMzQ2IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfOTgxZmZhZTgzZjFjNGE0MWJhZTk4NzQ5NWI1MGQzNDYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5Xzk4MWZmYWU4M2YxYzRhNDFiYWU5ODc0OTViNTBkMzQ2IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9lYTcyZDczMDRjNzk0MDJmOWIyNzJhZTlkZWRmODhkNiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2VhNzJkNzMwNGM3OTQwMmY5YjI3MmFlOWRlZGY4OGQ2IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfZWE3MmQ3MzA0Yzc5NDAyZjliMjcyYWU5ZGVkZjg4ZDYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9lYTcyZDczMDRjNzk0MDJmOWIyNzJhZTlkZWRmODhkNiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfZWE3MmQ3MzA0Yzc5NDAyZjliMjcyYWU5ZGVkZjg4ZDYgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfNjA4MmU3NDNlNmI2NGViYzliNzg2ZjIxOTM0ZDgyMzcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfNGYxOWEwNzFkNGI3NGQ1YjlhYTViZDhlODEwNTY4OWMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlXzRmMTlhMDcxZDRiNzRkNWI5YWE1YmQ4ZTgxMDU2ODljLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyXzk4Zjk1NDg5OTQ5MzQ2ODI5NjdiNTkzMTY1NzU1Yzk5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl85OGY5NTQ4OTk0OTM0NjgyOTY3YjU5MzE2NTc1NWM5OSk7XHJcbkJvcmRlcl85OGY5NTQ4OTk0OTM0NjgyOTY3YjU5MzE2NTc1NWM5OS5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfOThmOTU0ODk5NDkzNDY4Mjk2N2I1OTMxNjU3NTVjOTkuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfZjBmZGFmMTQ4OGUyNGE0MmJiMWRiNzdlZTE4ZDA2ZGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwX2YwZmRhZjE0ODhlMjRhNDJiYjFkYjc3ZWUxOGQwNmRlKTtcclxuVmlzdWFsU3RhdGVHcm91cF9mMGZkYWYxNDg4ZTI0YTQyYmIxZGI3N2VlMThkMDZkZS5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzRiM2MzZDBlN2ZlYjRlZDg5YWZjYTNkY2JhM2UzYzZkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzRiM2MzZDBlN2ZlYjRlZDg5YWZjYTNkY2JhM2UzYzZkKTtcclxuVmlzdWFsU3RhdGVfNGIzYzNkMGU3ZmViNGVkODlhZmNhM2RjYmEzZTNjNmQuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfYzlkZTRiOWZlNjdhNDJiNGEzOGZlMDdhYjZjMTJkOWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV9jOWRlNGI5ZmU2N2E0MmI0YTM4ZmUwN2FiNmMxMmQ5ZSk7XHJcblZpc3VhbFN0YXRlX2M5ZGU0YjlmZTY3YTQyYjRhMzhmZTA3YWI2YzEyZDllLk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzA1OGJjNWQyODgwYjRiNjViNWZiOTMzYzY1NWM5ZTBkID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jYTU2NzQ1ZTU3OWI0ZGZlYTg0ZGY2YTVmNzhkM2Y2ZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jYTU2NzQ1ZTU3OWI0ZGZlYTg0ZGY2YTVmNzhkM2Y2ZixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNWE2ZDk3NjBmOWFiNDU2MmIzNTgwMmM1MmM5ZTEyZjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV81YTZkOTc2MGY5YWI0NTYyYjM1ODAyYzUyYzllMTJmMS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzVhNmQ5NzYwZjlhYjQ1NjJiMzU4MDJjNTJjOWUxMmYxLlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19jYTU2NzQ1ZTU3OWI0ZGZlYTg0ZGY2YTVmNzhkM2Y2Zi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNWE2ZDk3NjBmOWFiNDU2MmIzNTgwMmM1MmM5ZTEyZjEpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMDU4YmM1ZDI4ODBiNGI2NWI1ZmI5MzNjNjU1YzllMGQuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2NhNTY3NDVlNTc5YjRkZmVhODRkZjZhNWY3OGQzZjZmKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV9jOWRlNGI5ZmU2N2E0MmI0YTM4ZmUwN2FiNmMxMmQ5ZS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8wNThiYzVkMjg4MGI0YjY1YjVmYjkzM2M2NTVjOWUwZDtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfYTNjM2U3OTFkMWUxNGYwYzk5MjU2ODJhOThhMjlhNzQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlX2EzYzNlNzkxZDFlMTRmMGM5OTI1NjgyYTk4YTI5YTc0KTtcclxuVmlzdWFsU3RhdGVfYTNjM2U3OTFkMWUxNGYwYzk5MjU2ODJhOThhMjlhNzQuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF82NmMxZjMxNjdjZTk0NTk1YTIzODEzM2NjOGY2OGEwMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZWM1ZTUyMDQyOTc0NDZhYTliZjE1Yjc2ZGUwMDg1YjMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZWM1ZTUyMDQyOTc0NDZhYTliZjE1Yjc2ZGUwMDg1YjMsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2ZhMjhmMjBhNTY2MDRmYTJiOGFkNjllNWZhMjMwMjRjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZmEyOGYyMGE1NjYwNGZhMmI4YWQ2OWU1ZmEyMzAyNGMuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mYTI4ZjIwYTU2NjA0ZmEyYjhhZDY5ZTVmYTIzMDI0Yy5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZWM1ZTUyMDQyOTc0NDZhYTliZjE1Yjc2ZGUwMDg1YjMuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2ZhMjhmMjBhNTY2MDRmYTJiOGFkNjllNWZhMjMwMjRjKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzY2YzFmMzE2N2NlOTQ1OTVhMjM4MTMzY2M4ZjY4YTAxLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19lYzVlNTIwNDI5NzQ0NmFhOWJmMTViNzZkZTAwODViMyk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfYTNjM2U3OTFkMWUxNGYwYzk5MjU2ODJhOThhMjlhNzQuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfNjZjMWYzMTY3Y2U5NDU5NWEyMzgxMzNjYzhmNjhhMDE7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzZlODczOTBjYjJkYTQ3OTViYzZlNjJkOGMxNzE5NzA2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfNmU4NzM5MGNiMmRhNDc5NWJjNmU2MmQ4YzE3MTk3MDYpO1xyXG5WaXN1YWxTdGF0ZV82ZTg3MzkwY2IyZGE0Nzk1YmM2ZTYyZDhjMTcxOTcwNi5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF8zZTMxODM2ZTMxNjA0Mjg2YmQxMzU1OTdjNDBmZWQyMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNWRhNGE5NDczYjkzNGI2Mjg4OWUxMGU3ZjJkYjE1YTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNWRhNGE5NDczYjkzNGI2Mjg4OWUxMGU3ZjJkYjE1YTEsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzBkM2UyOGQ2OTc2YjRiOTI4YTM4YjM1MTkyZGEwZjE4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMGQzZTI4ZDY5NzZiNGI5MjhhMzhiMzUxOTJkYTBmMTguS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8wZDNlMjhkNjk3NmI0YjkyOGEzOGIzNTE5MmRhMGYxOC5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNWRhNGE5NDczYjkzNGI2Mjg4OWUxMGU3ZjJkYjE1YTEuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzBkM2UyOGQ2OTc2YjRiOTI4YTM4YjM1MTkyZGEwZjE4KTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzNlMzE4MzZlMzE2MDQyODZiZDEzNTU5N2M0MGZlZDIwLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc181ZGE0YTk0NzNiOTM0YjYyODg5ZTEwZTdmMmRiMTVhMSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNmU4NzM5MGNiMmRhNDc5NWJjNmU2MmQ4YzE3MTk3MDYuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfM2UzMTgzNmUzMTYwNDI4NmJkMTM1NTk3YzQwZmVkMjA7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF9mMGZkYWYxNDg4ZTI0YTQyYmIxZGI3N2VlMThkMDZkZS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzRiM2MzZDBlN2ZlYjRlZDg5YWZjYTNkY2JhM2UzYzZkKTtcclxuVmlzdWFsU3RhdGVHcm91cF9mMGZkYWYxNDg4ZTI0YTQyYmIxZGI3N2VlMThkMDZkZS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2M5ZGU0YjlmZTY3YTQyYjRhMzhmZTA3YWI2YzEyZDllKTtcclxuVmlzdWFsU3RhdGVHcm91cF9mMGZkYWYxNDg4ZTI0YTQyYmIxZGI3N2VlMThkMDZkZS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2EzYzNlNzkxZDFlMTRmMGM5OTI1NjgyYTk4YTI5YTc0KTtcclxuVmlzdWFsU3RhdGVHcm91cF9mMGZkYWYxNDg4ZTI0YTQyYmIxZGI3N2VlMThkMDZkZS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzZlODczOTBjYjJkYTQ3OTViYzZlNjJkOGMxNzE5NzA2KTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfZjBmZGFmMTQ4OGUyNGE0MmJiMWRiNzdlZTE4ZDA2ZGUpO1xyXG5cclxudmFyIEJvcmRlcl82ZTY0YzgxOTE5NDI0MTI3YmZmN2M1NzExN2MyOGQwMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfNmU2NGM4MTkxOTQyNDEyN2JmZjdjNTcxMTdjMjhkMDIpO1xyXG5Cb3JkZXJfNmU2NGM4MTkxOTQyNDEyN2JmZjdjNTcxMTdjMjhkMDIuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyXzZlNjRjODE5MTk0MjQxMjdiZmY3YzU3MTE3YzI4ZDAyLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyXzBhMmU5NDViNzNhZjQzYjNiMWNjZGVlYzQ0NjdiMTk4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfMGEyZTk0NWI3M2FmNDNiM2IxY2NkZWVjNDQ2N2IxOTgpO1xyXG5Db250ZW50UHJlc2VudGVyXzBhMmU5NDViNzNhZjQzYjNiMWNjZGVlYzQ0NjdiMTk4Lk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfNTQ2ODkzNGUxYmZjNDViNGFiZWQ0MTFhNWYzNWY3ZmMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfNTQ2ODkzNGUxYmZjNDViNGFiZWQ0MTFhNWYzNWY3ZmMuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZWM2Y2VjODdkNDdmNDdhM2JlYjlhNTA2NGUxMWY0MjYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9lYzZjZWM4N2Q0N2Y0N2EzYmViOWE1MDY0ZTExZjQyNi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ181NDY4OTM0ZTFiZmM0NWI0YWJlZDQxMWE1ZjM1ZjdmYy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2VjNmNlYzg3ZDQ3ZjQ3YTNiZWI5YTUwNjRlMTFmNDI2O1xyXG5cclxuXHJcbkJpbmRpbmdfNTQ2ODkzNGUxYmZjNDViNGFiZWQ0MTFhNWYzNWY3ZmMuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNGYxOWEwNzFkNGI3NGQ1YjlhYTViZDhlODEwNTY4OWM7XHJcblxyXG52YXIgQmluZGluZ19jMzgwYjRlZTE5N2I0ZjIyYTI0NzNiOWNjNDQ2YWQ0YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19jMzgwYjRlZTE5N2I0ZjIyYTI0NzNiOWNjNDQ2YWQ0Yi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYmNkNmIzYTQ0YWM2NGYzY2E3Yzc3YmQxN2EzMzBmYTEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9iY2Q2YjNhNDRhYzY0ZjNjYTdjNzdiZDE3YTMzMGZhMS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jMzgwYjRlZTE5N2I0ZjIyYTI0NzNiOWNjNDQ2YWQ0Yi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2JjZDZiM2E0NGFjNjRmM2NhN2M3N2JkMTdhMzMwZmExO1xyXG5cclxuXHJcbkJpbmRpbmdfYzM4MGI0ZWUxOTdiNGYyMmEyNDczYjljYzQ0NmFkNGIuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNGYxOWEwNzFkNGI3NGQ1YjlhYTViZDhlODEwNTY4OWM7XHJcblxyXG52YXIgQmluZGluZ19lZDkwZDdkYWM4MjU0MWVkYTZiODdiOWQ0NDM0N2UxNyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lZDkwZDdkYWM4MjU0MWVkYTZiODdiOWQ0NDM0N2UxNy5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOGExYmMyYzY2NDZkNDI1YjhjZjJlMzMxNmIyNjNjNWYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV84YTFiYzJjNjY0NmQ0MjViOGNmMmUzMzE2YjI2M2M1Zi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lZDkwZDdkYWM4MjU0MWVkYTZiODdiOWQ0NDM0N2UxNy5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzhhMWJjMmM2NjQ2ZDQyNWI4Y2YyZTMzMTZiMjYzYzVmO1xyXG5cclxuXHJcbkJpbmRpbmdfZWQ5MGQ3ZGFjODI1NDFlZGE2Yjg3YjlkNDQzNDdlMTcuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNGYxOWEwNzFkNGI3NGQ1YjlhYTViZDhlODEwNTY4OWM7XHJcblxyXG52YXIgQmluZGluZ19lYWY0MjEzN2JkMjY0OWQzOTY1ZWI1ZWE4Yjk3ODkxMiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19lYWY0MjEzN2JkMjY0OWQzOTY1ZWI1ZWE4Yjk3ODkxMi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzAyNzUyNmRkNGNmZTRkNjA4NmNkOTRiYTMyNTRjNGJmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMDI3NTI2ZGQ0Y2ZlNGQ2MDg2Y2Q5NGJhMzI1NGM0YmYuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfZWFmNDIxMzdiZDI2NDlkMzk2NWViNWVhOGI5Nzg5MTIuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8wMjc1MjZkZDRjZmU0ZDYwODZjZDk0YmEzMjU0YzRiZjtcclxuXHJcblxyXG5CaW5kaW5nX2VhZjQyMTM3YmQyNjQ5ZDM5NjVlYjVlYThiOTc4OTEyLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzRmMTlhMDcxZDRiNzRkNWI5YWE1YmQ4ZTgxMDU2ODljO1xyXG5cclxudmFyIEJpbmRpbmdfZTRlZDgzNjJmODkwNDYzYzg4YWQxZWNlZGJkYjRlYTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZTRlZDgzNjJmODkwNDYzYzg4YWQxZWNlZGJkYjRlYTYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYTUzYmE0ZDBhNTkyNDg5OTlkMTUzMWU2MjVjZmI0OGMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9hNTNiYTRkMGE1OTI0ODk5OWQxNTMxZTYyNWNmYjQ4Yy5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19lNGVkODM2MmY4OTA0NjNjODhhZDFlY2VkYmRiNGVhNi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2E1M2JhNGQwYTU5MjQ4OTk5ZDE1MzFlNjI1Y2ZiNDhjO1xyXG5cclxuXHJcbkJpbmRpbmdfZTRlZDgzNjJmODkwNDYzYzg4YWQxZWNlZGJkYjRlYTYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNGYxOWEwNzFkNGI3NGQ1YjlhYTViZDhlODEwNTY4OWM7XHJcblxyXG5cclxuQm9yZGVyXzZlNjRjODE5MTk0MjQxMjdiZmY3YzU3MTE3YzI4ZDAyLkNoaWxkID0gQ29udGVudFByZXNlbnRlcl8wYTJlOTQ1YjczYWY0M2IzYjFjY2RlZWM0NDY3YjE5ODtcclxuXHJcbnZhciBCaW5kaW5nXzkyZGYxNTk5YjM5MTQyM2I4YjI4YTQ0ZGU2OTg5MzRjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzkyZGYxNTk5YjM5MTQyM2I4YjI4YTQ0ZGU2OTg5MzRjLlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8wYTJjMDRmMjI0YTU0OTQyYmY4YzQ1ZWY5OTdiYTA1NyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzBhMmMwNGYyMjRhNTQ5NDJiZjhjNDVlZjk5N2JhMDU3Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzkyZGYxNTk5YjM5MTQyM2I4YjI4YTQ0ZGU2OTg5MzRjLlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMGEyYzA0ZjIyNGE1NDk0MmJmOGM0NWVmOTk3YmEwNTc7XHJcblxyXG5cclxuQmluZGluZ185MmRmMTU5OWIzOTE0MjNiOGIyOGE0NGRlNjk4OTM0Yy5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV80ZjE5YTA3MWQ0Yjc0ZDViOWFhNWJkOGU4MTA1Njg5YztcclxuXHJcblxyXG5Cb3JkZXJfOThmOTU0ODk5NDkzNDY4Mjk2N2I1OTMxNjU3NTVjOTkuQ2hpbGQgPSBCb3JkZXJfNmU2NGM4MTkxOTQyNDEyN2JmZjdjNTcxMTdjMjhkMDI7XHJcblxyXG52YXIgQmluZGluZ19kYmYzNWZiMzFhYzM0MGNkOTA1NmE3NzExYmMwNGJmMSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19kYmYzNWZiMzFhYzM0MGNkOTA1NmE3NzExYmMwNGJmMS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNjE2ZjM5MjU4ZDEwNDY4MjhmMjE5YTM1YjgyNjdhNWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82MTZmMzkyNThkMTA0NjgyOGYyMTlhMzViODI2N2E1Yi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kYmYzNWZiMzFhYzM0MGNkOTA1NmE3NzExYmMwNGJmMS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzYxNmYzOTI1OGQxMDQ2ODI4ZjIxOWEzNWI4MjY3YTViO1xyXG5cclxuXHJcbkJpbmRpbmdfZGJmMzVmYjMxYWMzNDBjZDkwNTZhNzcxMWJjMDRiZjEuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNGYxOWEwNzFkNGI3NGQ1YjlhYTViZDhlODEwNTY4OWM7XHJcblxyXG52YXIgQmluZGluZ19hYzk2ODBkZGU5MTI0ZjdmYjNmMDA5NjRkNTY1MWRhOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19hYzk2ODBkZGU5MTI0ZjdmYjNmMDA5NjRkNTY1MWRhOS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2Q0ZjViZGEzN2RmMTRlZGJiNGMzYjkzNDQxNjg4ZjhlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZDRmNWJkYTM3ZGYxNGVkYmI0YzNiOTM0NDE2ODhmOGUuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfYWM5NjgwZGRlOTEyNGY3ZmIzZjAwOTY0ZDU2NTFkYTkuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9kNGY1YmRhMzdkZjE0ZWRiYjRjM2I5MzQ0MTY4OGY4ZTtcclxuXHJcblxyXG5CaW5kaW5nX2FjOTY4MGRkZTkxMjRmN2ZiM2YwMDk2NGQ1NjUxZGE5LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzRmMTlhMDcxZDRiNzRkNWI5YWE1YmQ4ZTgxMDU2ODljO1xyXG5cclxudmFyIEJpbmRpbmdfYzhmZTg0N2I5NjMyNGE2YmJiYmM4MWM5ZDY2NzBjMzUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYzhmZTg0N2I5NjMyNGE2YmJiYmM4MWM5ZDY2NzBjMzUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYjI4M2FiZjE2NjhjNDI5M2FlYWU1Y2JkYmU3NzA2YWUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9iMjgzYWJmMTY2OGM0MjkzYWVhZTVjYmRiZTc3MDZhZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19jOGZlODQ3Yjk2MzI0YTZiYmJiYzgxYzlkNjY3MGMzNS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2IyODNhYmYxNjY4YzQyOTNhZWFlNWNiZGJlNzcwNmFlO1xyXG5cclxuXHJcbkJpbmRpbmdfYzhmZTg0N2I5NjMyNGE2YmJiYmM4MWM5ZDY2NzBjMzUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNGYxOWEwNzFkNGI3NGQ1YjlhYTViZDhlODEwNTY4OWM7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfMGEyZTk0NWI3M2FmNDNiM2IxY2NkZWVjNDQ2N2IxOTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ181NDY4OTM0ZTFiZmM0NWI0YWJlZDQxMWE1ZjM1ZjdmYyk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMGEyZTk0NWI3M2FmNDNiM2IxY2NkZWVjNDQ2N2IxOTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfYzM4MGI0ZWUxOTdiNGYyMmEyNDczYjljYzQ0NmFkNGIpO1xyXG5Db250ZW50UHJlc2VudGVyXzBhMmU5NDViNzNhZjQzYjNiMWNjZGVlYzQ0NjdiMTk4LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ19lZDkwZDdkYWM4MjU0MWVkYTZiODdiOWQ0NDM0N2UxNyk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMGEyZTk0NWI3M2FmNDNiM2IxY2NkZWVjNDQ2N2IxOTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ19lYWY0MjEzN2JkMjY0OWQzOTY1ZWI1ZWE4Yjk3ODkxMik7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMGEyZTk0NWI3M2FmNDNiM2IxY2NkZWVjNDQ2N2IxOTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfZTRlZDgzNjJmODkwNDYzYzg4YWQxZWNlZGJkYjRlYTYpO1xyXG5Cb3JkZXJfNmU2NGM4MTkxOTQyNDEyN2JmZjdjNTcxMTdjMjhkMDIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzkyZGYxNTk5YjM5MTQyM2I4YjI4YTQ0ZGU2OTg5MzRjKTtcclxuQm9yZGVyXzk4Zjk1NDg5OTQ5MzQ2ODI5NjdiNTkzMTY1NzU1Yzk5LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19kYmYzNWZiMzFhYzM0MGNkOTA1NmE3NzExYmMwNGJmMSk7XHJcbkJvcmRlcl85OGY5NTQ4OTk0OTM0NjgyOTY3YjU5MzE2NTc1NWM5OS5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nX2FjOTY4MGRkZTkxMjRmN2ZiM2YwMDk2NGQ1NjUxZGE5KTtcclxuQm9yZGVyXzk4Zjk1NDg5OTQ5MzQ2ODI5NjdiNTkzMTY1NzU1Yzk5LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nX2M4ZmU4NDdiOTYzMjRhNmJiYmJjODFjOWQ2NjcwYzM1KTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2NhNTY3NDVlNTc5YjRkZmVhODRkZjZhNWY3OGQzZjZmLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzExNDYzYTAzMmU5YzRhNjliN2NlMDM1YTZmNzBiMmEwLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMTE0NjNhMDMyZTljNGE2OWI3Y2UwMzVhNmY3MGIyYTAsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8xMTQ2M2EwMzJlOWM0YTY5YjdjZTAzNWE2ZjcwYjJhMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzExNDYzYTAzMmU5YzRhNjliN2NlMDM1YTZmNzBiMmEwLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMTE0NjNhMDMyZTljNGE2OWI3Y2UwMzVhNmY3MGIyYTApKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2NhNTY3NDVlNTc5YjRkZmVhODRkZjZhNWY3OGQzZjZmLCBCb3JkZXJfNmU2NGM4MTkxOTQyNDEyN2JmZjdjNTcxMTdjMjhkMDIpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2VjNWU1MjA0Mjk3NDQ2YWE5YmYxNWI3NmRlMDA4NWIzLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5Xzk4MWZmYWU4M2YxYzRhNDFiYWU5ODc0OTViNTBkMzQ2LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfOTgxZmZhZTgzZjFjNGE0MWJhZTk4NzQ5NWI1MGQzNDYsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV85ODFmZmFlODNmMWM0YTQxYmFlOTg3NDk1YjUwZDM0NiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5Xzk4MWZmYWU4M2YxYzRhNDFiYWU5ODc0OTViNTBkMzQ2LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfOTgxZmZhZTgzZjFjNGE0MWJhZTk4NzQ5NWI1MGQzNDYpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2VjNWU1MjA0Mjk3NDQ2YWE5YmYxNWI3NmRlMDA4NWIzLCBCb3JkZXJfNmU2NGM4MTkxOTQyNDEyN2JmZjdjNTcxMTdjMjhkMDIpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzVkYTRhOTQ3M2I5MzRiNjI4ODllMTBlN2YyZGIxNWExLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2VhNzJkNzMwNGM3OTQwMmY5YjI3MmFlOWRlZGY4OGQ2LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfZWE3MmQ3MzA0Yzc5NDAyZjliMjcyYWU5ZGVkZjg4ZDYsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9lYTcyZDczMDRjNzk0MDJmOWIyNzJhZTlkZWRmODhkNiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2VhNzJkNzMwNGM3OTQwMmY5YjI3MmFlOWRlZGY4OGQ2LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfZWE3MmQ3MzA0Yzc5NDAyZjliMjcyYWU5ZGVkZjg4ZDYpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzVkYTRhOTQ3M2I5MzRiNjI4ODllMTBlN2YyZGIxNWExLCBCb3JkZXJfNmU2NGM4MTkxOTQyNDEyN2JmZjdjNTcxMTdjMjhkMDIpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV80ZjE5YTA3MWQ0Yjc0ZDViOWFhNWJkOGU4MTA1Njg5Yy5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfOThmOTU0ODk5NDkzNDY4Mjk2N2I1OTMxNjU3NTVjOTk7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlXzRmMTlhMDcxZDRiNzRkNWI5YWE1YmQ4ZTgxMDU2ODljO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD5BQkZFMzA1MzQyRkVGMzk5MkY0NkEzOTAzMkI1QTUxMzwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgNjowOTo0ODwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BQYWdlaG9tZceAx4BYYW1sx4DHgEZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBvYmplY3QgSW5zdGFudGlhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIGdsb2JhbDo6U3lzdGVtLlR5cGUgdHlwZSA9IHR5cGVvZihDU2h0bWwuUGFnZUhvbWUpO1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw6OkNTSFRNTDUuSW50ZXJuYWwuVHlwZUluc3RhbnRpYXRpb25IZWxwZXIuSW5zdGFudGlhdGUodHlwZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIDxhdXRvLWdlbmVyYXRlZD5cclxuLy8gICAgIFRoaXMgY29kZSB3YXMgYXV0by1nZW5lcmF0ZWQgYnkgXCJDIy9YQU1MIGZvciBIVE1MNVwiXHJcbi8vXHJcbi8vICAgICBDaGFuZ2VzIHRvIHRoaXMgZmlsZSBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yIGFuZCB3aWxsIGJlIGxvc3QgaWZcclxuLy8gICAgIHRoZSBjb2RlIGlzIHJlZ2VuZXJhdGVkLlxyXG4vLyA8L2F1dG8tZ2VuZXJhdGVkPlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5wYXJ0aWFsIGNsYXNzIFBhZ2VIb21lIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlciBlbGVtZW50O1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uIGJ0bkJlZ2luO1xyXG5wcm90ZWN0ZWQgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCBMYXlvdXRSb290O1xyXG5cclxuXHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDE2OSwgNjQ5LCAwNjI4XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2NvbnRlbnRMb2FkZWQ7XHJcbiAgICAgICAgcHVibGljIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoX2NvbnRlbnRMb2FkZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIF9jb250ZW50TG9hZGVkID0gdHJ1ZTtcclxuXHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxODQgLy8gUHJldmVudHMgd2FybmluZyBDUzAxODQgKCdUaGUgZ2l2ZW4gZXhwcmVzc2lvbiBpcyBuZXZlciBvZiB0aGUgcHJvdmlkZWQgKCd0eXBlJykgdHlwZScpXHJcbiAgICAgICAgICAgIGlmICh0aGlzIGlzIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgKChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5VSUVsZW1lbnQpKG9iamVjdCl0aGlzKS5YYW1sU291cmNlUGF0aCA9IEBcIkNTaHRtbFxcUGFnZUhvbWUueGFtbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiNwcmFnbWEgd2FybmluZyByZXN0b3JlIDAxODRcclxuXHJcblxyXG5cclxudmFyIEdyaWRfYzk3NDIxMmJiZWZjNDdlNzgwZGZmYTZjYWUwNDMyMzQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZCgpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcIkxheW91dFJvb3RcIiwgR3JpZF9jOTc0MjEyYmJlZmM0N2U3ODBkZmZhNmNhZTA0MzIzNCk7XHJcbkdyaWRfYzk3NDIxMmJiZWZjNDdlNzgwZGZmYTZjYWUwNDMyMzQuTmFtZSA9IFwiTGF5b3V0Um9vdFwiO1xyXG5HcmlkX2M5NzQyMTJiYmVmYzQ3ZTc4MGRmZmE2Y2FlMDQzMjM0LkJhY2tncm91bmQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuU29saWRDb2xvckJydXNoKG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfSk7XHJcbnZhciBHcmlkXzMxODc2MWM4MTJlYzQyZmQ5YWI3NTA1MjhkNGIwNDBlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfMmIxZGEyZjZiMzhhNDVmY2FmNTk4ODJmZDBjZmNjZDAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzJiMWRhMmY2YjM4YTQ1ZmNhZjU5ODgyZmQwY2ZjY2QwLkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfMmIxZGEyZjZiMzhhNDVmY2FmNTk4ODJmZDBjZmNjZDAuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wX2E4YmM3MWM0YzU0NDRhMjBhZTQ1NjE2ODgxODFmMzBhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfYThiYzcxYzRjNTQ0NGEyMGFlNDU2MTY4ODE4MWYzMGEuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF9hOGJjNzFjNGM1NDQ0YTIwYWU0NTYxNjg4MTgxZjMwYS5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfZGFkNTcwNzYyNWY0NDIzMmJkOTM1ZDU1Y2VmZjlhNjQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF9kYWQ1NzA3NjI1ZjQ0MjMyYmQ5MzVkNTVjZWZmOWE2NC5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wX2RhZDU3MDc2MjVmNDQyMzJiZDkzNWQ1NWNlZmY5YTY0Lk9mZnNldCA9IDFEO1xyXG5cclxuTGluZWFyR3JhZGllbnRCcnVzaF8yYjFkYTJmNmIzOGE0NWZjYWY1OTg4MmZkMGNmY2NkMC5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfYThiYzcxYzRjNTQ0NGEyMGFlNDU2MTY4ODE4MWYzMGEpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzJiMWRhMmY2YjM4YTQ1ZmNhZjU5ODgyZmQwY2ZjY2QwLkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9kYWQ1NzA3NjI1ZjQ0MjMyYmQ5MzVkNTVjZWZmOWE2NCk7XHJcblxyXG5cclxuR3JpZF8zMTg3NjFjODEyZWM0MmZkOWFiNzUwNTI4ZDRiMDQwZS5CYWNrZ3JvdW5kID0gTGluZWFyR3JhZGllbnRCcnVzaF8yYjFkYTJmNmIzOGE0NWZjYWY1OTg4MmZkMGNmY2NkMDtcclxuXHJcbnZhciBCb3JkZXJfMGVhOGMyMTY2YjI2NGY5YWE1YzZhMGMzMWNkNGM0YjkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyKCk7XHJcbnRoaXMuUmVnaXN0ZXJOYW1lKFwiZWxlbWVudFwiLCBCb3JkZXJfMGVhOGMyMTY2YjI2NGY5YWE1YzZhMGMzMWNkNGM0YjkpO1xyXG5Cb3JkZXJfMGVhOGMyMTY2YjI2NGY5YWE1YzZhMGMzMWNkNGM0YjkuTmFtZSA9IFwiZWxlbWVudFwiO1xyXG5Cb3JkZXJfMGVhOGMyMTY2YjI2NGY5YWE1YzZhMGMzMWNkNGM0YjkuTWFyZ2luID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygzKTtcclxuQm9yZGVyXzBlYThjMjE2NmIyNjRmOWFhNWM2YTBjMzFjZDRjNGI5LkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMCwgRyA9IChieXRlKTAsIEIgPSAoYnl0ZSkxMzkgfSk7XHJcbkJvcmRlcl8wZWE4YzIxNjZiMjY0ZjlhYTVjNmEwYzMxY2Q0YzRiOS5Cb3JkZXJUaGlja25lc3MgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGhpY2tuZXNzKDIpO1xyXG5Cb3JkZXJfMGVhOGMyMTY2YjI2NGY5YWE1YzZhMGMzMWNkNGM0YjkuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIExpbmVhckdyYWRpZW50QnJ1c2hfNDVlYWRjNDkzN2JlNGRkNjgzNWUwZTI5ZTM2ZmFiOTYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuTGluZWFyR3JhZGllbnRCcnVzaCgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzQ1ZWFkYzQ5MzdiZTRkZDY4MzVlMGUyOWUzNmZhYjk2LkVuZFBvaW50ID0gbmV3IGdsb2JhbDo6V2luZG93cy5Gb3VuZGF0aW9uLlBvaW50KDAuNSwgMSk7XHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNDVlYWRjNDkzN2JlNGRkNjgzNWUwZTI5ZTM2ZmFiOTYuU3RhcnRQb2ludCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuRm91bmRhdGlvbi5Qb2ludCgwLjUsIDApO1xyXG52YXIgR3JhZGllbnRTdG9wXzRjMmY0N2FiNzk4YjQwY2NhMzE3N2YzY2MwMGUyNWUxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfNGMyZjQ3YWI3OThiNDBjY2EzMTc3ZjNjYzAwZTI1ZTEuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjMwLCBHID0gKGJ5dGUpMjMwLCBCID0gKGJ5dGUpMjMwIH07XHJcbkdyYWRpZW50U3RvcF80YzJmNDdhYjc5OGI0MGNjYTMxNzdmM2NjMDBlMjVlMS5PZmZzZXQgPSAwRDtcclxuXHJcbnZhciBHcmFkaWVudFN0b3BfMTEzNDQxM2U5MWJjNDM4ODgyMDdjZWVlMzY5NDQwZjggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuR3JhZGllbnRTdG9wKCk7XHJcbkdyYWRpZW50U3RvcF8xMTM0NDEzZTkxYmM0Mzg4ODIwN2NlZWUzNjk0NDBmOC5Db2xvciA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuQ29sb3IoKSB7IEEgPSAoYnl0ZSkyNTUsIFIgPSAoYnl0ZSkyNTUsIEcgPSAoYnl0ZSkyNTUsIEIgPSAoYnl0ZSkyNTUgfTtcclxuR3JhZGllbnRTdG9wXzExMzQ0MTNlOTFiYzQzODg4MjA3Y2VlZTM2OTQ0MGY4Lk9mZnNldCA9IDAuNTg5NkQ7XHJcblxyXG52YXIgR3JhZGllbnRTdG9wX2FkMWQyZTBmNTQ1ZjQ1ZmU5OWY1NTc5OGJhOWUyOWIxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkdyYWRpZW50U3RvcCgpO1xyXG5HcmFkaWVudFN0b3BfYWQxZDJlMGY1NDVmNDVmZTk5ZjU1Nzk4YmE5ZTI5YjEuQ29sb3IgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjQ2LCBHID0gKGJ5dGUpMjQ2LCBCID0gKGJ5dGUpMjQ2IH07XHJcbkdyYWRpZW50U3RvcF9hZDFkMmUwZjU0NWY0NWZlOTlmNTU3OThiYTllMjliMS5PZmZzZXQgPSAxRDtcclxuXHJcbkxpbmVhckdyYWRpZW50QnJ1c2hfNDVlYWRjNDkzN2JlNGRkNjgzNWUwZTI5ZTM2ZmFiOTYuR3JhZGllbnRTdG9wcy5BZGQoR3JhZGllbnRTdG9wXzRjMmY0N2FiNzk4YjQwY2NhMzE3N2YzY2MwMGUyNWUxKTtcclxuTGluZWFyR3JhZGllbnRCcnVzaF80NWVhZGM0OTM3YmU0ZGQ2ODM1ZTBlMjllMzZmYWI5Ni5HcmFkaWVudFN0b3BzLkFkZChHcmFkaWVudFN0b3BfMTEzNDQxM2U5MWJjNDM4ODgyMDdjZWVlMzY5NDQwZjgpO1xyXG5MaW5lYXJHcmFkaWVudEJydXNoXzQ1ZWFkYzQ5MzdiZTRkZDY4MzVlMGUyOWUzNmZhYjk2LkdyYWRpZW50U3RvcHMuQWRkKEdyYWRpZW50U3RvcF9hZDFkMmUwZjU0NWY0NWZlOTlmNTU3OThiYTllMjliMSk7XHJcblxyXG5cclxuQm9yZGVyXzBlYThjMjE2NmIyNjRmOWFhNWM2YTBjMzFjZDRjNGI5LkJhY2tncm91bmQgPSBMaW5lYXJHcmFkaWVudEJydXNoXzQ1ZWFkYzQ5MzdiZTRkZDY4MzVlMGUyOWUzNmZhYjk2O1xyXG5cclxudmFyIFRyYW5zZm9ybUdyb3VwX2YyOGYxOWIwZTBkODRhMGE4NGNjOTliYzRmYzNiNzA2ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlRyYW5zZm9ybUdyb3VwKCk7XHJcbnZhciBTY2FsZVRyYW5zZm9ybV9lYWU2YjQwZmU1M2Q0MjdlOGEwMzg5M2FjYWJhYmQ2NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5TY2FsZVRyYW5zZm9ybSgpO1xyXG5cclxudmFyIFJvdGF0ZVRyYW5zZm9ybV82OThkYzdlZmRjNmM0NGVmYjc4MmQ4MTg5OWU1ZmE4ZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Sb3RhdGVUcmFuc2Zvcm0oKTtcclxuXHJcblRyYW5zZm9ybUdyb3VwX2YyOGYxOWIwZTBkODRhMGE4NGNjOTliYzRmYzNiNzA2LkNoaWxkcmVuLkFkZChTY2FsZVRyYW5zZm9ybV9lYWU2YjQwZmU1M2Q0MjdlOGEwMzg5M2FjYWJhYmQ2NSk7XHJcblRyYW5zZm9ybUdyb3VwX2YyOGYxOWIwZTBkODRhMGE4NGNjOTliYzRmYzNiNzA2LkNoaWxkcmVuLkFkZChSb3RhdGVUcmFuc2Zvcm1fNjk4ZGM3ZWZkYzZjNDRlZmI3ODJkODE4OTllNWZhOGUpO1xyXG5cclxuXHJcbkJvcmRlcl8wZWE4YzIxNjZiMjY0ZjlhYTVjNmEwYzMxY2Q0YzRiOS5SZW5kZXJUcmFuc2Zvcm0gPSBUcmFuc2Zvcm1Hcm91cF9mMjhmMTliMGUwZDg0YTBhODRjYzk5YmM0ZmMzYjcwNjtcclxuXHJcbnZhciBHcmlkX2NlNTBkYzBjNjk1YjQxNzdhOTVmOTJhMTE4MDY4YzdiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIENvbHVtbkRlZmluaXRpb25fYjgwZWU4YzY1NTEwNDc3NTg5OTgzNjc5NmZmNDg2NDcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fOGYxYzUwMmE4MTc1NDE1ZjlmMzkwZmMxZjQyYWI5NjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxudmFyIENvbHVtbkRlZmluaXRpb25fNWZkNzdkN2U2MzEwNDQ0ZjhiOGZmNGQ2ZjVlMGI2ZjAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29sdW1uRGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF9jZTUwZGMwYzY5NWI0MTc3YTk1ZjkyYTExODA2OGM3Yi5Db2x1bW5EZWZpbml0aW9ucy5BZGQoQ29sdW1uRGVmaW5pdGlvbl9iODBlZThjNjU1MTA0Nzc1ODk5ODM2Nzk2ZmY0ODY0Nyk7XHJcbkdyaWRfY2U1MGRjMGM2OTViNDE3N2E5NWY5MmExMTgwNjhjN2IuQ29sdW1uRGVmaW5pdGlvbnMuQWRkKENvbHVtbkRlZmluaXRpb25fOGYxYzUwMmE4MTc1NDE1ZjlmMzkwZmMxZjQyYWI5NjEpO1xyXG5HcmlkX2NlNTBkYzBjNjk1YjQxNzdhOTVmOTJhMTE4MDY4YzdiLkNvbHVtbkRlZmluaXRpb25zLkFkZChDb2x1bW5EZWZpbml0aW9uXzVmZDc3ZDdlNjMxMDQ0NGY4YjhmZjRkNmY1ZTBiNmYwKTtcclxuXHJcbnZhciBSb3dEZWZpbml0aW9uXzM3N2YwZGFhMmE1ODQyNzY4MTNmMjg4ZmEwMTRmODQwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLlJvd0RlZmluaXRpb24oKTtcclxuUm93RGVmaW5pdGlvbl8zNzdmMGRhYTJhNTg0Mjc2ODEzZjI4OGZhMDE0Zjg0MC5IZWlnaHQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZExlbmd0aCgwLjI1LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl9iZWZlODZmZTkxNzI0OTdjYWU0ZDVjZjAzMzE5YWEzOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fYmVmZTg2ZmU5MTcyNDk3Y2FlNGQ1Y2YwMzMxOWFhMzkuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC41LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5HcmlkVW5pdFR5cGUuU3Rhcik7XHJcblxyXG52YXIgUm93RGVmaW5pdGlvbl8xOGUyOWE4MzZjODY0MzkwOWQ5ODUzZjUyOGZjM2I2MSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Sb3dEZWZpbml0aW9uKCk7XHJcblJvd0RlZmluaXRpb25fMThlMjlhODM2Yzg2NDM5MDlkOTg1M2Y1MjhmYzNiNjEuSGVpZ2h0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkdyaWRMZW5ndGgoMC4yNSwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuR3JpZFVuaXRUeXBlLlN0YXIpO1xyXG5cclxuR3JpZF9jZTUwZGMwYzY5NWI0MTc3YTk1ZjkyYTExODA2OGM3Yi5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl8zNzdmMGRhYTJhNTg0Mjc2ODEzZjI4OGZhMDE0Zjg0MCk7XHJcbkdyaWRfY2U1MGRjMGM2OTViNDE3N2E5NWY5MmExMTgwNjhjN2IuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fYmVmZTg2ZmU5MTcyNDk3Y2FlNGQ1Y2YwMzMxOWFhMzkpO1xyXG5HcmlkX2NlNTBkYzBjNjk1YjQxNzdhOTVmOTJhMTE4MDY4YzdiLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzE4ZTI5YTgzNmM4NjQzOTA5ZDk4NTNmNTI4ZmMzYjYxKTtcclxuXHJcbnZhciBJbWFnZV8wODNhZTJjNWYxMmY0OWU3OGE2YTMyYzdjOTY4YzgyZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5JbWFnZSgpO1xyXG5JbWFnZV8wODNhZTJjNWYxMmY0OWU3OGE2YTMyYzdjOTY4YzgyZC5Tb3VyY2UgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpZ2xvYmFsOjpEb3ROZXRGb3JIdG1sNS5Db3JlLlR5cGVGcm9tU3RyaW5nQ29udmVydGVycy5Db252ZXJ0RnJvbUludmFyaWFudFN0cmluZyh0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuSW1hZ2VTb3VyY2UpLCBAXCIvQ1NodG1sO2NvbXBvbmVudC9pbWcvSG9tZUltYWdlLmpwZ1wiKTtcclxuSW1hZ2VfMDgzYWUyYzVmMTJmNDllNzhhNmEzMmM3Yzk2OGM4MmQuU3RyZXRjaCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlN0cmV0Y2guVW5pZm9ybTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRDb2x1bW5TcGFuKEltYWdlXzA4M2FlMmM1ZjEyZjQ5ZTc4YTZhMzJjN2M5NjhjODJkLDMpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvd1NwYW4oSW1hZ2VfMDgzYWUyYzVmMTJmNDllNzhhNmEzMmM3Yzk2OGM4MmQsMyk7XHJcblxyXG5HcmlkX2NlNTBkYzBjNjk1YjQxNzdhOTVmOTJhMTE4MDY4YzdiLkNoaWxkcmVuLkFkZChJbWFnZV8wODNhZTJjNWYxMmY0OWU3OGE2YTMyYzdjOTY4YzgyZCk7XHJcblxyXG5cclxuQm9yZGVyXzBlYThjMjE2NmIyNjRmOWFhNWM2YTBjMzFjZDRjNGI5LkNoaWxkID0gR3JpZF9jZTUwZGMwYzY5NWI0MTc3YTk1ZjkyYTExODA2OGM3YjtcclxuXHJcblxyXG52YXIgQnV0dG9uX2IyZjA5MDUzZjIxMjRlYmFiZjMyNzM1NjkxM2IzYWVmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG50aGlzLlJlZ2lzdGVyTmFtZShcImJ0bkJlZ2luXCIsIEJ1dHRvbl9iMmYwOTA1M2YyMTI0ZWJhYmYzMjczNTY5MTNiM2FlZik7XHJcbkJ1dHRvbl9iMmYwOTA1M2YyMTI0ZWJhYmYzMjczNTY5MTNiM2FlZi5OYW1lID0gXCJidG5CZWdpblwiO1xyXG5CdXR0b25fYjJmMDkwNTNmMjEyNGViYWJmMzI3MzU2OTEzYjNhZWYuSG9yaXpvbnRhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkhvcml6b250YWxBbGlnbm1lbnQuQ2VudGVyO1xyXG5CdXR0b25fYjJmMDkwNTNmMjEyNGViYWJmMzI3MzU2OTEzYjNhZWYuQ29udGVudCA9IEBcItCd0LDRh9Cw0YLRjCDRgNCw0LHQvtGC0YNcIjtcclxuQnV0dG9uX2IyZjA5MDUzZjIxMjRlYmFiZjMyNzM1NjkxM2IzYWVmLkZvbnRTaXplID0gMjVEO1xyXG5CdXR0b25fYjJmMDkwNTNmMjEyNGViYWJmMzI3MzU2OTEzYjNhZWYuQmFja2dyb3VuZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5Tb2xpZENvbG9yQnJ1c2gobmV3IGdsb2JhbDo6V2luZG93cy5VSS5Db2xvcigpIHsgQSA9IChieXRlKTI1NSwgUiA9IChieXRlKTI1NSwgRyA9IChieXRlKTIzOCwgQiA9IChieXRlKTIzOCB9KTtcclxuQnV0dG9uX2IyZjA5MDUzZjIxMjRlYmFiZjMyNzM1NjkxM2IzYWVmLldpZHRoID0gMjgwRDtcclxuQnV0dG9uX2IyZjA5MDUzZjIxMjRlYmFiZjMyNzM1NjkxM2IzYWVmLkhlaWdodCA9IDUwRDtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuR3JpZC5TZXRSb3coQnV0dG9uX2IyZjA5MDUzZjIxMjRlYmFiZjMyNzM1NjkxM2IzYWVmLDIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldENvbHVtbihCdXR0b25fYjJmMDkwNTNmMjEyNGViYWJmMzI3MzU2OTEzYjNhZWYsMSk7XHJcbkJ1dHRvbl9iMmYwOTA1M2YyMTI0ZWJhYmYzMjczNTY5MTNiM2FlZi5WZXJ0aWNhbEFsaWdubWVudCA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZlcnRpY2FsQWxpZ25tZW50LkJvdHRvbTtcclxuQnV0dG9uX2IyZjA5MDUzZjIxMjRlYmFiZjMyNzM1NjkxM2IzYWVmLkNsaWNrICs9IEJ1dHRvbl9DbGljaztcclxuQnV0dG9uX2IyZjA5MDUzZjIxMjRlYmFiZjMyNzM1NjkxM2IzYWVmLk1hcmdpbiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5UaGlja25lc3MoMCwgMCwgMCwgNTApO1xyXG5CdXR0b25fYjJmMDkwNTNmMjEyNGViYWJmMzI3MzU2OTEzYjNhZWYuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV9kNzgxNmNlZjkyYjM0YjIyYWMyYzMzYWE1NGViM2VkNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlX2Q3ODE2Y2VmOTJiMzRiMjJhYzJjMzNhYTU0ZWIzZWQ0LlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlX2Q3ODE2Y2VmOTJiMzRiMjJhYzJjMzNhYTU0ZWIzZWQ0LlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlX2Q3ODE2Y2VmOTJiMzRiMjJhYzJjMzNhYTU0ZWIzZWQ0KTtcclxuXHJcbkJ1dHRvbl9iMmYwOTA1M2YyMTI0ZWJhYmYzMjczNTY5MTNiM2FlZi5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV9kNzgxNmNlZjkyYjM0YjIyYWMyYzMzYWE1NGViM2VkNDtcclxuXHJcblxyXG5HcmlkXzMxODc2MWM4MTJlYzQyZmQ5YWI3NTA1MjhkNGIwNDBlLkNoaWxkcmVuLkFkZChCb3JkZXJfMGVhOGMyMTY2YjI2NGY5YWE1YzZhMGMzMWNkNGM0YjkpO1xyXG5HcmlkXzMxODc2MWM4MTJlYzQyZmQ5YWI3NTA1MjhkNGIwNDBlLkNoaWxkcmVuLkFkZChCdXR0b25fYjJmMDkwNTNmMjEyNGViYWJmMzI3MzU2OTEzYjNhZWYpO1xyXG5cclxuXHJcbkdyaWRfYzk3NDIxMmJiZWZjNDdlNzgwZGZmYTZjYWUwNDMyMzQuQ2hpbGRyZW4uQWRkKEdyaWRfMzE4NzYxYzgxMmVjNDJmZDlhYjc1MDUyOGQ0YjA0MGUpO1xyXG5cclxuXHJcbnRoaXMuQ29udGVudCA9IEdyaWRfYzk3NDIxMmJiZWZjNDdlNzgwZGZmYTZjYWUwNDMyMzQ7XHJcblxyXG5cclxuXHJcbmVsZW1lbnQgPSBCb3JkZXJfMGVhOGMyMTY2YjI2NGY5YWE1YzZhMGMzMWNkNGM0Yjk7XHJcbmJ0bkJlZ2luID0gQnV0dG9uX2IyZjA5MDUzZjIxMjRlYmFiZjMyNzM1NjkxM2IzYWVmO1xyXG5MYXlvdXRSb290ID0gR3JpZF9jOTc0MjEyYmJlZmM0N2U3ODBkZmZhNmNhZTA0MzIzNDtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzI4NGUzMmY3ODQwMDQwZmE5MjI2YjQ4MjY2NGYzYTliIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMjg0ZTMyZjc4NDAwNDBmYTkyMjZiNDgyNjY0ZjNhOWIgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8yODRlMzJmNzg0MDA0MGZhOTIyNmI0ODI2NjRmM2E5YiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzI4NGUzMmY3ODQwMDQwZmE5MjI2YjQ4MjY2NGYzYTliIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8yODRlMzJmNzg0MDA0MGZhOTIyNmI0ODI2NjRmM2E5YiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfODllMjc5ZjhmNjA3NGNkZGFmNjQ1YzE5ZmM4ZDVjYzMgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV84OWUyNzlmOGY2MDc0Y2RkYWY2NDVjMTlmYzhkNWNjMyAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5Xzg5ZTI3OWY4ZjYwNzRjZGRhZjY0NWMxOWZjOGQ1Y2MzIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfODllMjc5ZjhmNjA3NGNkZGFmNjQ1YzE5ZmM4ZDVjYzMgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5Xzg5ZTI3OWY4ZjYwNzRjZGRhZjY0NWMxOWZjOGQ1Y2MzIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV9iMThkNjhhODZmMTU0ZWFmOWI0YjI5ZDZhZTk2NWI1YSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2IxOGQ2OGE4NmYxNTRlYWY5YjRiMjlkNmFlOTY1YjVhIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfYjE4ZDY4YTg2ZjE1NGVhZjliNGIyOWQ2YWU5NjViNWEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV9iMThkNjhhODZmMTU0ZWFmOWI0YjI5ZDZhZTk2NWI1YSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYjE4ZDY4YTg2ZjE1NGVhZjliNGIyOWQ2YWU5NjViNWEgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfZDc4MTZjZWY5MmIzNGIyMmFjMmMzM2FhNTRlYjNlZDQoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfODA1NWZmZTk2OTJkNGJmY2FkZTJiNjA4MmVjZjcyMWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlXzgwNTVmZmU5NjkyZDRiZmNhZGUyYjYwODJlY2Y3MjFiLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyX2Y3ZTY2OWZlMjgwNzRkMGZhNDg1NmEwYWU2OWM0ZGM4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl9mN2U2NjlmZTI4MDc0ZDBmYTQ4NTZhMGFlNjljNGRjOCk7XHJcbkJvcmRlcl9mN2U2NjlmZTI4MDc0ZDBmYTQ4NTZhMGFlNjljNGRjOC5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfZjdlNjY5ZmUyODA3NGQwZmE0ODU2YTBhZTY5YzRkYzguQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfNjVjNTdiOGQ1YWZiNDhkN2I0NTUxOWYxZGVlZGQ1YTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwXzY1YzU3YjhkNWFmYjQ4ZDdiNDU1MTlmMWRlZWRkNWE4KTtcclxuVmlzdWFsU3RhdGVHcm91cF82NWM1N2I4ZDVhZmI0OGQ3YjQ1NTE5ZjFkZWVkZDVhOC5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlX2E3NDk1MjkyYzJjZTQ2MzNhYmQ4NDJhMTVhMGQ4OWZlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlX2E3NDk1MjkyYzJjZTQ2MzNhYmQ4NDJhMTVhMGQ4OWZlKTtcclxuVmlzdWFsU3RhdGVfYTc0OTUyOTJjMmNlNDYzM2FiZDg0MmExNWEwZDg5ZmUuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMjdlZmI0YWQ3NzM4NGY3MjgwOTQ1ZWMxNzQyNjE2ZjggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV8yN2VmYjRhZDc3Mzg0ZjcyODA5NDVlYzE3NDI2MTZmOCk7XHJcblZpc3VhbFN0YXRlXzI3ZWZiNGFkNzczODRmNzI4MDk0NWVjMTc0MjYxNmY4Lk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzBhNGNiNDFlNmVmNzQ5MzZiMDQwYTA2ZjYyOTQ1NzU1ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185OGMyZTQwNTkxYmE0ODBhODIxODJjMGQ3ZmM3YTMyMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185OGMyZTQwNTkxYmE0ODBhODIxODJjMGQ3ZmM3YTMyMCxAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZjRkMGFjZWFjYzI5NDE5MGFkYzhlYjkwNDAwZjEzMTkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mNGQwYWNlYWNjMjk0MTkwYWRjOGViOTA0MDBmMTMxOS5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lX2Y0ZDBhY2VhY2MyOTQxOTBhZGM4ZWI5MDQwMGYxMzE5LlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc185OGMyZTQwNTkxYmE0ODBhODIxODJjMGQ3ZmM3YTMyMC5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZjRkMGFjZWFjYzI5NDE5MGFkYzhlYjkwNDAwZjEzMTkpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMGE0Y2I0MWU2ZWY3NDkzNmIwNDBhMDZmNjI5NDU3NTUuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzk4YzJlNDA1OTFiYTQ4MGE4MjE4MmMwZDdmYzdhMzIwKTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV8yN2VmYjRhZDc3Mzg0ZjcyODA5NDVlYzE3NDI2MTZmOC5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8wYTRjYjQxZTZlZjc0OTM2YjA0MGEwNmY2Mjk0NTc1NTtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfNTk5NGZiMTdhZTViNDY5YmJhMmUzMGU1MTk5YTM5MDcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlXzU5OTRmYjE3YWU1YjQ2OWJiYTJlMzBlNTE5OWEzOTA3KTtcclxuVmlzdWFsU3RhdGVfNTk5NGZiMTdhZTViNDY5YmJhMmUzMGU1MTk5YTM5MDcuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9mY2ZjYmUxNGRjYzY0MDJjOTk1OTE3ZjI2ZjA2YjBlOSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfODhjYTE1ZWMxYjE2NDVkNmJlOWQyNTgwODM1ZDBhYmEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfODhjYTE1ZWMxYjE2NDVkNmJlOWQyNTgwODM1ZDBhYmEsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2ZhOWE0YzQxNjY2YzRmY2JiOTc1MzE2ODdiM2IyYzYzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfZmE5YTRjNDE2NjZjNGZjYmI5NzUzMTY4N2IzYjJjNjMuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV9mYTlhNGM0MTY2NmM0ZmNiYjk3NTMxNjg3YjNiMmM2My5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfODhjYTE1ZWMxYjE2NDVkNmJlOWQyNTgwODM1ZDBhYmEuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lX2ZhOWE0YzQxNjY2YzRmY2JiOTc1MzE2ODdiM2IyYzYzKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2ZjZmNiZTE0ZGNjNjQwMmM5OTU5MTdmMjZmMDZiMGU5LkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc184OGNhMTVlYzFiMTY0NWQ2YmU5ZDI1ODA4MzVkMGFiYSk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfNTk5NGZiMTdhZTViNDY5YmJhMmUzMGU1MTk5YTM5MDcuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZmNmY2JlMTRkY2M2NDAyYzk5NTkxN2YyNmYwNmIwZTk7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlXzM4ZjZjOWNmYzI0ZTQ4MThiZTI4NmUxMjJhODRhNjZmID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfMzhmNmM5Y2ZjMjRlNDgxOGJlMjg2ZTEyMmE4NGE2NmYpO1xyXG5WaXN1YWxTdGF0ZV8zOGY2YzljZmMyNGU0ODE4YmUyODZlMTIyYTg0YTY2Zi5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF8xNjkyYzdlOThiYjE0ZjdmODE4MTc5ZTE2ZmNhMTY1YiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZjVjZDY3ZTE0YjBhNDMzNTkxNDA4ZWEwN2E0ZTgyNzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZjVjZDY3ZTE0YjBhNDMzNTkxNDA4ZWEwN2E0ZTgyNzYsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzZkMGY1YzE2ODAzNjQ0MDE4NTQ1OGUyZThlNWFlNTVhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNmQwZjVjMTY4MDM2NDQwMTg1NDU4ZTJlOGU1YWU1NWEuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82ZDBmNWMxNjgwMzY0NDAxODU0NThlMmU4ZTVhZTU1YS5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZjVjZDY3ZTE0YjBhNDMzNTkxNDA4ZWEwN2E0ZTgyNzYuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzZkMGY1YzE2ODAzNjQ0MDE4NTQ1OGUyZThlNWFlNTVhKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkXzE2OTJjN2U5OGJiMTRmN2Y4MTgxNzllMTZmY2ExNjViLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19mNWNkNjdlMTRiMGE0MzM1OTE0MDhlYTA3YTRlODI3Nik7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMzhmNmM5Y2ZjMjRlNDgxOGJlMjg2ZTEyMmE4NGE2NmYuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfMTY5MmM3ZTk4YmIxNGY3ZjgxODE3OWUxNmZjYTE2NWI7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF82NWM1N2I4ZDVhZmI0OGQ3YjQ1NTE5ZjFkZWVkZDVhOC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2E3NDk1MjkyYzJjZTQ2MzNhYmQ4NDJhMTVhMGQ4OWZlKTtcclxuVmlzdWFsU3RhdGVHcm91cF82NWM1N2I4ZDVhZmI0OGQ3YjQ1NTE5ZjFkZWVkZDVhOC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzI3ZWZiNGFkNzczODRmNzI4MDk0NWVjMTc0MjYxNmY4KTtcclxuVmlzdWFsU3RhdGVHcm91cF82NWM1N2I4ZDVhZmI0OGQ3YjQ1NTE5ZjFkZWVkZDVhOC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzU5OTRmYjE3YWU1YjQ2OWJiYTJlMzBlNTE5OWEzOTA3KTtcclxuVmlzdWFsU3RhdGVHcm91cF82NWM1N2I4ZDVhZmI0OGQ3YjQ1NTE5ZjFkZWVkZDVhOC5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzM4ZjZjOWNmYzI0ZTQ4MThiZTI4NmUxMjJhODRhNjZmKTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfNjVjNTdiOGQ1YWZiNDhkN2I0NTUxOWYxZGVlZGQ1YTgpO1xyXG5cclxudmFyIEJvcmRlcl9lZmI5ZTZlOTEwYWU0NWQ2OTQyN2M0YzcwM2I0YTU1MiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfZWZiOWU2ZTkxMGFlNDVkNjk0MjdjNGM3MDNiNGE1NTIpO1xyXG5Cb3JkZXJfZWZiOWU2ZTkxMGFlNDVkNjk0MjdjNGM3MDNiNGE1NTIuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyX2VmYjllNmU5MTBhZTQ1ZDY5NDI3YzRjNzAzYjRhNTUyLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyXzMxYmVkOTgyYWFkZTQ5MTBhMjIyZGJkZGNmYWM2YTI0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfMzFiZWQ5ODJhYWRlNDkxMGEyMjJkYmRkY2ZhYzZhMjQpO1xyXG5Db250ZW50UHJlc2VudGVyXzMxYmVkOTgyYWFkZTQ5MTBhMjIyZGJkZGNmYWM2YTI0Lk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfZGM1MTM3MDljOTYyNDE4MzhlOTRkNTM5M2I1YWVjMGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZGM1MTM3MDljOTYyNDE4MzhlOTRkNTM5M2I1YWVjMGUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfOThiNWY5ODIwNjdlNDAzNmE2YTI2MTQyNWVkOWQxZjEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV85OGI1Zjk4MjA2N2U0MDM2YTZhMjYxNDI1ZWQ5ZDFmMS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19kYzUxMzcwOWM5NjI0MTgzOGU5NGQ1MzkzYjVhZWMwZS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzk4YjVmOTgyMDY3ZTQwMzZhNmEyNjE0MjVlZDlkMWYxO1xyXG5cclxuXHJcbkJpbmRpbmdfZGM1MTM3MDljOTYyNDE4MzhlOTRkNTM5M2I1YWVjMGUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfODA1NWZmZTk2OTJkNGJmY2FkZTJiNjA4MmVjZjcyMWI7XHJcblxyXG52YXIgQmluZGluZ184YzUzY2RhYWFhNTM0ZmJlODVkYzIxZTRkMmFjZGY0OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184YzUzY2RhYWFhNTM0ZmJlODVkYzIxZTRkMmFjZGY0OC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMzQ0ZmI4MTQ0ZmM2NDRhYjk1ZjU3ZTcwMzdlYjkxOTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8zNDRmYjgxNDRmYzY0NGFiOTVmNTdlNzAzN2ViOTE5Mi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ184YzUzY2RhYWFhNTM0ZmJlODVkYzIxZTRkMmFjZGY0OC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzM0NGZiODE0NGZjNjQ0YWI5NWY1N2U3MDM3ZWI5MTkyO1xyXG5cclxuXHJcbkJpbmRpbmdfOGM1M2NkYWFhYTUzNGZiZTg1ZGMyMWU0ZDJhY2RmNDguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfODA1NWZmZTk2OTJkNGJmY2FkZTJiNjA4MmVjZjcyMWI7XHJcblxyXG52YXIgQmluZGluZ19mYmE1M2M2OTcyNDA0NmRkOTdjYTNlYjZmODBiMTExNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19mYmE1M2M2OTcyNDA0NmRkOTdjYTNlYjZmODBiMTExNC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNTU1MGVkY2Q1OTBlNGJjZjlhYzhmMzczZGYxOGI3MTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV81NTUwZWRjZDU5MGU0YmNmOWFjOGYzNzNkZjE4YjcxMi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19mYmE1M2M2OTcyNDA0NmRkOTdjYTNlYjZmODBiMTExNC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzU1NTBlZGNkNTkwZTRiY2Y5YWM4ZjM3M2RmMThiNzEyO1xyXG5cclxuXHJcbkJpbmRpbmdfZmJhNTNjNjk3MjQwNDZkZDk3Y2EzZWI2ZjgwYjExMTQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfODA1NWZmZTk2OTJkNGJmY2FkZTJiNjA4MmVjZjcyMWI7XHJcblxyXG52YXIgQmluZGluZ18yNGQ4M2M5ZTE1NjA0ZTYxYTU3ZWFjZWMxMTY2NjI3NCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18yNGQ4M2M5ZTE1NjA0ZTYxYTU3ZWFjZWMxMTY2NjI3NC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzY1YTNlZTZjZmIzNTRiZjY5NTM0ZWIzZTk5YjNkOTlhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNjVhM2VlNmNmYjM1NGJmNjk1MzRlYjNlOTliM2Q5OWEuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMjRkODNjOWUxNTYwNGU2MWE1N2VhY2VjMTE2NjYyNzQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV82NWEzZWU2Y2ZiMzU0YmY2OTUzNGViM2U5OWIzZDk5YTtcclxuXHJcblxyXG5CaW5kaW5nXzI0ZDgzYzllMTU2MDRlNjFhNTdlYWNlYzExNjY2Mjc0LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzgwNTVmZmU5NjkyZDRiZmNhZGUyYjYwODJlY2Y3MjFiO1xyXG5cclxudmFyIEJpbmRpbmdfOTg2MjgzZjg2NTMxNDkxZThlMTdlNmEzNmU2NWI1NjUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOTg2MjgzZjg2NTMxNDkxZThlMTdlNmEzNmU2NWI1NjUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNjc4Zjc0MWY3MDIzNGJmZmIwMjEyMDdiOGM4MTY5NDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV82NzhmNzQxZjcwMjM0YmZmYjAyMTIwN2I4YzgxNjk0Ni5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185ODYyODNmODY1MzE0OTFlOGUxN2U2YTM2ZTY1YjU2NS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzY3OGY3NDFmNzAyMzRiZmZiMDIxMjA3YjhjODE2OTQ2O1xyXG5cclxuXHJcbkJpbmRpbmdfOTg2MjgzZjg2NTMxNDkxZThlMTdlNmEzNmU2NWI1NjUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfODA1NWZmZTk2OTJkNGJmY2FkZTJiNjA4MmVjZjcyMWI7XHJcblxyXG5cclxuQm9yZGVyX2VmYjllNmU5MTBhZTQ1ZDY5NDI3YzRjNzAzYjRhNTUyLkNoaWxkID0gQ29udGVudFByZXNlbnRlcl8zMWJlZDk4MmFhZGU0OTEwYTIyMmRiZGRjZmFjNmEyNDtcclxuXHJcbnZhciBCaW5kaW5nXzVjNmYzODQ4OTg0MTQ0M2JiNWNlNmQ4MmExNzRiODQ0ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nXzVjNmYzODQ4OTg0MTQ0M2JiNWNlNmQ4MmExNzRiODQ0LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV80ODM1OTllNjkwOTQ0NDYxYmVhMzI0OWQwZTdiZTM3OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzQ4MzU5OWU2OTA5NDQ0NjFiZWEzMjQ5ZDBlN2JlMzc4Lk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nXzVjNmYzODQ4OTg0MTQ0M2JiNWNlNmQ4MmExNzRiODQ0LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfNDgzNTk5ZTY5MDk0NDQ2MWJlYTMyNDlkMGU3YmUzNzg7XHJcblxyXG5cclxuQmluZGluZ181YzZmMzg0ODk4NDE0NDNiYjVjZTZkODJhMTc0Yjg0NC5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV84MDU1ZmZlOTY5MmQ0YmZjYWRlMmI2MDgyZWNmNzIxYjtcclxuXHJcblxyXG5Cb3JkZXJfZjdlNjY5ZmUyODA3NGQwZmE0ODU2YTBhZTY5YzRkYzguQ2hpbGQgPSBCb3JkZXJfZWZiOWU2ZTkxMGFlNDVkNjk0MjdjNGM3MDNiNGE1NTI7XHJcblxyXG52YXIgQmluZGluZ19mZTkxYTEzZTE3MTU0NzhlOTlhNjQ2Y2VhZjY5NWVmZiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ19mZTkxYTEzZTE3MTU0NzhlOTlhNjQ2Y2VhZjY5NWVmZi5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNTZiZTUxNzA3ZTBkNGU4MjllN2ZhZDE2ZDQ2Yzg4NGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV81NmJlNTE3MDdlMGQ0ZTgyOWU3ZmFkMTZkNDZjODg0ZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19mZTkxYTEzZTE3MTU0NzhlOTlhNjQ2Y2VhZjY5NWVmZi5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzU2YmU1MTcwN2UwZDRlODI5ZTdmYWQxNmQ0NmM4ODRlO1xyXG5cclxuXHJcbkJpbmRpbmdfZmU5MWExM2UxNzE1NDc4ZTk5YTY0NmNlYWY2OTVlZmYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfODA1NWZmZTk2OTJkNGJmY2FkZTJiNjA4MmVjZjcyMWI7XHJcblxyXG52YXIgQmluZGluZ18wYTk1ZWNkMWU1NTU0NDE4YTBlYmQ4YTg4YzhmZWIzNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18wYTk1ZWNkMWU1NTU0NDE4YTBlYmQ4YTg4YzhmZWIzNC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzU3N2E2YWYwNTMyYjRkN2Q5NWNjMmU3NWFlOGQ0ZWZiID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfNTc3YTZhZjA1MzJiNGQ3ZDk1Y2MyZTc1YWU4ZDRlZmIuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfMGE5NWVjZDFlNTU1NDQxOGEwZWJkOGE4OGM4ZmViMzQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV81NzdhNmFmMDUzMmI0ZDdkOTVjYzJlNzVhZThkNGVmYjtcclxuXHJcblxyXG5CaW5kaW5nXzBhOTVlY2QxZTU1NTQ0MThhMGViZDhhODhjOGZlYjM0LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzgwNTVmZmU5NjkyZDRiZmNhZGUyYjYwODJlY2Y3MjFiO1xyXG5cclxudmFyIEJpbmRpbmdfYWIwODBmYTZiM2VlNDJhNWIxMTMyYzJmZDZkMjQ3MDggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfYWIwODBmYTZiM2VlNDJhNWIxMTMyYzJmZDZkMjQ3MDguUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMjJlZWIyMTBjYzg4NDJiNDljZGMxNDhlMGE0YTYzY2YgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8yMmVlYjIxMGNjODg0MmI0OWNkYzE0OGUwYTRhNjNjZi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19hYjA4MGZhNmIzZWU0MmE1YjExMzJjMmZkNmQyNDcwOC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzIyZWViMjEwY2M4ODQyYjQ5Y2RjMTQ4ZTBhNGE2M2NmO1xyXG5cclxuXHJcbkJpbmRpbmdfYWIwODBmYTZiM2VlNDJhNWIxMTMyYzJmZDZkMjQ3MDguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfODA1NWZmZTk2OTJkNGJmY2FkZTJiNjA4MmVjZjcyMWI7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfMzFiZWQ5ODJhYWRlNDkxMGEyMjJkYmRkY2ZhYzZhMjQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ19kYzUxMzcwOWM5NjI0MTgzOGU5NGQ1MzkzYjVhZWMwZSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMzFiZWQ5ODJhYWRlNDkxMGEyMjJkYmRkY2ZhYzZhMjQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfOGM1M2NkYWFhYTUzNGZiZTg1ZGMyMWU0ZDJhY2RmNDgpO1xyXG5Db250ZW50UHJlc2VudGVyXzMxYmVkOTgyYWFkZTQ5MTBhMjIyZGJkZGNmYWM2YTI0LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ19mYmE1M2M2OTcyNDA0NmRkOTdjYTNlYjZmODBiMTExNCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMzFiZWQ5ODJhYWRlNDkxMGEyMjJkYmRkY2ZhYzZhMjQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ18yNGQ4M2M5ZTE1NjA0ZTYxYTU3ZWFjZWMxMTY2NjI3NCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfMzFiZWQ5ODJhYWRlNDkxMGEyMjJkYmRkY2ZhYzZhMjQuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfOTg2MjgzZjg2NTMxNDkxZThlMTdlNmEzNmU2NWI1NjUpO1xyXG5Cb3JkZXJfZWZiOWU2ZTkxMGFlNDVkNjk0MjdjNGM3MDNiNGE1NTIuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nXzVjNmYzODQ4OTg0MTQ0M2JiNWNlNmQ4MmExNzRiODQ0KTtcclxuQm9yZGVyX2Y3ZTY2OWZlMjgwNzRkMGZhNDg1NmEwYWU2OWM0ZGM4LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ19mZTkxYTEzZTE3MTU0NzhlOTlhNjQ2Y2VhZjY5NWVmZik7XHJcbkJvcmRlcl9mN2U2NjlmZTI4MDc0ZDBmYTQ4NTZhMGFlNjljNGRjOC5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nXzBhOTVlY2QxZTU1NTQ0MThhMGViZDhhODhjOGZlYjM0KTtcclxuQm9yZGVyX2Y3ZTY2OWZlMjgwNzRkMGZhNDg1NmEwYWU2OWM0ZGM4LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nX2FiMDgwZmE2YjNlZTQyYTViMTEzMmMyZmQ2ZDI0NzA4KTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzk4YzJlNDA1OTFiYTQ4MGE4MjE4MmMwZDdmYzdhMzIwLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzI4NGUzMmY3ODQwMDQwZmE5MjI2YjQ4MjY2NGYzYTliLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMjg0ZTMyZjc4NDAwNDBmYTkyMjZiNDgyNjY0ZjNhOWIsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8yODRlMzJmNzg0MDA0MGZhOTIyNmI0ODI2NjRmM2E5YiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzI4NGUzMmY3ODQwMDQwZmE5MjI2YjQ4MjY2NGYzYTliLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMjg0ZTMyZjc4NDAwNDBmYTkyMjZiNDgyNjY0ZjNhOWIpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzk4YzJlNDA1OTFiYTQ4MGE4MjE4MmMwZDdmYzdhMzIwLCBCb3JkZXJfZWZiOWU2ZTkxMGFlNDVkNjk0MjdjNGM3MDNiNGE1NTIpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzg4Y2ExNWVjMWIxNjQ1ZDZiZTlkMjU4MDgzNWQwYWJhLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5Xzg5ZTI3OWY4ZjYwNzRjZGRhZjY0NWMxOWZjOGQ1Y2MzLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfODllMjc5ZjhmNjA3NGNkZGFmNjQ1YzE5ZmM4ZDVjYzMsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV84OWUyNzlmOGY2MDc0Y2RkYWY2NDVjMTlmYzhkNWNjMywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5Xzg5ZTI3OWY4ZjYwNzRjZGRhZjY0NWMxOWZjOGQ1Y2MzLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfODllMjc5ZjhmNjA3NGNkZGFmNjQ1YzE5ZmM4ZDVjYzMpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzg4Y2ExNWVjMWIxNjQ1ZDZiZTlkMjU4MDgzNWQwYWJhLCBCb3JkZXJfZWZiOWU2ZTkxMGFlNDVkNjk0MjdjNGM3MDNiNGE1NTIpO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2Y1Y2Q2N2UxNGIwYTQzMzU5MTQwOGVhMDdhNGU4Mjc2LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2IxOGQ2OGE4NmYxNTRlYWY5YjRiMjlkNmFlOTY1YjVhLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfYjE4ZDY4YTg2ZjE1NGVhZjliNGIyOWQ2YWU5NjViNWEsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9iMThkNjhhODZmMTU0ZWFmOWI0YjI5ZDZhZTk2NWI1YSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2IxOGQ2OGE4NmYxNTRlYWY5YjRiMjlkNmFlOTY1YjVhLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfYjE4ZDY4YTg2ZjE1NGVhZjliNGIyOWQ2YWU5NjViNWEpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2Y1Y2Q2N2UxNGIwYTQzMzU5MTQwOGVhMDdhNGU4Mjc2LCBCb3JkZXJfZWZiOWU2ZTkxMGFlNDVkNjk0MjdjNGM3MDNiNGE1NTIpO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV84MDU1ZmZlOTY5MmQ0YmZjYWRlMmI2MDgyZWNmNzIxYi5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfZjdlNjY5ZmUyODA3NGQwZmE0ODU2YTBhZTY5YzRkYzg7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlXzgwNTVmZmU5NjkyZDRiZmNhZGUyYjYwODJlY2Y3MjFiO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD43MjAyQkE0OUVBN0RDMDVCNkI5QTYyMkVGNjRCMDlDRDwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgNjowOTo0ODwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BQYWdldXBsb2Fkx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5QYWdlVXBsb2FkKTtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlR5cGVJbnN0YW50aWF0aW9uSGVscGVyLkluc3RhbnRpYXRlKHR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGF1dG8tZ2VuZXJhdGVkIGJ5IFwiQyMvWEFNTCBmb3IgSFRNTDVcIlxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxucGFydGlhbCBjbGFzcyBQYWdlVXBsb2FkIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxucHJvdGVjdGVkIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbiBidG5DYW5jZWw7XHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxQYWdlVXBsb2FkLnhhbWxcIjtcclxuICAgICAgICAgICAgfVxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAwMTg0XHJcblxyXG5cclxuXHJcbnZhciBHcmlkXzk3OTYyYjRlODYwNjQ1MDk4NjQ1ZTk3NmFhMzMyZjExID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxudmFyIFJvd0RlZmluaXRpb25fZGRhNGE3YjUxZjhjNDA0MDg5NWUyNzcxZGZiNWQwYmMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMzdmZTBmODIyMWE0NGRkY2JiMWRmNDVhNzc0ZWE4NGIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fMzkwMGQ0NzY3YmFmNGUwZWJlYzIwZmY2YmE1OWI3OTggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxudmFyIFJvd0RlZmluaXRpb25fNjhkMmY0YjI5YmYyNDRlNmIyMTE4ZjRjZTgxNDQ2OWIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUm93RGVmaW5pdGlvbigpO1xyXG5cclxuR3JpZF85Nzk2MmI0ZTg2MDY0NTA5ODY0NWU5NzZhYTMzMmYxMS5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl9kZGE0YTdiNTFmOGM0MDQwODk1ZTI3NzFkZmI1ZDBiYyk7XHJcbkdyaWRfOTc5NjJiNGU4NjA2NDUwOTg2NDVlOTc2YWEzMzJmMTEuUm93RGVmaW5pdGlvbnMuQWRkKFJvd0RlZmluaXRpb25fMzdmZTBmODIyMWE0NGRkY2JiMWRmNDVhNzc0ZWE4NGIpO1xyXG5HcmlkXzk3OTYyYjRlODYwNjQ1MDk4NjQ1ZTk3NmFhMzMyZjExLlJvd0RlZmluaXRpb25zLkFkZChSb3dEZWZpbml0aW9uXzM5MDBkNDc2N2JhZjRlMGViZWMyMGZmNmJhNTliNzk4KTtcclxuR3JpZF85Nzk2MmI0ZTg2MDY0NTA5ODY0NWU5NzZhYTMzMmYxMS5Sb3dEZWZpbml0aW9ucy5BZGQoUm93RGVmaW5pdGlvbl82OGQyZjRiMjliZjI0NGU2YjIxMThmNGNlODE0NDY5Yik7XHJcblxyXG52YXIgQm9yZGVyX2E3Nzg1YmY3NmY4MTRlNWZhNWRjYzVhYzE3OTE5Y2FlID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG5Cb3JkZXJfYTc3ODViZjc2ZjgxNGU1ZmE1ZGNjNWFjMTc5MTljYWUuVmVydGljYWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WZXJ0aWNhbEFsaWdubWVudC5DZW50ZXI7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQuU2V0Um93KEJvcmRlcl9hNzc4NWJmNzZmODE0ZTVmYTVkY2M1YWMxNzkxOWNhZSwwKTtcclxudmFyIENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV9lZDZkNmMzZWZjZDU0YTNiOGEwZGRjZjcxMTIyM2QxNSA9IG5ldyBnbG9iYWw6OkNTSFRNTDUuRXh0ZW5zaW9ucy5GaWxlT3BlbkRpYWxvZy5Db250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKCk7XHJcbkNvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV9lZDZkNmMzZWZjZDU0YTNiOGEwZGRjZjcxMTIyM2QxNS5GaWxlT3BlbmVkICs9IE9uRmlsZU9wZW5lZDtcclxuQ29udHJvbEZvckRpc3BsYXlpbmdUaGVGaWxlT3BlX2VkNmQ2YzNlZmNkNTRhM2I4YTBkZGNmNzExMjIzZDE1LkZpbHRlciA9IEBcIiouanNvbiwqLnR4dFwiO1xyXG5Db250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVfZWQ2ZDZjM2VmY2Q1NGEzYjhhMGRkY2Y3MTEyMjNkMTUuUmVzdWx0S2luZCA9IGdsb2JhbDo6Q1NIVE1MNS5FeHRlbnNpb25zLkZpbGVPcGVuRGlhbG9nLlJlc3VsdEtpbmQuVGV4dDtcclxuXHJcbkJvcmRlcl9hNzc4NWJmNzZmODE0ZTVmYTVkY2M1YWMxNzkxOWNhZS5DaGlsZCA9IENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZV9lZDZkNmMzZWZjZDU0YTNiOGEwZGRjZjcxMTIyM2QxNTtcclxuXHJcblxyXG52YXIgQnV0dG9uXzk1MWQ4NWQ0NjgwMzRlMDdiNzYyMzFhNDg1MWNmYTgyID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJ1dHRvbigpO1xyXG5CdXR0b25fOTUxZDg1ZDQ2ODAzNGUwN2I3NjIzMWE0ODUxY2ZhODIuQ29udGVudCA9IEBcItCf0YDQtdC00YvQtNGD0YnQsNGPINGB0YLRgNCw0L3QuNGG0LBcIjtcclxudGhpcy5SZWdpc3Rlck5hbWUoXCJidG5DYW5jZWxcIiwgQnV0dG9uXzk1MWQ4NWQ0NjgwMzRlMDdiNzYyMzFhNDg1MWNmYTgyKTtcclxuQnV0dG9uXzk1MWQ4NWQ0NjgwMzRlMDdiNzYyMzFhNDg1MWNmYTgyLk5hbWUgPSBcImJ0bkNhbmNlbFwiO1xyXG5CdXR0b25fOTUxZDg1ZDQ2ODAzNGUwN2I3NjIzMWE0ODUxY2ZhODIuQ2xpY2sgKz0gQnRuQ2FuY2VsX0NsaWNrO1xyXG5CdXR0b25fOTUxZDg1ZDQ2ODAzNGUwN2I3NjIzMWE0ODUxY2ZhODIuV2lkdGggPSAyNTBEO1xyXG5CdXR0b25fOTUxZDg1ZDQ2ODAzNGUwN2I3NjIzMWE0ODUxY2ZhODIuSGVpZ2h0ID0gNTBEO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5HcmlkLlNldFJvdyhCdXR0b25fOTUxZDg1ZDQ2ODAzNGUwN2I3NjIzMWE0ODUxY2ZhODIsMSk7XHJcbkJ1dHRvbl85NTFkODVkNDY4MDM0ZTA3Yjc2MjMxYTQ4NTFjZmE4Mi5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMjQ5LCBHID0gKGJ5dGUpMjIyLCBCID0gKGJ5dGUpMjQyIH0pO1xyXG5CdXR0b25fOTUxZDg1ZDQ2ODAzNGUwN2I3NjIzMWE0ODUxY2ZhODIuQm9yZGVyVGhpY2tuZXNzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlRoaWNrbmVzcygxKTtcclxuQnV0dG9uXzk1MWQ4NWQ0NjgwMzRlMDdiNzYyMzFhNDg1MWNmYTgyLkJvcmRlckJydXNoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMTAwLCBHID0gKGJ5dGUpMTAwLCBCID0gKGJ5dGUpMTAwIH0pO1xyXG5CdXR0b25fOTUxZDg1ZDQ2ODAzNGUwN2I3NjIzMWE0ODUxY2ZhODIuVmVydGljYWxBbGlnbm1lbnQgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5WZXJ0aWNhbEFsaWdubWVudC5Cb3R0b207XHJcbkJ1dHRvbl85NTFkODVkNDY4MDM0ZTA3Yjc2MjMxYTQ4NTFjZmE4Mi5Ib3Jpem9udGFsQWxpZ25tZW50ID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuSG9yaXpvbnRhbEFsaWdubWVudC5DZW50ZXI7XHJcbkJ1dHRvbl85NTFkODVkNDY4MDM0ZTA3Yjc2MjMxYTQ4NTFjZmE4Mi5Gb250U2l6ZSA9IDIwRDtcclxudmFyIENvbnRyb2xUZW1wbGF0ZV8zMzE1ZWFhODk1MDQ0YmJjYTZjMjdlYjA2MDc4MTQ1NiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250cm9sVGVtcGxhdGUoKTtcclxuQ29udHJvbFRlbXBsYXRlXzMzMTVlYWE4OTUwNDRiYmNhNmMyN2ViMDYwNzgxNDU2LlRhcmdldFR5cGUgPSB0eXBlb2YoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQnV0dG9uKTtcclxuQ29udHJvbFRlbXBsYXRlXzMzMTVlYWE4OTUwNDRiYmNhNmMyN2ViMDYwNzgxNDU2LlNldE1ldGhvZFRvSW5zdGFudGlhdGVGcmFtZXdvcmtUZW1wbGF0ZSgoU3lzdGVtLkZ1bmM8V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRyb2wsV2luZG93cy5VSS5YYW1sLlRlbXBsYXRlSW5zdGFuY2U+KXRoaXMuSW5zdGFudGlhdGVfQ29udHJvbFRlbXBsYXRlXzMzMTVlYWE4OTUwNDRiYmNhNmMyN2ViMDYwNzgxNDU2KTtcclxuXHJcbkJ1dHRvbl85NTFkODVkNDY4MDM0ZTA3Yjc2MjMxYTQ4NTFjZmE4Mi5UZW1wbGF0ZSA9IENvbnRyb2xUZW1wbGF0ZV8zMzE1ZWFhODk1MDQ0YmJjYTZjMjdlYjA2MDc4MTQ1NjtcclxuXHJcblxyXG5HcmlkXzk3OTYyYjRlODYwNjQ1MDk4NjQ1ZTk3NmFhMzMyZjExLkNoaWxkcmVuLkFkZChCb3JkZXJfYTc3ODViZjc2ZjgxNGU1ZmE1ZGNjNWFjMTc5MTljYWUpO1xyXG5HcmlkXzk3OTYyYjRlODYwNjQ1MDk4NjQ1ZTk3NmFhMzMyZjExLkNoaWxkcmVuLkFkZChCdXR0b25fOTUxZDg1ZDQ2ODAzNGUwN2I3NjIzMWE0ODUxY2ZhODIpO1xyXG5cclxuXHJcbnRoaXMuQ29udGVudCA9IEdyaWRfOTc5NjJiNGU4NjA2NDUwOTg2NDVlOTc2YWEzMzJmMTE7XHJcblxyXG5cclxuXHJcbmJ0bkNhbmNlbCA9IEJ1dHRvbl85NTFkODVkNDY4MDM0ZTA3Yjc2MjMxYTQ4NTFjZmE4MjtcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JRW51bWVyYWJsZTxnbG9iYWw6OlN5c3RlbS5UdXBsZTxnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0LCBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHksIGludD8+PiBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzE2MThjZDlmMWJkYzRiNDY4MTRhYzM0MGI3NThkMzYwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IHJvb3RUYXJnZXRPYmplY3RJbnN0YW5jZSlcclxue1xyXG4gIFxyXG55aWVsZCBicmVhaztcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMTYxOGNkOWYxYmRjNGI0NjgxNGFjMzQwYjc1OGQzNjAgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8xNjE4Y2Q5ZjFiZGM0YjQ2ODE0YWMzNDBiNzU4ZDM2MCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRBbmltYXRpb25WYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzE2MThjZDlmMWJkYzRiNDY4MTRhYzM0MGI3NThkMzYwIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldExvY2FsVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5PYmplY3QgZ2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV8xNjE4Y2Q5ZjFiZGM0YjQ2ODE0YWMzNDBiNzU4ZDM2MCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICByZXR1cm4gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5KTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyBnbG9iYWw6OlN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLklFbnVtZXJhYmxlPGdsb2JhbDo6U3lzdGVtLlR1cGxlPGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QsIGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSwgaW50Pz4+IGFjY2Vzc1Zpc3VhbFN0YXRlUHJvcGVydHlfZDQ5MWRkNDY3ODc0NGZmMWFlOTQ4OTQ3NWM0NTM2Y2IgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3Qgcm9vdFRhcmdldE9iamVjdEluc3RhbmNlKVxyXG57XHJcbiAgXHJcbnlpZWxkIGJyZWFrO1xyXG59XHJcblxyXG5cclxucHVibGljIHZvaWQgc2V0VmlzdWFsU3RhdGVQcm9wZXJ0eV9kNDkxZGQ0Njc4NzQ0ZmYxYWU5NDg5NDc1YzQ1MzZjYiAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRWaXN1YWxTdGF0ZVZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRBbmltYXRpb25WaXN1YWxTdGF0ZVByb3BlcnR5X2Q0OTFkZDQ2Nzg3NDRmZjFhZTk0ODk0NzVjNDUzNmNiIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldEFuaW1hdGlvblZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRMb2NhbFZpc3VhbFN0YXRlUHJvcGVydHlfZDQ5MWRkNDY3ODc0NGZmMWFlOTQ4OTQ3NWM0NTM2Y2IgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0TG9jYWxWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLk9iamVjdCBnZXRWaXN1YWxTdGF0ZVByb3BlcnR5X2Q0OTFkZDQ2Nzg3NDRmZjFhZTk0ODk0NzVjNDUzNmNiIChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIHJldHVybiBmaW5hbFRhcmdldEluc3RhbmNlLkdldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHkpO1xyXG59XHJcblxyXG5cclxucHVibGljIGdsb2JhbDo6U3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuSUVudW1lcmFibGU8Z2xvYmFsOjpTeXN0ZW0uVHVwbGU8Z2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCwgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5LCBpbnQ/Pj4gYWNjZXNzVmlzdWFsU3RhdGVQcm9wZXJ0eV85ZDE0ZmE3NDNmYjg0ZmM5ODU1MzkxYWVhODgzNzdmNCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCByb290VGFyZ2V0T2JqZWN0SW5zdGFuY2UpXHJcbntcclxuICBcclxueWllbGQgYnJlYWs7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgdm9pZCBzZXRWaXN1YWxTdGF0ZVByb3BlcnR5XzlkMTRmYTc0M2ZiODRmYzk4NTUzOTFhZWE4ODM3N2Y0IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5T2JqZWN0IGZpbmFsVGFyZ2V0SW5zdGFuY2UsIG9iamVjdCB2YWx1ZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgKGZpbmFsVGFyZ2V0SW5zdGFuY2UpLlNldFZpc3VhbFN0YXRlVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldEFuaW1hdGlvblZpc3VhbFN0YXRlUHJvcGVydHlfOWQxNGZhNzQzZmI4NGZjOTg1NTM5MWFlYTg4Mzc3ZjQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSwgb2JqZWN0IHZhbHVlKVxyXG57XHJcbiAgXHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlLkdldFR5cGUoKTtcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUgPSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZS5HZXRQcm9wZXJ0eShcIkJhY2tncm91bmRcIikuRGVjbGFyaW5nVHlwZTtcclxuZ2xvYmFsOjpTeXN0ZW0uUmVmbGVjdGlvbi5GaWVsZEluZm8gcHJvcGVydHlGaWVsZCA9IHByb3BlcnR5RGVjbGFyaW5nVHlwZS5HZXRGaWVsZChcIkJhY2tncm91bmRQcm9wZXJ0eVwiKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5IHByb3BlcnR5ID0gKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSlwcm9wZXJ0eUZpZWxkLkdldFZhbHVlKG51bGwpO1xyXG5cclxuICAoZmluYWxUYXJnZXRJbnN0YW5jZSkuU2V0QW5pbWF0aW9uVmFsdWUocHJvcGVydHksIHZhbHVlKTtcclxufVxyXG5cclxuXHJcbnB1YmxpYyB2b2lkIHNldExvY2FsVmlzdWFsU3RhdGVQcm9wZXJ0eV85ZDE0ZmE3NDNmYjg0ZmM5ODU1MzkxYWVhODgzNzdmNCAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeU9iamVjdCBmaW5hbFRhcmdldEluc3RhbmNlLCBvYmplY3QgdmFsdWUpXHJcbntcclxuICBcclxuZ2xvYmFsOjpTeXN0ZW0uVHlwZSBmaW5hbFRhcmdldEluc3RhbmNlVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VHlwZSgpO1xyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIHByb3BlcnR5RGVjbGFyaW5nVHlwZSA9IGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlLkdldFByb3BlcnR5KFwiQmFja2dyb3VuZFwiKS5EZWNsYXJpbmdUeXBlO1xyXG5nbG9iYWw6OlN5c3RlbS5SZWZsZWN0aW9uLkZpZWxkSW5mbyBwcm9wZXJ0eUZpZWxkID0gcHJvcGVydHlEZWNsYXJpbmdUeXBlLkdldEZpZWxkKFwiQmFja2dyb3VuZFByb3BlcnR5XCIpO1xyXG5nbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkgcHJvcGVydHkgPSAoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGVwZW5kZW5jeVByb3BlcnR5KXByb3BlcnR5RmllbGQuR2V0VmFsdWUobnVsbCk7XHJcblxyXG4gIChmaW5hbFRhcmdldEluc3RhbmNlKS5TZXRMb2NhbFZhbHVlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbn1cclxuXHJcblxyXG5wdWJsaWMgZ2xvYmFsOjpTeXN0ZW0uT2JqZWN0IGdldFZpc3VhbFN0YXRlUHJvcGVydHlfOWQxNGZhNzQzZmI4NGZjOTg1NTM5MWFlYTg4Mzc3ZjQgKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lPYmplY3QgZmluYWxUYXJnZXRJbnN0YW5jZSlcclxue1xyXG4gIFxyXG5nbG9iYWw6OlN5c3RlbS5UeXBlIGZpbmFsVGFyZ2V0SW5zdGFuY2VUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZS5HZXRUeXBlKCk7XHJcbmdsb2JhbDo6U3lzdGVtLlR5cGUgcHJvcGVydHlEZWNsYXJpbmdUeXBlID0gZmluYWxUYXJnZXRJbnN0YW5jZVR5cGUuR2V0UHJvcGVydHkoXCJCYWNrZ3JvdW5kXCIpLkRlY2xhcmluZ1R5cGU7XHJcbmdsb2JhbDo6U3lzdGVtLlJlZmxlY3Rpb24uRmllbGRJbmZvIHByb3BlcnR5RmllbGQgPSBwcm9wZXJ0eURlY2xhcmluZ1R5cGUuR2V0RmllbGQoXCJCYWNrZ3JvdW5kUHJvcGVydHlcIik7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRlcGVuZGVuY3lQcm9wZXJ0eSBwcm9wZXJ0eSA9IChnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EZXBlbmRlbmN5UHJvcGVydHkpcHJvcGVydHlGaWVsZC5HZXRWYWx1ZShudWxsKTtcclxuXHJcbiAgcmV0dXJuIGZpbmFsVGFyZ2V0SW5zdGFuY2UuR2V0VmlzdWFsU3RhdGVWYWx1ZShwcm9wZXJ0eSk7XHJcbn1cclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSBJbnN0YW50aWF0ZV9Db250cm9sVGVtcGxhdGVfMzMxNWVhYTg5NTA0NGJiY2E2YzI3ZWIwNjA3ODE0NTYoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQ29udHJvbCB0ZW1wbGF0ZU93bmVyKVxyXG4gICAgICAgIHtcclxudmFyIHRlbXBsYXRlSW5zdGFuY2VfNWQ1ZGVjNDhmZjE5NGJmNmExNzQ1ZjU4MzFmNjBiNTAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVGVtcGxhdGVJbnN0YW5jZSgpO1xyXG50ZW1wbGF0ZUluc3RhbmNlXzVkNWRlYzQ4ZmYxOTRiZjZhMTc0NWY1ODMxZjYwYjUwLlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZU93bmVyO1xyXG52YXIgQm9yZGVyX2UzNDdlOWQzYWZjNTRhNDhhNjJhNGRhMzJhNzk4NzEzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlcigpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIk91dGVyQm9yZGVyXCIsIEJvcmRlcl9lMzQ3ZTlkM2FmYzU0YTQ4YTYyYTRkYTMyYTc5ODcxMyk7XHJcbkJvcmRlcl9lMzQ3ZTlkM2FmYzU0YTQ4YTYyYTRkYTMyYTc5ODcxMy5OYW1lID0gXCJPdXRlckJvcmRlclwiO1xyXG5Cb3JkZXJfZTM0N2U5ZDNhZmM1NGE0OGE2MmE0ZGEzMmE3OTg3MTMuQ29ybmVyUmFkaXVzID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvcm5lclJhZGl1cyg1KTtcclxudmFyIFZpc3VhbFN0YXRlR3JvdXBfNzZkM2MzMzgyZjM1NDExOWEzNjAxYWVjMTBiMmE1MDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGVHcm91cCgpO1xyXG50ZW1wbGF0ZU93bmVyLlJlZ2lzdGVyTmFtZShcIkNvbW1vblN0YXRlc1wiLCBWaXN1YWxTdGF0ZUdyb3VwXzc2ZDNjMzM4MmYzNTQxMTlhMzYwMWFlYzEwYjJhNTA5KTtcclxuVmlzdWFsU3RhdGVHcm91cF83NmQzYzMzODJmMzU0MTE5YTM2MDFhZWMxMGIyYTUwOS5OYW1lID0gXCJDb21tb25TdGF0ZXNcIjtcclxudmFyIFZpc3VhbFN0YXRlXzU4MWU2YTUxNDVlMjQ1Yzk5YmYzYzU0MWY5YzRiNzFhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiTm9ybWFsXCIsIFZpc3VhbFN0YXRlXzU4MWU2YTUxNDVlMjQ1Yzk5YmYzYzU0MWY5YzRiNzFhKTtcclxuVmlzdWFsU3RhdGVfNTgxZTZhNTE0NWUyNDVjOTliZjNjNTQxZjljNGI3MWEuTmFtZSA9IFwiTm9ybWFsXCI7XHJcblxyXG52YXIgVmlzdWFsU3RhdGVfNWVkYTQ0NmI0NTE1NDhjMDkyYzUxNGQ2ODEzNjcyOGEgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQb2ludGVyT3ZlclwiLCBWaXN1YWxTdGF0ZV81ZWRhNDQ2YjQ1MTU0OGMwOTJjNTE0ZDY4MTM2NzI4YSk7XHJcblZpc3VhbFN0YXRlXzVlZGE0NDZiNDUxNTQ4YzA5MmM1MTRkNjgxMzY3MjhhLk5hbWUgPSBcIlBvaW50ZXJPdmVyXCI7XHJcbnZhciBTdG9yeWJvYXJkXzM2OGY0ZDI3OTcyNjRiOWRiZWJlZTkzYjc3Y2M5YTllID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkKCk7XHJcbnZhciBPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yMzgwMjExMjNhZTY0YTc4YmRhZTVjMjg1YjJjOTcyNiA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXMoKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0TmFtZShPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yMzgwMjExMjNhZTY0YTc4YmRhZTVjMjg1YjJjOTcyNixAXCJJbm5lckJvcmRlclwiKTtcclxudmFyIERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMTk2NDgyN2Q1NWI2NDE5YTg4MzQxMzI3MWM2OGYzNTcgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLkRpc2NyZXRlT2JqZWN0S2V5RnJhbWUoKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8xOTY0ODI3ZDU1YjY0MTlhODgzNDEzMjcxYzY4ZjM1Ny5LZXlUaW1lID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLktleVRpbWUuRnJvbVRpbWVTcGFuKG5ldyBnbG9iYWw6OlN5c3RlbS5UaW1lU3BhbigwTCkpO1xyXG5EaXNjcmV0ZU9iamVjdEtleUZyYW1lXzE5NjQ4MjdkNTViNjQxOWE4ODM0MTMyNzFjNjhmMzU3LlZhbHVlID0gQFwiIzExMDAwMDAwXCI7XHJcblxyXG5PYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc18yMzgwMjExMjNhZTY0YTc4YmRhZTVjMjg1YjJjOTcyNi5LZXlGcmFtZXMuQWRkKERpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMTk2NDgyN2Q1NWI2NDE5YTg4MzQxMzI3MWM2OGYzNTcpO1xyXG5cclxuXHJcblN0b3J5Ym9hcmRfMzY4ZjRkMjc5NzI2NGI5ZGJlYmVlOTNiNzdjYzlhOWUuQ2hpbGRyZW4uQWRkKE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzIzODAyMTEyM2FlNjRhNzhiZGFlNWMyODViMmM5NzI2KTtcclxuXHJcblxyXG5WaXN1YWxTdGF0ZV81ZWRhNDQ2YjQ1MTU0OGMwOTJjNTE0ZDY4MTM2NzI4YS5TdG9yeWJvYXJkID0gU3Rvcnlib2FyZF8zNjhmNGQyNzk3MjY0YjlkYmViZWU5M2I3N2NjOWE5ZTtcclxuXHJcblxyXG52YXIgVmlzdWFsU3RhdGVfMjU0YWY1M2U2NWY3NDkwYjg5NmU0MWJiNTcyYTQxM2QgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVmlzdWFsU3RhdGUoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJQcmVzc2VkXCIsIFZpc3VhbFN0YXRlXzI1NGFmNTNlNjVmNzQ5MGI4OTZlNDFiYjU3MmE0MTNkKTtcclxuVmlzdWFsU3RhdGVfMjU0YWY1M2U2NWY3NDkwYjg5NmU0MWJiNTcyYTQxM2QuTmFtZSA9IFwiUHJlc3NlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9hYTM4NDUzOTNkZDY0YzIzYTY5ZWMzOWNlYTIyZjJkZCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGViYWI5NWMwN2IzNGUzNGJiOWE0YjlmMWRmZDU4YTIgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGViYWI5NWMwN2IzNGUzNGJiOWE0YjlmMWRmZDU4YTIsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzZlM2UxOWYxYzA2YzRmMWNhYWM5Y2M3NWUyMzY5ZWQxID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfNmUzZTE5ZjFjMDZjNGYxY2FhYzljYzc1ZTIzNjllZDEuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV82ZTNlMTlmMWMwNmM0ZjFjYWFjOWNjNzVlMjM2OWVkMS5WYWx1ZSA9IEBcIiMyMjAwMDAwMFwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfNGViYWI5NWMwN2IzNGUzNGJiOWE0YjlmMWRmZDU4YTIuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzZlM2UxOWYxYzA2YzRmMWNhYWM5Y2M3NWUyMzY5ZWQxKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2FhMzg0NTM5M2RkNjRjMjNhNjllYzM5Y2VhMjJmMmRkLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc180ZWJhYjk1YzA3YjM0ZTM0YmI5YTRiOWYxZGZkNThhMik7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfMjU0YWY1M2U2NWY3NDkwYjg5NmU0MWJiNTcyYTQxM2QuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfYWEzODQ1MzkzZGQ2NGMyM2E2OWVjMzljZWEyMmYyZGQ7XHJcblxyXG5cclxudmFyIFZpc3VhbFN0YXRlX2QwMGUzNDdkZjI2YjQ5YTM5YzAyYTM5OGYzMTNlOWJjID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlZpc3VhbFN0YXRlKCk7XHJcbnRlbXBsYXRlT3duZXIuUmVnaXN0ZXJOYW1lKFwiRGlzYWJsZWRcIiwgVmlzdWFsU3RhdGVfZDAwZTM0N2RmMjZiNDlhMzljMDJhMzk4ZjMxM2U5YmMpO1xyXG5WaXN1YWxTdGF0ZV9kMDBlMzQ3ZGYyNmI0OWEzOWMwMmEzOThmMzEzZTliYy5OYW1lID0gXCJEaXNhYmxlZFwiO1xyXG52YXIgU3Rvcnlib2FyZF9mZTcyMGY3M2U3YWE0YTRhOGFhNzcwM2RiMjI0ZjUzZSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5NZWRpYS5BbmltYXRpb24uU3Rvcnlib2FyZCgpO1xyXG52YXIgT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZjlmZThiMzBjYWFhNDI4Mzk1Y2Q2OWE2YzBhZTBkNDMgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLk9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzKCk7XHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldE5hbWUoT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZjlmZThiMzBjYWFhNDI4Mzk1Y2Q2OWE2YzBhZTBkNDMsQFwiSW5uZXJCb3JkZXJcIik7XHJcbnZhciBEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzI1MjZmMWQwNDcyMjQ0ZWI5ZTcxM2QxNmViOWE5MGNhID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5EaXNjcmV0ZU9iamVjdEtleUZyYW1lKCk7XHJcbkRpc2NyZXRlT2JqZWN0S2V5RnJhbWVfMjUyNmYxZDA0NzIyNDRlYjllNzEzZDE2ZWI5YTkwY2EuS2V5VGltZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5LZXlUaW1lLkZyb21UaW1lU3BhbihuZXcgZ2xvYmFsOjpTeXN0ZW0uVGltZVNwYW4oMEwpKTtcclxuRGlzY3JldGVPYmplY3RLZXlGcmFtZV8yNTI2ZjFkMDQ3MjI0NGViOWU3MTNkMTZlYjlhOTBjYS5WYWx1ZSA9IEBcIiMzM0ZGRkZGRlwiO1xyXG5cclxuT2JqZWN0QW5pbWF0aW9uVXNpbmdLZXlGcmFtZXNfZjlmZThiMzBjYWFhNDI4Mzk1Y2Q2OWE2YzBhZTBkNDMuS2V5RnJhbWVzLkFkZChEaXNjcmV0ZU9iamVjdEtleUZyYW1lXzI1MjZmMWQwNDcyMjQ0ZWI5ZTcxM2QxNmViOWE5MGNhKTtcclxuXHJcblxyXG5TdG9yeWJvYXJkX2ZlNzIwZjczZTdhYTRhNGE4YWE3NzAzZGIyMjRmNTNlLkNoaWxkcmVuLkFkZChPYmplY3RBbmltYXRpb25Vc2luZ0tleUZyYW1lc19mOWZlOGIzMGNhYWE0MjgzOTVjZDY5YTZjMGFlMGQ0Myk7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVfZDAwZTM0N2RmMjZiNDlhMzljMDJhMzk4ZjMxM2U5YmMuU3Rvcnlib2FyZCA9IFN0b3J5Ym9hcmRfZmU3MjBmNzNlN2FhNGE0YThhYTc3MDNkYjIyNGY1M2U7XHJcblxyXG5cclxuVmlzdWFsU3RhdGVHcm91cF83NmQzYzMzODJmMzU0MTE5YTM2MDFhZWMxMGIyYTUwOS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzU4MWU2YTUxNDVlMjQ1Yzk5YmYzYzU0MWY5YzRiNzFhKTtcclxuVmlzdWFsU3RhdGVHcm91cF83NmQzYzMzODJmMzU0MTE5YTM2MDFhZWMxMGIyYTUwOS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzVlZGE0NDZiNDUxNTQ4YzA5MmM1MTRkNjgxMzY3MjhhKTtcclxuVmlzdWFsU3RhdGVHcm91cF83NmQzYzMzODJmMzU0MTE5YTM2MDFhZWMxMGIyYTUwOS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlXzI1NGFmNTNlNjVmNzQ5MGI4OTZlNDFiYjU3MmE0MTNkKTtcclxuVmlzdWFsU3RhdGVHcm91cF83NmQzYzMzODJmMzU0MTE5YTM2MDFhZWMxMGIyYTUwOS5TdGF0ZXMuQWRkKFZpc3VhbFN0YXRlX2QwMGUzNDdkZjI2YjQ5YTM5YzAyYTM5OGYzMTNlOWJjKTtcclxuXHJcblxyXG50ZW1wbGF0ZU93bmVyLklOVEVSTkFMX0dldFZpc3VhbFN0YXRlR3JvdXBzKCkuQWRkKFZpc3VhbFN0YXRlR3JvdXBfNzZkM2MzMzgyZjM1NDExOWEzNjAxYWVjMTBiMmE1MDkpO1xyXG5cclxudmFyIEJvcmRlcl9kMWZiNzk3MzdlOTQ0NGU5YjI0NmI1MzE3ZjhhODE1MCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJJbm5lckJvcmRlclwiLCBCb3JkZXJfZDFmYjc5NzM3ZTk0NDRlOWIyNDZiNTMxN2Y4YTgxNTApO1xyXG5Cb3JkZXJfZDFmYjc5NzM3ZTk0NDRlOWIyNDZiNTMxN2Y4YTgxNTAuTmFtZSA9IFwiSW5uZXJCb3JkZXJcIjtcclxuQm9yZGVyX2QxZmI3OTczN2U5NDQ0ZTliMjQ2YjUzMTdmOGE4MTUwLkNvcm5lclJhZGl1cyA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db3JuZXJSYWRpdXMoNSk7XHJcbnZhciBDb250ZW50UHJlc2VudGVyX2JhYzVmYjJmZjg0NDQzMzY4NTMxODgwOTJkZWY3ODE4ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkNvbnRlbnRQcmVzZW50ZXIoKTtcclxudGVtcGxhdGVPd25lci5SZWdpc3Rlck5hbWUoXCJDb250ZW50UHJlc2VudGVyXCIsIENvbnRlbnRQcmVzZW50ZXJfYmFjNWZiMmZmODQ0NDMzNjg1MzE4ODA5MmRlZjc4MTgpO1xyXG5Db250ZW50UHJlc2VudGVyX2JhYzVmYjJmZjg0NDQzMzY4NTMxODgwOTJkZWY3ODE4Lk5hbWUgPSBcIkNvbnRlbnRQcmVzZW50ZXJcIjtcclxudmFyIEJpbmRpbmdfOWNkZDA3Mzg0ZmY5NGY0M2E2YmIzMGFjOTNlMTlhODUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfOWNkZDA3Mzg0ZmY5NGY0M2E2YmIzMGFjOTNlMTlhODUuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQ29udGVudFRlbXBsYXRlXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZDViZWQ4NzY3MTJjNGZhZWFiMDkxOWE3YTFiMGZmNWQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9kNWJlZDg3NjcxMmM0ZmFlYWIwOTE5YTdhMWIwZmY1ZC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185Y2RkMDczODRmZjk0ZjQzYTZiYjMwYWM5M2UxOWE4NS5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2Q1YmVkODc2NzEyYzRmYWVhYjA5MTlhN2ExYjBmZjVkO1xyXG5cclxuXHJcbkJpbmRpbmdfOWNkZDA3Mzg0ZmY5NGY0M2E2YmIzMGFjOTNlMTlhODUuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNWQ1ZGVjNDhmZjE5NGJmNmExNzQ1ZjU4MzFmNjBiNTA7XHJcblxyXG52YXIgQmluZGluZ182YzVkNzM2MmJkMzU0ZGU2YjQxZGRmZGZhOTczOTgzMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ182YzVkNzM2MmJkMzU0ZGU2YjQxZGRmZGZhOTczOTgzMC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJDb250ZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfMTE4M2Q4MDIwNGUwNDI4NmE2NTU4ODE2NGZkMDMyODggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV8xMTgzZDgwMjA0ZTA0Mjg2YTY1NTg4MTY0ZmQwMzI4OC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ182YzVkNzM2MmJkMzU0ZGU2YjQxZGRmZGZhOTczOTgzMC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzExODNkODAyMDRlMDQyODZhNjU1ODgxNjRmZDAzMjg4O1xyXG5cclxuXHJcbkJpbmRpbmdfNmM1ZDczNjJiZDM1NGRlNmI0MWRkZmRmYTk3Mzk4MzAuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNWQ1ZGVjNDhmZjE5NGJmNmExNzQ1ZjU4MzFmNjBiNTA7XHJcblxyXG52YXIgQmluZGluZ185YmE1NTljN2QzOTA0OTU2YWY2YjQ1N2JmYzcxNWI0OCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ185YmE1NTljN2QzOTA0OTU2YWY2YjQ1N2JmYzcxNWI0OC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJQYWRkaW5nXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfZjExNGQ4ZTQ5ZGMyNGJjNDg2NGQ4NGUwZjhjMDU2MGUgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9mMTE0ZDhlNDlkYzI0YmM0ODY0ZDg0ZTBmOGMwNTYwZS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ185YmE1NTljN2QzOTA0OTU2YWY2YjQ1N2JmYzcxNWI0OC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2YxMTRkOGU0OWRjMjRiYzQ4NjRkODRlMGY4YzA1NjBlO1xyXG5cclxuXHJcbkJpbmRpbmdfOWJhNTU5YzdkMzkwNDk1NmFmNmI0NTdiZmM3MTViNDguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNWQ1ZGVjNDhmZjE5NGJmNmExNzQ1ZjU4MzFmNjBiNTA7XHJcblxyXG52YXIgQmluZGluZ184NDU4YmZiZmU4NTI0MDE5YjQ4NmVmMzZmZmFlYTE4NSA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ184NDU4YmZiZmU4NTI0MDE5YjQ4NmVmMzZmZmFlYTE4NS5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJIb3Jpem9udGFsQ29udGVudEFsaWdubWVudFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlXzMwZWYxMzgxZmE1MTQzODFiMjRjOGQ4MWY0MWM4MzMwID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfMzBlZjEzODFmYTUxNDM4MWIyNGM4ZDgxZjQxYzgzMzAuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfODQ1OGJmYmZlODUyNDAxOWI0ODZlZjM2ZmZhZWExODUuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV8zMGVmMTM4MWZhNTE0MzgxYjI0YzhkODFmNDFjODMzMDtcclxuXHJcblxyXG5CaW5kaW5nXzg0NThiZmJmZTg1MjQwMTliNDg2ZWYzNmZmYWVhMTg1LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzVkNWRlYzQ4ZmYxOTRiZjZhMTc0NWY1ODMxZjYwYjUwO1xyXG5cclxudmFyIEJpbmRpbmdfMTBmZTgwZjM0OWY4NGVkNjg4NDc0ZjU4ZmRkY2IzNzYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfMTBmZTgwZjM0OWY4NGVkNjg4NDc0ZjU4ZmRkY2IzNzYuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiVmVydGljYWxDb250ZW50QWxpZ25tZW50XCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNTY0OTU5ZGZjZGZiNDc3N2E3NzRiOTAxY2ZlNWI3NDkgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV81NjQ5NTlkZmNkZmI0Nzc3YTc3NGI5MDFjZmU1Yjc0OS5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18xMGZlODBmMzQ5Zjg0ZWQ2ODg0NzRmNThmZGRjYjM3Ni5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzU2NDk1OWRmY2RmYjQ3NzdhNzc0YjkwMWNmZTViNzQ5O1xyXG5cclxuXHJcbkJpbmRpbmdfMTBmZTgwZjM0OWY4NGVkNjg4NDc0ZjU4ZmRkY2IzNzYuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNWQ1ZGVjNDhmZjE5NGJmNmExNzQ1ZjU4MzFmNjBiNTA7XHJcblxyXG5cclxuQm9yZGVyX2QxZmI3OTczN2U5NDQ0ZTliMjQ2YjUzMTdmOGE4MTUwLkNoaWxkID0gQ29udGVudFByZXNlbnRlcl9iYWM1ZmIyZmY4NDQ0MzM2ODUzMTg4MDkyZGVmNzgxODtcclxuXHJcbnZhciBCaW5kaW5nX2VjNmE2OTc1Y2Y1MDRiNTZhMGRhNDU5MTAzYzk3YmY5ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuQmluZGluZygpO1xyXG5CaW5kaW5nX2VjNmE2OTc1Y2Y1MDRiNTZhMGRhNDU5MTAzYzk3YmY5LlBhdGggPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuUHJvcGVydHlQYXRoKEBcIkJhY2tncm91bmRcIik7XHJcbnZhciBSZWxhdGl2ZVNvdXJjZV8wOTc2YWVkYTU2MTg0MjRhYTY1ZGExNGRjNTk1N2JmMCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlKCk7XHJcblJlbGF0aXZlU291cmNlXzA5NzZhZWRhNTYxODQyNGFhNjVkYTE0ZGM1OTU3YmYwLk1vZGUgPSBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLlJlbGF0aXZlU291cmNlTW9kZS5UZW1wbGF0ZWRQYXJlbnQ7XHJcblxyXG5CaW5kaW5nX2VjNmE2OTc1Y2Y1MDRiNTZhMGRhNDU5MTAzYzk3YmY5LlJlbGF0aXZlU291cmNlID0gUmVsYXRpdmVTb3VyY2VfMDk3NmFlZGE1NjE4NDI0YWE2NWRhMTRkYzU5NTdiZjA7XHJcblxyXG5cclxuQmluZGluZ19lYzZhNjk3NWNmNTA0YjU2YTBkYTQ1OTEwM2M5N2JmOS5UZW1wbGF0ZU93bmVyID0gdGVtcGxhdGVJbnN0YW5jZV81ZDVkZWM0OGZmMTk0YmY2YTE3NDVmNTgzMWY2MGI1MDtcclxuXHJcblxyXG5Cb3JkZXJfZTM0N2U5ZDNhZmM1NGE0OGE2MmE0ZGEzMmE3OTg3MTMuQ2hpbGQgPSBCb3JkZXJfZDFmYjc5NzM3ZTk0NDRlOWIyNDZiNTMxN2Y4YTgxNTA7XHJcblxyXG52YXIgQmluZGluZ18yOTU1OWUzZmY1MTM0Y2Y1OTIyMjJhODZhYWRhYzZmOCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18yOTU1OWUzZmY1MTM0Y2Y1OTIyMjJhODZhYWRhYzZmOC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCYWNrZ3JvdW5kXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfNWQyN2UzYzQ1YTkwNDlkZjliNjlmNGIzNjRhNGQ1ZjAgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV81ZDI3ZTNjNDVhOTA0OWRmOWI2OWY0YjM2NGE0ZDVmMC5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ18yOTU1OWUzZmY1MTM0Y2Y1OTIyMjJhODZhYWRhYzZmOC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlXzVkMjdlM2M0NWE5MDQ5ZGY5YjY5ZjRiMzY0YTRkNWYwO1xyXG5cclxuXHJcbkJpbmRpbmdfMjk1NTllM2ZmNTEzNGNmNTkyMjIyYTg2YWFkYWM2ZjguVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNWQ1ZGVjNDhmZjE5NGJmNmExNzQ1ZjU4MzFmNjBiNTA7XHJcblxyXG52YXIgQmluZGluZ18zYTIzNjU3YTUxNWU0NzMxYjE0ZWRkODMyZjMxYTFkNCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5EYXRhLkJpbmRpbmcoKTtcclxuQmluZGluZ18zYTIzNjU3YTUxNWU0NzMxYjE0ZWRkODMyZjMxYTFkNC5QYXRoID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChAXCJCb3JkZXJCcnVzaFwiKTtcclxudmFyIFJlbGF0aXZlU291cmNlX2ZmODFmYjg3ZjBjZDRmNWZiYjZmYjE3MWYzMzJiODU3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2UoKTtcclxuUmVsYXRpdmVTb3VyY2VfZmY4MWZiODdmMGNkNGY1ZmJiNmZiMTcxZjMzMmI4NTcuTW9kZSA9IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkRhdGEuUmVsYXRpdmVTb3VyY2VNb2RlLlRlbXBsYXRlZFBhcmVudDtcclxuXHJcbkJpbmRpbmdfM2EyMzY1N2E1MTVlNDczMWIxNGVkZDgzMmYzMWExZDQuUmVsYXRpdmVTb3VyY2UgPSBSZWxhdGl2ZVNvdXJjZV9mZjgxZmI4N2YwY2Q0ZjVmYmI2ZmIxNzFmMzMyYjg1NztcclxuXHJcblxyXG5CaW5kaW5nXzNhMjM2NTdhNTE1ZTQ3MzFiMTRlZGQ4MzJmMzFhMWQ0LlRlbXBsYXRlT3duZXIgPSB0ZW1wbGF0ZUluc3RhbmNlXzVkNWRlYzQ4ZmYxOTRiZjZhMTc0NWY1ODMxZjYwYjUwO1xyXG5cclxudmFyIEJpbmRpbmdfZmRkY2I2NTdkMDVkNDYzNGExZWM5Yjc0YzE0ZTIzZTQgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5CaW5kaW5nKCk7XHJcbkJpbmRpbmdfZmRkY2I2NTdkMDVkNDYzNGExZWM5Yjc0YzE0ZTIzZTQuUGF0aCA9IG5ldyBnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Qcm9wZXJ0eVBhdGgoQFwiQm9yZGVyVGhpY2tuZXNzXCIpO1xyXG52YXIgUmVsYXRpdmVTb3VyY2VfYzJlZGIzM2NhYWY0NDUyYzljZWI3ZjcyZjM4NWE1ZDYgPSBuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZSgpO1xyXG5SZWxhdGl2ZVNvdXJjZV9jMmVkYjMzY2FhZjQ0NTJjOWNlYjdmNzJmMzg1YTVkNi5Nb2RlID0gZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRGF0YS5SZWxhdGl2ZVNvdXJjZU1vZGUuVGVtcGxhdGVkUGFyZW50O1xyXG5cclxuQmluZGluZ19mZGRjYjY1N2QwNWQ0NjM0YTFlYzliNzRjMTRlMjNlNC5SZWxhdGl2ZVNvdXJjZSA9IFJlbGF0aXZlU291cmNlX2MyZWRiMzNjYWFmNDQ1MmM5Y2ViN2Y3MmYzODVhNWQ2O1xyXG5cclxuXHJcbkJpbmRpbmdfZmRkY2I2NTdkMDVkNDYzNGExZWM5Yjc0YzE0ZTIzZTQuVGVtcGxhdGVPd25lciA9IHRlbXBsYXRlSW5zdGFuY2VfNWQ1ZGVjNDhmZjE5NGJmNmExNzQ1ZjU4MzFmNjBiNTA7XHJcblxyXG5cclxuXHJcbkNvbnRlbnRQcmVzZW50ZXJfYmFjNWZiMmZmODQ0NDMzNjg1MzE4ODA5MmRlZjc4MTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50VGVtcGxhdGVQcm9wZXJ0eSwgQmluZGluZ185Y2RkMDczODRmZjk0ZjQzYTZiYjMwYWM5M2UxOWE4NSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYmFjNWZiMmZmODQ0NDMzNjg1MzE4ODA5MmRlZjc4MTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Db250ZW50Q29udHJvbC5Db250ZW50UHJvcGVydHksIEJpbmRpbmdfNmM1ZDczNjJiZDM1NGRlNmI0MWRkZmRmYTk3Mzk4MzApO1xyXG5Db250ZW50UHJlc2VudGVyX2JhYzVmYjJmZjg0NDQzMzY4NTMxODgwOTJkZWY3ODE4LlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuRnJhbWV3b3JrRWxlbWVudC5NYXJnaW5Qcm9wZXJ0eSwgQmluZGluZ185YmE1NTljN2QzOTA0OTU2YWY2YjQ1N2JmYzcxNWI0OCk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYmFjNWZiMmZmODQ0NDMzNjg1MzE4ODA5MmRlZjc4MTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50Lkhvcml6b250YWxBbGlnbm1lbnRQcm9wZXJ0eSwgQmluZGluZ184NDU4YmZiZmU4NTI0MDE5YjQ4NmVmMzZmZmFlYTE4NSk7XHJcbkNvbnRlbnRQcmVzZW50ZXJfYmFjNWZiMmZmODQ0NDMzNjg1MzE4ODA5MmRlZjc4MTguU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5GcmFtZXdvcmtFbGVtZW50LlZlcnRpY2FsQWxpZ25tZW50UHJvcGVydHksIEJpbmRpbmdfMTBmZTgwZjM0OWY4NGVkNjg4NDc0ZjU4ZmRkY2IzNzYpO1xyXG5Cb3JkZXJfZDFmYjc5NzM3ZTk0NDRlOWIyNDZiNTMxN2Y4YTgxNTAuU2V0QmluZGluZyhnbG9iYWw6OldpbmRvd3MuVUkuWGFtbC5Db250cm9scy5Cb3JkZXIuQmFja2dyb3VuZFByb3BlcnR5LCBCaW5kaW5nX2VjNmE2OTc1Y2Y1MDRiNTZhMGRhNDU5MTAzYzk3YmY5KTtcclxuQm9yZGVyX2UzNDdlOWQzYWZjNTRhNDhhNjJhNGRhMzJhNzk4NzEzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJhY2tncm91bmRQcm9wZXJ0eSwgQmluZGluZ18yOTU1OWUzZmY1MTM0Y2Y1OTIyMjJhODZhYWRhYzZmOCk7XHJcbkJvcmRlcl9lMzQ3ZTlkM2FmYzU0YTQ4YTYyYTRkYTMyYTc5ODcxMy5TZXRCaW5kaW5nKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkJvcmRlci5Cb3JkZXJCcnVzaFByb3BlcnR5LCBCaW5kaW5nXzNhMjM2NTdhNTE1ZTQ3MzFiMTRlZGQ4MzJmMzFhMWQ0KTtcclxuQm9yZGVyX2UzNDdlOWQzYWZjNTRhNDhhNjJhNGRhMzJhNzk4NzEzLlNldEJpbmRpbmcoZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuQm9yZGVyLkJvcmRlclRoaWNrbmVzc1Byb3BlcnR5LCBCaW5kaW5nX2ZkZGNiNjU3ZDA1ZDQ2MzRhMWVjOWI3NGMxNGUyM2U0KTtcclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzIzODAyMTEyM2FlNjRhNzhiZGFlNWMyODViMmM5NzI2LFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzE2MThjZDlmMWJkYzRiNDY4MTRhYzM0MGI3NThkMzYwLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfMTYxOGNkOWYxYmRjNGI0NjgxNGFjMzQwYjc1OGQzNjAsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV8xNjE4Y2Q5ZjFiZGM0YjQ2ODE0YWMzNDBiNzU4ZDM2MCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzE2MThjZDlmMWJkYzRiNDY4MTRhYzM0MGI3NThkMzYwLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfMTYxOGNkOWYxYmRjNGI0NjgxNGFjMzQwYjc1OGQzNjApKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzIzODAyMTEyM2FlNjRhNzhiZGFlNWMyODViMmM5NzI2LCBCb3JkZXJfZDFmYjc5NzM3ZTk0NDRlOWIyNDZiNTMxN2Y4YTgxNTApO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRlYmFiOTVjMDdiMzRlMzRiYjlhNGI5ZjFkZmQ1OGEyLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5X2Q0OTFkZDQ2Nzg3NDRmZjFhZTk0ODk0NzVjNDUzNmNiLFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfZDQ5MWRkNDY3ODc0NGZmMWFlOTQ4OTQ3NWM0NTM2Y2IsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV9kNDkxZGQ0Njc4NzQ0ZmYxYWU5NDg5NDc1YzQ1MzZjYiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5X2Q0OTFkZDQ2Nzg3NDRmZjFhZTk0ODk0NzVjNDUzNmNiLFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfZDQ5MWRkNDY3ODc0NGZmMWFlOTQ4OTQ3NWM0NTM2Y2IpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzXzRlYmFiOTVjMDdiMzRlMzRiYjlhNGI5ZjFkZmQ1OGEyLCBCb3JkZXJfZDFmYjc5NzM3ZTk0NDRlOWIyNDZiNTMxN2Y4YTgxNTApO1xyXG5cclxuXHJcbmdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLkFuaW1hdGlvbi5TdG9yeWJvYXJkLlNldFRhcmdldFByb3BlcnR5KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2Y5ZmU4YjMwY2FhYTQyODM5NWNkNjlhNmMwYWUwZDQzLFxyXG4gICAgbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlByb3BlcnR5UGF0aChcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBcIkJhY2tncm91bmRcIixcclxuICAgICAgICBhY2Nlc3NWaXN1YWxTdGF0ZVByb3BlcnR5XzlkMTRmYTc0M2ZiODRmYzk4NTUzOTFhZWE4ODM3N2Y0LFxyXG4gICAgICAgIHNldFZpc3VhbFN0YXRlUHJvcGVydHlfOWQxNGZhNzQzZmI4NGZjOTg1NTM5MWFlYTg4Mzc3ZjQsXHJcbiAgICAgICAgc2V0QW5pbWF0aW9uVmlzdWFsU3RhdGVQcm9wZXJ0eV85ZDE0ZmE3NDNmYjg0ZmM5ODU1MzkxYWVhODgzNzdmNCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2V0TG9jYWxWaXN1YWxTdGF0ZVByb3BlcnR5XzlkMTRmYTc0M2ZiODRmYzk4NTUzOTFhZWE4ODM3N2Y0LFxyXG4gICAgICAgIGdldFZpc3VhbFN0YXRlUHJvcGVydHlfOWQxNGZhNzQzZmI4NGZjOTg1NTM5MWFlYTg4Mzc3ZjQpKTtcclxuZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuTWVkaWEuQW5pbWF0aW9uLlN0b3J5Ym9hcmQuU2V0VGFyZ2V0KE9iamVjdEFuaW1hdGlvblVzaW5nS2V5RnJhbWVzX2Y5ZmU4YjMwY2FhYTQyODM5NWNkNjlhNmMwYWUwZDQzLCBCb3JkZXJfZDFmYjc5NzM3ZTk0NDRlOWIyNDZiNTMxN2Y4YTgxNTApO1xyXG5cclxudGVtcGxhdGVJbnN0YW5jZV81ZDVkZWM0OGZmMTk0YmY2YTE3NDVmNTgzMWY2MGI1MC5UZW1wbGF0ZUNvbnRlbnQgPSBCb3JkZXJfZTM0N2U5ZDNhZmM1NGE0OGE2MmE0ZGEzMmE3OTg3MTM7XHJcbnJldHVybiB0ZW1wbGF0ZUluc3RhbmNlXzVkNWRlYzQ4ZmYxOTRiZjZhMTc0NWY1ODMxZjYwYjUwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsIi8vIDxDU0hUTUw1PjxYYW1sSGFzaD5EQ0IxNjU3NTIzRTc4RTdBQURFRTU3Q0RFMTQ0NkI3NTwvWGFtbEhhc2g+PFBhc3NOdW1iZXI+MjwvUGFzc051bWJlcj48Q29tcGlsYXRpb25EYXRlPjE1LjA0LjIwMjAgNjowOTo0ODwvQ29tcGlsYXRpb25EYXRlPjwvQ1NIVE1MNT5cclxuXHJcblxyXG5cclxucHVibGljIHN0YXRpYyBjbGFzcyDHgMeAQ3NodG1sx4DHgENvbXBvbmVudMeAx4BTZWNvbmRwYWdlx4DHgFhhbWzHgMeARmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIG9iamVjdCBJbnN0YW50aWF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgZ2xvYmFsOjpTeXN0ZW0uVHlwZSB0eXBlID0gdHlwZW9mKENTaHRtbC5TZWNvbmRQYWdlKTtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsOjpDU0hUTUw1LkludGVybmFsLlR5cGVJbnN0YW50aWF0aW9uSGVscGVyLkluc3RhbnRpYXRlKHR5cGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYW1lc3BhY2UgQ1NodG1sXHJcbntcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyA8YXV0by1nZW5lcmF0ZWQ+XHJcbi8vICAgICBUaGlzIGNvZGUgd2FzIGF1dG8tZ2VuZXJhdGVkIGJ5IFwiQyMvWEFNTCBmb3IgSFRNTDVcIlxyXG4vL1xyXG4vLyAgICAgQ2hhbmdlcyB0byB0aGlzIGZpbGUgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvciBhbmQgd2lsbCBiZSBsb3N0IGlmXHJcbi8vICAgICB0aGUgY29kZSBpcyByZWdlbmVyYXRlZC5cclxuLy8gPC9hdXRvLWdlbmVyYXRlZD5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxucGFydGlhbCBjbGFzcyBTZWNvbmRQYWdlIDogZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUGFnZVxyXG57XHJcblxyXG4jcHJhZ21hIHdhcm5pbmcgZGlzYWJsZSAxNjksIDY0OSwgMDYyOCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE2OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciB1c2VkJyksIENTMDY0OSAoJ2ZpZWxkIC4uLiBpcyBuZXZlciBhc3NpZ25lZCB0bywgYW5kIHdpbGwgYWx3YXlzIGhhdmUgaXRzIGRlZmF1bHQgdmFsdWUgbnVsbCcpLCBhbmQgQ1MwNjI4ICgnbWVtYmVyIDogbmV3IHByb3RlY3RlZCBtZW1iZXIgZGVjbGFyZWQgaW4gc2VhbGVkIGNsYXNzJylcclxuXHJcblxyXG5cclxuI3ByYWdtYSB3YXJuaW5nIHJlc3RvcmUgMTY5LCA2NDksIDA2MjhcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgYm9vbCBfY29udGVudExvYWRlZDtcclxuICAgICAgICBwdWJsaWMgdm9pZCBJbml0aWFsaXplQ29tcG9uZW50KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChfY29udGVudExvYWRlZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgX2NvbnRlbnRMb2FkZWQgPSB0cnVlO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDE4NCAvLyBQcmV2ZW50cyB3YXJuaW5nIENTMDE4NCAoJ1RoZSBnaXZlbiBleHByZXNzaW9uIGlzIG5ldmVyIG9mIHRoZSBwcm92aWRlZCAoJ3R5cGUnKSB0eXBlJylcclxuICAgICAgICAgICAgaWYgKHRoaXMgaXMgZ2xvYmFsOjpXaW5kb3dzLlVJLlhhbWwuVUlFbGVtZW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoKGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLlVJRWxlbWVudCkob2JqZWN0KXRoaXMpLlhhbWxTb3VyY2VQYXRoID0gQFwiQ1NodG1sXFxTZWNvbmRQYWdlLnhhbWxcIjtcclxuICAgICAgICAgICAgfVxyXG4jcHJhZ21hIHdhcm5pbmcgcmVzdG9yZSAwMTg0XHJcblxyXG5cclxuXHJcbnZhciBHcmlkXzFkOTg0NjhiZDFjOTRhMThhODJiYTg5M2RmMmMzNGY3ID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLkNvbnRyb2xzLkdyaWQoKTtcclxuR3JpZF8xZDk4NDY4YmQxYzk0YTE4YTgyYmE4OTNkZjJjMzRmNy5CYWNrZ3JvdW5kID0gbmV3IGdsb2JhbDo6V2luZG93cy5VSS5YYW1sLk1lZGlhLlNvbGlkQ29sb3JCcnVzaChuZXcgZ2xvYmFsOjpXaW5kb3dzLlVJLkNvbG9yKCkgeyBBID0gKGJ5dGUpMjU1LCBSID0gKGJ5dGUpMCwgRyA9IChieXRlKTAsIEIgPSAoYnl0ZSkwIH0pO1xyXG5cclxudGhpcy5Db250ZW50ID0gR3JpZF8xZDk4NDY4YmQxYzk0YTE4YTgyYmE4OTNkZjJjMzRmNztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgc2VhbGVkIHBhcnRpYWwgY2xhc3MgQXBwIDogQXBwbGljYXRpb25cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgQXBwKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRW50ZXIgY29uc3RydWN0aW9uIGxvZ2ljIGhlcmUuLi5cclxuXHJcbiAgICAgICAgICAgIC8vdmFyIHBhZ2VIb21lID0gbmV3IFBhZ2VIb21lKCk7XHJcbiAgICAgICAgICAgIC8vV2luZG93LkN1cnJlbnQuQ29udGVudCA9IHBhZ2VIb21lO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1mcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBtZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2VIb21lLnhhbWxcIiwgVXJpS2luZC5SZWxhdGl2ZSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQ3VycmVudC5Db250ZW50ID0gbWZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uSU87XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBXaW5kb3dzLkZvdW5kYXRpb247XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUHJpbWl0aXZlcztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkRhdGE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5JbnB1dDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk1lZGlhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTmF2aWdhdGlvbjtcclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFnZTEgOiBQYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFBhZ2UxKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLkluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICAgICAgdHh0RmlsZS5UZXh0ID0gRmlsZUNsYXNzLmZpbGVUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ1dHRvbl9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vUGFnZUhvbWUgcGFnZUhvbWUgPSBuZXcgUGFnZUhvbWUoKTtcclxuICAgICAgICAgICAgLy90aGlzLk5hdmlnYXRpb25TZXJ2aWNlLk5hdmlnYXRlKHBhZ2VIb21lKTtcclxuICAgICAgICAgICAgLy9wYWdlSG9tZS5idG5CZWdpbi5Jc0VuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIGZyYW1lLk5hdmlnYXRlKG5ldyBVcmkoXCJQYWdlSG9tZS54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgdm9pZCBCdG5VcGxvYWRfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoKTtcclxuICAgICAgICAgICAgZnJhbWUuTmF2aWdhdGUobmV3IFVyaShcIlBhZ2VVcGxvYWQueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBmcmFtZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgRmlyc3RfQ2xpY2sob2JqZWN0IHNlbmRlciwgUm91dGVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBidG5DYW5jZWwuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYnRuVXBsb2FkLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LlZpc2libGU7XHJcbiAgICAgICAgICAgIGJ0blByb2Nlc3NpbmcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgdHh0RmlsZS5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVySURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJvcmRlclVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blVwbG9hZFVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blVwbG9hZElERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFNlY29uZF9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0bkNhbmNlbC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blVwbG9hZC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJ0blByb2Nlc3NpbmcuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG4gICAgICAgICAgICB0eHRGaWxlLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlcklERUYuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYm9yZGVyVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuVXBsb2FkVU1MLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuVXBsb2FkSURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIFRoaXJkX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnRuQ2FuY2VsLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuVXBsb2FkLlZpc2liaWxpdHkgPSBWaXNpYmlsaXR5LkNvbGxhcHNlZDtcclxuICAgICAgICAgICAgYnRuUHJvY2Vzc2luZy5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIHR4dEZpbGUuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuQ29sbGFwc2VkO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVySURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgICAgIGJvcmRlclVNTC5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5WaXNpYmxlO1xyXG4gICAgICAgICAgICBidG5VcGxvYWRVTUwuVmlzaWJpbGl0eSA9IFZpc2liaWxpdHkuVmlzaWJsZTtcclxuICAgICAgICAgICAgYnRuVXBsb2FkSURFRi5WaXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5Db2xsYXBzZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnRuVXBsb2FkVU1MX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnRuVXBsb2FkSURFRl9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uSU87XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBXaW5kb3dzLkZvdW5kYXRpb247XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUHJpbWl0aXZlcztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkRhdGE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5JbnB1dDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk1lZGlhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTmF2aWdhdGlvbjtcclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFnZUhvbWUgOiBQYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFBhZ2VIb21lKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIEJ1dHRvbl9DbGljayhvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vUGFnZTEgcGFnZUhvbWUgPSBuZXcgUGFnZTEoKTtcclxuICAgICAgICAgICAgLy90aGlzLk5hdmlnYXRpb25TZXJ2aWNlLk5hdmlnYXRlKHBhZ2VIb21lKTtcclxuICAgICAgICAgICAgLy9idG5CZWdpbi5Jc0VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGZyYW1lID0gbmV3IEZyYW1lKCk7XHJcbiAgICAgICAgICAgIGZyYW1lLk5hdmlnYXRlKG5ldyBVcmkoXCJQYWdlMS54YW1sXCIsIFVyaUtpbmQuUmVsYXRpdmUpKTtcclxuICAgICAgICAgICAgV2luZG93LkN1cnJlbnQuQ29udGVudCA9IGZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uSU87XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBXaW5kb3dzLkZvdW5kYXRpb247XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkNvbnRyb2xzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHMuUHJpbWl0aXZlcztcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLkRhdGE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5JbnB1dDtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLk1lZGlhO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTmF2aWdhdGlvbjtcclxuXHJcbm5hbWVzcGFjZSBDU2h0bWxcclxue1xyXG4gICAgcHVibGljIHBhcnRpYWwgY2xhc3MgUGFnZVVwbG9hZCA6IFBhZ2VcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgUGFnZVVwbG9hZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHZvaWQgT25GaWxlT3BlbmVkKG9iamVjdCBzZW5kZXIsIENTSFRNTDUuRXh0ZW5zaW9ucy5GaWxlT3BlbkRpYWxvZy5GaWxlT3BlbmVkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBGaWxlQ2xhc3MuZmlsZVRleHQgPSBlLlRleHQ7XHJcbiAgICAgICAgICAgIE1lc3NhZ2VCb3guU2hvdyhcItCk0LDQudC7INC30LDQs9GA0YPQttC10L1cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnRuQ2FuY2VsX0NsaWNrKG9iamVjdCBzZW5kZXIsIFJvdXRlZEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSgpO1xyXG4gICAgICAgICAgICBmcmFtZS5OYXZpZ2F0ZShuZXcgVXJpKFwiUGFnZTEueGFtbFwiLCBVcmlLaW5kLlJlbGF0aXZlKSk7XHJcbiAgICAgICAgICAgIFdpbmRvdy5DdXJyZW50LkNvbnRlbnQgPSBmcmFtZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5JTztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFdpbmRvd3MuRm91bmRhdGlvbjtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuQ29udHJvbHM7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scy5QcmltaXRpdmVzO1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuRGF0YTtcclxudXNpbmcgV2luZG93cy5VSS5YYW1sLklucHV0O1xyXG51c2luZyBXaW5kb3dzLlVJLlhhbWwuTWVkaWE7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5OYXZpZ2F0aW9uO1xyXG5cclxubmFtZXNwYWNlIENTaHRtbFxyXG57XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBTZWNvbmRQYWdlIDogUGFnZVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBTZWNvbmRQYWdlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSW5pdGlhbGl6ZUNvbXBvbmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG4jaWYgU0xNSUdSQVRJT05cclxudXNpbmcgU3lzdGVtLldpbmRvd3M7XHJcbnVzaW5nIFN5c3RlbS5XaW5kb3dzLkNvbnRyb2xzO1xyXG4jZWxzZVxyXG51c2luZyBXaW5kb3dzLlVJLlhhbWw7XHJcbnVzaW5nIFdpbmRvd3MuVUkuWGFtbC5Db250cm9scztcclxuI2VuZGlmXHJcblxyXG5uYW1lc3BhY2UgQ1NIVE1MNS5FeHRlbnNpb25zLkZpbGVPcGVuRGlhbG9nXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nIDogQ29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBldmVudCBFdmVudEhhbmRsZXI8RmlsZU9wZW5lZEV2ZW50QXJncz4gRmlsZU9wZW5lZDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBSZXN1bHRLaW5kIF9yZXN1bHRLaW5kO1xyXG4gICAgICAgIHByaXZhdGUgc3RyaW5nIF9yZXN1bHRLaW5kU3RyO1xyXG4gICAgICAgIHB1YmxpYyBSZXN1bHRLaW5kIFJlc3VsdEtpbmRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldCB7IHJldHVybiBfcmVzdWx0S2luZDsgfVxyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX3Jlc3VsdEtpbmQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIF9yZXN1bHRLaW5kU3RyID0gdmFsdWUuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIENvbnRyb2xGb3JEaXNwbGF5aW5nVGhlRmlsZU9wZW5EaWFsb2coKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmVzdWx0S2luZCA9IEZpbGVPcGVuRGlhbG9nLlJlc3VsdEtpbmQuVGV4dDsgLy9Ob3RlOiB0aGlzIGlzIHRvIHNldCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgcHJvcGVydHkuXHJcblxyXG4gICAgICAgICAgICBDU2hhcnBYYW1sRm9ySHRtbDUuRG9tTWFuYWdlbWVudC5TZXRIdG1sUmVwcmVzZW50YXRpb24odGhpcyxcclxuICAgICAgICAgICAgICAgIFwiPGRpdiBzdHlsZSBzdHlsZT0nbWFyZ2luOiAxNXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6ICMxYmJjOWMgdmVydGljYWwtYWxpZ246bWlkZGxlOyc+XCIgK1xyXG4gICAgICAgICAgICAgICAgXCI8aW5wdXQgdHlwZT0nZmlsZScgaWQ9J2lucHV0X19maWxlJyBzdHlsZT0nbWFyZ2luOiA2NXB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7IHZpc2liaWxpdHk6IGhpZGRlbjsnIG11bHRpcGxlPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPGxhYmVsIGZvcj0naW5wdXRfX2ZpbGUnIHN0eWxlPSd3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAyOTBweDsgaGVpZ2h0OiA2MHB4OyBiYWNrZ3JvdW5kOiAjRjlERUYyOyBkaXNwbGF5OiAtd2Via2l0LWJveDsgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcIiArXHJcbiAgICAgICAgICAgICAgICBcImRpc3BsYXk6IC1tcy1mbGV4Ym94OyBkaXNwbGF5OiBmbGV4OyAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjsgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAwIGF1dG87IGZvbnQtc2l6ZTogMS4xMjVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7XCIgK1xyXG4gICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzOiAzcHg7IGN1cnNvcjogcG9pbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7IC1tcy1mbGV4LXBhY2s6IHN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgY29sb3I6ICMwMDA7Jz5cIiArXHJcbiAgICAgICAgICAgICAgICBcIjxzcGFuIHN0eWxlPSdsaW5lLWhlaWdodDogMTttYXJnaW4tdG9wOiAxcHg7Jz7QktGL0LHQtdGA0LjRgtC1INGE0LDQudC7PC9zcGFuPlwiICtcclxuICAgICAgICAgICAgICAgIFwiPC9sYWJlbD5cIitcclxuICAgICAgICAgICAgICAgIFwiPC9kaXY+XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2lucHV0X193cmFwcGVyJz5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8aW5wdXQgdHlwZSA9ICdmaWxlJyAgaWQgPSAnaW5wdXRfX2ZpbGUnIGNsYXNzPSdpbnB1dCBpbnB1dF9fZmlsZScgbXVsdGlwbGU+XCIgK1xyXG4gICAgICAgICAgICAvLyAgIFwiPGxhYmVsIGZvcj0naW5wdXRfX2ZpbGUnIGNsYXNzPSdpbnB1dF9fZmlsZS1idXR0b24nPlwiICtcclxuICAgICAgICAgICAgLy8gICAgICBcIjxzcGFuIGNsYXNzPSdpbnB1dF9fZmlsZS1idXR0b24tdGV4dCc+0JLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQuzwvc3Bhbj5cIiArXHJcbiAgICAgICAgICAgIC8vICAgXCI8L2xhYmVsPlwiICtcclxuICAgICAgICAgICAgLy9cIjwvZGl2PlwiXHJcblxyXG4gICAgICAgICAgICB0aGlzLkxvYWRlZCArPSBDb250cm9sRm9yRGlzcGxheWluZ0FGaWxlT3BlbkRpYWxvZ19Mb2FkZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2b2lkIENvbnRyb2xGb3JEaXNwbGF5aW5nQUZpbGVPcGVuRGlhbG9nX0xvYWRlZChvYmplY3Qgc2VuZGVyLCBSb3V0ZWRFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgcmVmZXJlbmNlIHRvIHRoZSBcImlucHV0XCIgZWxlbWVudDpcclxuICAgICAgICAgICAgdmFyIGlucHV0RWxlbWVudCA9IENTSFRNTDUuSW50ZXJvcC5HZXREaXYodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBBY3Rpb248b2JqZWN0PiBvbkZpbGVPcGVuZWQgPSAocmVzdWx0KSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5GaWxlT3BlbmVkICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GaWxlT3BlbmVkKHRoaXMsIG5ldyBGaWxlT3BlbmVkRXZlbnRBcmdzKHJlc3VsdCwgdGhpcy5SZXN1bHRLaW5kKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0cmluZyByZXN1bHRLaW5kU3RyID0gX3Jlc3VsdEtpbmRTdHI7IC8vIE5vdGU6IHRoaXMgaXMgaGVyZSB0byBcImNhcHR1cmVcIiB0aGUgdmFyaWFibGUgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBpbnNpZGUgdGhlIFwiYWRkRXZlbnRMaXN0ZW5lclwiIGJlbG93LlxyXG5cclxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIFwiRmlsdGVyXCIgcHJvcGVydHkgdG8gbGltaXQgdGhlIGNob2ljZSBvZiB0aGUgdXNlciB0byB0aGUgc3BlY2lmaWVkIGV4dGVuc2lvbnM6XHJcbiAgICAgICAgICAgIFNldEZpbHRlcih0aGlzLkZpbHRlcik7XHJcblxyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gdG8gdGhlIFwiY2hhbmdlXCIgcHJvcGVydHkgb2YgdGhlIFwiaW5wdXRcIiBlbGVtZW50LCBhbmQgY2FsbCB0aGUgY2FsbGJhY2s6XHJcbiAgICAgICAgICAgIENTSFRNTDUuSW50ZXJvcC5FeGVjdXRlSmF2YVNjcmlwdChAXCJcclxuICAgICAgICAgICAgICAgICQwLmFkZEV2ZW50TGlzdGVuZXIoXCJcImNoYW5nZVwiXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZSA9IHdpbmRvdy5ldmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZ1bGxQYXRoID0gJDAudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVuYW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bGxQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydEluZGV4ID0gKGZ1bGxQYXRoLmluZGV4T2YoJ1xcXFwnKSA+PSAwID8gZnVsbFBhdGgubGFzdEluZGV4T2YoJ1xcXFwnKSA6IGZ1bGxQYXRoLmxhc3RJbmRleE9mKCcvJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IGZ1bGxQYXRoLnN1YnN0cmluZyhzdGFydEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVuYW1lLmluZGV4T2YoJ1xcXFwnKSA9PT0gMCB8fCBmaWxlbmFtZS5pbmRleE9mKCcvJykgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gZmlsZW5hbWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gJDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKGZpbGUudHlwZSA9PSAndGV4dC9wbGFpbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEtpbmQgPSAkMztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0S2luZCA9PSAnRGF0YVVSTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNSdW5uaW5nSW5UaGVTaW11bGF0b3IgPSAkMjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1wiLCBpbnB1dEVsZW1lbnQsIG9uRmlsZU9wZW5lZCwgQ1NIVE1MNS5JbnRlcm9wLklzUnVubmluZ0luVGhlU2ltdWxhdG9yLCByZXN1bHRLaW5kU3RyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZvaWQgU2V0RmlsdGVyKHN0cmluZyBmaWx0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHJlZmVyZW5jZSB0byB0aGUgXCJpbnB1dFwiIGVsZW1lbnQ6XHJcbiAgICAgICAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSBDU0hUTUw1LkludGVyb3AuR2V0RGl2KHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgZmlsdGVyIGxpc3QgdG8gY29udmVydCB0aGUgc3ludGF4IGZyb20gWEFNTCB0byBIVE1MNTpcclxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBzeW50YXggaW4gU2lsdmVybGlnaHQ6IEltYWdlIEZpbGVzICgqLmJtcCwgKi5qcGcpfCouYm1wOyouanBnfEFsbCBGaWxlcyAoKi4qKXwqLipcclxuICAgICAgICAgICAgLy8gRXhhbXBsZSBvZiBzeW50YXggaW4gSFRNTDU6IC5naWYsIC5qcGcsIC5wbmcsIC5kb2NcclxuICAgICAgICAgICAgc3RyaW5nW10gc3BsaXR0ZWQgPSBmaWx0ZXIuU3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgTGlzdDxzdHJpbmc+IGl0ZW1zS2VwdCA9IG5ldyBMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0dGVkLkxlbmd0aCA9PSAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0tlcHQuQWRkKHNwbGl0dGVkWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaW50IGkgPSAxOyBpIDwgc3BsaXR0ZWQuTGVuZ3RoOyBpICs9IDIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNLZXB0LkFkZChzcGxpdHRlZFtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyaW5nIGZpbHRlcnNJbkh0bWw1ID0gU3RyaW5nLkpvaW4oXCIsXCIsIGl0ZW1zS2VwdCkuUmVwbGFjZShcIipcIiwgXCJcIikuUmVwbGFjZShcIjtcIiwgXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGZpbHRlcjpcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKGZpbHRlcnNJbkh0bWw1KSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIiQwLmFjY2VwdCA9ICQxXCIsIGlucHV0RWxlbWVudCwgZmlsdGVyc0luSHRtbDUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ1NIVE1MNS5JbnRlcm9wLkV4ZWN1dGVKYXZhU2NyaXB0KEBcIiQwLmFjY2VwdCA9IFwiXCJcIlwiXCIsIGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIEZpbHRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0IHsgcmV0dXJuIChzdHJpbmcpR2V0VmFsdWUoRmlsdGVyUHJvcGVydHkpOyB9XHJcbiAgICAgICAgICAgIHNldCB7IFNldFZhbHVlKEZpbHRlclByb3BlcnR5LCB2YWx1ZSk7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZXBlbmRlbmN5UHJvcGVydHkgRmlsdGVyUHJvcGVydHkgPVxyXG4gICAgICAgICAgICBEZXBlbmRlbmN5UHJvcGVydHkuUmVnaXN0ZXIoXCJGaWx0ZXJcIiwgdHlwZW9mKHN0cmluZyksIHR5cGVvZihDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKSwgbmV3IFByb3BlcnR5TWV0YWRhdGEoXCJcIiwgRmlsdGVyX0NoYW5nZWQpKTtcclxuXHJcbiAgICAgICAgc3RhdGljIHZvaWQgRmlsdGVyX0NoYW5nZWQoRGVwZW5kZW5jeU9iamVjdCBkLCBEZXBlbmRlbmN5UHJvcGVydHlDaGFuZ2VkRXZlbnRBcmdzIGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbCA9IChDb250cm9sRm9yRGlzcGxheWluZ1RoZUZpbGVPcGVuRGlhbG9nKWQ7XHJcbiAgICAgICAgICAgIGlmIChDU2hhcnBYYW1sRm9ySHRtbDUuRG9tTWFuYWdlbWVudC5Jc0NvbnRyb2xJblZpc3VhbFRyZWUoY29udHJvbCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuU2V0RmlsdGVyKChlLk5ld1ZhbHVlID8/IFwiXCIpLlRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFzcyBGaWxlT3BlbmVkRXZlbnRBcmdzIDogRXZlbnRBcmdzXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIlRleHRcIlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW09ic29sZXRlXVxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgUGxhaW5UZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIlRleHRcIi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgVGV4dDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBPbmx5IGF2YWlsYWJsZSBpZiB0aGUgcHJvcGVydHkgXCJSZXN1bHRLaW5kXCIgd2FzIHNldCB0byBcIkRhdGFVUkxcIi5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBzdHJpbmcgRGF0YVVSTDtcclxuXHJcbiAgICAgICAgcHVibGljIEZpbGVPcGVuZWRFdmVudEFyZ3Mob2JqZWN0IHJlc3VsdCwgUmVzdWx0S2luZCByZXN1bHRLaW5kKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdEtpbmQgPT0gUmVzdWx0S2luZC5UZXh0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRleHQgPSB0aGlzLlBsYWluVGV4dENvbnRlbnQgPSAocmVzdWx0ID8/IFwiXCIpLlRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0S2luZCA9PSBSZXN1bHRLaW5kLkRhdGFVUkwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGF0YVVSTCA9IChyZXN1bHQgPz8gXCJcIikuVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBOb3RTdXBwb3J0ZWRFeGNlcHRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW51bSBSZXN1bHRLaW5kXHJcbiAgICB7XHJcbiAgICAgICAgVGV4dCwgRGF0YVVSTFxyXG4gICAgfVxyXG59XHJcbiJdCn0K
