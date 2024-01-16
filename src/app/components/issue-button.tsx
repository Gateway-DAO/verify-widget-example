"use client";

import fetcher from "@/utils/fetcher";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { IssueBody } from "../api/generate-issue-session/route";

type Props = {
    label?: string
    isEnabled?: boolean
} & IssueBody;

export default function IssueButton({ claim, owner, dataModel, label, isEnabled = true }: Props) {
    const router = useRouter()
    const { trigger, isMutating } = useSWRMutation("/api/generate-issue-session", (url, { arg }: { arg: any }) => fetcher<{ session: { url: string } }>(url, {
        method: "POST",
        body: JSON.stringify(arg)
    }))

    const onIssue = async () => {
        const result = await trigger({ claim, dataModel, owner })
        router.push(result.session.url)
    }

    return (<>
        <button type="button" className={["gtw-btn", (!isEnabled || isMutating) && "!opacity-50"].filter(Boolean).join(" ")} onClick={onIssue} disabled={!isEnabled || isMutating}>{label ?? "Issue"}
            {isMutating && <span className="animate-spin ml-2">🔄</span>}
        </button>
    </>)
}