import { useEffect, useState } from 'react';
import './style.scss';

type IpType = {
    ip: string,
    country: string,
    region: string,
    city: string,
    latitude: string,
    longitude: string,
}



export function Home() {
    const zoom = 15;
    const [ip, setIp] = useState<IpType>();

    useEffect(() => {
        let url = "https://ipwho.is/";

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
                    <iframe src={`https://maps.google.com/maps?q=@${ip?.latitude},${ip?.longitude}&z=${zoom}&output=embed`} />
                </div>
            </div>
        </div>
    )

}

