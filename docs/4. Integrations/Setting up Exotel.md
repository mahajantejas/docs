

This is for you if:
You are struggling to acquire users for your chatbot due to challenges with users clicking the link or users not typing the keyword and want to ease the friction of them starting chatbot flows easily.
If you are operating your WhatsApp chatbot on Glific and have an Exotel number.

Setting up on Exotel
After logging in, make sure you have a number for the state where you expect most calls from.

Go to address book and create 2 lists – success and failure (success is for those whose missed call returned a response from Glific server successfully and failure for where it fails)


Go to App bazaar in the menu and create a new app


Proceed to Edit the app and select and drop into the selection box the component called “Passthrough”


When you drop it in place, you will see a new box opening up like below. Paste the link in this format – https://api.xxx.tides.coloredcow.com/webhook/exotel/optin where xxx is your org’s name. For example: https://api.staging.tides.coloredcow.com/webhook/exotel/optin

In the “In response” section, drag list manager in both boxes. Click on the list manager for “Once URL returns OK” and in the box which opens next, select the list for successful calls and in the section called “next” below, drag and drop Hangup.

In the previous card, click on the list manager under the head “If the URL returns anything else” and in the box which opens, select the list for all failed calls. In the Next header, drag and drop Hangup.

Select save. This completes the setup on Exotel side.



Setting up on Glific

You need to be an admin to get this access.

Login and go to flows and identify the flow your Exotel missed call should start. Select “Edit” to open the next screen

In the URL, note down the Flow ID as highlighted. Click on configure to make sure you have done the next 2 steps.


Start the flow with the Card for “Update Contact”. See next step to configure it.

In the drop down “Select what to update”, Select “Settings” and in the box below type “optin”. This will set the opt-in flag to true in WhatsApp. This is essential for the next step. Without this, no HSM template can be sent.

Via Gupshup create a marketing template with a button. FB seems to only approve marketing messages as of now – maybe it is due to the increased revenue this type of message offers it. This button can be anything. The button will send a message from the user’s side after the flow has been started, so that the bot can actually send messages to the user.

Map this message like this after the Optin message as shown in Steps 5 and 6 above. To create this – Select “send a message” in the dropdown, and then click on WhatsApp tab in the top right of the card and configure as show in the second image in this step – you have to select the template you just got approved in Gupshup.


Save the flow and go to Settings screen. Select Edit in the Exotel box as shown in the screen below. Remember, only admins can do this.


Set “is Active” to true. Enter the Glific Flow ID you noted in Step 3 above. Set direction of call to “Inbound” and write your Exotel number in the last box and save.


This completes your Exotel setup and linkage of Exotel to the bot.


A trick with your mobile number
On the mobile with your Chatbot number, activate unconditional call forwarding to the Exotel number. This way, your user can call the chatbot number and they will see their chatbot responding to them on WhatsApp.



Best practices:
Test the missed call function thoroughly. Best way to do this is to use mobiles from different carriers, and prepaid and postpaid services.
Monitor the “failed calls” list weekly and contact those whose missed call failed.
If you have a prepaid number for the chatbot, set a calendar reminder to recharge 2 days in advance. If the balance expires, and then you recharge, the call forwarding is broken. In this case, you need to disable call forwarding on your mobile to Exotel and then re-enable after 5 minutes. All missed calls in this downtime are lost.

Typical Costs (this can change and is provided as an estimate for you to budget and plan expenses):
Exotel charges Missed call at Rs 0.3
WhatsApp sends marketing template messages at Rs 0.7


Related Blogs:

Reap Benefit has experimented with Exotel for their onboarding and got good results. You can read more about it here.

