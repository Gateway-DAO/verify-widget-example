"use client";
import { useState } from "react"

import IssueButton from "./issue-button"


export default function IssueForm() {
    const [gatewayId, setGatewayId] = useState("")
    const isEnabled = gatewayId?.length > 0;

    return (
        <div>
            <label htmlFor="gatewayId">Gateway ID</label>
            <input type="text" id="gatewayId" value={gatewayId} onChange={(e) => setGatewayId(e.target.value)} className="ml-4 mb-4 text-black" />
            <div className={
                !isEnabled ? "opacity-50" : undefined
            }>

                <IssueButton
                    isEnabled={isEnabled}
                    claim={{
                        age: 18,
                        owner: gatewayId
                    }} label='Issue an overage PDA' />
            </div>
        </div>
    )
}