import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import Titulo from './componentes/Titulo';
import Saudacao from './componentes/Saudacao';
import FotoPerfil from './componentes/FotoPerfil';
import CartaoUsuario from './componentes/CartaoUsuario';
import estilos from './style/style';


  
const usuarios = [
    { nome: 'gabriel de oliveira', descricao: 'Progamador Mobile' },

    { nome: 'carlos', descricao: 'Departamento de TI' },

    { nome: 'jão', descricao: 'progamador' },

    { nome: 'julios', descricao: 'analista' },

    { nome: 'julia', descricao: 'analista de sistemas' },

    { nome: 'adriel', descricao: 'criador de conteudo' },

    { nome: 'Cecília', descricao: 'Especialista em DevOps' },

    { nome: 'Helena', descricao: 'Cybersecurity' },

    { nome: 'Alice', descricao: 'Engenheira de Sistemas Embarcados' },

    { nome: 'Laura', descricao: 'Engenheiro de Dados' },

    { nome: 'Maite', descricao: 'Engenheiro de Inteligência Artificial' },

    { nome: 'Sophia', descricao: 'Cientista de Dados (Data Scientist)' },

    { nome: 'Aurora', descricao: 'Desenvolvedor de Software (Programador)' },

    { nome: 'Miguel', descricao: 'Desenvolvedor Back-end' },

    { nome: 'Gael', descricao: 'Desenvolvedor Front-end' },

    { nome: 'Ravi', descricao: 'Desenvolvedor Full-stack' },

    { nome: 'Theo', descricao: 'Engenheiro de Software' },

    { nome: 'Arthur', descricao: 'Desenvolvedor de Jogos (Game Developer)' },

    { nome: 'Davi', descricao: 'Engenheiro de Software' },

    { nome: 'Valentina', descricao: 'Arquiteta de Soluções em Cloud' },

    { nome: 'Heitor', descricao: 'Especialista em Redes' },

    { nome: 'Maria', descricao: 'Gerente de Projetos de TI' },

    { nome: 'Bernardo', descricao: 'Tester (QA)' },

    { nome: 'Isabella', descricao: 'UX/UI Designer' },

    { nome: 'Lorenzo', descricao: 'Especialista em Blockchain' },

    { nome: 'Luiza', descricao: 'Analista de Business Intelligence (BI)' },

    { nome: 'Pedro', descricao: 'Administrador de Banco de Dados (DBA)' },

    { nome: 'Júlia', descricao: 'Desenvolvedora IoT (Internet das Coisas)' },

    { nome: 'Lucas', descricao: 'Consultor SAP' },

    { nome: 'Manuela', descricao: 'Especialista em Machine Learning' },

    { nome: 'Joaquim', descricao: 'Analista de Suporte Técnico' },

    { nome: 'Vitória', descricao: 'Engenheira de Confiabilidade do Site (SRE)' },

    { nome: 'Alexandre', descricao: 'Desenvolvedor RPA (Automação de Processos Robóticos)' },

    { nome: 'Lívia', descricao: 'Tech Lead' },

    { nome: 'Enzo', descricao: 'Especialista em Cloud Security' },

    { nome: 'Camila', descricao: 'Scrum Master' },

    { nome: 'Guilherme', descricao: 'Analista de Requisitos de Software' },

    { nome: 'Melissa', descricao: 'Engenheira de Telecomunicações' },

    { nome: 'Felipe', descricao: 'Especialista em Big Data' },

    { nome: 'Clara', descricao: 'Desenvolvedora VR/AR (Realidade Virtual/Aumentada)' },

    { nome: 'Rafael', descricao: 'Arquiteto de Informação' },

    { nome: 'Heloísa', descricao: 'Especialista em SEO' },

    { nome: 'Daniel', descricao: 'Desenvolvedor de Sistemas Legados' },

    { nome: 'Alícia', descricao: 'Product Owner' },

    { nome: 'Bruno', descricao: 'Analista de Sistemas Embarcados' },

    { nome: 'Rebeca', descricao: 'Estrategista Digital' },

    { nome: 'Ricardo', descricao: 'Engenheiro de Microserviços' },

    { nome: 'Bianca', descricao: 'Especialista em Automação de Testes' },

    { nome: 'Thiago', descricao: 'Cientista de Pesquisa em IA' },

    { nome: 'Gabriela', descricao: 'Especialista em Gestão de Crises Cibernéticas' },

    { nome: 'Murilo', descricao: 'Cientista de Dados em Linguagem Natural (NLP)' },

    { nome: 'Evelyn', descricao: 'Engenheira de Sistemas de Informação' },

    { nome: 'Gustavo', descricao: 'Analista de Cibersegurança' },

    { nome: 'Mariana', descricao: 'Product Manager (Gerente de Produto)' },

    { nome: 'Rodrigo', descricao: 'Arquiteto de Software' },

    { nome: 'Sofia', descricao: 'Especialista em Testes de Performance' },

    { nome: 'Vitor', descricao: 'Engenheiro de Redes e Telecom' },
   

    { nome: 'Isadora', descricao: 'Analista de BI e Data Mining' },
  ];
export default function App() {
  return (
    <SafeAreaView style={estilos.safeArea}>

      <ScrollView contentContainerStyle={estilos.scrollContent}>

        <View style={estilos.header}>
          <Titulo />
          <Saudacao nome='Gabriel' />
        </View>

        {usuarios.map((usuario, idx) => (
          <View key={idx} style={estilos.usuarioBox}>
            <FotoPerfil img={'perfil00'} />
            <CartaoUsuario
              nome={usuario.nome}
              descricao={usuario.descricao}
            />
          </View>
        ))}

      </ScrollView>

    </SafeAreaView>
  );
}


// Estilos estão agora centralizados em `style/style.js`