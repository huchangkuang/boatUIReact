export const basicUseCode = `import React, {FC} from 'react';

export const Demo: FC = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#C5E99B',
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#8FBC94',
  };

  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#519157',
  };

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    lineHeight: '120px',
    backgroundColor: '#C5E99B',
  };
  return (
    <>
      <Layout style={{ marginBottom: 32}}>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>

      <Layout style={{ marginBottom: 32}}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Aside style={siderStyle}>Aside</Aside>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>

      <Layout style={{ marginBottom: 32}}>
        <Aside style={siderStyle}>Aside</Aside>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </>
  );
};`;
