import 'package:flutter/material.dart';
import 'package:propertylisting/screens/home.dart';

class ErrorPage extends StatefulWidget {
  ErrorPage({Key? key}) : super(key: key);

  @override
  _ErrorPageState createState() => _ErrorPageState();
}

class _ErrorPageState extends State<ErrorPage> {
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      body: Container(
        color: Colors.greenAccent,
        child: Padding(
          padding: EdgeInsets.only(left: size.width * 0.2),
          child: Container(
            width: size.width,
            height: size.height,
            decoration: BoxDecoration(
                image: DecorationImage(
                    image: AssetImage("images/cs.jpg"), fit: BoxFit.cover)),
            child: Column(
              children: [
                Padding(
                  padding: EdgeInsets.only(top: size.height / 2, left: 20),
                  child: Container(
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text(
                            "Error,construction in progress",
                            style: TextStyle(color: Colors.white, fontSize: 20),
                          )
                        ]),
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(top: 5, left: 20),
                  child: Container(
                    decoration: BoxDecoration(
                        // color: Colors.orange,
                        borderRadius: BorderRadius.circular(20)),
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Container(
                            decoration: BoxDecoration(
                              color: Colors.orange,
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: TextButton(
                              child: Text(
                                "Home",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 30,
                                ),
                              ),
                              onPressed: () {
                                Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) => Home()));
                              },
                            ),
                          )
                        ]),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
