(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{336:function(t,e,a){t.exports=a.p+"assets/img/storage_explorer_view.52ed3f13.png"},514:function(t,e,a){t.exports=a.p+"assets/img/portal_storageaccount.42e7a95b.png"},515:function(t,e,a){t.exports=a.p+"assets/img/function_create.f2a257fb.png"},516:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard1.80854a36.png"},517:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard2.8957d094.png"},518:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard3.21fd1514.png"},519:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard4.0a1935a1.png"},520:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard5.d7f6fc92.png"},521:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard6.cc694b88.png"},522:function(t,e,a){t.exports=a.p+"assets/img/functions_wizard7.25ae7287.png"},523:function(t,e,a){t.exports=a.p+"assets/img/functions_deploy_wizard1.ba3125ef.png"},524:function(t,e,a){t.exports=a.p+"assets/img/azure_function_settings.805a54cf.png"},855:function(t,e,a){"use strict";a.r(e);var s=a(28),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"challenge-2-serverless"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#challenge-2-serverless"}},[t._v("#")]),t._v(" Challenge 2: Serverless")]),t._v(" "),s("p",[t._v("⏲️ "),s("em",[t._v("Est. time to complete: 45 min.")]),t._v(" ⏲️")]),t._v(" "),s("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),s("ul",[s("li",[t._v("Create an Azure Function on your local machine")]),t._v(" "),s("li",[t._v("Learn how to debug Azure Functions")]),t._v(" "),s("li",[t._v("Learn how to use Function Triggers to react to events in Azure")]),t._v(" "),s("li",[t._v("Deploy Azure Functions")])]),t._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table Of Contents")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#create-an-azure-function-locally"}},[t._v("Create an Azure Function locally")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#deploy-the-azure-function-app-to-azure"}},[t._v("Deploy the Azure Function App to Azure")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#azure-samples"}},[t._v("Azure Samples")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#cleanup"}},[t._v("Cleanup")])])]),t._v(" "),s("h2",{attrs:{id:"create-an-azure-function-locally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-function-locally"}},[t._v("#")]),t._v(" Create an Azure Function locally")]),t._v(" "),s("p",[t._v("To get familiar with "),s("em",[t._v("Azure Functions")]),t._v(" on your local machine, we will create a sample that listens for files on an Azure Storage Account (Blob). Each time a new file is added to a predefined container, our function will be called by Azure, giving us the opportunity to manipulate the file and save it to another location (just a small sample).")]),t._v(" "),s("p",[t._v("So, first of all, we need to create a Storage Account to being able to upload/process files.")]),t._v(" "),s("h3",{attrs:{id:"add-a-storage-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-storage-account"}},[t._v("#")]),t._v(" Add a Storage Account")]),t._v(" "),s("p",[t._v("Go to the Azure Portal and click on "),s("strong",[t._v('"Create a resource"')]),t._v(", in the next view choose/search for "),s("strong",[t._v('"Storage Account"')]),t._v(" and afterwards click "),s("strong",[t._v("create")]),t._v(".")]),t._v(" "),s("p",[t._v("Follow the wizard to create the storage account:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("Resource group")])]),t._v(" "),s("td",[t._v("new, serverless-rg")])]),t._v(" "),s("tr",[s("td",[t._v("Name")]),t._v(" "),s("td",[t._v("Give your account a "),s("em",[t._v("globally unique")]),t._v(" name")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Location")])]),t._v(" "),s("td",[t._v("West Europe")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Performance Tier")])]),t._v(" "),s("td",[t._v("Standard")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Account Kind")])]),t._v(" "),s("td",[t._v("Storage V2 (General Purpose)")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Replication")])]),t._v(" "),s("td",[t._v("Locally-redundant storage (LRS)")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Access Tier")])]),t._v(" "),s("td",[t._v("Hot")])])])]),t._v(" "),s("p",[t._v("Leave all other options to their defaults. In the summary view, it should look like that:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(514),alt:"create",title:"create"}})]),t._v(" "),s("p",[t._v("Proceed and create the Storage Account.")]),t._v(" "),s("p",[t._v("When the deployment has finished")]),t._v(" "),s("ul",[s("li",[t._v("Go to the storage account and open "),s("strong",[t._v('"Containers"')]),t._v(' (under "Blob service")')]),t._v(" "),s("li",[t._v("Create a container called "),s("strong",[t._v("originals")]),t._v(" and another one called "),s("strong",[t._v("processed")])]),t._v(" "),s("li",[t._v("Leave the proposed settings for "),s("strong",[t._v("Public Access Level")]),t._v(" - "),s("em",[t._v("Private")]),t._v(".")])]),t._v(" "),s("p",[t._v("The infrastructure to store files is now ready. Let's create the local Azure Function.")]),t._v(" "),s("h3",{attrs:{id:"create-the-local-function-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-local-function-app"}},[t._v("#")]),t._v(" Create the local Function App")]),t._v(" "),s("p",[t._v("Open a new Visual Studio Code window and switch to the Azure Tools Extension. In the section for "),s("strong",[t._v('"Functions"')]),t._v(", click on "),s("strong",[t._v('"Create New Project"')]),t._v(" and select a new, empty folder on your local machine:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(515),alt:"func_create",title:"func_create"}})]),t._v(" "),s("p",[t._v("The Wizard will guide you through the local setup process.")]),t._v(" "),s("p",[t._v("Choose the following options:")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("Language")]),t._v(": C#\n"),s("img",{attrs:{src:a(516),alt:"functions_wizard1",title:"functions_wizard1"}})]),t._v(" "),s("li",[s("em",[t._v("Template")]),t._v(": BlobTrigger\n"),s("img",{attrs:{src:a(517),alt:"functions_wizard2",title:"functions_wizard2"}})]),t._v(" "),s("li",[s("em",[t._v("Function Name")]),t._v(": BlobTriggerCSharp\n"),s("img",{attrs:{src:a(518),alt:"functions_wizard3",title:"functions_wizard3"}})]),t._v(" "),s("li",[s("em",[t._v("Namespace")]),t._v(": AzDevCollege.Function\n"),s("img",{attrs:{src:a(519),alt:"functions_wizard4",title:"functions_wizard4"}})]),t._v(" "),s("li",[s("em",[t._v("Settings")]),t._v(": Create new local app setting\n"),s("img",{attrs:{src:a(520),alt:"functions_wizard5",title:"functions_wizard5"}})]),t._v(" "),s("li",[s("em",[t._v("Storage Account")]),t._v(": select the storage account you created previously\n"),s("img",{attrs:{src:a(521),alt:"functions_wizard6",title:"functions_wizard6"}})]),t._v(" "),s("li",[s("em",[t._v("Trigger Path")]),t._v(" (the container name we want to listen to for new files): originals\n"),s("img",{attrs:{src:a(522),alt:"functions_wizard7",title:"functions_wizard7"}})]),t._v(" "),s("li",[s("em",[t._v("Debug")]),t._v(": select the same storage account as above")])]),t._v(" "),s("p",[t._v("When everything is setup, we test the function.")]),t._v(" "),s("ul",[s("li",[t._v("Open "),s("code",[t._v("BlobTriggerCSharp.cs")]),t._v(" file and set a breakpoint in the "),s("code",[t._v("Run")]),t._v(" method.")]),t._v(" "),s("li",[t._v("Start the Azure Function by hitting "),s("strong",[t._v("F5")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📝 If you get a message that the core function tools are required, install them by executing "),s("code",[t._v("npm i -g azure-functions-core-tools@3 --unsafe-perm true")]),t._v(". If you still see an error, it's likely that remote-signed Powershell scripts aren't allowed on your machine. To fix that, run "),s("code",[t._v("Set-ExecutionPolicy -ExecutionPolicy RemoteSigned")]),t._v(" in a Powershell environment (as "),s("em",[t._v("admin")]),t._v(").")])]),t._v(" "),s("p",[t._v("The debug console should print logs like that:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" func start\n\nAzure Functions Core Tools\nCore Tools Version:       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(".3284 Commit hash: 98bc25e668274edd175a1647fe5a9bc4ffb6887d\nFunction Runtime Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(".15371.0\n")])])]),s("p",[t._v("Open the "),s("em",[t._v("Azure Storage Explorer")]),t._v(", find your storage account and select the "),s("code",[t._v("originals")]),t._v(' container (alternatively: go to the Portal and open the "Storage Explorer" in the Storage Account).')]),t._v(" "),s("p",[s("img",{attrs:{src:a(336),alt:"storage_explorer_view",title:"storage_explorer_view"}})]),t._v(" "),s("p",[t._v("Drag and drop a file to the container or upload one via the menu. After a few seconds, the breakpoint in VS Code will be hit. Examine the properties of the variable "),s("code",[t._v("myBlob")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"adjusting-the-sample"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-the-sample"}},[t._v("#")]),t._v(" Adjusting the Sample")]),t._v(" "),s("p",[t._v("We can now receive events when a file is added to blob storage. Let's add a more meaningful sample.")]),t._v(" "),s("p",[t._v("We want to receive images that we will resize/manipulate in our function and write the result to the "),s("strong",[t._v("processed")]),t._v(" container. Therefore, we need to add a dependency to our project that enables us to do image manipulation in dotnet core. We will use "),s("a",{attrs:{href:"https://github.com/SixLabors/ImageSharp",target:"_blank",rel:"noopener noreferrer"}},[t._v("SixLabors.ImageSharp"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Open a terminal and go to your projects folder. Add the library via:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("dotnet "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NAME_OF_FUNCTION_PROJECT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".csproj package SixLabors.ImageSharp\n")])])]),s("p",[t._v("Now, back in Visual Studio Code, replace the contents of the file "),s("code",[t._v("BlobTriggerCSharp.cs")]),t._v(" with:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Azure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebJobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Azure"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WebJobs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Extensions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("SixLabors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImageSharp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("SixLabors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImageSharp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Processing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("AzDevCollege"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlobTriggerCSharp")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FunctionName")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nameof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BlobTriggerCSharp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlobTrigger")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"originals/{name}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<REPLACE_WITH_NAME_OF_STORAGE_ACCOUNT>_STORAGE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),t._v(" myBlob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"processed/proc_{name}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileAccess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<REPLACE_WITH_NAME_OF_STORAGE_ACCOUNT>_STORAGE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),t._v(" outStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ILogger")]),t._v(" log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),t._v(" image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myBlob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Resize and rotate the image!")]),t._v("\n                image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mutate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Resize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Mutate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SaveAsJpeg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("LogInformation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token interpolation-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('$"C# Blob trigger function Processed blob\\n Name:')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" \\n Size: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token expression language-csharp"}},[t._v("myBlob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(' Bytes"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("What has been added to the "),s("strong",[t._v("Run")]),t._v(" method:")]),t._v(" "),s("ul",[s("li",[t._v("The parameter "),s("code",[t._v('[Blob("processed/proc_{name}", FileAccess.Write)] Stream outStream')]),t._v(" to automatically write the results of the image manipulation to a blob in the container "),s("strong",[t._v("processed")]),t._v(' having the same file name, prefixed with "proc". This is called an '),s("em",[t._v("Output Binding")]),t._v(". You simply write data to these kind of annotated variables and Azure takes care of storing to the configured data store. For more information on that, see "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-blob?tabs=csharp#output",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-blob?tabs=csharp#output"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("The code needed to manipulate the input image in the "),s("code",[t._v("using")]),t._v(" statement")])]),t._v(" "),s("p",[t._v("Now restart the local Azure Function and when the function is ready to accept calls, go to the Storage Explorer and drag an image ("),s("strong",[t._v("!use an image!")]),t._v(") to the folder "),s("strong",[t._v("originals")]),t._v(". A few seconds later, you will see that the Azure Function has been triggered.")]),t._v(" "),s("p",[t._v("Now check the "),s("strong",[t._v("processed")]),t._v(" container. You will find a new "),s("code",[t._v("proc\\_")]),t._v("-image with the results of our manipulation.")]),t._v(" "),s("p",[t._v("If everything works as expected on your local machine, we deploy the Azure Function to Azure.")]),t._v(" "),s("h2",{attrs:{id:"deploy-the-azure-function-app-to-azure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-azure-function-app-to-azure"}},[t._v("#")]),t._v(" Deploy the Azure Function App to Azure")]),t._v(" "),s("p",[t._v("Go to the Azure Tools Extension and click on the "),s("strong",[t._v('"Deploy to Azure..."')]),t._v(" button in the "),s("strong",[t._v('"Functions"')]),t._v(" section. A wizard will guide you through the creation process.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📝 Choose "),s("em",[t._v("Advanced")]),t._v(" mode.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(523),alt:"functions_deploy_wizard1",title:"functions_deploy_wizard1"}})]),t._v(" "),s("p",[t._v("Choose the following options, when asked:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("em",[t._v("Runtime")])]),t._v(" "),s("td",[t._v("NET Core 3.1")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("OS")])]),t._v(" "),s("td",[t._v("Windows")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Hosting Plan")])]),t._v(" "),s("td",[t._v("Consumption")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Resource Group")])]),t._v(" "),s("td",[t._v("serverless-rg")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Storage Account")])]),t._v(" "),s("td",[t._v("The same as you used in the local sample")])]),t._v(" "),s("tr",[s("td",[s("em",[t._v("Application Insights")])]),t._v(" "),s("td",[t._v("Skip for now")])])])]),t._v(" "),s("p",[t._v("We still have to configure our Functions App, to be able to listen to blob changes in the Storage Account ("),s("em",[t._v("BlobTrigger information")]),t._v("). Therefore")]),t._v(" "),s("ul",[s("li",[t._v("Go to the Portal and open the Functions App you previously created.")]),t._v(" "),s("li",[t._v("Open the Application settings under "),s("strong",[t._v("Configuration")])]),t._v(" "),s("li",[t._v("Add a new application setting (you can check your "),s("code",[t._v("local.settings.json")]),t._v(" file for the correct values):\n"),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("<storageaccountname>_STORAGE")]),t._v(" "),s("td",[t._v("enter the connection string to the storage account (you can copy that from your "),s("em",[t._v("local.settings.json")]),t._v(" file)")])])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📝 Make sure to click on "),s("em",[t._v("Save")]),t._v(" afterwards.")])]),t._v(" "),s("p",[t._v("Finally, your application settings should look like that:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(524),alt:"azure_function_settings",title:"azure_function_settings"}})]),t._v(" "),s("p",[t._v("Test again (upload images) and check, if the Function App is running correctly in Azure")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("📝 It might be necessary to restart your function app.")])]),t._v(" "),s("h2",{attrs:{id:"azure-samples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-samples"}},[t._v("#")]),t._v(" Azure Samples")]),t._v(" "),s("p",[t._v("Azure Functions code samples:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/samples/browse/?expanded=azure&products=azure-functions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.microsoft.com/samples/browse/?expanded=azure&products=azure-functions"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"cleanup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[t._v("#")]),t._v(" Cleanup")]),t._v(" "),s("p",[t._v("Remove the sample resource group via")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("az group delete -n serverless-rg\n")])])]),s("p",[s("RouterLink",{attrs:{to:"/day2/challenges/02-challenge-bo-1.html"}},[t._v("◀ Previous challenge")]),t._v(" | "),s("RouterLink",{attrs:{to:"/day2/"}},[t._v("🔼 Day 2")]),t._v(" | "),s("RouterLink",{attrs:{to:"/day2/challenges/04-challenge-messaging.html"}},[t._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);