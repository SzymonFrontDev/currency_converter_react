import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Header, Label, Input, Select, Button, Paragraph } from "./styled"

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

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
                    <Label>
                        Kwota w zł*:
                    </Label>
                    <Input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placecholder="wpisz kwotę w zł"
                        type="number"
                        required
                        step="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <Label>
                        Waluta:
                    </Label>
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