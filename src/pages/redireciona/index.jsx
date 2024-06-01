import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Redireciona() {
    const router = useRouter()
    useEffect(() => {
        router.replace("https://api.whatsapp.com/send?phone=5511942750050")
    })
    return <>Redirecionando...</>;
}

//https://api.whatsapp.com/send?phone=5511942750050