import { useState, React } from 'react';
import { CardColumns, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ContactCard from './ContactCard';
import LinkBar from '../LinkBar/LinkBar';

const Header1 = styled.h1`
   font-family: Arial;
   font-style: Bold;
   font-size: 3em;
   line-height: 1em;
   margin-left: 0.5em;
   margin-top: 60px;
   @media screen and (min-width: 800px) {
      margin-left: 318px;
   }
`;

const CardContainer = styled.div`
   display: flex;
   padding-bottom: 100px;
   @media screen and (min-width: 800px) {
      width: 349px;
      margin-top: 60px;
   }
`;

const InputContainer = styled.div`
   display: flex;
   margin-left: 32px;
   margin-top: 10px;
   width: 100%;
   @media screen and (min-width: 800px) {
      width: 349px;
      margin-left: 318px;
   }
`;

const StyledCardGroup = styled(CardColumns)`
   margin: 0px 32px 0px 32px;
   font-size: 12px;
   display: flex;
   flex-direction: column;
   flex-basis: 100%;
`;

const StyledField = styled(Form.Control)`
   width: 100%;
   margin: 0px 32px 10px 5px;
   @media screen and (min-width: 800px) {
      width: 349px;
   }
`;

const StyledLabel = styled(Form.Label)`
   margin: 0px 32px 5px 32px;
   @media screen and (min-width: 800px) {
      margin-left: 318px;
   }
`;

const ContactInfo = [
   {
      name: 'John Doe',
      email: 'jd123@gmail.com',
      phone: '+18052348910',
   },
   {
      name: 'Jane Doe',
      email: 'janedoe123@gmail.com',
      phone: '+18051234567',
   },
   {
      name: 'Alice Doe',
      email: 'janedoe123@gmail.com',
      phone: '+18051234567',
   },
   {
      name: 'Michael Smith',
      email: 'janedoe123@gmail.com',
      phone: '+18051234567',
   },
];

const PageDiv = styled.div`
   @media screen and (min-width: 800px) {
      display: flex;
      flex-direction: row;
   }
`;

const styledForm = styled(Form.Row)`
   @media screen and (min-width: 800px) {
      margin-left: 318px;
   }
`;

export default () => {
   const [keyword, setKeyword] = useState('');
   const myData = ContactInfo.sort((a, b) =>
      a.name.localeCompare(b.name)
   ).filter(
      (contact) =>
         !keyword || contact.name.toLowerCase().includes(keyword.toLowerCase())
   );

   const onChangeKeyword = (e) => {
      setKeyword(e.target.value);
   };

   return (
      <div>
         <PageDiv>
            <leftDiv>
               <Header1>Directory</Header1>
               <Form>
                  <styledForm>
                     <StyledLabel>Search by name</StyledLabel>
                     <InputContainer>
                        <FaSearch size={25} />
                        <StyledField
                           class="text-center"
                           required
                           type="text"
                           defaultValue={keyword}
                           onChange={onChangeKeyword}
                        />
                     </InputContainer>
                  </styledForm>
               </Form>
            </leftDiv>
            <CardContainer>
               <StyledCardGroup>
                  {myData &&
                     myData.length > 0 &&
                     myData.map((item) => <ContactCard ContactInfo={item} />)}
               </StyledCardGroup>
            </CardContainer>
         </PageDiv>
         <LinkBar />
      </div>
   );
};
