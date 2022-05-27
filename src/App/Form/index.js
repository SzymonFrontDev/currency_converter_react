import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Header, Span, Input, Select, Button, Paragraph } from "./styled";

export const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies
            .find(({ short }) => short === currency)
            .rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
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
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </Select>
                </label>
            </p>
            <p>
                <Button>Przelicz!</Button>
            </p>

            <Paragraph>
                Kursy pochodzą ze strony internetowyKantor.pl z dnia 23.05.2022
            </Paragraph>

            <Result result={result} />
        </form>
    );
};