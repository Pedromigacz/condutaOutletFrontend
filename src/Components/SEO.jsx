import React from 'react';
import Helmet from 'react-helmet'

// List of properties: title, description, image, type, url
const Seo = ({ title, description, image, url }) => (
        <Helmet defer={false}>
        {/* General tags */}
        <title>{title ? title : `CONDUTAOutlet`}</title>
        <meta name="description" content={description ? description : `O melhor outlet da internet disponível pra você no conforto da sua casa`} />
        <meta name="image" content={image ? image : `https://admin.condutaoutlet.com/uploads/SEO_Default_Thumb_7d7b50ee28.png`} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title ? title : `Conduta Outlet`} />
        <meta property="og:description" content={description ? description : `O melhor outlet da internet disponível pra você no conforto da sua casa`} />
        <meta property="og:image" content={image ? image : `https://admin.condutaoutlet.com/uploads/SEO_Default_Thumb_7d7b50ee28.png`} />
        <meta property="fb:app_id" content={`505598600792235`} />
        <meta name="facebook-domain-verification" content="kfuumisk9amyat2duaulk6lkmsafmf" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title ? title : `Conduta Outlet`} />
        <meta name="twitter:description" content={description ? description : `O melhor outlet da internet disponível pra você no conforto da sua casa`} />
        <meta name="twitter:image" content={image ? image : `https://admin.condutaoutlet.com/uploads/SEO_Default_Thumb_7d7b50ee28.png`} />
      </Helmet>
)
 
export default Seo;