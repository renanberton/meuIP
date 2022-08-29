import { useEffect, useState } from 'react';
import './style.scss';

type IpType = {
    query: string,
    country: string,
    regionName: string,
    city: string,
    timezone: string,
    isp: string,

}

export function Home() {
    const [ip, setIp] = useState<IpType>();

    useEffect(() => {
        function LoadCEP() {
            fetch('//ip-api.com/json')
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
                            Seu IP: {ip?.query}
                        </li>
                        <li>
                            Pais de origem: {ip?.country}
                        </li>
                        <li>
                            Cidade de Origem: {ip?.city}
                        </li>
                        <li>
                            Região: {ip?.regionName}
                        </li>
                        <li>
                            Operadora: {ip?.isp}
                        </li>
                        <li>
                            Furo horário: {ip?.timezone}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

