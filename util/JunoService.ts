interface JunoProps {
    cardNumber: string;
    holderName: string;
    securityCode: string;
    expirationMonth: string;
    expirationYear: string;
  }
  
  const JunoService = {
    execute(card: JunoProps): Promise<string> {
      // chave primeiro parametro
      let checkout = new DirectCheckout('7E18E1B054E1BE08E8EEA1AECD6D8B4C91D712E2405EF9F66BF626238A991C30', false);
      let cardData = card;
  
      return new Promise((resolve, reject) => {
        checkout.getCardHash(cardData, 
          (data) => resolve(data), 
          (error) => reject(error)
        );
      });
    }
  }
  
  export default JunoService;