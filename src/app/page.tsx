import IssueButton from './components/issue-button'
import IssueForm from './components/issue-form'
import VerifyButton from './components/verify-button'

export default function Home() {
  return (
    <main className="p-24">
      <p>Success scenario (TestNet)</p>
      <div className="flex flex-row gap-2">

        <IssueForm />
        <VerifyButton templateId='cb555205-af3f-43cc-ab37-19a68f39e286' label='Verify if you are overage' />
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
