import React from 'react'
import { Dropdown,Menu,Image } from 'semantic-ui-react'

export default function SignedIn(signOut) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.hobisi.com/wp-content/uploads/2019/05/resim-nedir-turleri-ve-stilleri.jpg" />
                <Dropdown pointing="tpo left" text ="Kaan" >

                    <Dropdown.Menu>
                        <Dropdown.Item  text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

//onClick={signOut} basıldığında navideki  signOut fonksiyonunu çağır.