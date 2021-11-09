import 'package:flutter/material.dart';
import 'package:propertylisting/screens/error.dart';
import 'package:propertylisting/screens/home.dart';

class Menu extends StatefulWidget {
  Menu({Key? key}) : super(key: key);

  @override
  _MenuState createState() => _MenuState();
}

class _MenuState extends State<Menu> {
  List _listTab = ["Home", "Schedule", "About Us", "Contacts"];
  int activeTab = 0;
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        for (var i = 0; i < _listTab.length; i++)
          SizedBox(
            child: Padding(
              padding: const EdgeInsets.only(top: 10.0, left: 5, right: 5),
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: TextButton(
                    onPressed: () {
                      setState(() {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) =>
                                    (activeTab == 0) ? Home() : ErrorPage()));
                        activeTab = i;
                      });
                    },
                    child: Column(
                      children: [
                        Text(
                          _listTab[i],
                          style: TextStyle(
                              color: (activeTab == i)
                                  ? Colors.greenAccent
                                  : Colors.yellow,
                              fontSize: 20,
                              fontWeight: FontWeight.w500),
                        ),
                        Padding(
                          padding: const EdgeInsets.all(0.0),
                          child: (activeTab == i)
                              ? Container(
                                  color: Colors.red,
                                  height: 2,
                                  width: 30,
                                  constraints: BoxConstraints())
                              : SizedBox(),
                        )
                      ],
                    )),
              ),
            ),
          ),
      ],
    );
  }
}
