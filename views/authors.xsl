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

  <xsl:template match="authors/author">
    <section style="
      background-color: #ffffff;
      padding: 20px;
      width: 40%;
      margin-bottom: 20px;">
      <xsl:apply-templates />
    </section>
  </xsl:template>

  <xsl:template match="authors/author">
    <h2>
      <section style="
      text-decoration: underline;">
        <xsl:apply-templates />
      </section>
    </h2>
  </xsl:template>

  <xsl:template match="authors/author/firtsname">
    <p>
      <b>Firstname:</b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authors/author/lastname">
    <p>
      <b>Lastname: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authors/author/birthyear">
    <p>
      <b>Birthyear: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authors/author/deatyear">
    <p>
      <b>Deathyear: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authors/author/birthplace">
    <p>
      <b>Birthplace: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authors/author/country">
    <p>
      <b>Country: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authors/author/language">
    <p>
      <b>Language:</b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="authors/author/bio">
    <p>
      <b>Bio: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

</xsl:stylesheet>