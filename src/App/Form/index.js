import React, { useState } from "react";
import { Result } from "./Result";
import { Header, Span, Input, Select, Button, Paragraph, Loading, Failure, } from "./styled";

import { UseRatesData } from "./UseRatesData";

export const Form = () => {
    const [currency, setCurrency] = useState();
    const [amount, setAmount] = useState("");

    const [result, setResult] = useState();
    const ratesData = UseRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency]

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


    return (
        <form onSubmit={onSubmit}>
            <Header>
                Przelicznik walut
            </Header>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Sekunda...🕑<br />Ładuję kursy walut z Europejskiego Bnku Centralnego
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Hmm... Coś poszło nie tak. Sprawdź, czy masz połączenie z internetem
                        </Failure>
                    ) : (
                        <>
                            <p>
                                <label>
                                    <Span>
                                        Kwota w zł*:
                                    </Span>
                                    <Input
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        placeholder="wpisz kwotę w zł"
                                        type="number"
                                        required
                                        step="0.01"
                                    />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <Span>
                                        Waluta:
                                    </Span>
                                    <Select
                                        
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </Select>
                                </label>
                            </p>
                            <p>
                                <Button>Przelicz!</Button>
                            </p>

                            <Paragraph>
                             Kursy walut pobierane są z Europejskiego Banku Centralnego.
                            </Paragraph>

                            <Result result={result} />
                        </>
                    )
                )}
        </form>
    );
};