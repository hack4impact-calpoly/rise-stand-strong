import { useState, React } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaAlignLeft } from 'react-icons/fa';

const Header2 = styled.h2`
   font-family: Arial;
   font-weight: bold;
   font-size: 18px;
   line-height: 25px;
   margin-top: 10px;
   display: flex;
   flex-direction: column;
`;
const InputContainer = styled.div`
   display: flex;
   margin: 10px 0px 0px 32px;
   width: 100%;
`;
const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin: 10px 0px 0px 32px;
   width: 75%;
`;
const PageContainer = styled.div`
   background: #e5e5e5;
   background-size: cover;
   height: auto;
   width: 100%;
`;
const StyledField = styled(Form.Control)`
   width: 100%;
   margin-top: 10px;
   border: none;
   background-color: #e5e5e5;
   border-bottom: 2px solid #c0c0c0;
   font-size: 30px;
`;
const StyledField2 = styled(Form.Control)`
   width: 100%;
   margin: 10px 0px 0px 20px;
   border: 2px solid #c4c4c4;
`;
const ButtonContainer = styled.div`
   text-align: right;
   margin: 15px 32px 0px 0px;
`;
const StyledButton = styled(Button)`
   background-color: rgba(174, 76, 51, 1);
`;

export default () => {
   const [title, setTitle] = useState('');
   const [hyperlink, setHyperlink] = useState('');
   const [content, setContent] = useState('');

   return (
      <PageContainer>
         <ButtonContainer>
            <StyledButton>Review</StyledButton>
         </ButtonContainer>
         <Form>
            <Form.Row>
               <FormContainer>
                  <StyledField
                     class="text-center"
                     required
                     type="text"
                     defaultValue={title}
                     onChange={(e) => {
                        setTitle(e.target.value);
                     }}
                     size="lg"
                     placeholder="Announcement Title"
                  />
                  <InputContainer>
                     <Header2>
                        Link <FaExternalLinkAlt />
                     </Header2>
                     <StyledField2
                        class="text-center"
                        required
                        type="text"
                        defaultValue={hyperlink}
                        onChange={(e) => {
                           setHyperlink(e.target.value);
                        }}
                        size="lg"
                        placeholder="Hyperlink (optional)"
                     />
                  </InputContainer>
                  <InputContainer>
                     <Header2>
                        Body <FaAlignLeft />
                     </Header2>
                     <StyledField2
                        class="text-center"
                        required
                        type="text-area"
                        defaultValue={content}
                        onChange={(e) => {
                           setContent(e.target.value);
                        }}
                        as="textarea"
                        rows={7}
                        placeholder="Write the announcement here..."
                     />
                  </InputContainer>
               </FormContainer>
            </Form.Row>
         </Form>
      </PageContainer>
   );
};
