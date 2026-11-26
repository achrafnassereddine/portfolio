export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(200).send(`-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEawfz3xYJKwYBBAHaRw8BAQdA1fFbVA25sn69DK2Uhu2/RC6bO/KUeJb15Ocz
Rq6DEu20OEFjaHJhZiBOYXNzZXItRWRkaW5lIChvKSA8YWNocmFmbmFzc2VyZWRk
aW5lNkBnbWFpbC5jb20+iJYEExYKAD4WIQTBeRA8q0J8xhfrFM7amqac9RDBBwUC
awfz3wIbAwUJAeEzgAULCQgHAgYVCgkICwIEFgIDAQIeAQIXgAAKCRDamqac9RDB
B1d5AP0b67h6t7m9Fo146ngKglW+KmgUujdaMhSTnGZK45RMWwD/UVWF+M6UNf9h
Ov61eIpGDKJpapeusLL5znIetyCojwq4OARrB/PfEgorBgEEAZdVAQUBAQdAlWYX
SLhFtoW2oldUAiDvMyiKZbiMpuGSFOC5MfsN+AIDAQgHiH4EGBYKACYWIQTBeRA8
q0J8xhfrFM7amqac9RDBBwUCawfz3wIbDAUJAeEzgAAKCRDamqac9RDBByiEAQCa
m+RntTtiTWecaDz/FT1gMJepc80HrhxmO7HfWNeo7wD/QZjXOuWcDWMFxPqu2qCN
3I1cMMgvBalNc7HcEH1QSQk=
=vbbj
-----END PGP PUBLIC KEY BLOCK-----`);
}