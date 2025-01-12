import { Card, Flex, Text } from '@chakra-ui/react';

import Menu from '../layout/Menu';
import Footer from '../layout/Footer';
export const Home = () => {
  return (
    // <>
    //   <Flex
    //     flexDir='column'
    //     gap={8}
    //     p={8}
    //     maxW='90rem'
    //     mx='auto'
    //   >
    //     <Menu />
    //     <Flex
    //       gap={4}
    //       flexDir={{ base: 'column', md: 'row' }}
    //     >
    //       {/* seccion 1 */}
    //       <Card
    //         variant='outline'
    //         w='100% '
    //         textAlign='center'
    //         justifyContent='center'
    //       >
    //         <Flex
    //           flexDir='column'
    //           alignContent='center'
    //           p={4}
    //           gap='3rem'
    //         >
    //           <h1 fontSize={{ base: 15, md: 20 }}> Conectate con TRUE </h1>
    //           <Text fontSize={{ base: 15, md: 20 }}>
    //             ¡ Nuestra red Social Simple, disfruta !
    //           </Text>
    //         </Flex>
    //         {/* seccion 1 - formulario de registro */}
    //       </Card>
    //       <Card
    //         variant='outline'
    //         width='100%'
    //         height='30rem'
    //         display={{ base: 'none', md: 'block' }}
    //       >

    //       </Card>
    //     </Flex>

    //     <Footer />
    //   </Flex>
    // </>
    <>
      <Flex
        flexDir='column'
        gap={8}
        p={8}
        maxW='90rem'
        mx='auto'
      >
        <Menu />
        <Flex
          gap={4}
          flexDir={{ base: 'column', md: 'row' }}
        >
          {/* seccion 1 */}
          <Card
            variant='outline'
            w='100% '
            textAlign='center'
            justifyContent='center'
          >
            <Flex
              flexDir='column'
              alignContent='center'
              p={4}
              gap='3rem'
            >
              <h1 fontSize={{ base: 15, md: 20 }}> Conectate con TRUE </h1>
              <Text fontSize={{ base: 15, md: 20 }}>
                ¡ Nuestra red Social Simple, disfruta !
              </Text>
            </Flex>
            {/* seccion 1 - formulario de registro */}
          </Card>
          <Card
            variant='outline'
            width='100%'
            height='30rem'
            display={{ base: 'none', md: 'block' }}
          >

          </Card>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Home;
