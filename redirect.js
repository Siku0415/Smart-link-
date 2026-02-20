export default function handler(req, res) {
    const { query, url } = req;

    const subid = query.sub_id_1 || "";
    const tg = `https://t.me/+GWd8pTzQcykyODFl?start=${subid}`;

    const html = `
    <html>
    <head>
        <meta http-equiv="refresh" content="1.5;url=${tg}">
        <title>Redirecting...</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body { 
                font-family: Arial; 
                text-align: center; 
                padding: 40px;
            }
        </style>
    </head>
    <body>
        <h2>Redirecting to Her Financial Journey…</h2>
        <p>Please wait…</p>
    </body>
    </html>
    `;

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
}
