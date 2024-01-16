"use client";

import { useState } from 'react';
import IssueButton from './components/issue-button'
import VerifyButton from './components/verify-button'

export default function Home() {

  const [gatewayId, setGatewayId] = useState("")
  const isEnabled = gatewayId?.length > 0;

  return (
    <main className="p-24">
      <p>Success scenario (TestNet)</p>
      <div className="flex flex-col gap-2 items-start">
        <div >
          <label htmlFor="gatewayId">Gateway ID</label>
          <input type="text" id="gatewayId" value={gatewayId} onChange={(e) => setGatewayId(e.target.value)} className="ml-4 mb-4 text-black" />
        </div>

        <IssueButton
          isEnabled={isEnabled}
          dataModel="ceaf29b1-9c27-4241-bee4-05dee6bd8ce6"
          owner={gatewayId}
          claim={{
            age: 18,
          }} label='Issue an overage PDA' />
        <IssueButton
          isEnabled={isEnabled}
          owner={gatewayId}
          dataModel="1310ffbd-7786-4b28-92b1-4b653bfe2be4"
          claim={{
            title: 'grandmaster',
          }} label='Issue a grandmaster title' />

        <VerifyButton templateId='cb555205-af3f-43cc-ab37-19a68f39e286' label='Verify if you are overage' />
        <VerifyButton templateId="caab4db4-0a8a-45a3-8470-f7b7e4e7f864" label='Verify if you are overage grandmaster' />
      </div>
      <hr className='my-10' />
      <div className="flex flex-col gap-2 items-start">
        <p>Error scenarios</p>
        <VerifyButton templateId='729f0cf9-613f-4a37-8dab-1e77ea2c65b4' label='Verify if you are underage' />
        <VerifyButton templateId='68100f01-4a48-4ea4-a7b3-2edf63cdd70a' label='Verify if you are a overage wizard' />
        <VerifyButton templateId='867e23de-c06d-4188-b8f9-bc65aa6652f2' label='Verify if you are a wizard' />
      </div>
    </main>
  )
}
