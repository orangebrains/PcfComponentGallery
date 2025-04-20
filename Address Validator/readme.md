# 🚀 Address Validation PCF Component

Welcome to **Address Validator**, a PowerApps Component Framework (PCF) component designed to enhance Dynamics 365 and Power Platform applications by providing a native-looking control to validate and select proper addresses.

## 🎯 Purpose
**Address Validator** is created to allow users to select only address that actually exist, without the risk of typing wrong addresses, or addresses that don't exist.

## 🔥 Features
- 🔎 **Look up address based on fuzzy search**
- 🗺️  **Possibility to display on a map**
- 🛰️ **Switch between road view or sattelite view**

## 🛠 Installation
### 👮‍♀️ Managed Solution
Download the managed solution from the corresponding folder and install into your environment.
Withing the solution, there is an environment variable which you need to update with your Azure Maps Subscription Key

**Important steps**
Once the solution is installed, and you have set your key, you need to do the following for every instance:
- Configure a field for the full address, for example on account Address 1: Name would be a good choice.
- Configure the latitude and longitude fields (Floating points are supported, so it works with most out-of-the-box fields).
- Other fields are optional but recommended. I.e. County for country code or a custom field, street 1 for the street and housenumber.

### ⚒️ Build it yourself.

This solution has no build-it-yourself optionality

## 🚀 How It Works
The component is bound to a set of address fields. Based on those, it can display on load the current location. Searching addresses and selecting them makes dirty changes on the form, so Power Platform is aware of any potential unsaved changes.

## ⚙️ Configuration
Address Validator allows customization via 1 PowerApps property:
- **Display Map**: Choose whether you want to see a map below the address input field or not

Within the control, if the map is selected to be shown, a user can change to sattelite view and back to road via the toggle.

### 🔎 Solution and Form Configuration example
On importing the solution, the Subscription key should be filled.

![Azure Maps key env var](https://github.com/user-attachments/assets/8a82b136-e39d-41d0-9329-df3b7468f27b)

To configure the address validator, there is a subset of actions to be configured per action which looks like the following:
### Display Map
![DisplayMapYesNo](https://github.com/user-attachments/assets/8064f9db-ee40-4442-bd5a-7ed1bef1d12f)

### Latitude, Longitude
![LatLonSetup](https://github.com/user-attachments/assets/8f7d1450-7bc9-4116-b8a3-ff5cb0c7585d)
 
Some examples:

#### Address Validator with map
![Control with map](https://github.com/user-attachments/assets/bea0fd31-1692-4803-bd0b-65b617744afa)

#### Address Validator without map
![Control without map](https://github.com/user-attachments/assets/be2820d5-5569-4b63-8003-2b5d0f7edbf5)

#### Address Validator in action

![Toggle Map view](https://github.com/user-attachments/assets/8936d2d8-e37c-45d1-89ee-3f6742181ebc)

![list popover](https://github.com/user-attachments/assets/ad34c309-4242-44a1-aae6-88f12c59cde4)

![state change](https://github.com/user-attachments/assets/2871a30f-0c13-4cc9-b7a7-8e460dc83349)


## 📢 Contribution
Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to improve this component.

## ⚠️ Disclaimer
This component is provided **as-is** without warranties or guarantees. Use it at your own risk. Always test thoroughly before deploying in a production environment.

## 🎉 Happy Coding!
Enhance your Dynamics 365 and Power Platform experience with Address Validator and make activity creation effortless!

# Want to support? 🍵☕

If you like this idea, you can keep momentum by [treating me to a coffee ;-)](https://buymeacoffee.com/ionavarga)



