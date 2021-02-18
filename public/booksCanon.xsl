<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

  <xsl:output doctype-system="about:legacy-compat" indent="yes" method="xml" omit-xml-declaration="no" />

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="da">
      <head>
        <title>booksCanon</title>
      </head>
      <body style="background-color: #f7f7f7;
				     margin: 50px;
				     font: 14px 'Lucida Grande', Helvetica, Arial, sans-serif;">
        <h1>Books</h1>
        <xsl:apply-templates />
      </body>
    </html>
  </xsl:template>

  <xsl:template match="booksCanon/book">
    <section style="
      background-color: #ffffff;
      padding: 20px;
      width: 40%;
      margin-bottom: 20px;">
      <xsl:apply-templates />
    </section>
  </xsl:template>

  <xsl:template match="booksCanon/book/title">
    <h2>
      <section style="
      text-decoration: underline;">
        <xsl:apply-templates />
      </section>
    </h2>
  </xsl:template>

  <xsl:template match="booksCanon/book/edition">
    <p>
      <b>Edition: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="booksCanon/book/authors/author">
    <p>
      <b>Author: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="booksCanon/book/publisher">
    <p>
      <b>Publisher: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="booksCanon/book/pages">
    <p>
      <b>Pages: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="booksCanon/book/isbn">
    <p>
      <b>ISBN: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="booksCanon/book/price">
    <p>
      <b>Price: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="booksCanon/book/currency">
    <p>
      <b>Currency: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

  <xsl:template match="booksCanon/book/comments">
    <p>
      <b>Comments: </b>
      <xsl:apply-templates />
    </p>
  </xsl:template>

</xsl:stylesheet>