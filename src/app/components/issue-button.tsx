"use client";

import fetcher from "@/utils/fetcher";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";

type Props = {
    claim: any
    label?: string
    isEnabled?: boolean
}

export default function IssueButton({ claim, label, isEnabled = true }: Props) {
    const router = useRouter()
    const { trigger } = useSWRMutation("/api/generate-issue-session", (url, { arg }: { arg: any }) => fetcher<{ session: { url: string } }>(url, {
        method: "POST",
        body: JSON.stringify(arg)
    }))

    const onIssue = async () => {
        const result = await trigger(claim)
        router.push(result.session.url)
    }

    return (<>
        <button type="button" className="gtw-btn" onClick={onIssue} disabled={!isEnabled}>{label ?? "Issue"}</button>
    </>)
}