import {
  Button,
  ButtonGroup,
  Card,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useToast,
} from '@chakra-ui/react';
import Footer from '../layout/Footer';
import Menu from '../layout/Menu';
import { useState, useEffect } from 'react';
import axios from 'axios';

// regex
const REGEX_EMAIL =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const REGEX_NAME = /^[A-Z][a-z]*[ ][A-Z][a-z]*$/;
const REGEX_PASS = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{8,15}$/;
export const Register = () => {
  const [name, setName] = useState('');
  const [nameValidation, setNameValidation] = useState(false);

  const [lastname, setLastname] = useState('');
  const [lastnameValidation, setLastnameValidation] = useState(false);

  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);

  // const [bio, setBio] = useState('');
  const [nick, setNick] = useState('');

  const toast = useToast();
  const handleNameInput = ({ target }) => {
    setName(target.value);    
    console.log(target.value);
  };
  const handleApellidoInput = ({ target }) => {
    setLastname(target.value);
    
  };
  const handleNickInput = ({ target }) => {
    setNick(target.value);
  };
  const handleEmailInput = ({ target }) => {
    setEmail(target.value);
    
  };
  const handleBiografia = ({ target }) => {
    setBio(target.value);
  };
  const handlePasswordInput = ({ target }) => {
    setPassword(target.value);
    console.log(target.value);
   
  };
  useEffect(()=>{
    setNameValidation(REGEX_NAME.test(name));
  },[name])

  useEffect(() => {
    setLastnameValidation(REGEX_NAME.test(lastname));
  }, [lastname]);

  useEffect(()=>{
    setEmailValidation(REGEX_EMAIL.test(email));
  },[email])

  useEffect(()=>{
     setPasswordValidation(REGEX_PASS.test(password));
  },[password])
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name, lastname, nick,bio, email, password);

  // };

  const handleNewUser = async () => {
    try {
      const { data } = await axios.post('/api/user/register',{name,lastname,nick,email,password});
      // console.log('datos enviados ', data);
      toast({
        title: 'Registro',
        position:'top',        
        status:'success',
        description: data,       
        duration: 5000,
        isClosable: true,
      })
      
      
    } catch (error) {
      console.log('error en server', error);
      toast({
        title: 'Error al registrar',
        position:'top',        
        status: 'error',
        description: error.response.data.error,       
        duration: 5000,
        isClosable: true,
      });
    }
    setName('');
      setLastname('');
      setNick('');
      // setBio('');
      setEmail('');
      setPassword('');
  };

  return (
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
          w='100%'
          textAlign='justify'
          justifyContent='center'
          p={{ base: 3, md: 4, lg: 5 }}
          bg='gray.50'
          borderRadius='lg'
          boxShadow='lg'
          border='1px solid'
          borderColor='gray.200'
        >
          <Flex
            justifyContent={{
              base: 'center',
              md: 'center',
              lg: 'center',
              xl: 'center',
            }}
          >
            <Heading
              m={{ base: '1rem', md: '1rem', lg: '1.2rem', xl: '1.5rem' }}
            >
              Register
            </Heading>
          </Flex>
          <FormControl isRequired>
            <FormControl isInvalid={!nameValidation && name}>
              <Flex
                flexDir='row'
                marginBottom='1rem'
              >
                <FormLabel>Nombre</FormLabel>
                <Input
                  onChange={handleNameInput}
                  type='text'
                  placeholder='Nombre'
                  value={name}
                  autoComplete='off'
                  required
                />
              </Flex>

              {nameValidation ? (
                ''
              ) : (
                <FormHelperText
                  color='red'
                  border='0.5px solid red'
                  margin='0.5rem'
                  padding='1rem'
                >
                  <p>
                    {' '}
                    Debe comenzar con mayuscula tanto el nombre como apellido
                  </p>
                  <p>
                    1.- Primer caracter en Mayuscula del nombre seguido el resto
                    del nombre en minuscula
                  </p>
                  <p>
                    2.- Primer caracter en Mayuscula deL apellido seguido el
                    resto del nombre en minuscula Merwil Vegas
                  </p>
                </FormHelperText>
              )}
            </FormControl>

            <FormControl isInvalid={!lastnameValidation && lastname}>
              <Flex
                flexDir='row'
                marginBottom='1rem'
              >
                <FormLabel>Apellido</FormLabel>
                <Input
                  onChange={handleApellidoInput}
                  type='text'
                  placeholder='Apellido'
                  value={lastname}
                  autoComplete='off'
                  required
                />
              </Flex>

              {lastnameValidation ? (
                ''
              ) : (
                <FormHelperText
                  color='red'
                  border='0.5px solid red'
                  margin='0.5rem'
                  padding='1rem'
                >
                  <p>
                    {' '}
                    Debe comenzar con mayuscula tanto el nombre como apellido
                  </p>
                  <p>
                    1.- Primer caracter en Mayuscula del nombre seguido el resto
                    del nombre en minuscula
                  </p>
                  <p>
                    2.- Primer caracter en Mayuscula deL apellido seguido el
                    resto del nombre en minuscula Merwil Vegas
                  </p>
                </FormHelperText>
              )}
              <Flex
                flexDir='row'
                marginBottom='1rem'
              >
                <FormLabel>Nick</FormLabel>
                <Input
                  onChange={handleNickInput}
                  type='text'
                  placeholder='Nombre'
                  value={nick}
                  autoComplete='off'
                  required
                />
              </Flex>              
            </FormControl>

            <FormControl isInvalid={!emailValidation && email}>
              <Flex
                flexDir='row'
                marginBottom='1rem'
              >
                <FormLabel flexDir='column'>Email</FormLabel>
                <Input
                  onChange={handleEmailInput}
                  type='email'
                  placeholder='Correo'
                  autoComplete='off'
                  value={email}
                />
              </Flex>
              {emailValidation ? (
                ''
              ) : (
                <FormHelperText
                  color='red'
                  border='0.5px solid red'
                  margin='0.5rem'
                  padding='1rem'
                >
                  Debe ser un correo valido
                </FormHelperText>
              )}
            </FormControl>

            <FormControl isInvalid={!passwordValidation && password}>
              <Flex
                flexDir='row'
                marginBottom='1rem'
              >
                <FormLabel>Contraseña</FormLabel>
                <Input
                  onChange={handlePasswordInput}
                  type='password'
                  placeholder='Contraseña'
                  autoComplete='off'
                  value={password}
                />
              </Flex>
              {passwordValidation ? (
                ''
              ) : (
                <FormHelperText
                  color='red'
                  border='0.5px solid red'
                  margin='0.5rem'
                  padding='1rem'
                >
                  <p>
                    Debe contener al menos una mayuscula, una minuscula, un
                    numero y un caracter especial{' '}
                  </p>
                  <p>1.- Contiene al menos una letra mayúscula ([A-Z]). </p>
                  <p>2.- Contiene al menos una letra minúscula ([a-z]). </p>
                  <p>3.- Contiene al menos un dígito . </p>
                  <p>4.- No tiene espacios en blanco. </p>
                  <p>
                    5.- Contiene al menos un carácter especial que no sea letra
                    ni dígito .{' '}
                  </p>
                  <p>6.- Tiene una longitud total entre 8 y 15 caracteres. </p>
                </FormHelperText>
              )}
            </FormControl>
          </FormControl>

          <Flex
            justifyContent={{
              base: 'center',
              md: 'center',
              lg: 'center',
              xl: 'center',
            }}
          >
            <ButtonGroup
              m={{ base: '1rem', md: '1rem', lg: '1.2rem', xl: '1.5rem' }}
            >
              <Button
                variant='ghost'
                // onClick={handleShow}
              >
                Ingresar
              </Button>
              <Button
                isDisabled={
                  !nameValidation ||
                  !lastnameValidation ||
                  !nick ||
                  !emailValidation ||
                  !passwordValidation
                }
                colorScheme='green'
                onClick={handleNewUser}
              >
                Register
              </Button>
            </ButtonGroup>
          </Flex>
        </Card>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Register;
