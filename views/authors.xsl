<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

  <xsl:output doctype-system="about:legacy-compat" indent="yes" method="xml" omit-xml-declaration="no" />

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="da">
      <head>
        <title>Authors</title>
      </head>
      <body style="background-color: #f7f7f7;
				     margin: 50px;
				     font: 14px 'Lucida Grande', Helvetica, Arial, sans-serif;">
        <h1>Authors</h1>
        <xsl:apply-templates />
      </body>
    </html>
  </xsl:template>

  <xsl:template match="authorList/author">
    <section style="
      background-color: #ffffff;
      padding: 20px;
      width: 40%;
      margin-bottom: 20px;">
      <xsl:apply-templates />
    </section>
  </xsl:template>

  <xsl:template match="authorList/author/authorname">
    <h2>
      <section style="
      text-decoration: underline;">
        <xsl:apply-templates />
      </section>
    </h2>
  </xsl:template>

  <xsl:template match="authorList/author/birthyear">
    <p>
      <b>Birthyear: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authorList/author/deathyear">
    <p>
      <b>Deathyear: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authorList/author/birthplace">
    <p>
      <b>Birthplace: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authorList/author/country">
    <p>
      <b>Country: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authorList/author/language">
    <p>
      <b>Language:</b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authorList/author/bio">
    <p>
      <b>Bio: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

</xsl:stylesheet>