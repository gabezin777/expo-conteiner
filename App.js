import react from 'react';
import { ScrollView } from 'react-native';
import Titulo from './componentes/Titulo'; 
import Saudacao from './componentes/Saudacao';
import FotoPerfil from './componentes/FotoPerfil';
import CartaoUsuario from './componentes/CartaoUsuario';

export default function App(){
  return( 
    <ScrollView style={{padding:20}}>
      <Titulo />
      <Saudacao nome='Gabriel' />

      <FotoPerfil />
      <CartaoUsuario 
      nome='gabriel de oliveira'
      descricao='Progamador Mobile'
      img='perfil100'
      />      

       <FotoPerfil />
      <CartaoUsuario 
      nome='carlos'
      descricao='Departamento de TI'
      img='perfil103'
      />  

       <FotoPerfil />
      <CartaoUsuario 
      nome='jão'
      descricao='progamador'
      img='perfil104'
      />  

       <FotoPerfil />
      <CartaoUsuario 
      nome='julios'
      descricao='analista'
      img='perfil105'
      />  

       <FotoPerfil />
      <CartaoUsuario 
      nome='julia'
      descricao='analista de sistemas'
      img='perfil106'
      />  

       <FotoPerfil />
      <CartaoUsuario 
      nome='adriel'
      descricao='criador de conteudo'
      img='perfil107'
      />  -
      
    </ScrollView>
  )
}