// C++ code

using namespace std;

const int buttonPin = 13;
const int switcherAll = 12;

// Подключаются напрямую к светодиоду через резистор в 150 ом
const int ledPin1 = 0;
const int ledPin2 = 1;
const int ledPin3 = 2;

// Подключатся через переключатель и резистор
const int ledPinLower = 3;
const int ledPinMiddle = 4;
const int ledPinUpper = 5;

void setup()
{
  // Объявляем всякое для Ардуино, чтобы нормалные сигналы давал
  pinMode(ledPinLower, OUTPUT);
  pinMode(ledPinMiddle, OUTPUT);
  pinMode(ledPinUpper, OUTPUT);
  
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
  
  pinMode(buttonPin, INPUT);
  pinMode(switcherAll, INPUT);
}

void loop()
{
  if(digitalRead(buttonPin)){
    // Выключаем диоды от переключателей
    digitalWrite(ledPinLower, LOW);
    digitalWrite(ledPinMiddle, LOW);
    digitalWrite(ledPinUpper, LOW);
    delay(1000);
    
    // Включаем Диоды с задержкой
  	digitalWrite(ledPin1, HIGH);
    delay(500); // Wait for 1000 millisecond(s)
    digitalWrite(ledPin2, HIGH);
    delay(500); // Wait for 1000 millisecond(s)
    digitalWrite(ledPin3, HIGH);
    delay(3000); // Вот здесь втроем горят три секунды
  
    
  	// Выключаем Диоды одновременно
    // На всякий выключаю все диоды что есть иначе перегорают
    digitalWrite(ledPinLower, LOW);
    digitalWrite(ledPin1, LOW);
    //delay(500);
  	digitalWrite(ledPinMiddle, LOW);
    digitalWrite(ledPin2, LOW);
  	//delay(500);
    digitalWrite(ledPinUpper, LOW);
    digitalWrite(ledPin3, LOW);
  	delay(1000);
  }
  
  // Если аварийный переключатель включен, то выключает лампочки
  // Но никак не влияет ни на что если еще выполняется программа кнопки
  // Можно было бы попробовать реализовать, чтобы и на кнопку реагрировало, но в TinkerCad нет библиотеки Thread
  if(digitalRead(switcherAll)){
    digitalWrite(ledPinLower, LOW);
    digitalWrite(ledPin1, LOW);
    digitalWrite(ledPinMiddle, LOW);
    digitalWrite(ledPin2, LOW);
    digitalWrite(ledPinUpper, LOW);
    digitalWrite(ledPin3, LOW);
    
  }else{ // Если переключатель выключен, то все горит
    digitalWrite(ledPinLower, HIGH);
    digitalWrite(ledPinMiddle, HIGH);
    digitalWrite(ledPinUpper, HIGH);
  }
  
}