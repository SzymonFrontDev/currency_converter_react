import React from "react";
import { Paragraph } from "./styled";

export const Result = ({ result }) => (
    <Paragraph>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </Paragraph>
)
