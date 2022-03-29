import React from "react";

function CurrentBalance() {
  const [balance, setBalance] = React.useState(0);
  const getBalance = async () => {
    try {
      const response = await fetch("http://localhost:5000/movements/balance");
      const jsonData = await response.json();
      setBalance(jsonData);
      console.log(jsonData);
    } catch (e) {
      console.error(e.message);
    }
  };

  // Makes a fetch request tou our REST api everytime this is component is rendered
  React.useEffect(() => {
    getBalance();
  }, []);

  return (
    <div>
      <h2>{balance <= 0 ? `-$${Math.abs(balance)}` : `$${balance}`}</h2>
    </div>
  );
}

export default CurrentBalance;
