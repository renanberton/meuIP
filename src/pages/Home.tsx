import { useEffect, useState } from 'react';
import './style.scss';

type IpType = {
    ip: string,
    country: string,
    region: string,
    city: string,
}

export function Home() {
    const [ip, setIp] = useState<IpType>();

    useEffect(() => {
        function LoadCEP() {
            fetch('https://ipwho.is/')
                .then(response => response.json())
                .then(data => setIp(data))

        }
        LoadCEP()
        /* Aqui chamamos a função que faz os fetchs, etc e depois retorna o HTML abaixo \/ */

    }, [ip])
    return (
        <div className="container">

            <div className='boxIp'>
                <div>
                    <h1>Meu IP</h1>
                    <ul>
                        <li>
                            Seu IP: {ip?.ip}
                        </li>
                        <li>
                            Pais de origem: {ip?.country}
                        </li>
                        <li>
                            Cidade de Origem: {ip?.city}
                        </li>
                        <li>
                            Região: {ip?.region}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )

}

