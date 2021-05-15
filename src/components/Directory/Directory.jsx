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
`;

const CardContainer = styled.div`
   display: flex;
`;

const InputContainer = styled.div`
   display: flex;
   margin-left: 32px;
   margin-top: 10px;
   width: 100%;
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
`;

const StyledLabel = styled(Form.Label)`
   margin: 0px 32px 5px 32px;
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
         <Header1>Directory</Header1>
         <Form>
            <Form.Row>
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
            </Form.Row>
         </Form>
         <CardContainer>
            <StyledCardGroup>
               {myData &&
                  myData.length > 0 &&
                  myData.map((item) => <ContactCard ContactInfo={item} />)}
            </StyledCardGroup>
         </CardContainer>
         <LinkBar />
      </div>
   );
};
