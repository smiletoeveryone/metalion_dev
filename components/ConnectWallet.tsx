import React from "react";
import {
  Heading,
  HStack,
  chakra,
  Box,
  Flex,
  Button,
  Stack,
  VStack,  
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import { FaDiscord, FaPhoneAlt } from "react-icons/fa";



const ZH = {
  heroTitle: "Metalion Lodging Pass 宙獅大旅社 🎉",
  subtitle:
    "持有者享有海內外訂房5%折扣，金額無上限！\n加碼專屬抽獎，獨家優惠，等着你來！！\n\n（Beta 公測中）\n",
  connectWalletDesc: "",
  connectWalletDesc_asiayo: "", //😋️😋️😋️AsiaYo 特色旅宿\n\n 海內外特色旅宿/主題民宿 \n無上限最高6.5%現金回饋 (註.1)\n#包棟 #秘境 #好友出遊
  discordDesc: "\n\n追蹤最新活動消息，\n請加入 Metalion Discord\n\n\n ",
  // travelshowDesc: "Metalion Lodging Pass \n（宙獅大旅社）", //"宙獅計劃Metalion，\n搶先註冊！",
  // travelshowDesc: "😋️😋️😋️宙獅精選飯店\n\n海內外精選星級飯店\n無上限最高6.5%現金回饋 (註.1)\n即時房源，即訂即住.👍️👍️👍️", //"宙獅計劃Metalion，\n搶先註冊！",
  //redeemTitle: "連接錢包查看活動 🎉\n加入 Discord 抽獎慶祝 🎁",
  //hero2Title: "宙獅元宇宙開台慶\n6/6 活動正式開跑",
  //cta2Ttile: "加入Discord 一同狂歡 🎉",
  checkRedeemBtn: "",
  // connectWalletTitle_asiayo: "😍️😍️😍️ click here for visiting AsiaYo! 💝️💝️💝️",
  pleaseSignTitle: "錢包連結成功，請於錢包進行簽署完成登入",
  loginSuccessfulTitle: "登入成功",
  // btns text
  connectWalletTitle: "驗證身份，啓用訂房",
  connectWalletTitle_connected: "錢包已連結",
  joinDiscordTitle: "加入 Discord",
  qubicVisitorTitle: "領取 NFT", // "Metalion X Qubic",
  //signWalletTitle: "簽署綁定",
  enterPortalTitle: "",
  enterPortalTitle_asiayo: "AsiaYo 訂房", //😍️😍️😍️ 按這裏訪問Asia Yo取得您的專屬折扣❗️ 💝️💝️💝️
  //checkRedeemBtn_qubic: "登入/註冊 Qubic 錢包❗️❗️❗️", 
  noteDesc:"註:\n\n1. 宙獅大旅社NFT訂房使用期限為2023/12/31止.住房需於2024/12/31前入住完畢.\n2. 需透過宙獅大旅社網頁專屬連結至訂房網站. (重要)\n3. 入住完成後30天內於宙獅Discord提供收款帳號即可獲得現金回饋",
  connectWalletDesc_asiayo_empty:"",
  metalion_lodging:"Metalion Lodging Pass\n宙獅大旅社",
  liontravelTitle:"宙獅精選飯店 coming soon❗️",
  liontravel:"",
  auth_noteTitle:"請點選右上方[連結錢包]按鈕，以取得優惠權利❗️"
};

export default function ConnectWallet() {
  const { isAuth, connect } = useAuthContext();

  const i18n = ZH;

  const ConnectionStatus = () => {
  
    return <Unconnected />;
  };

  const Unconnected = () => (
    <Stack
      direction={["column"]}
      justifyContent={"center"}
      gap={5}
      color="white"
    >
      <Heading
        w="full"
        whiteSpace={{ base: "pre-wrap", sm: "normal" }}
        fontSize={{ base: "5xl", md: "4xl" }}
      >
        {i18n.heroTitle}
        
        {/*<chakra.img
            //className={styles.logo}
            src="/metalion_dev.jpg" ///next.svg
            alt="" //Next.js Logo
            width={850}
            height={637}
            //priority
          />
          */}
          
          
     
      </Heading>
      <chakra.span
        whiteSpace={{ base: "normal", sm: "pre-wrap" }}
        mt={6}
        display="block"
        fontSize={{ base: "lg", sm: "2xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color="white"
        mb={6}
      >
        {i18n.subtitle}   
        
        
        
        
            
        
        
          
          
      </chakra.span>  
      
      <VStack
          maxWidth={{ base: "200px", lg: "md" }}
          alignItems={{ base: "center", lg: "center" }}
          flex="1"
          spacing={10}
        >
          <Heading
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "2xl", lg: "3xl" }}
          >
            {i18n.connectWalletDesc}
          </Heading>
          
          
          <Box>
            {isAuth ? (
              <NextLink passHref href="">
                <Button
                  w={{ base: "100px, lg:220px" }}
                  //w="full"
                  leftIcon={<MdOutlineAccountBalanceWallet />}
                  display="inline-flex"
                  alignItems="center"
                  left="190px"
                  justifyContent="center"
                  py={6}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="lg"
                  color={"white"}
                  bg={"black"}
                  _hover={{
                    bg: "black",
                  }}
                >
                  {i18n.connectWalletTitle_connected}
                </Button>
              </NextLink>
            ) : (
              <Button
                //w={{ base: "50px, lg:220px" }}
                w="base:150px, lg:250px"
                leftIcon={<MdOutlineAccountBalanceWallet />}
                display="inline-flex"
                fontSize={{ base: "14px",lg: "24px" }}
                //alignItems="center"
                //left="190px"
                right="-210px"
                justifyContent="center"
                py={6}
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color="white"
                bg={"black"}
                _hover={{
                  bg: "black",
                }}
                // TODO Check connect type
                onClick={connect as () => Promise<void>}
              >
                {i18n.connectWalletTitle}
              </Button>
            )}
            

            <NextLink passHref href=""> 
              <Button
              
                mt={5}
                w={{ base: "full" }}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                py={6}
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color={"gray.600"}
                bg={""}
                colorScheme=""
                
                
              >
                {i18n.checkRedeemBtn}
              </Button>
            </NextLink>
          </Box>
        </VStack>
      
      
      
      
      
      
              
      <Stack
        pt={{ base: "10px", lg: "50px" }}
        direction={{ base: "column", lg: "row" }}
        justifyContent={["left", "center"]}
        gap={{ base: 5, lg: 80 }}
      >
        <VStack
          maxWidth={{ base: "full", lg: "md" }}
          alignItems={{ base: "left", lg: "center" }}
          flex="1"
          spacing={10}
        >
          <Heading
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "2xl", lg: "20px" }}
          >
          
            {i18n.connectWalletDesc_asiayo}
            
          </Heading>
          
          
          
             
                 
                             
          
          <Box>
            {/*isAuth ? (
              <NextLink passHref href="">
              
              <Button
                  w="full"
                  as={"a"}
                  target="_blank"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  py={6}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="lg"
                  color={"white"}
                  bg={""} //red.700
                  _hover={{
                    bg: "", //yellow.400
                  }}
                >
                  {i18n.enterPortalTitle_asiayo}
                </Button>
                
                
              
                </NextLink>
              
               ):
               
               (
              <Button
                mt={1}
                w={{ base: "md", lg:"1xl" }}
                leftIcon={<MdOutlineAccountBalanceWallet />}
                fontSize={{ base: "lg", sm: "2xl" }}
                alignItems="center"
                justifyContent="center"
                py={6}
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color="white"
                bg={"red.600"}
                _hover={{
                  bg: "red.900",
                }}
                // TODO Check connect type
                onClick={connect as () => Promise<void>}
                
                              >
                            
                {i18n.connectWalletTitle}
              </Button>
              )*/}
              
              {isAuth ? (
              <NextLink passHref href="https://asiayo.com/zh-tw/?aff_id=537"> 
              
              <Button
                  mt={1}
                  w="330px"
                  as={"a"}
                  target="_blank"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{ base: "18",lg: "24px" }}
                  py={6}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="lg"
                  color={"white"}
                  bg={"blue.500"}
                  _hover={{
                    bg: "blue.400",
                  }}
                >
                  {i18n.enterPortalTitle_asiayo}
                </Button>
                
              
                </NextLink>
              
               ):
               
               (
              <Button
                mt={5}
                w={{ base: "full" }}
                //leftIcon={<MdOutlineAccountBalanceWallet />}
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "3xl",lg: "10px" }}
                py={6} //default=6
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color="white"
                bg={""} //blue.600
                _hover={{
                  bg: "", //blue.700
                }}
                // TODO Check connect type
                //onClick={connect as () => Promise<void>}
                
                              >
                            
                {i18n.connectWalletDesc_asiayo_empty}
              </Button>
              
              )}
              
              <Heading
            mt={-10}
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "24px", lg: "24px" }}
          >
          
            {i18n.discordDesc}
          </Heading>
          
          <Button
            mt={-16}
            w={{ base: "80" }}
            leftIcon={<FaDiscord />}
            // w="full"
            as={"a"}
            target="_blank"
            href="https://discord.gg/metalion"
            // href="https://discord.gg/Muj6gwSX"
            rel="noreferrer"
            alignItems="center"
            justifyContent="center"
            fontSize={{ base: "24px",lg: "24px" }}
            py={6}
            border="solid transparent"
            fontWeight="bold"
            rounded="lg"
            color="white"
            bg="purple.600"
            _hover={{
              bg: "purple.700",
            }}
          >
          
            {i18n.joinDiscordTitle}
          </Button>
            
            

                          
              
             {/* <NextLink passHref href="https://wallet.qubic.app/home"> 
                                                                               
              <Button
                mt={5}
                w={{ base: "full" }}
                as={"a"}
                target="_blank"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "3xl",lg: "3xl" }}
                py={6}
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color={"gray.600"}
                bg={"yellow"}
                colorScheme="gray"
              >
                {i18n.checkRedeemBtn_qubic} 
              </Button>
            </NextLink> */}
          </Box>
        </VStack>
        <VStack
          maxWidth={{ base: "full", lg: "md" }}
          alignItems={{ base: "left", lg: "center" }}
          flex="1"
          spacing={10}
        >
        <Heading
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "2xl", lg: "20px" }}
          >
          
            {i18n.liontravel}
          </Heading>
          
          {isAuth ? (
              <NextLink passHref href="">
              
              <Button
                  mt={1}
                  w="330px"
                  as={"a"}
                  target="_blank"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{ base: "18",lg: "24px" }}
                  py={6}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="lg"
                  color={"white"}
                  bg={"gray.500"}
                  _hover={{
                    bg: "gray.400",
                  }}
                >
                  {i18n.liontravelTitle}
                </Button>
                
              
                </NextLink>
              
               ):
               
               (
              <Button
                mt={5}
                w={{ base: "full" }}
                //leftIcon={<MdOutlineAccountBalanceWallet />}
                alignItems="center"
                justifyContent="center"
                fontSize={{ base: "3xl",lg: "10px" }}
                py={6} //default=6
                border="solid transparent"
                fontWeight="bold"
                rounded="lg"
                color="white"
                bg={""} //blue.600
                _hover={{
                  bg: "", //blue.700
                }}
                // TODO Check connect type
                //onClick={connect as () => Promise<void>}
                
                              >
                            
                {i18n.connectWalletDesc_asiayo_empty}
              </Button>
              
              )}
              
          
          
          <Heading
            mt={-10}
            whiteSpace={{ base: "pre-wrap" }}
            fontSize={{ base: "24px", lg: "24px" }}
          >
            {i18n.metalion_lodging}
          </Heading>
          <Button
            w={{ base: "80" }}
            mt={-4}
            // leftIcon={<FaDiscord />}
            // w="full"
            as={"a"}
            target="_blank"
            href= "https://liontravel.qubic.market/"
            //"https://liontravel.qubic.market/products/147092"  
            //"https://forms.gle/XLJXEKZUGyj48Xi17"
            rel="noreferrer"
            alignItems="center"
            justifyContent="center"
            fontSize={{ base: "24px", lg: "24px" }}
            py={6}
            border="solid transparent"
            fontWeight="bold"            
            rounded="lg"
            color="black"
            bg="white"
            _hover={{
              bg: "gray",
            }}
          >
            {i18n.qubicVisitorTitle}
          </Button>
          
        </VStack>
      </Stack>
      <Box>
        <HStack mx="auto" mt="40px" justify={{ base: "left", sm: "center" }}>
          <FaPhoneAlt size="20px" />
          <Heading size="lg" display="inline-block">
            客服專線: 02-87939698
          </Heading>
        </HStack>
      </Box>
    </Stack>
  );

  return (
            /*<Image
            className={styles.logo}
            src="/metalion_dev.jpg" ///next.svg
            alt="" //Next.js Logo
            //width={2450}
            //height={337}
            //priority
          />*/
    <Flex
      p={{ base: "30px", md: 50 }}
      minH={"xl"}
      // w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full">
        <Box
          px={4}
          py={20}
          maxWidth="4xl"
          textAlign={{ base: "left", md: "center" }}
        >
          <ConnectionStatus />
        </Box>
      </Flex>
    </Flex>
  );
}
