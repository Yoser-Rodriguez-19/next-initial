import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import NextLink from "next/link"
import Image from "next/image"


export const Navbar = () => {

    const { theme } = useTheme()

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 20px',
        width: '100%',
        backgroundColor: theme?.colors.gray900.value,
    }}>

        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Icono de pokemon"
            width={70}
            height={70}
        />
        <NextLink href="/" passHref>
          <Link>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okémon</Text>
          </Link>
        </NextLink>
        <Spacer css={{ flex: 1 }}/>

        <NextLink href="/favoritos" passHref>
          <Link>
            <Text color="white" >Favoritos</Text>
          </Link>
        </NextLink>
        
    </div>
  )
}
