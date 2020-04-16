Bridge.assembly("CShtml", function ($asm, globals) {
    "use strict";


    var $m = Bridge.setMetadata,
        $n = ["System","Windows.UI.Xaml","CSHTML5.Extensions.FileOpenDialog","Windows.UI.Xaml.Controls","System.Collections.Generic"];
    $m("ǀǀCshtmlǀǀComponentǀǀAppǀǀXamlǀǀFactory", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Instantiate","is":true,"t":8,"sn":"Instantiate","rt":$n[0].Object}]}; }, $n);
    $m("ǀǀCshtmlǀǀComponentǀǀPage1ǀǀXamlǀǀFactory", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Instantiate","is":true,"t":8,"sn":"Instantiate","rt":$n[0].Object}]}; }, $n);
    $m("ǀǀCshtmlǀǀComponentǀǀPagehomeǀǀXamlǀǀFactory", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Instantiate","is":true,"t":8,"sn":"Instantiate","rt":$n[0].Object}]}; }, $n);
    $m("ǀǀCshtmlǀǀComponentǀǀSecondpageǀǀXamlǀǀFactory", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Instantiate","is":true,"t":8,"sn":"Instantiate","rt":$n[0].Object}]}; }, $n);
    $m("ǀǀCshtmlǀǀComponentǀǀPageuploadǀǀXamlǀǀFactory", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Instantiate","is":true,"t":8,"sn":"Instantiate","rt":$n[0].Object}]}; }, $n);
    $m("CSHTML5.Extensions.FileOpenDialog.ControlForDisplayingTheFileOpenDialog", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ControlForDisplayingAFileOpenDialog_Loaded","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[1].RoutedEventArgs,"ps":1}],"sn":"ControlForDisplayingAFileOpenDialog_Loaded","rt":$n[0].Void,"p":[$n[0].Object,$n[1].RoutedEventArgs]},{"a":1,"n":"Filter_Changed","is":true,"t":8,"pi":[{"n":"d","pt":$n[1].DependencyObject,"ps":0},{"n":"e","pt":$n[1].DependencyPropertyChangedEventArgs,"ps":1}],"sn":"Filter_Changed","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[1].DependencyPropertyChangedEventArgs]},{"a":1,"n":"SetFilter","t":8,"pi":[{"n":"filter","pt":$n[0].String,"ps":0}],"sn":"SetFilter","rt":$n[0].Void,"p":[$n[0].String]},{"a":2,"n":"Filter","t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_Filter","t":8,"rt":$n[0].String,"fg":"Filter"},"s":{"a":2,"n":"set_Filter","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"Filter"},"fn":"Filter"},{"a":2,"n":"ResultKind","t":16,"rt":$n[2].ResultKind,"g":{"a":2,"n":"get_ResultKind","t":8,"rt":$n[2].ResultKind,"fg":"ResultKind","box":function ($v) { return Bridge.box($v, CSHTML5.Extensions.FileOpenDialog.ResultKind, System.Enum.toStringFn(CSHTML5.Extensions.FileOpenDialog.ResultKind));}},"s":{"a":2,"n":"set_ResultKind","t":8,"p":[$n[2].ResultKind],"rt":$n[0].Void,"fs":"ResultKind"},"fn":"ResultKind"},{"a":2,"n":"FilterProperty","is":true,"t":4,"rt":$n[1].DependencyProperty,"sn":"FilterProperty","ro":true},{"a":1,"n":"_resultKind","t":4,"rt":$n[2].ResultKind,"sn":"_resultKind","box":function ($v) { return Bridge.box($v, CSHTML5.Extensions.FileOpenDialog.ResultKind, System.Enum.toStringFn(CSHTML5.Extensions.FileOpenDialog.ResultKind));}},{"a":1,"n":"_resultKindStr","t":4,"rt":$n[0].String,"sn":"_resultKindStr"},{"a":2,"n":"FileOpened","t":2,"ad":{"a":2,"n":"add_FileOpened","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addFileOpened","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_FileOpened","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeFileOpened","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    $m("CSHTML5.Extensions.FileOpenDialog.FileOpenedEventArgs", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Object,$n[2].ResultKind],"pi":[{"n":"result","pt":$n[0].Object,"ps":0},{"n":"resultKind","pt":$n[2].ResultKind,"ps":1}],"sn":"ctor"},{"a":2,"n":"DataURL","t":4,"rt":$n[0].String,"sn":"DataURL","ro":true},{"a":2,"n":"PlainTextContent","t":4,"rt":$n[0].String,"sn":"PlainTextContent","ro":true},{"a":2,"n":"Text","t":4,"rt":$n[0].String,"sn":"Text","ro":true}]}; }, $n);
    $m("CSHTML5.Extensions.FileOpenDialog.ResultKind", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DataURL","is":true,"t":4,"rt":$n[2].ResultKind,"sn":"DataURL","box":function ($v) { return Bridge.box($v, CSHTML5.Extensions.FileOpenDialog.ResultKind, System.Enum.toStringFn(CSHTML5.Extensions.FileOpenDialog.ResultKind));}},{"a":2,"n":"Text","is":true,"t":4,"rt":$n[2].ResultKind,"sn":"Text","box":function ($v) { return Bridge.box($v, CSHTML5.Extensions.FileOpenDialog.ResultKind, System.Enum.toStringFn(CSHTML5.Extensions.FileOpenDialog.ResultKind));}}]}; }, $n);
    $m("CShtml.App", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"InitializeComponent","t":8,"sn":"InitializeComponent","rt":$n[0].Void},{"a":2,"n":"Main","is":true,"t":8,"sn":"Main","rt":$n[0].Void},{"a":1,"n":"_contentLoaded","t":4,"rt":$n[0].Boolean,"sn":"_contentLoaded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    $m("CShtml.FileClass", function () { return {"att":1048960,"a":4,"s":true,"m":[{"a":2,"n":"fileText","is":true,"t":16,"rt":$n[0].String,"g":{"a":2,"n":"get_fileText","t":8,"rt":$n[0].String,"fg":"fileText","is":true},"s":{"a":2,"n":"set_fileText","t":8,"p":[$n[0].String],"rt":$n[0].Void,"fs":"fileText","is":true},"fn":"fileText"},{"a":1,"backing":true,"n":"<fileText>k__BackingField","is":true,"t":4,"rt":$n[0].String,"sn":"fileText"}]}; }, $n);
    $m("CShtml.Page1", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BtnProcessing_Click","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[1].RoutedEventArgs,"ps":1}],"sn":"BtnProcessing_Click","rt":$n[0].Void,"p":[$n[0].Object,$n[1].RoutedEventArgs]},{"a":1,"n":"BtnUpload_Click","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[1].RoutedEventArgs,"ps":1}],"sn":"BtnUpload_Click","rt":$n[0].Void,"p":[$n[0].Object,$n[1].RoutedEventArgs]},{"a":1,"n":"Button_Click","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[1].RoutedEventArgs,"ps":1}],"sn":"Button_Click","rt":$n[0].Void,"p":[$n[0].Object,$n[1].RoutedEventArgs]},{"a":1,"n":"First_Click","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[1].RoutedEventArgs,"ps":1}],"sn":"First_Click","rt":$n[0].Void,"p":[$n[0].Object,$n[1].RoutedEventArgs]},{"a":2,"n":"InitializeComponent","t":8,"sn":"InitializeComponent","rt":$n[0].Void},{"a":1,"n":"Instantiate_ControlTemplate_680dfe4ca114460ca136a0de2a1b86f2","t":8,"pi":[{"n":"templateOwner","pt":$n[3].Control,"ps":0}],"sn":"Instantiate_ControlTemplate_680dfe4ca114460ca136a0de2a1b86f2","rt":$n[1].TemplateInstance,"p":[$n[3].Control]},{"a":1,"n":"Instantiate_ControlTemplate_7fd50f0e7526400995627d3a57a72826","t":8,"pi":[{"n":"templateOwner","pt":$n[3].Control,"ps":0}],"sn":"Instantiate_ControlTemplate_7fd50f0e7526400995627d3a57a72826","rt":$n[1].TemplateInstance,"p":[$n[3].Control]},{"a":1,"n":"Instantiate_ControlTemplate_806b4ea56a6f45f7bdd034e0b7d08ce0","t":8,"pi":[{"n":"templateOwner","pt":$n[3].Control,"ps":0}],"sn":"Instantiate_ControlTemplate_806b4ea56a6f45f7bdd034e0b7d08ce0","rt":$n[1].TemplateInstance,"p":[$n[3].Control]},{"a":1,"n":"Second_Click","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[1].RoutedEventArgs,"ps":1}],"sn":"Second_Click","rt":$n[0].Void,"p":[$n[0].Object,$n[1].RoutedEventArgs]},{"a":1,"n":"Third_Click","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[1].RoutedEventArgs,"ps":1}],"sn":"Third_Click","rt":$n[0].Void,"p":[$n[0].Object,$n[1].RoutedEventArgs]},{"a":2,"n":"accessVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_b4bab784987c47e68836e0515f197985","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_b4bab784987c47e68836e0515f197985","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_b4bab784987c47e68836e0515f197985","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_b4bab784987c47e68836e0515f197985","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"setAnimationVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_b4bab784987c47e68836e0515f197985","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_b4bab784987c47e68836e0515f197985","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_b4bab784987c47e68836e0515f197985","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_b4bab784987c47e68836e0515f197985","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_043b71f8694740d3980fbb196be3a5b5","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_0606ac29e8b64921af56f1bb4412cb2b","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_558412e0dcbd4814a0b887477fbb6197","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_747b1c09a43d4d65a3c41a8e21da88cd","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_a92dff244ce14dfe84da874432bdc5c2","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_b4bab784987c47e68836e0515f197985","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_b4bab784987c47e68836e0515f197985","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_caecf755bd1747e59cf9970fae623ee0","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_ef7631ee720f4adfa230de950c705ca4","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_ffc0c966be1d4dbfad2d4599472e98d6","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":3,"n":"LayoutGrid","t":4,"rt":$n[3].Grid,"sn":"LayoutGrid"},{"a":1,"n":"_contentLoaded","t":4,"rt":$n[0].Boolean,"sn":"_contentLoaded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":3,"n":"borderIDEF","t":4,"rt":$n[3].Border,"sn":"borderIDEF"},{"a":3,"n":"borderUML","t":4,"rt":$n[3].Border,"sn":"borderUML"},{"a":3,"n":"btnCancel","t":4,"rt":$n[3].Button,"sn":"btnCancel"},{"a":3,"n":"btnProcessing","t":4,"rt":$n[3].Button,"sn":"btnProcessing"},{"a":3,"n":"btnUpload","t":4,"rt":$n[3].Button,"sn":"btnUpload"},{"a":3,"n":"element","t":4,"rt":$n[3].Border,"sn":"element"},{"a":3,"n":"elementForList","t":4,"rt":$n[3].Border,"sn":"elementForList"},{"a":3,"n":"idef_Jpeg","t":4,"rt":$n[3].Image,"sn":"idef_Jpeg"},{"a":3,"n":"txtFile","t":4,"rt":$n[3].TextBox,"sn":"txtFile"},{"a":3,"n":"uml_Jpeg","t":4,"rt":$n[3].Image,"sn":"uml_Jpeg"}]}; }, $n);
    $m("CShtml.PageHome", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Button_Click","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[1].RoutedEventArgs,"ps":1}],"sn":"Button_Click","rt":$n[0].Void,"p":[$n[0].Object,$n[1].RoutedEventArgs]},{"a":2,"n":"InitializeComponent","t":8,"sn":"InitializeComponent","rt":$n[0].Void},{"a":1,"n":"Instantiate_ControlTemplate_38bab7b3cad04b6eb2cf2e1be7cf74e2","t":8,"pi":[{"n":"templateOwner","pt":$n[3].Control,"ps":0}],"sn":"Instantiate_ControlTemplate_38bab7b3cad04b6eb2cf2e1be7cf74e2","rt":$n[1].TemplateInstance,"p":[$n[3].Control]},{"a":2,"n":"accessVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"setAnimationVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_128043f0dde44ee8846a8ec637a7cd00","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_a1ed8162423e45f6b505fffeee3d2df5","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_b1d897f14d4740e3a958570e0e0f32d0","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":3,"n":"LayoutRoot","t":4,"rt":$n[3].Grid,"sn":"LayoutRoot"},{"a":1,"n":"_contentLoaded","t":4,"rt":$n[0].Boolean,"sn":"_contentLoaded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":3,"n":"btnBegin","t":4,"rt":$n[3].Button,"sn":"btnBegin"},{"a":3,"n":"element","t":4,"rt":$n[3].Border,"sn":"element"}]}; }, $n);
    $m("CShtml.PageUpload", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BtnCancel_Click","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[1].RoutedEventArgs,"ps":1}],"sn":"BtnCancel_Click","rt":$n[0].Void,"p":[$n[0].Object,$n[1].RoutedEventArgs]},{"a":2,"n":"InitializeComponent","t":8,"sn":"InitializeComponent","rt":$n[0].Void},{"a":1,"n":"Instantiate_ControlTemplate_4f423eac04084a1ebd6aba09a73f8680","t":8,"pi":[{"n":"templateOwner","pt":$n[3].Control,"ps":0}],"sn":"Instantiate_ControlTemplate_4f423eac04084a1ebd6aba09a73f8680","rt":$n[1].TemplateInstance,"p":[$n[3].Control]},{"a":1,"n":"OnFileOpened","t":8,"pi":[{"n":"sender","pt":$n[0].Object,"ps":0},{"n":"e","pt":$n[2].FileOpenedEventArgs,"ps":1}],"sn":"OnFileOpened","rt":$n[0].Void,"p":[$n[0].Object,$n[2].FileOpenedEventArgs]},{"a":2,"n":"accessVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"accessVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","t":8,"pi":[{"n":"rootTargetObjectInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"accessVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","rt":$n[4].IEnumerable$1(System.Tuple$3(Windows.UI.Xaml.DependencyObject,Windows.UI.Xaml.DependencyProperty,System.Nullable$1(System.Int32))),"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"getVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0}],"sn":"getVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","rt":$n[0].Object,"p":[$n[1].DependencyObject]},{"a":2,"n":"setAnimationVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setAnimationVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setAnimationVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setLocalVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setLocalVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_0ba8d24b5a7146d09e72e5cf891e412e","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_d4ef2077db4d4af4bb3917b93c19dca2","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":2,"n":"setVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","t":8,"pi":[{"n":"finalTargetInstance","pt":$n[1].DependencyObject,"ps":0},{"n":"value","pt":$n[0].Object,"ps":1}],"sn":"setVisualStateProperty_eeed2364485947fdaacaa2ba8a45c3c0","rt":$n[0].Void,"p":[$n[1].DependencyObject,$n[0].Object]},{"a":1,"n":"_contentLoaded","t":4,"rt":$n[0].Boolean,"sn":"_contentLoaded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":3,"n":"btnCancel","t":4,"rt":$n[3].Button,"sn":"btnCancel"}]}; }, $n);
    $m("CShtml.SecondPage", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"InitializeComponent","t":8,"sn":"InitializeComponent","rt":$n[0].Void},{"a":1,"n":"_contentLoaded","t":4,"rt":$n[0].Boolean,"sn":"_contentLoaded","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    $asm.attr= [new CSHTML5.Internal.Attributes.CompilerVersionNumberAttribute("2.0.0.490668"),new CSHTML5.Internal.Attributes.CompilerVersionFriendlyNameAttribute("Version 2.0 Preview 0.6 (2.0.0-alpha49-068) (2019.10.06)"),new CSHTML5.Internal.Attributes.CompilerIsSLMigrationAttribute(false),new CSHTML5.Internal.Attributes.IntermediateOutputAbsolutePathAttribute("C:\\Users\\User\\source\\repos\\CShtml\\CShtml\\obj\\Release\\"),new CSHTML5.Internal.Attributes.SettingsAttribute()];
});
