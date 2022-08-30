import { useEffect, useState } from 'react';
import './style.scss';

type IpType = {
    query: string,
    country: string,
    region: string,
    city: string,
    lat: string,
    lon: string,
}



export function Home() {
    const zoom = 15;
    const [ip, setIp] = useState<IpType>();

    useEffect(() => {
        let url = "http://ip-api.com/json";

        fetch(url).then(res => res.json()).then(data => {
            setIp(data);
        })
    }, [])

    return (
        <div>
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
                                Região: {ip?.region}
                            </li>
                        </ul>
                    </div>
                    <iframe src={`https://maps.google.com/maps?q=@${ip?.lat},${ip?.lon}&z=${zoom}&output=embed`} />
                </div>
            </div>
        </div>
    )

}

