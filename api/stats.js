export default async function handler(req, res) {
  try {
    const response = await fetch("https://yt.lemnoslife.com/noKey/channels?part=statistics&id=UCp5PhsJ-JF8-gfkM-iRIhEQ");
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erreur proxy", message: error.message });
  }
}
