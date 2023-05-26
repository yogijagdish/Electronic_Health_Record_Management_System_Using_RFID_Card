#include <SPI.h>
#include <MFRC522.h>
#include <ESP8266WiFi.h>
#include <ThingSpeak.h>

#define SS_PIN 4   // D2
#define RST_PIN 5   // D1

WiFiClient client;

long myChannelNumber =  2153555;
const char myWriteAPIKey[] = "WPSEVP0QETX133A1";

MFRC522 mfrc522(SS_PIN, RST_PIN);  // Create MFRC522 instance

void setup() {
  Serial.begin(9600);   // Initialize serial communication
  SPI.begin();            // Initialize SPI bus
  mfrc522.PCD_Init(); 

  WiFi.begin("wrc7_fpkhr", "Kinachaiy0*");  // Replace with your Wi-Fi credentials

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }    // Initialize MFRC522

  Serial.println();
  Serial.println("NodeMCU is connected!");
  Serial.println(WiFi.localIP());

  ThingSpeak.begin(client);
  Serial.println("Show your card:");
}

void loop() {
  // Check for RFID card presence
  if (mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial()) {
    // Read the UID of the RFID card
    String cardUID = "";
    for (byte i = 0; i < mfrc522.uid.size; i++) {
      cardUID.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? "0" : ""));
      cardUID.concat(String(mfrc522.uid.uidByte[i], HEX));
    }
    Serial.println("Card UID: " + cardUID);
    

    if (cardUID == "e3a2610a") {
      // Access granted
      Serial.println("id number 1");
    ThingSpeak.writeField(myChannelNumber, 1, 1, myWriteAPIKey);
    } 
    else if(cardUID == "33e68197"){
      // Access denied
      Serial.println("id number 2");
       ThingSpeak.writeField(myChannelNumber, 1,400, myWriteAPIKey);
    }
    else if (cardUID == "1960c2b2"){
      // Access denied
      Serial.println("id number 3");
       ThingSpeak.writeField(myChannelNumber, 1,700, myWriteAPIKey);
    }
    else{
      // Access denied
      Serial.println("id number 4");
       ThingSpeak.writeField(myChannelNumber, 1,1000, myWriteAPIKey);
    }
  }
}

// void loop() {
//   // Your data to send
//   String dataToSend = "Hello, ThingSpeak!";
  
//   // Convert the string to a character array
//   char dataBuffer[dataToSend.length() + 1];
//   dataToSend.toCharArray(dataBuffer, sizeof(dataBuffer));

//   // Send data to ThingSpeak
//   ThingSpeak.begin(client);
//   ThingSpeak.writeField(myChannelNumber, 1, 202, myWriteAPIKey);

//   // Wait for some time before sending the next data
//   delay(15000);
// }
