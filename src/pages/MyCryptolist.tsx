import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonList,
    IonItemDivider,
    IonModal,
    IonTextarea,
    IonIcon,
    IonMenuButton
  } from '@ionic/react';
  import React, { useState, useEffect } from 'react';
  import './MyCryptoList.css'; // Import the CSS file
  
  
  const MyCryptoList: React.FC = () => {
    // State variables to manage cryptocurrencies
    const [cryptos, setCryptos] = useState<any[]>([]); // Array to store cryptocurrency data
    const [cryptoName, setCryptoName] = useState<string>(''); // Name of the cryptocurrency
    const [unitValue, setUnitValue] = useState<number>(0); // Value per unit of crypto
    const [totalUnits, setTotalUnits] = useState<number>(0); // Total number of units of the crypto
  
    // Function to load cryptocurrency data from local storage when the component mounts using the useEffect hook
    useEffect(() => {
      const storedCryptos = localStorage.getItem('cryptos');
      if (storedCryptos) {
        setCryptos(JSON.parse(storedCryptos));
      }
    }, []);
  
    // Function to add a new cryptocurrency to the list
    const handleAddCrypto = () => {
      // Validate input fields -- Error handling funct.
      if (!cryptoName || unitValue <= 0 || totalUnits <= 0) {
        alert('Please fill in all fields with valid values.');
        return;
      }
  
      // Calculate total value
      const totalValue = unitValue * totalUnits;
  
      // Check if totalValue is a valid number
      if (isNaN(totalValue) || !isFinite(totalValue)) {
        alert('Please enter valid values for Value per Unit and Total Units.');
        return;
      }
  
      // Create the new cryptocurrency object
      const newCrypto = {
        name: cryptoName,
        unitValue,
        totalUnits,
        totalValue,
      };
  
      // Update the list of cryptocurrencies
      setCryptos([...cryptos, newCrypto]);
  
      // Reset input fields
      setCryptoName('');
      setUnitValue(0);
      setTotalUnits(0);
    };
  
    // Function to delete a cryptocurrency from the list
    const handleDeleteCrypto = (index: number) => {
      const updatedCryptos = cryptos.filter((_, i) => i !== index);
      setCryptos(updatedCryptos);
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonMenuButton slot="start" />
            <IonTitle>My Crypto List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItemDivider>Add Crypto to Your List</IonItemDivider>
          <IonList>
            <IonItem>
              <IonInput type="text" label="Crypto Name" value={cryptoName} onIonChange={e => setCryptoName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type="number" label="Value per Unit" value={unitValue} onIonChange={e => setUnitValue(parseFloat(e.detail.value!))}></IonInput>
            </IonItem>
            <IonItem>
              <IonInput type="number"  label="Total Units" value={totalUnits} onIonChange={e => setTotalUnits(parseFloat(e.detail.value!))}></IonInput>
            </IonItem>
            <IonButton expand="block" onClick={handleAddCrypto}>Add Crypto</IonButton>
          </IonList>
          
          <IonItemDivider>
            <IonLabel  className="name">Name</IonLabel>
            <IonLabel  className="price">Price</IonLabel>
            <IonLabel  className="units">Units</IonLabel>
            <IonLabel  className="total">Total</IonLabel>
          </IonItemDivider>
          <IonList>
            {cryptos.map((crypto, index) => (
              <IonItem key={index}>
                <IonLabel>{crypto.name}</IonLabel>
                <IonLabel>{crypto.unitValue}</IonLabel>
                <IonLabel>{crypto.totalUnits}</IonLabel>
                <IonLabel>{crypto.totalValue}</IonLabel>
                {/* Button to delete cryptocurrency */}
                <IonButton onClick={() => handleDeleteCrypto(index)}>Delete</IonButton>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default MyCryptoList;
  