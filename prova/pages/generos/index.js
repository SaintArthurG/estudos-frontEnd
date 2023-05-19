import React from 'react'
import { Pagina } from '@/Components/Pagina'
import apiAnime from '@/services/apiAnime'

const index = (props) => {
    const anime = props.anime
    return (
        <>
            <Pagina titulo="Gêneros">
                    <ul>
                        {anime.map(item => (
                            <div>
                           <li>{item.name} ({item.count}) </li>
                           </div>
                        ))}
                    </ul>
            </Pagina>
        </>
    )
}

export default index

export async function getServerSideProps(context) {
    const resultado = await apiAnime.get("/genres/anime")
    const anime = resultado.data.data

    return {
        props: { anime },
    }
}
