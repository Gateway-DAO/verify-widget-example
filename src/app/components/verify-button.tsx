"use client";

import fetcher from "@/utils/fetcher";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";

type Props = {
    templateId: string;
    label?: string
}

export default function VerifyButton({ label, templateId }: Props) {

    const router = useRouter()
    const { trigger } = useSWRMutation("/api/generate-verify-session", (url, { arg }: { arg: any }) => fetcher<{ session: { url: string } }>(url, {
        method: "POST",
        body: JSON.stringify(arg)
    }))

    const onVerify = async () => {
        const result = await trigger({ templateId })
        router.push(result.session.url)
    }



    return (<>
        <button type="button" className="gtw-btn" onClick={onVerify}>{label ?? "Verify"}</button>
    </>)
}