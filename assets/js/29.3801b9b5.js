(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{334:function(e,t,o){e.exports=o.p+"assets/img/architecture_day2.697228e8.png"},536:function(e,t,o){e.exports=o.p+"assets/img/portal_bo2_func.869e8773.png"},537:function(e,t,o){e.exports=o.p+"assets/img/bo2_code.69c59b3b.png"},538:function(e,t,o){e.exports=o.p+"assets/img/browser_avatar.2c68fe61.png"},539:function(e,t,o){e.exports=o.p+"assets/img/portal_static_website.0c0e58d6.png"},540:function(e,t,o){e.exports=o.p+"assets/img/vscode_integrated_terminal.43a2192e.png"},541:function(e,t,o){e.exports=o.p+"assets/img/vscode_deploy_staticwebsite.03be07a2.png"},858:function(e,t,o){"use strict";o.r(t);var a=o(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"💎-breakout-2-add-a-serverless-microservice-to-our-sample-app-and-include-messaging-💎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#💎-breakout-2-add-a-serverless-microservice-to-our-sample-app-and-include-messaging-💎"}},[e._v("#")]),e._v(" 💎 Breakout 2: Add a serverless microservice to our sample app and include messaging 💎")]),e._v(" "),a("p",[e._v("⏲️ "),a("em",[e._v("Est. time to complete: 45 min.")]),e._v(" ⏲️")]),e._v(" "),a("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[e._v("#")]),e._v(" Here is what you will learn 🎯")]),e._v(" "),a("p",[e._v('Time for our second "Break-Out" session!')]),e._v(" "),a("p",[e._v("We now will deploy "),a("em",[e._v("all required services")]),e._v(" of our SCM Contacts Management app to Azure, including the "),a("em",[e._v("Vue.js Single Page Application")]),e._v(". To host the SPA, which is basically a static website, we make use of the "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Static Website Hosting"),a("OutboundLink")],1),e._v(" option of Azure Storage Accounts. This is the cheapest option to host applications built e.g. with Angular, React or like in our case Vue.JS.")]),e._v(" "),a("p",[e._v("We also add a second service, that allows us to save images for our contacts. The service will be implemented in .NET Core and will use "),a("em",[e._v("Azure Storage Queues")]),e._v(" (to make you familiar with a messaging service option in Azure) to notify an Azure Function that in turn creates thumbnails of the images. The results will then be saved in an Azure Storage Account.")]),e._v(" "),a("p",[e._v("At the end of the day, this will be the architecture of our SCM Contacts Management application:")]),e._v(" "),a("p",[a("img",{attrs:{src:o(334),alt:"architecture_day2",title:"architecture_day2"}})]),e._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#services-to-handle-contact-images"}},[e._v("Services to handle Contact Images")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#deploy-the-azure-function-to-resize-images"}},[e._v("Deploy the Azure Function to resize images")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#deploy-the-azure-web-app-providing-the-api-to-store-images"}},[e._v("Deploy the Azure Web App providing the API to store images")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#host-the-single-page-application-in-azure"}},[e._v("Host the Single Page Application in Azure")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#wrap-up"}},[e._v("Wrap-Up")])])]),e._v(" "),a("h2",{attrs:{id:"services-to-handle-contact-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#services-to-handle-contact-images"}},[e._v("#")]),e._v(" Services to handle Contact Images")]),e._v(" "),a("p",[e._v("We will start implementing our target architecture by adding a Storage Account to save contact images.")]),e._v(" "),a("h3",{attrs:{id:"storage-account-container-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-account-container-queue"}},[e._v("#")]),e._v(" Storage Account (Container/Queue)")]),e._v(" "),a("p",[e._v("Therefore, create a Storage Account in the resource group you took for the first breakout session (should be "),a("code",[e._v("scm-breakout-rg")]),e._v("). Create the account having these parameters:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("Name the storage account")])]),e._v(" "),a("td",[e._v("<YOUR_PREFIX>scmresources")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Location")])]),e._v(" "),a("td",[e._v("West Europe")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Performance")])]),e._v(" "),a("td",[e._v("Standard")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Account Kind")])]),e._v(" "),a("td",[e._v("Storage V2")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Replication")])]),e._v(" "),a("td",[e._v("LRS")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Access Tier")])]),e._v(" "),a("td",[e._v("Hot")])])])]),e._v(" "),a("p",[e._v("When the Storage Account has been created, add two containers where we will be storing the images:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Container Name")]),e._v(" "),a("th",[e._v("Public Access Level")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("rawimages")])]),e._v(" "),a("td",[e._v("Blob")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("thumbnails")])]),e._v(" "),a("td",[e._v("Blob")])])])]),e._v(" "),a("p",[e._v("Also, add a new "),a("em",[e._v("Queue")]),e._v(" in your Storage Account. Name the queue "),a("code",[e._v("thumbnails")]),e._v(".")]),e._v(" "),a("p",[e._v("The infrastructure for handling images regarding storage and messaging is now set up.")]),e._v(" "),a("h3",{attrs:{id:"azure-function-for-image-manipulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-function-for-image-manipulation"}},[e._v("#")]),e._v(" Azure Function for Image Manipulation")]),e._v(" "),a("p",[e._v("In the "),a("em",[e._v("Serverless")]),e._v(" challenge, we created the Azure Function via the Visual Studio Code wizard. Now, let's see how the the Portal experience is like.")]),e._v(" "),a("p",[e._v("Go to your resource group ("),a("code",[e._v("scm-breakout-rg")]),e._v(") and add an Azure Function. To do so search for "),a("strong",[e._v('"Function App"')]),e._v(" in the wizard.")]),e._v(" "),a("p",[e._v("Follow the wizard and when asked, enter the following information (only important information will be mentioned):")]),e._v(" "),a("ul",[a("li",[e._v("Basic Tab\n"),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("Function App name")])]),e._v(" "),a("td",[e._v("choose a globally unique name")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Publish")])]),e._v(" "),a("td",[e._v("Code")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Runtime Stack")])]),e._v(" "),a("td",[e._v(".NET Core")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Version")])]),e._v(" "),a("td",[e._v("3.1")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Region:")])]),e._v(" "),a("td",[e._v("West Europe")])])])])]),e._v(" "),a("li",[e._v("Hosting Tab\n"),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("Storage Account")])]),e._v(" "),a("td",[e._v("choose the one you created before in this challenge")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Operating System")])]),e._v(" "),a("td",[e._v("Windows")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Plan Type")])]),e._v(" "),a("td",[e._v("Consumption (Serverless)")])])])])]),e._v(" "),a("li",[e._v("Monitoring\n"),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("Enable AppInsights")])]),e._v(" "),a("td",[e._v("No")])])])])])]),e._v(" "),a("p",[a("img",{attrs:{src:o(536),alt:"portal_bo2_func",title:"portal_bo2_func"}})]),e._v(" "),a("p",[e._v("When the Function has been created, we need to add a few "),a("em",[e._v("Configuration settings")]),e._v(" that our image manipulation function needs to be working correctly:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Open the Azure Function and switch to the "),a("strong",[e._v("Configuration")]),e._v(" view.")])]),e._v(" "),a("li",[a("p",[e._v("Add the following Configuration settings")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Value / Hints")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("QueueName")])]),e._v(" "),a("td",[e._v("thumbnails")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("StorageAccountConnectionString")])]),e._v(" "),a("td",[e._v("take the "),a("em",[e._v("Connection String")]),e._v(" from your Storage Account (under "),a("strong",[a("em",[e._v("Access Keys")])]),e._v(")")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("ImageProcessorOptions__StorageAccountConnectionString")])]),e._v(" "),a("td",[e._v("take the "),a("em",[e._v("Connection String")]),e._v(" from your Storage Account (under "),a("strong",[a("em",[e._v("Access Keys")])]),e._v(")")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("ImageProcessorOptions__ImageWidth")])]),e._v(" "),a("td",[e._v("100")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("📝 You should open the portal in a second tab in your browser, because you need to switch back and forth copying values from different locations.")])])]),e._v(" "),a("li",[a("p",[e._v("Save your settings. The Functions app will now restart to apply your changes.")])])]),e._v(" "),a("h2",{attrs:{id:"deploy-the-azure-function-to-resize-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-azure-function-to-resize-images"}},[e._v("#")]),e._v(" Deploy the Azure Function to resize images")]),e._v(" "),a("p",[e._v("Now it is time to deploy the Image Resizer Function App to Azure. Therefor, you need to open a new Visual Studio Code Workspace file. Please go to the folder "),a("code",[e._v("day2")]),e._v(" and run "),a("code",[e._v("code day2-breakout2.code-workspace")]),e._v(" from the command line. This will open the workspace dedicated to this second breakout challenge.")]),e._v(" "),a("p",[e._v("You will see the following folder structure:")]),e._v(" "),a("p",[a("img",{attrs:{src:o(537),alt:"Day2 Workspace Structure - Breakout 2",title:"bo2_code"}})]),e._v(" "),a("p",[e._v("You will see two more projects added to the workspace compared to "),a("code",[e._v("Breakout 1")]),e._v(" (the remaining folders are the same as in the previous breakout):")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Resources API")]),e._v(" - contains the backend logic for storing images for "),a("em",[e._v("contacts")]),e._v(" objects")]),e._v(" "),a("li",[a("strong",[e._v("Image Resizer Function")]),e._v(" - contains the Azure Function code to handle image resize operations")])]),e._v(" "),a("p",[e._v("To deploy the function follow these steps:")]),e._v(" "),a("ul",[a("li",[e._v("right-click on the "),a("code",[e._v("Image Resizer Function")]),e._v(' folder and click "Deploy to Function App..."')]),e._v(" "),a("li",[e._v("select the Azure Function you previously created as the deployment target and confirm the dialog")])]),e._v(" "),a("p",[e._v("The deployment of you function starts and after a few seconds, it is running in Azure.")]),e._v(" "),a("h2",{attrs:{id:"deploy-the-azure-web-app-providing-the-api-to-store-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-azure-web-app-providing-the-api-to-store-images"}},[e._v("#")]),e._v(" Deploy the Azure Web App providing the API to store images")]),e._v(" "),a("p",[e._v('We need to add another Azure Web App to host the "Resources API" of our SCM Contacts application:')]),e._v(" "),a("ul",[a("li",[e._v("Go to your resource group "),a("strong",[e._v("scm-breakout-rg")])]),e._v(" "),a("li",[e._v("Create an Azure Web App (you can choose to use the Portal or the Azure CLI: OS - "),a("strong",[e._v("Windows")]),e._v(", RuntimeStack - "),a("strong",[e._v(".NET Core 3.1 (LTS)")]),e._v(", Size - "),a("strong",[e._v("S1")]),e._v(", AppInsights is not needed at the moment). You can choose the same settings as for the Contacts API.")])]),e._v(" "),a("p",[e._v('When the deployment has finished, we also need to add a few settings. Open the Web App in the Portal and go to the "Configuration" view (under '),a("strong",[e._v("Settings")]),e._v("):")]),e._v(" "),a("ul",[a("li",[e._v("add the following parameters:\n"),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Value / Hints")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("ImageStoreOptions__StorageAccountConnectionString")])]),e._v(" "),a("td",[e._v("take the "),a("em",[e._v("Connection String")]),e._v(" from your Storage Account created in this Break Out session (under "),a("strong",[a("em",[e._v("Access Keys")])]),e._v(")")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("StorageQueueOptions__StorageAccountConnectionString")])]),e._v(" "),a("td",[e._v("take the "),a("em",[e._v("Connection String")]),e._v(" from your Storage Account created in this Break Out session (under "),a("strong",[a("em",[e._v("Access Keys")])]),e._v(")")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("ImageStoreOptions__ImageContainer")])]),e._v(" "),a("td",[e._v("rawimages")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("StorageQueueOptions__ImageContainer")])]),e._v(" "),a("td",[e._v("rawimages")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("ImageStoreOptions__ThumbnailContainer")])]),e._v(" "),a("td",[e._v("thumbnails")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("StorageQueueOptions__Queue")])]),e._v(" "),a("td",[e._v("thumbnails")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("StorageQueueOptions__ThumbnailContainer")])]),e._v(" "),a("td",[e._v("thumbnails")])])])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v('Now, go back to Visual Studio Code and "right-click deploy" the API from the '),a("code",[e._v("Resources API")]),e._v(" folder to the Azure Web App.")])]),e._v(" "),a("p",[e._v("Time for testing!")]),e._v(" "),a("h3",{attrs:{id:"test-with-you-local-single-page-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-with-you-local-single-page-application"}},[e._v("#")]),e._v(" Test with you local Single Page Application")]),e._v(" "),a("p",[e._v("When everything has been deployed to Azure:")]),e._v(" "),a("ul",[a("li",[e._v("Open the "),a("code",[e._v("settings.js")]),e._v(" file of your SPA (folder "),a("code",[e._v("Frontend")]),e._v(" --\x3e "),a("code",[e._v("public/settings")]),e._v(")")]),e._v(" "),a("li",[e._v("Adjust the "),a("code",[e._v("resourcesEndpoint")]),e._v(" property.")]),e._v(" "),a("li",[e._v("Make sure, that "),a("code",[e._v("endpoint")]),e._v(" points to the Contacts API in Azure.")]),e._v(" "),a("li",[e._v("Enter the value of your newly deployed Resources API for it, e.g. "),a("a",{attrs:{href:"https://scmimageresource.azurewebsites.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://scmimageresource.azurewebsites.net/"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v('Switch to the "Debug" view and start the Single Page Application (dropdown: '),a("strong",[e._v("Day2 - Launch Frontend")]),e._v(").")])]),e._v(" "),a("p",[e._v("To test everything we just set up, create a new "),a("em",[e._v("Contact")]),e._v(' and open the details of it afterwards. On the right side box, you should now see a button called "'),a("strong",[e._v("CHANGE AVATAR")]),e._v('".')]),e._v(" "),a("p",[a("img",{attrs:{src:o(538),alt:"browser_avatar",title:"browser_avatar"}})]),e._v(" "),a("p",[e._v("Upload a picture and "),a("strong",[e._v("save the Contact")]),e._v("!.")]),e._v(" "),a("h2",{attrs:{id:"host-the-single-page-application-in-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-the-single-page-application-in-azure"}},[e._v("#")]),e._v(" Host the Single Page Application in Azure")]),e._v(" "),a("p",[e._v("We still run the Single Page Application on our local machine. Time to switch to hosting in Azure. As mentioned before, we make use of the "),a("em",[e._v('"Static Website"')]),e._v(" feature of Azure Storage Accounts.")]),e._v(" "),a("p",[e._v("It's very simple to use:")]),e._v(" "),a("ul",[a("li",[e._v("Create a new Azure Storage Account")]),e._v(" "),a("li",[e._v("Go to "),a("strong",[e._v('"Static website"')]),e._v(" under "),a("strong",[e._v("Settings")]),e._v(" of your Azure Storage Account and enable it")]),e._v(" "),a("li",[e._v("Choose "),a("code",[e._v("index.html")]),e._v(" as "),a("em",[e._v("Index document name")]),e._v(" and "),a("em",[e._v("Error document path")])])]),e._v(" "),a("p",[a("img",{attrs:{src:o(539),alt:"portal_static_website",title:"portal_static_website"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("📝 When you save the settings, Azure will create a new container called "),a("strong",[e._v("$web")]),e._v(' where you can copy static (web) files to. Azure will serve the contents of this containers as "Static Website". See more on the '),a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Now open a command-line for the folder "),a("code",[e._v("Frontend")]),e._v('. Right-click on it and choose "Open in Integrated Terminal":')]),e._v(" "),a("p",[a("img",{attrs:{src:o(540),alt:"vscode_integrated_terminal",title:"vscode_integrated_terminal"}})]),e._v(" "),a("p",[e._v("In the shell, run the following command:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" scmfe@0.1.0 build /Users/yourname/dev/azure-developer-college/day2/apps/frontend/scmfe\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" vue-cli-service build\n\n   Building "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n\n DONE  Build complete. The dist directory is ready to be deployed.\n")])])]),a("p",[e._v("This starts a local build of the Vue.JS application, which puts all results/artifacts (the static website itself) into a "),a("code",[e._v("dist")]),e._v(" folder under "),a("code",[e._v("Frontend")]),e._v(". When the build has finished, right-click on that "),a("code",[e._v("dist")]),e._v(' folder and choose "Deploy to Static Website via Azure Storage" and select the correct storage account.')]),e._v(" "),a("p",[a("img",{attrs:{src:o(541),alt:"vscode_deploy_staticwebsite",title:"vscode_deploy_staticwebsite"}})]),e._v(" "),a("p",[e._v('When the deployment to Azure has finished, VS Code will show a popup where you can click on "Browse to website" to open your Vue.JS app running in Azure. You can also find the URL in the settings of the static website under '),a("strong",[e._v('"Primary Endpoint"')]),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"wrap-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-Up")]),e._v(" "),a("p",[e._v("🎉 "),a("strong",[a("em",[e._v("Congratulations")])]),e._v(" 🎉")]),e._v(" "),a("p",[e._v("You have just created your first modern, multi-service Azure-backed application. You made use of:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure AppServices"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-account-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage Accounts"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/queues/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Messaging (Azure Storage Queues)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serverless aka Azure Function Apps"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Static website hosting"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("All in combination with a modern Vue.JS frontend that is also working on mobile devices!")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/day2/challenges/04-challenge-messaging.html"}},[e._v("◀ Previous challenge")]),e._v(" | "),a("RouterLink",{attrs:{to:"/day2/"}},[e._v("🔼 Day 2")]),e._v(" | "),a("RouterLink",{attrs:{to:"/day2/challenges/06-challenge-bo-3.html"}},[e._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);