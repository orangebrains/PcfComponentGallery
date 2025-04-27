# 🚀 Azure Storage Blob Explorer – PCF Component

Welcome to **Azure Storage Blob Explorer**, a PowerApps Component Framework (PCF) component designed to bring a full-featured file management experience into your Dynamics 365 and Power Platform apps using **Azure Blob Storage** — a robust alternative to SharePoint document libraries.

## 🎯 Purpose

**Blob Explorer** empowers makers and users with a native-like interface to **upload, explore, organize, and manage files** stored in Azure Blob Storage — all from within the model-driven app experience.

## 🔥 Features

- 📁 **Full directory structure support**: Create and navigate folders just like a file explorer  
- 🔄 **Multi-file upload**: Select and upload multiple files at once  
- 🖱️ **Drag and drop upload**: Seamless user experience to drop files right into the app  
- ❌ **Delete files or folders**: Clean up what’s not needed directly from the UI  
- 📥 **Generate file download links**: Enable quick and secure access to stored files and let users download files without opening Azure Blob Storage 
- 🔃 **Sort by name, or dates**: Easily locate what you’re looking for  
- 💾 **Built-in Azure Blob integration**: No need for SharePoint or OneDrive

## 🛠 Installation

### 📦 Managed Solution

Download the managed solution from the corresponding folder and install it into your environment.  
You'll need to **set your Azure Storage Account information** via environment variables included in the solution.

**Installation Steps**:


1. **Azure**
   1. Create a storage account with public access.
      ![step1](https://github.com/user-attachments/assets/a610cf7b-8e5c-400a-9a36-aed34f7f361a)
   2. Create a SAS Key
      ![step2](https://github.com/user-attachments/assets/0d24f0c0-4273-45f8-aaae-d0fa9945e0c0)
   3. Note down the key for later
      ![step4](https://github.com/user-attachments/assets/b85b83e0-6ede-4044-905c-2f94275d853d)
   4. Configure the CORS so Power Platform can access all methods. the methods and headers should allow all for this component, in the allowed origins, you can configure your env.crmx.dynamics.com URI's.
      ![step4](https://github.com/user-attachments/assets/efb8691f-d2f6-4628-a803-292b451deb81)
   5. If you haven't done so yet, go to the data explorer and create a container. Note the name for later as well
      ![step5](https://github.com/user-attachments/assets/0aab8c27-e8ba-4503-abc3-8ae4a21144ab)
      ![step6](https://github.com/user-attachments/assets/c2f51d98-b815-46b3-b9ad-9b737e8ad071)
2. **Power Platform**
   1. Import the managed solution and fill in the generated sas toke, the name of the container and the storage account
      ![step01](https://github.com/user-attachments/assets/93298866-33a2-42a6-88a8-dcc95afa7e5d)
   2. Add the component to the form on the entities you want by setting up a subgrid.
      ![step1](https://github.com/user-attachments/assets/b1e36ab0-cdd3-48a8-889e-2c34d6d78daf)
   3. Find the component in the component explorer and add it to the form.
      ![step2](https://github.com/user-attachments/assets/b7154245-aae9-41c4-9a2d-ad1a9d6539d2)
      ![step3](https://github.com/user-attachments/assets/c1698f0b-75c7-46e1-8c45-a8bef0ced476)
      ![step4](https://github.com/user-attachments/assets/03971ef4-e47b-42ec-a9b4-cda9cd9196e1)

### ⚒️ Build It Yourself

This solution currently does **not support custom builds**. Please use the provided managed solution.

## 🚀 How It Works

Once configured, **Blob Explorer** connects to the specified Azure Storage container and displays its contents. Users can interact with files and folders via a modern UI that mimics familiar file browsers.

- Drag files directly into the window  
- Use the buttons for upload, deletion, or creation of files/directories
- Click folders to navigate  
- Click on the actions to download

## ⚙️ Configuration

Download the managed solution and install it in your environment.  
After installation, configure the environment variables:

- **Storage Account Name**  
- **SAS Key**  
- **Container Name**

## 🖼️ Example Screenshots

### Main UI  
![MainUI](https://github.com/user-attachments/assets/041333ad-04ab-45cb-9b6d-243b33c884f6)

### Uploading Files via Drag 'n Drop
![DragDrop](https://github.com/user-attachments/assets/563e4fa6-2f9f-412b-9dd2-3abe57b85884)

### Sorting Options  
![Sorting](https://github.com/user-attachments/assets/be375e5d-4378-454b-9bbf-88ecb394a8bc)

### Toasts
![ToastCreation](https://github.com/user-attachments/assets/17d211a4-00fb-4113-98f2-2537448f5d68)
![DownloadToast](https://github.com/user-attachments/assets/536d4888-2e77-44fa-b5db-42449817067c)

### Navigation via clickable breadcrumbs
![Breadcrumb Navigation](https://github.com/user-attachments/assets/d0c2d3d4-8f67-4445-b066-d7c2c9a1b483)

### Actions
![RenameFile](https://github.com/user-attachments/assets/a1660f27-4023-4a84-a6c8-984fe29f5fa6)
![Sorting](https://github.com/user-attachments/assets/5c641d76-63b3-4212-9fa9-b64c7f0b8d88)


## 📢 Contribution

Contributions and suggestions are welcome! Feel free to open an issue or submit a pull request.

## ⚠️ Disclaimer

This component is provided **as-is** without warranties. Use it at your own risk and test thoroughly before deploying into production.

## ☁️ Powered By Azure

This solution utilizes [Azure Blob Storage](https://azure.microsoft.com/en-us/products/storage/blobs/) for all file operations.

## 🎉 Happy Building!

Transform your document experience and ditch the SharePoint dependency — all with Azure-native speed and control.

## Want to support? 🍵☕

If this component saves you time or simplifies your life, consider [buying me a coffee ☕](https://buymeacoffee.com/ionavarga)
