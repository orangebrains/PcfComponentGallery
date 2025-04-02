# 🚀 SmartButtons PCF Component

Welcome to **SmartButtons**, a PowerApps Component Framework (PCF) component designed to enhance Dynamics 365 and Power Platform applications by providing quick-action buttons for common activities like email, phone calls, tasks, and more.

## 🎯 Purpose
SmartButtons improves the user experience by offering an intuitive and streamlined way to create activities directly from records in Dynamics 365. This reduces navigation time and increases productivity for users working with customer interactions.

## 🔥 Features
- 📩 **Send an Email**
- 📞 **Register a Phone Call**
- ✅ **Generate a Task**
- 📅 **Schedule an Appointment**
- ✉️ **Write a Letter**
- 📠 **Send a Fax**
- 🎨 **Customizable button styles and visibility**

## 🛠 Installation
### 👮‍♀️ Managed Solution
Download the managed solution from the corresponding folder and install into your environment.

### ⚒️ Build it yourself.

1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/smartbuttons-pcf.git
   ```
2. Navigate to the project folder:
   ```sh
   cd smartbuttons-pcf
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Build the component:
   ```sh
   npm run build
   ```
5. Deploy the component using the PowerApps CLI:
   ```sh
   pac pcf push
   ```

## 🚀 How It Works
The component retrieves the current record’s entity name and ID from the URL, then dynamically creates and opens activity forms based on user actions.

## ⚙️ Configuration
SmartButtons allows customization via PowerApps properties:
- **Button Appearance**: Choose between primary, subtle, or outline styles.
- **Button Shape**: Rounded, circular, or square.
- **Visibility Controls**: Enable or disable specific buttons per user needs.

### 🔎 Form Configuration example

To configure how every button should appear, there is a subset of actions to be configured per action which looks like the following:
![image](https://github.com/user-attachments/assets/d319d2d0-301f-4bb5-88e3-eb196caba46f)

For every button, you need to configure if they
- Are visisble
- If they should appear rounded, circular or Squared
- If they should be subtle, primary or outlined.

Some examples:

#### Rounded Primary Button
![image](https://github.com/user-attachments/assets/dc4eb105-97fc-4b3f-9b19-51ed39663f03)
#### Circular Primary Button
![image](https://github.com/user-attachments/assets/8464f88e-6515-4daa-8979-297fc3b649fb)
#### Square Primary Button
![image](https://github.com/user-attachments/assets/9348a9f0-3ba7-4df1-84df-2efce1568d0d)
#### Rounded Outline Button
![image](https://github.com/user-attachments/assets/4b0bb8b0-ce20-419d-a970-13bf83ec2ae2)

## 📢 Contribution
Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to improve this component.

## ⚠️ Disclaimer
This component is provided **as-is** without warranties or guarantees. Use it at your own risk. Always test thoroughly before deploying in a production environment.

## 🎉 Happy Coding!
Enhance your Dynamics 365 experience with SmartButtons and make activity creation effortless!

